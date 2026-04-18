#!/usr/bin/env python3
"""
Extract figures from a single paper.pdf via PyMuPDF.

Usage:
    python extract_figures.py <by-doi-dir>

Outputs:
    figures/fig-NNN.png   raster crop of every embedded image
    figures/fig-NNN.json  {caption, page, bbox: [x0, y0, x1, y1], xref}

Caption heuristic: the closest text block beginning with "Fig", "Figure", or
"FIG." within 200 points of the image bbox on the same page.
"""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

CAPTION_RE = re.compile(r"^(Fig(?:ure)?|FIG)\.?\s*\d+", re.IGNORECASE)


def main() -> int:
    if len(sys.argv) != 2:
        print("usage: extract_figures.py <by-doi-dir>", file=sys.stderr)
        return 1
    paper_dir = Path(sys.argv[1])
    pdf_path = paper_dir / "paper.pdf"
    if not pdf_path.exists():
        print(f"missing {pdf_path}", file=sys.stderr)
        return 1

    try:
        import fitz  # type: ignore
    except ImportError:
        print("PyMuPDF (fitz) not installed", file=sys.stderr)
        return 2

    fig_dir = paper_dir / "figures"
    fig_dir.mkdir(parents=True, exist_ok=True)

    doc = fitz.open(str(pdf_path))
    n = 0
    for page_idx in range(doc.page_count):
        page = doc[page_idx]
        text_blocks = page.get_text("blocks")
        for img in page.get_images(full=True):
            xref = img[0]
            try:
                rects = page.get_image_rects(xref)
            except Exception:
                rects = []
            if not rects:
                continue
            bbox = rects[0]

            # Find caption: nearest block matching CAPTION_RE
            caption = None
            best_dist = float("inf")
            for tb in text_blocks:
                bx0, by0, bx1, by1, text, *_ = tb
                if not CAPTION_RE.search(text or ""):
                    continue
                # vertical distance from image bottom to caption top
                dy = abs(by0 - bbox.y1)
                if dy < best_dist and dy < 200:
                    best_dist = dy
                    caption = text.strip()

            n += 1
            stem = f"fig-{n:03d}"
            try:
                pix = fitz.Pixmap(doc, xref)
                if pix.alpha:
                    pix = fitz.Pixmap(fitz.csRGB, pix)
                pix.save(str(fig_dir / f"{stem}.png"))
            except Exception as e:
                print(f"  [warn] could not render image xref={xref}: {e}", file=sys.stderr)
                continue

            (fig_dir / f"{stem}.json").write_text(json.dumps({
                "page": page_idx + 1,
                "bbox": [bbox.x0, bbox.y0, bbox.x1, bbox.y1],
                "xref": xref,
                "caption": caption,
            }, indent=2))
    doc.close()
    print(f"  {pdf_path}: {n} figure(s) extracted")
    return 0


if __name__ == "__main__":
    sys.exit(main())
