import { getCorrelations } from '../../data/loader';
import { StatCard } from '../layout/StatCard';
import { Card, CardTitle } from '../../ui/card';
import { CorrelationChart } from './CorrelationChart';
import { CorrelationTable } from './CorrelationTable';

export function CorrelationsView() {
  const data = getCorrelations();
  const top = data.allCorrelations[0];

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-serif font-bold text-mes-text-primary">
          Parameter-Metric Correlations
        </h1>
        <p className="mt-2 text-mes-text-secondary text-sm">
          Pearson correlations computed across {data.totalPapersAnalyzed.toLocaleString()} papers.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard label="Total" value={data.totalCorrelations} detail="Correlations tested" />
        <StatCard label="Significant" value={data.significantCorrelations} detail="p < 0.05" />
        <StatCard
          label="Top r"
          value={top ? top.pearsonR.toFixed(3) : '-'}
          detail={top ? top.parameter : ''}
        />
        <StatCard
          label="Moderate+"
          value={data.summary.moderate + data.summary.strongPositive + data.summary.strongNegative}
          detail="Moderate or stronger"
        />
      </div>

      <Card padding="sm">
        <CardTitle level={2} className="px-2 pt-2 mb-4">
          Correlation Strengths
        </CardTitle>
        <CorrelationChart correlations={data.allCorrelations} />
      </Card>

      <Card padding="none">
        <div className="px-6 py-4 border-b border-gray-200">
          <CardTitle level={2}>All Correlations</CardTitle>
        </div>
        <CorrelationTable correlations={data.allCorrelations} />
      </Card>
    </div>
  );
}
