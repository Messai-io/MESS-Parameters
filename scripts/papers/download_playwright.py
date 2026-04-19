#!/usr/bin/env python3
"""
Playwright fallback downloader — runs AFTER download_from_db.py has
walked its provider chain. Targets papers whose final log entry is
success=False, i.e. every provider failed.

Unlike the main downloader (requests + curl_cffi), Playwright drives a
real Chromium with JavaScript and full Chrome TLS fingerprint. That
catches three failure modes the main chain cannot:

  1. PDF URLs injected by client-side JS (React-rendered download buttons).
  2. Cloudflare Turnstile / challenge pages that only a real browser
     passes.
  3. Per-publisher download UI (MDPI "view-pdf-text", Frontiers
     "download-paper", etc.) where the native landing HTML is a stub.

It does NOT bypass paywalls. No institutional SSO, no stored cookies,
no profile copy. If the PDF is genuinely paywalled, Playwright sees a
"Purchase" page and logs `provider=playwright, success=False` with a
paywall hint.

Usage:
    papers/.venv/bin/python -m playwright install chromium  # one-time
    papers/.venv/bin/python scripts/papers/download_playwright.py --limit 50
    papers/.venv/bin/python scripts/papers/download_playwright.py

Pipeline integration (mirrors download_from_db.py):
  - reads  papers/staging/papers-to-download.csv   (for DOI+id+title)
           papers/staging/download-attempts.jsonl  (for resume)
  - writes papers/downloaded/<sha[:2]>/<sha>.pdf   (canonical location)
           papers/staging/download-attempts.jsonl  (append-only log)

Downstream scripts (discover, resolve, import_pdfs) pick up the new
PDFs on their next run — Playwright is transparent to them.
"""

from __future__ import annotations

import argparse
import csv
import hashlib
import json
import re
import sys
import time
from contextlib import contextmanager
from dataclasses import asdict, dataclass
from pathlib import Path
from urllib.parse import urljoin, urlparse

REPO_ROOT = Path(__file__).resolve().parents[2]
PAPERS_ROOT = REPO_ROOT / "papers"
STAGING = PAPERS_ROOT / "staging"
DOWNLOADED = PAPERS_ROOT / "downloaded"
ATTEMPTS_LOG = STAGING / "download-attempts.jsonl"
INPUT_CSV = STAGING / "papers-to-download.csv"

PER_PAPER_RATE_SEC = 3.0
MAX_PDF_BYTES = 100 * 1024 * 1024  # 100 MB — reject stream explosions
PAGE_SETTLE_MS = 3000
GOTO_TIMEOUT_MS = 30000

PAYWALL_HINTS = (
    "purchase pdf", "buy access", "get access", "subscribe",
    "$ per article", "institutional login", "shibboleth",
)

# Priority-ordered PDF-URL extractors. Each returns a str URL or None.
# Best signal first: Highwire Press citation_pdf_url is a W3C convention
# supported by NIH, AAAS, ACS, MDPI, Frontiers, PLOS, RSC, etc.
PUBLISHER_SELECTORS = [
    # Universal conventions first.
    ("meta[name='citation_pdf_url']", "content"),
    ("link[rel='alternate'][type='application/pdf']", "href"),
    # Publisher-specific.
    ("a.view-pdf-text", "href"),                                    # MDPI
    ("a.download-pdf", "href"),                                     # Frontiers (some layouts)
    (".download-paper a", "href"),                                  # Frontiers
    ("a[title='Download PDF']", "href"),                            # RSC, Royal Society
    ("a[title='Download this article in PDF format']", "href"),     # Hindawi legacy
    ("a.pdf-download-link", "href"),                                # Hindawi modern
    ("a.btn-multi-block-primary", "href"),                          # IOP
    (".show-pdf a", "href"),                                        # Taylor & Francis
    ("a[data-track-action='download pdf']", "href"),                # Springer
    ("a.c-pdf-download__link", "href"),                             # Springer Nature
    ("a.article-tools__button--pdf", "href"),                       # Wiley (OA)
    ("a[data-track-event='download pdf']", "href"),                 # generic T&F
]


# ─── Resume / input loading ─────────────────────────────────────────────

def load_failed_paper_ids() -> set[str]:
    """Paper ids with at least one logged attempt but no success. These are
    the Playwright targets."""
    attempted: set[str] = set()
    succeeded: set[str] = set()
    playwright_done: set[str] = set()
    if not ATTEMPTS_LOG.exists():
        return set()
    with ATTEMPTS_LOG.open() as f:
        for line in f:
            try:
                row = json.loads(line)
            except Exception:
                continue
            pid = row.get("paper_id")
            if not pid:
                continue
            attempted.add(pid)
            if row.get("success"):
                succeeded.add(pid)
            if row.get("provider") == "playwright":
                playwright_done.add(pid)
    return (attempted - succeeded) - playwright_done


def read_papers() -> list[dict]:
    if not INPUT_CSV.exists():
        print(f"[error] missing {INPUT_CSV}", file=sys.stderr)
        sys.exit(1)
    with INPUT_CSV.open(newline="") as f:
        return list(csv.DictReader(f))


# ─── Canonical save (identical convention to download_from_db.py) ───────

def _sha256(path: Path) -> str:
    h = hashlib.sha256()
    with path.open("rb") as f:
        for chunk in iter(lambda: f.read(65536), b""):
            h.update(chunk)
    return h.hexdigest()


def canonicalize(tmp_path: Path) -> tuple[Path, str, int]:
    sha = _sha256(tmp_path)
    size = tmp_path.stat().st_size
    final = DOWNLOADED / sha[:2] / f"{sha}.pdf"
    final.parent.mkdir(parents=True, exist_ok=True)
    if final.exists():
        try:
            tmp_path.unlink()
        except Exception:
            pass
    else:
        tmp_path.replace(final)
    return final, sha, size


# ─── Attempt log ────────────────────────────────────────────────────────

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


def log_attempt(a: Attempt, final: bool = False) -> None:
    row = asdict(a)
    if final:
        row["final"] = True
    STAGING.mkdir(parents=True, exist_ok=True)
    with ATTEMPTS_LOG.open("a") as f:
        f.write(json.dumps(row) + "\n")


# ─── Playwright core ────────────────────────────────────────────────────

def extract_pdf_url(page, base_url: str) -> str | None:
    for selector, attr in PUBLISHER_SELECTORS:
        try:
            loc = page.locator(selector).first
            if loc.count() == 0:
                continue
            href = loc.get_attribute(attr, timeout=1500)
            if href:
                absolute = urljoin(base_url, href)
                if absolute.lower().startswith("http"):
                    return absolute
        except Exception:
            continue
    # Text-match fallback: any <a> whose text hints at a PDF download.
    try:
        for text in ("Download PDF", "View PDF", "Full-Text PDF", "Full Text PDF"):
            loc = page.get_by_role("link", name=re.compile(re.escape(text), re.I)).first
            if loc.count() > 0:
                href = loc.get_attribute("href", timeout=1500)
                if href:
                    absolute = urljoin(base_url, href)
                    if absolute.lower().startswith("http"):
                        return absolute
    except Exception:
        pass
    return None


def page_looks_paywalled(page) -> bool:
    try:
        txt = (page.content() or "").lower()
    except Exception:
        return False
    return any(h in txt for h in PAYWALL_HINTS)


def download_via_context(context, pdf_url: str, referer: str) -> bytes | None:
    try:
        resp = context.request.get(
            pdf_url,
            headers={"Referer": referer, "Accept": "application/pdf,*/*;q=0.9"},
            timeout=60_000,
        )
    except Exception:
        return None
    if resp.status != 200:
        return None
    body = resp.body()
    if not body or len(body) < 1024:
        return None
    if len(body) > MAX_PDF_BYTES:
        return None
    if not body.startswith(b"%PDF"):
        return None
    return body


@contextmanager
def playwright_browser(headless: bool = True):
    """Yield a fresh Playwright Chromium context with stealth applied. No
    profile copy, no persistent state, no user cookies."""
    try:
        from playwright.sync_api import sync_playwright  # type: ignore
    except ImportError:
        print("[error] playwright not installed. Run: papers/.venv/bin/pip install playwright", file=sys.stderr)
        print("        papers/.venv/bin/python -m playwright install chromium", file=sys.stderr)
        sys.exit(2)

    # playwright-stealth is optional; bot detection is lighter for OA publishers.
    try:
        from playwright_stealth import Stealth  # type: ignore
        stealth = Stealth()
    except ImportError:
        stealth = None

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=headless)
        context = browser.new_context(
            viewport={"width": 1280, "height": 900},
            user_agent=(
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                "AppleWebKit/537.36 (KHTML, like Gecko) "
                "Chrome/131.0.0.0 Safari/537.36"
            ),
            locale="en-US",
        )
        if stealth is not None:
            try:
                stealth.apply_stealth_sync(context)  # type: ignore[attr-defined]
            except Exception:
                pass
        try:
            yield context
        finally:
            context.close()
            browser.close()


def process_paper(context, paper: dict) -> Attempt:
    doi = (paper.get("doi") or "").strip()
    pid = paper.get("id") or ""
    base = Attempt(
        paper_id=pid, doi=doi, provider="playwright",
        upstream_url="", success=False, sha256=None,
        bytes_written=0, error=None,
    )
    if not doi:
        base.error = "no_doi"
        return base

    page = context.new_page()
    try:
        try:
            page.goto(f"https://doi.org/{doi}", wait_until="domcontentloaded", timeout=GOTO_TIMEOUT_MS)
        except Exception as e:
            base.error = f"goto:{type(e).__name__}"
            return base

        # Let Cloudflare and JS-injected UI settle.
        page.wait_for_timeout(PAGE_SETTLE_MS)
        landing_url = page.url

        pdf_url = extract_pdf_url(page, landing_url)
        if not pdf_url:
            base.error = "paywalled" if page_looks_paywalled(page) else "no_pdf_link"
            return base
        base.upstream_url = pdf_url

        body = download_via_context(context, pdf_url, referer=landing_url)
        if body is None:
            base.error = "fetch_failed"
            return base

        tmp = STAGING / f"_pw_{pid}.pdf"
        tmp.write_bytes(body)
        _final, sha, size = canonicalize(tmp)
        base.success = True
        base.sha256 = sha
        base.bytes_written = size
        return base
    finally:
        try:
            page.close()
        except Exception:
            pass


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--limit", type=int, default=None, help="process at most N failing DOIs (smoke-test)")
    ap.add_argument("--headful", action="store_true", help="show Chromium window (debug)")
    ap.add_argument("--rate-sec", type=float, default=PER_PAPER_RATE_SEC,
                    help="minimum seconds between DOIs")
    args = ap.parse_args()

    failed_ids = load_failed_paper_ids()
    all_papers = read_papers()
    targets = [p for p in all_papers if p.get("id") in failed_ids]
    if args.limit:
        targets = targets[:args.limit]

    print(f"[playwright] targeting {len(targets)} failing DOIs "
          f"(total failed in log: {len(failed_ids)})")
    if not targets:
        print("[playwright] nothing to do")
        return

    wins = 0
    paywalled = 0
    errors = 0
    last_t = 0.0
    with playwright_browser(headless=not args.headful) as ctx:
        for i, paper in enumerate(targets, 1):
            # Rate limit: at least rate-sec between DOIs.
            gap = args.rate_sec - (time.time() - last_t)
            if gap > 0:
                time.sleep(gap)
            last_t = time.time()
            a = process_paper(ctx, paper)
            log_attempt(a, final=True)
            if a.success:
                wins += 1
                tag = "✓"
            elif a.error == "paywalled":
                paywalled += 1
                tag = "$"
            else:
                errors += 1
                tag = "✗"
            host = urlparse(a.upstream_url).netloc if a.upstream_url else "-"
            if i % 10 == 0 or a.success:
                print(f"  {i:5d}/{len(targets)} {tag} "
                      f"wins={wins} paywalled={paywalled} errors={errors}  "
                      f"{paper.get('doi','')[:50]} {host}")

    print(f"[playwright] done  wins={wins} paywalled={paywalled} errors={errors}")


if __name__ == "__main__":
    main()
