import { Card, CardTitle } from '../../ui/card';
import { Badge } from '../../ui/badge';

interface ValidationResultsProps {
  papersAnalyzed: number;
  iqrReductionPercent: number;
  pValue: string;
  conclusion: string;
}

export function ValidationResults({ papersAnalyzed, iqrReductionPercent, pValue, conclusion }: ValidationResultsProps) {
  return (
    <Card padding="sm">
      <CardTitle level={3} className="mb-3">Validation Study</CardTitle>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <span className="text-xs text-mes-text-muted block">Papers</span>
          <span className="text-lg font-serif font-bold">{papersAnalyzed}</span>
        </div>
        <div>
          <span className="text-xs text-mes-text-muted block">IQR Reduction</span>
          <span className="text-lg font-serif font-bold text-mes-optimal">&gt;{iqrReductionPercent}%</span>
        </div>
        <div>
          <span className="text-xs text-mes-text-muted block">p-value</span>
          <Badge variant="success" size="sm">{pValue}</Badge>
        </div>
      </div>
      <p className="text-sm text-mes-text-secondary">{conclusion}</p>
    </Card>
  );
}
