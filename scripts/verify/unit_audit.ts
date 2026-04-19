#!/usr/bin/env tsx
/**
 * Audit (parameter_name, unit) pairs in the combined extraction corpus
 * against the vocabulary in scripts/verify/unit_families.ts. Any pair
 * whose parameter has a known UnitNorm but whose unit string isn't in
 * its conversion table is "unknown" — flag for review.
 *
 * Pass threshold: unknown share < 3% of known-family rows.
 *
 * Reads:
 *   data/paper-parameter-values.csv      DB-sourced rows
 *   data/local-corpus-values.csv         local-PDF rows
 *
 * Writes:
 *   data/verification/unit-audit.json    summary + verdict
 *   data/verification/unit-audit-unknowns.csv    every unknown pair
 */

import * as fs from 'fs';
import * as path from 'path';
import { UNIT_NORMALIZATIONS } from './unit_families';

const ROOT = path.resolve(__dirname, '..', '..');
const PPV = path.join(ROOT, 'data', 'paper-parameter-values.csv');
const LOCAL = path.join(ROOT, 'data', 'local-corpus-values.csv');
const OUT_DIR = path.join(ROOT, 'data', 'verification');
const OUT_JSON = path.join(OUT_DIR, 'unit-audit.json');
const OUT_CSV = path.join(OUT_DIR, 'unit-audit-unknowns.csv');

const PASS_UNKNOWN_RATE = 0.03;
const FAIL_UNKNOWN_RATE = 0.10;

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
    if (ch === '\n') { row.push(field); rows.push(row); row = []; field = ''; i++; continue; }
    if (ch === '\r') { i++; continue; }
    field += ch; i++;
  }
  if (field.length > 0 || row.length > 0) { row.push(field); rows.push(row); }
  const header = rows.shift() || [];
  return { header, rows };
}

function main() {
  interface Row { param: string; unit: string }
  const all: Row[] = [];
  for (const p of [PPV, LOCAL]) {
    if (!fs.existsSync(p)) continue;
    const { header, rows } = parseCsv(fs.readFileSync(p, 'utf8'));
    const idxParam = header.indexOf('parameter_name');
    const idxUnit = header.indexOf('parameter_unit');
    if (idxParam < 0 || idxUnit < 0) continue;
    for (const r of rows) {
      const param = (r[idxParam] || '').trim();
      const unit = (r[idxUnit] || '').trim();
      if (!param) continue;
      all.push({ param, unit });
    }
  }

  let knownFamilyRows = 0;
  let knownUnitRows = 0;
  let unknownUnitRows = 0;
  const unknownCounts = new Map<string, number>();

  for (const { param, unit } of all) {
    const norm = UNIT_NORMALIZATIONS[param.toLowerCase()];
    if (!norm) continue;
    knownFamilyRows++;
    const u = unit.toLowerCase();
    if (norm.convert[u] != null) {
      knownUnitRows++;
    } else {
      unknownUnitRows++;
      const key = `${param.toLowerCase()}|${unit}`;
      unknownCounts.set(key, (unknownCounts.get(key) || 0) + 1);
    }
  }

  const unknownRate = knownFamilyRows > 0 ? unknownUnitRows / knownFamilyRows : 0;
  let verdict: 'PASS' | 'FLAG' | 'FAIL';
  if (unknownRate < PASS_UNKNOWN_RATE) verdict = 'PASS';
  else if (unknownRate < FAIL_UNKNOWN_RATE) verdict = 'FLAG';
  else verdict = 'FAIL';

  const summary = {
    schema_version: '0.1.0',
    total_rows: all.length,
    rows_with_known_family: knownFamilyRows,
    rows_with_known_unit: knownUnitRows,
    rows_with_unknown_unit: unknownUnitRows,
    unknown_rate: Number(unknownRate.toFixed(4)),
    unique_unknown_pairs: unknownCounts.size,
    pass_unknown_rate: PASS_UNKNOWN_RATE,
    fail_unknown_rate: FAIL_UNKNOWN_RATE,
    verdict,
  };

  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(OUT_JSON, JSON.stringify(summary, null, 2) + '\n');

  const lines = ['parameter_name,unit,count'];
  const sorted = Array.from(unknownCounts.entries()).sort((a, b) => b[1] - a[1]);
  for (const [k, n] of sorted) {
    const [param, unit] = k.split('|');
    lines.push(`${JSON.stringify(param)},${JSON.stringify(unit)},${n}`);
  }
  fs.writeFileSync(OUT_CSV, lines.join('\n') + '\n');

  console.log('Unit audit:');
  console.log(`  total rows:              ${all.length}`);
  console.log(`  known-family rows:       ${knownFamilyRows}`);
  console.log(`  known-unit rows:         ${knownUnitRows}`);
  console.log(`  unknown-unit rows:       ${unknownUnitRows}`);
  console.log(`  unknown rate:            ${(unknownRate * 100).toFixed(2)}%  (pass < ${PASS_UNKNOWN_RATE * 100}%, fail ≥ ${FAIL_UNKNOWN_RATE * 100}%)`);
  console.log(`  unique unknown pairs:    ${unknownCounts.size}`);
  console.log(`  verdict:                 ${verdict}`);
  console.log(`  top unknowns:`);
  for (const [k, n] of sorted.slice(0, 10)) {
    const [param, unit] = k.split('|');
    console.log(`    ${n.toString().padStart(5)}  ${param}  | unit="${unit}"`);
  }
  console.log(`  wrote summary  → ${OUT_JSON}`);
  console.log(`  wrote unknowns → ${OUT_CSV}`);
}

main();
