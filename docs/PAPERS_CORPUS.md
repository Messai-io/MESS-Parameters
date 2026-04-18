# Papers Corpus — Local Layout and Pipeline

This document describes the canonical on-disk layout for the PDF corpus that
backs the MESS-Parameters dataset, and the pipeline that imports, parses, and
rolls up per-paper artifacts.

The corpus directory (`papers/` at the repo root) is **gitignored** — the PDFs
themselves are copyrighted and cannot be redistributed. Only the derived
structured outputs in `data/*.csv` and `data/explorer/` are committed.

---

## Quick start

```bash
# 1. Set source paths (defaults shown)
export MESSAI_ORG_PAPERS=/repos/Messai-org/MESS-Parameters/papers
export MESSAI_AI_PAPERS=/repos/Messai-ai/papers

# 2. One-time environment setup
python3 -m venv papers/.venv
source papers/.venv/bin/activate
pip install -r scripts/papers/requirements.txt

# 3. Set Anthropic key for ambiguous DOI / parameter resolution
export ANTHROPIC_API_KEY=sk-ant-...

# 4. Optional: GROBID for header/refs extraction
docker run --rm -d -p 8070:8070 lfoppiano/grobid:0.8.1

# 5. Inspect what's in the two source dirs (no writes outside papers/staging)
npm run papers:discover

# 6. After reviewing the report, run the full pipeline
npm run papers:all
```

The `discover` step is **non-destructive and read-only** against the two source
directories. Nothing under `/repos/` is moved or modified by any pipeline step;
imports happen via hardlinks into `papers/by-hash/` and `papers/by-doi/`.

---

## Layout

```
papers/                              ← gitignored
  README.md                          ← copy of this file (auto-generated)
  manifest.parquet                   ← one row per paper; columnar
  manifest.jsonl                     ← line-delimited mirror; for grep / diff
  index.csv                          ← (doi, title, year, journal, source) for humans
  staging/
    fingerprints.jsonl               ← discover output: every (sha256, src_path)
    resolution.jsonl                 ← resolve output: (sha256 → doi, confidence)
    discover-report.md               ← human-readable summary
  by-doi/
    10.1038/s41467-018-04467-3/
      paper.pdf                      ← hardlink (single inode shared with by-hash/)
      paper.sha256                   ← hex digest, one line
      source.json                    ← origins: [{repo, path, mtime, size}]
      metadata.json                  ← merged CrossRef + GROBID header
      text/
        full.md                      ← marker-pdf output (equations + tables inline)
        sections.json                ← {abstract, methods, results, discussion}
        tables/                      ← one CSV per detected table
        references.bib               ← GROBID-extracted refs
      figures/
        fig-001.png
        fig-001.json                 ← {caption, page, bbox}
      embeddings/
        chunks.jsonl                 ← {chunk_id, page, section, text}
        vectors.npy                  ← parallel fp16 matrix (BGE-large-en-v1.5)
      parameters/
        observations.json            ← [{parameterId, value, unit, page, snippet, confidence}]
        provenance.jsonl             ← per-observation extraction trace
      extraction.log
  by-hash/
    ab/cdef0123…/paper.pdf           ← hardlink to by-doi/<DOI>/paper.pdf
  unresolved/
    <sha256>/
      paper.pdf
      candidate-dois.json            ← top CrossRef matches with scores
      reason.txt                     ← why human review is needed
  .state/
    discover/<sha256>.done           ← per-step idempotence markers
    resolve/<sha256>.done
    extract.text/<sha256>.done
    ...
```

### Why this shape

- `by-doi/` is what a human opens — the directory name is the citation address.
- `by-hash/` is what the pipeline opens — sha256 is invariant to renames and
  dedups perfectly.
- `manifest.parquet` is what notebooks and analysis scripts join on.
- `unresolved/` keeps quarantined work visible without polluting the canonical
  tree.
- `.state/` markers make every step idempotent — drop a new PDF into a source
  directory and only the new work runs.

---

## Pipeline stages

Each stage is a Snakemake rule under `scripts/papers/Snakefile`. Stages are
idempotent: rerunning a fully-completed stage is a no-op.

| Stage | Script | Inputs | Outputs |
|---|---|---|---|
| `discover` | `discover.py` | `MESSAI_ORG_PAPERS`, `MESSAI_AI_PAPERS` | `staging/fingerprints.jsonl`, `staging/discover-report.md` |
| `resolve` | `resolve.py` | `staging/fingerprints.jsonl` | `staging/resolution.jsonl`; populates `unresolved/` |
| `import` | `import_pdfs.py` | `staging/resolution.jsonl` + source PDFs | `by-doi/<DOI>/paper.pdf`, `by-hash/<sha2>/paper.pdf`, `source.json` |
| `extract.text` | `extract_text.py` | `by-doi/<DOI>/paper.pdf` | `text/full.md`, `text/sections.json`, `text/tables/` |
| `extract.figures` | `extract_figures.py` | `paper.pdf` | `figures/fig-NNN.{png,json}` |
| `extract.metadata` | `extract_metadata.py` | `paper.pdf` + GROBID + CrossRef | `metadata.json`, `text/references.bib` |
| `extract.parameters` | `extract_parameters.py` | `text/sections.json` | `parameters/observations.json`, `parameters/provenance.jsonl` |
| `embed` | `embed.py` | `text/sections.json` | `embeddings/chunks.jsonl`, `embeddings/vectors.npy` |
| `manifest` | `build_manifest.py` | all `by-doi/*/metadata.json` | `manifest.parquet`, `manifest.jsonl`, `index.csv` |
| `rollup` | `rollup_to_csv.ts` | all `by-doi/*/{metadata,parameters/observations}.json` | `data/paper-metadata.csv`, `data/paper-parameter-values.csv`, `data/extracted-parameter-data.csv` |

`rollup` regenerates the existing `data/*.csv` files in place so the web
explorer (`site/`) keeps working unchanged. The CSVs are derived views — never
edit them by hand.

---

## Dedup policy

`discover` computes sha256 over file bytes and groups by digest. The same
sha256 in both source directories means the same PDF was duplicated; one
canonical entry is created with both origins recorded.

When the same DOI appears with two **different** sha256 values (e.g., a
preprint and a journal version, or two different scans), `import_pdfs.py`
chooses one by these tiebreakers in order:

1. The file CrossRef's `link[].URL` resolves to (publisher copy preferred).
2. Larger file size (more complete OCR text usually correlates with size).
3. Newer source mtime.

The losing file is recorded under `source.json.alternates[]` so the choice can
be revisited.

---

## DOI resolution

`resolve.py` tries these strategies in order and stops at the first
high-confidence answer:

1. **Filename pattern** — many PDFs already encode the DOI suffix (e.g.,
   `s41467-018-04467-3.pdf` → `10.1038/s41467-018-04467-3`). Resolved by
   CrossRef lookup.
2. **Page-1 regex** — `pdftotext` page 1, search for `10.\d{4,9}/[-._;()/:A-Z0-9]+`.
3. **Title search** — extract title (largest-font line on page 1 via PyMuPDF),
   query CrossRef.
4. **Claude tiebreak** — if step 3 returns multiple candidates with similar
   scores, send first 2 pages of text plus the candidate metadata to Claude
   Sonnet 4.6 with a JSON-mode prompt asking for `{doi, confidence}`.

PDFs that fail all four land in `papers/unresolved/<sha256>/` with the
candidate list and a `reason.txt`.

---

## Adding a new PDF

```bash
cp newpaper.pdf $MESSAI_ORG_PAPERS/
npm run papers:all      # processes only the new file thanks to .state markers
```

## Recovering / inspecting a single paper

```bash
DOI=10.1038/s41467-018-04467-3
ls papers/by-doi/$DOI/
cat papers/by-doi/$DOI/parameters/observations.json | jq '.[] | {parameterId, value, unit}'
```

## Refreshing CSVs after re-extraction

```bash
npm run papers:rollup
git diff data/*.csv     # review additions; commit if intended
```

---

## Stack reference

| Stage | Tool | Notes |
|---|---|---|
| Fingerprint | `hashlib.sha256` | Deterministic dedup |
| Header / refs | GROBID 0.8.1 (Docker) | Best-in-class for academic header + bibliography |
| CrossRef | `crossref-commons` | Throttled, cached lookups |
| Body OCR | `marker-pdf` | Transformer; Nougat successor; equations + tables → markdown |
| Figures | PyMuPDF (`fitz`) | Fast bbox extraction |
| Parameter extraction | Regex extractors + Claude Sonnet 4.6 | Regex first (fast/free), LLM for ambiguous numeric phrasing |
| Ambiguous DOI | Claude Sonnet 4.6 | First 2 pages + CrossRef candidates → `{doi, confidence}` |
| Embeddings | `BAAI/bge-large-en-v1.5` (sentence-transformers) | Local, free, strong on scientific text |
| Orchestration | Snakemake | Per-paper rules, automatic resume, parallelism |

GPU is preferred for marker-pdf and BGE but not required — both fall back to
CPU with a slowdown.
