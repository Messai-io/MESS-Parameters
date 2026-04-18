# Ceramic Separator

A ceramic separator is an inorganic, porous membrane fabricated from metal oxides (primarily alumina, zirconia, or clayware) used to physically partition the anode and cathode chambers in microbial electrochemical systems (MES) while permitting ionic transport. Ceramic separators represent a low-cost, mechanically robust, and chemically stable alternative to polymeric ion exchange membranes such as Nafion, which can cost $500-1400/m^2. Ceramic materials can be fabricated from locally available clays and minerals at costs of $1-20/m^2, making them particularly attractive for large-scale and developing-world MES applications.

The ion transport mechanism in ceramic separators differs fundamentally from ion exchange membranes. Rather than selective ion exchange through fixed charge groups, ceramics transport ions through water-filled pores via a combination of diffusion, migration, and convective flow. Pore sizes typically range from 0.01 to 10 um, much larger than the molecular-scale channels in ion exchange membranes. This non-selective transport means that both cations and anions pass through, along with dissolved gases and small organic molecules. While this reduces coulombic efficiency compared to dense ion exchange membranes, the significantly lower cost and excellent biofouling resistance of ceramics can make this trade-off favorable for practical applications.

Common ceramic separator materials for MES include earthenware (fired clay at 900-1100 C), terracotta, alumina (Al2O3), zirconia (ZrO2), and mullite (3Al2O3-2SiO2). The porosity, pore size distribution, thickness, and surface charge of the ceramic are controlled through raw material composition, particle size distribution, sintering temperature and duration, and optional surface coatings. Earthenware separators fired at 900-1000 C achieve porosities of 15-30% with pore sizes of 0.1-5 um and ionic conductivities of 0.5-5 mS/cm, producing MFC power densities of 10-80% of those achieved with Nafion, depending on design optimization.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Materials |
| **Subcategory** | Porous Separators |
| **Type** | object |

## Typical Values

- **Valid Range**: Porosity 5-50%; pore size 0.01-50 um; thickness 2-20 mm; ionic conductivity 0.1-10 mS/cm
- **Typical Range**: Porosity 15-30%; pore size 0.1-5 um; thickness 3-10 mm; ionic conductivity 0.5-5 mS/cm
- **Area Resistance**: 5-100 ohm cm^2
- **Water Absorption**: 10-25% by mass
- **Flexural Strength**: 10-100 MPa
- **Cost**: $1-20/m^2 (earthenware); $50-200/m^2 (technical ceramics)
- **MFC Power (vs. Nafion)**: 30-80% of Nafion-based MFC performance

## Measurement Methods

- **Porosity and Pore Size Distribution**: Mercury intrusion porosimetry (MIP) provides total porosity, median pore diameter, and pore size distribution. For ceramics with pores >0.1 um, capillary flow porometry (bubble point method) measures through-pore size distribution. Archimedes method (ASTM C373) provides a simpler determination of apparent porosity and bulk density.
- **Ionic Conductivity**: AC impedance spectroscopy with the ceramic separator clamped between two electrolyte-filled chambers measures through-plane ionic conductivity. The high-frequency intercept of the Nyquist plot yields the separator resistance, from which conductivity is calculated knowing thickness and area.
- **Oxygen Mass Transfer Coefficient**: The dissolved oxygen transfer coefficient (k_O) is measured by filling one chamber with N2-purged and the other with O2-saturated electrolyte, monitoring DO increase over time. Values of 10^-6 to 10^-4 cm/s are typical. Lower k_O indicates better prevention of oxygen crossover, which improves coulombic efficiency.

## Affecting Factors

### Primary

- **Sintering Temperature**: Higher firing temperatures (1000-1200 C) reduce porosity through grain growth and pore closure, increasing mechanical strength but also ionic resistance. Earthenware fired at 900 C has 25-30% porosity; at 1100 C, porosity drops to 10-15%. The optimal sintering temperature balances mechanical integrity with ionic transport.
- **Raw Material Composition**: Clay mineralogy (kaolin, montmorillonite, illite) determines the pore structure and surface charge. High-kaolin clays produce finer pores (0.1-1 um) while sandy clays yield coarser pores (1-10 um). Addition of organic pore-formers (starch, sawdust at 5-20 wt%) increases porosity after burnout.
- **Wall Thickness**: Thinner separators (2-4 mm) minimize ionic resistance but are mechanically fragile. Thicker walls (8-15 mm) provide structural reliability for large-scale tubular reactors but increase area resistance proportionally. Optimal thickness is 3-6 mm for most configurations.
- **Surface Charge and Wetting**: Ceramic surfaces carry pH-dependent surface charges. Below the point of zero charge (PZC, typically pH 4-8 for clay minerals), surfaces are positively charged; above PZC, negatively charged. Surface charge affects ion selectivity and biofilm adhesion.
- **Geometry and Configuration**: Flat-plate, tubular, and cylindrical (pot-type) ceramic separators offer different advantages. Tubular ceramics provide high surface-area-to-volume ratios and are easily scaled by adding modules. Pot-type MFCs using earthenware containers are among the simplest and cheapest MES configurations.

## Related Parameters

- **name**: Internal Resistance

- **relationship**: Ceramic separator resistance contributes 20-60% of total internal resistance due to the thick wall requirement.
- **name**: Membrane Pore Size

- **relationship**: Ceramic pore sizes (0.1-10 um) are much larger than ion exchange membrane pores, enabling non-selective transport.
- **name**: Electrolyte Conductivity

- **relationship**: The electrolyte filling the ceramic pores determines the effective ionic conductivity.
- **name**: Faradaic Efficiency

- **relationship**: Oxygen and substrate crossover through ceramic pores reduces coulombic efficiency by 10-40%.

## Compatible Systems

Membrane Separator Materials

## References

- Winfield, J. et al. (2013). A review into the use of ceramics in microbial fuel cells. Bioresource Technology, 148, 480-486.
- Behera, M. et al. (2010). Performance evaluation of low cost microbial fuel cell fabricated using earthenware pot. Bioresource Technology, 101(4), 1183-1189.
- Chatterjee, P. & Ghangrekar, M. M. (2014). Design of clayware separator-electrode assembly for treatment of wastewater in microbial fuel cells. Applied Biochemistry and Biotechnology, 173(2), 378-390.
- Daud, S. M. et al. (2015). Separators used in microbial electrochemical technologies: Current status and future prospects. Bioresource Technology, 195, 170-179.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Ceramic+Separator&body=**Parameter%3A**+Ceramic+Separator%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fceramic-separator.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Ceramic+Separator&body=**Parameter%3A**+Ceramic+Separator%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fceramic-separator.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Ceramic+Separator&body=**Parameter%3A**+Ceramic+Separator%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fceramic-separator.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
