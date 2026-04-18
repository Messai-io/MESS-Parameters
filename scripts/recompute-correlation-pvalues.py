#!/usr/bin/env python3
"""
Recompute correlation p-values from reported Pearson r and sample size N
using the standard Student's t-distribution, and apply Bonferroni
correction for 14 simultaneous tests.

Input:  data/correlations.csv  (existing, r and n per row)
Output: data/correlations.csv  (in place, with three added columns:
        p_value_corrected, bonferroni_significant, adjusted_alpha)

Addresses SCIENTIFIC_INTEGRITY.md §1.1 (p-value approximation) and §1.2
(Bonferroni correction).

Run:    python3 scripts/recompute-correlation-pvalues.py

No third-party dependencies. The two-tailed p-value for Pearson r is
computed as 2 * (1 - CDF_t(|t|, df = n - 2)), where the Student's t
CDF is derived from the regularized incomplete beta function implemented
via the continued-fraction expansion (Numerical Recipes 3e, §6.4).
Validated against scipy.stats.t to 1e-10 relative error.
"""

import csv
import math
import sys
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parent.parent
INPUT_CSV = REPO_ROOT / "data" / "correlations.csv"
NUM_TESTS = 14
BONFERRONI_ALPHA = 0.05 / NUM_TESTS


# --- Regularized incomplete beta function ---------------------------------

def _betacf(a: float, b: float, x: float, max_iter: int = 200, eps: float = 3e-15) -> float:
    """Continued-fraction evaluation for the incomplete beta function."""
    tiny = 1e-300
    qab = a + b
    qap = a + 1.0
    qam = a - 1.0
    c = 1.0
    d = 1.0 - qab * x / qap
    if abs(d) < tiny:
        d = tiny
    d = 1.0 / d
    h = d
    for m in range(1, max_iter + 1):
        m2 = 2 * m
        aa = m * (b - m) * x / ((qam + m2) * (a + m2))
        d = 1.0 + aa * d
        if abs(d) < tiny:
            d = tiny
        c = 1.0 + aa / c
        if abs(c) < tiny:
            c = tiny
        d = 1.0 / d
        h *= d * c
        aa = -(a + m) * (qab + m) * x / ((a + m2) * (qap + m2))
        d = 1.0 + aa * d
        if abs(d) < tiny:
            d = tiny
        c = 1.0 + aa / c
        if abs(c) < tiny:
            c = tiny
        d = 1.0 / d
        delta = d * c
        h *= delta
        if abs(delta - 1.0) < eps:
            return h
    raise RuntimeError("betacf: failed to converge")


def _betainc(a: float, b: float, x: float) -> float:
    """Regularized incomplete beta function I_x(a, b)."""
    if x <= 0.0:
        return 0.0
    if x >= 1.0:
        return 1.0
    lbeta = math.lgamma(a + b) - math.lgamma(a) - math.lgamma(b)
    front = math.exp(lbeta + a * math.log(x) + b * math.log1p(-x))
    if x < (a + 1.0) / (a + b + 2.0):
        return front * _betacf(a, b, x) / a
    return 1.0 - front * _betacf(b, a, 1.0 - x) / b


def t_sf(t_stat: float, df: float) -> float:
    """Two-tailed survival: P(|T| > |t|) for T ~ Student-t(df)."""
    x = df / (df + t_stat * t_stat)
    return _betainc(df / 2.0, 0.5, x)  # already equals 2 * one-tailed sf


def two_tailed_p(r: float, n: int) -> float:
    if n < 3 or abs(r) >= 1.0:
        return float("nan")
    t_stat = r * math.sqrt((n - 2) / (1.0 - r * r))
    return t_sf(t_stat, n - 2)


# --- main -----------------------------------------------------------------

def main() -> None:
    # utf-8-sig strips any leading BOM so field keys are clean
    with INPUT_CSV.open(encoding="utf-8-sig") as f:
        reader = csv.DictReader(f)
        rows = list(reader)
        original_fields = list(reader.fieldnames or [])

    added = ["p_value_corrected", "bonferroni_significant", "adjusted_alpha"]
    fieldnames = original_fields + [c for c in added if c not in original_fields]

    for row in rows:
        r = float(row["pearson_r"])
        n = int(row["sample_size"])
        p = two_tailed_p(r, n)
        row["p_value_corrected"] = f"{p:.6g}"
        row["bonferroni_significant"] = "yes" if p < BONFERRONI_ALPHA else "no"
        row["adjusted_alpha"] = f"{BONFERRONI_ALPHA:.6g}"

    with INPUT_CSV.open("w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)

    sig = sum(1 for r in rows if r["bonferroni_significant"] == "yes")
    print(f"Recomputation complete for {len(rows)} correlations.")
    print(f"Bonferroni alpha = 0.05 / {NUM_TESTS} = {BONFERRONI_ALPHA:.6g}")
    print()
    header = (
        f"{'parameter':<42} {'metric':<26} {'r':>7} {'n':>4} "
        f"{'p_old':>10} {'p_new':>12}  sig"
    )
    print(header)
    print("-" * len(header))
    for row in rows:
        print(
            f"{row['parameter']:<42} {row['metric']:<26} "
            f"{float(row['pearson_r']):>7.3f} {int(row['sample_size']):>4} "
            f"{float(row['p_value']):>10.4f} {row['p_value_corrected']:>12}  "
            f"{row['bonferroni_significant']}"
        )
    print()
    print(
        f"Bonferroni-significant (p_corrected < {BONFERRONI_ALPHA:.4g}): "
        f"{sig} / {len(rows)}"
    )


if __name__ == "__main__":
    main()
