"""
Verification-of-verification for scripts/verify/snippet_grounding.py.

The grounding check only matters if it can actually detect a hallucinated
value. This test generates 50 synthetic bad pairs — value X paired with
a snippet that explicitly says value Y, with |X-Y| chosen to be outside
every unit-conversion factor the grounder considers. A correct detector
must flag all 50.

Also generates 50 synthetic good pairs (value X inside the snippet) and
the detector must accept all 50.

Run: papers/.venv/bin/python -m pytest tests/test_snippet_grounding_negative.py -v
Or:  papers/.venv/bin/python tests/test_snippet_grounding_negative.py
"""

from __future__ import annotations

import random
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts" / "verify"))

from snippet_grounding import grounded  # type: ignore


def _bad_pairs(seed: int = 13, n: int = 50) -> list[tuple[float, str]]:
    """Value + snippet quoting a CLEARLY different number, outside every
    factor in UNIT_CONVERSION_FACTORS (1, 1000, 1/1000, 1e4, 1/1e4, 60, 1/60,
    3600, 1/3600). Using random factors in [1.3, 2.5] stays well outside
    any of those."""
    rng = random.Random(seed)
    pairs: list[tuple[float, str]] = []
    for _ in range(n):
        value = rng.uniform(5, 5000)
        factor = rng.uniform(1.3, 2.5)  # NOT near 1, 60, 3600, or any 10^k
        wrong = value * factor
        snippet = f"The reported maximum was {wrong:.2f} mW/m² under steady-state conditions."
        pairs.append((value, snippet))
    return pairs


def _good_pairs(seed: int = 29, n: int = 50) -> list[tuple[float, str]]:
    rng = random.Random(seed)
    pairs: list[tuple[float, str]] = []
    for _ in range(n):
        value = round(rng.uniform(5, 5000), 2)
        snippet = f"The system achieved {value:.2f} mW/m² at steady state."
        pairs.append((value, snippet))
    return pairs


def test_negative_control_flags_all_50_bad_pairs() -> None:
    pairs = _bad_pairs()
    flagged = sum(1 for v, s in pairs if not grounded(v, s))
    assert flagged == 50, (
        f"negative control failed: grounder accepted {50 - flagged} bad pairs "
        f"(expected all 50 to be flagged)"
    )


def test_positive_control_accepts_all_50_good_pairs() -> None:
    pairs = _good_pairs()
    accepted = sum(1 for v, s in pairs if grounded(v, s))
    assert accepted == 50, (
        f"positive control failed: grounder rejected {50 - accepted} good pairs "
        f"(expected all 50 to be accepted)"
    )


def test_empty_snippet_never_grounds() -> None:
    assert not grounded(123.4, "")
    assert not grounded(123.4, "   ")


def test_zero_value_requires_zero_in_snippet() -> None:
    assert grounded(0.0, "baseline was 0 mA at t=0")
    assert not grounded(0.0, "baseline was 3.4 mA")


if __name__ == "__main__":
    test_negative_control_flags_all_50_bad_pairs()
    test_positive_control_accepts_all_50_good_pairs()
    test_empty_snippet_never_grounds()
    test_zero_value_requires_zero_in_snippet()
    print("All 4 negative/positive-control tests passed.")
