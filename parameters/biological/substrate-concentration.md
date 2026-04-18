# Substrate Concentration

Substrate concentration quantifies the amount of biodegradable organic matter
available for microbial consumption in microbial electrochemical systems. This
fundamental parameter directly affects microbial growth rates, current
generation, and overall system performance. Substrate concentration serves as
the driving force for biological processes and determines the theoretical
maximum performance of the system.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Biological |
| **Type** | number |
| **Unit** | mg/L |
| **Papers Reporting** | 10 |

## Typical Values

- **Range**: 0.1 - 100 g/L
- **Typical**: 0.5 - 10 g/L
- **Optimal**: 1 - 5 g/L
- **Performance Categories**: - **Low Performance**: <0.5 g/L (substrate limitation, poor performance)
- **Moderate Performance**: 0.5 - 2 g/L (moderate substrate availability)
- **High Performance**: 2 - 10 g/L (optimal substrate range)
- **Exceptional Performance**: 10 - 20 g/L (high substrate, may require

## Measurement Methods

- **Direct Measurement**: 1. **Total Organic Carbon (TOC)**:     - High-temperature combustion method    - Measures total carbon content    - Includes biodegradable and non-biodegradable fractions    - Rapid and automated analysis  2. **Chemical Oxygen Demand (COD)**:     - Measures oxygen equivalent of organic matter    - Strong correlation with substrate concentration    - Widely used in wastewater treatment    - Standard analytical method  3. **Biochemical Oxygen Demand (BOD)**:    - Measures biodegradable organic matter    - 5-day incubation standard test    - Directly relates to microbial substrate    - Time-consuming but biologically relevant
- **Calculation Considerations**: - Convert between COD, BOD, and substrate mass - Account for substrate biodegradability - Consider interference from suspended solids - Adjust for specific substrate types

## Affecting Factors

### Primary

- **Substrate Type**: - Simple sugars: Readily biodegradable, high activity    - Complex carbohydrates: Slower degradation rates    - Proteins: Variable degradation, nitrogen source    - Lipids: High energy content, slower degradation
- **Feed Composition**: - Pure substrates: Controlled concentration    - Real wastewaters: Variable composition    - Industrial effluents: High concentrations possible    - Dilution affects final concentration
- **System Operation**: - Continuous feeding: Steady substrate levels    - Batch feeding: Variable concentrations    - Recirculation affects mixing and concentration    - Retention time affects utilization
- **Environmental Conditions**: - Temperature affects substrate solubility    - pH influences substrate stability    - Ionic strength affects solubility    - Oxidation affects substrate degradation
- **Biological Factors**: - Microbial consumption reduces concentration    - Growth phase affects utilization rate    - Community composition affects preferences    - Inhibition affects utilization efficiency

## Performance Impact

**Formula**: Rate = V_max × [S] / (K_s + [S])

Where V_max = maximum rate, [S] = substrate concentration, K_s = half-saturation
constant. Higher substrate concentration increases reaction rates until
saturation. Optimal concentration (1-5 g/L) balances performance with economic
considerations.

## Compatible Systems

Substrate Parameters

## References

1. **Monod, J.** (1949). "The growth of bacterial cultures". _Annual Review of
   Microbiology_, 3(1), 371-394.

   - Fundamental substrate kinetics relationships

2. **Rittmann, B.E. & McCarty, P.L.** (2001). "Environmental Biotechnology:
   Principles and Applications". McGraw-Hill, New York.

   - Substrate utilization in biological systems

3. **Logan, B.E.** (2008). "Microbial Fuel Cells". John Wiley & Sons, Hoboken,
   NJ.
   - Substrate effects in bioelectrochemical systems

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Substrate+Concentration&body=**Parameter%3A**+Substrate+Concentration%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fsubstrate-concentration.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Substrate+Concentration&body=**Parameter%3A**+Substrate+Concentration%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fsubstrate-concentration.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Substrate+Concentration&body=**Parameter%3A**+Substrate+Concentration%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fsubstrate-concentration.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
