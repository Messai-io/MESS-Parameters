# Shrinkage Rate

Shrinkage Rate quantifies the dimensional reduction of materials used in microbial electrochemical system (MES) construction during curing, drying, thermal processing, or operational exposure, expressed as a percentage of the original dimension or as linear/volumetric contraction per unit length (%, mm/m, or ppm). This parameter applies to polymer membranes during dehydration, cement/grout in reactor construction, adhesives and sealants during curing, 3D-printed reactor components, and electrode binder matrices. In the safety and regulatory context, shrinkage is critical because it creates gaps in seals and joints that compromise containment, generates internal stresses that lead to cracking, causes dimensional mismatches in assembled systems, and may expose workers to failure modes not apparent during initial construction.

Safety implications of uncontrolled shrinkage in MES are significant. Membrane shrinkage (Nafion shrinks 5-15% when transitioning from wet to dry conditions) creates gaps between the membrane and frame, allowing cross-contamination of electrode chambers, mixing of hydrogen and oxygen (explosion risk in MECs), and leakage of biohazardous effluent. Adhesive and sealant shrinkage during curing can create micro-channels along bonded interfaces, providing pathways for gas leaks or liquid seepage. Concrete shrinkage in large-scale MES reactor construction causes cracking that admits groundwater contaminants or allows treated wastewater to seep into the subsurface, violating groundwater protection regulations. Electrode composite shrinkage from binder curing can cause delamination from current collectors, creating high-resistance hotspots that generate localized heating.

Regulatory standards addressing shrinkage include ASTM D2566 (linear shrinkage of cured thermoset casting resins), ASTM C157 (length change of hardened hydraulic-cement mortar and concrete), ISO 175 (dimensional change of plastics after immersion), ACI 318 (concrete structural code with shrinkage provisions), and EU Construction Products Regulation (305/2011) for materials used in permanent structures. The ASME Boiler and Pressure Vessel Code addresses dimensional tolerances for fabricated components that account for manufacturing shrinkage.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Emerging Technology |
| **Subcategory** | Printable Materials |
| **Type** | number |
| **Unit** | % |
| **Minimum** | 0 |
| **Maximum** | 20 |

## Typical Values

- **Valid Range**: 0.001-25% linear shrinkage depending on material and conditions
- **Typical Range**: 0.1-5% for most MES construction and membrane materials

## Measurement Methods

- **Linear Dimensional Change (ASTM D2566, ASTM C157)**: 1. Prepare standardized test specimens with embedded gauge studs (for concrete: 25 x 25 x 285 mm prisms per ASTM C157) 2. Measure initial length using a length comparator (accuracy +/- 0.001 mm) or calibrated digital caliper 3. Subject specimens to the relevant condition change (drying, curing, thermal cycling, chemical immersion) 4. Measure dimensions at defined intervals: 1, 3, 7, 14, 28, 56, 90, 180, 365 days 5. Calculate shrinkage rate: S(%) = [(L_initial - L_final) / L_initial] x 100 6. Report as percentage at each measurement interval; plot shrinkage curve over time
- **Membrane Dimensional Stability (ASTM D756)**: 1. Cut membrane specimens to standardized dimensions (50 x 50 mm minimum, 3 replicates) 2. Condition in the reference state (e.g., boiled in water for 1 hour, or equilibrated at 23 degC / 50% RH) 3. Measure dimensions using a travelling microscope or calibrated digital image analysis 4. Transfer specimens to the target condition (dried at 80 degC, immersed in MES electrolyte, or cooled to operating temperature) 5. Re-measure dimensions after equilibration 6. Calculate shrinkage in machine direction (MD) and transverse direction (TD) separately; anisotropic shrinkage is common
- **In-Situ Strain Monitoring**: 1. Bond strain gauges (resistance type, 120 or 350 ohm) to MES components at critical locations (membrane edges, adhesive joints, concrete surfaces) 2. Connect to strain indicator or data acquisition system (resolution <1 microstrain) 3. Monitor strain continuously during curing, drying, or first operational cycles 4. Identify shrinkage-induced tensile strains that approach material failure limits 5. Correlate strain data with visual inspection for crack initiation or seal gap formation 6. Use fiber optic strain sensors (FBG - Fiber Bragg Grating) for distributed measurement along extended components

## Affecting Factors

### Primary

- **Moisture Content Change**: Dehydration is the primary driver of shrinkage in polymeric membranes and cementitious materials; each 10% moisture loss typically causes 0.5-2% linear shrinkage in polymers
- **Curing Chemistry**: Polymerization reactions in adhesives and binders consume volume (free radical polymerization of acrylics causes 5-15% shrinkage); ring-opening or condensation reactions cause less shrinkage
- **Temperature**: Cooling from elevated processing temperatures (sintering, heat curing) causes thermal contraction; magnitude depends on CTE and temperature range
- **Material Composition**: Filler loading reduces shrinkage (reinforced concrete shrinks less than neat cement paste); fiber reinforcement distributes shrinkage stresses and prevents macro-cracking
- **Specimen Geometry**: Thinner sections dry and shrink faster than thicker sections, creating differential shrinkage stresses; the volume-to-surface-area ratio determines shrinkage kinetics
- **Ambient Conditions**: Lower humidity and higher air velocity accelerate drying shrinkage, potentially causing surface cracking before interior equilibrates
- **Restraint Conditions**: Restrained shrinkage generates tensile stresses that can exceed material strength, causing cracking at interfaces
- **Age at Loading**: Concrete and adhesives loaded before full cure experience greater long-term shrinkage and creep
- **Chemical Exposure**: Some chemicals (solvents, strong acids/bases) cause additional dimensional change beyond simple moisture effects

## Related Parameters

- **name**: Stability

- **relationship**: Dimensional stability over operational lifetime depends on controlling shrinkage and its consequences
- **name**: Thermal Cycling

- **relationship**: Temperature fluctuations cause cyclic dimensional changes that interact with irreversible shrinkage
- **name**: Chemical Resistance

- **relationship**: Chemical exposure may cause swelling (opposite of shrinkage) or accelerate dimensional change in polymeric materials
- **name**: Vacuum Compatibility

- **relationship**: Vacuum exposure can extract moisture and volatile plasticizers, causing additional shrinkage
- **name**: Water Retention

- **relationship**: The water retention capacity of materials affects the magnitude and rate of shrinkage upon drying

## Compatible Systems

3d Printing Additive Manufacturing

## References

- ACI Committee 209. (2008). Prediction of Creep, Shrinkage, and Temperature Effects in Concrete Structures (ACI 209.2R-08).
- ASTM C157/C157M-17. Standard Test Method for Length Change of Hardened Hydraulic-Cement Mortar and Concrete.
- Neville, A. M. (2011). Properties of Concrete, 5th Edition. Pearson Education.
- Kusoglu, A., & Weber, A. Z. (2017). New insights into perfluorinated sulfonic-acid ionomers. Chemical Reviews, 117(3), 987-1104.
- Mauritz, K. A., & Moore, R. B. (2004). State of understanding of Nafion. Chemical Reviews, 104(10), 4535-4586.
- ASTM D2566-86(2014). Standard Test Method for Linear Shrinkage of Cured Thermoset Casting Resins During Cure.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Shrinkage+Rate&body=**Parameter%3A**+Shrinkage+Rate%0A**Category%3A**+Emerging+Technology%0A**File%3A**+parameters%2Femerging-technology%2Fshrinkage-rate.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Shrinkage+Rate&body=**Parameter%3A**+Shrinkage+Rate%0A**Category%3A**+Emerging+Technology%0A**File%3A**+parameters%2Femerging-technology%2Fshrinkage-rate.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Shrinkage+Rate&body=**Parameter%3A**+Shrinkage+Rate%0A**Category%3A**+Emerging+Technology%0A**File%3A**+parameters%2Femerging-technology%2Fshrinkage-rate.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
