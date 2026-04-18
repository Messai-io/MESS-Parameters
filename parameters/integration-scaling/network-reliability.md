# Network Reliability

Network reliability quantifies the probability that the monitoring, control, and power collection networks of a multi-module MES continue to function correctly over a specified time period. Expressed as a percentage (e.g., 99.9% uptime = 8.76 hours downtime per year) or as mean time between failures (MTBF), this parameter encompasses both the communication network (sensor data collection and control signal distribution) and the electrical network (power collection from individual modules to the system output).

For MES deployed in wastewater treatment, where continuous operation is expected, network reliability targets of 99--99.9% are appropriate. For critical applications (drinking water treatment, space life support), reliability of 99.99% or higher may be required. Achieving high reliability requires redundant communication paths, fault-tolerant power electronics, automatic failover mechanisms, and robust environmental protection of all network components.

Network failures in MES can be categorized as: sensor failures (loss of monitoring data, 10--30% of total failures), communication failures (data transmission interruption, 20--40%), controller failures (loss of automated control, 10--20%), and power network failures (loss of energy collection, 20--40%). Each failure type has different consequences: sensor failures reduce data quality but do not stop treatment; power network failures waste generated energy but treatment continues; controller failures may cause loss of feed/drain automation.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Integration Scaling |
| **Subcategory** | Communication Network |
| **Type** | number |
| **Unit** | % |
| **Minimum** | 90 |
| **Maximum** | 99.999 |

## Typical Values

- **Valid Range**: 50 -- 99.999%
- **Lab system (manual backup)**: 95 -- 99% (3.6 -- 87 h downtime/year)
- **Automated lab system**: 99 -- 99.5%
- **Pilot system (with redundancy)**: 99.5 -- 99.9%
- **Industrial target**: 99.9 -- 99.99%
- **SCADA system (industrial reference)**: 99.95 -- 99.99%
- **MTBF target (individual sensor)**: > 50000 h (5.7 years)
- **MTBF target (communication link)**: > 100000 h

## Measurement Methods

- **Availability Monitoring**: System uptime is logged continuously by the SCADA or data acquisition system. Availability = (total time - downtime) / total time * 100%. Downtime is categorized by cause (planned maintenance, unplanned failure, external cause). Minimum monitoring period for meaningful statistics: 6--12 months.
- **Failure Rate Analysis**: Each component's failure rate (lambda = 1/MTBF) is obtained from manufacturer data, field experience, or reliability databases (MIL-HDBK-217, Telcordia SR-332). System reliability is calculated from component reliabilities using series-parallel reliability models.

## Affecting Factors

### Primary

- **Redundancy**: Dual communication paths (e.g., wired + wireless backup) and redundant sensors increase reliability by eliminating single points of failure.
- **Environmental Conditions**: Humidity, temperature extremes, and corrosive atmospheres accelerate component degradation. IP65+ enclosures and conformal coating extend component life.
- **Maintenance Regime**: Proactive maintenance (scheduled component replacement before failure) achieves higher reliability than reactive maintenance.
- **Component Quality**: Industrial-grade sensors and electronics (rated for -40 to +85 C, IP65+) outperform laboratory-grade equipment in long-term reliability.

## Related Parameters

- **name**: [Network Efficiency](network-efficiency.md)

- **relationship**: Performance of the functional network
- **name**: [Communication Latency](communication-latency.md)

- **relationship**: Timeliness of data delivery
- **name**: [Network Topology](network-topology.md)

- **relationship**: Network architecture
- **name**: [Redundancy Level](redundancy-level.md)

- **relationship**: Backup system capacity
- **name**: [Data Throughput](data-throughput.md)

- **relationship**: Data capacity

## Compatible Systems

Network Effects

## References

- MIL-HDBK-217F (1991). "Reliability Prediction of Electronic Equipment." US Department of Defense.
- Telcordia SR-332 (2011). "Reliability Prediction Procedure for Electronic Equipment."

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Network+Reliability&body=**Parameter%3A**+Network+Reliability%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fnetwork-reliability.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Network+Reliability&body=**Parameter%3A**+Network+Reliability%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fnetwork-reliability.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Network+Reliability&body=**Parameter%3A**+Network+Reliability%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fnetwork-reliability.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
