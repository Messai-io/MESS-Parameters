# Emergency Shutdown Time

Emergency shutdown time (ESD time) in microbial electrochemical systems (MES) refers to the maximum allowable duration from the initiation of an emergency shutdown signal to the achievement of a safe system state, where all hazardous conditions have been isolated or controlled. This parameter encompasses the time required to de-energize electrical circuits, isolate fluid flows, vent or contain hazardous gases (particularly hydrogen in MECs), and bring the system to a condition where it poses no immediate threat to personnel, equipment, or the environment.

Emergency shutdown procedures for MES installations are critical because these systems can present multiple simultaneous hazards: electrical hazards from DC power systems and grid-connected inverters, chemical hazards from wastewater and treatment chemicals, biological hazards from pathogenic microorganisms, and in the case of MECs, flammable gas hazards from hydrogen production. The emergency shutdown system must address all these hazards within a defined time that prevents escalation from an incident to a catastrophe.

The ESD time is determined through process hazard analysis (PHA) considering the worst-case scenario progression rates and the time available before an incident reaches unacceptable severity levels. For MES systems, critical scenarios include hydrogen accumulation above the lower explosive limit (LEL), uncontrolled electrical arc or short circuit, loss of containment of hazardous wastewater, and structural failure of reactor components. The ESD system typically follows a safety integrity level (SIL) framework per IEC 61511 for the process industry sector.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Safety Regulatory |
| **Subcategory** | Operational Safety Limits |
| **Type** | number |
| **Unit** | s |
| **Minimum** | 1 |
| **Maximum** | 300 |

## Typical Values

- **Valid Range**: 1 - 300 seconds
- **Electrical de-energization (disconnect MES from load/grid)**: 1 - 10 seconds
- **Hydrogen flow isolation (MEC systems)**: 5 - 30 seconds
- **Wastewater flow isolation (influent shutoff)**: 10 - 60 seconds
- **Gas venting to safe condition**: 30 - 120 seconds
- **Full system safe state achievement**: 30 - 300 seconds
- **SIL 1 systems**: 60 - 300 seconds (typical for small MES)
- **SIL 2 systems**: 10 - 60 seconds (for larger or higher-hazard MES)
- **SIL 3 systems**: 1 - 10 seconds (rarely required for MES)
- **OSHA-referenced emergency action standard**: Immediate (seconds for imminent danger)
- **NFPA 70E arc flash response**: < 2 seconds (relay/breaker operation)

## Measurement Methods

- **ESD Time Verification Testing**: 1. Conduct a controlled emergency shutdown test during commissioning and at regular intervals (annually minimum). 2. Initiate the ESD sequence using the emergency shutdown button or automated ESD signal. 3. Use precision timers or data logging to record the time from ESD initiation to each milestone (electrical isolation, flow shutoff, gas isolation, safe state). 4. Verify that all shutdown actions complete within the specified time limits. 5. Document test results and any deviations requiring corrective action.
- **Process Hazard Analysis (PHA) Method**: 1. Conduct a HAZOP (Hazard and Operability) study or equivalent PHA methodology for the MES installation. 2. Identify all credible emergency scenarios and their escalation timelines. 3. Determine the maximum allowable response time for each scenario based on consequence severity and escalation rate. 4. Specify the ESD time requirement as the shortest required response time across all scenarios, with appropriate safety margins.
- **Safety Integrity Level (SIL) Assessment**: 1. Determine the required SIL for each safety instrumented function (SIF) per IEC 61511 using risk graph or LOPA methodology. 2. Specify the process safety time (the maximum time from a hazardous event to the point of no return). 3. Set the ESD time requirement to a fraction of the process safety time (typically less than half). 4. Verify that the ESD system hardware and software achieve the required response time with the specified SIL reliability.

## Affecting Factors

### Primary

- **System scale**: Larger MES installations with more fluid volume, gas inventory, and electrical capacity require longer shutdown times for complete isolation.
- **Hazard type**: Electrical hazards can be isolated in seconds, while draining large fluid inventories may take minutes.
- **Valve and actuator response time**: The speed of automated shutoff valves and circuit breakers directly determines achievable ESD time.
- **System complexity**: Multi-module MES systems with interconnected fluid and electrical circuits require coordinated shutdown sequences that take longer than single-unit shutdowns.
- **Instrumentation reliability**: Failed or slow sensors can delay ESD initiation, increasing the effective response time.
- **Communication delays**: Signal transmission time between sensors, logic solvers, and final elements (particularly for remote or distributed MES installations) adds to ESD time.
- **Operator response time**: Manual ESD actions (pressing emergency stop buttons) depend on operator training, alertness, and proximity to controls.
- **Environmental conditions**: Extreme cold can slow valve operation; corrosion can increase mechanical response times.

## Related Parameters

- **name**: Alarm Types

- **relationship**: Emergency alarms trigger the ESD sequence; alarm response time contributes to overall ESD time.
- **name**: Evacuation Time

- **relationship**: ESD time must be shorter than the time available for personnel evacuation from the hazard zone.
- **name**: Explosion Limit Lower

- **relationship**: ESD must achieve safe gas concentrations before the LEL is reached.
- **name**: Hazard Severity

- **relationship**: Higher hazard severity requires shorter ESD times.
- **name**: Hazard Probability

- **relationship**: The probability of ESD system failure on demand must be commensurate with the hazard probability.

## Compatible Systems

Safety Parameters

## References

- IEC 61511 (2016). Functional Safety - Safety Instrumented Systems for the Process Industry Sector. Parts 1-3.
- IEC 61508 (2010). Functional Safety of Electrical/Electronic/Programmable Electronic Safety-Related Systems.
- NFPA 70E (2021). Standard for Electrical Safety in the Workplace.
- CCPS (2001). Layer of Protection Analysis: Simplified Process Risk Assessment. AIChE/CCPS.
- ISA 84.00.01 (2004). Functional Safety: Safety Instrumented Systems for the Process Industry Sector.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Emergency+Shutdown+Time&body=**Parameter%3A**+Emergency+Shutdown+Time%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Femergency-shutdown-time.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Emergency+Shutdown+Time&body=**Parameter%3A**+Emergency+Shutdown+Time%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Femergency-shutdown-time.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Emergency+Shutdown+Time&body=**Parameter%3A**+Emergency+Shutdown+Time%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Femergency-shutdown-time.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
