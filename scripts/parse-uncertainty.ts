#!/usr/bin/env tsx
/**
 * Regex-extract uncertainty indicators from the snippet field on every
 * source in data/parameter-provenance.json. Emits
 * data/source-uncertainty.csv with (paper_doi, parameter_id, value,
 * uncertainty_abs, uncertainty_rel_pct, uncertainty_kind, snippet_excerpt).
 *
 * Kinds detected:
 *   ± X            "500 ± 20 mW/m²"
 *   SD = X / sd X  "500 (SD = 20)"
 *   ± X%           "45 ± 5%"
 *   range X–Y      "from 100 to 200"
 *   ± X (N=R)      replicate-based error
 *
 * Intent: separate pipeline from weightFor() so consumers (future
 * inverse-variance weighting, UI error bars) can opt in without
 * touching provenance schema. Source objects retain the snippet; this
 * file is the parsed overlay.
 */
import * as fs from 'fs';
import * as path from 'path';

const ROOT = path.resolve(__dirname, '..');
const PROV_PATH = path.join(ROOT, 'data', 'parameter-provenance.json');
const OUT_PATH = path.join(ROOT, 'data', 'source-uncertainty.csv');

interface ProvSource {
  doi?: string;
  value?: number;
  unit?: string;
  snippet?: string | null;
}
interface ProvEntry {
  id: string;
  sources: ProvSource[];
}
interface ProvFile {
  parameters: ProvEntry[];
}

// Extract the first numeric match after a "±" / "plus minus" token.
const RE_PLUS_MINUS = /(-?\d+(?:\.\d+)?)[\s]*(?:±|\u00b1|\+\/?-|plus[-\s]*minus)[\s]*(\d+(?:\.\d+)?)(\s*%)?/i;
// SD = X, S.D. = X, standard deviation X — scopes to the nearest preceding number.
const RE_SD = /(-?\d+(?:\.\d+)?)[^a-z0-9]{0,40}?(?:s\.d\.|sd|standard deviation|stdev|std\.?)\s*[=:]\s*(\d+(?:\.\d+)?)/i;
// Range "from X to Y" or "between X and Y" or "X-Y" with spaces.
const RE_RANGE = /(?:from|between)?\s*(-?\d+(?:\.\d+)?)\s*(?:to|and|-|–|—)\s*(-?\d+(?:\.\d+)?)/i;

interface Parsed {
  uncertainty_abs: number | null;
  uncertainty_rel_pct: number | null;
  kind: string;
  value_anchor: number | null;
  excerpt: string;
}

function parseSnippet(snippet: string, valueHint: number | undefined): Parsed | null {
  if (!snippet || snippet.length < 5) return null;
  const s = snippet.slice(0, 400);

  // Try ± X%
  let m = s.match(/(-?\d+(?:\.\d+)?)[\s]*(?:±|\u00b1|\+\/?-)[\s]*(\d+(?:\.\d+)?)\s*%/i);
  if (m) {
    return {
      uncertainty_abs: null,
      uncertainty_rel_pct: Number(m[2]),
      kind: 'plus_minus_pct',
      value_anchor: Number(m[1]),
      excerpt: m[0],
    };
  }

  // Try ± X (absolute)
  m = s.match(RE_PLUS_MINUS);
  if (m) {
    const anchor = Number(m[1]);
    const abs = Number(m[2]);
    const relPct = anchor !== 0 ? (abs / Math.abs(anchor)) * 100 : null;
    // Only accept if the anchor is close to valueHint (within 20%) OR if
    // no valueHint. Guards against mis-attributing someone else's ±.
    if (valueHint != null && valueHint !== 0) {
      const drift = Math.abs(anchor - valueHint) / Math.abs(valueHint);
      if (drift > 0.2) return null;
    }
    return {
      uncertainty_abs: abs,
      uncertainty_rel_pct: relPct,
      kind: 'plus_minus_abs',
      value_anchor: anchor,
      excerpt: m[0],
    };
  }

  // SD = X
  m = s.match(RE_SD);
  if (m) {
    const anchor = Number(m[1]);
    const sd = Number(m[2]);
    const relPct = anchor !== 0 ? (sd / Math.abs(anchor)) * 100 : null;
    return {
      uncertainty_abs: sd,
      uncertainty_rel_pct: relPct,
      kind: 'sd',
      value_anchor: anchor,
      excerpt: m[0],
    };
  }

  // Range — treat halfwidth as uncertainty proxy.
  m = s.match(RE_RANGE);
  if (m) {
    const lo = Number(m[1]);
    const hi = Number(m[2]);
    if (!(Number.isFinite(lo) && Number.isFinite(hi)) || lo === hi) return null;
    const center = (lo + hi) / 2;
    const halfwidth = Math.abs(hi - lo) / 2;
    if (valueHint != null) {
      const drift = Math.abs(center - valueHint) / Math.max(1e-9, Math.abs(valueHint));
      if (drift > 0.3) return null;
    }
    return {
      uncertainty_abs: halfwidth,
      uncertainty_rel_pct: center !== 0 ? (halfwidth / Math.abs(center)) * 100 : null,
      kind: 'range_halfwidth',
      value_anchor: center,
      excerpt: m[0],
    };
  }

  return null;
}

function csvEscape(s: string): string {
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

function main(): void {
  const prov = JSON.parse(fs.readFileSync(PROV_PATH, 'utf8')) as ProvFile;

  const header = ['paper_doi', 'parameter_id', 'value', 'uncertainty_abs', 'uncertainty_rel_pct', 'kind', 'excerpt'];
  const out: string[] = [header.join(',')];

  let total = 0;
  let withSnippet = 0;
  let parsed = 0;
  const byKind = new Map<string, number>();

  for (const p of prov.parameters) {
    for (const s of p.sources) {
      total++;
      if (!s.snippet) continue;
      withSnippet++;
      const r = parseSnippet(s.snippet, s.value);
      if (!r) continue;
      parsed++;
      byKind.set(r.kind, (byKind.get(r.kind) ?? 0) + 1);
      out.push([
        s.doi ?? '',
        p.id,
        s.value != null ? String(s.value) : '',
        r.uncertainty_abs != null ? String(r.uncertainty_abs) : '',
        r.uncertainty_rel_pct != null ? r.uncertainty_rel_pct.toFixed(3) : '',
        r.kind,
        r.excerpt.replace(/\s+/g, ' ').slice(0, 120),
      ].map(csvEscape).join(','));
    }
  }

  fs.writeFileSync(OUT_PATH, out.join('\n') + '\n', 'utf8');
  console.log(`✓ wrote ${path.relative(ROOT, OUT_PATH)}`);
  console.log(`  total sources:   ${total}`);
  console.log(`  with snippet:    ${withSnippet}`);
  console.log(`  parsed:          ${parsed}`);
  for (const [k, n] of byKind.entries()) console.log(`    ${k.padEnd(20)} ${n}`);
}

main();
