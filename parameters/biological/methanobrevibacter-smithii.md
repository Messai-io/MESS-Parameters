# Methanobrevibacter Smithii

*Methanobrevibacter smithii* is a strictly anaerobic, hydrogenotrophic methanogenic archaeon that is the dominant methanogen in the human gastrointestinal tract, typically comprising over 90% of the archaeal community in the human gut. In microbial electrochemical systems, this organism is relevant to biocathode applications for electromethanogenesis and as a model organism for understanding methanogen-electrode interactions in medically and environmentally relevant contexts.

*M. smithii* reduces CO2 with H2 to produce methane via the hydrogenotrophic methanogenesis pathway. It also uniquely utilizes formate as an electron donor, making it metabolically versatile among hydrogenotrophic methanogens. The organism possesses a specialized cell wall composed of pseudopeptidoglycan (pseudomurein) and lacks a traditional lipopolysaccharide outer membrane. Its adaptation to the mammalian gut environment, where H2 is produced by fermentative bacteria, has made it an efficient H2 scavenger with a very low H2 threshold concentration.

In MES contexts, *M. smithii* has been studied as a biocathode catalyst for bioelectrochemical methane production. Its ability to thrive at low H2 partial pressures makes it potentially efficient at converting cathodically generated H2 to methane. The organism also has relevance to understanding microbial communities in anaerobic digestion-MES hybrid systems, where gut-derived or sludge-derived inocula introduce *M. smithii* populations. Its small genome (1.85 Mbp) and well-characterized physiology make it a model system for studying methanogen electrophysiology.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Biological |
| **Subcategory** | Archaea - Methanogens |
| **Type** | object |

## Typical Values

- **Valid Range (CH4 production)**: 0.005 to 2.0 mmol CH4/L/day
- **Typical Range (CH4 production)**: 0.05 to 1.0 mmol CH4/L/day
- **Optimal Temperature**: 37 degrees C (human body temperature adapted)
- **Optimal pH**: 6.9-7.4
- **Doubling Time**: 8-24 hours
- **H2 Threshold**: 3-15 Pa (very efficient H2 scavenger)
- **Formate Km**: 5-20 mM
- **Genome Size**: 1.85 Mbp
- **G+C Content**: 31%

## Measurement Methods

- **Gas Chromatography**: CH4, H2, and CO2 in headspace samples are quantified by GC-FID (methane) and GC-TCD (H2, CO2). Real-time gas monitoring in biocathode experiments tracks methane production dynamics during electrochemical polarization.
- **Fluorescence Microscopy with F420 Autofluorescence**: Methanogenic archaea contain coenzyme F420, which exhibits blue-green autofluorescence (excitation 420 nm, emission 470 nm) under epifluorescence microscopy. This allows visualization and quantification of *M. smithii* in mixed communities without staining.
- **qPCR with Species-Specific Primers**: Primers targeting *M. smithii*-specific 16S rRNA gene or nifH-like sequences enable quantification in mixed communities. The mcrA gene (methyl-coenzyme M reductase) provides broader methanogen quantification.
- **Biocathode Performance Testing**: Three-electrode configurations with controlled cathode potential measure current consumption and methane production simultaneously. Faradaic efficiency (electrons consumed per molecule CH4 produced) is calculated to assess the coupling of electrochemistry to biology.
- **Metabolite Analysis**: Formate, acetate, and other short-chain fatty acids in the catholyte are measured by ion chromatography or HPLC. Consumption kinetics reveal the pathway utilization and metabolic efficiency.

## Affecting Factors

### Primary

- **H2 Partial Pressure**: *M. smithii* is adapted to low H2 conditions and operates efficiently even at very low H2 partial pressures (3-15 Pa threshold). At the MEC cathode, H2 supply rate must be matched to methanogenic consumption capacity.
- **Temperature**: Strictly mesophilic with optimal activity at 37 degrees C, reflecting its adaptation to the mammalian gut. Performance decreases markedly below 30 degrees C or above 42 degrees C.
- **pH**: Optimal at near-neutral pH (6.9-7.4). The cathodic environment in MECs can become alkaline due to hydroxide production during H2 evolution, requiring buffering for optimal *M. smithii* activity.
- **CO2 Availability**: Required as the sole carbon source for autotrophic growth. In MEC cathode chambers, CO2 can be supplied from the anode (oxidative metabolism) or externally.
- **Formate Concentration**: When formate is available (from electrochemical CO2 reduction or biological production), *M. smithii* preferentially uses it, potentially enhancing overall conversion efficiency.
- **Trace Metals**: Nickel, cobalt, iron, zinc, and molybdenum are essential cofactors for methanogenic enzymes. The Ni-containing F430 cofactor of methyl-coenzyme M reductase requires sufficient nickel supply.
- **Salt Concentration**: Adapted to relatively low ionic strength conditions of the gut. High salt concentrations (>200 mM NaCl) may inhibit activity.
- **Antibiotic and Antimicrobial Exposure**: As an archaeon, *M. smithii* is naturally resistant to most antibacterial antibiotics but sensitive to some anti-archaeal compounds (e.g., statins, which inhibit isoprenoid synthesis).

## Related Parameters

- **name**: CH4 Production Rate

- **relationship**: Primary performance metric in electromethanogenesis applications
- **name**: H2 Yield

- **relationship**: *M. smithii* converts cathodic H2 to CH4, affecting net H2 recovery
- **name**: Current Density

- **relationship**: Cathodic current drives H2 production that feeds methanogenesis
- **name**: Microbial Diversity Index

- **relationship**: Archaeal diversity metrics complement bacterial diversity in MES
- **name**: Operating Voltage

- **relationship**: Applied voltage determines H2 generation rate at the cathode

## Compatible Systems

Microorganism Database

## References

- Samuel, B. S., et al. (2007). Genomic and metabolic adaptations of Methanobrevibacter smithii to the human gut. *PNAS*, 104(25), 10643-10648.
- Lovley, D. R. (2011). Powering microbes with electricity: direct electron transfer from electrodes to microbes. *Environmental Microbiology Reports*, 3(1), 27-35.
- Thauer, R. K., et al. (2008). Methanogenic archaea: ecologically relevant differences in energy conservation. *Nature Reviews Microbiology*, 6, 579-591.
- Cheng, S., et al. (2009). Direct biological conversion of electrical current into methane. *Environmental Science & Technology*, 43(10), 3953-3958.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Methanobrevibacter+Smithii&body=**Parameter%3A**+Methanobrevibacter+Smithii%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fmethanobrevibacter-smithii.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Methanobrevibacter+Smithii&body=**Parameter%3A**+Methanobrevibacter+Smithii%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fmethanobrevibacter-smithii.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Methanobrevibacter+Smithii&body=**Parameter%3A**+Methanobrevibacter+Smithii%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fmethanobrevibacter-smithii.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
