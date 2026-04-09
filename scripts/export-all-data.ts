#!/usr/bin/env ts-node

/**
 * Master export script — runs all data exports in sequence.
 *
 * 1. generate-csv-exports.ts    (no database required — always runs)
 * 2. export-parameter-values.ts (requires DATABASE_URL)
 * 3. export-paper-metadata.ts   (requires DATABASE_URL)
 *
 * If DATABASE_URL is not set, only step 1 runs and steps 2-3 are skipped
 * with a warning.
 *
 * Run (CSV only):    npx tsx scripts/export-all-data.ts
 * Run (full export): DATABASE_URL="postgresql://..." npx tsx scripts/export-all-data.ts
 */

import { execSync } from 'child_process';
import * as path from 'path';

interface ScriptConfig {
  name: string;
  file: string;
  requiresDb: boolean;
}

const scripts: ScriptConfig[] = [
  {
    name: 'CSV exports from JSON',
    file: 'generate-csv-exports.ts',
    requiresDb: false,
  },
  {
    name: 'Parameter values from database',
    file: 'export-parameter-values.ts',
    requiresDb: true,
  },
  {
    name: 'Paper metadata from database',
    file: 'export-paper-metadata.ts',
    requiresDb: true,
  },
];

function main() {
  const hasDb = !!process.env.DATABASE_URL;

  console.log('MESS-Parameters: Data Export Pipeline');
  console.log('=====================================\n');

  if (!hasDb) {
    console.log('Note: DATABASE_URL not set. Database exports will be skipped.\n');
  }

  let succeeded = 0;
  let skipped = 0;
  let failed = 0;

  for (const script of scripts) {
    if (script.requiresDb && !hasDb) {
      console.log(`[SKIP] ${script.name} (requires DATABASE_URL)`);
      skipped++;
      continue;
    }

    console.log(`[RUN]  ${script.name}...`);
    const scriptPath = path.resolve(__dirname, script.file);

    try {
      execSync(`npx tsx "${scriptPath}"`, {
        stdio: 'inherit',
        env: process.env,
        cwd: path.resolve(__dirname, '..'),
      });
      succeeded++;
      console.log('');
    } catch {
      console.error(`[FAIL] ${script.name} failed\n`);
      failed++;
    }
  }

  console.log('=====================================');
  console.log(`Results: ${succeeded} succeeded, ${skipped} skipped, ${failed} failed`);

  if (failed > 0) process.exit(1);
}

main();
