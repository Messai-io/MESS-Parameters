import type { Filters, SystemType } from '../useCorrelationPairs';
import { categoryLabels } from '../../../styles/category-colors';

interface Props {
  filters: Filters;
  onChange: (next: Filters) => void;
  availableCategories: string[];
  totalPairs: number;
  shownPairs: number;
  onReset: () => void;
}

const SYSTEM_TYPES: SystemType[] = ['all', 'MFC', 'MEC', 'MDC', 'BES'];

const SYSTEM_LABELS: Record<SystemType, string> = {
  all: 'All systems',
  MFC: 'MFC',
  MEC: 'MEC',
  MDC: 'MDC',
  BES: 'BES',
};

export function CorrelationFilters({
  filters,
  onChange,
  availableCategories,
  totalPairs,
  shownPairs,
  onReset,
}: Props) {
  const toggleCategory = (cat: string) => {
    const next = new Set(filters.categories);
    if (next.has(cat)) next.delete(cat);
    else next.add(cat);
    onChange({ ...filters, categories: next });
  };

  return (
    <div className="space-y-4 border-b border-gray-200 pb-4">
      <div className="flex flex-wrap items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="text-[10px] uppercase tracking-wider text-mes-text-muted">System type</span>
          <div className="inline-flex border border-gray-300">
            {SYSTEM_TYPES.map((t) => {
              const active = filters.systemType === t;
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => onChange({ ...filters, systemType: t })}
                  className={
                    'px-3 py-1 text-xs font-mono border-r last:border-r-0 border-gray-300 transition-colors ' +
                    (active
                      ? 'bg-mes-text-primary text-white'
                      : 'bg-white text-mes-text-secondary hover:bg-gray-50')
                  }
                >
                  {SYSTEM_LABELS[t]}
                </button>
              );
            })}
          </div>
        </div>

        <label className="flex items-center gap-2 text-xs text-mes-text-secondary">
          <span className="uppercase tracking-wider text-[10px] text-mes-text-muted">|r| ≥</span>
          <input
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={filters.minAbsR}
            onChange={(e) => onChange({ ...filters, minAbsR: parseFloat(e.target.value) })}
            className="w-28"
          />
          <span className="font-mono tabular-nums w-10 text-right">{filters.minAbsR.toFixed(2)}</span>
        </label>

        <label className="flex items-center gap-2 text-xs text-mes-text-secondary">
          <span className="uppercase tracking-wider text-[10px] text-mes-text-muted">n ≥</span>
          <input
            type="range"
            min={3}
            max={100}
            step={1}
            value={filters.minN}
            onChange={(e) => onChange({ ...filters, minN: parseInt(e.target.value, 10) })}
            className="w-28"
          />
          <span className="font-mono tabular-nums w-8 text-right">{filters.minN}</span>
        </label>

        <label className="flex items-center gap-2 text-xs text-mes-text-secondary cursor-pointer">
          <input
            type="checkbox"
            checked={filters.significantOnly}
            onChange={(e) => onChange({ ...filters, significantOnly: e.target.checked })}
          />
          Bonferroni-significant only
        </label>

        <div className="ml-auto flex items-center gap-3 text-xs text-mes-text-muted">
          <span>
            <span className="font-mono tabular-nums text-mes-text-primary">{shownPairs}</span>{' '}
            of <span className="font-mono tabular-nums">{totalPairs}</span> pair{totalPairs === 1 ? '' : 's'}
          </span>
          <button
            type="button"
            onClick={onReset}
            className="text-mes-text-link hover:underline"
          >
            Reset
          </button>
        </div>
      </div>

      {availableCategories.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[10px] uppercase tracking-wider text-mes-text-muted mr-1">
            Categories
          </span>
          {availableCategories.map((cat) => {
            const active = filters.categories.has(cat);
            return (
              <button
                key={cat}
                type="button"
                onClick={() => toggleCategory(cat)}
                className={
                  'text-[11px] font-mono px-2 py-0.5 border transition-colors ' +
                  (active
                    ? 'bg-mes-text-primary text-white border-mes-text-primary'
                    : 'bg-white text-mes-text-secondary border-gray-300 hover:bg-gray-50')
                }
              >
                {categoryLabels[cat] ?? cat}
              </button>
            );
          })}
          {filters.categories.size > 0 && (
            <button
              type="button"
              onClick={() => onChange({ ...filters, categories: new Set() })}
              className="text-[11px] text-mes-text-link hover:underline"
            >
              clear
            </button>
          )}
        </div>
      )}
    </div>
  );
}
