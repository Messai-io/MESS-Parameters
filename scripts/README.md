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

## Notes

- These scripts are designed for batch processing of the full MESSAI corpus (21,895+ papers)
- They use Prisma ORM for database access; the schema is in the main MESSAI repository
- Run times vary: reproducibility scoring takes ~5 min, correlation analysis ~2 min, economic extraction ~3 min
- All scripts are idempotent and safe to re-run
