#!/usr/bin/env tsx
/**
 * Ontology gate — audit and enforce the MES-relevance filter for extraction rows.
 *
 * Two independent signals are combined:
 *
 *  1. **Parameter-level blocklist** — `data/ontology-blocklist.txt`. Hand-
 *     curated list of parameter names that appear in the 687-entry ontology
 *     but are NOT MES performance parameters (photobiology, sample prep,
 *     molecular biology, generic-too-broad). Case-insensitive match.
 *
 *  2. **Paper-level verified_mes gate** — `data/paper-metadata.csv`'s
 *     `verified_mes` column. Papers where the upstream classifier deemed
 *     the paper to NOT be about MES (typically because title/abstract has
 *     no MFC/MEC/MDC/BES keyword). Their extraction rows likely come from
 *     off-topic sections parsed by mistake.
 *
 * Emits `data/verification/ontology-gate.json` summarizing pre/post-gate
 * row counts and a ranked list of parameters suppressed by each rule.
 * This runs as a standalone audit; the actual filtering happens in
 * `scripts/build-provenance.ts` at Tier A.
 *
 * Pass thresholds: post-gate row count ≥ 60% of pre-gate (otherwise we
 * may have set the blocklist too aggressively); blocklist-suppressed
 * parameter share ≤ 10% of pre-gate rows.
 *
 * Run: npx tsx scripts/verify/ontology_gate.ts
 */

import * as fs from 'fs';
import * as path from 'path';

const ROOT = path.resolve(__dirname, '..', '..');
const PPV = path.join(ROOT, 'data', 'paper-parameter-values.csv');
const LOCAL = path.join(ROOT, 'data', 'local-corpus-values.csv');
const PM = path.join(ROOT, 'data', 'paper-metadata.csv');
const BLOCKLIST = path.join(ROOT, 'data', 'ontology-blocklist.txt');
const OUT = path.join(ROOT, 'data', 'verification', 'ontology-gate.json');

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

export function loadBlocklist(): Set<string> {
  if (!fs.existsSync(BLOCKLIST)) return new Set();
  const lines = fs.readFileSync(BLOCKLIST, 'utf8').split('\n');
  const out = new Set<string>();
  for (const raw of lines) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    out.add(line.toLowerCase());
  }
  return out;
}

export function isBlocklisted(paramName: string, block: Set<string>): boolean {
  return block.has((paramName || '').trim().toLowerCase());
}

function main() {
  const block = loadBlocklist();
  if (block.size === 0) {
    console.warn(`[warn] blocklist at ${BLOCKLIST} is empty or missing`);
  }

  // Paper metadata → verified_mes lookup
  const verifiedByDoi = new Map<string, boolean>();
  if (fs.existsSync(PM)) {
    const { header, rows } = parseCsv(fs.readFileSync(PM, 'utf8'));
    const iDoi = header.indexOf('doi');
    const iVer = header.indexOf('verified_mes');
    if (iDoi >= 0 && iVer >= 0) {
      for (const r of rows) {
        const doi = (r[iDoi] || '').trim();
        if (!doi) continue;
        verifiedByDoi.set(doi, r[iVer] === 't' || r[iVer] === 'true');
      }
    }
  }

  interface Agg {
    param: string;
    raw: number;
    after_blocklist: number;
    after_verified: number;
    after_both: number;
  }
  const byParam = new Map<string, Agg>();
  let totalRaw = 0, totalPostBlock = 0, totalPostVer = 0, totalPostBoth = 0;

  for (const p of [PPV, LOCAL]) {
    if (!fs.existsSync(p)) continue;
    const { header, rows } = parseCsv(fs.readFileSync(p, 'utf8'));
    const iParam = header.indexOf('parameter_name');
    const iDoi = header.indexOf('paper_doi');
    if (iParam < 0) continue;
    for (const r of rows) {
      const name = (r[iParam] || '').trim();
      if (!name) continue;
      const doi = iDoi >= 0 ? (r[iDoi] || '').trim() : '';
      const verifiedPaper = verifiedByDoi.get(doi) === true;
      const blocked = isBlocklisted(name, block);
      totalRaw++;
      if (!blocked) totalPostBlock++;
      if (verifiedPaper) totalPostVer++;
      if (!blocked && verifiedPaper) totalPostBoth++;
      const a = byParam.get(name) ?? { param: name, raw: 0, after_blocklist: 0, after_verified: 0, after_both: 0 };
      a.raw++;
      if (!blocked) a.after_blocklist++;
      if (verifiedPaper) a.after_verified++;
      if (!blocked && verifiedPaper) a.after_both++;
      byParam.set(name, a);
    }
  }

  // Rank parameters by how many rows are dropped by each filter
  const aggs = [...byParam.values()];
  const topBlocked = aggs
    .filter(a => a.raw > 0 && a.after_blocklist === 0)
    .sort((a, b) => b.raw - a.raw)
    .slice(0, 25);
  const topVerified = aggs
    .filter(a => a.raw > 0 && a.after_verified < a.raw)
    .map(a => ({ ...a, verified_ratio: a.after_verified / a.raw }))
    .sort((a, b) => a.verified_ratio - b.verified_ratio)
    .slice(0, 25);

  const summary = {
    schema_version: '0.1.0',
    blocklist_path: path.relative(ROOT, BLOCKLIST),
    blocklist_size: block.size,
    total_rows_raw: totalRaw,
    total_rows_post_blocklist: totalPostBlock,
    total_rows_post_verified_mes: totalPostVer,
    total_rows_post_both: totalPostBoth,
    blocklist_drop_rate: Number((1 - totalPostBlock / Math.max(1, totalRaw)).toFixed(4)),
    verified_drop_rate: Number((1 - totalPostVer / Math.max(1, totalRaw)).toFixed(4)),
    combined_retention_rate: Number((totalPostBoth / Math.max(1, totalRaw)).toFixed(4)),
    top_blocked_params: topBlocked.map(a => ({
      parameter: a.param,
      raw_rows: a.raw,
    })),
    top_low_verified_ratio_params: topVerified.map(a => ({
      parameter: a.param,
      raw_rows: a.raw,
      verified_rows: a.after_verified,
      verified_ratio: Number(a.verified_ratio.toFixed(3)),
    })),
  };

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(summary, null, 2) + '\n');

  console.log('Ontology gate audit:');
  console.log(`  blocklist size:               ${summary.blocklist_size}`);
  console.log(`  total rows (raw):             ${totalRaw}`);
  console.log(`  after blocklist only:         ${totalPostBlock}  (${(100 * totalPostBlock / totalRaw).toFixed(1)}%)`);
  console.log(`  after verified_mes only:      ${totalPostVer}  (${(100 * totalPostVer / totalRaw).toFixed(1)}%)`);
  console.log(`  after BOTH (final Tier A):    ${totalPostBoth}  (${(100 * totalPostBoth / totalRaw).toFixed(1)}%)`);
  console.log(`  wrote  → ${OUT}`);
  console.log();
  console.log('Top suppressed-by-blocklist parameters:');
  for (const r of topBlocked.slice(0, 10)) {
    console.log(`  ${r.raw.toString().padStart(6)}  ${r.param}`);
  }
}

if (require.main === module) main();
