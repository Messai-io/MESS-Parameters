#!/usr/bin/env tsx
/**
 * Compute a proxy reproducibility score for every paper that lacks a
 * genuine reproducibility_score. Emits data/paper-quality-scores.csv
 * with (doi, score, components_json) where score is in [0, 1].
 *
 * Rationale: the 26-criterion rubric is only populated on ~280 papers,
 * making weighted Pearson effectively uniform for the other 13,000+.
 * This proxy uses five low-effort signals from existing metadata to
 * assign every paper a coarse quality weight, bringing the weight
 * signal coverage from ~10 % to ~80 %.
 *
 * Inputs (all local):
 *   data/paper-metadata.csv                 local catalogue
 *   data/paper-materials-prod.csv           prod overlay (when present)
 *
 * Scoring (each criterion 0..1, averaged):
 *   C1 parameter_completeness        from paper-metadata (or prod.parameterCompleteness)
 *   C2 verified_mes                  t → 1, f → 0
 *   C3 has_abstract                  t → 1, f → 0
 *   C4 citation_strength             log10(1+cites)/4 capped at 1
 *   C5 year_recency                  2000→0, 2020+→1, linearly
 *
 * Output range: [0, 1]. Defaults to 0.5 when all five inputs are
 * missing (neutral — matches the prior null-reproducibility behavior).
 */
import * as fs from 'fs';
import * as path from 'path';

const ROOT = path.resolve(__dirname, '..');
const PM_PATH = path.join(ROOT, 'data', 'paper-metadata.csv');
const PROD_PATH = path.join(ROOT, 'data', 'paper-materials-prod.csv');
const OUT_PATH = path.join(ROOT, 'data', 'paper-quality-scores.csv');

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

function toRecord(header: string[], row: string[]): Record<string, string> {
  const rec: Record<string, string> = {};
  for (let i = 0; i < header.length; i++) rec[header[i]] = row[i] ?? '';
  return rec;
}

function numOrNull(s: string | undefined): number | null {
  if (s == null || s === '') return null;
  const n = Number(s);
  return Number.isFinite(n) ? n : null;
}

interface Components {
  parameter_completeness: number | null;
  verified_mes: number | null;
  has_abstract: number | null;
  citation_strength: number | null;
  year_recency: number | null;
}

function componentsFor(
  local: Record<string, string>,
  prod: Record<string, string> | undefined,
  nowYear: number,
): Components {
  const pc =
    numOrNull(local.parameter_completeness) ??
    (prod ? numOrNull(prod.parameterCompleteness) : null);

  const vmFlag = (local.verified_mes ?? '').trim().toLowerCase();
  const verified = vmFlag === 't' || vmFlag === 'true' || vmFlag === '1' ? 1 : vmFlag === 'f' || vmFlag === 'false' || vmFlag === '0' ? 0 : null;

  const haFlag = (local.has_abstract ?? '').trim().toLowerCase();
  const abstract = haFlag === 't' || haFlag === 'true' || haFlag === '1' ? 1 : haFlag === 'f' || haFlag === 'false' || haFlag === '0' ? 0 : null;

  const cites = numOrNull(local.citation_count) ?? (prod ? numOrNull(prod.citationCount) : null);
  const citationStrength = cites !== null && cites >= 0 ? Math.min(1, Math.log10(1 + cites) / 4) : null;

  const year = numOrNull(local.year) ?? (prod ? numOrNull(prod.year) : null);
  const yearRecency = year !== null ? Math.min(1, Math.max(0, (year - 2000) / (nowYear - 2000))) : null;

  return {
    parameter_completeness: pc != null ? Math.min(1, Math.max(0, pc)) : null,
    verified_mes: verified,
    has_abstract: abstract,
    citation_strength: citationStrength,
    year_recency: yearRecency,
  };
}

function averageOfPresent(c: Components): { score: number; n: number } {
  const values: number[] = [];
  for (const v of Object.values(c)) if (v !== null) values.push(v);
  if (values.length === 0) return { score: 0.5, n: 0 };
  return { score: values.reduce((s, v) => s + v, 0) / values.length, n: values.length };
}

function csvEscape(s: string): string {
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

function main(): void {
  const pmParsed = parseCsv(fs.readFileSync(PM_PATH, 'utf8'));
  const prodParsed = fs.existsSync(PROD_PATH)
    ? parseCsv(fs.readFileSync(PROD_PATH, 'utf8'))
    : null;
  const prodByDoi = new Map<string, Record<string, string>>();
  if (prodParsed) {
    for (const row of prodParsed.rows) {
      const rec = toRecord(prodParsed.header, row);
      if (rec.doi) prodByDoi.set(rec.doi, rec);
    }
  }

  const nowYear = new Date().getUTCFullYear();
  const outHeader = ['doi', 'score', 'n_components', 'parameter_completeness', 'verified_mes', 'has_abstract', 'citation_strength', 'year_recency'];
  const out: string[] = [outHeader.join(',')];

  let scored = 0;
  let neutral = 0;
  const histogram = new Map<string, number>();
  for (const row of pmParsed.rows) {
    const rec = toRecord(pmParsed.header, row);
    const doi = (rec.doi ?? '').trim();
    if (!doi) continue;
    const prod = prodByDoi.get(doi);
    const c = componentsFor(rec, prod, nowYear);
    const { score, n } = averageOfPresent(c);
    if (n === 0) neutral++; else scored++;
    const bucket = (Math.floor(score * 10) / 10).toFixed(1);
    histogram.set(bucket, (histogram.get(bucket) ?? 0) + 1);
    out.push([
      doi,
      score.toFixed(4),
      String(n),
      c.parameter_completeness != null ? c.parameter_completeness.toFixed(3) : '',
      c.verified_mes != null ? String(c.verified_mes) : '',
      c.has_abstract != null ? String(c.has_abstract) : '',
      c.citation_strength != null ? c.citation_strength.toFixed(3) : '',
      c.year_recency != null ? c.year_recency.toFixed(3) : '',
    ].map((s) => csvEscape(String(s))).join(','));
  }

  fs.writeFileSync(OUT_PATH, out.join('\n') + '\n', 'utf8');
  console.log(`✓ wrote ${path.relative(ROOT, OUT_PATH)}`);
  console.log(`  scored: ${scored} · neutral (all-null → 0.5): ${neutral}`);
  console.log('  score distribution (0.1 buckets):');
  for (const k of Array.from(histogram.keys()).sort()) {
    const n = histogram.get(k)!;
    const bar = '#'.repeat(Math.min(40, Math.round(n / 100)));
    console.log(`    ${k}  ${String(n).padStart(5)}  ${bar}`);
  }
}

main();
