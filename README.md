# MESS-Parameters

**Standardized parameter ontology and analysis tools for Microbial Electrochemical Systems (MES) research**

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)

## Overview

MESS-Parameters is the open-source parameter standard behind the [MESSAI platform](https://messai.io). It provides:

- **687 parameter definitions** across 13 categories and 119 subcategories
- **JSON Schema** validation for parameter values
- **Analysis scripts** for reproducibility scoring, correlation analysis, and economic metric extraction
- **Data outputs** from large-scale analysis of 21,895+ MES publications
- **A proposed five-parameter minimum reporting checklist** for improving MES reproducibility

This repository supports the work described in our EU-ISMET 2026 abstract: *"From PDF to Protocol: How AI-Driven Meta-Analysis of 21,895 Publications Reveals Hidden Patterns in Microbial Electrochemical Systems Research"*.

## Repository Structure

```
MESS-Parameters/
  parameters/          # 687 parameter definitions (JSON index + markdown per parameter)
    index.json         # Master index with all parameters, categories, ranges, and units
    biological/        # Biofilm, growth kinetics, microbial species
    electrical/        # Voltage, current density, impedance
    materials/         # Electrodes, membranes, catalysts
    ...                # 13 categories total
  schemas/             # JSON Schema for parameter validation
  data/                # Analysis outputs
    correlation-cache.json       # 14 parameter-metric correlations (2 significant)
    reproducibility-summary.json # 289-paper reproducibility scoring results
    extraction-stats.json        # Pipeline statistics (21,895 papers, 70,296 extractions)
  standards/           # Proposed reporting standards
    five-parameter-checklist.md  # Minimum reporting standard with 63-paper validation
  scripts/             # Analysis scripts (require MESSAI database)
    analyze-reproducibility.ts   # 26-criteria reproducibility scoring
    batch-correlation-analysis.ts # Pearson correlation computation
    batch-economic-extraction.ts  # Economic metric extraction from abstracts
```

## Parameter Categories

| Category | Description |
|---|---|
| Biological | Biofilm properties, growth kinetics, microbial species, substrate utilization |
| Chemical | pH, dissolved oxygen, ionic strength, electrolyte properties |
| Economic | Capital costs, ROI, payback period, operational expenses |
| Electrical | Voltage, current density, power density, impedance, efficiency |
| Environmental | Temperature, humidity, atmospheric conditions |
| Materials | Electrode materials, membranes, catalysts, surface properties |
| Monitoring | Sampling rates, sensor calibration, alarm thresholds |
| Operational | Flow rates, retention times, loading rates, temperature control |
| Performance | Energy efficiency, conversion rates, gas production |
| Physical | Reactor geometry, electrode spacing, cell dimensions |
| Safety | Emission standards, compliance requirements |
| Analytical | Measurement techniques (EIS, CV, LSV, SEM, FTIR) |
| Application-specific | Wastewater treatment, biosensors, desalination parameters |

## Key Findings

From analysis of the MESSAI corpus:

- **Average reproducibility completeness: 23.1%** across 289 scored papers
- **Electrode spacing** reported in only 37% of publications despite being critical for cross-study comparison
- Papers reporting all 5 checklist parameters show **>40% IQR reduction** in power density variability (p < 0.05)
- **Reproducibility score correlates with Coulombic Efficiency** reporting consistency (r = 0.567, p < 0.001)

See [standards/five-parameter-checklist.md](standards/five-parameter-checklist.md) for the full proposed standard.

## Using the Data

### Parameter Definitions

The master parameter index is at `parameters/index.json`. Each parameter includes:

```json
{
  "id": "biofilm_conductivity",
  "name": "Biofilm Conductivity",
  "unit": "S/m",
  "type": "number",
  "category": "biological",
  "subcategory": "biofilm-parameters",
  "range": { "min": 0.001, "max": 1, "typical": 0.01 }
}
```

Individual parameters also have detailed markdown files in their category subdirectories.

### Analysis Outputs

Files in `data/` are JSON snapshots from the MESSAI production database:

- **correlation-cache.json** — Pearson correlations between parameters and performance metrics
- **reproducibility-summary.json** — Reproducibility scoring methodology and results
- **extraction-stats.json** — Pipeline statistics and corpus overview

### Analysis Scripts

Scripts in `scripts/` are the actual code used to generate the analysis results. They require a PostgreSQL database with the MESSAI Prisma schema. See [scripts/README.md](scripts/README.md) for usage instructions.

## Schema Validation

Parameter definitions are validated against `schemas/parameter.schema.json`. To validate:

```bash
npm install
npm run validate
```

## How to Cite

If you use MESS-Parameters in your research, please cite:

```bibtex
@misc{mess_parameters_2026,
  author = {{MESSAI Community}},
  title = {{MESS-Parameters: Standardized Parameter Ontology for Microbial Electrochemical Systems}},
  year = {2026},
  publisher = {GitHub},
  url = {https://github.com/Messai-io/MESS-Parameters}
}
```

## Contributing

We welcome contributions from the MES research community. See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

To propose a new parameter:
1. Fork this repository
2. Add your parameter to the appropriate category folder
3. Update `parameters/index.json`
4. Validate using `npm run validate`
5. Submit a Pull Request

## License

This work is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

## Links

- [MESSAI Platform](https://messai.io) -- interactive exploration of the full dataset
- [Five-Parameter Checklist](standards/five-parameter-checklist.md) -- proposed minimum reporting standard
- [Issue Tracker](https://github.com/Messai-io/MESS-Parameters/issues)
