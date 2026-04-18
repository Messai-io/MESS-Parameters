# Control Horizon

Control horizon defines the number of future control actions computed by a model predictive control (MPC) algorithm in each optimization cycle for microbial electrochemical system (MES) operation. This parameter is central to advanced process control strategies that optimize MES performance by predicting future system behavior and computing optimal control actions (external resistance adjustment, feed rate modulation, aeration control, applied voltage) over a finite future time window.

In MPC-based MES control, the controller solves an optimization problem at each time step: minimize a cost function (e.g., maximize power output, minimize energy input) subject to constraints (voltage limits, current limits, pH bounds) over a prediction horizon of N_p steps, while optimizing control actions over a shorter control horizon of N_c steps. Only the first computed control action is implemented; the optimization is then repeated with updated measurements (receding horizon strategy).

The control horizon determines the degrees of freedom available to the optimizer and significantly affects both control performance and computational cost. A control horizon of 1 provides simple single-step control, while 3-10 steps enables coordinated multi-step strategies. Each additional step adds decision variables, increasing computation time significantly for nonlinear MES models.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Monitoring Control |
| **Subcategory** | Advanced Control |
| **Type** | number |
| **Unit** | steps |
| **Minimum** | 1 |
| **Maximum** | 50 |

## Typical Values

- **Valid Range**: 1 - 100 control steps
- **Typical Range for MES MPC**: 3 - 20 steps
- **Simple regulatory control**: 1-3 steps
- **Performance optimization**: 5-15 steps
- **Batch operation**: 10-50 steps
- **Control interval**: 1-60 minutes typical
- **Effective time horizon**: 30 minutes - 24 hours

## Measurement Methods

- **Controller Configuration and Tuning**: The control horizon is configured as a tuning parameter in MPC controller software (MATLAB MPC Toolbox, Python do-mpc, CasADi). The optimal value is determined through simulation studies comparing closed-loop performance metrics across different horizon values. Sensitivity analysis identifies the minimum control horizon achieving acceptable performance.
- **Closed-Loop Performance Assessment**: Effectiveness is assessed through integral of absolute error (IAE), control signal variation, constraint satisfaction rate, and economic performance index. These metrics are compared between different settings during commissioning.
- **Computational Timing Analysis**: Real-time execution requires optimization completion within one control interval. Computation time scales as O(N_c^2) for linear MPC and O(N_c^3) for nonlinear MPC. If computation exceeds 50% of the control interval, the horizon should be reduced or model simplified.

## Affecting Factors

### Primary

- **System time constants**: The control horizon should span 1-2 dominant time constants. Electrochemical dynamics are fast (0.1-10 seconds), biological dynamics slow (hours to weeks), and hydraulic dynamics intermediate (HRT: hours). A horizon covering 2-5 HRTs with 5-30 minute control intervals captures hydraulic dynamics while remaining computationally tractable.
- **Model accuracy**: Longer horizons require accurate predictions further into the future. MES models with parameter uncertainty produce unreliable predictions beyond a certain point, limiting useful horizon length.
- **Constraint handling**: Systems with active constraints benefit from longer horizons that anticipate constraint boundaries and plan smooth approach trajectories.
- **Computational resources**: Each additional step adds variables proportional to the number of manipulated inputs. For 3 inputs and horizon of 10, the optimizer handles 30 decision variables.
- **Disturbance characteristics**: Frequent unpredictable disturbances reduce benefits of long horizons. Predictable disturbances (diurnal patterns) favor longer horizons incorporating the forecast.

## Compatible Systems

Control Algorithms

## References

- Rawlings, J. B., Mayne, D. Q., & Diehl, M. (2017). *Model Predictive Control: Theory, Computation, and Design*. Nob Hill Publishing.
- Camacho, E. F., & Bordons, C. (2007). *Model Predictive Control* (2nd ed.). Springer.
- Patel, R., et al. (2021). Model predictive control for microbial fuel cells. *Renewable and Sustainable Energy Reviews*, 145, 111157.
- Hernandez-Ramirez, J., et al. (2019). Nonlinear model predictive control of wastewater treatment processes. *Chemical Engineering Journal*, 372, 1-15.
- Olias, L. G., & Di Lorenzo, M. (2021). Microbial fuel cells for in-field water quality monitoring. *RSC Advances*, 11, 16307-16317.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Control+Horizon&body=**Parameter%3A**+Control+Horizon%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fcontrol-horizon.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Control+Horizon&body=**Parameter%3A**+Control+Horizon%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fcontrol-horizon.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Control+Horizon&body=**Parameter%3A**+Control+Horizon%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fcontrol-horizon.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
