# Membrane Pore Size

Membrane pore size refers to the average diameter of the channels or voids within ion exchange membranes and separator materials used in microbial electrochemical systems (MES). This parameter fundamentally controls the selectivity and transport properties of the membrane, determining which species (ions, molecules, gases, bacteria) can pass between the anode and cathode chambers of dual-chamber MFC, MEC, and MDC configurations. Pore size is typically reported in nanometers (nm) and spans several orders of magnitude across the different membrane types used in MES, from sub-nanometer channels in dense ion exchange membranes to micrometer-scale pores in woven cloth separators.

The distinction between dense (non-porous) and porous membranes is critical in MES. Dense ion exchange membranes such as Nafion transport ions through a swollen polymer matrix via hopping between fixed charge sites, with effective "pore" sizes of 1-5 nm representing the aqueous channels within the polymer network. True porous separators (e.g., nylon mesh, glass fiber, J-cloth) have physical pores ranging from 100 nm to 100 um and provide separation primarily through size exclusion rather than charge selectivity. The choice of pore size involves a fundamental trade-off: smaller pores improve selectivity (preventing oxygen crossover and substrate loss) but increase ionic resistance, while larger pores reduce resistance but compromise separation.

**Units:** nanometers (nm), micrometers (um)

## Basic Information

| Property | Value |
|---|---|
| **Category** | Materials |
| **Type** | number |
| **Unit** | nm |
| **Papers Reporting** | 14 |

## Typical Values

- **text**: ### Dense Ion Exchange Membranes (Effective Channel Size)

| Membrane Type | Effective Pore/Channel Size (nm) | Ion Transport Mechanism |
|---|---|---|
| Nafion 117 (PEM) | 1 - 5 | Grotthuss mechanism through sulfonic acid channels |
| Nafion 212 (PEM) | 1 - 5 | Same mechanism, thinner membrane |
| SPEEK (sulfonated PEEK) | 1 - 4 | Sulfonated aromatic channels |
| PBI (polybenzimidazole) | 0.5 - 3 | Phosphoric acid-doped channels |
| Anion exchange membrane (AEM) | 1 - 5 | Quaternary ammonium channels |
| Bipolar membrane | 1 - 5 per layer | Combined CEM + AEM |

### Porous Separators

| Separator Type | Average Pore Size (um) | Porosity (%) | Application |
|---|---|---|---|
| Glass fiber separator | 0.5 - 5 | 80 - 95 | Low-cost MFC research |
| Nylon mesh (200 mesh) | 50 - 100 | 30 - 50 | Coarse separation |
| J-cloth (non-woven) | 10 - 50 | 60 - 80 | Ultra-low-cost MFC |
| Polypropylene membrane | 0.1 - 1 | 40 - 70 | Microfiltration separator |
| PVDF membrane | 0.1 - 0.45 | 60 - 80 | MFC separator |
| Track-etched polycarbonate | 0.01 - 10 (precise) | 5 - 20 | Research; controlled pore size |
| Ceramic separator | 0.01 - 1 | 30 - 50 | Durable, long-lived |

### Size Reference for MES-Relevant Species

| Species | Effective Diameter | Implication |
|---|---|---|
| H+ (hydrated) | 0.28 nm | Passes through all membranes |
| Na+, K+ (hydrated) | 0.36 - 0.38 nm | Passes through most IEMs |
| Cl^- (hydrated) | 0.36 nm | Blocked by CEM; passes AEM |
| Acetate ion | 0.4 - 0.5 nm | Can cross some membranes; substrate loss |
| Dissolved O2 | 0.35 nm | Critical crossover species |
| Glucose | ~0.9 nm | Blocked by dense IEM; passes porous separators |
| Riboflavin (mediator) | ~1.5 nm | Mostly blocked by dense IEM |
| Bacteria (E. coli) | 500 - 2000 nm | Blocked by all membranes < 100 nm pore size |

## Measurement Methods

- **Direct Pore Size Characterization**: 1. **Scanning Electron Microscopy (SEM)**:    - Cross-section and surface imaging of membrane structure    - Resolution: 1-10 nm depending on instrument    - Requires sample drying (may alter hydrated pore structure)    - Best for porous separators; less informative for dense IEMs  2. **Transmission Electron Microscopy (TEM)**:    - Higher resolution than SEM (sub-nm)    - Useful for visualizing ionic channels in dense membranes    - Staining with heavy metals (RuO4, OsO4) can highlight hydrophilic domains in Nafion  3. **Atomic Force Microscopy (AFM)**:    - Surface pore imaging in hydrated state possible    - Measures pore size, distribution, and surface roughness simultaneously    - Resolution: 1-5 nm for pore features
- **Indirect Characterization**: 4. **Capillary Flow Porometry (Bubble Point Method)**:    - Measures pressure required to push gas through liquid-filled pores    - Relates pressure to pore diameter via Young-Laplace equation: d = 4 gamma cos(theta) / P    - Provides mean flow pore size and pore size distribution    - Range: 10 nm - 500 um    - Standard: ASTM F316  5. **Mercury Intrusion Porosimetry (MIP)**:    - Forces mercury into pores under increasing pressure    - Washburn equation: d = -4 gamma cos(theta) / P    - Range: 3 nm - 360 um    - Destructive; not suitable for swellable polymer membranes  6. **Gas Permeation (Liquid Displacement)**:    - Measure gas flux through wetted membrane at various pressures    - Calculate mean pore size from gas permeability data    - Non-destructive and applicable to hydrated membranes  7. **Small-Angle X-ray Scattering (SAXS)**:    - Characterizes nm-scale ionic channel structure in dense IEMs    - Nafion ionomer peak at q ~ 1.5-2.5 nm^-1 corresponds to 2.5-4 nm inter-cluster spacing    - Non-destructive; can measure hydrated samples
- **Functional Characterization**: 8. **Molecular Weight Cut-Off (MWCO) Testing**:    - Challenge membrane with solutes of known molecular weight (dextran, PEG standards)    - Measure rejection coefficient: R = 1 - (C_permeate / C_feed)    - MWCO defined as MW at 90% rejection    - Correlates with effective pore size via Stokes-Einstein relation  9. **Oxygen Mass Transfer Coefficient (k_O2)**:    - Measure dissolved oxygen crossover rate through membrane    - Higher pore size increases oxygen permeability    - Directly relevant to MFC coulombic efficiency

## Affecting Factors

- **primary**: [object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]

## Related Parameters

- {"name":"Membrane Resistance (Ionic)","relationship":"Inversely related to pore size; smaller pores = higher ionic resistance = more ohmic loss"}
- {"name":"Proton Conductivity","relationship":"Dependent on connected channel network; Nafion 0.08-0.12 S/cm at full hydration"}
- {"name":"Oxygen Permeability","relationship":"Increases with pore size; critical for single-chamber MFC coulombic efficiency"}
- {"name":"Substrate Crossover","relationship":"Larger pores allow more substrate (acetate, glucose) to cross to cathode, reducing CE"}
- {"name":"Membrane Thickness","relationship":"Combined with pore size, determines transport resistance and selectivity"}
- {"name":"Ion Exchange Capacity (IEC)","relationship":"Determines density of ion-conducting sites; related to channel formation"}
- {"name":"Water Uptake","relationship":"Directly controls swelling and hydrated pore size in dense IEMs"}
- {"name":"Membrane Selectivity","relationship":"Transport number for counter-ions vs. co-ions; smaller pores improve selectivity"}
- {"name":"Internal Resistance","relationship":"Membrane resistance is 5-40% of total R_int; directly affected by pore structure"}
- {"name":"Coulombic Efficiency","relationship":"Oxygen crossover through larger pores reduces CE in MFC"}
- {"name":"Power Density","relationship":"Optimal pore size balances low ionic resistance with adequate selectivity"}
- {"name":"pH Gradient","relationship":"Insufficient proton transport through small pores can create pH imbalance between chambers"}

## Compatible Systems

Membrane Separator

## References

### Membrane Characterization Methods

1. **Mauritz, K.A., & Moore, R.B. (2004)**. "State of understanding of Nafion". *Chemical Reviews*, 104(10), 4535-4585.
   - Comprehensive review of Nafion nanostructure and channel morphology

2. **Haubold, H.G., et al. (2001)**. "Nano structure of Nafion: A SAXS study". *Electrochimica Acta*, 46(10-11), 1559-1563.
   - SAXS characterization of Nafion ionic channel dimensions

3. **Schmidt-Rohr, K., & Chen, Q. (2008)**. "Parallel cylindrical water nanochannels in Nafion fuel-cell membranes". *Nature Materials*, 7(1), 75-83.
   - Refined structural model of Nafion pore geometry

### MES Membrane Applications

4. **Kim, J.R., et al. (2007)**. "Power generation using different cation, anion, and ultrafiltration membranes in microbial fuel cells". *Environmental Science & Technology*, 41(3), 1004-1009.
   - Comparison of membrane types with different pore characteristics in MFC

5. **Rozendal, R.A., et al. (2008)**. "Effect of the type of ion exchange membrane on performance, ion transport, and pH in biocatalyzed electrolysis of wastewater". *Water Science and Technology*, 57(11), 1757-1762.
   - Ion transport and pore size effects in MEC membranes

6. **Li, W.W., et al. (2011)**. "Recent advances in separators for microbial fuel cells". *Bioresource Technology*, 102(1), 244-252.
   - Review of separator types and pore size effects on MFC performance

### Fouling and Degradation

7. **Xu, J., et al. (2012)**. "Fouling of proton exchange membrane (PEM) deteriorates the performance of microbial fuel cell". *Water Research*, 46(6), 1817-1824.
   - Biofouling effects on membrane pore structure and MFC performance

---

*Parameter documentation for the MESS (Microbial Electrochemical Systems Standardization) database. Last updated based on peer-reviewed literature through 2024.*

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Membrane+Pore+Size&body=**Parameter%3A**+Membrane+Pore+Size%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fmembrane-pore-size.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Membrane+Pore+Size&body=**Parameter%3A**+Membrane+Pore+Size%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fmembrane-pore-size.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Membrane+Pore+Size&body=**Parameter%3A**+Membrane+Pore+Size%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fmembrane-pore-size.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
