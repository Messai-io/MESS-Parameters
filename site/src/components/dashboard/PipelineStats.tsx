import { StatCard } from '../layout/StatCard';
import { getExtractionStats, fmtNum } from '../../data/loader';

export function PipelineStats() {
  const stats = getExtractionStats();
  const corpus = stats.corpus ?? {};
  const extraction = stats.extraction ?? {};
  const quality = stats.quality ?? {};

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <StatCard
        label="Total Papers"
        value={fmtNum(corpus.totalPapers)}
        detail="In corpus"
      />
      <StatCard
        label="Parameters"
        value={fmtNum(extraction.parameterDefinitions)}
        detail={`${fmtNum(extraction.categories)} categories`}
      />
      <StatCard
        label="Extractions"
        value={fmtNum(extraction.paperParameterMappings)}
        detail="Parameter data points"
      />
      <StatCard
        label="Papers Scored"
        value={fmtNum(quality.papersWithReproducibilityScores)}
        detail="Reproducibility"
      />
    </div>
  );
}
