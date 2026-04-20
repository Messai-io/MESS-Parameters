import { describe, it, expect } from 'vitest';
import { getProvenanceByIdMap, getProvenanceMeta } from './provenance';
import richDefinitions from '@data/parameter-definitions-rich.json';

describe('provenance sidecar', () => {
  it('loads and indexes by rich.id', async () => {
    const map = await getProvenanceByIdMap();
    expect(map.size).toBeGreaterThan(0);
    // every id must exist in rich.json (referential integrity)
    const rich = richDefinitions as unknown as Array<{ id: string }>;
    const richIds = new Set(rich.map((r) => r.id));
    for (const id of map.keys()) {
      expect(richIds.has(id)).toBe(true);
    }
  });

  it('marks matching rich.json entries with has_provenance=true', async () => {
    const map = await getProvenanceByIdMap();
    const rich = richDefinitions as unknown as Array<{ id: string; has_provenance?: boolean }>;
    const stampedIds = new Set(rich.filter((r) => r.has_provenance === true).map((r) => r.id));
    // every provenance id must have has_provenance=true
    for (const id of map.keys()) {
      expect(stampedIds.has(id)).toBe(true);
    }
  });

  it('every correlation points to a known parameter id', async () => {
    const map = await getProvenanceByIdMap();
    const rich = richDefinitions as unknown as Array<{ id: string }>;
    const richIds = new Set(rich.map((r) => r.id));
    for (const entry of map.values()) {
      for (const c of entry.correlations) {
        expect(richIds.has(c.other_param_id)).toBe(true);
        expect(Math.abs(c.pearson_r)).toBeLessThanOrEqual(1);
        expect(c.n).toBeGreaterThanOrEqual(3);
      }
    }
  });

  it('exposes correlation metadata with BH-FDR threshold', async () => {
    const meta = await getProvenanceMeta();
    expect(meta.schema_version).toMatch(/^\d+\.\d+\.\d+$/);
    expect(meta.correlations.bh_q_threshold).toBeGreaterThan(0);
    expect(meta.correlations.total_tests).toBeGreaterThanOrEqual(0);
  });
});
