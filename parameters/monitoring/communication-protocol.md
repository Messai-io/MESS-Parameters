# Communication Protocol

Communication protocol defines the data transmission standard used for transferring monitoring data between sensors, data acquisition hardware, and supervisory systems in microbial electrochemical systems (MES). The protocol determines data transfer speed, reliability, distance capability, interoperability between devices from different manufacturers, and the overall architecture of the MES monitoring and control network. In modern MES installations, multiple communication protocols typically coexist in a layered architecture: field-level protocols connect sensors to local controllers, plant-level protocols link controllers to SCADA/HMI systems, and enterprise-level protocols enable remote access and cloud connectivity.

The principal communication protocols used in MES monitoring span from simple analog signals (4-20 mA current loops, 0-10 V voltage signals) to digital fieldbus standards (Modbus RTU/TCP, PROFIBUS, HART) and modern industrial Ethernet protocols (EtherNet/IP, PROFINET, OPC UA). For research-scale MES, USB, RS-232, and GPIB interfaces connect instruments directly to computers running data logging software. For pilot and industrial-scale MES, networked protocols enable distributed monitoring with centralized data management, remote diagnostics, and integration with plant-wide control systems.

The choice of communication protocol significantly affects MES monitoring system cost, scalability, and future expandability. Open standards (Modbus, OPC UA, MQTT) avoid vendor lock-in and enable integration of best-in-class sensors from different manufacturers. Proprietary protocols may offer superior performance or features but limit component choices. Wireless protocols (Wi-Fi, Zigbee, LoRaWAN, Bluetooth) reduce installation cost and enable monitoring in locations where wiring is impractical (sediment MFCs, remote environmental MES) but introduce reliability and security considerations.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Monitoring Control |
| **Subcategory** | DAQ Hardware |
| **Type** | select |

## Typical Values

- **Analog 4-20 mA**: 1 channel per wire pair, 1-2 km range, noise-immune, 0.1-1 Hz update
- **Modbus RTU (RS-485)**: 1-247 devices, 1.2 km, 9.6-115.2 kbps, 1-10 Hz polling
- **Modbus TCP (Ethernet)**: 1-247 devices per subnet, 100 m per segment, 10-100 Mbps
- **PROFIBUS DP**: 1-126 devices, 1.2 km, 12 Mbps, 1-10 ms cycle time
- **OPC UA**: Platform-independent, unlimited devices, TCP/IP or MQTT transport
- **MQTT**: Publish/subscribe, unlimited topics, TCP/IP, suitable for IoT
- **LoRaWAN**: 1-10 km range, 0.3-50 kbps, battery-powered nodes, hours-days latency acceptable
- **Wi-Fi**: 50-100 m indoor, 100 Mbps+, 100 ms latency

## Measurement Methods

- **Protocol Analyzer and Network Monitoring**: Protocol analyzers (Wireshark for Ethernet/TCP, Modbus Poll/Slave simulators, PROFIBUS analyzers) capture and decode network traffic to verify correct communication between MES monitoring devices. These tools display message content, timing, error rates, and device status, enabling diagnosis of communication failures, data corruption, and timing issues. Continuous network monitoring using SNMP (Simple Network Management Protocol) provides real-time network health metrics including packet loss, latency, and device availability.
- **Signal Quality Measurement**: For analog signals (4-20 mA), signal quality is assessed using precision current meters (Fluke 787) measuring the actual loop current and comparing to the expected value based on sensor reading. Signal noise, offset, and linearity are characterized across the measurement range. For digital serial protocols (RS-485, RS-232), oscilloscope measurement of signal levels, rise/fall times, and eye diagrams verifies signal integrity. Bit error rate (BER) testing quantifies the reliability of digital communication links.
- **Throughput and Latency Testing**: Network throughput (actual data transfer rate versus theoretical maximum) and latency (time from sensor measurement to data availability at the monitoring station) are measured using timestamped test messages and network performance tools. For MES process control, end-to-end latency must be less than the control interval (typically 1-60 seconds). For safety monitoring (gas detection, over-voltage protection), latency must be less than 1 second to enable timely alarm response.

## Affecting Factors

### Primary

- **Distance and environment**: The physical distance between sensors and data acquisition determines protocol selection. Analog 4-20 mA and RS-485 (Modbus RTU) are suitable for distances up to 1-1.2 km. Ethernet protocols cover 100 m per segment (extendable with switches). Fiber optic links extend to 2-80 km with complete noise immunity. Wireless protocols range from 10 m (Bluetooth) to 15 km (LoRaWAN) depending on environment. Electromagnetic interference from pumps, variable frequency drives, and high-current electrochemical processes favors noise-immune protocols (4-20 mA, fiber optic, differential RS-485) over single-ended signals.
- **Number of devices and data points**: Simple MES installations with 5-20 sensors can use individual analog signals (one wire pair per sensor). Complex installations with 50-500 sensors require multiplexed digital protocols to manage wiring cost and complexity. Modbus networks support 247 devices per bus. Industrial Ethernet supports thousands of devices with appropriate switching infrastructure. The protocol must support the required polling/update rate for all devices without bus overload.
- **Real-time requirements**: Process control in MES typically requires 1-second to 1-minute update rates, achievable by virtually all protocols. Safety interlocks (gas detection, electrical fault protection) may require sub-second response, favoring hardwired analog signals or deterministic protocols (PROFINET IRT, EtherCAT). Data logging for research typically tolerates 1-60 second latency, compatible with all protocols including wireless IoT networks.
- **Interoperability and vendor ecosystem**: Modbus is the most universally supported protocol in environmental and process monitoring sensors, with virtually every pH meter, DO probe, gas analyzer, and data logger offering Modbus RTU or TCP interface. OPC UA is emerging as the universal interoperability standard for industrial systems. Selecting widely supported protocols ensures access to the broadest range of sensor options and future expandability.
- **Cybersecurity and data integrity**: Network-connected MES monitoring systems are potential targets for cyber intrusion, data manipulation, and denial-of-service attacks. Older protocols (Modbus, PROFIBUS) lack built-in security features. Modern protocols (OPC UA, MQTT with TLS) provide encryption, authentication, and data integrity verification. Air-gapped or physically isolated networks provide the highest security for critical MES control systems.

## Compatible Systems

Data Acquisition

## References

- Zurawski, R. (2004). *Industrial Communication Technology Handbook*. CRC Press.
- Mahnke, W., Leitner, S.-H., & Damm, M. (2009). *OPC Unified Architecture*. Springer.
- Boyer, S. A. (2010). *SCADA: Supervisory Control and Data Acquisition* (4th ed.). ISA.
- Galloway, B., & Hancke, G. P. (2013). Introduction to industrial control networks. *IEEE Communications Surveys & Tutorials*, 15(2), 860-880.
- Olias, L. G., & Di Lorenzo, M. (2021). Microbial fuel cells for in-field water quality monitoring. *RSC Advances*, 11, 16307-16317.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Communication+Protocol&body=**Parameter%3A**+Communication+Protocol%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fcommunication-protocol.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Communication+Protocol&body=**Parameter%3A**+Communication+Protocol%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fcommunication-protocol.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Communication+Protocol&body=**Parameter%3A**+Communication+Protocol%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fcommunication-protocol.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
