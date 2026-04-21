#!/usr/bin/env tsx
/**
 * Walk extracted table artifacts under papers/ and emit
 * data/paper-table-values.csv — a flat table of within-paper parameter
 * observations suitable for within-paper correlation analysis.
 *
 * Each row: (paper_doi, paper_hash, table_id, row_idx, column_name,
 *           parameter_id, value, unit, confidence, caption)
 *
 * Inputs (written by scripts/papers/extract_tables.py):
 *   papers/by-hash/<sha>/text/tables/table-NN.csv      full raw CSV
 *   papers/by-hash/<sha>/text/tables/table-NN.meta.json page/bbox/caption/shape
 *   papers/by-doi/<...>/text/tables/...                same, DOI-indexed
 *   data/papers-manifest.json                          sha→doi bridge
 *
 * Column-to-parameter matching: fuzzy lowercase substring against
 *   (a) rich parameter names (from data/parameter-definitions-rich.json)
 *   (b) the aliases in data/parameter-aliases.json
 *   Picks the LONGEST matching rich name (more specific wins — so
 *   "current density" beats "current" and "power density" beats "power").
 */
import * as fs from 'fs';
import * as path from 'path';

const ROOT = path.resolve(__dirname, '..');
const PAPERS_DIR = path.join(ROOT, 'papers');
const RICH_PATH = path.join(ROOT, 'data', 'parameter-definitions-rich.json');
const ALIASES_PATH = path.join(ROOT, 'data', 'parameter-aliases.json');
const MANIFEST_PATH = path.join(ROOT, 'data', 'papers-manifest.json');
const OUT_PATH = path.join(ROOT, 'data', 'paper-table-values.csv');
const BLOCKLIST_PATH = path.join(ROOT, 'data', 'ontology-blocklist.txt');

interface RichEntry {
  id: string;
  name: string;
  category: string;
  unit: string | null;
}

function loadRich(): RichEntry[] {
  return JSON.parse(fs.readFileSync(RICH_PATH, 'utf8')) as RichEntry[];
}

function loadAliases(): Record<string, string> {
  if (!fs.existsSync(ALIASES_PATH)) return {};
  try {
    const doc = JSON.parse(fs.readFileSync(ALIASES_PATH, 'utf8')) as { aliases?: Record<string, string> };
    return doc.aliases ?? {};
  } catch {
    return {};
  }
}

function loadBlocklist(): Set<string> {
  if (!fs.existsSync(BLOCKLIST_PATH)) return new Set();
  const out = new Set<string>();
  for (const line of fs.readFileSync(BLOCKLIST_PATH, 'utf8').split('\n')) {
    const s = line.trim();
    if (s && !s.startsWith('#')) out.add(s.toLowerCase());
  }
  return out;
}

function loadManifest(): Record<string, string> {
  if (!fs.existsSync(MANIFEST_PATH)) return {};
  const m = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8')) as { papers?: Array<{ doi?: string; pdf_hash?: string }> };
  const out: Record<string, string> = {};
  for (const p of m.papers ?? []) {
    if (p.pdf_hash && p.doi) out[p.pdf_hash] = p.doi;
  }
  return out;
}

// Minimal RFC-4180 CSV parser.
function parseCsv(text: string): string[][] {
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
  return rows;
}

// Strip units and qualifier tokens from a header for matching. Keep the
// semantic name. "Anode Surface Area (m²)" → "anode surface area".
function normalizeHeader(raw: string): string {
  return raw
    .toLowerCase()
    .replace(/\([^)]*\)/g, ' ')       // drop parenthesized units
    .replace(/\[[^\]]*\]/g, ' ')      // drop bracketed qualifiers
    .replace(/[_\-/]/g, ' ')
    .replace(/[^a-z0-9 ]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractUnit(raw: string): string {
  const m = raw.match(/\(([^)]+)\)/);
  return m ? m[1].trim() : '';
}

// Index built from rich + aliases: lowercase-name → rich.id, longest names first.
interface NameIndex {
  entries: Array<{ name: string; id: string }>; // sorted by name length desc
}

function buildNameIndex(rich: RichEntry[], aliases: Record<string, string>, blocklist: Set<string>): NameIndex {
  const byLc = new Map<string, string>();
  for (const r of rich) {
    const lc = r.name.toLowerCase();
    if (blocklist.has(lc)) continue;
    byLc.set(lc, r.id);
  }
  // Aliases may override a lc name → canonical id.
  for (const [aliasLc, canonicalId] of Object.entries(aliases)) {
    byLc.set(aliasLc, canonicalId);
  }
  const entries = Array.from(byLc.entries()).map(([name, id]) => ({ name, id }));
  // Also add some tabular-friendly synonyms not in rich: these are
  // common header phrasings where a direct lc match doesn't hit but the
  // concept clearly maps.
  const extraAliases: Array<[string, string]> = [];
  // Resolve canonical ids by name
  const idByName = new Map<string, string>();
  for (const r of rich) idByName.set(r.name.toLowerCase(), r.id);
  const addExtra = (synonym: string, targetName: string) => {
    const id = idByName.get(targetName.toLowerCase());
    if (id && !blocklist.has(synonym)) extraAliases.push([synonym, id]);
  };
  addExtra('anode surface area', 'Electrode Surface Area');
  addExtra('cathode surface area', 'Electrode Surface Area');
  addExtra('electrode area', 'Electrode Surface Area');
  addExtra('anode volume', 'Batch Volume');
  addExtra('cathode volume', 'Batch Volume');
  addExtra('reactor volume', 'Batch Volume');
  addExtra('cell volume', 'Batch Volume');
  addExtra('working volume', 'Batch Volume');
  addExtra('cod conc', 'COD Concentration');
  addExtra('initial cod', 'COD Concentration');
  addExtra('cod', 'COD Concentration');
  addExtra('bod', 'BOD Concentration');
  addExtra('hrt', 'Hydraulic Retention Time');
  addExtra('ocv', 'Open Circuit Voltage');
  addExtra('ce', 'Coulombic Efficiency');
  addExtra('pd', 'Power Density');
  addExtra('power', 'Power Density');
  addExtra('current', 'Current Density');
  addExtra('cd', 'Current Density');
  addExtra('max power density', 'Power Density');
  addExtra('maximum power density', 'Power Density');
  addExtra('internal resistance', 'Internal Resistance');
  addExtra('r int', 'Internal Resistance');
  addExtra('r ext', 'External Resistance');
  addExtra('ph', 'pH');
  addExtra('temp', 'Temperature');
  addExtra('temperature', 'Temperature');
  for (const [k, v] of extraAliases) byLc.set(k, v);
  const final = Array.from(byLc.entries()).map(([name, id]) => ({ name, id }));
  final.sort((a, b) => b.name.length - a.name.length);
  return { entries: final };
}

// Match a header to a parameter id. Returns { id, matched_name } or null.
// Pick the longest rich name that appears as a whole-word substring in
// the normalized header. This prefers "current density" over "current".
function matchHeader(normalized: string, index: NameIndex): { id: string; name: string } | null {
  if (!normalized) return null;
  for (const e of index.entries) {
    // whole-word match
    const re = new RegExp(`(^|\\s)${e.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(\\s|$)`);
    if (re.test(normalized)) return { id: e.id, name: e.name };
  }
  return null;
}

// Parse a cell value to number. Handles commas, unicode minus, etc.
function parseNumeric(cell: string): number | null {
  if (!cell) return null;
  const s = cell.trim()
    .replace(/,/g, '')
    .replace(/\u2212/g, '-')
    .replace(/[×x]10(\^?)([+\-]?\d+)/i, 'e$2');
  // reject pure non-numeric strings
  if (!/^[+\-]?\d/.test(s)) return null;
  const n = Number(s);
  return Number.isFinite(n) ? n : null;
}

function csvEscape(s: string): string {
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

// Walk a single paper dir, emit CSV rows.
function processPaperDir(
  paperDir: string,
  paperKey: string,
  paperDoi: string,
  index: NameIndex,
  out: string[],
): { tables: number; rows: number; matchedCols: number; totalCols: number } {
  const tablesDir = path.join(paperDir, 'text', 'tables');
  if (!fs.existsSync(tablesDir)) return { tables: 0, rows: 0, matchedCols: 0, totalCols: 0 };
  const summaryPath = path.join(tablesDir, 'summary.json');
  if (!fs.existsSync(summaryPath)) return { tables: 0, rows: 0, matchedCols: 0, totalCols: 0 };

  const csvFiles = fs.readdirSync(tablesDir).filter((f) => /^table-\d+\.csv$/.test(f));
  let tables = 0;
  let rows = 0;
  let matchedCols = 0;
  let totalCols = 0;

  for (const fname of csvFiles) {
    const tableId = fname.replace(/\.csv$/, '');
    const csvPath = path.join(tablesDir, fname);
    const metaPath = path.join(tablesDir, `${tableId}.meta.json`);
    let caption = '';
    if (fs.existsSync(metaPath)) {
      try {
        const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8')) as { caption?: string | null };
        caption = meta.caption ?? '';
      } catch {
        /* ignore */
      }
    }
    let raw: string[][];
    try { raw = parseCsv(fs.readFileSync(csvPath, 'utf8')); } catch { continue; }
    if (raw.length < 2) continue;
    tables++;
    const header = raw[0];
    const dataRows = raw.slice(1);

    // Classify columns
    const colMatches: Array<{ id: string; name: string; unit: string } | null> = header.map((h) => {
      totalCols++;
      const norm = normalizeHeader(h);
      const m = matchHeader(norm, index);
      if (m) { matchedCols++; return { id: m.id, name: m.name, unit: extractUnit(h) }; }
      return null;
    });

    for (let r = 0; r < dataRows.length; r++) {
      const row = dataRows[r];
      // Build a conditions map from all non-matched columns (string values)
      const conditions: Record<string, string> = {};
      for (let c = 0; c < header.length; c++) {
        if (colMatches[c]) continue;
        const v = (row[c] ?? '').trim();
        if (v) conditions[header[c]] = v;
      }
      const conditionsJson = Object.keys(conditions).length > 0 ? JSON.stringify(conditions) : '';
      for (let c = 0; c < header.length; c++) {
        const m = colMatches[c];
        if (!m) continue;
        const raw = (row[c] ?? '').trim();
        const num = parseNumeric(raw);
        if (num === null) continue;
        out.push([
          paperDoi,
          paperKey,
          tableId,
          String(r),
          header[c],
          m.id,
          String(num),
          m.unit,
          caption,
          conditionsJson,
        ].map(csvEscape).join(','));
        rows++;
      }
    }
  }
  return { tables, rows, matchedCols, totalCols };
}

function doiFromByDoiPath(p: string): string | null {
  // papers/by-doi/1. doi=10.xxxx/yyyy/paper.pdf → 10.xxxx/yyyy
  const m = p.match(/[/\\]doi=([^/\\]+(?:[/\\][^/\\]+)*?)[/\\]paper\.pdf$/);
  if (!m) {
    // fallback: last segment before /paper.pdf
    const parts = p.split(/[/\\]/);
    const paperIdx = parts.indexOf('paper.pdf');
    if (paperIdx > 1) return parts[paperIdx - 1];
    return null;
  }
  return m[1];
}

function hashFromByHashPath(p: string): string | null {
  const parts = p.split(/[/\\]/);
  const paperIdx = parts.indexOf('paper.pdf');
  if (paperIdx < 2) return null;
  return parts[paperIdx - 1]; // last dir before paper.pdf IS the full hash
}

function walkPaperDirs(): Array<{ dir: string; key: string; doi: string }> {
  const manifest = loadManifest();
  const result: Array<{ dir: string; key: string; doi: string }> = [];
  const seenKeys = new Set<string>();

  // by-hash: canonical
  const byHashRoot = path.join(PAPERS_DIR, 'by-hash');
  if (fs.existsSync(byHashRoot)) {
    for (const shard of fs.readdirSync(byHashRoot)) {
      const shardDir = path.join(byHashRoot, shard);
      if (!fs.statSync(shardDir).isDirectory()) continue;
      for (const hash of fs.readdirSync(shardDir)) {
        const paperDir = path.join(shardDir, hash);
        if (!fs.existsSync(path.join(paperDir, 'paper.pdf'))) continue;
        const doi = manifest[hash] ?? '';
        if (seenKeys.has(hash)) continue;
        seenKeys.add(hash);
        result.push({ dir: paperDir, key: hash, doi });
      }
    }
  }

  // by-doi: the DOI is embedded in the path; we also track as keys that
  // aren't already covered by hash.
  const byDoiRoot = path.join(PAPERS_DIR, 'by-doi');
  if (fs.existsSync(byDoiRoot)) {
    const dfs = (dir: string) => {
      for (const name of fs.readdirSync(dir)) {
        const p = path.join(dir, name);
        const stat = fs.statSync(p);
        if (stat.isDirectory()) dfs(p);
        else if (name === 'paper.pdf') {
          const doi = doiFromByDoiPath(p) ?? '';
          const paperDir = path.dirname(p);
          // Use DOI as key, but skip if already processed via hash.
          if (!doi || seenKeys.has(doi)) continue;
          seenKeys.add(doi);
          result.push({ dir: paperDir, key: doi, doi });
        }
      }
    };
    dfs(byDoiRoot);
  }
  void hashFromByHashPath; // exported for tests if desired
  return result;
}

function main(): void {
  console.log('[rollup-tables] loading ontology + aliases …');
  const rich = loadRich();
  const aliases = loadAliases();
  const blocklist = loadBlocklist();
  const index = buildNameIndex(rich, aliases, blocklist);
  console.log(`  ontology index: ${index.entries.length} entries`);

  console.log('[rollup-tables] enumerating paper dirs …');
  const papers = walkPaperDirs();
  console.log(`  ${papers.length} paper dirs`);

  const header = ['paper_doi', 'paper_key', 'table_id', 'row_idx', 'column_name', 'parameter_id', 'value', 'unit', 'caption', 'conditions_json'];
  const out: string[] = [header.join(',')];

  let papersWithTables = 0;
  let totalTables = 0;
  let totalRows = 0;
  let totalMatchedCols = 0;
  let totalCols = 0;

  for (const { dir, key, doi } of papers) {
    const s = processPaperDir(dir, key, doi, index, out);
    if (s.tables > 0) papersWithTables++;
    totalTables += s.tables;
    totalRows += s.rows;
    totalMatchedCols += s.matchedCols;
    totalCols += s.totalCols;
  }

  fs.writeFileSync(OUT_PATH, out.join('\n') + '\n', 'utf8');
  console.log(`✓ wrote ${path.relative(ROOT, OUT_PATH)}`);
  console.log(`  papers with tables:   ${papersWithTables}/${papers.length}`);
  console.log(`  total tables:         ${totalTables}`);
  console.log(`  total measurement rows: ${totalRows}`);
  console.log(`  column ontology match rate: ${totalMatchedCols}/${totalCols} = ${totalCols > 0 ? Math.round(100 * totalMatchedCols / totalCols) : 0}%`);
}

main();
