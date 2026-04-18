#!/usr/bin/env python3
"""
Download PDFs for papers in the MESSAI research database.

Strategy (provider chain, stop at first valid PDF):
  1. externalUrl     — if the DB has a direct .pdf link, try it first
  2. Unpaywall       — free official OA index (needs UNPAYWALL_EMAIL)
  3. arXiv           — direct PDF if arxivId present
  4. bioRxiv         — DOI prefix 10.1101 → /content/<doi>.full.pdf
  5. PMC             — if pubmedId present, translate to PMC ID then fetch OA PDF
  6. CrossRef        — last-resort content-type PDF link scan

No Sci-Hub / LibGen. If all providers fail, the paper stays unreachable.

Inputs:
  papers/staging/papers-to-download.csv  (produced by export_papers_from_db.sh)
  papers/staging/resolution.jsonl        (optional — skips DOIs already on disk)

Outputs:
  papers/downloaded/<sha256[:2]>/<sha256>.pdf   (gitignored; discover.py will pick up)
  papers/staging/download-attempts.jsonl        (every attempt — success or fail)
  papers/staging/download-summary.md            (human-readable rollup)

Env:
  UNPAYWALL_EMAIL    (required for Unpaywall; rate-limits to 10 rps otherwise)
  CROSSREF_MAILTO    (polite pool identifier; default: samfrons@gmail.com)
  DOWNLOAD_USER_AGENT (default: "MESSAI-PDF/1.0 mailto:<CROSSREF_MAILTO>")
  HTTP_TIMEOUT_SEC   (default: 30)

Usage:
  python scripts/papers/download_from_db.py [--limit N] [--dry-run] [--resume]
  python scripts/papers/download_from_db.py --tier priority   # n=3500 by citation/recency
  python scripts/papers/download_from_db.py --tier bulk       # everything else
"""

from __future__ import annotations

import argparse
import csv
import hashlib
import json
import os
import re
import sys
import time
from dataclasses import dataclass, asdict
from pathlib import Path
from typing import Iterable, Any

import requests

REPO_ROOT = Path(__file__).resolve().parents[2]
PAPERS_ROOT = REPO_ROOT / "papers"
STAGING = PAPERS_ROOT / "staging"
DOWNLOADED = PAPERS_ROOT / "downloaded"
ATTEMPTS_LOG = STAGING / "download-attempts.jsonl"
SUMMARY_MD = STAGING / "download-summary.md"
INPUT_CSV = STAGING / "papers-to-download.csv"
RESOLUTION_JSONL = STAGING / "resolution.jsonl"

USER_AGENT = os.environ.get(
    "DOWNLOAD_USER_AGENT",
    f"MESSAI-PDF/1.0 mailto:{os.environ.get('CROSSREF_MAILTO', 'samfrons@gmail.com')}",
)
UNPAYWALL_EMAIL = os.environ.get("UNPAYWALL_EMAIL", os.environ.get("CROSSREF_MAILTO", ""))
HTTP_TIMEOUT = float(os.environ.get("HTTP_TIMEOUT_SEC", "30"))

# Per-provider min seconds between calls. arXiv is strict (1 req / 3 s ToS).
PROVIDER_RPS = {
    "externalUrl": 0.3,
    "unpaywall": 0.1,
    "arxiv": 3.0,
    "biorxiv": 0.5,
    "pmc": 0.5,
    "crossref": 0.1,
}
_last_call: dict[str, float] = {}


def _throttle(provider: str) -> None:
    min_gap = PROVIDER_RPS.get(provider, 0.5)
    now = time.time()
    last = _last_call.get(provider, 0.0)
    elapsed = now - last
    if elapsed < min_gap:
        time.sleep(min_gap - elapsed)
    _last_call[provider] = time.time()


def _http_get(url: str, *, provider: str, stream: bool = False, timeout: float | None = None) -> requests.Response | None:
    _throttle(provider)
    headers = {"User-Agent": USER_AGENT, "Accept": "application/pdf,*/*"}
    try:
        return requests.get(
            url,
            headers=headers,
            timeout=timeout or HTTP_TIMEOUT,
            stream=stream,
            allow_redirects=True,
        )
    except requests.RequestException:
        return None


def _is_pdf_response(r: requests.Response) -> bool:
    ct = r.headers.get("content-type", "").lower()
    if "application/pdf" in ct:
        return True
    # Some hosts serve PDFs with generic content-types. Sniff the first bytes.
    try:
        peek = next(r.iter_content(8), b"")
    except Exception:
        return False
    return peek.startswith(b"%PDF")


def _stream_to_file(r: requests.Response, target: Path) -> int:
    target.parent.mkdir(parents=True, exist_ok=True)
    written = 0
    h = hashlib.sha256()
    # We already consumed the magic-byte peek above; rewind by writing it first.
    with target.open("wb") as f:
        for chunk in r.iter_content(64 * 1024):
            if not chunk:
                continue
            f.write(chunk)
            h.update(chunk)
            written += len(chunk)
            # Safety: cap at 100 MB to catch accidental non-PDF streams.
            if written > 100 * 1024 * 1024:
                break
    return written


def _sha256(path: Path) -> str:
    h = hashlib.sha256()
    with path.open("rb") as f:
        while True:
            b = f.read(1024 * 1024)
            if not b:
                break
            h.update(b)
    return h.hexdigest()


def _validate_pdf(path: Path) -> bool:
    if not path.exists():
        return False
    if path.stat().st_size < 10 * 1024:  # Smaller than 10 KB → probably not a real paper
        return False
    try:
        with path.open("rb") as f:
            return f.read(4) == b"%PDF"
    except Exception:
        return False


# ═════════════════════════════════════════════════════════════════════
# Providers — each returns a downloaded-file Path or None
# ═════════════════════════════════════════════════════════════════════

def _try_url(url: str, paper_id: str, provider: str) -> Path | None:
    if not url or not url.startswith(("http://", "https://")):
        return None
    r = _http_get(url, provider=provider, stream=True)
    if r is None or r.status_code != 200:
        return None
    if not _is_pdf_response(r):
        return None
    # Write to a temp path first (using the provider name for debug), then the
    # caller renames to sha-based canonical location.
    tmp = PAPERS_ROOT / "downloaded" / "temp" / f"{paper_id}.{provider}.pdf"
    tmp.parent.mkdir(parents=True, exist_ok=True)
    # Rewind to include the peeked bytes: write the magic-byte peek then the
    # rest of the stream.
    try:
        _stream_to_file(r, tmp)
    except Exception:
        return None
    if not _validate_pdf(tmp):
        try: tmp.unlink()
        except Exception: pass
        return None
    return tmp


def prov_external_url(paper: dict, _ctx: dict) -> tuple[Path | None, str | None]:
    url = (paper.get("external_url") or "").strip()
    if not url:
        return None, None
    if url.lower().endswith(".pdf"):
        return _try_url(url, paper["id"], "externalUrl"), url
    # Known publisher patterns that turn HTML URLs into PDF URLs.
    if "mdpi.com" in url and url.endswith("/htm"):
        return _try_url(url[:-4] + "/pdf", paper["id"], "externalUrl"), url
    return None, None


def prov_unpaywall(paper: dict, _ctx: dict) -> tuple[Path | None, str | None]:
    doi = (paper.get("doi") or "").strip()
    if not doi or not UNPAYWALL_EMAIL:
        return None, None
    api = f"https://api.unpaywall.org/v2/{doi}?email={UNPAYWALL_EMAIL}"
    r = _http_get(api, provider="unpaywall")
    if r is None or r.status_code != 200:
        return None, None
    try:
        data = r.json()
    except ValueError:
        return None, None
    loc = data.get("best_oa_location") or {}
    pdf_url = loc.get("url_for_pdf") or ""
    if not pdf_url:
        return None, None
    return _try_url(pdf_url, paper["id"], "unpaywall"), pdf_url


def prov_arxiv(paper: dict, _ctx: dict) -> tuple[Path | None, str | None]:
    arxiv_id = (paper.get("arxiv_id") or "").strip()
    if not arxiv_id:
        return None, None
    # normalize: strip arxiv: prefix if present
    arxiv_id = re.sub(r"^arxiv:", "", arxiv_id, flags=re.IGNORECASE)
    url = f"https://arxiv.org/pdf/{arxiv_id}.pdf"
    return _try_url(url, paper["id"], "arxiv"), url


def prov_biorxiv(paper: dict, _ctx: dict) -> tuple[Path | None, str | None]:
    doi = (paper.get("doi") or "").strip()
    if not doi.startswith("10.1101/"):
        return None, None
    url = f"https://www.biorxiv.org/content/{doi}.full.pdf"
    return _try_url(url, paper["id"], "biorxiv"), url


def prov_pmc(paper: dict, _ctx: dict) -> tuple[Path | None, str | None]:
    pubmed_id = (paper.get("pubmed_id") or "").strip()
    if not pubmed_id:
        return None, None
    # Translate PubMed ID → PMC ID via NCBI ELink
    api = (
        "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/elink.fcgi"
        f"?dbfrom=pubmed&db=pmc&id={pubmed_id}&retmode=json"
    )
    r = _http_get(api, provider="pmc")
    if r is None or r.status_code != 200:
        return None, None
    try:
        data = r.json()
    except ValueError:
        return None, None
    links = (
        data.get("linksets", [{}])[0].get("linksetdbs", [{}])[0].get("links", [])
    )
    if not links:
        return None, None
    pmc_id = f"PMC{links[0]}"
    url = f"https://www.ncbi.nlm.nih.gov/pmc/articles/{pmc_id}/pdf/"
    return _try_url(url, paper["id"], "pmc"), url


def prov_crossref(paper: dict, _ctx: dict) -> tuple[Path | None, str | None]:
    doi = (paper.get("doi") or "").strip()
    if not doi:
        return None, None
    api = f"https://api.crossref.org/works/{doi}"
    r = _http_get(api, provider="crossref")
    if r is None or r.status_code != 200:
        return None, None
    try:
        data = r.json().get("message", {})
    except ValueError:
        return None, None
    for link in data.get("link", []):
        if "pdf" in link.get("content-type", "").lower():
            pdf_url = link.get("URL")
            if not pdf_url:
                continue
            out = _try_url(pdf_url, paper["id"], "crossref")
            if out:
                return out, pdf_url
    return None, None


PROVIDERS = [
    ("externalUrl", prov_external_url),
    ("unpaywall",   prov_unpaywall),
    ("arxiv",       prov_arxiv),
    ("biorxiv",     prov_biorxiv),
    ("pmc",         prov_pmc),
    ("crossref",    prov_crossref),
]

# ═════════════════════════════════════════════════════════════════════
# Main
# ═════════════════════════════════════════════════════════════════════

@dataclass
class Attempt:
    paper_id: str
    doi: str
    provider: str
    upstream_url: str
    success: bool
    sha256: str | None
    bytes_written: int
    error: str | None


def load_already_on_disk_dois() -> set[str]:
    """Skip papers whose DOIs we already resolved on disk — avoid re-downloads."""
    seen: set[str] = set()
    if RESOLUTION_JSONL.exists():
        with RESOLUTION_JSONL.open() as f:
            for line in f:
                try:
                    row = json.loads(line)
                    if row.get("doi"):
                        seen.add(row["doi"].lower())
                except Exception:
                    pass
    return seen


def load_already_attempted(paper_ids: set[str]) -> set[str]:
    """Resume support — skip paper ids we've already tried to download."""
    seen: set[str] = set()
    if ATTEMPTS_LOG.exists():
        with ATTEMPTS_LOG.open() as f:
            for line in f:
                try:
                    row = json.loads(line)
                    pid = row.get("paper_id")
                    if pid in paper_ids and (row.get("success") or row.get("final", False)):
                        seen.add(pid)
                except Exception:
                    pass
    return seen


def canonicalize(tmp_path: Path) -> tuple[Path, str, int]:
    """Move a validated PDF to its canonical sha256-sharded location."""
    sha = _sha256(tmp_path)
    size = tmp_path.stat().st_size
    final = DOWNLOADED / sha[:2] / f"{sha}.pdf"
    final.parent.mkdir(parents=True, exist_ok=True)
    if final.exists():
        # Already seen by hash — discard the temp copy.
        try: tmp_path.unlink()
        except Exception: pass
    else:
        tmp_path.replace(final)
    return final, sha, size


def download_paper(paper: dict, log: Any) -> Attempt | None:
    """Walk the provider chain. Logs every attempt; returns the successful one."""
    last_attempt: Attempt | None = None
    for provider_name, func in PROVIDERS:
        try:
            result, url = func(paper, {})
        except Exception as e:
            result, url = None, None
            print(f"    [warn] {provider_name}: {e}", file=sys.stderr)
        attempt = Attempt(
            paper_id=paper["id"],
            doi=paper.get("doi") or "",
            provider=provider_name,
            upstream_url=url or "",
            success=result is not None,
            sha256=None,
            bytes_written=0,
            error=None,
        )
        if result is not None:
            final, sha, size = canonicalize(result)
            attempt.sha256 = sha
            attempt.bytes_written = size
            log.write(json.dumps(asdict(attempt)) + "\n")
            log.flush()
            return attempt
        log.write(json.dumps(asdict(attempt)) + "\n")
        log.flush()
        last_attempt = attempt
    # All providers exhausted — mark as final (used by resume logic).
    if last_attempt:
        log.write(json.dumps({**asdict(last_attempt), "final": True}) + "\n")
        log.flush()
    return None


def read_papers_csv(path: Path, limit: int | None = None) -> list[dict]:
    with path.open(newline="") as f:
        reader = csv.DictReader(f)
        rows = list(reader)
    if limit is not None:
        rows = rows[:limit]
    return rows


def score(row: dict) -> int:
    """Priority score for the Tier-1 subset (citation-heavy, recent)."""
    s = 0
    cc = row.get("citation_count") or ""
    try:
        cc_i = int(cc) if cc else 0
    except ValueError:
        cc_i = 0
    if cc_i >= 100: s += 30
    elif cc_i >= 50: s += 20
    elif cc_i >= 10: s += 10
    year = row.get("year") or ""
    try:
        y = int(year) if year else 0
    except ValueError:
        y = 0
    if y >= 2023: s += 20
    elif y >= 2020: s += 10
    if row.get("doi"): s += 15
    if (row.get("external_url") or "").lower().endswith(".pdf"): s += 25
    return s


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--limit", type=int, default=None, help="process first N papers")
    ap.add_argument("--tier", choices=["priority", "bulk", "all"], default="all",
                    help="priority = top ~3500 by score; bulk = everything else; all = every paper")
    ap.add_argument("--dry-run", action="store_true", help="list what would be downloaded, then exit")
    ap.add_argument("--no-skip-disk", action="store_true",
                    help="do not skip papers whose DOIs already appear in resolution.jsonl")
    args = ap.parse_args()

    if not INPUT_CSV.exists():
        print(f"ERROR: {INPUT_CSV} not found. Run export_papers_from_db.sh first.", file=sys.stderr)
        return 1

    papers = read_papers_csv(INPUT_CSV)
    print(f"Loaded {len(papers)} papers from DB dump")

    # Skip DOIs already present on disk (from the local-PDFs resolve run).
    disk_dois = set() if args.no_skip_disk else load_already_on_disk_dois()
    if disk_dois:
        before = len(papers)
        papers = [p for p in papers if (p.get("doi") or "").lower() not in disk_dois]
        print(f"Excluding {before - len(papers)} papers whose DOIs are already on disk")

    # Resume: skip papers already attempted to completion.
    paper_ids = {p["id"] for p in papers}
    already = load_already_attempted(paper_ids)
    if already:
        before = len(papers)
        papers = [p for p in papers if p["id"] not in already]
        print(f"Resuming — skipping {before - len(papers)} papers with a final attempt logged")

    # Tiering.
    if args.tier == "priority":
        papers.sort(key=score, reverse=True)
        papers = papers[:3500]
    elif args.tier == "bulk":
        papers.sort(key=score, reverse=True)
        papers = papers[3500:]

    if args.limit is not None:
        papers = papers[: args.limit]

    print(f"Plan to attempt {len(papers)} papers (tier={args.tier})")
    print(f"  Unpaywall email:  {UNPAYWALL_EMAIL or '(MISSING — will skip Unpaywall)'}")
    print(f"  User-Agent:       {USER_AGENT}")

    if args.dry_run:
        print("--dry-run — exiting without downloading")
        return 0

    DOWNLOADED.mkdir(parents=True, exist_ok=True)
    STAGING.mkdir(parents=True, exist_ok=True)

    wins = 0
    fails = 0
    start = time.time()
    with ATTEMPTS_LOG.open("a") as log:
        for i, paper in enumerate(papers, 1):
            r = download_paper(paper, log)
            if r is not None:
                wins += 1
            else:
                fails += 1
            if i % 25 == 0:
                elapsed = time.time() - start
                rate = i / elapsed if elapsed else 0
                eta_min = (len(papers) - i) / rate / 60 if rate else 0
                print(
                    f"  {i}/{len(papers)}  wins={wins} fails={fails}  "
                    f"rate={rate:.1f}/s  eta={eta_min:.1f}min"
                )

    # Write a brief markdown summary.
    with SUMMARY_MD.open("w") as f:
        f.write(f"# Download summary\n\n")
        f.write(f"- Attempted: {len(papers)}\n")
        f.write(f"- Wins: {wins}\n")
        f.write(f"- Fails: {fails}\n")
        f.write(f"- Elapsed: {(time.time() - start) / 60:.1f} min\n")
        f.write(f"- Logs: `papers/staging/download-attempts.jsonl`\n")
        f.write(f"- PDFs land at: `papers/downloaded/<sha256[:2]>/<sha256>.pdf`\n")

    print(f"\n✓ Done. wins={wins} fails={fails}. Summary → {SUMMARY_MD}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
