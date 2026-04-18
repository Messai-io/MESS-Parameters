# Oxygen Concentration

Oxygen concentration measures the amount of molecular oxygen (O2) dissolved in the electrolyte or present in the gas phase of microbial electrochemical systems (MES). This parameter is arguably the most operationally significant environmental variable in MES, as oxygen simultaneously serves as the terminal electron acceptor at air cathodes, an inhibitor of anaerobic electroactive bacteria at anodes, a driver of aerobic microbial processes, and a key determinant of the redox environment that governs biofilm community structure and electron transfer pathways.

In MFC operation, dissolved oxygen (DO) management represents a fundamental design tension. At the cathode, oxygen is the preferred electron acceptor for the oxygen reduction reaction (ORR), requiring adequate O2 supply (ideally 2-8 mg/L DO in the cathodic chamber or unlimited supply at air-breathing cathodes) to avoid cathode limitation. Simultaneously, at the anode, dissolved oxygen must be maintained below 0.1 mg/L (ideally less than 0.01 mg/L) to preserve the strictly anaerobic conditions required by obligate anaerobic electroactive bacteria such as Geobacter sulfurreducens. Oxygen intrusion at the anode competes with the electrode as electron acceptor, reduces coulombic efficiency by 5-40%, and supports aerobic heterotrophs that consume substrate without generating electricity.

The concentration gradient of oxygen across MES membranes and within biofilms creates complex microenvironmental profiles. Oxygen diffusion through proton exchange membranes (Nafion 117 permeability: 3.1 x 10^-6 cm^2/s) and air-cathode gas diffusion layers establishes steady-state oxygen flux into the anodic chamber. Thick anodic biofilms (more than 50 micrometers) develop internal oxygen gradients where the outer layers consume diffusing oxygen aerobically, creating an anaerobic core where electroactive metabolism occurs. This self-stratification is critical for system function but is dynamic, varying with external oxygen concentration, biofilm thickness, and organic loading rate.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Environmental |
| **Subcategory** | Gas Composition |
| **Type** | number |
| **Unit** | % |
| **Minimum** | 0 |
| **Maximum** | 100 |
| **Papers Reporting** | 7 |

## Typical Values

- **Valid Range**: 0 - 45 mg/L (0 - approximately 300% air saturation)
- **Typical Range**: 0 - 8.2 mg/L (0-100% air saturation at 25 degrees C, sea level)
- **Anodic chamber target**: less than 0.1 mg/L (ideally less than 0.01 mg/L)
- **Cathodic chamber (air cathode)**: 6-8 mg/L (near saturation)
- **Air saturation at 25 degrees C**: 8.24 mg/L (at 1 atm, freshwater)
- **Air saturation at 35 degrees C**: 6.93 mg/L
- **Critical threshold for anaerobic bacteria**: less than 0.5 mg/L
- **Hypoxic threshold**: less than 2 mg/L

## Measurement Methods

- **Optical Dissolved Oxygen Sensors**: Luminescence-based DO sensors (Hach LDO, YSI ProODO, Hamilton VisiFerm) are the preferred technology for MES monitoring. These sensors measure the quenching of fluorescence lifetime of a platinum-porphyrin or ruthenium complex immobilized in a gas-permeable polymer matrix. Advantages include zero oxygen consumption during measurement (unlike Clark electrodes), no flow dependency, minimal drift (less than 1% per year), and no electrolyte maintenance. Measurement range spans 0-20 mg/L with resolution of 0.01 mg/L and accuracy of 0.1 mg/L. Response time (T90) is 30-60 seconds. Miniaturized sensor spots (PreSens, PyroScience) with fiber-optic interrogation enable non-invasive measurement through transparent reactor walls.
- **Clark-Type Electrodes**: Polarographic (Clark) electrodes remain widely used, employing a platinum cathode and Ag/AgCl reference behind an oxygen-permeable membrane. Applied potential of -0.7 V reduces O2, generating current proportional to oxygen flux. Clark microsensors (Unisense OX-25, tip diameter 25 micrometers) enable oxygen profiling within biofilms at 25-50 micrometer spatial resolution, mapping the microaerobic/anaerobic transition zone critical to MES biofilm function.
- **Trace Oxygen Analysis**: For verifying anaerobic conditions at MES anodes, trace oxygen analyzers based on electrochemical cells (Teledyne 3000TA), paramagnetic principles (Servomex 4100), or tunable diode laser spectroscopy provide ppb-level sensitivity. Gas-phase trace oxygen measurement ranges from 0.001 to 10 ppm. These instruments are essential for verifying gas headspace quality in sealed anodic chambers and for leak detection.

## Affecting Factors

### Primary

- **Temperature and salinity**: Oxygen solubility decreases with increasing temperature, from 14.6 mg/L at 0 degrees C to 8.24 mg/L at 25 degrees C and 6.93 mg/L at 35 degrees C (freshwater, 1 atm). Salinity further reduces solubility by approximately 0.5 mg/L per 10 g/L NaCl at 25 degrees C, important for marine and brackish water MES applications.
- **Membrane oxygen permeability**: In dual-chamber MES, oxygen transport from cathode to anode chamber through the separator membrane is a major source of anodic oxygen intrusion. Nafion 117 results in oxygen flux of approximately 0.01-0.05 mg/cm^2/h. Ceramic and porous separators may have 10-100x higher oxygen transport rates.
- **Organic loading rate**: At high organic loadings (more than 1 g COD/L/day), microbial oxygen consumption in the anodic chamber exceeds oxygen intrusion, maintaining DO below 0.1 mg/L. At low loadings (less than 0.1 g COD/L/day), reduced microbial oxygen demand may be insufficient to scavenge diffusing oxygen, leading to elevated anodic DO and decreased coulombic efficiency.
- **Air cathode design and PTFE loading**: PTFE content in the gas diffusion layer (typically 10-60 wt%) determines the balance between oxygen transport and water management. Optimal PTFE content is typically 20-40%, providing a compromise between oxygen utilization efficiency and anodic oxygen intrusion limited to 0.01-0.1 mg/cm^2/h.
- **Aeration and mixing**: Superficial air velocity of 0.5-2 L/min per liter of catholyte maintains near-saturation DO. Over-aeration wastes energy (0.5-2 kWh/m^3) while under-aeration creates cathode mass transfer limitation, reducing MFC power by 20-50%. Passive air cathodes eliminate aeration energy but produce lower power densities.

## Compatible Systems

Atmospheric Ambient Conditions

## References

- Cheng, S., Liu, H., & Logan, B. E. (2006). Increased performance of single-chamber microbial fuel cells using an improved cathode structure. *Electrochemistry Communications*, 8(3), 489-494.
- Oh, S., Min, B., & Logan, B. E. (2004). Cathode performance as a factor in electricity generation in microbial fuel cells. *Environmental Science & Technology*, 38(18), 4900-4904.
- Rismani-Yazdi, H., et al. (2008). Cathodic limitations in microbial fuel cells. *Journal of Power Sources*, 180(2), 683-694.
- Du, Z., Li, H., & Gu, T. (2007). A state of the art review on microbial fuel cells. *Biotechnology Advances*, 25(5), 464-482.
- Wei, J., Liang, P., & Huang, X. (2011). Recent progress in electrodes for microbial fuel cells. *Bioresource Technology*, 102(20), 9335-9344.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Oxygen+Concentration&body=**Parameter%3A**+Oxygen+Concentration%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Foxygen-concentration.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Oxygen+Concentration&body=**Parameter%3A**+Oxygen+Concentration%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Foxygen-concentration.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Oxygen+Concentration&body=**Parameter%3A**+Oxygen+Concentration%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Foxygen-concentration.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
