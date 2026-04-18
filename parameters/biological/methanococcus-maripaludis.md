# Methanococcus Maripaludis

*Methanococcus maripaludis* is a strictly anaerobic, hydrogenotrophic methanogenic archaeon originally isolated from salt marsh sediments. It is among the most extensively studied model methanogens due to its relatively fast growth rate, genetic tractability, and well-characterized biochemistry. In microbial electrochemical systems, *M. maripaludis* has become a flagship organism for electromethanogenesis research, demonstrating the ability to accept electrons directly from a cathode electrode for CO2 reduction to methane, in addition to utilizing cathodically produced H2.

The significance of *M. maripaludis* in MES stems from landmark studies demonstrating direct electron uptake from cathodes without the necessity of H2 as an intermediate. This direct electron transfer mechanism, if confirmed, represents a fundamental shift in understanding bioelectrochemical methane production, as it implies that methanogens can bypass the kinetic and thermodynamic limitations of abiotic H2 evolution. The organism encodes hydrogenases, heterodisulfide reductases, and a complete Wolfe cycle for CO2 reduction, and genetic studies have begun to elucidate which components participate in electrode interactions.

*M. maripaludis* is a marine organism requiring salt concentrations of 0.2-0.6 M NaCl for growth. This halophilicity is advantageous for MES because the high ionic conductivity of saline media reduces ohmic losses in the electrochemical cell. The organism grows rapidly for a methanogen (doubling time 2-4 hours under optimal conditions), making it practical for laboratory MES studies. Its complete genome sequence and established genetic tools (transformation, gene deletion, reporter systems) enable systematic investigation of electrode-methanogen interactions at the molecular level.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Biological |
| **Subcategory** | Archaea - Methanogens |
| **Type** | object |

## Typical Values

- **Valid Range (CH4 production)**: 0.01 to 10 mmol CH4/L/day
- **Typical Range (CH4 production in MEC)**: 0.1 to 5.0 mmol CH4/L/day
- **Optimal Temperature**: 35-38 degrees C
- **Optimal pH**: 6.8-7.6
- **Doubling Time**: 2-4 hours (among fastest-growing methanogens)
- **NaCl Requirement**: 0.2-0.6 M
- **H2 Threshold**: 10-50 Pa
- **Current-to-Methane Efficiency**: 50-96% (reported in optimized biocathode systems)
- **Cathode Potential for Activity**: -0.4 to -0.8 V vs SHE

## Measurement Methods

- **Real-Time Gas Analysis**: Online mass spectrometry or micro-GC systems continuously monitor CH4, H2, CO2, and other gases in the cathode headspace. This provides real-time tracking of methanogenic activity in response to electrochemical perturbations (potential steps, current pulses).
- **Isotope Tracing Studies**: 13C-labeled bicarbonate is supplied to the cathode chamber. 13C-CH4 production is measured by GC-IRMS. Deuterium (D2O) labeling experiments distinguish H2-mediated from direct electron transfer-mediated methanogenesis by analyzing deuterium incorporation into methane.
- **Genetic Manipulation and Mutant Analysis**: Markerless gene deletions using the uracil phosphoribosyltransferase (upt) counterselection system enable targeted investigation of genes involved in electron uptake. Hydrogenase deletion mutants (delta-ech, delta-fru, delta-vhu/vhc) that cannot use H2 test the existence of alternative electron uptake pathways from electrodes.
- **Electrochemical Techniques**: Cyclic voltammetry of biocathodes at slow scan rates (1-5 mV/s) identifies catalytic waves associated with microbial CO2 reduction. Chronoamperometry at fixed cathode potentials measures steady-state current consumption. Differential pulse voltammetry (DPV) can resolve individual redox-active species on the electrode surface.
- **Confocal and Electron Microscopy**: CLSM with F420 autofluorescence or LIVE/DEAD staining visualizes biofilm structure on cathode surfaces. SEM and TEM reveal cell-electrode interfaces, including potential appendages or conductive structures mediating electron transfer.

## Affecting Factors

### Primary

- **Cathode Potential**: The applied cathode potential determines both H2 evolution rate and the thermodynamic feasibility of direct electron transfer. More negative potentials (-0.7 to -1.0 V vs SHE) increase methanogenic activity but also increase energy input. The optimal balance point maximizes energy efficiency.
- **H2 Availability and Partial Pressure**: When cathodic H2 is the primary electron source, its production rate limits methanogenesis. At more positive cathode potentials where H2 evolution is minimal, direct electron transfer may sustain methanogenesis at lower rates.
- **Temperature**: Optimal at 35-38 degrees C. Below 25 degrees C, growth rate and methanogenic activity decrease substantially. Temperature stability is important for reproducible MEC operation.
- **Salinity**: Requires marine salt concentrations. Freshwater conditions inhibit growth. The high ionic conductivity of marine media benefits MES electrochemistry by reducing solution resistance.
- **CO2/Bicarbonate Concentration**: Adequate dissolved inorganic carbon is essential. Typical MEC catholytes contain 20-50 mM bicarbonate buffer. CO2 limitation can occur if the headspace is flushed too vigorously with N2.
- **Cathode Material**: Carbon-based cathodes (graphite, carbon felt, carbon cloth) support biofilm formation better than metallic cathodes. Nickel foam cathodes can enhance H2 evolution catalysis, indirectly boosting methanogenesis.
- **Selenium and Tungsten**: *M. maripaludis* requires selenium for selenocysteine-containing enzymes (formate dehydrogenase, some hydrogenases). Tungsten substitutes for molybdenum in certain formylmethanofuran dehydrogenases.
- **Batch vs. Continuous Operation**: Continuous medium supply prevents nutrient depletion and metabolic product accumulation, supporting higher sustained methane production rates.

## Related Parameters

- **name**: CH4 Production Rate

- **relationship**: The primary performance output for *M. maripaludis* in MES
- **name**: Current Density

- **relationship**: Cathodic current consumption rate reflects methanogenic activity
- **name**: Voltage Efficiency

- **relationship**: The fraction of electrical energy converted to chemical energy in methane
- **name**: H2 Yield

- **relationship**: Cathodic H2 that is consumed by methanogens rather than collected
- **name**: Microbial Diversity Index

- **relationship**: In mixed-culture biocathodes, *M. maripaludis* competes with other hydrogenotrophs

## Compatible Systems

Microorganism Database

## References

- Lohner, S. T., et al. (2014). Hydrogenase-independent uptake and metabolism of electrons by the archaeon Methanococcus maripaludis. *ISME Journal*, 8, 1673-1681.
- Deutzmann, J. S., et al. (2015). Extracellular enzymes facilitate electron uptake in biocorrosion and bioelectrosynthesis. *mBio*, 6(2), e00496-15.
- Cheng, S., et al. (2009). Direct biological conversion of electrical current into methane. *Environmental Science & Technology*, 43(10), 3953-3958.
- Costa, K. C., & Leigh, J. A. (2014). Metabolic versatility in methanogens. *Current Opinion in Biotechnology*, 29, 70-75.
- Sarmiento, F. B., et al. (2013). Genome-scale analysis of Methanococcus maripaludis. *Molecular Microbiology*, 88(6), 1036-1050.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Methanococcus+Maripaludis&body=**Parameter%3A**+Methanococcus+Maripaludis%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fmethanococcus-maripaludis.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Methanococcus+Maripaludis&body=**Parameter%3A**+Methanococcus+Maripaludis%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fmethanococcus-maripaludis.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Methanococcus+Maripaludis&body=**Parameter%3A**+Methanococcus+Maripaludis%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fmethanococcus-maripaludis.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
