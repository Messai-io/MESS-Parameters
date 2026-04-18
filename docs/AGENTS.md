# Agent Guide — MESS-Parameters

Orientation for AI coding assistants (and humans) working in this repo. Keep
this short — deep detail lives in the schema, the consumer contract, and the
code itself. When they disagree with this file, the schema/contract wins.

## What this repo is

A standardized parameter ontology for Microbial Electrochemical Systems (MES)
research: 687 parameters across 13 categories, schema-validated, versioned,
consumed by downstream apps (notably `samfrons/messai.ai`).

## The one rule that matters

**`data/parameter-definitions-rich.json` is a consumer contract.** Every field
and field shape is bound by `schemas/parameter.schema.json#/definitions/richParameter`.
Read `docs/consumer-contract.md` before changing anything that touches it. CI
fails fast on schema violations.

Everything else in `data/` is producer-internal — free to evolve.

## Directory map

```
data/
  parameter-definitions-rich.json  ← CONTRACT. Consumer surface. Single-line JSON.
  parameter-provenance.json        ← Sidecar. Per-param source papers, stats, correlations.
  paper-parameter-values.csv       ← Ontology-mapped extractions (inputs to provenance).
  paper-metadata.csv               ← Paper corpus (DOIs, journals, reproducibility scores).
  correlations.csv                 ← 14 parameter × metric correlations (Bonferroni-corrected).
  reproducibility-summary.json     ← 26-criterion scoring, category-level averages.
  SCIENTIFIC_INTEGRITY.md          ← Known limitations. Read when making statistical claims.

schemas/
  parameter.schema.json            ← richParameter definition (the contract).
  rich-parameters.schema.json      ← Top-level array wrapper.
  provenance.schema.json           ← Sidecar schema (independent version line).

scripts/
  sync-from-database.js            ← DB → rich.json + CSVs. Requires DATABASE_URL.
  build-provenance.ts              ← CSVs → parameter-provenance.json. DB-free, CI-safe.
  recompute-correlation-pvalues.py ← t-distribution CDF for correlations.csv.
  validate.js                      ← npm run validate. AJV + referential integrity.

site/                              ← Vite + React SPA. Hash routing. Tailwind. Recharts.
  src/components/parameters/       ← Catalog, detail page, provenance UI.
  src/components/correlations/     ← Parameter-metric + parameter-pair views.
  src/data/loader.ts               ← Synchronous access to rich.json + index.
  src/data/provenance.ts           ← Lazy (dynamic import) sidecar loader.
  src/lib/doi.ts                   ← DOI/URL linkifier for citation strings.

docs/
  consumer-contract.md             ← The contract. Required reading before schema edits.
  AGENTS.md                        ← This file.
  PAPERS_CORPUS.md                 ← Upstream PDF corpus pipeline (scripts/papers/).
```

## Commands you'll actually run

```bash
# Root — contract + sidecar validation
npm run validate                   # AJV rich.json + provenance.json + ref integrity
npm run build:provenance           # Rebuild data/parameter-provenance.json from CSVs
npm run sync                       # Rebuild everything (needs DATABASE_URL)

# Site
cd site
npm run dev                        # http://localhost:5173/MESS-Parameters/
npm run build                      # tsc -b && vite build
npm test                           # vitest (15 tests across doi, loader, detail page)
```

CI (`.github/workflows/ci.yml`) runs `npm run validate`, the provenance drift
check (`jq`-diffs committed sidecar against a fresh rebuild, ignoring only the
`metadata.generated_at` timestamp), and the site test + build jobs.

## Hard invariants

These break downstream consumers if violated — never skip thinking about them:

1. **`name` is permanent per parameter.** Downstream slugs derive from it.
2. **`id` is stable across releases.** Consumers persist bookmarks against it.
3. **snake_case throughout `rich.json`.** Do not camelCase "for ergonomics".
4. **Enums are closed sets** (`category`, `data_type`). Adding a value = breaking.
5. **`references` is a plain string.** Restructuring it into an array is breaking. Linkify at render.
6. **Required fields are never null.** Schema enforces this.
7. **rich.json stays single-line** (psql `json_agg` output). Pretty-printing it bloats diffs and breaks downstream cache keys.
8. **Deterministic output order.** Pipeline sorts entries by id/name so diffs stay readable.

Safe changes (patch-level bump): add parameters, fill null narrative fields, add
new optional `richParameter` fields, publish/update producer-internal sidecars.

Breaking changes (minor+ bump + migration note): see
`docs/consumer-contract.md#breaking-changes`.

## The provenance sidecar in 60 seconds

`data/parameter-provenance.json` is an opt-in companion to `rich.json`,
**not** part of the consumer contract. One entry per rich.id:

```
{
  id, name,
  n_papers, n_values, n_verified, mean_confidence,
  stats_global: { n, min, max, mean, median, p05, p25, p75, p95, std },
  stats_by_system: { MFC: {...}, MEC: {...}, ... },    // only when n ≥ 10
  distribution: { bins, counts },                       // 20 equal-width bins
  sources: [{ doi, title, year, journal, system_type, value, unit, confidence,
              extraction_method, source_section, verified, verified_mes }, ...],
  correlations: [{ other_param_id, other_param_name, pearson_r, n,
                   p_corrected, significant }, ...]    // n ≥ 30, Bonferroni-corrected
}
```

Rich entries that have a sidecar record are stamped with `has_provenance: true`.
Consumers check that flag before fetching the sidecar. The site loads it via
`import('@data/parameter-provenance.json')` — code-split into a 374 KB chunk.

Thresholds and methodology choices live in `scripts/build-provenance.ts`
constants and are echoed in the sidecar's `metadata.thresholds` block. Current
values: confidence ≥ 0.3, per-system n ≥ 10, sources capped at 200, histogram
20 bins, correlation min_n = 30, top 10 correlations per parameter.

## Progress log

### Shipped (2026-04-18 — v0.2.1)
- **M1**: Provenance pipeline (`scripts/build-provenance.ts`), sidecar schema,
  AJV + referential-integrity validation, `has_provenance` flag on richParameter,
  consumer-contract doc updated.
- **M2**: Detail page UI — `ProvenanceBadges`, `SourcesTable` (DOI-linked,
  paginated, sortable), `DistributionHistogram` (system-type toggle, p05/p95
  markers), DOI linkification for the `references` string.
- **M3**: `CorrelationMiniMatrix` on each detail page, "Parameter-Pair
  Correlations" table on the global Correlations view with Bonferroni-
  significance filter.
- **M4**: `SourcesExplorer` — client-side filters (system, year, confidence,
  verified-only) that re-aggregate histogram + sources in-memory. Vitest setup
  (15 tests). CI drift check + site-test job.

### Shipped (2026-04-18 — Tier 1 UX)
- **Empty-state card** on parameter detail pages with no extractions (453 of 687
  parameters). Replaces a bare "--" with a clear explanation and feedback links.
- **Sources expanded 3.5×** (826 → 2,863) by including extractions without DOIs
  — `SourcesTable` shows the title inline when no DOI is present.
- **Verified-MES filter defaults ON** in `SourcesExplorer` when any verified
  source exists, so the histogram and stats reflect MES-domain papers by
  default. User can toggle off to see all extractions.

### PDF corpus status (audited 2026-04-18)

The local PDF corpus under `papers/` has **4,770 PDFs, zero processed** through
`scripts/papers/Snakefile`. The pipeline has never been run. Existing
`data/*.csv` files are populated from the MESSAI Postgres DB via
`scripts/sync-from-database.js`, not from local PDFs.

Prerequisites to run the local pipeline:

- `python3 -m venv papers/.venv && source papers/.venv/bin/activate &&
  pip install -r scripts/papers/requirements.txt`
- Start Docker Desktop and `docker run --rm -d -p 8070:8070
  lfoppiano/grobid:0.8.1`
- Export `ANTHROPIC_API_KEY` (used for DOI tiebreaks + ambiguous parameter
  extraction)
- Set `MESSAI_ORG_PAPERS=/Users/.../MESS-Parameters/papers` and
  `MESSAI_AI_PAPERS=...` for this machine

Expect a multi-hour run on CPU (marker-pdf is the bottleneck) and material
Anthropic API spend on 4,770 papers. Recommended first pass: `npm run
papers:discover` (read-only) → review `papers/staging/discover-report.md` for
dedup/unresolved counts → `papers:resolve` (no extraction cost yet) → budget
review → `papers:all`.

### Known limitations

- Only **214 of 687 parameters** have sidecar entries (the rest have
  `usage_count: 0` — not yet extracted from any paper).
- Only **1 pairwise correlation** currently reaches n ≥ 30 shared papers
  (`coulombicEfficiency` × `maxPowerDensity`). Published extractions rarely
  report 2+ ontology-mapped parameters per paper. More overlap will surface
  as extraction coverage grows.
- **PMIDs and non-DOI identifiers** in `sources[].doi` render without a link.
- Histogram on a filtered subset reflects **only the 200 cached sources**, not
  the full extraction set. The "N of M shown" badge makes this transparent.
- No per-paper reproducibility drill-down yet (deferred to a future
  `parameter-reproducibility.json` sidecar).

### Next candidates (not started)

**Tier 2 — data quality (weeks):**
- **Per-paper multi-parameter extraction pass** — single largest lever for
  cross-parameter correlations (currently only 1 pair reaches n ≥ 30).
- **Unit normalization** — power density tracked in mW/m², W/m³, mW/cm²
  simultaneously; aggregate stats across units are unsound.
- **Spearman alongside Pearson** for monotonic non-linear relationships.
- **Outlier flagging (IQR or MAD)** so extraction-noise outliers don't skew
  reported means.
- **Process the local PDF corpus** — run the papers pipeline end-to-end (see
  corpus status above).

**Tier 3 — scientific rigor (longer):**
- Gold-standard validation set (~50 manually-annotated papers) to benchmark
  extraction precision/recall.
- Bootstrap confidence intervals on distribution stats.
- Hierarchical stratification beyond MFC/MEC/MDC (material, substrate, scale).
- Crossref live-lookup for missing journal/title on extractions with a DOI.
- Per-paper reproducibility scores surfaced on sources as a quality filter.
- Publish a methodology/data paper for the ontology.

**Infrastructure:**
- Expand `sources[]` cap or persist full distribution by-system so client-side
  filters reflect the complete set, not the top-200 cache.
- Publish `parameter-reproducibility.json` sidecar (per-paper 26-criterion
  scores).
- Add Playwright smoke spec (single file, three routes).
- Stratify Bonferroni α by category so cross-category pairs don't eat the
  significance budget.

## When you're about to edit

- **Change a narrative/content field?** Edit the DB (or ask for `sync`), don't
  hand-edit `rich.json`. CI will catch drift.
- **Change provenance logic?** Edit `scripts/build-provenance.ts`, run
  `npm run build:provenance`, commit the updated `data/parameter-provenance.json`
  along with the script. CI drift check will fail otherwise.
- **Change the schema?** Update `docs/consumer-contract.md` in the same PR if
  the change affects consumers. Never loosen a guarantee silently.
- **Touch the detail page?** `cd site && npm test && npm run build`.
- **Don't** add dependencies to the root `package.json` without justification —
  the root package is `@messai-io/mess-parameters`, imported by downstream apps.
  Dev tools belong in `devDependencies` or in `site/`.

## What not to do

- Don't pretty-print `rich.json`. Don't reorder its keys.
- Don't embed provenance into `rich.json`. It's a sidecar for a reason.
- Don't restructure `references` into an array. Linkify at render only.
- Don't add `rounded` / border-radius classes to the site — the design system
  is sharp-edged. (User preference recorded in `.claude/CLAUDE.md`.)
- Don't invent or guess file paths. The map above is authoritative; if
  something is missing, add it here.
