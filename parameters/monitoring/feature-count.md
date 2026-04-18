# Feature Count

Feature count specifies the number of input variables (features) used in machine learning models for MES performance prediction, fault detection, and process optimization. Each feature represents a distinct measurable or derived parameter (voltage, current, pH, temperature, substrate concentration, flow rate, biofilm age, etc.) that the ML model uses to learn patterns and make predictions. The feature count directly affects model complexity, training data requirements, computational cost, and the risk of overfitting versus underfitting.

In MES machine learning applications, raw features typically include all monitored process variables (10-50 parameters), which may be augmented with engineered features (ratios, derivatives, moving averages, Fourier coefficients) and lagged values (time-delayed copies capturing temporal dynamics), potentially expanding the feature space to 50-500 dimensions. Feature selection and dimensionality reduction techniques identify the most informative subset, typically reducing the effective feature count to 5-30 for well-performing MES models.

The curse of dimensionality means that high feature counts require exponentially more training data for reliable model fitting. As a rule of thumb, the training dataset should contain at least 10-50 samples per feature for linear models and 50-200 per feature for nonlinear models. An MES dataset with 30 features therefore requires 300-6000 training samples for reliable model development.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Monitoring Control |
| **Subcategory** | Machine Learning Parameters |
| **Type** | number |
| **Minimum** | 1 |
| **Maximum** | 100 |

## Typical Values

- **Valid Range**: 1 - 10,000 features
- **Typical Range for MES models**: 5 - 100 features
- **Raw process variables**: 10-50 features
- **With engineered features**: 30-200 features
- **After feature selection**: 5-30 features
- **Deep learning models**: 50-500 features (raw + derived)
- **Simple regression models**: 3-10 features
- **Principal components retained**: 3-10 (explaining more than 90% variance)
- **Optimal features/samples ratio**: 1:10 to 1:50

## Measurement Methods

- **Feature Importance Ranking**: Random forest, gradient boosting, and permutation importance methods rank features by their contribution to model accuracy. Features with importance scores below a threshold (e.g., less than 1% of total importance) are candidates for removal. SHAP (SHapley Additive exPlanations) values provide model-agnostic feature importance with theoretical grounding.
- **Correlation and Redundancy Analysis**: Pearson/Spearman correlation matrices identify highly correlated feature pairs (|r| more than 0.9) where one can be removed without information loss. Variance inflation factor (VIF) analysis detects multicollinearity in regression models. Mutual information quantifies nonlinear dependencies between features and the target variable.
- **Cross-Validated Feature Selection**: Forward selection (adding features), backward elimination (removing features), or recursive feature elimination (RFE) with cross-validation identifies the optimal feature subset that maximizes prediction accuracy on held-out data. The elbow point in the accuracy-vs-feature-count curve indicates where additional features provide diminishing returns.

## Affecting Factors

### Primary

- **Training data availability**: Limited MES datasets (less than 500 samples from months of operation) constrain useful feature count to 5-20. Large datasets from multi-year operations or multiple MES installations support 30-100+ features.
- **Model type**: Linear models (regression, PLS) require fewer features for stability. Tree-based models (Random Forest, XGBoost) handle high feature counts with built-in feature selection. Neural networks can utilize hundreds of features but require correspondingly large training datasets.
- **Feature quality**: Noisy, poorly calibrated, or intermittently missing features degrade model performance more than their information contributes. Feature quality assessment should precede model development.
- **Domain knowledge**: Expert knowledge of MES processes guides feature engineering and selection, often outperforming purely statistical approaches. Physically meaningful features (CE, internal resistance, substrate removal rate) typically outperform raw sensor readings.
- **Computational constraints**: Real-time prediction models must compute within the control interval. Each additional feature adds computation for data collection, preprocessing, and model evaluation.

## Compatible Systems

Ai Ml Integration

## References

- Guyon, I., & Elisseeff, A. (2003). An introduction to variable and feature selection. *Journal of Machine Learning Research*, 3, 1157-1182.
- Hastie, T., Tibshirani, R., & Friedman, J. (2009). *The Elements of Statistical Learning* (2nd ed.). Springer.
- Lesnik, K. L., & Liu, H. (2017). Predicting microbial fuel cell biofilm communities and bioreactor performance using artificial neural networks. *Environmental Science & Technology*, 51(18), 10881-10892.
- Jadhav, D. A., et al. (2021). Artificial intelligence approaches for prediction of performance of MES. *Bioresource Technology*, 338, 125505.
- Pedregosa, F., et al. (2011). Scikit-learn: Machine learning in Python. *Journal of Machine Learning Research*, 12, 2825-2830.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Feature+Count&body=**Parameter%3A**+Feature+Count%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Ffeature-count.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Feature+Count&body=**Parameter%3A**+Feature+Count%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Ffeature-count.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Feature+Count&body=**Parameter%3A**+Feature+Count%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Ffeature-count.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
