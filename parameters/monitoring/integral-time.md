# Integral Time

Integral time (Ti, also called reset time) is the tuning parameter of the integral (I) component in PID controllers used for MES process control, expressed in seconds or minutes. The integral action accumulates the process error over time and applies a corrective signal proportional to this accumulated error, ensuring that the controlled variable eventually reaches the setpoint with zero steady-state offset. The integral contribution is (1/Ti) * integral of error(t) dt, where Ti determines how aggressively the controller eliminates steady-state error.

In MES control applications, integral action is essential for pH control (to maintain exact setpoint despite varying acid/base production rates), temperature control (to compensate for changing heat loads), and DO control (to maintain setpoint despite varying oxygen demand). Without integral action (P-only control), these loops would exhibit permanent steady-state offset proportional to the load disturbance magnitude divided by the proportional gain.

Short integral times (aggressive integral action) eliminate offset quickly but risk integral windup and oscillation. Long integral times (conservative) provide stable but slow offset elimination. The optimal Ti balances response speed against stability, typically set at 1-4 times the dominant process time constant.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Monitoring Control |
| **Subcategory** | PID Control |
| **Type** | number |
| **Unit** | s |
| **Minimum** | 0 |
| **Maximum** | 1000 |

## Typical Values

- **Valid Range**: 1 second - 10,000 seconds (0.017 - 167 minutes)
- **Typical Range for MES**: 10 - 3600 seconds
- **pH control (fast)**: 30-300 seconds
- **DO control**: 60-600 seconds
- **Temperature control**: 120-3600 seconds
- **Flow rate control**: 5-60 seconds
- **Level control**: 60-600 seconds
- **Typical Ti/process-time-constant ratio**: 1-4

## Measurement Methods

- **Process Step Response Tuning**: From the open-loop step response, process gain (K), time constant (T), and dead time (L) are identified. Tuning rules provide Ti: Ziegler-Nichols gives Ti = 2L; Cohen-Coon gives Ti = L*(32T+6L)/(13T+8L); IMC gives Ti = T for first-order-plus-dead-time processes. The step response is obtained by applying a manual step change to the manipulated variable.
- **Relay Auto-Tuning**: Relay feedback experiments determine the ultimate period Tu and ultimate gain Ku. Ti is calculated as Ti = Tu/2 (Ziegler-Nichols relay). Auto-tuning functions built into modern controllers automate this procedure.
- **Closed-Loop Optimization**: Ti is optimized alongside Kp and Td to minimize performance criteria (ISE, ITAE, IAE) subject to robustness constraints. Simulation-based optimization using MES process models enables safe exploration of the tuning parameter space.

## Affecting Factors

### Primary

- **Process dynamics**: Processes with long time constants require long Ti to avoid oscillation. Fast processes (flow, pressure) use short Ti. The guideline Ti approximately equal to T (dominant time constant) provides a starting point.
- **Dead time**: Processes with significant dead time (L) require longer Ti to maintain stability. The ratio L/T determines how conservative the integral action must be.
- **Disturbance magnitude**: Large, frequent disturbances benefit from shorter Ti for faster disturbance rejection. Small, infrequent disturbances allow longer Ti for smoother control.
- **Integral windup**: When the manipulated variable saturates (pump at maximum, valve fully open), continued error integration causes windup that produces large overshoot when the constraint is released. Anti-windup mechanisms (clamping, back-calculation, conditional integration) mitigate this issue.
- **Interaction with proportional gain**: Ti and Kp interact through the overall loop dynamics. Increasing Kp allows longer Ti (less integral action needed) and vice versa. Balanced tuning considers both parameters together.

## Compatible Systems

Control Algorithms

## References

- Astrom, K. J., & Hagglund, T. (2006). *Advanced PID Control*. ISA.
- Seborg, D. E., et al. (2016). *Process Dynamics and Control* (4th ed.). Wiley.
- O'Dwyer, A. (2009). *Handbook of PI and PID Controller Tuning Rules* (3rd ed.). Imperial College Press.
- Boghani, H. C., et al. (2014). Controlling for maximum power from microbial fuel cells. *Bioresource Technology*, 152, 270-276.
- Astrom, K. J., & Murray, R. M. (2021). *Feedback Systems* (2nd ed.). Princeton University Press.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Integral+Time&body=**Parameter%3A**+Integral+Time%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fintegral-time.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Integral+Time&body=**Parameter%3A**+Integral+Time%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fintegral-time.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Integral+Time&body=**Parameter%3A**+Integral+Time%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fintegral-time.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
