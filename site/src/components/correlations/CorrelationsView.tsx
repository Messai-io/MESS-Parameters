import { useEffect, useState } from 'react';
import { getCorrelations, fmtNum, fmtFixed } from '../../data/loader';
import { getProvenanceByIdMap, getProvenanceMeta, type ProvCorrelation } from '../../data/provenance';
import { StatCard } from '../layout/StatCard';
import { Card, CardTitle } from '../../ui/card';
import { CorrelationChart } from './CorrelationChart';
import { CorrelationTable } from './CorrelationTable';

interface PairRow {
  a_id: string;
  a_name: string;
  b_id: string;
  b_name: string;
  r: number;
  n: number;
  p_corrected: number;
  significant: boolean;
}

function nameToSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '_').replace(/[()\/]/g, '').replace(/:/, '');
}

export function CorrelationsView() {
  const data = getCorrelations();
  const all = data.allCorrelations ?? [];
  const summary = data.summary ?? {};
  const top = all[0];
  const moderatePlus =
    (summary.moderate ?? 0) + (summary.strongPositive ?? 0) + (summary.strongNegative ?? 0);

  // Pairwise parameter correlations from provenance sidecar
  const [pairs, setPairs] = useState<PairRow[] | null>(null);
  const [pairMeta, setPairMeta] = useState<{ total: number; alpha: number } | null>(null);
  const [showOnlySignificant, setShowOnlySignificant] = useState(false);

  useEffect(() => {
    let cancelled = false;
    Promise.all([getProvenanceByIdMap(), getProvenanceMeta()])
      .then(([map, meta]) => {
        if (cancelled) return;
        // Deduplicate pairs (each correlation appears twice — once per direction)
        const seen = new Set<string>();
        const rows: PairRow[] = [];
        for (const entry of map.values()) {
          for (const c of entry.correlations as ProvCorrelation[]) {
            const key = [entry.id, c.other_param_id].sort().join('|');
            if (seen.has(key)) continue;
            seen.add(key);
            rows.push({
              a_id: entry.id,
              a_name: entry.name,
              b_id: c.other_param_id,
              b_name: c.other_param_name,
              r: c.pearson_r,
              n: c.n,
              p_corrected: c.p_corrected,
              significant: c.significant,
            });
          }
        }
        rows.sort((x, y) => Math.abs(y.r) - Math.abs(x.r));
        setPairs(rows);
        setPairMeta({
          total: meta.correlations.total_tests,
          alpha: meta.correlations.bonferroni_alpha,
        });
      })
      .catch(() => {
        if (!cancelled) setPairs([]);
      });
    return () => { cancelled = true; };
  }, []);

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-serif font-bold text-mes-text-primary">
          Parameter-Metric Correlations
        </h1>
        <p className="mt-2 text-mes-text-secondary text-sm">
          Pearson correlations computed across {fmtNum(data.totalPapersAnalyzed)} papers.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard label="Total" value={data.totalCorrelations ?? all.length} detail="Correlations tested" />
        <StatCard label="Significant" value={data.significantCorrelations ?? 0} detail="p < 0.05" />
        <StatCard
          label="Top r"
          value={top ? fmtFixed(top.pearsonR) : '—'}
          detail={top ? top.parameter : ''}
        />
        <StatCard
          label="Moderate+"
          value={moderatePlus}
          detail="Moderate or stronger"
        />
      </div>

      <Card padding="sm">
        <CardTitle level={2} className="px-2 pt-2 mb-4">
          Correlation Strengths
        </CardTitle>
        <CorrelationChart correlations={all} />
      </Card>

      <Card padding="none">
        <div className="px-6 py-4 border-b border-gray-200">
          <CardTitle level={2}>All Correlations</CardTitle>
        </div>
        <CorrelationTable correlations={all} />
      </Card>

      {/* Parameter-pair correlations from provenance sidecar */}
      <Card padding="none">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <div>
            <CardTitle level={2}>Parameter-Pair Correlations</CardTitle>
            <p className="text-xs text-mes-text-muted mt-1">
              Pearson r between parameter values across papers reporting both (n ≥ 30). Bonferroni-corrected.
            </p>
          </div>
          {pairMeta && (
            <div className="text-xs text-mes-text-secondary text-right">
              <div>{pairMeta.total.toLocaleString()} pair(s) tested</div>
              <div className="font-mono text-mes-text-muted">α = {pairMeta.alpha.toExponential(2)}</div>
            </div>
          )}
        </div>
        <div className="px-6 py-4">
          {pairs === null ? (
            <div className="text-sm text-mes-text-muted">Loading pair correlations…</div>
          ) : pairs.length === 0 ? (
            <div className="text-sm text-mes-text-muted italic">
              No parameter pair reached the n ≥ 30 threshold for cross-parameter correlation.
              Published extractions rarely report more than one ontology-mapped parameter per paper.
            </div>
          ) : (
            <>
              <div className="mb-3 flex items-center gap-2">
                <label className="flex items-center gap-2 text-xs text-mes-text-secondary cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showOnlySignificant}
                    onChange={(e) => setShowOnlySignificant(e.target.checked)}
                  />
                  Show only Bonferroni-significant
                </label>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead className="border-b border-gray-200 bg-gray-50">
                    <tr>
                      <th className="px-3 py-2 text-left text-[10px] uppercase tracking-wider font-medium text-mes-text-muted">Parameter A</th>
                      <th className="px-3 py-2 text-left text-[10px] uppercase tracking-wider font-medium text-mes-text-muted">Parameter B</th>
                      <th className="px-3 py-2 text-right text-[10px] uppercase tracking-wider font-medium text-mes-text-muted">r</th>
                      <th className="px-3 py-2 text-right text-[10px] uppercase tracking-wider font-medium text-mes-text-muted">n</th>
                      <th className="px-3 py-2 text-right text-[10px] uppercase tracking-wider font-medium text-mes-text-muted">p (corrected)</th>
                      <th className="px-3 py-2 text-left text-[10px] uppercase tracking-wider font-medium text-mes-text-muted">Sig.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pairs
                      .filter((r) => !showOnlySignificant || r.significant)
                      .map((r) => (
                        <tr key={`${r.a_id}|${r.b_id}`} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="px-3 py-2">
                            <a
                              href={`#/parameter/${nameToSlug(r.a_name)}`}
                              className="text-mes-text-link hover:underline"
                            >
                              {r.a_name}
                            </a>
                          </td>
                          <td className="px-3 py-2">
                            <a
                              href={`#/parameter/${nameToSlug(r.b_name)}`}
                              className="text-mes-text-link hover:underline"
                            >
                              {r.b_name}
                            </a>
                          </td>
                          <td className="px-3 py-2 text-right font-mono tabular-nums">{r.r.toFixed(3)}</td>
                          <td className="px-3 py-2 text-right font-mono tabular-nums">{r.n}</td>
                          <td className="px-3 py-2 text-right font-mono tabular-nums">
                            {r.p_corrected.toExponential(2)}
                          </td>
                          <td className="px-3 py-2">
                            {r.significant ? (
                              <span className="inline-block px-1.5 py-0.5 text-[10px] font-medium bg-green-50 text-green-700 border border-green-200">
                                yes
                              </span>
                            ) : (
                              <span className="text-mes-text-muted text-xs">ns</span>
                            )}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </Card>
    </div>
  );
}
