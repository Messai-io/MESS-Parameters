#!/usr/bin/env python3
"""
Walk both source directories, fingerprint every PDF by sha256, and emit:

    papers/staging/fingerprints.jsonl
    papers/staging/discover-report.md

Read-only against the source directories. No file in /repos/ is touched.

Configuration via environment:
    MESSAI_ORG_PAPERS  default: /repos/Messai-org/MESS-Parameters/papers
    MESSAI_AI_PAPERS   default: /repos/Messai-ai/papers
    PAPERS_ROOT        default: <repo>/papers
"""

from __future__ import annotations

import hashlib
import json
import os
import sys
from collections import Counter, defaultdict
from dataclasses import asdict, dataclass
from pathlib import Path
from typing import Iterator

REPO_ROOT = Path(__file__).resolve().parents[2]
PAPERS_ROOT = Path(os.environ.get("PAPERS_ROOT", REPO_ROOT / "papers"))
STAGING = PAPERS_ROOT / "staging"

SOURCES: list[tuple[str, Path]] = [
    ("messai-org", Path(os.environ.get(
        "MESSAI_ORG_PAPERS", "/repos/Messai-org/MESS-Parameters/papers"))),
    ("messai-ai", Path(os.environ.get(
        "MESSAI_AI_PAPERS", "/repos/Messai-ai/papers"))),
]

CHUNK = 1024 * 1024  # 1 MiB
PDF_SUFFIXES = {".pdf", ".PDF"}


@dataclass(frozen=True)
class Fingerprint:
    sha256: str
    src_repo: str
    src_path: str  # absolute
    rel_path: str  # relative to src root
    size: int
    mtime: float


def iter_pdfs(root: Path) -> Iterator[Path]:
    if not root.exists():
        return
    for path in root.rglob("*"):
        if path.is_file() and path.suffix in PDF_SUFFIXES:
            yield path


def sha256_file(path: Path) -> str:
    h = hashlib.sha256()
    with path.open("rb") as f:
        while True:
            buf = f.read(CHUNK)
            if not buf:
                break
            h.update(buf)
    return h.hexdigest()


def fingerprint_source(label: str, root: Path) -> list[Fingerprint]:
    out: list[Fingerprint] = []
    if not root.exists():
        print(f"  [warn] source missing: {root}", file=sys.stderr)
        return out
    for path in iter_pdfs(root):
        try:
            stat = path.stat()
            digest = sha256_file(path)
        except OSError as e:
            print(f"  [warn] skip {path}: {e}", file=sys.stderr)
            continue
        out.append(Fingerprint(
            sha256=digest,
            src_repo=label,
            src_path=str(path),
            rel_path=str(path.relative_to(root)),
            size=stat.st_size,
            mtime=stat.st_mtime,
        ))
    return out


def write_fingerprints(rows: list[Fingerprint], path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w") as f:
        for row in rows:
            f.write(json.dumps(asdict(row)) + "\n")


def write_report(rows: list[Fingerprint], path: Path) -> None:
    by_repo: dict[str, list[Fingerprint]] = defaultdict(list)
    for row in rows:
        by_repo[row.src_repo].append(row)

    sha_to_repos: dict[str, set[str]] = defaultdict(set)
    sha_counter: Counter[str] = Counter()
    for row in rows:
        sha_to_repos[row.sha256].add(row.src_repo)
        sha_counter[row.sha256] += 1

    union = set(sha_to_repos.keys())
    overlap = sum(1 for s, repos in sha_to_repos.items() if len(repos) > 1)
    duplicates = {repo: 0 for repo, _ in SOURCES}
    for repo, group in by_repo.items():
        seen: Counter[str] = Counter()
        for row in group:
            seen[row.sha256] += 1
        duplicates[repo] = sum(c - 1 for c in seen.values() if c > 1)

    lines: list[str] = []
    lines.append("# Discover report")
    lines.append("")
    lines.append("## Sources")
    lines.append("")
    lines.append("| repo | root | files | unique sha256 | duplicates |")
    lines.append("|---|---|---|---|---|")
    for repo, root in SOURCES:
        files = len(by_repo.get(repo, []))
        uniq = len({r.sha256 for r in by_repo.get(repo, [])})
        dup = duplicates.get(repo, 0)
        lines.append(f"| {repo} | `{root}` | {files} | {uniq} | {dup} |")
    lines.append("")
    lines.append("## Union")
    lines.append("")
    lines.append(f"- Total files scanned: **{len(rows)}**")
    lines.append(f"- Unique sha256 across both sources: **{len(union)}**")
    lines.append(f"- Cross-source overlap (same sha256 in both): **{overlap}**")
    lines.append("")
    lines.append("## Top duplicate sha256 (within or across sources)")
    lines.append("")
    top = [(s, c) for s, c in sha_counter.most_common(20) if c > 1]
    if not top:
        lines.append("_None._")
    else:
        lines.append("| sha256 | count | repos |")
        lines.append("|---|---|---|")
        for s, c in top:
            repos = ",".join(sorted(sha_to_repos[s]))
            lines.append(f"| `{s[:16]}…` | {c} | {repos} |")
    lines.append("")

    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text("\n".join(lines) + "\n")


def main() -> int:
    print(f"Discovering PDFs in {len(SOURCES)} source(s)...")
    all_rows: list[Fingerprint] = []
    for label, root in SOURCES:
        print(f"  scanning {label}: {root}")
        rows = fingerprint_source(label, root)
        print(f"    {len(rows)} PDFs fingerprinted")
        all_rows.extend(rows)

    fp_path = STAGING / "fingerprints.jsonl"
    rep_path = STAGING / "discover-report.md"
    write_fingerprints(all_rows, fp_path)
    write_report(all_rows, rep_path)

    print()
    print(f"Wrote {fp_path} ({len(all_rows)} rows)")
    print(f"Wrote {rep_path}")
    print()
    print("Review the report before running `papers:resolve` or `papers:import`.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
