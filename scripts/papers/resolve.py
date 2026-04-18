#!/usr/bin/env python3
"""
Resolve each unique sha256 fingerprint to a DOI using a four-tier strategy:

    1. Filename pattern (e.g. s41467-018-04467-3.pdf -> 10.1038/s41467-018-04467-3)
    2. Page-1 regex on `pdftotext` output
    3. CrossRef title search using the largest-font line on page 1
    4. Claude Sonnet 4.6 tiebreak when CrossRef returns ambiguous matches

Reads:  papers/staging/fingerprints.jsonl
Writes: papers/staging/resolution.jsonl   (one row per unique sha256)

Resolved rows have {sha256, doi, confidence, strategy}. Unresolved rows have
{sha256, doi: null, candidates: [...], reason}.
"""

from __future__ import annotations

import json
import os
import re
import sys
import time
from collections import defaultdict
from dataclasses import dataclass
from pathlib import Path
from typing import Any

REPO_ROOT = Path(__file__).resolve().parents[2]
PAPERS_ROOT = Path(os.environ.get("PAPERS_ROOT", REPO_ROOT / "papers"))
STAGING = PAPERS_ROOT / "staging"

DOI_RE = re.compile(r"\b(10\.\d{4,9}/[-._;()/:A-Za-z0-9]+)", re.IGNORECASE)
DOI_FILENAME_RE = re.compile(
    r"(?:^|[/_-])(s\d{5}-\d{3}-\d{5}-\d|[a-z]+\d+-\d+-\d+)\.(pdf|PDF)$"
)


@dataclass
class Resolution:
    sha256: str
    doi: str | None
    confidence: float
    strategy: str
    candidates: list[dict[str, Any]]
    reason: str


def load_fingerprints(path: Path) -> dict[str, list[dict[str, Any]]]:
    """Group fingerprints by sha256. The first one is used as the representative
    PDF for resolution."""
    by_sha: dict[str, list[dict[str, Any]]] = defaultdict(list)
    with path.open() as f:
        for line in f:
            row = json.loads(line)
            by_sha[row["sha256"]].append(row)
    return by_sha


def pdftotext_page1(pdf_path: Path) -> str:
    """Extract page 1 plain text. Prefers PyMuPDF; falls back to pdftotext CLI."""
    try:
        import fitz  # type: ignore
        doc = fitz.open(str(pdf_path))
        text = doc[0].get_text("text") if doc.page_count else ""
        doc.close()
        return text
    except Exception:
        try:
            import subprocess
            result = subprocess.run(
                ["pdftotext", "-l", "1", str(pdf_path), "-"],
                capture_output=True, text=True, timeout=30,
            )
            return result.stdout
        except Exception:
            return ""


def title_from_pdf(pdf_path: Path) -> str | None:
    """Largest font line on page 1, capped at 250 chars."""
    try:
        import fitz  # type: ignore
        doc = fitz.open(str(pdf_path))
        if not doc.page_count:
            return None
        spans: list[tuple[float, str]] = []
        for block in doc[0].get_text("dict")["blocks"]:
            for line in block.get("lines", []):
                for span in line.get("spans", []):
                    text = span.get("text", "").strip()
                    if len(text) >= 10:
                        spans.append((span["size"], text))
        doc.close()
        if not spans:
            return None
        spans.sort(key=lambda x: -x[0])
        return spans[0][1][:250]
    except Exception:
        return None


def crossref_search(query: str, rows: int = 5) -> list[dict[str, Any]]:
    """Throttled CrossRef title query."""
    import requests
    try:
        time.sleep(0.1)  # be nice to the public endpoint
        r = requests.get(
            "https://api.crossref.org/works",
            params={"query.title": query, "rows": rows},
            timeout=15,
            headers={"User-Agent": "MESS-Parameters/0.2 (mailto:research@messai.io)"},
        )
        r.raise_for_status()
        return r.json().get("message", {}).get("items", [])
    except Exception as e:
        print(f"  [warn] CrossRef error: {e}", file=sys.stderr)
        return []


def crossref_lookup_doi(doi: str) -> dict[str, Any] | None:
    import requests
    try:
        time.sleep(0.1)
        r = requests.get(
            f"https://api.crossref.org/works/{doi}",
            timeout=15,
            headers={"User-Agent": "MESS-Parameters/0.2 (mailto:research@messai.io)"},
        )
        if r.status_code == 200:
            return r.json().get("message")
    except Exception:
        pass
    return None


def doi_from_filename(rel_path: str) -> str | None:
    """Some PDFs are named with a DOI suffix; resolve via CrossRef."""
    base = Path(rel_path).stem
    cand = base.replace("_", "-")
    if not re.match(r"^[a-z]+\d+", cand, re.IGNORECASE):
        return None
    if crossref_lookup_doi(f"10.1038/{cand}"):
        return f"10.1038/{cand}"
    return None


def doi_from_text(text: str) -> str | None:
    m = DOI_RE.search(text)
    if not m:
        return None
    doi = m.group(1).rstrip(".,);")
    return doi


def claude_tiebreak(text: str, candidates: list[dict[str, Any]]) -> tuple[str | None, float]:
    """Use Claude Sonnet 4.6 to choose between ambiguous CrossRef candidates.
    Returns (doi or None, confidence in 0..1)."""
    if not candidates or not os.environ.get("ANTHROPIC_API_KEY"):
        return None, 0.0
    try:
        import anthropic
    except ImportError:
        return None, 0.0
    client = anthropic.Anthropic()

    cand_lines = []
    for i, c in enumerate(candidates[:5]):
        title = " ".join(c.get("title", [""])) if isinstance(c.get("title"), list) else c.get("title", "")
        authors = ", ".join(
            f"{a.get('given', '')} {a.get('family', '')}".strip()
            for a in c.get("author", [])[:3]
        )
        cand_lines.append(f"{i+1}. doi={c.get('DOI')} | {title[:160]} | {authors}")

    prompt = (
        "You are matching a PDF (first 2 pages of plain text below) against a list "
        "of CrossRef metadata candidates. Pick the single best match by DOI. "
        "If none is clearly correct, return null.\n\n"
        "PDF text (truncated):\n---\n"
        f"{text[:6000]}\n---\n\n"
        "Candidates:\n"
        + "\n".join(cand_lines)
        + "\n\nRespond ONLY with JSON: {\"doi\": \"<doi or null>\", \"confidence\": <0..1>}."
    )

    try:
        msg = client.messages.create(
            model="claude-sonnet-4-6",
            max_tokens=200,
            messages=[{"role": "user", "content": prompt}],
        )
        body = msg.content[0].text.strip()
        body = re.sub(r"^```json\s*|\s*```$", "", body)
        out = json.loads(body)
        doi = out.get("doi")
        conf = float(out.get("confidence", 0.0))
        return (doi if doi else None), conf
    except Exception as e:
        print(f"  [warn] Claude tiebreak failed: {e}", file=sys.stderr)
        return None, 0.0


def resolve_one(sha: str, rep_row: dict[str, Any]) -> Resolution:
    pdf_path = Path(rep_row["src_path"])
    if not pdf_path.exists():
        return Resolution(sha, None, 0.0, "missing", [], f"file not found: {pdf_path}")

    # Strategy 1: filename
    if (doi := doi_from_filename(rep_row["rel_path"])):
        return Resolution(sha, doi, 0.85, "filename", [], "")

    # Strategy 2: page-1 regex
    page1 = pdftotext_page1(pdf_path)
    if (doi := doi_from_text(page1)):
        # Verify with CrossRef before accepting
        if crossref_lookup_doi(doi):
            return Resolution(sha, doi, 0.95, "page1-regex", [], "")

    # Strategy 3: title search
    title = title_from_pdf(pdf_path)
    candidates: list[dict[str, Any]] = []
    if title:
        candidates = crossref_search(title)
        if len(candidates) == 1:
            return Resolution(sha, candidates[0]["DOI"], 0.75, "title-search", candidates, "")
        if len(candidates) >= 2:
            scores = [c.get("score", 0) for c in candidates]
            if scores[0] > 2 * (scores[1] if len(scores) > 1 else 1):
                return Resolution(sha, candidates[0]["DOI"], 0.7, "title-search", candidates, "")

    # Strategy 4: Claude tiebreak
    if candidates:
        doi, conf = claude_tiebreak(page1, candidates)
        if doi and conf >= 0.6:
            return Resolution(sha, doi, conf, "claude-tiebreak", candidates, "")

    return Resolution(sha, None, 0.0, "unresolved", candidates, "no high-confidence DOI")


def main() -> int:
    fp_path = STAGING / "fingerprints.jsonl"
    if not fp_path.exists():
        print(f"Run discover first: {fp_path} not found", file=sys.stderr)
        return 1

    by_sha = load_fingerprints(fp_path)
    print(f"Resolving {len(by_sha)} unique sha256 fingerprint(s)...")

    out_path = STAGING / "resolution.jsonl"
    out_path.parent.mkdir(parents=True, exist_ok=True)

    # Resume support: skip sha256s already resolved
    done: set[str] = set()
    if out_path.exists():
        with out_path.open() as f:
            for line in f:
                try:
                    done.add(json.loads(line)["sha256"])
                except Exception:
                    pass
        print(f"  resuming; {len(done)} already resolved")

    with out_path.open("a") as out:
        for i, (sha, rows) in enumerate(by_sha.items(), 1):
            if sha in done:
                continue
            rep = rows[0]
            res = resolve_one(sha, rep)
            out.write(json.dumps({
                "sha256": res.sha256,
                "doi": res.doi,
                "confidence": res.confidence,
                "strategy": res.strategy,
                "candidates": res.candidates,
                "reason": res.reason,
            }) + "\n")
            out.flush()
            if i % 25 == 0:
                print(f"  {i}/{len(by_sha)} processed")

    resolved = unresolved = 0
    with out_path.open() as f:
        for line in f:
            row = json.loads(line)
            if row.get("doi"):
                resolved += 1
            else:
                unresolved += 1

    print()
    print(f"Resolved: {resolved}")
    print(f"Unresolved: {unresolved}")
    print(f"Wrote {out_path}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
