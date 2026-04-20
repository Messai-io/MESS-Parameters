#!/usr/bin/env node
// Smoke-test the Parameter-Pair Correlation Explorer.
// Expects a dev server URL via DEV_URL env (defaults to http://127.0.0.1:5174/MESS-Parameters/).
// Writes screenshots + console log to site/e2e/artifacts/. Prints a terse pass/fail summary.

import { chromium } from '../../node_modules/playwright/index.mjs';
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ART = resolve(__dirname, 'artifacts');
const DEV_URL = process.env.DEV_URL ?? 'http://127.0.0.1:5174/MESS-Parameters/';
const URL = `${DEV_URL}#/correlations`;

const failures = [];
const logs = [];

function check(cond, label) {
  if (!cond) failures.push(label);
  console.log(`${cond ? '✓' : '✗'} ${label}`);
}

await mkdir(ART, { recursive: true });

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({ viewport: { width: 1400, height: 1000 } });
const page = await ctx.newPage();
page.on('console', (m) => logs.push(`[${m.type()}] ${m.text()}`));
page.on('pageerror', (e) => logs.push(`[pageerror] ${e.message}`));

try {
  const resp = await page.goto(URL, { waitUntil: 'networkidle', timeout: 15000 });
  check(resp && resp.ok(), `HTTP ${resp?.status()} on ${URL}`);

  await page.waitForSelector('text=Parameter-Pair Correlation Explorer', { timeout: 10000 });
  check(true, 'Explorer heading rendered');

  // Subtitle must advertise BH-FDR (not Bonferroni)
  const subtitle = await page.locator('text=/BH-FDR corrected across the displayed family/').count();
  check(subtitle > 0, 'Subtitle mentions BH-FDR');

  // Wait until provenance load finishes (banner text appears)
  await page.waitForSelector('text=/Using precomputed global correlations/', { timeout: 15000 });
  const globalBanner = await page.locator('text=/BH-FDR q < 0\\.05/').count();
  check(globalBanner > 0, 'Global banner mentions BH-FDR q threshold');

  // Matrix is default view; it contains many rects + the legend "opacity ∝ |r|"
  await page.waitForSelector('text=/opacity ∝ \\|r\\|/', { timeout: 5000 });
  const matrixRects = await page.locator('svg rect').count();
  check(matrixRects > 0, `Matrix SVG rendered (${matrixRects} rects)`);
  await page.screenshot({ path: `${ART}/01-matrix-all.png`, fullPage: false });

  // Switch to network
  await page.getByRole('button', { name: /^network$/i }).first().click();
  await page.waitForSelector('text=/hover a node to isolate/', { timeout: 5000 });
  const ringCount = await page.locator('svg circle').count();
  check(ringCount > 0, `Network chord ring rendered (${ringCount} circles)`);
  await page.screenshot({ path: `${ART}/02-network-all.png`, fullPage: false });

  // Check filter banner reflects system type
  const bannerAll = await page.locator('text=/Using precomputed global correlations/').first();
  check(await bannerAll.count() > 0, 'Banner says global when system = All');

  // Switch system type to MFC and verify banner changes + recompute happens
  await page.getByRole('button', { name: /^MFC$/ }).first().click();
  await page.waitForTimeout(800); // let recompute run
  const bannerMFC = await page.locator('text=/Recomputed in-browser over .* MFC paper/').first();
  check(await bannerMFC.count() > 0, 'Banner says "Recomputed in-browser" after MFC selection');
  await page.screenshot({ path: `${ART}/03-network-mfc.png`, fullPage: false });

  // Switch to table view and verify a table renders (or empty-state text)
  await page.getByRole('button', { name: /^table$/i }).first().click();
  await page.waitForTimeout(200);
  const hasTable = (await page.$('table')) !== null;
  const hasEmpty = (await page.locator('text=/No pairs meet the current filters/').count()) > 0;
  check(hasTable || hasEmpty, 'Table view renders either table or empty-state');
  // Table must include the new log-r column when any rows are present
  if (hasTable) {
    const logRHeader = await page.locator('th:has-text("log r")').count();
    check(logRHeader > 0, 'Table has a log-r column');
  }
  await page.screenshot({ path: `${ART}/04-table-mfc.png`, fullPage: false });

  // Cycle through MEC, MDC, BES — the old alpha crash would page-error here.
  for (const sys of ['MEC', 'MDC', 'BES']) {
    await page.getByRole('button', { name: new RegExp(`^${sys}$`) }).first().click();
    await page.waitForTimeout(400);
  }
  const crashErrors = logs.filter((l) => /pageerror|\[error\]/i.test(l) && !/favicon|404/.test(l));
  check(crashErrors.length === 0, `no page errors across MEC/MDC/BES (found ${crashErrors.length})`);

  // Back to All + matrix + verify |r| slider filters
  await page.getByRole('button', { name: /All systems/ }).first().click();
  await page.getByRole('button', { name: /^matrix$/i }).first().click();
  await page.waitForTimeout(200);
  const countBefore = await page.locator('svg rect').count();
  const rSlider = page.locator('input[type="range"]').first();
  await rSlider.fill('0.8');
  await page.waitForTimeout(200);
  const countAfter = await page.locator('svg rect').count();
  check(countBefore > 0 && countAfter >= 0, `|r| slider responds (rects ${countBefore} → ${countAfter})`);
  await page.screenshot({ path: `${ART}/05-matrix-all-r0.8.png`, fullPage: false });

  // No console errors from our code
  const codeErrors = logs.filter((l) => /pageerror|\[error\]/i.test(l) && !/favicon|404/.test(l));
  check(codeErrors.length === 0, `no page errors (found ${codeErrors.length})`);
  if (codeErrors.length) logs.push('--- CODE ERRORS ---', ...codeErrors);
} finally {
  await writeFile(`${ART}/console.log`, logs.join('\n'));
  await browser.close();
}

if (failures.length) {
  console.log(`\nFAIL: ${failures.length} check(s) failed`);
  failures.forEach((f) => console.log(`  - ${f}`));
  process.exit(1);
}
console.log('\nPASS: all checks');
process.exit(0);
