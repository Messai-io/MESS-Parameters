import { cn } from '../../ui/utils';
import { categoryColors } from '../../styles/category-colors';
import type { CategoryCount } from '../../data/types';

interface CategorySidebarProps {
  categories: CategoryCount[];
  selected: string | null;
  onSelect: (id: string | null) => void;
  total: number;
}

export function CategorySidebar({ categories, selected, onSelect, total }: CategorySidebarProps) {
  return (
    <nav className="space-y-0.5">
      <button
        onClick={() => onSelect(null)}
        className={cn(
          'w-full text-left px-3 py-2 text-sm transition-colors flex items-center justify-between',
          selected === null
            ? 'bg-gray-100 text-mes-text-primary font-medium'
            : 'text-mes-text-secondary hover:bg-gray-50'
        )}
      >
        <span>All</span>
        <span className="text-xs text-mes-text-muted">{total}</span>
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          className={cn(
            'w-full text-left px-3 py-2 text-sm transition-colors flex items-center justify-between gap-2',
            selected === cat.id
              ? 'bg-gray-100 text-mes-text-primary font-medium'
              : 'text-mes-text-secondary hover:bg-gray-50'
          )}
        >
          <span className="flex items-center gap-2">
            <span
              className="w-2 h-2 flex-shrink-0"
              style={{ backgroundColor: categoryColors[cat.id] || '#737373' }}
            />
            <span className="truncate">{cat.name.replace(' Parameters', '')}</span>
          </span>
          <span className="text-xs text-mes-text-muted">{cat.count}</span>
        </button>
      ))}
    </nav>
  );
}
