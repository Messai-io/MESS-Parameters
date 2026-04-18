# Installation Factor

Installation factor (also called Lang factor or hand factor) is the multiplier applied to the purchased equipment cost (PEC) to estimate the total installed cost including delivery, foundations, piping, electrical, instrumentation, insulation, painting, and installation labor. Expressed as a dimensionless ratio (total installed cost / PEC), the installation factor converts equipment cost estimates into total project costs without requiring detailed bottom-up estimation of each installation component.

For chemical process equipment, the classic Lang factor is 3.1 for solid processing plants, 3.6 for solid-fluid, and 4.7 for fluid processing. MES fall into the fluid processing category but are generally less complex than chemical plants, with installation factors of 2.0--4.0 depending on scale, complexity, and location. Modular, pre-assembled MES systems designed for plug-and-play installation have lower installation factors (1.5--2.5) than custom-built systems requiring extensive on-site construction (3.0--5.0).

## Basic Information

| Property | Value |
|---|---|
| **Category** | Economic |
| **Subcategory** | Installation Costs |
| **Type** | number |
| **Minimum** | 1.2 |
| **Maximum** | 3 |

## Typical Values

- **Valid Range**: 1.2 -- 6.0
- **Lab system (self-installed)**: 1.2 -- 1.5
- **Modular pilot (pre-assembled)**: 1.5 -- 2.5
- **Custom pilot (site-built)**: 2.5 -- 4.0
- **Full-scale (standard construction)**: 3.0 -- 5.0
- **Lang factor (fluid processing, reference)**: 4.7
- **Piping factor**: 0.3 -- 0.7x PEC
- **Electrical factor**: 0.1 -- 0.3x PEC
- **Instrumentation factor**: 0.1 -- 0.3x PEC
- **Installation labor factor**: 0.3 -- 0.5x PEC

## Measurement Methods

- **Bottom-Up Verification**: After project completion, the actual total installed cost is divided by the PEC to calculate the realized installation factor. This provides data for future project estimation.
- **Factor Estimation**: For early-stage estimation, published factors from Peters & Timmerhaus or similar references are applied. The factors are adjusted for project-specific conditions (modular vs. custom, indoor vs. outdoor).

## Affecting Factors

### Primary

- **Modularity**: Pre-assembled modules require minimal on-site work (factor 1.5--2.5). Custom systems require extensive piping, electrical, and structural work (factor 3--5).
- **Location**: Remote sites with limited contractor availability have 20--50% higher installation costs.
- **Complexity**: Systems with many fluid connections, sensors, and control loops have higher factors than simple designs.
- **Scale**: Larger projects have proportionally lower installation factors due to economy of scale in construction.

## Related Parameters

- **name**: [Capital Cost](capitalcost.md)

- **relationship**: Equipment cost before installation
- **name**: [Total Capital Cost](total-capital-cost.md)

- **relationship**: Fully installed cost
- **name**: [Civil Works Cost](civil-works-cost.md)

- **relationship**: Site preparation component
- **name**: [Commissioning Cost](commissioning-cost.md)

- **relationship**: Post-installation startup

## Compatible Systems

Capital Cost Parameters

## References

- Peters, M.S., Timmerhaus, K.D., West, R.E. (2003). Plant Design and Economics for Chemical Engineers, 5th ed. McGraw-Hill.
- Lang, H.J. (1947). "Cost Relationships in Preliminary Cost Estimation." Chemical Engineering, 54(10), 117-121.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Installation+Factor&body=**Parameter%3A**+Installation+Factor%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Finstallation-factor.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Installation+Factor&body=**Parameter%3A**+Installation+Factor%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Finstallation-factor.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Installation+Factor&body=**Parameter%3A**+Installation+Factor%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Finstallation-factor.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
