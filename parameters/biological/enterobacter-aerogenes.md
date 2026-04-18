# Enterobacter Aerogenes

*Enterobacter aerogenes* (reclassified as *Klebsiella aerogenes*) is a Gram-negative, facultatively anaerobic, rod-shaped bacterium of the Enterobacteriaceae family that has demonstrated significant potential in microbial electrochemical systems for both electricity generation and biohydrogen production. This organism is ubiquitous in soil, water, and the human gastrointestinal tract, and its metabolic versatility, rapid growth kinetics, and capacity for both fermentative and respiratory metabolism make it a practical choice for MES applications.

In MES, *E. aerogenes* contributes to current generation through multiple mechanisms. It produces endogenous electron mediators, including 2,6-di-tert-butyl-p-benzoquinone and other quinone derivatives, which shuttle electrons from the cell to the electrode. Additionally, the organism displays membrane-bound dehydrogenases that can interact with electrode surfaces. In mixed-culture MFCs, *E. aerogenes* frequently appears as a dominant community member due to its rapid growth on diverse substrates and robust tolerance to environmental fluctuations.

The organism is particularly valued in MES for its exceptional biohydrogen production capability. Under anaerobic fermentative conditions, *E. aerogenes* produces H2 via the formate hydrogen lyase (FHL) pathway at rates among the highest reported for mesophilic bacteria (up to 100-200 mL H2/L/h). This makes it attractive for MEC systems targeting hydrogen production, where the applied voltage supplements the thermodynamic energy gap. Its facultative nature provides operational flexibility, as the organism can tolerate brief oxygen exposure during system maintenance.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Biological |
| **Subcategory** | Bacteria - Electroactive Species |
| **Type** | object |

## Typical Values

- **Valid Range (current production)**: 0.05 to 2.5 A/m2
- **Typical Range (current production)**: 0.2 to 1.5 A/m2 in MFCs
- **H2 Production Rate**: 30-200 mL H2/L/h
- **H2 Yield**: 0.8-2.2 mol H2/mol glucose
- **Optimal Temperature**: 30-37 degrees C
- **Optimal pH**: 5.5-7.0
- **Doubling Time**: 25-60 minutes in rich media
- **Maximum Power Density**: 0.2-1.2 W/m2
- **Coulombic Efficiency**: 8-30%

## Measurement Methods

- **MFC Performance Testing**: Single-chamber and dual-chamber MFCs inoculated with *E. aerogenes* are operated with various substrates. Polarization curves are obtained by varying external resistance or using linear sweep voltammetry. Power density curves identify the maximum power point. Long-term chronoamperometry evaluates sustained performance and biofilm stability.
- **Gas Chromatographic Analysis**: Headspace gases are analyzed by GC-TCD for H2, CO2, and trace gases. Gas production rates are measured by water displacement, gas bags, or automated bubble counters. Volumetric and specific H2 production rates are calculated for MEC performance evaluation.
- **Metabolic Product Profiling**: HPLC with refractive index detection quantifies organic acid (acetate, formate, lactate, succinate) and alcohol (ethanol, 2,3-butanediol) production. The distribution of fermentation products reveals metabolic flux partitioning and helps identify electron sinks competing with electrode reduction.
- **Electron Mediator Detection**: Cyclic voltammetry of cell-free culture supernatants identifies secreted redox mediators. UV-vis spectroscopy screens for quinone and flavin compounds. LC-MS provides structural identification.
- **Biofilm and Biomass Characterization**: Crystal violet staining quantifies total biofilm biomass on electrodes. CLSM with live/dead staining reveals biofilm architecture. FISH with Enterobacteriaceae-specific probes tracks population abundance in mixed communities.

## Affecting Factors

### Primary

- **Carbon Source and Concentration**: *E. aerogenes* efficiently metabolizes a wide range of sugars and sugar alcohols. Glucose concentrations of 5-20 g/L are typical. Higher concentrations can cause substrate inhibition.
- **pH Control**: The organism produces significant organic acids during fermentation, rapidly acidifying unbuffered media. Optimal H2 production occurs at pH 5.5-6.5, while MFC current generation is generally best at pH 6.0-7.0.
- **Temperature**: Growth and metabolic activity are optimal at 30-37 degrees C. MES operation at ambient temperatures reduces performance by 30-50%.
- **Iron and Nickel Availability**: The FHL complex requires iron-sulfur clusters, and [NiFe]-hydrogenase requires both metals. Supplementation enhances H2 production.
- **Nitrogen Source**: Ammonium salts and organic nitrogen support growth. Nitrogen limitation shifts metabolism toward storage compound accumulation.
- **H2 Partial Pressure**: Elevated H2 inhibits the FHL pathway. Continuous H2 removal maintains high production rates.
- **Oxygen Exposure**: *E. aerogenes* switches to aerobic respiration when O2 is available, shutting down H2 production.
- **Inhibitory Metabolites**: Accumulation of ethanol, acetate, or lactate can inhibit growth.

## Related Parameters

- **name**: H2 Yield

- **relationship**: Primary performance metric for MEC applications
- **name**: Current Density

- **relationship**: Reflects combined direct and mediated electron transfer activity
- **name**: Substrate Removal Rate

- **relationship**: Directly related to fermentative metabolism
- **name**: Microbial Growth Rate

- **relationship**: Fast growth rate contributes to rapid MES startup
- **name**: Microbial Diversity Index

- **relationship**: Often a dominant member of mixed-culture MES

## Compatible Systems

Microorganism Database

## References

- Nakashima, K., et al. (2002). Hydrogen production by Enterobacter aerogenes. *World Journal of Microbiology and Biotechnology*, 18, 431-435.
- Yokoi, H., et al. (1995). Microbial hydrogen production from sweet potato starch residue. *Journal of Bioscience and Bioengineering*, 80(2), 143-147.
- Oh, S. E., & Logan, B. E. (2005). Hydrogen and electricity production from a food processing wastewater. *Water Research*, 39(19), 4673-4682.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Enterobacter+Aerogenes&body=**Parameter%3A**+Enterobacter+Aerogenes%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fenterobacter-aerogenes.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Enterobacter+Aerogenes&body=**Parameter%3A**+Enterobacter+Aerogenes%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fenterobacter-aerogenes.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Enterobacter+Aerogenes&body=**Parameter%3A**+Enterobacter+Aerogenes%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fenterobacter-aerogenes.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
