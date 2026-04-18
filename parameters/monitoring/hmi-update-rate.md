# Hmi Update Rate

HMI (Human-Machine Interface) update rate specifies the frequency at which the operator display refreshes with new process data from the MES monitoring system, expressed in seconds per update or updates per second. The update rate determines the responsiveness of operator interaction with the system, the perception of real-time process visibility, and the ability to detect and respond to rapidly changing conditions.

For MES operations, the HMI displays cell voltages, currents, power output, pH, DO, temperature, gas composition, and alarm status on graphical screens with trend plots, process schematics, and alarm summaries. Slow update rates (more than 10 seconds) create a perceived lag between actual process state and displayed information, potentially delaying operator response to abnormal conditions. Very fast update rates (less than 0.5 seconds) can create visual flicker and increase network/CPU load without providing meaningful additional information for the operator.

The optimal HMI update rate balances operator perception requirements (human visual processing recognizes changes at approximately 10 Hz) with the actual rate of process change and the network bandwidth available for data transfer. Most MES processes change significantly only on timescales of seconds to minutes, making 1-5 second update rates fully adequate for operator monitoring.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Monitoring Control |
| **Subcategory** | System Architecture |
| **Type** | number |
| **Unit** | s |
| **Minimum** | 0.1 |
| **Maximum** | 10 |
| **Papers Reporting** | 3 |

## Typical Values

- **Valid Range**: 0.1 - 60 seconds per update
- **Typical Range**: 1 - 10 seconds
- **Fast displays (voltage/current)**: 1-2 seconds
- **Standard process displays**: 2-5 seconds
- **Trend chart updates**: 5-30 seconds
- **Remote/web-based HMI**: 5-30 seconds (network dependent)
- **Alarm annunciation**: less than 1 second (critical alarms)
- **Mobile device display**: 5-60 seconds

## Measurement Methods

- **Network Traffic Analysis**: Monitoring data packet frequency between the data acquisition system and HMI workstation verifies actual update rates. Wireshark or OPC UA diagnostic tools measure polling intervals and data freshness.
- **Display Refresh Measurement**: Screen recording at high frame rate (60 fps) with timestamp overlay reveals actual display update intervals and any latency between data acquisition and screen presentation.

## Affecting Factors

### Primary

- **Network bandwidth and latency**: Ethernet LANs support sub-second updates for hundreds of tags. Remote connections over WAN or cellular may limit updates to 5-30 seconds due to latency and bandwidth constraints.
- **Number of displayed tags**: Screens displaying 10-50 values update faster than screens with 200+ values due to data query and rendering time. Complex process graphics with animation require more rendering time.
- **SCADA/HMI software capability**: Commercial SCADA platforms (Ignition, WinCC, iFix) support 0.1-second update rates. Web-based dashboards (Grafana, Node-RED) typically achieve 1-5 second updates.
- **Data acquisition scan rate**: The HMI cannot update faster than the underlying data acquisition system provides new data. If the PLC scans at 1-second intervals, the HMI update rate is limited to 1 second minimum.
- **Operator cognitive load**: Very fast updates with rapidly changing numbers can overwhelm operators. Stabilizing displays through light filtering and rate limiting improves readability and reduces operator fatigue.

## Compatible Systems

Automation Scada

## References

- Boyer, S. A. (2010). *SCADA: Supervisory Control and Data Acquisition* (4th ed.). ISA.
- Hollifield, B., & Habibi, E. (2010). *The Alarm Management Handbook* (2nd ed.). ISA.
- Nimmo, I. (1995). Adequately address abnormal situation operations. *Chemical Engineering Progress*, 91(9), 36-45.
- Zurawski, R. (2004). *Industrial Communication Technology Handbook*. CRC Press.
- ANSI/ISA-101.01 (2015). Human Machine Interfaces for Process Automation Systems.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Hmi+Update+Rate&body=**Parameter%3A**+Hmi+Update+Rate%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fhmi-update-rate.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Hmi+Update+Rate&body=**Parameter%3A**+Hmi+Update+Rate%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fhmi-update-rate.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Hmi+Update+Rate&body=**Parameter%3A**+Hmi+Update+Rate%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fhmi-update-rate.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
