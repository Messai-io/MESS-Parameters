/**
 * Shared statistics helpers used by build-provenance.ts,
 * build-conditional-stats.ts, and the analysis scripts under
 * scripts/analyze/. Canonical implementations for quantile / median /
 * robust-scale / basic summary stats so every consumer produces the
 * same numbers for the same input.
 */

export interface Stats {
  n: number;
  min: number; max: number;
  mean: number;
  median: number; p05: number; p25: number; p75: number; p95: number;
  std: number;
  mad: number;        // median absolute deviation × 1.4826
  iqr: number;
  n_outliers: number; // count outside [p25 − 1.5·iqr, p75 + 1.5·iqr]
}

export function round(x: number, digits: number): number {
  const p = Math.pow(10, digits);
  return Math.round(x * p) / p;
}

export function quantile(sorted: number[], q: number): number {
  const pos = (sorted.length - 1) * q;
  const base = Math.floor(pos);
  const rest = pos - base;
  const next = sorted[base + 1] ?? sorted[base];
  return sorted[base] + rest * (next - sorted[base]);
}

export function computeStats(values: number[]): Stats | null {
  if (values.length === 0) return null;
  const sorted = [...values].sort((a, b) => a - b);
  const n = sorted.length;
  const mean = sorted.reduce((s, v) => s + v, 0) / n;
  const variance = n > 1
    ? sorted.reduce((s, v) => s + (v - mean) ** 2, 0) / (n - 1)
    : 0;
  const median = quantile(sorted, 0.5);
  const p25 = quantile(sorted, 0.25);
  const p75 = quantile(sorted, 0.75);
  const iqr = p75 - p25;
  const absDevs = sorted.map((v) => Math.abs(v - median)).sort((a, b) => a - b);
  const mad = quantile(absDevs, 0.5) * 1.4826;
  const lowerFence = p25 - 1.5 * iqr;
  const upperFence = p75 + 1.5 * iqr;
  const n_outliers = sorted.reduce(
    (s, v) => s + (v < lowerFence || v > upperFence ? 1 : 0),
    0,
  );
  return {
    n,
    min: sorted[0],
    max: sorted[n - 1],
    mean: round(mean, 6),
    median: round(median, 6),
    p05: round(quantile(sorted, 0.05), 6),
    p25: round(p25, 6),
    p75: round(p75, 6),
    p95: round(quantile(sorted, 0.95), 6),
    std: round(Math.sqrt(variance), 6),
    mad: round(mad, 6),
    iqr: round(iqr, 6),
    n_outliers,
  };
}

/** Count per-key frequency for categorical fields (mode helper). */
export function modeMap(xs: (string | null | undefined)[]): Map<string, number> {
  const m = new Map<string, number>();
  for (const x of xs) {
    if (x == null) continue;
    const k = String(x).trim();
    if (!k) continue;
    m.set(k, (m.get(k) || 0) + 1);
  }
  return m;
}

/** Default numeric bin schemes for continuous context fields. */
export const TEMPERATURE_BINS: [string, (c: number) => boolean][] = [
  ['<20C',     (c) => c < 20],
  ['20-25C',   (c) => c >= 20 && c < 25],
  ['25-30C',   (c) => c >= 25 && c < 30],
  ['30-35C',   (c) => c >= 30 && c < 35],
  ['35-45C',   (c) => c >= 35 && c < 45],
  ['>=45C',    (c) => c >= 45],
];

export const PH_BINS: [string, (v: number) => boolean][] = [
  ['<5.5',     (v) => v < 5.5],
  ['5.5-6.5',  (v) => v >= 5.5 && v < 6.5],
  ['6.5-7.5',  (v) => v >= 6.5 && v < 7.5],
  ['7.5-8.5',  (v) => v >= 7.5 && v < 8.5],
  ['>=8.5',    (v) => v >= 8.5],
];

export function binLabel<T>(
  value: T | null | undefined,
  bins: [string, (v: T) => boolean][],
): string | null {
  if (value == null) return null;
  for (const [label, pred] of bins) {
    if (pred(value)) return label;
  }
  return null;
}
