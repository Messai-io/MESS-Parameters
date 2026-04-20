#!/usr/bin/env tsx
/**
 * Protocol recommender v0 — takes constraints, returns source rows +
 * a common-protocol distillation.
 *
 * Usage:
 *   npm run recommend -- --given substrate=acetate --given system_type=MFC \
 *                        --target "max power density > 500" --top 5
 *
 * Flags:
 *   --given K=V        repeatable; case-insensitive substring match on
 *                      source.context[K] OR source[K] (system_type).
 *   --target "PARAM OP VALUE"   filter sources of the named parameter
 *                                whose numeric value satisfies OP (>, <,
 *                                >=, <=) VALUE. PARAM is matched case-
 *                                insensitive against the parameter name
 *                                (substring).
 *   --top N            number of top rows to display (default 5).
 *   --format text|json default text.
 *
 * Ranks by: confidence × (reproducibility_score ?? 0.5).
 *
 * Reads:
 *   data/parameter-provenance.json (post-Phase-1 filter)
 *   data/paper-metadata.csv        (reproducibility_score enrichment)
 */

import * as fs from 'fs';
import * as path from 'path';

const ROOT = path.resolve(__dirname, '..', '..');
const PROV = path.join(ROOT, 'data', 'parameter-provenance.json');
const PM = path.join(ROOT, 'data', 'paper-metadata.csv');

interface Source {
  doi: string;
  title: string;
  year: number | null;
  system_type: string;
  value: number;
  unit: string;
  confidence: number;
  extraction_method: string;
  reproducibility_score: number | null;
  snippet: string | null;
  context: Record<string, unknown> | null;
}

interface ProvEntry {
  id: string;
  name: string;
  n_papers: number;
  n_values: number;
  sources: Source[];
}

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

function parseArgs(argv: string[]): {
  given: Record<string, string>;
  target: { param: string; op: string; value: number } | null;
  top: number;
  format: 'text' | 'json';
} {
  const given: Record<string, string> = {};
  let target: { param: string; op: string; value: number } | null = null;
  let top = 5;
  let format: 'text' | 'json' = 'text';

  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--given') {
      const kv = argv[++i];
      const eq = kv.indexOf('=');
      if (eq < 0) throw new Error(`--given expects K=V, got ${kv}`);
      given[kv.slice(0, eq).trim().toLowerCase()] = kv.slice(eq + 1).trim().toLowerCase();
    } else if (a === '--target') {
      const expr = argv[++i];
      // "max power density > 500"
      const m = expr.match(/^(.+?)\s*(>=|<=|>|<|=)\s*([-+]?[\d.]+)$/);
      if (!m) throw new Error(`--target expects 'PARAM OP VALUE', got ${expr}`);
      target = {
        param: m[1].trim().toLowerCase(),
        op: m[2],
        value: parseFloat(m[3]),
      };
    } else if (a === '--top') {
      top = parseInt(argv[++i], 10);
    } else if (a === '--format') {
      const f = argv[++i];
      if (f !== 'text' && f !== 'json') throw new Error(`--format must be text|json`);
      format = f;
    } else if (a === '-h' || a === '--help') {
      console.log(usage());
      process.exit(0);
    } else {
      throw new Error(`unknown arg ${a}`);
    }
  }
  return { given, target, top, format };
}

function usage(): string {
  return `
Usage: npm run recommend -- [options]

Options:
  --given K=V       filter sources whose context[K] contains V (case-insensitive).
                    Repeatable. K can be: substrate, anode_material, cathode_material,
                    operation_mode, reactor_configuration, system_type, inoculum, ...
  --target "PARAM OP VALUE"
                    only keep sources of PARAM whose value satisfies OP (>, <, >=, <=).
                    Example: --target "max power density > 500"
  --top N           print top-N rows (default 5)
  --format text|json
                    output format (default text)
  --help            this message

Example:
  npm run recommend -- --given substrate=acetate --given system_type=MFC \\
                       --target "max power density > 500" --top 5
`.trim();
}

function matchGiven(src: Source, given: Record<string, string>): boolean {
  for (const [k, v] of Object.entries(given)) {
    let found: string | null = null;
    if (k === 'system_type') {
      found = (src.system_type || '').toLowerCase();
    } else if (src.context && src.context[k] != null) {
      found = String(src.context[k]).toLowerCase();
    }
    if (!found || !found.includes(v)) return false;
  }
  return true;
}

function satisfiesTarget(src: Source, target: { op: string; value: number } | null): boolean {
  if (!target) return true;
  switch (target.op) {
    case '>':  return src.value >  target.value;
    case '>=': return src.value >= target.value;
    case '<':  return src.value <  target.value;
    case '<=': return src.value <= target.value;
    case '=':  return src.value === target.value;
  }
  return false;
}

function loadReproScores(): Map<string, number> {
  const out = new Map<string, number>();
  if (!fs.existsSync(PM)) return out;
  const { header, rows } = parseCsv(fs.readFileSync(PM, 'utf8'));
  const iDoi = header.indexOf('doi');
  const iScore = header.indexOf('reproducibility_score');
  if (iDoi < 0 || iScore < 0) return out;
  for (const r of rows) {
    const doi = (r[iDoi] || '').trim();
    const s = parseFloat(r[iScore] || '0');
    if (doi && Number.isFinite(s) && s > 0) out.set(doi, s);
  }
  return out;
}

function modeTop(values: (string | null | undefined)[], k = 3): { label: string; share: number }[] {
  const m = new Map<string, number>();
  let n = 0;
  for (const v of values) {
    if (v == null || v === '') continue;
    const key = String(v).toLowerCase();
    m.set(key, (m.get(key) || 0) + 1);
    n++;
  }
  const out = [...m.entries()].sort((a, b) => b[1] - a[1]).slice(0, k);
  return out.map(([label, count]) => ({ label, share: n > 0 ? count / n : 0 }));
}

function median(xs: number[]): number | null {
  const s = xs.filter((x) => Number.isFinite(x)).sort((a, b) => a - b);
  if (s.length === 0) return null;
  return s.length % 2 ? s[(s.length - 1) / 2] : 0.5 * (s[s.length / 2 - 1] + s[s.length / 2]);
}

function quantile(sorted: number[], q: number): number {
  const pos = (sorted.length - 1) * q;
  const base = Math.floor(pos);
  const rest = pos - base;
  const next = sorted[base + 1] ?? sorted[base];
  return sorted[base] + rest * (next - sorted[base]);
}

function main() {
  const args = process.argv.slice(2);
  let parsed;
  try {
    parsed = parseArgs(args);
  } catch (e) {
    console.error(`error: ${(e as Error).message}\n`);
    console.error(usage());
    process.exit(2);
  }
  const { given, target, top, format } = parsed;

  const prov = JSON.parse(fs.readFileSync(PROV, 'utf8'));
  const reproScores = loadReproScores();

  // If target specified, restrict to matching parameter entries.
  let entries: ProvEntry[] = prov.parameters;
  if (target) {
    entries = entries.filter((e) => e.name.toLowerCase().includes(target.param));
    if (entries.length === 0) {
      console.error(`No parameters matched '${target.param}'.`);
      process.exit(3);
    }
  }

  // Collect matching sources across candidate parameters
  const matches: { entry: ProvEntry; source: Source; score: number }[] = [];
  for (const entry of entries) {
    for (const s of entry.sources || []) {
      if (!Number.isFinite(s.value)) continue;
      if (!matchGiven(s, given)) continue;
      if (!satisfiesTarget(s, target)) continue;
      const repro = (s.doi ? reproScores.get(s.doi) : null) ?? s.reproducibility_score ?? 0.5;
      const score = (s.confidence || 0.5) * repro;
      matches.push({ entry, source: s, score });
    }
  }

  matches.sort((a, b) => b.score - a.score);

  // Protocol features: mode/median across matching sources.
  const contextField = (field: string) =>
    matches.map((m) => (m.source.context?.[field] as string) ?? null);
  const numericContextField = (field: string) =>
    matches
      .map((m) => Number(m.source.context?.[field]))
      .filter((n) => Number.isFinite(n));

  const features = {
    anode_material:      modeTop(contextField('anode_material')),
    cathode_material:    modeTop(contextField('cathode_material')),
    membrane:            modeTop(contextField('membrane')),
    operation_mode:      modeTop(contextField('operation_mode')),
    reactor_configuration: modeTop(contextField('reactor_configuration')),
    inoculum:            modeTop(contextField('inoculum')),
    temperature_c:       {
      median: median(numericContextField('temperature_c')),
      p25_p75: [
        (() => {
          const a = numericContextField('temperature_c').sort((x, y) => x - y);
          return a.length ? [quantile(a, 0.25), quantile(a, 0.75)] : null;
        })(),
      ][0],
      n: numericContextField('temperature_c').length,
    },
    ph: {
      median: median(numericContextField('ph')),
      p25_p75: (() => {
        const a = numericContextField('ph').sort((x, y) => x - y);
        return a.length ? [quantile(a, 0.25), quantile(a, 0.75)] : null;
      })(),
      n: numericContextField('ph').length,
    },
  };

  const topRows = matches.slice(0, top);
  const matchValues = matches.map((m) => m.source.value);
  const aggregate = matchValues.length
    ? {
        n_sources: matches.length,
        n_papers: new Set(matches.map((m) => m.source.doi).filter(Boolean)).size,
        value_median: median(matchValues),
        value_p25: (() => { const s = [...matchValues].sort((a, b) => a - b); return quantile(s, 0.25); })(),
        value_p75: (() => { const s = [...matchValues].sort((a, b) => a - b); return quantile(s, 0.75); })(),
      }
    : null;

  const output = {
    query: {
      given,
      target: target ? `${target.param} ${target.op} ${target.value}` : null,
    },
    summary: aggregate,
    top_sources: topRows.map((m) => ({
      parameter: m.entry.name,
      value: m.source.value,
      unit: m.source.unit,
      doi: m.source.doi,
      title: m.source.title,
      year: m.source.year,
      system_type: m.source.system_type,
      substrate: m.source.context?.substrate ?? null,
      anode: m.source.context?.anode_material ?? null,
      cathode: m.source.context?.cathode_material ?? null,
      temperature_c: m.source.context?.temperature_c ?? null,
      ph: m.source.context?.ph ?? null,
      confidence: m.source.confidence,
      reproducibility: (m.source.doi ? reproScores.get(m.source.doi) : null) ?? m.source.reproducibility_score ?? null,
      rank_score: Number(m.score.toFixed(3)),
      snippet: m.source.snippet,
    })),
    common_protocol_features: features,
  };

  if (format === 'json') {
    process.stdout.write(JSON.stringify(output, null, 2) + '\n');
    return;
  }

  // Text format
  console.log();
  console.log(`Query:   given=${JSON.stringify(given)}`);
  console.log(`         target=${output.query.target ?? '(none)'}`);
  console.log();
  if (!aggregate) {
    console.log(`No matches. Try loosening a constraint.`);
    return;
  }
  console.log(`${aggregate.n_sources} sources match across ${aggregate.n_papers} papers.`);
  console.log(`Value median=${aggregate.value_median?.toPrecision(4)}  p25-p75=${aggregate.value_p25?.toPrecision(4)}-${aggregate.value_p75?.toPrecision(4)}`);
  console.log();
  console.log(`Top-${Math.min(top, topRows.length)} sources by confidence × reproducibility:`);
  for (const [i, r] of topRows.entries()) {
    const reproStr = r.score !== undefined
      ? `rank=${(output.top_sources[i].rank_score).toFixed(2)}`
      : '';
    const ts = output.top_sources[i];
    console.log(`  ${i + 1}. ${ts.parameter}: ${ts.value} ${ts.unit}`);
    const parts = [
      ts.substrate ? `substrate=${ts.substrate}` : null,
      ts.system_type ? `system=${ts.system_type}` : null,
      ts.anode ? `anode=${ts.anode}` : null,
      ts.temperature_c != null ? `T=${ts.temperature_c}°C` : null,
      ts.ph != null ? `pH=${ts.ph}` : null,
    ].filter(Boolean);
    console.log(`     ${parts.join('  ')}  ${reproStr}`);
    console.log(`     ${ts.doi ? `doi:${ts.doi}` : ''}  ${ts.title?.slice(0, 80) ?? ''}`);
  }
  console.log();
  console.log(`Common protocol features across the full match set:`);
  for (const [field, items] of Object.entries(features)) {
    if (Array.isArray(items) && items.length > 0) {
      const top3 = items.map((i) => `${i.label} (${Math.round(i.share * 100)}%)`).join(', ');
      console.log(`  ${field.padEnd(22)} ${top3}`);
    } else if (typeof items === 'object' && items != null && 'median' in items) {
      const o = items as any;
      if (o.median != null) {
        const [lo, hi] = o.p25_p75 || [null, null];
        console.log(`  ${field.padEnd(22)} median=${o.median.toPrecision(4)}  (p25-p75: ${lo?.toPrecision(4)} – ${hi?.toPrecision(4)}, n=${o.n})`);
      }
    }
  }
  console.log();
}

if (require.main === module) main();
