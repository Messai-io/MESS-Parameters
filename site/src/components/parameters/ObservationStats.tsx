import type { ParameterObservations } from '../../data/observations';

function fmt(n: number, digits = 3): string {
  if (!Number.isFinite(n)) return '—';
  const abs = Math.abs(n);
  if (abs >= 10000) return n.toLocaleString(undefined, { maximumFractionDigits: 0 });
  if (abs >= 100) return n.toLocaleString(undefined, { maximumFractionDigits: 1 });
  return n.toLocaleString(undefined, { maximumFractionDigits: digits });
}

const SYSTEM_COLORS: Record<string, string> = {
  MFC: '#2563eb',
  MEC: '#16a34a',
  BES: '#9333ea',
  MDC: '#ea580c',
  MES: '#737373',
};

interface Props {
  obs: ParameterObservations;
}

export function ObservationStats({ obs }: Props) {
  const { n_observations, n_papers, n_verified_mes, n_numeric, numeric_stats,
          confidence_weighted_mean, units, system_type_breakdown, top_citations,
          canonical_unit } = obs;

  const primaryUnit = Object.keys(units)[0] ?? canonical_unit ?? '';
  const totalSys = Object.values(system_type_breakdown).reduce((s, v) => s + v, 0);

  return (
    <div className="space-y-4">
      {/* Summary counts */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: 'Observations', value: n_observations.toLocaleString() },
          { label: 'Unique Papers', value: n_papers.toLocaleString() },
          { label: 'Verified MES', value: n_verified_mes.toLocaleString() },
        ].map(({ label, value }) => (
          <div key={label} className="text-center border border-gray-200 py-2 px-1">
            <div className="text-xs text-mes-text-muted uppercase tracking-wider">{label}</div>
            <div className="text-base font-medium text-mes-text-primary mt-0.5">{value}</div>
          </div>
        ))}
      </div>

      {/* Numeric stats */}
      {numeric_stats && n_numeric > 0 && (
        <div>
          <div className="text-xs text-mes-text-muted uppercase tracking-wider mb-2">
            Numeric Distribution ({n_numeric.toLocaleString()} measurements)
          </div>
          <div className="border border-gray-200 divide-y divide-gray-100">
            <StatRow label="Median" value={`${fmt(numeric_stats.median)} ${primaryUnit}`} />
            <StatRow label="IQR (p25–p75)" value={`${fmt(numeric_stats.p25)} – ${fmt(numeric_stats.p75)} ${primaryUnit}`} />
            <StatRow label="Full range" value={`${fmt(numeric_stats.min)} – ${fmt(numeric_stats.max)} ${primaryUnit}`} />
            {confidence_weighted_mean !== null && (
              <StatRow label="Conf-weighted mean" value={`${fmt(confidence_weighted_mean)} ${primaryUnit}`} />
            )}
            {numeric_stats.n_outliers > 0 && (
              <StatRow
                label="Outliers (1.5×IQR)"
                value={`${numeric_stats.n_outliers} of ${n_numeric}`}
                muted
              />
            )}
          </div>
          {Object.keys(units).length > 1 && (
            <div className="mt-1 text-[10px] text-mes-text-muted">
              Units in corpus:{' '}
              {Object.entries(units).slice(0, 4).map(([u, c]) => `${u} (${c})`).join(', ')}
            </div>
          )}
        </div>
      )}

      {/* System type breakdown */}
      {totalSys > 0 && (
        <div>
          <div className="text-xs text-mes-text-muted uppercase tracking-wider mb-2">
            By System Type
          </div>
          <div className="space-y-1.5">
            {Object.entries(system_type_breakdown).map(([sys, count]) => {
              const pct = totalSys > 0 ? (count / totalSys) * 100 : 0;
              const color = SYSTEM_COLORS[sys] ?? '#a1a1aa';
              return (
                <div key={sys} className="flex items-center gap-2">
                  <span className="text-xs text-mes-text-secondary w-8 flex-shrink-0">{sys}</span>
                  <div className="flex-1 h-1.5 bg-gray-100 overflow-hidden">
                    <div
                      className="h-full"
                      style={{ width: `${pct}%`, backgroundColor: color }}
                    />
                  </div>
                  <span className="text-xs text-mes-text-muted w-6 text-right">{count}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Top citations */}
      {top_citations.length > 0 && (
        <div>
          <div className="text-xs text-mes-text-muted uppercase tracking-wider mb-2">
            Top Citations by Confidence
          </div>
          <div className="space-y-2">
            {top_citations.map((c, i) => (
              <div key={i} className="border-l-2 border-gray-200 pl-2">
                <div className="text-xs text-mes-text-secondary leading-snug line-clamp-2">
                  {c.doi ? (
                    <a
                      href={`https://doi.org/${c.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-mes-text-link hover:underline"
                    >
                      {c.title || c.doi}
                    </a>
                  ) : (
                    <span>{c.title || '(untitled)'}</span>
                  )}
                  {c.year && <span className="text-mes-text-muted ml-1">({c.year})</span>}
                </div>
                <div className="text-[10px] text-mes-text-muted mt-0.5 font-mono">
                  {c.value !== null ? `${fmt(c.value)} ${c.unit}` : c.extracted_value || '—'}
                  <span className="ml-2 text-gray-400">conf {c.confidence.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function StatRow({ label, value, muted }: { label: string; value: string; muted?: boolean }) {
  return (
    <div className="flex items-baseline justify-between px-2 py-1.5">
      <span className="text-xs text-mes-text-muted">{label}</span>
      <span className={`text-xs font-mono ${muted ? 'text-mes-text-muted' : 'text-mes-text-primary'}`}>
        {value}
      </span>
    </div>
  );
}
