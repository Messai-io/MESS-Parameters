#!/usr/bin/env tsx
/**
 * Within-paper correlations from extracted tables.
 *
 * Cross-paper correlations (in parameter-provenance.json) collapse every
 * paper to a single (param, mean_value) point. That kills signal when
 * the interesting physics lives inside one experiment — e.g. a
 * polarization curve in Table 3 reports Current Density paired with
 * Power Density across 15 rows of varying load resistance.
 *
 * This script reads data/paper-table-values.csv, groups rows by
 * (paper_doi, table_id), computes Pearson r for every parameter pair
 * that co-occurs in a single table's rows, then aggregates across
 * tables into a per-pair distribution summary.
 *
 * Output: data/within-paper-correlations.json
 *   {
 *     metadata: { generated_at, total_tables, pairs_computed },
 *     pairs: [
 *       {
 *         a_id, b_id, a_name, b_name, a_category, b_category,
 *         n_tables, total_n_rows,
 *         r_median, r_p25, r_p75, r_p10, r_p90,
 *         positive_fraction,    // share of tables with r > 0
 *         per_table: [{ paper_doi, table_id, n_rows, r }]
 *       }
 *     ]
 *   }
 */
import * as fs from 'fs';
import * as path from 'path';

const ROOT = path.resolve(__dirname, '..');
const IN_PATH = path.join(ROOT, 'data', 'paper-table-values.csv');
const RICH_PATH = path.join(ROOT, 'data', 'parameter-definitions-rich.json');
const OUT_PATH = path.join(ROOT, 'data', 'within-paper-correlations.json');

const MIN_ROWS_PER_TABLE_PAIR = 3;   // need at least 3 shared rows for Pearson
const MIN_TABLES_PER_PAIR = 2;        // pair must appear in ≥2 tables to be interesting

interface RichEntry {
  id: string;
  name: string;
  category: string;
}

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
    if (ch === '\n' || ch === '\r') {
      if (ch === '\r' && text[i + 1] === '\n') i++;
      row.push(field); field = '';
      if (row.length > 1 || row[0] !== '') rows.push(row);
      row = []; i++; continue;
    }
    field += ch; i++;
  }
  if (field !== '' || row.length > 0) { row.push(field); rows.push(row); }
  const header = rows.shift() ?? [];
  return { header, rows };
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

function quantile(sorted: number[], q: number): number {
  if (sorted.length === 0) return 0;
  if (sorted.length === 1) return sorted[0];
  const pos = (sorted.length - 1) * q;
  const lo = Math.floor(pos);
  const frac = pos - lo;
  return sorted[lo] + frac * ((sorted[lo + 1] ?? sorted[lo]) - sorted[lo]);
}

function round(x: number, d: number): number {
  const f = 10 ** d;
  return Math.round(x * f) / f;
}

function main(): void {
  if (!fs.existsSync(IN_PATH)) {
    console.error(`missing input ${path.relative(ROOT, IN_PATH)} — run scripts/rollup-tables.ts first`);
    process.exit(1);
  }

  const rich = JSON.parse(fs.readFileSync(RICH_PATH, 'utf8')) as RichEntry[];
  const idToEntry = new Map(rich.map((r) => [r.id, r]));

  const parsed = parseCsv(fs.readFileSync(IN_PATH, 'utf8'));
  const idx = Object.fromEntries(parsed.header.map((h, i) => [h, i]));

  // Group by (paper_doi_or_key, table_id) → rows. Each row: { row_idx, param_id → value }.
  interface TableRow {
    rowIdx: number;
    values: Map<string, number>;
  }
  const tables = new Map<string, { paperDoi: string; paperKey: string; rows: Map<number, TableRow> }>();

  for (const r of parsed.rows) {
    const paperDoi = r[idx['paper_doi']] ?? '';
    const paperKey = r[idx['paper_key']] ?? '';
    const tableId = r[idx['table_id']] ?? '';
    const rowIdxStr = r[idx['row_idx']] ?? '';
    const paramId = r[idx['parameter_id']] ?? '';
    const valueStr = r[idx['value']] ?? '';
    if (!tableId || !paramId || !rowIdxStr || !valueStr) continue;
    const value = Number(valueStr);
    if (!Number.isFinite(value)) continue;
    const rowIdx = Number(rowIdxStr);
    if (!Number.isFinite(rowIdx)) continue;

    const tableKey = `${paperKey}|${tableId}`;
    let entry = tables.get(tableKey);
    if (!entry) {
      entry = { paperDoi, paperKey, rows: new Map() };
      tables.set(tableKey, entry);
    }
    let rowEntry = entry.rows.get(rowIdx);
    if (!rowEntry) {
      rowEntry = { rowIdx, values: new Map() };
      entry.rows.set(rowIdx, rowEntry);
    }
    // When the same (table, row, param) appears multiple times (duplicate
    // column mappings in one table), keep the last value — pdfplumber
    // sometimes returns the same column twice for wide tables.
    rowEntry.values.set(paramId, value);
  }

  // For each table, enumerate every unordered param pair that has ≥ MIN shared rows.
  interface PerTableResult {
    paperDoi: string;
    paperKey: string;
    tableId: string;
    n_rows: number;
    r: number;
  }
  const perPair = new Map<string, PerTableResult[]>();
  let totalPairsComputed = 0;

  for (const [tableKey, entry] of tables) {
    const tableId = tableKey.split('|')[1];
    const allRows = Array.from(entry.rows.values());
    // Collect unique params in this table
    const paramsSeen = new Set<string>();
    for (const row of allRows) for (const p of row.values.keys()) paramsSeen.add(p);
    const paramList = Array.from(paramsSeen);
    for (let i = 0; i < paramList.length; i++) {
      for (let j = i + 1; j < paramList.length; j++) {
        const a = paramList[i];
        const b = paramList[j];
        const xs: number[] = [];
        const ys: number[] = [];
        for (const row of allRows) {
          const va = row.values.get(a);
          const vb = row.values.get(b);
          if (va !== undefined && vb !== undefined) {
            xs.push(va);
            ys.push(vb);
          }
        }
        if (xs.length < MIN_ROWS_PER_TABLE_PAIR) continue;
        const r = pearson(xs, ys);
        if (r === null) continue;
        totalPairsComputed++;
        const pairKey = a < b ? `${a}|${b}` : `${b}|${a}`;
        const orderedA = a < b ? a : b;
        const orderedB = a < b ? b : a;
        // Respect ordering: when we swap, also swap xs/ys so r sign stays correct
        const signedR = a === orderedA ? r : r; // Pearson is symmetric, so no flip needed
        void orderedA; void orderedB;
        const arr = perPair.get(pairKey) ?? [];
        arr.push({
          paperDoi: entry.paperDoi,
          paperKey: entry.paperKey,
          tableId,
          n_rows: xs.length,
          r: round(signedR, 4),
        });
        perPair.set(pairKey, arr);
      }
    }
  }

  // Aggregate per-pair distribution
  interface PairOut {
    a_id: string;
    b_id: string;
    a_name: string;
    b_name: string;
    a_category: string;
    b_category: string;
    n_tables: number;
    total_n_rows: number;
    r_median: number;
    r_p25: number;
    r_p75: number;
    r_p10: number;
    r_p90: number;
    r_abs_median: number;
    positive_fraction: number;
    per_table: PerTableResult[];
  }
  const pairs: PairOut[] = [];
  for (const [key, results] of perPair) {
    if (results.length < MIN_TABLES_PER_PAIR) continue;
    const [aId, bId] = key.split('|');
    const aEntry = idToEntry.get(aId);
    const bEntry = idToEntry.get(bId);
    if (!aEntry || !bEntry) continue;
    const rs = results.map((r) => r.r).sort((x, y) => x - y);
    const totalN = results.reduce((s, x) => s + x.n_rows, 0);
    const posFrac = results.filter((r) => r.r > 0).length / results.length;
    pairs.push({
      a_id: aId,
      b_id: bId,
      a_name: aEntry.name,
      b_name: bEntry.name,
      a_category: aEntry.category,
      b_category: bEntry.category,
      n_tables: results.length,
      total_n_rows: totalN,
      r_median: round(quantile(rs, 0.5), 4),
      r_p25: round(quantile(rs, 0.25), 4),
      r_p75: round(quantile(rs, 0.75), 4),
      r_p10: round(quantile(rs, 0.1), 4),
      r_p90: round(quantile(rs, 0.9), 4),
      r_abs_median: round(quantile(rs.map((r) => Math.abs(r)).sort((x, y) => x - y), 0.5), 4),
      positive_fraction: round(posFrac, 3),
      per_table: results.sort((a, b) => Math.abs(b.r) - Math.abs(a.r)),
    });
  }

  // Sort by |median r| × log(n_tables) so strong + reproducible pairs float up
  pairs.sort((a, b) => {
    const sa = Math.abs(a.r_median) * Math.log(1 + a.n_tables);
    const sb = Math.abs(b.r_median) * Math.log(1 + b.n_tables);
    return sb - sa;
  });

  const out = {
    schema_version: '0.1.0',
    generated_at: new Date().toISOString(),
    metadata: {
      total_tables: tables.size,
      total_pairs_computed: totalPairsComputed,
      pairs_emitted: pairs.length,
      min_rows_per_table_pair: MIN_ROWS_PER_TABLE_PAIR,
      min_tables_per_pair: MIN_TABLES_PER_PAIR,
    },
    pairs,
  };

  fs.writeFileSync(OUT_PATH, JSON.stringify(out, null, 2) + '\n', 'utf8');
  console.log(`✓ wrote ${path.relative(ROOT, OUT_PATH)}`);
  console.log(`  tables ingested:       ${tables.size}`);
  console.log(`  pairs computed:        ${totalPairsComputed}`);
  console.log(`  pairs emitted (≥${MIN_TABLES_PER_PAIR} tables): ${pairs.length}`);
  console.log('\n  top 10 by |r_median| × log(n_tables):');
  for (const p of pairs.slice(0, 10)) {
    console.log(`    ${p.a_name.padEnd(28)} × ${p.b_name.padEnd(28)} n=${String(p.n_tables).padStart(3)}  median r=${p.r_median.toFixed(3).padStart(7)}  IQR=[${p.r_p25.toFixed(2)},${p.r_p75.toFixed(2)}]  pos=${(p.positive_fraction * 100).toFixed(0)}%`);
  }
}

main();
