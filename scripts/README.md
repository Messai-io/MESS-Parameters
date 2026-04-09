# Analysis Scripts

These scripts were used to generate the analysis results in the `data/` directory. They require a PostgreSQL database with the MESSAI schema (Prisma) and are provided for transparency and reproducibility.

## Prerequisites

- Node.js 18+
- TypeScript (`tsx` or `ts-node`)
- PostgreSQL database with MESSAI schema
- Environment variable: `DATABASE_URL`

## Scripts

### analyze-reproducibility.ts

Scores papers on a 26-criteria reproducibility rubric.

- Reads paper metadata, abstracts, and extracted parameters from the database
- Computes a weighted completeness score (0-100%) for each paper
- Writes `reproducibilityScore` back to the `Paper` table

```bash
DATABASE_URL="postgresql://..." npx tsx scripts/analyze-reproducibility.ts
```

**Output:** Updates `Paper.reproducibilityScore` in the database. Summary statistics are exported to `data/reproducibility-summary.json`.

### batch-correlation-analysis.ts

Computes Pearson correlations between extracted parameters and performance metrics.

- Pairs parameters (e.g., reactor volume, chamber count) with metrics (power output, Coulombic efficiency)
- Applies Bonferroni correction for multiple comparisons
- Writes results as JSON

```bash
DATABASE_URL="postgresql://..." npx tsx scripts/batch-correlation-analysis.ts
```

**Output:** `data/correlation-cache.json` with all correlations, p-values, and strength classifications.

### batch-economic-extraction.ts

Extracts economic metrics from paper abstracts using regex pattern matching.

- Searches for cost figures, ROI mentions, payback periods, and capital costs
- Tags papers with economic relevance flags
- Updates `PaperMetric` rows in the database

```bash
DATABASE_URL="postgresql://..." npx tsx scripts/batch-economic-extraction.ts
```

**Output:** Updates `PaperMetric` table. Summary statistics contribute to `data/extraction-stats.json`.

### generate-csv-exports.ts (No database required)

Generates CSV data exports from existing JSON files in the repository. This is the primary way to produce researcher-friendly tabular data from the ontology.

```bash
npx tsx scripts/generate-csv-exports.ts
```

**Inputs:** `parameters/index.json`, `data/extraction-stats.json`, `data/correlation-cache.json`, `data/reproducibility-summary.json`

**Outputs:**
- `data/parameters-full.csv` — 667 parameter definitions (id, name, unit, type, range, default, tags)
- `data/category-hierarchy.csv` — 85 subcategories with parameter counts
- `data/correlations.csv` — 14 parameter-metric Pearson correlations
- `data/reproducibility-criteria.csv` — 19 named scoring criteria with reporting rates
- `data/corpus-summary.csv` — Pipeline statistics in key-value format

### export-parameter-values.ts (Requires database)

Exports extracted parameter values from individual papers to CSV.

```bash
DATABASE_URL="postgresql://..." npx tsx scripts/export-parameter-values.ts
```

**Output:** `data/parameter-values.csv` — One row per extracted value with paper DOI, parameter ID, value, unit, confidence score, extraction method, and source section. Expected: ~62,000 rows.

### export-paper-metadata.ts (Requires database)

Exports paper metadata with parameter completeness metrics.

```bash
DATABASE_URL="postgresql://..." npx tsx scripts/export-paper-metadata.ts
```

**Output:** `data/paper-metadata.csv` — One row per paper with DOI, title, authors, year, system type, parameter count, reproducibility score, and data availability flags. Expected: ~21,895 rows.

### export-all-data.ts (Master script)

Runs all export scripts in sequence. If `DATABASE_URL` is not set, only the CSV generation (no-database) step runs; database exports are skipped with a warning.

```bash
# CSV exports only (no database needed)
npx tsx scripts/export-all-data.ts

# Full export including database
DATABASE_URL="postgresql://..." npx tsx scripts/export-all-data.ts
```

## Notes

- The database-dependent scripts (analyze-*, batch-*, export-parameter-values, export-paper-metadata) require a PostgreSQL database with the MESSAI Prisma schema
- `generate-csv-exports.ts` and `export-all-data.ts` (without DATABASE_URL) work entirely from repo data — no database needed
- All scripts are idempotent and safe to re-run
- Run times: reproducibility scoring ~5 min, correlation analysis ~2 min, economic extraction ~3 min, CSV generation <1 sec
