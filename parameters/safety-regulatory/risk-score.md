# Risk Score

Risk score is a composite numerical rating derived from a risk assessment matrix that combines the probability (likelihood) and severity (consequence) of identified hazards associated with a microbial electrochemical system. Calculated as Risk = Probability x Severity on standard 5x5 matrices, scores range from 1 (negligible risk) to 25 (critical risk requiring immediate mitigation). Risk scoring is fundamental to safety management in MES installations, guiding prioritization of engineering controls, administrative procedures, and personal protective equipment requirements. Common hazards in MES include hydrogen gas accumulation (fire/explosion), electrical shock, chemical exposure, biological hazards (pathogenic organisms), and structural failure.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Safety Regulatory |
| **Subcategory** | Hazard Identification |
| **Type** | number |
| **Minimum** | 1 |
| **Maximum** | 25 |

## Typical Values

- **text**: | Hazard | Probability (1-5) | Severity (1-5) | Risk Score | Category |
|--------|-------------------|----------------|------------|----------|
| H2 leak in MEC (pilot) | 3 | 5 | 15 | High |
| Electrical shock (<50 V DC) | 2 | 3 | 6 | Medium |
| Electrolyte splash | 3 | 2 | 6 | Medium |
| Pathogen exposure (wastewater) | 3 | 3 | 9 | Medium-High |
| Membrane failure (leak) | 2 | 2 | 4 | Low |
| Stack voltage reversal | 4 | 2 | 8 | Medium |
| Chemical spill (buffer) | 2 | 1 | 2 | Low |
| Structural collapse | 1 | 5 | 5 | Medium |

**Risk classification thresholds (typical 5x5 matrix):**
- 1-4: Low risk (acceptable, monitor)
- 5-9: Medium risk (control measures required)
- 10-16: High risk (significant controls, management approval)
- 17-25: Critical risk (stop work, immediate mitigation)

## Measurement Methods

- **1. **Hazard identification (HAZID)**: Systematically identify all potential hazards through brainstorming, checklists, and process flow review.**: 2. **Risk matrix scoring**: Assign probability (1-5) and severity (1-5) scores to each hazard using defined scales. Risk = P x S. 3. **HAZOP study**: Use Hazard and Operability studies with guide words to identify deviations from design intent. 4. **Fault tree analysis (FTA)**: Construct fault trees to calculate the probability of top-level failure events from component failure rates. 5. **Bow-tie analysis**: Map causes, preventive barriers, consequences, and mitigating barriers for each significant risk. 6. **Risk reassessment**: After implementing controls, rescore residual risk to verify reduction to acceptable levels.

## Affecting Factors

- **text**: - **System type**: MECs (hydrogen production) have inherently higher fire/explosion risk than MFCs.
- **Scale**: Larger systems have higher consequences but may have better engineered controls.
- **Location**: Indoor installations have higher H2 accumulation risk; outdoor installations have weather risks.
- **Operating conditions**: Higher pressure, temperature, and current density increase multiple risk factors.
- **Maintenance practices**: Poor maintenance increases probability of equipment failure.
- **Training**: Well-trained operators reduce human-error-related incident probability.
- **Regulatory context**: Different jurisdictions have different acceptable risk thresholds.

## Compatible Systems

Risk Assessment Parameters

## References

1. IEC 31010: Risk Management - Risk Assessment Techniques. International Electrotechnical Commission.
2. ISO 31000: Risk Management - Guidelines. International Organization for Standardization.
3. OSHA Process Safety Management standard (29 CFR 1910.119). US Occupational Safety and Health Administration.
4. HSE (2001). *Reducing Risks, Protecting People* (R2P2). Health and Safety Executive, UK.
5. Escapa, A., Mateos, R., Martinez, E.J., & Blanes, J. (2016). Microbial electrolysis cells: An emerging technology. *Renewable and Sustainable Energy Reviews*, 55, 942-956.

---

*Parameter documentation for the MESS (Microbial Electrochemical Systems Standardization) framework.*

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Risk+Score&body=**Parameter%3A**+Risk+Score%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Frisk-score.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Risk+Score&body=**Parameter%3A**+Risk+Score%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Frisk-score.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Risk+Score&body=**Parameter%3A**+Risk+Score%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Frisk-score.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
