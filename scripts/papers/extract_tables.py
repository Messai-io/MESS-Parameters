#!/usr/bin/env python3
"""
Extract structured tables from a single paper.pdf using pdfplumber.

Why: most quantitative MES data (power density × conditions, CE at pH X,
COD removal over HRT) lives in tables, not prose. Our PyMuPDF text
extractor flattens tables to unreadable streams of numbers. pdfplumber
detects table regions heuristically and emits them as CSV + a caption
guess. extract_parameters.py packs the tables into its LLM prompt so
reported values keep their conditions attached.

Usage:  python extract_tables.py <by-doi-dir>

Outputs:
  text/tables/table-NN.csv      one CSV per detected table
  text/tables/table-NN.meta.json  {page, bbox, caption, n_rows, n_cols}
  text/tables/summary.json      {count, pages_with_tables}

Idempotent: returns early if text/tables/summary.json already exists.
Tables are additive; extract_text.py's output is untouched.
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path
from typing import Any


def _cell_clean(s: Any) -> str:
    if s is None:
        return ""
    s = str(s).replace("\n", " ").replace("\r", " ").strip()
    return re.sub(r"\s+", " ", s)


def _csv_row(cells: list[str]) -> str:
    out: list[str] = []
    for c in cells:
        if re.search(r'[",\n]', c):
            out.append('"' + c.replace('"', '""') + '"')
        else:
            out.append(c)
    return ",".join(out)


def _guess_caption(page_text: str, bbox: tuple[float, float, float, float]) -> str | None:
    """Best-effort caption: look for 'Table N ...' line that precedes the
    table region, then take up to 300 chars after it. pdfplumber gives us
    the table's y-range; we scan the text above for a caption header."""
    if not page_text:
        return None
    # Most academic papers prefix tables with "Table N." or "Table N:" or "TABLE N "
    m = re.search(r"(?:^|\n)\s*(Table|TABLE)\s+\d+[.:]\s*([^\n]{10,300})", page_text)
    if m:
        return f"{m.group(1)} {m.group(2).strip()}"
    return None


_NUM_CELL_RE = re.compile(r"[+\-]?\d[\d.,eE+\-]*")


def _looks_like_real_table(cells: list[list[str]]) -> bool:
    """Filter pdfplumber false positives. Real scientific tables have:
    - at least one row with ≥ 3 numeric cells (a data row)
    - ≤ 50% empty cells overall
    - not "mostly one long sentence" disguised as a table"""
    total = 0
    empty = 0
    numeric_rows = 0
    long_text_cells = 0
    for row in cells:
        total += len(row)
        row_numeric = 0
        for c in row:
            if not c:
                empty += 1
                continue
            if _NUM_CELL_RE.fullmatch(c.strip()):
                row_numeric += 1
            elif len(c) > 80:
                long_text_cells += 1
        if row_numeric >= 3:
            numeric_rows += 1
    if total == 0:
        return False
    empty_ratio = empty / total
    long_ratio = long_text_cells / total
    if empty_ratio > 0.5:
        return False
    if long_ratio > 0.1:
        return False
    if numeric_rows == 0:
        return False
    return True


def _emit_table(
    cells: list[list[Any]],
    idx: int,
    out_dir: Path,
    page_num: int,
    bbox: tuple[float, float, float, float],
    caption: str | None,
) -> bool:
    if not cells:
        return False
    clean = [[_cell_clean(c) for c in row] for row in cells]
    while clean and all(c == "" for c in clean[0]):
        clean.pop(0)
    if not clean:
        return False
    n_rows = len(clean)
    n_cols = max(len(r) for r in clean)
    if n_rows < 2 or n_cols < 2:
        return False
    # Pad to rectangular
    for row in clean:
        while len(row) < n_cols:
            row.append("")
    # Quality gate: reject layout noise that pdfplumber mis-classified as a table.
    if not _looks_like_real_table(clean):
        return False
    csv_path = out_dir / f"table-{idx:02d}.csv"
    meta_path = out_dir / f"table-{idx:02d}.meta.json"
    with csv_path.open("w") as f:
        for row in clean:
            f.write(_csv_row(row) + "\n")
    meta_path.write_text(json.dumps({
        "page": page_num,
        "bbox": bbox,
        "caption": caption,
        "n_rows": n_rows,
        "n_cols": n_cols,
    }, indent=2))
    return True


def main() -> int:
    if len(sys.argv) != 2:
        print("usage: extract_tables.py <by-doi-dir>", file=sys.stderr)
        return 1
    paper_dir = Path(sys.argv[1])
    pdf = paper_dir / "paper.pdf"
    if not pdf.exists():
        print(f"missing {pdf}", file=sys.stderr)
        return 1

    out_dir = paper_dir / "text" / "tables"
    summary_path = out_dir / "summary.json"
    if summary_path.exists():
        return 0  # resume guard

    out_dir.mkdir(parents=True, exist_ok=True)

    import pdfplumber  # imported lazily so the module load time is a no-op on resume
    count = 0
    pages_with_tables: set[int] = set()
    try:
        with pdfplumber.open(str(pdf)) as doc:
            for page_num, page in enumerate(doc.pages, 1):
                try:
                    tables = page.find_tables()
                except Exception:
                    tables = []
                if not tables:
                    continue
                page_text = ""
                try:
                    page_text = page.extract_text() or ""
                except Exception:
                    pass
                for t in tables:
                    cells = t.extract()
                    caption = _guess_caption(page_text, t.bbox)
                    if _emit_table(cells, count + 1, out_dir, page_num, t.bbox, caption):
                        count += 1
                        pages_with_tables.add(page_num)
    except Exception as e:
        # corrupt PDFs, password-protected, etc. — log and move on.
        print(f"  {paper_dir.name}: pdfplumber failed: {e}", file=sys.stderr)

    summary_path.write_text(json.dumps({
        "count": count,
        "pages_with_tables": sorted(pages_with_tables),
    }, indent=2))
    print(f"  {paper_dir.name}: {count} tables from {len(pages_with_tables)} pages")
    return 0


if __name__ == "__main__":
    sys.exit(main())
