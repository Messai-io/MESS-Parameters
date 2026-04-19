# MESS-Parameters

**Open research dataset and parameter ontology for Microbial Electrochemical Systems**

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
![Parameters](https://img.shields.io/badge/parameters-687-blue)
![Papers](https://img.shields.io/badge/papers-23%2C332-green)
![Parameter Values](https://img.shields.io/badge/parameter%20values-18%2C113-orange)
[![Explorer](https://img.shields.io/badge/Explorer-Live-purple)](https://messai-io.github.io/MESS-Parameters/)

## What This Repository Contains

| Dataset | Records | File | Description |
|---------|---------|------|-------------|
| Paper-parameter values | 18,113 | `data/paper-parameter-values.csv` | Validated values mapped to the 687-parameter ontology (numeric + text) |
| Extracted parameter data | 25,566 | `data/extracted-parameter-data.csv` | All quality-filtered extractions with labeling flags |
| Paper metadata | 23,332 | `data/paper-metadata.csv` | Full corpus with `verified_mes` flag (8,904 confirmed) |
| Parameter definitions | 687 | `data/parameter-definitions-full.csv` | Complete ontology from MESSAI database with usage counts |
| Ontology index | 667 | `parameters/index.json` | Structured JSON with ranges, units, types, defaults |

Plus: correlation analysis, reproducibility scoring, a five-parameter reporting checklist, and an interactive [Parameter Explorer](https://messai-io.github.io/MESS-Parameters/).

This repository supports: *"From PDF to Protocol: How AI-Driven Meta-Analysis of 21,895 Publications Reveals Hidden Patterns in Microbial Electrochemical Systems Research"* (EU-ISMET 2026).

### Data Quality Notice

The extraction pipeline is imperfect. Before using this data, read [data/SCIENTIFIC_INTEGRITY.md](data/SCIENTIFIC_INTEGRITY.md). Key issues:

- **Paper-parameter-values** (18,113 rows) is the primary dataset — each value maps to an ontology parameter. `has_numeric_value` flag distinguishes numeric measurements (73%) from text values (27% — material names, methods, etc.)
- **Extracted-parameter-data** (25,566 rows) is the full quality-filtered extraction output. Each row is labeled: `ontology_matched` (2.1% match a defined parameter name), `likely_garbage` (57.9% are parsing artifacts), and the rest (40%) are legitimate values with free-text parameter names not in the ontology (e.g., "COD", "HRT", "diameter")
- **Paper-metadata** includes 23,332 papers with a `verified_mes` flag (8,904 = 38% confirmed MES). The rest were ingested by a permissive filter.
- 234 of 687 parameter definitions have usage; 453 (66%) are aspirational.

## Quick Start for Researchers

### Python

```python
import pandas as pd

# Paper-parameter values: the primary dataset (ontology-mapped, 13K values)
values = pd.read_csv('data/paper-parameter-values.csv')
print(f"{len(values)} parameter-paper values")
print(values['parameter_category'].value_counts())

# Filter to verified MES papers only
mes_values = values[values['verified_mes_paper'] == True]
print(f"{len(mes_values)} values from verified MES papers")

# Filter to a specific parameter
power = values[values['parameter_name'] == 'Maximum Power Density']
print(f"{len(power)} maximum power density measurements")

# Paper metadata — use verified_mes flag to filter
papers = pd.read_csv('data/paper-metadata.csv')
mes_papers = papers[papers['verified_mes'] == True]
print(f"{len(mes_papers)} verified MES papers out of {len(papers)} total")
print(mes_papers['system_type'].value_counts())
```

### R

```r
mappings <- read.csv("data/paper-parameter-values.csv")
papers <- read.csv("data/paper-metadata.csv")
table(papers$system_type)
table(mappings$parameter_category)
```

### Browse Online

Visit the [Parameter Explorer](https://messai-io.github.io/MESS-Parameters/) to search, filter, and explore all 687 parameters interactively.

### npm

```bash
npm install @messai-io/mess-parameters
```

```javascript
import parameters from '@messai-io/mess-parameters';
const allParams = parameters.categories.flatMap(c =>
  c.subcategories.flatMap(s => s.parameters)
);
```

## Repository Structure

```
MESS-Parameters/
  data/                            # Research data and analysis outputs
    paper-parameter-values.csv     # 13.3K ontology-mapped values (cleanest)
    extracted-parameter-data.csv   # 25.6K raw extracted values (noisier)
    paper-metadata.csv             # 23.3K papers with DOIs and metrics
    parameter-definitions-full.csv # All 687 parameter definitions
    parameters-full.csv            # 667 ontology definitions as flat CSV
    correlations.csv               # 14 correlations with 95% CIs
    category-hierarchy.csv         # Category/subcategory tree
    reproducibility-criteria.csv   # 19 scoring criteria
    corpus-summary.csv             # Pipeline statistics
    README.md                      # Data dictionary
    METHODOLOGY.md                 # Pipeline and statistical methods
    SCIENTIFIC_INTEGRITY.md        # Known limitations and caveats
    PROVENANCE.md                  # Versioning and data access

  parameters/                      # Parameter ontology (667 definitions + docs)
    index.json                     # Master index as structured JSON
    biological/                    # Biofilm, growth kinetics, species
    electrical/                    # Voltage, current, power, impedance
    materials/                     # Electrodes, membranes, catalysts
    + 30 more category directories

  standards/
    five-parameter-checklist.md    # Proposed minimum reporting standard

  schemas/
    parameter.schema.json          # JSON Schema for parameter validation

  scripts/                         # Analysis and export code
    generate-csv-exports.ts        # Regenerate CSVs from JSON (no DB needed)
    enrich-parameters.ts           # Add references/dependencies
    export-*.ts                    # Database export scripts

  site/                            # Parameter Explorer (React + Vite) — see docs/EXPLORER.md
```

## Corpus Statistics

| Metric | Value |
|---|---|
| Papers in corpus | 23,332 |
| Verified MES papers | 8,904 |
| Paper-parameter values (ontology-mapped) | 18,113 |
| Raw extractions (quality-filtered, labeled) | 25,566 |
| Parameter definitions | 687 |
| Categories | 13 |
| Subcategories | 119 |

**System type distribution:**

| Type | Papers |
|---|---|
| MES (general) | 11,384 |
| MFC (Microbial Fuel Cell) | 9,330 |
| MEC (Microbial Electrolysis Cell) | 1,375 |
| BES (Bioelectrochemical System) | 1,122 |
| MDC (Microbial Desalination Cell) | 109 |
| Other (MODELING, EFC, SMFC) | 12 |

## Key Findings

1. **Average reproducibility completeness is only 23.1%** across 289 scored papers
2. **Electrode spacing** is reported in only 37% of publications
3. Papers reporting all 5 checklist parameters show **>40% IQR reduction** in power density variability (p < 0.05, n = 63)
4. **Reproducibility score correlates with Coulombic Efficiency** (r = 0.567, 95% CI [0.29, 0.76], n = 36)

See [data/SCIENTIFIC_INTEGRITY.md](data/SCIENTIFIC_INTEGRITY.md) for caveats.

## Five-Parameter Reporting Checklist

| # | Parameter | Unit | Reporting Rate |
|---|---|---|---|
| 1 | Electrode spacing | cm | 37% |
| 2 | Electrode surface area | cm^2 | 62% |
| 3 | External resistance | ohm | 41% |
| 4 | Measurement method | text | 35% |
| 5 | Unit normalization basis | text | 48% |

Validated retrospectively on 63 papers. See [standards/five-parameter-checklist.md](standards/five-parameter-checklist.md).

## Scripts

```bash
npm run export:csv                    # Regenerate CSVs from JSON (no DB)
DATABASE_URL="..." npm run export:all  # Full export including database
```

See [scripts/README.md](scripts/README.md).

## Scientific Integrity

Read [data/SCIENTIFIC_INTEGRITY.md](data/SCIENTIFIC_INTEGRITY.md) before using this data. Key issues:

- P-values use a custom approximation, not standard t-distribution
- Confidence intervals on correlations via Fisher z-transform; several span zero
- Reporting rates are category-level averages masking per-criterion variation
- 90% of raw database extractions are noise (filtered out of published CSVs)
- 62% of papers in the corpus may not be directly about MES (use `verified_mes` flag)
- 66% of parameter definitions have zero usage in the corpus

## How to Cite

```bibtex
@misc{mess_parameters_2026,
  author       = {{MESSAI Community}},
  title        = {{MESS-Parameters: Open Research Dataset and Parameter
                   Ontology for Microbial Electrochemical Systems}},
  year         = {2026},
  publisher    = {GitHub},
  url          = {https://github.com/Messai-io/MESS-Parameters},
  version      = {0.2.0},
  note         = {687 parameters, 23,332 papers, 18,113 parameter values}
}
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Fork, add to `parameters/`, update `index.json`, submit PR.

## License

[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — free to share and adapt with attribution.

## Links

- [MESSAI Platform](https://messai.io)
- [Parameter Explorer](https://messai-io.github.io/MESS-Parameters/)
- [Data Dictionary](data/README.md)
- [Scientific Integrity Notes](data/SCIENTIFIC_INTEGRITY.md)
- [Five-Parameter Checklist](standards/five-parameter-checklist.md)
