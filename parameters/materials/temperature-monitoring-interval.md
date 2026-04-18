# Temperature Monitoring Interval

Temperature monitoring interval specifies the time between successive temperature measurements in MES operation. Temperature changes slowly in most MES (thermal time constants of minutes to hours depending on reactor volume and insulation), allowing relatively infrequent monitoring compared to electrochemical parameters. However, for temperature control loops and thermal safety monitoring, more frequent measurement may be required.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Materials |
| **Type** | number |
| **Unit** | seconds |

## Typical Values

- **Temperature control loop**: 1-60 seconds
- **Process monitoring**: 1-10 minutes
- **Research logging**: 1-5 minutes
- **Environmental monitoring**: 5-60 minutes
- **Outdoor MES trending**: 10-60 minutes
- **Battery-powered remote**: 5-60 minutes (power conservation)

## Measurement Methods

- **name**: Standard temperature measurement at configured intervals using online sensors (RTD, thermocouple, thermistor) connected to data loggers or PLCs.

- **description**: 

## Affecting Factors

### Primary

- **Thermal mass**: Large reactors (more than 10 L) change temperature slowly, allowing 5-30 minute intervals. Small reactors (less than 100 mL) respond quickly, requiring 10-60 second intervals for control.
- **Control requirements**: Active temperature control (heating/cooling) requires intervals shorter than 1/10 of the thermal time constant. Uncontrolled systems need only trend monitoring.
- **Environmental exposure**: Outdoor MES with solar heating experience rapid surface temperature changes requiring more frequent monitoring than insulated indoor systems.
- **Sensor response time**: The monitoring interval should be at least 2x the sensor T90 response time to ensure each measurement reflects the current temperature.
- **Power constraints**: Battery-powered sensors benefit from long intervals (less power consumed per day).

## Compatible Systems

Real Time Monitoring

## References

- Liptak, B. G. (2003). *Instrument Engineers' Handbook* (4th ed.). CRC Press.
- IEC 60751 (2008). Industrial platinum resistance thermometers.
- Logan, B. E., et al. (2006). Microbial fuel cells: Methodology and technology. *Environmental Science & Technology*, 40(17), 5181-5192.
- Omega Engineering (2019). *Temperature Measurement Technical Reference*. Omega.
- Patil, S. A., et al. (2010). Electroactive mixed culture biofilms. *Biosensors and Bioelectronics*, 26(2), 803-808.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Temperature+Monitoring+Interval&body=**Parameter%3A**+Temperature+Monitoring+Interval%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Ftemperature-monitoring-interval.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Temperature+Monitoring+Interval&body=**Parameter%3A**+Temperature+Monitoring+Interval%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Ftemperature-monitoring-interval.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Temperature+Monitoring+Interval&body=**Parameter%3A**+Temperature+Monitoring+Interval%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Ftemperature-monitoring-interval.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
