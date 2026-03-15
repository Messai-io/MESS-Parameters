import { useState } from 'react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../ui/table';
import { Badge } from '../../ui/badge';
import type { Correlation } from '../../data/types';

type SortKey = 'parameter' | 'metric' | 'pearsonR' | 'sampleSize' | 'strength';

const strengthVariant: Record<string, 'success' | 'warning' | 'gray' | 'info'> = {
  strong: 'success',
  moderate: 'success',
  weak: 'warning',
  negligible: 'gray',
};

interface CorrelationTableProps {
  correlations: Correlation[];
}

export function CorrelationTable({ correlations }: CorrelationTableProps) {
  const [sortKey, setSortKey] = useState<SortKey>('pearsonR');
  const [asc, setAsc] = useState(false);

  const toggle = (key: SortKey) => {
    if (sortKey === key) setAsc(!asc);
    else { setSortKey(key); setAsc(key === 'parameter'); }
  };

  const sorted = [...correlations].sort((a, b) => {
    let cmp = 0;
    switch (sortKey) {
      case 'parameter': cmp = a.parameter.localeCompare(b.parameter); break;
      case 'metric': cmp = a.metric.localeCompare(b.metric); break;
      case 'pearsonR': cmp = Math.abs(b.pearsonR) - Math.abs(a.pearsonR); break;
      case 'sampleSize': cmp = a.sampleSize - b.sampleSize; break;
      case 'strength': cmp = Math.abs(b.pearsonR) - Math.abs(a.pearsonR); break;
    }
    return asc ? -cmp : cmp;
  });

  const arrow = (key: SortKey) => sortKey === key ? (asc ? ' \u2191' : ' \u2193') : '';

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="cursor-pointer select-none" onClick={() => toggle('parameter')}>
            Parameter{arrow('parameter')}
          </TableHead>
          <TableHead className="cursor-pointer select-none" onClick={() => toggle('metric')}>
            Metric{arrow('metric')}
          </TableHead>
          <TableHead className="cursor-pointer select-none" onClick={() => toggle('pearsonR')}>
            r{arrow('pearsonR')}
          </TableHead>
          <TableHead className="cursor-pointer select-none hidden sm:table-cell" onClick={() => toggle('sampleSize')}>
            n{arrow('sampleSize')}
          </TableHead>
          <TableHead>p-value</TableHead>
          <TableHead className="cursor-pointer select-none" onClick={() => toggle('strength')}>
            Strength{arrow('strength')}
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sorted.map((c, i) => (
          <TableRow key={i}>
            <TableCell className="font-medium">{c.parameter}</TableCell>
            <TableCell>{c.metric}</TableCell>
            <TableCell className="font-mono">
              {c.pearsonR > 0 ? '+' : ''}{c.pearsonR.toFixed(3)}
            </TableCell>
            <TableCell className="hidden sm:table-cell">{c.sampleSize}</TableCell>
            <TableCell className="text-xs">
              {c.pValue === 0 ? '<0.001' : c.pValue.toFixed(4)}
            </TableCell>
            <TableCell>
              <Badge variant={strengthVariant[c.strength] || 'gray'} size="sm">
                {c.strength}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
