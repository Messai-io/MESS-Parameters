#!/usr/bin/env tsx
/**
 * Compare corpus medians to curated literature p10/p90 envelopes for 15
 * headline MES parameters. A corpus median falling inside [p10, p90] is
 * a pass; outside [p5, p95] is a hard fail.
 *
 * Reads:
 *   data/parameter-provenance.json         per-parameter stats_global
 *   data/verification/literature-benchmarks.json   curated envelopes
 *
 * Writes:
 *   data/verification/literature-crosscheck.json   per-param results
 *
 * Pass threshold:
 *   >=12/15 within [p10, p90]      -> PASS
 *   >=10/15 within [p10, p90]      -> FLAG
 *   else                           -> FAIL
 *
 * Invoke: npx tsx scripts/verify/literature_crosscheck.ts
 */

import * as fs from 'fs';
import * as path from 'path';

const ROOT = path.resolve(__dirname, '..', '..');
const PROV = path.join(ROOT, 'data', 'parameter-provenance.json');
const BENCH = path.join(ROOT, 'data', 'verification', 'literature-benchmarks.json');
const OUT = path.join(ROOT, 'data', 'verification', 'literature-crosscheck.json');

interface Benchmark {
  parameter_name: string;
  canonical_unit: string;
  p10: number;
  p90: number;
  p5: number;
  p95: number;
  source: string;
}

interface Stats {
  n: number;
  mean: number;
  median: number;
  p25: number | null;
  p75: number | null;
  min: number;
  max: number;
  std: number;
}

interface Entry {
  id: string;
  name: string;
  stats_global: Stats | null;
  sources?: { value: number; unit: string }[];
}

function main() {
  const prov = JSON.parse(fs.readFileSync(PROV, 'utf8'));
  const bench = JSON.parse(fs.readFileSync(BENCH, 'utf8')) as {
    benchmarks: Benchmark[];
  };

  // Name-keyed index. `parameter_name` in benchmarks is lowercase.
  const byName = new Map<string, Entry>();
  for (const e of prov.parameters as Entry[]) {
    byName.set(e.name.trim().toLowerCase(), e);
  }

  const results: {
    parameter_name: string;
    canonical_unit: string;
    found: boolean;
    n: number;
    corpus_median: number | null;
    bench_p10: number;
    bench_p90: number;
    in_envelope: boolean;
    hard_fail: boolean;
    source: string;
  }[] = [];

  for (const b of bench.benchmarks) {
    const e = byName.get(b.parameter_name.toLowerCase());
    if (!e || !e.stats_global) {
      results.push({
        parameter_name: b.parameter_name,
        canonical_unit: b.canonical_unit,
        found: false,
        n: 0,
        corpus_median: null,
        bench_p10: b.p10,
        bench_p90: b.p90,
        in_envelope: false,
        hard_fail: false,
        source: b.source,
      });
      continue;
    }
    const m = e.stats_global.median;
    results.push({
      parameter_name: b.parameter_name,
      canonical_unit: b.canonical_unit,
      found: true,
      n: e.stats_global.n,
      corpus_median: m,
      bench_p10: b.p10,
      bench_p90: b.p90,
      in_envelope: m >= b.p10 && m <= b.p90,
      hard_fail: m < b.p5 || m > b.p95,
      source: b.source,
    });
  }

  const foundCount = results.filter((r) => r.found).length;
  const passCount = results.filter((r) => r.in_envelope).length;
  const hardFails = results.filter((r) => r.hard_fail).length;
  let verdict: 'PASS' | 'FLAG' | 'FAIL';
  if (hardFails > 0) verdict = 'FAIL';
  else if (passCount >= 12) verdict = 'PASS';
  else if (passCount >= 10) verdict = 'FLAG';
  else verdict = 'FAIL';

  const summary = {
    schema_version: '0.1.0',
    corpus_snapshot: prov.metadata?.generated_at ?? null,
    total_benchmarks: results.length,
    benchmarks_found_in_corpus: foundCount,
    benchmarks_in_envelope: passCount,
    hard_fails: hardFails,
    pass_threshold: '>=12/15 within [p10,p90] and 0 hard fails',
    verdict,
    results,
  };

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(summary, null, 2) + '\n');

  console.log('Literature cross-check:');
  console.log(`  benchmarks:              ${results.length}`);
  console.log(`  found in corpus:         ${foundCount}`);
  console.log(`  in [p10,p90] envelope:   ${passCount}`);
  console.log(`  hard fails (outside p5/p95): ${hardFails}`);
  console.log(`  verdict:                 ${verdict}`);
  for (const r of results) {
    const tag = !r.found ? '⚠ not-in-corpus'
      : r.hard_fail ? '✗ hard-fail'
      : r.in_envelope ? '✓' : '∼ flag';
    const medStr = r.corpus_median != null ? r.corpus_median.toFixed(3) : 'n/a';
    console.log(`  ${tag.padEnd(18)} ${r.parameter_name.padEnd(28)} n=${r.n.toString().padStart(5)}  median=${medStr.padStart(12)} ${r.canonical_unit}  [${r.bench_p10}..${r.bench_p90}]`);
  }
  console.log(`  wrote  → ${OUT}`);
}

main();
