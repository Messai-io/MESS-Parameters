# Data Validation

Data validation encompasses the systematic procedures for verifying the accuracy, completeness, consistency, and plausibility of monitoring data collected from microbial electrochemical systems (MES). Validation ensures that the data used for process control decisions, performance calculations, regulatory reporting, and scientific analysis faithfully represents actual system conditions rather than measurement artifacts, sensor malfunctions, or data transmission errors. Without rigorous data validation, erroneous data can propagate through control algorithms causing inappropriate actions, or contaminate research datasets leading to incorrect conclusions.

MES data validation operates at multiple levels: sensor-level validation checks individual measurements against physical limits and rate-of-change constraints; cross-validation compares related measurements for consistency (e.g., power = voltage x current); temporal validation identifies discontinuities, gaps, and suspicious patterns in time series; and statistical validation detects outliers, drift, and distributional anomalies. Automated validation routines flag suspicious data in real-time, enabling immediate investigation and correction before invalid data affects control decisions or accumulates in the historical record.

Common MES data quality issues include sensor drift (gradual calibration shift), fouling artifacts (biofilm on pH/DO sensors creating offset), electrical noise (pump interference on voltage measurements), communication errors (dropped packets, corrupted values), stuck sensors (constant reading from failed sensor), and range violations (readings beyond physical possibility). A comprehensive validation framework addresses all these failure modes through a combination of rule-based checks, statistical methods, and redundancy-based cross-validation.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Monitoring Control |
| **Subcategory** | Data Processing |
| **Type** | boolean |

## Typical Values

- **Range check**: Flag data outside physical limits (e.g., pH not 0-14, voltage not -2 to +2 V)
- **Rate of change check**: Flag changes exceeding physical maximum (e.g., temperature change more than 5 degrees C/minute)
- **Stuck sensor detection**: Flag constant reading for more than 5-10 consecutive samples
- **Outlier detection**: Flag values more than 3-4 standard deviations from moving average
- **Cross-validation tolerance**: Related parameters should agree within 5-20%
- **Data completeness target**: more than 95% valid data for research, more than 99% for regulatory
- **Validation latency**: Real-time (less than 1 second) to batch (daily review)
- **False positive rate target**: less than 1% of valid data incorrectly flagged

## Measurement Methods

- **Rule-Based Validation**: Deterministic rules check each data point against predefined criteria: physical range limits, maximum rate of change, minimum variability (stuck sensor), and cross-parameter consistency. Rules are encoded in the data acquisition software or PLC logic and execute in real-time. Each validation check returns a quality flag (good, suspect, bad) stored alongside the data value. Rule thresholds are calibrated from normal operating data to minimize false positives while catching genuine errors.
- **Statistical Validation**: Statistical methods detect anomalies that pass rule-based checks: moving average deviation, exponentially weighted moving average (EWMA) control charts, principal component analysis (PCA) for multivariate anomaly detection, and autoregressive model residual analysis. These methods adapt to normal process variation and detect subtle drift or correlation changes that fixed-threshold rules miss. Training on 1-4 weeks of validated normal operation data establishes the statistical baseline.
- **Redundancy-Based Validation**: Redundant sensors measuring the same parameter enable direct comparison for validation. If two pH sensors read 7.0 and 7.1 but a third reads 5.2, the outlier is identified with high confidence. Soft sensors (mathematical models estimating parameters from other measurements) provide virtual redundancy: estimated current from substrate consumption rate and coulombic efficiency model validates measured current. Discrepancies exceeding model uncertainty indicate either sensor error or model inadequacy.

## Affecting Factors

### Primary

- **Sensor quality and calibration**: Higher-quality sensors with better stability and accuracy produce fewer validation failures. Regular calibration (weekly to monthly depending on sensor type) reduces drift-related validation issues. Pre-calibration validation checks (testing sensor response to known standards) confirm sensor fitness before deployment.
- **Data acquisition system reliability**: Communication errors, timing jitter, buffer overflows, and ADC nonlinearity in the data acquisition system introduce errors that may not be detectable by single-point validation. System-level validation (timestamp continuity, checksum verification, sequence number tracking) addresses these infrastructure-level issues.
- **Process variability**: Highly variable MES processes (batch feeding, intermittent operation) produce data with wide normal ranges, making it difficult to distinguish genuine process variation from sensor errors. Adaptive validation thresholds that adjust based on operating mode and recent history improve discrimination.
- **Validation rule maintenance**: As MES operating conditions evolve (biofilm maturation, seasonal temperature changes, substrate changes), validation rules must be updated to reflect the current normal operating envelope. Static rules calibrated at startup may generate excessive false alarms or miss genuine errors as the system changes.
- **Data volume and latency**: Real-time validation of high-frequency data (1000+ points/second across 100+ channels) requires efficient algorithms and adequate computing resources. Batch validation of accumulated data can apply more sophisticated methods but delays error detection. A tiered approach applies fast simple checks in real-time and complex statistical checks in periodic batch processing.

## Compatible Systems

Data Acquisition

## References

- USEPA (2002). *Guidance on Environmental Data Verification and Data Validation*. EPA QA/G-8.
- APHA (2017). *Standard Methods for the Examination of Water and Wastewater* (23rd ed.).
- Chandola, V., Banerjee, A., & Kumar, V. (2009). Anomaly detection: A survey. *ACM Computing Surveys*, 41(3), 1-58.
- Montgomery, D. C. (2013). *Introduction to Statistical Quality Control* (7th ed.). Wiley.
- Boyer, S. A. (2010). *SCADA: Supervisory Control and Data Acquisition* (4th ed.). ISA.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Data+Validation&body=**Parameter%3A**+Data+Validation%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fdata-validation.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Data+Validation&body=**Parameter%3A**+Data+Validation%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fdata-validation.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Data+Validation&body=**Parameter%3A**+Data+Validation%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fdata-validation.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
