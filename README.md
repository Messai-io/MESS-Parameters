# MESS-Parameters

**Open research dataset and parameter ontology for Microbial Electrochemical Systems**

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
![Parameters](https://img.shields.io/badge/parameters-687-blue)
![Papers](https://img.shields.io/badge/papers-23%2C332-green)
![Extracted Values](https://img.shields.io/badge/extracted%20values-25%2C566-orange)
[![Explorer](https://img.shields.io/badge/Explorer-Live-purple)](https://messai-io.github.io/MESS-Parameters/)

## What This Repository Contains

| Dataset | Records | File | Description |
|---------|---------|------|-------------|
| Extracted parameter data | 25,566 | `data/extracted-parameter-data.csv` | Numeric values extracted from MES papers (confidence > 0 only) |
| Paper-parameter mappings | 13,321 | `data/paper-parameter-values.csv` | Validated links between papers and ontology parameters |
| Paper metadata | 23,332 | `data/paper-metadata.csv` | Full corpus: DOIs, titles, system types, scores |
| Parameter definitions | 687 | `data/parameter-definitions-full.csv` | Complete ontology from MESSAI database with usage counts |
| Ontology index | 667 | `parameters/index.json` | Structured JSON with ranges, units, types, defaults |

Plus: correlation analysis, reproducibility scoring, a five-parameter reporting checklist, and an interactive [Parameter Explorer](https://messai-io.github.io/MESS-Parameters/).

This repository supports: *"From PDF to Protocol: How AI-Driven Meta-Analysis of 21,895 Publications Reveals Hidden Patterns in Microbial Electrochemical Systems Research"* (EU-ISMET 2026).

### Data Quality Notice

The extraction pipeline is imperfect. Before using this data, read [data/SCIENTIFIC_INTEGRITY.md](data/SCIENTIFIC_INTEGRITY.md). Key issues:

- **Paper-parameter-values** (13,321 rows) is the cleanest dataset — each value is mapped to a defined parameter in the ontology
- **Extracted-parameter-data** (25,566 rows) is noisier raw extraction output filtered to confidence > 0 with numeric values only. Some parameter names are extraction artifacts
- **Paper-metadata** includes the full 23,332-paper corpus. The ingestion pipeline has a permissive filter — some papers may be tangentially related to MES
- Only ~3% of extracted values have traceable paper DOIs. Most extractions come from PDFs without DOI metadata
- The extraction categories (PHYSICAL, CHEMICAL, BIOLOGICAL, etc.) differ from the ontology categories (ELECTROCHEMICAL, MATERIALS, etc.) — these are two different classification systems that have not been fully reconciled

## Quick Start for Researchers

### Python

```python
import pandas as pd

# Paper-parameter values: the cleanest dataset (ontology-mapped)
mappings = pd.read_csv('data/paper-parameter-values.csv')
print(f"{len(mappings)} parameter-paper mappings")
print(mappings.groupby('parameter_category')['numeric_value'].describe())

# Filter to a specific parameter
power = mappings[mappings['parameter_name'] == 'Power Density']
print(f"{len(power)} power density measurements")

# Paper metadata
papers = pd.read_csv('data/paper-metadata.csv')
print(papers['system_type'].value_counts())

# Raw extracted data (noisier, larger)
data = pd.read_csv('data/extracted-parameter-data.csv')
print(f"{len(data)} extracted values across {data['parameter_category'].nunique()} categories")
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

  site/                            # Parameter Explorer (React + Vite)
```

## Corpus Statistics

| Metric | Value |
|---|---|
| Papers in corpus | 23,332 |
| Extracted parameter values (confidence > 0) | 25,566 |
| Ontology-mapped paper-parameter pairs | 13,321 |
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
- Confidence intervals added to correlations via Fisher z-transform
- Reporting rates are category-level averages masking per-criterion variation
- The extraction pipeline produces noisy output requiring filtering
- Only ~3% of extracted values have traceable DOIs

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
  note         = {687 parameters, 23,332 papers, 25,566 extracted values}
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
