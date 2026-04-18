# Pressure Sensor Type

Pressure sensor type specifies the measurement technology used for monitoring gas and liquid pressures in MES reactors, headspaces, gas collection systems, and feed/effluent lines. The sensor technology determines measurement range, accuracy, response time, media compatibility, and long-term stability. Principal technologies include piezoresistive MEMS, capacitive ceramic, strain gauge, piezoelectric (for dynamic pressure), and mechanical (Bourdon tube, diaphragm) sensors.

MES pressure monitoring applications include: headspace gauge pressure (0-100 mbar) for gas production measurement, transmembrane differential pressure (0-500 mbar) for fouling monitoring, hydrostatic pressure (0-1 bar) for liquid level measurement, and atmospheric pressure (950-1050 hPa) for dissolved gas corrections. Each application has different range, accuracy, and media compatibility requirements.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Monitoring Control |
| **Subcategory** | Physical Sensors |
| **Type** | select |

## Typical Values

- **Piezoresistive MEMS**: 0-10 mbar to 0-700 bar, 0.1-1% FS, $10-500
- **Capacitive ceramic**: 0-100 mbar to 0-400 bar, 0.01-0.1% FS, $200-2000
- **Strain gauge (bonded foil)**: 0-1 to 0-1000 bar, 0.1-0.5% FS, $100-1000
- **Piezoelectric (dynamic)**: 0.01-1000 bar dynamic range, 0.1-1% linearity, $200-2000
- **Bourdon tube gauge**: 0-1 to 0-1000 bar, 1-2% FS, $20-200
- **Digital barometric (BMP280, BME280)**: 300-1100 hPa, 0.12 hPa accuracy, $2-10

## Measurement Methods

- **Piezoresistive MEMS**: Silicon diaphragm with implanted piezoresistors in Wheatstone bridge configuration. Pressure-induced diaphragm strain changes resistance proportionally. Compact, fast (less than 1 ms response), low cost. Available in absolute, gauge, and differential configurations. Temperature compensation through on-chip or external algorithms. Media-isolated versions (oil-filled with stainless steel diaphragm) protect the silicon die from corrosive MES environments.
- **Capacitive Ceramic**: Al2O3 ceramic diaphragm with metallized capacitor plates. Pressure deflects the diaphragm, changing capacitance. Excellent chemical resistance (ceramic withstands most MES electrolytes), very low hysteresis (less than 0.01% FS), and outstanding long-term stability (less than 0.1% FS/year drift). Preferred for precision MES monitoring where cost is less constraining.
- **Digital Barometric Sensors**: Low-cost MEMS barometric sensors (Bosch BMP280/BME280, TE MS5611) provide atmospheric pressure measurement with 0.12-0.5 hPa accuracy. I2C/SPI digital output interfaces directly with microcontrollers. Essential for MES dissolved gas measurements that require atmospheric pressure compensation. Temperature and humidity co-measurement (BME280) provides multi-parameter environmental monitoring from a single chip.

## Affecting Factors

### Primary

- **Measurement type**: Absolute sensors measure against vacuum (for atmospheric and headspace monitoring). Gauge sensors measure against atmosphere (for headspace overpressure). Differential sensors measure pressure difference between two ports (for transmembrane pressure).
- **Media compatibility**: Corrosive MES environments (acidic/alkaline electrolytes, H2S, chlorides) require appropriate wetted materials. 316SS is standard; Hastelloy C for extreme conditions; ceramic for excellent broad chemical resistance.
- **Pressure range and accuracy**: Selecting a range that places the expected operating pressure at 20-80% of full scale maximizes accuracy while providing overpressure margin.
- **Environmental conditions**: Outdoor and industrial environments require IP65-IP68 protection. Temperature range of sensor electronics and compensation accuracy must match the deployment environment.
- **Electrical output and interface**: 4-20 mA analog output (noise-immune, long cable runs), 0-10 V analog, digital (I2C, SPI, HART, Modbus) each have advantages depending on the data acquisition infrastructure.

## Compatible Systems

Sensor Specifications

## References

- Fraden, J. (2016). *Handbook of Modern Sensors* (5th ed.). Springer.
- Liptak, B. G. (2003). *Instrument Engineers' Handbook* (4th ed.). CRC Press.
- Omega Engineering (2019). *Pressure Measurement Technical Reference*. Omega.
- Bosch Sensortec (2020). *BMP280 Digital Pressure Sensor Datasheet*. Bosch.
- Logan, B. E., et al. (2006). Microbial fuel cells: Methodology and technology. *Environmental Science & Technology*, 40(17), 5181-5192.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Pressure+Sensor+Type&body=**Parameter%3A**+Pressure+Sensor+Type%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fpressure-sensor-type.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Pressure+Sensor+Type&body=**Parameter%3A**+Pressure+Sensor+Type%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fpressure-sensor-type.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Pressure+Sensor+Type&body=**Parameter%3A**+Pressure+Sensor+Type%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fpressure-sensor-type.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
