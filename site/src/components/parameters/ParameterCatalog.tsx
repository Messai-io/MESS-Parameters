import { useState, useMemo } from 'react';
import { getAllParameters, getCategoryCounts } from '../../data/loader';
import { CategorySidebar } from './CategorySidebar';
import { ParameterSearch } from './ParameterSearch';
import { ParameterTable } from './ParameterTable';

export function ParameterCatalog() {
  const allParams = useMemo(() => getAllParameters(), []);
  const categories = useMemo(() => getCategoryCounts().sort((a, b) => b.count - a.count), []);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    let params = allParams;
    if (selectedCategory) {
      params = params.filter((p) => p.category === selectedCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      params = params.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.unit.toLowerCase().includes(q) ||
          p.id.toLowerCase().includes(q)
      );
    }
    return params;
  }, [allParams, selectedCategory, search]);

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-serif font-bold text-mes-text-primary">
          Parameter Catalog
        </h1>
        <p className="mt-2 text-mes-text-secondary text-sm">
          {allParams.length} parameters across {categories.length} categories.
          Click a row to expand details.
        </p>
      </div>

      <ParameterSearch value={search} onChange={setSearch} resultCount={filtered.length} />

      <div className="flex gap-6">
        <aside className="hidden md:block w-56 flex-shrink-0">
          <CategorySidebar
            categories={categories}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
            total={allParams.length}
          />
        </aside>

        <div className="flex-1 min-w-0">
          <div className="md:hidden mb-4">
            <select
              value={selectedCategory || ''}
              onChange={(e) => setSelectedCategory(e.target.value || null)}
              className="w-full h-10 px-3 text-sm bg-white border border-gray-300 text-mes-text-primary focus:outline-none focus:border-mes-bakelite"
            >
              <option value="">All categories ({allParams.length})</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name.replace(' Parameters', '')} ({cat.count})
                </option>
              ))}
            </select>
          </div>
          <ParameterTable parameters={filtered} />
        </div>
      </div>
    </div>
  );
}
