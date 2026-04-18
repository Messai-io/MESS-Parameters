# Flow Control Mode

Flow control mode describes the method by which liquid flow rate is regulated in a continuous or recirculated microbial electrochemical system (MES). The two primary modes are constant-flow control (maintaining a fixed volumetric flow rate regardless of pressure changes) and constant-pressure control (maintaining a fixed driving pressure and allowing flow rate to vary with system resistance). Each mode has distinct implications for hydraulic retention time stability, biofilm shear stress, and system response to fouling or clogging events.

Constant-flow control, typically achieved using positive-displacement pumps (peristaltic, syringe, diaphragm), is the standard approach in laboratory and most pilot MES installations. This mode ensures consistent HRT and organic loading rate regardless of changes in system backpressure caused by biofilm growth, membrane fouling, or outlet restriction. However, as backpressure increases, the pump must work harder, increasing energy consumption and potentially exceeding the pump's pressure rating.

Constant-pressure control, typically achieved using elevated feed reservoirs (gravity feed), pressurized vessels, or centrifugal pumps, allows flow rate to self-adjust in response to system resistance changes. While this mode is simpler and lower energy, it results in variable HRT as the system resistance changes over time. For MES with progressive membrane fouling, constant-pressure mode causes a gradual decrease in flow rate (and increase in HRT), which may inadvertently improve treatment efficiency while reducing throughput.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Operational |
| **Subcategory** | Flow Control |
| **Type** | select |

## Typical Values

- **Valid Range**: Categorical (constant-flow, constant-pressure, on-off, PID-controlled, manual)
- **Constant-flow (peristaltic pump)**: Flow accuracy +/- 2--5%
- **Constant-pressure (gravity feed)**: Pressure typically 0.01 -- 0.5 bar (10 -- 500 cm water head)
- **PID-controlled flow**: Setpoint accuracy +/- 0.5--1%
- **On-off (timer-based)**: Cycling frequency 1 -- 60 cycles per hour
- **Most common (lab scale)**: Constant-flow via peristaltic pump
- **Most common (pilot scale)**: PID-controlled centrifugal pump

## Measurement Methods

- **Flow Rate Verification**: Regardless of control mode, the actual flow rate is verified by timed collection (volume collected over a measured time interval). For constant-flow mode, verification should confirm flow rate remains within +/- 5% of setpoint under varying backpressure conditions (tested by adding outlet restriction). For constant-pressure mode, flow rate is measured at multiple backpressure levels.
- **Pressure Monitoring**: Pressure transducers (0--1 bar range, +/- 0.1% accuracy) installed at the pump outlet and reactor inlet/outlet provide the pressure profile. In constant-pressure mode, the driving pressure is monitored for stability. In constant-flow mode, pressure monitoring detects fouling trends.
- **Control System Response Testing**: Step changes in system resistance (simulated by partially closing a valve) are applied and the control system response is recorded. Response time, overshoot, and steady-state accuracy characterize the flow control performance.

## Affecting Factors

### Primary

- **Pump Type**: Peristaltic pumps provide inherent constant-flow behavior. Centrifugal pumps provide constant-pressure behavior and require variable-frequency drives for flow control. Syringe pumps provide the most precise flow control but are limited in volume.
- **System Backpressure**: Membrane-equipped reactors develop 0.01--0.5 bar backpressure that increases with fouling. Membraneless systems have minimal backpressure (< 0.01 bar).
- **Flow Rate Range**: Low flow rates (< 1 mL/min) are difficult to control with centrifugal pumps and favor peristaltic or syringe pumps. High flow rates (> 10 L/min) favor centrifugal pumps with flow meters and PID control.
- **Reliability Requirements**: Constant-flow control with positive-displacement pumps provides more predictable HRT, which is critical for regulated treatment applications. Constant-pressure control is acceptable for research with daily flow verification.
- **Energy Constraints**: Gravity feed (constant-pressure mode) requires zero pumping energy and is preferred for energy-positive MFC applications. Pump-driven flow consumes 0.01--1 kWh/m^3, which can exceed the electrical output of the MFC.

## Related Parameters

- **name**: [Flow Setpoint](flow-setpoint.md)

- **relationship**: Target flow rate value
- **name**: [Flow Measurement](flow-measurement.md)

- **relationship**: Flow sensing technology
- **name**: [Flow Control Valve](flow-control-valve.md)

- **relationship**: Actuator for flow regulation
- **name**: [Flowrate](flowrate.md)

- **relationship**: Actual volumetric flow rate
- **name**: [Pump Type](pump-type.md)

- **relationship**: Pump technology selection
- **name**: [Pump Capacity](pump-capacity.md)

- **relationship**: Maximum pump flow rate

## Compatible Systems

Process Control Parameters

## References

- Liang, P. et al. (2018). "One-year operation of 1000-L modularized microbial fuel cell for municipal wastewater treatment." Water Research, 141, 1-8.
- Tchobanoglous, G. et al. (2003). Wastewater Engineering: Treatment and Reuse, 4th ed. McGraw-Hill.
- Perry, R.H., Green, D.W. (2007). Perry's Chemical Engineers' Handbook, 8th ed. McGraw-Hill.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Flow+Control+Mode&body=**Parameter%3A**+Flow+Control+Mode%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fflow-control-mode.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Flow+Control+Mode&body=**Parameter%3A**+Flow+Control+Mode%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fflow-control-mode.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Flow+Control+Mode&body=**Parameter%3A**+Flow+Control+Mode%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fflow-control-mode.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
