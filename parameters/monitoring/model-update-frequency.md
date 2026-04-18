# Model Update Frequency

Model update frequency specifies how often predictive models (soft sensors, digital twins, MPC process models) used in MES monitoring and control are retrained or recalibrated with new operational data. MES processes exhibit time-varying behavior due to biofilm aging, community succession, electrode degradation, and seasonal temperature changes, causing model prediction accuracy to degrade over time if models are not updated. The update frequency must balance maintaining model accuracy against computational cost and the risk of overfitting to transient conditions.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Monitoring Control |
| **Subcategory** | Advanced Control |
| **Type** | number |
| **Unit** | h |
| **Minimum** | 0.1 |
| **Maximum** | 168 |

## Typical Values

- **Valid Range**: Continuous (online learning) to annual
- **Typical Range**: Weekly to monthly
- **Online adaptive models**: Continuous (every control interval)
- **Soft sensor recalibration**: Weekly to monthly
- **Digital twin update**: Monthly to quarterly
- **MPC model reidentification**: Monthly to quarterly
- **ML model retraining**: Monthly to quarterly with new data
- **Trigger-based updates**: When performance degrades below threshold

## Measurement Methods

- **Model Performance Monitoring**: Tracking prediction residuals (difference between model output and actual measurements) over time detects performance degradation. Statistical process control charts on residuals trigger model updates when residuals exceed control limits. Cumulative sum (CUSUM) charts detect gradual drift.
- **Scheduled vs Triggered Updates**: Scheduled updates occur at fixed intervals regardless of performance. Triggered updates occur only when performance metrics degrade below thresholds. Triggered updates are more efficient but require robust performance monitoring.

## Affecting Factors

### Primary

- **Process stationarity**: Rapidly changing MES (startup, community transitions) require frequent updates (daily to weekly). Stable mature systems require infrequent updates (monthly to quarterly).
- **Model type**: Adaptive models (recursive least squares, online gradient descent) update continuously. Batch models (random forest, neural network) require periodic retraining with accumulated new data.
- **Computational cost**: Retraining complex deep learning models may require hours of GPU computation. Simple linear models retrain in seconds. Computational availability determines feasible update frequency.
- **Data accumulation rate**: Sufficient new data must accumulate between updates to meaningfully improve the model. Retraining with only a few new data points (less than 10% of training set) provides negligible improvement.
- **Concept drift detection**: Statistical tests (Page-Hinkley, ADWIN) detect changes in the data distribution that signal model obsolescence, enabling efficient triggered updates.

## Compatible Systems

Control Algorithms

## References

- Gama, J., et al. (2014). A survey on concept drift adaptation. *ACM Computing Surveys*, 46(4), 1-37.
- Kadlec, P., Gabrys, B., & Strandt, S. (2009). Data-driven soft sensors in the process industry. *Computers & Chemical Engineering*, 33(4), 795-814.
- Lesnik, K. L., & Liu, H. (2017). Predicting microbial fuel cell biofilm communities using artificial neural networks. *Environmental Science & Technology*, 51(18), 10881-10892.
- Bifet, A., & Gavalda, R. (2007). Learning from time-changing data with adaptive windowing. *Proceedings of the 2007 SIAM International Conference on Data Mining*, 443-448.
- Jadhav, D. A., et al. (2021). Artificial intelligence approaches for prediction of performance of MES. *Bioresource Technology*, 338, 125505.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Model+Update+Frequency&body=**Parameter%3A**+Model+Update+Frequency%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fmodel-update-frequency.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Model+Update+Frequency&body=**Parameter%3A**+Model+Update+Frequency%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fmodel-update-frequency.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Model+Update+Frequency&body=**Parameter%3A**+Model+Update+Frequency%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fmodel-update-frequency.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
