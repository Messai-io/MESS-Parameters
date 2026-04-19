#!/usr/bin/env tsx
/**
 * Per-parameter top-10 and bottom-10 extreme-value report, rendered as
 * static HTML for human eyeballing. Runs on the same sources already
 * embedded in data/parameter-provenance.json.
 *
 * Reads:
 *   data/parameter-provenance.json
 *
 * Writes:
 *   data/verification/outliers/index.html         navigation
 *   data/verification/outliers/<slug>.html        one per parameter
 *   data/verification/outliers/summary.json       machine-readable
 *
 * Focuses on parameters with >= 30 numeric sources. For parameters with
 * fewer sources the distribution is too small to bother ranking.
 */

import * as fs from 'fs';
import * as path from 'path';

const ROOT = path.resolve(__dirname, '..', '..');
const PROV = path.join(ROOT, 'data', 'parameter-provenance.json');
const OUT_DIR = path.join(ROOT, 'data', 'verification', 'outliers');
const SUMMARY = path.join(OUT_DIR, 'summary.json');
const INDEX = path.join(OUT_DIR, 'index.html');

const MIN_SOURCES = 30;
const TOP_N = 10;

interface Source {
  doi: string;
  title: string;
  year: number | null;
  system_type: string;
  value: number;
  unit: string;
  confidence: number;
  extraction_method: string;
  source_section: string;
  snippet: string | null;
}

interface Entry {
  id: string;
  name: string;
  n_papers: number;
  n_values: number;
  sources: Source[];
}

function esc(s: string | number | null | undefined): string {
  if (s == null) return '';
  return String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function renderParam(entry: Entry): { html: string; summary: { top: Source[]; bottom: Source[] } } {
  const nums = entry.sources.filter((s) => Number.isFinite(s.value));
  const sorted = [...nums].sort((a, b) => a.value - b.value);
  const bottom = sorted.slice(0, TOP_N);
  const top = sorted.slice(-TOP_N).reverse();

  const rowsHtml = (src: Source[]) =>
    src.map((s) => `
      <tr>
        <td style="text-align:right;padding:4px 8px;font-variant-numeric:tabular-nums;">${esc(s.value.toPrecision(5))}</td>
        <td style="padding:4px 8px;">${esc(s.unit)}</td>
        <td style="padding:4px 8px;">${esc(s.system_type || '')}</td>
        <td style="padding:4px 8px;">${esc(s.extraction_method)}</td>
        <td style="padding:4px 8px;font-variant-numeric:tabular-nums;">${s.confidence.toFixed(2)}</td>
        <td style="padding:4px 8px;">${s.doi ? `<a href="https://doi.org/${esc(s.doi)}">${esc(s.doi)}</a>` : ''}</td>
        <td style="padding:4px 8px;max-width:720px;color:#555;font-size:12px;">${esc(s.snippet || '').slice(0, 400)}</td>
      </tr>
    `).join('');

  const html = `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><title>Outliers: ${esc(entry.name)}</title>
<style>
  body { font: 14px/1.5 -apple-system, system-ui, sans-serif; margin: 24px; color: #222; }
  h1 { font-size: 20px; margin-bottom: 4px; }
  h2 { font-size: 15px; margin-top: 24px; color: #444; }
  table { border-collapse: collapse; width: 100%; font-size: 13px; }
  th { text-align: left; padding: 6px 8px; background: #f5f5f5; border-bottom: 1px solid #ddd; }
  tr:nth-child(even) td { background: #fafafa; }
  .meta { color: #666; font-size: 13px; }
  .nav { margin-bottom: 16px; font-size: 13px; }
</style></head>
<body>
<div class="nav"><a href="index.html">← all parameters</a></div>
<h1>${esc(entry.name)}</h1>
<div class="meta">${entry.n_values} values from ${entry.n_papers} papers. Showing top-${TOP_N} largest and smallest.</div>
<h2>Top ${TOP_N} largest</h2>
<table><thead><tr><th>value</th><th>unit</th><th>system</th><th>method</th><th>conf</th><th>DOI</th><th>snippet</th></tr></thead>
<tbody>${rowsHtml(top)}</tbody></table>
<h2>Bottom ${TOP_N} smallest</h2>
<table><thead><tr><th>value</th><th>unit</th><th>system</th><th>method</th><th>conf</th><th>DOI</th><th>snippet</th></tr></thead>
<tbody>${rowsHtml(bottom)}</tbody></table>
</body></html>`;

  return { html, summary: { top, bottom } };
}

function main() {
  const prov = JSON.parse(fs.readFileSync(PROV, 'utf8'));
  const entries = (prov.parameters as Entry[]).filter((e) => (e.sources?.length || 0) >= MIN_SOURCES);

  fs.mkdirSync(OUT_DIR, { recursive: true });

  const summary: Record<string, { top: Source[]; bottom: Source[] }> = {};
  const nav: { name: string; slug: string; n: number }[] = [];

  for (const e of entries) {
    const { html, summary: s } = renderParam(e);
    const slug = slugify(e.name);
    fs.writeFileSync(path.join(OUT_DIR, `${slug}.html`), html);
    summary[e.id] = s;
    nav.push({ name: e.name, slug, n: e.sources.length });
  }

  nav.sort((a, b) => a.name.localeCompare(b.name));
  const indexHtml = `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><title>Outlier forensics</title>
<style>
  body { font: 14px/1.5 -apple-system, system-ui, sans-serif; margin: 24px; color: #222; max-width: 800px; }
  h1 { font-size: 22px; margin-bottom: 4px; }
  ul { list-style: none; padding: 0; }
  li { padding: 4px 0; }
  a { color: #0366d6; text-decoration: none; }
  a:hover { text-decoration: underline; }
  .count { color: #888; font-variant-numeric: tabular-nums; margin-left: 8px; }
</style></head>
<body>
<h1>Outlier forensics</h1>
<p>Per-parameter top-${TOP_N} largest and bottom-${TOP_N} smallest values, for every parameter with ≥ ${MIN_SOURCES} sources. Generated from <code>data/parameter-provenance.json</code>.</p>
<p><strong>Total parameters audited:</strong> ${entries.length}</p>
<ul>
${nav.map((p) => `  <li><a href="${p.slug}.html">${esc(p.name)}</a><span class="count">${p.n}</span></li>`).join('\n')}
</ul>
</body></html>`;
  fs.writeFileSync(INDEX, indexHtml);
  fs.writeFileSync(SUMMARY, JSON.stringify({
    schema_version: '0.1.0',
    corpus_snapshot: prov.metadata?.generated_at ?? null,
    parameters_audited: entries.length,
    min_sources: MIN_SOURCES,
    top_n: TOP_N,
    outliers: summary,
  }, null, 2) + '\n');

  console.log(`Outlier report:`);
  console.log(`  parameters audited:      ${entries.length}`);
  console.log(`  wrote  → ${INDEX}`);
  console.log(`  wrote  → ${SUMMARY}`);
}

main();
