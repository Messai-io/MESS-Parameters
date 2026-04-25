#!/usr/bin/env tsx
/**
 * Join the 687-parameter ontology to its 18K+ paper-parameter observations.
 *
 * Reads:
 *   data/parameter-definitions-full.csv  (687 ontology entries)
 *   data/paper-parameter-values.csv      (18,113 observations)
 *
 * Writes:
 *   data/parameter-observations.json     (687 entries, each with stats + citations)
 *
 * Run: npx tsx scripts/generate-parameter-observations.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import { computeStats, modeMap, round } from './stats_utils';

const ROOT = path.resolve(__dirname, '..');
const DEFS_PATH  = path.join(ROOT, 'data', 'parameter-definitions-full.csv');
const VALS_PATH  = path.join(ROOT, 'data', 'paper-parameter-values.csv');
const OUT_PATH   = path.join(ROOT, 'data', 'parameter-observations.json');

// ---------------------------------------------------------------------------
// CSV parser (matches pattern used elsewhere in scripts/)
// ---------------------------------------------------------------------------

function parseCsv(text: string): { header: string[]; rows: Record<string, string>[] } {
  const lines: string[][] = [];
  let field = ''; let row: string[] = []; let inQ = false; let i = 0;
  while (i < text.length) {
    const ch = text[i];
    if (inQ) {
      if (ch === '"') {
        if (text[i + 1] === '"') { field += '"'; i += 2; continue; }
        inQ = false; i++; continue;
      }
      field += ch; i++; continue;
    }
    if (ch === '"') { inQ = true; i++; continue; }
    if (ch === ',') { row.push(field); field = ''; i++; continue; }
    if (ch === '\n') { row.push(field); lines.push(row); row = []; field = ''; i++; continue; }
    if (ch === '\r') { i++; continue; }
    field += ch; i++;
  }
  if (field || row.length) { row.push(field); lines.push(row); }
  const header = lines.shift() ?? [];
  return {
    header,
    rows: lines
      .filter(r => r.length > 1 || r[0])
      .map(r => Object.fromEntries(header.map((h, j) => [h, r[j] ?? '']))),
  };
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface Definition {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  unit: string;
  data_type: string;
  description: string;
  min_value: string;
  max_value: string;
  usage_count: string;
}

interface Observation {
  paper_doi: string;
  paper_title: string;
  paper_year: string;
  system_type: string;
  parameter_name: string;
  extracted_value: string;
  numeric_value: string;
  parameter_unit: string;
  has_numeric_value: string;
  confidence: string;
  extraction_method: string;
  source_section: string;
  verified_mes_paper: string;
}

interface Citation {
  doi: string | null;
  title: string;
  year: number | null;
  value: number | null;
  extracted_value: string;
  unit: string;
  confidence: number;
}

interface ParameterObservations {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  canonical_unit: string;
  data_type: string;
  description: string;
  ontology_min: number | null;
  ontology_max: number | null;
  n_observations: number;
  n_papers: number;
  n_verified_mes: number;
  n_numeric: number;
  numeric_stats: ReturnType<typeof computeStats>;
  confidence_weighted_mean: number | null;
  units: Record<string, number>;
  system_type_breakdown: Record<string, number>;
  top_citations: Citation[];
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function paperKey(obs: Observation): string {
  return obs.paper_doi.trim() || obs.paper_title.trim();
}

function confidenceWeightedMean(pairs: Array<{ value: number; confidence: number }>): number | null {
  if (pairs.length === 0) return null;
  const sumW = pairs.reduce((s, p) => s + p.confidence, 0);
  if (sumW === 0) return null;
  return round(pairs.reduce((s, p) => s + p.value * p.confidence, 0) / sumW, 4);
}

function topCitations(obs: Observation[], limit = 5): Citation[] {
  const sorted = [...obs]
    .filter(o => o.paper_doi.trim() || o.paper_title.trim())
    .sort((a, b) => parseFloat(b.confidence || '0') - parseFloat(a.confidence || '0'));

  const seen = new Set<string>();
  const out: Citation[] = [];
  for (const o of sorted) {
    const key = paperKey(o);
    if (seen.has(key)) continue;
    seen.add(key);
    const numV = o.has_numeric_value === 't' ? parseFloat(o.numeric_value) : null;
    out.push({
      doi:   o.paper_doi.trim() || null,
      title: o.paper_title.trim(),
      year:  o.paper_year ? parseInt(o.paper_year, 10) || null : null,
      value: numV != null && isFinite(numV) ? round(numV, 4) : null,
      extracted_value: o.extracted_value.trim(),
      unit:  o.parameter_unit.trim(),
      confidence: round(parseFloat(o.confidence || '0'), 3),
    });
    if (out.length >= limit) break;
  }
  return out;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  console.log('Reading definitions…');
  const defs = parseCsv(fs.readFileSync(DEFS_PATH, 'utf8')).rows as unknown as Definition[];
  console.log(`  ${defs.length} parameter definitions`);

  console.log('Reading observations…');
  const obsRows = parseCsv(fs.readFileSync(VALS_PATH, 'utf8')).rows as unknown as Observation[];
  console.log(`  ${obsRows.length} observation rows`);

  // Group observations by parameter_name
  const byParam = new Map<string, Observation[]>();
  for (const obs of obsRows) {
    const name = obs.parameter_name.trim();
    if (!byParam.has(name)) byParam.set(name, []);
    byParam.get(name)!.push(obs);
  }

  console.log(`  ${byParam.size} distinct parameter names in observations`);

  // Build output
  const output: ParameterObservations[] = [];

  for (const def of defs) {
    const obs = byParam.get(def.name) ?? [];
    const numericObs = obs.filter(o => o.has_numeric_value === 't');
    const verifiedObs = obs.filter(o => o.verified_mes_paper === 't');

    // Unique paper count
    const uniquePapers = new Set(obs.map(paperKey).filter(Boolean));

    // Numeric values for stats
    const numericValues = numericObs
      .map(o => parseFloat(o.numeric_value))
      .filter(v => isFinite(v));

    // Confidence-weighted mean
    const cwPairs = numericObs
      .map(o => ({ value: parseFloat(o.numeric_value), confidence: parseFloat(o.confidence || '0') }))
      .filter(p => isFinite(p.value) && isFinite(p.confidence));

    // System type breakdown
    const sysMap = modeMap(obs.map(o => o.system_type));
    const system_type_breakdown = Object.fromEntries(
      [...sysMap.entries()].sort((a, b) => b[1] - a[1])
    );

    // Units frequency
    const unitMap = modeMap(numericObs.map(o => o.parameter_unit));
    const units = Object.fromEntries(
      [...unitMap.entries()].sort((a, b) => b[1] - a[1]).slice(0, 10)
    );

    output.push({
      id: def.id,
      name: def.name,
      category: def.category,
      subcategory: def.subcategory,
      canonical_unit: def.unit,
      data_type: def.data_type,
      description: def.description,
      ontology_min: def.min_value ? parseFloat(def.min_value) || null : null,
      ontology_max: def.max_value ? parseFloat(def.max_value) || null : null,
      n_observations: obs.length,
      n_papers: uniquePapers.size,
      n_verified_mes: verifiedObs.length,
      n_numeric: numericObs.length,
      numeric_stats: computeStats(numericValues),
      confidence_weighted_mean: confidenceWeightedMean(cwPairs),
      units,
      system_type_breakdown,
      top_citations: topCitations(obs),
    });
  }

  fs.writeFileSync(OUT_PATH, JSON.stringify(output, null, 2));

  // Print summary
  const withObs = output.filter(p => p.n_observations > 0);
  const withNumeric = output.filter(p => p.n_numeric > 0);
  const totalObs = output.reduce((s, p) => s + p.n_observations, 0);
  const totalPapers = output.reduce((s, p) => s + p.n_papers, 0);

  console.log('\n--- Summary ---');
  console.log(`Parameters with observations: ${withObs.length}/${output.length}`);
  console.log(`Parameters with numeric data: ${withNumeric.length}/${output.length}`);
  console.log(`Total observations linked:    ${totalObs}`);
  console.log(`Total paper-parameter links:  ${totalPapers}`);
  console.log(`Output: ${OUT_PATH}`);
  console.log(`Output size: ${(fs.statSync(OUT_PATH).size / 1024).toFixed(0)} KB`);
}

main();
