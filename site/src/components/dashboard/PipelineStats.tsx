import { StatCard } from '../layout/StatCard';
import { getExtractionStats, getProvenanceSummary, fmtNum } from '../../data/loader';

export function PipelineStats() {
  const stats = getExtractionStats();
  const corpus = stats.corpus ?? {};
  const extraction = stats.extraction ?? {};
  const quality = stats.quality ?? {};
  const prov = getProvenanceSummary();
  const doiPct = prov.sources.doi_coverage_pct;
  const tier1 = prov.tier1;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      <StatCard dense label="Papers" value={fmtNum(corpus.totalPapers)} detail="In corpus" />
      <StatCard
        dense
        label="Parameters"
        value={fmtNum(extraction.parameterDefinitions)}
        detail={`${fmtNum(extraction.categories)} categories`}
      />
      <StatCard
        dense
        label="Extractions"
        value={fmtNum(extraction.paperParameterMappings)}
        detail="Data points"
      />
      <StatCard
        dense
        label="Scored"
        value={fmtNum(quality.papersWithReproducibilityScores)}
        detail="Reproducibility"
      />
      <StatCard
        dense
        label="DOI Coverage"
        value={`${doiPct.toFixed(1)}%`}
        detail={`${fmtNum(prov.sources.with_doi)}/${fmtNum(prov.sources.total)} traced`}
      />
      <a href="#/methodology" className="block no-underline hover:-translate-y-px transition-transform">
        <StatCard
          dense
          label="Tier-1"
          value={`${tier1.pass_count}/${tier1.total_checks} ${tier1.overall_verdict}`}
          detail={`${(tier1.grounding_rate * 100).toFixed(1)}% grounded`}
        />
      </a>
    </div>
  );
}
