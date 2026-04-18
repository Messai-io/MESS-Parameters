import { useMemo, useState } from 'react';
import type { ProvEntry, ProvSource, ProvStats } from '../../../data/provenance';
import { SourcesTable } from './SourcesTable';
import { DistributionHistogram } from './DistributionHistogram';

function computeStatsFromValues(values: number[]): ProvStats | null {
  if (values.length === 0) return null;
  const sorted = [...values].sort((a, b) => a - b);
  const n = sorted.length;
  const quantile = (q: number) => {
    const pos = (n - 1) * q;
    const base = Math.floor(pos);
    const rest = pos - base;
    const next = sorted[base + 1] ?? sorted[base];
    return sorted[base] + rest * (next - sorted[base]);
  };
  const mean = sorted.reduce((s, v) => s + v, 0) / n;
  const variance = n > 1
    ? sorted.reduce((s, v) => s + (v - mean) ** 2, 0) / (n - 1)
    : 0;
  return {
    n,
    min: sorted[0],
    max: sorted[n - 1],
    mean,
    median: quantile(0.5),
    p05: quantile(0.05),
    p25: quantile(0.25),
    p75: quantile(0.75),
    p95: quantile(0.95),
    std: Math.sqrt(variance),
  };
}

function computeHistFromValues(values: number[], bins = 20) {
  if (values.length === 0) return { bins: [], counts: [] };
  const min = Math.min(...values);
  const max = Math.max(...values);
  if (min === max) return { bins: [min, max], counts: [values.length] };
  const width = (max - min) / bins;
  const edges: number[] = [];
  for (let i = 0; i <= bins; i++) edges.push(min + i * width);
  const counts = new Array(bins).fill(0);
  for (const v of values) {
    let idx = Math.floor((v - min) / width);
    if (idx === bins) idx = bins - 1;
    counts[idx]++;
  }
  return { bins: edges, counts };
}

interface Props {
  prov: ProvEntry;
  unit?: string | null;
}

interface Filters {
  systems: Set<string>;
  minConfidence: number;
  verifiedOnly: boolean;
  yearMin: number | null;
  yearMax: number | null;
}

function getYearRange(sources: ProvSource[]): [number, number] | null {
  const years = sources.map((s) => s.year).filter((y): y is number => typeof y === 'number');
  if (years.length === 0) return null;
  return [Math.min(...years), Math.max(...years)];
}

export function SourcesExplorer({ prov, unit }: Props) {
  const allSystems = useMemo(
    () => Array.from(new Set(prov.sources.map((s) => s.system_type))).sort(),
    [prov.sources],
  );
  const yearRange = useMemo(() => getYearRange(prov.sources), [prov.sources]);

  const [filters, setFilters] = useState<Filters>(() => ({
    systems: new Set(allSystems),
    minConfidence: 0,
    verifiedOnly: false,
    yearMin: yearRange?.[0] ?? null,
    yearMax: yearRange?.[1] ?? null,
  }));

  const filtered = useMemo(() => {
    return prov.sources.filter((s) => {
      if (!filters.systems.has(s.system_type)) return false;
      if (s.confidence < filters.minConfidence) return false;
      if (filters.verifiedOnly && !s.verified_mes) return false;
      if (filters.yearMin != null && s.year != null && s.year < filters.yearMin) return false;
      if (filters.yearMax != null && s.year != null && s.year > filters.yearMax) return false;
      return true;
    });
  }, [prov.sources, filters]);

  const activeFilters =
    filters.systems.size !== allSystems.length ||
    filters.minConfidence > 0 ||
    filters.verifiedOnly ||
    (yearRange && (filters.yearMin !== yearRange[0] || filters.yearMax !== yearRange[1]));

  // Build a derived ProvEntry so the histogram recomputes on the filtered set.
  // Note: stats are recomputed over the filtered *sources* (top 200 by
  // confidence), not over all extractions — the full raw set isn't available
  // client-side. The badge "N of M shown" makes this transparent.
  const derivedProv: ProvEntry = useMemo(() => {
    if (!activeFilters) return prov;
    const values = filtered.map((s) => s.value);
    return {
      ...prov,
      sources: filtered,
      stats_global: computeStatsFromValues(values),
      stats_by_system: {},
      distribution: computeHistFromValues(values, 20),
    };
  }, [prov, filtered, activeFilters]);

  function toggleSystem(sys: string) {
    setFilters((f) => {
      const next = new Set(f.systems);
      if (next.has(sys)) next.delete(sys);
      else next.add(sys);
      return { ...f, systems: next };
    });
  }

  function reset() {
    setFilters({
      systems: new Set(allSystems),
      minConfidence: 0,
      verifiedOnly: false,
      yearMin: yearRange?.[0] ?? null,
      yearMax: yearRange?.[1] ?? null,
    });
  }

  return (
    <div className="space-y-4">
      {prov.sources.length > 0 && (
        <div className="border border-gray-200 bg-gray-50 px-4 py-3 text-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-wider text-mes-text-muted">
              Filter sources
            </span>
            <span className="text-mes-text-secondary">
              {filtered.length.toLocaleString()} of {prov.sources.length.toLocaleString()} shown
              {activeFilters && (
                <button
                  onClick={reset}
                  className="ml-3 text-mes-text-link hover:underline"
                >
                  reset
                </button>
              )}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {allSystems.length > 1 && (
              <div className="flex items-center gap-1.5">
                <span className="text-mes-text-muted">System:</span>
                {allSystems.map((s) => (
                  <label key={s} className="flex items-center gap-1 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.systems.has(s)}
                      onChange={() => toggleSystem(s)}
                    />
                    <span>{s}</span>
                  </label>
                ))}
              </div>
            )}

            <div className="flex items-center gap-2">
              <span className="text-mes-text-muted">Min conf.:</span>
              <input
                type="range"
                min={0}
                max={1}
                step={0.05}
                value={filters.minConfidence}
                onChange={(e) =>
                  setFilters((f) => ({ ...f, minConfidence: Number(e.target.value) }))
                }
                className="w-24"
              />
              <span className="font-mono w-8 text-right">{filters.minConfidence.toFixed(2)}</span>
            </div>

            {yearRange && (
              <div className="flex items-center gap-1.5">
                <span className="text-mes-text-muted">Year:</span>
                <input
                  type="number"
                  min={yearRange[0]}
                  max={yearRange[1]}
                  value={filters.yearMin ?? ''}
                  onChange={(e) =>
                    setFilters((f) => ({
                      ...f,
                      yearMin: e.target.value ? Number(e.target.value) : null,
                    }))
                  }
                  className="w-16 border border-gray-200 px-1 py-0.5"
                />
                <span className="text-mes-text-muted">–</span>
                <input
                  type="number"
                  min={yearRange[0]}
                  max={yearRange[1]}
                  value={filters.yearMax ?? ''}
                  onChange={(e) =>
                    setFilters((f) => ({
                      ...f,
                      yearMax: e.target.value ? Number(e.target.value) : null,
                    }))
                  }
                  className="w-16 border border-gray-200 px-1 py-0.5"
                />
              </div>
            )}

            <label className="flex items-center gap-1 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.verifiedOnly}
                onChange={(e) =>
                  setFilters((f) => ({ ...f, verifiedOnly: e.target.checked }))
                }
              />
              <span>Verified MES only</span>
            </label>
          </div>
        </div>
      )}

      <DistributionHistogram prov={derivedProv} unit={unit} />
      <SourcesTable sources={filtered} unit={unit} />
    </div>
  );
}
