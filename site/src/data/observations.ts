export interface ObsNumericStats {
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

export interface ObsCitation {
  doi: string | null;
  title: string;
  year: number | null;
  value: number | null;
  extracted_value: string;
  unit: string;
  confidence: number;
}

export interface ParameterObservations {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  canonical_unit: string;
  data_type: string;
  description: string;
  ontology_min: number | null;
  ontology_max: number | null;
  n_observations: number;
  n_papers: number;
  n_verified_mes: number;
  n_numeric: number;
  numeric_stats: ObsNumericStats | null;
  confidence_weighted_mean: number | null;
  units: Record<string, number>;
  system_type_breakdown: Record<string, number>;
  top_citations: ObsCitation[];
}

let _cache: Promise<Map<string, ParameterObservations>> | null = null;

function load(): Promise<ParameterObservations[]> {
  return import('@data/parameter-observations.json').then(
    (m) => m.default as unknown as ParameterObservations[]
  );
}

function getMap(): Promise<Map<string, ParameterObservations>> {
  if (!_cache) {
    _cache = load().then((entries) => {
      const map = new Map<string, ParameterObservations>();
      for (const e of entries) {
        map.set(e.name, e);
        map.set(e.id, e);
      }
      return map;
    });
  }
  return _cache;
}

export function getObservations(nameOrId: string): Promise<ParameterObservations | null> {
  return getMap().then((m) => m.get(nameOrId) ?? null);
}
