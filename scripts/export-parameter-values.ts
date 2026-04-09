#!/usr/bin/env ts-node

/**
 * Export extracted parameter values from MESSAI database to CSV.
 * Requires DATABASE_URL environment variable pointing to a PostgreSQL
 * database with the MESSAI Prisma schema.
 *
 * Output: data/parameter-values.csv
 *
 * Columns:
 *   paper_id        — Internal paper identifier
 *   paper_doi       — DOI (if available)
 *   paper_year      — Publication year
 *   system_type     — MES system type (MFC, MEC, MDC, etc.)
 *   parameter_id    — Parameter definition ID from ontology
 *   parameter_name  — Human-readable parameter name
 *   category        — Parameter category
 *   value           — Extracted numeric or string value
 *   unit            — Unit of measurement
 *   confidence      — Extraction confidence score (0-1, if available)
 *   extraction_method — How the value was extracted (regex, llm, table)
 *   source_section  — Paper section where the value was found
 *
 * Run: DATABASE_URL="postgresql://..." npx tsx scripts/export-parameter-values.ts
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
  const outPath = path.resolve(__dirname, '..', 'data', 'parameter-values.csv');

  console.log('Exporting extracted parameter values...');

  const headers = [
    'paper_id', 'paper_doi', 'paper_year', 'system_type',
    'parameter_id', 'parameter_name', 'category',
    'value', 'unit', 'confidence', 'extraction_method', 'source_section'
  ];

  const lines: string[] = [headers.map(escapeCsvField).join(',')];

  // Count total records for progress reporting
  const totalCount = await prisma.extractedParameterData.count();
  console.log(`  Total records to export: ${totalCount}`);

  let exported = 0;
  let cursor: string | undefined;

  while (true) {
    const batch = await prisma.extractedParameterData.findMany({
      take: BATCH_SIZE,
      ...(cursor ? { skip: 1, cursor: { id: cursor } } : {}),
      include: {
        paper: {
          select: {
            id: true,
            doi: true,
            publicationDate: true,
            systemType: true,
          }
        },
        parameterDefinition: {
          select: {
            id: true,
            name: true,
            category: true,
            unit: true,
          }
        }
      },
      orderBy: { id: 'asc' }
    });

    if (batch.length === 0) break;
    cursor = batch[batch.length - 1].id;

    for (const row of batch) {
      const year = row.paper?.publicationDate
        ? new Date(row.paper.publicationDate).getFullYear()
        : '';

      lines.push([
        row.paper?.id ?? '',
        row.paper?.doi ?? '',
        String(year),
        row.paper?.systemType ?? '',
        row.parameterDefinition?.id ?? row.parameterId ?? '',
        row.parameterDefinition?.name ?? '',
        row.parameterDefinition?.category ?? '',
        String(row.value ?? ''),
        row.parameterDefinition?.unit ?? row.unit ?? '',
        row.confidence !== null && row.confidence !== undefined ? String(row.confidence) : '',
        row.extractionMethod ?? '',
        row.sourceSection ?? ''
      ].map(escapeCsvField).join(','));
    }

    exported += batch.length;
    if (exported % 5000 === 0 || exported === totalCount) {
      console.log(`  Exported ${exported} / ${totalCount} records`);
    }
  }

  fs.writeFileSync(outPath, BOM + lines.join('\n') + '\n', { encoding: 'utf-8' });
  console.log(`\nDone. ${exported} rows written to data/parameter-values.csv`);

  await prisma.$disconnect();
}

main().catch(async (e) => {
  console.error('Export failed:', e.message);
  await prisma.$disconnect();
  process.exit(1);
});
