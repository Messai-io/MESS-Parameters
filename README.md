# MESS-Parameters

**Open research dataset and parameter ontology for Microbial Electrochemical Systems**

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
![Parameters](https://img.shields.io/badge/parameters-687-blue)
![Papers](https://img.shields.io/badge/papers-23%2C332-green)
![Extracted Values](https://img.shields.io/badge/extracted%20values-487K-orange)
[![Explorer](https://img.shields.io/badge/Explorer-Live-purple)](https://messai-io.github.io/MESS-Parameters/)

## What This Repository Contains

This is a **research dataset** — not just a schema. It includes:

| Dataset | Rows | File | Description |
|---------|------|------|-------------|
| Extracted parameter data | 487K | `data/extracted-parameter-data.csv` | Every parameter value extracted from MES publications |
| Paper metadata | 23.4K | `data/paper-metadata.csv` | Full corpus with DOIs, metrics, quality scores |
| Paper-parameter mappings | 19.8K | `data/paper-parameter-values.csv` | Validated parameter-paper links with extraction method |
| Parameter definitions | 687 | `data/parameter-definitions-full.csv` | Complete ontology with usage counts |
| Ontology index | 667 | `parameters/index.json` | Structured JSON with ranges, units, types, defaults |

Plus: CSV exports, correlation analysis, reproducibility scoring, a five-parameter reporting checklist, and an interactive [Parameter Explorer](https://messai-io.github.io/MESS-Parameters/).

This repository supports: *"From PDF to Protocol: How AI-Driven Meta-Analysis of 21,895 Publications Reveals Hidden Patterns in Microbial Electrochemical Systems Research"* (EU-ISMET 2026).

## Quick Start for Researchers

### Python

```python
import pandas as pd

# Load the raw extracted data (487K parameter values from MES papers)
data = pd.read_csv('data/extracted-parameter-data.csv')
print(f"{len(data)} extracted values across {data['parameter_category'].nunique()} categories")

# Filter to high-confidence electrochemical extractions
electrochem = data[
    (data['parameter_category'] == 'ELECTROCHEMICAL') &
    (data['confidence'] >= 0.8) &
    (data['numeric_value'].notna())
]
print(electrochem.groupby('parameter_name')['numeric_value'].describe())

# Load paper metadata
papers = pd.read_csv('data/paper-metadata.csv')
mfc_papers = papers[papers['system_type'] == 'MFC']
print(f"{len(mfc_papers)} MFC papers, median power output: {mfc_papers['power_output'].median()}")

# Cross-reference: which papers report power density?
mappings = pd.read_csv('data/paper-parameter-values.csv')
power_papers = mappings[mappings['parameter_name'] == 'Power Density']
print(f"{len(power_papers)} papers report power density values")
```

### R

```r
data <- read.csv("data/extracted-parameter-data.csv")
papers <- read.csv("data/paper-metadata.csv")

# Summary by parameter category
table(data$parameter_category)

# Power output distribution by system type
boxplot(power_output ~ system_type, data = papers, main = "Power Output by MES Type")
```

### JavaScript / npm

```bash
npm install @messai-io/mess-parameters
```

```javascript
import parameters from '@messai-io/mess-parameters';

const allParams = parameters.categories.flatMap(c =>
  c.subcategories.flatMap(s => s.parameters)
);
console.log(`${allParams.length} parameters loaded`);
```

### Browse Online

Visit the [Parameter Explorer](https://messai-io.github.io/MESS-Parameters/) to search, filter, and explore all 687 parameters interactively.

## Repository Structure

```
MESS-Parameters/
  data/                            # Research data and analysis outputs
    extracted-parameter-data.csv   # 487K extracted values (45 MB)
    paper-metadata.csv             # 23.4K papers with DOIs and metrics (4.4 MB)
    paper-parameter-values.csv     # 19.8K validated parameter-paper links (3.9 MB)
    parameter-definitions-full.csv # All 687 parameter definitions with usage counts
    parameters-full.csv            # 667 ontology definitions as flat CSV
    category-hierarchy.csv         # Category/subcategory tree with counts
    correlations.csv               # 14 correlations with 95% CIs
    reproducibility-criteria.csv   # 19 scoring criteria with reporting rates
    corpus-summary.csv             # Pipeline statistics
    extraction-stats.json          # Corpus statistics snapshot
    correlation-cache.json         # Full correlation analysis
    reproducibility-summary.json   # Reproducibility scoring results
    README.md                      # Data dictionary (every file, every field)
    METHODOLOGY.md                 # Pipeline description and statistical methods
    SCIENTIFIC_INTEGRITY.md        # Known limitations and caveats
    PROVENANCE.md                  # Data versioning and access information
    excluded-parameters.md         # Documents the 687 vs 667 parameter gap

  parameters/                      # Parameter ontology
    index.json                     # Master index (667 definitions as structured JSON)
    biological/                    # Biofilm, growth kinetics, species (176 files)
    electrical/                    # Voltage, current, power, impedance (89 files)
    materials/                     # Electrodes, membranes, catalysts (87 files)
    chemical/                      # pH, dissolved oxygen, ionic strength (72 files)
    operational/                   # Flow rates, retention times (56 files)
    + 30 more category directories

  standards/                       # Proposed reporting standards
    five-parameter-checklist.md    # Minimum reporting standard (63-paper validation)

  schemas/                         # Validation
    parameter.schema.json          # JSON Schema (draft-07) for parameter definitions

  scripts/                         # Analysis and export code
    generate-csv-exports.ts        # Regenerate CSVs from JSON (no DB required)
    enrich-parameters.ts           # Add references/dependencies to index.json
    export-parameter-values.ts     # Export from DB (requires DATABASE_URL)
    export-paper-metadata.ts       # Export from DB (requires DATABASE_URL)
    export-all-data.ts             # Master export script
    analyze-reproducibility.ts     # 26-criteria reproducibility scoring
    batch-correlation-analysis.ts  # Pearson correlation with Bonferroni correction
    batch-economic-extraction.ts   # Economic metric extraction from abstracts

  site/                            # Parameter Explorer (React + Vite + Tailwind)
```

## Dataset Details

### Extracted Parameter Data (487K rows)

Every parameter value extracted from MES publications by the MESSAI pipeline. Each row contains the paper DOI, parameter name and category, extracted value (raw text and parsed numeric), unit, confidence score, validation status, and source context from the paper.

**Extraction methods:** NLP (natural language processing), REGEX (pattern matching), HYBRID (combined), TABLE (structured table extraction), MANUAL (human-verified).

### Paper Metadata (23.4K rows)

Metadata for every paper in the MESSAI corpus: DOI, title, year, journal, system type (MFC/MEC/MDC/MES), reported power output and efficiency, electrode materials, reproducibility score, quality score, citation count, and the number of extracted parameters per paper.

### Paper-Parameter Mappings (19.8K rows)

Validated links between papers and specific parameters from the 687-definition ontology. Includes the extracted value, confidence score, extraction method, and which section of the paper the value came from.

### Parameter Definitions (687)

The full ontology: parameter name, category, subcategory, unit, data type, description, min/max values, and usage count (how many papers reference each parameter). The 14 most important parameters also have literature references, inter-parameter dependencies, and system-type compatibility metadata.

## Corpus Statistics

| Metric | Value |
|---|---|
| Papers in corpus | 23,332 |
| PDFs processed | 14,743 |
| Full-text extractions | 3,535 |
| Extracted parameter values | 487,064 |
| Paper-parameter mappings | 19,820 |
| Parameter definitions | 687 |
| Categories | 13 |
| Subcategories | 119 |

**System type distribution:** MFC (12,450), MEC (3,210), MDC (980), general MES (5,255), other (1,437).

## Key Findings

1. **Average reproducibility completeness is only 23.1%** across 289 scored papers — most studies underreport experimental conditions
2. **Electrode spacing** is reported in only 37% of publications despite being critical for cross-study comparison
3. Papers reporting all 5 checklist parameters show **>40% IQR reduction** in power density variability (p < 0.05, n = 63)
4. **Reproducibility score correlates with Coulombic Efficiency** (r = 0.567, 95% CI [0.29, 0.76], n = 36)
5. **Power density coefficient of variation = 1,285%** across the corpus — extreme inconsistency in reporting

See [data/SCIENTIFIC_INTEGRITY.md](data/SCIENTIFIC_INTEGRITY.md) for statistical caveats on these findings.

## Five-Parameter Reporting Checklist

We propose that all MES publications report, at minimum:

| # | Parameter | Unit | Current Reporting Rate |
|---|---|---|---|
| 1 | Electrode spacing | cm | 37% |
| 2 | Electrode surface area | cm^2 | 62% |
| 3 | External resistance | ohm | 41% |
| 4 | Measurement method | text | 35% |
| 5 | Unit normalization basis | text | 52% |

Validated retrospectively on 63 papers (40% IQR reduction, Mann-Whitney U, p < 0.05). See [standards/five-parameter-checklist.md](standards/five-parameter-checklist.md) for details.

## Scripts

### No database required

```bash
# Regenerate CSV exports from JSON source files
npm run export:csv

# Or run directly
npx tsx scripts/generate-csv-exports.ts
```

### With database access

```bash
# Export all data (CSVs + database exports)
DATABASE_URL="postgresql://..." npm run export:all

# Individual exports
DATABASE_URL="postgresql://..." npx tsx scripts/export-parameter-values.ts
DATABASE_URL="postgresql://..." npx tsx scripts/export-paper-metadata.ts
```

See [scripts/README.md](scripts/README.md) for full documentation.

## Parameter Explorer

The [Parameter Explorer](https://messai-io.github.io/MESS-Parameters/) is a static React application deployed to GitHub Pages with search, filtering, and category navigation across all 687 parameters.

```bash
cd site && npm install && npm run dev   # localhost:5173
```

Auto-deploys on push to `main` via `.github/workflows/deploy-site.yml`.

## Scientific Integrity

This dataset has known limitations documented transparently:

- **P-value approximation:** The correlation p-values use a custom formula, not standard t-distribution. See [SCIENTIFIC_INTEGRITY.md](data/SCIENTIFIC_INTEGRITY.md).
- **Confidence intervals:** Added to correlations CSV via Fisher z-transform. Several correlations have CIs spanning zero.
- **Sample sizes:** Some correlations computed on N < 30 — flagged in the CSV.
- **Reporting rate averaging:** Category-level averages mask per-criterion variation (electrode material 89% vs spacing 37%).
- **Retrospective validation only:** The five-parameter checklist needs prospective study.

Full details: [data/SCIENTIFIC_INTEGRITY.md](data/SCIENTIFIC_INTEGRITY.md) | [data/METHODOLOGY.md](data/METHODOLOGY.md)

## How to Cite

```bibtex
@misc{mess_parameters_2026,
  author       = {{MESSAI Community}},
  title        = {{MESS-Parameters: Open Research Dataset and Parameter
                   Ontology for Microbial Electrochemical Systems}},
  year         = {2026},
  publisher    = {GitHub},
  url          = {https://github.com/Messai-io/MESS-Parameters},
  note         = {687 parameters, 23,332 papers, 487K extracted values}
}
```

## Contributing

We welcome contributions from the MES research community. See [CONTRIBUTING.md](CONTRIBUTING.md).

**To propose a new parameter:** Fork, add to `parameters/`, update `index.json`, validate with `npm run validate`, submit PR.

**To report issues:** [github.com/Messai-io/MESS-Parameters/issues](https://github.com/Messai-io/MESS-Parameters/issues)

## License

[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — free to share and adapt with attribution.

## Links

- [MESSAI Platform](https://messai.io) — interactive exploration of the full dataset
- [Parameter Explorer](https://messai-io.github.io/MESS-Parameters/) — browse all 687 parameters online
- [Data Dictionary](data/README.md) — field-by-field documentation for every data file
- [Scientific Integrity Notes](data/SCIENTIFIC_INTEGRITY.md) — known limitations and caveats
- [Five-Parameter Checklist](standards/five-parameter-checklist.md) — proposed minimum reporting standard
