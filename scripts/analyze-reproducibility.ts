#!/usr/bin/env ts-node

/**
 * Reproducibility Assessment Script for EU-ISMET 2026 Abstract
 *
 * Discovery 4: Reproducibility Quantified
 * - IQR of 45,976 mW/m² suggests uncontrolled variables
 * - Scores each paper's parameter completeness across ALL data sources
 * - Identifies which parameters are most often missing
 * - Calculates what % of variance is explained by missing params
 * - Creates reproducibility tiers for the database
 * - Generates data for Figure 4
 *
 * IMPROVED: Now queries ALL parameter systems:
 * - Legacy JSON fields (biologicalParameters, operationalParameters, etc.)
 * - Direct ResearchPaper fields (anodeMaterials, cathodeMaterials, efficiency)
 * - AI-extracted text (aiKeyFindings, aiMethodology)
 * - performanceMetrics JSON
 *
 * Run: DATABASE_URL="..." npx tsx scripts/analyze-reproducibility.ts
 */

import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';

const prisma = new PrismaClient();

// Critical parameters for reproducibility with multiple detection strategies
const CRITICAL_PARAMETERS = [
  {
    name: 'Electrode spacing',
    weight: 1.0,
    searchTerms: [
      'electrode spacing',
      'electrode distance',
      'inter-electrode',
      'gap between electrodes',
    ],
    jsonKeys: ['electrodeSpacing', 'electrode_spacing', 'spacing'],
    directField: null,
  },
  {
    name: 'Anode material',
    weight: 1.0,
    searchTerms: [
      'anode material',
      'anode electrode',
      'carbon cloth',
      'carbon brush',
      'graphite anode',
      'carbon fiber',
    ],
    jsonKeys: ['anodeMaterial', 'anode_material', 'anode'],
    directField: 'anodeMaterials',
  },
  {
    name: 'Cathode material',
    weight: 1.0,
    searchTerms: [
      'cathode material',
      'cathode electrode',
      'air cathode',
      'platinum cathode',
      'carbon cathode',
    ],
    jsonKeys: ['cathodeMaterial', 'cathode_material', 'cathode'],
    directField: 'cathodeMaterials',
  },
  {
    name: 'Electrode surface area',
    weight: 0.9,
    searchTerms: [
      'surface area',
      'electrode area',
      'active area',
      'geometric area',
      'cm2',
      'cm²',
      'projected area',
    ],
    jsonKeys: [
      'surfaceArea',
      'surface_area',
      'electrodeArea',
      'electrode_area',
      'anodeArea',
      'cathodeArea',
    ],
    directField: null,
  },
  {
    name: 'Biofilm maturation time',
    weight: 0.8,
    searchTerms: [
      'biofilm',
      'maturation',
      'acclimation',
      'colonization',
      'enrichment period',
      'startup period',
    ],
    jsonKeys: ['biofilmMaturation', 'biofilm_maturation', 'maturation_time', 'acclimationTime'],
    directField: null,
  },
  {
    name: 'Operating temperature',
    weight: 0.8,
    searchTerms: [
      'temperature',
      'temp',
      '°c',
      'celsius',
      'room temperature',
      'ambient temperature',
      'mesophilic',
      'thermophilic',
    ],
    jsonKeys: ['temperature', 'operatingTemp', 'operating_temp', 'temp'],
    directField: null,
  },
  {
    name: 'pH',
    weight: 0.7,
    searchTerms: ['ph', 'ph value', 'acidity', 'alkalinity', 'neutral ph', 'buffer'],
    jsonKeys: ['ph', 'pH', 'ph_general', 'ph_value'],
    directField: null,
  },
  {
    name: 'Substrate type',
    weight: 0.9,
    searchTerms: [
      'substrate',
      'carbon source',
      'organic matter',
      'wastewater',
      'acetate',
      'glucose',
      'lactate',
      'domestic wastewater',
      'synthetic wastewater',
    ],
    jsonKeys: ['substrate', 'substrateType', 'substrate_type', 'carbonSource'],
    directField: null,
  },
  {
    name: 'Substrate concentration',
    weight: 0.8,
    searchTerms: [
      'concentration',
      'cod',
      'mg/l',
      'g/l',
      'substrate concentration',
      'organic loading',
    ],
    jsonKeys: ['concentration', 'substrateConcentration', 'substrate_concentration', 'cod', 'COD'],
    directField: null,
  },
  {
    name: 'External resistance',
    weight: 0.9,
    searchTerms: [
      'external resistance',
      'load resistance',
      'resistor',
      'external load',
      'ohm',
      'Ω',
      'kΩ',
    ],
    jsonKeys: ['externalResistance', 'external_resistance', 'resistance', 'load'],
    directField: null,
  },
  {
    name: 'Inoculum source',
    weight: 0.7,
    searchTerms: [
      'inoculum',
      'inoculant',
      'seed',
      'sludge',
      'anaerobic sludge',
      'activated sludge',
      'wastewater sludge',
      'mixed culture',
    ],
    jsonKeys: ['inoculumSource', 'inoculum_source', 'inoculum', 'seed'],
    directField: null,
  },
  {
    name: 'Reactor volume',
    weight: 0.7,
    searchTerms: [
      'reactor volume',
      'chamber volume',
      'working volume',
      'anodic volume',
      'ml',
      'liter',
      'litre',
    ],
    jsonKeys: ['reactorVolume', 'reactor_volume', 'volume', 'chamberVolume'],
    directField: null,
  },
  {
    name: 'Membrane type',
    weight: 0.6,
    searchTerms: [
      'membrane',
      'nafion',
      'pem',
      'proton exchange',
      'separator',
      'cation exchange',
      'cem',
      'ultrex',
    ],
    jsonKeys: ['membraneType', 'membrane_type', 'membrane', 'separator'],
    directField: null,
  },
  {
    name: 'Measurement method',
    weight: 1.0,
    searchTerms: [
      'polarization',
      'polarisation',
      'power curve',
      'i-v curve',
      'measurement',
      'cyclic voltammetry',
      'eis',
      'impedance',
      'linear sweep',
    ],
    jsonKeys: ['measurementMethod', 'measurement_method', 'method'],
    directField: null,
  },
  {
    name: 'Operating duration',
    weight: 0.8,
    searchTerms: [
      'duration',
      'operating time',
      'operation time',
      'days',
      'hours',
      'weeks',
      'run time',
      'experiment duration',
    ],
    jsonKeys: ['duration', 'operatingDuration', 'operating_duration', 'runTime'],
    directField: null,
  },
  {
    name: 'Electrolyte composition',
    weight: 0.6,
    searchTerms: [
      'electrolyte',
      'buffer solution',
      'pbs',
      'phosphate buffer',
      'catholyte',
      'anolyte',
      'media composition',
    ],
    jsonKeys: ['electrolyte', 'electrolyteComposition', 'electrolyte_composition', 'buffer'],
    directField: null,
  },
  {
    name: 'Dissolved oxygen',
    weight: 0.5,
    searchTerms: [
      'dissolved oxygen',
      'do',
      'oxygen',
      'aeration',
      'aerobic',
      'anaerobic',
      'oxygen level',
    ],
    jsonKeys: ['dissolvedOxygen', 'dissolved_oxygen', 'do', 'oxygen'],
    directField: null,
  },
  {
    name: 'Hydraulic retention time',
    weight: 0.5,
    searchTerms: ['hrt', 'hydraulic retention', 'retention time', 'residence time', 'flow rate'],
    jsonKeys: ['hrt', 'hydraulicRetentionTime', 'hydraulic_retention_time', 'retentionTime'],
    directField: null,
  },
  {
    name: 'Coulombic efficiency',
    weight: 0.7,
    searchTerms: [
      'coulombic efficiency',
      'ce',
      'faradaic efficiency',
      'electron recovery',
      'current efficiency',
    ],
    jsonKeys: ['coulombicEfficiency', 'coulombic_efficiency', 'ce', 'efficiency'],
    directField: 'efficiency',
  },
  {
    name: 'COD removal',
    weight: 0.6,
    searchTerms: [
      'cod removal',
      'cod reduction',
      'organic removal',
      'treatment efficiency',
      'removal rate',
      'removal efficiency',
    ],
    jsonKeys: ['codRemoval', 'cod_removal', 'removal', 'treatmentEfficiency'],
    directField: null,
  },
];

interface PaperReproducibility {
  id: string;
  title: string;
  authors: string;
  year: number | null;
  powerOutput: number | null;
  tier: 'Excellent' | 'Good' | 'Fair' | 'Poor' | 'Insufficient';
  score: number;
  parametersPresent: string[];
  parametersMissing: string[];
  weightedScore: number;
  detectionSources: Record<string, string[]>; // Which source detected each parameter
}

interface ParameterCoverage {
  parameter: string;
  present: number;
  missing: number;
  coverageRate: number;
  weight: number;
  impact: 'critical' | 'important' | 'useful';
}

interface ReproducibilityReport {
  timestamp: string;
  summary: {
    totalPapersAnalyzed: number;
    avgReproducibilityScore: number;
    tierDistribution: Record<string, number>;
    worstMissingParameters: string[];
    varianceExplainedByMissing: number;
  };
  papers: PaperReproducibility[];
  parameterCoverage: ParameterCoverage[];
  tierDefinitions: {
    tier: string;
    scoreRange: string;
    description: string;
    paperCount: number;
  }[];
  recommendations: {
    forAuthors: string[];
    forReviewers: string[];
    forCommunity: string[];
  };
  figureData: {
    paperIds: string[];
    parameters: string[];
    coverageMatrix: number[][];
    scores: number[];
    tiers: string[];
  };
  checklist: {
    required: string[];
    recommended: string[];
    optional: string[];
  };
}

function safeParseJSON(jsonStr: string | null | undefined): any {
  if (!jsonStr) return null;
  try {
    return JSON.parse(jsonStr);
  } catch {
    return null;
  }
}

function checkParameterInJSON(json: any, keys: string[]): boolean {
  if (!json || typeof json !== 'object') return false;

  for (const key of keys) {
    // Direct key check
    if (json[key] !== undefined && json[key] !== null && json[key] !== '') {
      return true;
    }

    // Nested check for objects like {substrate: {type: "glucose"}}
    for (const prop of Object.keys(json)) {
      const value = json[prop];
      if (typeof value === 'object' && value !== null) {
        if (value[key] !== undefined && value[key] !== null) {
          return true;
        }
      }
    }
  }

  return false;
}

function checkParameterInText(text: string | null | undefined, terms: string[]): boolean {
  if (!text) return false;
  const textLower = text.toLowerCase();

  for (const term of terms) {
    if (textLower.includes(term.toLowerCase())) {
      return true;
    }
  }

  return false;
}

function checkParameterPresence(
  paper: any,
  param: (typeof CRITICAL_PARAMETERS)[0]
): { present: boolean; sources: string[] } {
  const sources: string[] = [];

  // 1. Check direct field if specified
  if (param.directField && paper[param.directField]) {
    const value = paper[param.directField];
    // Check it's not just whitespace or empty-looking
    if (typeof value === 'string' && value.trim().length > 0 && !value.includes('N/A')) {
      sources.push(`direct:${param.directField}`);
    } else if (typeof value === 'number') {
      sources.push(`direct:${param.directField}`);
    }
  }

  // 2. Check JSON fields
  const jsonFields = [
    { name: 'biologicalParameters', data: safeParseJSON(paper.biologicalParameters) },
    { name: 'operationalParameters', data: safeParseJSON(paper.operationalParameters) },
    { name: 'experimentalConditions', data: safeParseJSON(paper.experimentalConditions) },
    { name: 'reactorConfiguration', data: safeParseJSON(paper.reactorConfiguration) },
    { name: 'electrodeSpecifications', data: safeParseJSON(paper.electrodeSpecifications) },
    { name: 'performanceMetrics', data: safeParseJSON(paper.performanceMetrics) },
    { name: 'electrochemicalData', data: safeParseJSON(paper.electrochemicalData) },
  ];

  for (const { name, data } of jsonFields) {
    if (checkParameterInJSON(data, param.jsonKeys)) {
      sources.push(`json:${name}`);
    }
  }

  // 3. Check text fields for search terms
  const textFields = [
    { name: 'abstract', text: paper.abstract },
    { name: 'title', text: paper.title },
    { name: 'aiKeyFindings', text: paper.aiKeyFindings },
    { name: 'aiMethodology', text: paper.aiMethodology },
    { name: 'keywords', text: paper.keywords },
    { name: 'anodeMaterials', text: paper.anodeMaterials },
    { name: 'cathodeMaterials', text: paper.cathodeMaterials },
    { name: 'biologicalParameters', text: paper.biologicalParameters },
    { name: 'operationalParameters', text: paper.operationalParameters },
    { name: 'experimentalConditions', text: paper.experimentalConditions },
  ];

  for (const { name, text } of textFields) {
    if (checkParameterInText(text, param.searchTerms)) {
      // Avoid duplicates if already found in JSON
      if (!sources.some((s) => s.includes(name))) {
        sources.push(`text:${name}`);
      }
    }
  }

  return {
    present: sources.length > 0,
    sources,
  };
}

function calculateTier(score: number): 'Excellent' | 'Good' | 'Fair' | 'Poor' | 'Insufficient' {
  // Adjusted thresholds to get better distribution
  // Based on what's realistically available in the literature
  if (score >= 0.65) return 'Excellent'; // 13+ of 20 parameters
  if (score >= 0.45) return 'Good'; // 9-12 parameters
  if (score >= 0.3) return 'Fair'; // 6-8 parameters
  if (score >= 0.15) return 'Poor'; // 3-5 parameters
  return 'Insufficient'; // 0-2 parameters
}

async function analyzeReproducibility(): Promise<ReproducibilityReport> {
  console.log(`
╔═══════════════════════════════════════════════════════════════╗
║       Discovery 4: Reproducibility Quantified                   ║
║       "The Hidden Variables Behind the Paradox"                 ║
║       IMPROVED: Multi-Source Parameter Detection                ║
╚═══════════════════════════════════════════════════════════════╝
`);

  // 1. Load all papers with power output from 2000-2026
  console.log('1. Loading papers for reproducibility analysis (2000-2026)...');

  const papers = await prisma.researchPaper.findMany({
    where: {
      powerOutput: { not: null },
      publicationDate: {
        gte: new Date('2000-01-01'),
        lte: new Date('2026-12-31'),
      },
    },
    select: {
      id: true,
      title: true,
      authors: true,
      abstract: true,
      publicationDate: true,
      powerOutput: true,
      systemType: true,
      anodeMaterials: true,
      cathodeMaterials: true,
      operationalParameters: true,
      biologicalParameters: true,
      electrochemicalData: true,
      reactorConfiguration: true,
      experimentalConditions: true,
      electrodeSpecifications: true,
      performanceMetrics: true,
      aiKeyFindings: true,
      aiMethodology: true,
      efficiency: true,
      keywords: true,
      parameterCompleteness: true,
    },
  });

  console.log(`   Loaded ${papers.length} papers with power output (2000-2026)`);

  // 2. Score each paper
  console.log('\n2. Scoring paper reproducibility with multi-source detection...');

  const paperScores: PaperReproducibility[] = [];
  const parameterStats = new Map<string, { present: number; missing: number }>();

  // Initialize parameter stats
  for (const param of CRITICAL_PARAMETERS) {
    parameterStats.set(param.name, { present: 0, missing: 0 });
  }

  for (const paper of papers) {
    const parametersPresent: string[] = [];
    const parametersMissing: string[] = [];
    const detectionSources: Record<string, string[]> = {};
    let weightedSum = 0;
    let totalWeight = 0;

    for (const param of CRITICAL_PARAMETERS) {
      const { present, sources } = checkParameterPresence(paper, param);
      totalWeight += param.weight;

      if (present) {
        parametersPresent.push(param.name);
        detectionSources[param.name] = sources;
        weightedSum += param.weight;
        parameterStats.get(param.name)!.present++;
      } else {
        parametersMissing.push(param.name);
        parameterStats.get(param.name)!.missing++;
      }
    }

    const weightedScore = weightedSum / totalWeight;
    const score = parametersPresent.length / CRITICAL_PARAMETERS.length;
    const tier = calculateTier(weightedScore);

    paperScores.push({
      id: paper.id,
      title: paper.title,
      authors: paper.authors || '',
      year: paper.publicationDate?.getFullYear() || null,
      powerOutput: paper.powerOutput,
      tier,
      score,
      parametersPresent,
      parametersMissing,
      weightedScore,
      detectionSources,
    });
  }

  // Sort by score
  paperScores.sort((a, b) => b.weightedScore - a.weightedScore);

  // 3. Calculate parameter coverage
  console.log('\n3. Calculating parameter coverage rates...');

  const parameterCoverage: ParameterCoverage[] = [];

  for (const param of CRITICAL_PARAMETERS) {
    const stats = parameterStats.get(param.name)!;
    const total = stats.present + stats.missing;
    const coverageRate = total > 0 ? stats.present / total : 0;

    parameterCoverage.push({
      parameter: param.name,
      present: stats.present,
      missing: stats.missing,
      coverageRate,
      weight: param.weight,
      impact: param.weight >= 0.9 ? 'critical' : param.weight >= 0.7 ? 'important' : 'useful',
    });

    console.log(
      `   ${param.name}: ${(coverageRate * 100).toFixed(1)}% reported (${stats.present}/${total})`
    );
  }

  parameterCoverage.sort((a, b) => a.coverageRate - b.coverageRate);

  // 4. Calculate tier distribution
  console.log('\n4. Calculating tier distribution...');

  const tierDistribution: Record<string, number> = {
    Excellent: 0,
    Good: 0,
    Fair: 0,
    Poor: 0,
    Insufficient: 0,
  };

  for (const paper of paperScores) {
    tierDistribution[paper.tier]++;
  }

  for (const [tier, count] of Object.entries(tierDistribution)) {
    console.log(`   ${tier}: ${count} papers (${((count / papers.length) * 100).toFixed(1)}%)`);
  }

  // 5. Estimate variance explained by missing parameters
  console.log('\n5. Estimating variance explained by missing parameters...');

  // Group papers by completeness tier and calculate power variance
  const tiers = ['Excellent', 'Good', 'Fair', 'Poor', 'Insufficient'];
  const tierVariances: Record<string, { values: number[]; variance: number }> = {};

  for (const tier of tiers) {
    const tierPapers = paperScores.filter((p) => p.tier === tier && p.powerOutput);
    const values = tierPapers.map((p) => p.powerOutput!);

    if (values.length > 1) {
      const mean = values.reduce((a, b) => a + b, 0) / values.length;
      const variance = values.reduce((sum, v) => sum + Math.pow(v - mean, 2), 0) / values.length;
      tierVariances[tier] = { values, variance };
    } else {
      tierVariances[tier] = { values, variance: 0 };
    }
  }

  // Calculate total variance
  const allValues = paperScores.filter((p) => p.powerOutput).map((p) => p.powerOutput!);
  const totalMean = allValues.reduce((a, b) => a + b, 0) / allValues.length;
  const totalVariance =
    allValues.reduce((sum, v) => sum + Math.pow(v - totalMean, 2), 0) / allValues.length;

  // Estimate variance explained by tier (proxy for parameter completeness)
  let withinTierVariance = 0;
  let totalWeightedN = 0;

  for (const tier of tiers) {
    const { values, variance } = tierVariances[tier];
    if (values.length > 0) {
      withinTierVariance += variance * values.length;
      totalWeightedN += values.length;
    }
  }

  const avgWithinVariance = totalWeightedN > 0 ? withinTierVariance / totalWeightedN : 0;
  const varianceExplained =
    totalVariance > 0 ? ((totalVariance - avgWithinVariance) / totalVariance) * 100 : 0;

  console.log(`   Total variance: ${totalVariance.toFixed(0)}`);
  console.log(`   Within-tier variance: ${avgWithinVariance.toFixed(0)}`);
  console.log(`   Variance explained by completeness: ${varianceExplained.toFixed(1)}%`);

  // 6. Generate recommendations
  const worstMissing = parameterCoverage.slice(0, 5).map((p) => p.parameter);

  const recommendations = {
    forAuthors: [
      `Always report: ${worstMissing.slice(0, 3).join(', ')}`,
      'Use standardized measurement protocols from ISMET guidelines',
      'Include raw polarization curves as supplementary data',
      'Specify exact measurement time point (steady-state vs peak)',
      'Report normalized AND absolute power values',
    ],
    forReviewers: [
      `Check for presence of: ${CRITICAL_PARAMETERS.filter((p) => p.weight >= 0.9)
        .map((p) => p.name)
        .join(', ')}`,
      'Request clarification on missing critical parameters',
      'Verify measurement methodology against community standards',
      'Flag papers with < 30% parameter completeness for revision',
    ],
    forCommunity: [
      'Adopt unified reproducibility checklist for MES publications',
      'Create open database of validated measurement conditions',
      'Establish inter-laboratory validation studies',
      'Develop reproducibility scoring for citation weighting',
    ],
  };

  // 7. Generate figure data (heatmap matrix)
  console.log('\n6. Generating figure data...');

  // Select all papers for visualization (sorted by score)
  const allPapersForViz = paperScores;
  const figureParams = CRITICAL_PARAMETERS.map((p) => p.name);

  const coverageMatrix: number[][] = [];
  for (const paper of allPapersForViz) {
    const row: number[] = [];
    for (const param of figureParams) {
      row.push(paper.parametersPresent.includes(param) ? 1 : 0);
    }
    coverageMatrix.push(row);
  }

  // 8. Create reproducibility checklist
  const checklist = {
    required: CRITICAL_PARAMETERS.filter((p) => p.weight >= 0.9).map((p) => p.name),
    recommended: CRITICAL_PARAMETERS.filter((p) => p.weight >= 0.7 && p.weight < 0.9).map(
      (p) => p.name
    ),
    optional: CRITICAL_PARAMETERS.filter((p) => p.weight < 0.7).map((p) => p.name),
  };

  // Compile report
  const report: ReproducibilityReport = {
    timestamp: new Date().toISOString(),
    summary: {
      totalPapersAnalyzed: papers.length,
      avgReproducibilityScore:
        paperScores.reduce((sum, p) => sum + p.weightedScore, 0) / paperScores.length,
      tierDistribution,
      worstMissingParameters: worstMissing,
      varianceExplainedByMissing: varianceExplained,
    },
    papers: paperScores,
    parameterCoverage,
    tierDefinitions: [
      {
        tier: 'Excellent',
        scoreRange: '65-100%',
        description: 'Highly reproducible with comprehensive parameters',
        paperCount: tierDistribution['Excellent'],
      },
      {
        tier: 'Good',
        scoreRange: '45-64%',
        description: 'Mostly reproducible, minor gaps',
        paperCount: tierDistribution['Good'],
      },
      {
        tier: 'Fair',
        scoreRange: '30-44%',
        description: 'Partially reproducible, notable gaps',
        paperCount: tierDistribution['Fair'],
      },
      {
        tier: 'Poor',
        scoreRange: '15-29%',
        description: 'Difficult to reproduce, major gaps',
        paperCount: tierDistribution['Poor'],
      },
      {
        tier: 'Insufficient',
        scoreRange: '0-14%',
        description: 'Cannot be reproduced from publication',
        paperCount: tierDistribution['Insufficient'],
      },
    ],
    recommendations,
    figureData: {
      paperIds: allPapersForViz.map((p) => p.id),
      parameters: figureParams,
      coverageMatrix,
      scores: allPapersForViz.map((p) => p.weightedScore),
      tiers: allPapersForViz.map((p) => p.tier),
    },
    checklist,
  };

  return report;
}

async function main() {
  try {
    const report = await analyzeReproducibility();

    // Batch write reproducibility scores to database
    console.log('\nWriting reproducibility scores to database...');
    const paperIds = report.figureData.paperIds;
    const scores = report.figureData.scores;
    const BATCH_SIZE = 500;
    let dbWriteCount = 0;
    for (let i = 0; i < paperIds.length; i += BATCH_SIZE) {
      const batchIds = paperIds.slice(i, i + BATCH_SIZE);
      const batchScores = scores.slice(i, i + BATCH_SIZE);
      await prisma.$transaction(
        batchIds.map((id, idx) =>
          prisma.researchPaper.update({
            where: { id },
            data: { reproducibilityScore: batchScores[idx] },
          })
        )
      );
      dbWriteCount += batchIds.length;
      console.log(`  Updated ${dbWriteCount}/${paperIds.length} papers`);
    }
    console.log(`Successfully wrote ${paperIds.length} reproducibility scores to database`);

    // Output directory
    const outputDir = path.join(__dirname, '..', 'docs', 'abstracts');
    fs.mkdirSync(outputDir, { recursive: true });

    // Save report
    const reportPath = path.join(outputDir, 'discovery-4-reproducibility.json');
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`\nReport saved to: ${reportPath}`);

    // Print summary
    console.log(`
╔═══════════════════════════════════════════════════════════════╗
║          DISCOVERY 4: REPRODUCIBILITY QUANTIFIED                ║
║                 IMPROVED MULTI-SOURCE ANALYSIS                  ║
╚═══════════════════════════════════════════════════════════════╝

KEY FINDING:
  Average reproducibility score: ${(report.summary.avgReproducibilityScore * 100).toFixed(1)}%
  Variance explained by parameter completeness: ${report.summary.varianceExplainedByMissing.toFixed(
    1
  )}%

TIER DISTRIBUTION:
  Excellent: ${report.summary.tierDistribution['Excellent']} papers (${(
      (report.summary.tierDistribution['Excellent'] / report.summary.totalPapersAnalyzed) *
      100
    ).toFixed(1)}%)
  Good:      ${report.summary.tierDistribution['Good']} papers (${(
      (report.summary.tierDistribution['Good'] / report.summary.totalPapersAnalyzed) *
      100
    ).toFixed(1)}%)
  Fair:      ${report.summary.tierDistribution['Fair']} papers (${(
      (report.summary.tierDistribution['Fair'] / report.summary.totalPapersAnalyzed) *
      100
    ).toFixed(1)}%)
  Poor:      ${report.summary.tierDistribution['Poor']} papers (${(
      (report.summary.tierDistribution['Poor'] / report.summary.totalPapersAnalyzed) *
      100
    ).toFixed(1)}%)
  Insufficient: ${report.summary.tierDistribution['Insufficient']} papers (${(
      (report.summary.tierDistribution['Insufficient'] / report.summary.totalPapersAnalyzed) *
      100
    ).toFixed(1)}%)

WORST MISSING PARAMETERS:
${report.summary.worstMissingParameters.map((p, i) => `  ${i + 1}. ${p}`).join('\n')}

REPRODUCIBILITY CHECKLIST (REQUIRED):
${report.checklist.required.map((p) => `  ☐ ${p}`).join('\n')}

FOR ABSTRACT:
  "Reproducibility assessment across ${
    report.summary.totalPapersAnalyzed
  } papers (2000-2026) revealed
  average parameter completeness of ${(report.summary.avgReproducibilityScore * 100).toFixed(0)}%,
  with ${report.summary.varianceExplainedByMissing.toFixed(0)}% of performance variance
  attributable to unreported parameters. Tier distribution:
  ${report.summary.tierDistribution['Excellent']} Excellent, ${
      report.summary.tierDistribution['Good']
    } Good,
  ${report.summary.tierDistribution['Fair']} Fair, ${report.summary.tierDistribution['Poor']} Poor,
  ${report.summary.tierDistribution['Insufficient']} Insufficient."
`);

    // Show top papers for verification
    console.log('\nTOP 5 PAPERS BY REPRODUCIBILITY SCORE:');
    for (const paper of report.papers.slice(0, 5)) {
      console.log(`\n  ${paper.title.substring(0, 60)}...`);
      console.log(
        `  Year: ${paper.year} | Power: ${paper.powerOutput?.toFixed(1)} mW/m² | Tier: ${
          paper.tier
        }`
      );
      console.log(
        `  Score: ${(paper.weightedScore * 100).toFixed(1)}% | Params: ${
          paper.parametersPresent.length
        }/${CRITICAL_PARAMETERS.length}`
      );
      console.log(`  Present: ${paper.parametersPresent.join(', ')}`);
    }
  } catch (error) {
    console.error('Analysis failed:', error);
  } finally {
    await prisma.$disconnect();
  }
}

if (require.main === module) {
  main().catch(console.error);
}

export { analyzeReproducibility, ReproducibilityReport };
