#!/usr/bin/env python3
"""Rebuild papers/staging/papers-to-download.csv from data/paper-metadata.csv,
so the downloader works from the broader CSV pool (~10,908 DOIs) rather than
the narrower live-DB pool (~10,018 papers).

Also emits papers/staging/papers-without-id.csv from the CSV's title-only rows
for scripts/papers/backfill_identifiers.py to process (~12,430 candidates —
the real U1 opportunity).

Source-of-truth: the committed data/paper-metadata.csv (produced by
scripts/sync-from-database.js at some earlier DB state). This is how we work
with papers that are in the snapshot but no longer in the live DB.
"""
from __future__ import annotations

import csv
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
PM_CSV = REPO_ROOT / "data" / "paper-metadata.csv"
STAGING = REPO_ROOT / "papers" / "staging"
OUT_WITH_ID = STAGING / "papers-to-download.csv"
OUT_WITHOUT_ID = STAGING / "papers-without-id.csv"


def main() -> int:
    if not PM_CSV.exists():
        print(f"Missing {PM_CSV}", file=sys.stderr)
        return 1
    STAGING.mkdir(parents=True, exist_ok=True)

    with PM_CSV.open(newline="") as f:
        reader = csv.DictReader(f)
        rows = list(reader)

    # Dedup by (id | doi | title-first-80) to defensively remove any duplicates.
    seen: set[str] = set()
    with_id: list[dict] = []
    without_id: list[dict] = []
    for r in rows:
        key = r.get("id") or r.get("doi") or (r.get("title") or "")[:80]
        if not key or key in seen:
            continue
        seen.add(key)
        doi = (r.get("doi") or "").strip()
        if doi:
            with_id.append(r)
        elif (r.get("title") or "").strip():
            without_id.append(r)

    # Downloader expects: id, doi, external_url, pubmed_id, arxiv_id, title, year,
    # citation_count, system_type, journal — matching what export_papers_from_db.sh emits.
    with OUT_WITH_ID.open("w", newline="") as f:
        w = csv.writer(f)
        w.writerow([
            "id", "doi", "external_url", "pubmed_id", "arxiv_id",
            "title", "year", "citation_count", "system_type", "journal",
        ])
        for r in with_id:
            w.writerow([
                r.get("id", ""),
                r.get("doi", ""),
                "",  # external_url — CSV doesn't carry it; downloader still has doi.org + OA paths
                "",  # pubmed_id
                "",  # arxiv_id
                (r.get("title") or "").replace("\n", " ").replace("\r", " "),
                r.get("year") or "",
                r.get("citation_count") or "",
                r.get("system_type") or "",
                r.get("journal") or "",
            ])

    # Backfill script expects: id, title, year, first_author.
    with OUT_WITHOUT_ID.open("w", newline="") as f:
        w = csv.writer(f)
        w.writerow(["id", "title", "year", "first_author"])
        for r in without_id:
            w.writerow([
                r.get("id", ""),
                (r.get("title") or "").replace("\n", " ").replace("\r", " "),
                r.get("year") or "",
                "",  # first_author — not in this CSV; Jaro-Winkler still matches title+year
            ])

    print(f"wrote {len(with_id):>6} papers with DOI    → {OUT_WITH_ID}")
    print(f"wrote {len(without_id):>6} papers w/o ID    → {OUT_WITHOUT_ID}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
