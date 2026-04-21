#!/usr/bin/env tsx
/**
 * Produce site/src/data/materials.json by joining MESS-Materials physics
 * features with paper cross-references. Output is consumed by the
 * Correlation Explorer to enable material filter chips, physics
 * pseudo-parameters, and Pourbaix annotations.
 *
 * Inputs (read from MESS_MATERIALS_DIR, defaults to a sibling checkout):
 *   $MESS_MATERIALS_DIR/mp-materials-rich.json
 *   $MESS_MATERIALS_DIR/material-paper-crossref.json
 *
 * If the directory is absent we emit an empty stub so the UI degrades
 * gracefully in environments (e.g. CI without the sibling checkout).
 *
 * Physics-feature whitelist: only fields that are real, material-specific
 * scalars. Any feature where ≥ 50 % of eligible slugs share the same
 * value is treated as a proxy fallback and dropped from that feature's
 * pseudo-parameter (but other features for those slugs are kept).
 */
import * as fs from 'fs';
import * as path from 'path';

const ROOT = path.resolve(__dirname, '..');
const DEFAULT_DIR = path.resolve(ROOT, '..', 'MESS-Materials', 'data');
const MATERIALS_DIR = process.env.MESS_MATERIALS_DIR ?? DEFAULT_DIR;
const OUT_PATH = path.join(ROOT, 'data', 'materials.json');
const PROD_CSV_PATH = path.join(ROOT, 'data', 'paper-materials-prod.csv');

// Hand-curated raw-material-string → slug aliases. Ported from
// ~/repos/Messai-org/MESS-Materials/scripts/build-paper-crossref.py:53
// (ALIASES dict) — keep in sync when upstream curates new entries.
const MATERIAL_ALIASES: Record<string, string> = {
  'pt': 'platinum_cathode',
  'platinum': 'platinum_cathode',
  'pt/c': 'platinum_cathode',
  'platinum on carbon': 'platinum_cathode',
  'cu': 'copper_cathode',
  'copper': 'copper_cathode',
  'ni': 'nickel_foam',
  'nickel': 'nickel_foam',
  'nickel foam': 'nickel_foam',
  'stainless steel': 'stainless_steel',
  'stainless': 'stainless_steel',
  'ss': 'stainless_steel',
  'fe': 'iron_oxide',
  'iron': 'iron_oxide',
  'iron oxide': 'iron_oxide',
  'fe3o4': 'iron_oxide',
  'fe2o3': 'iron_oxide',
  'magnetite': 'iron_oxide',
  'hematite': 'iron_oxide',
  'mno2': 'manganese_oxide',
  'manganese dioxide': 'manganese_oxide',
  'manganese oxide': 'manganese_oxide',
  'mn': 'manganese_oxide',
  'co': 'cobalt_oxide',
  'co3o4': 'cobalt_oxide',
  'cobalt oxide': 'cobalt_oxide',
  'cobalt': 'cobalt_oxide',
  'carbon cloth': 'carbon_cloth',
  'carbon felt': 'carbon_felt',
  'carbon paper': 'carbon_paper',
  'activated carbon': 'activated_carbon',
  'gas diffusion layer': 'gas_diffusion_layer',
  'gdl': 'gas_diffusion_layer',
  'graphite brush': 'graphite_brush',
  'carbon brush': 'graphite_brush',
  'graphite rod': 'graphite_brush',
  'graphite felt': 'carbon_felt',
  'graphite plate': 'graphite_brush',
  'graphite': 'graphite_brush',
  'carbon nanotube': 'carbon_nanotubes',
  'carbon nanotubes': 'carbon_nanotubes',
  'cnt': 'carbon_nanotubes',
  'mwnt': 'carbon_nanotubes',
  'mwcnt': 'carbon_nanotubes',
  'swnt': 'carbon_nanotubes',
  'graphene': 'graphene_oxide',
  'rgo': 'graphene_oxide',
  'reduced graphene oxide': 'graphene_oxide',
  'go': 'graphene_oxide',
  'graphene oxide': 'graphene_oxide',
  // Extensions beyond MESS-Materials' curated set — proxies for slugs
  // that cover the same carbon allotrope family. Upstream slug additions
  // (gold, titanium, polyaniline, Nafion, etc.) would allow removing these
  // from the proxy/null policy.
  'carbon fiber': 'carbon_cloth',        // 9 papers; same allotrope fabric
  'mxene': 'ti3c2tx_mxene',              // 5 papers; most-studied MXene variant
};

// Parse an anode/cathode cell. May be a JSON array ('["Pt","Cu"]'), a
// comma-separated list, or a plain string. Returns lowercased tokens.
function parseMaterialCell(raw: string): string[] {
  const s = (raw ?? '').trim();
  if (!s) return [];
  if (s.startsWith('[')) {
    try {
      const parsed = JSON.parse(s);
      if (Array.isArray(parsed)) {
        return parsed
          .filter((x): x is string => typeof x === 'string')
          .map((x) => x.trim().toLowerCase())
          .filter(Boolean);
      }
    } catch {
      /* fall through to comma-split */
    }
  }
  return s
    .split(/[,;]\s*/)
    .map((p) => p.trim().toLowerCase())
    .filter(Boolean);
}

// Minimal CSV parser — handles quoted fields with embedded commas/newlines.
// Returns array of row objects keyed by header.
function parseCsv(text: string): Record<string, string>[] {
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
  const header = rows.shift() ?? [];
  return rows.map((r) => {
    const rec: Record<string, string> = {};
    for (let j = 0; j < header.length; j++) rec[header[j]] = r[j] ?? '';
    return rec;
  });
}

const SCHEMA_VERSION = '0.1.0';

// Whitelist of physics scalars we expose as pseudo-parameters. Priority
// order is the inverse of the array — lower priority features surface
// only when the higher-priority ones drop out as proxy fallbacks.
const PHYSICS_FEATURES = [
  { key: 'work_function_eV',                  from: 'surface'    },
  { key: 'band_gap_eV',                       from: 'root'       },
  { key: 'bulk_modulus_GPa',                  from: 'elasticity' },
  { key: 'shear_modulus_GPa',                 from: 'elasticity' },
  { key: 'density_g_per_cm3',                 from: 'root'       },
  { key: 'weighted_surface_energy_J_per_m2',  from: 'surface'    },
  { key: 'energy_above_hull_eV_per_atom',     from: 'root'       },
] as const;

type Feature = typeof PHYSICS_FEATURES[number]['key'];
type FeatureSource = typeof PHYSICS_FEATURES[number]['from'];

interface MaterialRich {
  slug: string;
  band_gap_eV: number | null;
  density_g_per_cm3: number | null;
  energy_above_hull_eV_per_atom: number | null;
  surface: Record<string, number | null> | null;
  elasticity: Record<string, number | null> | null;
  pourbaix: Record<string, { state: string } | null> | null;
  paper_cross_reference?: {
    paper_count: number;
    system_type_distribution?: Record<string, number>;
  } | null;
}

interface XrefPaper {
  doi: string;
  title?: string;
  year?: string | number;
  system_type?: string;
}

interface XrefSlug {
  paper_count: number;
  papers: XrefPaper[];
}

interface XrefFile {
  per_slug: Record<string, XrefSlug>;
}

interface MaterialsOut {
  schema_version: string;
  generated_at: string;
  source: string;
  slugs: Array<{
    slug: string;
    n_papers: number;
    system_type_distribution: Record<string, number>;
    physics: Partial<Record<Feature, number>>;
    pourbaix: Record<string, string>;
  }>;
  doi_to_slugs: Record<string, string[]>;
  features: Array<{
    key: Feature;
    n_slugs_with_value: number;
    dropped_as_proxy: boolean;
    distinct_values: number;
  }>;
}

function readFeature(mat: MaterialRich, feature: Feature, source: FeatureSource): number | null {
  if (source === 'root') {
    const v = (mat as Record<string, unknown>)[feature];
    return typeof v === 'number' && Number.isFinite(v) ? v : null;
  }
  const sub = (mat as Record<string, unknown>)[source] as Record<string, unknown> | null;
  if (!sub) return null;
  const v = sub[feature];
  return typeof v === 'number' && Number.isFinite(v) ? v : null;
}

function emptyStub(reason: string): MaterialsOut {
  return {
    schema_version: SCHEMA_VERSION,
    generated_at: new Date().toISOString(),
    source: `empty-stub: ${reason}`,
    slugs: [],
    doi_to_slugs: {},
    features: [],
  };
}

function main(): void {
  const richPath = path.join(MATERIALS_DIR, 'mp-materials-rich.json');
  const xrefPath = path.join(MATERIALS_DIR, 'material-paper-crossref.json');

  if (!fs.existsSync(richPath) || !fs.existsSync(xrefPath)) {
    console.log(`[load-materials] MESS-Materials not found at ${MATERIALS_DIR}; emitting empty stub`);
    fs.writeFileSync(OUT_PATH, JSON.stringify(emptyStub('materials dir missing'), null, 2) + '\n', 'utf8');
    return;
  }

  const rich = JSON.parse(fs.readFileSync(richPath, 'utf8')) as { materials: MaterialRich[] };
  const xref = JSON.parse(fs.readFileSync(xrefPath, 'utf8')) as XrefFile;

  // Build per-slug record with all physics features (pre-proxy detection).
  const perSlug = new Map<string, {
    slug: string;
    n_papers: number;
    system_type_distribution: Record<string, number>;
    physics: Partial<Record<Feature, number>>;
    pourbaix: Record<string, string>;
  }>();
  for (const mat of rich.materials) {
    const physics: Partial<Record<Feature, number>> = {};
    for (const { key, from } of PHYSICS_FEATURES) {
      const v = readFeature(mat, key, from);
      if (v != null) physics[key] = v;
    }
    const pour: Record<string, string> = {};
    if (mat.pourbaix) {
      for (const [env, payload] of Object.entries(mat.pourbaix)) {
        if (payload && typeof payload === 'object' && 'state' in payload) {
          pour[env] = String((payload as { state: string }).state);
        }
      }
    }
    perSlug.set(mat.slug, {
      slug: mat.slug,
      n_papers: mat.paper_cross_reference?.paper_count ?? 0,
      system_type_distribution: mat.paper_cross_reference?.system_type_distribution ?? {},
      physics,
      pourbaix: pour,
    });
  }

  // Proxy detection. MP occasionally substitutes a reference entry for a
  // whole family (e.g. graphite for every carbon allotrope), so several
  // slugs end up with an identical non-trivial feature value. Detect:
  //   - ≥ 4 distinct slugs sharing the exact same value
  //   - value is non-trivial (not 0 or 1 — metals legitimately share
  //     band_gap = 0, and a normalized 1 is too common to treat as proxy)
  //   - shared slugs represent ≥ 40 % of the slugs with data for this
  //     feature
  // When flagged, drop only the proxying slugs from this feature; keep
  // the feature and keep other slugs' values.
  const featureReport: MaterialsOut['features'] = [];
  const TRIVIAL = new Set<number>([0, 1]);
  for (const { key } of PHYSICS_FEATURES) {
    const vals: number[] = [];
    for (const slug of perSlug.values()) {
      const v = slug.physics[key];
      if (typeof v === 'number') vals.push(v);
    }
    const counts = new Map<number, number>();
    for (const v of vals) counts.set(v, (counts.get(v) ?? 0) + 1);
    const distinct = counts.size;
    let proxyValue: number | null = null;
    let maxShared = 0;
    for (const [value, count] of counts) {
      if (TRIVIAL.has(value)) continue;
      if (count >= 4 && count >= 0.4 * vals.length && count > maxShared) {
        proxyValue = value;
        maxShared = count;
      }
    }
    const isProxy = proxyValue !== null;
    if (isProxy) {
      for (const slug of perSlug.values()) {
        if (slug.physics[key] === proxyValue) delete slug.physics[key];
      }
    }
    featureReport.push({
      key,
      n_slugs_with_value: vals.length,
      dropped_as_proxy: isProxy,
      distinct_values: distinct,
    });
  }

  // DOI → slug list (one DOI may appear under multiple slugs).
  const doiToSlugs: Record<string, string[]> = {};
  const sourceOfDoi = new Map<string, 'messMaterials' | 'prod'>();
  for (const [slug, payload] of Object.entries(xref.per_slug)) {
    if (!perSlug.has(slug)) continue;
    for (const paper of payload.papers) {
      if (!paper.doi) continue;
      const list = doiToSlugs[paper.doi] ?? [];
      if (!list.includes(slug)) list.push(slug);
      doiToSlugs[paper.doi] = list;
      sourceOfDoi.set(paper.doi, 'messMaterials');
    }
  }
  const baselineDois = Object.keys(doiToSlugs).length;

  // Merge production-aliased DOIs. Curated MESS-Materials wins when a DOI
  // appears in both — if sourceOfDoi already has it, we leave it alone.
  let prodRowsConsidered = 0;
  let prodRowsAliased = 0;
  let prodSlugLinks = 0;
  if (fs.existsSync(PROD_CSV_PATH)) {
    const prodRows = parseCsv(fs.readFileSync(PROD_CSV_PATH, 'utf8'));
    for (const row of prodRows) {
      const doi = (row.doi ?? '').trim();
      if (!doi) continue;
      if (sourceOfDoi.get(doi) === 'messMaterials') continue;
      const tokens = [
        ...parseMaterialCell(row.anodeMaterials ?? ''),
        ...parseMaterialCell(row.cathodeMaterials ?? ''),
      ];
      if (tokens.length === 0) continue;
      prodRowsConsidered += 1;
      const slugs = new Set<string>();
      for (const tok of tokens) {
        const slug = MATERIAL_ALIASES[tok];
        if (slug && perSlug.has(slug)) slugs.add(slug);
      }
      if (slugs.size === 0) continue;
      prodRowsAliased += 1;
      doiToSlugs[doi] = Array.from(slugs);
      prodSlugLinks += slugs.size;
      sourceOfDoi.set(doi, 'prod');
    }
  }

  const out: MaterialsOut = {
    schema_version: SCHEMA_VERSION,
    generated_at: new Date().toISOString(),
    source: path.relative(ROOT, MATERIALS_DIR),
    slugs: Array.from(perSlug.values()).sort((a, b) => b.n_papers - a.n_papers),
    doi_to_slugs: doiToSlugs,
    features: featureReport,
  };

  fs.writeFileSync(OUT_PATH, JSON.stringify(out, null, 2) + '\n', 'utf8');
  console.log(`✓ Wrote ${path.relative(ROOT, OUT_PATH)}`);
  console.log(`  ${out.slugs.length} slugs · ${Object.keys(doiToSlugs).length} DOIs joined`);
  console.log(`    MESS-Materials curated: ${baselineDois}`);
  console.log(`    prod-aliased:           +${prodRowsAliased} (${prodRowsConsidered} rows with tokens, ${prodSlugLinks} slug-DOI links)`);
  for (const f of featureReport) {
    const kept = out.slugs.filter((s) => typeof s.physics[f.key] === 'number').length;
    const tag = f.dropped_as_proxy ? ' (proxy-filtered)' : '';
    console.log(`  ${f.key.padEnd(36)} kept=${String(kept).padStart(2)}/${String(f.n_slugs_with_value).padStart(2)}${tag}`);
  }
}

main();
