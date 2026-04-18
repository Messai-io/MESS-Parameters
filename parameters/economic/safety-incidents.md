# Safety Incidents

Safety incidents tracks the frequency and severity of occupational and public safety events associated with MES operation, expressed as incidents per year, lost-time injury rate (per 200000 working hours), or a qualitative safety rating. This parameter is essential for worker protection, regulatory compliance, insurance, and community acceptance. MES present specific safety hazards: electrical shock (low voltage but wet environment), hydrogen gas accumulation (explosive at 4--75% in air, relevant to MECs), exposure to wastewater pathogens, and chemical handling (acids, bases for cleaning).

The MES safety profile is generally favorable compared to conventional treatment because: lower voltages (< 1 V per cell, non-lethal), no large mechanical equipment (blowers, scrapers), no chlorine gas handling, and smaller scale installations. However, hydrogen production in MECs requires explosive atmosphere classification and appropriate ventilation, gas detection, and electrical equipment ratings (ATEX/IECEx Zone 1 or 2).

## Basic Information

| Property | Value |
|---|---|
| **Category** | Economic |
| **Subcategory** | Health & Safety Impact |
| **Type** | number |
| **Unit** | /year |
| **Minimum** | 0 |
| **Maximum** | 10 |

## Typical Values

- **Valid Range**: 0 -- 100 incidents per year
- **Target (zero harm)**: 0 recordable incidents per year
- **Wastewater treatment industry average**: 3 -- 8 recordable incidents per 200000 hours
- **MES-specific hazards**: Electrical (low risk), H2 (moderate for MEC), biological (moderate), chemical (low)
- **Lost-time injury rate target**: < 2 per 200000 hours
- **H2 explosion risk (MEC)**: LEL alarm at 1% H2 (25% of LEL)
- **Electrical hazard (MFC)**: < 50 V total (generally safe touch voltage)

## Measurement Methods

- **Incident Reporting System**: All safety incidents (injuries, near-misses, equipment damage, environmental releases) are documented per OSHA 300 Log (US) or equivalent national reporting system. Incident rate = (number of incidents * 200000) / total hours worked.
- **Risk Assessment**: A formal risk assessment (HAZOP, FMEA, or bow-tie analysis) identifies potential hazards, their likelihood, and consequences. Control measures are implemented for all high-risk scenarios.

## Affecting Factors

### Primary

- **Hydrogen Production**: MECs producing H2 require ATEX-rated equipment, gas detection, forced ventilation, and explosion-relief panels.
- **Wastewater Exposure**: Biological hazards from pathogen contact. PPE (gloves, eye protection) and handwashing protocols reduce risk.
- **Electrical Safety**: Although MFC voltages are low, wet environments increase shock risk. GFCI protection and waterproof connectors are essential.
- **Training**: Comprehensive safety training reduces incident rates by 50--80%.

## Related Parameters

- **name**: [Community Acceptance](community-acceptance.md)

- **relationship**: Safety record affects public trust
- **name**: [Insurance Cost](insurance-cost.md)

- **relationship**: Safety record affects premiums
- **name**: [Noise Level](noise-level.md)

- **relationship**: Occupational noise exposure
- **name**: [Mode](../operational/mode.md)

- **relationship**: MFC vs. MEC safety profiles differ

## Compatible Systems

Social Impact Parameters

## References

- OSHA (2016). "Recording and Reporting Occupational Injuries and Illnesses." 29 CFR 1904.
- ATEX Directive 2014/34/EU. Equipment for potentially explosive atmospheres.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Safety+Incidents&body=**Parameter%3A**+Safety+Incidents%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fsafety-incidents.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Safety+Incidents&body=**Parameter%3A**+Safety+Incidents%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fsafety-incidents.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Safety+Incidents&body=**Parameter%3A**+Safety+Incidents%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fsafety-incidents.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
