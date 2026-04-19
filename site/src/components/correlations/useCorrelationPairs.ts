import { useEffect, useMemo, useState } from 'react';
import { getProvenanceByIdMap, getProvenanceMeta, type ProvEntry } from '../../data/provenance';
import { getAllRichParameters, type RichParameter } from '../../data/loader';
import { computePairs, type ComputedPair } from '../../data/correlationStats';

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
  spearman_rho: number | null;
  n: number;
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
  alpha: number;
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

function dedupedGlobalPairs(entries: ProvEntry[]) {
  const seen = new Set<string>();
  const rows: Array<{
    a_id: string;
    a_name: string;
    b_id: string;
    b_name: string;
    pearson_r: number;
    spearman_rho: number | null;
    n: number;
    p_corrected: number;
    significant: boolean;
  }> = [];
  for (const entry of entries) {
    for (const c of entry.correlations) {
      const key = [entry.id, c.other_param_id].sort().join('|');
      if (seen.has(key)) continue;
      seen.add(key);
      rows.push({
        a_id: entry.id,
        a_name: entry.name,
        b_id: c.other_param_id,
        b_name: c.other_param_name,
        pearson_r: c.pearson_r,
        spearman_rho: c.spearman_rho,
        n: c.n,
        p_corrected: c.p_corrected,
        significant: c.significant,
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
  const [globalAlpha, setGlobalAlpha] = useState(0.05);
  const [globalTotal, setGlobalTotal] = useState(0);

  useEffect(() => {
    let cancelled = false;
    Promise.all([getProvenanceByIdMap(), getProvenanceMeta()])
      .then(([map, meta]) => {
        if (cancelled) return;
        setEntries(Array.from(map.values()));
        setGlobalAlpha(meta.correlations.bonferroni_alpha);
        setGlobalTotal(meta.correlations.total_tests);
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
        loading,
        error,
        pairs: [],
        nodes: [],
        totalTests: 0,
        totalPairs: 0,
        alpha: globalAlpha,
        systemPaperCount: null,
      };
    }

    let totalTests = globalTotal;
    let alpha = globalAlpha;
    let rawPairs: Array<{
      a_id: string; a_name: string;
      b_id: string; b_name: string;
      pearson_r: number; spearman_rho: number | null;
      n: number; p_corrected: number; significant: boolean;
    }>;

    if (filters.systemType === 'all') {
      rawPairs = dedupedGlobalPairs(entries);
    } else {
      const { pairs, alpha: a } = computePairs(entries, filters.systemType, filters.minN);
      rawPairs = pairs.map((p: ComputedPair) => ({
        a_id: p.a_id,
        a_name: p.a_name,
        b_id: p.b_id,
        b_name: p.b_name,
        pearson_r: p.pearson_r,
        spearman_rho: p.spearman_rho,
        n: p.n,
        p_corrected: p.p_corrected,
        significant: p.significant,
      }));
      alpha = a;
      totalTests = pairs.length;
    }

    const decorated: PairRow[] = rawPairs.map((p) => ({
      ...p,
      a_category: categoryOf(p.a_name),
      b_category: categoryOf(p.b_name),
    }));

    const totalPairs = decorated.length;
    const filtered = decorated.filter((p) => {
      if (filters.significantOnly && !p.significant) return false;
      if (Math.abs(p.pearson_r) < filters.minAbsR) return false;
      if (p.n < filters.minN) return false;
      if (filters.categories.size > 0) {
        const inCat = filters.categories.has(p.a_category) || filters.categories.has(p.b_category);
        if (!inCat) return false;
      }
      return true;
    });
    filtered.sort((x, y) => Math.abs(y.pearson_r) - Math.abs(x.pearson_r));

    const nodeMap = new Map<string, NodeMeta>();
    for (const p of filtered) {
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

    return { loading, error, pairs: filtered, nodes, totalTests, totalPairs, alpha, systemPaperCount };
  }, [entries, filters, loading, error, globalAlpha, globalTotal, categoryOf]);
}

export { nameToSlug };
