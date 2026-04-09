#!/usr/bin/env ts-node

/**
 * Export paper metadata with parameter completeness metrics from MESSAI database.
 * Requires DATABASE_URL environment variable pointing to a PostgreSQL
 * database with the MESSAI Prisma schema.
 *
 * Output: data/paper-metadata.csv
 *
 * Columns:
 *   paper_id              — Internal paper identifier
 *   doi                   — DOI (if available)
 *   title                 — Paper title
 *   authors               — Author list (semicolon-separated)
 *   year                  — Publication year
 *   journal               — Journal or source name
 *   system_type           — MES system type (MFC, MEC, MDC, etc.)
 *   parameter_count       — Number of extracted parameters for this paper
 *   reproducibility_score — Weighted completeness score (0-100%, if scored)
 *   has_full_text         — Whether full text was processed (true/false)
 *   has_abstract          — Whether abstract is available (true/false)
 *   has_economic_data     — Whether economic metrics were extracted (true/false)
 *
 * Run: DATABASE_URL="postgresql://..." npx tsx scripts/export-paper-metadata.ts
 */

import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';

const prisma = new PrismaClient();
const BATCH_SIZE = 200;
const BOM = '\uFEFF';

function escapeCsvField(value: unknown): string {
  if (value === null || value === undefined) return '';
  const str = String(value);
  if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
    return '"' + str.replace(/"/g, '""') + '"';
  }
  return str;
}

async function main() {
  const outPath = path.resolve(__dirname, '..', 'data', 'paper-metadata.csv');

  console.log('Exporting paper metadata...');

  const headers = [
    'paper_id', 'doi', 'title', 'authors', 'year', 'journal', 'system_type',
    'parameter_count', 'reproducibility_score',
    'has_full_text', 'has_abstract', 'has_economic_data'
  ];

  const lines: string[] = [headers.map(escapeCsvField).join(',')];

  const totalCount = await prisma.researchPaper.count();
  console.log(`  Total papers to export: ${totalCount}`);

  let exported = 0;
  let cursor: string | undefined;

  while (true) {
    const batch = await prisma.researchPaper.findMany({
      take: BATCH_SIZE,
      ...(cursor ? { skip: 1, cursor: { id: cursor } } : {}),
      select: {
        id: true,
        doi: true,
        title: true,
        authors: true,
        publicationDate: true,
        journal: true,
        systemType: true,
        reproducibilityScore: true,
        fullText: true,
        abstract: true,
        economicMetrics: true,
        _count: {
          select: { paperParameters: true }
        }
      },
      orderBy: { id: 'asc' }
    });

    if (batch.length === 0) break;
    cursor = batch[batch.length - 1].id;

    for (const paper of batch) {
      const year = paper.publicationDate
        ? new Date(paper.publicationDate).getFullYear()
        : '';

      // Authors may be stored as JSON array or string
      let authorStr = '';
      if (paper.authors) {
        if (Array.isArray(paper.authors)) {
          authorStr = paper.authors.join('; ');
        } else if (typeof paper.authors === 'string') {
          authorStr = paper.authors;
        }
      }

      lines.push([
        paper.id,
        paper.doi ?? '',
        paper.title ?? '',
        authorStr,
        String(year),
        paper.journal ?? '',
        paper.systemType ?? '',
        String(paper._count.paperParameters),
        paper.reproducibilityScore !== null && paper.reproducibilityScore !== undefined
          ? String(paper.reproducibilityScore)
          : '',
        paper.fullText ? 'true' : 'false',
        paper.abstract ? 'true' : 'false',
        paper.economicMetrics ? 'true' : 'false'
      ].map(escapeCsvField).join(','));
    }

    exported += batch.length;
    if (exported % 5000 === 0 || exported === totalCount) {
      console.log(`  Exported ${exported} / ${totalCount} papers`);
    }
  }

  fs.writeFileSync(outPath, BOM + lines.join('\n') + '\n', { encoding: 'utf-8' });
  console.log(`\nDone. ${exported} rows written to data/paper-metadata.csv`);

  await prisma.$disconnect();
}

main().catch(async (e) => {
  console.error('Export failed:', e.message);
  await prisma.$disconnect();
  process.exit(1);
});
