# Water Contact Angle

Contact angle is the angle formed between the tangent to a liquid droplet at
the three-phase contact line (solid-liquid-gas) and the solid surface, measured
through the liquid phase. In microbial electrochemical systems, contact angle
characterizes the surface wettability of electrode materials, membrane surfaces,
and other reactor components, providing a direct measure of the hydrophilicity
or hydrophobicity of these surfaces. A contact angle below 90 degrees indicates
a hydrophilic surface that promotes liquid spreading and electrolyte penetration,
while a contact angle above 90 degrees indicates a hydrophobic surface that
repels aqueous solutions.

Surface wettability profoundly influences biofilm attachment, electrode
electrolyte infiltration, gas management, and membrane fouling in MES. For
bioanodes, moderate hydrophilicity (contact angle 30-70 degrees) provides
optimal conditions for initial bacterial adhesion and biofilm development.
Highly hydrophilic surfaces (<20 degrees) may promote excessive non-selective
biomass adhesion, while hydrophobic surfaces (>90 degrees) resist biofilm
formation and can leave porous electrode interiors dry, creating dead zones
with no electrochemical activity.

For air-cathode gas diffusion layers (GDLs) in single-chamber MFCs, a
deliberately hydrophobic layer (contact angle 120-160 degrees, achieved via
PTFE coating) is essential to prevent water flooding of the air-facing side
while allowing oxygen diffusion to the catalyst layer. The hydrophilic catalyst
layer (contact angle 30-60 degrees) maintains electrolyte contact for proton
supply. This dual-wettability architecture creates the three-phase boundary
(gas-liquid-solid) necessary for efficient oxygen reduction reaction (ORR)
catalysis.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Materials |
| **Type** | number |
| **Unit** | degrees |

## Typical Values

- **Valid Range**: 0-180 degrees
- **Superhydrophilic**: <10 degrees (plasma-treated or UV-treated surfaces)
- **Hydrophilic**: 10-90 degrees
- **Hydrophobic**: 90-150 degrees
- **Superhydrophobic**: >150 degrees
- **Untreated carbon cloth**: 100-140 degrees (mildly hydrophobic)
- **Acid-treated carbon cloth**: 20-60 degrees (hydrophilic)
- **Carbon felt (as-received)**: 120-140 degrees
- **Ammonia-treated carbon felt**: 30-60 degrees
- **Graphite plate**: 70-90 degrees
- **Stainless steel (polished)**: 60-80 degrees
- **Biochar (700 degrees C)**: 80-120 degrees (volatile-dependent)
- **PTFE-coated GDL**: 140-160 degrees
- **Nafion (dry)**: 95-110 degrees
- **Nafion (hydrated)**: 70-85 degrees
- **SPEEK**: 50-80 degrees (DS-dependent)
- **AEM (quaternary ammonium)**: 50-70 degrees

## Measurement Methods

- **Sessile Drop Method (Static Contact Angle)**: The standard technique for contact angle measurement. Deposit a 2-5 uL droplet of deionized water (or test liquid) onto the horizontal electrode or membrane surface using a microsyringe or automated dispenser. Capture a side-view image of the droplet using a goniometer camera system (e.g., Rame-Hart, Kruss DSA, Biolin Theta). Analyze the drop profile using Young-Laplace or tangent fitting algorithms to determine the contact angle at the three-phase line. Measure at minimum 5 positions across the surface and report mean ± standard deviation. Control ambient humidity (40-60% RH) and temperature (23 ± 2 degrees C) to prevent evaporation artifacts. Measurement time: <60 seconds per droplet before evaporation and dynamic effects become significant.
- **Dynamic Contact Angle (Advancing/Receding)**: Measure advancing contact angle (theta_a) by slowly increasing droplet volume (1 uL/s) using an automated syringe while monitoring the contact line. Theta_a represents the maximum stable contact angle before the contact line advances. Measure receding contact angle (theta_r) by withdrawing liquid at the same rate. Theta_r is the minimum angle before the contact line recedes. Contact angle hysteresis (CAH = theta_a - theta_r) quantifies surface chemical heterogeneity and roughness. Low CAH (<10 degrees) indicates a chemically uniform surface. High CAH (>30 degrees) indicates heterogeneous wettability.
- **Wilhelmy Plate Method**: Immerse a rectangular electrode sample (10 x 30 mm) into a test liquid at controlled speed (1-5 mm/min) while measuring the meniscus force with a microbalance. The advancing contact angle is calculated from: F = P x gamma x cos(theta), where F is the meniscus force, P is the wetted perimeter, and gamma is the surface tension. This method provides continuous contact angle measurement along the immersion depth, revealing wettability variations. Best suited for flat, rigid samples (graphite plates, metal electrodes).
- **Capillary Rise Method (Porous Materials)**: For porous electrodes (carbon felt, GAC beds) where sessile drop measurements are unreliable due to liquid absorption, the Washburn capillary rise method is appropriate. Suspend the porous sample vertically with its lower edge touching the test liquid surface. Monitor the mass increase over time as liquid wicks into the pores. Contact angle is calculated from the Washburn equation: m²/t = (C x rho² x gamma x cos(theta)) / (2 x eta), where C is a material-specific geometric constant (determined with a perfectly wetting liquid, e.g., hexane), rho is liquid density, gamma is surface tension, and eta is viscosity.

## Affecting Factors

### Primary

- **Surface Chemistry**: Oxygen-containing functional groups (hydroxyl,    carboxyl, carbonyl) reduce contact angle by 40-80 degrees on carbon    surfaces. Acid treatment (HNO₃, H₂SO₄, or KMnO₄) introduces these groups,    converting hydrophobic carbon cloth (130 degrees) to hydrophilic (30-50    degrees). Fluorocarbon coatings (PTFE, FEP) increase contact angle to 140-    160 degrees.
- **Surface Roughness**: Wenzel theory predicts that roughness amplifies the    intrinsic wettability: rough hydrophilic surfaces become more hydrophilic,    and rough hydrophobic surfaces become more hydrophobic. For carbon felt with    roughness factor r > 2, the apparent contact angle can differ from the    intrinsic angle by 20-40 degrees.
- **Surface Contamination**: Adsorbed organic contaminants (oils, fingerprints,    atmospheric hydrocarbons) increase contact angle by 20-50 degrees. Cleaning    protocols (solvent rinse, UV-ozone, plasma treatment) must precede    measurement for accurate baseline characterization.
- **Biofilm Formation**: Bacterial colonization and EPS secretion dramatically    alter surface wettability. Initial bacterial adhesion is favored on surfaces    with contact angles of 40-70 degrees. Mature biofilms create a hydrophilic    EPS layer (contact angle 15-40 degrees) regardless of the underlying    substrate.
- **Thermal Treatment**: Heat treatment of carbon materials at 200-400 degrees    C in air removes surface oxides and adsorbed water, increasing hydrophobicity.    Treatment at 300-600 degrees C in NH₃ or N₂ plasma introduces nitrogen    functional groups that increase hydrophilicity and provide nitrogen doping    for improved electrocatalytic activity.
- **Electrolyte Composition**: Dissolved salts reduce surface tension of the    wetting liquid by 1-3 mN/m at MES-relevant concentrations (10-200 mM),    slightly reducing apparent contact angle. Surfactant-like metabolites in    wastewater can reduce contact angle significantly.
- **pH**: Ionization of surface functional groups (carboxyl: pKa ~4.5) at pH >    pKa increases negative surface charge and hydrophilicity. Contact angle of    carboxylated surfaces decreases by 10-20 degrees between pH 3 and pH 8.
- **Aging and Degradation**: Surface oxidation of carbon materials during    long-term MES operation gradually decreases hydrophobicity. PTFE coatings    degrade under biological and electrochemical conditions, losing hydrophobic    character after 6-24 months.

## Related Parameters

- **name**: Biofilm Thickness

- **relationship**: Initial biofilm attachment rate correlates with surface
- **name**: Electrode Surface Area

- **relationship**: Effective electrochemically active area depends on
- **name**: Electrical Conductivity (Electrode)

- **relationship**: Surface treatments that modify contact
- **name**: Membrane Type

- **relationship**: Membrane surface wettability influences biofouling rate and
- **name**: Oxygen Transfer

- **relationship**: Air-cathode GDL hydrophobicity controls water flooding
- **name**: Internal Resistance

- **relationship**: Incomplete electrolyte infiltration of hydrophobic

## Compatible Systems

Surface Properties

## References

1. Guo, K., Prevoteau, A., Patil, S.A., and Rabaey, K. (2015). "Engineering
   electrodes for microbial electrocatalysis." Current Opinion in
   Biotechnology, 33, 149-156.

2. Santoro, C., Arbizzani, C., Erable, B., and Ieropoulos, I. (2017).
   "Microbial fuel cells: From fundamentals to applications." Journal of Power
   Sources, 356, 225-244.

3. Zhang, X., Xia, X., Ivanov, I., Huang, X., and Logan, B.E. (2014).
   "Enhanced activated carbon cathode performance for microbial fuel cell by
   blending carbon black." Environmental Science & Technology, 48(3), 2075-2081.

4. Cheng, S. and Wu, J. (2013). "Air-cathode preparation with activated carbon
   as catalyst, PTFE as binder and nickel foam as current collector for
   microbial fuel cells." Bioelectrochemistry, 92, 22-26.

5. Yuan, Y., Kim, S., and Logan, B.E. (2011). "Polypyrrole-coated reticulated
   vitreous carbon as anode in microbial fuel cells for higher energy output."
   Energy & Environmental Science, 4(4), 1391-1395.

6. Young, T. (1805). "An essay on the cohesion of fluids." Philosophical
   Transactions of the Royal Society of London, 95, 65-87.

---

_This parameter documentation covers contact angle measurement methods, surface
modification strategies, and wettability effects on biofilm attachment and
electrode performance in microbial electrochemical systems. Surface wettability
engineering is a critical tool for optimizing electrode-biofilm interactions and
gas diffusion layer performance._

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Water+Contact+Angle&body=**Parameter%3A**+Water+Contact+Angle%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fwater-contact-angle.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Water+Contact+Angle&body=**Parameter%3A**+Water+Contact+Angle%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fwater-contact-angle.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Water+Contact+Angle&body=**Parameter%3A**+Water+Contact+Angle%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fwater-contact-angle.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
