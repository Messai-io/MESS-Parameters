# Trace Gas NH3

Trace gas ammonia (NH3) concentration measures the presence of gaseous ammonia in the headspace and ambient environment of microbial electrochemical systems (MES). Ammonia gas is released from MES electrolytes through volatilization from the ammonium/ammonia equilibrium (NH4+ <-> NH3 + H+, pKa = 9.25 at 25 degrees C), and its concentration in the gas phase is an indicator of nitrogen loss, pH conditions, and potential toxicity to the microbial community. NH3 is also a regulated air pollutant and workplace safety concern, making its monitoring essential for MES environmental compliance and occupational health.

In MES treating nitrogen-rich wastewaters (livestock wastewater: 500-5000 mg-N/L; anaerobic digester reject water: 500-2000 mg-N/L; urine: 5000-9000 mg-N/L), ammonia volatilization can be a significant nitrogen loss pathway, particularly when cathodic pH rises above 9.0 due to proton consumption during oxygen reduction (O2 + 4H+ + 4e- -> 2H2O). At pH 9.5 and 35 degrees C, approximately 50% of ammoniacal nitrogen exists as volatile NH3, creating gas-phase concentrations of 100-10,000 ppm in poorly ventilated headspaces. This ammonia stripping effect has been deliberately exploited in electrochemical ammonia recovery systems, where NH3 is volatilized from the cathode chamber and absorbed in acid traps (H2SO4) for fertilizer production.

Ammonia toxicity to electroactive bacteria occurs through two mechanisms: direct membrane disruption by the un-ionized NH3 molecule (threshold approximately 150-200 mg/L NH3-N), and indirect inhibition through pH elevation (NH3 + H2O -> NH4+ + OH-). Methanogens are more NH3-sensitive than electroactive bacteria, with acetoclastic methanogens showing 50% inhibition at 80-150 mg/L NH3-N while Geobacter maintains activity up to 200-400 mg/L NH3-N. This differential sensitivity has been exploited to selectively suppress methanogenesis in MES treating high-nitrogen substrates.

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

- **Valid Range**: 0 - 100,000 ppm (0-10% by volume)
- **Typical Range in MES headspace**: 0.1 - 1000 ppm
- **Atmospheric background**: 1-5 ppb (rural) to 50-100 ppb (agricultural)
- **Odor threshold**: 5-50 ppm
- **Occupational exposure limit (OSHA PEL)**: 50 ppm (8-hour TWA)
- **IDLH**: 300 ppm
- **MES cathode headspace (high-N wastewater)**: 50-5000 ppm
- **Dissolved NH3 at pH 9, 25 degrees C, 1000 mg-N/L total**: approximately 300 mg/L as NH3

## Measurement Methods

- **Electrochemical NH3 Sensors**: Amperometric NH3 sensors (Membrapor NH3/CR-200, Honeywell Midas) provide continuous gas-phase monitoring from 0.5 to 500 ppm with response time of 30-60 seconds. The sensor employs an acidic internal electrolyte behind a gas-permeable membrane; NH3 diffuses through the membrane, dissolves in the electrolyte, and is oxidized at the working electrode, generating current proportional to NH3 concentration. Cross-sensitivity to amines, H2S, and other basic/reducing gases requires calibration in the specific MES headspace composition. Sensor lifetime of 12-24 months with annual calibration.
- **Chemiluminescence Analyzers**: NOx/NH3 chemiluminescence analyzers (Thermo 17i) convert NH3 to NO using a stainless steel converter at 825 degrees C, then detect the NO via chemiluminescence reaction with O3. Detection range is 0.001-100 ppm NH3 with accuracy of 1% and response time of 120 seconds. This method provides reference-quality NH3 measurement but requires an expensive, laboratory-grade instrument. The high-temperature converter also responds to amines and HCN, requiring correction for these interferences in complex MES headspace compositions.
- **Acid Trap Absorption Method**: Quantitative NH3 collection uses absorption in acid traps (0.1 M H2SO4 or H3BO3 solution) through which headspace gas is drawn at a calibrated flow rate. After a defined collection period (1-24 hours), the absorbed ammonium is analyzed by ion chromatography, Nessler's method, or ion-selective electrode. The gas-phase NH3 concentration is calculated from collected NH4+ mass, gas flow rate, and sampling duration. This method provides time-integrated NH3 measurement with detection limits below 0.1 ppm, suitable for regulatory compliance assessment and cumulative emission quantification.

## Affecting Factors

### Primary

- **pH and free ammonia equilibrium**: The gas-phase NH3 concentration is exponentially dependent on liquid pH through the NH3/NH4+ equilibrium. At 1000 mg-N/L total ammoniacal nitrogen and 25 degrees C: pH 7.0 produces approximately 0.3 ppm headspace NH3; pH 8.0 produces approximately 3 ppm; pH 9.0 produces approximately 30 ppm; pH 10.0 produces approximately 300 ppm. Cathodic pH elevation in MFCs (pH 9-11 possible without buffering) is the primary driver of NH3 volatilization.
- **Temperature**: NH3 volatility increases strongly with temperature due to both the shift in NH3/NH4+ equilibrium (pKa decreases from 9.9 at 10 degrees C to 8.9 at 40 degrees C) and increased Henry's Law constant. At pH 8.5, headspace NH3 increases approximately 4x between 15 and 35 degrees C at the same total ammoniacal nitrogen concentration. Temperature control below 25 degrees C significantly reduces NH3 emissions.
- **Total ammoniacal nitrogen concentration**: Headspace NH3 is directly proportional to the dissolved free NH3 concentration, which scales linearly with total ammoniacal nitrogen (TAN) at constant pH and temperature. High-TAN wastewaters (more than 1000 mg-N/L) inevitably produce elevated headspace NH3 unless pH is rigorously controlled below 7.5.
- **Gas-liquid interfacial area and ventilation**: NH3 transfer from liquid to gas phase is proportional to the gas-liquid interfacial area and the driving force (dissolved NH3 concentration minus equilibrium value at headspace pNH3). Vigorous aeration (at cathodes), gas sparging, and turbulent mixing increase NH3 volatilization rates by 5-50x compared to quiescent surfaces. High ventilation rates dilute headspace NH3 but increase total NH3 emission mass flux.
- **Membrane ion transport**: In dual-chamber MES, NH4+ ion transport through cation exchange membranes (driven by electric field and concentration gradient) transfers nitrogen from anode to cathode chamber. This ammonium migration concentrates NH4+ in the cathode chamber where high pH (from ORR proton consumption) converts it to volatile NH3. The electrochemical ammonium recovery rate (1-5 mmol NH4+/m^2/h through Nafion) determines the NH3 production potential in the cathode chamber.

## Compatible Systems

Atmospheric Ambient Conditions

## References

- Kuntke, P., et al. (2012). Ammonium recovery and energy production from urine by a microbial fuel cell. *Water Research*, 46(8), 2627-2636.
- Cord-Ruwisch, R., Law, Y., & Cheng, K. Y. (2011). Ammonium as a sustainable proton shuttle in bioelectrochemical systems. *Bioresource Technology*, 102(20), 9691-9696.
- Kelly, P. T., & He, Z. (2014). Nutrients removal and recovery in bioelectrochemical systems. *Bioresource Technology*, 153, 351-360.
- Desloover, J., et al. (2012). Electrochemical resource recovery from digestate to prevent ammonia toxicity during anaerobic digestion. *Environmental Science & Technology*, 46(21), 12209-12216.
- Rahmani, A. R., et al. (2020). Electrolysis-based approaches for nitrogen recovery from wastewater. *Environmental Science and Pollution Research*, 27, 36705-36723.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Trace+Gas+NH3&body=**Parameter%3A**+Trace+Gas+NH3%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Ftrace-gas-nh3.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Trace+Gas+NH3&body=**Parameter%3A**+Trace+Gas+NH3%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Ftrace-gas-nh3.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Trace+Gas+NH3&body=**Parameter%3A**+Trace+Gas+NH3%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Ftrace-gas-nh3.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
