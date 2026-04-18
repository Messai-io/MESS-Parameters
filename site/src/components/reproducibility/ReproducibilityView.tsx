import { getReproducibility } from '../../data/loader';
import { StatCard } from '../layout/StatCard';
import { Card, CardTitle } from '../../ui/card';
import { ReportingRateChart } from './ReportingRateChart';
import { ChecklistCard } from './ChecklistCard';
import { ValidationResults } from './ValidationResults';

export function ReproducibilityView() {
  const data = getReproducibility();
  const overview = data.overview ?? {};
  const findings = data.keyFindings ?? {};
  const checklist = data.fiveParameterChecklist ?? {};
  const validation = checklist.validationStudy ?? {};
  const criteriaCategories = data.criteriaCategories ?? {};

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-serif font-bold text-mes-text-primary">
          Reproducibility Analysis
        </h1>
        <p className="mt-2 text-mes-text-secondary text-sm">
          Scoring {overview.totalPapersScored ?? '—'} papers against {overview.scoringCriteria ?? '—'} weighted criteria.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard
          label="Average"
          value={overview.averageCompletenessPercent != null ? `${overview.averageCompletenessPercent}%` : '—'}
          detail="Completeness"
        />
        <StatCard
          label="Median"
          value={overview.medianCompletenessPercent != null ? `${overview.medianCompletenessPercent}%` : '—'}
          detail="Completeness"
        />
        <StatCard
          label="Papers"
          value={overview.totalPapersScored ?? '—'}
          detail="Scored"
        />
        <StatCard
          label="Criteria"
          value={overview.scoringCriteria ?? '—'}
          detail="Weighted"
        />
      </div>

      <Card padding="sm">
        <CardTitle level={2} className="px-2 pt-2 mb-4">
          Reporting Rates by Category
        </CardTitle>
        <ReportingRateChart categories={criteriaCategories} />
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ChecklistCard
          parameters={checklist.parameters ?? []}
          description={checklist.description ?? ''}
        />
        <ValidationResults
          papersAnalyzed={validation.papersAnalyzed ?? 0}
          iqrReductionPercent={validation.iqrReductionPercent ?? 0}
          pValue={validation.pValue ?? ''}
          conclusion={validation.conclusion ?? ''}
        />
      </div>

      <Card padding="sm">
        <CardTitle level={2} className="mb-4">Key Findings</CardTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Object.entries(findings).map(([key, value]) => (
            <div key={key} className="space-y-1">
              <span className="text-xs text-mes-text-muted uppercase tracking-wider">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </span>
              <p className="text-sm text-mes-text-primary">{value}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
