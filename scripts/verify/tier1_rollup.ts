#!/usr/bin/env tsx
/**
 * Aggregate the Tier 1 zero-LLM verification outputs into a single
 * headline JSON the README / consumer UI can show as a badge.
 *
 * Inputs (run these first):
 *   data/verification/snippet-grounding.json
 *   data/verification/literature-crosscheck.json
 *   data/verification/unit-audit.json
 *   data/verification/noise-floor.json
 *   data/verification/duplicate-consistency.json
 *
 * Output: data/verification/tier1-summary.json (schema pinned in
 * docs/consumer-contract.md §verification-sidecar).
 *
 * Verdict logic (per plan):
 *   Overall FAIL if any of:
 *     - grounding_rate < 0.80
 *     - literature_pass_count < 10 / 15
 *     - duplicate_agreement < 0.85
 *   Overall PASS if every sub-verdict is PASS.
 *   Otherwise FLAG.
 */

import * as fs from 'fs';
import * as path from 'path';

const ROOT = path.resolve(__dirname, '..', '..');
const V_DIR = path.join(ROOT, 'data', 'verification');
const OUT = path.join(V_DIR, 'tier1-summary.json');

function readJson(p: string): any | null {
  if (!fs.existsSync(p)) return null;
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function main() {
  const grounding = readJson(path.join(V_DIR, 'snippet-grounding.json'));
  const lit = readJson(path.join(V_DIR, 'literature-crosscheck.json'));
  const unit = readJson(path.join(V_DIR, 'unit-audit.json'));
  const noise = readJson(path.join(V_DIR, 'noise-floor.json'));
  const dups = readJson(path.join(V_DIR, 'duplicate-consistency.json'));
  const gate = readJson(path.join(V_DIR, 'ontology-gate.json'));

  const missing: string[] = [];
  if (!grounding) missing.push('snippet-grounding.json');
  if (!lit) missing.push('literature-crosscheck.json');
  if (!unit) missing.push('unit-audit.json');
  if (!noise) missing.push('noise-floor.json');
  if (!dups) missing.push('duplicate-consistency.json');
  if (missing.length > 0) {
    console.error(`[error] missing inputs: ${missing.join(', ')}`);
    console.error('  run each of scripts/verify/*.{py,ts} first');
    process.exit(1);
  }

  const groundingRate = grounding.grounding_rate as number;
  const litPass = lit.benchmarks_in_envelope as number;
  const litTotal = lit.total_benchmarks as number;
  const unitCoverage = 1 - (unit.unknown_rate as number);
  const dupAgreement = dups.agreement_rate as number;
  const medianShift = noise.median_shift_max as number;
  const noisyPapers = noise.noisy_papers as number;

  const hardFail =
    groundingRate < 0.80 ||
    litPass < 10 ||
    dupAgreement < 0.85;

  const allPass =
    grounding.verdict === 'PASS' &&
    lit.verdict === 'PASS' &&
    unit.verdict === 'PASS' &&
    noise.verdict === 'PASS' &&
    dups.verdict === 'PASS';

  const overall: 'PASS' | 'FLAG' | 'FAIL' = hardFail ? 'FAIL' : allPass ? 'PASS' : 'FLAG';

  // Corpus source count: prefer grounding's total_sources, fall back to unit rows.
  const sourceCount = grounding.total_sources ?? unit.total_rows ?? null;
  const today = new Date().toISOString().slice(0, 10);

  const summary = {
    schema_version: '0.1.0',
    corpus_snapshot_date: today,
    corpus_source_count: sourceCount,
    grounding_rate: Number(groundingRate.toFixed(4)),
    literature_pass_count: `${litPass}/${litTotal}`,
    unit_coverage: Number(unitCoverage.toFixed(4)),
    duplicate_agreement: Number(dupAgreement.toFixed(4)),
    noisy_paper_count: noisyPapers,
    median_shift_after_quarantine: Number(medianShift.toFixed(4)),
    overall_verdict: overall,
    sub_verdicts: {
      snippet_grounding: grounding.verdict,
      literature_crosscheck: lit.verdict,
      unit_audit: unit.verdict,
      noise_floor: noise.verdict,
      duplicate_consistency: dups.verdict,
    },
    ontology_gate: gate ? {
      blocklist_size: gate.blocklist_size,
      rows_dropped: gate.total_rows_raw - gate.total_rows_post_blocklist,
      drop_rate: gate.blocklist_drop_rate,
    } : null,
  };

  fs.writeFileSync(OUT, JSON.stringify(summary, null, 2) + '\n');

  console.log('Tier 1 rollup:');
  console.log(`  corpus_snapshot_date:        ${summary.corpus_snapshot_date}`);
  console.log(`  corpus_source_count:         ${summary.corpus_source_count}`);
  console.log(`  grounding_rate:              ${summary.grounding_rate}  [${grounding.verdict}]`);
  console.log(`  literature_pass_count:       ${summary.literature_pass_count}  [${lit.verdict}]`);
  console.log(`  unit_coverage:               ${summary.unit_coverage}  [${unit.verdict}]`);
  console.log(`  duplicate_agreement:         ${summary.duplicate_agreement}  [${dups.verdict}]`);
  console.log(`  median_shift_after_quarantine: ${summary.median_shift_after_quarantine}  [${noise.verdict}]`);
  console.log(`  overall_verdict:             ${summary.overall_verdict}`);
  console.log(`  wrote  → ${OUT}`);
}

main();
