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

      <CorrelationExplorer />
    </div>
  );
}
