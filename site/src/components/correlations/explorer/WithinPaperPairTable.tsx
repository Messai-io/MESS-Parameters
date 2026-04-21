import { Fragment, useEffect, useMemo, useState } from 'react';
import { getWithinPaperCorrelations, type WithinPairAggregate } from '../../../data/withinPaperCorrelations';
import { nameToSlug } from '../useCorrelationPairs';

interface Props {
  minTables: number;
  minAbsMedianR: number;
  categoryFilter: Set<string>;
}

function signColor(r: number): string {
  return r > 0 ? '#5C7A5C' : r < 0 ? '#6B3E3E' : '#7C7F82';
}

// Render a horizontal r-distribution strip: p10/p25/median/p75/p90
// mapped onto the [-1, 1] axis. Median is a darker tick.
function DistributionStrip({ pair, width = 160 }: { pair: WithinPairAggregate; width?: number }) {
  const h = 18;
  const toX = (r: number) => ((r + 1) / 2) * width;
  const zeroX = toX(0);
  return (
    <svg width={width} height={h} role="img" aria-label="r distribution">
      {/* axis */}
      <line x1={0} x2={width} y1={h / 2} y2={h / 2} stroke="#E5E5E5" strokeWidth={1} />
      <line x1={zeroX} x2={zeroX} y1={2} y2={h - 2} stroke="#CBCBCB" strokeWidth={1} />
      {/* p10-p90 thin */}
      <rect x={toX(pair.r_p10)} y={h / 2 - 2} width={Math.max(1, toX(pair.r_p90) - toX(pair.r_p10))} height={4} fill={signColor(pair.r_median)} fillOpacity={0.25} />
      {/* IQR thick */}
      <rect x={toX(pair.r_p25)} y={h / 2 - 4} width={Math.max(1, toX(pair.r_p75) - toX(pair.r_p25))} height={8} fill={signColor(pair.r_median)} fillOpacity={0.55} />
      {/* median tick */}
      <line x1={toX(pair.r_median)} x2={toX(pair.r_median)} y1={h / 2 - 6} y2={h / 2 + 6} stroke={signColor(pair.r_median)} strokeWidth={2} />
    </svg>
  );
}

function ExpandedPerTable({ pair }: { pair: WithinPairAggregate }) {
  return (
    <div className="bg-gray-50 border-l-2 border-[#3C5A7A] px-4 py-2 text-xs">
      <div className="text-[10px] uppercase tracking-wider text-mes-text-muted mb-1">
        Per-paper correlations ({pair.n_tables} tables)
      </div>
      <div className="grid grid-cols-[1fr_80px_50px] gap-x-3 gap-y-0.5 font-mono tabular-nums">
        {pair.per_table.map((t, i) => (
          <Fragment key={`${t.paperKey}-${t.tableId}-${i}`}>
            <a
              href={t.paperDoi ? `https://doi.org/${t.paperDoi}` : '#'}
              target="_blank"
              rel="noreferrer"
              className="text-mes-text-link hover:underline truncate"
              title={t.paperDoi || t.paperKey}
            >
              {t.paperDoi || t.paperKey.slice(0, 16) + '…'}
            </a>
            <span className="text-right" style={{ color: signColor(t.r) }}>
              r = {t.r.toFixed(3)}
            </span>
            <span className="text-right text-mes-text-muted">n={t.n_rows}</span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export function WithinPaperPairTable({ minTables, minAbsMedianR, categoryFilter }: Props) {
  const [data, setData] = useState<WithinPairAggregate[] | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    getWithinPaperCorrelations()
      .then((f) => {
        if (!cancelled) setData(f.pairs);
      })
      .catch((e) => {
        if (!cancelled) setErr(String(e));
      });
    return () => { cancelled = true; };
  }, []);

  const filtered = useMemo(() => {
    if (!data) return [];
    return data.filter((p) => {
      if (p.n_tables < minTables) return false;
      if (Math.abs(p.r_median) < minAbsMedianR) return false;
      if (categoryFilter.size > 0) {
        const inCat = categoryFilter.has(p.a_category) || categoryFilter.has(p.b_category);
        if (!inCat) return false;
      }
      return true;
    });
  }, [data, minTables, minAbsMedianR, categoryFilter]);

  if (err) return <div className="py-12 text-sm text-red-700">Failed to load within-paper index: {err}</div>;
  if (!data) return <div className="py-12 text-sm text-mes-text-muted">Loading within-paper correlations…</div>;
  if (filtered.length === 0) {
    return (
      <div className="py-12 text-center text-sm text-mes-text-muted italic">
        No within-paper pairs meet the current filters.
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className="text-[11px] text-mes-text-muted font-mono">
        Each row aggregates Pearson r computed on a single table's rows, across multiple papers. The
        distribution strip shows p10–p90 (light), IQR (darker), and the median (tick). Consistent
        positive pairs ({'>'}90 % of papers agree on sign) are where physics travels unchanged from
        paper to paper.
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead className="border-b border-gray-200 bg-gray-50">
            <tr>
              <th className="px-3 py-2 text-left text-[10px] uppercase tracking-wider font-medium text-mes-text-muted">Parameter A</th>
              <th className="px-3 py-2 text-left text-[10px] uppercase tracking-wider font-medium text-mes-text-muted">Parameter B</th>
              <th className="px-3 py-2 text-right text-[10px] uppercase tracking-wider font-medium text-mes-text-muted" title="Number of papers whose tables yielded a computable Pearson r for this pair">tables</th>
              <th className="px-3 py-2 text-right text-[10px] uppercase tracking-wider font-medium text-mes-text-muted" title="Total number of row observations across all tables">rows</th>
              <th className="px-3 py-2 text-right text-[10px] uppercase tracking-wider font-medium text-mes-text-muted" title="Median Pearson r across tables">median r</th>
              <th className="px-3 py-2 text-left text-[10px] uppercase tracking-wider font-medium text-mes-text-muted" title="p10–p90 thin, IQR thick, median tick">distribution</th>
              <th className="px-3 py-2 text-right text-[10px] uppercase tracking-wider font-medium text-mes-text-muted" title="Share of tables where r > 0 (sign agreement across papers)">+%</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) => {
              const key = `${p.a_id}|${p.b_id}`;
              const isExpanded = expanded === key;
              return (
                <Fragment key={key}>
                  <tr
                    className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
                    onClick={() => setExpanded(isExpanded ? null : key)}
                  >
                    <td className="px-3 py-2">
                      <a
                        href={`#/parameter/${nameToSlug(p.a_name)}`}
                        onClick={(e) => e.stopPropagation()}
                        className="text-mes-text-link hover:underline"
                      >
                        {p.a_name}
                      </a>
                    </td>
                    <td className="px-3 py-2">
                      <a
                        href={`#/parameter/${nameToSlug(p.b_name)}`}
                        onClick={(e) => e.stopPropagation()}
                        className="text-mes-text-link hover:underline"
                      >
                        {p.b_name}
                      </a>
                    </td>
                    <td className="px-3 py-2 text-right font-mono tabular-nums">{p.n_tables}</td>
                    <td className="px-3 py-2 text-right font-mono tabular-nums text-mes-text-secondary">{p.total_n_rows}</td>
                    <td className="px-3 py-2 text-right font-mono tabular-nums" style={{ color: signColor(p.r_median) }}>
                      {p.r_median >= 0 ? '+' : ''}{p.r_median.toFixed(3)}
                    </td>
                    <td className="px-3 py-2">
                      <DistributionStrip pair={p} />
                    </td>
                    <td className="px-3 py-2 text-right font-mono tabular-nums text-mes-text-secondary">
                      {(p.positive_fraction * 100).toFixed(0)}%
                    </td>
                  </tr>
                  {isExpanded && (
                    <tr>
                      <td colSpan={7} className="p-0">
                        <ExpandedPerTable pair={p} />
                      </td>
                    </tr>
                  )}
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
