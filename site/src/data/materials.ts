import type { ProvEntry, ProvSource } from './provenance';

export interface MaterialSlug {
  slug: string;
  n_papers: number;
  system_type_distribution: Record<string, number>;
  physics: Partial<Record<string, number>>;
  pourbaix: Record<string, string>;
}

export interface MaterialsFile {
  schema_version: string;
  generated_at: string;
  source: string;
  slugs: MaterialSlug[];
  doi_to_slugs: Record<string, string[]>;
  features: Array<{
    key: string;
    n_slugs_with_value: number;
    dropped_as_proxy: boolean;
    distinct_values: number;
  }>;
}

let _cache: Promise<MaterialsFile> | null = null;

export function getMaterials(): Promise<MaterialsFile> {
  if (!_cache) {
    _cache = import('@data/materials.json').then((m) => m.default as unknown as MaterialsFile);
  }
  return _cache;
}

// Derived DOI → slug[] index. Materials file stores the map directly; exposing
// a Map helper for ergonomic consumers.
export async function getDoiSlugMap(): Promise<Map<string, string[]>> {
  const f = await getMaterials();
  const m = new Map<string, string[]>();
  for (const [doi, slugs] of Object.entries(f.doi_to_slugs)) m.set(doi, slugs);
  return m;
}

// Synthetic physics pseudo-parameter: one per feature. The value at each DOI
// is the average feature value across the materials that DOI cites (when the
// DOI cites multiple). Only DOIs whose slugs all carry the feature are
// included; partial coverage would introduce per-paper bias.
//
// These entries reuse the ProvEntry shape so they flow through the same
// correlation machinery (weighted Pearson, BH-FDR, log-r) as real parameter
// entries. The id is prefixed `physics__` so the UI can easily tag them.
export function buildPhysicsEntries(materials: MaterialsFile): ProvEntry[] {
  const bySlug = new Map(materials.slugs.map((s) => [s.slug, s]));
  const entries: ProvEntry[] = [];

  for (const feat of materials.features) {
    // Skip features where we have < 3 distinct values — correlation is meaningless.
    const slugsWithValue = materials.slugs.filter((s) => typeof s.physics[feat.key] === 'number');
    if (slugsWithValue.length < 3) continue;

    // Collect (doi, value) rows: for each DOI, average the feature across the
    // DOI's slugs that carry the value.
    const sources: ProvSource[] = [];
    for (const [doi, slugs] of Object.entries(materials.doi_to_slugs)) {
      const vs: number[] = [];
      const sysCounts = new Map<string, number>();
      for (const slug of slugs) {
        const entry = bySlug.get(slug);
        if (!entry) continue;
        const v = entry.physics[feat.key];
        if (typeof v === 'number') vs.push(v);
        for (const [sys, n] of Object.entries(entry.system_type_distribution)) {
          sysCounts.set(sys, (sysCounts.get(sys) ?? 0) + n);
        }
      }
      if (vs.length === 0) continue;
      const avg = vs.reduce((s, v) => s + v, 0) / vs.length;
      // Dominant system type for this paper (best guess from slug distribution).
      let bestSys = 'UNSPECIFIED';
      let bestCount = 0;
      for (const [sys, n] of sysCounts) {
        if (n > bestCount) { bestSys = sys; bestCount = n; }
      }
      sources.push({
        doi,
        title: `[physics:${feat.key}] @ ${slugs.join(',')}`,
        year: null,
        journal: null,
        system_type: bestSys,
        value: avg,
        unit: '',
        confidence: 0.9,
        extraction_method: 'mp-materials',
        source_section: 'physics',
        verified: false,
        verified_mes: false,
        // Physics scalars are direct Materials Project computations; treat
        // them as max-trust so they don't drag the weighted correlation down.
        reproducibility_score: 1,
        snippet: null,
        context: null,
      });
    }
    if (sources.length < 3) continue;

    entries.push({
      id: `physics__${feat.key}`,
      name: feat.key,
      n_papers: sources.length,
      n_values: sources.length,
      n_verified: 0,
      mean_confidence: 0.9,
      stats_global: null,
      stats_by_system: {},
      distribution: { bins: [], counts: [] },
      sources,
      correlations: [],
    });
  }

  return entries;
}

// Which feature keys should be rendered under 'material_physics' category.
export function isPhysicsEntryId(id: string): boolean {
  return id.startsWith('physics__');
}

export function physicsFeatureName(id: string): string | null {
  return id.startsWith('physics__') ? id.slice('physics__'.length) : null;
}
