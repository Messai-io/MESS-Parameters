# Nb2ctx Mxene

Nb2CTx MXene is a two-dimensional (2D) niobium carbide material belonging to the MXene family, with the general formula Nb2CTx where T represents surface termination groups (-OH, -O, -F, or -Cl) acquired during synthesis. MXenes are produced by selective etching of the A-layer (typically aluminum) from MAX phase precursors; for Nb2CTx, the parent MAX phase is Nb2AlC. The resulting material consists of niobium carbide sheets with a thickness of approximately 1-2 nm per monolayer, exhibiting metallic conductivity, hydrophilicity (due to surface functional groups), and tunable electrochemical properties.

In microbial electrochemical systems (MES), Nb2CTx MXene is investigated as an electrode modifier and electrocatalyst. Its layered structure provides high specific surface area for biofilm attachment, while its metallic conductivity facilitates electron transfer. Compared to Ti3C2Tx (the most studied MXene), Nb2CTx offers distinct advantages in catalytic activity for oxygen reduction reaction (ORR) and hydrogen evolution reaction (HER) due to niobium's d-orbital electronic configuration, making it particularly relevant for MFC cathodes and MEC cathode catalysts.

### Crystal Structure

- **Structure type**: M2X MXene (2 metal layers, 1 carbon layer)
- **Space group**: P6_3/mmc (hexagonal)
- **Lattice parameters**: a = 3.13 angstroms, c varies with intercalation
- **Layer thickness**: ~1.0 nm (single layer including terminations)
- **Interlayer spacing**: 1.2-2.5 nm (depending on intercalant and hydration)

## Basic Information

| Property | Value |
|---|---|
| **Category** | Materials |
| **Subcategory** | MXene Materials |
| **Type** | object |

## Typical Values

- **Thin film coating**: 0.05 - 0.5 mg/cm^2
- **Composite electrode**: 1 - 10 wt% in carbon matrix
- **Spray-coated cathode**: 0.1 - 2 mg/cm^2
- **Optimal loading for MES**: 0.1 - 0.5 mg/cm^2 (balance of activity and cost)

## Measurement Methods

- **Synthesis and Characterization**: 1. **Selective Etching (HF method)**:    - Immerse Nb2AlC powder in 48% HF at room temperature for 48-96 hours    - Wash with deionized water until pH > 5    - Centrifuge and collect multilayer Nb2CTx sediment    - Yield: 60-80% depending on particle size and etching time  2. **Milder Etching (LiF/HCl method)**:    - Dissolve LiF in 6-12 M HCl    - Add Nb2AlC powder; stir at 35-60 degrees C for 24-72 hours    - Produces fewer defects; enables direct delamination via Li intercalation    - Safer than concentrated HF; preferred for large-scale preparation  3. **Delamination**:    - Intercalate with TBAOH (tetrabutylammonium hydroxide) or DMSO    - Sonicate for 1-4 hours under inert atmosphere    - Centrifuge to collect single/few-layer nanosheets    - Concentration of colloidal suspension: 0.5-5 mg/mL
- **Structural Characterization**: - **X-ray Diffraction (XRD)**: Confirms conversion from MAX to MXene by downshift of (002) peak from 13.0 degrees (Nb2AlC) to 7-9 degrees (Nb2CTx) - **Raman Spectroscopy**: Characteristic peaks at 230, 280, and 690 cm^-1 for Nb-C vibrations - **X-ray Photoelectron Spectroscopy (XPS)**: Quantifies surface termination ratios (-OH, -O, -F) - **Transmission Electron Microscopy (TEM)**: Confirms 2D sheet morphology and layer thickness - **Scanning Electron Microscopy (SEM)**: Shows accordion-like morphology of multilayer MXene
- **Electrochemical Characterization**: - **Cyclic Voltammetry (CV)**: Assess redox activity and capacitive behavior - **Linear Sweep Voltammetry (LSV)**: Measure ORR/HER catalytic activity - **Electrochemical Impedance Spectroscopy (EIS)**: Quantify charge transfer resistance changes - **Chronoamperometry**: Evaluate long-term stability under operating conditions

## Affecting Factors

### Primary

- **Etching Conditions**: Higher HF concentration and longer etching time produce more complete Al removal but introduce more defects and -F terminations; LiF/HCl produces more -OH/-O terminations
- **Delamination Method**: Sonication intensity affects sheet lateral size (100 nm - 10 um); excessive sonication creates smaller fragments with more edge defects
- **MAX Phase Quality**: Nb2AlC purity and particle size directly affect MXene quality; larger MAX particles (> 20 um) etch more slowly but produce larger sheets
- **Oxidation**: Nb2CTx oxidizes in aqueous solution over days to weeks, forming NbOx; stability is lower than Ti3C2Tx
- **Storage**: Must be stored in deoxygenated water or dried under vacuum; shelf life of colloidal suspension: 1-4 weeks at 4 degrees C
- **pH Sensitivity**: Stable in neutral to mildly acidic conditions (pH 4-8); degrades rapidly below pH 2 or above pH 10
- **Temperature**: Electrochemical performance degrades above 60 degrees C in aqueous environments due to accelerated oxidation
- **Biocompatibility**: Surface terminations (-OH) promote bacterial adhesion; preliminary studies show no cytotoxicity toward Geobacter or Shewanella at loadings below 1 mg/cm^2
- **Biofouling Resistance**: 2D sheet morphology may limit biofilm overgrowth on cathode surfaces compared to porous 3D structures
- **Electrolyte Interaction**: Cation intercalation (Na+, K+, H+) between MXene layers can alter conductivity and capacitance during MES operation
- **Long-term Stability**: Oxidation remains the primary concern; strategies include encapsulation in polymer matrices and use of carbon supports

## Related Parameters

- **name**: Ti3C2Tx MXene

- **relationship**: Most studied MXene; higher conductivity but lower catalytic activity for some reactions; benchmark for comparison
- **name**: V2CTx MXene

- **relationship**: Similar M2X structure; superior ORR catalytic activity due to vanadium redox chemistry
- **name**: Electrical Conductivity

- **relationship**: Determines ohmic losses in electrode; Nb2CTx is moderate among MXenes
- **name**: Specific Surface Area

- **relationship**: Controls biofilm attachment capacity and electrochemical active area
- **name**: Charge Transfer Resistance

- **relationship**: Nb2CTx coatings reduce R_ct at both anodes and cathodes
- **name**: Exchange Current Density

- **relationship**: Higher than bare carbon electrodes for ORR and HER
- **name**: Overpotential

- **relationship**: Nb2CTx-modified cathodes show 50-150 mV lower overpotential than unmodified carbon
- **name**: Internal Resistance

- **relationship**: MXene coatings can reduce total cell R_int by 15-40%
- **name**: Power Density

- **relationship**: MFC cathodes with Nb2CTx achieve 60-80% of Pt/C power density at a fraction of the cost
- **name**: Current Density

- **relationship**: Peak current increases of 20-60% reported with Nb2CTx anode modification
- **name**: Coulombic Efficiency

- **relationship**: Improved electron transfer at anode can increase CE by 5-15%

## Compatible Systems

Anode Materials

## References

### MXene Synthesis and Properties

1. **Naguib, M., et al. (2012)**. "Two-dimensional transition metal carbides". *ACS Nano*, 6(2), 1322-1331.
   - Original discovery of Nb2CTx MXene and characterization of its properties

2. **Mashtalir, O., et al. (2013)**. "Intercalation and delamination of layered carbides and carbonitrides". *Nature Communications*, 4, 1716.
   - Delamination methods for Nb2CTx and other MXenes

3. **Anasori, B., Lukatskaya, M.R., & Gogotsi, Y. (2017)**. "2D metal carbides and nitrides (MXenes) for energy storage". *Nature Reviews Materials*, 2, 16098.
   - Comprehensive review of MXene properties and energy applications

### Electrochemical Applications

4. **Pang, J., et al. (2019)**. "Applications of 2D MXenes in energy conversion and storage systems". *Chemical Society Reviews*, 48(1), 72-133.
   - Review including MXene electrocatalysis for ORR and HER

5. **Seh, Z.W., et al. (2017)**. "Combining theory and experiment in electrocatalysis: Insights into materials design". *Science*, 355(6321), eaad4998.
   - Theoretical framework for understanding Nb-based catalytic activity

### MES-Specific Studies

6. **Zou, L., et al. (2019)**. "MXene-based materials for bioelectrochemical systems". *Nano Energy*, 65, 104038.
   - Review of MXene applications in microbial electrochemical systems

7. **Zheng, S., et al. (2021)**. "Two-dimensional MXene as electrode materials for microbial fuel cells". *Journal of Power Sources*, 506, 230101.
   - Direct investigation of Nb2CTx and Ti3C2Tx in MFC configurations

---

*Parameter documentation for the MESS (Microbial Electrochemical Systems Standardization) database. Last updated based on peer-reviewed literature through 2024.*

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Nb2ctx+Mxene&body=**Parameter%3A**+Nb2ctx+Mxene%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fnb2ctx-mxene.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Nb2ctx+Mxene&body=**Parameter%3A**+Nb2ctx+Mxene%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fnb2ctx-mxene.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Nb2ctx+Mxene&body=**Parameter%3A**+Nb2ctx+Mxene%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fnb2ctx-mxene.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
