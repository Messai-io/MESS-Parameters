import type { PairRow } from '../useCorrelationPairs';
import { nameToSlug } from '../useCorrelationPairs';

interface Props {
  pairs: PairRow[];
}

export function CorrelationPairTable({ pairs }: Props) {
  if (pairs.length === 0) {
    return (
      <div className="py-12 text-center text-sm text-mes-text-muted italic">
        No pairs meet the current filters.
      </div>
    );
  }
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead className="border-b border-gray-200 bg-gray-50">
          <tr>
            <th className="px-3 py-2 text-left text-[10px] uppercase tracking-wider font-medium text-mes-text-muted">Parameter A</th>
            <th className="px-3 py-2 text-left text-[10px] uppercase tracking-wider font-medium text-mes-text-muted">Parameter B</th>
            <th className="px-3 py-2 text-right text-[10px] uppercase tracking-wider font-medium text-mes-text-muted">r</th>
            <th className="px-3 py-2 text-right text-[10px] uppercase tracking-wider font-medium text-mes-text-muted">ρ</th>
            <th className="px-3 py-2 text-right text-[10px] uppercase tracking-wider font-medium text-mes-text-muted">n</th>
            <th className="px-3 py-2 text-right text-[10px] uppercase tracking-wider font-medium text-mes-text-muted">p (corr.)</th>
            <th className="px-3 py-2 text-left text-[10px] uppercase tracking-wider font-medium text-mes-text-muted">Sig.</th>
          </tr>
        </thead>
        <tbody>
          {pairs.map((r) => (
            <tr key={`${r.a_id}|${r.b_id}`} className="border-b border-gray-100 hover:bg-gray-50">
              <td className="px-3 py-2">
                <a
                  href={`#/parameter/${nameToSlug(r.a_name)}`}
                  className="text-mes-text-link hover:underline"
                >
                  {r.a_name}
                </a>
              </td>
              <td className="px-3 py-2">
                <a
                  href={`#/parameter/${nameToSlug(r.b_name)}`}
                  className="text-mes-text-link hover:underline"
                >
                  {r.b_name}
                </a>
              </td>
              <td className="px-3 py-2 text-right font-mono tabular-nums">
                <span className={r.pearson_r > 0 ? 'text-[#5C7A5C]' : 'text-[#6B3E3E]'}>
                  {r.pearson_r.toFixed(3)}
                </span>
              </td>
              <td className="px-3 py-2 text-right font-mono tabular-nums text-mes-text-secondary">
                {r.spearman_rho !== null ? r.spearman_rho.toFixed(3) : '—'}
              </td>
              <td className="px-3 py-2 text-right font-mono tabular-nums">{r.n}</td>
              <td className="px-3 py-2 text-right font-mono tabular-nums">
                {r.p_corrected.toExponential(2)}
              </td>
              <td className="px-3 py-2">
                {r.significant ? (
                  <span className="inline-block px-1.5 py-0.5 text-[10px] font-medium bg-green-50 text-green-700 border border-green-200">
                    yes
                  </span>
                ) : (
                  <span className="text-mes-text-muted text-xs">ns</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
