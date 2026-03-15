import { Card } from '../../ui/card';

interface StatCardProps {
  label: string;
  value: string | number;
  detail?: string;
}

export function StatCard({ label, value, detail }: StatCardProps) {
  return (
    <Card padding="sm" className="flex flex-col gap-1">
      <span className="text-xs text-mes-text-muted uppercase tracking-wider">{label}</span>
      <span className="text-2xl font-serif font-bold text-mes-text-primary">{value}</span>
      {detail && <span className="text-xs text-mes-text-muted">{detail}</span>}
    </Card>
  );
}
