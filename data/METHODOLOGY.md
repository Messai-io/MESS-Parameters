# MESSAI Extraction Pipeline Methodology

This document describes the methodology used to build the MESSAI corpus and generate the analysis outputs in this directory. It supports reproducibility and scientific transparency for the work described in our EU-ISMET 2026 abstract.

---

## 1. Corpus Assembly

**Scope:** Microbial Electrochemical Systems (MES) literature published in peer-reviewed journals.

**Sources:**
- Unpaywall API for open-access PDF discovery
- CrossRef metadata for DOI resolution, titles, authors, publication dates
- Scopus and PubMed indexing for keyword-based retrieval

**Corpus size (as of 2026-03-15):**

| Metric | Count |
|--------|-------|
| Total papers indexed | 21,895 |
| Papers with abstracts | 9,049 |
| Papers with downloadable PDFs | 14,743 |
| Papers with full-text extraction | 3,535 |

**System type distribution:**

| System Type | Papers | % of Corpus |
|-------------|--------|-------------|
| Microbial Fuel Cell (MFC) | 12,450 | 56.9% |
| Microbial Electrolysis Cell (MEC) | 3,210 | 14.7% |
| Microbial Desalination Cell (MDC) | 980 | 4.5% |
| General MES | 5,255 | 24.0% |

**Inclusion criteria:** Papers must reference at least one MES system type in the title, abstract, or keywords. No date restriction was applied; the corpus spans the full publication history of MES research.

---

## 2. PDF Processing

**OCR engine:** Nougat (Meta Research) — a transformer-based academic document OCR model optimized for scientific PDFs containing equations, tables, and figures.

**Processing pipeline:**
1. PDF download via Unpaywall or publisher APIs
2. Nougat OCR to structured Markdown
3. Section identification (Abstract, Methods, Results, Discussion)
4. Table extraction and normalization
5. Figure caption extraction

**Coverage:** 14,743 PDFs were downloaded; 3,535 were processed to full structured text. The remainder were processed at the abstract level only (9,049 papers with abstracts available).

---

## 3. Parameter Extraction

**Ontology:** 687 parameter definitions organized into 13 major categories and 119 subcategories, covering biological, chemical, electrical, environmental, materials, monitoring, operational, performance, physical, safety, economic, analytical, and application-specific parameters.

**Extraction method:** Hybrid approach combining:
- **Regex patterns** for well-structured numeric values with units (e.g., "power density of 1.2 W/m^2")
- **LLM-based extraction** for complex or ambiguous parameters requiring contextual understanding
- **Table parsing** for structured data in results tables

**Extraction statistics:**

| Metric | Count |
|--------|-------|
| Total extractions attempted | 70,296 |
| Successful parameter data rows | 62,043 |
| Paper-to-parameter mappings | 8,397 |
| Papers with at least one structured parameter | 5,261 |

**Six domain-specific extractors:**
1. Electrochemical parameter extractor (voltage, current, power, impedance)
2. Biological parameter extractor (biofilm, microbial community, kinetics)
3. Operating conditions extractor (temperature, pH, HRT, substrate)
4. Materials extractor (electrode, membrane, catalyst specifications)
5. Performance metrics extractor (efficiency, gas production, treatment)
6. Economic metrics extractor (CAPEX, OPEX, payback, LCOE)

---

## 4. Reproducibility Scoring

**Purpose:** Quantify how completely MES papers report the experimental parameters needed to reproduce their results.

**Method:**
- 26 weighted criteria grouped into 5 categories
- Multi-source detection: direct database fields, JSON metadata fields, and text pattern matching
- Each criterion scored as present (1) or absent (0)
- Weighted sum normalized to 0-100% completeness

**Scoring categories:**

| Category | Weight | Criteria Count | Avg. Reporting Rate |
|----------|--------|---------------|-------------------|
| Electrode Specifications | High | 4 | 68% |
| Operating Conditions | High | 4 | 54% |
| Electrical Measurements | High | 4 | 41% |
| Biological Parameters | Medium | 3 | 32% |
| Data Reporting | Medium | 4 | 28% |

*The remaining 7 criteria (of 26 total) are distributed across additional sub-categories in the scoring rubric and are available through the full analysis script.*

**Reproducibility tiers:**

| Tier | Range | Interpretation |
|------|-------|---------------|
| Excellent | 65-100% | Sufficient for full reproduction |
| Good | 45-64% | Most key parameters reported |
| Fair | 30-44% | Major gaps but partially reproducible |
| Poor | 15-29% | Critical parameters missing |
| Insufficient | 0-14% | Cannot be meaningfully reproduced |

**Results:** 289 papers scored. Average completeness: 23.1%. Median: 19.4%. Temporal trend: post-2020 papers average 27.8% vs. pre-2015 at 18.2%.

---

## 5. Five-Parameter Checklist Validation

**Hypothesis:** A small set of critical parameters, if consistently reported, would significantly reduce variability in cross-study comparisons.

**The five parameters:**
1. Electrode spacing (cm) — reported in 37% of papers
2. Electrode surface area (cm^2) — reported in 62% (often ambiguous)
3. External resistance (ohm) — reported in 41%
4. Measurement method — adequately described in 35%
5. Unit normalization basis — consistent in 48%

**Validation study:**
- 63 papers retrospectively analyzed
- Papers reporting all 5 parameters compared to those missing one or more
- Power density IQR reduction: 40% (papers with all 5 vs. papers missing any)
- Statistical test: Mann-Whitney U
- Significance: p < 0.05
- Conclusion: Consistent reporting of these 5 parameters significantly reduces performance measurement variability

---

## 6. Correlation Analysis

**Purpose:** Identify relationships between experimental parameters and performance outcomes across the corpus.

**Method:** Pearson product-moment correlation coefficient computed for parameter-metric pairs.

**Parameters tested:**
- Reproducibility Score
- Coulombic Efficiency (ec:coulombicEfficiency)
- Substrate Removal Efficiency (bio:substrateRemovalEfficiency)
- Maximum Power Density (ec:maxPowerDensity)
- Maximum Current Density (ec:maxCurrentDensity)
- Reactor Volume (reactor:volume)
- Number of Chambers (reactor:chambers)
- Publication Year

**Outcome metrics:**
- Power Output (mW/m^2)
- Coulombic Efficiency (%)

**Statistical corrections:**
- Bonferroni correction for 14 simultaneous comparisons (adjusted alpha = 0.05/14 = 0.0036)
- Minimum sample size: 10 paper-pairs per correlation
- p-value computed from t-distribution approximation

**Strength classification:**

| Classification | Threshold |
|---------------|-----------|
| Strong | \|r\| >= 0.7 |
| Moderate | \|r\| >= 0.4 |
| Weak | \|r\| >= 0.2 |
| Negligible | \|r\| < 0.2 |

**Results:** 14 correlations computed from 862 papers. 2 significant (p < 0.05 after correction): Reproducibility Score vs. Coulombic Efficiency (r=0.567, n=36) and extracted vs. reported Coulombic Efficiency (r=0.557, n=55).

---

## 7. Economic Metric Extraction

**Purpose:** Identify papers containing economic analysis of MES systems.

**Method:** Regex-based extraction from abstracts, AI summaries, and key findings text.

**Patterns matched:**
- Capital cost (CAPEX, capital expenditure/investment)
- Operational cost (OPEX, annual/monthly operational cost)
- Payback period (years/months)
- Net present value (NPV)
- Internal rate of return (IRR, %)
- Levelized cost of energy (LCOE, $/kWh)
- Levelized cost of treatment (LCOT, $/m^3)
- Cost per kW ($/kW)
- Scale indicators (lab, bench, pilot, demo, commercial, TRL)

**Results:** 243 papers (1.1% of corpus) contain extractable economic metrics. Scale information detected in approximately 10% of the corpus.

---

## 8. Known Statistical Limitations

### 8.1 P-Value Approximation

The p-values in `correlation-cache.json` were computed using a custom approximation formula, not the standard Student's t-distribution CDF. This produces artifacts: p-values of exactly `0` and `1` are rounding errors. The `correlations.csv` export includes a `p_value_note` column flagging affected values. **Researchers should recompute p-values** from the reported r and N using standard tools (scipy.stats.pearsonr, R's cor.test).

### 8.2 Pearson Correlation Assumptions

All correlations use Pearson's r, which assumes normality and linearity. MES performance data (power density: 0.1-10,000 mW/m^2) is likely log-normal. No normality testing (Shapiro-Wilk, Q-Q) was performed. Spearman's rho would be more robust but was not computed.

### 8.3 Confounding Variables

Correlations are simple bivariate analyses with no control for electrode material, reactor type, substrate, system type, or publication era. The negative correlation between max current density and power output (r=-0.136) is likely a confounding artifact: studies achieving higher current density may operate at lower voltage due to ohmic losses.

### 8.4 Sample Size Adequacy

The `correlations.csv` includes `sample_size_adequate` (yes/no, threshold N >= 30) and 95% confidence intervals computed via Fisher z-transformation. Correlations with N < 30 have wide confidence intervals spanning zero and should not be used for inference. Cohen's power analysis requires N >= 64 for detecting moderate effects (r=0.3) at alpha=0.05.

### 8.5 Reproducibility Tier Thresholds

The five reproducibility tiers (Excellent >= 65%, Good >= 45%, etc.) are heuristic thresholds, not empirically validated cutoffs. No ROC analysis or actual reproduction study has confirmed that these thresholds predict real-world reproducibility.

### 8.6 Reporting Rate Averaging

The `averageReportingRate` values in `reproducibility-summary.json` are **category-level averages** across multiple criteria, not per-criterion rates. For example, 68% for electrode specifications averages together electrode material (~89%) and electrode spacing (~37%). Per-criterion rates require database access.

## 9. Additional Limitations

1. **Open-access bias:** Only PDFs available through Unpaywall or publisher APIs were processed, excluding paywalled publications without open-access versions.

2. **OCR accuracy:** Nougat performs well on standard layouts but may introduce errors on complex multi-column formats, especially for tables with merged cells. No OCR accuracy benchmark has been published for this dataset.

3. **Extraction accuracy varies:** Numeric parameters with clear units (e.g., "1.2 W/m^2") are extracted more reliably than contextual parameters (e.g., measurement method descriptions). No inter-rater reliability study (comparing automated extraction to manual expert extraction) has been conducted.

4. **Retrospective validation only:** The five-parameter checklist was validated retrospectively on N=63 papers. A prospective validation study with author participation is planned but not yet completed. No ablation study has tested whether fewer than 5 parameters achieve similar variability reduction.

5. **Sample size constraints:** Several correlations have small sample sizes (n=15-55), limiting statistical power. Confidence intervals are now provided in the CSV export. The strongest correlations should be interpreted as preliminary findings.

6. **Temporal coverage:** The corpus spans the full publication history of MES research without date restrictions, meaning early papers (pre-2010) with different reporting norms are included alongside recent publications. No temporal stratification has been applied.

7. **Parameter range provenance:** Ranges in `index.json` are not accompanied by sample sizes, confidence intervals, or the number of papers from which they were derived. They should be treated as approximate guidance.

---

## References

- This methodology supports the EU-ISMET 2026 abstract: "From PDF to Protocol: How AI-Driven Meta-Analysis of 21,895 Publications Reveals Hidden Patterns in Microbial Electrochemical Systems Research"
- Analysis scripts: `scripts/analyze-reproducibility.ts`, `scripts/batch-correlation-analysis.ts`, `scripts/batch-economic-extraction.ts`
- Parameter ontology: `parameters/index.json` (v3.2.0)
- Proposed reporting standard: `standards/five-parameter-checklist.md`
