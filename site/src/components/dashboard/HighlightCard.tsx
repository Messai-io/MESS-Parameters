import { Card, CardTitle } from '../../ui/card';
import { Badge } from '../../ui/badge';
import type { Correlation } from '../../data/types';

interface HighlightCardProps {
  correlation: Correlation;
}

export function HighlightCard({ correlation }: HighlightCardProps) {
  return (
    <Card padding="sm" className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <Badge variant="success" size="sm">Significant</Badge>
        <span className="text-xs text-mes-text-muted">n = {correlation.sampleSize}</span>
      </div>
      <CardTitle level={4}>{correlation.parameter}</CardTitle>
      <p className="text-sm text-mes-text-secondary">
        vs {correlation.metric}
      </p>
      <div className="flex items-center gap-3 mt-1">
        <span className="text-2xl font-serif font-bold text-mes-optimal">
          r = {correlation.pearsonR.toFixed(3)}
        </span>
        <Badge variant="outline" size="sm">{correlation.strength}</Badge>
      </div>
    </Card>
  );
}
