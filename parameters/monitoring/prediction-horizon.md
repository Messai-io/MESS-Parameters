# Prediction Horizon

Prediction horizon defines the future time window over which MES models forecast system behavior, expressed as the number of time steps or absolute time duration. In model predictive control (MPC), the prediction horizon (Np) determines how far ahead the controller anticipates process evolution when computing optimal control actions. Longer horizons enable more proactive control but require accurate long-range predictions and increase computational cost.

For MES, the prediction horizon should cover the longest relevant process dynamic. For hydraulic control (flow, level), 2-5 HRTs is typical. For biological dynamics (biofilm activity response), 1-3 days may be needed. For electrochemical transients, minutes to hours suffice. The prediction horizon is always equal to or longer than the control horizon.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Monitoring Control |
| **Subcategory** | Advanced Control |
| **Type** | number |
| **Unit** | steps |
| **Minimum** | 1 |
| **Maximum** | 100 |

## Typical Values

- **Valid Range**: 1 step to 1000+ steps
- **Typical MES MPC**: 10-100 steps
- **Electrochemical control**: 10-60 minutes
- **Hydraulic control**: 1-24 hours (2-5 HRT)
- **Biological process**: 1-7 days
- **Soft sensor prediction**: 1-24 hours ahead
- **Maintenance prediction**: 1-30 days ahead
- **Typical Np/Nc ratio**: 2-10 (prediction/control horizon)

## Measurement Methods

- **Prediction Accuracy vs Horizon Analysis**: Model prediction accuracy (RMSE, MAPE) is evaluated as a function of prediction horizon by forecasting 1, 2, 5, 10, etc. steps ahead and comparing with actual values. The horizon at which accuracy degrades below useful levels determines the maximum practical prediction horizon.
- **Cross-Validation with Temporal Split**: Time-series cross-validation with expanding or sliding windows tests prediction accuracy at various horizons using historical data. This avoids the optimistic bias of random cross-validation for temporal data.

## Affecting Factors

### Primary

- **Model accuracy**: Prediction error accumulates with horizon length. Models with 5% one-step error may have 20-50% error at 10-step horizon due to error propagation in recursive predictions.
- **Process predictability**: Deterministic processes (temperature response to heating) are predictable over long horizons. Stochastic processes (microbial community shifts, influent composition) limit useful prediction horizons to hours or days.
- **Disturbance forecasting**: If future disturbances are predictable (diurnal temperature pattern, scheduled feeding), longer prediction horizons are useful. Unpredictable disturbances limit useful horizon to the disturbance correlation time.
- **Computational cost**: Each additional prediction step adds one set of model evaluations to the optimization. Nonlinear models with long horizons may exceed real-time computation budgets.
- **Stability and constraint handling**: Longer prediction horizons improve closed-loop stability and enable anticipatory constraint handling but require terminal constraints or penalties to prevent the optimizer from exploiting inaccurate long-range predictions.

## Compatible Systems

Control Algorithms

## References

- Rawlings, J. B., et al. (2017). *Model Predictive Control*. Nob Hill Publishing.
- Camacho, E. F., & Bordons, C. (2007). *Model Predictive Control* (2nd ed.). Springer.
- Patel, R., et al. (2021). Model predictive control for microbial fuel cells. *Renewable and Sustainable Energy Reviews*, 145, 111157.
- Hyndman, R. J., & Athanasopoulos, G. (2021). *Forecasting: Principles and Practice* (3rd ed.). OTexts.
- Seborg, D. E., et al. (2016). *Process Dynamics and Control* (4th ed.). Wiley.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Prediction+Horizon&body=**Parameter%3A**+Prediction+Horizon%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fprediction-horizon.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Prediction+Horizon&body=**Parameter%3A**+Prediction+Horizon%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fprediction-horizon.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Prediction+Horizon&body=**Parameter%3A**+Prediction+Horizon%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fprediction-horizon.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
