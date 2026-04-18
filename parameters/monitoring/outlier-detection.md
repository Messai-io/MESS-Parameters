# Outlier Detection

Outlier detection specifies the statistical and algorithmic methods used to identify anomalous data points in MES monitoring datasets that deviate significantly from expected patterns. Outliers in MES data arise from sensor malfunctions (stuck sensors, calibration errors), measurement artifacts (electrical spikes, communication corruption), genuine process events (short circuits, biofilm detachment, substrate depletion), and data processing errors. Distinguishing between artifact outliers (to be removed) and genuine process outliers (containing valuable diagnostic information) is the central challenge.

Common outlier detection methods include: z-score threshold (flag values more than 3 sigma from mean), modified z-score (using median absolute deviation, robust to existing outliers), Grubbs' test, interquartile range (IQR) method, isolation forest (tree-based anomaly detection), local outlier factor (LOF, density-based), DBSCAN clustering, and autoencoder reconstruction error (neural network-based). The choice depends on data dimensionality, distribution assumptions, and the types of outliers expected.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Monitoring Control |
| **Subcategory** | Data Processing |
| **Type** | select |

## Typical Values

- **Z-score threshold**: 3-4 sigma (99.7-99.99% inclusion)
- **Modified z-score threshold**: 3.5 (recommended by NIST)
- **IQR multiplier**: 1.5 (standard) to 3.0 (extreme outliers only)
- **Isolation forest contamination parameter**: 0.01-0.10 (expected outlier fraction)
- **LOF neighbors**: 5-50 (20 typical)
- **Expected outlier fraction in MES data**: 0.1-5%
- **False positive target**: less than 1% of valid data flagged

## Measurement Methods

- **Univariate Statistical Methods**: Individual parameters are tested against their expected statistical distribution. Z-score methods assume normality; IQR methods are distribution-free. Moving-window statistics (mean, standard deviation calculated over recent 50-1000 points) adapt to changing process conditions, preventing false positives during normal process transitions.
- **Multivariate Methods**: Principal component analysis (PCA), Mahalanobis distance, and Hotelling's T-squared test detect multivariate outliers that appear normal in individual variables but represent unusual combinations. For example, high current with low substrate concentration might be individually normal but together constitute an anomaly indicating a sensor error.
- **Machine Learning Anomaly Detection**: Unsupervised learning methods (isolation forest, one-class SVM, autoencoder) learn the normal data distribution from historical MES data and flag new observations that fall outside the learned boundary. These methods capture complex, high-dimensional patterns that statistical methods miss. Autoencoders are particularly effective: high reconstruction error on a new data point indicates it differs from the patterns learned during training.

## Affecting Factors

### Primary

- **Data distribution**: Non-Gaussian MES data (skewed pH distributions, bimodal current patterns during batch feeding) violate assumptions of z-score methods. Distribution-free methods (IQR, isolation forest) are more appropriate.
- **Detection sensitivity**: Strict thresholds (2 sigma) detect more outliers but increase false positives. Lenient thresholds (4 sigma) miss subtle anomalies. Adaptive thresholds based on recent data statistics balance sensitivity and specificity.
- **Temporal context**: Values that are normal in steady-state may be outliers during startup, and vice versa. Context-aware outlier detection uses operating mode information and time-of-day patterns to adjust expected ranges.
- **Dimensionality**: With many parameters, the probability of at least one parameter exceeding its threshold increases (multiple testing problem). Bonferroni correction or multivariate methods address this.
- **Outlier masking**: Multiple outliers can shift the estimated mean and standard deviation, causing other outliers to appear normal (masking effect). Robust statistics (median, MAD) are resistant to masking.

## Compatible Systems

Data Acquisition

## References

- Chandola, V., Banerjee, A., & Kumar, V. (2009). Anomaly detection: A survey. *ACM Computing Surveys*, 41(3), 1-58.
- Liu, F. T., Ting, K. M., & Zhou, Z.-H. (2008). Isolation forest. *Proceedings of the IEEE ICDM*, 413-422.
- Breunig, M. M., et al. (2000). LOF: Identifying density-based local outliers. *ACM SIGMOD Record*, 29(2), 93-104.
- Hawkins, D. M. (1980). *Identification of Outliers*. Chapman and Hall.
- Montgomery, D. C. (2013). *Introduction to Statistical Quality Control* (7th ed.). Wiley.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Outlier+Detection&body=**Parameter%3A**+Outlier+Detection%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Foutlier-detection.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Outlier+Detection&body=**Parameter%3A**+Outlier+Detection%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Foutlier-detection.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Outlier+Detection&body=**Parameter%3A**+Outlier+Detection%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Foutlier-detection.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
