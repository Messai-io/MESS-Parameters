import { useMemo } from 'react';
import { getAllRichParameters } from '../../data/loader';
import { paramNameToSlug } from '../../lib/humanize';

interface RelatedItem {
  name: string;
  relationship?: string | null;
}

interface Props {
  related: unknown;
}

// Coerce the heterogeneous `related_parameters` payload into a uniform shape.
// The rich definitions store this as one of:
//   - Array<{ name, relationship }>   (most common)
//   - Array<string>                   (legacy entries)
//   - object map { name: relationship }
//   - null
function normalize(val: unknown): RelatedItem[] {
  if (!val) return [];
  if (Array.isArray(val)) {
    return val
      .map((item): RelatedItem | null => {
        if (typeof item === 'string') return { name: item };
        if (item && typeof item === 'object') {
          const o = item as Record<string, unknown>;
          const name = typeof o.name === 'string' ? o.name : null;
          if (!name) return null;
          const rel = typeof o.relationship === 'string' ? o.relationship : null;
          return { name, relationship: rel };
        }
        return null;
      })
      .filter((x): x is RelatedItem => x !== null);
  }
  if (typeof val === 'object') {
    return Object.entries(val as Record<string, unknown>).map(([name, rel]) => ({
      name,
      relationship: typeof rel === 'string' ? rel : null,
    }));
  }
  return [];
}

export function RelatedParametersList({ related }: Props) {
  const items = useMemo(() => normalize(related), [related]);
  const knownSlugs = useMemo(() => {
    const set = new Set<string>();
    for (const p of getAllRichParameters()) set.add(paramNameToSlug(p.name));
    return set;
  }, []);

  if (items.length === 0) return null;

  return (
    <ul className="space-y-3">
      {items.map((item, i) => {
        const slug = paramNameToSlug(item.name);
        const isLinked = knownSlugs.has(slug);
        const href = isLinked ? `#/parameter/${slug}` : null;
        return (
          <li key={`${item.name}-${i}`} className="text-sm leading-relaxed">
            {href ? (
              <a
                href={href}
                className="font-medium text-mes-text-primary hover:text-mes-text-link hover:underline transition-colors"
              >
                {item.name}
                <span aria-hidden className="ml-1 text-mes-text-muted">→</span>
              </a>
            ) : (
              <span
                className="font-medium text-mes-text-primary"
                title="No detail page for this parameter yet."
              >
                {item.name}
              </span>
            )}
            {item.relationship && (
              <p className="mt-0.5 text-xs text-mes-text-secondary leading-relaxed">
                {item.relationship}
              </p>
            )}
          </li>
        );
      })}
    </ul>
  );
}
