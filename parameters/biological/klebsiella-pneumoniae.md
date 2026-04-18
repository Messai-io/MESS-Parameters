# Klebsiella Pneumoniae

*Klebsiella pneumoniae* is a Gram-negative, encapsulated, facultatively anaerobic, rod-shaped bacterium belonging to the Enterobacteriaceae family that has demonstrated notable electrochemical activity in microbial electrochemical systems. While primarily known as an opportunistic pathogen, non-pathogenic strains and biosafety-managed applications of *K. pneumoniae* in MES have revealed its capacity for extracellular electron transfer, high fermentative hydrogen production, and electricity generation from diverse substrates including glucose, glycerol, starch, and cellulosic hydrolysates.

In MES, *K. pneumoniae* generates current through the production and secretion of redox-active electron mediators, primarily 2,6-di-tert-butyl-p-benzoquinone and other quinone derivatives. The organism also produces exopolysaccharides that may facilitate cell adhesion to electrodes and create a matrix for mediator retention near the electrode surface. Certain strains possess membrane-bound NADH dehydrogenases and formate dehydrogenases that may participate in direct or semi-direct electron transfer. Current densities of 0.3-1.5 A/m2 have been reported in pure culture MFCs.

The organism's industrial significance in MES extends to its role in 2,3-butanediol production from biomass-derived sugars, 1,3-propanediol synthesis from glycerol, and biohydrogen generation. The metabolic flexibility of *K. pneumoniae* allows it to operate under both aerobic and anaerobic conditions, providing resilience during MES operation. Biosafety considerations require that MES research employ non-pathogenic reference strains and appropriate containment measures.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Biological |
| **Subcategory** | Bacteria - Electroactive Species |
| **Type** | object |

## Typical Values

- **Valid Range (current production)**: 0.05 to 2.0 A/m2
- **Typical Range (current production)**: 0.3 to 1.5 A/m2
- **H2 Production Rate**: 20-150 mL H2/L/h
- **H2 Yield**: 0.5-2.0 mol H2/mol glucose
- **Optimal Temperature**: 30-37 degrees C
- **Optimal pH**: 6.0-7.5
- **Doubling Time**: 20-45 minutes in rich media
- **Maximum Power Density**: 0.2-1.0 W/m2
- **Coulombic Efficiency**: 10-35%

## Measurement Methods

- **Electrochemical Testing in MFCs**: Pure culture MFCs are characterized using standard electrochemical techniques: OCV measurement, polarization curves, linear sweep voltammetry, and EIS. Cyclic voltammetry identifies mediator redox peaks. Comparison of whole-cell CV with cell-free supernatant CV distinguishes secreted mediators from membrane-bound electron transfer components.
- **Mediator Identification and Quantification**: Culture supernatants are analyzed by UV-vis spectrophotometry, HPLC-DAD, and LC-MS to identify and quantify secreted electron shuttles. Electrochemical activity of isolated mediator fractions is confirmed by cyclic voltammetry on bare electrodes.
- **Fermentation Product Analysis**: HPLC with refractive index detection quantifies metabolic products: 2,3-butanediol, acetoin, ethanol, acetate, formate, lactate, and succinate. GC-TCD measures H2 and CO2 in the headspace.
- **Biomass and Capsule Characterization**: The polysaccharide capsule is quantified by uronic acid assay or phenol-sulfuric acid total carbohydrate method. Capsule thickness is measured by India ink negative staining. The capsule's role in electrode adhesion is assessed by comparing biofilm formation of capsulated versus acapsular mutants.
- **Genetic Characterization**: Whole-genome sequencing identifies genes related to electron transfer, mediator biosynthesis, and fermentation. Targeted gene knockouts reveal the contribution of specific metabolic branches to MES performance.

## Affecting Factors

### Primary

- **Substrate Type and Concentration**: Glycerol is a particularly relevant substrate due to biodiesel industry waste streams. Glucose concentrations of 5-20 g/L are standard; higher concentrations shift metabolism toward 2,3-butanediol production.
- **Oxygen Availability**: Aerobic conditions favor complete oxidation. Anaerobic conditions promote mixed acid fermentation, H2 production, and mediator-based electron transfer. Microaerobic conditions may optimize the balance.
- **pH**: Optimal for electricity generation is 6.5-7.5. Below pH 5.5, metabolic activity decreases. Buffer capacity is essential.
- **Iron Availability**: Required for numerous redox enzymes. Iron supplementation enhances both H2 production and current generation.
- **Temperature**: Metabolic rates peak at 37 degrees C. Temperature affects fermentation product distribution.
- **Capsule Production**: Enhances biofilm formation but may create a diffusion barrier for mediators.
- **Quorum Sensing**: AI-2 based quorum sensing may affect mediator production rates and biofilm maturation.
- **Competition in Mixed Cultures**: Fast growth rate often leads to early dominance during startup.

## Related Parameters

- **name**: Current Density

- **relationship**: Reflects combined mediator-based and potentially direct electron transfer
- **name**: H2 Yield

- **relationship**: Important for MEC applications
- **name**: Substrate Removal Rate

- **relationship**: Fast fermentative metabolism contributes to high substrate consumption
- **name**: Coulombic Efficiency

- **relationship**: Limited by multiple competing fermentation pathways
- **name**: Microbial Diversity Index

- **relationship**: Abundance in mixed communities affects overall system function

## Compatible Systems

Microorganism Database

## References

- Zhang, L., et al. (2008). Electricity generation using a novel biocathode MFC. *Electrochemistry Communications*, 10(2), 293-297.
- Mu, Y., et al. (2009). Decolorization of azo dyes in bioelectrochemical systems. *Environmental Science & Technology*, 43(13), 5137-5143.
- Angenent, L. T., et al. (2004). Production of bioenergy and biochemicals from industrial and agricultural wastewater. *Trends in Biotechnology*, 22(9), 477-485.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Klebsiella+Pneumoniae&body=**Parameter%3A**+Klebsiella+Pneumoniae%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fklebsiella-pneumoniae.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Klebsiella+Pneumoniae&body=**Parameter%3A**+Klebsiella+Pneumoniae%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fklebsiella-pneumoniae.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Klebsiella+Pneumoniae&body=**Parameter%3A**+Klebsiella+Pneumoniae%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fklebsiella-pneumoniae.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
