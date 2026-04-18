# Derivative Time

Derivative time (Td) is the tuning parameter of the derivative (D) component in PID controllers used for microbial electrochemical system (MES) process control, expressed in seconds or minutes. The derivative action computes the rate of change of the process error and applies a corrective signal proportional to this rate, providing predictive control that anticipates future error based on current trends. In the standard PID algorithm, the derivative contribution is Td * d(error)/dt, where Td determines how far into the future the controller effectively "looks" to predict process behavior.

In MES control applications, derivative action serves to dampen oscillatory responses and reduce overshoot in control loops for pH, dissolved oxygen, temperature, and flow rate. Without derivative action (PD control reduces to PI control), these loops may exhibit sustained oscillations or excessive overshoot, particularly in processes with significant dead time (transport delay) or when aggressive proportional and integral settings are used. With appropriate derivative tuning, overshoot can be reduced by 30-60% and settling time by 20-40% compared to PI-only control.

However, derivative action amplifies high-frequency measurement noise, creating noisy control output that causes actuator wear and process disturbance. This noise sensitivity is the primary reason that derivative action is often disabled (Td = 0) in MES applications where sensors are noisy (pH electrodes in wastewater, DO sensors with bubble interference). When derivative action is used, a derivative filter (first-order lag with time constant Td/N, where N = 5-20) attenuates noise while preserving the derivative response to genuine process changes.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Monitoring Control |
| **Subcategory** | PID Control |
| **Type** | number |
| **Unit** | s |
| **Minimum** | 0 |
| **Maximum** | 100 |

## Typical Values

- **Valid Range**: 0 - 600 seconds
- **Typical Range for MES**: 0 - 60 seconds
- **pH control**: 0-10 seconds (often disabled due to noise)
- **DO control**: 0-15 seconds
- **Temperature control**: 10-120 seconds
- **Flow rate control**: 0-5 seconds (usually disabled)
- **Derivative filter coefficient (N)**: 5-20
- **Typical Td/Ti ratio**: 0.1-0.25 (when derivative is used)
- **Disabled (PI control only)**: Td = 0

## Measurement Methods

- **Step Response Tuning**: The derivative time is determined from the open-loop step response of the MES process. Using Ziegler-Nichols, Cohen-Coon, or ITAE tuning rules, Td is calculated from the process dead time (L) and time constant (T): typically Td = 0.3-0.5 * L for quarter-decay response. The step response is obtained by applying a manual step change to the manipulated variable and recording the process variable response with appropriate time resolution.
- **Relay Auto-Tuning**: Relay auto-tuning methods (Astrom-Hagglund) oscillate the process around the setpoint using relay (on/off) control, measuring the oscillation period (Tu) and amplitude. PID parameters including Td are computed from these measurements: Td = Tu/8 (Ziegler-Nichols relay method). Modern MES controllers (ABB, Siemens, Yokogawa) include built-in relay auto-tuning functions.
- **Closed-Loop Optimization**: Software tools (MATLAB PID Tuner, Python control library) optimize Td along with Kp and Ti to minimize a performance criterion (ISE, ITAE) subject to robustness constraints (gain margin more than 6 dB, phase margin more than 45 degrees). Simulation-based optimization using the MES process model enables safe tuning exploration without disturbing the live process.

## Affecting Factors

### Primary

- **Measurement noise**: Derivative action amplifies noise by a factor proportional to Td * noise_frequency. Sensors with high noise levels (pH in wastewater: 0.05-0.2 pH noise, DO with bubble interference: 0.1-1 mg/L noise) require either derivative filtering (N=5-10) or derivative disabling (Td=0). Pre-filtering sensor signals with moving average or low-pass filters before the PID calculation allows use of derivative action on noisy signals.
- **Process dead time**: Processes with significant dead time (transport delay through piping, sensor response time) benefit from derivative action, which partially compensates for the delay by acting on the error rate of change. The ratio L/T (dead time to time constant) determines derivative benefit: for L/T less than 0.2, derivative provides minimal benefit; for L/T more than 0.3, derivative significantly improves performance.
- **Sampling rate**: The derivative calculation d(error)/dt is computed as a finite difference, requiring sampling fast enough to accurately represent the error rate of change. The sampling interval should be at most Td/5 for adequate derivative representation. Too-slow sampling creates aliasing that makes derivative action erratic and counterproductive.
- **Actuator limitations**: Derivative action produces rapid control signal changes that may exceed actuator slew rate (rate of change capability). Chemical dosing pumps with maximum flow rate change of 10%/second cannot follow derivative-generated demands for 50%/second changes. Actuator rate limiting effectively negates the derivative benefit and may cause windup.
- **Interaction with integral action**: Derivative time and integral time interact through the overall PID response. The ratio Td/Ti determines the frequency response shape: classical tuning rules suggest Td/Ti = 0.1-0.25 for balanced performance. Td more than Ti/2 creates aggressive high-frequency response that may destabilize the loop.

## Compatible Systems

Control Algorithms

## References

- Astrom, K. J., & Hagglund, T. (2006). *Advanced PID Control*. ISA.
- Seborg, D. E., et al. (2016). *Process Dynamics and Control* (4th ed.). Wiley.
- Astrom, K. J., & Murray, R. M. (2021). *Feedback Systems* (2nd ed.). Princeton University Press.
- O'Dwyer, A. (2009). *Handbook of PI and PID Controller Tuning Rules* (3rd ed.). Imperial College Press.
- Boghani, H. C., et al. (2014). Controlling for maximum power from microbial fuel cells. *Bioresource Technology*, 152, 270-276.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Derivative+Time&body=**Parameter%3A**+Derivative+Time%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fderivative-time.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Derivative+Time&body=**Parameter%3A**+Derivative+Time%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fderivative-time.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Derivative+Time&body=**Parameter%3A**+Derivative+Time%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fderivative-time.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
