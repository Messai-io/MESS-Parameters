import { useMemo, useEffect, useState } from 'react';
import { getRichParameter, getAllParameters, type RichParameter } from '../../data/loader';
import { getProvenance, type ProvEntry } from '../../data/provenance';
import { Card, CardHeader, CardContent, CardFooter } from '../../ui/card';
import { Badge } from '../../ui/badge';
import { Button } from '../../ui/button';
import { RangeBar } from './RangeBar';
import { categoryColors, categoryLabels } from '../../styles/category-colors';
import { ProvenanceBadges } from './provenance/ProvenanceBadges';
import { SourcesExplorer } from './provenance/SourcesExplorer';
import { CorrelationMiniMatrix } from './provenance/CorrelationMiniMatrix';
import { linkifyCitations } from '../../lib/doi';

function nameToSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '_').replace(/[()\/]/g, '').replace(/:/, '');
}

interface ParameterDetailPageProps {
  paramId: string;
}

const REPO = 'Messai-io/MESS-Parameters';

function formatList(val: unknown): string[] {
  if (!val) return [];
  if (Array.isArray(val)) {
    return val.map(item => {
      if (typeof item === 'string') return item;
      if (item.name && item.description) return `**${item.name}**: ${item.description.replace(/\n/g, ' ')}`;
      if (item.label && item.range) return `**${item.label}**: ${item.range}`;
      if (item.factor && item.effect) return `**${item.factor}**: ${item.effect.replace(/\n/g, ' ')}`;
      return JSON.stringify(item);
    });
  }
  if (typeof val === 'object' && val !== null) {
    const obj = val as Record<string, unknown>;
    if (obj.ranges) return formatList(obj.ranges);
    const result: string[] = [];
    for (const [k, v] of Object.entries(obj)) {
      if (Array.isArray(v)) {
        result.push(`**${k.charAt(0).toUpperCase() + k.slice(1)}**:`);
        result.push(...formatList(v).map(s => `  ${s}`));
      } else {
        result.push(`**${k}**: ${String(v)}`);
      }
    }
    return result;
  }
  return [String(val)];
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-lg font-serif font-semibold text-mes-text-primary mb-3 pb-2 border-b border-gray-200">
        {title}
      </h2>
      {children}
    </div>
  );
}

function TextBlock({ text }: { text: string }) {
  const paragraphs = text.split(/\n\n+/).filter(Boolean);
  return (
    <div className="space-y-3">
      {paragraphs.map((p, i) => (
        <p key={i} className="text-sm text-mes-text-secondary leading-relaxed whitespace-pre-line">
          {p.trim()}
        </p>
      ))}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => {
        const boldMatch = item.match(/^\*\*(.+?)\*\*:\s*(.*)/s);
        return (
          <li key={i} className="text-sm text-mes-text-secondary leading-relaxed flex gap-2">
            <span className="text-mes-text-muted mt-1 flex-shrink-0">--</span>
            <span>
              {boldMatch ? (
                <>
                  <span className="font-medium text-mes-text-primary">{boldMatch[1]}</span>
                  {': '}{boldMatch[2]}
                </>
              ) : item}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

function InfoRow({ label, value, mono }: { label: string; value: React.ReactNode; mono?: boolean }) {
  return (
    <div className="flex items-baseline gap-3 py-2 border-b border-gray-100 last:border-0">
      <span className="text-xs text-mes-text-muted uppercase tracking-wider w-36 flex-shrink-0">{label}</span>
      <span className={`text-sm text-mes-text-primary ${mono ? 'font-mono' : ''}`}>{value}</span>
    </div>
  );
}

export function ParameterDetailPage({ paramId }: ParameterDetailPageProps) {
  const richParam = useMemo(() => getRichParameter(paramId), [paramId]);
  const indexParam = useMemo(() => {
    const all = getAllParameters();
    const nameId = paramId.toLowerCase().replace(/-/g, '_');
    return all.find(p => p.id === nameId || p.id === paramId);
  }, [paramId]);

  const [prov, setProv] = useState<ProvEntry | null>(null);
  const [provLoading, setProvLoading] = useState(false);
  useEffect(() => {
    if (!richParam?.has_provenance) {
      setProv(null);
      return;
    }
    let cancelled = false;
    setProvLoading(true);
    getProvenance(richParam.id)
      .then((p) => { if (!cancelled) setProv(p); })
      .catch(() => { if (!cancelled) setProv(null); })
      .finally(() => { if (!cancelled) setProvLoading(false); });
    return () => { cancelled = true; };
  }, [richParam?.id, richParam?.has_provenance]);

  if (!richParam && !indexParam) {
    return (
      <div className="space-y-6 animate-fade-in">
        <div className="text-center py-16">
          <h1 className="text-2xl font-serif font-bold text-mes-text-primary">Parameter Not Found</h1>
          <p className="text-mes-text-secondary mt-2">No parameter matching "{paramId}"</p>
          <a href="#/parameters" className="text-mes-text-link hover:underline mt-4 inline-block">
            Back to catalog
          </a>
        </div>
      </div>
    );
  }

  const p = richParam as RichParameter;
  const catId = p.category.toLowerCase().replace(/_/g, '-');
  const catLabel = categoryLabels[catId] || p.category.replace(/_/g, ' ');
  const catColor = categoryColors[catId] || '#737373';

  const typicalItems = formatList(p.typical_values);
  const methodItems = formatList(p.measurement_methods);
  const factorItems = formatList(p.affecting_factors);
  const relatedItems = formatList(p.related_parameters);

  const issueBase = `https://github.com/${REPO}/issues/new`;
  const issueBody = encodeURIComponent(`**Parameter:** ${p.name}\n**Category:** ${catLabel}\n\n`);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-mes-text-muted">
        <a href="#/parameters" className="hover:text-mes-text-link transition-colors">Parameters</a>
        <span>/</span>
        <a
          href={`#/parameters?category=${catId}`}
          className="hover:text-mes-text-link transition-colors"
          style={{ color: catColor }}
        >
          {catLabel}
        </a>
        <span>/</span>
        <span className="text-mes-text-primary">{p.name}</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-serif font-bold text-mes-text-primary">{p.name}</h1>
          <p className="mt-2 text-mes-text-secondary text-sm max-w-2xl">
            {p.description}
          </p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <Badge variant="outline" size="lg" style={{ borderColor: catColor, color: catColor }}>
            {catLabel}
          </Badge>
          {p.subcategory && (
            <Badge variant="gray" size="sm">{p.subcategory}</Badge>
          )}
        </div>
      </div>

      {/* Provenance overview strip — renders when sidecar data is available */}
      {prov && (
        <ProvenanceBadges prov={prov} />
      )}

      {/* Quick stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card padding="sm" className="text-center">
          <span className="text-xs text-mes-text-muted uppercase tracking-wider block">Unit</span>
          <span className="text-lg font-mono font-medium text-mes-text-primary mt-1 block">
            {p.unit || '--'}
          </span>
        </Card>
        <Card padding="sm" className="text-center">
          <span className="text-xs text-mes-text-muted uppercase tracking-wider block">Type</span>
          <span className="text-lg font-medium text-mes-text-primary mt-1 block">
            {(p.data_type || '').toLowerCase()}
          </span>
        </Card>
        <Card padding="sm" className="text-center">
          <span className="text-xs text-mes-text-muted uppercase tracking-wider block">Papers</span>
          <span className="text-lg font-medium text-mes-text-primary mt-1 block">
            {p.usage_count > 0 ? p.usage_count.toLocaleString() : '--'}
          </span>
        </Card>
        <Card padding="sm" className="text-center">
          <span className="text-xs text-mes-text-muted uppercase tracking-wider block">Range</span>
          <span className="text-sm font-mono text-mes-text-primary mt-1 block">
            {p.min_value != null && p.max_value != null
              ? `${p.min_value} -- ${p.max_value}`
              : '--'}
          </span>
        </Card>
      </div>

      {/* Range visualization */}
      {indexParam?.range && (
        <Card padding="sm">
          <div className="px-2">
            <span className="text-xs text-mes-text-muted uppercase tracking-wider">Value Range</span>
            <div className="mt-3 max-w-xl">
              <RangeBar range={indexParam.range} unit={p.unit || ''} />
            </div>
          </div>
        </Card>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content — left 2 columns */}
        <div className="lg:col-span-2 space-y-6">
          {/* Definition */}
          {p.definition && (
            <Card padding="sm">
              <CardContent>
                <Section title="Definition">
                  <TextBlock text={p.definition} />
                </Section>
              </CardContent>
            </Card>
          )}

          {/* Typical Values */}
          {typicalItems.length > 0 && (
            <Card padding="sm">
              <CardContent>
                <Section title="Typical Values">
                  <BulletList items={typicalItems} />
                </Section>
              </CardContent>
            </Card>
          )}

          {/* Measurement Methods */}
          {methodItems.length > 0 && (
            <Card padding="sm">
              <CardContent>
                <Section title="Measurement Methods">
                  <BulletList items={methodItems} />
                </Section>
              </CardContent>
            </Card>
          )}

          {/* Affecting Factors */}
          {factorItems.length > 0 && (
            <Card padding="sm">
              <CardContent>
                <Section title="Affecting Factors">
                  <BulletList items={factorItems} />
                </Section>
              </CardContent>
            </Card>
          )}

          {/* Performance Impact */}
          {p.performance_impact && (
            <Card padding="sm">
              <CardContent>
                <Section title="Performance Impact">
                  <TextBlock text={p.performance_impact} />
                </Section>
              </CardContent>
            </Card>
          )}

          {/* Correlated parameters */}
          {prov && prov.correlations.length > 0 && (
            <Card padding="sm">
              <CardContent>
                <Section title="Correlated Parameters">
                  <CorrelationMiniMatrix
                    correlations={prov.correlations}
                    paramNameToSlug={nameToSlug}
                  />
                </Section>
              </CardContent>
            </Card>
          )}

          {/* Sources & Distribution explorer */}
          {prov && (
            <Card padding="sm">
              <CardContent>
                <Section title="Sources & Distribution">
                  <SourcesExplorer prov={prov} unit={p.unit} />
                </Section>
              </CardContent>
            </Card>
          )}

          {/* Provenance placeholder while loading */}
          {!prov && provLoading && p.has_provenance && (
            <Card padding="sm">
              <CardContent>
                <div className="text-sm text-mes-text-muted">Loading paper sources and distribution…</div>
              </CardContent>
            </Card>
          )}

          {/* Limitations */}
          {p.limitations && (
            <Card padding="sm">
              <CardContent>
                <Section title="Limitations">
                  <TextBlock text={p.limitations} />
                </Section>
              </CardContent>
            </Card>
          )}

          {/* Cost Analysis */}
          {p.cost_analysis && (
            <Card padding="sm">
              <CardContent>
                <Section title="Cost Analysis">
                  <TextBlock text={p.cost_analysis} />
                </Section>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar — right column */}
        <div className="space-y-6">
          {/* Properties */}
          <Card padding="sm">
            <CardContent>
              <h3 className="text-sm font-semibold text-mes-text-primary mb-3">Properties</h3>
              <InfoRow label="Category" value={catLabel} />
              {p.subcategory && <InfoRow label="Subcategory" value={p.subcategory} />}
              <InfoRow label="Unit" value={p.unit || 'Dimensionless'} mono />
              <InfoRow label="Data type" value={(p.data_type || '').toLowerCase()} />
              {p.min_value != null && <InfoRow label="Minimum" value={`${p.min_value} ${p.unit || ''}`} mono />}
              {p.max_value != null && <InfoRow label="Maximum" value={`${p.max_value} ${p.unit || ''}`} mono />}
              <InfoRow label="Papers" value={p.usage_count > 0 ? p.usage_count.toLocaleString() : 'None yet'} />
            </CardContent>
          </Card>

          {/* Compatible Systems */}
          {p.compatible_systems && (
            <Card padding="sm">
              <CardContent>
                <h3 className="text-sm font-semibold text-mes-text-primary mb-3">Compatible Systems</h3>
                <p className="text-sm text-mes-text-secondary">{p.compatible_systems}</p>
              </CardContent>
            </Card>
          )}

          {/* Related Parameters */}
          {relatedItems.length > 0 && (
            <Card padding="sm">
              <CardContent>
                <h3 className="text-sm font-semibold text-mes-text-primary mb-3">Related Parameters</h3>
                <BulletList items={relatedItems} />
              </CardContent>
            </Card>
          )}

          {/* References */}
          {p.references && (
            <Card padding="sm">
              <CardContent>
                <h3 className="text-sm font-semibold text-mes-text-primary mb-3">References</h3>
                <div className="text-xs text-mes-text-secondary leading-relaxed whitespace-pre-line">
                  {linkifyCitations(p.references).map((seg, i) =>
                    seg.href ? (
                      <a
                        key={i}
                        href={seg.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-mes-text-link hover:underline break-all"
                      >
                        {seg.text}
                      </a>
                    ) : (
                      <span key={i}>{seg.text}</span>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Feedback */}
          <Card padding="sm" className="border-dashed">
            <CardContent>
              <h3 className="text-sm font-semibold text-mes-text-primary mb-2">Suggest Changes</h3>
              <p className="text-xs text-mes-text-muted mb-3">
                Help improve this parameter's documentation.
              </p>
              <div className="space-y-2">
                <a
                  href={`${issueBase}?title=${encodeURIComponent(`Correction: ${p.name}`)}&body=${issueBody}${encodeURIComponent('**What needs correction:**\n\n**Suggested change:**\n\n**Source/reference:**\n')}&labels=parameter-feedback`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-xs text-mes-text-link hover:underline"
                >
                  Suggest a correction
                </a>
                <a
                  href={`${issueBase}?title=${encodeURIComponent(`Data: ${p.name}`)}&body=${issueBody}${encodeURIComponent('**New data to add:**\n\n**Source publication (DOI):**\n')}&labels=parameter-feedback`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-xs text-mes-text-link hover:underline"
                >
                  Add data or references
                </a>
                <a
                  href={`${issueBase}?title=${encodeURIComponent(`Problem: ${p.name}`)}&body=${issueBody}${encodeURIComponent('**Describe the problem:**\n')}&labels=parameter-feedback`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-xs text-mes-text-link hover:underline"
                >
                  Report a problem
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Back link */}
      <div className="pt-4 border-t border-gray-200">
        <a href="#/parameters" className="text-sm text-mes-text-link hover:underline">
          &larr; Back to Parameter Catalog
        </a>
      </div>
    </div>
  );
}
