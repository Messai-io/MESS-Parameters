import { useState, useMemo } from 'react';
import type { ProvSource } from '../../../data/provenance';
import { isDoi, doiUrl } from '../../../lib/doi';
import { SystemTag, VerdictTag } from '../../../ui/tags';

interface Props {
  sources: ProvSource[];
  unit?: string | null;
}

const PAGE_SIZE = 25;

type SortKey = 'confidence' | 'year' | 'system_type' | 'value' | 'reproducibility_score';
type SortDir = 'asc' | 'desc';

function ConfidenceBar({ value }: { value: number }) {
  const pct = Math.max(0, Math.min(1, value)) * 100;
  const color = pct >= 80 ? 'bg-green-600' : pct >= 50 ? 'bg-amber-500' : 'bg-gray-400';
  return (
    <div className="flex items-center gap-2">
      <div className="w-16 h-1.5 bg-gray-100">
        <div className={`h-full ${color}`} style={{ width: `${pct}%` }} />
      </div>
      <span className="text-xs font-mono text-mes-text-secondary tabular-nums">
        {value.toFixed(2)}
      </span>
    </div>
  );
}

function DoiCell({ source }: { source: ProvSource }) {
  if (!source.doi) return <span className="text-mes-text-muted">—</span>;
  if (isDoi(source.doi)) {
    return (
      <a
        href={doiUrl(source.doi)}
        target="_blank"
        rel="noopener noreferrer"
        className="text-mes-text-link hover:underline font-mono text-xs break-all"
      >
        {source.doi}
      </a>
    );
  }
  // non-DOI (e.g. PMID, internal id) — display without link
  return <span className="font-mono text-xs text-mes-text-secondary break-all">{source.doi}</span>;
}

export function SourcesTable({ sources, unit }: Props) {
  const [page, setPage] = useState(0);
  const [sortKey, setSortKey] = useState<SortKey>('confidence');
  const [sortDir, setSortDir] = useState<SortDir>('desc');

  const sorted = useMemo(() => {
    const out = [...sources];
    out.sort((a, b) => {
      let av: number | string;
      let bv: number | string;
      switch (sortKey) {
        case 'confidence': av = a.confidence; bv = b.confidence; break;
        case 'year': av = a.year ?? 0; bv = b.year ?? 0; break;
        case 'system_type': av = a.system_type; bv = b.system_type; break;
        case 'value': av = a.value; bv = b.value; break;
        case 'reproducibility_score':
          av = a.reproducibility_score ?? -1;
          bv = b.reproducibility_score ?? -1;
          break;
      }
      if (typeof av === 'string' && typeof bv === 'string') {
        return sortDir === 'asc' ? av.localeCompare(bv) : bv.localeCompare(av);
      }
      const an = Number(av); const bn = Number(bv);
      return sortDir === 'asc' ? an - bn : bn - an;
    });
    return out;
  }, [sources, sortKey, sortDir]);

  const pageCount = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const safePage = Math.min(page, pageCount - 1);
  const pageRows = sorted.slice(safePage * PAGE_SIZE, (safePage + 1) * PAGE_SIZE);

  function toggleSort(k: SortKey) {
    if (sortKey === k) setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    else { setSortKey(k); setSortDir('desc'); }
  }

  const header = (label: string, k: SortKey, align: 'left' | 'right' = 'left') => (
    <th
      className={`px-3 py-2 text-[10px] uppercase tracking-wider font-medium text-mes-text-muted cursor-pointer hover:text-mes-text-primary select-none ${align === 'right' ? 'text-right' : 'text-left'}`}
      onClick={() => toggleSort(k)}
    >
      {label}
      {sortKey === k && <span className="ml-1">{sortDir === 'asc' ? '↑' : '↓'}</span>}
    </th>
  );

  if (sources.length === 0) {
    return (
      <div className="text-sm text-mes-text-muted italic">
        No sources with a citable DOI were found for this parameter.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead className="border-b border-gray-200 bg-gray-50">
            <tr>
              <th className="px-3 py-2 text-left text-[10px] uppercase tracking-wider font-medium text-mes-text-muted">
                DOI / Paper
              </th>
              {header('Year', 'year', 'right')}
              {header('System', 'system_type')}
              {header(`Value${unit ? ` (${unit})` : ''}`, 'value', 'right')}
              {header('Confidence', 'confidence', 'right')}
              {header('Reproducibility', 'reproducibility_score', 'right')}
              <th className="px-3 py-2 text-left text-[10px] uppercase tracking-wider font-medium text-mes-text-muted">
                Verified
              </th>
            </tr>
          </thead>
          <tbody>
            {pageRows.map((s, i) => (
              <tr
                key={`${s.doi}-${s.value}-${i}`}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="px-3 py-2 max-w-md">
                  <DoiCell source={s} />
                  {s.title && (
                    <div className="text-xs text-mes-text-muted mt-0.5 line-clamp-1" title={s.title}>
                      {s.title}
                    </div>
                  )}
                </td>
                <td className="px-3 py-2 text-right font-mono text-xs text-mes-text-secondary tabular-nums">
                  {s.year ?? '—'}
                </td>
                <td className="px-3 py-2">
                  <SystemTag type={s.system_type} size="sm" />
                </td>
                <td className="px-3 py-2 text-right font-mono text-xs tabular-nums">
                  {s.value}
                  {s.uncertainty_abs != null ? (
                    <span className="text-mes-text-muted ml-1" title={`${s.uncertainty_kind ?? 'uncertainty'}${s.uncertainty_rel_pct != null ? ` · ±${s.uncertainty_rel_pct.toFixed(1)}%` : ''}`}>
                      ± {s.uncertainty_abs}
                    </span>
                  ) : null}
                </td>
                <td className="px-3 py-2 text-right">
                  <ConfidenceBar value={s.confidence} />
                </td>
                <td className="px-3 py-2 text-right">
                  {s.reproducibility_score == null ? (
                    <span className="text-mes-text-muted text-xs">—</span>
                  ) : (
                    <ConfidenceBar value={s.reproducibility_score} />
                  )}
                </td>
                <td className="px-3 py-2">
                  {s.verified_mes ? (
                    <VerdictTag verdict="PASS" size="sm" />
                  ) : (
                    <span className="text-xs text-mes-text-muted">—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {pageCount > 1 && (
        <div className="flex items-center justify-between text-xs text-mes-text-secondary">
          <span>
            Showing {safePage * PAGE_SIZE + 1}–
            {Math.min((safePage + 1) * PAGE_SIZE, sorted.length)} of {sorted.length}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => setPage(Math.max(0, safePage - 1))}
              disabled={safePage === 0}
              className="px-2 py-1 border border-gray-200 disabled:opacity-50 hover:bg-gray-50"
            >
              ← Prev
            </button>
            <span className="px-2 py-1 font-mono">
              {safePage + 1} / {pageCount}
            </span>
            <button
              onClick={() => setPage(Math.min(pageCount - 1, safePage + 1))}
              disabled={safePage >= pageCount - 1}
              className="px-2 py-1 border border-gray-200 disabled:opacity-50 hover:bg-gray-50"
            >
              Next →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
