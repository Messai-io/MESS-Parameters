import type { ProvEntry, ProvSource } from './provenance';

// ─────────────────────────────────────────────────────────────────────
// Student's t two-tailed p-value (Lanczos lgamma + regularized
// incomplete beta). Mirrors scripts/build-provenance.ts → 1e-10.
// ─────────────────────────────────────────────────────────────────────

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

// ─────────────────────────────────────────────────────────────────────
// Unweighted Pearson / Spearman (kept for tests + legacy callers).
// ─────────────────────────────────────────────────────────────────────

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

// ─────────────────────────────────────────────────────────────────────
// Weighted variants. Weights reflect paper quality (reproducibility).
// ─────────────────────────────────────────────────────────────────────

export function weightedPearson(xs: number[], ys: number[], ws: number[]): number | null {
  if (xs.length !== ys.length || xs.length !== ws.length || xs.length < 3) return null;
  const sw = ws.reduce((s, w) => s + w, 0);
  if (sw <= 0) return null;
  let mx = 0, my = 0;
  for (let i = 0; i < xs.length; i++) { mx += ws[i] * xs[i]; my += ws[i] * ys[i]; }
  mx /= sw;
  my /= sw;
  let num = 0, dx = 0, dy = 0;
  for (let i = 0; i < xs.length; i++) {
    const ax = xs[i] - mx, ay = ys[i] - my;
    num += ws[i] * ax * ay;
    dx += ws[i] * ax * ax;
    dy += ws[i] * ay * ay;
  }
  if (dx === 0 || dy === 0) return null;
  return num / Math.sqrt(dx * dy);
}

export function weightedSpearman(xs: number[], ys: number[], ws: number[]): number | null {
  if (xs.length !== ys.length || xs.length < 3) return null;
  return weightedPearson(averageRanks(xs), averageRanks(ys), ws);
}

// Kish's effective sample size — under weighting, the power to reject H₀
// is set by (Σw)²/Σw² rather than raw n. Fractional; round for use with
// Student's t (which takes integer df).
export function effectiveSampleSize(ws: number[]): number {
  const sw = ws.reduce((s, w) => s + w, 0);
  const sw2 = ws.reduce((s, w) => s + w * w, 0);
  return sw2 > 0 ? (sw * sw) / sw2 : 0;
}

// ─────────────────────────────────────────────────────────────────────
// Benjamini-Hochberg FDR adjustment. Returns per-test adjusted p-values
// such that p_adj_i ≤ q implies FDR ≤ q (under independence).
// ─────────────────────────────────────────────────────────────────────

export function bhAdjustPValues(pvals: number[]): number[] {
  const m = pvals.length;
  if (m === 0) return [];
  const indexed = pvals
    .map((p, i) => ({ p: Number.isFinite(p) ? p : 1, i }))
    .sort((a, b) => a.p - b.p);
  const adjusted = new Array<number>(m);
  let runningMin = 1;
  for (let k = m - 1; k >= 0; k--) {
    const { p, i } = indexed[k];
    const candidate = Math.min(1, (p * m) / (k + 1));
    runningMin = Math.min(runningMin, candidate);
    adjusted[i] = runningMin;
  }
  return adjusted;
}

// ─────────────────────────────────────────────────────────────────────
// System-type whitelist. Upstream extractors occasionally leak journal
// names, years, or quoted titles into this field; collapse everything
// unfamiliar to UNSPECIFIED so downstream aggregates aren't polluted.
// ─────────────────────────────────────────────────────────────────────

const CANONICAL_SYSTEMS = new Set(['MFC', 'MEC', 'MDC', 'MES', 'BES', 'SMFC']);

export function normalizeSystemType(raw: string | null | undefined): string {
  const s = (raw ?? '').trim();
  const upper = s.toUpperCase();
  if (CANONICAL_SYSTEMS.has(upper)) return upper;
  if (/microbial\s+fuel\s+cell/i.test(s)) return /sediment/i.test(s) ? 'SMFC' : 'MFC';
  if (/microbial\s+electrolysis\s+cell/i.test(s)) return 'MEC';
  if (/microbial\s+desalination\s+cell/i.test(s)) return 'MDC';
  if (/microbial\s+electrochemical\s+system/i.test(s)) return 'MES';
  if (/bioelectrochemical\s+system/i.test(s)) return 'BES';
  return 'UNSPECIFIED';
}

// ─────────────────────────────────────────────────────────────────────
// Per-source weighting. reproducibility_score (0..1) is the 26-criterion
// rubric output; fall back to 0.5 (neutral) when the paper wasn't scored.
// Floored at 0.1 so unscored papers still contribute some signal.
// ─────────────────────────────────────────────────────────────────────

export function sourceWeight(s: ProvSource): number {
  const r = s.reproducibility_score;
  const base = r != null && Number.isFinite(r) ? r : 0.5;
  return Math.max(0.1, base);
}

// ─────────────────────────────────────────────────────────────────────
// Pairwise correlation computation with weighting + log + BH.
// ─────────────────────────────────────────────────────────────────────

export interface ComputedPair {
  a_id: string;
  a_name: string;
  b_id: string;
  b_name: string;
  pearson_r: number;          // weighted Pearson on raw values
  pearson_r_log: number | null; // weighted Pearson on log10(values) — null if any value ≤ 0
  spearman_rho: number | null;  // weighted Spearman (rank-based, log-invariant)
  n: number;                    // raw sample count (shared papers)
  n_eff: number;                // Kish effective sample size under weighting
  p_raw: number;                // uncorrected two-tailed p on weighted r at n_eff
  p_corrected: number;          // BH-FDR adjusted p across the family
  significant: boolean;         // p_corrected < 0.05 (q<0.05)
}

interface JoinRow {
  value: number;
  weight: number;
  confidence: number;
}

function indexSourcesByDoi(
  entry: ProvEntry,
  systemType: string | null,
  doiAllow: Set<string> | null,
): Map<string, JoinRow> {
  const map = new Map<string, JoinRow>();
  for (const s of entry.sources) {
    if (!s.doi) continue;
    if (doiAllow && !doiAllow.has(s.doi)) continue;
    if (systemType && normalizeSystemType(s.system_type) !== systemType) continue;
    if (!Number.isFinite(s.value)) continue;
    const w = sourceWeight(s);
    const existing = map.get(s.doi);
    if (!existing || s.confidence > existing.confidence) {
      map.set(s.doi, { value: s.value, weight: w, confidence: s.confidence });
    }
  }
  return map;
}

export function computePairs(
  entries: ProvEntry[],
  systemType: string | null,
  minN: number,
  doiAllow: Set<string> | null = null,
): { pairs: ComputedPair[]; nTests: number } {
  const doiMaps: Array<{ entry: ProvEntry; dois: Map<string, JoinRow> }> = [];
  for (const entry of entries) {
    const dois = indexSourcesByDoi(entry, systemType, doiAllow);
    if (dois.size >= 3) doiMaps.push({ entry, dois });
  }

  const rawPairs: Array<Omit<ComputedPair, 'p_corrected' | 'significant'>> = [];

  for (let i = 0; i < doiMaps.length; i++) {
    const a = doiMaps[i];
    for (let j = i + 1; j < doiMaps.length; j++) {
      const b = doiMaps[j];
      const small = a.dois.size < b.dois.size ? a.dois : b.dois;
      const big = small === a.dois ? b.dois : a.dois;
      const xs: number[] = [];
      const ys: number[] = [];
      const ws: number[] = [];
      for (const [doi, row] of small) {
        const other = big.get(doi);
        if (!other) continue;
        const aRow = small === a.dois ? row : other;
        const bRow = small === a.dois ? other : row;
        xs.push(aRow.value);
        ys.push(bRow.value);
        ws.push(Math.sqrt(aRow.weight * bRow.weight));
      }
      if (xs.length < minN) continue;

      const r = weightedPearson(xs, ys, ws);
      if (r === null) continue;
      const rho = weightedSpearman(xs, ys, ws);
      const allPositive = xs.every((v) => v > 0) && ys.every((v) => v > 0);
      const rLog = allPositive
        ? weightedPearson(xs.map((v) => Math.log10(v)), ys.map((v) => Math.log10(v)), ws)
        : null;
      const nEff = effectiveSampleSize(ws);
      const nForP = Math.max(3, Math.round(nEff));
      const p = studentsTTwoTailP(r, nForP);

      rawPairs.push({
        a_id: a.entry.id,
        a_name: a.entry.name,
        b_id: b.entry.id,
        b_name: b.entry.name,
        pearson_r: r,
        pearson_r_log: rLog,
        spearman_rho: rho,
        n: xs.length,
        n_eff: nEff,
        p_raw: p,
      });
    }
  }

  const adjusted = bhAdjustPValues(rawPairs.map((p) => p.p_raw));
  const pairs: ComputedPair[] = rawPairs.map((p, i) => ({
    ...p,
    p_corrected: adjusted[i],
    significant: adjusted[i] < 0.05,
  }));
  pairs.sort((x, y) => Math.abs(y.pearson_r) - Math.abs(x.pearson_r));
  return { pairs, nTests: pairs.length };
}
