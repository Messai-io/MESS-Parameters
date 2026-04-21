import type { PairRow } from '../useCorrelationPairs';
import { isPhysicsEntryId, physicsFeatureName, type MaterialsFile } from '../../../data/materials';

interface Props {
  pair: PairRow;
  x: number;
  y: number;
  materials?: MaterialsFile | null;
}

function displayName(id: string, name: string): string {
  if (isPhysicsEntryId(id)) return `⊕ ${physicsFeatureName(id) ?? name}`;
  return name;
}

// Resolve up to 3 material slugs shared between the pair's DOI family. Since
// PairRow doesn't carry DOIs, we infer from the physics side when one arm is
// a synthetic pseudo-parameter; otherwise return empty.
function inferSlugs(pair: PairRow, materials?: MaterialsFile | null): string[] {
  if (!materials) return [];
  // If one side is a material physics pseudo-parameter, the pair is
  // definitionally constrained to DOIs linked to materials — list the most
  // paper-dense slugs here as a representative sample.
  const hasPhysics = isPhysicsEntryId(pair.a_id) || isPhysicsEntryId(pair.b_id);
  if (!hasPhysics) return [];
  return materials.slugs
    .filter((s) => s.n_papers > 0)
    .slice(0, 3)
    .map((s) => s.slug);
}

function pourbaixStates(slugs: string[], materials?: MaterialsFile | null): string[] {
  if (!materials) return [];
  const out: string[] = [];
  for (const slug of slugs) {
    const entry = materials.slugs.find((s) => s.slug === slug);
    if (!entry) continue;
    const states = Object.entries(entry.pourbaix);
    if (states.length === 0) continue;
    // Use MFC cathode state as the representative badge; fall back to first available.
    const preferred = entry.pourbaix.mfc_cathode ?? entry.pourbaix.mec_cathode ?? Object.values(entry.pourbaix)[0];
    out.push(`${slug}: ${preferred}`);
  }
  return out;
}

export function PairDetailPopover({ pair, x, y, materials }: Props) {
  const sign = pair.pearson_r > 0 ? 'positive' : pair.pearson_r < 0 ? 'negative' : 'zero';
  const color = sign === 'positive' ? '#5C7A5C' : sign === 'negative' ? '#6B3E3E' : '#7C7F82';
  const isPhysicsA = isPhysicsEntryId(pair.a_id);
  const isPhysicsB = isPhysicsEntryId(pair.b_id);
  const hasPhysics = isPhysicsA || isPhysicsB;
  const slugs = inferSlugs(pair, materials);
  const pour = pourbaixStates(slugs, materials);
  return (
    <div
      className="pointer-events-none absolute z-20 bg-white border border-gray-300 shadow-md p-3 text-xs font-mono min-w-[220px]"
      style={{ left: x + 12, top: y + 12 }}
    >
      <div className="font-sans text-[11px] text-mes-text-muted mb-1">A ↔ B</div>
      <div className="font-medium text-mes-text-primary mb-0.5">{displayName(pair.a_id, pair.a_name)}</div>
      <div className="font-medium text-mes-text-primary mb-2">{displayName(pair.b_id, pair.b_name)}</div>
      {hasPhysics && (
        <div
          className="text-[10px] mb-2 px-1.5 py-0.5 inline-block bg-[#3C5A7A] text-white"
          title="Material-physics feature is constant per material; r reflects across-material slope (ecological inference)."
          data-testid="physics-badge"
        >
          ⊕ physics feature
        </div>
      )}
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
      {pour.length > 0 && (
        <div
          className="mt-2 text-[10px] font-sans text-mes-text-secondary border-t pt-1"
          data-testid="pourbaix-row"
          title="Materials Project Pourbaix stability at the material's primary MES role"
        >
          Pourbaix: {pour.join(' · ')}
        </div>
      )}
    </div>
  );
}
