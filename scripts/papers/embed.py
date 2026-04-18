#!/usr/bin/env python3
"""
Build per-paper sentence embeddings for semantic search.

Usage:
    python embed.py <by-doi-dir>

Outputs:
    embeddings/chunks.jsonl    {chunk_id, page, section, text}
    embeddings/vectors.npy     parallel fp16 matrix (n_chunks, dim)

Chunking strategy: section-aware. Each section is split into ~512-token
chunks with 64-token overlap. Page numbers are not preserved (marker doesn't
emit them inline) — `page` is null. Add page tracking when marker upstream
exposes it.

Model:
    BAAI/bge-large-en-v1.5  (1024-dim, strong on scientific text)

Override with env BGE_MODEL.
"""

from __future__ import annotations

import json
import os
import sys
from pathlib import Path

MODEL_NAME = os.environ.get("BGE_MODEL", "BAAI/bge-large-en-v1.5")
TOKENS_PER_CHUNK = int(os.environ.get("CHUNK_TOKENS", "512"))
OVERLAP = int(os.environ.get("CHUNK_OVERLAP", "64"))


def chunk_text(text: str, tokens_per_chunk: int, overlap: int) -> list[str]:
    """Word-based proxy for token-based chunking. Good enough for BGE."""
    words = text.split()
    if not words:
        return []
    step = tokens_per_chunk - overlap
    out: list[str] = []
    for i in range(0, len(words), step):
        chunk = words[i : i + tokens_per_chunk]
        if len(chunk) < 8:
            break
        out.append(" ".join(chunk))
    return out


def main() -> int:
    if len(sys.argv) != 2:
        print("usage: embed.py <by-doi-dir>", file=sys.stderr)
        return 1
    paper_dir = Path(sys.argv[1])
    sec_path = paper_dir / "text" / "sections.json"
    if not sec_path.exists():
        print(f"missing {sec_path}", file=sys.stderr)
        return 1

    sections = json.loads(sec_path.read_text())

    chunks: list[dict] = []
    chunk_id = 0
    for section_name, body in sections.items():
        for piece in chunk_text(body, TOKENS_PER_CHUNK, OVERLAP):
            chunks.append({
                "chunk_id": chunk_id,
                "section": section_name,
                "page": None,
                "text": piece,
            })
            chunk_id += 1

    if not chunks:
        print(f"  {paper_dir.name}: no chunks; skipping embed")
        return 0

    out_dir = paper_dir / "embeddings"
    out_dir.mkdir(parents=True, exist_ok=True)
    with (out_dir / "chunks.jsonl").open("w") as f:
        for c in chunks:
            f.write(json.dumps(c) + "\n")

    try:
        import numpy as np
        from sentence_transformers import SentenceTransformer
    except ImportError:
        print("  [warn] sentence-transformers not installed; skipping vectors", file=sys.stderr)
        return 0

    model = SentenceTransformer(MODEL_NAME)
    vectors = model.encode(
        [c["text"] for c in chunks],
        batch_size=16,
        show_progress_bar=False,
        convert_to_numpy=True,
        normalize_embeddings=True,
    ).astype("float16")
    np.save(out_dir / "vectors.npy", vectors)
    print(f"  {paper_dir.name}: {len(chunks)} chunks, vectors {vectors.shape} {vectors.dtype}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
