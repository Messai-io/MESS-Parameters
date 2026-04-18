# Carbon Felt

Carbon felt is a non-woven, three-dimensional porous electrode material composed of randomly oriented carbon fibers, extensively employed in microbial electrochemical systems (MES) for both anode and cathode applications. Unlike woven carbon cloth, carbon felt fibers are entangled through mechanical needling or thermal bonding processes, creating a thick (3-10 mm), compressible mat with high porosity (>90%) and volumetric surface area. The random fiber orientation provides isotropic properties and excellent through-plane permeability, facilitating electrolyte penetration and substrate diffusion throughout the electrode thickness.

Carbon felt is manufactured from polyacrylonitrile (PAN) or rayon precursor felts through stabilization in air (200-300 C), carbonization in inert atmosphere (1000-1500 C), and optional graphitization (2000-3000 C). The resulting material features individual fiber diameters of 7-15 um, fiber lengths of 50-100 mm, and bulk electrical conductivity of 50-500 S/m (lower than carbon cloth due to random fiber contacts). Commercial carbon felts used in MES include SGL Carbon GFD series, CeraMaterials CF series, AvCarb G100, and Alfa Aesar graphite felt. Typical thicknesses of 3-6 mm provide volumetric surface areas of 5,000-50,000 m^2/m^3.

In MES, carbon felt's primary advantage is its exceptional porosity and three-dimensionality. The thick, open structure allows development of multi-layered biofilms throughout the electrode volume, rather than being limited to the external surface as with flat electrodes. This enables volumetric current densities of 100-1000 A/m^3, significantly higher than two-dimensional electrode formats. Carbon felt anodes have demonstrated some of the highest reported current densities in half-cell configurations, particularly when combined with surface modifications such as acid treatment, electrochemical oxidation, or carbon nanotube decoration.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Materials |
| **Subcategory** | Carbon-Based Anodes |
| **Type** | object |
| **Papers Reporting** | 6 |

## Typical Values

- **Valid Range**: Thickness 1-12 mm; porosity 85-98%; conductivity 10-1000 S/m
- **Typical Range**: Thickness 3-6 mm; porosity 90-95%; conductivity 50-500 S/m
- **Fiber Diameter**: 7-15 um
- **BET Surface Area**: 0.5-5 m^2/g
- **Volumetric Surface Area**: 5,000-50,000 m^2/m^3
- **Areal Weight**: 100-800 g/m^2
- **Cost**: $50-$300/m^2

## Measurement Methods

- **Mercury Intrusion Porosimetry (MIP)**: MIP (e.g., Micromeritics AutoPore IV) determines porosity, pore size distribution, and pore volume by measuring mercury intrusion at pressures from 0.1 to 400 MPa. Carbon felt typically shows a bimodal pore distribution with macropores (50-500 um, inter-fiber spaces) and mesopores (1-50 um, fiber surface features). Total porosity values from MIP agree well with gravimetric methods.
- **Through-Plane Permeability**: Darcy permeability is measured by flowing electrolyte through a defined area of carbon felt at controlled flow rates and measuring the pressure drop. Typical permeability coefficients for 5 mm carbon felt are 10^-10 to 10^-8 m^2, ensuring adequate convective transport.
- **Compression Testing**: Uniaxial compression testing on a universal testing machine (e.g., Instron 5944) measures stress-strain behavior and compressive modulus. Carbon felt is highly compressible, with 50% strain achievable at 0.1-0.5 MPa. This compressibility is important for ensuring good electrical contact with current collectors.

## Affecting Factors

### Primary

- **Carbonization Temperature**: Higher carbonization temperatures (1500-3000 C) increase graphitization, improving electrical conductivity from 50 S/m (1000 C) to 500 S/m (2500 C) but reducing surface functional groups and hydrophilicity. Most commercial carbon felts for MES are carbonized at 1000-1500 C for a balance of conductivity and biocompatibility.
- **Surface Treatment**: Untreated carbon felt is moderately hydrophobic (contact angle 100-130 degrees). Acid treatment (HNO3, 60-80 C, 4-12 hours) introduces oxygen functional groups and reduces contact angle to 30-60 degrees. Electrochemical oxidation (+1.5 to +2.0 V vs. Ag/AgCl in 0.5 M H2SO4) provides more controlled surface functionalization with 40-80% improvement in biofilm attachment rate.
- **Compression State**: Carbon felt must be compressed against the current collector to minimize contact resistance. Optimal compression is 10-30% of original thickness, reducing contact resistance from >100 ohm cm^2 (uncompressed) to 0.5-5 ohm cm^2 while maintaining adequate porosity for substrate transport.
- **Thickness**: Thicker felts provide more surface area for biofilm growth but face substrate diffusion limitations beyond 2-3 mm depth at typical wastewater concentrations (300-500 mg COD/L). Active biofilm penetration is limited to the outer 1-3 mm in most operating conditions.
- **Flow Configuration**: Flow-through mode (electrolyte forced through the felt) significantly outperforms flow-over mode (electrolyte flowing past the felt surface), achieving 2-5x higher current densities through enhanced mass transfer to internal biofilm surfaces.

## Related Parameters

- **name**: Electrode Porosity

- **relationship**: Carbon felt porosity (90-95%) is among the highest of any electrode material used in MES.
- **name**: Anode Material

- **relationship**: Carbon felt is one of the most effective anode materials for high volumetric current density applications.
- **name**: Diffusion Resistance

- **relationship**: The thick structure creates potential diffusion limitations for substrate and proton transport.
- **name**: Internal Resistance

- **relationship**: Through-plane resistance of compressed carbon felt contributes 1-10 ohm cm^2 to total cell resistance.

## Compatible Systems

Anode Materials

## References

- Pham, T. H. et al. (2006). Anode performance of carbon felt and carbon paper in a microbial fuel cell. Electroanalysis, 18(19-20), 2009-2015.
- Liu, Y. et al. (2012). Carbon fiber-based flow-through electrode for enhanced power generation in microbial fuel cells. Electrochemistry Communications, 14(1), 71-74.
- Chen, S. et al. (2012). Electrochemical analysis of biofilm development on graphite felt anodes in microbial fuel cells. Electrochemistry Communications, 16(1), 78-82.
- Chou, H. T. et al. (2014). A novel carbon felt cathode for enhanced power production in microbial fuel cells. Journal of Power Sources, 243, 92-98.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Carbon+Felt&body=**Parameter%3A**+Carbon+Felt%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fcarbon-felt.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Carbon+Felt&body=**Parameter%3A**+Carbon+Felt%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fcarbon-felt.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Carbon+Felt&body=**Parameter%3A**+Carbon+Felt%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fcarbon-felt.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
