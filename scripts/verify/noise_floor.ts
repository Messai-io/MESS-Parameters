#!/usr/bin/env tsx
/**
 * Sensitivity analysis: quarantine papers that emit unusually many
 * observations (default >50) and see how much the per-parameter median
 * moves. A big shift means a handful of noisy papers are dominating the
 * corpus statistics — the published medians aren't robust.
 *
 * Pass threshold: median relative shift < 15% for every parameter with
 * n >= 30 observations. Uses relative-shift = |after - before| / |before|
 * (clamped to 0 when before == 0).
 *
 * Reads:
 *   data/paper-parameter-values.csv
 *   data/local-corpus-values.csv
 *
 * Writes:
 *   data/verification/noise-floor.json
 */

import * as fs from 'fs';
import * as path from 'path';
import { SANITY_RANGES, passesSanity } from './unit_families';
import { loadBlocklist, isBlocklisted } from './ontology_gate';

const ROOT = path.resolve(__dirname, '..', '..');
const PPV = path.join(ROOT, 'data', 'paper-parameter-values.csv');
const LOCAL = path.join(ROOT, 'data', 'local-corpus-values.csv');
const OUT = path.join(ROOT, 'data', 'verification', 'noise-floor.json');
const BLOCK = loadBlocklist();

const NOISY_THRESHOLD = 50;
const MIN_N = 30;
const PASS_SHIFT = 0.15;
const FAIL_SHIFT = 0.30;

function parseCsv(text: string): { header: string[]; rows: string[][] } {
  const rows: string[][] = [];
  let field = ''; let row: string[] = []; let inQuotes = false; let i = 0;
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
    if (ch === '\n') { row.push(field); rows.push(row); row = []; field = ''; i++; continue; }
    if (ch === '\r') { i++; continue; }
    field += ch; i++;
  }
  if (field.length > 0 || row.length > 0) { row.push(field); rows.push(row); }
  const header = rows.shift() || [];
  return { header, rows };
}

function median(xs: number[]): number {
  if (xs.length === 0) return NaN;
  const s = [...xs].sort((a, b) => a - b);
  const m = s.length;
  return m % 2 ? s[(m - 1) / 2] : 0.5 * (s[m / 2 - 1] + s[m / 2]);
}

function main() {
  interface R { doi: string; param: string; value: number }
  const all: R[] = [];
  for (const p of [PPV, LOCAL]) {
    if (!fs.existsSync(p)) continue;
    const { header, rows } = parseCsv(fs.readFileSync(p, 'utf8'));
    const iDoi = header.indexOf('paper_doi');
    const iParam = header.indexOf('parameter_name');
    const iNum = header.indexOf('numeric_value');
    const iHas = header.indexOf('has_numeric_value');
    const iConf = header.indexOf('confidence');
    if (iDoi < 0 || iParam < 0 || iNum < 0) continue;
    for (const r of rows) {
      const has = iHas >= 0 ? r[iHas] : 't';
      if (has !== 't' && has !== 'true' && has !== '1') continue;
      const v = Number(r[iNum]);
      if (!Number.isFinite(v)) continue;
      const conf = iConf >= 0 ? Number(r[iConf] || 0) : 1;
      if (Number.isFinite(conf) && conf < 0.3) continue;
      const param = (r[iParam] || '').trim();
      if (!param) continue;
      if (isBlocklisted(param, BLOCK)) continue;
      if (!passesSanity(param, v).ok) continue;
      all.push({ doi: (r[iDoi] || '').trim(), param, value: v });
    }
  }

  // Per-paper observation counts
  const counts = new Map<string, number>();
  for (const r of all) counts.set(r.doi, (counts.get(r.doi) || 0) + 1);
  const noisyDois = new Set<string>();
  for (const [doi, n] of counts) if (n > NOISY_THRESHOLD) noisyDois.add(doi);

  // Per-parameter medians before/after quarantine
  const byParamBefore = new Map<string, number[]>();
  const byParamAfter = new Map<string, number[]>();
  for (const r of all) {
    if (!byParamBefore.has(r.param)) byParamBefore.set(r.param, []);
    byParamBefore.get(r.param)!.push(r.value);
    if (!noisyDois.has(r.doi)) {
      if (!byParamAfter.has(r.param)) byParamAfter.set(r.param, []);
      byParamAfter.get(r.param)!.push(r.value);
    }
  }

  interface ShiftRow {
    parameter_name: string;
    n_before: number;
    n_after: number;
    median_before: number;
    median_after: number | null;
    relative_shift: number | null;
    emptied_by_quarantine: boolean;
  }
  const shifts: ShiftRow[] = [];
  for (const [param, vs] of byParamBefore) {
    if (vs.length < MIN_N) continue;
    const after = byParamAfter.get(param) || [];
    const mb = median(vs);
    if (after.length === 0) {
      shifts.push({
        parameter_name: param,
        n_before: vs.length,
        n_after: 0,
        median_before: mb,
        median_after: null,
        relative_shift: null,
        emptied_by_quarantine: true,
      });
      continue;
    }
    const ma = median(after);
    const rel = Math.abs(mb) < 1e-12 ? (Math.abs(ma) < 1e-12 ? 0 : 1) : Math.abs(ma - mb) / Math.abs(mb);
    shifts.push({
      parameter_name: param,
      n_before: vs.length,
      n_after: after.length,
      median_before: mb,
      median_after: ma,
      relative_shift: Number(rel.toFixed(4)),
      emptied_by_quarantine: false,
    });
  }
  shifts.sort((a, b) => (b.relative_shift ?? -1) - (a.relative_shift ?? -1));

  const evaluatedShifts = shifts.filter((s) => s.relative_shift != null).map((s) => s.relative_shift!);
  const emptiedCount = shifts.filter((s) => s.emptied_by_quarantine).length;
  const maxShift = evaluatedShifts.length ? Math.max(...evaluatedShifts) : 0;
  let verdict: 'PASS' | 'FLAG' | 'FAIL';
  if (maxShift < PASS_SHIFT) verdict = 'PASS';
  else if (maxShift < FAIL_SHIFT) verdict = 'FLAG';
  else verdict = 'FAIL';

  const result = {
    schema_version: '0.1.0',
    noisy_threshold_obs_per_paper: NOISY_THRESHOLD,
    min_n_for_eval: MIN_N,
    total_papers: counts.size,
    noisy_papers: noisyDois.size,
    noisy_paper_share: Number((noisyDois.size / Math.max(1, counts.size)).toFixed(4)),
    parameters_evaluated: shifts.length,
    parameters_emptied_by_quarantine: emptiedCount,
    median_shift_max: Number(maxShift.toFixed(4)),
    median_shift_p50: Number(median(evaluatedShifts).toFixed(4)),
    pass_threshold: PASS_SHIFT,
    fail_threshold: FAIL_SHIFT,
    verdict,
    shifts,
  };
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(result, null, 2) + '\n');

  console.log('Noise-floor sensitivity:');
  console.log(`  papers total:            ${counts.size}`);
  console.log(`  noisy papers (>${NOISY_THRESHOLD}):    ${noisyDois.size}  (${(100 * noisyDois.size / Math.max(1, counts.size)).toFixed(1)}%)`);
  console.log(`  parameters evaluated:    ${shifts.length}`);
  console.log(`  max median shift:        ${(maxShift * 100).toFixed(1)}%  (pass < ${PASS_SHIFT * 100}%, fail ≥ ${FAIL_SHIFT * 100}%)`);
  console.log(`  verdict:                 ${verdict}`);
  console.log(`  emptied by quarantine:   ${emptiedCount}`);
  console.log(`  top shifts:`);
  for (const s of shifts.slice(0, 10)) {
    const pct = s.relative_shift == null ? '∅(emptied)' : `${(s.relative_shift * 100).toFixed(1)}%`;
    const mAfter = s.median_after == null ? 'n/a' : s.median_after.toPrecision(4);
    console.log(`    ${pct.padStart(12)}  ${s.parameter_name}  (n ${s.n_before}→${s.n_after}, median ${s.median_before.toPrecision(4)}→${mAfter})`);
  }
  console.log(`  wrote  → ${OUT}`);
}

main();
