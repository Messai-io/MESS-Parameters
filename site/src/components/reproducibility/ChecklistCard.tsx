import { Card, CardTitle } from '../../ui/card';

interface ChecklistCardProps {
  parameters: string[];
  description: string;
}

export function ChecklistCard({ parameters, description }: ChecklistCardProps) {
  return (
    <Card padding="sm">
      <CardTitle level={3} className="mb-2">Five-Parameter Checklist</CardTitle>
      <p className="text-sm text-mes-text-secondary mb-4">{description}</p>
      <ul className="space-y-2">
        {parameters.map((param, i) => (
          <li key={i} className="flex items-center gap-3 text-sm">
            <span className="w-5 h-5 border border-mes-sage bg-mes-sage/10 flex items-center justify-center text-mes-sage text-xs">
              {i + 1}
            </span>
            <span className="text-mes-text-primary">{param}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
