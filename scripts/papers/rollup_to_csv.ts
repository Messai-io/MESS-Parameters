#!/usr/bin/env tsx
/**
 * Roll up per-paper artifacts under papers/by-doi/ into the canonical CSVs
 * that the explorer site reads:
 *
 *   data/paper-metadata.csv
 *   data/paper-parameter-values.csv
 *
 * This regenerates the CSVs in place. The column schema matches the existing
 * files so the site, the existing analysis scripts, and any downstream tools
 * keep working without changes. CSVs become a derived view of `papers/`.
 *
 * Usage:
 *   npx tsx scripts/papers/rollup_to_csv.ts
 */

import * as fs from 'fs';
import * as path from 'path';

const ROOT = path.resolve(__dirname, '..', '..');
const PAPERS = process.env.PAPERS_ROOT
  ? path.resolve(process.env.PAPERS_ROOT)
  : path.join(ROOT, 'papers');
const DATA = path.join(ROOT, 'data');
const BOM = '\uFEFF';

function escapeCsvField(value: unknown): string {
  if (value === null || value === undefined) return '';
  const s = String(value);
  if (s.includes(',') || s.includes('"') || s.includes('\n') || s.includes('\r')) {
    return '"' + s.replace(/"/g, '""') + '"';
  }
  return s;
}

function writeCsv(filepath: string, headers: string[], rows: string[][]): void {
  const lines = [
    headers.map(escapeCsvField).join(','),
    ...rows.map(r => r.map(escapeCsvField).join(',')),
  ];
  fs.writeFileSync(filepath, BOM + lines.join('\n') + '\n', { encoding: 'utf-8' });
}

interface SourceMeta {
  doi: string;
  canonical_sha256: string;
  origins: { src_repo: string; src_path: string }[];
}
interface Metadata {
  title?: string;
  year?: number;
  journal?: string;
  abstract?: string;
}
interface Observation {
  parameterId: string;
  value: number;
  unit: string;
  page?: number | null;
  snippet?: string;
  section?: string;
  confidence: number;
  method: string;
}

function listPaperDirs(byDoi: string): string[] {
  // Walk by-doi recursively, find dirs containing source.json
  const out: string[] = [];
  function recur(dir: string): void {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (fs.existsSync(path.join(p, 'source.json'))) {
          out.push(p);
        } else {
          recur(p);
        }
      }
    }
  }
  recur(byDoi);
  return out;
}

function readJSON<T>(p: string): T | null {
  try {
    return JSON.parse(fs.readFileSync(p, 'utf-8')) as T;
  } catch {
    return null;
  }
}

function inferSystemType(text: string | undefined): string {
  if (!text) return '';
  const m = text.match(/\b(MFC|MEC|MDC|MES|BES)\b/);
  return m ? m[1] : '';
}

function main(): void {
  const byDoi = path.join(PAPERS, 'by-doi');
  if (!fs.existsSync(byDoi)) {
    console.error(`No corpus at ${byDoi}. Run \`npm run papers:all\` first.`);
    process.exit(1);
  }

  const dirs = listPaperDirs(byDoi);
  console.log(`Rolling up ${dirs.length} papers from ${byDoi}`);

  const metaRows: string[][] = [];
  const valueRows: string[][] = [];

  for (const dir of dirs) {
    const src = readJSON<SourceMeta>(path.join(dir, 'source.json'));
    const md = readJSON<Metadata>(path.join(dir, 'metadata.json')) || {};
    const obs = readJSON<Observation[]>(path.join(dir, 'parameters', 'observations.json')) || [];
    if (!src) continue;

    const sysType = inferSystemType(md.abstract || md.title);

    metaRows.push([
      src.canonical_sha256,
      src.doi,
      md.title ?? '',
      String(md.year ?? ''),
      md.journal ?? '',
      sysType,
      '', // power_output (post-aggregation step could fill)
      '', // efficiency
      '', '', // anode_materials, cathode_materials
      '', // reproducibility_score
      '', // parameter_completeness
      '', // ai_confidence
      md.abstract ? 't' : 'f',
      'f', // has_economic_data
      '', // citation_count
      String(obs.length),
      't', // verified_mes — by definition, in the corpus
    ]);

    for (const o of obs) {
      valueRows.push([
        `${src.canonical_sha256}-${o.parameterId}`,
        src.doi ?? '',
        md.title ?? '',
        String(md.year ?? ''),
        sysType,
        o.parameterId,
        '', // parameter_category
        '', // parameter_subcategory
        String(o.value),
        String(o.value),
        o.unit ?? '',
        't', // has_numeric_value
        String(o.confidence),
        o.method,
        o.section ?? '',
        'f', // is_verified
        't', // verified_mes_paper
      ]);
    }
  }

  const metaHeaders = [
    'id', 'doi', 'title', 'year', 'journal', 'system_type',
    'power_output', 'efficiency', 'anode_materials', 'cathode_materials',
    'reproducibility_score', 'parameter_completeness', 'ai_confidence',
    'has_abstract', 'has_economic_data', 'citation_count',
    'parameter_count', 'verified_mes',
  ];
  const valueHeaders = [
    'id', 'paper_doi', 'paper_title', 'paper_year', 'system_type',
    'parameter_name', 'parameter_category', 'parameter_subcategory',
    'extracted_value', 'numeric_value', 'parameter_unit',
    'has_numeric_value', 'confidence', 'extraction_method',
    'source_section', 'is_verified', 'verified_mes_paper',
  ];

  writeCsv(path.join(DATA, 'paper-metadata.csv'), metaHeaders, metaRows);
  writeCsv(path.join(DATA, 'paper-parameter-values.csv'), valueHeaders, valueRows);

  console.log(`Wrote data/paper-metadata.csv         ${metaRows.length} rows`);
  console.log(`Wrote data/paper-parameter-values.csv ${valueRows.length} rows`);
}

main();
