# Nitrogen Concentration

Nitrogen concentration encompasses the total and speciated nitrogen content in the electrolyte and gas phase of microbial electrochemical systems (MES), including ammonium (NH4+), nitrate (NO3-), nitrite (NO2-), dissolved nitrogen gas (N2), and organic nitrogen compounds. This parameter is fundamental to MES performance because nitrogen serves as an essential macronutrient for microbial growth, a potential electron acceptor for bioelectrochemical denitrification, and a key water quality parameter in wastewater treatment applications. The balance between nitrogen availability and carbon-to-nitrogen ratio (C:N) directly governs microbial community structure, biofilm development, and the partitioning of electrons between electricity generation and biomass production.

In MES configured for simultaneous wastewater treatment and energy recovery, nitrogen transformations represent a critical process coupling. Ammonium-rich wastewaters (municipal: 20-60 mg-N/L; industrial: 100-5000 mg-N/L) undergo nitrification at aerobic cathodes and denitrification at anaerobic anodes, with the bioelectrochemical system providing a unique platform for nitrogen removal without external carbon addition. Autotrophic denitrification using cathode-derived electrons has been demonstrated at rates of 0.01-0.5 kg-N/m^3/day, with the cathode potential controlling the electron supply rate to denitrifying bacteria.

Nitrogen speciation profoundly affects MES electrochemistry. Ammonium at concentrations above 500 mg-N/L inhibits methanogenic archaea while electroactive bacteria (Geobacter, Shewanella) maintain activity up to 2000-4000 mg-N/L, making nitrogen concentration a selective pressure favoring electricity generation over methane production. Nitrate and nitrite serve as alternative electron acceptors that compete with the anode for electrons from organic substrate oxidation, potentially reducing coulombic efficiency by 10-40%. Free ammonia (NH3, the un-ionized form) becomes toxic above 150-200 mg/L, directly inhibiting cellular processes through membrane disruption and enzyme interference.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Environmental |
| **Subcategory** | Gas Composition |
| **Type** | number |
| **Unit** | % |
| **Minimum** | 0 |
| **Maximum** | 100 |
| **Papers Reporting** | 23 |

## Typical Values

- **Valid Range**: 0 - 10,000 mg-N/L (total nitrogen)
- **Typical Range in MES feeds**: 10 - 500 mg-N/L
- **Municipal wastewater**: 20-60 mg-N/L (total)
- **Swine wastewater**: 500-5000 mg-N/L (ammonium dominant)
- **Anaerobic digester supernatant**: 500-2000 mg-N/L
- **Optimal C:N for electroactive biofilms**: 10:1 to 20:1
- **Discharge limits (EU Urban Wastewater Directive)**: less than 10-15 mg-N/L total nitrogen

## Measurement Methods

- **Ion-Selective Electrode (Ammonium)**: Ammonium-selective electrodes employing gas-permeable membranes over internal pH sensors provide rapid, in-situ ammonium measurement. The sample is adjusted to pH above 11 with NaOH (ionic strength adjuster), converting all NH4+ to dissolved NH3 gas, which diffuses through the membrane and changes the internal solution pH proportionally to concentration. Measurement range spans 0.01-14,000 mg-N/L with accuracy of 2-5%. Response time is 1-3 minutes. Temperature correction is essential as membrane permeability and the NH3/NH4+ equilibrium are strongly temperature dependent.
- **Spectrophotometric Methods**: Colorimetric assays provide species-specific nitrogen quantification: the indophenol blue method (NH4+, detection limit 0.01 mg-N/L), cadmium reduction method (NO3-, 0.01 mg-N/L), sulfanilamide/NED method (NO2-, 0.002 mg-N/L), and persulfate digestion (total nitrogen). These methods follow standard protocols (APHA Standard Methods 4500-NH3, 4500-NO3, 4500-NO2, 4500-Norg) and are performed using UV-Vis spectrophotometers at characteristic wavelengths. Automated discrete analyzers enable high-throughput analysis of 50-200 samples per hour.
- **Ion Chromatography**: Ion chromatography (Dionex ICS-5000, Metrohm 930) provides simultaneous quantification of NH4+, NO3-, NO2-, and other ionic nitrogen species in a single analysis. Anion columns separate NO3- and NO2- with detection limits of 0.005-0.05 mg-N/L, while cation columns quantify NH4+ with similar sensitivity. Suppressed conductivity detection ensures specificity against complex wastewater matrices. Analysis time is 15-30 minutes per sample. This method is the reference standard for regulatory compliance monitoring.

## Affecting Factors

### Primary

- **Feed composition and loading rate**: The nitrogen concentration in MES is primarily determined by the influent wastewater characteristics and hydraulic loading rate. Increasing the hydraulic retention time from 6 to 24 hours typically reduces effluent ammonium by 40-80% in systems with active nitrification. Shock loads of nitrogen can take 2-7 days for the microbial community to adapt, during which nitrogen removal efficiency drops 30-60%.
- **pH and temperature**: The NH3/NH4+ equilibrium shifts dramatically with pH: at pH 7.0 and 25 degrees C, only 0.6% exists as free ammonia, increasing to 5.4% at pH 8.0 and 36% at pH 9.0. Temperature elevation from 20 to 35 degrees C approximately doubles the free ammonia fraction. Nitrification rates follow Arrhenius kinetics with Q10 of 2.0-2.5, becoming negligibly slow below 10 degrees C.
- **Dissolved oxygen and electrode potential**: Nitrification requires dissolved oxygen above 0.5 mg/L (optimally 2-4 mg/L). Cathode potential below -200 mV versus SHE enables autotrophic denitrification where the electrode serves as electron donor. The potential window between -100 and -500 mV versus SHE determines the balance between partial and complete denitrification.
- **Microbial community composition**: The nitrogen cycle in MES involves specialized functional groups: ammonium-oxidizing bacteria (Nitrosomonas), nitrite-oxidizing bacteria (Nitrospira), denitrifiers (Pseudomonas, Paracoccus), and anammox bacteria (Candidatus Brocadia). Electroactive bacteria such as Geobacter can perform dissimilatory nitrate reduction to ammonium (DNRA), recycling nitrogen rather than removing it.
- **Membrane transport and ion migration**: In dual-chamber MES, ammonium transport through cation exchange membranes occurs via both concentration gradient diffusion and electromigration. NH4+ flux through Nafion 117 membranes ranges from 0.5-5 mmol/m^2/h. This transport can be exploited for nitrogen recovery from wastewater, with ammonium recovery efficiencies of 50-90% achievable in optimized systems.

## Compatible Systems

Atmospheric Ambient Conditions

## References

- Kelly, P. T., & He, Z. (2014). Nutrients removal and recovery in bioelectrochemical systems. *Bioresource Technology*, 153, 351-360.
- Kuntke, P., et al. (2012). Ammonium recovery and energy production from urine by a microbial fuel cell. *Water Research*, 46(8), 2627-2636.
- Virdis, B., et al. (2010). Simultaneous nitrification, denitrification and carbon removal in microbial fuel cells. *Water Research*, 44(9), 2970-2980.
- Clauwaert, P., et al. (2007). Biological denitrification in microbial fuel cells. *Environmental Science & Technology*, 41(9), 3354-3360.
- Yan, H., Saito, T., & Regan, J. M. (2012). Nitrogen removal in a single-chamber microbial fuel cell. *Water Research*, 46(7), 2215-2224.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Nitrogen+Concentration&body=**Parameter%3A**+Nitrogen+Concentration%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fnitrogen-concentration.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Nitrogen+Concentration&body=**Parameter%3A**+Nitrogen+Concentration%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fnitrogen-concentration.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Nitrogen+Concentration&body=**Parameter%3A**+Nitrogen+Concentration%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fnitrogen-concentration.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
