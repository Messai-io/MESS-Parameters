# MESS-Parameters

**Standardized parameter ontology for Microbial Electrochemical Systems research**

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
![Parameters](https://img.shields.io/badge/parameters-687-blue)
![Papers Analyzed](https://img.shields.io/badge/papers%20analyzed-21%2C895-green)
[![Explorer](https://img.shields.io/badge/Explorer-Live-orange)](https://messai-io.github.io/MESS-Parameters/)

## Overview

MESS-Parameters is the open-source parameter standard behind the [MESSAI platform](https://messai.io). It provides a machine-readable ontology of **687 parameter definitions** spanning **13 categories** and **119 subcategories**, extracted from analysis of **21,895 MES publications**.

The dataset includes:

- A validated **JSON parameter index** with ranges, units, types, and validation rules
- **1,072 detailed markdown files** documenting individual parameters
- **Correlation analysis**, **reproducibility scoring**, and **extraction statistics** from the MESSAI corpus
- A **five-parameter minimum reporting checklist** validated against 63 papers
- An interactive **Parameter Explorer** web application
- **JSON Schema** for parameter validation
- The **analysis scripts** used to generate all data outputs

This repository supports the work described in our EU-ISMET 2026 abstract: *"From PDF to Protocol: How AI-Driven Meta-Analysis of 21,895 Publications Reveals Hidden Patterns in Microbial Electrochemical Systems Research"*.

## Quick Start

### Browse Online

Visit the [Parameter Explorer](https://messai-io.github.io/MESS-Parameters/) to search, filter, and explore all 687 parameters interactively.

### Use as a Package

```bash
npm install @messai-io/mess-parameters
```

```javascript
import parameters from '@messai-io/mess-parameters';

// Access all categories
parameters.categories.forEach(cat => {
  console.log(`${cat.name}: ${cat.subcategories.length} subcategories`);
});

// Find a specific parameter
const allParams = parameters.categories.flatMap(c =>
  c.subcategories.flatMap(s => s.parameters)
);
const powerDensity = allParams.find(p => p.id === 'power-density');
console.log(powerDensity.unit);  // "mW/m2"
console.log(powerDensity.range); // { min: 0, max: 10000 }
```

### Validate Locally

```bash
git clone https://github.com/Messai-io/MESS-Parameters.git
cd MESS-Parameters
npm install
npm run validate
```

## Repository Structure

```
MESS-Parameters/
  parameters/                  # 687 parameter definitions
    index.json                 # Master index (334 KB) — all parameters as structured JSON
    biological/                # Biofilm, growth kinetics, microbial species (176 files)
    electrical/                # Voltage, current density, impedance (98 files)
    materials/                 # Electrodes, membranes, catalysts (87 files)
    chemical/                  # pH, dissolved oxygen, ionic strength (72 files)
    operational/               # Flow rates, retention times (56 files)
    application-specific/      # Wastewater, biosensors, desalination (54 files)
    physical/                  # Reactor geometry, cell dimensions (43 files)
    performance/               # Energy efficiency, gas production (38 files)
    environmental/             # Temperature, humidity, atmospheric (28 files)
    analytical/                # EIS, CV, LSV, SEM, FTIR techniques (24 files)
    economic/                  # Capital costs, ROI, payback period (22 files)
    monitoring/                # Sensors, sampling, alarms (18 files)
    safety/                    # Emission standards, compliance (12 files)
    ... + 25 additional subcategory directories

  data/                        # Analysis outputs (JSON snapshots from MESSAI DB)
    extraction-stats.json      # Pipeline statistics (21,895 papers, 70,296 extractions)
    correlation-cache.json     # 14 parameter-metric correlations (2 significant)
    reproducibility-summary.json  # 289-paper reproducibility scoring results

  standards/                   # Proposed reporting standards
    five-parameter-checklist.md   # Minimum reporting standard (63-paper validation)

  schemas/                     # Validation
    parameter.schema.json      # JSON Schema (draft-07) for parameter definitions

  scripts/                     # Analysis code (requires MESSAI database)
    analyze-reproducibility.ts    # 26-criteria reproducibility scoring
    batch-correlation-analysis.ts # Pearson correlation with Bonferroni correction
    batch-economic-extraction.ts  # Economic metric extraction from abstracts
    README.md                     # Script documentation and usage

  site/                        # Parameter Explorer (React + Vite + Tailwind)
    src/                       # Application source code
    dist/                      # Built static site (deployed to GitHub Pages)

  .github/workflows/
    deploy-site.yml            # Auto-deploy Explorer on push to main

  CONTRIBUTING.md              # Contribution guidelines
  LICENSE                      # CC BY 4.0
  package.json                 # npm package configuration
```

## Extraction Pipeline Architecture

The MESS-Parameters ontology was built through a five-stage automated extraction pipeline processing the full MESSAI corpus:

```
Stage 1          Stage 2           Stage 3            Stage 4            Stage 5
PDF Collection   Text Extraction   Content Structuring  Parameter         Ontology
                                                        Extraction        Mapping
+-----------+    +-----------+    +-------------+    +-------------+    +-----------+
| Unpaywall |    | Nougat    |    | Section     |    | 6 Domain    |    | 687-def   |
| API       |--->| (Meta)    |--->| parser      |--->| extractors  |--->| matching  |
| 14,743    |    | OCR/ML    |    | Tables      |    | Regex + LLM |    | Validation|
| PDFs      |    | engine    |    | Figures     |    | pipelines   |    | rules     |
+-----------+    +-----------+    +-------------+    +-------------+    +-----------+
```

### Stage 1: PDF Collection
- Source: Unpaywall API for open-access full texts
- Scale: 14,743 PDFs downloaded from 21,895 indexed papers
- Coverage: MFC (12,450), MEC (3,210), MDC (980), general MES (5,255)

### Stage 2: Text Extraction
- Engine: [Nougat](https://github.com/facebookresearch/nougat) (Meta) for scientific PDF OCR
- Handles complex layouts: multi-column, equations, tables, figure captions
- 3,535 papers processed to structured full text

### Stage 3: Content Structuring
- Section-level parsing (Methods, Results, Discussion)
- Table extraction with header-value alignment
- Figure caption parsing for reported values
- Unit normalization and standardization

### Stage 4: Parameter Extraction
Six domain-specific extractors run in parallel:

| Extractor | Domain | Method | Parameters Covered |
|---|---|---|---|
| Electrical | Voltage, current, power, impedance | Regex + unit parsing | 98 parameters |
| Biological | Biofilm, growth, species, substrates | Pattern matching + NER | 176 parameters |
| Materials | Electrodes, membranes, catalysts | Structured table extraction | 87 parameters |
| Chemical | pH, DO, ionic strength, electrolytes | Regex + range validation | 72 parameters |
| Operational | HRT, flow rate, temperature, loading | Regex + unit conversion | 56 parameters |
| Performance | Efficiency, production rates, yields | Regex + calculation validation | 38 parameters |

### Stage 5: Ontology Mapping
- Each extracted value is matched to one of 687 parameter definitions
- Validation against defined ranges, units, and types
- Confidence scoring for extraction quality
- Results: 62,043 ExtractedParameterData rows, 8,397 PaperParameter mappings

### Pipeline Statistics

| Metric | Value |
|---|---|
| Papers indexed | 21,895 |
| PDFs downloaded | 14,743 |
| Full-text processed | 3,535 |
| Total extractions | 70,296 |
| Structured parameter rows | 62,043 |
| Paper-parameter mappings | 8,397 |
| Papers with structured data | 5,261 |
| AI-generated summaries | 8,395 |

## Parameter Ontology

### Categories

| Category | Count | Description | Example Parameters |
|---|---|---|---|
| Biological | 176 | Biofilm, growth kinetics, microbial species, substrate utilization | biofilm_thickness, growth_rate, COD_removal |
| Electrical | 98 | Voltage, current density, power density, impedance, efficiency | power_density, coulombic_efficiency, OCV |
| Materials | 87 | Electrode materials, membranes, catalysts, surface properties | electrode_material, membrane_type, catalyst_loading |
| Chemical | 72 | pH, dissolved oxygen, ionic strength, electrolyte properties | ph_level, dissolved_oxygen, ionic_conductivity |
| Operational | 56 | Flow rates, retention times, loading rates, temperature | HRT, flow_rate, operating_temperature |
| Application-specific | 54 | Wastewater treatment, biosensors, desalination | COD_removal_rate, detection_limit, salt_removal |
| Physical | 43 | Reactor geometry, electrode spacing, cell dimensions | electrode_spacing, cell_volume, reactor_type |
| Performance | 38 | Energy efficiency, conversion rates, gas production | energy_efficiency, H2_production_rate |
| Environmental | 28 | Temperature, humidity, atmospheric conditions | ambient_temperature, humidity, pressure |
| Analytical | 24 | Measurement techniques (EIS, CV, LSV, SEM, FTIR) | scan_rate, frequency_range, magnification |
| Economic | 22 | Capital costs, ROI, payback period, expenses | cost_per_kW, payback_period, ROI |
| Monitoring | 18 | Sampling rates, sensor calibration, alarm thresholds | sampling_rate, calibration_frequency |
| Safety | 12 | Emission standards, compliance requirements | emission_limit_CO2, compliance_standard |
| **Total** | **687** | | |

### Parameter Definition Format

Each parameter in `parameters/index.json` follows this structure:

```json
{
  "id": "biofilm_conductivity",
  "name": "Biofilm Conductivity",
  "unit": "S/m",
  "type": "number",
  "description": "Electrical conductivity of the electroactive biofilm on the electrode surface",
  "range": { "min": 0.001, "max": 1 },
  "typical_range": { "min": 0.005, "max": 0.05 },
  "dependencies": ["biofilm_thickness", "electrode_material"],
  "references": ["Torres et al. (2010)", "Malvankar et al. (2011)"],
  "validation_rules": ["Must be positive", "Typical range 0.005-0.05 S/m"]
}
```

Parameters also have detailed markdown documentation in their category subdirectory (e.g., `parameters/biological/biofilm-conductivity.md`), including measurement methods, typical ranges by system type, and literature references.

### Schema Validation

All parameter definitions conform to `schemas/parameter.schema.json` (JSON Schema draft-07). The schema enforces:

- Required fields: `id`, `name`, `type`, `description`
- ID format: lowercase alphanumeric with hyphens (`^[a-z0-9-_]+$`)
- Type enum: `number`, `string`, `boolean`, `select`, `array`, `object`
- Range objects with `min`/`max` numeric bounds
- Compatibility constraints (materials, microbes, environments, system types)

To validate:

```bash
npm install
npm run validate
```

## Data Files

### extraction-stats.json

Pipeline statistics snapshot from the MESSAI production database (generated 2026-03-15).

| Field | Value |
|---|---|
| Total papers | 21,895 |
| Papers with abstracts | 9,049 |
| Papers with PDFs | 14,743 |
| Papers with full text | 3,535 |
| Parameter definitions | 687 |
| Categories | 13 |
| Subcategories | 119 |
| Papers with reproducibility scores | 289 |
| Papers with economic metrics | 243 |
| Papers with computational tags | 678 |

### correlation-cache.json

Pearson correlations between extracted parameters and performance metrics, computed across 862 papers with Bonferroni correction for multiple comparisons.

**Significant correlations (p < 0.05 after correction):**

| Parameter | Metric | Pearson r | n | p-value | Strength |
|---|---|---|---|---|---|
| Reproducibility Score | Coulombic Efficiency (%) | 0.567 | 36 | < 0.001 | Moderate |
| Coulombic Efficiency (extracted) | Coulombic Efficiency (%) | 0.557 | 55 | < 0.001 | Moderate |

The remaining 12 correlations (reactor volume, chamber count, max power density, publication year, etc.) were not statistically significant after Bonferroni correction.

### reproducibility-summary.json

Reproducibility scoring results from 289 papers evaluated against a 26-criteria weighted rubric.

**Criteria categories and average reporting rates:**

| Category | Weight | Avg. Reporting Rate | Key Criteria |
|---|---|---|---|
| Electrode specifications | High | 68% | Material, surface area, spacing, treatment |
| Operating conditions | High | 54% | Temperature, pH, substrate, HRT |
| Electrical measurements | High | 41% | External R, method, polarization, internal R |
| Biological parameters | Medium | 32% | Inoculum source, community, biofilm |
| Data reporting | Medium | 28% | Units, normalization, error bars, raw data |

**Key metrics:**
- Average completeness: **23.1%**
- Median completeness: **19.4%**
- Most reported: Electrode material (89%)
- Least reported: Raw data availability (4%)
- Improvement over time: Post-2020 papers score 27.8% vs. pre-2015 at 18.2%

## Key Findings

From AI-driven analysis of the MESSAI corpus:

1. **Average reproducibility completeness is only 23.1%** across 289 scored papers, indicating widespread underreporting of experimental conditions
2. **Electrode spacing** is reported in only 37% of publications despite being critical for internal resistance and cross-study comparison
3. Papers reporting all 5 checklist parameters show **>40% IQR reduction** in power density variability (p < 0.05, n = 63)
4. **Reproducibility score correlates with Coulombic Efficiency** reporting consistency (r = 0.567, p < 0.001)
5. **Power density coefficient of variation = 1,285%** across the corpus, reflecting extreme inconsistency in reporting and normalization
6. **64.3% of papers** lack extractable structured parameter data, highlighting the need for standardized reporting
7. **MEC papers** report fewer operational parameters than MFC papers on average, suggesting a technology-maturity reporting gap

## Five-Parameter Reporting Checklist

We propose that all MES publications report, at minimum, these five parameters:

| # | Parameter | Unit | Current Reporting Rate |
|---|---|---|---|
| 1 | Electrode spacing | cm | 37% |
| 2 | Electrode surface area | cm^2 | 62% |
| 3 | External resistance | ohm | 41% |
| 4 | Measurement method | text | 35% |
| 5 | Unit normalization basis | text | 52% |

### Validation

- **63 papers** analyzed in a controlled retrospective study
- Papers reporting all 5 parameters showed **>40% reduction in IQR** for power density
- Statistical significance: **p < 0.05** (Mann-Whitney U test)
- Effect consistent across MFC, MEC, and MDC system types

See [standards/five-parameter-checklist.md](standards/five-parameter-checklist.md) for full details, evidence, and usage guidelines for authors, reviewers, and database curators.

## Analysis Scripts

The scripts in `scripts/` are the actual analysis code used to generate the data outputs. They require a PostgreSQL database with the MESSAI Prisma schema.

### Prerequisites

- Node.js 18+
- TypeScript runtime (`tsx`)
- PostgreSQL with MESSAI schema
- `DATABASE_URL` environment variable

### Usage

```bash
# Reproducibility scoring (26-criteria rubric, writes scores to DB)
DATABASE_URL="postgresql://..." npx tsx scripts/analyze-reproducibility.ts

# Correlation analysis (Pearson + Bonferroni, writes JSON)
DATABASE_URL="postgresql://..." npx tsx scripts/batch-correlation-analysis.ts

# Economic metric extraction (regex from abstracts, updates DB)
DATABASE_URL="postgresql://..." npx tsx scripts/batch-economic-extraction.ts
```

All scripts are idempotent and safe to re-run. See [scripts/README.md](scripts/README.md) for detailed documentation.

## Parameter Explorer

The [Parameter Explorer](https://messai-io.github.io/MESS-Parameters/) is a static React application deployed to GitHub Pages. It provides four views for browsing the ontology:

- **Grid View** -- browse all 687 parameters with search and category filtering
- **Category View** -- hierarchical navigation through 13 categories and 119 subcategories
- **Table View** -- sortable data table with columns for name, unit, type, and range
- **Detail View** -- full parameter documentation with ranges, dependencies, and references

### Run Locally

```bash
cd site
npm install
npm run dev    # Development server at localhost:5173
npm run build  # Production build to site/dist/
```

The Explorer auto-deploys to GitHub Pages on push to `main` via `.github/workflows/deploy-site.yml`.

## Using as a Package

Install from npm:

```bash
npm install @messai-io/mess-parameters
```

The package exports `parameters/index.json` as its main entry point:

```javascript
// ESM
import parameters from '@messai-io/mess-parameters';

// Access metadata
console.log(parameters.metadata.totalParameters);  // 687
console.log(parameters.metadata.majorCategories);   // 13

// List all categories
parameters.categories.forEach(cat => {
  const paramCount = cat.subcategories.reduce(
    (sum, sub) => sum + sub.parameters.length, 0
  );
  console.log(`${cat.name}: ${paramCount} parameters`);
});

// Find parameters by category
const electrical = parameters.categories.find(c => c.id === 'electrical');
electrical.subcategories.forEach(sub => {
  sub.parameters.forEach(p => {
    console.log(`${p.name} (${p.unit}): ${p.range?.min}-${p.range?.max}`);
  });
});
```

The package also includes `schemas/`, `data/`, and `standards/` in its published files.

## How to Cite

If you use MESS-Parameters in your research, please cite:

```bibtex
@misc{mess_parameters_2026,
  author       = {{MESSAI Community}},
  title        = {{MESS-Parameters: Standardized Parameter Ontology
                   for Microbial Electrochemical Systems}},
  year         = {2026},
  publisher    = {GitHub},
  url          = {https://github.com/Messai-io/MESS-Parameters},
  note         = {687 parameters, 13 categories, derived from
                   analysis of 21,895 MES publications}
}
```

## Contributing

We welcome contributions from the MES research community. See [CONTRIBUTING.md](CONTRIBUTING.md) for full guidelines.

**To propose a new parameter:**

1. Fork this repository
2. Add the parameter markdown file to the appropriate category in `parameters/`
3. Add the parameter definition to `parameters/index.json`
4. Validate with `npm run validate`
5. Submit a Pull Request with a description of the parameter's relevance and literature support

**To report issues or suggest improvements:**

Open an issue at [github.com/Messai-io/MESS-Parameters/issues](https://github.com/Messai-io/MESS-Parameters/issues).

## License

This work is licensed under [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/). You are free to share and adapt the material for any purpose, provided you give appropriate credit.

## Links

- [MESSAI Platform](https://messai.io) -- interactive exploration of the full dataset
- [Parameter Explorer](https://messai-io.github.io/MESS-Parameters/) -- browse all 687 parameters online
- [Five-Parameter Checklist](standards/five-parameter-checklist.md) -- proposed minimum reporting standard
- [Parameter Schema](schemas/parameter.schema.json) -- JSON Schema for validation
- [Issue Tracker](https://github.com/Messai-io/MESS-Parameters/issues) -- report issues or suggest parameters
- [CONTRIBUTING.md](CONTRIBUTING.md) -- contribution guidelines
