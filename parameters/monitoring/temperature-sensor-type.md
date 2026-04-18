# Temperature Sensor Type

Temperature sensor type specifies the measurement technology used for monitoring temperature in MES reactors, electrolytes, headspaces, and ambient environments. The principal technologies include platinum resistance temperature detectors (RTD, PT100/PT1000), negative temperature coefficient thermistors (NTC), thermocouples (Type K, T, J), integrated circuit (IC) sensors, and infrared (IR) non-contact sensors. Each technology offers distinct trade-offs in accuracy, response time, range, cost, and robustness.

For MES applications, RTDs provide the best accuracy and long-term stability for process monitoring and research. Thermistors offer excellent sensitivity and moderate cost for single-point measurements. Thermocouples provide the widest temperature range and fastest response for research applications. IC sensors (digital output) offer simple integration with microcontroller-based data loggers and IoT platforms. IR sensors enable non-contact surface temperature measurement of electrodes and reactor walls.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Monitoring Control |
| **Subcategory** | Physical Sensors |
| **Type** | select |

## Typical Values

- **PT100 RTD**: -200 to +850 degrees C, 0.03-0.3 degrees C accuracy, 1-15 s response
- **PT1000 RTD**: Same range/accuracy, higher resistance reduces lead effects
- **NTC thermistor (10k)**: -40 to +125 degrees C, 0.1-0.5 degrees C accuracy, 1-10 s response
- **Thermocouple Type K**: -200 to +1350 degrees C, 1.5-2.5 degrees C, 0.1-5 s response
- **Thermocouple Type T**: -200 to +350 degrees C, 0.5-1.0 degrees C, 0.1-5 s response
- **IC sensor (DS18B20)**: -55 to +125 degrees C, 0.5 degrees C, 0.75 s conversion
- **IR sensor**: -70 to +380 degrees C, 1-3 degrees C, instantaneous
- **Cost**: $2-20 (thermistor, IC), $10-100 (RTD), $5-50 (thermocouple), $50-500 (IR)

## Measurement Methods

- **Platinum RTD (PT100/PT1000)**: RTDs exploit the predictable linear relationship between platinum resistance and temperature (alpha = 0.00385 ohm/ohm/degree C). Four-wire measurement eliminates lead resistance errors. Three-wire measurement provides partial compensation. Excitation current of 0.1-1 mA minimizes self-heating. RTDs are the standard for MES research due to excellent accuracy, stability, and interchangeability.
- **NTC Thermistors**: Metal oxide ceramic resistors with large negative temperature coefficient (typically -4%/degree C at 25 degrees C) provide high sensitivity for detecting small temperature changes. The nonlinear resistance-temperature relationship requires linearization using Steinhart-Hart equation (three calibration constants) or lookup tables. Low cost and small size enable dense temperature mapping across MES surfaces.
- **Thermocouples**: Two dissimilar metal wires joined at a junction generate a voltage proportional to the temperature difference between the junction and the reference (Seebeck effect). Type K (chromel-alumel, 41 uV/degree C) and Type T (copper-constantan, 43 uV/degree C) are most common for MES. Fast response (bare junction T90 less than 0.1 s) enables tracking of rapid thermal transients. Cold junction compensation (CJC) at the measurement terminals is essential for accuracy.

## Affecting Factors

### Primary

- **Required accuracy**: RTDs for research requiring 0.1 degrees C or better. Thermocouples for general monitoring at 1-2 degrees C. IC sensors for IoT applications at 0.5 degrees C.
- **Response time**: Bare thermocouples (0.1 s) for fast transients. Sheathed RTDs (5-15 s) for process control. Thermal wells add 10-60 s additional lag but protect sensors from process fluid contact.
- **Chemical compatibility**: Sensor sheaths must resist MES electrolyte chemistry. 316SS is standard. PTFE or glass coatings provide additional protection for aggressive environments. Direct exposure of bare thermocouples to wastewater is not recommended.
- **Wiring complexity**: IC sensors (1-wire, I2C) need 2-3 wires for any distance. RTDs need 3-4 wires. Thermocouples need 2 wires (extension wire matching thermocouple type). Wireless temperature sensors eliminate wiring entirely.
- **Power requirements**: RTDs and thermistors require excitation current (0.1-1 mA). Thermocouples are self-generating (no excitation needed). IC sensors require 3-5 V supply. For battery-powered MES, thermocouples or low-power IC sensors minimize power consumption.

## Compatible Systems

Sensor Specifications

## References

- IEC 60751 (2008). Industrial platinum resistance thermometers.
- IEC 60584-1 (2013). Thermocouples - EMF specifications and tolerances.
- Fraden, J. (2016). *Handbook of Modern Sensors* (5th ed.). Springer.
- Nicholas, J. V., & White, D. R. (2001). *Traceable Temperatures* (2nd ed.). Wiley.
- Omega Engineering (2019). *Temperature Measurement Technical Reference*. Omega.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Temperature+Sensor+Type&body=**Parameter%3A**+Temperature+Sensor+Type%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Ftemperature-sensor-type.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Temperature+Sensor+Type&body=**Parameter%3A**+Temperature+Sensor+Type%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Ftemperature-sensor-type.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Temperature+Sensor+Type&body=**Parameter%3A**+Temperature+Sensor+Type%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Ftemperature-sensor-type.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
