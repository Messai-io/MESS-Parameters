# V2ctx Mxene

V2CTx MXene is a two-dimensional (2D) vanadium carbide material produced by selective etching of the aluminum layer from the V2AlC MAX phase precursor. The resulting nanosheets have the stoichiometry V2CTx, where Tx denotes surface termination groups (-OH, -O, -F) that are inherent to the aqueous etching process. V2CTx belongs to the M2X subclass of MXenes, with each monolayer consisting of two vanadium atomic layers sandwiching a single carbon layer, producing a sheet thickness of approximately 0.9-1.2 nm.

V2CTx is distinguished from other MXenes by the redox-active nature of vanadium, which can exist in multiple oxidation states (V^2+, V^3+, V^4+, V^5+) under electrochemical cycling. This multivalent redox chemistry imparts exceptional pseudocapacitive behavior and catalytic activity for the oxygen reduction reaction (ORR) and hydrogen evolution reaction (HER). In microbial electrochemical systems, V2CTx is primarily investigated as a non-precious-metal cathode catalyst for MFC air-cathodes, where the vanadium redox centers can facilitate the 4-electron or 2-electron ORR pathway. Its application as an anode modifier to enhance extracellular electron transfer has also been explored.

### Crystal Structure

- **Structure type**: M2X MXene (2 metal layers, 1 carbon layer)
- **Space group**: P6_3/mmc (hexagonal)
- **Lattice parameter a**: 2.89 angstroms
- **Layer thickness**: ~0.9 nm (single layer with terminations)
- **d-spacing (002)**: 9.5 - 14 angstroms (multilayer, hydration-dependent)
- **Theoretical density**: 5.0 g/cm^3

## Basic Information

| Property | Value |
|---|---|
| **Category** | Materials |
| **Subcategory** | MXene Materials |
| **Type** | object |

## Typical Values

- **ORR cathode coating**: 0.1 - 1.0 mg/cm^2 (optimal: 0.3 - 0.5 mg/cm^2)
- **Composite with carbon black**: 20 - 50 wt% V2CTx for optimal ORR activity
- **Binder content**: 5 - 15% Nafion or PVDF in catalyst ink formulations

## Measurement Methods

- **Synthesis**: 1. **HF Etching**:    - Immerse V2AlC powder (200-400 mesh) in 48% HF at room temperature    - Stir for 72-96 hours (longer than Ti3AlC2 due to stronger V-Al bonds)    - Wash by centrifugation until pH > 5    - Collect multilayer V2CTx sediment    - Yield: 40-70%  2. **LiF/HCl Method (In-situ HF)**:    - Dissolve LiF (2 g) in 12 M HCl (20 mL)    - Add V2AlC (1 g) gradually at 35 degrees C    - Stir for 48-96 hours    - Produces V2CTx with higher -OH content and intercalated Li+ ions    - Enables easier delamination  3. **Delamination**:    - Intercalate with TMAOH (tetramethylammonium hydroxide) for 12-24 hours    - Sonicate briefly (10-30 min) under argon    - Centrifuge at 3500 rpm; collect supernatant containing single/few-layer sheets    - Colloidal concentration: 0.2-3 mg/mL
- **ORR Catalysis Characterization**: 1. **Rotating Disk Electrode (RDE)**:    - Drop-cast V2CTx ink onto glassy carbon RDE (5 mm diameter)    - Loading: 0.1 - 0.5 mg/cm^2    - LSV in O2-saturated 0.1 M KOH or pH 7 buffer at 5 mV/s    - Rotation rates: 400, 800, 1200, 1600 rpm    - Koutecky-Levich analysis yields electron transfer number (n)    - Compare onset potential, half-wave potential, and limiting current to Pt/C benchmark  2. **Rotating Ring-Disk Electrode (RRDE)**:    - Quantifies H2O2 production during ORR    - Lower H2O2 yield indicates more complete 4-electron pathway    - V2CTx typically shows 5-15% H2O2 yield (vs. < 5% for Pt/C)
- **Stability Testing**: - **Chronoamperometry**: Hold at ORR operating potential for 10,000 - 50,000 seconds; record current decay - **Accelerated Degradation Testing (ADT)**: 5,000-10,000 CV cycles between 0 and +1.0 V vs. RHE at 50 mV/s - **Methanol Crossover Test**: Add 1-3 M methanol to electrolyte during ORR; V2CTx shows better tolerance than Pt/C - **MFC Long-term Operation**: Monitor power output over 30-90 days to assess practical stability

## Affecting Factors

### Primary

- **Etching Duration**: Insufficient etching leaves residual V2AlC, reducing catalytic activity; over-etching introduces defects and dissolves vanadium from the lattice
- **Surface Chemistry**: -O terminations enhance ORR catalytic activity by providing oxygen binding sites; -F terminations are less catalytically active; NaOH post-treatment (1 M, 12 h) can partially replace -F with -OH
- **Delamination Quality**: Single-layer sheets expose more active vanadium sites than multilayer stacks; delaminated V2CTx shows 2-3x higher ORR current than multilayer
- **Defect Engineering**: Controlled creation of vanadium vacancies can enhance ORR activity by creating additional active sites; vacancy concentration must be optimized to avoid structural collapse
- **Vanadium Oxidation State**: V^3+/V^4+ redox couple is central to ORR catalysis; XPS analysis reveals that optimal V^4+/V^3+ ratio is approximately 1.5-2.0
- **Oxygen Adsorption**: DFT calculations show O2 adsorbs in side-on configuration on -O terminated V2CTx, facilitating O-O bond breaking for 4-electron ORR
- **pH Dependence**: ORR activity is higher in alkaline media (pH > 12) than in neutral pH; in neutral MFC electrolyte (pH 7), activity is 30-50% of alkaline performance
- **Electrode Architecture**: V2CTx/carbon black composites outperform pure V2CTx due to improved electron percolation and porosity for O2 transport
- **Oxidation Sensitivity**: V2CTx is more susceptible to oxidation than Ti3C2Tx; forms V2O5 nanostructures upon degradation, which can actually enhance capacitance but reduce conductivity
- **Aqueous Stability**: Colloidal suspensions degrade within 1-2 weeks at room temperature in air; argon storage extends stability
- **Electrochemical Window**: Stable from -0.8 to +0.6 V vs. Ag/AgCl in neutral pH; anodic potentials above +0.8 V cause irreversible oxidation
- **Temperature Effects**: ORR catalytic activity increases with temperature (20-40 degrees C) following Arrhenius behavior; degradation also accelerates above 35 degrees C

## Related Parameters

- **name**: Ti3C2Tx MXene

- **relationship**: Higher conductivity and stability but lower ORR catalytic activity; better suited as anode modifier
- **name**: Nb2CTx MXene

- **relationship**: Similar M2X structure; moderate ORR activity; less pseudocapacitive than V2CTx
- **name**: Mo2CTx MXene

- **relationship**: Promising HER catalyst; less studied for ORR; lower conductivity
- **name**: Ti2CTx MXene

- **relationship**: Same M2X structure as V2CTx but with titanium; lower catalytic activity
- **name**: ORR Onset Potential

- **relationship**: V2CTx achieves 80-95% of Pt/C onset potential in alkaline media
- **name**: Charge Transfer Resistance

- **relationship**: Lower R_ct at the cathode directly improves MFC power output
- **name**: Oxygen Diffusion Rate

- **relationship**: V2CTx-coated gas diffusion layers must maintain adequate O2 permeability
- **name**: Catalyst Durability

- **relationship**: V2CTx shows 15-30% activity loss over 30 days vs. < 10% for Pt/C
- **name**: Maximum Power Density

- **relationship**: V2CTx cathodes achieve 1.2-2.5 W/m^2 in optimized MFC configurations
- **name**: Internal Resistance

- **relationship**: Cathode R_ct reduction of 40-70% vs. unmodified carbon cathodes
- **name**: Coulombic Efficiency

- **relationship**: Cathode catalyst quality affects CE through parasitic reactions
- **name**: Cost Efficiency

- **relationship**: V2CTx estimated at $10-50/g research scale vs. $40-60/g for Pt/C; potentially < $1/g at industrial scale

## Compatible Systems

Anode Materials

## References

### V2CTx Synthesis and Properties

1. **Naguib, M., et al. (2013)**. "New two-dimensional niobium and vanadium carbides as promising materials for Li-ion batteries". *Journal of the American Chemical Society*, 135(43), 15966-15969.
   - Early synthesis and characterization of V2CTx MXene

2. **Dall'Agnese, Y., et al. (2015)**. "High capacitance of surface-modified 2D titanium carbide in acidic electrolyte". *Electrochemistry Communications*, 48, 118-122.
   - Pseudocapacitive properties of V2CTx compared to other MXenes

3. **Zhan, C., et al. (2019)**. "Understanding the MXene pseudocapacitance". *The Journal of Physical Chemistry Letters*, 9(6), 1223-1228.
   - Theoretical understanding of vanadium redox contributions to capacitance

### ORR Catalysis

4. **Yoon, Y., et al. (2018)**. "Precious-metal-free electrocatalysts for activation of hydrogen evolution with nonmetallic electron donor: chemical composition controllable MXenes". *Advanced Functional Materials*, 29(27), 1903443.
   - V2CTx as HER/ORR electrocatalyst

5. **Shao, M., et al. (2016)**. "Recent advances in electrocatalysts for oxygen reduction reaction". *Chemical Reviews*, 116(6), 3594-3657.
   - Context for non-precious-metal ORR catalysts including transition metal carbides

### MES Applications

6. **Zou, L., et al. (2019)**. "MXene-based materials for bioelectrochemical systems". *Nano Energy*, 65, 104038.
   - Review of MXene applications in MES including V2CTx cathode studies

7. **Li, M., et al. (2021)**. "Vanadium carbide MXene as an efficient non-precious metal electrocatalyst for oxygen reduction in microbial fuel cells". *Electrochimica Acta*, 381, 138218.
   - Direct V2CTx cathode evaluation in MFC configuration

---

*Parameter documentation for the MESS (Microbial Electrochemical Systems Standardization) database. Last updated based on peer-reviewed literature through 2024.*

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+V2ctx+Mxene&body=**Parameter%3A**+V2ctx+Mxene%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fv2ctx-mxene.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+V2ctx+Mxene&body=**Parameter%3A**+V2ctx+Mxene%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fv2ctx-mxene.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+V2ctx+Mxene&body=**Parameter%3A**+V2ctx+Mxene%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fv2ctx-mxene.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
