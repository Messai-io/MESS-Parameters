#!/usr/bin/env python3
"""
Scan papers/by-doi/*/ and emit:

    papers/manifest.parquet
    papers/manifest.jsonl
    papers/index.csv

Columns: doi, title, year, journal, system_type, n_observations, n_figures,
         n_chunks, sha256, origins (joined repo names).

`system_type` is heuristically inferred from the abstract: it picks the first
of MFC, MEC, MDC, MES that appears.
"""

from __future__ import annotations

import csv
import json
import os
import re
import sys
from pathlib import Path
from typing import Any

REPO_ROOT = Path(__file__).resolve().parents[2]
PAPERS_ROOT = Path(os.environ.get("PAPERS_ROOT", REPO_ROOT / "papers"))

SYSTEM_RE = re.compile(r"\b(MFC|MEC|MDC|MES|BES)\b")


def infer_system_type(abstract: str) -> str | None:
    if not abstract:
        return None
    m = SYSTEM_RE.search(abstract)
    return m.group(1) if m else None


def scan_paper(paper_dir: Path) -> dict[str, Any] | None:
    src = paper_dir / "source.json"
    meta = paper_dir / "metadata.json"
    if not src.exists():
        return None
    src_meta = json.loads(src.read_text())
    md = json.loads(meta.read_text()) if meta.exists() else {}

    obs_path = paper_dir / "parameters" / "observations.json"
    n_obs = 0
    if obs_path.exists():
        try:
            n_obs = len(json.loads(obs_path.read_text()))
        except Exception:
            pass

    figs = list((paper_dir / "figures").glob("fig-*.png")) if (paper_dir / "figures").exists() else []
    chunks_path = paper_dir / "embeddings" / "chunks.jsonl"
    n_chunks = 0
    if chunks_path.exists():
        with chunks_path.open() as f:
            for _ in f:
                n_chunks += 1

    origins = ",".join(sorted({o.get("src_repo", "") for o in src_meta.get("origins", [])}))

    return {
        "doi": src_meta.get("doi") or md.get("doi"),
        "title": (md.get("title") or "").strip(),
        "year": md.get("year"),
        "journal": md.get("journal") or "",
        "publisher": md.get("publisher") or "",
        "system_type": infer_system_type(md.get("abstract") or md.get("title") or ""),
        "n_observations": n_obs,
        "n_figures": len(figs),
        "n_chunks": n_chunks,
        "sha256": src_meta.get("canonical_sha256"),
        "origins": origins,
        "n_alternates": len(src_meta.get("alternates", [])),
    }


def main() -> int:
    by_doi = PAPERS_ROOT / "by-doi"
    if not by_doi.exists():
        print(f"missing {by_doi}", file=sys.stderr)
        return 1

    rows: list[dict[str, Any]] = []
    for d in sorted(by_doi.rglob("source.json")):
        row = scan_paper(d.parent)
        if row:
            rows.append(row)

    PAPERS_ROOT.mkdir(parents=True, exist_ok=True)

    # JSONL
    with (PAPERS_ROOT / "manifest.jsonl").open("w") as f:
        for r in rows:
            f.write(json.dumps(r) + "\n")

    # CSV (small, human-friendly)
    with (PAPERS_ROOT / "index.csv").open("w", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=[
            "doi", "title", "year", "journal", "system_type",
            "n_observations", "n_figures", "n_chunks", "origins",
        ])
        writer.writeheader()
        for r in rows:
            writer.writerow({k: r.get(k, "") for k in writer.fieldnames})

    # Parquet
    try:
        import pandas as pd
        df = pd.DataFrame(rows)
        df.to_parquet(PAPERS_ROOT / "manifest.parquet", index=False)
        print(f"Wrote manifest.parquet ({len(df)} rows)")
    except ImportError:
        print("  [warn] pandas/pyarrow not installed; skipped parquet")

    print(f"Wrote manifest.jsonl and index.csv ({len(rows)} rows)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
