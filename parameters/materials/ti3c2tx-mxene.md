# Ti3c2tx Mxene

Ti3C2Tx MXene is the most extensively studied member of the MXene family of two-dimensional (2D) transition metal carbides and nitrides. It is synthesized by selective etching of the aluminum layer from the Ti3AlC2 MAX phase precursor, yielding titanium carbide nanosheets with surface terminations (Tx = -OH, -O, -F, or mixtures thereof). Each Ti3C2Tx monolayer consists of three titanium layers sandwiching two carbon layers, with surface functional groups on the outer titanium atoms, producing a total sheet thickness of approximately 1-2 nm.

Ti3C2Tx exhibits the highest electrical conductivity among all MXenes (up to 20,000 S/cm for spin-cast films), exceptional hydrophilicity, and large specific capacitance, making it a prime candidate for electrode modification in microbial electrochemical systems. Its hydrophilic surface promotes bacterial adhesion and biofilm formation, while its metallic conductivity facilitates rapid extracellular electron transfer. In MES applications, Ti3C2Tx has been used as an anode coating to enhance bioelectrogenesis, as a cathode catalyst support for oxygen reduction, and as a conductive additive in composite electrodes.

### Crystal Structure

- **Structure type**: M3X2 MXene (3 metal layers, 2 carbon layers)
- **Space group**: P6_3/mmc (hexagonal)
- **Lattice parameter a**: 3.05 angstroms
- **Layer thickness**: ~1.5 nm (single layer with terminations)
- **d-spacing (002)**: 12-15 angstroms (hydrated multilayer); up to 25 angstroms with intercalants
- **Theoretical density**: 3.7 g/cm^3

## Basic Information

| Property | Value |
|---|---|
| **Category** | Materials |
| **Subcategory** | MXene Materials |
| **Type** | object |

## Typical Values

- **Drop-casting loading**: 0.1 - 1.0 mg/cm^2
- **Spray coating**: 0.05 - 0.5 mg/cm^2
- **Vacuum filtration membrane**: 1 - 10 um film thickness
- **Composite electrode (MXene/carbon)**: 5 - 30 wt% MXene
- **Optimal MES loading**: 0.2 - 0.5 mg/cm^2 (balance of performance and cost)

## Measurement Methods

- **Synthesis**: 1. **HF Etching (Original Method)**:    - Immerse Ti3AlC2 powder (< 38 um) in 48% HF for 24-48 hours at room temperature    - Wash with DI water by centrifugation until pH > 5    - Collect multilayer Ti3C2Tx sediment    - Safety concern: concentrated HF; largely replaced by milder methods  2. **Minimally Intensive Layer Delamination (MILD)**:    - Dissolve LiF (1.6 g) in 9 M HCl (20 mL)    - Add Ti3AlC2 (1 g) slowly; stir at 35 degrees C for 24 hours    - Wash by centrifugation (6 cycles at 3500 rpm)    - Produces clay-like sediment that can be directly delaminated by manual shaking    - Preferred method for MES applications; produces large, defect-free flakes  3. **Delamination**:    - Manual shaking or brief sonication (5-30 min) in deoxygenated water    - Centrifuge at 3500 rpm for 1 hour; collect supernatant (single/few-layer sheets)    - Typical concentration: 1-10 mg/mL colloidal suspension    - Flake lateral size: 0.5 - 10 um
- **Structural Characterization**: - **XRD**: (002) peak shifts from 9.5 degrees (Ti3AlC2) to 5.8-7.0 degrees (Ti3C2Tx); peak broadening indicates delamination quality - **Raman**: Characteristic modes at 200 (A_1g Ti), 380 (E_g), 580-620 (A_1g C) cm^-1 - **XPS**: Ti 2p (454-459 eV), C 1s (281-289 eV), O 1s, F 1s; deconvolution yields termination ratios - **AFM**: Confirms monolayer thickness (~1.5 nm) and lateral dimensions - **TEM/SAED**: Hexagonal diffraction pattern confirms crystallinity
- **Performance Evaluation in MES**: 1. **Electrode Preparation**: Coat carbon cloth/felt with Ti3C2Tx colloidal suspension by drop-casting or vacuum filtration; dry under vacuum or nitrogen at room temperature 2. **MFC Testing**: Assemble into MFC reactor; inoculate with anaerobic wastewater or pure culture; monitor voltage across known external resistance; generate polarization and power curves after biofilm maturation (2-4 weeks) 3. **EIS Analysis**: Measure impedance before and after MXene modification to quantify R_ct and R_ohm changes 4. **Biofilm Imaging**: SEM and confocal laser scanning microscopy (CLSM) to visualize biofilm morphology on MXene-modified surfaces

## Affecting Factors

### Primary

- **MAX Phase Purity**: Ti3AlC2 with < 5% TiC impurity produces highest-quality MXene; commercial MAX powders vary in quality
- **Etching Completeness**: Residual Al reduces conductivity and electrochemical performance; verify by XRD (absence of Ti3AlC2 peak) and EDS (Al < 2 at%)
- **Flake Size**: Larger flakes (> 2 um) produce more conductive films with fewer inter-flake junctions; small flakes (< 500 nm) disperse better but form less conductive coatings
- **Surface Termination Ratio**: Higher -O/-OH fraction improves hydrophilicity and biocatalytic activity; -F terminations reduce biocompatibility; post-treatment with NaOH can convert -F to -OH
- **Oxidation in Water**: Ti3C2Tx slowly oxidizes to TiO2 in aerated aqueous solutions; half-life of colloidal suspensions: 5-25 days at room temperature in air
- **Antioxidant Strategies**: Sodium L-ascorbate addition extends shelf life to months; storage under argon or nitrogen atmosphere; polyphosphate intercalation
- **Electrochemical Stability**: Anodic potentials above +0.4 V vs. Ag/AgCl can accelerate oxidation; MFC anodes operate at -0.3 to -0.1 V, within the stable window
- **pH Effects**: Stable at pH 4-10; rapid degradation below pH 2 (HF regeneration) or above pH 12
- **Surface Charge**: Negative zeta potential (-30 to -50 mV) initially repels negatively charged bacteria but hydrophilic -OH groups promote adhesion through hydrogen bonding
- **Roughness and Topography**: Wrinkled MXene sheets create nanoscale surface features that enhance bacterial attachment by 30-60% vs. smooth surfaces
- **Electron Transfer Enhancement**: Metallic Ti3C2Tx provides direct electrical connection between outer biofilm layers and the current collector, reducing the electron transfer distance
- **Antimicrobial Effects**: At high concentrations (> 200 ug/mL), Ti3C2Tx can disrupt bacterial membranes; at electrode loadings (0.1-0.5 mg/cm^2), this effect is minimal and does not inhibit biofilm formation

## Related Parameters

- **name**: Nb2CTx MXene

- **relationship**: Lower conductivity, potentially better ORR catalysis due to Nb d-orbital configuration
- **name**: V2CTx MXene

- **relationship**: Superior redox catalysis for ORR; higher theoretical specific capacitance but less stable
- **name**: Graphene/rGO

- **relationship**: Similar 2D structure but hydrophobic (unless functionalized); lower capacitance
- **name**: Carbon Nanotubes

- **relationship**: 1D structure, high conductivity, but less hydrophilic and harder to form uniform coatings
- **name**: Electrode Surface Area

- **relationship**: Ti3C2Tx coating increases electrochemically active surface area by 2-5x
- **name**: Electrical Conductivity

- **relationship**: Among the highest for solution-processable 2D materials
- **name**: Contact Angle

- **relationship**: Low contact angle (< 35 degrees) promotes electrolyte wetting and biofilm adhesion
- **name**: Charge Transfer Resistance

- **relationship**: Key metric for evaluating MXene coating effectiveness
- **name**: Power Density

- **relationship**: Ti3C2Tx-modified MFCs among the highest reported for non-precious-metal systems
- **name**: Internal Resistance

- **relationship**: MXene coatings reduce R_int by 20-50% through combined reduction of R_ohm and R_ct
- **name**: Current Density

- **relationship**: Enhanced biofilm coverage and conductivity translate to higher peak and sustained current

## Compatible Systems

Anode Materials

## References

### Discovery and Fundamental Properties

1. **Naguib, M., et al. (2011)**. "Two-dimensional nanocrystals produced by exfoliation of Ti3AlC2". *Advanced Materials*, 23(37), 4248-4253.
   - Original discovery of Ti3C2Tx MXene

2. **Ghidiu, M., et al. (2014)**. "Conductive two-dimensional titanium carbide 'clay' with high volumetric capacitance". *Nature*, 516(7529), 78-81.
   - MILD synthesis method; clay-like processing of Ti3C2Tx

3. **Zhang, C.J., et al. (2017)**. "Transparent, flexible, and conductive 2D titanium carbide (MXene) films with high volumetric capacitance". *Advanced Materials*, 29(36), 1702678.
   - Record conductivity measurements for Ti3C2Tx films

### Electrochemistry and Catalysis

4. **Lukatskaya, M.R., et al. (2013)**. "Cation intercalation and high volumetric capacitance of two-dimensional titanium carbide". *Science*, 341(6153), 1502-1505.
   - Pseudocapacitive charge storage mechanism in Ti3C2Tx

5. **Handoko, A.D., et al. (2019)**. "Tuning the basal plane functionalization of two-dimensional metal carbides (MXenes) to control hydrogen evolution activity". *ACS Applied Energy Materials*, 2(1), 269-277.
   - HER catalysis on Ti3C2Tx surfaces

### MES Applications

6. **Xu, H., et al. (2020)**. "Ti3C2Tx MXene as anode material for high-performance microbial fuel cells". *ACS Sustainable Chemistry & Engineering*, 8(7), 2987-2995.
   - Direct study of Ti3C2Tx anode modification in MFC

7. **Zhang, L., et al. (2021)**. "MXene (Ti3C2Tx)-coated carbon felt anode for enhanced bioelectricity generation in microbial fuel cells". *Journal of Power Sources*, 497, 229883.
   - Comprehensive performance evaluation of Ti3C2Tx in MFC systems

8. **Gogotsi, Y., & Anasori, B. (2019)**. "The rise of MXenes". *ACS Nano*, 13(8), 8491-8494.
   - Perspective on MXene applications including bioelectrochemistry

---

*Parameter documentation for the MESS (Microbial Electrochemical Systems Standardization) database. Last updated based on peer-reviewed literature through 2024.*

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Ti3c2tx+Mxene&body=**Parameter%3A**+Ti3c2tx+Mxene%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fti3c2tx-mxene.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Ti3c2tx+Mxene&body=**Parameter%3A**+Ti3c2tx+Mxene%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fti3c2tx-mxene.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Ti3c2tx+Mxene&body=**Parameter%3A**+Ti3c2tx+Mxene%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fti3c2tx-mxene.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
