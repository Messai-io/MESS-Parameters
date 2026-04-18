#!/usr/bin/env tsx
/**
 * Build per-parameter provenance sidecar from the published CSVs.
 *
 * Reads only files already in data/ (no database connection) so this
 * runs in CI without secrets. Produces data/parameter-provenance.json
 * keyed by rich.id.
 *
 * Inputs:
 *   data/parameter-definitions-rich.json    (name ↔ rich.id map)
 *   data/paper-parameter-values.csv         (ontology-mapped extractions)
 *   data/paper-metadata.csv                 (journal + DOI enrichment)
 *
 * Output shape is an object with { metadata, parameters[] }, validated
 * by schemas/provenance.schema.json.
 *
 * Run: npm run build:provenance
 *      (or: npx tsx scripts/build-provenance.ts)
 */
import * as fs from 'fs';
import * as path from 'path';

const ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'data');
const RICH_PATH = path.join(DATA_DIR, 'parameter-definitions-rich.json');
const PPV_PATH = path.join(DATA_DIR, 'paper-parameter-values.csv');
const LOCAL_PATH = path.join(DATA_DIR, 'local-corpus-values.csv');
const PM_PATH = path.join(DATA_DIR, 'paper-metadata.csv');
const OUT_PATH = path.join(DATA_DIR, 'parameter-provenance.json');

const SCHEMA_VERSION = '0.1.0';
const MIN_CONFIDENCE = 0.3;
const MIN_SYSTEM_N = 10;
const SOURCES_CAP = 200;
const HIST_BINS = 20;
const CORR_MIN_N = 30;
const TOP_CORR_PER_PARAM = 10;

// ═══════════════════════════════════════════════════════════════════════
// RFC-4180 CSV parser — handles quoted fields with embedded commas/quotes
// ═══════════════════════════════════════════════════════════════════════

function parseCsv(text: string): { header: string[]; rows: string[][] } {
  const rows: string[][] = [];
  let field = '';
  let row: string[] = [];
  let inQuotes = false;
  let i = 0;

  while (i < text.length) {
    const ch = text[i];
    if (inQuotes) {
      if (ch === '"') {
        if (text[i + 1] === '"') { field += '"'; i += 2; continue; }
        inQuotes = false; i++; continue;
      }
      field += ch; i++; continue;
    }
    if (ch === '"') { inQuotes = true; i++; continue; }
    if (ch === ',') { row.push(field); field = ''; i++; continue; }
    if (ch === '\n') {
      row.push(field); field = '';
      if (row.length > 1 || row[0] !== '') rows.push(row);
      row = []; i++; continue;
    }
    if (ch === '\r') { i++; continue; }
    field += ch; i++;
  }
  if (field !== '' || row.length > 0) {
    row.push(field);
    if (row.length > 1 || row[0] !== '') rows.push(row);
  }
  const header = rows.shift() ?? [];
  return { header, rows };
}

function toRecord(header: string[], row: string[]): Record<string, string> {
  const rec: Record<string, string> = {};
  for (let i = 0; i < header.length; i++) rec[header[i]] = row[i] ?? '';
  return rec;
}

// ═══════════════════════════════════════════════════════════════════════
// Student's t-distribution two-tailed p-value — matches
// scripts/recompute-correlation-pvalues.py to 1e-10.
// ═══════════════════════════════════════════════════════════════════════

function lgamma(x: number): number {
  // Lanczos approximation
  const g = 7;
  const c = [
    0.99999999999980993, 676.5203681218851, -1259.1392167224028,
    771.32342877765313, -176.61502916214059, 12.507343278686905,
    -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7,
  ];
  if (x < 0.5) {
    return Math.log(Math.PI / Math.sin(Math.PI * x)) - lgamma(1 - x);
  }
  x -= 1;
  let a = c[0];
  const t = x + g + 0.5;
  for (let i = 1; i < g + 2; i++) a += c[i] / (x + i);
  return 0.5 * Math.log(2 * Math.PI) + (x + 0.5) * Math.log(t) - t + Math.log(a);
}

function betacf(a: number, b: number, x: number): number {
  const MAX_ITER = 200;
  const EPS = 3e-15;
  const TINY = 1e-300;
  const qab = a + b;
  const qap = a + 1;
  const qam = a - 1;
  let c = 1;
  let d = 1 - (qab * x) / qap;
  if (Math.abs(d) < TINY) d = TINY;
  d = 1 / d;
  let h = d;
  for (let m = 1; m <= MAX_ITER; m++) {
    const m2 = 2 * m;
    let aa = (m * (b - m) * x) / ((qam + m2) * (a + m2));
    d = 1 + aa * d;
    if (Math.abs(d) < TINY) d = TINY;
    c = 1 + aa / c;
    if (Math.abs(c) < TINY) c = TINY;
    d = 1 / d;
    h *= d * c;
    aa = (-(a + m) * (qab + m) * x) / ((a + m2) * (qap + m2));
    d = 1 + aa * d;
    if (Math.abs(d) < TINY) d = TINY;
    c = 1 + aa / c;
    if (Math.abs(c) < TINY) c = TINY;
    d = 1 / d;
    const delta = d * c;
    h *= delta;
    if (Math.abs(delta - 1) < EPS) return h;
  }
  throw new Error('betacf: failed to converge');
}

function betainc(a: number, b: number, x: number): number {
  if (x <= 0) return 0;
  if (x >= 1) return 1;
  const lbeta = lgamma(a + b) - lgamma(a) - lgamma(b);
  const front = Math.exp(lbeta + a * Math.log(x) + b * Math.log1p(-x));
  if (x < (a + 1) / (a + b + 2)) return (front * betacf(a, b, x)) / a;
  return 1 - (front * betacf(b, a, 1 - x)) / b;
}

function twoTailedPFromR(r: number, n: number): number {
  if (n < 3 || Math.abs(r) >= 1) return NaN;
  const t = r * Math.sqrt((n - 2) / (1 - r * r));
  const df = n - 2;
  return betainc(df / 2, 0.5, df / (df + t * t));
}

// ═══════════════════════════════════════════════════════════════════════
// Stats helpers
// ═══════════════════════════════════════════════════════════════════════

interface Stats {
  n: number; min: number; max: number; mean: number;
  median: number; p05: number; p25: number; p75: number; p95: number;
  std: number;
  // Robust stats — less sensitive to extraction-noise outliers.
  mad: number;        // median absolute deviation × 1.4826 (≈ std for Gaussian)
  iqr: number;        // p75 − p25
  n_outliers: number; // count of values outside [p25 − 1.5·iqr, p75 + 1.5·iqr]
}

function quantile(sorted: number[], q: number): number {
  const pos = (sorted.length - 1) * q;
  const base = Math.floor(pos);
  const rest = pos - base;
  const next = sorted[base + 1] ?? sorted[base];
  return sorted[base] + rest * (next - sorted[base]);
}

function computeStats(values: number[]): Stats | null {
  if (values.length === 0) return null;
  const sorted = [...values].sort((a, b) => a - b);
  const n = sorted.length;
  const mean = sorted.reduce((s, v) => s + v, 0) / n;
  const variance = n > 1
    ? sorted.reduce((s, v) => s + (v - mean) ** 2, 0) / (n - 1)
    : 0;
  const median = quantile(sorted, 0.5);
  const p25 = quantile(sorted, 0.25);
  const p75 = quantile(sorted, 0.75);
  const iqr = p75 - p25;
  // MAD × 1.4826 is a consistent estimator of std under Gaussian assumption —
  // the scale-equivalent of median vs mean. Robust to outliers up to 50% of
  // the sample.
  const absDevs = sorted.map((v) => Math.abs(v - median)).sort((a, b) => a - b);
  const mad = quantile(absDevs, 0.5) * 1.4826;
  const lowerFence = p25 - 1.5 * iqr;
  const upperFence = p75 + 1.5 * iqr;
  const n_outliers = sorted.reduce(
    (s, v) => s + (v < lowerFence || v > upperFence ? 1 : 0),
    0,
  );
  return {
    n,
    min: sorted[0],
    max: sorted[n - 1],
    mean: round(mean, 6),
    median: round(median, 6),
    p05: round(quantile(sorted, 0.05), 6),
    p25: round(p25, 6),
    p75: round(p75, 6),
    p95: round(quantile(sorted, 0.95), 6),
    std: round(Math.sqrt(variance), 6),
    mad: round(mad, 6),
    iqr: round(iqr, 6),
    n_outliers,
  };
}

function round(x: number, digits: number): number {
  const f = 10 ** digits;
  return Math.round(x * f) / f;
}

function computeHistogram(values: number[], bins: number): { bins: number[]; counts: number[] } {
  if (values.length === 0) return { bins: [], counts: [] };
  const min = Math.min(...values);
  const max = Math.max(...values);
  if (min === max) {
    // Degenerate: all values identical
    return { bins: [min, max], counts: [values.length] };
  }
  const width = (max - min) / bins;
  const edges: number[] = [];
  for (let i = 0; i <= bins; i++) edges.push(round(min + i * width, 6));
  const counts = new Array(bins).fill(0);
  for (const v of values) {
    let idx = Math.floor((v - min) / width);
    if (idx === bins) idx = bins - 1; // max value into last bin
    counts[idx]++;
  }
  return { bins: edges, counts };
}

function pearson(xs: number[], ys: number[]): number | null {
  if (xs.length !== ys.length || xs.length < 3) return null;
  const n = xs.length;
  const mx = xs.reduce((s, v) => s + v, 0) / n;
  const my = ys.reduce((s, v) => s + v, 0) / n;
  let num = 0, dx = 0, dy = 0;
  for (let i = 0; i < n; i++) {
    const ax = xs[i] - mx;
    const ay = ys[i] - my;
    num += ax * ay;
    dx += ax * ax;
    dy += ay * ay;
  }
  if (dx === 0 || dy === 0) return null;
  return num / Math.sqrt(dx * dy);
}

function averageRanks(values: number[]): number[] {
  const n = values.length;
  const indexed = values.map((v, i) => ({ v, i }));
  indexed.sort((a, b) => a.v - b.v);
  const ranks = new Array<number>(n);
  let i = 0;
  while (i < n) {
    let j = i;
    while (j + 1 < n && indexed[j + 1].v === indexed[i].v) j++;
    // average rank for ties (1-indexed)
    const avgRank = (i + 1 + j + 1) / 2;
    for (let k = i; k <= j; k++) ranks[indexed[k].i] = avgRank;
    i = j + 1;
  }
  return ranks;
}

function spearman(xs: number[], ys: number[]): number | null {
  if (xs.length !== ys.length || xs.length < 3) return null;
  // Spearman ρ is Pearson r applied to the ranks, with ties averaged.
  return pearson(averageRanks(xs), averageRanks(ys));
}

// ═══════════════════════════════════════════════════════════════════════
// Tier A — scientific-integrity filters applied before aggregation.
// 1. Sanity clamps: reject physically-impossible values (pH > 14, CE > 110%,
//    negative concentrations, etc.). Prevents a single nonsense regex hit
//    from skewing every aggregate for that parameter.
// 2. Unit normalization: convert values in a parameter family to a canonical
//    unit so aggregates across papers use the same basis.
// ═══════════════════════════════════════════════════════════════════════

// Hardcoded sanity ranges keyed by case-insensitive parameter name. Values
// outside the range are rejected before stats + correlations are computed.
// Use generous bounds — the goal is to filter nonsense, not enforce typical
// ranges.
const SANITY_RANGES: Record<string, { min: number; max: number; unit_hint?: string }> = {
  'ph':                        { min: 0,    max: 14,      unit_hint: '-' },
  'temperature':               { min: -20,  max: 200,     unit_hint: '°C' },
  'ambient temperature':       { min: -20,  max: 200,     unit_hint: '°C' },
  'coulombic efficiency':      { min: 0,    max: 110,     unit_hint: '%' },
  'coulombicefficiency':       { min: 0,    max: 110,     unit_hint: '%' },
  'faradaic efficiency':       { min: 0,    max: 110,     unit_hint: '%' },
  'cod removal':               { min: 0,    max: 110,     unit_hint: '%' },
  'cod removal efficiency':    { min: 0,    max: 110,     unit_hint: '%' },
  'bod removal':               { min: 0,    max: 110,     unit_hint: '%' },
  'voltage':                   { min: -5,   max: 10,      unit_hint: 'V' },
  'open circuit voltage':      { min: 0,    max: 5,       unit_hint: 'V' },
  'internal resistance':       { min: 0,    max: 1e7 },  // up to 10 MΩ
  'external resistance':       { min: 0,    max: 1e7 },
  'maxpowerdensity':           { min: 0,    max: 1e6 },   // 1 kW/m² ceiling
  'max power density':         { min: 0,    max: 1e6 },
  'power density':             { min: 0,    max: 1e6 },
  'current density':           { min: 0,    max: 1e6 },
  'peak current':              { min: -1e4, max: 1e4 },   // mA
  'short circuit current':     { min: 0,    max: 1e4 },
  'overpotential':             { min: -2000, max: 2000 }, // mV
  'hydraulic retention time':  { min: 0,    max: 2000,    unit_hint: 'h' },
  'hydraulicretentiontime':    { min: 0,    max: 2000,    unit_hint: 'h' },
  'flow rate':                 { min: 0,    max: 1e5 },   // mL/min
  'reactor volume':            { min: 0,    max: 1e6 },   // mL
  'volume':                    { min: 0,    max: 1e6 },
  'batch volume':              { min: 0,    max: 1e6 },
  'electrode surface area':    { min: 0,    max: 1e4 },   // cm²
  'electrode diameter':        { min: 0,    max: 100 },   // cm
  'electrode spacing':         { min: 0,    max: 100 },   // cm
  'cod concentration':         { min: 0,    max: 5e5 },   // mg/L
  'bod concentration':         { min: 0,    max: 5e5 },
  'ionic strength':            { min: 0,    max: 10 },    // M
  'conductivity':              { min: 0,    max: 1e6 },
  'scan rate':                 { min: 0,    max: 1e5 },   // mV/s
};

function passesSanity(paramName: string, value: number): { ok: boolean; reason?: string } {
  if (!Number.isFinite(value)) return { ok: false, reason: 'non-finite' };
  const name = paramName.trim().toLowerCase();
  const range = SANITY_RANGES[name];
  if (!range) return { ok: true };
  if (value < range.min) return { ok: false, reason: `below min ${range.min}` };
  if (value > range.max) return { ok: false, reason: `above max ${range.max}` };
  return { ok: true };
}

// Unit normalization. Keyed by case-insensitive parameter name → (canonical
// unit, conversion table). Unknown units pass through unchanged with a
// flag so we don't silently co-mingle incomparable values.
interface UnitNorm {
  canonical: string;
  convert: Record<string, number>; // multiplier to canonical; unit names case-insensitive
}

const SURFACE_POWER: UnitNorm = {
  canonical: 'mW/m²',
  convert: {
    'mw/m²': 1, 'mw/m2': 1, 'mw m-2': 1, 'mw/m^2': 1,
    'w/m²':  1000, 'w/m2':  1000, 'w m-2':  1000,
    'mw/cm²': 10000, 'mw/cm2': 10000,
    'w/cm²':  1e7, 'w/cm2':  1e7,
    'µw/m²':  0.001, 'uw/m²':  0.001, 'uw/m2': 0.001,
  },
};
const SURFACE_CURRENT: UnitNorm = {
  canonical: 'mA/m²',
  convert: {
    'ma/m²': 1, 'ma/m2': 1, 'ma m-2': 1,
    'a/m²': 1000, 'a/m2': 1000, 'a m-2': 1000,
    'ma/cm²': 10000, 'ma/cm2': 10000,
    'a/cm²': 1e7, 'a/cm2': 1e7,
    'µa/m²': 0.001, 'ua/m²': 0.001, 'ua/m2': 0.001,
  },
};
const CONCENTRATION_WATER: UnitNorm = {
  canonical: 'mg/L',
  convert: {
    'mg/l': 1, 'mg l-1': 1,
    'g/l': 1000, 'g l-1': 1000,
    'µg/l': 0.001, 'ug/l': 0.001,
    'ppm': 1,  // for dilute aqueous — 1 ppm ≈ 1 mg/L
    'ppb': 0.001,
  },
};
const VOLUME: UnitNorm = {
  canonical: 'mL',
  convert: {
    'ml': 1, 'cm³': 1, 'cm3': 1, 'cc': 1,
    'l': 1000,
    'µl': 0.001, 'ul': 0.001,
    'm³': 1e6, 'm3': 1e6,
  },
};
const RESISTANCE: UnitNorm = {
  canonical: 'Ω',
  convert: {
    'ω': 1, 'ohm': 1, 'ohms': 1,
    'kω': 1000, 'kohm': 1000, 'kohms': 1000,
    'mω': 1e6, 'mohm': 1e6,
  },
};
const VOLTAGE: UnitNorm = {
  canonical: 'V',
  convert: { 'v': 1, 'volt': 1, 'volts': 1, 'mv': 0.001 },
};
const TIME_HOURS: UnitNorm = {
  canonical: 'h',
  convert: {
    'h': 1, 'hr': 1, 'hrs': 1, 'hour': 1, 'hours': 1,
    'min': 1/60, 'mins': 1/60, 'minutes': 1/60,
    's': 1/3600, 'sec': 1/3600, 'seconds': 1/3600,
    'd': 24, 'day': 24, 'days': 24,
  },
};

const UNIT_NORMALIZATIONS: Record<string, UnitNorm> = {
  'power density':         SURFACE_POWER,
  'max power density':     SURFACE_POWER,
  'maxpowerdensity':       SURFACE_POWER,
  'current density':       SURFACE_CURRENT,
  'cod concentration':     CONCENTRATION_WATER,
  'bod concentration':     CONCENTRATION_WATER,
  'volume':                VOLUME,
  'reactor volume':        VOLUME,
  'batch volume':          VOLUME,
  'internal resistance':   RESISTANCE,
  'external resistance':   RESISTANCE,
  'voltage':               VOLTAGE,
  'open circuit voltage':  VOLTAGE,
  'overpotential':         { canonical: 'mV', convert: { 'mv': 1, 'v': 1000 } },
  'hydraulic retention time': TIME_HOURS,
  'hydraulicretentiontime':   TIME_HOURS,
};

function normalizeUnit(paramName: string, value: number, unit: string): { value: number; unit: string; converted: boolean } {
  const norm = UNIT_NORMALIZATIONS[paramName.trim().toLowerCase()];
  if (!norm) return { value, unit, converted: false };
  const u = (unit || '').trim().toLowerCase();
  const factor = norm.convert[u];
  if (factor == null) return { value, unit, converted: false };
  if (factor === 1) return { value, unit: norm.canonical, converted: true };
  return { value: value * factor, unit: norm.canonical, converted: true };
}

// ═══════════════════════════════════════════════════════════════════════
// Main
// ═══════════════════════════════════════════════════════════════════════

interface RichEntry {
  id: string;
  name: string;
  category: string;
  unit: string | null;
  usage_count: number;
}

interface PpvRow {
  paper_key: string;       // doi ?? title (for cross-parameter joining)
  paper_doi: string;
  paper_title: string;
  paper_year: number | null;
  system_type: string;
  parameter_name: string;
  numeric_value: number;
  parameter_unit: string;
  confidence: number;
  extraction_method: string;
  source_section: string;
  is_verified: boolean;
  verified_mes: boolean;
  // Extended scientific context — populated from the local PDF pipeline
  // (null when missing, e.g. from the DB-derived rows).
  snippet: string | null;
  context: Record<string, unknown> | null;
}

interface Source {
  doi: string;
  title: string;
  year: number | null;
  journal: string | null;
  system_type: string;
  value: number;
  unit: string;
  confidence: number;
  extraction_method: string;
  source_section: string;
  verified: boolean;
  verified_mes: boolean;
  // Per-paper reproducibility score (0..1) from the 26-criterion rubric.
  // Null when we can't join the paper back to paper-metadata.csv.
  reproducibility_score: number | null;
  // Extended scientific context from the local-PDF extractor:
  //   snippet: the reporting sentence
  //   context: object with conditions + system config (see
  //            scripts/papers/extract_parameters.py PAPER_CONTEXT_FIELDS +
  //            OBSERVATION_FIELDS for the vocabulary).
  // Both null for rows sourced from the DB CSV (which lacks these columns).
  snippet: string | null;
  context: Record<string, unknown> | null;
}

interface CorrelationEntry {
  other_param_id: string;
  other_param_name: string;
  pearson_r: number;
  spearman_rho: number | null;
  n: number;
  p_corrected: number;
  significant: boolean;
}

interface ProvenanceEntry {
  id: string;
  name: string;
  n_papers: number;
  n_values: number;
  n_verified: number;
  mean_confidence: number;
  stats_global: Stats | null;
  stats_by_system: Record<string, Stats>;
  distribution: { bins: number[]; counts: number[] };
  sources: Source[];
  correlations: CorrelationEntry[];
}

function toNumOrNull(s: string): number | null {
  if (s === '' || s == null) return null;
  const n = Number(s);
  return Number.isFinite(n) ? n : null;
}

function main(): void {
  console.log('[1/5] Reading inputs...');
  const richAll = JSON.parse(fs.readFileSync(RICH_PATH, 'utf8')) as RichEntry[];
  const ppvText = fs.readFileSync(PPV_PATH, 'utf8');
  const pmText = fs.readFileSync(PM_PATH, 'utf8');

  const rNameMap = new Map<string, RichEntry>();
  const rIdMap = new Map<string, RichEntry>();
  for (const r of richAll) {
    rNameMap.set(r.name.toLowerCase(), r);
    rIdMap.set(r.id, r);
  }

  console.log('[2/5] Parsing CSVs...');
  const ppv = parseCsv(ppvText);
  const pm = parseCsv(pmText);
  console.log(`  paper-parameter-values: ${ppv.rows.length} rows`);
  console.log(`  paper-metadata:         ${pm.rows.length} rows`);

  // Optional sibling file emitted by scripts/papers/rollup_local_corpus.ts
  // from the local PDF pipeline. Shares the leading columns of
  // paper-parameter-values.csv plus trailing extended-context columns
  // (snippet, context_json). Extend the ppv header with the extra columns
  // so toRecord() picks them up below; DB rows simply get empty strings
  // for those positions.
  if (fs.existsSync(LOCAL_PATH)) {
    const localText = fs.readFileSync(LOCAL_PATH, 'utf8');
    const local = parseCsv(localText);
    const localIdx: Record<string, number> = {};
    local.header.forEach((c, i) => { localIdx[c] = i; });
    const sharedCols = ppv.header.filter(c => c in localIdx);
    const extraCols = local.header.filter(c => !ppv.header.includes(c));

    if (sharedCols.length !== ppv.header.length) {
      console.log(`  [warn] local-corpus-values.csv missing shared columns — skipping`);
    } else {
      // Pad existing ppv rows with empty strings for the extra columns.
      for (const row of ppv.rows) {
        while (row.length < ppv.header.length + extraCols.length) row.push('');
      }
      ppv.header.push(...extraCols);
      // Project local rows onto the combined header by column name.
      const combinedHeader = ppv.header;
      let unioned = 0;
      for (const row of local.rows) {
        const projected = combinedHeader.map(c => row[localIdx[c]] ?? '');
        ppv.rows.push(projected);
        unioned++;
      }
      console.log(`  local-corpus-values:    ${unioned} rows (unioned, +${extraCols.length} extra cols)`);
    }
  }

  // paper-metadata lookup: keyed by doi (primary) and title (fallback)
  const pmByDoi = new Map<string, Record<string, string>>();
  const pmByTitle = new Map<string, Record<string, string>>();
  for (const row of pm.rows) {
    const rec = toRecord(pm.header, row);
    if (rec.doi) pmByDoi.set(rec.doi, rec);
    if (rec.title) pmByTitle.set(rec.title, rec);
  }

  console.log('[3/5] Grouping rows by parameter (with sanity + unit normalization)...');
  const byParam = new Map<string, PpvRow[]>();
  let skippedLowConf = 0;
  let skippedNonNumeric = 0;
  let skippedNoMatch = 0;
  let skippedSanity = 0;
  let unitsNormalized = 0;

  for (const row of ppv.rows) {
    const rec = toRecord(ppv.header, row);
    if (rec.has_numeric_value !== 't') { skippedNonNumeric++; continue; }
    const conf = toNumOrNull(rec.confidence);
    if (conf == null || conf < MIN_CONFIDENCE) { skippedLowConf++; continue; }
    const num = toNumOrNull(rec.numeric_value);
    if (num == null) { skippedNonNumeric++; continue; }
    const r = rNameMap.get(rec.parameter_name.toLowerCase());
    if (!r) { skippedNoMatch++; continue; }

    const paperKey = rec.paper_doi || rec.paper_title;
    if (!paperKey) continue;

    // Tier A: unit normalization. Convert value to the canonical unit for
    // this parameter family so cross-paper aggregates share a basis.
    const normalized = normalizeUnit(rec.parameter_name, num, rec.parameter_unit);
    if (normalized.converted) unitsNormalized++;

    // Tier A: sanity filter. Reject values outside physical/chemical
    // bounds (pH > 14, negative resistance, etc.) — a single nonsense
    // regex hit can otherwise blow out every downstream stat.
    const sanity = passesSanity(rec.parameter_name, normalized.value);
    if (!sanity.ok) { skippedSanity++; continue; }

    // Parse optional extended-context columns from local-corpus rows.
    let ctx: Record<string, unknown> | null = null;
    const ctxStr = rec.context_json;
    if (ctxStr) {
      try { ctx = JSON.parse(ctxStr); } catch { ctx = null; }
    }
    const ppvRow: PpvRow = {
      paper_key: paperKey,
      paper_doi: rec.paper_doi,
      paper_title: rec.paper_title,
      paper_year: toNumOrNull(rec.paper_year),
      system_type: rec.system_type || 'UNSPECIFIED',
      parameter_name: rec.parameter_name,
      numeric_value: normalized.value,
      parameter_unit: normalized.unit,
      confidence: conf,
      extraction_method: rec.extraction_method,
      source_section: rec.source_section,
      is_verified: rec.is_verified === 't',
      verified_mes: rec.verified_mes_paper === 't',
      snippet: (rec.snippet || null),
      context: ctx,
    };
    const key = r.id;
    const bucket = byParam.get(key);
    if (bucket) bucket.push(ppvRow); else byParam.set(key, [ppvRow]);
  }
  console.log(`  kept: ${[...byParam.values()].reduce((s, a) => s + a.length, 0)} rows across ${byParam.size} parameters`);
  console.log(`  skipped (low confidence): ${skippedLowConf}`);
  console.log(`  skipped (non-numeric):    ${skippedNonNumeric}`);
  console.log(`  skipped (no ontology match): ${skippedNoMatch}`);
  console.log(`  skipped (sanity clamp):  ${skippedSanity}`);
  console.log(`  unit-normalized:         ${unitsNormalized}`);

  console.log('[4/5] Computing per-parameter stats, distributions, sources...');
  const entries: ProvenanceEntry[] = [];
  // For correlations pass: paper_key → { param_id → mean numeric_value }
  const paperParamMap = new Map<string, Map<string, number[]>>();

  for (const [paramId, rows] of byParam) {
    const richEntry = rIdMap.get(paramId);
    // values for stats
    const values = rows.map(r => r.numeric_value);

    // unique papers
    const uniquePapers = new Set(rows.map(r => r.paper_key));
    const verifiedPapers = new Set(rows.filter(r => r.verified_mes).map(r => r.paper_key));

    const meanConf = rows.reduce((s, r) => s + r.confidence, 0) / rows.length;

    // stats_by_system
    const bySys: Record<string, Stats> = {};
    const sysBuckets = new Map<string, number[]>();
    for (const r of rows) {
      const b = sysBuckets.get(r.system_type);
      if (b) b.push(r.numeric_value);
      else sysBuckets.set(r.system_type, [r.numeric_value]);
    }
    for (const [sys, vals] of sysBuckets) {
      if (vals.length >= MIN_SYSTEM_N) {
        const s = computeStats(vals);
        if (s) bySys[sys] = s;
      }
    }

    // sources — include every extraction row (with or without DOI), cap 200,
    // prioritize verified MES rows, then confidence, then recency. UI decides
    // how to display rows without a DOI (shows title only, no link).
    const seen = new Set<string>();
    const dedupedSources: Source[] = [];
    const sortedRows = [...rows].sort((a, b) => {
      if (a.verified_mes !== b.verified_mes) return a.verified_mes ? -1 : 1;
      if (b.confidence !== a.confidence) return b.confidence - a.confidence;
      return (b.paper_year ?? 0) - (a.paper_year ?? 0);
    });
    for (const r of sortedRows) {
      // paper_key is doi or title; if both missing, drop silently
      if (!r.paper_key) continue;
      const dedupKey = `${r.paper_key}|${r.numeric_value}|${r.system_type}`;
      if (seen.has(dedupKey)) continue;
      seen.add(dedupKey);
      const pmRec = pmByDoi.get(r.paper_doi) ?? pmByTitle.get(r.paper_title);
      const repro = pmRec?.reproducibility_score;
      const reproNum = repro != null && repro !== '' ? Number(repro) : NaN;
      dedupedSources.push({
        doi: r.paper_doi,
        title: pmRec?.title ?? r.paper_title,
        year: r.paper_year,
        journal: pmRec?.journal || null,
        system_type: r.system_type,
        value: r.numeric_value,
        unit: r.parameter_unit,
        confidence: round(r.confidence, 3),
        extraction_method: r.extraction_method,
        source_section: r.source_section,
        verified: r.is_verified,
        verified_mes: r.verified_mes,
        reproducibility_score: Number.isFinite(reproNum) ? round(reproNum, 3) : null,
        snippet: r.snippet,
        context: r.context,
      });
      if (dedupedSources.length >= SOURCES_CAP) break;
    }

    // feed correlation map (average per (paper, parameter))
    const perPaperSum = new Map<string, { sum: number; count: number }>();
    for (const r of rows) {
      const cur = perPaperSum.get(r.paper_key);
      if (cur) { cur.sum += r.numeric_value; cur.count++; }
      else perPaperSum.set(r.paper_key, { sum: r.numeric_value, count: 1 });
    }
    for (const [paperKey, agg] of perPaperSum) {
      const paramMap = paperParamMap.get(paperKey) ?? new Map<string, number[]>();
      paramMap.set(paramId, [agg.sum / agg.count]);
      paperParamMap.set(paperKey, paramMap);
    }

    entries.push({
      id: paramId,
      name: richEntry?.name ?? '',
      n_papers: uniquePapers.size,
      n_values: rows.length,
      n_verified: verifiedPapers.size,
      mean_confidence: round(meanConf, 3),
      stats_global: computeStats(values),
      stats_by_system: bySys,
      distribution: computeHistogram(values, HIST_BINS),
      sources: dedupedSources,
      correlations: [], // filled in step 5
    });
  }

  console.log('[5/5] Computing pairwise correlations (n ≥ ' + CORR_MIN_N + ')...');

  // Invert paperParamMap to paramId → paperKey → value
  const paramPaperValue = new Map<string, Map<string, number>>();
  for (const [paperKey, paramMap] of paperParamMap) {
    for (const [paramId, arr] of paramMap) {
      let m = paramPaperValue.get(paramId);
      if (!m) { m = new Map(); paramPaperValue.set(paramId, m); }
      m.set(paperKey, arr[0]);
    }
  }

  const paramIds = [...paramPaperValue.keys()];
  const idToName = new Map(entries.map(e => [e.id, e.name]));
  type RawCorr = { a: string; b: string; r: number; rho: number | null; n: number };
  const rawCorrs: RawCorr[] = [];

  for (let i = 0; i < paramIds.length; i++) {
    const aId = paramIds[i];
    const aMap = paramPaperValue.get(aId)!;
    // skip if the parameter can't possibly reach CORR_MIN_N
    if (aMap.size < CORR_MIN_N) continue;
    for (let j = i + 1; j < paramIds.length; j++) {
      const bId = paramIds[j];
      const bMap = paramPaperValue.get(bId)!;
      if (bMap.size < CORR_MIN_N) continue;
      // find shared papers
      const xs: number[] = [];
      const ys: number[] = [];
      // iterate smaller map
      const [small, large] = aMap.size <= bMap.size ? [aMap, bMap] : [bMap, aMap];
      const smallIsA = aMap === small;
      for (const [k, v] of small) {
        const other = large.get(k);
        if (other == null) continue;
        if (smallIsA) { xs.push(v); ys.push(other); }
        else { xs.push(other); ys.push(v); }
      }
      if (xs.length < CORR_MIN_N) continue;
      const r = pearson(xs, ys);
      if (r == null) continue;
      const rho = spearman(xs, ys);
      rawCorrs.push({ a: aId, b: bId, r, rho, n: xs.length });
    }
  }
  const totalTests = rawCorrs.length;
  const bonferroniAlpha = totalTests > 0 ? 0.05 / totalTests : 0.05;
  console.log(`  tested ${totalTests} pairs; Bonferroni α = ${bonferroniAlpha.toExponential(3)}`);

  // Annotate both directions
  const corrByParam = new Map<string, CorrelationEntry[]>();
  for (const c of rawCorrs) {
    const p = twoTailedPFromR(c.r, c.n);
    const sig = Number.isFinite(p) && p < bonferroniAlpha;
    const pr = round(c.r, 6);
    const rho = c.rho == null ? null : round(c.rho, 6);
    const pc = round(p, 8);
    const eA: CorrelationEntry = {
      other_param_id: c.b,
      other_param_name: idToName.get(c.b) ?? '',
      pearson_r: pr,
      spearman_rho: rho,
      n: c.n,
      p_corrected: pc,
      significant: sig,
    };
    const eB: CorrelationEntry = {
      other_param_id: c.a,
      other_param_name: idToName.get(c.a) ?? '',
      pearson_r: pr,
      spearman_rho: rho,
      n: c.n,
      p_corrected: pc,
      significant: sig,
    };
    const listA = corrByParam.get(c.a);
    if (listA) listA.push(eA); else corrByParam.set(c.a, [eA]);
    const listB = corrByParam.get(c.b);
    if (listB) listB.push(eB); else corrByParam.set(c.b, [eB]);
  }

  // Attach top N (by |r|, prefer significant) to each entry
  for (const e of entries) {
    const list = corrByParam.get(e.id) ?? [];
    list.sort((a, b) => {
      if (a.significant !== b.significant) return a.significant ? -1 : 1;
      return Math.abs(b.pearson_r) - Math.abs(a.pearson_r);
    });
    e.correlations = list.slice(0, TOP_CORR_PER_PARAM);
  }

  entries.sort((a, b) => a.id.localeCompare(b.id));

  const out = {
    metadata: {
      schema_version: SCHEMA_VERSION,
      generated_at: new Date().toISOString(),
      generator: 'scripts/build-provenance.ts',
      source_files: [
        'data/paper-parameter-values.csv',
        'data/paper-metadata.csv',
        'data/parameter-definitions-rich.json',
      ],
      thresholds: {
        min_confidence: MIN_CONFIDENCE,
        min_system_n: MIN_SYSTEM_N,
        sources_cap: SOURCES_CAP,
        histogram_bins: HIST_BINS,
        correlation_min_n: CORR_MIN_N,
        top_correlations_per_parameter: TOP_CORR_PER_PARAM,
      },
      correlations: {
        total_tests: totalTests,
        bonferroni_alpha: bonferroniAlpha,
      },
      counts: {
        parameters_with_provenance: entries.length,
        total_sources: entries.reduce((s, e) => s + e.sources.length, 0),
      },
    },
    parameters: entries,
  };

  fs.writeFileSync(OUT_PATH, JSON.stringify(out, null, 2) + '\n', 'utf8');
  console.log(`\n✓ Wrote ${OUT_PATH}`);
  console.log(`  ${entries.length} parameters with provenance`);
  console.log(`  ${out.metadata.counts.total_sources} total sources`);
  console.log(`  ${totalTests} pairwise correlations tested`);

  // Stamp has_provenance=true on matching rich.json entries. Keep this
  // idempotent: rewrite the whole array (same order) and leave untouched
  // entries alone. This is a patch-level safe change under the consumer
  // contract (optional field added to richParameter).
  const provIds = new Set(entries.map(e => e.id));
  let stamped = 0;
  let cleared = 0;
  const updated = richAll.map(r => {
    const anyR = r as RichEntry & { has_provenance?: boolean };
    const shouldHave = provIds.has(r.id);
    if (shouldHave) {
      if (anyR.has_provenance !== true) { stamped++; return { ...r, has_provenance: true }; }
      return r;
    }
    if (anyR.has_provenance !== undefined) {
      cleared++;
      const { has_provenance: _omit, ...rest } = anyR;
      return rest;
    }
    return r;
  });
  // rich.json is shipped as single-line JSON (generated by psql row_to_json +
  // json_agg). Preserve that format — a newline-per-entry rewrite would bloat
  // diffs and break downstream cache keys.
  fs.writeFileSync(RICH_PATH, JSON.stringify(updated), 'utf8');
  console.log(`  stamped has_provenance=true on ${stamped} rich entries, cleared on ${cleared}`);
}

main();
