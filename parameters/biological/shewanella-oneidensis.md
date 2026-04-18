# Shewanella Oneidensis

*Shewanella oneidensis* MR-1 is a Gram-negative, facultatively anaerobic gammaproteobacterium that serves as one of the two primary model organisms (alongside *Geobacter sulfurreducens*) for studying extracellular electron transfer in microbial electrochemical systems. Isolated from Lake Oneida, New York, this organism possesses an extraordinarily versatile respiratory system capable of utilizing over 20 different terminal electron acceptors, including Fe(III), Mn(IV), U(VI), Cr(VI), DMSO, TMAO, nitrate, fumarate, and solid electrodes.

The molecular basis of EET in *S. oneidensis* is among the best characterized of any organism. The MtrCAB pathway (comprising MtrC, MtrA, and MtrB proteins plus OmcA) forms a trans-outer-membrane electron conduit that bridges the periplasm to the cell exterior. Electrons flow from the menaquinone pool through CymA (inner membrane cytochrome) to MtrA (periplasmic decaheme cytochrome c), through MtrB (outer membrane beta-barrel porin), to MtrC and OmcA (outer membrane decaheme cytochromes c) that directly contact the electrode surface. Additionally, *S. oneidensis* secretes flavin mononucleotide (FMN) and riboflavin as endogenous electron shuttles, contributing an estimated 70-75% of total current in some configurations.

Despite its importance as a model organism, *S. oneidensis* MR-1 typically generates lower current densities than *Geobacter sulfurreducens* in pure culture MFCs, partly because it incompletely oxidizes lactate to acetate (gaining only 4 electrons per lactate versus 8 for complete oxidation) and forms thinner biofilms. However, its genetic tractability, rapid growth, tolerance to oxygen, and dual EET mechanisms (direct contact plus mediated) make it invaluable for fundamental research and for developing synthetic biology approaches to enhanced MES performance.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Biological |
| **Subcategory** | Bacteria - Electroactive Species |
| **Type** | object |

## Typical Values

- **Valid Range (current production)**: 0.01 to 3.0 A/m2
- **Typical Range (current production)**: 0.1 to 1.5 A/m2
- **Flavin Secretion Rate**: 1-10 uM in biofilm cultures
- **Optimal Temperature**: 30 degrees C
- **Optimal pH**: 7.0-7.5
- **Doubling Time**: 40-90 minutes (aerobic), 4-8 hours (anaerobic, electrode)
- **Maximum Power Density**: 0.2-1.5 W/m2
- **Coulombic Efficiency**: 15-50% (limited by incomplete lactate oxidation)
- **Biofilm Thickness**: 5-30 um (thinner than Geobacter biofilms)

## Measurement Methods

- **Electrochemical Characterization**: Three-electrode configurations with potentiostatic control characterize MR-1 biofilm performance. Slow-scan cyclic voltammetry (1 mV/s) reveals catalytic waves from the Mtr pathway and adsorbed flavins. Square wave voltammetry detects bound riboflavin (midpoint potential approximately -200 mV vs SHE) and free flavin signals. EIS measures biofilm resistance components.
- **Flavin Quantification**: Fluorescence spectroscopy (excitation 450 nm, emission 525 nm) provides rapid, sensitive riboflavin detection. HPLC with fluorescence detection separates and quantifies FMN, FAD, and riboflavin. Electrochemical detection on bare electrodes can measure flavin concentrations in the sub-micromolar range.
- **Genetic Manipulation and Mutant Analysis**: A comprehensive deletion mutant library enables systematic dissection of EET components. Key mutants include: delta-mtrC (no outer membrane cytochrome), delta-mtrB (no outer membrane conduit), delta-cymA (no inner membrane/periplasm bridge), delta-bfe (reduced flavin export), delta-mtrC/delta-omcA (no outer surface cytochromes). Current production by each mutant reveals the relative contribution of each EET component.
- **Fe(III) Reduction Assays**: Ferrozine assay quantifies Fe(III) citrate reduction rates as a measure of EET capacity. Comparison of soluble Fe(III) citrate versus insoluble Fe(III) oxyhydroxide reduction reveals the contribution of direct contact versus mediator pathways.
- **In Vivo Spectroelectrochemistry**: UV-vis spectroscopy of biofilms on transparent ITO (indium tin oxide) electrodes during electrochemical polarization allows real-time monitoring of cytochrome redox states. This reveals the kinetics of electron flow through the Mtr conduit under operating conditions.

## Affecting Factors

### Primary

- **Electron Donor (Carbon Source)**: Lactate is the preferred anaerobic electron donor, yielding pyruvate and then acetate plus CO2. Only partial oxidation occurs (4 e-/lactate). Formate, pyruvate, and amino acids are also utilized. Acetate cannot be further oxidized due to the absence of a functional TCA cycle under anaerobic conditions.
- **Electrode Potential**: Current production increases with anode potential up to a plateau around +0.2 V vs SHE. The flavin midpoint potential (-200 mV vs SHE) sets the lower bound for effective mediator-electrode interaction.
- **Flavin Concentration**: Exogenous riboflavin addition (1-10 uM) can dramatically enhance current production in flavin-limited conditions. The balance between bound (cytochrome-associated) and free (diffusing) flavins determines the EET mechanism.
- **Oxygen**: As a facultative anaerobe, *S. oneidensis* redirects electrons to O2 when available. Strict anaerobiosis is required for maximal electrode-directed current. However, brief O2 exposure does not permanently damage the organism, unlike strict anaerobes.
- **Temperature**: Optimal at 30 degrees C. Below 20 degrees C, the organism shows reduced but measurable activity. Above 37 degrees C, growth is inhibited.
- **Biofilm Thickness**: Thinner biofilms than Geobacter result in lower maximum current densities. Strategies to increase biofilm thickness (surface modification, nutrient optimization) can enhance performance.
- **Iron Availability**: Heme biosynthesis for the numerous multiheme cytochromes requires substantial iron. Iron supplementation (10-100 uM Fe2+) optimizes cytochrome expression.
- **Calcium**: Ca2+ influences outer membrane stability and cytochrome localization. Calcium-depleted conditions reduce OmcA surface exposure and EET efficiency.

## Related Parameters

- **name**: Current Density

- **relationship**: The primary performance metric; lower than Geobacter but more mechanistically understood
- **name**: Coulombic Efficiency

- **relationship**: Limited by incomplete lactate oxidation to acetate
- **name**: Power Density

- **relationship**: Moderate; enhanced by flavin supplementation
- **name**: Substrate Removal Rate

- **relationship**: Rapid lactate consumption but acetate accumulation
- **name**: Microbial Diversity Index

- **relationship**: Often outcompeted by Geobacter in mixed-culture anodic biofilms

## Compatible Systems

Microorganism Database

## References

- Bretschger, O., et al. (2007). Current production and metal oxide reduction by Shewanella oneidensis MR-1. *Applied and Environmental Microbiology*, 73(21), 7003-7012.
- Marsili, E., et al. (2008). Shewanella secretes flavins that mediate extracellular electron transfer. *PNAS*, 105(10), 3968-3973.
- Shi, L., et al. (2016). Extracellular electron transfer mechanisms between microorganisms and minerals. *Nature Reviews Microbiology*, 14, 651-662.
- Coursolle, D., & Gralnick, J. A. (2012). Reconstruction of extracellular respiratory pathways for iron(III) reduction in Shewanella oneidensis strain MR-1. *Frontiers in Microbiology*, 3, 56.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Shewanella+Oneidensis&body=**Parameter%3A**+Shewanella+Oneidensis%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fshewanella-oneidensis.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Shewanella+Oneidensis&body=**Parameter%3A**+Shewanella+Oneidensis%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fshewanella-oneidensis.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Shewanella+Oneidensis&body=**Parameter%3A**+Shewanella+Oneidensis%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fshewanella-oneidensis.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
