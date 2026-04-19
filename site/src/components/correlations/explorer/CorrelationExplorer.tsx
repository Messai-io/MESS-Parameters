import { useEffect, useMemo, useState } from 'react';
import { Card, CardTitle } from '../../../ui/card';
import { useCorrelationPairs, type Filters } from '../useCorrelationPairs';
import { CorrelationFilters } from './CorrelationFilters';
import { CorrelationMatrix } from './CorrelationMatrix';
import { CorrelationNetwork } from './CorrelationNetwork';
import { CorrelationPairTable } from './CorrelationPairTable';

type ViewMode = 'matrix' | 'network' | 'table';

const DEFAULT_FILTERS: Filters = {
  systemType: 'all',
  categories: new Set<string>(),
  minAbsR: 0,
  minN: 30,
  significantOnly: false,
};

const STORAGE_KEY = 'correlation-explorer-view';

function loadView(): ViewMode {
  if (typeof window === 'undefined') return 'matrix';
  const v = window.sessionStorage?.getItem(STORAGE_KEY);
  if (v === 'matrix' || v === 'network' || v === 'table') return v;
  return 'matrix';
}

export function CorrelationExplorer() {
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);
  const [view, setView] = useState<ViewMode>(loadView);

  useEffect(() => {
    try {
      window.sessionStorage?.setItem(STORAGE_KEY, view);
    } catch {
      /* ignore storage errors */
    }
  }, [view]);

  const result = useCorrelationPairs(filters);
  const { loading, error, pairs, nodes, totalPairs, alpha, systemPaperCount, totalTests } = result;

  const availableCategories = useMemo(() => {
    const set = new Set<string>();
    for (const n of nodes) set.add(n.category);
    return Array.from(set).sort();
  }, [nodes]);

  const handleReset = () => {
    // Keep system type when resetting so users don't lose that context
    setFilters({ ...DEFAULT_FILTERS, systemType: filters.systemType });
  };

  const banner =
    filters.systemType === 'all'
      ? `Using precomputed global correlations. ${totalTests.toLocaleString()} pair(s) tested, α = ${alpha.toExponential(2)}.`
      : systemPaperCount !== null
      ? `Recomputed in-browser over ${systemPaperCount.toLocaleString()} ${filters.systemType} paper(s). ${totalTests.toLocaleString()} pair(s) tested, α = ${alpha.toExponential(2)}.`
      : `Recomputing over ${filters.systemType} subset…`;

  return (
    <Card padding="none">
      <div className="px-6 py-4 border-b border-gray-200 flex items-start justify-between gap-4 flex-wrap">
        <div>
          <CardTitle level={2}>Parameter-Pair Correlation Explorer</CardTitle>
          <p className="text-xs text-mes-text-muted mt-1">
            Pearson & Spearman across parameter values reported in the same paper (n shared ≥ threshold).
            Bonferroni-corrected.
          </p>
        </div>
        <div className="inline-flex border border-gray-300">
          {(['matrix', 'network', 'table'] as ViewMode[]).map((v) => {
            const active = view === v;
            return (
              <button
                key={v}
                type="button"
                onClick={() => setView(v)}
                className={
                  'px-3 py-1.5 text-xs font-mono capitalize border-r last:border-r-0 border-gray-300 transition-colors ' +
                  (active
                    ? 'bg-mes-text-primary text-white'
                    : 'bg-white text-mes-text-secondary hover:bg-gray-50')
                }
              >
                {v}
              </button>
            );
          })}
        </div>
      </div>

      <div className="px-6 py-4">
        <CorrelationFilters
          filters={filters}
          onChange={setFilters}
          availableCategories={availableCategories}
          totalPairs={totalPairs}
          shownPairs={pairs.length}
          onReset={handleReset}
        />

        <div className="mt-3 text-[11px] text-mes-text-muted font-mono">{banner}</div>

        <div className="mt-4">
          {loading ? (
            <div className="py-12 text-sm text-mes-text-muted">Loading correlations…</div>
          ) : error ? (
            <div className="py-12 text-sm text-red-700">Failed to load correlations: {error}</div>
          ) : view === 'matrix' ? (
            <CorrelationMatrix pairs={pairs} nodes={nodes} />
          ) : view === 'network' ? (
            <CorrelationNetwork pairs={pairs} nodes={nodes} />
          ) : (
            <CorrelationPairTable pairs={pairs} />
          )}
        </div>
      </div>
    </Card>
  );
}
