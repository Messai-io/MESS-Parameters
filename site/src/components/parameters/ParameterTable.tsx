import { useState } from 'react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../ui/table';
import { Badge } from '../../ui/badge';
import { categoryColors } from '../../styles/category-colors';
import type { Parameter } from '../../data/types';

type SortKey = 'name' | 'unit' | 'category' | 'subcategory' | 'typical';
type SortDir = 'asc' | 'desc';

interface ParameterTableProps {
  parameters: Parameter[];
}

export function ParameterTable({ parameters }: ParameterTableProps) {
  const [sortKey, setSortKey] = useState<SortKey>('name');
  const [sortDir, setSortDir] = useState<SortDir>('asc');

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDir('asc');
    }
  };

  const sorted = [...parameters].sort((a, b) => {
    let cmp = 0;
    switch (sortKey) {
      case 'name':
        cmp = a.name.localeCompare(b.name);
        break;
      case 'unit':
        cmp = a.unit.localeCompare(b.unit);
        break;
      case 'category':
        cmp = a.category.localeCompare(b.category);
        break;
      case 'subcategory':
        cmp = a.subcategory.localeCompare(b.subcategory);
        break;
      case 'typical':
        cmp = (a.range?.typical ?? 0) - (b.range?.typical ?? 0);
        break;
    }
    return sortDir === 'asc' ? cmp : -cmp;
  });

  const sortIndicator = (key: SortKey) => {
    if (sortKey !== key) return null;
    return <span className="ml-1">{sortDir === 'asc' ? '\u2191' : '\u2193'}</span>;
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="cursor-pointer select-none" onClick={() => toggleSort('name')}>
            Name{sortIndicator('name')}
          </TableHead>
          <TableHead className="cursor-pointer select-none" onClick={() => toggleSort('unit')}>
            Unit{sortIndicator('unit')}
          </TableHead>
          <TableHead className="cursor-pointer select-none hidden md:table-cell" onClick={() => toggleSort('category')}>
            Category{sortIndicator('category')}
          </TableHead>
          <TableHead className="cursor-pointer select-none hidden lg:table-cell" onClick={() => toggleSort('subcategory')}>
            Subcategory{sortIndicator('subcategory')}
          </TableHead>
          <TableHead className="cursor-pointer select-none hidden sm:table-cell" onClick={() => toggleSort('typical')}>
            Typical{sortIndicator('typical')}
          </TableHead>
          <TableHead className="hidden sm:table-cell">Range</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sorted.map((p) => (
          <ParameterTableRow key={p.id} parameter={p} />
        ))}
      </TableBody>
    </Table>
  );
}

function ParameterTableRow({
  parameter: p,
}: {
  parameter: Parameter;
}) {
  const detailUrl = `#/parameter/${encodeURIComponent(p.id)}`;

  return (
    <TableRow
      className="cursor-pointer group"
      onClick={() => { window.location.hash = detailUrl.slice(1); }}
    >
      <TableCell className="font-medium">
        <span className="group-hover:text-mes-text-link transition-colors">{p.name}</span>
      </TableCell>
      <TableCell>
        <code className="text-xs bg-gray-50 px-1 py-0.5 border border-gray-200">{p.unit}</code>
      </TableCell>
      <TableCell className="hidden md:table-cell">
        <Badge
          variant="outline"
          size="sm"
          style={{ borderColor: categoryColors[p.category] || '#737373', color: categoryColors[p.category] || '#737373' }}
        >
          {p.category}
        </Badge>
      </TableCell>
      <TableCell className="hidden lg:table-cell text-mes-text-muted text-xs">
        {p.subcategory}
      </TableCell>
      <TableCell className="hidden sm:table-cell">
        {p.range?.typical != null ? `${p.range.typical}` : '-'}
      </TableCell>
      <TableCell className="hidden sm:table-cell text-xs text-mes-text-muted">
        {p.range ? `${p.range.min} - ${p.range.max}` : '-'}
      </TableCell>
    </TableRow>
  );
}
