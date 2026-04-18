import type { ProvCorrelation } from '../../../data/provenance';

interface Props {
  correlations: ProvCorrelation[];
  paramNameToSlug: (name: string) => string;
}

function barColor(r: number, significant: boolean): string {
  if (!significant) return '#a3a3a3';
  return r > 0 ? '#047857' : '#b91c1c';
}

export function CorrelationMiniMatrix({ correlations, paramNameToSlug }: Props) {
  if (correlations.length === 0) {
    return (
      <div className="text-sm text-mes-text-muted italic">
        No parameter-to-parameter correlations reached n ≥ 30 shared papers.
      </div>
    );
  }

  const maxAbs = Math.max(...correlations.map((c) => Math.abs(c.pearson_r)), 0.0001);

  return (
    <div className="space-y-2">
      {correlations.map((c) => {
        const slug = paramNameToSlug(c.other_param_name);
        const width = (Math.abs(c.pearson_r) / maxAbs) * 50; // max 50% width of the bar lane
        const isPositive = c.pearson_r >= 0;
        return (
          <div key={c.other_param_id} className="grid grid-cols-[1fr,140px,auto] items-center gap-3 text-xs">
            <a
              href={`#/parameter/${slug}`}
              className="text-mes-text-primary hover:text-mes-text-link hover:underline truncate"
              title={c.other_param_name}
            >
              {c.other_param_name}
            </a>
            <div className="relative h-4 bg-gray-50 border border-gray-200">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300" />
              <div
                className="absolute top-0 bottom-0"
                style={{
                  backgroundColor: barColor(c.pearson_r, c.significant),
                  left: isPositive ? '50%' : `${50 - width}%`,
                  width: `${width}%`,
                }}
              />
            </div>
            <div className="flex items-center gap-2 font-mono tabular-nums">
              <span className="text-mes-text-primary w-14 text-right">
                r = {c.pearson_r.toFixed(2)}
              </span>
              <span className="text-mes-text-muted w-10">n={c.n}</span>
              {c.significant ? (
                <span className="text-green-700 text-[10px] border border-green-200 bg-green-50 px-1">
                  p&lt;α
                </span>
              ) : (
                <span className="text-mes-text-muted text-[10px]">ns</span>
              )}
            </div>
          </div>
        );
      })}
      <div className="text-[10px] text-mes-text-muted pt-1 border-t border-gray-100">
        Significance is Bonferroni-corrected across all tested pairs. Only correlations with n ≥ 30
        shared papers are tested.
      </div>
    </div>
  );
}
