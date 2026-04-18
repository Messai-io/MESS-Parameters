# Update Frequency

Update frequency specifies the rate at which sensor readings, calculated values, and display elements are refreshed in the MES monitoring system, expressed in hertz (Hz) or as the interval between updates (seconds). This parameter encompasses the entire data pipeline from sensor measurement through signal processing, data logging, display refresh, and control action computation. The update frequency must be matched to the dynamics of the monitored process, the control loop requirements, and the data acquisition system capabilities.

Update frequency is distinct from but related to sampling rate (ADC conversion rate), scan time (PLC cycle time), logging rate (data storage rate), and display refresh rate (HMI update). The overall system update frequency is limited by the slowest component in the data pipeline, typically the sensor response time or the communication protocol polling interval.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Monitoring Control |
| **Subcategory** | Remote Monitoring |
| **Type** | number |
| **Unit** | min |
| **Minimum** | 1 |
| **Maximum** | 1440 |
| **Papers Reporting** | 7 |

## Typical Values

- **Potentiostat (electrochemical research)**: 0.1-10,000 Hz
- **Voltage/current logging**: 0.1-10 Hz (1-10 second intervals)
- **Process control (pH, DO, temperature)**: 0.01-1 Hz (1-100 second intervals)
- **Gas composition monitoring**: 0.01-0.1 Hz (10-100 second intervals)
- **Environmental monitoring**: 0.001-0.01 Hz (1-15 minute intervals)
- **Long-term trending**: 0.0001-0.001 Hz (15-minute to hourly intervals)
- **IoT remote monitoring**: 0.0001-0.01 Hz (1-60 minute intervals)

## Measurement Methods

- **Data Timestamp Analysis**: Examining the timestamps of consecutive data records reveals the actual update frequency. Jitter (variation in inter-sample intervals) is calculated as the standard deviation of time differences. Consistent timestamps with low jitter (less than 5% of interval) indicate reliable update frequency.
- **System Latency Measurement**: End-to-end latency from physical process change to recorded data point is measured by introducing a known step change (e.g., switching a reference voltage) and measuring the delay until the data record reflects the change. This reveals the total system response time including sensor, ADC, processing, and logging delays.

## Affecting Factors

### Primary

- **Process dynamics**: Update frequency should be at least 5-10x the frequency of the fastest process variation of interest (Nyquist criterion with practical margin). MES electrochemical transients at 0.1 Hz require 0.5-1 Hz update. Biological trends at 0.001 Hz require 0.005-0.01 Hz update.
- **Sensor response time**: The update frequency should not exceed 1/T90 of the sensor, as faster updates merely resample the sensor's transient response without providing new process information.
- **Data volume and storage**: Higher update frequencies generate proportionally more data. At 1 Hz with 50 channels, data generation is approximately 400 kB/day. At 100 Hz, it increases to 40 MB/day.
- **Power consumption**: Battery-powered systems consume more power at higher update frequencies due to sensor excitation, ADC conversion, and data processing energy. Optimizing update frequency minimizes power while maintaining adequate monitoring.
- **Communication bandwidth**: The update frequency multiplied by the number of channels and bytes per data point must not exceed the communication link bandwidth. LoRaWAN links (0.3-50 kbps) support only low update frequencies with many parameters.

## Compatible Systems

Automation Scada

## References

- National Instruments (2020). *Data Acquisition Handbook*. NI Corp.
- Logan, B. E., et al. (2006). Microbial fuel cells: Methodology and technology. *Environmental Science & Technology*, 40(17), 5181-5192.
- Omega Engineering (2019). *Data Acquisition Technical Reference*. Omega.
- Olias, L. G., & Di Lorenzo, M. (2021). Microbial fuel cells for in-field water quality monitoring. *RSC Advances*, 11, 16307-16317.
- Oppenheim, A. V., & Schafer, R. W. (2010). *Discrete-Time Signal Processing* (3rd ed.). Pearson.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Update+Frequency&body=**Parameter%3A**+Update+Frequency%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fupdate-frequency.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Update+Frequency&body=**Parameter%3A**+Update+Frequency%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fupdate-frequency.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Update+Frequency&body=**Parameter%3A**+Update+Frequency%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fupdate-frequency.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
