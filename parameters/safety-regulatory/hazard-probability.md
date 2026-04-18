# Hazard Probability

Hazard probability in microbial electrochemical systems (MES) refers to the likelihood that a specific hazardous event will occur within a defined time period during the operation of MFC, MEC, or MDC installations. This parameter is a fundamental component of risk assessment frameworks, where risk is defined as the product of hazard probability and hazard severity. Quantifying hazard probability enables systematic prioritization of safety measures and resource allocation for risk mitigation.

MES installations face multiple categories of hazardous events: electrical hazards (shock, arc flash, equipment failure), chemical hazards (acid/base spills, toxic gas releases), biological hazards (pathogen exposure, bioaerosol inhalation), mechanical hazards (pressure vessel failure, structural collapse), and environmental hazards (uncontrolled discharges, ground contamination). The probability of each hazard depends on the design quality, construction integrity, operational procedures, maintenance practices, and environmental conditions of the specific installation.

Hazard probability assessment methods range from qualitative (descriptor-based: rare, unlikely, possible, likely, almost certain) to semi-quantitative (frequency categories per IEC 61882) to fully quantitative (probabilities per year derived from failure rate databases and fault tree analysis). For MES technology, which has limited long-term operational history at scale, hazard probabilities often must be estimated from analogous technologies (conventional wastewater treatment, fuel cell systems, electrolysis plants) supplemented by expert judgment and MES-specific failure mode analysis.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Safety Regulatory |
| **Subcategory** | Hazard Identification |
| **Type** | number |
| **Minimum** | 1 |
| **Maximum** | 5 |

## Typical Values

- **Valid Range**: 10^-7 to 1.0 per year (quantitative) or qualitative categories
- **Qualitative categories (IEC 61882/MIL-STD-882)**: - Frequent: > 1 per year
- **Electrical shock (MES, with proper controls)**: 10^-4 to 10^-3 per year
- **Hydrogen release (MEC, small leak)**: 10^-2 to 10^-1 per year
- **Hydrogen explosion (MEC, with safety systems)**: 10^-5 to 10^-4 per year
- **Loss of containment (reactor failure)**: 10^-4 to 10^-2 per year
- **Biological exposure incident**: 10^-2 to 10^-1 per year
- **Environmental discharge exceedance**: 10^-2 to 10^-1 per year
- **Catastrophic structural failure**: 10^-6 to 10^-4 per year
- **Target individual risk (maximum acceptable)**: 10^-4 per year (many jurisdictions)

## Measurement Methods

- **Fault Tree Analysis (FTA)**: 1. Define the top event (undesired hazardous outcome, e.g., hydrogen explosion in MEC facility). 2. Develop the fault tree by identifying all combinations of basic events (component failures, human errors, external events) that can lead to the top event using AND/OR logic gates. 3. Assign failure probabilities to basic events from reliability databases (OREDA, IEEE 493, CCPS CPQRA). 4. Calculate the top event probability using Boolean algebra (minimal cut sets). 5. Identify dominant failure pathways for targeted risk reduction.
- **Event Tree Analysis (ETA)**: 1. Start with an initiating event (e.g., MEC hydrogen leak) and its estimated frequency. 2. Define sequential safety barriers (gas detection, ventilation activation, ignition prevention, emergency shutdown). 3. Assign success/failure probabilities to each barrier. 4. Calculate the probability of each outcome scenario by multiplying along event tree branches. 5. Sum the probabilities of all hazardous outcome scenarios.
- **Layer of Protection Analysis (LOPA)**: 1. Identify the initiating event and its frequency from process hazard analysis. 2. List all independent protection layers (IPLs): process design, basic process control system, alarms, safety instrumented systems, physical protection (relief valves, containment), post-release protection (emergency response). 3. Assign probability of failure on demand (PFD) to each IPL (typically 10^-1 to 10^-3). 4. Calculate mitigated event frequency: f_outcome = f_initiating x PFD_1 x PFD_2 x ... x PFD_n. 5. Compare against tolerable risk criteria.
- **Historical Data Analysis**: 1. Compile incident and near-miss data from the MES installation and analogous facilities. 2. Calculate observed failure rates: frequency = number of events / total operating time. 3. Apply Bayesian updating to combine prior estimates with observed data as operational experience accumulates. 4. Benchmark against industry databases for similar equipment and processes.

## Affecting Factors

### Primary

- **Design quality**: Robust engineering design with appropriate safety margins reduces hazard probability.
- **Maintenance practices**: Regular preventive maintenance reduces equipment failure rates; deferred maintenance increases hazard probability.
- **Safety system integrity**: The reliability of safety instrumented systems, gas detectors, and emergency shutdown systems directly affects the mitigated hazard probability.
- **Operational procedures**: Well-written, regularly updated, and consistently followed procedures reduce human-error-related hazard probability.
- **Training and competency**: Trained, competent operators make fewer errors and respond more effectively to abnormal conditions.
- **Equipment age and condition**: Aging equipment may have higher failure rates due to corrosion, fatigue, and wear.
- **Environmental conditions**: Extreme weather, seismic events, and flooding can initiate hazardous events.
- **Management of change**: Inadequate management of change processes can introduce new hazards or compromise existing safety barriers.

## Related Parameters

- **name**: Hazard Severity

- **relationship**: Combined with hazard probability, determines overall risk level.
- **name**: Alarm Types

- **relationship**: Alarm system reliability affects the probability that operators detect and respond to developing hazards.
- **name**: Emergency Shutdown Time

- **relationship**: ESD system reliability is a key factor in mitigating hazard probability.
- **name**: Audit Frequency

- **relationship**: Regular audits help maintain safety barriers and reduce hazard probability over time.
- **name**: Flammability Rating

- **relationship**: Materials with higher flammability ratings require lower acceptable hazard probabilities.

## Compatible Systems

Risk Assessment Parameters

## References

- IEC 61882 (2016). Hazard and Operability Studies (HAZOP Studies) - Application Guide.
- MIL-STD-882E (2012). Department of Defense Standard Practice: System Safety.
- CCPS (2000). Guidelines for Chemical Process Quantitative Risk Analysis, 2nd Edition. AIChE/CCPS.
- IEC 61511 (2016). Functional Safety - Safety Instrumented Systems for the Process Industry Sector.
- Crowl, D.A. & Louvar, J.F. (2019). Chemical Process Safety: Fundamentals with Applications, 4th Edition. Pearson.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Hazard+Probability&body=**Parameter%3A**+Hazard+Probability%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Fhazard-probability.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Hazard+Probability&body=**Parameter%3A**+Hazard+Probability%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Fhazard-probability.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Hazard+Probability&body=**Parameter%3A**+Hazard+Probability%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Fhazard-probability.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
