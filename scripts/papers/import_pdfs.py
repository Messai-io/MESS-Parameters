#!/usr/bin/env python3
"""
Import resolved PDFs into the canonical store.

For each (sha256, doi) pair from staging/resolution.jsonl:

    papers/by-doi/<DOI>/paper.pdf       (hardlink to the source file)
    papers/by-doi/<DOI>/paper.sha256
    papers/by-doi/<DOI>/source.json     ({origins: [...], chosen_origin})
    papers/by-hash/<sha2-prefix>/<sha>/paper.pdf   (hardlink)

Unresolved sha256s land in papers/unresolved/<sha256>/.

Hardlinks mean a single inode is shared with the source file, so disk usage
stays flat. Sources are read-only; we never write outside `papers/`.
"""

from __future__ import annotations

import json
import os
import sys
from collections import defaultdict
from pathlib import Path
from typing import Any

REPO_ROOT = Path(__file__).resolve().parents[2]
PAPERS_ROOT = Path(os.environ.get("PAPERS_ROOT", REPO_ROOT / "papers"))
STAGING = PAPERS_ROOT / "staging"


def load_resolutions(path: Path) -> dict[str, dict[str, Any]]:
    by_sha: dict[str, dict[str, Any]] = {}
    with path.open() as f:
        for line in f:
            row = json.loads(line)
            by_sha[row["sha256"]] = row
    return by_sha


def load_fingerprints(path: Path) -> dict[str, list[dict[str, Any]]]:
    by_sha: dict[str, list[dict[str, Any]]] = defaultdict(list)
    with path.open() as f:
        for line in f:
            row = json.loads(line)
            by_sha[row["sha256"]].append(row)
    return by_sha


def safe_hardlink(src: Path, dst: Path) -> None:
    """Hardlink if possible; copy as fallback."""
    if dst.exists():
        return
    dst.parent.mkdir(parents=True, exist_ok=True)
    try:
        os.link(src, dst)
    except OSError:
        import shutil
        shutil.copy2(src, dst)


def doi_to_dirname(doi: str) -> str:
    """A DOI like 10.1038/s41467-018-04467-3 maps to a nested directory.
    We split on the first '/' so the publisher prefix becomes a parent dir."""
    return doi.replace(":", "_")  # leave '/' alone for natural nesting


def chooser(origins: list[dict[str, Any]], crossref_url: str | None) -> int:
    """Pick the preferred origin index when one DOI has multiple sha256s."""
    if crossref_url:
        for i, o in enumerate(origins):
            if Path(o["src_path"]).name in crossref_url:
                return i
    # else: largest size, then newest mtime
    return max(
        range(len(origins)),
        key=lambda i: (origins[i]["size"], origins[i]["mtime"]),
    )


def import_resolved(
    doi: str,
    sha_to_origins: dict[str, list[dict[str, Any]]],
    crossref_url: str | None,
) -> Path:
    """All sha256s mapped to this DOI. We pick one as canonical and record the
    rest as alternates."""
    out_dir = PAPERS_ROOT / "by-doi" / doi_to_dirname(doi)
    out_dir.mkdir(parents=True, exist_ok=True)

    # Pick canonical sha
    candidates = sorted(sha_to_origins.keys())
    sha_sizes = {
        s: max(o["size"] for o in sha_to_origins[s])
        for s in candidates
    }
    canonical_sha = max(candidates, key=lambda s: sha_sizes[s])

    canonical_origins = sha_to_origins[canonical_sha]
    alt_shas = [s for s in candidates if s != canonical_sha]

    chosen_idx = chooser(canonical_origins, crossref_url)
    src_pdf = Path(canonical_origins[chosen_idx]["src_path"])

    paper_pdf = out_dir / "paper.pdf"
    safe_hardlink(src_pdf, paper_pdf)
    (out_dir / "paper.sha256").write_text(canonical_sha + "\n")

    by_hash_dir = PAPERS_ROOT / "by-hash" / canonical_sha[:2] / canonical_sha
    safe_hardlink(paper_pdf, by_hash_dir / "paper.pdf")

    source_meta = {
        "doi": doi,
        "canonical_sha256": canonical_sha,
        "chosen_origin": canonical_origins[chosen_idx],
        "origins": canonical_origins,
        "alternates": [
            {"sha256": s, "origins": sha_to_origins[s]} for s in alt_shas
        ],
    }
    (out_dir / "source.json").write_text(json.dumps(source_meta, indent=2) + "\n")
    return out_dir


def import_unresolved(sha: str, origins: list[dict[str, Any]], reason: str, candidates: list[dict]) -> Path:
    out_dir = PAPERS_ROOT / "unresolved" / sha
    out_dir.mkdir(parents=True, exist_ok=True)
    safe_hardlink(Path(origins[0]["src_path"]), out_dir / "paper.pdf")
    (out_dir / "candidate-dois.json").write_text(
        json.dumps([{"doi": c.get("DOI"), "title": c.get("title"), "score": c.get("score")} for c in candidates], indent=2) + "\n"
    )
    (out_dir / "reason.txt").write_text(reason + "\n")
    (out_dir / "source.json").write_text(json.dumps({"sha256": sha, "origins": origins}, indent=2) + "\n")
    return out_dir


def main() -> int:
    fp_path = STAGING / "fingerprints.jsonl"
    res_path = STAGING / "resolution.jsonl"
    if not fp_path.exists() or not res_path.exists():
        print("Run discover and resolve first.", file=sys.stderr)
        return 1

    fingerprints = load_fingerprints(fp_path)
    resolutions = load_resolutions(res_path)

    # Group sha256 by DOI
    doi_to_shas: dict[str, dict[str, list[dict[str, Any]]]] = defaultdict(dict)
    unresolved_shas: list[str] = []
    for sha, res in resolutions.items():
        origins = fingerprints.get(sha, [])
        if not origins:
            continue
        if res.get("doi"):
            doi_to_shas[res["doi"]][sha] = origins
        else:
            unresolved_shas.append(sha)

    print(f"Importing {len(doi_to_shas)} DOIs and {len(unresolved_shas)} unresolved...")

    for i, (doi, sha_origins) in enumerate(doi_to_shas.items(), 1):
        try:
            import_resolved(doi, sha_origins, crossref_url=None)
        except Exception as e:
            print(f"  [warn] DOI {doi} failed: {e}", file=sys.stderr)
        if i % 100 == 0:
            print(f"  {i}/{len(doi_to_shas)} DOIs imported")

    for sha in unresolved_shas:
        origins = fingerprints.get(sha, [])
        res = resolutions[sha]
        if origins:
            import_unresolved(sha, origins, res.get("reason", ""), res.get("candidates", []))

    print()
    print(f"Wrote {len(doi_to_shas)} entries under {PAPERS_ROOT / 'by-doi'}")
    print(f"Wrote {len(unresolved_shas)} entries under {PAPERS_ROOT / 'unresolved'}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
