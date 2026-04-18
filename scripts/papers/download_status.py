#!/usr/bin/env python3
"""One-shot status report for the bulk PDF downloader.

Reads papers/staging/download-attempts.jsonl and prints:
  - Total attempted / won / failed, overall hit rate
  - Wins by provider
  - Disk used under papers/downloaded/
  - Top journals acquired (joined via papers-to-download.csv)

No DB connection; works entirely from local files. Safe to run any time,
including while the downloader is still going.

Usage: python scripts/papers/download_status.py
"""

from __future__ import annotations

import csv
import json
import os
from collections import Counter
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
ATTEMPTS = REPO_ROOT / "papers" / "staging" / "download-attempts.jsonl"
INPUT_CSV = REPO_ROOT / "papers" / "staging" / "papers-to-download.csv"
DOWNLOADED = REPO_ROOT / "papers" / "downloaded"

PROVIDERS = ["externalUrl", "unpaywall", "semanticscholar", "arxiv", "biorxiv", "pmc", "crossref"]


def human_bytes(n: int) -> str:
    for unit in ["B", "KB", "MB", "GB"]:
        if n < 1024:
            return f"{n:.1f} {unit}"
        n /= 1024
    return f"{n:.1f} TB"


def main() -> None:
    if not ATTEMPTS.exists():
        print("No attempts yet (papers/staging/download-attempts.jsonl missing).")
        return

    winners: dict[str, str] = {}     # paper_id -> provider that won
    tried_by_prov: Counter = Counter()
    wins_by_prov: Counter = Counter()

    with ATTEMPTS.open() as f:
        for line in f:
            try:
                r = json.loads(line)
            except Exception:
                continue
            if r.get("final"):
                continue
            pid = r["paper_id"]
            prov = r["provider"]
            tried_by_prov[prov] += 1
            if r.get("success"):
                wins_by_prov[prov] += 1
                winners.setdefault(pid, prov)

    total = len({r["paper_id"] for r in _iter(ATTEMPTS) if not r.get("final")})
    won = len(winners)
    fail = total - won

    print(f"Attempts log:     {ATTEMPTS}")
    print(f"Papers attempted: {total}")
    print(f"Papers won:       {won}  ({100*won/total:.1f}%)" if total else "Papers won:       0")
    print(f"Papers failed:    {fail}\n")

    print(f"{'provider':<18}{'tried':>8}{'wins':>8}{'rate':>8}")
    for prov in PROVIDERS:
        t = tried_by_prov[prov]
        w = wins_by_prov[prov]
        pct = 100 * w / t if t else 0
        print(f"  {prov:<16}{t:>8}{w:>8}{pct:>7.1f}%")

    first_winner = Counter(winners.values())
    if first_winner:
        print("\nFirst-winner distribution (who bagged each paper):")
        for prov, c in first_winner.most_common():
            print(f"  {prov:<16}{c:>5}  ({100*c/won:.1f}%)")

    # Disk stats
    total_bytes = 0
    pdf_count = 0
    sizes: list[int] = []
    if DOWNLOADED.exists():
        for p in DOWNLOADED.rglob("*.pdf"):
            try:
                sz = p.stat().st_size
            except OSError:
                continue
            sizes.append(sz)
            total_bytes += sz
            pdf_count += 1
    print(f"\nDisk under papers/downloaded/:")
    print(f"  PDFs:       {pdf_count}")
    print(f"  Total size: {human_bytes(total_bytes)}")
    if sizes:
        sizes.sort()
        median = sizes[len(sizes) // 2]
        print(f"  Avg size:   {human_bytes(total_bytes / len(sizes))}")
        print(f"  Median:     {human_bytes(median)}")

    # Journal breakdown for winners
    if INPUT_CSV.exists() and winners:
        jnl: Counter = Counter()
        with INPUT_CSV.open(newline="") as f:
            reader = csv.DictReader(f)
            for row in reader:
                if row["id"] in winners:
                    j = (row.get("journal") or "").strip() or "(unknown)"
                    jnl[j] += 1
        if jnl:
            print(f"\nTop 10 journals acquired:")
            for j, c in jnl.most_common(10):
                print(f"  {c:>4}  {j[:80]}")


def _iter(path: Path):
    with path.open() as f:
        for line in f:
            try:
                yield json.loads(line)
            except Exception:
                continue


if __name__ == "__main__":
    main()
