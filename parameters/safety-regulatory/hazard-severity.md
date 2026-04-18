# Hazard Severity

Hazard severity in microbial electrochemical systems (MES) refers to the magnitude of potential consequences resulting from a hazardous event at an MFC, MEC, or MDC installation, classified according to the degree of harm to people, damage to equipment, environmental impact, and financial loss. Together with hazard probability, severity forms the two-dimensional risk matrix used for systematic risk assessment and management of MES facilities.

MES installations present hazards across multiple severity categories. At the highest severity levels are hydrogen explosions in MEC systems (potentially fatal, major equipment destruction), electrocution from improperly managed DC power systems, and catastrophic release of pathogen-laden wastewater into sensitive environments. Moderate-severity hazards include chemical burns from electrolyte handling, chronic bioaerosol exposure causing respiratory illness, and equipment damage from voltage reversal events in stacked MFCs. Lower-severity hazards include minor chemical splashes, nuisance odors, and minor effluent quality exceedances.

Hazard severity classification follows standardized frameworks such as MIL-STD-882 (Categories I-IV: Catastrophic, Critical, Marginal, Negligible), ISO 12100 (machine safety risk assessment), and the EU Seveso III Directive for major accident hazard establishments. For MES installations, the severity classification drives the required safety integrity level (SIL) of safety instrumented systems, the design of engineering controls, the extent of emergency preparedness, and the insurance and liability requirements.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Safety Regulatory |
| **Subcategory** | Hazard Identification |
| **Type** | number |
| **Minimum** | 1 |
| **Maximum** | 5 |

## Typical Values

- **Valid Range**: Severity Category I (Catastrophic) to Category IV (Negligible)
- **MIL-STD-882E Classification**: - Category I (Catastrophic): Death, system loss, severe environmental damage. Example: H2 explosion in MEC, mass electrocution.
- **Consequence metrics**: - Human: None / First aid / Medical treatment / Lost time injury / Permanent disability / Fatality

## Measurement Methods

- **Consequence Analysis**: 1. Identify all credible hazardous events from the process hazard analysis (HAZOP, What-If, FMEA). 2. For each event, estimate the worst-case consequences in each dimension (human, environmental, financial, operational). 3. Use consequence modeling tools for specific scenarios:    - Explosion overpressure modeling (TNT equivalence, Baker-Strehlow) for hydrogen events.    - Dispersion modeling (ALOHA, PHAST) for toxic gas releases.    - Spill trajectory modeling for wastewater releases to surface water. 4. Assign the severity category based on the most severe consequence across all dimensions.
- **Risk Matrix Assessment**: 1. Construct a facility-specific risk matrix with hazard severity on one axis and hazard probability on the other. 2. Define risk acceptability zones: acceptable (green), tolerable with ALARP measures (yellow), unacceptable (red). 3. Plot each identified hazard on the matrix based on its severity and probability ratings. 4. Prioritize risk reduction efforts for hazards in the unacceptable and high-tolerable zones.
- **Severity Scoring Methodology**: 1. Develop quantitative severity scoring criteria specific to the MES facility, considering:    - Population density and receptor sensitivity around the facility.    - Volume and toxicity of contained fluids.    - Energy content of stored gases (hydrogen, methane).    - Value and replaceability of equipment. 2. Score each identified hazard using the quantitative criteria. 3. Validate severity scores against historical incident data from analogous facilities.

## Affecting Factors

### Primary

- **Hazardous material inventory**: The quantity of hazardous materials (hydrogen, wastewater, chemicals) determines the maximum potential consequence magnitude.
- **Population exposure**: The number of people in the potential impact zone and their proximity to the hazard source directly affect human consequence severity.
- **Environmental sensitivity**: Proximity to sensitive environmental receptors (wetlands, drinking water sources, endangered species habitat) amplifies environmental consequence severity.
- **Mitigation measures**: Engineering controls (containment, ventilation, suppression systems) can reduce the realized severity below the unmitigated potential.
- **Emergency response capability**: Effective emergency response reduces consequence severity through rapid containment, medical treatment, and environmental remediation.
- **System scale**: Larger MES installations have greater hazardous material inventories and larger potential consequence footprints.
- **Time of day**: Consequences may vary depending on occupancy patterns (day shift vs. night shift, weekday vs. weekend).
- **Cascading effects**: A primary failure (e.g., reactor rupture) may trigger secondary events (chemical release, fire, environmental contamination) that amplify overall severity.

## Related Parameters

- **name**: Hazard Probability

- **relationship**: Combined with severity to determine overall risk level in risk assessment.
- **name**: Emergency Shutdown Time

- **relationship**: Faster shutdown reduces the realized severity of developing hazardous events.
- **name**: Evacuation Time

- **relationship**: Adequate evacuation prevents or reduces human consequence severity.
- **name**: Biosafety Level

- **relationship**: The BSL classification reflects the severity of biological hazards.
- **name**: Flammability Rating

- **relationship**: Higher flammability ratings correlate with higher potential explosion severity.

## Compatible Systems

Risk Assessment Parameters

## References

- MIL-STD-882E (2012). Department of Defense Standard Practice: System Safety.
- ISO 12100 (2010). Safety of Machinery - General Principles for Design - Risk Assessment and Risk Reduction.
- EU Seveso III Directive 2012/18/EU. Control of Major-Accident Hazards Involving Dangerous Substances.
- CCPS (2000). Guidelines for Chemical Process Quantitative Risk Analysis, 2nd Edition. AIChE/CCPS.
- IEC 61511 (2016). Functional Safety - Safety Instrumented Systems for the Process Industry Sector.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Hazard+Severity&body=**Parameter%3A**+Hazard+Severity%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Fhazard-severity.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Hazard+Severity&body=**Parameter%3A**+Hazard+Severity%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Fhazard-severity.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Hazard+Severity&body=**Parameter%3A**+Hazard+Severity%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Fhazard-severity.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
