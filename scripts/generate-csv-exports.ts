#!/usr/bin/env ts-node

/**
 * Generate CSV data exports from existing JSON source files.
 * No database access required — works entirely from repo data.
 *
 * Produces 5 CSV files in data/:
 *   - parameters-full.csv      (667 rows — all parameter definitions)
 *   - category-hierarchy.csv   (85 rows — category/subcategory tree)
 *   - correlations.csv         (14 rows — parameter-metric correlations)
 *   - reproducibility-criteria.csv (19 rows — scoring criteria with reporting rates)
 *   - corpus-summary.csv       (~20 rows — pipeline statistics)
 *
 * Run: npx tsx scripts/generate-csv-exports.ts
 */

import * as fs from 'fs';
import * as path from 'path';

// --- Types ---

interface ParameterRange {
  min: number;
  max: number;
  typical?: number;
}

interface Parameter {
  id: string;
  name: string;
  description: string;
  unit: string;
  type: string;
  category: string;
  subcategory: string;
  default?: unknown;
  range?: ParameterRange;
  tags: string[];
}

interface Subcategory {
  id: string;
  name: string;
  parameters: Parameter[];
}

interface Category {
  id: string;
  name: string;
  description: string;
  subcategories: Subcategory[];
}

interface IndexData {
  metadata: {
    version: string;
    lastUpdated: string;
    totalParameters: number;
  };
  categories: Category[];
}

interface Correlation {
  parameter: string;
  metric: string;
  pearsonR: number;
  sampleSize: number;
  pValue: number;
  trend: string;
  strength: string;
}

interface CorrelationCache {
  generatedAt: string;
  totalPapersAnalyzed: number;
  totalCorrelations: number;
  significantCorrelations: number;
  allCorrelations: Correlation[];
}

interface ReproducibilityCriteriaCategory {
  weight: string;
  criteria: string[];
  averageReportingRate: number;
}

interface ReproducibilitySummary {
  generatedAt: string;
  overview: {
    totalPapersScored: number;
    averageCompletenessPercent: number;
    medianCompletenessPercent: number;
    scoringCriteria: number;
  };
  criteriaCategories: Record<string, ReproducibilityCriteriaCategory>;
  keyFindings: Record<string, string>;
  fiveParameterChecklist: {
    parameters: string[];
    validationStudy: {
      papersAnalyzed: number;
      iqrReductionPercent: number;
      pValue: string;
      conclusion: string;
    };
  };
}

interface ExtractionStats {
  generatedAt: string;
  corpus: Record<string, number>;
  extraction: Record<string, number>;
  quality: Record<string, number>;
  systemTypes: Record<string, number>;
  methodology: Record<string, string>;
}

// --- CSV utilities ---

const BOM = '\uFEFF';

function escapeCsvField(value: unknown): string {
  if (value === null || value === undefined) return '';
  const str = String(value);
  if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
    return '"' + str.replace(/"/g, '""') + '"';
  }
  return str;
}

function writeCsv(filepath: string, headers: string[], rows: string[][]): void {
  const lines = [
    headers.map(escapeCsvField).join(','),
    ...rows.map(row => row.map(escapeCsvField).join(','))
  ];
  fs.writeFileSync(filepath, BOM + lines.join('\n') + '\n', { encoding: 'utf-8' });
}

// --- Export functions ---

function exportParametersFull(indexData: IndexData, outDir: string): number {
  const headers = [
    'id', 'name', 'description', 'unit', 'type',
    'category', 'subcategory', 'default',
    'range_min', 'range_max', 'range_typical', 'tags'
  ];

  const rows: string[][] = [];
  for (const cat of indexData.categories) {
    for (const sub of cat.subcategories) {
      for (const param of sub.parameters) {
        const defaultVal = param.default !== undefined && param.default !== null
          ? String(param.default)
          : '';
        rows.push([
          param.id,
          param.name,
          param.description,
          param.unit,
          param.type,
          param.category,
          param.subcategory,
          defaultVal,
          param.range?.min !== undefined ? String(param.range.min) : '',
          param.range?.max !== undefined ? String(param.range.max) : '',
          param.range?.typical !== undefined ? String(param.range.typical) : '',
          param.tags.join('|')
        ]);
      }
    }
  }

  writeCsv(path.join(outDir, 'parameters-full.csv'), headers, rows);
  return rows.length;
}

function exportCategoryHierarchy(indexData: IndexData, outDir: string): number {
  const headers = [
    'category_id', 'category_name', 'subcategory_id', 'subcategory_name', 'parameter_count'
  ];

  const rows: string[][] = [];
  for (const cat of indexData.categories) {
    for (const sub of cat.subcategories) {
      rows.push([
        cat.id,
        cat.name,
        sub.id,
        sub.name,
        String(sub.parameters.length)
      ]);
    }
  }

  rows.sort((a, b) => a[0].localeCompare(b[0]) || a[2].localeCompare(b[2]));
  writeCsv(path.join(outDir, 'category-hierarchy.csv'), headers, rows);
  return rows.length;
}

// Fisher z-transformation for correlation confidence intervals
function fisherCI(r: number, n: number, alpha: number = 0.05): { lower: number; upper: number } {
  if (n < 4) return { lower: -1, upper: 1 };
  const z = 0.5 * Math.log((1 + r) / (1 - r));
  const se = 1 / Math.sqrt(n - 3);
  // z-critical for 95% CI = 1.96
  const zCrit = alpha === 0.05 ? 1.96 : 1.96; // standard 95%
  const zLower = z - zCrit * se;
  const zUpper = z + zCrit * se;
  // Back-transform from Fisher z to r
  const rLower = (Math.exp(2 * zLower) - 1) / (Math.exp(2 * zLower) + 1);
  const rUpper = (Math.exp(2 * zUpper) - 1) / (Math.exp(2 * zUpper) + 1);
  return {
    lower: Math.max(-1, rLower),
    upper: Math.min(1, rUpper)
  };
}

function exportCorrelations(correlationData: CorrelationCache, outDir: string): number {
  const headers = [
    'parameter', 'metric', 'pearson_r', 'sample_size', 'p_value', 'trend', 'strength',
    'ci_95_lower', 'ci_95_upper', 'sample_size_adequate', 'p_value_note'
  ];

  const rows: string[][] = correlationData.allCorrelations.map(c => {
    const ci = fisherCI(c.pearsonR, c.sampleSize);
    const adequate = c.sampleSize >= 30 ? 'yes' : 'no';
    // Flag p-values that are artifacts of the custom approximation
    let pNote = '';
    if (c.pValue === 0) pNote = 'Reported as 0 due to approximation; recompute from r and N';
    else if (c.pValue === 1) pNote = 'Clamped to 1.0; true p-value may differ';

    return [
      c.parameter,
      c.metric,
      c.pearsonR.toFixed(3),
      String(c.sampleSize),
      c.pValue.toFixed(4),
      c.trend,
      c.strength,
      ci.lower.toFixed(3),
      ci.upper.toFixed(3),
      adequate,
      pNote
    ];
  });

  writeCsv(path.join(outDir, 'correlations.csv'), headers, rows);
  return rows.length;
}

function exportReproducibilityCriteria(reproData: ReproducibilitySummary, outDir: string): number {
  const headers = ['category', 'weight', 'criterion', 'average_reporting_rate'];

  const rows: string[][] = [];
  for (const [categoryKey, cat] of Object.entries(reproData.criteriaCategories)) {
    const categoryName = categoryKey
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, s => s.toUpperCase())
      .trim();
    for (const criterion of cat.criteria) {
      rows.push([
        categoryName,
        cat.weight,
        criterion,
        cat.averageReportingRate.toFixed(2)
      ]);
    }
  }

  writeCsv(path.join(outDir, 'reproducibility-criteria.csv'), headers, rows);
  return rows.length;
}

function exportCorpusSummary(statsData: ExtractionStats, outDir: string): number {
  const headers = ['metric', 'value', 'section'];

  const rows: string[][] = [];

  for (const [key, val] of Object.entries(statsData.corpus)) {
    rows.push([key, String(val), 'corpus']);
  }
  for (const [key, val] of Object.entries(statsData.extraction)) {
    rows.push([key, String(val), 'extraction']);
  }
  for (const [key, val] of Object.entries(statsData.quality)) {
    rows.push([key, String(val), 'quality']);
  }
  for (const [key, val] of Object.entries(statsData.systemTypes)) {
    rows.push([key, String(val), 'systemTypes']);
  }
  for (const [key, val] of Object.entries(statsData.methodology)) {
    rows.push([key, val, 'methodology']);
  }

  writeCsv(path.join(outDir, 'corpus-summary.csv'), headers, rows);
  return rows.length;
}

// --- Main ---

function main() {
  const rootDir = path.resolve(__dirname, '..');
  const dataDir = path.join(rootDir, 'data');
  const paramsDir = path.join(rootDir, 'parameters');

  // Verify source files exist
  const sources = [
    path.join(paramsDir, 'index.json'),
    path.join(dataDir, 'extraction-stats.json'),
    path.join(dataDir, 'correlation-cache.json'),
    path.join(dataDir, 'reproducibility-summary.json')
  ];

  for (const src of sources) {
    if (!fs.existsSync(src)) {
      console.error(`Missing source file: ${src}`);
      process.exit(1);
    }
  }

  // Load source data
  const indexData: IndexData = JSON.parse(
    fs.readFileSync(sources[0], 'utf-8')
  );
  const statsData: ExtractionStats = JSON.parse(
    fs.readFileSync(sources[1], 'utf-8')
  );
  const correlationData: CorrelationCache = JSON.parse(
    fs.readFileSync(sources[2], 'utf-8')
  );
  const reproData: ReproducibilitySummary = JSON.parse(
    fs.readFileSync(sources[3], 'utf-8')
  );

  // Generate exports
  console.log('Generating CSV exports...\n');

  const paramCount = exportParametersFull(indexData, dataDir);
  console.log(`  parameters-full.csv          ${paramCount} rows`);

  const catCount = exportCategoryHierarchy(indexData, dataDir);
  console.log(`  category-hierarchy.csv       ${catCount} rows`);

  const corrCount = exportCorrelations(correlationData, dataDir);
  console.log(`  correlations.csv             ${corrCount} rows`);

  const reproCount = exportReproducibilityCriteria(reproData, dataDir);
  console.log(`  reproducibility-criteria.csv  ${reproCount} rows`);

  const summaryCount = exportCorpusSummary(statsData, dataDir);
  console.log(`  corpus-summary.csv           ${summaryCount} rows`);

  console.log(`\nDone. 5 files written to data/`);
}

main();
