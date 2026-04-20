import { useEffect, useMemo, useState } from 'react';
import { getProvenanceByIdMap, type ProvEntry } from '../../data/provenance';
import { getAllRichParameters, type RichParameter } from '../../data/loader';
import { bhAdjustPValues, computePairs, studentsTTwoTailP, type ComputedPair } from '../../data/correlationStats';

export type SystemType = 'all' | 'MFC' | 'MEC' | 'MDC' | 'BES';

export interface Filters {
  systemType: SystemType;
  categories: Set<string>;
  minAbsR: number;
  minN: number;
  significantOnly: boolean;
}

export interface PairRow {
  a_id: string;
  a_name: string;
  a_category: string;
  b_id: string;
  b_name: string;
  b_category: string;
  pearson_r: number;
  pearson_r_log: number | null;
  spearman_rho: number | null;
  n: number;
  n_eff: number;
  p_raw: number;
  p_corrected: number;
  significant: boolean;
}

export interface NodeMeta {
  id: string;
  name: string;
  category: string;
  degree: number;
  sumAbsR: number;
}

export interface UseCorrelationPairsResult {
  loading: boolean;
  error: string | null;
  pairs: PairRow[];
  nodes: NodeMeta[];
  totalTests: number;
  totalPairs: number;
  systemPaperCount: number | null;
}

function nameToSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '_').replace(/[()\/]/g, '').replace(/:/, '');
}

function buildCategoryLookup(rich: RichParameter[]): (name: string) => string {
  const bySlug = new Map<string, string>();
  for (const p of rich) bySlug.set(nameToSlug(p.name), p.category ?? 'unknown');
  return (name: string) => bySlug.get(nameToSlug(name)) ?? 'unknown';
}

// Precomputed global correlations (the 'all' systems branch). These were
// already BH-adjusted at build time, so p_raw is reconstructed from the
// stored pearson_r + n via Student's t so that we can re-apply BH across
// the currently displayed (filtered) family on the fly.
interface RawRow {
  a_id: string;
  a_name: string;
  b_id: string;
  b_name: string;
  pearson_r: number;
  pearson_r_log: number | null;
  spearman_rho: number | null;
  n: number;
  n_eff: number;
  p_raw: number;
}

function dedupedGlobalPairs(entries: ProvEntry[]): RawRow[] {
  const seen = new Set<string>();
  const rows: RawRow[] = [];
  for (const entry of entries) {
    for (const c of entry.correlations) {
      const key = [entry.id, c.other_param_id].sort().join('|');
      if (seen.has(key)) continue;
      seen.add(key);
      const nEff = typeof c.n_eff === 'number' ? c.n_eff : c.n;
      const nForP = Math.max(3, Math.round(nEff));
      const pRaw = studentsTTwoTailP(c.pearson_r, nForP);
      rows.push({
        a_id: entry.id,
        a_name: entry.name,
        b_id: c.other_param_id,
        b_name: c.other_param_name,
        pearson_r: c.pearson_r,
        pearson_r_log: c.pearson_r_log ?? null,
        spearman_rho: c.spearman_rho,
        n: c.n,
        n_eff: nEff,
        p_raw: Number.isFinite(pRaw) ? pRaw : 1,
      });
    }
  }
  return rows;
}

function countSystemPapers(entries: ProvEntry[], systemType: string): number {
  const dois = new Set<string>();
  for (const e of entries) {
    for (const s of e.sources) {
      if (s.system_type === systemType && s.doi) dois.add(s.doi);
    }
  }
  return dois.size;
}

export function useCorrelationPairs(filters: Filters): UseCorrelationPairsResult {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [entries, setEntries] = useState<ProvEntry[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    getProvenanceByIdMap()
      .then((map) => {
        if (cancelled) return;
        setEntries(Array.from(map.values()));
        setLoading(false);
      })
      .catch((e) => {
        if (cancelled) return;
        setError(String(e));
        setLoading(false);
      });
    return () => { cancelled = true; };
  }, []);

  const categoryOf = useMemo(() => buildCategoryLookup(getAllRichParameters()), []);

  return useMemo<UseCorrelationPairsResult>(() => {
    if (!entries) {
      return {
        loading, error,
        pairs: [], nodes: [],
        totalTests: 0, totalPairs: 0,
        systemPaperCount: null,
      };
    }

    let rawPairs: RawRow[];
    if (filters.systemType === 'all') {
      rawPairs = dedupedGlobalPairs(entries);
    } else {
      const { pairs, nTests } = computePairs(entries, filters.systemType, filters.minN);
      void nTests; // consumed indirectly via rawPairs.length
      rawPairs = pairs.map((p: ComputedPair) => ({
        a_id: p.a_id,
        a_name: p.a_name,
        b_id: p.b_id,
        b_name: p.b_name,
        pearson_r: p.pearson_r,
        pearson_r_log: p.pearson_r_log,
        spearman_rho: p.spearman_rho,
        n: p.n,
        n_eff: p.n_eff,
        p_raw: p.p_raw,
      }));
    }

    const decorated = rawPairs.map((p) => ({
      ...p,
      a_category: categoryOf(p.a_name),
      b_category: categoryOf(p.b_name),
    }));

    const totalPairs = decorated.length;

    // Apply pre-significance filters (|r|, n, category). The significantOnly
    // flag is applied *after* BH so the BH family equals what the user sees,
    // minus the significance cut.
    const shortlist = decorated.filter((p) => {
      if (Math.abs(p.pearson_r) < filters.minAbsR) return false;
      if (p.n < filters.minN) return false;
      if (filters.categories.size > 0) {
        const inCat = filters.categories.has(p.a_category) || filters.categories.has(p.b_category);
        if (!inCat) return false;
      }
      return true;
    });

    // Re-run BH across the currently displayed family so q-values track
    // what's on screen (BH is family-dependent).
    const qs = bhAdjustPValues(shortlist.map((p) => p.p_raw));
    const withQ: PairRow[] = shortlist.map((p, i) => ({
      ...p,
      p_corrected: qs[i],
      significant: qs[i] < 0.05,
    }));

    const visible = filters.significantOnly ? withQ.filter((p) => p.significant) : withQ;
    visible.sort((x, y) => Math.abs(y.pearson_r) - Math.abs(x.pearson_r));

    const nodeMap = new Map<string, NodeMeta>();
    for (const p of visible) {
      const a = nodeMap.get(p.a_id) ?? { id: p.a_id, name: p.a_name, category: p.a_category, degree: 0, sumAbsR: 0 };
      a.degree += 1;
      a.sumAbsR += Math.abs(p.pearson_r);
      nodeMap.set(p.a_id, a);
      const b = nodeMap.get(p.b_id) ?? { id: p.b_id, name: p.b_name, category: p.b_category, degree: 0, sumAbsR: 0 };
      b.degree += 1;
      b.sumAbsR += Math.abs(p.pearson_r);
      nodeMap.set(p.b_id, b);
    }
    const nodes = Array.from(nodeMap.values()).sort((a, b) => b.sumAbsR - a.sumAbsR);

    const systemPaperCount =
      filters.systemType === 'all' ? null : countSystemPapers(entries, filters.systemType);

    return {
      loading, error,
      pairs: visible, nodes,
      totalTests: withQ.length,
      totalPairs,
      systemPaperCount,
    };
  }, [entries, filters, loading, error, categoryOf]);
}

export { nameToSlug };
