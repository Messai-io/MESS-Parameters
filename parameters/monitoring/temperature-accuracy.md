# Temperature Accuracy

Temperature accuracy defines the measurement uncertainty of temperature sensors used in MES monitoring, expressed in degrees C or as a percentage. Accurate temperature measurement is critical because temperature affects virtually every MES process: microbial metabolic rates (Arrhenius dependence, Q10 = 2-3), electrochemical kinetics (exchange current density increases approximately 2x per 10 degrees C), gas solubility (O2, CO2, H2 saturation decreases with temperature), membrane permeability, electrolyte conductivity (approximately +2%/degree C), and pH electrode response (Nernstian slope proportional to absolute temperature). A 1 degree C temperature error propagates to approximately 2% error in conductivity, 0.02 pH error, and 3-5% error in dissolved gas saturation calculations.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Monitoring Control |
| **Subcategory** | Physical Sensors |
| **Type** | number |
| **Unit** | °C |
| **Minimum** | 0.01 |
| **Maximum** | 1 |

## Typical Values

- **Platinum RTD (PT100, PT1000)**: 0.03-0.3 degrees C (Class A to Class B, IEC 60751)
- **Thermistor (NTC 10k)**: 0.1-0.5 degrees C (interchangeability)
- **Thermocouple Type K**: 1.5-2.5 degrees C (standard), 0.5-1.0 degrees C (special tolerance)
- **Thermocouple Type T**: 0.5-1.0 degrees C (standard), 0.25-0.5 degrees C (special)
- **IC temperature sensor (LM35, TMP36)**: 0.5-2.0 degrees C
- **MEMS digital (BME280)**: 0.5-1.0 degrees C
- **Infrared (non-contact)**: 1-3 degrees C (surface temperature)
- **Calibration standard uncertainty**: 0.01-0.05 degrees C (NIST traceable)

## Measurement Methods

- **Calibration Against Reference Standards**: Temperature sensors are calibrated by comparison against NIST-traceable reference thermometers (certified RTD probes, calibrated mercury thermometers) at multiple temperature points spanning the MES operating range. Ice point (0.00 degrees C) and boiling point (100.00 degrees C at standard pressure) provide convenient fixed-point references. Calibration correction factors reduce systematic errors to below the sensor's random uncertainty.
- **In-Situ Cross-Validation**: Multiple temperature sensors at the same MES location provide cross-validation. Discrepancies exceeding combined accuracy specifications indicate sensor drift or failure. A minimum of two independent temperature measurements per critical location ensures data reliability.
- **Thermal Response Verification**: Immersing the sensor in a stirred water bath at known temperature and measuring the reading after full thermal equilibration (1-5 minutes depending on sensor thermal mass) verifies in-situ accuracy under actual deployment conditions, including lead wire resistance effects and signal conditioning contributions.

## Affecting Factors

### Primary

- **Sensor type and grade**: RTDs provide best accuracy (0.03-0.1 degrees C) but are more expensive and slower than thermocouples. Thermocouples are fast and inexpensive but less accurate (0.5-2.5 degrees C). Thermistors offer good accuracy (0.1-0.5 degrees C) at moderate cost with high sensitivity.
- **Self-heating**: RTDs and thermistors dissipate measurement current as heat, raising the sensor temperature above the process temperature. Self-heating of 0.01-0.5 degrees C depends on excitation current, sensor thermal resistance, and medium heat transfer coefficient. Low excitation currents (0.1-1 mA for RTDs) minimize self-heating.
- **Lead wire resistance**: Two-wire RTD connections include lead resistance in the measurement, causing positive temperature error (approximately 0.25 degrees C per ohm of lead resistance for PT100). Three-wire and four-wire configurations compensate for lead resistance.
- **Thermal contact and immersion depth**: Sensor thermal contact with the medium must provide representative temperature measurement. Minimum immersion depth of 10-15x the sensor sheath diameter ensures accurate reading. Poor thermal contact (air gap, loose thermowell) causes lag and steady-state error.
- **EMI and ground loops**: Thermocouple signals (millivolts) are susceptible to electromagnetic interference. RTD and thermistor signals are less susceptible due to higher signal levels. Proper shielding, grounding, and filtering maintain accuracy in electrically noisy MES environments.

## Compatible Systems

Sensor Specifications

## References

- IEC 60751 (2008). Industrial platinum resistance thermometers and platinum temperature sensors.
- Nicholas, J. V., & White, D. R. (2001). *Traceable Temperatures* (2nd ed.). Wiley.
- Liptak, B. G. (2003). *Instrument Engineers' Handbook* (4th ed.). CRC Press.
- Fraden, J. (2016). *Handbook of Modern Sensors* (5th ed.). Springer.
- Omega Engineering (2019). *Temperature Measurement Technical Reference*. Omega.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Temperature+Accuracy&body=**Parameter%3A**+Temperature+Accuracy%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Ftemperature-accuracy.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Temperature+Accuracy&body=**Parameter%3A**+Temperature+Accuracy%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Ftemperature-accuracy.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Temperature+Accuracy&body=**Parameter%3A**+Temperature+Accuracy%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Ftemperature-accuracy.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
