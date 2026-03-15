import type { ParameterRange } from '../../data/types';

interface RangeBarProps {
  range: ParameterRange;
  unit: string;
}

export function RangeBar({ range, unit }: RangeBarProps) {
  const { min, max, typical } = range;
  const span = max - min;
  if (span <= 0) return null;
  const typicalPct = ((typical - min) / span) * 100;

  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs text-mes-text-muted">
        <span>{min} {unit}</span>
        <span>{max} {unit}</span>
      </div>
      <div className="relative h-3 bg-gray-100 border border-gray-200">
        <div
          className="absolute top-0 h-full bg-mes-sage/20"
          style={{ left: '0%', width: '100%' }}
        />
        <div
          className="absolute top-0 h-full w-0.5 bg-mes-sage"
          style={{ left: `${typicalPct}%` }}
          title={`Typical: ${typical} ${unit}`}
        />
      </div>
      <div className="text-xs text-mes-text-secondary text-center">
        Typical: {typical} {unit}
      </div>
    </div>
  );
}
