# Scientific Integrity Notes

This document provides transparent disclosure of known limitations, statistical caveats, and methodological concerns in the MESS-Parameters dataset. It is intended for researchers evaluating whether this data is suitable for their analysis.

**Version:** 0.2.0 | **Last reviewed:** 2026-04-06

---

## 1. Correlation Analysis Caveats

### 1.1 P-Value Approximation (Known Inaccuracy)

The p-values in `correlation-cache.json` were computed using a custom approximation, not a standard t-distribution CDF:

```
// From batch-correlation-analysis.ts
const p = n > 30
  ? 2 * Math.exp(-0.717 * t * t - 0.416 * Math.abs(t))
  : Math.min(1, 2 / (1 + Math.abs(t) * Math.sqrt(n - 2)));
```

This is **not** a standard statistical formula. The correct method is:

```
p = 2 * (1 - CDF_t(|t|, df = n - 2))
```

where CDF_t is the cumulative distribution function of the Student's t-distribution.

**Impact:** P-values of exactly `0` and `1` in the dataset are rounding artifacts from this approximation. The two "significant" correlations (p=0.0000) are likely significant under a correct calculation, but their exact p-values are unknown. Other p-values may be over- or under-estimated.

**Recommendation for researchers:** Recompute p-values from the reported Pearson r and sample size using a standard statistical library (scipy.stats.pearsonr, R's cor.test, etc.).

**Update 2026-04-18:** Corrected p-values computed via the standard Student's t-distribution (regularized incomplete beta function, validated against scipy to 1e-10) are now published in `data/correlations.csv` under the `p_value_corrected` column. The script is `scripts/recompute-correlation-pvalues.py` (pure stdlib, no dependencies). The two previously "significant" correlations remain significant under corrected p-values: Reproducibility Score vs CE (p = 3.1e-4, n=36) and ec:coulombicEfficiency vs CE (p = 1.0e-5, n=55).

### 1.2 Bonferroni Correction

The README and METHODOLOGY claim Bonferroni correction was applied (adjusted alpha = 0.05/14 = 0.0036). However, the p-values stored in `correlation-cache.json` are the **raw** p-values, not Bonferroni-adjusted values. Researchers must apply the correction themselves when interpreting significance.

**Update 2026-04-18:** `data/correlations.csv` now includes a `bonferroni_significant` column (adjusted α = 0.05/14 = 3.571e-3) and an `adjusted_alpha` column. Under Bonferroni correction, 2 of the 14 tested correlations remain significant (the two listed in §1.1).

### 1.3 Sample Size Limitations

| Correlation | N | 95% CI on r | Adequate? |
|---|---|---|---|
| Reproducibility Score vs CE | 36 | [0.27, 0.76] | Borderline |
| ec:coulombicEfficiency vs CE | 55 | [0.33, 0.72] | Marginal |
| bio:substrateRemovalEfficiency vs CE | 15 | [-0.25, 0.67] | **No** |
| reactor:volume vs Power | 15 | [-0.56, 0.40] | **No** |

Confidence intervals computed via Fisher z-transformation. Correlations with N < 30 should not be used for inference. The minimum sample threshold in the analysis script was N=10, which is insufficient for detecting moderate effects (Cohen: N >= 64 required for r=0.3 at alpha=0.05, power=0.80).

### 1.4 Pearson vs Spearman

All correlations use Pearson's r, which assumes:
- Linear relationship between variables
- Both variables approximately normally distributed
- Homoscedasticity (constant variance)

MES performance data is typically **log-normal** (power density spans 0.1-10,000 mW/m^2) and may contain non-linear relationships. Spearman's rank correlation (rho) would be more robust but was not computed. Researchers performing their own analysis should consider Spearman or log-transforming variables before computing Pearson correlations.

### 1.5 Confounding Variables Not Controlled

The correlations are simple bivariate analyses. They do not control for:
- Electrode material (carbon cloth vs graphite vs metal)
- Reactor type (single-chamber vs dual-chamber)
- Substrate type (acetate vs glucose vs wastewater)
- System type (MFC vs MEC vs MDC)
- Publication era (methods and materials have improved over time)
- Scale (lab bench vs pilot vs commercial)

The negative correlation between max current density and power output (r=-0.136) is likely a confounding artifact: studies with higher current density may operate at lower voltage (due to ohmic losses in larger systems), not because current density causally reduces power.

---

## 2. Reproducibility Scoring Caveats

### 2.1 Category-Level Averaging

The reporting rates in `reproducibility-summary.json` are **category averages**, not per-criterion rates:

```json
"electrodeSpecifications": {
  "averageReportingRate": 0.68
}
```

This 68% average masks significant variation within the category:
- Electrode material: ~89% (widely reported)
- Electrode spacing: ~37% (rarely reported)
- Surface treatment: estimated <30%

The individual criterion rates are available only through running `analyze-reproducibility.ts` against the MESSAI database. The `reproducibility-criteria.csv` file inherits this category-level averaging.

### 2.2 Tier Thresholds Are Not Empirically Validated

The reproducibility tiers (Excellent >= 65%, Good >= 45%, Fair >= 30%, Poor >= 15%, Insufficient < 15%) are **heuristic thresholds**, not data-driven cutoffs. The analysis script contains the comment "Adjusted thresholds to get better distribution," indicating these were tuned for visual presentation, not validated against actual reproducibility outcomes.

No study has demonstrated that a paper scoring 65% is meaningfully more reproducible than one scoring 60%.

### 2.3 Scoring Criteria Selection

The 26 criteria were selected by the MESSAI team based on domain expertise. They have not been validated against an external standard (e.g., MIAME for microarray data, ARRIVE for animal studies). Missing criteria that may affect MES reproducibility include:

- Aeration method (passive vs active cathode breathing)
- Inoculum concentration (cells/mL, not just source)
- Steady-state vs peak measurement distinction
- Load resistance dynamics (fixed vs variable)
- Temperature stability range (not just nominal)
- Polarization curve resolution (number of data points)

### 2.4 Weighting Scheme

Criteria are grouped into "high" and "medium" weight categories, but the specific numeric weights applied to individual criteria are not published in this repository. The weighting matrix is embedded in `scripts/analyze-reproducibility.ts` and requires database access to execute.

---

## 3. Five-Parameter Checklist Validation

### 3.1 Study Design Limitations

The validation study (63 papers, 40% IQR reduction, p < 0.05) is a **retrospective observational study**, not a controlled experiment. Key limitations:

- **Selection bias:** Papers reporting all 5 parameters may come from more rigorous labs that also control other variables better. The reduced variability may reflect overall lab quality, not the 5 parameters specifically.
- **No ablation study:** It is unknown whether all 5 parameters are necessary, or if 3-4 would achieve similar IQR reduction.
- **Small sample:** N=63 is adequate for a pilot but underpowered for a definitive claim. The effect size confidence interval is not reported.
- **Single metric:** Only power density variability was tested. The checklist may not reduce variability for other metrics (CE, COD removal).
- **Exact p-value unknown:** Reported as "< 0.05" without the exact value or test statistic.

### 3.2 Recommended Citation Language

When citing the five-parameter checklist, we recommend:

> "A retrospective analysis of 63 MES papers found that reporting all five parameters (electrode spacing, surface area, external resistance, measurement method, normalization basis) was associated with a 40% reduction in power density IQR (Mann-Whitney U, p < 0.05). **Prospective validation is needed.**"

---

## 4. Parameter Definition Caveats

### 4.1 Default vs Typical Contradictions

Some parameters have `default` values that contradict their `range.typical` values. These arise from different data sources being merged without reconciliation:

| Parameter | Default | Typical | Issue |
|---|---|---|---|
| biofilm_thickness | 100 um | 10 um | 10x discrepancy |

The `default` field represents a software default for the MESSAI platform interface. The `range.typical` field represents a literature-derived central tendency. **When these conflict, prefer `range.typical` for scientific use.**

### 4.2 Range Provenance Unknown

Parameter ranges (min/max/typical) are not accompanied by:
- The number of papers from which the range was derived
- Confidence intervals
- Whether the range represents 95% of observations, theoretical limits, or hand-selected boundaries
- Temporal scope (ranges may reflect older literature)

Ranges should be treated as **approximate guidance**, not validated statistical bounds.

### 4.3 Unit Inconsistencies

Power density appears with multiple units across the repository:
- `mW/m^2` (areal normalization, common in MFC literature)
- `W/m^3` (volumetric normalization, common in engineering)
- `mW/cm^2` (legacy unit in some parameter definitions)

The `unit` field in `index.json` reflects the primary unit convention for each parameter variant, but cross-parameter comparisons require unit conversion. There is no universal unit convention enforced across the ontology.

### 4.4 Duplicate Parameter Definitions

Several core parameters have multiple file representations with potentially conflicting information:

| Parameter Concept | Files | Risk |
|---|---|---|
| Power density | powerdensity.md, power-density.md, power-density-comprehensive.md, power-density-enhanced.md, maxpowerdensity.md, avgpowerdensity.md, maximum-power-density.md, maximum-power-output-comprehensive.md | 8 files |
| Current density | currentdensity.md, current-density.md, current-density-enhanced.md | 3 files |
| Impedance | impedance.md, impedance-comprehensive.md | 2 files |
| Charge transfer resistance | charge-transfer-resistance.md, charge-transfer-resistance-comprehensive.md | 2 files |

Files with `-comprehensive` or `-enhanced` suffixes contain richer data. Files matching the bare parameter name (e.g., `powerdensity.md`) are typically auto-generated stubs with minimal content. When conflicts exist, prefer the `-comprehensive` or `-enhanced` variant.

### 4.5 Schema Utilization Gap

The JSON Schema (`schemas/parameter.schema.json`) defines fields for `references`, `dependencies`, `validation_rules`, and `compatibility`. Of 667 parameters in `index.json`, only **14 core parameters** have `references`, `dependencies`, and `compatibility` populated. The remaining 653 parameters have none of these fields. This means:

- 98% of parameters have no traceable literature references in the structured data
- 98% have no documented inter-parameter dependencies
- 98% have no system-type compatibility tags
- No parameters have `validation_rules` beyond min/max range checking

---

## 5. Extraction Data Quality

### 5.0 Filtering Applied to Published Data

The MESSAI database contains 323,606 raw extraction rows. The published `extracted-parameter-data.csv` includes only 25,566 rows (7.9%) after filtering:

- **Excluded:** 292,413 rows (90.4%) with confidence = 0 (extraction failures)
- **Excluded:** 246,659 rows (76.2%) with no numeric value
- **Included:** Only rows with confidence > 0 AND a numeric value

Even after filtering, the published data has known quality issues:

| Issue | Affected rows | % of published data |
|---|---|---|
| No paper DOI (untraceable to source) | ~24,870 | ~97% |
| PENDING validation status | ~24,000 | ~94% |
| Parameter names that are extraction artifacts | Unknown | Estimated 5-15% |

**The paper-parameter-values.csv (13,321 rows) is cleaner** because each row maps to a defined parameter in the 687-definition ontology. The extracted-parameter-data.csv uses free-text parameter names from the extraction pipeline, which sometimes contain sentence fragments, section headings, or other PDF parsing artifacts.

### 5.0.1 Category Ontology Mismatch

The `extracted-parameter-data.csv` uses extraction-pipeline categories (PHYSICAL, CHEMICAL, BIOLOGICAL, ENVIRONMENTAL, OPERATIONAL, ECONOMIC) that differ from the ontology categories in `parameter-definitions-full.csv` (ELECTROCHEMICAL, MATERIALS, MONITORING_CONTROL, REACTOR_DESIGN, etc.). These are two different classification systems. Cross-referencing between the files requires mapping, which is not provided in this release.

The `paper-parameter-values.csv` uses the ontology categories and does not have this mismatch.

### 5.0.2 Corpus Scope

The ingestion pipeline uses a permissive keyword filter. An estimated 10-30% of papers in the corpus may be only tangentially related to microbial electrochemical systems. Papers about general electrochemistry, wastewater treatment without MES, or unrelated fields may be included. System type classification (MFC/MEC/MDC/BES/MES) is automated and not manually verified.

### 5.1 Open-Access Bias

Only papers available through Unpaywall or publisher open-access APIs were processed. Paywalled publications without open-access versions are excluded, introducing potential bias toward:
- More recent publications (open-access rates are increasing)
- Certain journals and publishers
- Government-funded research (often has OA mandates)

### 5.2 The 20-Parameter Gap

The MESSAI database contains 687 parameter definitions, but `index.json` contains only 667. The 20 excluded parameters span 2 additional categories and 34 additional subcategories. The excluded parameters are not individually documented in this repository. See `data/excluded-parameters.md` for what is known.

### 5.3 Extraction Confidence Scores

The raw data exports (`extracted-parameter-data.csv`, `paper-parameter-values.csv`) include per-value confidence scores (0-1). However, there is no published inter-rater reliability study (comparing automated extraction to manual expert extraction). The `is_verified` field indicates manual verification, but most records are unverified. Extraction accuracy likely varies by:
- Parameter type (numeric values with clear units > contextual descriptions)
- PDF quality (clean layouts > multi-column with merged tables)
- Paper section (Methods/Results > Discussion/Introduction)

### 5.4 No Temporal or Geographic Metadata

The corpus-level statistics do not include:
- Year-by-year publication distribution
- Geographic distribution of research institutions
- Journal-level breakdown of parameter reporting quality

These dimensions may introduce confounding in cross-study analyses.

---

## 6. Recommendations for Researchers Using This Data

1. **Recompute correlations** from reported r and N values using a standard statistics library
2. **Treat ranges as approximate** — they lack confidence intervals and sample size documentation
3. **Use `range.typical` over `default`** when they conflict — typical is literature-derived, default is a software setting
4. **Apply Bonferroni correction** manually to p-values if testing significance
5. **Prefer `-comprehensive` or `-enhanced` files** over bare-name parameter files
6. **Check units carefully** when comparing across parameters — unit conventions are not globally standardized
7. **Stratify analyses** by system type (MFC/MEC/MDC) rather than pooling all systems
8. **Cite with appropriate caveats** — see recommended citation language in Section 3.2

---

## 7. Verification Results (Tier 1, zero-LLM)

Snapshot: 2026-04-19. Scripts in `scripts/verify/`, headline JSON at
`data/verification/tier1-summary.json`.

| Check | Value | Verdict |
|---|---|---|
| Snippet grounding (extracted value appears in quoted snippet ±1%) | 85.95% | FLAG (pass ≥ 92%, fail < 80%) |
| Literature cross-check (15 headline parameters vs Logan/Rabaey/Santoro/Pant) | 12/15 in [p10,p90] | PASS |
| Unit-family coverage (known-unit rows ÷ known-family rows) | 97.18% | PASS |
| Duplicate-DOI consistency (same title, multiple DOIs, value agreement ±10%) | 97.37% (37/38) | PASS |
| Noise-floor sensitivity (quarantine ≥50-obs papers, per-parameter median shift) | 96× max shift | FAIL |
| **Overall** | — | **FLAG** |

### Reading the flags

- **Grounding 85.95% (FLAG):** 584 of 4,156 sources with snippets have a
  value whose digits do not appear in the quoted sentence within ±1% (or
  common unit-conversion factors). Candidates: snippet truncation,
  unit-scale mismatches the tolerance list does not cover, and genuine
  LLM hallucinations. Full failing-row CSV at
  `data/verification/snippet-grounding-failures.csv`.

- **Noise floor FAIL:** Ten papers (0.7% of the corpus) each emit more
  than 50 observations, some with clearly nonsensical ontology rows
  ("Dawn Duration", "Control Effectiveness"). Quarantining them moves
  multiple per-parameter medians by >10×. The published rich.json stats
  are therefore not robust against a handful of noisy extractions;
  downstream consumers should prefer `stats_by_system` and filter to
  `verified_mes = true` for critical decisions. Ranked shift list in
  `data/verification/noise-floor.json`.

- **Literature cross-check 12/15 PASS:** Two FLAGs are `power density`
  (median 35.4 mW/m² vs expected p10=50 — plausibly real; many
  sediment / early-MFC papers) and `ph` (median 4.0 vs p10=5.5 —
  likely collision with acid-reactor parameters; needs per-system-type
  disaggregation). No hard fails.

See `data/verification/{outliers/index.html, literature-crosscheck.json,
unit-audit-unknowns.csv}` for the per-item drill-downs.

### Re-running

```bash
python3 scripts/verify/snippet_grounding.py
npx tsx scripts/verify/literature_crosscheck.ts
npx tsx scripts/verify/unit_audit.ts
npx tsx scripts/verify/outlier_report.ts
npx tsx scripts/verify/noise_floor.ts
npx tsx scripts/verify/duplicate_consistency.ts
npx tsx scripts/verify/tier1_rollup.ts
```

Verification-of-verification controls live in
`tests/test_snippet_grounding_negative.py` (synthetic bad pairs; the
grounder must flag 50/50) and are run under `pytest`.

---

## 8. Phase 1–4 upgrades (2026-04-19)

Four producer-side capabilities shipped alongside the verification suite:

- **Phase 1 — ontology hygiene.** `data/ontology-blocklist.txt` (25
  parameters) is applied at Tier A in `scripts/build-provenance.ts`
  and every verify/analyze script. Drops 3,989 rows (12.7%) of
  photobiology / mechanical / molecular-biology contamination; noise-
  floor max median shift 9,600% → 1,283% (still FAIL but remaining
  shifts are from legitimate-but-paper-heavy aggregations, not
  hallucinated ontology). Parameters with < 5 distinct papers now
  suppress `stats_global` / `stats_by_system` / `distribution` —
  sources are retained for audit but aggregates are null.

- **Phase 2 — multi-dim conditional stats.**
  `data/parameter-conditional-stats.json` emits per-parameter buckets
  stratified on 13 axes (substrate, anode_material, operation_mode,
  temperature_bin, ph_bin, etc.) plus four 2D crosses. Top-25
  parameters, 672 buckets in the current corpus. Schema pinned at
  `schemas/conditional-stats.schema.json`.

- **Phase 3 — gap + contradiction sidecars.**
  `data/analysis/contradictions.json` flags cross-paper numerical
  disagreements (1,118 flagged on current corpus, thresholds matched
  to messai-ai defaults).
  `data/analysis/research-gaps.json` scores the twelve MES research
  areas from messai-ai's taxonomy on urgency/impact/feasibility.
  Both files are schema-compatible with the consumer's
  `ContradictionResult` / `ScoredGap` interfaces so the consumer can
  switch to reading the sidecar instead of recomputing at API time.

- **Phase 4 — protocol recommender v0.** `npm run recommend` CLI
  accepts `--given K=V` constraints (substrate, anode_material,
  system_type, etc.) plus `--target "PARAM OP VALUE"` and returns
  ranked DOIs + a "common protocol features" block (mode for
  categorical fields, median ± IQR for temperature / pH). Ranks by
  confidence × reproducibility_score; falls back to 0.5 when
  reproducibility missing.

Consumer-contract additions in `docs/consumer-contract.md` under
§conditional-stats-sidecar, §analysis-sidecars, §ontology-blocklist.
Consumer migration notes in `docs/consumer-migration-notes.md`.

---

## 9. Planned Improvements

The following improvements are planned for future releases:

- [x] Replace custom p-value approximation with proper t-distribution calculation *(done 2026-04-18; see `scripts/recompute-correlation-pvalues.py`)*
- [ ] Add per-criterion reporting rates (not category averages)
- [ ] Populate references, dependencies, and compatibility fields in index.json
- [ ] Conduct prospective validation of the five-parameter checklist
- [ ] Publish inter-rater reliability study for extraction pipeline
- [ ] Add confidence intervals to all reported ranges
- [ ] Consolidate duplicate parameter files into single authoritative sources
- [ ] Document excluded parameters with reasons for exclusion
- [ ] Add Spearman correlations alongside Pearson
- [ ] Validate reproducibility tier thresholds against actual reproduction attempts
