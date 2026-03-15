#!/usr/bin/env ts-node

/**
 * Batch Correlation Analysis
 *
 * Queries papers with parameter data and performance metrics,
 * computes correlations between experimental conditions and outcomes,
 * and materializes results to a JSON cache for the UI.
 *
 * Run: npx tsx scripts/batch-correlation-analysis.ts
 */

import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';

const prisma = new PrismaClient();

interface DataPoint {
  paperId: string;
  paramValue: number;
  metricValue: number;
}

interface CorrelationResult {
  parameter: string;
  metric: string;
  pearsonR: number;
  sampleSize: number;
  pValue: number;
  trend: 'positive' | 'negative' | 'none';
  strength: 'strong' | 'moderate' | 'weak' | 'negligible';
}

// Compute Pearson correlation coefficient
function pearsonCorrelation(x: number[], y: number[]): { r: number; p: number } {
  const n = x.length;
  if (n < 3) return { r: 0, p: 1 };

  const meanX = x.reduce((a, b) => a + b, 0) / n;
  const meanY = y.reduce((a, b) => a + b, 0) / n;

  let sumXY = 0, sumX2 = 0, sumY2 = 0;
  for (let i = 0; i < n; i++) {
    const dx = x[i] - meanX;
    const dy = y[i] - meanY;
    sumXY += dx * dy;
    sumX2 += dx * dx;
    sumY2 += dy * dy;
  }

  const denom = Math.sqrt(sumX2 * sumY2);
  if (denom === 0) return { r: 0, p: 1 };

  const r = sumXY / denom;

  // Approximate p-value using t-distribution
  const t = r * Math.sqrt((n - 2) / (1 - r * r));
  // Simplified p-value approximation (good enough for large n)
  const p = n > 30
    ? 2 * Math.exp(-0.717 * t * t - 0.416 * Math.abs(t))
    : Math.min(1, 2 / (1 + Math.abs(t) * Math.sqrt(n - 2)));

  return { r, p: Math.max(0, Math.min(1, p)) };
}

function classifyStrength(r: number): 'strong' | 'moderate' | 'weak' | 'negligible' {
  const abs = Math.abs(r);
  if (abs >= 0.7) return 'strong';
  if (abs >= 0.4) return 'moderate';
  if (abs >= 0.2) return 'weak';
  return 'negligible';
}

// Parse numeric values from JSON fields
function safeParseJson(val: any): Record<string, any> | null {
  if (!val) return null;
  if (typeof val === 'object') return val;
  try { return JSON.parse(val); } catch { return null; }
}

function extractNumeric(val: any): number | null {
  if (typeof val === 'number' && isFinite(val)) return val;
  if (typeof val === 'string') {
    const num = parseFloat(val.replace(/[^0-9.-]/g, ''));
    return isFinite(num) ? num : null;
  }
  return null;
}

async function main() {
  console.log('=== Batch Correlation Analysis ===\n');

  // Query papers with performance metrics and parameter data
  const papers = await prisma.researchPaper.findMany({
    where: {
      OR: [
        { powerOutput: { not: null } },
        { efficiency: { not: null } },
      ],
    },
    select: {
      id: true,
      powerOutput: true,
      efficiency: true,
      reproducibilityScore: true,
      operationalParameters: true,
      electrochemicalData: true,
      biologicalParameters: true,
      reactorConfiguration: true,
      performanceMetrics: true,
      publicationDate: true,
    },
  });

  console.log(`Loaded ${papers.length} papers with performance data\n`);

  // Extract parameter-metric pairs
  const paramMetricPairs: Map<string, DataPoint[]> = new Map();

  for (const paper of papers) {
    const metrics: Record<string, number> = {};
    if (paper.powerOutput) metrics['Power Output (mW/m²)'] = paper.powerOutput;
    if (paper.efficiency) metrics['Coulombic Efficiency (%)'] = paper.efficiency;

    // Parse JSON fields for additional parameters
    const operational = safeParseJson(paper.operationalParameters);
    const electrochemical = safeParseJson(paper.electrochemicalData);
    const biological = safeParseJson(paper.biologicalParameters);
    const reactor = safeParseJson(paper.reactorConfiguration);
    const perf = safeParseJson(paper.performanceMetrics);

    const params: Record<string, number> = {};

    // Extract from operational
    if (operational) {
      for (const [k, v] of Object.entries(operational)) {
        const num = extractNumeric(v);
        if (num !== null) params[`op:${k}`] = num;
      }
    }

    // Extract from electrochemical
    if (electrochemical) {
      for (const [k, v] of Object.entries(electrochemical)) {
        const num = extractNumeric(v);
        if (num !== null) params[`ec:${k}`] = num;
      }
    }

    // Extract from biological
    if (biological) {
      for (const [k, v] of Object.entries(biological)) {
        const num = extractNumeric(v);
        if (num !== null) params[`bio:${k}`] = num;
      }
    }

    // Extract from reactor
    if (reactor) {
      for (const [k, v] of Object.entries(reactor)) {
        const num = extractNumeric(v);
        if (num !== null) params[`reactor:${k}`] = num;
      }
    }

    // Year as a parameter (extracted from publicationDate)
    if (paper.publicationDate) params['Year'] = new Date(paper.publicationDate).getFullYear();
    if (paper.reproducibilityScore) params['Reproducibility Score'] = paper.reproducibilityScore;

    // Create pairs
    for (const [paramName, paramValue] of Object.entries(params)) {
      for (const [metricName, metricValue] of Object.entries(metrics)) {
        const key = `${paramName}|||${metricName}`;
        if (!paramMetricPairs.has(key)) paramMetricPairs.set(key, []);
        paramMetricPairs.get(key)!.push({
          paperId: paper.id,
          paramValue,
          metricValue,
        });
      }
    }
  }

  console.log(`Found ${paramMetricPairs.size} parameter-metric pairs\n`);

  // Compute correlations (only for pairs with enough data)
  const MIN_SAMPLES = 10;
  const results: CorrelationResult[] = [];

  for (const [key, dataPoints] of paramMetricPairs) {
    if (dataPoints.length < MIN_SAMPLES) continue;

    const [paramName, metricName] = key.split('|||');
    const x = dataPoints.map(d => d.paramValue);
    const y = dataPoints.map(d => d.metricValue);

    const { r, p } = pearsonCorrelation(x, y);

    results.push({
      parameter: paramName,
      metric: metricName,
      pearsonR: Math.round(r * 1000) / 1000,
      sampleSize: dataPoints.length,
      pValue: Math.round(p * 10000) / 10000,
      trend: r > 0.1 ? 'positive' : r < -0.1 ? 'negative' : 'none',
      strength: classifyStrength(r),
    });
  }

  // Sort by absolute correlation strength
  results.sort((a, b) => Math.abs(b.pearsonR) - Math.abs(a.pearsonR));

  // Write output
  const outputDir = path.join(__dirname, '..', 'apps', 'web', 'public', 'data');
  fs.mkdirSync(outputDir, { recursive: true });

  const outputPath = path.join(outputDir, 'correlation-cache.json');
  const output = {
    generatedAt: new Date().toISOString(),
    totalPapersAnalyzed: papers.length,
    totalCorrelations: results.length,
    significantCorrelations: results.filter(r => r.pValue < 0.05 && r.strength !== 'negligible').length,
    topCorrelations: results.slice(0, 50),
    allCorrelations: results,
    summary: {
      strongPositive: results.filter(r => r.strength === 'strong' && r.trend === 'positive').length,
      strongNegative: results.filter(r => r.strength === 'strong' && r.trend === 'negative').length,
      moderate: results.filter(r => r.strength === 'moderate').length,
      weak: results.filter(r => r.strength === 'weak').length,
    },
  };

  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
  console.log(`Correlation cache written to: ${outputPath}`);

  // Print top correlations
  console.log('\n=== Top 15 Correlations ===');
  for (const r of results.slice(0, 15)) {
    const arrow = r.trend === 'positive' ? '+' : r.trend === 'negative' ? '-' : '~';
    console.log(
      `  [${arrow}] r=${r.pearsonR.toFixed(3)} (n=${r.sampleSize}, p=${r.pValue.toFixed(4)}) ` +
      `${r.parameter} vs ${r.metric} [${r.strength}]`
    );
  }

  console.log(`\n=== Summary ===`);
  console.log(`Total correlations computed: ${results.length}`);
  console.log(`Significant (p<0.05, not negligible): ${output.significantCorrelations}`);
  console.log(`Strong positive: ${output.summary.strongPositive}`);
  console.log(`Strong negative: ${output.summary.strongNegative}`);
  console.log(`Moderate: ${output.summary.moderate}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
