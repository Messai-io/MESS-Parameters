# Co2 Sensor Type

CO2 sensor type specifies the measurement technology used for monitoring carbon dioxide concentration in the headspace, dissolved phase, and ambient environment of microbial electrochemical systems (MES). CO2 monitoring is essential because carbon dioxide is the primary carbon product of organic substrate oxidation at MES anodes, the substrate for microbial electrosynthesis at biocathodes, a key determinant of the carbonate buffering system that controls electrolyte pH, and an indicator of overall microbial metabolic activity. The sensor technology must be selected to match the CO2 concentration range, measurement environment, accuracy requirements, and operational constraints of each MES application.

The dominant CO2 sensing technologies for MES include non-dispersive infrared (NDIR) absorption, Severinghaus-type dissolved CO2 electrodes, photoacoustic spectroscopy, and gas chromatography-thermal conductivity detection (GC-TCD). NDIR is the most widely deployed technology for continuous gas-phase CO2 monitoring, offering excellent selectivity (CO2 has a unique and strong absorption band at 4.26 micrometers), wide measurement range (0-100%), minimal cross-sensitivity, and long operational lifetime (more than 5 years) without consumable reagents. For dissolved CO2 measurement, Severinghaus electrodes provide direct in-situ measurement but have slower response times (2-5 minutes) and require periodic calibration and membrane replacement.

Accurate CO2 monitoring enables carbon balance calculations critical for understanding MES efficiency. In a well-characterized MFC, the CO2 production rate should equal the sum of electrochemical substrate oxidation (measured from coulombic recovery), aerobic respiration (from oxygen consumption), and biomass synthesis, minus any CO2 consumed by autotrophic processes. Discrepancies in this carbon balance indicate unmeasured carbon pathways (VOC emissions, dissolved organic carbon accumulation, methanogenesis) that require investigation. Continuous CO2 monitoring with 1-5% accuracy is typically required for reliable carbon balance closure within 10% uncertainty.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Monitoring Control |
| **Subcategory** | Gas Sensors |
| **Type** | select |

## Typical Values

- **NDIR sensors**: 0-100% CO2, 0.001-0.1% resolution, 5-30 s response
- **Severinghaus dissolved CO2**: 1-1000 hPa (0.1-100 kPa), 2-5% accuracy, 2-5 min T90
- **Photoacoustic**: 0-100% CO2, 0.001% resolution, 1-10 s response
- **GC-TCD**: 100 ppm - 100%, 0.01% resolution, 5-15 min per analysis
- **Solid electrolyte sensors**: 300-10,000 ppm, 50-100 ppm resolution, 30-60 s response
- **Sensor cost**: $50-300 (NDIR module), $500-3000 (dissolved CO2 probe), $5000-20,000 (photoacoustic analyzer)
- **Calibration frequency**: Monthly (NDIR), Weekly (Severinghaus), Annual (photoacoustic)

## Measurement Methods

- **Non-Dispersive Infrared (NDIR)**: NDIR CO2 sensors (Vaisala GMP252, LI-COR LI-830, SenseAir K30) measure the attenuation of infrared radiation at the 4.26 micrometer CO2 absorption band. The sample gas flows through an optical cell where an IR source illuminates a detector through a narrowband filter. A reference channel at a non-absorbing wavelength compensates for source and detector drift. Measurement range typically spans 0-100% CO2 with resolution of 10-100 ppm and accuracy of 1-3% of reading. NDIR sensors have zero cross-sensitivity to H2, CH4, N2, and O2 (which do not absorb at 4.26 micrometers). Water vapor interference is corrected using reference channel compensation or sample drying. No consumable reagents, minimal maintenance (annual calibration), and sensor lifetime exceeding 15 years make NDIR the standard for MES headspace CO2 monitoring.
- **Severinghaus Dissolved CO2 Electrode**: The Severinghaus sensor (Mettler Toledo InPro 5000i, YSI 8500) measures dissolved CO2 through a gas-permeable membrane separating the sample from an internal bicarbonate buffer solution containing a pH electrode. Dissolved CO2 diffuses across the membrane and equilibrates with the internal buffer, changing its pH proportionally to the logarithm of CO2 partial pressure. Measurement range is 1-1000 hPa (0.1-100 kPa pCO2) with accuracy of 2-5%. Response time (T90) of 2-5 minutes is limited by membrane diffusion kinetics. Membrane fouling in wastewater applications requires monthly replacement. Temperature compensation is essential (pCO2 sensitivity of 3-5% per degree C).
- **Photoacoustic Spectroscopy**: Photoacoustic CO2 analyzers (Gasera, INNOVA 1412i) modulate an IR laser or broadband source at acoustic frequencies, causing periodic heating and expansion of CO2 molecules at their absorption wavelength. The resulting pressure wave is detected by a microphone, providing a signal proportional to CO2 concentration. This method achieves ppb-level sensitivity (0.1 ppm detection limit), wide dynamic range (0.1 ppm to 100%), and multi-gas capability (simultaneous CO2, CH4, N2O, H2O analysis). High selectivity and self-calibration capability make photoacoustic sensors suitable for research applications requiring the highest accuracy.

## Affecting Factors

### Primary

- **Measurement environment (gas vs. dissolved)**: Gas-phase CO2 measurement using NDIR is straightforward and reliable. Dissolved CO2 measurement requires either Severinghaus electrodes (direct but slow) or headspace equilibration followed by gas-phase analysis (indirect but faster and more accurate). The choice depends on whether the dissolved or gas-phase concentration is the primary parameter of interest for the MES application.
- **Concentration range and resolution**: MES headspace CO2 ranges from near-atmospheric (0.04%) to 50-60% in biogas-producing systems. NDIR sensors with appropriate optical path length cover this range. For microbial electrosynthesis where CO2 is the feed gas, high-accuracy measurement at 20-100% is needed to quantify consumption rates. For ambient air monitoring around MES installations, sensors with 0.001% (10 ppm) resolution are required to detect small CO2 enrichments above the 420 ppm background.
- **Interfering gases**: Water vapor is the primary interferent for NDIR CO2 sensors because H2O has weak absorption bands near 4.26 micrometers. Modern dual-channel NDIR sensors reduce H2O cross-sensitivity to less than 0.1% CO2 equivalent per 1% H2O. Photoacoustic sensors are inherently multi-gas and can mathematically separate overlapping absorption spectra. For dissolved CO2 sensors, H2S interference occurs because H2S also diffuses through gas-permeable membranes and affects internal pH electrode response.
- **Temperature and pressure compensation**: Gas-phase CO2 concentration measurement must account for gas temperature and pressure to convert between volumetric (ppm, %) and mass (mg/m^3, g/L) units. A 10 degrees C temperature change alters gas density by approximately 3.4%, directly affecting NDIR reading. Most modern sensors include internal temperature and pressure compensation, but verification of compensation accuracy at the actual operating conditions is important.
- **Sampling system design**: The gas sampling system (tubing, pump, filters, dryers) connecting the MES headspace to the CO2 sensor introduces delays, potential leaks, and possible chemical interactions. PTFE or stainless steel tubing minimizes CO2 adsorption. Sample gas drying (Nafion dryers or cold traps) prevents condensation in the sensor. Particulate filters protect optical components. Sample flow rate (50-500 mL/min typical) must be sufficient for adequate sensor response time without creating significant vacuum in the MES headspace.

## Compatible Systems

Sensor Specifications

## References

- Hodgkinson, J., & Tatam, R. P. (2013). Optical gas sensing: A review. *Measurement Science and Technology*, 24(1), 012004.
- Neethirajan, S., et al. (2009). Recent advances in carbon dioxide (CO2) sensors for the agri-food industry. *Sensors*, 9(10), 8230-8262.
- Severinghaus, J. W., & Bradley, A. F. (1958). Electrodes for blood pO2 and pCO2 determination. *Journal of Applied Physiology*, 13(3), 515-520.
- Bak, T., et al. (2002). Photo-electrochemical hydrogen generation from water using solar energy. *International Journal of Hydrogen Energy*, 27(10), 991-1022.
- Bajracharya, S., et al. (2017). Carbon dioxide reduction by mixed and pure cultures in microbial electrosynthesis. *Applied Microbiology and Biotechnology*, 101(9), 3827-3842.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Co2+Sensor+Type&body=**Parameter%3A**+Co2+Sensor+Type%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fco2-sensor-type.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Co2+Sensor+Type&body=**Parameter%3A**+Co2+Sensor+Type%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fco2-sensor-type.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Co2+Sensor+Type&body=**Parameter%3A**+Co2+Sensor+Type%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fco2-sensor-type.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
