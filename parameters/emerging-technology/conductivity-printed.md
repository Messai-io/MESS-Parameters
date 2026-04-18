# Conductivity Printed

Conductivity printed refers to the electrical conductivity of printed conductive
materials used in 3D-printed or additively manufactured electrodes for microbial
electrochemical systems. This parameter quantifies the ability of printed
conductive inks, pastes, or filaments to conduct electrical current after
processing. High printed conductivity is essential for efficient current
collection and minimal resistive losses.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Emerging Technology |
| **Subcategory** | Printable Materials |
| **Type** | number |
| **Unit** | S/m |
| **Minimum** | 0 |
| **Maximum** | 10000 |

## Typical Values

- **Range**: 10⁻³ - 10⁶ S/m
- **Typical**: 10² - 10⁴ S/m
- **Optimal**: 10³ - 10⁵ S/m
- **Performance Categories**: - **Low Performance**: <10² S/m (poor conductivity)
- **Moderate Performance**: 10² - 10³ S/m (moderate conductivity)
- **High Performance**: 10³ - 10⁵ S/m (good conductivity)
- **Exceptional Performance**: >10⁵ S/m (excellent conductivity)

## Measurement Methods

- **Direct Measurement**: 1. **Four-Point Probe Method**:     - Apply current through outer probes    - Measure voltage across inner probes    - Calculate: σ = 1/(ρ × geometry factor)    - Standard method for sheet resistance  2. **Van der Pauw Technique**:    - Four-point measurement on arbitrary shapes    - Suitable for printed electrode geometries    - Account for contact resistance    - High accuracy for thin films
- **Calculation Considerations**: - Account for porosity and surface roughness - Consider anisotropic conductivity in layered structures - Normalize for temperature effects

## Affecting Factors

### Primary

- **Conductive Filler Content**: - Low loading (<30 wt%): 10⁻³ - 10⁰ S/m    - Percolation threshold (40-60 wt%): Rapid increase    - High loading (>70 wt%): 10³ - 10⁵ S/m
- **Filler Type**: - Carbon black: 10¹ - 10³ S/m    - Graphene: 10² - 10⁴ S/m    - Silver nanoparticles: 10⁴ - 10⁶ S/m    - Carbon nanotubes: 10³ - 10⁵ S/m
- **Processing Conditions**: - Printing temperature: Affects filler distribution    - Curing temperature: Determines final conductivity    - Post-processing: Sintering, annealing effects
- **Polymer Matrix**: - Affects filler dispersion and percolation    - Thermal expansion mismatch    - Chemical compatibility with fillers
- **Print Parameters**: - Layer thickness: Affects connectivity    - Print speed: Influences filler alignment    - Infill density: Determines bulk conductivity

## Performance Impact

**Formula**: R = ρL/A = L/(σA)

High printed conductivity minimizes ohmic losses and improves power transfer
efficiency. Systems with printed conductivity >10³ S/m typically achieve <10%
resistive losses, while those <10² S/m may suffer 20-50% power losses due to
resistance.

## Compatible Systems

3d Printing Additive Manufacturing

## References

1. **MacDonald, E., et al.** (2014). "3D printing for the rapid prototyping of
   structural electronics". _IEEE Access_, 2, 234-242.

   - Comprehensive review of printed electronics conductivity

2. **Hu, L., et al.** (2010). "Stretchable, porous, and conductive energy
   textiles". _Nano Letters_, 10(2), 708-714.

   - Conductive materials for flexible electronics

3. **Kamyshny, A. & Magdassi, S.** (2014). "Conductive nanomaterials for printed
   electronics". _Small_, 10(17), 3515-3535.
   - Nanomaterial-based conductive inks and their properties

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Conductivity+Printed&body=**Parameter%3A**+Conductivity+Printed%0A**Category%3A**+Emerging+Technology%0A**File%3A**+parameters%2Femerging-technology%2Fconductivity-printed.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Conductivity+Printed&body=**Parameter%3A**+Conductivity+Printed%0A**Category%3A**+Emerging+Technology%0A**File%3A**+parameters%2Femerging-technology%2Fconductivity-printed.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Conductivity+Printed&body=**Parameter%3A**+Conductivity+Printed%0A**Category%3A**+Emerging+Technology%0A**File%3A**+parameters%2Femerging-technology%2Fconductivity-printed.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
