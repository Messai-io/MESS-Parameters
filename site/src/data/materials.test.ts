import { describe, it, expect } from 'vitest';
import {
  buildPhysicsEntries,
  isPhysicsEntryId,
  physicsFeatureName,
  type MaterialsFile,
} from './materials';

function fixture(): MaterialsFile {
  return {
    schema_version: '0.1.0',
    generated_at: '2026-04-19T00:00:00Z',
    source: 'test',
    slugs: [
      {
        slug: 'platinum_cathode',
        n_papers: 300,
        system_type_distribution: { MFC: 192, BES: 46 },
        physics: { work_function_eV: 5.5, density_g_per_cm3: 21.1 },
        pourbaix: { mfc_cathode: 'stable', mec_cathode: 'stable' },
      },
      {
        slug: 'copper_cathode',
        n_papers: 390,
        system_type_distribution: { MFC: 250 },
        physics: { work_function_eV: 4.5, density_g_per_cm3: 8.9 },
        pourbaix: { mfc_cathode: 'stable' },
      },
      {
        slug: 'nickel_foam',
        n_papers: 700,
        system_type_distribution: { MFC: 500 },
        physics: { work_function_eV: 5.0, density_g_per_cm3: 8.9 },
        pourbaix: {},
      },
    ],
    doi_to_slugs: {
      'doi:a': ['platinum_cathode'],
      'doi:b': ['copper_cathode'],
      'doi:c': ['nickel_foam'],
      // DOI cites two materials — synthetic entry should average their values.
      'doi:d': ['platinum_cathode', 'nickel_foam'],
    },
    features: [
      { key: 'work_function_eV', n_slugs_with_value: 3, dropped_as_proxy: false, distinct_values: 3 },
      { key: 'density_g_per_cm3', n_slugs_with_value: 3, dropped_as_proxy: false, distinct_values: 2 },
    ],
  };
}

describe('isPhysicsEntryId / physicsFeatureName', () => {
  it('recognizes the physics prefix', () => {
    expect(isPhysicsEntryId('physics__work_function_eV')).toBe(true);
    expect(isPhysicsEntryId('ph')).toBe(false);
  });
  it('extracts feature name', () => {
    expect(physicsFeatureName('physics__band_gap_eV')).toBe('band_gap_eV');
    expect(physicsFeatureName('ph')).toBeNull();
  });
});

describe('buildPhysicsEntries', () => {
  it('emits one ProvEntry per feature', () => {
    const entries = buildPhysicsEntries(fixture());
    expect(entries).toHaveLength(2);
    const ids = entries.map((e) => e.id).sort();
    expect(ids).toEqual(['physics__density_g_per_cm3', 'physics__work_function_eV']);
  });

  it('emits one source per DOI that has all its slugs\' features', () => {
    const entries = buildPhysicsEntries(fixture());
    const wf = entries.find((e) => e.id === 'physics__work_function_eV')!;
    // Four DOIs in fixture; all four reach a slug with work_function_eV.
    expect(wf.sources).toHaveLength(4);
    const byDoi = new Map(wf.sources.map((s) => [s.doi, s]));
    expect(byDoi.get('doi:a')?.value).toBeCloseTo(5.5, 10);
    expect(byDoi.get('doi:b')?.value).toBeCloseTo(4.5, 10);
    expect(byDoi.get('doi:c')?.value).toBeCloseTo(5.0, 10);
    // doi:d averages platinum (5.5) and nickel (5.0)
    expect(byDoi.get('doi:d')?.value).toBeCloseTo(5.25, 10);
  });

  it('propagates dominant system_type from slugs', () => {
    const entries = buildPhysicsEntries(fixture());
    const wf = entries.find((e) => e.id === 'physics__work_function_eV')!;
    const ptSource = wf.sources.find((s) => s.doi === 'doi:a');
    expect(ptSource?.system_type).toBe('MFC'); // 192 MFC > 46 BES for Pt
  });

  it('tags all sources with max trust (reproducibility_score=1)', () => {
    const entries = buildPhysicsEntries(fixture());
    for (const e of entries) {
      for (const s of e.sources) expect(s.reproducibility_score).toBe(1);
    }
  });

  it('skips features with < 3 slugs having a value', () => {
    const f = fixture();
    f.slugs[0].physics = {};
    f.slugs[1].physics = {};
    // Only nickel_foam has work_function_eV now; should be dropped.
    const entries = buildPhysicsEntries(f);
    expect(entries.find((e) => e.id === 'physics__work_function_eV')).toBeUndefined();
  });
});
