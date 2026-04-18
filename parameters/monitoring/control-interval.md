# Control Interval

Control interval specifies the time period between successive control action updates in microbial electrochemical system (MES) automation, expressed in seconds, minutes, or hours. This parameter determines how frequently the control system evaluates sensor measurements, computes new setpoints or manipulated variable values, and issues commands to actuators (pumps, valves, potentiostats, relays). The control interval must be short enough to respond to process disturbances before they cause unacceptable deviations, yet long enough to allow meaningful measurement updates and avoid excessive actuator cycling.

In MES, different process variables have vastly different time constants, creating a multi-rate control challenge. Electrochemical parameters (cell voltage, electrode potential) respond to perturbations within seconds, requiring control intervals of 1-10 seconds for tight regulation. Hydraulic parameters (flow rate, liquid level) change over minutes, suitable for 10-60 second control intervals. Biological parameters (biofilm activity, community composition) evolve over hours to days, requiring control intervals of 10-60 minutes for feed rate and environmental condition adjustments. A well-designed MES control system implements multiple control loops operating at different intervals matched to their respective process dynamics.

The control interval also determines the minimum detectable process deviation and the maximum disturbance rejection bandwidth. According to the Nyquist theorem, disturbances with frequencies above 1/(2*control_interval) cannot be detected or rejected. A 60-second control interval can only address disturbances with periods longer than 120 seconds, allowing faster disturbances to propagate through the system uncorrected. For MES applications where rapid electrochemical transients (seconds) and slow biological trends (days) coexist, hierarchical control with multiple intervals provides comprehensive coverage.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Monitoring Control |
| **Subcategory** | PID Control |
| **Type** | number |
| **Unit** | s |
| **Minimum** | 0.1 |
| **Maximum** | 100 |

## Typical Values

- **Valid Range**: 0.001 seconds - 24 hours
- **Typical Range for MES**: 1 second - 60 minutes
- **Potentiostat control (electrode potential)**: 0.001-1 seconds
- **Voltage/current monitoring**: 1-10 seconds
- **pH control (acid/base dosing)**: 10-60 seconds
- **DO control (aeration)**: 10-60 seconds
- **Feed rate control**: 1-30 minutes
- **Temperature control**: 1-10 minutes
- **Biofilm management cycles**: 1-24 hours

## Measurement Methods

- **PLC/Controller Scan Time Verification**: The actual control interval is verified by measuring the time between successive control output updates using oscilloscope monitoring of analog output signals or digital output timestamps logged by the controller. Jitter (variation in control interval) should be less than 5% of the nominal interval for deterministic control performance. Real-time operating systems (RTOS) and dedicated PLCs provide sub-millisecond timing determinism, while general-purpose computers (Windows, Linux) may exhibit 10-100 ms jitter.
- **Control Loop Performance Assessment**: Control interval adequacy is assessed through closed-loop step response testing: a known disturbance is applied and the controller's ability to reject it within acceptable time and deviation limits is measured. If the response shows excessive overshoot, oscillation, or slow recovery, the control interval may be too long (for fast processes) or too short (causing measurement noise amplification).
- **Nyquist Analysis**: Frequency-domain analysis of the open-loop process transfer function identifies the bandwidth of disturbances that the control system can reject. The control interval must satisfy the Nyquist criterion: control_interval less than 1/(2*f_max), where f_max is the highest-frequency disturbance to be controlled. For MES electrochemical control (f_max approximately 0.1 Hz), the control interval should be less than 5 seconds.

## Affecting Factors

### Primary

- **Process dynamics**: Fast processes (electrochemical, gas-phase) require short intervals. The control interval should be 5-10x shorter than the process time constant for effective disturbance rejection. MES electrochemical time constants of 1-100 seconds suggest control intervals of 0.1-10 seconds for voltage/current control.
- **Sensor response time**: The control interval should be at least 2-3x the sensor response time (T90) to ensure each measurement reflects the actual process state. pH sensors with 10-second T90 require control intervals of at least 20-30 seconds. DO sensors with 60-second T90 require 120-180 second intervals.
- **Actuator response time**: Control actions must be implementable within the control interval. Solenoid valves respond in milliseconds, but chemical dosing pumps may take 1-10 seconds to change flow rate, and thermal systems 1-10 minutes to change temperature. The control interval should be longer than the actuator settling time.
- **Computational load**: Each control interval requires sensor reading, signal processing, control algorithm execution, and output updating. Complex MPC algorithms may require 0.1-10 seconds of computation, setting a minimum control interval. PID control typically completes in microseconds, enabling very short intervals.
- **Communication latency**: In distributed MES monitoring systems, communication delays between sensors, controllers, and actuators add to the effective control interval. Fieldbus protocols add 1-100 ms latency; wireless networks add 10-1000 ms; cloud-based control adds 100 ms-10 seconds. The control interval must exceed the total communication round-trip time.

## Compatible Systems

Control Algorithms

## References

- Astrom, K. J., & Murray, R. M. (2021). *Feedback Systems: An Introduction for Scientists and Engineers* (2nd ed.). Princeton University Press.
- Seborg, D. E., Edgar, T. F., Mellichamp, D. A., & Doyle, F. J. (2016). *Process Dynamics and Control* (4th ed.). Wiley.
- Patel, R., et al. (2021). Model predictive control for microbial fuel cells. *Renewable and Sustainable Energy Reviews*, 145, 111157.
- Premier, G. C., et al. (2011). Integration of biohydrogen, biomethane and bioelectrochemical systems. *Renewable Energy*, 36(8), 2271-2275.
- Olias, L. G., & Di Lorenzo, M. (2021). Microbial fuel cells for in-field water quality monitoring. *RSC Advances*, 11, 16307-16317.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Control+Interval&body=**Parameter%3A**+Control+Interval%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fcontrol-interval.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Control+Interval&body=**Parameter%3A**+Control+Interval%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fcontrol-interval.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Control+Interval&body=**Parameter%3A**+Control+Interval%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fcontrol-interval.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
