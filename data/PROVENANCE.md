# Data Provenance and Versioning

This document describes the origin, scope, and limitations of the data in this repository, and how to access the full MESSAI dataset.

---

## What Is in This Repository

| Dataset | File(s) | Records | Description |
|---------|---------|---------|-------------|
| Parameter ontology | `parameters/index.json` | 667 definitions | Names, units, types, ranges, defaults for MES parameters |
| Parameter documentation | `parameters/**/*.md` | 1,072 files | Detailed per-parameter documentation (measurement methods, equations, protocols) |
| CSV exports | `data/*.csv` | 5 files | Machine-readable tabular exports of the above (see [README.md](README.md)) |
| Extraction statistics | `data/extraction-stats.json` | 1 file | Pipeline summary: paper counts, extraction volumes, system types |
| Correlation analysis | `data/correlation-cache.json` | 14 correlations | Pearson correlations between parameters and performance metrics |
| Reproducibility scoring | `data/reproducibility-summary.json` | 1 file | 289-paper scoring results with 26-criterion rubric |
| Reporting standard | `standards/five-parameter-checklist.md` | 1 file | Proposed 5-parameter minimum reporting checklist |
| Validation schema | `schemas/parameter.schema.json` | 1 file | JSON Schema (draft-07) for parameter definitions |
| Analysis scripts | `scripts/*.ts` | 6 files | TypeScript scripts for data generation and analysis |

**Total data size:** ~350 KB of structured data (JSON + CSV), plus ~11 MB of markdown documentation.

---

## Raw Data Included

As of 2026-04-12, the following datasets have been exported from the MESSAI production database:

| Dataset | File | Records | Size | Notes |
|---------|------|---------|------|-------|
| Extracted parameter data | `extracted-parameter-data.csv` | 25,566 | 3.9 MB | Filtered: confidence > 0, numeric value present |
| Paper-parameter mappings | `paper-parameter-values.csv` | 13,321 | 2.7 MB | Ontology-mapped, numeric values only |
| Paper metadata | `paper-metadata.csv` | 23,332 | 4.4 MB | Full corpus including tangentially related papers |
| Parameter definitions | `parameter-definitions-full.csv` | 687 | 82 KB | All definitions with usage counts |

The database contains 323,606 raw extraction rows. 90.4% were excluded from the published CSV because they have zero confidence (extraction failures). See [SCIENTIFIC_INTEGRITY.md](SCIENTIFIC_INTEGRITY.md) for details.

## What Still Requires MESSAI Database Access

| Dataset | Description |
|---------|-------------|
| AI-generated summaries | LLM-generated paper summaries and key findings (contains derived text) |
| Full-text extractions | Structured text from OCR-processed PDFs (copyright-restricted) |
| Paper abstracts | Raw abstract text (publisher copyright) |

**Why these are not included:** These datasets contain copyrighted text from published papers. Distribution requires data sharing agreements with publishers.

---

## Requesting Full Data Access

### For Academic Researchers

Contact research@messai.io with:
- Institutional affiliation
- Research purpose and intended use
- Whether you need raw text (abstracts/full-text) or only structured parameter values

Structured parameter values (without copyrighted text) can typically be shared under a CC BY 4.0 data sharing agreement.

### For Platform Access

The full dataset is queryable through the [MESSAI platform](https://messai.io), which provides:
- Parameter search and filtering across 21,895 papers
- Cross-study comparison tools
- API access for programmatic queries

---

## Data Versioning

| Component | Version | Date | Notes |
|-----------|---------|------|-------|
| Parameter ontology (`index.json`) | v3.2.0 | 2026-03-15 | 667 parameters, 11 categories, 85 subcategories |
| Database schema | 687 definitions | 2026-03-15 | 20 additional parameters in DB only |
| Extraction statistics | Snapshot | 2026-03-15 | From production database |
| Correlation analysis | Snapshot | 2026-03-09 | 862 papers analyzed |
| Reproducibility scoring | Snapshot | 2026-03-15 | 289 papers scored |
| CSV exports | Generated | 2026-04-06 | Deterministically derived from JSON sources |

### Version History

- **v0.2.0** (2026-03-15) — Initial public release with 667 parameter definitions, 3 analysis outputs, Parameter Explorer site, CSV exports, and research documentation.

---

## Updating This Data

### JSON source files

Updated by the MESSAI team from the production database. The update process:
1. Export parameter definitions from `ParameterDefinition` table
2. Run analysis scripts against the full corpus
3. Commit updated JSON files to this repository

### CSV exports

Regenerated from JSON sources — they should never be edited manually:

```bash
npx tsx scripts/generate-csv-exports.ts
```

### Database re-export

To refresh the data files from the database:

```bash
DATABASE_URL="..." npx tsx scripts/export-all-data.ts
```

The raw CSV exports are generated via `psql \COPY` with quality filters applied at the SQL level. See `scripts/README.md` for the exact queries used.

---

## Reproducibility

To verify that CSV exports match the JSON sources:

```bash
# Regenerate and compare
npx tsx scripts/generate-csv-exports.ts
git diff data/*.csv  # Should show no changes
```

The generation script is deterministic: given the same JSON inputs, it always produces identical CSV outputs.

---

## License

All data in this repository is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

You are free to share and adapt this data for any purpose, provided you give appropriate credit:

> MESSAI Community. (2026). MESS-Parameters: Standardized parameter ontology for Microbial Electrochemical Systems research (v0.2.0). https://github.com/Messai-io/MESS-Parameters
