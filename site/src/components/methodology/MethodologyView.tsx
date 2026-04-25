import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import methodologyMd from '@data/METHODOLOGY.md?raw';
import integrityMd from '@data/SCIENTIFIC_INTEGRITY.md?raw';
import { Card } from '../../ui/card';
import { VerdictTag } from '../../ui/tags';
import { getProvenanceSummary } from '../../data/loader';
import { cn } from '../../ui/utils';

type Tab = 'methodology' | 'integrity';

const tabs: { id: Tab; label: string; blurb: string }[] = [
  {
    id: 'methodology',
    label: 'How we build the catalog',
    blurb: 'Corpus assembly, extraction, scoring, and validation.',
  },
  {
    id: 'integrity',
    label: 'Known limitations',
    blurb: 'Transparent caveats, sampling bias, and open issues.',
  },
];

const checkLabels: Record<string, string> = {
  snippet_grounding: 'Snippet grounding',
  literature_crosscheck: 'Literature cross-check',
  unit_audit: 'Unit audit',
  noise_floor: 'Noise floor',
  duplicate_consistency: 'Duplicate consistency',
};

export function MethodologyView() {
  const [active, setActive] = useState<Tab>('methodology');
  const source = active === 'methodology' ? methodologyMd : integrityMd;
  const prov = getProvenanceSummary();
  const tier1 = prov.tier1;

  return (
    <div className="space-y-5 animate-fade-in">
      <div>
        <h1 className="text-2xl font-serif font-bold text-mes-text-primary leading-tight">
          Methodology &amp; Scientific Integrity
        </h1>
        <p className="mt-1 text-mes-text-secondary text-sm max-w-3xl leading-relaxed">
          MESS-Parameters is built on public literature. These documents describe how values are
          extracted, how quality is scored, and where the data is still weak — surfaced verbatim
          from the repo so reviewers can audit our claims.
        </p>
      </div>

      {/* Tier-1 verdict summary — chart-like signal above the fold */}
      <Card padding="none" className="px-4 py-3">
        <div className="flex items-baseline justify-between mb-2">
          <h2 className="text-base font-serif font-semibold text-mes-text-primary">
            Tier-1 Verification
          </h2>
          <div className="flex items-center gap-2">
            <span className="text-xs text-mes-text-muted">
              {tier1.pass_count}/{tier1.total_checks} checks pass
            </span>
            <VerdictTag verdict={tier1.overall_verdict} size="sm" />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          {Object.entries(tier1.sub_verdicts).map(([key, verdict]) => (
            <div
              key={key}
              className="flex items-center justify-between gap-2 border border-gray-200 bg-white px-3 py-2"
            >
              <span className="text-xs text-mes-text-secondary leading-tight">
                {checkLabels[key] ?? key}
              </span>
              <VerdictTag verdict={verdict} size="sm" />
            </div>
          ))}
        </div>
      </Card>

      <div className="flex flex-wrap gap-0 border-b border-gray-200">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={cn(
              'px-4 py-3 text-sm transition-colors border-b-2 -mb-px',
              active === t.id
                ? 'text-mes-text-primary border-mes-bakelite font-medium'
                : 'text-mes-text-muted border-transparent hover:text-mes-text-primary'
            )}
          >
            <span className="block">{t.label}</span>
            <span className="block text-xs text-mes-text-muted font-normal">{t.blurb}</span>
          </button>
        ))}
      </div>

      <Card padding="lg">
        <article className="prose-mes">
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="text-2xl font-serif font-bold text-mes-text-primary mt-0 mb-4">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-xl font-serif font-semibold text-mes-text-primary mt-8 mb-3 pb-2 border-b border-gray-200">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-lg font-serif font-semibold text-mes-text-primary mt-6 mb-2">
                  {children}
                </h3>
              ),
              h4: ({ children }) => (
                <h4 className="text-base font-semibold text-mes-text-secondary mt-4 mb-2">
                  {children}
                </h4>
              ),
              p: ({ children }) => (
                <p className="text-sm text-mes-text-secondary leading-relaxed mb-3">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc pl-6 mb-4 space-y-1 text-sm text-mes-text-secondary">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal pl-6 mb-4 space-y-1 text-sm text-mes-text-secondary">
                  {children}
                </ol>
              ),
              li: ({ children }) => <li className="leading-relaxed">{children}</li>,
              code: ({ children, className }) => {
                const isBlock = className?.includes('language-');
                if (isBlock) {
                  return (
                    <code className="block text-xs font-mono bg-gray-50 border border-gray-200 p-3 overflow-x-auto">
                      {children}
                    </code>
                  );
                }
                return (
                  <code className="text-xs font-mono bg-gray-100 px-1 py-0.5 border border-gray-200">
                    {children}
                  </code>
                );
              },
              pre: ({ children }) => (
                <pre className="bg-gray-50 border border-gray-200 p-3 overflow-x-auto mb-4 text-xs font-mono">
                  {children}
                </pre>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-2 border-mes-brass pl-4 my-4 text-sm text-mes-text-muted italic">
                  {children}
                </blockquote>
              ),
              a: ({ children, href }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mes-text-link underline hover:text-mes-bakelite"
                >
                  {children}
                </a>
              ),
              table: ({ children }) => (
                <div className="overflow-x-auto my-4">
                  <table className="min-w-full text-xs border border-gray-200">{children}</table>
                </div>
              ),
              thead: ({ children }) => <thead className="bg-gray-50">{children}</thead>,
              th: ({ children }) => (
                <th className="text-left font-medium text-mes-text-primary px-3 py-2 border-b border-gray-200">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="px-3 py-2 border-b border-gray-100 text-mes-text-secondary">
                  {children}
                </td>
              ),
              hr: () => <hr className="my-6 border-gray-200" />,
              strong: ({ children }) => (
                <strong className="font-semibold text-mes-text-primary">{children}</strong>
              ),
            }}
          >
            {source}
          </ReactMarkdown>
        </article>
      </Card>
    </div>
  );
}
