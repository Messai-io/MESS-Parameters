# Material Circularity

Material circularity quantifies the degree to which materials used in MES construction and operation are sourced from recycled inputs, designed for reuse, or recoverable at end-of-life. Expressed as a percentage (Material Circularity Indicator, MCI, from 0% fully linear to 100% fully circular), this sustainability metric reflects alignment with circular economy principles and is increasingly relevant for ESG reporting and green procurement requirements.

MES have both circular and linear material flows. Circular elements include: carbon electrodes made from waste biomass (coconut shells, sewage sludge, agricultural residues), stainless steel components (highly recyclable, 85--90% recycling rate), and recovered nutrients (struvite as fertilizer). Linear elements include: platinum catalysts (difficult to recover at low loadings), fluoropolymer membranes (Nafion, limited recyclability), and specialty chemicals consumed during operation.

Improving MES circularity involves: using bio-based or waste-derived electrode materials, designing for disassembly and component reuse, selecting recyclable structural materials, and developing catalyst recovery processes.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Economic |
| **Subcategory** | Resource Efficiency |
| **Type** | number |
| **Unit** | % |
| **Minimum** | 0 |
| **Maximum** | 100 |
| **Papers Reporting** | 1 |

## Typical Values

- **Valid Range**: 0 -- 100%
- **Standard MES (Pt cathode, Nafion, acrylic housing)**: 15 -- 30% MCI
- **Improved MES (AC cathode, ceramic separator, SS housing)**: 40 -- 60% MCI
- **Best-case MES (bio-derived electrodes, no PGM, recyclable housing)**: 60 -- 80% MCI
- **Stainless steel recyclability**: 85 -- 90%
- **Carbon electrode (from waste biomass)**: 90 -- 100% recycled input
- **Nafion membrane recyclability**: < 10%
- **Ceramic separator recyclability**: Reuse as aggregate, 50 -- 70%

## Measurement Methods

- **Material Circularity Indicator (Ellen MacArthur Foundation)**: MCI is calculated from: fraction of recycled/reused input, fraction designed for recycling/reuse at end-of-life, product lifetime relative to industry average, and intensity of use. The EMF MCI methodology provides a standardized calculation framework.
- **Life Cycle Inventory**: A detailed inventory of all materials by mass, source (virgin vs. recycled), and end-of-life pathway (landfill, recycle, reuse, incinerate) provides the data for circularity assessment.

## Affecting Factors

### Primary

- **Electrode Source Material**: Waste-derived carbon electrodes (from coconut shell, biochar) achieve near 100% recycled input.
- **Catalyst Choice**: Eliminating Pt (using Fe-N-C, MnO2, or activated carbon catalysts) removes the most problematic non-circular material.
- **Design for Disassembly**: Bolted connections allow component separation for recycling; adhesive bonds prevent it.
- **Regional Recycling Infrastructure**: Availability of metal, plastic, and specialty material recycling affects actual end-of-life circularity.

## Related Parameters

- **name**: [Electrode Cost](electrode-cost.md)

- **relationship**: Material selection
- **name**: [Membrane Cost](membrane-cost.md)

- **relationship**: Material selection
- **name**: [Waste Diversion Rate](waste-diversion-rate.md)

- **relationship**: End-of-life waste management
- **name**: [Renewable Energy Fraction](renewable-energy-fraction.md)

- **relationship**: Energy circularity

## Compatible Systems

Life Cycle Assessment Parameters

## References

- Ellen MacArthur Foundation (2019). "Material Circularity Indicator Methodology."
- Pant, D. et al. (2011). "An introduction to the life cycle assessment (LCA) of bioelectrochemical systems." Renewable and Sustainable Energy Reviews, 15(2), 1305-1313.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Material+Circularity&body=**Parameter%3A**+Material+Circularity%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fmaterial-circularity.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Material+Circularity&body=**Parameter%3A**+Material+Circularity%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fmaterial-circularity.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Material+Circularity&body=**Parameter%3A**+Material+Circularity%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fmaterial-circularity.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
