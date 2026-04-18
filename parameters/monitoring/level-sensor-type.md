# Level Sensor Type

Level sensor type specifies the measurement technology used for monitoring liquid levels in MES reactors, feed tanks, effluent collectors, and gas-liquid separators. Accurate level monitoring ensures proper hydraulic retention time, prevents reactor overflow or dry-out, maintains gas headspace volumes, and enables automated feed/harvest control. The choice of level sensing technology depends on reactor geometry, liquid properties, measurement range, accuracy requirements, and chemical compatibility.

MES level measurement challenges include foaming (from surfactants and proteins in wastewater feeds), electrode and baffle obstructions inside reactors, biofilm growth on sensor surfaces, and conductive/corrosive electrolytes. Technologies that avoid contact with the liquid (ultrasonic, radar, laser) minimize fouling-related maintenance while those with liquid contact (capacitive, hydrostatic pressure, float) provide simpler installation but require periodic cleaning.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Monitoring Control |
| **Subcategory** | Physical Sensors |
| **Type** | select |

## Typical Values

- **Ultrasonic (non-contact)**: 0.1-10 m range, 1-3 mm accuracy, not affected by foam
- **Hydrostatic pressure**: 0-10 m range, 0.1-1% FS accuracy, simple and robust
- **Capacitive**: 0-5 m range, 1-5 mm accuracy, suitable for conductive liquids
- **Float switch**: Point level (high/low), 1-5 mm repeatability, low cost
- **Radar (guided wave)**: 0.1-30 m range, 1-3 mm accuracy, foam-penetrating
- **Optical (IR)**: Point level, 0.5 mm repeatability, compact
- **Differential pressure**: 0-10 m range, 0.1% accuracy, for sealed vessels

## Measurement Methods

- **Ultrasonic Level Measurement**: Non-contact ultrasonic sensors (Siemens Sitrans LU, Endress+Hauser Prosonic) emit sound pulses from above the liquid surface and measure the echo return time. Level = tank height - (echo time * speed of sound / 2). Temperature compensation corrects for sound speed variation. Measurement range of 0.1-10 m with accuracy of 1-3 mm. Foam, heavy vapor, and turbulent surfaces can attenuate or scatter the ultrasonic beam, requiring appropriate sensor selection.
- **Hydrostatic Pressure**: Submersible pressure transducers (Endress+Hauser Cerabar, WIKA S-20) at the tank bottom measure the hydrostatic pressure P = rho*g*h, from which liquid level h is calculated. Accuracy of 0.1-1% of full scale, unaffected by foam, vapor, or surface conditions. Requires density knowledge (typically assumed constant or measured). Chemical compatibility of the wetted diaphragm material with MES electrolyte must be verified.
- **Capacitive Level Sensing**: Capacitive probes measure the dielectric change as liquid (dielectric constant 80 for water) replaces air (dielectric constant 1) around the sensing element. Suitable for conductive MES electrolytes using insulated probes. Range 0-5 m, accuracy 1-5 mm. Build-up of conductive biofilm on the probe can cause false high readings, requiring periodic cleaning.

## Affecting Factors

### Primary

- **Foam and surface conditions**: Foaming wastewater creates false high readings for ultrasonic sensors and float switches. Guided wave radar penetrates foam. Hydrostatic pressure is unaffected by surface conditions.
- **Chemical compatibility**: MES electrolytes containing H2S, organic acids, and dissolved metals require corrosion-resistant sensor materials (PTFE, ceramic, Hastelloy).
- **Tank geometry**: Narrow reactors limit ultrasonic beam spread. Internal baffles, electrodes, and fittings create ultrasonic echoes requiring signal processing. Small vessels (less than 1 L) may require miniaturized sensors.
- **Process temperature and pressure**: Sensor materials and electronics must tolerate operating conditions. Sealed vessels require differential pressure measurement or non-contact methods.
- **Continuous vs point level**: Continuous measurement (ultrasonic, pressure, capacitive) provides real-time level. Point detection (float, optical) provides only high/low alarms. MES control requires continuous measurement; safety protection uses point detection.

## Compatible Systems

Sensor Specifications

## References

- Liptak, B. G. (2003). *Instrument Engineers' Handbook: Process Measurement and Analysis* (4th ed.). CRC Press.
- Noltingk, B. E. (1996). *Instrumentation Reference Book* (3rd ed.). Butterworth-Heinemann.
- Fraden, J. (2016). *Handbook of Modern Sensors* (5th ed.). Springer.
- Omega Engineering (2019). *Level Measurement Technical Reference*. Omega.
- Logan, B. E., et al. (2006). Microbial fuel cells: Methodology and technology. *Environmental Science & Technology*, 40(17), 5181-5192.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Level+Sensor+Type&body=**Parameter%3A**+Level+Sensor+Type%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Flevel-sensor-type.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Level+Sensor+Type&body=**Parameter%3A**+Level+Sensor+Type%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Flevel-sensor-type.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Level+Sensor+Type&body=**Parameter%3A**+Level+Sensor+Type%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Flevel-sensor-type.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
