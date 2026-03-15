import { StatCard } from '../layout/StatCard';
import { getExtractionStats } from '../../data/loader';

export function PipelineStats() {
  const stats = getExtractionStats();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <StatCard
        label="Total Papers"
        value={stats.corpus.totalPapers.toLocaleString()}
        detail="In corpus"
      />
      <StatCard
        label="Parameters"
        value={stats.extraction.parameterDefinitions.toLocaleString()}
        detail={`${stats.extraction.categories} categories`}
      />
      <StatCard
        label="Extractions"
        value={stats.extraction.totalExtractions.toLocaleString()}
        detail="Parameter data points"
      />
      <StatCard
        label="Papers Scored"
        value={stats.quality.papersWithReproducibilityScores.toLocaleString()}
        detail="Reproducibility"
      />
    </div>
  );
}
