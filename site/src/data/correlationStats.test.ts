import { describe, it, expect } from 'vitest';
import {
  pearson,
  spearman,
  averageRanks,
  studentsTTwoTailP,
  weightedPearson,
  weightedSpearman,
  effectiveSampleSize,
  bhAdjustPValues,
  normalizeSystemType,
  sourceWeight,
  computePairs,
} from './correlationStats';
import type { ProvEntry, ProvSource } from './provenance';

function src(over: Partial<ProvSource>): ProvSource {
  return {
    doi: '10.0/x',
    title: 't',
    year: 2024,
    journal: null,
    system_type: 'MFC',
    value: 1,
    unit: '',
    confidence: 0.9,
    extraction_method: 'llm',
    source_section: 'results',
    verified: false,
    verified_mes: false,
    reproducibility_score: null,
    snippet: null,
    context: null,
    ...over,
  };
}

function entry(id: string, sources: ProvSource[]): ProvEntry {
  return {
    id,
    name: id,
    n_papers: sources.length,
    n_values: sources.length,
    n_verified: 0,
    mean_confidence: 0.9,
    stats_global: null,
    stats_by_system: {},
    distribution: { bins: [], counts: [] },
    sources,
    correlations: [],
  };
}

describe('pearson', () => {
  it('perfect positive = 1', () => {
    expect(pearson([1, 2, 3, 4], [2, 4, 6, 8])).toBeCloseTo(1, 10);
  });
  it('perfect negative = -1', () => {
    expect(pearson([1, 2, 3, 4], [8, 6, 4, 2])).toBeCloseTo(-1, 10);
  });
  it('returns null on constant column', () => {
    expect(pearson([1, 1, 1], [1, 2, 3])).toBeNull();
  });
  it('returns null when n<3', () => {
    expect(pearson([1, 2], [3, 4])).toBeNull();
  });
});

describe('averageRanks', () => {
  it('handles ties with averaged ranks', () => {
    expect(averageRanks([10, 20, 20, 30])).toEqual([1, 2.5, 2.5, 4]);
  });
  it('preserves original order', () => {
    expect(averageRanks([30, 10, 20])).toEqual([3, 1, 2]);
  });
});

describe('spearman', () => {
  it('returns 1 for monotone relationship even when non-linear', () => {
    expect(spearman([1, 2, 3, 4], [1, 4, 9, 16])).toBeCloseTo(1, 10);
  });
});

describe('studentsTTwoTailP', () => {
  it('large |r| with moderate n is highly significant', () => {
    const p = studentsTTwoTailP(0.9, 10);
    expect(p).toBeGreaterThan(0);
    expect(p).toBeLessThan(0.001);
  });
  it('r=0 yields p=1', () => {
    expect(studentsTTwoTailP(0, 30)).toBeCloseTo(1, 5);
  });
});

describe('weightedPearson', () => {
  it('uniform weights matches unweighted Pearson', () => {
    const xs = [1, 2, 3, 4, 5];
    const ys = [2, 3, 4, 3, 6];
    const uniform = Array(xs.length).fill(1);
    const wp = weightedPearson(xs, ys, uniform)!;
    const pp = pearson(xs, ys)!;
    expect(wp).toBeCloseTo(pp, 10);
  });
  it('emphasizing one end shifts r toward that end\'s slope', () => {
    // Without weighting these points are roughly linear.
    // Up-weight the outlier (6, 0) to pull r toward negative.
    const xs = [1, 2, 3, 4, 5, 6];
    const ys = [1, 2, 3, 4, 5, 0];
    const even = Array(xs.length).fill(1);
    const heavy = [1, 1, 1, 1, 1, 100];
    const rEven = weightedPearson(xs, ys, even)!;
    const rHeavy = weightedPearson(xs, ys, heavy)!;
    expect(rHeavy).toBeLessThan(rEven);
  });
  it('null on length mismatch', () => {
    expect(weightedPearson([1, 2, 3], [1, 2, 3], [1, 1])).toBeNull();
  });
});

describe('weightedSpearman', () => {
  it('monotone relationship with uniform weights returns 1', () => {
    const xs = [1, 2, 3, 4];
    const ys = [1, 4, 9, 16];
    const w = Array(xs.length).fill(1);
    expect(weightedSpearman(xs, ys, w)).toBeCloseTo(1, 10);
  });
});

describe('effectiveSampleSize', () => {
  it('equal weights → raw n', () => {
    expect(effectiveSampleSize([1, 1, 1, 1])).toBeCloseTo(4, 10);
    expect(effectiveSampleSize([0.5, 0.5, 0.5, 0.5])).toBeCloseTo(4, 10);
  });
  it('one heavy weight → near 1', () => {
    const n_eff = effectiveSampleSize([1, 1, 1, 1, 100]);
    expect(n_eff).toBeGreaterThan(1);
    expect(n_eff).toBeLessThan(2);
  });
  it('empty → 0', () => {
    expect(effectiveSampleSize([])).toBe(0);
  });
});

describe('bhAdjustPValues', () => {
  it('monotone non-decreasing when sorted', () => {
    const ps = [0.001, 0.008, 0.039, 0.041, 0.042, 0.06];
    const q = bhAdjustPValues(ps);
    // BH values should be monotone when re-sorted to match the p-value order.
    const idxSort = ps.map((_, i) => i).sort((a, b) => ps[a] - ps[b]);
    for (let i = 1; i < idxSort.length; i++) {
      expect(q[idxSort[i]]).toBeGreaterThanOrEqual(q[idxSort[i - 1]] - 1e-12);
    }
  });
  it('known textbook example (Benjamini-Hochberg 1995)', () => {
    const ps = [0.001, 0.008, 0.039, 0.041, 0.042, 0.06];
    // BH: q_i = min_{k>=i} (m/k)*p_(k), from largest back.
    // m=6: candidates p*6/rank sorted by p: 0.06, 0.042*6/5=0.0504, 0.041*6/4=0.0615->0.0504,
    //      0.039*6/3=0.078 -> 0.0504, 0.008*6/2=0.024, 0.001*6/1=0.006
    const q = bhAdjustPValues(ps);
    // Sorted expected (rounded):
    // 0.001 -> 0.006 ; 0.008 -> 0.024 ; 0.039 -> 0.0504 ; 0.041 -> 0.0504 ; 0.042 -> 0.0504 ; 0.06 -> 0.06
    expect(q[0]).toBeCloseTo(0.006, 3);
    expect(q[1]).toBeCloseTo(0.024, 3);
    expect(q[2]).toBeCloseTo(0.0504, 3);
    expect(q[3]).toBeCloseTo(0.0504, 3);
    expect(q[4]).toBeCloseTo(0.0504, 3);
    expect(q[5]).toBeCloseTo(0.06, 3);
  });
  it('all 1s → all 1s', () => {
    expect(bhAdjustPValues([1, 1, 1])).toEqual([1, 1, 1]);
  });
  it('empty → empty', () => {
    expect(bhAdjustPValues([])).toEqual([]);
  });
  it('non-finite p-values treated as 1', () => {
    const q = bhAdjustPValues([NaN, 0.01]);
    expect(q[0]).toBeCloseTo(1, 10);
    expect(q[1]).toBeCloseTo(0.02, 10);
  });
});

describe('normalizeSystemType', () => {
  it('canonical inputs round-trip', () => {
    for (const t of ['MFC', 'MEC', 'MDC', 'MES', 'BES', 'SMFC']) {
      expect(normalizeSystemType(t)).toBe(t);
      expect(normalizeSystemType(t.toLowerCase())).toBe(t);
    }
  });
  it('junk falls through to UNSPECIFIED', () => {
    expect(normalizeSystemType('2022')).toBe('UNSPECIFIED');
    expect(normalizeSystemType(null)).toBe('UNSPECIFIED');
    expect(normalizeSystemType(undefined)).toBe('UNSPECIFIED');
    expect(normalizeSystemType('Journal of Power Sources')).toBe('UNSPECIFIED');
    expect(normalizeSystemType('"unspecified"')).toBe('UNSPECIFIED');
  });
  it('long-form names mapped to canonical', () => {
    expect(normalizeSystemType('Microbial Fuel Cell')).toBe('MFC');
    expect(normalizeSystemType('Sediment Microbial Fuel Cell')).toBe('SMFC');
    expect(normalizeSystemType('microbial electrolysis cell')).toBe('MEC');
    expect(normalizeSystemType('Microbial Desalination Cell')).toBe('MDC');
    expect(normalizeSystemType('bioelectrochemical system')).toBe('BES');
  });
});

describe('sourceWeight', () => {
  it('null → 0.5 neutral', () => {
    expect(sourceWeight(src({ reproducibility_score: null }))).toBe(0.5);
  });
  it('explicit score used', () => {
    expect(sourceWeight(src({ reproducibility_score: 0.8 }))).toBeCloseTo(0.8, 10);
  });
  it('floored at 0.1 for tiny/negative/non-finite', () => {
    expect(sourceWeight(src({ reproducibility_score: 0 }))).toBe(0.1);
    expect(sourceWeight(src({ reproducibility_score: -1 }))).toBe(0.1);
    expect(sourceWeight(src({ reproducibility_score: NaN }))).toBe(0.5);
    expect(sourceWeight(src({ reproducibility_score: Infinity as unknown as number }))).toBe(0.5);
  });
});

describe('computePairs', () => {
  it('joins by DOI and returns nTests + BH-adjusted q', () => {
    const A = entry('A', [
      src({ doi: 'd1', value: 1 }),
      src({ doi: 'd2', value: 2 }),
      src({ doi: 'd3', value: 3 }),
      src({ doi: 'd4', value: 4 }),
    ]);
    const B = entry('B', [
      src({ doi: 'd1', value: 2 }),
      src({ doi: 'd2', value: 4 }),
      src({ doi: 'd3', value: 6 }),
      src({ doi: 'd4', value: 8 }),
    ]);
    const { pairs, nTests } = computePairs([A, B], null, 3);
    expect(nTests).toBe(1);
    expect(pairs).toHaveLength(1);
    expect(pairs[0].pearson_r).toBeCloseTo(1, 10);
    expect(pairs[0].n).toBe(4);
    expect(pairs[0].significant).toBe(true);
    expect(pairs[0].pearson_r_log).toBeCloseTo(1, 10); // all positive
    expect(pairs[0].n_eff).toBeGreaterThan(0);
    expect(pairs[0].n_eff).toBeLessThanOrEqual(4 + 1e-9);
  });

  it('filters by system_type', () => {
    const A = entry('A', [
      src({ doi: 'd1', value: 1, system_type: 'MFC' }),
      src({ doi: 'd2', value: 2, system_type: 'MFC' }),
      src({ doi: 'd3', value: 3, system_type: 'MEC' }),
    ]);
    const B = entry('B', [
      src({ doi: 'd1', value: 2, system_type: 'MFC' }),
      src({ doi: 'd2', value: 4, system_type: 'MFC' }),
      src({ doi: 'd3', value: 6, system_type: 'MEC' }),
    ]);
    const { pairs } = computePairs([A, B], 'MFC', 3);
    expect(pairs).toHaveLength(0);
  });

  it('drops sources with empty DOI', () => {
    const A = entry('A', [
      src({ doi: '', value: 99 }),
      src({ doi: 'd1', value: 1 }),
      src({ doi: 'd2', value: 2 }),
      src({ doi: 'd3', value: 3 }),
    ]);
    const B = entry('B', [
      src({ doi: 'd1', value: 1 }),
      src({ doi: 'd2', value: 2 }),
      src({ doi: 'd3', value: 3 }),
    ]);
    const { pairs } = computePairs([A, B], null, 3);
    expect(pairs[0].n).toBe(3);
  });

  it('pearson_r_log is null when any value is non-positive', () => {
    const A = entry('A', [
      src({ doi: 'd1', value: 0 }),
      src({ doi: 'd2', value: 1 }),
      src({ doi: 'd3', value: 2 }),
    ]);
    const B = entry('B', [
      src({ doi: 'd1', value: 1 }),
      src({ doi: 'd2', value: 2 }),
      src({ doi: 'd3', value: 3 }),
    ]);
    const { pairs } = computePairs([A, B], null, 3);
    expect(pairs[0].pearson_r_log).toBeNull();
  });

  it('returns pairs sorted by |r| descending', () => {
    const A = entry('A', [
      src({ doi: 'd1', value: 1 }),
      src({ doi: 'd2', value: 2 }),
      src({ doi: 'd3', value: 3 }),
    ]);
    const B = entry('B', [
      src({ doi: 'd1', value: 1 }),
      src({ doi: 'd2', value: 2 }),
      src({ doi: 'd3', value: 3 }),
    ]);
    const C = entry('C', [
      src({ doi: 'd1', value: 1 }),
      src({ doi: 'd2', value: 3 }),
      src({ doi: 'd3', value: 2 }),
    ]);
    const { pairs } = computePairs([A, B, C], null, 3);
    expect(pairs.length).toBeGreaterThanOrEqual(2);
    expect(Math.abs(pairs[0].pearson_r)).toBeGreaterThanOrEqual(Math.abs(pairs[1].pearson_r));
  });
});
