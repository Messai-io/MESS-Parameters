# Odor Units

Odor units (OU) quantify the concentration of odorous compounds emitted from an MES installation, measured by dynamic olfactometry as the dilution ratio at which 50% of panelists can detect the odor (detection threshold, D/T). Expressed in OU/m^3, this parameter is critical for community acceptance and regulatory compliance. Wastewater treatment facilities are among the most common sources of odor complaints, and MES odor management is essential for successful deployment.

MES produce odors primarily from volatile sulfur compounds (hydrogen sulfide, methyl mercaptan), volatile fatty acids (acetic, butyric acid), and ammonia. Sealed anaerobic anode chambers contain these compounds effectively, but odors can escape during filling, draining, sampling, and maintenance. The cathode side (open to air in air-cathode designs) is the primary odor emission pathway.

MES generally have lower odor emissions than open-tank activated sludge because: (1) the anaerobic anode chamber is sealed, (2) lower sludge production reduces sludge-handling odors, and (3) smaller reactor volumes reduce the open surface area for volatilization.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Economic |
| **Subcategory** | Health & Safety Impact |
| **Type** | number |
| **Unit** | OU/m³ |
| **Minimum** | 0 |
| **Maximum** | 1000 |

## Typical Values

- **Valid Range**: 0 -- 100000 OU/m^3
- **MES (sealed reactor, normal operation)**: 10 -- 100 OU/m^3 at boundary
- **MES (during maintenance/opening)**: 100 -- 5000 OU/m^3 at 1 m
- **Activated sludge (open tanks)**: 100 -- 10000 OU/m^3 at 1 m
- **Sludge handling facility**: 1000 -- 50000 OU/m^3
- **Regulatory limit (boundary)**: 1 -- 10 OU/m^3 (varies by jurisdiction)
- **Human detection threshold (H2S)**: 0.5 ppb (approximately 1 OU/m^3)
- **Annoyance threshold**: approximately 5 OU/m^3

## Measurement Methods

- **Dynamic Olfactometry (EN 13725)**: Air samples are collected in Nalophan bags and analyzed by a trained panel of assessors using an olfactometer. The sample is progressively diluted until 50% of panelists can no longer detect the odor. OU/m^3 = dilution ratio at 50% detection threshold. Requires an accredited olfactometry laboratory.
- **Electronic Nose / Continuous Monitoring**: Electronic noses (e-noses) with semiconductor or conducting polymer sensor arrays provide continuous, real-time odor monitoring. Correlation with olfactometric OU requires site-specific calibration. Cost: $5000--50000 per unit.

## Affecting Factors

### Primary

- **Reactor Sealing**: Properly sealed anaerobic reactors contain 95--99% of volatile compounds. Leaks at gaskets and ports are the primary emission pathway.
- **Wastewater Type**: High-sulfate wastewater (> 100 mg/L) produces more H2S. Meat processing wastewater produces intense odors.
- **Ventilation and Treatment**: Activated carbon filters or biofilters on reactor vents reduce odor emissions by 90--99%.
- **Maintenance Practices**: Opening reactors during maintenance releases accumulated odorous compounds. Scheduling maintenance during favorable wind conditions reduces community impact.

## Related Parameters

- **name**: [Community Acceptance](community-acceptance.md)

- **relationship**: Odor affects acceptance
- **name**: [Noise Level](noise-level.md)

- **relationship**: Related nuisance parameter
- **name**: [Visual Impact](visual-impact.md)

- **relationship**: Related environmental impact
- **name**: [Wastewater Type](../operational/wastewater-type.md)

- **relationship**: Source of odorous compounds

## Compatible Systems

Social Impact Parameters

## References

- EN 13725:2003. "Air quality -- Determination of odour concentration by dynamic olfactometry."
- Gostelow, P. et al. (2001). "Odour measurements for sewage treatment works." Water Research, 35(3), 579-597.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Odor+Units&body=**Parameter%3A**+Odor+Units%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fodor-units.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Odor+Units&body=**Parameter%3A**+Odor+Units%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fodor-units.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Odor+Units&body=**Parameter%3A**+Odor+Units%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fodor-units.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
