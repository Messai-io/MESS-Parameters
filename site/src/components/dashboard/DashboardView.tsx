import { PipelineStats } from './PipelineStats';
import { CategoryBreakdown } from './CategoryBreakdown';
import { HighlightCard } from './HighlightCard';
import { Card, CardTitle } from '../../ui/card';
import { Button } from '../../ui/button';
import { getCorrelations, getReproducibility } from '../../data/loader';

export function DashboardView() {
  const correlations = getCorrelations();
  const repro = getReproducibility();
  const allCorr = correlations.allCorrelations ?? [];
  const significant = allCorr.filter((c) => c.strength === 'moderate' || c.strength === 'strong');
  const topThree = significant.slice(0, 3);
  const overview = repro.overview ?? {};

  return (
    <div className="space-y-5 animate-fade-in">
      <div>
        <h1 className="text-2xl font-serif font-bold text-mes-text-primary leading-tight">
          MESS-Parameters Explorer
        </h1>
        <p className="mt-1 text-mes-text-secondary text-sm max-w-3xl leading-relaxed">
          Browse 687 microbial electrochemical system parameters and 18,113 extracted values from 23,332 research papers.
        </p>
      </div>

      <PipelineStats />

      {/* Lead chart row — above the fold */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <Card padding="none" className="lg:col-span-3">
          <div className="px-4 pt-3 pb-1 flex items-baseline justify-between">
            <CardTitle level={3} className="!text-base">Parameters by Category</CardTitle>
            <span className="text-[10px] uppercase tracking-wider text-mes-text-muted">
              Coverage
            </span>
          </div>
          <CategoryBreakdown />
        </Card>

        <div className="lg:col-span-2 flex flex-col gap-3">
          <div className="flex items-baseline justify-between">
            <h2 className="text-base font-serif font-semibold text-mes-text-primary">
              Top Correlations
            </h2>
            <a
              href="#/correlations"
              className="text-xs text-mes-text-link hover:underline"
            >
              {correlations.significantCorrelations ?? 0} significant →
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 flex-1">
            {topThree.map((c, i) => (
              <HighlightCard key={i} correlation={c} />
            ))}
          </div>
        </div>
      </div>

      {/* Secondary callout strip — below the fold */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card padding="none" className="px-4 py-3">
          <span className="text-[10px] text-mes-text-muted uppercase tracking-wider">
            Reproducibility
          </span>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-2xl font-serif font-bold text-mes-text-primary leading-tight">
              {overview.averageCompletenessPercent ?? '—'}%
            </span>
            <span className="text-xs text-mes-text-muted">
              avg · {overview.totalPapersScored ?? '—'} papers
            </span>
          </div>
          <a
            href="#/reproducibility"
            className="block mt-2 text-xs text-mes-text-link hover:underline"
          >
            View full analysis →
          </a>
        </Card>

        <Card padding="none" className="px-4 py-3 md:col-span-2 flex items-center justify-between gap-3">
          <p className="text-sm text-mes-text-secondary leading-snug">
            Explore the complete parameter ontology with search, filtering, and range visualizations.
          </p>
          <Button
            variant="primary"
            onClick={() => {
              window.location.hash = '#/parameters';
            }}
          >
            Browse Catalog
          </Button>
        </Card>
      </div>
    </div>
  );
}
