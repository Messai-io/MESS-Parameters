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
    <div className="space-y-5 animate-fade-in">
      <div>
        <h1 className="text-2xl font-serif font-bold text-mes-text-primary leading-tight">
          Reproducibility Analysis
        </h1>
        <p className="mt-1 text-mes-text-secondary text-sm leading-relaxed">
          Scoring {overview.totalPapersScored ?? '—'} papers against {overview.scoringCriteria ?? '—'} weighted criteria.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <StatCard
          dense
          label="Average"
          value={overview.averageCompletenessPercent != null ? `${overview.averageCompletenessPercent}%` : '—'}
          detail="Completeness"
        />
        <StatCard
          dense
          label="Median"
          value={overview.medianCompletenessPercent != null ? `${overview.medianCompletenessPercent}%` : '—'}
          detail="Completeness"
        />
        <StatCard dense label="Papers" value={overview.totalPapersScored ?? '—'} detail="Scored" />
        <StatCard dense label="Criteria" value={overview.scoringCriteria ?? '—'} detail="Weighted" />
      </div>

      {/* Lead chart — above the fold */}
      <Card padding="none">
        <div className="px-4 pt-3 pb-1 flex items-baseline justify-between">
          <CardTitle level={3} className="!text-base">Reporting Rates by Category</CardTitle>
          <span className="text-[10px] uppercase tracking-wider text-mes-text-muted">
            % of papers reporting
          </span>
        </div>
        <ReportingRateChart categories={criteriaCategories} />
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        <CardTitle level={3} className="mb-3 !text-base">Key Findings</CardTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {Object.entries(findings).map(([key, value]) => (
            <div key={key} className="space-y-0.5">
              <span className="text-[10px] text-mes-text-muted uppercase tracking-wider">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </span>
              <p className="text-sm text-mes-text-primary leading-relaxed">{value}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
