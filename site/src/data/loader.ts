import parametersIndex from '@params/index.json';
import correlationCache from '@data/correlation-cache.json';
import extractionStats from '@data/extraction-stats.json';
import reproducibilitySummary from '@data/reproducibility-summary.json';
import type {
  Parameter,
  ParameterIndex,
  CorrelationCache,
  ExtractionStats,
  ReproducibilitySummary,
  CategoryCount,
} from './types';

const index = parametersIndex as unknown as ParameterIndex;
const correlations = correlationCache as unknown as CorrelationCache;
const stats = extractionStats as unknown as ExtractionStats;
const reproducibility = reproducibilitySummary as unknown as ReproducibilitySummary;

export function getAllParameters(): Parameter[] {
  const params: Parameter[] = [];
  for (const cat of index.categories) {
    for (const sub of cat.subcategories) {
      if (sub.parameters) {
        params.push(...sub.parameters);
      }
    }
  }
  return params;
}

export function getCategoryCounts(): CategoryCount[] {
  return index.categories.map((cat) => {
    let count = 0;
    for (const sub of cat.subcategories) {
      count += sub.parameters?.length ?? sub.parameterCount ?? 0;
    }
    return { id: cat.id, name: cat.name, count };
  });
}

export function getParametersByCategory(categoryId: string): Parameter[] {
  const cat = index.categories.find((c) => c.id === categoryId);
  if (!cat) return [];
  const params: Parameter[] = [];
  for (const sub of cat.subcategories) {
    if (sub.parameters) {
      params.push(...sub.parameters);
    }
  }
  return params;
}

export function getCorrelations() {
  return correlations;
}

export function getExtractionStats() {
  return stats;
}

export function getReproducibility() {
  return reproducibility;
}

export function getMetadata() {
  return index.metadata;
}

export function fmtNum(n: unknown, fallback = '—'): string {
  return typeof n === 'number' && Number.isFinite(n) ? n.toLocaleString() : fallback;
}

export function fmtPct(n: unknown, digits = 1, fallback = '—'): string {
  return typeof n === 'number' && Number.isFinite(n) ? `${n.toFixed(digits)}%` : fallback;
}

export function fmtFixed(n: unknown, digits = 3, fallback = '—'): string {
  return typeof n === 'number' && Number.isFinite(n) ? n.toFixed(digits) : fallback;
}
