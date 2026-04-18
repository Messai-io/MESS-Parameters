# Data Throughput

Data throughput in the context of microbial electrochemical systems (MES) refers to the total volume of monitoring and control data that can be successfully transmitted, processed, and stored per unit time across the system's instrumentation and communication infrastructure. Expressed in bits per second (bps), kilobytes per second (KB/s), or data points per second, this parameter characterizes the capacity of the monitoring network to handle real-time sensor data from single or multiple MES modules operating simultaneously.

For a typical lab-scale MFC experiment monitoring voltage, current, pH, and temperature across 10 reactors at 1-minute intervals, the data throughput requirement is modest -- approximately 40 data points per minute or roughly 0.5 KB/s including metadata and timestamps. However, when scaling to pilot installations with 100+ modules, each equipped with multiple sensors, and when incorporating high-frequency electrochemical measurements, throughput requirements can escalate to megabytes per second. The monitoring architecture must be designed with sufficient throughput headroom (typically 2--5x the steady-state requirement) to handle burst conditions.

Data throughput is distinct from communication bandwidth (the theoretical maximum data rate of a communication channel) because it accounts for protocol overhead, error correction, retransmission, and processing delays. In MES installations, effective throughput is typically 40--70% of the raw channel bandwidth.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Integration Scaling |
| **Subcategory** | Communication Network |
| **Type** | number |
| **Unit** | Mbps |
| **Minimum** | 0.1 |
| **Maximum** | 1000 |

## Typical Values

- **Valid Range**: 0.001 -- 1000000 KB/s
- **Single lab MFC (manual logging)**: 0.001 KB/s
- **10-reactor lab array (1 min interval)**: 0.01 -- 0.5 KB/s
- **100-module pilot system**: 1 -- 50 KB/s
- **EIS measurement (single channel)**: 10 -- 500 KB/s
- **RS-485 serial link**: 1 -- 12 KB/s
- **Zigbee network**: 3 -- 31 KB/s
- **LoRaWAN**: 0.03 -- 7 KB/s
- **Wi-Fi (802.11n)**: 1000 -- 30000 KB/s
- **Ethernet (100 Mbps)**: 5000 -- 12000 KB/s

## Measurement Methods

- **Network Performance Testing**: Using standardized tools (iperf3 for IP networks, custom serial throughput tests for RS-485), the maximum sustainable data transfer rate is measured under realistic conditions. The test transmits a continuous stream of MES-format data packets for a minimum of 60 seconds. Effective throughput is total successfully received bytes divided by elapsed time.
- **Data Volume Accounting**: Over a defined monitoring period (24 hours minimum), the total volume of data received and successfully stored by the SCADA system is measured. Effective throughput is total data volume divided by monitoring duration. This method captures real-world conditions including network outages and retransmissions.
- **Packet Loss Analysis**: The ratio of successfully received data packets to total transmitted packets is measured over a test period. Packet loss rates below 0.1% are acceptable for MES monitoring; rates above 1% indicate network capacity or reliability issues.

## Affecting Factors

### Primary

- **Communication Medium**: Wired Ethernet supports 10--12 MB/s effective throughput, while LoRaWAN provides only 0.03--7 KB/s. The choice must match the aggregate data generation rate of all connected sensors.
- **Number of Sensor Nodes**: Each additional node adds to aggregate throughput requirements. Mesh networks may see sub-linear scaling due to multi-hop overhead.
- **Sampling Frequency**: Increasing sampling from 1/min to 1/sec increases per-channel throughput by 60x. High-frequency electrochemical measurements generate 10000x more data than operational monitoring.
- **Data Format and Compression**: Raw ASCII data requires 3--5x more bandwidth than binary encoding. On-node compression can reduce throughput requirements by 50--80%.
- **Protocol Overhead**: TCP/IP adds 40+ bytes of header per packet; for small payloads (20 bytes per sensor reading), protocol overhead can constitute 50--70% of total transmitted data.

## Related Parameters

- **name**: [Data Sampling Frequency](data-sampling-frequency.md)

- **relationship**: Determines per-channel data generation rate
- **name**: [Communication Latency](communication-latency.md)

- **relationship**: Per-packet delay
- **name**: [Network Efficiency](network-efficiency.md)

- **relationship**: Ratio of useful data to total data
- **name**: [Network Reliability](network-reliability.md)

- **relationship**: Data delivery success rate
- **name**: [Reactor Count](reactor-count.md)

- **relationship**: Number of modules generating data

## Compatible Systems

Network Effects

## References

- Adekunle, A. et al. (2019). "Real-time monitoring of microbial fuel cells using wireless sensor networks." Journal of Power Sources, 434, 226726.
- Dewan, A., Beyenal, H., Lewandowski, Z. (2008). "Scaling up microbial fuel cells." Environmental Science & Technology, 42(20), 7643-7648.
- IEEE 802.15.4 Standard for Low-Rate Wireless Networks (2020).

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Data+Throughput&body=**Parameter%3A**+Data+Throughput%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fdata-throughput.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Data+Throughput&body=**Parameter%3A**+Data+Throughput%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fdata-throughput.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Data+Throughput&body=**Parameter%3A**+Data+Throughput%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fdata-throughput.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
