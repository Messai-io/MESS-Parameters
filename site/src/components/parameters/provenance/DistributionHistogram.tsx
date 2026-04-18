import { useMemo, useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine,
} from 'recharts';
import type { ProvEntry, ProvStats } from '../../../data/provenance';

interface Props {
  prov: ProvEntry;
  unit?: string | null;
}

interface BinRow {
  label: string;
  lower: number;
  upper: number;
  count: number;
}

function binsToRows(bins: number[], counts: number[]): BinRow[] {
  const rows: BinRow[] = [];
  for (let i = 0; i < counts.length; i++) {
    const lower = bins[i];
    const upper = bins[i + 1] ?? bins[i];
    rows.push({
      label: fmtRange(lower, upper),
      lower,
      upper,
      count: counts[i],
    });
  }
  return rows;
}

function fmtRange(lo: number, hi: number): string {
  const f = (x: number) => {
    if (!Number.isFinite(x)) return '—';
    if (Math.abs(x) >= 1000 || (x !== 0 && Math.abs(x) < 0.01)) return x.toExponential(1);
    const d = Math.abs(x) >= 10 ? 0 : 2;
    return x.toFixed(d);
  };
  return `${f(lo)}–${f(hi)}`;
}

function computeHistogramForValues(
  values: number[],
  binCount = 20,
): { bins: number[]; counts: number[] } {
  if (values.length === 0) return { bins: [], counts: [] };
  const min = Math.min(...values);
  const max = Math.max(...values);
  if (min === max) return { bins: [min, max], counts: [values.length] };
  const width = (max - min) / binCount;
  const bins: number[] = [];
  for (let i = 0; i <= binCount; i++) bins.push(min + i * width);
  const counts = new Array(binCount).fill(0);
  for (const v of values) {
    let idx = Math.floor((v - min) / width);
    if (idx === binCount) idx = binCount - 1;
    counts[idx]++;
  }
  return { bins, counts };
}

export function DistributionHistogram({ prov, unit }: Props) {
  const systems = useMemo(
    () => ['All', ...Object.keys(prov.stats_by_system)],
    [prov.stats_by_system],
  );
  const [selected, setSelected] = useState<string>('All');

  const rows: BinRow[] = useMemo(() => {
    if (selected === 'All') {
      return binsToRows(prov.distribution.bins, prov.distribution.counts);
    }
    // recompute histogram for the subset using sources from that system
    const subset = prov.sources.filter((s) => s.system_type === selected).map((s) => s.value);
    const { bins, counts } = computeHistogramForValues(subset, 20);
    return binsToRows(bins, counts);
  }, [selected, prov]);

  const stats: ProvStats | null =
    selected === 'All'
      ? prov.stats_global
      : prov.stats_by_system[selected] ?? null;

  if (rows.length === 0 || !stats) {
    return (
      <div className="text-sm text-mes-text-muted italic">
        Not enough data to render a distribution{selected !== 'All' ? ` for ${selected}` : ''}.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {systems.length > 1 && (
        <div className="flex items-center gap-2 text-xs">
          <span className="text-mes-text-muted uppercase tracking-wider">System:</span>
          {systems.map((s) => (
            <button
              key={s}
              onClick={() => setSelected(s)}
              className={`px-2 py-1 border ${selected === s ? 'border-mes-text-primary bg-gray-100 text-mes-text-primary' : 'border-gray-200 text-mes-text-secondary hover:bg-gray-50'}`}
            >
              {s}
            </button>
          ))}
        </div>
      )}

      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={rows} margin={{ top: 8, right: 8, left: 0, bottom: 24 }}>
            <CartesianGrid vertical={false} stroke="#e5e7eb" />
            <XAxis
              dataKey="label"
              fontSize={10}
              tick={{ fill: '#525252' }}
              angle={-35}
              textAnchor="end"
              height={48}
              interval={Math.max(0, Math.floor(rows.length / 8) - 1)}
            />
            <YAxis fontSize={10} tick={{ fill: '#525252' }} allowDecimals={false} />
            <Tooltip
              cursor={{ fill: 'rgba(0,0,0,0.04)' }}
              contentStyle={{ fontSize: 12, border: '1px solid #e5e7eb' }}
              formatter={(v: number) => [`${v} extractions`, 'Count']}
              labelFormatter={(l) => `${l}${unit ? ` ${unit}` : ''}`}
            />
            <ReferenceLine
              x={rows.find((r) => stats.p05 >= r.lower && stats.p05 <= r.upper)?.label}
              stroke="#737373"
              strokeDasharray="3 3"
              label={{ value: 'p05', fontSize: 9, fill: '#737373', position: 'top' }}
            />
            <ReferenceLine
              x={rows.find((r) => stats.p95 >= r.lower && stats.p95 <= r.upper)?.label}
              stroke="#737373"
              strokeDasharray="3 3"
              label={{ value: 'p95', fontSize: 9, fill: '#737373', position: 'top' }}
            />
            <Bar dataKey="count" fill="#525252" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 text-xs">
        <Stat label="n" value={stats.n.toLocaleString()} />
        <Stat label="Median" value={`${stats.median}${unit ? ` ${unit}` : ''}`} />
        <Stat label="Mean" value={`${stats.mean}${unit ? ` ${unit}` : ''}`} />
        <Stat label="p25–p75" value={`${stats.p25}–${stats.p75}`} />
        <Stat label="Min" value={`${stats.min}`} />
        <Stat label="Max" value={`${stats.max}`} />
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-gray-200 px-2 py-1">
      <div className="text-[10px] uppercase tracking-wider text-mes-text-muted">{label}</div>
      <div className="font-mono text-mes-text-primary">{value}</div>
    </div>
  );
}
