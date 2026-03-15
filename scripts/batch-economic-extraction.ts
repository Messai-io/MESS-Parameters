#!/usr/bin/env ts-node

/**
 * Batch Economic Data Extraction
 *
 * Extracts economic metrics (costs, ROI, payback periods, LCOE, etc.)
 * from paper abstracts and AI summaries using regex pattern matching.
 * Reuses patterns from apps/web/src/lib/services/economic-extraction-service.ts
 *
 * Run: npx tsx scripts/batch-economic-extraction.ts
 */

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const BATCH_SIZE = 200;

// Economic extraction patterns (from economic-extraction-service.ts)
const PATTERNS = {
  capitalCost: [
    /capital\s+(?:cost|expenditure|investment)[s]?\s*(?:of|:|\s)\s*(?:\$|USD|EUR|€|£)?\s*([\d,]+(?:\.\d+)?)\s*(?:million|M|k|thousand)?/gi,
    /CAPEX\s*(?:of|:|\s)\s*(?:\$|USD|EUR|€|£)?\s*([\d,]+(?:\.\d+)?)/gi,
    /total\s+(?:capital|installation)\s+cost[s]?\s*(?:of|:|\s)\s*(?:\$|USD|EUR|€|£)?\s*([\d,]+(?:\.\d+)?)/gi,
  ],
  operationalCost: [
    /operational\s+(?:cost|expenditure)[s]?\s*(?:of|:|\s)\s*(?:\$|USD|EUR|€|£)?\s*([\d,]+(?:\.\d+)?)\s*(?:per|\/)\s*(year|yr|month|day)/gi,
    /OPEX\s*(?:of|:|\s)\s*(?:\$|USD|EUR|€|£)?\s*([\d,]+(?:\.\d+)?)/gi,
    /annual\s+(?:operating|maintenance)\s+cost[s]?\s*(?:\$|USD|EUR|€|£)?\s*([\d,]+(?:\.\d+)?)/gi,
  ],
  payback: [
    /payback\s+(?:period|time)\s*(?:of|:|\s)\s*([\d,]+(?:\.\d+)?)\s*(?:years|yr|months)/gi,
    /(?:simple|discounted)\s+payback\s*(?:of|:|\s)\s*([\d,]+(?:\.\d+)?)/gi,
  ],
  npv: [
    /(?:net\s+present\s+value|NPV)\s*(?:of|:|\s)\s*(?:\$|USD|EUR|€|£)?\s*([-\d,]+(?:\.\d+)?)\s*(?:million|M|k)?/gi,
  ],
  irr: [
    /(?:internal\s+rate\s+of\s+return|IRR)\s*(?:of|:|\s)\s*([\d,]+(?:\.\d+)?)\s*%/gi,
  ],
  lcoe: [
    /(?:levelized\s+cost\s+of\s+(?:energy|electricity)|LCOE)\s*(?:of|:|\s)\s*(?:\$|USD|EUR|€|£)?\s*([\d,]+(?:\.\d+)?)\s*(?:per|\/)\s*kWh/gi,
  ],
  lcot: [
    /(?:levelized\s+cost\s+of\s+treatment|LCOT)\s*(?:of|:|\s)\s*(?:\$|USD|EUR|€|£)?\s*([\d,]+(?:\.\d+)?)\s*(?:per|\/)\s*(?:m³|m3|L)/gi,
  ],
  costPerKw: [
    /(?:\$|USD|EUR)\s*([\d,]+(?:\.\d+)?)\s*(?:per|\/)\s*kW/gi,
    /cost\s*(?:of|:)\s*(?:\$|USD|EUR)?\s*([\d,]+(?:\.\d+)?)\s*(?:per|\/)\s*kW/gi,
  ],
  energyCost: [
    /energy\s+(?:cost|consumption)[s]?\s*(?:of|:|\s)\s*(?:\$|USD|EUR|€|£)?\s*([\d,]+(?:\.\d+)?)\s*(?:per|\/)\s*kWh/gi,
  ],
  scale: [
    /reactor\s+(?:volume|size)\s*(?:of|:|\s)\s*([\d,]+(?:\.\d+)?)\s*(?:L|liters|litres|m³|m3)/gi,
    /(?:lab|bench|pilot|demonstration|commercial)\s+scale/gi,
    /TRL\s*(?:of|:|\s)\s*(\d)/gi,
  ],
};

function extractFirstMatch(text: string, patterns: RegExp[]): string | null {
  for (const pattern of patterns) {
    pattern.lastIndex = 0;
    const match = pattern.exec(text);
    if (match && match[1]) {
      return match[1].replace(/,/g, '');
    }
  }
  return null;
}

function detectScale(text: string): string | null {
  const lower = text.toLowerCase();
  if (/commercial[\s-]scale/.test(lower)) return 'commercial';
  if (/pilot[\s-]scale/.test(lower)) return 'pilot';
  if (/demonstration[\s-]scale/.test(lower) || /demo[\s-]scale/.test(lower)) return 'demo';
  if (/bench[\s-]scale/.test(lower)) return 'bench';
  if (/lab(?:oratory)?[\s-]scale/.test(lower)) return 'lab';
  return null;
}

function extractEconomicData(text: string): Record<string, any> | null {
  const result: Record<string, any> = {};
  let found = false;

  const capitalCost = extractFirstMatch(text, PATTERNS.capitalCost);
  if (capitalCost) { result.capitalCost = parseFloat(capitalCost); found = true; }

  const opCost = extractFirstMatch(text, PATTERNS.operationalCost);
  if (opCost) { result.operationalCost = parseFloat(opCost); found = true; }

  const payback = extractFirstMatch(text, PATTERNS.payback);
  if (payback) { result.paybackPeriod = parseFloat(payback); found = true; }

  const npv = extractFirstMatch(text, PATTERNS.npv);
  if (npv) { result.npv = parseFloat(npv); found = true; }

  const irr = extractFirstMatch(text, PATTERNS.irr);
  if (irr) { result.irr = parseFloat(irr); found = true; }

  const lcoe = extractFirstMatch(text, PATTERNS.lcoe);
  if (lcoe) { result.lcoe = parseFloat(lcoe); found = true; }

  const lcot = extractFirstMatch(text, PATTERNS.lcot);
  if (lcot) { result.lcot = parseFloat(lcot); found = true; }

  const costPerKw = extractFirstMatch(text, PATTERNS.costPerKw);
  if (costPerKw) { result.costPerKw = parseFloat(costPerKw); found = true; }

  const energyCost = extractFirstMatch(text, PATTERNS.energyCost);
  if (energyCost) { result.energyCost = parseFloat(energyCost); found = true; }

  const scale = detectScale(text);
  if (scale) { result.scale = scale; found = true; }

  return found ? result : null;
}

async function main() {
  console.log('=== Batch Economic Data Extraction ===\n');

  // Count papers with text available but no economic metrics
  const totalPapers = await prisma.researchPaper.count({
    where: {
      economicMetrics: null,
      OR: [
        { abstract: { not: null } },
        { aiSummary: { not: null } },
        { aiKeyFindings: { not: null } },
      ],
    },
  });

  console.log(`Found ${totalPapers} papers to process\n`);
  let processed = 0;
  let extracted = 0;

  // Process in batches
  let skip = 0;
  while (skip < totalPapers) {
    const papers = await prisma.researchPaper.findMany({
      where: {
        economicMetrics: null,
        OR: [
          { abstract: { not: null } },
          { aiSummary: { not: null } },
          { aiKeyFindings: { not: null } },
        ],
      },
      select: {
        id: true,
        abstract: true,
        aiSummary: true,
        aiKeyFindings: true,
        title: true,
      },
      take: BATCH_SIZE,
      skip,
    });

    if (papers.length === 0) break;

    const updates: { id: string; data: string }[] = [];

    for (const paper of papers) {
      // Concatenate all available text
      const textParts = [
        paper.abstract,
        paper.aiSummary,
        paper.aiKeyFindings,
        paper.title,
      ].filter(Boolean);
      const text = textParts.join(' ');

      const economicData = extractEconomicData(text);
      if (economicData) {
        updates.push({ id: paper.id, data: JSON.stringify(economicData) });
      }
      processed++;
    }

    // Batch write to DB
    if (updates.length > 0) {
      await prisma.$transaction(
        updates.map(({ id, data }) =>
          prisma.researchPaper.update({
            where: { id },
            data: { economicMetrics: data },
          })
        )
      );
      extracted += updates.length;
    }

    skip += BATCH_SIZE;
    console.log(`Processed ${Math.min(skip, totalPapers)}/${totalPapers} | Extracted: ${extracted}`);
  }

  console.log(`\n=== Complete ===`);
  console.log(`Total processed: ${processed}`);
  console.log(`Papers with economic data: ${extracted} (${((extracted / processed) * 100).toFixed(1)}%)`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
