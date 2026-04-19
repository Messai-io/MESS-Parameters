#!/usr/bin/env tsx
/**
 * Papers that appear under multiple DOI strings (preprint vs publisher,
 * CrossRef aliases, capitalization variants) should yield the same
 * numbers for a given parameter. Disagreement is either a DOI-merge bug
 * on our side or an extraction flake.
 *
 * Group rows by normalized title (>= 25 chars, alphanumeric-lowered).
 * For each (title-group, parameter) pair with values from >=2 DOIs:
 *   - If all numeric values are within ±10% of the median  → agree
 *   - Otherwise                                            → disagree
 *
 * Agreement rate = agreeing pairs / total dup-pairs.
 * Pass: >= 0.85. Fail: < 0.70.
 *
 * Reads:
 *   data/paper-parameter-values.csv
 *   data/local-corpus-values.csv
 *
 * Writes:
 *   data/verification/duplicate-consistency.json
 */

import * as fs from 'fs';
import * as path from 'path';
import { passesSanity } from './unit_families';
import { loadBlocklist, isBlocklisted } from './ontology_gate';
const BLOCK = loadBlocklist();

const ROOT = path.resolve(__dirname, '..', '..');
const PPV = path.join(ROOT, 'data', 'paper-parameter-values.csv');
const LOCAL = path.join(ROOT, 'data', 'local-corpus-values.csv');
const OUT = path.join(ROOT, 'data', 'verification', 'duplicate-consistency.json');

const PASS_AGREEMENT = 0.85;
const FAIL_AGREEMENT = 0.70;
const REL_TOLERANCE = 0.10;
const MIN_TITLE_LEN = 25;

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

function normTitle(s: string): string {
  return (s || '').toLowerCase().replace(/[^a-z0-9]+/g, '').slice(0, 120);
}

function median(xs: number[]): number {
  const s = [...xs].sort((a, b) => a - b);
  const m = s.length;
  return m % 2 ? s[(m - 1) / 2] : 0.5 * (s[m / 2 - 1] + s[m / 2]);
}

function main() {
  interface R { title: string; doi: string; param: string; value: number }
  const all: R[] = [];
  for (const p of [PPV, LOCAL]) {
    if (!fs.existsSync(p)) continue;
    const { header, rows } = parseCsv(fs.readFileSync(p, 'utf8'));
    const iTitle = header.indexOf('paper_title');
    const iDoi = header.indexOf('paper_doi');
    const iParam = header.indexOf('parameter_name');
    const iNum = header.indexOf('numeric_value');
    const iHas = header.indexOf('has_numeric_value');
    const iConf = header.indexOf('confidence');
    if (iTitle < 0 || iDoi < 0 || iParam < 0 || iNum < 0) continue;
    for (const r of rows) {
      const has = iHas >= 0 ? r[iHas] : 't';
      if (has !== 't' && has !== 'true' && has !== '1') continue;
      const v = Number(r[iNum]);
      if (!Number.isFinite(v)) continue;
      const conf = iConf >= 0 ? Number(r[iConf] || 0) : 1;
      if (Number.isFinite(conf) && conf < 0.3) continue;
      const param = (r[iParam] || '').trim();
      const title = normTitle(r[iTitle] || '');
      const doi = (r[iDoi] || '').trim().toLowerCase();
      if (!param || !title || title.length < MIN_TITLE_LEN) continue;
      if (isBlocklisted(param, BLOCK)) continue;
      if (!passesSanity(param, v).ok) continue;
      all.push({ title, doi, param, value: v });
    }
  }

  // Group: title -> doi -> param -> values[]
  const byTitle = new Map<string, Map<string, Map<string, number[]>>>();
  for (const r of all) {
    if (!byTitle.has(r.title)) byTitle.set(r.title, new Map());
    const dM = byTitle.get(r.title)!;
    if (!dM.has(r.doi)) dM.set(r.doi, new Map());
    const pM = dM.get(r.doi)!;
    if (!pM.has(r.param)) pM.set(r.param, []);
    pM.get(r.param)!.push(r.value);
  }

  let dupPairs = 0;
  let agreePairs = 0;
  const disagreeExamples: { title: string; param: string; values: { doi: string; median: number }[] }[] = [];

  for (const [title, dM] of byTitle) {
    if (dM.size < 2) continue;
    // collect (param -> [{doi, median}])
    const paramMap = new Map<string, { doi: string; median: number }[]>();
    for (const [doi, pM] of dM) {
      for (const [param, vs] of pM) {
        if (vs.length === 0) continue;
        if (!paramMap.has(param)) paramMap.set(param, []);
        paramMap.get(param)!.push({ doi, median: median(vs) });
      }
    }
    for (const [param, entries] of paramMap) {
      if (entries.length < 2) continue;
      dupPairs++;
      const medAll = median(entries.map((e) => e.median));
      const ok = entries.every((e) => {
        if (Math.abs(medAll) < 1e-12) return Math.abs(e.median) < 1e-12;
        return Math.abs(e.median - medAll) / Math.abs(medAll) <= REL_TOLERANCE;
      });
      if (ok) agreePairs++;
      else if (disagreeExamples.length < 50) {
        disagreeExamples.push({ title: title.slice(0, 80), param, values: entries });
      }
    }
  }

  const agreement = dupPairs > 0 ? agreePairs / dupPairs : 1;
  let verdict: 'PASS' | 'FLAG' | 'FAIL';
  if (agreement >= PASS_AGREEMENT) verdict = 'PASS';
  else if (agreement >= FAIL_AGREEMENT) verdict = 'FLAG';
  else verdict = 'FAIL';

  const titlesWithDup = Array.from(byTitle.values()).filter((m) => m.size >= 2).length;

  const summary = {
    schema_version: '0.1.0',
    titles_with_multiple_dois: titlesWithDup,
    duplicate_pairs_evaluated: dupPairs,
    agreeing_pairs: agreePairs,
    disagreeing_pairs: dupPairs - agreePairs,
    agreement_rate: Number(agreement.toFixed(4)),
    relative_tolerance: REL_TOLERANCE,
    pass_threshold: PASS_AGREEMENT,
    fail_threshold: FAIL_AGREEMENT,
    verdict,
    examples: disagreeExamples.slice(0, 20),
  };

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(summary, null, 2) + '\n');

  console.log('Duplicate-DOI consistency:');
  console.log(`  titles with multiple DOIs:  ${titlesWithDup}`);
  console.log(`  duplicate pairs evaluated:  ${dupPairs}`);
  console.log(`  agreeing pairs:             ${agreePairs}`);
  console.log(`  agreement rate:             ${(agreement * 100).toFixed(2)}%  (pass ≥ ${PASS_AGREEMENT * 100}%, fail < ${FAIL_AGREEMENT * 100}%)`);
  console.log(`  verdict:                    ${verdict}`);
  console.log(`  wrote  → ${OUT}`);
}

main();
