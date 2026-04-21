export interface WithinPairPerTable {
  paperDoi: string;
  paperKey: string;
  tableId: string;
  n_rows: number;
  r: number;
}

export interface WithinPairAggregate {
  a_id: string;
  b_id: string;
  a_name: string;
  b_name: string;
  a_category: string;
  b_category: string;
  n_tables: number;
  total_n_rows: number;
  r_median: number;
  r_p25: number;
  r_p75: number;
  r_p10: number;
  r_p90: number;
  r_abs_median: number;
  positive_fraction: number;
  per_table: WithinPairPerTable[];
}

export interface WithinPaperCorrelationsFile {
  schema_version: string;
  generated_at: string;
  metadata: {
    total_tables: number;
    total_pairs_computed: number;
    pairs_emitted: number;
    min_rows_per_table_pair: number;
    min_tables_per_pair: number;
  };
  pairs: WithinPairAggregate[];
}

let _cache: Promise<WithinPaperCorrelationsFile> | null = null;

export function getWithinPaperCorrelations(): Promise<WithinPaperCorrelationsFile> {
  if (!_cache) {
    _cache = import('@data/within-paper-correlations.json').then(
      (m) => m.default as unknown as WithinPaperCorrelationsFile,
    );
  }
  return _cache;
}
