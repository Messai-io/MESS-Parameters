import { Card } from '../../ui/card';

interface StatCardProps {
  label: string;
  value: string | number;
  detail?: string;
  dense?: boolean;
}

export function StatCard({ label, value, detail, dense = false }: StatCardProps) {
  return (
    <Card padding="none" className={dense ? 'flex flex-col gap-0.5 px-3 py-2' : 'flex flex-col gap-1 px-4 py-3'}>
      <span className={dense ? 'text-[10px] text-mes-text-muted uppercase tracking-wider leading-tight' : 'text-xs text-mes-text-muted uppercase tracking-wider'}>
        {label}
      </span>
      <span className={dense ? 'text-lg font-serif font-bold text-mes-text-primary leading-tight' : 'text-2xl font-serif font-bold text-mes-text-primary leading-tight'}>
        {value}
      </span>
      {detail && (
        <span className={dense ? 'text-[10px] text-mes-text-muted leading-tight truncate' : 'text-xs text-mes-text-muted'}>
          {detail}
        </span>
      )}
    </Card>
  );
}
