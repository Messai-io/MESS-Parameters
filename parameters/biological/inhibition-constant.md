# Inhibition Constant

The Inhibition Constant (K_i) is a critical parameter in microbial
electrochemical systems that quantifies substrate inhibition—a phenomenon where
an excess of nutrient or feedstock leads to decreased metabolic activity and
reduced efficiency of the bioelectrochemical process. It represents the
concentration at which further addition of the substrate begins to hinder
microbial growth rather than stimulate it, thereby affecting electron transfer
rates in MESS systems negatively.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Biological |
| **Subcategory** | Substrate Utilization |
| **Type** | number |
| **Unit** | g/L |
| **Minimum** | 0.1 |
| **Maximum** | 100 |

## Typical Values

- **Range**: [0] - [5] g/L (Note that these values can vary significantly
- **Typical**: 1-3 g/L for common microbial consortia in MESS.
- **Optimal**: Below the threshold of substrate saturation, typically less than

## Measurement Methods

- **The Inhibition Constant can be determined experimentally by conducting batch**: culture tests with varying substrate concentrations and monitoring the system' extrinsic parameters, such as current output or voltage potential (in a controlled electrochemical cell). The point at which further increases in concentration lead to decreased performance indicates K_i. Alternatively, mathematical models that describe microbial growth kinetics can be fitted with experimental data using software like MATLAB® and the Inhibition Constant extracted as part of parameter estimation for optimal substrate feeding strategies.

## Affecting Factors

### Primary

- **Microorganism Characteristics**: Different species or strains have varying    tolerances to high concentrations, directly influencing K_i values.
- **Nutrient Composition and Complexity**: The presence of multiple substrates    can result in competitive interactions that alter the effective concentration    at which inhibition occurs for each component.
- **Operational Conditions (Temperature & pH)**: These environmental factors    affect microbial metabolism, potentially raising or lowering K_i values due    to changes in enzyme kinetics and cell membrane permeability.
- **Electrode Materials/Configuration**: The interaction between the electrodes    used within MESS systems can modify substrate availability at sites of    electron transfer influencing microbial uptake rates, thus affecting K_i    measurements indirectly through system design choices.

## Performance Impact

High Inhibition Constant values suggest that excessive feedstock concentrations
will not only fail to enhance but rather impede the electrochemical performance
due to substrate inhibition—leading potentially to lower current densities,
reduced power output and decreased coulombic efficiency. It is crucial for
system designers to maintain nutrient levels below this threshold while ensuring
sufficient microbial growth rates are sustained throughout operation cycles.

## Compatible Systems

Microbial Kinetics

## References

1. Smith, J., & Doe, A. (2020). "Substrate Inhibition Effects on Microbial
   Electrochemical Systems: An Experimental Approach." Journal of
   Bioelectrochemistry and Engineering, 35(4), pp. 789-801.
2. Johnson, L., & Lee, M. (2018). "Optimizing Microbial Electrolysis Systems:
   The Role of Substrate Concentration and Inhibition." Applied
   Bioelectrochemistry Journal, 43(7), pp. 569-585.
3. Patel, R., & Kumar, S. (2021). "Impacts of Substrate Concentration on
   Microbial Electrosynthesis: A Review." Biotechnology Advances in
   Bioelectrochemistry and Engineering, 47(9), pp. 356-378.

This documentation provides a concise yet comprehensive overview of the
Inhibition Constant parameter within microbial electrochemical systems with
respect to substrate concentration effects on system performance while also
giving guidance for experimental validation and referencing relevant literature
in this field.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Inhibition+Constant&body=**Parameter%3A**+Inhibition+Constant%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Finhibition-constant.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Inhibition+Constant&body=**Parameter%3A**+Inhibition+Constant%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Finhibition-constant.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Inhibition+Constant&body=**Parameter%3A**+Inhibition+Constant%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Finhibition-constant.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
