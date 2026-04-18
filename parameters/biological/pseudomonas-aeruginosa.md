# Pseudomonas Aeruginosa

*Pseudomonas aeruginosa* is a Gram-negative, aerobic (with capacity for anaerobic growth via denitrification), rod-shaped gammaproteobacterium that is one of the most significant organisms in microbial electrochemical systems due to its prolific production of redox-active phenazine electron shuttles, robust biofilm formation, and versatile metabolic capabilities. This opportunistic pathogen has become a model organism for studying mediated extracellular electron transfer (MET) in MES and has provided fundamental insights into the molecular mechanisms of microbial electricity generation.

The hallmark contribution of *P. aeruginosa* to MES is its biosynthesis and secretion of phenazine compounds, particularly pyocyanin (PYO, 5-methyl-1-hydroxyphenazine) and phenazine-1-carboxylic acid (PCA). Pyocyanin is a blue-green pigment with a midpoint reduction potential of approximately -34 mV vs SHE at pH 7, enabling it to shuttle electrons between bacterial cells and electrode surfaces. A single *P. aeruginosa* biofilm can produce pyocyanin concentrations of 50-200 uM in the surrounding medium, sufficient to mediate significant current generation. The phenazine production is quorum sensing-regulated, reaching maximum levels at high cell densities.

Beyond mediator production, *P. aeruginosa* forms architecturally complex biofilms on electrode surfaces featuring mushroom-shaped structures, water channels, and a dense extracellular matrix of polysaccharides (Psl, Pel, alginate), extracellular DNA, and proteins. These biofilms are remarkably resilient and can maintain electrochemical activity under stress conditions. The organism's role in MES has also expanded to include biocathode applications, where its aerobic metabolism at air-exposed cathodes facilitates oxygen reduction, and biosensor applications exploiting the phenazine-based electrochemical signaling.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Biological |
| **Subcategory** | Bacteria - Electroactive Species |
| **Type** | object |

## Typical Values

- **Valid Range (current production)**: 0.1 to 5.0 A/m2
- **Typical Range (current production)**: 0.5 to 3.0 A/m2
- **Pyocyanin Production**: 50-200 uM in biofilm cultures
- **Optimal Temperature**: 30-37 degrees C
- **Optimal pH**: 6.5-7.5
- **Doubling Time**: 25-45 minutes (aerobic), 2-6 hours (anaerobic)
- **Maximum Power Density**: 0.5-4.0 W/m2
- **Coulombic Efficiency**: 15-45%
- **Phenazine Redox Potential**: -34 mV vs SHE at pH 7 (pyocyanin)

## Measurement Methods

- **Electrochemical Characterization with Phenazine Detection**: Cyclic voltammetry reveals characteristic pyocyanin redox peaks near -200 mV vs Ag/AgCl. Square wave voltammetry (SWV) provides more sensitive detection of phenazine species. Rotating disk electrode (RDE) experiments quantify mediator diffusion coefficients and electron transfer kinetics. The correlation between phenazine concentration and current production confirms the mediated EET mechanism.
- **Phenazine Quantification**: Pyocyanin is extracted from culture supernatants using chloroform extraction and quantified spectrophotometrically at 690 nm (extinction coefficient 4310 M-1cm-1 at pH < 4.5). HPLC with UV-vis detection separates and quantifies individual phenazine species (PYO, PCA, 1-OH-PHZ). LC-MS/MS provides structural confirmation and detection of novel phenazine derivatives.
- **Biofilm Architecture Analysis**: CLSM with fluorescent reporters (GFP-tagged strains) visualizes biofilm three-dimensional structure on electrodes. Biofilm thickness, porosity, and surface coverage are quantified using image analysis software (COMSTAT, IMARIS). The correlation of biofilm architecture with electrochemical performance reveals how structure affects electron transfer efficiency.
- **Quorum Sensing Analysis**: Autoinducer molecules (C4-HSL, 3-oxo-C12-HSL) are extracted from culture supernatants and quantified by LC-MS or biosensor reporter assays. Gene expression analysis of phenazine biosynthetic operons (phzA-G, phzH, phzM, phzS) reveals the relationship between quorum sensing, phenazine production, and current generation.
- **Transcriptomic and Proteomic Profiling**: RNA-seq or microarray analysis of electrode-associated versus planktonic *P. aeruginosa* reveals genes differentially expressed during electrode respiration. Proteomics identifies proteins enriched at the cell-electrode interface.

## Affecting Factors

### Primary

- **Quorum Sensing and Cell Density**: Phenazine production is quorum sensing-dependent, requiring sufficient cell density for autoinducer accumulation above the threshold. In MES, biofilm development must reach a critical mass before significant mediator-based current generation begins.
- **Iron Availability**: Iron regulates phenazine biosynthesis via the Fur (ferric uptake regulator) system. Iron-limited conditions upregulate phenazine production. This paradoxical response makes iron management a critical operational parameter.
- **Oxygen Availability**: *P. aeruginosa* produces phenazines primarily under oxygen-limited conditions, where they serve as alternative electron acceptors. In MFC anodes, anaerobic or microaerobic conditions maximize phenazine production and electrode-directed electron transfer.
- **Carbon Source**: Different carbon sources affect phenazine production rates. Glycerol, succinate, and glutamate support high phenazine yields. Glucose can suppress phenazine production through catabolite repression in some strains.
- **pH**: Phenazine redox potential is pH-dependent (-59 mV per pH unit). The protonated form (phenazinium) is the electrochemically active species. Optimal for both growth and phenazine electrochemistry at pH 6.5-7.5.
- **Phosphate Concentration**: Phosphate limitation triggers the PhoB regulon, which can influence phenazine production and biofilm formation.
- **Strain Variation**: Different *P. aeruginosa* strains (PA14, PAO1, clinical isolates) vary dramatically in phenazine production profiles, biofilm architecture, and electrochemical activity.
- **Electrode Surface Chemistry**: Hydrophobic surfaces promote stronger *P. aeruginosa* biofilm attachment. Surface modifications that retain phenazines near the electrode enhance current collection.

## Related Parameters

- **name**: Current Density

- **relationship**: Directly correlated with pyocyanin concentration and biofilm density
- **name**: Power Density

- **relationship**: *P. aeruginosa* MFCs can achieve high power densities via mediator-enhanced EET
- **name**: Microbial Diversity Index

- **relationship**: *P. aeruginosa* phenazines affect community composition (antimicrobial)
- **name**: Coulombic Efficiency

- **relationship**: Mediator loss through diffusion reduces coulombic efficiency
- **name**: Substrate Removal Rate

- **relationship**: Aerobic metabolism drives rapid substrate oxidation

## Compatible Systems

Microorganism Database

## References

- Rabaey, K., et al. (2005). Microbial phenazine production enhances electron transfer in biofuel cells. *Environmental Science & Technology*, 39(9), 3401-3408.
- Venkataraman, A., et al. (2010). Quorum sensing regulates electric current generation of Pseudomonas aeruginosa PA14 in bioelectrochemical systems. *Electrochemistry Communications*, 12(3), 459-462.
- Price-Whelan, A., et al. (2006). Rethinking secondary metabolism: physiological roles for phenazine antibiotics. *Nature Chemical Biology*, 2, 71-78.
- Dietrich, L. E., et al. (2008). Redox-active antibiotics control gene expression and community behavior in divergent bacteria. *Science*, 321, 1203-1206.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Pseudomonas+Aeruginosa&body=**Parameter%3A**+Pseudomonas+Aeruginosa%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fpseudomonas-aeruginosa.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Pseudomonas+Aeruginosa&body=**Parameter%3A**+Pseudomonas+Aeruginosa%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fpseudomonas-aeruginosa.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Pseudomonas+Aeruginosa&body=**Parameter%3A**+Pseudomonas+Aeruginosa%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fpseudomonas-aeruginosa.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
