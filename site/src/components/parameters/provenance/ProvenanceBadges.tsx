import type { ProvEntry } from '../../../data/provenance';

interface Props {
  prov: ProvEntry;
}

function Badge({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="flex-1 min-w-[8rem] border border-gray-200 bg-white px-3 py-2">
      <div className="text-[10px] uppercase tracking-wider text-mes-text-muted">{label}</div>
      <div className="text-lg font-mono text-mes-text-primary mt-0.5">{value}</div>
      {hint && <div className="text-[10px] text-mes-text-muted mt-0.5">{hint}</div>}
    </div>
  );
}

export function ProvenanceBadges({ prov }: Props) {
  const verifiedPct = prov.n_papers > 0
    ? Math.round((prov.n_verified / prov.n_papers) * 100)
    : 0;

  return (
    <div className="flex flex-wrap gap-2">
      <Badge
        label="Papers"
        value={prov.n_papers.toLocaleString()}
        hint={`${prov.n_values.toLocaleString()} extractions`}
      />
      <Badge
        label="Verified MES"
        value={prov.n_verified.toLocaleString()}
        hint={`${verifiedPct}% of papers`}
      />
      <Badge
        label="Mean confidence"
        value={prov.mean_confidence.toFixed(2)}
        hint="Extraction score"
      />
      <Badge
        label="Systems covered"
        value={Object.keys(prov.stats_by_system).length.toString()}
        hint={Object.keys(prov.stats_by_system).join(', ') || '—'}
      />
    </div>
  );
}
