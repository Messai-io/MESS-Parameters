#!/usr/bin/env python3
"""
Verify that every source row in data/parameter-provenance.json with a
non-null `snippet` actually contains its `value` within ±1% tolerance.

This is the pipeline's single biggest integrity check: it directly
detects LLM hallucinations. If the LLM emitted 354 mW/m² but the
snippet text says "326 mW/m²", that's caught here.

Usage:   python scripts/verify/snippet_grounding.py
Output:
  data/verification/snippet-grounding.json        summary + verdict
  data/verification/snippet-grounding-failures.csv every failing row

Pass threshold: grounding_rate >= 0.92. Below 0.80 = overall FAIL.

Pure stdlib — no LLM calls, no external packages.

Verification-of-verification: see tests/test_snippet_grounding_negative.py
for the synthetic bad-pair pytest that must always flag 50/50.
"""

from __future__ import annotations

import csv
import json
import math
import re
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable

REPO_ROOT = Path(__file__).resolve().parents[2]
PROV_PATH = REPO_ROOT / "data" / "parameter-provenance.json"
OUT_DIR = REPO_ROOT / "data" / "verification"
OUT_JSON = OUT_DIR / "snippet-grounding.json"
OUT_FAIL_CSV = OUT_DIR / "snippet-grounding-failures.csv"

# Pass thresholds preregistered in the plan.
PASS = 0.92
FAIL = 0.80
TOLERANCE_REL = 0.01  # ±1%


# ─── Number extraction ──────────────────────────────────────────────────
# Scientific notation, thousands separators, decimals, leading sign.
NUM_RE = re.compile(
    r"(?<![A-Za-z])"                 # don't match inside words
    r"([+\-]?"                        # optional sign
    r"(?:\d{1,3}(?:,\d{3})+|\d+)"     # 1,234 or 1234
    r"(?:\.\d+)?"                     # optional decimal
    r"(?:\s*[×x*]\s*10\s*\^?\s*[+\-]?\d+|[eE][+\-]?\d+)?" # ×10^n or e±n
    r")"
)


def parse_numbers(text: str) -> list[float]:
    """Every numeric literal in `text` as float. Sci notation, thousands
    separators, multiplicative ×10^n all normalized."""
    out: list[float] = []
    for m in NUM_RE.finditer(text or ""):
        raw = m.group(1).replace(",", "").replace("×", "*").replace("x", "*")
        # Normalize "1.5 * 10^-3" or "1.5 * 10-3"
        raw = re.sub(r"\s*\*\s*10\s*\^?\s*", "e", raw)
        try:
            out.append(float(raw))
        except ValueError:
            pass
    return out


def within_tolerance(target: float, candidate: float, rel: float = TOLERANCE_REL) -> bool:
    """True if candidate is within ±rel of target (relative), OR exactly
    equal for target=0. Also accepts small-magnitude absolute match for
    cases where relative tolerance is meaningless (|target| < 1e-12)."""
    if not (math.isfinite(target) and math.isfinite(candidate)):
        return False
    if target == 0:
        return candidate == 0
    if abs(target) < 1e-12:
        return abs(candidate - target) < 1e-12
    return abs(candidate - target) / abs(target) <= rel


# ─── Pre-processing ─────────────────────────────────────────────────────

# After unit normalization in build-provenance.ts, the stored value is in
# canonical units, but the snippet may quote it in the original unit.
# Accept EITHER:
#   (a) canonical value appears in snippet (common case)
#   (b) any known-alias conversion of the snippet number hits canonical
# To keep this script zero-LLM and simple, we accept common magnitude
# conversions as tolerance: 1000× (W↔mW, A↔mA, g↔mg, etc.), 1e-3, 1e-4
# (mW/m² ↔ mW/cm²), 1e-6, and unit-equivalent.
UNIT_CONVERSION_FACTORS = [1.0, 1000.0, 0.001, 10000.0, 1e-4, 60.0, 1/60.0, 3600.0, 1/3600.0]


def grounded(value: float, snippet: str) -> bool:
    """Does any number in the snippet match the stored value after allowing
    reasonable unit conversions?"""
    if not snippet:
        return False
    nums = parse_numbers(snippet)
    for n in nums:
        for f in UNIT_CONVERSION_FACTORS:
            if within_tolerance(value, n * f):
                return True
    return False


# ─── Main ───────────────────────────────────────────────────────────────

@dataclass
class Failure:
    parameter_id: str
    parameter_name: str
    doi: str
    value: float
    unit: str
    snippet: str
    numbers_in_snippet: list[float]


def run() -> dict:
    if not PROV_PATH.exists():
        print(f"[error] missing {PROV_PATH}", file=sys.stderr)
        sys.exit(1)
    prov = json.loads(PROV_PATH.read_text())

    total_sources = 0
    sources_with_snippet = 0
    grounded_n = 0
    failures: list[Failure] = []

    for entry in prov.get("parameters", []):
        pid = entry.get("id")
        pname = entry.get("name") or ""
        for s in entry.get("sources", []) or []:
            total_sources += 1
            snippet = s.get("snippet") or ""
            if not snippet.strip():
                continue
            sources_with_snippet += 1
            try:
                v = float(s["value"])
            except (TypeError, ValueError):
                continue
            if grounded(v, snippet):
                grounded_n += 1
            else:
                failures.append(Failure(
                    parameter_id=pid,
                    parameter_name=pname,
                    doi=(s.get("doi") or ""),
                    value=v,
                    unit=(s.get("unit") or ""),
                    snippet=snippet[:300],
                    numbers_in_snippet=parse_numbers(snippet)[:10],
                ))

    grounding_rate = grounded_n / sources_with_snippet if sources_with_snippet else 0.0
    snippet_coverage = sources_with_snippet / total_sources if total_sources else 0.0

    if grounding_rate >= PASS:
        verdict = "PASS"
    elif grounding_rate >= FAIL:
        verdict = "FLAG"
    else:
        verdict = "FAIL"

    summary = {
        "schema_version": "0.1.0",
        "corpus_snapshot": prov.get("metadata", {}).get("generated_at"),
        "total_sources": total_sources,
        "sources_with_snippet": sources_with_snippet,
        "snippet_coverage": round(snippet_coverage, 4),
        "grounded_sources": grounded_n,
        "grounding_rate": round(grounding_rate, 4),
        "failure_count": len(failures),
        "pass_threshold": PASS,
        "fail_threshold": FAIL,
        "tolerance_relative": TOLERANCE_REL,
        "verdict": verdict,
    }

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    OUT_JSON.write_text(json.dumps(summary, indent=2) + "\n")

    with OUT_FAIL_CSV.open("w", newline="") as f:
        w = csv.writer(f)
        w.writerow(["parameter_id", "parameter_name", "doi", "value", "unit",
                    "snippet", "numbers_in_snippet"])
        for r in failures:
            w.writerow([r.parameter_id, r.parameter_name, r.doi, r.value, r.unit,
                        r.snippet.replace("\n", " "),
                        " | ".join(f"{n:g}" for n in r.numbers_in_snippet)])

    print(f"Snippet-grounding audit:")
    print(f"  total sources:           {total_sources}")
    print(f"  with snippet:            {sources_with_snippet} ({100*snippet_coverage:.1f}%)")
    print(f"  grounded:                {grounded_n} / {sources_with_snippet}")
    print(f"  grounding_rate:          {grounding_rate:.4f}  (pass ≥ {PASS}, fail < {FAIL})")
    print(f"  verdict:                 {verdict}")
    print(f"  wrote summary  → {OUT_JSON}")
    print(f"  wrote failures → {OUT_FAIL_CSV} ({len(failures)} rows)")
    return summary


if __name__ == "__main__":
    run()
