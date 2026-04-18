#!/usr/bin/env python3
"""
Extract structured text from a single paper.pdf using marker-pdf.

Usage:
    python extract_text.py <by-doi-dir>

Outputs:
    text/full.md                 markdown body with inline equations + tables
    text/sections.json           {abstract, methods, results, discussion, conclusion}
    text/tables/table-NN.csv     one CSV per detected table

Section segmentation is heuristic: marker emits markdown headings; we map
them to the canonical IUPAC-ish sections by lowercased prefix match.
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

SECTION_PATTERNS: list[tuple[str, list[str]]] = [
    ("abstract", ["abstract", "summary"]),
    ("introduction", ["introduction", "background"]),
    ("methods", ["materials and methods", "methods", "methodology", "experimental"]),
    ("results", ["results", "results and discussion"]),
    ("discussion", ["discussion"]),
    ("conclusion", ["conclusion", "conclusions", "concluding remarks"]),
    ("references", ["references", "bibliography"]),
]


def classify_heading(heading: str) -> str | None:
    h = heading.lower().strip().lstrip("0123456789. ").strip()
    for canon, prefixes in SECTION_PATTERNS:
        for p in prefixes:
            if h.startswith(p):
                return canon
    return None


def split_sections(markdown: str) -> dict[str, str]:
    """Walk markdown headings; assign body chunks to canonical sections."""
    sections: dict[str, list[str]] = {k: [] for k, _ in SECTION_PATTERNS}
    current = None
    for line in markdown.splitlines():
        m = re.match(r"^(#{1,3})\s+(.*)", line)
        if m:
            canon = classify_heading(m.group(2))
            if canon is not None:
                current = canon
                continue
        if current is not None:
            sections[current].append(line)
    return {k: "\n".join(v).strip() for k, v in sections.items() if v}


def extract_with_marker(pdf_path: Path, out_dir: Path) -> str:
    """Run marker-pdf and return the markdown body."""
    try:
        from marker.convert import convert_single_pdf  # type: ignore
        from marker.models import load_all_models  # type: ignore
    except ImportError:
        print("marker-pdf not installed; falling back to pdfminer plain text", file=sys.stderr)
        from pdfminer.high_level import extract_text
        return extract_text(str(pdf_path))

    models = load_all_models()
    full_text, _images, _meta = convert_single_pdf(str(pdf_path), models)
    return full_text


def write_tables(markdown: str, tables_dir: Path) -> int:
    """Pull GFM tables out of the markdown body, one CSV each."""
    tables_dir.mkdir(parents=True, exist_ok=True)
    rows = []
    in_table = False
    table: list[list[str]] = []
    count = 0

    def flush() -> None:
        nonlocal count, table
        if not table:
            return
        count += 1
        path = tables_dir / f"table-{count:02d}.csv"
        with path.open("w") as f:
            for row in table:
                f.write(",".join(c.replace(",", " ").strip() for c in row) + "\n")
        table = []

    for line in markdown.splitlines():
        if line.strip().startswith("|") and line.strip().endswith("|"):
            cells = [c.strip() for c in line.strip().strip("|").split("|")]
            # skip GFM separator rows like |---|---|
            if all(re.fullmatch(r":?-+:?", c) for c in cells):
                continue
            table.append(cells)
            in_table = True
        elif in_table:
            flush()
            in_table = False
    flush()
    return count


def main() -> int:
    if len(sys.argv) != 2:
        print("usage: extract_text.py <by-doi-dir>", file=sys.stderr)
        return 1
    paper_dir = Path(sys.argv[1])
    pdf = paper_dir / "paper.pdf"
    if not pdf.exists():
        print(f"missing {pdf}", file=sys.stderr)
        return 1

    text_dir = paper_dir / "text"
    text_dir.mkdir(parents=True, exist_ok=True)

    markdown = extract_with_marker(pdf, text_dir)
    (text_dir / "full.md").write_text(markdown)

    sections = split_sections(markdown)
    (text_dir / "sections.json").write_text(json.dumps(sections, indent=2))

    n_tables = write_tables(markdown, text_dir / "tables")
    print(f"  {pdf}: {len(markdown):,} chars, {len(sections)} sections, {n_tables} tables")
    return 0


if __name__ == "__main__":
    sys.exit(main())
