# Consumer Contract for MESS-Parameters

_Last updated: 2026-04-18 (current release: `v0.2.0`)_

This document describes what downstream projects consume from this repo and
what guarantees we therefore need to keep. Read the consumer-side counterpart
at `docs/consuming-mess-parameters.md` in the
[`samfrons/messai.ai`](https://github.com/samfrons/messai.ai) repo for how one
specific consumer reads this data.

## Known consumers

| Repo | How they consume | Pin mechanism |
|---|---|---|
| `samfrons/messai.ai` | Git submodule at `open-source/MESS-Parameters`, splits `data/parameter-definitions-rich.json` into per-slug fixtures at build time | Tag (`vX.Y.Z`) |

If you add a new consumer, extend this table and cross-link their equivalent
of `consuming-mess-parameters.md`.

## The data surface

Consumers read **one** file:

```
data/parameter-definitions-rich.json
```

- Generated from the MESSAI Postgres `ParameterDefinition` table by
  `scripts/sync-from-database.js`.
- Top-level shape is an **array** of per-parameter entries (not an object
  with a `parameters` key).
- Minimum length: 687 (enforced by
  `schemas/rich-parameters.schema.json#/minItems`).
- Keys are DB column aliases in `snake_case`.

Other files in this repo — `parameters/<category>/*.md`, `data/*.csv`,
`data/correlation-cache.json`, `data/parameter-provenance.json` — are
**not** part of the consumer surface for parameter detail pages. They
are human-facing or producer-internal. Changes to them are never
breaking for consumers.

### Optional provenance sidecar

`data/parameter-provenance.json` is a **sidecar** emitted by
`scripts/build-provenance.ts` alongside `rich.json`. It contains per-parameter
source papers (with DOIs), distribution statistics stratified by system type,
and pairwise correlations — all derived from `data/paper-parameter-values.csv`.
Consumers who want source attribution, histograms, or correlation matrices can
opt in by reading this file; its schema is tracked separately at
`schemas/provenance.schema.json` and may evolve independently of the rich.json
contract.

Entries are keyed by `richParameter.id`. To decide whether to fetch the
sidecar for a given parameter, consumers may check the optional
`has_provenance` flag on `richParameter` (set to `true` when an entry exists).
This flag is optional — omitting it is backward-compatible.

### Optional papers manifest

`data/papers-manifest.json` is a **sidecar** emitted by
`scripts/papers/build_papers_manifest.py`. It pairs per-paper provenance
(DOI, sha256, storage path under `papers/`, source, license, extraction
status) so downstream apps can offer local PDF streaming when available.
Schema version tracked inside the file at `metadata.version` (semver).

The manifest is producer-internal; changes are never breaking for the
`rich.json` contract.

**Key naming:** consumers may read either `snake_case` or `camelCase` at
their discretion. The file currently emits `snake_case`; a future
release may emit both.

**Enum vocabulary** (renderable verbatim in UIs):

- `pdf_source`: `unpaywall | crossref | arxiv | pmc | biorxiv |
  externalUrl | semanticscholar | legacy | local | unknown`
- `pdf_license`: `cc-by | cc-by-sa | cc-by-nc | cc-by-nc-sa | cc-by-nd |
  cc0 | publisher | unknown`
- `pdf_extraction_status`: `pending | sections | parameters | figures |
  complete`

**DOI sanitization** in `pdf_storage_path`: directory names are produced
by `scripts/papers/import_pdfs.py`'s `doi_to_dirname()`, which preserves
`[A-Za-z0-9._/\-]` and strips everything else. Consumer API routes
should accept `^[A-Za-z0-9][A-Za-z0-9._/\-]*\.pdf$` and reject `..` to
block path traversal.

### Extraction row ID stability

`ExtractedParameterData.id` values (both in `data/paper-parameter-values.csv`
and in `data/local-corpus-values.csv`) follow two stable conventions:

- **DB-sourced rows** (from `paper-parameter-values.csv`, produced by
  `scripts/sync-from-database.js`): the `id` is the DB-generated CUID/UUID
  on the source `PaperParameter` row, preserved verbatim on every export.
  Stable unless a row is regenerated upstream.
- **Local-corpus rows** (from `local-corpus-values.csv`, produced by
  `scripts/papers/rollup_local_corpus.ts`): the `id` is composed as
  `{sha256}-{parameter_id}` where `sha256` is the PDF's canonical hash
  (stable across reruns as long as the PDF bytes don't change) and
  `parameter_id` is the ontology id. Stable across reruns.

Consumers may use `id` as a foreign key. On a given rerun, a row's `id`
will not change unless the underlying source row (or PDF+parameter pair)
genuinely changed. Inserts use `skipDuplicates` on `id` for idempotence.

### Confidence scale

`confidence` values (in both CSVs and in provenance sources) are on the
scale `[0, 1]`. Canonical values:

- **Regex extraction**: `0.6` (tight-window `value unit` match).
- **LLM extraction**: whatever the model returns, clamped to `[0, 1]`. If
  the model omits confidence, default `0.65`.
- **DB-sourced extractions**: the original value as stored in the MESSAI
  `PaperParameter.confidence` column, unchanged by the pipeline.

Directly comparable across any `[0, 1]`-scaled consumer. A consumer using
a `[0, 100]` scale must multiply by 100 before comparison. The pipeline's
Tier A sanity filter drops rows below `0.3` before aggregation.

### `paper-metadata.csv` write-back safety

Consumers that write back fields like `reproducibility_score` or
`parameter_completeness` into the upstream DB do not create a feedback loop
with this repo's `paper-metadata.csv`. Those scores, when present on
rows exported from this repo, come from
`scripts/analyze-reproducibility.ts` (26-criterion rubric) and
`scripts/build-provenance.ts` — both computed from the local corpus, never
ingested from `paper-metadata.csv` itself. The CSV is write-out only from
this repo's perspective.

### Verification sidecar (optional, future)

`data/verification/tier1-summary.json` is emitted by `scripts/verify/tier1_rollup.ts`
(pending; see producer plan) and captures a headline data-quality verdict
for the corpus. When present, its schema:

```json
{
  "schema_version": "0.1.0",
  "corpus_snapshot_date": "YYYY-MM-DD",
  "corpus_source_count": 4300,
  "grounding_rate": 0.94,
  "literature_pass_count": "13/15",
  "unit_coverage": 0.98,
  "duplicate_agreement": 0.91,
  "noisy_paper_count": 7,
  "median_shift_after_quarantine": 0.08,
  "overall_verdict": "PASS"
}
```

Keys are `snake_case` matching the rest of the contract. `overall_verdict`
is `PASS`, `FLAG`, or `FAIL`. Consumers may render the verdict as a
data-quality badge without interpreting the per-check fields. Producer-internal
(never part of `rich.json`); changes are never breaking.

## The schema is the contract

```
schemas/rich-parameters.schema.json   ← top-level (array, minItems)
schemas/parameter.schema.json         ← defines richParameter
```

`richParameter` lives under `schemas/parameter.schema.json#/definitions/richParameter`.
This is the authoritative shape. Consumers mirror it as TypeScript
interfaces (e.g. messai-ai's `apps/web/src/types/parameter-schema.ts`).

Every `rich.json` entry must validate against `richParameter`. CI in this repo
enforces it (see `.github/workflows/`). Do not merge a PR that regenerates
`rich.json` without also updating the schema if field shapes changed.

## Field-naming conventions

- **snake_case throughout.** Do not rename to camelCase "for
  ergonomics" — consumers have already bound the snake_case names and a
  rename is a breaking change.
- Narrative fields (`definition`, `performance_impact`, `limitations`,
  `cost_analysis`, `references`, `compatible_systems`) are `string | null`.
  Multi-paragraph content goes in the string as-is; consumers render with
  `whitespace-pre-wrap`.
- Structured fields (`typical_values`, `affecting_factors`,
  `measurement_methods`, `related_parameters`) use nested objects/arrays
  with fixed keys. See schema for exact shapes. Two of them
  (`typical_values`, `affecting_factors`) are discriminated unions — keep
  both branches alive; don't collapse one into a string.
- Enums (`category`, `data_type`) are closed sets. Adding a new value is a
  breaking change — consumers switch/match on these.
- `id` is a DB-generated identifier (CUID-like). It is **not** a URL slug.
  Consumers derive their own slug from `name`.

## Invariants consumers rely on

1. **`name` is stable for a given parameter's lifetime.** Consumers derive
   URL slugs from `name`. Renaming "Power Density" to "Peak Power Density"
   silently breaks every existing link to that parameter.
2. **`id` uniquely identifies a parameter across releases.** It may look
   opaque to humans but consumers can use it for persistence (e.g.
   bookmarks).
3. **Array order doesn't matter** to consumers but deterministic order
   makes diffs readable — keep the sort stable.
4. **No duplicate `name` values** (consumers derive slugs from `name` and
   a collision creates a URL conflict). If you need two parameters with
   the same display name, they must differ in `name` — e.g. "Power
   Density (anode)" vs "Power Density (cathode)".
5. **Required fields are never null.** Schema says so; don't let tooling
   emit `"id": null` even transiently.

## Safe changes

These require only a patch-level bump:

- Adding new parameters.
- Filling previously-null narrative fields with real content.
- Correcting typos in descriptions, units, allowed-values.
- Adding new optional fields to `richParameter` (TypeScript-strict
  consumers will flag them).
- Publishing or updating a producer-internal sidecar file in `data/`
  (e.g. `parameter-provenance.json`).

## Breaking changes

These require a major or minor bump and a heads-up to consumers:

- Removing or renaming any `richParameter` field.
- Changing a field's type (e.g. string → object).
- Changing the union shape of `typical_values` or `affecting_factors`.
- Adding, removing, or renaming a `category` enum value.
- Adding, removing, or renaming a `data_type` enum value.
- Removing a parameter that has been in a prior release.
- Renaming a parameter's `name` in a way that changes its derived slug.

When shipping a breaking change, include a migration note in the release
notes: what changed, how consumers detect it, what they need to do.

## Release workflow

1. Land the change via PR into `main`.
2. CI runs AJV validation of `rich.json` against the schema, plus any
   other producer-side tests.
3. Cut a git tag `vX.Y.Z` on the merge commit.
4. Release notes on the GitHub release call out breaking changes
   explicitly (see the [breaking changes](#breaking-changes) list above).
5. Consumers pin to the new tag on their schedule. This repo never forces
   an immediate bump.

## Keeping the contract honest

This document lives in git; the schema lives in git; rich.json lives in
git. If any of the three drifts from the other two, the contract is
broken. CI is the tripwire: AJV validation fails the build when
`rich.json` doesn't match the schema, and the schema file is the point of
truth this doc describes.

If you change this doc in a way that loosens a guarantee ("consumers may
no longer rely on X"), that's itself a breaking change — bump the version
and flag it.

## Cross-references

- Consumer-side contract: `docs/consuming-mess-parameters.md` in
  [`samfrons/messai.ai`](https://github.com/samfrons/messai.ai).
- Schemas: `schemas/rich-parameters.schema.json`,
  `schemas/parameter.schema.json`.
- Generator: `scripts/sync-from-database.js`.
