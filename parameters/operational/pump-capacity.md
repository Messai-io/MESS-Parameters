# Pump Capacity

Pump capacity is the maximum volumetric flow rate that a pump can deliver in a microbial electrochemical system (MES), expressed in mL/min, L/h, or m^3/h. This parameter defines the upper limit of hydraulic throughput and determines the minimum achievable HRT. Pump capacity must be matched to the reactor volume and target HRT, with sufficient headroom (typically 2--3x the steady-state operating flow rate) to accommodate peak flow demands, flushing operations, and flow rate increases needed for process control.

In MES installations, multiple pumps may be required for different functions: feed pump (substrate delivery), recirculation pump (internal mixing loop), effluent pump (treated water discharge), catholyte pump (in dual-chamber systems), and sampling pump. Each has different capacity requirements. The feed pump typically operates at 10--50% of its maximum capacity to allow upward adjustment, while recirculation pumps operate nearer to full capacity.

Pump selection for MES must consider not only capacity but also chemical compatibility (resistance to wastewater constituents), flow pulsation (smooth flow preferred for biofilm protection), self-priming capability, ability to run dry without damage, and energy consumption (W per L/h of flow). Peristaltic pumps dominate at lab scale; progressive cavity, diaphragm, and centrifugal pumps are common at pilot and industrial scale.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Operational |
| **Subcategory** | Flow Control |
| **Type** | number |
| **Unit** | L/h |
| **Minimum** | 0 |
| **Maximum** | 10000 |

## Typical Values

- **Valid Range**: 0.001 -- 100000 mL/min
- **Lab peristaltic (small, Masterflex L/S)**: 0.006 -- 3400 mL/min
- **Lab syringe pump**: 0.001 -- 50 mL/min
- **Bench peristaltic (600 series)**: 0.2 -- 13000 mL/min
- **Pilot centrifugal**: 1 -- 500 L/min
- **Pilot progressive cavity**: 0.5 -- 200 L/min
- **Pilot diaphragm**: 0.1 -- 100 L/min
- **Recommended capacity margin**: 2 -- 3x operating flow rate

## Measurement Methods

- **Maximum Flow Rate Test**: With no backpressure (open discharge), the pump is run at maximum speed and the flow rate is measured by timed volumetric collection. This gives the unloaded maximum capacity. Under system backpressure, actual maximum capacity is lower.
- **Pump Curve Generation**: Flow rate is measured at multiple backpressures (0, 0.1, 0.2, 0.5, 1.0 bar) at maximum pump speed to generate the pump characteristic curve. The intersection with the system resistance curve gives the actual operating point.

## Affecting Factors

### Primary

- **Pump Type**: Peristaltic pumps have capacity proportional to tubing diameter and speed. Centrifugal pumps have capacity dependent on impeller diameter and speed but sensitive to backpressure.
- **Tubing Size (Peristaltic)**: Larger tubing ID provides higher capacity. L/S 16 tubing: 3.6--280 mL/min; L/S 36: 60--3400 mL/min.
- **Motor Speed**: Capacity scales linearly with RPM for positive-displacement pumps (peristaltic, syringe, diaphragm). Centrifugal pump capacity scales with RPM per affinity laws.
- **Fluid Properties**: High-viscosity or high-solids fluids reduce pump capacity by 10--30% compared to water.
- **System Backpressure**: Membrane fouling and outlet restriction reduce effective capacity. Positive-displacement pumps maintain capacity well against backpressure; centrifugal pumps lose capacity rapidly.

## Related Parameters

- **name**: [Pump Type](pump-type.md)

- **relationship**: Technology selection
- **name**: [Flowrate](flowrate.md)

- **relationship**: Operating flow rate
- **name**: [Feed Rate](feed-rate.md)

- **relationship**: Substrate delivery rate
- **name**: [Flow Control Mode](flow-control-mode.md)

- **relationship**: Regulation strategy
- **name**: [Recirculation Ratio](recirculation-ratio.md)

- **relationship**: Recirculation flow needs

## Compatible Systems

Process Control Parameters

## References

- Karassik, I.J. et al. (2008). Pump Handbook, 4th ed. McGraw-Hill.
- Masterflex (2023). "Tubing Selection Guide." Cole-Parmer Technical Library.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Pump+Capacity&body=**Parameter%3A**+Pump+Capacity%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fpump-capacity.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Pump+Capacity&body=**Parameter%3A**+Pump+Capacity%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fpump-capacity.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Pump+Capacity&body=**Parameter%3A**+Pump+Capacity%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fpump-capacity.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
