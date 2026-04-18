#!/usr/bin/env python3
"""
Backfill DOI / PMID / arXiv identifiers for papers that have only a title.

~52% of papers in the MESSAI DB (12,100 of 23,332) have no DOI, no PMID, no
arXiv ID, and no externalUrl — they came from bulk imports where only
title + abstract were captured. They're invisible to every PDF provider
until we recover an identifier.

Strategy per paper (all free, all 0 LLM cost):
  1. OpenAlex  /works?search={title}&filter=from_publication_date,to…
               — returns DOI + often an OA PDF URL in one call.
  2. CrossRef  /works?query.title=…&query.author=…&rows=5 (polite pool)
  3. Semantic Scholar /graph/v1/paper/search?query=…&limit=5

Match acceptance:
  - Jaro-Winkler(title_ours, title_candidate) ≥ 0.92
  - First-author surname matches (case-insensitive, startswith tolerant)
  - Year within ±1 (when year is known on both sides)

Outputs:
  papers/staging/identifier-backfill.csv      paper_id, doi, source, confidence
  papers/staging/identifier-backfill.log      per-paper attempt trace
  papers/staging/identifier-backfill-misses.csv  papers that couldn't be matched

The DB is NOT written from here — the app repo consumes the CSV and applies
updates via its Prisma layer. This keeps this repo read-only against the DB.

Usage:
  scripts/papers/export_papers_without_id.sh   (must run first)
  python scripts/papers/backfill_identifiers.py [--limit N] [--workers 6]
"""

from __future__ import annotations

import argparse
import csv
import json
import os
import re
import sys
import threading
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from typing import Any

import requests

REPO_ROOT = Path(__file__).resolve().parents[2]
STAGING = REPO_ROOT / "papers" / "staging"
INPUT_CSV = STAGING / "papers-without-id.csv"
OUT_CSV = STAGING / "identifier-backfill.csv"
MISS_CSV = STAGING / "identifier-backfill-misses.csv"
LOG_PATH = STAGING / "identifier-backfill.log"


# Load repo-root .env for UNPAYWALL_EMAIL / CROSSREF_MAILTO.
def _load_dotenv(p: Path) -> None:
    if not p.exists():
        return
    with p.open() as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            k, _, v = line.partition("=")
            k = k.strip()
            v = v.strip().strip('"').strip("'")
            if k and k not in os.environ:
                os.environ[k] = v


_load_dotenv(REPO_ROOT / ".env")

CROSSREF_MAILTO = os.environ.get("CROSSREF_MAILTO", os.environ.get("UNPAYWALL_EMAIL", "samfrons@gmail.com"))
USER_AGENT = f"MESSAI-Identifier-Backfill/1.0 mailto:{CROSSREF_MAILTO}"

# Per-provider rate limits (seconds between calls on this process).
PROVIDER_RPS = {
    "openalex": 0.11,        # 10 rps polite pool
    "crossref": 0.021,       # 50 rps polite pool
    "semanticscholar": 1.0,  # 1 rps unauth
}
_last_call: dict[str, float] = {}
_throttle_lock = threading.Lock()
_log_lock = threading.Lock()


def _throttle(provider: str) -> None:
    min_gap = PROVIDER_RPS.get(provider, 0.5)
    with _throttle_lock:
        now = time.time()
        last = _last_call.get(provider, 0.0)
        if now - last < min_gap:
            time.sleep(min_gap - (now - last))
        _last_call[provider] = time.time()


def _get(url: str, *, provider: str, **kwargs) -> requests.Response | None:
    _throttle(provider)
    try:
        return requests.get(url, headers={"User-Agent": USER_AGENT}, timeout=30, **kwargs)
    except requests.RequestException:
        return None


# ─── Jaro-Winkler (pure Python, no deps) ────────────────────────────────────

def _jaro(s1: str, s2: str) -> float:
    if s1 == s2:
        return 1.0
    if not s1 or not s2:
        return 0.0
    match_distance = max(len(s1), len(s2)) // 2 - 1
    s1_matches = [False] * len(s1)
    s2_matches = [False] * len(s2)
    matches = 0
    for i in range(len(s1)):
        start = max(0, i - match_distance)
        end = min(i + match_distance + 1, len(s2))
        for j in range(start, end):
            if s2_matches[j]:
                continue
            if s1[i] != s2[j]:
                continue
            s1_matches[i] = True
            s2_matches[j] = True
            matches += 1
            break
    if matches == 0:
        return 0.0
    transpositions = 0
    k = 0
    for i in range(len(s1)):
        if not s1_matches[i]:
            continue
        while not s2_matches[k]:
            k += 1
        if s1[i] != s2[k]:
            transpositions += 1
        k += 1
    transpositions //= 2
    return (
        matches / len(s1)
        + matches / len(s2)
        + (matches - transpositions) / matches
    ) / 3


def jaro_winkler(s1: str, s2: str) -> float:
    a = _norm_title(s1)
    b = _norm_title(s2)
    j = _jaro(a, b)
    # Prefix boost — up to 4 shared leading chars.
    p = 0
    for i in range(min(4, len(a), len(b))):
        if a[i] == b[i]:
            p += 1
        else:
            break
    return j + p * 0.1 * (1 - j)


def _norm_title(s: str) -> str:
    s = s.lower()
    s = re.sub(r"[^a-z0-9\s]", " ", s)
    s = re.sub(r"\s+", " ", s).strip()
    return s


# ─── Match acceptance ──────────────────────────────────────────────────────

def _surname_of(author: str) -> str:
    # Try "Given Family" → family; "Family, Given" → family.
    if "," in author:
        return author.split(",", 1)[0].strip().lower()
    parts = author.strip().split()
    return parts[-1].lower() if parts else ""


def author_match(our_first: str, cand_authors: list[str]) -> bool:
    if not our_first or not cand_authors:
        return True  # don't reject when we can't check
    ours = _surname_of(our_first)
    for a in cand_authors:
        cand = _surname_of(a)
        if cand and (cand == ours or cand.startswith(ours[:4]) or ours.startswith(cand[:4])):
            return True
    return False


def year_match(our_year: int | None, cand_year: int | None) -> bool:
    if our_year is None or cand_year is None:
        return True
    return abs(our_year - cand_year) <= 1


# ─── Providers ─────────────────────────────────────────────────────────────

def try_openalex(paper: dict) -> dict | None:
    title = paper["title"]
    r = _get(
        "https://api.openalex.org/works",
        provider="openalex",
        params={"search": title, "per-page": 5, "mailto": CROSSREF_MAILTO},
    )
    if r is None or r.status_code != 200:
        return None
    try:
        results = r.json().get("results", [])
    except Exception:
        return None
    our_year = paper.get("year")
    our_first = paper.get("first_author") or ""
    for w in results:
        cand_title = w.get("title") or ""
        if not cand_title:
            continue
        score = jaro_winkler(title, cand_title)
        if score < 0.92:
            continue
        cand_year = w.get("publication_year")
        cand_authors = [
            a.get("author", {}).get("display_name", "")
            for a in w.get("authorships", [])
        ]
        if not year_match(our_year, cand_year):
            continue
        if not author_match(our_first, cand_authors):
            continue
        doi = (w.get("doi") or "").replace("https://doi.org/", "").strip() or None
        oa = w.get("open_access") or {}
        return {
            "doi": doi,
            "source": "openalex",
            "confidence": round(score, 3),
            "oa_pdf_url": oa.get("oa_url") or None,
            "matched_title": cand_title,
        }
    return None


def try_crossref(paper: dict) -> dict | None:
    title = paper["title"]
    params = {"query.title": title, "rows": 5, "mailto": CROSSREF_MAILTO}
    first = paper.get("first_author")
    if first:
        params["query.author"] = first
    r = _get("https://api.crossref.org/works", provider="crossref", params=params)
    if r is None or r.status_code != 200:
        return None
    try:
        items = r.json().get("message", {}).get("items", [])
    except Exception:
        return None
    our_year = paper.get("year")
    our_first = paper.get("first_author") or ""
    for w in items:
        titles = w.get("title") or []
        cand_title = titles[0] if titles else ""
        if not cand_title:
            continue
        score = jaro_winkler(title, cand_title)
        if score < 0.92:
            continue
        cand_year = None
        try:
            cand_year = (w.get("issued") or {}).get("date-parts", [[None]])[0][0]
        except Exception:
            cand_year = None
        cand_authors = [
            f"{a.get('given','')} {a.get('family','')}".strip()
            for a in (w.get("author") or [])
        ]
        if not year_match(our_year, cand_year):
            continue
        if not author_match(our_first, cand_authors):
            continue
        return {
            "doi": w.get("DOI"),
            "source": "crossref",
            "confidence": round(score, 3),
            "oa_pdf_url": None,
            "matched_title": cand_title,
        }
    return None


def try_semantic_scholar(paper: dict) -> dict | None:
    title = paper["title"]
    r = _get(
        "https://api.semanticscholar.org/graph/v1/paper/search",
        provider="semanticscholar",
        params={
            "query": title,
            "limit": 5,
            "fields": "title,year,authors,externalIds,openAccessPdf",
        },
    )
    if r is None or r.status_code != 200:
        return None
    try:
        data = r.json().get("data", [])
    except Exception:
        return None
    our_year = paper.get("year")
    our_first = paper.get("first_author") or ""
    for w in data:
        cand_title = w.get("title") or ""
        if not cand_title:
            continue
        score = jaro_winkler(title, cand_title)
        if score < 0.92:
            continue
        cand_year = w.get("year")
        cand_authors = [a.get("name", "") for a in w.get("authors") or []]
        if not year_match(our_year, cand_year):
            continue
        if not author_match(our_first, cand_authors):
            continue
        doi = (w.get("externalIds") or {}).get("DOI")
        pdf = (w.get("openAccessPdf") or {}).get("url")
        return {
            "doi": doi,
            "source": "semanticscholar",
            "confidence": round(score, 3),
            "oa_pdf_url": pdf,
            "matched_title": cand_title,
        }
    return None


PROVIDERS = [try_openalex, try_crossref, try_semantic_scholar]


def backfill_one(paper: dict) -> dict | None:
    for func in PROVIDERS:
        try:
            hit = func(paper)
        except Exception as e:
            _log(f"[warn] {func.__name__}({paper['id']}): {e}")
            hit = None
        if hit and hit.get("doi"):
            return hit
    return None


def _log(msg: str) -> None:
    with _log_lock:
        with LOG_PATH.open("a") as f:
            f.write(msg + "\n")


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--limit", type=int, default=None)
    ap.add_argument("--workers", type=int, default=6)
    args = ap.parse_args()

    if not INPUT_CSV.exists():
        print(
            f"ERROR: {INPUT_CSV} not found. Run export_papers_without_id.sh first.",
            file=sys.stderr,
        )
        return 1

    # Resume: skip paper ids already in OUT_CSV.
    done: set[str] = set()
    if OUT_CSV.exists():
        with OUT_CSV.open(newline="") as f:
            for row in csv.DictReader(f):
                done.add(row["paper_id"])
    missed: set[str] = set()
    if MISS_CSV.exists():
        with MISS_CSV.open(newline="") as f:
            for row in csv.DictReader(f):
                missed.add(row["paper_id"])

    with INPUT_CSV.open(newline="") as f:
        rows = [r for r in csv.DictReader(f) if r["id"] not in done and r["id"] not in missed]
    total = len(rows)
    if args.limit is not None:
        rows = rows[: args.limit]

    print(f"Loaded {total} papers pending; attempting {len(rows)} (workers={args.workers})")
    print(f"  CrossRef mailto: {CROSSREF_MAILTO}")

    STAGING.mkdir(parents=True, exist_ok=True)
    out_new = not OUT_CSV.exists()
    miss_new = not MISS_CSV.exists()
    out_lock = threading.Lock()
    miss_lock = threading.Lock()
    wins = 0
    processed = 0
    start = time.time()

    with OUT_CSV.open("a", newline="") as out_fh, MISS_CSV.open("a", newline="") as miss_fh:
        out = csv.writer(out_fh)
        miss = csv.writer(miss_fh)
        if out_new:
            out.writerow(["paper_id", "doi", "source", "confidence", "oa_pdf_url"])
        if miss_new:
            miss.writerow(["paper_id", "title"])

        def _one(row: dict) -> bool:
            nonlocal wins, processed
            paper = {
                "id": row["id"],
                "title": row["title"],
                "year": int(row["year"]) if (row.get("year") or "").isdigit() else None,
                "first_author": row.get("first_author", ""),
            }
            if not paper["title"]:
                return False
            hit = backfill_one(paper)
            if hit and hit.get("doi"):
                with out_lock:
                    out.writerow([paper["id"], hit["doi"], hit["source"], hit["confidence"], hit.get("oa_pdf_url") or ""])
                    out_fh.flush()
                with out_lock:  # reuse lock for counter — cheap
                    wins += 1
            else:
                with miss_lock:
                    miss.writerow([paper["id"], paper["title"][:200]])
                    miss_fh.flush()
            with out_lock:
                processed += 1
                i = processed
                if i % 50 == 0 or i == len(rows):
                    elapsed = time.time() - start
                    rate = i / elapsed if elapsed else 0
                    eta_min = (len(rows) - i) / rate / 60 if rate else 0
                    print(
                        f"  {i}/{len(rows)}  wins={wins}  rate={rate:.1f}/s  eta={eta_min:.1f}min",
                        flush=True,
                    )
            return hit is not None

        with ThreadPoolExecutor(max_workers=max(1, args.workers)) as pool:
            futures = [pool.submit(_one, r) for r in rows]
            for _ in as_completed(futures):
                pass

    print(f"\n✓ Done. wins={wins}/{len(rows)} ({100*wins/len(rows):.1f}%)")
    print(f"  CSV:  {OUT_CSV}")
    print(f"  Miss: {MISS_CSV}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
