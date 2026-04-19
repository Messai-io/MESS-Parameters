import { describe, it, expect } from 'vitest';
import {
  pearson,
  spearman,
  averageRanks,
  studentsTTwoTailP,
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
    // r=0.9, n=10 → p ≈ 0.000409
    const p = studentsTTwoTailP(0.9, 10);
    expect(p).toBeGreaterThan(0);
    expect(p).toBeLessThan(0.001);
  });
  it('r=0 yields p=1', () => {
    expect(studentsTTwoTailP(0, 30)).toBeCloseTo(1, 5);
  });
});

describe('computePairs', () => {
  it('joins by DOI and computes Pearson + Bonferroni', () => {
    // 4 shared DOIs across 2 params. Use minN=3.
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
    const { pairs, alpha } = computePairs([A, B], null, 3);
    expect(pairs).toHaveLength(1);
    expect(pairs[0].pearson_r).toBeCloseTo(1, 10);
    expect(pairs[0].n).toBe(4);
    expect(alpha).toBeCloseTo(0.05, 10);
    expect(pairs[0].significant).toBe(true);
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
    // MFC-only → only 2 shared, minN=3 → no pair
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
