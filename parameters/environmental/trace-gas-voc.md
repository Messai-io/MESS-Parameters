# Trace Gas VOC

Volatile organic compound (VOC) trace gas concentration measures the aggregate presence of carbon-containing volatile chemicals in the headspace and emissions of microbial electrochemical systems (MES). VOCs encompass a diverse class of organic compounds with vapor pressures exceeding 0.01 kPa at 20 degrees C, including short-chain fatty acids (acetic, propionic, butyric acid), alcohols (ethanol, methanol, butanol), aldehydes (formaldehyde, acetaldehyde), ketones (acetone), sulfur-containing organics (dimethyl sulfide, methanethiol), and aromatic compounds (toluene, xylene). In MES, VOC emissions reflect microbial metabolic activity, substrate composition, and reactor operating conditions, serving as diagnostic indicators and potential environmental/health concerns.

VOCs in MES originate from multiple sources: incomplete oxidation of organic substrates by fermentative bacteria produces short-chain fatty acids and alcohols; sulfate-reducing bacteria generate volatile sulfur organics; and photosynthetic organisms produce isoprene and terpenes. In MES treating industrial wastewater (petroleum, chemical, pharmaceutical), influent VOCs may pass through the reactor partially or completely, with removal efficiencies of 30-95% depending on compound hydrophobicity, biodegradability, and reactor HRT. The fate of VOCs in MES is partitioned between biological oxidation (contributing to current generation when the oxidation is coupled to the anode), volatilization to the headspace, and sorption to biofilm and electrode materials.

From a product perspective, some VOCs represent valuable bioproducts of microbial electrosynthesis. Biocathodes reducing CO2 can produce acetate, ethanol, butyrate, and butanol as extracellular products, with volatile fractions contributing to headspace VOC concentrations. Monitoring VOC composition provides real-time insight into the product spectrum of electrosynthetic processes, enabling process optimization for target product selectivity. Total VOC (TVOC) concentrations in MES headspace typically range from 1-1000 ppm, with individual compound concentrations spanning six orders of magnitude depending on the specific system and operational conditions.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Environmental |
| **Subcategory** | Gas Composition |
| **Type** | number |
| **Unit** | ppm |
| **Minimum** | 0 |
| **Maximum** | 1000 |

## Typical Values

- **Valid Range**: 0 - 100,000 ppm (total VOC)
- **Typical Range in MES headspace**: 1 - 1000 ppm TVOC
- **Clean room background**: less than 0.1 ppm TVOC
- **Indoor air quality guideline**: less than 0.5 ppm TVOC
- **MES treating municipal wastewater**: 5-50 ppm TVOC
- **MES treating industrial wastewater**: 50-5000 ppm TVOC
- **Microbial electrosynthesis products**: 10-500 ppm (acetate, ethanol dominant)
- **Occupational exposure limits**: compound-specific (0.1-1000 ppm)

## Measurement Methods

- **Photoionization Detector (PID)**: Portable PID instruments (RAE Systems MiniRAE, Ion Science Tiger) provide real-time TVOC measurement by ionizing organic molecules with UV radiation (typically 10.6 eV lamp). The ionized molecules create a current proportional to total VOC concentration, with sensitivity from 0.1 to 15,000 ppm. Response factors vary by compound (benzene = 1.0, toluene = 0.5, methane = no response at 10.6 eV). PID cannot distinguish between individual VOCs but provides rapid screening. Response time is less than 3 seconds, enabling real-time leak detection and emission mapping around MES installations.
- **Gas Chromatography-Mass Spectrometry (GC-MS)**: GC-MS with thermal desorption or headspace sampling provides compound-specific VOC identification and quantification. Headspace gas is collected on sorbent tubes (Tenax TA, Carbograph), thermally desorbed, and separated on capillary columns (DB-624, DB-5ms). MS detection provides identification through mass spectral library matching (NIST) with detection limits of 0.01-1 ppb for individual compounds. Analysis time is 20-60 minutes per sample. This method is the reference standard for VOC speciation and is essential for regulatory compliance, health risk assessment, and detailed metabolic profiling of MES emissions.
- **Flame Ionization Detector (FID)**: FID-based total hydrocarbon analyzers (Baseline-Mocon 9000, Thermo 51i) burn sample gas in a hydrogen flame, generating ions proportional to carbon content. Detection range spans 0.01-10,000 ppm as methane equivalent with response time of 1-5 seconds. FID responds to virtually all carbon-containing volatiles (excluding formaldehyde, formic acid, and carbon disulfide) with relatively uniform response per carbon atom. Continuous FID monitoring provides a reliable TVOC trend for MES process control.

## Affecting Factors

### Primary

- **Substrate composition and loading**: Complex organic substrates (food waste, brewery wastewater, petroleum-contaminated water) produce diverse VOC profiles during fermentation and partial oxidation. At high organic loading rates (more than 5 g COD/L/day), incomplete oxidation increases volatile fatty acid (VFA) accumulation and headspace VOC concentrations. Specific substrates generate characteristic VOCs: glucose fermentation produces ethanol and acetate; protein degradation produces branched-chain fatty acids, amines, and indoles; lipid hydrolysis produces glycerol and long-chain fatty acids.
- **pH and volatility equilibrium**: Weak acid VOCs (acetic acid pKa 4.76, butyric acid pKa 4.82) are volatile primarily in their protonated (un-ionized) form. At pH 5.0, approximately 37% of acetic acid is protonated and volatile; at pH 7.0, only 0.6% is volatile. Anodic pH depression (common in poorly buffered MES) dramatically increases VFA volatilization. Maintaining pH above 6.5 reduces headspace VFA concentrations by 10-100x compared to pH 5.0 operation.
- **Temperature and Henry's Law**: VOC volatility increases with temperature according to the van't Hoff relationship. For acetic acid, the Henry's Law constant increases approximately 3x between 20 and 40 degrees C. Higher operating temperatures increase both VOC production rates (faster microbial metabolism) and volatilization rates, creating multiplicative increases in headspace VOC concentrations.
- **Gas-liquid mass transfer and aeration**: Aeration (at cathodes) and gas sparging strip dissolved VOCs from solution, increasing headspace concentrations while potentially improving water quality. Surface aeration at 0.5 vvm can remove 50-90% of dissolved VOCs within 1 hour, depending on compound volatility (expressed as Henry's Law constant). Sealed reactors trap VOCs in the headspace, where concentrations can build to levels requiring treatment before venting.
- **Biofilm sorption and biodegradation**: Electroactive biofilms and carbon electrode materials sorb hydrophobic VOCs (log Kow more than 1) through partitioning into the EPS matrix and hydrophobic electrode surfaces. This sorption provides a first-pass removal mechanism that delays VOC breakthrough to the headspace by minutes to hours. Subsequent biodegradation of sorbed VOCs by biofilm microorganisms provides long-term removal, with highly biodegradable compounds (BTEX) achieving greater than 90% removal in well-acclimated MES biofilms.

## Compatible Systems

Atmospheric Ambient Conditions

## References

- Pant, D., et al. (2012). Bioelectrochemical systems (BES) for sustainable energy production and product recovery from organic wastes and industrial wastewaters. *RSC Advances*, 2(4), 1248-1263.
- Rabaey, K., & Rozendal, R. A. (2010). Microbial electrosynthesis. *Nature Reviews Microbiology*, 8(10), 706-716.
- Bajracharya, S., et al. (2017). Carbon dioxide reduction by mixed and pure cultures in microbial electrosynthesis. *Applied Microbiology and Biotechnology*, 101(9), 3827-3842.
- Arends, J. B. A., et al. (2017). Continuous long-term electricity-driven bioproduction of carboxylates and isopropanol from CO2. *Bioresource Technology*, 224, 264-270.
- Lovley, D. R. (2011). Powering microbes with electricity: Direct electron transfer from electrodes to microbes. *Environmental Microbiology Reports*, 3(1), 27-35.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Trace+Gas+VOC&body=**Parameter%3A**+Trace+Gas+VOC%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Ftrace-gas-voc.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Trace+Gas+VOC&body=**Parameter%3A**+Trace+Gas+VOC%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Ftrace-gas-voc.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Trace+Gas+VOC&body=**Parameter%3A**+Trace+Gas+VOC%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Ftrace-gas-voc.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
