export interface ProvStats {
  n: number;
  min: number;
  max: number;
  mean: number;
  median: number;
  p05: number;
  p25: number;
  p75: number;
  p95: number;
  std: number;
  mad: number;
  iqr: number;
  n_outliers: number;
}

// Extended scientific-context fields carried through from the local-PDF
// extractor. All optional and nullable; DB-derived sources have them null.
export interface ProvSourceContext {
  // Observation-specific
  value_type?: string;
  is_normalized_to?: string;
  uncertainty?: { value: number; type: string };
  replicates?: number;
  measurement_technique?: string;
  location_hint?: string;
  // Measurement conditions (observation-level or inherited from paper context)
  temperature_c?: number;
  ph?: number;
  substrate?: string;
  substrate_concentration?: string;
  inoculum?: string;
  electrolyte?: string;
  operation_mode?: string;
  conductivity_ms_cm?: number;
  dissolved_oxygen_mg_l?: number;
  // System configuration (paper-level)
  reactor_configuration?: string;
  reactor_volume_ml?: number;
  anode_material?: string;
  cathode_material?: string;
  membrane?: string;
  electrode_surface_area_cm2?: number;
  electrode_spacing_cm?: number;
  // Microbial context
  dominant_organism?: string;
  is_pure_culture?: boolean;
  pretreatment?: string;
  // Allow unknown keys so schema can grow without TS breaks
  [k: string]: unknown;
}

export interface ProvSource {
  doi: string;
  title: string;
  year: number | null;
  journal: string | null;
  system_type: string;
  value: number;
  unit: string;
  confidence: number;
  extraction_method: string;
  source_section: string;
  verified: boolean;
  verified_mes: boolean;
  reproducibility_score: number | null;
  // Parsed from the snippet field by scripts/parse-uncertainty.ts.
  // Optional — not present on sources built before the uncertainty
  // overlay landed, and not every snippet yields a parseable pattern.
  uncertainty_abs?: number | null;
  uncertainty_rel_pct?: number | null;
  uncertainty_kind?: string | null;
  snippet: string | null;
  context: ProvSourceContext | null;
}

export interface ProvCorrelation {
  other_param_id: string;
  other_param_name: string;
  pearson_r: number;
  pearson_r_log?: number | null;
  spearman_rho: number | null;
  n: number;
  n_eff?: number;
  p_corrected: number;
  significant: boolean;
}

export interface ProvEntry {
  id: string;
  name: string;
  n_papers: number;
  n_values: number;
  n_verified: number;
  mean_confidence: number;
  stats_global: ProvStats | null;
  stats_by_system: Record<string, ProvStats>;
  distribution: { bins: number[]; counts: number[] };
  sources: ProvSource[];
  correlations: ProvCorrelation[];
}

export interface ProvenanceFile {
  metadata: {
    schema_version: string;
    generated_at: string;
    generator: string;
    thresholds: Record<string, number>;
    correlations: { total_tests: number; bh_q_threshold: number };
    counts: { parameters_with_provenance: number; total_sources: number };
  };
  parameters: ProvEntry[];
}

// Dynamic import — code-split so the catalog first-paint doesn't load it.
let _cache: Promise<Map<string, ProvEntry>> | null = null;
let _meta: Promise<ProvenanceFile['metadata']> | null = null;

function load(): Promise<ProvenanceFile> {
  return import('@data/parameter-provenance.json').then(
    (m) => m.default as unknown as ProvenanceFile
  );
}

export function getProvenanceByIdMap(): Promise<Map<string, ProvEntry>> {
  if (!_cache) {
    _cache = load().then((f) => {
      const map = new Map<string, ProvEntry>();
      for (const e of f.parameters) map.set(e.id, e);
      return map;
    });
  }
  return _cache;
}

export function getProvenanceMeta(): Promise<ProvenanceFile['metadata']> {
  if (!_meta) _meta = load().then((f) => f.metadata);
  return _meta;
}

export function getProvenance(id: string): Promise<ProvEntry | null> {
  return getProvenanceByIdMap().then((m) => m.get(id) ?? null);
}
