# Excluded Parameters: Database vs Repository Gap

The MESSAI production database contains **687 parameter definitions** across **13 categories** and **119 subcategories**. The published `parameters/index.json` contains **667 parameters** across **11 categories** and **85 subcategories**.

This document explains the gap.

## Summary

| Dimension | In Database | In index.json | Gap |
|---|---|---|---|
| Parameters | 687 | 667 | 20 |
| Major categories | 13 | 11 | 2 |
| Subcategories | 119 | 85 | 34 |

## Missing Categories

The two categories present in the database but absent from `index.json`:

### 1. Analytical (estimated ~6 parameters)

Parameters related to analytical measurement techniques: electrochemical methods (cyclic voltammetry, linear sweep voltammetry, EIS), microscopy (SEM, TEM, confocal), and spectroscopic methods (FTIR, Raman, XPS).

**Why excluded:** These describe measurement instruments and protocols rather than system properties. They are documented as markdown files in `parameters/analytical/` but were not included in the structured JSON index because they don't have numeric ranges meaningful for data validation.

**Markdown documentation exists:** `parameters/analytical/` (6 files across 3 subdirectories)

### 2. Application-Specific (estimated ~14 parameters)

Parameters specific to individual MES applications: wastewater treatment metrics, biosensor parameters, desalination-specific measurements, biogas production metrics, and CO2 capture rates.

**Why excluded:** These parameters are highly application-dependent and don't have universal ranges. A "desalination rate" parameter is meaningless for an MFC study. They are partially represented through the `operational` category's application subcategories (wastewater, biosensors, desalination).

**Markdown documentation exists:** `parameters/application-specific/` (68 files)

## Missing Subcategories (34)

The 34 additional subcategories in the database but not in `index.json` come from:

- **Analytical subcategories** (~3): electrochemical, microscopy, spectroscopic
- **Application-specific subcategories** (~8): various application domains
- **Extended subcategories in existing categories** (~23): The database has finer-grained subcategory divisions than the published index. For example, `operational` has 19 subcategories in the index but likely has additional subdivisions in the database for specialized applications.

**Note:** The exact subcategory breakdown requires database access to enumerate. This gap will be closed in a future release.

## Impact on Analysis

### Correlations
The 14 correlations in `correlation-cache.json` were computed against the **full 687-parameter database**, not the 667-parameter subset in index.json. Some correlation parameters (e.g., `bio:substrateRemovalEfficiency`) may reference parameters from the excluded application-specific category.

### Reproducibility Scoring
The 26-criteria reproducibility rubric was designed against the full 687-parameter ontology. All 26 criteria map to parameters in the published 667-parameter set, so no scoring bias is introduced by the exclusion.

### Extraction Statistics
The `extraction-stats.json` file reports corpus-level statistics against all 687 parameters. Per-parameter extraction counts are not available in this repository.

## Additional Documentation Directories

The `parameters/` directory contains 37 subdirectories, but only 11 map to `index.json` categories. The remaining directories provide supplementary documentation:

| Directory | Files | Relationship to index.json |
|---|---|---|
| `analytical/` | 6 | Excluded category (measurement methods) |
| `application-specific/` | 68 | Excluded category (domain-specific metrics) |
| `design/` | 7 | Documented in `physical` category |
| `innovation/` | 12 | Future/emerging parameters, not in index |
| `emerging-technology/` | 14 | Future/emerging, not in index |
| `optimization/` | ~30 | Computational methods, not measured parameters |
| `biotechnology/` | ~15 | Overlap with `biological` category |
| `integration/`, `integration-scaling/` | ~20 | Engineering guidelines, not parameters |
| `reactor-design/` | ~10 | Overlap with `physical` category |
| `safety-regulatory/` | ~8 | Overlap with `safety` category |
| Others (13 dirs) | ~70 | Cross-references, analysis, standards, training |

## Planned Improvements

- [ ] Add analytical and application-specific categories to index.json (target: v0.3.0)
- [ ] Enumerate all 34 missing subcategories with parameter lists
- [ ] Reconcile documentation directories with index.json categories
- [ ] Add per-parameter extraction frequency counts from database
