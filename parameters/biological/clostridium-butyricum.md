# Clostridium Butyricum

*Clostridium butyricum* is a Gram-positive, obligately anaerobic, spore-forming, rod-shaped bacterium belonging to the Firmicutes phylum that has emerged as a significant organism in microbial electrochemical systems, particularly for biohydrogen production in microbial electrolysis cells (MECs) and as a fermentative partner in mixed-culture microbial fuel cells (MFCs). This organism is notable for its high-rate fermentative hydrogen production from a variety of carbohydrate substrates, its robust tolerance to environmental stress, and its capacity for direct and mediated extracellular electron transfer.

In MES applications, *C. butyricum* plays a dual role. As a prolific fermentative organism, it rapidly converts complex carbohydrates (glucose, starch, glycerol) to butyrate, acetate, CO2, and H2. The volatile fatty acids produced serve as substrates for exoelectrogenic bacteria like *Geobacter* species at the anode, creating synergistic syntrophic relationships that enhance overall system performance. Additionally, *C. butyricum* has demonstrated direct electrochemical activity, capable of transferring electrons to an electrode via endogenous mediators (riboflavin, hydrogenases) and potentially through membrane-bound redox proteins, generating current densities of 0.5-2.0 A/m2 in pure culture MFCs.

The organism's industrial relevance extends beyond MES; it is used commercially for 1,3-propanediol production from glycerol, butyric acid production, and as a probiotic in human and animal health. Its genetic tractability, fast growth rate (doubling time 0.5-2 hours), and tolerance to high substrate concentrations make it an attractive candidate for engineered MES biosystems targeting waste glycerol valorization and biohydrogen production.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Biological |
| **Subcategory** | Bacteria - Electroactive Species |
| **Type** | object |

## Typical Values

- **Valid Range (current production)**: 0.1 to 3.0 A/m2 anode surface area
- **Typical Range (current production)**: 0.5 to 2.0 A/m2 in pure culture MFCs
- **H2 Production Rate**: 50-250 mL H2/L/h in dark fermentation
- **H2 Yield**: 1.5-2.5 mol H2/mol glucose
- **Optimal Temperature**: 30-37 degrees C
- **Optimal pH**: 5.5-7.0
- **Doubling Time**: 0.5-2 hours
- **Maximum Power Density (pure culture MFC)**: 0.1-0.8 W/m2
- **Coulombic Efficiency**: 10-35% (lower than Geobacter due to competing fermentation)

## Measurement Methods

- **Electrochemical Characterization**: Pure culture MFCs inoculated with *C. butyricum* are operated under controlled conditions with defined media. Current-voltage relationships are established using linear sweep voltammetry (LSV) or galvanostatic discharge. Polarization curves and power density curves characterize the organism's electrochemical performance. Cyclic voltammetry (CV) identifies redox-active mediators secreted by the organism.
- **Gas Chromatography for H2 Production**: Headspace gas analysis using gas chromatography with thermal conductivity detection (GC-TCD) quantifies H2, CO2, and CH4 production. Gas production rates are measured by water displacement or automated gas flow meters. H2 yield is calculated by normalizing total H2 production to substrate consumed.
- **Metabolite Analysis by HPLC**: High-performance liquid chromatography (HPLC) with refractive index detection quantifies fermentation products (butyrate, acetate, lactate, ethanol, 1,3-propanediol) and residual substrate. This metabolic profiling reveals the partitioning of carbon and electron flux among competing pathways.
- **Molecular Identification and Quantification**: 16S rRNA gene sequencing confirms species identity. Quantitative PCR (qPCR) with species-specific primers tracks *C. butyricum* abundance in mixed communities. Fluorescence in situ hybridization (FISH) with Clostridium-specific probes visualizes spatial distribution within MES biofilms.
- **Biomass Quantification**: Cell dry weight (CDW) is measured by filtering culture samples through pre-weighed 0.2 um membranes, drying at 105 degrees C, and weighing. Protein content (Bradford or Lowry assay) serves as an alternative biomass proxy. Optical density at 600 nm (OD600) provides rapid, non-destructive estimates during planktonic growth.

## Affecting Factors

### Primary

- **Carbon Source**: *C. butyricum* efficiently metabolizes glucose, glycerol, starch, xylose, and various waste streams. Glycerol (from biodiesel production) is a particularly relevant substrate, yielding 1,3-propanediol and H2. Different substrates shift the metabolic product distribution, affecting both current generation and H2 yield.
- **pH**: The organism grows across pH 4.5-7.5, with optimal fermentative activity at pH 5.5-6.5. In MES, pH management is critical because butyrate accumulation drives acidification. Buffered systems or pH-controlled reactors maintain optimal performance.
- **Iron Availability**: Iron is essential for hydrogenase enzyme function and cytochrome biosynthesis. Iron-limited conditions severely reduce H2 production and electron transfer rates. Supplementation with 10-50 mg/L Fe2+ typically optimizes performance.
- **Redox Potential**: As a strict anaerobe, *C. butyricum* requires reducing conditions (Eh < -200 mV). Oxygen exposure, even briefly, inhibits growth and damages oxygen-sensitive enzymes (hydrogenases, pyruvate:ferredoxin oxidoreductase). Anode potential in MES must balance between providing an electron sink and maintaining anaerobic conditions.
- **Temperature**: Growth and H2 production are optimal at 30-37 degrees C. Thermotolerant strains can operate at 42-45 degrees C. Below 20 degrees C, metabolic rates decrease substantially, shifting product profiles toward lactate.
- **Nitrogen Source**: Ammonium salts and yeast extract support growth. Excess nitrogen can shift metabolism away from H2 production toward biomass synthesis.
- **Partial Pressure of H2**: Elevated H2 partial pressure thermodynamically inhibits further H2 production (Le Chatelier's principle). H2 removal through gas stripping or electrochemical consumption at the MES cathode alleviates this limitation.
- **Co-culture Interactions**: In mixed-culture MES, syntrophic interactions with exoelectrogens (consuming acetate/butyrate) and competition with other fermenters shape *C. butyricum* performance and community dynamics.

## Related Parameters

- **name**: H2 Yield

- **relationship**: Primary metric for MEC applications using *C. butyricum*
- **name**: Substrate Removal Rate

- **relationship**: Correlates with fermentative activity and growth rate
- **name**: Current Density

- **relationship**: Reflects the organism's direct and mediated electron transfer capacity
- **name**: Microbial Diversity Index

- **relationship**: *C. butyricum* dominance affects community diversity metrics
- **name**: CN Ratio

- **relationship**: Carbon-to-nitrogen ratio influences metabolic product distribution

## Compatible Systems

Microorganism Database

## References

- Cheng, C. L., et al. (2011). Biohydrogen production from lignocellulosic feedstock. *Bioresource Technology*, 102(18), 8514-8523.
- Wen, Q., et al. (2014). Electricity generation from synthetic penicillin wastewater in an air-cathode single chamber microbial fuel cell. *Chemical Engineering Journal*, 244, 114-121.
- Lo, Y. C., et al. (2008). Dark H2 fermentation from sucrose and xylose using H2-producing indigenous bacteria. *International Journal of Hydrogen Energy*, 33(5), 1383-1390.
- Rabaey, K., & Verstraete, W. (2005). Microbial fuel cells: novel biotechnology for energy generation. *Trends in Biotechnology*, 23(6), 291-298.
- Jiang, L., et al. (2013). Clostridium butyricum as a platform for biohydrogen production. *Biotechnology and Bioengineering*, 110(8), 2085-2093.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Clostridium+Butyricum&body=**Parameter%3A**+Clostridium+Butyricum%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fclostridium-butyricum.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Clostridium+Butyricum&body=**Parameter%3A**+Clostridium+Butyricum%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fclostridium-butyricum.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Clostridium+Butyricum&body=**Parameter%3A**+Clostridium+Butyricum%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fclostridium-butyricum.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
