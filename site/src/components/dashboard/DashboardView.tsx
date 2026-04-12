import { PipelineStats } from './PipelineStats';
import { CategoryBreakdown } from './CategoryBreakdown';
import { HighlightCard } from './HighlightCard';
import { Card, CardTitle, CardDescription } from '../../ui/card';
import { Button } from '../../ui/button';
import { getCorrelations, getReproducibility } from '../../data/loader';

export function DashboardView() {
  const correlations = getCorrelations();
  const repro = getReproducibility();
  const significant = correlations.allCorrelations.filter((c) => c.strength === 'moderate' || c.strength === 'strong');

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-serif font-bold text-mes-text-primary">
          MESS-Parameters Explorer
        </h1>
        <p className="mt-2 text-mes-text-secondary">
          Browse 687 microbial electrochemical system parameters and 25,566 extracted values from 23,332 research papers.
        </p>
      </div>

      <PipelineStats />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card padding="sm">
          <CardTitle level={2} className="mb-4 px-2 pt-2">
            Parameters by Category
          </CardTitle>
          <CategoryBreakdown />
        </Card>

        <div className="space-y-4">
          <CardTitle level={2}>Significant Correlations</CardTitle>
          <CardDescription className="!mt-0">
            {correlations.significantCorrelations} of {correlations.totalCorrelations} correlations
            reached statistical significance (p &lt; 0.05)
          </CardDescription>
          {significant.map((c, i) => (
            <HighlightCard key={i} correlation={c} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card padding="sm">
          <div className="flex flex-col gap-1 p-2">
            <span className="text-xs text-mes-text-muted uppercase tracking-wider">
              Reproducibility
            </span>
            <span className="text-3xl font-serif font-bold text-mes-text-primary">
              {repro.overview.averageCompletenessPercent}%
            </span>
            <span className="text-sm text-mes-text-secondary">
              Average completeness across {repro.overview.totalPapersScored} papers
            </span>
            <a
              href="#/reproducibility"
              className="text-sm text-mes-text-link hover:underline mt-2"
            >
              View full analysis &rarr;
            </a>
          </div>
        </Card>

        <Card padding="sm" className="flex flex-col justify-center items-center gap-4 py-8">
          <p className="text-center text-mes-text-secondary text-sm">
            Explore the complete parameter ontology with search, filtering, and range visualizations.
          </p>
          <Button
            variant="primary"
            onClick={() => { window.location.hash = '#/parameters'; }}
          >
            Browse Parameter Catalog
          </Button>
        </Card>
      </div>
    </div>
  );
}
