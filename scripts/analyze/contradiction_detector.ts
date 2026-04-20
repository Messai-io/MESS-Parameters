#!/usr/bin/env tsx
/**
 * Producer-native contradiction detector.
 *
 * Scans `data/parameter-provenance.json` for pairs of papers reporting
 * wildly-different values of the same parameter, under the same context
 * conditions where available.
 *
 * Ported in spirit (not line-for-line) from
 *   /Users/samfrons/repos/messai-ai/apps/web/src/services/contradiction-detector.ts
 * and emits records matching their `ContradictionResult` shape, so the
 * consumer can switch to reading this sidecar without schema changes.
 *
 * Thresholds — matched to consumer defaults:
 *   POWER_THRESHOLD         = 0.30  (>30% deviation on power-family)
 *   EFFICIENCY_THRESHOLD    = 0.20
 *   PH_THRESHOLD            = 1.0   absolute
 *   TEMPERATURE_THRESHOLD   = 10    °C absolute
 *   DEFAULT_NUMERIC_THRESH  = 0.30
 *
 * MIN_PAIR_N: ignore parameters with < 5 papers reporting a numeric value.
 *
 * Output: `data/analysis/contradictions.json` + `contradictions.html`.
 */

import * as fs from 'fs';
import * as path from 'path';

const ROOT = path.resolve(__dirname, '..', '..');
const PROV = path.join(ROOT, 'data', 'parameter-provenance.json');
const OUT_DIR = path.join(ROOT, 'data', 'analysis');
const OUT_JSON = path.join(OUT_DIR, 'contradictions.json');
const OUT_HTML = path.join(OUT_DIR, 'contradictions.html');

const POWER_THRESHOLD = 0.30;
const EFFICIENCY_THRESHOLD = 0.20;
const PH_ABS_THRESHOLD = 1.0;
const TEMPERATURE_ABS_THRESHOLD = 10.0;
const DEFAULT_NUMERIC_THRESHOLD = 0.30;
const MIN_PAIR_N = 5;
const MAX_PAIRS_PER_PARAM = 20;   // cap to keep output size reasonable
const SCHEMA_VERSION = '0.1.0';

function thresholdFor(paramName: string): { rel?: number; abs?: number } {
  const n = paramName.toLowerCase();
  if (n.includes('power') || n.includes('current density')) return { rel: POWER_THRESHOLD };
  if (n.includes('efficiency')) return { rel: EFFICIENCY_THRESHOLD };
  if (n.includes('ph')) return { abs: PH_ABS_THRESHOLD };
  if (n.includes('temperature')) return { abs: TEMPERATURE_ABS_THRESHOLD };
  return { rel: DEFAULT_NUMERIC_THRESHOLD };
}

function disagrees(
  paramName: string,
  v1: number, v2: number,
): { disagrees: boolean; deviation: number } {
  const { rel, abs } = thresholdFor(paramName);
  if (abs != null) {
    const d = Math.abs(v2 - v1);
    return { disagrees: d > abs, deviation: d };
  }
  if (rel != null) {
    const base = Math.max(Math.abs(v1), Math.abs(v2));
    if (base < 1e-12) return { disagrees: false, deviation: 0 };
    const d = Math.abs(v2 - v1) / base;
    return { disagrees: d > rel, deviation: d };
  }
  return { disagrees: false, deviation: 0 };
}

function contextKey(ctx: Record<string, unknown> | null, systemType: string): string {
  if (!ctx) return `system=${systemType || 'unknown'}`;
  const parts: string[] = [`system=${systemType || 'unknown'}`];
  for (const f of ['substrate', 'anode_material', 'cathode_material', 'operation_mode', 'reactor_configuration']) {
    const v = ctx[f];
    if (v) parts.push(`${f}=${String(v).toLowerCase()}`);
  }
  return parts.join('|');
}

interface Source {
  doi: string;
  title: string;
  system_type: string;
  value: number;
  unit: string;
  confidence: number;
  reproducibility_score: number | null;
  context: Record<string, unknown> | null;
  snippet: string | null;
}

interface ProvEntry {
  id: string;
  name: string;
  sources: Source[];
}

interface ContradictionResult {
  paper1Id: string;
  paper2Id: string;
  paper1Title: string;
  paper2Title: string;
  contradictionType: 'numerical' | 'textual' | 'methodological';
  parameterName?: string;
  value1?: number;
  value2?: number;
  deviation?: number;
  confidence: number;
  evidence: string;
}

function medianOfPaper(sources: Source[]): Map<string, { value: number; src: Source }> {
  const byDoi = new Map<string, Source[]>();
  for (const s of sources) {
    if (!s.doi || !Number.isFinite(s.value)) continue;
    if (!byDoi.has(s.doi)) byDoi.set(s.doi, []);
    byDoi.get(s.doi)!.push(s);
  }
  const out = new Map<string, { value: number; src: Source }>();
  for (const [doi, rows] of byDoi) {
    const sorted = rows.slice().sort((a, b) => a.value - b.value);
    const pick = sorted[Math.floor(sorted.length / 2)];
    out.set(doi, { value: pick.value, src: pick });
  }
  return out;
}

function main() {
  const prov = JSON.parse(fs.readFileSync(PROV, 'utf8'));
  const contradictions: ContradictionResult[] = [];

  for (const entry of prov.parameters as ProvEntry[]) {
    const sources = (entry.sources || []).filter((s) => Number.isFinite(s.value));
    if (sources.length < MIN_PAIR_N) continue;

    // Group sources by context-key so we only compare equivalent conditions.
    const byCtx = new Map<string, Source[]>();
    for (const s of sources) {
      const k = contextKey(s.context, s.system_type);
      if (!byCtx.has(k)) byCtx.set(k, []);
      byCtx.get(k)!.push(s);
    }

    for (const [ctx, rows] of byCtx) {
      if (rows.length < 2) continue;
      // One median value per paper under this context
      const perPaper = medianOfPaper(rows);
      if (perPaper.size < 2) continue;

      const entries = [...perPaper.entries()]; // [doi, {value, src}]
      let flaggedHere = 0;
      for (let i = 0; i < entries.length && flaggedHere < MAX_PAIRS_PER_PARAM; i++) {
        for (let j = i + 1; j < entries.length && flaggedHere < MAX_PAIRS_PER_PARAM; j++) {
          const [doi1, a] = entries[i];
          const [doi2, b] = entries[j];
          const { disagrees: d, deviation } = disagrees(entry.name, a.value, b.value);
          if (!d) continue;
          const conf = Math.min(a.src.confidence || 0.5, b.src.confidence || 0.5);
          contradictions.push({
            paper1Id: doi1,
            paper2Id: doi2,
            paper1Title: a.src.title,
            paper2Title: b.src.title,
            contradictionType: 'numerical',
            parameterName: entry.name,
            value1: a.value,
            value2: b.value,
            deviation: Number(deviation.toFixed(4)),
            confidence: Number(conf.toFixed(3)),
            evidence: `Under context "${ctx}", ${entry.name}: ${a.value} ${a.src.unit} (${doi1}) vs ${b.value} ${b.src.unit} (${doi2}). Deviation ${(deviation * 100).toFixed(0)}% exceeds threshold.`,
          });
          flaggedHere++;
        }
      }
    }
  }

  // Deduplicate by (param, doi1, doi2)
  const seen = new Set<string>();
  const deduped: ContradictionResult[] = [];
  for (const c of contradictions) {
    const [a, b] = [c.paper1Id, c.paper2Id].sort();
    const k = `${c.parameterName}|${a}|${b}`;
    if (seen.has(k)) continue;
    seen.add(k);
    deduped.push(c);
  }

  // Sort by deviation desc
  deduped.sort((a, b) => (b.deviation ?? 0) - (a.deviation ?? 0));

  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(OUT_JSON, JSON.stringify({
    schema_version: SCHEMA_VERSION,
    generated_at: new Date().toISOString(),
    corpus_snapshot: prov.metadata?.generated_at ?? null,
    n_contradictions: deduped.length,
    thresholds: {
      power_relative: POWER_THRESHOLD,
      efficiency_relative: EFFICIENCY_THRESHOLD,
      ph_absolute: PH_ABS_THRESHOLD,
      temperature_absolute: TEMPERATURE_ABS_THRESHOLD,
      default_relative: DEFAULT_NUMERIC_THRESHOLD,
    },
    contradictions: deduped,
  }, null, 2) + '\n');

  // HTML report
  const esc = (s: any) => String(s ?? '')
    .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
  const rowsHtml = deduped.slice(0, 100).map((c) => `
    <tr>
      <td style="padding:6px 8px;font-weight:500;">${esc(c.parameterName)}</td>
      <td style="padding:6px 8px;text-align:right;font-variant-numeric:tabular-nums;">${esc(c.value1?.toPrecision(4))}</td>
      <td style="padding:6px 8px;"><a href="https://doi.org/${esc(c.paper1Id)}">${esc(c.paper1Id)}</a></td>
      <td style="padding:6px 8px;text-align:right;font-variant-numeric:tabular-nums;">${esc(c.value2?.toPrecision(4))}</td>
      <td style="padding:6px 8px;"><a href="https://doi.org/${esc(c.paper2Id)}">${esc(c.paper2Id)}</a></td>
      <td style="padding:6px 8px;text-align:right;font-variant-numeric:tabular-nums;">${((c.deviation ?? 0) * 100).toFixed(0)}%</td>
      <td style="padding:6px 8px;max-width:620px;font-size:12px;color:#555;">${esc(c.evidence)}</td>
    </tr>
  `).join('');
  fs.writeFileSync(OUT_HTML, `<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>Cross-paper contradictions</title>
<style>
  body { font: 14px/1.5 -apple-system, system-ui, sans-serif; margin: 24px; color: #222; }
  h1 { font-size: 20px; }
  table { border-collapse: collapse; font-size: 13px; }
  th { text-align: left; padding: 8px; background: #f5f5f5; border-bottom: 1px solid #ddd; }
  tr:nth-child(even) td { background: #fafafa; }
</style></head>
<body>
<h1>Cross-paper contradictions</h1>
<p>${deduped.length} flagged (showing top 100). See <code>data/analysis/contradictions.json</code> for the full machine-readable output.</p>
<table>
<thead><tr><th>Parameter</th><th>Value 1</th><th>DOI 1</th><th>Value 2</th><th>DOI 2</th><th>Δ</th><th>Evidence</th></tr></thead>
<tbody>${rowsHtml}</tbody></table>
</body></html>`);

  console.log('Contradiction detector:');
  console.log(`  contradictions flagged:  ${deduped.length}`);
  console.log(`  wrote JSON  → ${OUT_JSON}`);
  console.log(`  wrote HTML  → ${OUT_HTML}`);
  console.log(`  top 5:`);
  for (const c of deduped.slice(0, 5)) {
    console.log(`    ${((c.deviation ?? 0) * 100).toFixed(0).padStart(4)}%  ${c.parameterName}  ${c.value1} vs ${c.value2}`);
  }
}

if (require.main === module) main();
