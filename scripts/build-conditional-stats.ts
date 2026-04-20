#!/usr/bin/env tsx
/**
 * Multi-dimensional conditional stats sidecar. Reads the existing
 * `parameter-provenance.json` (which already has per-source `context`
 * fields populated from the local-PDF extractor) and bins every source
 * row along several scientifically meaningful axes.
 *
 * Output: `data/parameter-conditional-stats.json` — per-parameter
 * `buckets.by_<axis>` with per-bucket `computeStats` results, plus a
 * handful of 2D crosses where both axes are well-populated.
 *
 * Scope: top-N parameters by `n_values` (post-Phase-1 blocklist), to
 * keep the file size reasonable.
 *
 * Schema: `schemas/conditional-stats.schema.json`.
 *
 * Run: npm run build:conditional-stats
 */

import * as fs from 'fs';
import * as path from 'path';
import {
  computeStats, Stats,
  binLabel, TEMPERATURE_BINS, PH_BINS,
} from './stats_utils';

const ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'data');
const PROV_PATH = path.join(DATA_DIR, 'parameter-provenance.json');
const OUT_PATH = path.join(DATA_DIR, 'parameter-conditional-stats.json');

const TOP_N_PARAMS = 25;            // top parameters by n_values get the conditional breakdown
const MIN_BUCKET_N = 5;             // buckets below this are dropped
const MIN_DISTINCT_KEYS_FOR_CROSS = 3; // both axes need at least this many distinct bucket labels to produce a 2D cross
const SCHEMA_VERSION = '0.1.0';

// Categorical context fields that get `by_<name>` buckets. These are
// already the LLM-normalized strings (e.g. "acetate", not "sodium
// acetate 1 mM"). Normalization done by extract_parameters.py.
const CATEGORICAL_AXES = [
  'substrate',
  'anode_material',
  'cathode_material',
  'membrane',
  'operation_mode',
  'reactor_configuration',
  'inoculum',
  'dominant_organism',
  'electrolyte',
  'is_pure_culture',
  'value_type',
  'measurement_technique',
];

// Axes that come from the source row itself (not source.context).
const SOURCE_LEVEL_AXES = ['system_type'];

// Axes with continuous values that we bin into labels.
const NUMERIC_AXES: Array<{
  field: string;
  label: string;
  bins: [string, (v: number) => boolean][];
}> = [
  { field: 'temperature_c', label: 'temperature_bin', bins: TEMPERATURE_BINS },
  { field: 'ph', label: 'ph_bin', bins: PH_BINS },
];

// 2D cross-pairs worth computing if both 1D axes have enough variety.
const CROSS_PAIRS: Array<[string, string]> = [
  ['system_type', 'substrate'],
  ['substrate', 'anode_material'],
  ['system_type', 'anode_material'],
  ['substrate', 'temperature_bin'],
];

interface Source {
  doi: string;
  title?: string;
  system_type: string;
  value: number;
  unit: string;
  confidence: number;
  extraction_method: string;
  snippet: string | null;
  context: Record<string, unknown> | null;
}

interface ProvEntry {
  id: string;
  name: string;
  n_papers: number;
  n_values: number;
  sources: Source[];
}

function normalizeString(v: unknown): string | null {
  if (v == null) return null;
  const s = String(v).trim().toLowerCase();
  if (!s) return null;
  // Collapse runs of whitespace
  return s.replace(/\s+/g, ' ');
}

function axisValueFor(src: Source, axis: string): string | null {
  // source-level
  if (SOURCE_LEVEL_AXES.includes(axis)) {
    return normalizeString((src as any)[axis]);
  }
  // numeric axis -> bin
  const numeric = NUMERIC_AXES.find((a) => a.label === axis);
  if (numeric) {
    const v = src.context?.[numeric.field] as number | null | undefined;
    if (v == null || !Number.isFinite(Number(v))) return null;
    return binLabel(Number(v), numeric.bins);
  }
  // categorical context field
  const v = src.context?.[axis];
  return normalizeString(v);
}

type BucketStats = { key: string; stats: Stats };

function bucketizeBy(sources: Source[], axis: string): Record<string, Stats> {
  const groups = new Map<string, number[]>();
  for (const s of sources) {
    if (!Number.isFinite(s.value)) continue;
    const key = axisValueFor(s, axis);
    if (!key) continue;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(s.value);
  }
  const out: Record<string, Stats> = {};
  for (const [key, values] of groups) {
    if (values.length < MIN_BUCKET_N) continue;
    const stats = computeStats(values);
    if (!stats) continue;
    out[key] = stats;
  }
  return out;
}

function bucketizeCross(sources: Source[], axisA: string, axisB: string): Record<string, Stats> {
  const groups = new Map<string, number[]>();
  const distinctA = new Set<string>();
  const distinctB = new Set<string>();
  for (const s of sources) {
    if (!Number.isFinite(s.value)) continue;
    const a = axisValueFor(s, axisA);
    const b = axisValueFor(s, axisB);
    if (!a || !b) continue;
    distinctA.add(a);
    distinctB.add(b);
    const key = `${a}|${b}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(s.value);
  }
  if (distinctA.size < MIN_DISTINCT_KEYS_FOR_CROSS || distinctB.size < MIN_DISTINCT_KEYS_FOR_CROSS) {
    return {};
  }
  const out: Record<string, Stats> = {};
  for (const [key, values] of groups) {
    if (values.length < MIN_BUCKET_N) continue;
    const stats = computeStats(values);
    if (stats) out[key] = stats;
  }
  return out;
}

function main(): void {
  const prov = JSON.parse(fs.readFileSync(PROV_PATH, 'utf8'));
  const generatedAt = new Date().toISOString();

  // Rank + pick top N parameters
  const sorted: ProvEntry[] = [...prov.parameters].sort(
    (a: any, b: any) => (b.n_values ?? 0) - (a.n_values ?? 0),
  );
  const selected = sorted.slice(0, TOP_N_PARAMS);

  const entries = selected.map((p) => {
    const srcs = (p.sources ?? []).filter((s: any) => Number.isFinite(s.value));
    const buckets: Record<string, Record<string, Stats>> = {};

    for (const axis of SOURCE_LEVEL_AXES) {
      const b = bucketizeBy(srcs, axis);
      if (Object.keys(b).length > 0) buckets[`by_${axis}`] = b;
    }
    for (const axis of CATEGORICAL_AXES) {
      const b = bucketizeBy(srcs, axis);
      if (Object.keys(b).length > 0) buckets[`by_${axis}`] = b;
    }
    for (const { label } of NUMERIC_AXES) {
      const b = bucketizeBy(srcs, label);
      if (Object.keys(b).length > 0) buckets[`by_${label}`] = b;
    }
    for (const [a, b] of CROSS_PAIRS) {
      const out = bucketizeCross(srcs, a, b);
      if (Object.keys(out).length > 0) {
        buckets[`by_${a}_x_${b}`] = out;
      }
    }

    return {
      id: p.id,
      name: p.name,
      n_total: srcs.length,
      n_papers: p.n_papers ?? null,
      buckets,
    };
  });

  const summary = {
    schema_version: SCHEMA_VERSION,
    generated_at: generatedAt,
    corpus_snapshot: prov.metadata?.generated_at ?? null,
    config: {
      top_n_parameters: TOP_N_PARAMS,
      min_bucket_n: MIN_BUCKET_N,
      min_distinct_keys_for_cross: MIN_DISTINCT_KEYS_FOR_CROSS,
      categorical_axes: CATEGORICAL_AXES,
      source_level_axes: SOURCE_LEVEL_AXES,
      numeric_axes: NUMERIC_AXES.map(({ field, label }) => ({ field, label })),
      cross_pairs: CROSS_PAIRS.map(([a, b]) => `${a} x ${b}`),
    },
    parameters: entries,
  };

  fs.writeFileSync(OUT_PATH, JSON.stringify(summary, null, 2) + '\n');

  const totalBuckets = entries.reduce(
    (s, e) => s + Object.values(e.buckets).reduce((n, b) => n + Object.keys(b).length, 0),
    0,
  );

  console.log('Conditional stats:');
  console.log(`  parameters processed:   ${entries.length}`);
  console.log(`  total buckets emitted:  ${totalBuckets}`);
  console.log(`  wrote  → ${OUT_PATH}`);
  for (const e of entries.slice(0, 5)) {
    const axes = Object.keys(e.buckets);
    const counts = axes.map((a) => `${a.replace(/^by_/, '')}=${Object.keys(e.buckets[a]).length}`);
    console.log(`  ${e.name}: ${e.n_total} sources; axes: ${counts.join(' ')}`);
  }
}

if (require.main === module) main();
