# Renewable Energy Fraction

Renewable energy fraction is the percentage of total energy consumed by MES ancillary equipment that is sourced from renewable energy sources (solar PV, wind, hydroelectric, or the MFC's own bioelectrical output). This sustainability metric indicates the degree to which MES operation is decoupled from fossil fuel-based grid electricity and contributes to climate goals. MES have a unique advantage: MFCs generate renewable electricity from organic waste, inherently contributing to a 100% renewable energy fraction when the generated power meets or exceeds parasitic demand.

An energy-positive MFC that generates more electricity than it consumes has a renewable energy fraction exceeding 100% (net renewable energy exporter). Most pilot MFCs currently achieve 10--80% self-sufficiency, with the remainder from grid or other renewable sources. Integrating MES with solar PV or small wind provides complementary renewable power for ancillary loads, enabling off-grid operation in remote locations.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Economic |
| **Subcategory** | Resource Efficiency |
| **Type** | number |
| **Unit** | % |
| **Minimum** | 0 |
| **Maximum** | 100 |

## Typical Values

- **Valid Range**: 0 -- 200%
- **Lab MFC (grid-powered auxiliaries)**: 0 -- 5%
- **Pilot MFC (partial self-sufficiency)**: 10 -- 60%
- **Optimized MFC (energy-positive)**: 100 -- 200%
- **MFC + solar PV hybrid**: 80 -- 100%
- **MFC + wind hybrid**: 70 -- 100%
- **MEC (requires applied voltage)**: 0 -- 30% (self-contribution is negative)
- **Wastewater treatment sector average**: 5 -- 15%
- **Target for sustainability certification**: > 50%

## Measurement Methods

- **Energy Audit**: Total energy consumed by ancillary equipment is measured by energy meter. Renewable energy inputs (MFC output, solar, wind) are metered separately. Fraction = renewable input / total consumption * 100%.
- **Annual Energy Balance**: Over 12 months, total energy generated (renewable) and consumed (all sources) are summed. Annual renewable fraction captures seasonal variations (solar/wind variability, temperature-driven demand changes).

## Affecting Factors

### Primary

- **MFC Power Density**: Higher power density increases self-sufficiency fraction.
- **Parasitic Load Optimization**: Reducing ancillary power (gravity feed, passive mixing) increases the renewable fraction.
- **Complementary Renewables**: Solar PV or wind can supplement MFC output to achieve 100% renewable operation.
- **Energy Storage**: Batteries bridge intermittent renewable generation, maintaining 100% renewable fraction.

## Related Parameters

- **name**: [Energy Cost](energy-cost.md)

- **relationship**: Cost of non-renewable energy component
- **name**: [Wind Capacity](../operational/wind-capacity.md)

- **relationship**: Wind energy contribution
- **name**: [Power Requirement](../operational/power-requirement.md)

- **relationship**: Total energy demand
- **name**: [Carbon Credit Revenue](carbon-credit-revenue.md)

- **relationship**: Value of renewable operation

## Compatible Systems

Life Cycle Assessment Parameters

## References

- Ge, Z. et al. (2014). "Recovery of electrical energy in microbial fuel cells." Environmental Science & Technology Letters, 1(2), 137-141.
- IRENA (2024). "Renewable Energy Statistics 2024."

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Renewable+Energy+Fraction&body=**Parameter%3A**+Renewable+Energy+Fraction%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Frenewable-energy-fraction.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Renewable+Energy+Fraction&body=**Parameter%3A**+Renewable+Energy+Fraction%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Frenewable-energy-fraction.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Renewable+Energy+Fraction&body=**Parameter%3A**+Renewable+Energy+Fraction%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Frenewable-energy-fraction.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
