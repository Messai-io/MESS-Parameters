import { getCorrelations, fmtNum, fmtFixed } from '../../data/loader';
import { StatCard } from '../layout/StatCard';
import { Card, CardTitle } from '../../ui/card';
import { CorrelationChart } from './CorrelationChart';
import { CorrelationTable } from './CorrelationTable';
import { CorrelationExplorer } from './explorer/CorrelationExplorer';

export function CorrelationsView() {
  const data = getCorrelations();
  const all = data.allCorrelations ?? [];
  const summary = data.summary ?? {};
  const top = all[0];
  const moderatePlus =
    (summary.moderate ?? 0) + (summary.strongPositive ?? 0) + (summary.strongNegative ?? 0);

  return (
    <div className="space-y-5 animate-fade-in">
      <div>
        <h1 className="text-2xl font-serif font-bold text-mes-text-primary leading-tight">
          Parameter-Metric Correlations
        </h1>
        <p className="mt-1 text-mes-text-secondary text-sm leading-relaxed">
          Pearson correlations computed across {fmtNum(data.totalPapersAnalyzed)} papers.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <StatCard dense label="Total" value={data.totalCorrelations ?? all.length} detail="Tested" />
        <StatCard dense label="Significant" value={data.significantCorrelations ?? 0} detail="p < 0.05" />
        <StatCard
          dense
          label="Top r"
          value={top ? fmtFixed(top.pearsonR) : '—'}
          detail={top ? top.parameter : ''}
        />
        <StatCard dense label="Moderate+" value={moderatePlus} detail="Moderate or stronger" />
      </div>

      {/* Lead chart — above the fold */}
      <Card padding="none">
        <div className="px-4 pt-3 pb-1 flex items-baseline justify-between">
          <CardTitle level={3} className="!text-base">Correlation Strengths</CardTitle>
          <span className="text-[10px] uppercase tracking-wider text-mes-text-muted">
            Sorted by |r|
          </span>
        </div>
        <CorrelationChart correlations={all} />
      </Card>

      <CorrelationExplorer />

      <Card padding="none">
        <div className="px-4 py-3 border-b border-gray-200 flex items-baseline justify-between">
          <CardTitle level={3} className="!text-base">All Correlations</CardTitle>
          <span className="text-[10px] uppercase tracking-wider text-mes-text-muted">
            {all.length} rows
          </span>
        </div>
        <CorrelationTable correlations={all} />
      </Card>
    </div>
  );
}
