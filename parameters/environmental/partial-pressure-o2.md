# Partial Pressure O2

Partial pressure of oxygen (pO2) measures the thermodynamic activity of molecular oxygen in the gas phase surrounding and within microbial electrochemical systems (MES). While closely related to dissolved oxygen concentration in the liquid phase, pO2 specifically refers to the gas-phase contribution and governs the equilibrium dissolved oxygen concentration through Henry's Law. This parameter is fundamental to MES because oxygen serves as the primary cathodic electron acceptor in microbial fuel cells (MFCs), while being a potent inhibitor of anaerobic processes essential for anodic bioelectrochemistry.

In air-cathode MFCs, the gas-phase pO2 at the cathode air interface directly determines the maximum rate of oxygen reduction reaction (ORR). At standard atmospheric conditions (pO2 = 21.2 kPa), the equilibrium cathode potential for the ORR is +815 mV versus SHE at pH 7, providing the thermodynamic driving force for MFC electricity generation. Reducing pO2 decreases the cathode equilibrium potential by approximately 15 mV per 10x decrease in pO2 (Nernst equation), reducing available cell voltage. However, practical cathode potentials are dominated by kinetic overpotentials (200-500 mV) rather than thermodynamic limitations, so moderate pO2 reductions (to 10 kPa) have relatively small effects on actual MFC power output (less than 10% reduction).

Controlling pO2 in the anodic environment is essential for maintaining anaerobic conditions. In sealed anodic chambers, residual pO2 must be maintained below 0.01 kPa (100 ppm) to prevent oxygen inhibition of strictly anaerobic electroactive bacteria. Oxygen detection by Geobacter species triggers expression of oxidative stress response genes and can shift metabolism from electrode respiration to fumarate reduction, reducing current output. The pO2 in the anodic headspace is determined by the balance between oxygen intrusion (through membranes, seals, and feed solutions) and biological oxygen consumption by facultative anaerobes in the outer biofilm layers.

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

- **Valid Range**: 0 - 101.3 kPa (0-100% O2)
- **Atmospheric pO2**: 21.2 kPa (20.95 vol%)
- **Air cathode surface**: 21.2 kPa (atmospheric)
- **Anodic headspace target**: less than 0.01 kPa (less than 100 ppm)
- **Strictly anaerobic conditions**: less than 0.001 kPa (less than 10 ppm)
- **Enriched oxygen cathode**: 50-101.3 kPa
- **High-altitude operation (3000 m)**: 14.2 kPa
- **Dissolved O2 at atmospheric pO2 (25 degrees C)**: 8.24 mg/L

## Measurement Methods

- **Paramagnetic Oxygen Analyzers**: Paramagnetic analyzers (Servomex 4100, Systech 900) exploit the strong paramagnetic susceptibility of O2 molecules (unique among common gases) to provide highly selective pO2 measurement. A dumbbell of diamagnetic glass spheres suspended in a non-uniform magnetic field is deflected by surrounding O2 molecules, with deflection proportional to O2 concentration. Measurement range spans 0-100% O2 with resolution of 0.001% and accuracy of 0.01% absolute. Response time is 5-15 seconds. This method has zero cross-sensitivity to other gases, making it ideal for complex MES headspace mixtures containing H2, CH4, CO2, and H2S.
- **Electrochemical Oxygen Sensors (Galvanic)**: Galvanic O2 sensors (Analytical Industries, Teledyne) employ a lead anode and gold cathode separated by alkaline electrolyte behind an O2-permeable membrane. O2 diffuses through the membrane and is reduced at the cathode, generating a current proportional to pO2. These sensors measure 0-100% O2 with accuracy of 0.1-1% absolute and response time (T90) of 5-15 seconds. Sensor lifetime is 12-24 months, limited by lead anode consumption. Compact size enables integration into gas sampling lines for continuous headspace monitoring.
- **Zirconia Oxygen Sensors**: High-temperature zirconia (ZrO2) sensors measure pO2 by detecting the potential difference across a yttria-stabilized zirconia membrane at 600-800 degrees C. These sensors provide measurement from 0.1 ppm to 100% O2 with logarithmic response, making them ideal for trace O2 detection in anaerobic MES environments. Response time is 1-5 seconds. The high operating temperature prevents condensation and fouling but requires thermal management and increases power consumption. Zirconia sensors are commonly used in industrial process monitoring and can be adapted for MES headspace analysis.

## Affecting Factors

### Primary

- **Altitude and atmospheric pressure**: pO2 decreases linearly with total atmospheric pressure, from 21.2 kPa at sea level to 14.2 kPa at 3000 m and 10.5 kPa at 5000 m elevation. For air-cathode MFCs deployed at high altitude, the reduced pO2 decreases cathode ORR rate by 10-30% compared to sea-level operation, proportional to the reduction in O2 mass transfer driving force.
- **Cathode gas diffusion layer design**: In air-breathing cathodes, the GDL structure controls O2 transport from atmosphere to catalyst layer. PTFE loading (10-60 wt%), microporous layer presence, and total GDL thickness determine O2 permeability. The effective pO2 at the catalyst surface may be only 30-60% of atmospheric pO2 due to diffusion resistance, creating the rate-limiting transport step for cathode performance.
- **Humidity and water management**: Water vapor in the cathode air stream dilutes O2, reducing effective pO2. At 100% relative humidity and 35 degrees C, water vapor pressure is 5.6 kPa, reducing effective pO2 from 21.2 to 19.8 kPa (7% reduction). Water flooding of cathode GDL pores blocks O2 transport pathways, effectively reducing local pO2 at the catalyst to near zero and causing dramatic performance loss.
- **Membrane and seal integrity**: O2 permeation through PEM membranes and gasket seals introduces O2 into anodic chambers. O2 flux through Nafion 117 is approximately 0.01-0.05 mg/cm^2/h at 21 kPa pO2 differential. Gasket materials (silicone, EPDM, Viton) have O2 permeabilities spanning two orders of magnitude, with Viton providing the lowest O2 transmission. Aging, chemical degradation, and mechanical compression affect seal performance over time.
- **Biological oxygen consumption**: Facultative anaerobes in the outer layers of anodic biofilms consume intruding oxygen before it reaches the electrode surface, maintaining anaerobic conditions in the biofilm core. This biological oxygen barrier is effective when organic substrate is available (aerobic respiration rate more than O2 intrusion rate) but fails during substrate depletion or low-loading periods, exposing electroactive bacteria to inhibitory oxygen levels.

## Compatible Systems

Atmospheric Ambient Conditions

## References

- Oh, S., Min, B., & Logan, B. E. (2004). Cathode performance as a factor in electricity generation in microbial fuel cells. *Environmental Science & Technology*, 38(18), 4900-4904.
- Rismani-Yazdi, H., et al. (2008). Cathodic limitations in microbial fuel cells. *Journal of Power Sources*, 180(2), 683-694.
- Cheng, S., Liu, H., & Logan, B. E. (2006). Power densities using different cathode catalysts and polymer binders in single chamber microbial fuel cells. *Environmental Science & Technology*, 40(1), 364-369.
- Liu, H., & Logan, B. E. (2004). Electricity generation using an air-cathode single chamber microbial fuel cell. *Environmental Science & Technology*, 38(14), 4040-4046.
- Zhao, F., et al. (2006). Challenges and constraints of using oxygen cathodes in microbial fuel cells. *Environmental Science & Technology*, 40(17), 5193-5199.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Partial+Pressure+O2&body=**Parameter%3A**+Partial+Pressure+O2%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fpartial-pressure-o2.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Partial+Pressure+O2&body=**Parameter%3A**+Partial+Pressure+O2%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fpartial-pressure-o2.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Partial+Pressure+O2&body=**Parameter%3A**+Partial+Pressure+O2%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fpartial-pressure-o2.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
