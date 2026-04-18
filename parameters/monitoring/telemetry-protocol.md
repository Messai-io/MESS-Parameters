# Telemetry Protocol

Telemetry protocol specifies the communication standard used for transmitting MES monitoring data from field-deployed sensors and data loggers to remote receiving stations, cloud platforms, or centralized monitoring systems over wireless or long-distance wired links. Telemetry is essential for MES installations in remote locations (sediment MFCs, environmental monitoring buoys, distributed wastewater treatment) where direct physical access is impractical or infrequent.

Common telemetry protocols include MQTT (Message Queuing Telemetry Transport, lightweight publish/subscribe for IoT), HTTP/HTTPS (web-based data push/pull), CoAP (Constrained Application Protocol for low-power devices), LoRaWAN (long-range low-power wide-area network), cellular (4G/5G with TCP/UDP transport), and satellite (Iridium, Globalstar for truly remote locations). The choice depends on data volume, latency requirements, power budget, coverage area, and cost.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Monitoring Control |
| **Subcategory** | Remote Monitoring |
| **Type** | select |

## Typical Values

- **MQTT**: 10-100 ms latency (LAN), 100-5000 ms (WAN), 0.1-100 kbps, very low overhead
- **HTTP/HTTPS**: 100-2000 ms latency, 1 kbps-100 Mbps, higher overhead
- **CoAP**: 10-100 ms latency, 0.1-10 kbps, UDP-based, very low power
- **LoRaWAN**: 1-15 km range, 0.3-50 kbps, 5-10 s latency, battery life 2-10 years
- **Cellular (4G LTE)**: 20-100 ms latency, 10-100 Mbps, $5-50/month data cost
- **Satellite (Iridium SBD)**: 10-60 s latency, 340 bytes/message, $0.05-0.10/message

## Measurement Methods

- **Protocol Performance Testing**: End-to-end latency, throughput, packet loss, and reliability are measured by transmitting timestamped test data and comparing received data to expected values. Testing under various conditions (distance, interference, weather) characterizes real-world performance.
- **Power Consumption Profiling**: For battery-powered MES telemetry, current consumption during transmission, reception, and sleep modes is measured using precision current meters. Total energy per data transmission determines battery life for a given telemetry interval.

## Affecting Factors

### Primary

- **Range and coverage**: LoRaWAN covers 1-15 km (rural), 0.5-5 km (urban). Cellular covers wherever towers exist. Satellite provides global coverage including oceans and polar regions. WiFi covers 30-100 m.
- **Power budget**: LoRaWAN and satellite modems draw 10-100 mA during transmission (milliseconds to seconds), compatible with battery/solar power. Cellular modems draw 100-2000 mA, requiring larger power sources. Telemetry interval affects total power: transmitting once per hour versus every minute differs by 60x in energy.
- **Data volume and latency**: Small data volumes (10-100 bytes per reading) suit LoRaWAN and satellite. Large volumes (images, high-frequency waveforms) require cellular or WiFi. Real-time control requires sub-second latency (cellular, WiFi). Daily data summaries tolerate hours of latency (satellite, LoRaWAN).
- **Cost**: LoRaWAN infrastructure can be self-hosted (one-time gateway cost $100-500). Cellular requires monthly subscription ($5-50). Satellite charges per message ($0.05-0.50). Total cost of ownership over multi-year MES deployments determines the most economical option.
- **Reliability and redundancy**: Mission-critical MES monitoring may require dual-path telemetry (primary cellular, backup satellite) for guaranteed data delivery. Acknowledgment mechanisms (MQTT QoS levels, confirmed uplinks in LoRaWAN) ensure data receipt.

## Compatible Systems

Automation Scada

## References

- OASIS (2019). *MQTT Version 5.0 Specification*. OASIS Standard.
- LoRa Alliance (2020). *LoRaWAN Specification v1.0.4*. LoRa Alliance.
- Mineraud, J., et al. (2016). A gap analysis of Internet-of-Things platforms. *Computer Communications*, 89-90, 5-16.
- Olias, L. G., & Di Lorenzo, M. (2021). Microbial fuel cells for in-field water quality monitoring. *RSC Advances*, 11, 16307-16317.
- Galloway, B., & Hancke, G. P. (2013). Introduction to industrial control networks. *IEEE Communications Surveys & Tutorials*, 15(2), 860-880.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Telemetry+Protocol&body=**Parameter%3A**+Telemetry+Protocol%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Ftelemetry-protocol.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Telemetry+Protocol&body=**Parameter%3A**+Telemetry+Protocol%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Ftelemetry-protocol.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Telemetry+Protocol&body=**Parameter%3A**+Telemetry+Protocol%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Ftelemetry-protocol.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
