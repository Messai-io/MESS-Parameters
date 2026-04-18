# Methanosarcina Acetivorans

*Methanosarcina acetivorans* is a strictly anaerobic, aceticlastic methanogenic archaeon belonging to the order Methanosarcinales, capable of producing methane from acetate, methanol, methylamines, and carbon monoxide. It is one of the most metabolically versatile methanogens known, possessing the largest genome among sequenced methanogens (5.75 Mbp). In microbial electrochemical systems, *M. acetivorans* is significant for its role in acetate-driven electromethanogenesis and its capacity for direct interspecies electron transfer (DIET) with electrode surfaces.

Unlike hydrogenotrophic methanogens that reduce CO2 with H2, *M. acetivorans* can directly cleave acetate (aceticlastic methanogenesis: CH3COOH -> CH4 + CO2), which is the dominant pathway for methane production in many anaerobic environments. In MES, this is particularly relevant because acetate is the primary fermentation product of many anodic exoelectrogens and is often the most abundant volatile fatty acid in wastewater-fed systems. The organism's ability to consume acetate at the cathode while producing methane creates possibilities for integrated MES designs where anodic acetate production is coupled to cathodic methane generation.

Recent research has revealed that *M. acetivorans* can participate in direct electron transfer with both biological (syntrophic partners via conductive pili/nanowires) and abiological (electrode surfaces) electron donors. The organism possesses a multi-heme c-type cytochrome (MmcA) and a membrane-bound Rnf complex that may facilitate electron uptake from external sources. This capability has implications for bioelectrochemical CO2 reduction and power-to-gas applications where electrical energy is converted to storable methane fuel.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Biological |
| **Subcategory** | Archaea - Methanogens |
| **Type** | object |

## Typical Values

- **Valid Range (CH4 production from acetate)**: 0.01 to 5.0 mmol CH4/L/day
- **Typical Range (CH4 production)**: 0.1 to 2.0 mmol CH4/L/day
- **Optimal Temperature**: 35-40 degrees C
- **Optimal pH**: 6.5-7.5
- **Doubling Time**: 24-72 hours (aceticlastic growth)
- **Acetate Km**: 3-5 mM
- **Methanol Km**: 0.5-2.0 mM
- **Genome Size**: 5.75 Mbp (largest known methanogen genome)
- **Minimum Acetate Threshold**: 0.2-1.0 mM

## Measurement Methods

- **Methane Quantification**: GC-FID analysis of headspace samples quantifies CH4 production. Isotope labeling with 2-13C-acetate confirms aceticlastic methanogenesis (13C appears in CH4) versus hydrogenotrophic methanogenesis (13C appears in CO2). Online methane sensors in continuous MES systems provide real-time production data.
- **Acetate Consumption Kinetics**: Acetate concentration in the catholyte is monitored by HPLC-UV, ion chromatography, or enzymatic assay kits at regular time intervals. Michaelis-Menten kinetics are determined from initial rate measurements at various acetate concentrations. The acetate consumption rate, combined with methane production, confirms aceticlastic activity.
- **Electrochemical Biocathode Characterization**: Three-electrode setups with *M. acetivorans* biocathodes are tested by chronoamperometry, cyclic voltammetry, and impedance spectroscopy. Current consumption at various cathode potentials is correlated with methane production to determine faradaic efficiency and optimal operating conditions.
- **Gene Expression Analysis**: RT-qPCR or RNA-seq analysis of key methanogenic genes (mcrA, cdh, rnf, mmcA) under electrode-associated versus planktonic conditions reveals transcriptional responses to electrode interactions. Differential expression of cytochrome and electron transfer genes provides insight into DIET mechanisms.
- **Microscopy and Biofilm Analysis**: SEM and TEM reveal cell morphology on cathode surfaces, including the characteristic irregular coccoid cell clusters typical of Methanosarcina. F420 autofluorescence microscopy enables non-invasive visualization. CLSM with specific FISH probes (MSMX860) distinguishes *M. acetivorans* from other methanogens in mixed communities.

## Affecting Factors

### Primary

- **Acetate Concentration**: As the primary substrate for aceticlastic methanogenesis, acetate concentration directly controls metabolic rate. Optimal concentrations are 5-50 mM. Below the threshold (~0.2-1.0 mM), the thermodynamics become unfavorable. Very high concentrations (>100 mM) can be inhibitory.
- **Temperature**: Strictly mesophilic, optimal at 35-40 degrees C. Aceticlastic methanogenesis is particularly temperature-sensitive because the free energy yield is small (delta G = -36 kJ/mol under standard conditions).
- **pH and Ammonia**: Optimal at pH 6.5-7.5. High ammonia concentrations (common in protein-rich wastewaters) inhibit aceticlastic methanogens more severely than hydrogenotrophic species, as free ammonia (NH3) disrupts the acetate activation mechanism.
- **Cathode Potential**: For electrode-associated growth, cathode potentials of -0.4 to -0.8 V vs SHE support methane production. More negative potentials may provide excess electrons but also increase energy cost.
- **Alternative Substrates**: When methanol or methylamines are available, *M. acetivorans* preferentially uses these faster-metabolized substrates. This can be advantageous in MES treating methanol-containing industrial wastewaters.
- **Sodium Concentration**: As a marine-derived organism, *M. acetivorans* requires moderate sodium concentrations (0.1-0.5 M Na+) for the Na+-dependent Rnf complex and methyl-H4SPT:CoM methyltransferase.
- **Competition with Syntrophic Acetate Oxidizers**: Under some conditions, acetate may be oxidized by syntrophic bacteria coupled to hydrogenotrophic methanogens, bypassing aceticlastic methanogenesis entirely.
- **Trace Metal Supply**: Iron, nickel, cobalt, zinc, and molybdenum are required for the numerous metalloenzymes in the methanogenic pathway.

## Related Parameters

- **name**: CH4 Production Rate

- **relationship**: Primary performance output for aceticlastic MES applications
- **name**: Substrate Removal Rate

- **relationship**: Acetate removal by *M. acetivorans* reduces anodic product accumulation
- **name**: Current Density

- **relationship**: Cathodic current consumption reflects electrode-associated methanogenic activity
- **name**: Microbial Diversity Index

- **relationship**: Ratio of aceticlastic to hydrogenotrophic methanogens determines methane production pathway
- **name**: COD Removal

- **relationship**: Aceticlastic methanogenesis contributes to overall organic carbon removal in MES

## Compatible Systems

Microorganism Database

## References

- Galagan, J. E., et al. (2002). The genome of *M. acetivorans* reveals extensive metabolic and physiological diversity. *Genome Research*, 12, 532-542.
- Rotaru, A. E., et al. (2014). Direct interspecies electron transfer between *Geobacter* and *Methanosarcina*. *Applied and Environmental Microbiology*, 80(15), 4599-4605.
- Schlegel, K., & Muller, V. (2013). Evolution of Na+ and H+ bioenergetics in methanogenic archaea. *Biochemical Society Transactions*, 41, 421-426.
- Lovley, D. R. (2017). Happy together: microbial communities that hook up to swap electrons. *ISME Journal*, 11, 327-336.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Methanosarcina+Acetivorans&body=**Parameter%3A**+Methanosarcina+Acetivorans%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fmethanosarcina-acetivorans.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Methanosarcina+Acetivorans&body=**Parameter%3A**+Methanosarcina+Acetivorans%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fmethanosarcina-acetivorans.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Methanosarcina+Acetivorans&body=**Parameter%3A**+Methanosarcina+Acetivorans%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fmethanosarcina-acetivorans.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
