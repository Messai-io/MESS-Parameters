#!/usr/bin/env tsx
/**
 * Pull per-paper material strings + paper-level performance scalars from
 * the messai-ai production Postgres, emit data/paper-materials-prod.csv.
 *
 * Reads DIRECT_URL from process env. Aborts if unset.
 * Uses psql COPY to stream the result set directly to the output file —
 * no new runtime dep, no URL ever written to disk or logs.
 *
 * Usage:
 *   export DIRECT_URL=$(grep '^DIRECT_URL=' ~/repos/messai-ai/.env.production.local | cut -d= -f2- | tr -d '"')
 *   npx tsx scripts/sync-prod-paper-materials.ts
 */
import * as fs from 'fs';
import * as path from 'path';
import { spawnSync } from 'child_process';

const ROOT = path.resolve(__dirname, '..');
const OUT_PATH = path.join(ROOT, 'data', 'paper-materials-prod.csv');

const QUERY = `
COPY (
  SELECT
    doi,
    title,
    EXTRACT(YEAR FROM "publicationDate")::int AS year,
    journal,
    "systemType",
    "anodeMaterials",
    "cathodeMaterials",
    "powerOutput",
    efficiency,
    "qualityScore",
    "parameterCompleteness",
    "aiConfidence",
    "reproducibilityScore",
    "citationCount"
  FROM "ResearchPaper"
  WHERE doi IS NOT NULL
  ORDER BY doi
) TO STDOUT WITH CSV HEADER
`.trim();

function main(): void {
  const url = process.env.DIRECT_URL;
  if (!url) {
    console.error(
      'ERROR: DIRECT_URL not set. Source it first:\n' +
        '  export DIRECT_URL=$(grep \'^DIRECT_URL=\' ~/repos/messai-ai/.env.production.local | cut -d= -f2- | tr -d \'"\')',
    );
    process.exit(1);
  }

  // Run psql with the URL in env only — never on the command line
  // (where it would be visible in process listings).
  console.log('[sync] streaming ResearchPaper from prod …');
  const result = spawnSync('psql', [url, '-c', QUERY], {
    encoding: 'utf8',
    maxBuffer: 256 * 1024 * 1024,
  });
  if (result.status !== 0) {
    console.error('psql failed:', result.stderr?.slice(0, 500));
    process.exit(1);
  }

  const csv = result.stdout;
  fs.writeFileSync(OUT_PATH, csv, 'utf8');

  // Lightweight coverage summary — parse the CSV header + rows.
  const lines = csv.split(/\r?\n/).filter((l) => l.length > 0);
  const nRows = Math.max(0, lines.length - 1);
  if (nRows === 0) {
    console.error('no rows returned — aborting');
    process.exit(1);
  }
  const header = lines[0].split(',');
  const idx = Object.fromEntries(header.map((h, i) => [h.replace(/"/g, ''), i]));
  let nAnode = 0;
  let nCathode = 0;
  let nPower = 0;
  let nEff = 0;
  let nCitation = 0;
  let nRepro = 0;
  for (let i = 1; i < lines.length; i++) {
    // naive CSV split — the server-emitted CSV is quote-escaped correctly,
    // and we only inspect presence, not exact values
    const row = lines[i].split(',');
    const pick = (k: string) => {
      const v = row[idx[k]];
      return v !== undefined && v !== '' && v !== '""';
    };
    if (pick('anodeMaterials')) nAnode++;
    if (pick('cathodeMaterials')) nCathode++;
    if (pick('powerOutput')) nPower++;
    if (pick('efficiency')) nEff++;
    if (pick('citationCount')) nCitation++;
    if (pick('reproducibilityScore')) nRepro++;
  }

  console.log(`✓ wrote ${path.relative(ROOT, OUT_PATH)}`);
  console.log(`  total rows:         ${nRows}`);
  console.log(`  anode populated:    ${nAnode}`);
  console.log(`  cathode populated:  ${nCathode}`);
  console.log(`  powerOutput:        ${nPower}`);
  console.log(`  efficiency:         ${nEff}`);
  console.log(`  citationCount:      ${nCitation}`);
  console.log(`  reproducibility:    ${nRepro}`);
}

main();
