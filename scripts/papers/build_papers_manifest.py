#!/usr/bin/env python3
"""
Emit data/papers-manifest.json — the per-paper PDF index that messai-ai
consumes to activate the "Local PDF" button + /api/papers/[id]/pdf route.

Schema (pinned here; documented in docs/consumer-contract.md §manifest):

{
  "version": "<semver>",
  "generated_at": "<iso8601>",
  "generator": "scripts/papers/build_papers_manifest.py",
  "papers": [
    {
      "doi": "<lowercase>",
      "title": "<optional, from paper-metadata.csv>",
      "pdf_hash": "<sha256 hex>",
      "pdf_storage_path": "by-doi/<dirname>/paper.pdf"
                       | "by-hash/<2>/<sha>/paper.pdf",
      "pdf_source": "<enum — see below>",
      "pdf_license": "<enum — see below>",
      "pdf_size_bytes": <int>,
      "pdf_acquired_at": "<iso8601>",
      "pdf_extraction_status": "pending|sections|parameters|figures|complete"
    }
  ]
}

Enums (consumer renders these verbatim):
  pdf_source:  unpaywall | crossref | arxiv | pmc | biorxiv | externalUrl
             | semanticscholar | legacy | local
  pdf_license: cc-by | cc-by-sa | cc-by-nc | cc-by-nc-sa | cc-by-nd | cc0
             | publisher | unknown

Consumer accepts either snake_case or camelCase keys.

Inputs:
  papers/by-doi/<DOI>/{source.json, paper.pdf}        — one per imported paper
  papers/staging/download-attempts.jsonl              — provenance of downloaded PDFs
  papers/staging/resolution.jsonl                     — legacy-imported PDFs
  data/paper-metadata.csv                             — DOI → title join

The doi_to_dirname() sanitization is reverse-engineered from
scripts/papers/import_pdfs.py; the resulting paths match what the
/api/papers/[id]/pdf route regex accepts.
"""

from __future__ import annotations

import csv
import json
import os
import sys
from datetime import datetime, timezone
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
PAPERS = REPO_ROOT / "papers"
BY_DOI = PAPERS / "by-doi"
BY_HASH = PAPERS / "by-hash"
DOWNLOADED = PAPERS / "downloaded"
STAGING = PAPERS / "staging"
OUT = REPO_ROOT / "data" / "papers-manifest.json"
PM_CSV = REPO_ROOT / "data" / "paper-metadata.csv"

# Bump when the enum vocabulary or field set changes. Consumers pin to a
# major.minor range. Patch-level = new papers added, no schema change.
SCHEMA_VERSION = "0.1.0"


def load_paper_titles() -> dict[str, str]:
    titles: dict[str, str] = {}
    if not PM_CSV.exists():
        return titles
    with PM_CSV.open(newline="") as f:
        for row in csv.DictReader(f):
            doi = (row.get("doi") or "").strip().lower()
            if doi:
                titles[doi] = row.get("title") or ""
    return titles


def load_download_attempts() -> dict[str, dict]:
    """Return {sha256 → winning attempt dict} from the downloader log."""
    path = STAGING / "download-attempts.jsonl"
    wins: dict[str, dict] = {}
    if not path.exists():
        return wins
    with path.open() as f:
        for line in f:
            try:
                r = json.loads(line)
            except Exception:
                continue
            if r.get("final"):
                continue
            if r.get("success") and r.get("sha256"):
                # First winning attempt per sha wins (providers are walked in order)
                wins.setdefault(r["sha256"], r)
    return wins


def relative_pdf_path(pdf: Path) -> str:
    try:
        return str(pdf.resolve().relative_to(PAPERS.resolve()))
    except ValueError:
        return str(pdf)


def extraction_status(paper_dir: Path) -> str:
    sections = (paper_dir / "text" / "sections.json").exists()
    params = (paper_dir / "parameters" / "observations.json").exists()
    figures = (paper_dir / "figures").exists() and any((paper_dir / "figures").iterdir()) \
        if (paper_dir / "figures").exists() else False
    if params and figures:
        return "complete"
    if params:
        return "parameters"
    if sections:
        return "sections"
    return "pending"


def main() -> int:
    titles = load_paper_titles()
    wins = load_download_attempts()

    papers = []
    seen_dois: set[str] = set()

    # 1. by-doi entries (already imported, have source.json)
    if BY_DOI.exists():
        for pdf in BY_DOI.rglob("paper.pdf"):
            paper_dir = pdf.parent
            src_path = paper_dir / "source.json"
            try:
                src = json.loads(src_path.read_text())
            except Exception:
                continue
            doi = (src.get("doi") or "").lower()
            if not doi or doi in seen_dois:
                continue
            seen_dois.add(doi)
            sha = src.get("canonical_sha256") or ""
            win = wins.get(sha)
            try:
                size = pdf.stat().st_size
            except OSError:
                size = 0
            papers.append({
                "doi": doi,
                "title": titles.get(doi, ""),
                "pdf_hash": sha,
                "pdf_storage_path": relative_pdf_path(pdf),
                "pdf_source": (win or {}).get("provider") or src.get("provider") or "legacy",
                "pdf_license": src.get("license") or "unknown",
                "pdf_size_bytes": size,
                "pdf_acquired_at": src.get("acquired_at") or _mtime_iso(pdf),
                "pdf_extraction_status": extraction_status(paper_dir),
            })

    # 2. downloaded but not yet imported (no by-doi/<DOI>/ yet)
    if DOWNLOADED.exists():
        # Map sha → doi from download attempts
        for sha, win in wins.items():
            doi = (win.get("doi") or "").lower()
            if not doi or doi in seen_dois:
                continue
            pdf = DOWNLOADED / sha[:2] / f"{sha}.pdf"
            if not pdf.exists():
                continue
            seen_dois.add(doi)
            try:
                size = pdf.stat().st_size
            except OSError:
                size = 0
            papers.append({
                "doi": doi,
                "title": titles.get(doi, ""),
                "pdf_hash": sha,
                "pdf_storage_path": relative_pdf_path(pdf),
                "pdf_source": win.get("provider") or "unknown",
                "pdf_license": "unknown",
                "pdf_size_bytes": size,
                "pdf_acquired_at": _mtime_iso(pdf),
                "pdf_extraction_status": "pending",
            })

    papers.sort(key=lambda p: p["doi"])
    out = {
        "version": SCHEMA_VERSION,
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "generator": "scripts/papers/build_papers_manifest.py",
        "counts": {
            "papers": len(papers),
            "with_title": sum(1 for p in papers if p["title"]),
            "by_status": _tally(papers, "pdf_extraction_status"),
            "by_source": _tally(papers, "pdf_source"),
        },
        "papers": papers,
    }
    OUT.write_text(json.dumps(out, indent=2))
    print(f"✓ Wrote {OUT} ({len(papers)} papers)")
    for k, v in out["counts"]["by_status"].items():
        print(f"    by_status.{k:<12}{v:>5}")
    for k, v in out["counts"]["by_source"].items():
        print(f"    by_source.{k:<14}{v:>5}")
    return 0


def _mtime_iso(p: Path) -> str:
    try:
        return datetime.fromtimestamp(p.stat().st_mtime, tz=timezone.utc).isoformat()
    except OSError:
        return ""


def _tally(items: list[dict], key: str) -> dict[str, int]:
    c: dict[str, int] = {}
    for it in items:
        c[it.get(key) or "unknown"] = c.get(it.get(key) or "unknown", 0) + 1
    return dict(sorted(c.items(), key=lambda kv: -kv[1]))


if __name__ == "__main__":
    sys.exit(main())
