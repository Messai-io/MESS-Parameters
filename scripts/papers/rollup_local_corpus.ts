#!/usr/bin/env tsx
/**
 * Roll up per-paper parameter observations from the local PDF corpus into
 * data/local-corpus-values.csv. Complements the DB-derived
 * data/paper-parameter-values.csv (which sync-from-database.js owns) rather
 * than overwriting it.
 *
 * Sources:
 *   papers/by-doi/<DOI>/parameters/observations.json   — [{parameterId, value, unit, confidence, method, section}, ...]
 *   papers/by-doi/<DOI>/source.json                    — {canonical_sha256, doi, ...}
 *   parameters/index.json                               — ontology: maps parameterId → human-readable name + category
 *   data/paper-metadata.csv                             — joins DOI → title / year / journal / system_type
 *
 * Output schema matches paper-parameter-values.csv so build-provenance.ts
 * can union both files transparently. Emits one row per observation.
 */
import * as fs from 'fs';
import * as path from 'path';

const REPO = path.resolve(__dirname, '..', '..');
const PAPERS = process.env.PAPERS_ROOT
  ? path.resolve(process.env.PAPERS_ROOT)
  : path.join(REPO, 'papers');
const BY_DOI = path.join(PAPERS, 'by-doi');
const OUT_CSV = path.join(REPO, 'data', 'local-corpus-values.csv');
const PM_CSV = path.join(REPO, 'data', 'paper-metadata.csv');
const INDEX = path.join(REPO, 'parameters', 'index.json');

interface Source {
  canonical_sha256?: string;
  doi?: string;
}
interface Observation {
  parameterId: string;
  value: number;
  unit?: string;
  confidence?: number;
  method?: string;
  section?: string | null;
  snippet?: string;
}
interface Parameter {
  id: string;
  name: string;
  category?: string;
  subcategory?: string;
  unit?: string;
}

function readJSON<T>(p: string): T | null {
  try { return JSON.parse(fs.readFileSync(p, 'utf8')) as T; } catch { return null; }
}

function walkPaperDirs(root: string): string[] {
  const out: string[] = [];
  function recur(d: string) {
    let entries: fs.Dirent[] = [];
    try { entries = fs.readdirSync(d, { withFileTypes: true }); } catch { return; }
    for (const e of entries) {
      if (!e.isDirectory()) continue;
      const full = path.join(d, e.name);
      if (fs.existsSync(path.join(full, 'source.json'))) out.push(full);
      else recur(full);
    }
  }
  recur(root);
  return out;
}

function loadOntology(): Map<string, Parameter> {
  const idx = readJSON<any>(INDEX);
  const map = new Map<string, Parameter>();
  if (!idx?.categories) return map;
  for (const cat of idx.categories) {
    for (const sub of cat.subcategories || []) {
      for (const p of sub.parameters || []) {
        map.set(p.id, {
          id: p.id,
          name: p.name,
          category: cat.id,
          subcategory: sub.id,
          unit: p.unit,
        });
      }
    }
  }
  return map;
}

function loadPaperMeta(): Map<string, { title: string; year: string; journal: string; system_type: string }> {
  const map = new Map<string, any>();
  if (!fs.existsSync(PM_CSV)) return map;
  const text = fs.readFileSync(PM_CSV, 'utf8');
  const [header, ...rows] = text.split(/\r?\n/).filter(Boolean);
  const cols = header.split(',');
  const iDoi = cols.indexOf('doi');
  const iTitle = cols.indexOf('title');
  const iYear = cols.indexOf('year');
  const iJournal = cols.indexOf('journal');
  const iSys = cols.indexOf('system_type');
  for (const line of rows) {
    const f = line.split(','); // coarse CSV; titles with commas will be partial, acceptable for lookup
    const doi = f[iDoi];
    if (!doi) continue;
    map.set(doi, {
      title: f[iTitle] ?? '',
      year: f[iYear] ?? '',
      journal: f[iJournal] ?? '',
      system_type: f[iSys] ?? '',
    });
  }
  return map;
}

function csvCell(s: string | number | null | undefined): string {
  const v = s == null ? '' : String(s);
  if (/[",\n]/.test(v)) return `"${v.replace(/"/g, '""')}"`;
  return v;
}

function main(): void {
  if (!fs.existsSync(BY_DOI)) {
    console.error(`No corpus at ${BY_DOI}.`);
    process.exit(1);
  }
  const ontology = loadOntology();
  const pm = loadPaperMeta();
  const dirs = walkPaperDirs(BY_DOI);
  console.log(`Rolling up ${dirs.length} paper dirs from ${BY_DOI}`);

  const header = [
    'id', 'paper_doi', 'paper_title', 'paper_year', 'system_type',
    'parameter_name', 'parameter_category', 'parameter_subcategory',
    'extracted_value', 'numeric_value', 'parameter_unit',
    'has_numeric_value', 'confidence', 'extraction_method',
    'source_section', 'is_verified', 'verified_mes_paper',
  ];
  const rows: string[] = [header.join(',')];
  let obsCount = 0;
  let skippedNoOntology = 0;

  for (const dir of dirs) {
    const src = readJSON<Source>(path.join(dir, 'source.json')) ?? {};
    const obs = readJSON<Observation[]>(path.join(dir, 'parameters', 'observations.json')) ?? [];
    if (!src.doi || !obs.length) continue;
    const meta = pm.get(src.doi) ?? { title: '', year: '', journal: '', system_type: '' };
    for (const o of obs) {
      if (typeof o.value !== 'number' || !Number.isFinite(o.value)) continue;
      const p = ontology.get(o.parameterId);
      if (!p) { skippedNoOntology++; continue; }
      rows.push([
        `${src.canonical_sha256}-${o.parameterId}`,
        src.doi,
        meta.title,
        meta.year,
        meta.system_type,
        p.name,
        (p.category || '').toUpperCase().replace(/-/g, '_'),
        p.subcategory || '',
        String(o.value),
        String(o.value),
        o.unit ?? p.unit ?? '',
        't',
        String(o.confidence ?? 0.5),
        o.method ?? 'local',
        o.section ?? '',
        'f',
        't',
      ].map(csvCell).join(','));
      obsCount++;
    }
  }

  fs.writeFileSync(OUT_CSV, rows.join('\n') + '\n');
  console.log(`✓ Wrote ${obsCount} observations to ${path.relative(REPO, OUT_CSV)}`);
  if (skippedNoOntology) console.log(`  skipped ${skippedNoOntology} observations with unknown parameterId`);
}

main();
