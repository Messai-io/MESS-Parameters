# Consumer migration notes — analysis sidecars (v0.1)

_Addressed to the messai-ai team; updated as producer-side work lands._

## What's new

Four new producer-side artifacts you can read directly instead of
re-computing at request time:

1. `data/ontology-blocklist.txt` — hand-curated list of 25 parameter
   names to exclude from aggregates (Blue Light Ratio, Vibration
   Amplitude, Centrifugal Acceleration, etc.). Applied in every
   producer artifact; apply locally too if you compute anything
   against the raw CSVs.
2. `data/parameter-conditional-stats.json` — per-parameter stats
   stratified across 13 context axes + four 2D crosses. Top-25 params,
   672 buckets in the current snapshot. Schema:
   `schemas/conditional-stats.schema.json`.
3. `data/analysis/contradictions.json` — cross-paper numerical
   disagreements, thresholded to your existing defaults (30% for
   power/current, 20% for efficiency, 1.0 pH units, 10°C). Schema-
   compatible with your `ContradictionResult` interface.
4. `data/analysis/research-gaps.json` — twelve pre-defined research
   areas scored on urgency/impact/feasibility. Schema-compatible with
   your `ScoredGap` interface + `GapMetrics` (renamed to `metrics`).

## Suggested rollout

All of these are additive. Consumer repo can adopt them at its own
cadence:

### Contradictions — switchover plan

Your current code in
`apps/web/src/services/contradiction-detector.ts` runs on every
`/api/research/contradictions` request against Prisma. The producer
sidecar now ships the same shape. Proposed switch:

1. Read `data/analysis/contradictions.json` at submodule-sync time
   (already pulled into your `open-source/MESS-Parameters` mount).
2. In the API route, check whether the sidecar exists and has a fresh
   `corpus_snapshot`. If yes, return `contradictions[]` directly. If
   no (e.g. during initial rollout), fall through to the existing
   on-the-fly path.
3. Once you've verified sidecar output matches your current output on
   a handful of representative queries, delete the Prisma path.

Backward compatibility: `ContradictionResult` fields match exactly.

### Research gaps — switchover plan

Your current code in `apps/web/src/utils/gapScoringAlgorithm.ts` +
`apps/web/src/app/api/research/gaps/route.ts` computes twelve scored
gaps on every request. The producer sidecar uses the same twelve
research areas, the same weighted formula, the same urgency/impact/
feasibility dimensions, and emits the same `ScoredGap` shape. One
delta: our scoring dimensions are informed by producer-side data
(paper count from `paper-metadata.csv` title match, contradiction
count joined from `contradictions.json`, parameter coverage from
`parameter-provenance.json`) rather than Prisma runtime queries.

If your site needs live filtering ("show me gaps relevant to MFC only"),
that remains request-time work on top of the sidecar.

### Conditional stats

Net-new capability. Your single-axis `/api/extracted-parameters/stats`
route can now answer multi-dim questions like "what's the median
power density for acetate × MFC × carbon-brush?" directly from the
sidecar, without new aggregation code. Recommended consumer surfaces:

- A filter panel on the parameter detail page ("Stratify by: substrate
  / anode / temperature / system_type") that reads
  `buckets.by_<axis>` entries.
- Heatmap for `buckets.by_substrate_x_system_type` (most scientifically
  salient 2D cross).

### Ontology blocklist

If any of your import or analytics scripts read directly from the raw
`paper-parameter-values.csv` / `local-corpus-values.csv`, wire the
blocklist into them too (one-line filter). Otherwise the sidecars
already apply it and you inherit the cleanup transparently.

## Producer CLIs worth surfacing in docs

- `npm run recommend -- --given substrate=acetate --target "power density > 50" --top 5`
  returns ranked DOIs + a "common protocol features" block. This could
  power a "Find supporting protocols" page.
- `npm run build:conditional-stats` / `analyze:contradictions` /
  `analyze:gaps` / `verify:tier1` are the four build-time commands
  that regenerate the above sidecars; run after every corpus refresh.

## Open questions

1. **Kernel parity**: do we want byte-identical output between your
   existing on-the-fly gap scoring and our producer sidecar? If so,
   we can extract your `gapScoringAlgorithm.ts` kernel literally and
   swap it in; current version matches in spirit but uses slightly
   different feasibility weights (we don't have Prisma-runtime
   signals on funding or interdisciplinary connections).
2. **Corpus snapshot timing**: should the sidecars carry a hash of the
   input artifacts so the consumer can detect mismatch cheaply?
3. **Research-gap curation**: we emit 12 scored areas today. If VCs
   want "42 gaps" as advertised, we need a human curation pass to
   expand or decompose the twelve into finer-grained topics. Flagged
   but not in this producer plan.

## Changelog

| Date | Producer commit | Change |
|---|---|---|
| 2026-04-19 | df3d230 | Phase 1: ontology-blocklist + Tier A filter |
| 2026-04-19 | c8d4505 | Phase 2: conditional-stats sidecar + schema |
| 2026-04-19 | dfb0465 | Phase 4: `npm run recommend` CLI |
| 2026-04-19 | 1b2379e | Phase 3: contradictions + research-gaps sidecars |
