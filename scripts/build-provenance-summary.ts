#!/usr/bin/env node
/**
 * Builds data/provenance-summary.json — a small rollup the site dashboard
 * uses to surface DOI coverage and Tier-1 verification status without
 * loading the full 6.9MB parameter-provenance.json at runtime.
 *
 * Inputs:  data/parameter-provenance.json, data/verification/tier1-summary.json
 * Output:  data/provenance-summary.json
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const ROOT = resolve(__dirname, '..');
const provPath = resolve(ROOT, 'data/parameter-provenance.json');
const tier1Path = resolve(ROOT, 'data/verification/tier1-summary.json');
const outPath = resolve(ROOT, 'data/provenance-summary.json');

interface Source { doi?: string | null; verified_mes?: boolean }
interface ProvenanceParameter { sources?: Source[] }
interface Provenance {
  metadata?: { counts?: { parameters_with_provenance?: number } };
  parameters?: ProvenanceParameter[];
}
interface Tier1 {
  corpus_snapshot_date?: string;
  overall_verdict?: string;
  grounding_rate?: number;
  literature_pass_count?: string;
  unit_coverage?: number;
  duplicate_agreement?: number;
  sub_verdicts?: Record<string, string>;
}

const prov: Provenance = JSON.parse(readFileSync(provPath, 'utf-8'));
const tier1: Tier1 = JSON.parse(readFileSync(tier1Path, 'utf-8'));

let total = 0;
let withDoi = 0;
let verified = 0;
for (const p of prov.parameters ?? []) {
  for (const s of p.sources ?? []) {
    total += 1;
    if (s.doi && typeof s.doi === 'string' && s.doi.trim().length > 0) withDoi += 1;
    if (s.verified_mes === true) verified += 1;
  }
}

const subVerdicts = tier1.sub_verdicts ?? {};
const passCount = Object.values(subVerdicts).filter((v) => v === 'PASS').length;
const totalChecks = Object.keys(subVerdicts).length;

const summary = {
  generated_at: new Date().toISOString(),
  corpus_snapshot_date: tier1.corpus_snapshot_date,
  sources: {
    total,
    with_doi: withDoi,
    doi_coverage_pct: total ? +((100 * withDoi) / total).toFixed(1) : 0,
    verified_mes: verified,
    verified_mes_pct: total ? +((100 * verified) / total).toFixed(1) : 0,
  },
  parameters_with_provenance:
    prov.metadata?.counts?.parameters_with_provenance ?? (prov.parameters?.length ?? 0),
  tier1: {
    overall_verdict: tier1.overall_verdict,
    grounding_rate: tier1.grounding_rate,
    literature_pass_count: tier1.literature_pass_count,
    unit_coverage: tier1.unit_coverage,
    duplicate_agreement: tier1.duplicate_agreement,
    sub_verdicts: subVerdicts,
    pass_count: passCount,
    total_checks: totalChecks,
  },
};

writeFileSync(outPath, JSON.stringify(summary, null, 2) + '\n');
console.log(`wrote ${outPath}`);
console.log(`  DOI coverage: ${summary.sources.doi_coverage_pct}% (${withDoi}/${total})`);
console.log(`  Verified MES: ${summary.sources.verified_mes_pct}% (${verified}/${total})`);
console.log(`  Tier-1: ${summary.tier1.overall_verdict} (${passCount}/${totalChecks} PASS)`);
