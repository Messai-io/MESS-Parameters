import type { PairRow } from '../useCorrelationPairs';

interface Props {
  pair: PairRow;
  x: number;
  y: number;
}

export function PairDetailPopover({ pair, x, y }: Props) {
  const sign = pair.pearson_r > 0 ? 'positive' : pair.pearson_r < 0 ? 'negative' : 'zero';
  const color = sign === 'positive' ? '#5C7A5C' : sign === 'negative' ? '#6B3E3E' : '#7C7F82';
  return (
    <div
      className="pointer-events-none absolute z-20 bg-white border border-gray-300 shadow-md p-3 text-xs font-mono min-w-[220px]"
      style={{ left: x + 12, top: y + 12 }}
    >
      <div className="font-sans text-[11px] text-mes-text-muted mb-1">A ↔ B</div>
      <div className="font-medium text-mes-text-primary mb-0.5">{pair.a_name}</div>
      <div className="font-medium text-mes-text-primary mb-2">{pair.b_name}</div>
      <div className="grid grid-cols-2 gap-x-3 gap-y-1 tabular-nums">
        <span className="text-mes-text-muted">Pearson r</span>
        <span className="text-right" style={{ color }}>{pair.pearson_r.toFixed(3)}</span>
        <span className="text-mes-text-muted">log₁₀ r</span>
        <span className="text-right">{pair.pearson_r_log !== null ? pair.pearson_r_log.toFixed(3) : '—'}</span>
        <span className="text-mes-text-muted">Spearman ρ</span>
        <span className="text-right">{pair.spearman_rho !== null ? pair.spearman_rho.toFixed(3) : '—'}</span>
        <span className="text-mes-text-muted">n</span>
        <span className="text-right">{pair.n}</span>
        {Math.abs(pair.n_eff - pair.n) >= 0.5 ? (
          <>
            <span className="text-mes-text-muted">n_eff</span>
            <span className="text-right">{pair.n_eff.toFixed(1)}</span>
          </>
        ) : null}
        <span className="text-mes-text-muted" title="BH-FDR q-value across currently displayed pairs">q (BH)</span>
        <span className="text-right">{pair.p_corrected.toExponential(2)}</span>
        <span className="text-mes-text-muted">Sig.</span>
        <span className="text-right">{pair.significant ? 'yes' : 'ns'}</span>
      </div>
    </div>
  );
}
