# Five-Parameter Minimum Reporting Checklist for MES Research

**Status:** Proposed standard, under validation
**Version:** 1.0 (March 2026)
**Authors:** MESSAI Research Team

## Motivation

Analysis of 21,895 MES publications reveals that inconsistent parameter reporting is the primary barrier to cross-study comparison and reproducibility. Many studies omit basic experimental details that are essential for reproducing results or comparing performance across systems.

Our reproducibility scoring of 289 papers found an average completeness of only 23.1% across 26 standard criteria. However, a small subset of parameters has outsized impact on result interpretability.

## The Five-Parameter Checklist

We propose that **all MES publications** report, at minimum, these five parameters:

### 1. Electrode Spacing (cm)
- Distance between anode and cathode
- Currently reported in only 37% of papers
- Directly affects internal resistance and ohmic losses
- Without this, power density normalization is unreliable

### 2. Electrode Surface Area (cm^2)
- Projected or geometric area of the working electrode
- Currently reported in 62% of papers (but often ambiguous: projected vs. BET)
- Required for areal normalization of current and power density
- Must specify: projected area, geometric area, or BET surface area

### 3. External Resistance (ohm)
- Fixed external load or variable load range used during measurements
- Currently reported in only 41% of papers
- Determines the operating point on the polarization curve
- Studies using different external resistances are not directly comparable

### 4. Measurement Method
- How voltage, current, and power were measured (multimeter, potentiostat, data logger)
- Whether polarization curves used LSV, variable resistance, or chronoamperometry
- Sampling frequency and measurement duration
- Currently adequately described in only 35% of papers

### 5. Unit Normalization Basis
- Whether power/current density is normalized to anode area, cathode area, membrane area, or reactor volume
- Currently inconsistent across 48% of the literature
- A paper reporting "1200 mW/m^2" is meaningless without specifying the normalization basis

## Evidence

### Retrospective Validation
- **63 papers** from the MESSAI corpus were analyzed in a controlled comparison
- Papers reporting all 5 parameters showed **>40% reduction in interquartile range (IQR)** for power density measurements compared to papers missing 2+ parameters
- Statistical significance: **p < 0.05** (Mann-Whitney U test)
- The effect was consistent across MFC, MEC, and MDC system types

### Correlation Analysis
- Reproducibility score (based on 26 criteria) positively correlates with Coulombic Efficiency reporting consistency (Pearson r = 0.567, n = 36, p < 0.001)
- See `data/correlation-cache.json` for full correlation matrix

## How to Use This Checklist

### For Authors
Before submitting a manuscript, verify that your Methods section explicitly states:
- [ ] Electrode spacing (with units)
- [ ] Electrode surface area (specifying projected vs. geometric vs. BET)
- [ ] External resistance (or load range for polarization curves)
- [ ] Measurement method and instrument
- [ ] Normalization basis for all reported densities

### For Reviewers
During peer review, check whether the five parameters are reported. If any are missing, request that the authors add them before acceptance.

### For Database Curators
When extracting data from publications, flag papers that are missing any of the five parameters. This enables filtering by data quality in meta-analyses.

## Limitations and Future Work

- This checklist represents a **minimum** standard; comprehensive reproducibility requires reporting all 26 criteria in our full scoring rubric
- The 63-paper validation is retrospective; a **prospective validation study** is planned for 2026-2027 where authors will be asked to follow the checklist before publication
- The checklist is focused on single-chamber and dual-chamber configurations; specialized systems (e.g., sediment MFCs, plant MFCs) may require additional parameters
- Community feedback is welcome via [GitHub Issues](https://github.com/Messai-io/MESS-Parameters/issues)

## Citation

If you use this checklist in your work, please cite:

```
MESSAI (2026). Five-Parameter Minimum Reporting Checklist for Microbial
Electrochemical Systems. MESS-Parameters v0.2.0.
https://github.com/Messai-io/MESS-Parameters/blob/main/standards/five-parameter-checklist.md
```

## Related Resources

- [Full parameter ontology](../parameters/index.json) — 687 parameters across 13 categories
- [Correlation analysis](../data/correlation-cache.json) — parameter-metric correlations
- [Reproducibility summary](../data/reproducibility-summary.json) — scoring methodology and results
- [MESSAI Platform](https://messai.io) — interactive exploration of the full dataset
