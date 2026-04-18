# Missing Data Handling

Missing data handling defines the strategies employed to manage gaps, null values, and incomplete records in MES monitoring datasets. Data gaps arise from sensor failures, communication interruptions, power outages, maintenance windows, and data validation rejections. The handling strategy determines whether gaps are filled (imputation), marked and excluded (deletion), or preserved with quality flags, directly affecting the validity of calculations, model training, and regulatory reporting derived from the dataset.

Common strategies include: listwise deletion (removing entire records with any missing value), pairwise deletion (using available data for each calculation), mean/median imputation, linear interpolation, spline interpolation, last-observation-carried-forward (LOCF), model-based imputation (Kalman filter, EM algorithm), and multiple imputation. The appropriate strategy depends on the mechanism of missingness (random vs. systematic), the proportion of missing data, and the intended use of the dataset.

For MES, interpolation methods work well for short gaps (less than 5x the sampling interval) in slowly changing parameters (temperature, pH). Model-based methods are appropriate for longer gaps in parameters with known dynamics (current during feeding cycles). For safety-critical parameters (H2, CH4 concentration), missing data should never be imputed but instead flagged and reported as measurement gaps.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Monitoring Control |
| **Subcategory** | Data Processing |
| **Type** | select |

## Typical Values

- **Acceptable missing data fraction**: less than 5% for research, less than 1% for regulatory
- **Maximum interpolatable gap**: 5-10x sampling interval for slow parameters
- **Short gap strategy**: Linear interpolation (less than 5 minutes)
- **Medium gap strategy**: Spline or model-based imputation (5 minutes - 1 hour)
- **Long gap strategy**: Mark as missing, do not impute (more than 1 hour)
- **Imputation uncertainty increase**: 10-50% increase in derived parameter uncertainty per 5% missing data

## Measurement Methods

- **Gap Detection and Characterization**: Automated gap detection algorithms scan time-series data for missing values, timestamp discontinuities, and flagged invalid readings. Gap statistics (frequency, duration, distribution, correlation with operating conditions) are compiled to identify systematic causes and prioritize remediation.
- **Imputation Accuracy Assessment**: Imputation methods are validated by artificially creating gaps in complete datasets (held-out validation) and comparing imputed values to actual values. Root mean square error (RMSE) and mean absolute percentage error (MAPE) quantify imputation accuracy. Multiple methods are compared to select the best approach for each parameter type.
- **Impact Analysis**: The sensitivity of derived calculations (coulombic efficiency, energy balance, treatment efficiency) to missing data is assessed by repeating calculations with different imputation strategies and comparing results. If conclusions change significantly with different handling methods, the missing data problem requires attention before proceeding with analysis.

## Affecting Factors

### Primary

- **Missingness mechanism**: Missing completely at random (MCAR) is handled well by most methods. Missing at random (MAR, dependent on observed variables) requires model-based imputation. Missing not at random (MNAR, e.g., sensor fails at extreme values) creates systematic bias that no imputation can fully correct.
- **Proportion missing**: Below 5% missing, most methods perform well. At 10-20% missing, method choice significantly affects results. Above 30% missing, imputation becomes unreliable and data collection improvements are needed.
- **Parameter dynamics**: Slowly changing parameters (temperature: 0.1 degrees C/hour) tolerate longer interpolation gaps than rapidly changing parameters (current: 10% variation per minute).
- **Correlation structure**: Parameters correlated with fully observed variables (e.g., current correlated with substrate concentration) enable multivariate imputation using the correlated parameter as a predictor.
- **Downstream use**: Control applications require real-time gap handling (LOCF or short interpolation). Research analysis can use sophisticated offline methods (EM algorithm, MICE). Regulatory reporting may prohibit imputation entirely.

## Compatible Systems

Data Acquisition

## References

- Little, R. J. A., & Rubin, D. B. (2019). *Statistical Analysis with Missing Data* (3rd ed.). Wiley.
- van Buuren, S. (2018). *Flexible Imputation of Missing Data* (2nd ed.). CRC Press.
- Schafer, J. L. (1997). *Analysis of Incomplete Multivariate Data*. CRC Press.
- USEPA (2002). *Guidance on Environmental Data Verification and Data Validation*. EPA QA/G-8.
- Honaker, J., King, G., & Blackwell, M. (2011). Amelia II: A program for missing data. *Journal of Statistical Software*, 45(7), 1-47.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Missing+Data+Handling&body=**Parameter%3A**+Missing+Data+Handling%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fmissing-data-handling.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Missing+Data+Handling&body=**Parameter%3A**+Missing+Data+Handling%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fmissing-data-handling.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Missing+Data+Handling&body=**Parameter%3A**+Missing+Data+Handling%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fmissing-data-handling.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
