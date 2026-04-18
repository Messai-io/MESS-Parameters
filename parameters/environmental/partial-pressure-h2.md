# Partial Pressure H2

Partial pressure of hydrogen (pH2) measures the thermodynamic driving force of molecular hydrogen in the gas and dissolved phases of microbial electrochemical systems (MES). Hydrogen is the primary target product of microbial electrolysis cells (MECs), a critical intermediate in syntrophic microbial metabolism at MES anodes, and a potential electron donor for hydrogenotrophic processes at biocathodes. The pH2 determines both the thermodynamic feasibility of hydrogen-evolving reactions and the metabolic fate of electrons within the microbial community, making it one of the most consequential gas-phase parameters in MES operation.

In MECs, hydrogen is produced at the cathode through proton reduction (2H+ + 2e- -> H2), with the applied voltage overcoming the thermodynamic barrier of water electrolysis. The equilibrium potential for hydrogen evolution follows the Nernst equation: E = E0 - (RT/2F)ln(pH2/[H+]^2), creating a direct relationship between pH2, cathode potential, and solution pH. At pH 7, the equilibrium potential is -414 mV versus SHE at 1 atm pH2, shifting by +30 mV for each decade decrease in pH2. Maintaining low pH2 through continuous gas extraction reduces the required applied voltage by 60-120 mV, directly improving energy efficiency from typical values of 200-400% (relative to combustion energy of produced H2 versus electrical energy input) to 300-600%.

Hydrogen partial pressure also governs interspecies hydrogen transfer within anodic biofilms, a critical process that determines electron flow partitioning. At pH2 below 10 Pa (approximately 10^-4 atm), fermentative bacteria can thermodynamically convert propionate and butyrate to acetate and H2, feeding acetate to electroactive bacteria. Above this threshold, fermentation becomes thermodynamically unfavorable, causing accumulation of volatile fatty acids and reduced current generation. Hydrogenotrophic methanogens consume H2 at pH2 above approximately 1 Pa, competing directly with hydrogen recovery in MECs and representing a major loss pathway that can consume 20-80% of cathodically produced H2 in single-chamber systems.

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

- **Valid Range**: 0 - 101.3 kPa (0-100% H2)
- **Typical MEC headspace**: 10-95 kPa (often 60-95% in well-performing systems)
- **Atmospheric background**: 0.00005 kPa (0.5 ppm)
- **Interspecies H2 transfer threshold**: 0.001-0.01 kPa (1-10 Pa)
- **Methanogenesis threshold**: approximately 0.001 kPa (1 Pa)
- **Lower explosive limit in air**: 4.1 kPa (4.0 vol%)
- **Dissolved H2 at equilibrium (25 degrees C, 1 atm)**: 0.78 mmol/L (1.57 mg/L)
- **Target for fuel cell grade**: more than 99.97% (more than 101.27 kPa in pure stream)

## Measurement Methods

- **Gas Chromatography with TCD**: GC-TCD with Ar or N2 carrier gas (not He, which has similar thermal conductivity to H2) provides quantitative H2 measurement from 10 ppm to 100%. Molecular sieve 5A columns at 30-50 degrees C separate H2 from other permanent gases in 2-5 minutes. Detection limits of 10-50 ppm with TCD and 0.1-1 ppm with pulsed discharge detector enable both product stream and trace-level analysis. Calibration with certified H2/N2 or H2/Ar gas mixtures at 3-5 concentration levels ensures accuracy of 1-3% relative. Automated gas sampling with 6-port valves enables continuous monitoring at 5-30 minute intervals.
- **Electrochemical Hydrogen Sensors**: Amperometric H2 sensors (City Technology, Membrapor) provide continuous real-time monitoring with response times of 10-30 seconds. Catalytic combustion sensors measure 0-100% H2 but suffer from oxygen cross-sensitivity and cannot operate in anaerobic atmospheres. Electrochemical cells measure 0-2% H2 with resolution of 10 ppm, suitable for leak detection and safety monitoring. Palladium-based sensors offer excellent H2 selectivity but require careful temperature control due to palladium hydride phase transitions.
- **Dissolved Hydrogen Measurement**: Dissolved H2 is measured using membrane-inlet mass spectrometry (MIMS) with detection limits below 0.1 micromol/L, or using Clark-type H2 microsensors (Unisense H2-NP, tip diameter 25-100 micrometers) that enable profiling of dissolved H2 within biofilms and across membrane interfaces. The microsensor method is particularly valuable for understanding interspecies hydrogen transfer dynamics, with spatial resolution of 50-100 micrometers and temporal resolution of seconds.

## Affecting Factors

### Primary

- **Applied voltage and cathode potential**: In MECs, hydrogen production rate increases exponentially with applied voltage above the thermodynamic minimum (theoretically 0.14 V for acetate oxidation, practically 0.3-0.8 V accounting for overpotentials). At applied voltages of 0.6-1.0 V, cathode potentials reach -600 to -900 mV versus SHE, producing pH2 approaching 1 atm with hydrogen evolution rates of 0.1-6 m^3-H2/m^3-reactor/day. Cathode catalyst (Pt, Ni, MoS2, stainless steel) determines the overpotential required and thus the pH2 achievable at a given applied voltage.
- **Methanogenic hydrogen consumption**: In single-chamber MECs and systems with long retention times, hydrogenotrophic methanogens (Methanobacterium, Methanobrevibacter) consume cathodically produced H2 via CO2 + 4H2 -> CH4 + 2H2O, reducing H2 recovery by 20-80%. This loss pathway is more severe at pH2 above 1 kPa and temperatures of 30-37 degrees C. Strategies to suppress hydrogenotrophic methanogenesis include operating at low pH (below 5.5), short HRT (below 12 hours), periodic air exposure, and membrane separation of cathode and anode chambers.
- **Gas collection and extraction rate**: Rapid removal of H2 from the cathode headspace maintains low pH2, reducing thermodynamic resistance and improving production rate. Active vacuum extraction (maintaining headspace at 50-80 kPa total pressure) can increase H2 evolution rate by 20-50% compared to atmospheric pressure collection. However, reduced pH2 also increases the driving force for atmospheric contamination through any leak path.
- **Temperature and pH**: Higher temperature increases H2 solubility coefficient (decreasing dissolved H2 at a given pH2) and accelerates both H2-producing and H2-consuming biological kinetics. The Nernst potential for hydrogen evolution shifts +1.98 mV/K, requiring slightly higher applied voltage at elevated temperatures. Solution pH directly affects the proton concentration available for reduction, with the equilibrium potential shifting -59 mV per pH unit (more negative at higher pH).
- **Membrane H2 crossover**: In dual-chamber MECs, hydrogen produced at the cathode can diffuse back through the separator membrane to the anode chamber, where it is oxidized by anode-associated bacteria or methanogens. H2 permeability through Nafion 117 is approximately 4.5 x 10^-7 cm^2/s, resulting in H2 loss rates of 0.005-0.05 mL/cm^2/h depending on the pH2 differential. This crossover loss reduces net H2 recovery by 5-20% in typical dual-chamber configurations.

## Compatible Systems

Atmospheric Ambient Conditions

## References

- Call, D., & Logan, B. E. (2008). Hydrogen production in a single chamber microbial electrolysis cell lacking a membrane. *Environmental Science & Technology*, 42(9), 3401-3406.
- Logan, B. E., et al. (2008). Microbial electrolysis cells for high yield hydrogen gas production from organic matter. *Environmental Science & Technology*, 42(23), 8630-8640.
- Rozendal, R. A., et al. (2008). Towards practical implementation of bioelectrochemical wastewater treatment. *Trends in Biotechnology*, 26(8), 450-459.
- Lee, H.-S., et al. (2010). Evaluation of energy-conversion efficiencies in microbial fuel cells utilizing fermentable and non-fermentable substrates. *Water Research*, 44(1), 115-122.
- Cheng, S., & Logan, B. E. (2007). Sustainable and efficient biohydrogen production via electrohydrogenesis. *Proceedings of the National Academy of Sciences*, 104(47), 18871-18873.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Partial+Pressure+H2&body=**Parameter%3A**+Partial+Pressure+H2%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fpartial-pressure-h2.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Partial+Pressure+H2&body=**Parameter%3A**+Partial+Pressure+H2%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fpartial-pressure-h2.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Partial+Pressure+H2&body=**Parameter%3A**+Partial+Pressure+H2%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fpartial-pressure-h2.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
