import type { Parameter } from '../../data/types';
import { Badge } from '../../ui/badge';
import { RangeBar } from './RangeBar';

interface ParameterDetailProps {
  parameter: Parameter;
}

export function ParameterDetail({ parameter }: ParameterDetailProps) {
  return (
    <div className="p-4 bg-gray-50 border-t border-gray-200 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <div>
            <span className="text-xs text-mes-text-muted uppercase tracking-wider">Description</span>
            <p className="text-sm text-mes-text-primary mt-1">{parameter.description}</p>
          </div>
          <div>
            <span className="text-xs text-mes-text-muted uppercase tracking-wider">Default</span>
            <p className="text-sm text-mes-text-primary mt-1">
              {parameter.default} {parameter.unit}
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {parameter.tags.map((tag) => (
              <Badge key={tag} variant="gray" size="sm">{tag}</Badge>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <div>
            <span className="text-xs text-mes-text-muted uppercase tracking-wider">Range</span>
            <div className="mt-2">
              <RangeBar range={parameter.range} unit={parameter.unit} />
            </div>
          </div>
          <div className="text-xs text-mes-text-muted mt-2">
            ID: <code className="bg-gray-100 px-1 py-0.5 border border-gray-200">{parameter.id}</code>
          </div>
        </div>
      </div>
    </div>
  );
}
