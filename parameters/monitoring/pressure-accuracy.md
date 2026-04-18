# Pressure Accuracy

Pressure accuracy defines the measurement uncertainty of pressure sensors in MES, expressed as percentage of full scale (FS), percentage of reading, or absolute value (Pa, mbar). Pressure monitoring in MES serves multiple purposes: headspace pressure tracking (for gas production rate calculation by pressure accumulation method), hydrostatic level measurement, transmembrane pressure monitoring (for membrane fouling detection), and atmospheric pressure compensation of dissolved gas measurements.

Gas production rate is often calculated from the rate of headspace pressure increase in sealed MES reactors: dV/dt = (V_headspace/P_atm) * dP/dt. A pressure accuracy of 0.1% FS on a 0-200 mbar gauge pressure sensor (0.2 mbar = 20 Pa) limits gas production rate measurement accuracy to approximately 0.1 mL/min for a 1-liter headspace, adequate for most MES applications.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Monitoring Control |
| **Subcategory** | Physical Sensors |
| **Type** | number |
| **Unit** | % |
| **Minimum** | 0.1 |
| **Maximum** | 5 |
| **Papers Reporting** | 30 |

## Typical Values

- **Precision pressure transducer**: 0.01-0.05% FS
- **Process pressure transmitter**: 0.1-0.5% FS
- **Low-cost MEMS sensor**: 0.5-2% FS
- **Barometric (atmospheric)**: 0.01-0.1 hPa (0.001-0.01% of 1013 hPa)
- **Differential pressure (membrane)**: 0.1-0.5% FS
- **Typical MES headspace gauge pressure**: 0-50 mbar above atmospheric
- **Measurement range**: 0-100 mbar (gas headspace), 0-500 mbar (liquid level)

## Measurement Methods

- **Piezoresistive MEMS Sensors**: Silicon diaphragm sensors with piezoresistive strain gauges measure pressure-induced diaphragm deflection. These sensors provide 0.1-1% FS accuracy with compact size (ideal for MES integration), fast response (less than 1 ms), and low cost ($10-200). Temperature compensation (built-in or external) corrects for silicon's temperature-dependent piezoresistance. Differential, gauge, and absolute pressure versions are available.
- **Capacitive Pressure Sensors**: Ceramic or silicon diaphragms with capacitive readout provide 0.01-0.1% FS accuracy for precision applications. The capacitance change between the diaphragm and a fixed electrode is proportional to pressure. Excellent long-term stability (less than 0.1% FS drift per year) and low hysteresis make capacitive sensors ideal for long-term MES monitoring.
- **Manometric Verification**: Water or mercury manometers provide simple, accurate pressure reference for calibration verification. A U-tube water manometer has resolution of approximately 0.1 mmH2O (1 Pa) and accuracy limited only by reading precision. Digital manometers combine the simplicity of manometric measurement with electronic readout.

## Affecting Factors

### Primary

- **Temperature**: Sensor zero and span shift with temperature (typically 0.01-0.05% FS per degree C). Temperature-compensated sensors include internal thermistors and correction algorithms. Operating outside the compensated range degrades accuracy.
- **Overrange protection**: MES pressure excursions (blocked vent, rapid gas production) can exceed sensor range, causing damage or permanent calibration shift. Sensors rated for 2-5x overrange provide protection.
- **Media compatibility**: MES headspace gases (CO2, H2S, CH4) and condensed water vapor contact the sensor diaphragm. Corrosion-resistant materials (316SS, Hastelloy, ceramic) ensure long-term accuracy.
- **Mounting orientation**: Gauge pressure sensors referenced to atmosphere must have the reference port protected from water ingress and positioned to avoid hydrostatic bias.
- **Vibration**: Sensor diaphragm resonance (typically 10-100 kHz) is far above MES vibration frequencies, but severe vibration can cause signal noise.

## Compatible Systems

Sensor Specifications

## References

- Liptak, B. G. (2003). *Instrument Engineers' Handbook* (4th ed.). CRC Press.
- Fraden, J. (2016). *Handbook of Modern Sensors* (5th ed.). Springer.
- Logan, B. E., et al. (2006). Microbial fuel cells: Methodology and technology. *Environmental Science & Technology*, 40(17), 5181-5192.
- Omega Engineering (2019). *Pressure Measurement Technical Reference*. Omega.
- IEC 61298 (2008). Process measurement and control devices - General methods and procedures for evaluating performance.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Pressure+Accuracy&body=**Parameter%3A**+Pressure+Accuracy%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fpressure-accuracy.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Pressure+Accuracy&body=**Parameter%3A**+Pressure+Accuracy%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fpressure-accuracy.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Pressure+Accuracy&body=**Parameter%3A**+Pressure+Accuracy%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fpressure-accuracy.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
