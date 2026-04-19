import type { ProvEntry } from './provenance';

// Student's t-distribution two-tailed p-value — mirrors scripts/build-provenance.ts
// (Lanczos lgamma + regularized incomplete beta). Matches Python impl to 1e-10.

function lgamma(x: number): number {
  const g = 7;
  const c = [
    0.99999999999980993, 676.5203681218851, -1259.1392167224028,
    771.32342877765313, -176.61502916214059, 12.507343278686905,
    -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7,
  ];
  if (x < 0.5) {
    return Math.log(Math.PI / Math.sin(Math.PI * x)) - lgamma(1 - x);
  }
  x -= 1;
  let a = c[0];
  const t = x + g + 0.5;
  for (let i = 1; i < g + 2; i++) a += c[i] / (x + i);
  return 0.5 * Math.log(2 * Math.PI) + (x + 0.5) * Math.log(t) - t + Math.log(a);
}

function betacf(a: number, b: number, x: number): number {
  const MAX_ITER = 200;
  const EPS = 3e-15;
  const TINY = 1e-300;
  const qab = a + b;
  const qap = a + 1;
  const qam = a - 1;
  let c = 1;
  let d = 1 - (qab * x) / qap;
  if (Math.abs(d) < TINY) d = TINY;
  d = 1 / d;
  let h = d;
  for (let m = 1; m <= MAX_ITER; m++) {
    const m2 = 2 * m;
    let aa = (m * (b - m) * x) / ((qam + m2) * (a + m2));
    d = 1 + aa * d;
    if (Math.abs(d) < TINY) d = TINY;
    c = 1 + aa / c;
    if (Math.abs(c) < TINY) c = TINY;
    d = 1 / d;
    h *= d * c;
    aa = (-(a + m) * (qab + m) * x) / ((a + m2) * (qap + m2));
    d = 1 + aa * d;
    if (Math.abs(d) < TINY) d = TINY;
    c = 1 + aa / c;
    if (Math.abs(c) < TINY) c = TINY;
    d = 1 / d;
    const delta = d * c;
    h *= delta;
    if (Math.abs(delta - 1) < EPS) return h;
  }
  return h;
}

function betainc(a: number, b: number, x: number): number {
  if (x <= 0) return 0;
  if (x >= 1) return 1;
  const lbeta = lgamma(a + b) - lgamma(a) - lgamma(b);
  const front = Math.exp(lbeta + a * Math.log(x) + b * Math.log1p(-x));
  if (x < (a + 1) / (a + b + 2)) return (front * betacf(a, b, x)) / a;
  return 1 - (front * betacf(b, a, 1 - x)) / b;
}

export function studentsTTwoTailP(r: number, n: number): number {
  if (n < 3) return NaN;
  if (Math.abs(r) >= 1) return 0;
  const t = r * Math.sqrt((n - 2) / (1 - r * r));
  const df = n - 2;
  return betainc(df / 2, 0.5, df / (df + t * t));
}

export function pearson(xs: number[], ys: number[]): number | null {
  if (xs.length !== ys.length || xs.length < 3) return null;
  const n = xs.length;
  const mx = xs.reduce((s, v) => s + v, 0) / n;
  const my = ys.reduce((s, v) => s + v, 0) / n;
  let num = 0, dx = 0, dy = 0;
  for (let i = 0; i < n; i++) {
    const ax = xs[i] - mx;
    const ay = ys[i] - my;
    num += ax * ay;
    dx += ax * ax;
    dy += ay * ay;
  }
  if (dx === 0 || dy === 0) return null;
  return num / Math.sqrt(dx * dy);
}

export function averageRanks(values: number[]): number[] {
  const n = values.length;
  const indexed = values.map((v, i) => ({ v, i }));
  indexed.sort((a, b) => a.v - b.v);
  const ranks = new Array<number>(n);
  let i = 0;
  while (i < n) {
    let j = i;
    while (j + 1 < n && indexed[j + 1].v === indexed[i].v) j++;
    const avgRank = (i + 1 + j + 1) / 2;
    for (let k = i; k <= j; k++) ranks[indexed[k].i] = avgRank;
    i = j + 1;
  }
  return ranks;
}

export function spearman(xs: number[], ys: number[]): number | null {
  if (xs.length !== ys.length || xs.length < 3) return null;
  return pearson(averageRanks(xs), averageRanks(ys));
}

export interface ComputedPair {
  a_id: string;
  a_name: string;
  b_id: string;
  b_name: string;
  pearson_r: number;
  spearman_rho: number | null;
  n: number;
  p_raw: number;
  p_corrected: number;
  significant: boolean;
}

// Build a DOI → value map per parameter (first occurrence wins, ties by higher confidence).
function indexSourcesByDoi(
  entry: ProvEntry,
  systemType: string | null,
): Map<string, number> {
  const map = new Map<string, { value: number; confidence: number }>();
  for (const s of entry.sources) {
    if (!s.doi) continue;
    if (systemType && s.system_type !== systemType) continue;
    if (!Number.isFinite(s.value)) continue;
    const existing = map.get(s.doi);
    if (!existing || s.confidence > existing.confidence) {
      map.set(s.doi, { value: s.value, confidence: s.confidence });
    }
  }
  const out = new Map<string, number>();
  for (const [doi, v] of map) out.set(doi, v.value);
  return out;
}

/**
 * Recompute all pairwise correlations for a given system-type subset.
 *
 * Joins parameter sources by DOI, filters by system_type when provided,
 * then runs Pearson + Spearman + Bonferroni-corrected p-values on pairs
 * meeting the minimum-n threshold.
 */
export function computePairs(
  entries: ProvEntry[],
  systemType: string | null,
  minN: number,
): { pairs: ComputedPair[]; alpha: number } {
  const doiMaps: Array<{ entry: ProvEntry; dois: Map<string, number> }> = [];
  for (const entry of entries) {
    const dois = indexSourcesByDoi(entry, systemType);
    if (dois.size >= 3) doiMaps.push({ entry, dois });
  }

  const rawPairs: Array<Omit<ComputedPair, 'p_corrected' | 'significant'>> = [];

  for (let i = 0; i < doiMaps.length; i++) {
    const a = doiMaps[i];
    for (let j = i + 1; j < doiMaps.length; j++) {
      const b = doiMaps[j];
      const shared: string[] = [];
      const small = a.dois.size < b.dois.size ? a.dois : b.dois;
      const big = small === a.dois ? b.dois : a.dois;
      for (const doi of small.keys()) if (big.has(doi)) shared.push(doi);
      if (shared.length < minN) continue;

      const xs: number[] = [];
      const ys: number[] = [];
      for (const doi of shared) {
        xs.push(a.dois.get(doi)!);
        ys.push(b.dois.get(doi)!);
      }
      const r = pearson(xs, ys);
      if (r === null) continue;
      const rho = spearman(xs, ys);
      const p = studentsTTwoTailP(r, xs.length);

      rawPairs.push({
        a_id: a.entry.id,
        a_name: a.entry.name,
        b_id: b.entry.id,
        b_name: b.entry.name,
        pearson_r: r,
        spearman_rho: rho,
        n: xs.length,
        p_raw: p,
      });
    }
  }

  const total = Math.max(1, rawPairs.length);
  const alpha = 0.05 / total;

  const pairs: ComputedPair[] = rawPairs.map((p) => {
    const p_corrected = Math.min(1, p.p_raw * total);
    return { ...p, p_corrected, significant: p.p_raw < alpha };
  });

  pairs.sort((x, y) => Math.abs(y.pearson_r) - Math.abs(x.pearson_r));
  return { pairs, alpha };
}
