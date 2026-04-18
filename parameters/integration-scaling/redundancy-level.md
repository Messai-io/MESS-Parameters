# Redundancy Level

Redundancy level describes the amount of backup capacity built into an MES installation to maintain operation during component failures, maintenance activities, or unexpected demand increases. Expressed as N+X (where N is the minimum number of units required for full capacity and X is the number of spare units), or as a percentage of excess capacity, redundancy ensures system reliability and availability. Higher redundancy increases capital cost but reduces the risk and impact of component failures.

For MES systems composed of multiple modules, redundancy is achieved by installing additional modules beyond the minimum required for design capacity. An N+1 configuration (one spare module) allows one module to be taken offline for maintenance without reducing throughput. N+2 provides additional safety margin for concurrent failures. The modular nature of MES technology makes redundancy implementation straightforward compared to monolithic systems.

Redundancy also applies to supporting infrastructure: dual communication paths (wired + wireless), backup power supplies (UPS for control electronics), spare sensors, spare pumps, and reserve chemical storage. The overall system availability is determined by the least redundant critical component.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Integration Scaling |
| **Subcategory** | Modular Design |
| **Type** | number |
| **Unit** | % |
| **Minimum** | 0 |
| **Maximum** | 100 |
| **Papers Reporting** | 7 |

## Typical Values

- **Valid Range**: N+0 to N+10 (or 0 -- 50% excess capacity)
- **Research system**: N+0 (no redundancy)
- **Pilot demonstration**: N+1 (1 spare module)
- **Municipal treatment target**: N+2 (2 spare modules)
- **Critical application (drinking water)**: N+3 or 20% excess capacity
- **Pump redundancy**: 1+1 (one duty, one standby) minimum
- **Communication redundancy**: Dual path (wired + wireless)
- **Power supply redundancy**: UPS with 4--8 h backup for control systems

## Measurement Methods

- **Capacity Margin Assessment**: Redundancy = (installed capacity - required capacity) / required capacity * 100%. Measured by simultaneously operating all units and comparing total output to design requirement.
- **Failure Mode Testing**: Intentional shutdown of individual modules verifies that the remaining system maintains adequate performance. Each critical component is tested individually.

## Affecting Factors

### Primary

- **Reliability Requirements**: Higher availability targets (99.9% vs. 99%) require more redundancy.
- **Maintenance Frequency**: Components with short maintenance intervals require more redundancy.
- **Capital Budget**: Each spare module adds 1/N to the capital cost. For a 50-module system, N+2 adds 4% to module cost.
- **Module Interchangeability**: Standardized, interchangeable modules enable rapid swap-out during failures.

## Related Parameters

- **name**: [Network Reliability](network-reliability.md)

- **relationship**: System uptime metric
- **name**: [Modules Per System](modules-per-system.md)

- **relationship**: Total installed modules
- **name**: [Reactor Count](reactor-count.md)

- **relationship**: Total reactor cells
- **name**: [Lifetime Target](lifetime-target.md)

- **relationship**: Design life requiring sustained reliability

## Compatible Systems

Multi Scale Integration

## References

- MIL-HDBK-338B (1998). "Electronic Reliability Design Handbook." US Department of Defense.
- Liang, P. et al. (2018). "One-year operation of 1000-L modularized microbial fuel cell." Water Research, 141, 1-8.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Redundancy+Level&body=**Parameter%3A**+Redundancy+Level%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fredundancy-level.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Redundancy+Level&body=**Parameter%3A**+Redundancy+Level%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fredundancy-level.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Redundancy+Level&body=**Parameter%3A**+Redundancy+Level%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fredundancy-level.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
