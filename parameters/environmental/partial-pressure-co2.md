# Partial Pressure CO2

Partial pressure of carbon dioxide (pCO2) quantifies the thermodynamic activity of CO2 gas in the headspace and dissolved phase of microbial electrochemical systems (MES). Carbon dioxide is both a major metabolic product of organic matter oxidation at MES anodes and a potential carbon source for autotrophic microorganisms at biocathodes. The pCO2 directly controls the carbonate buffer system equilibrium (CO2/HCO3-/CO32-), which is the dominant pH buffering mechanism in most MES electrolytes, making this parameter a critical determinant of solution chemistry, microbial activity, and electrochemical performance.

In anodic processes, heterotrophic oxidation of organic substrates by electroactive bacteria generates CO2 as the terminal carbon product. For acetate oxidation (CH3COO- + 2H2O -> 2CO2 + 7H+ + 8e-), stoichiometric CO2 production corresponds to 2 mol CO2 per 8 mol electrons transferred. At typical MFC current densities (1-10 A/m^2), CO2 production rates range from 0.01-0.1 mmol/h per cm^2 of anode surface. This biological CO2 production elevates pCO2 in sealed anodic chambers to 5-30 kPa (5-30% of headspace), significantly above atmospheric levels (0.04 kPa), creating acidification pressure that must be managed through buffering or CO2 removal.

At MES biocathodes, CO2 serves as the electron acceptor for microbial electrosynthesis, where autotrophic microorganisms (acetogens such as Sporomusa ovata, Clostridium ljungdahlii) reduce CO2 to multi-carbon organic compounds using cathode-derived electrons. The pCO2 directly determines substrate availability for these organisms, with optimal performance typically observed at 20-100 kPa pCO2. Below 5 kPa, CO2 mass transfer limitation reduces acetate production rates by 50-80%. The dissolved CO2 concentration follows Henry's Law (KH = 3.4 x 10^-2 mol/L/atm at 25 degrees C), providing approximately 34 mM dissolved CO2 at 1 atm pCO2.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Environmental |
| **Subcategory** | Pressure Parameters |
| **Type** | number |
| **Unit** | kPa |
| **Minimum** | 0 |
| **Maximum** | 100 |

## Typical Values

- **Valid Range**: 0 - 101.3 kPa (0-100% CO2)
- **Typical Range in MES**: 1 - 50 kPa
- **Atmospheric CO2**: 0.042 kPa (420 ppm)
- **MFC anodic headspace**: 5-30 kPa
- **Microbial electrosynthesis feed**: 20-100 kPa
- **Anaerobic digester biogas**: 25-45 kPa
- **Dissolved CO2 at equilibrium (25 degrees C, 1 atm)**: 34 mmol/L
- **pH effect**: pH 6.0 at 50 kPa pCO2 in unbuffered water

## Measurement Methods

- **Non-Dispersive Infrared (NDIR) Analysis**: NDIR CO2 analyzers (LI-COR LI-830, Vaisala GMP252, Edinburgh Instruments Gascard) measure the strong CO2 absorption band at 4.26 micrometers. Measurement ranges from 0-100% CO2 with resolution of 1 ppm to 0.01% depending on range setting. Response time is 5-30 seconds with accuracy of 1-2% of reading. Continuous flow-through sampling at 200-500 mL/min enables real-time headspace monitoring. Dual-wavelength compensation eliminates interference from water vapor and particulates. NDIR sensors are the standard for online MES gas monitoring due to their specificity, stability, and low maintenance requirements.
- **Gas Chromatography with TCD**: GC-TCD provides reference-quality CO2 measurement alongside other headspace gases (CH4, H2, N2, O2) in a single analysis. Separation on Porapak Q or Hayesep columns with He carrier gas enables quantification from 100 ppm to 100% CO2. Analysis time of 5-15 minutes per injection limits temporal resolution but provides comprehensive gas composition data essential for carbon and electron balance calculations. Automated gas sampling valves enable unattended operation with 15-60 minute measurement intervals.
- **Dissolved CO2 Sensors**: Severinghaus-type dissolved CO2 sensors (Mettler Toledo InPro 5000i, YSI 8500) measure pCO2 in the liquid phase using a pH electrode behind a CO2-permeable membrane. CO2 diffuses across the membrane into an internal bicarbonate buffer solution, changing pH proportionally to dissolved CO2 concentration. Measurement range is 1-1000 hPa (0.1-100 kPa) with accuracy of 2-5% and T90 response time of 2-5 minutes. These sensors are essential for direct measurement of CO2 availability at the biofilm interface.

## Affecting Factors

### Primary

- **Organic loading rate and current density**: CO2 production rate scales with both organic substrate consumption and electrical current generation. At coulombic efficiency of 50%, an MFC treating 1 g COD/L acetate at 6-hour HRT produces approximately 15 kPa pCO2 in a sealed headspace with gas-to-liquid ratio of 0.5. Higher organic loading or higher coulombic efficiency increases pCO2 proportionally, potentially exceeding the buffering capacity of the electrolyte and causing pH depression below optimal ranges.
- **pH and carbonate equilibrium**: pCO2 is thermodynamically coupled to solution pH through the carbonate system: CO2(g) <-> CO2(aq) <-> H2CO3 <-> HCO3- + H+ <-> CO32- + 2H+. At pH 7.0, approximately 80% of total dissolved inorganic carbon exists as HCO3-, with only 0.4% as CO2(aq). Decreasing pH to 6.0 increases CO2(aq) to 18% while increasing pH to 8.0 reduces it to 0.04%. This equilibrium means that pH control and CO2 management are inseparable in MES operation.
- **Headspace volume and gas exchange**: The ratio of headspace volume to liquid volume determines how rapidly biological CO2 production changes pCO2. Small headspace ratios (less than 0.1 L gas per L liquid) result in rapid pCO2 increases that may exceed buffering capacity within hours. Continuous gas purging with N2 maintains low pCO2 but removes CO2 needed for autotrophic processes. Gas recirculation through CO2 scrubbers (NaOH traps) enables selective CO2 removal while retaining other gases.
- **Temperature**: CO2 solubility decreases with temperature (Henry's constant increases from 2.3 x 10^-2 mol/L/atm at 15 degrees C to 4.5 x 10^-2 at 40 degrees C for the effective constant including hydration), releasing dissolved CO2 to the gas phase as temperature increases. Simultaneously, metabolic CO2 production rates increase with temperature. The net effect is that higher temperatures generally increase pCO2 in both gas and dissolved phases.
- **Microbial community metabolic balance**: The ratio of CO2 produced to CO2 consumed depends on the balance between heterotrophic (CO2-producing) and autotrophic (CO2-consuming) metabolism. In mixed-culture MES, homoacetogens, methanogens, and autotrophic denitrifiers all consume CO2, reducing pCO2 by 20-60% compared to systems dominated by pure heterotrophic oxidation.

## Compatible Systems

Atmospheric Ambient Conditions

## References

- Nevin, K. P., et al. (2010). Microbial electrosynthesis: Feeding microbes electricity to convert carbon dioxide and water to multicarbon extracellular organic compounds. *mBio*, 1(2), e00103-10.
- Lovley, D. R., & Nevin, K. P. (2013). Electrobiocommodities: Powering microbial production of fuels and commodity chemicals from carbon dioxide. *Current Opinion in Biotechnology*, 24(3), 385-390.
- Jourdin, L., et al. (2014). A novel carbon nanotube modified scaffold as an efficient biocathode material for improved microbial electrosynthesis. *Journal of Materials Chemistry A*, 2(32), 13093-13102.
- Bajracharya, S., et al. (2017). Carbon dioxide reduction by mixed and pure cultures in microbial electrosynthesis. *Applied Microbiology and Biotechnology*, 101(9), 3827-3842.
- Rabaey, K., & Rozendal, R. A. (2010). Microbial electrosynthesis: Revisiting the electrical route for microbial production. *Nature Reviews Microbiology*, 8(10), 706-716.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Partial+Pressure+CO2&body=**Parameter%3A**+Partial+Pressure+CO2%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fpartial-pressure-co2.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Partial+Pressure+CO2&body=**Parameter%3A**+Partial+Pressure+CO2%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fpartial-pressure-co2.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Partial+Pressure+CO2&body=**Parameter%3A**+Partial+Pressure+CO2%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fpartial-pressure-co2.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
