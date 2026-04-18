# Modules Per System

Modules per system is the total number of individual MES modules connected hydraulically and/or electrically to form a complete treatment or energy recovery system. This parameter determines the total system capacity (flow rate, power output, desalination rate) and reflects the numbering-up scaling approach preferred for MES technology. The electrical interconnection topology (series, parallel, or series-parallel combinations) and hydraulic configuration (parallel feed, series cascade, or independent operation) are defined alongside the module count.

Scaling MES by numbering-up avoids the electrode-spacing and mass-transfer penalties of scaling-up individual reactors. Each module operates at or near its individually-optimized performance, and the aggregate system output is approximately the sum of individual module outputs minus interconnection losses (typically 5--15% for well-designed systems). The number of modules required is calculated from the target treatment capacity and the per-module treatment rate.

Increasing the number of modules improves system reliability through redundancy (failure of one module reduces capacity by only 1/N) but increases capital cost, control complexity, and maintenance labor. The optimal module count balances these factors for the specific application.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Integration Scaling |
| **Subcategory** | Modular Design |
| **Type** | number |
| **Minimum** | 1 |
| **Maximum** | 1000 |

## Typical Values

- **Valid Range**: 1 -- 10000 modules
- **Lab research system**: 1 -- 10 modules (replicates)
- **Bench-scale demonstration**: 4 -- 20 modules
- **Pilot-scale system**: 10 -- 100 modules
- **Liang et al. 1000-L system**: 50 modules
- **Commercial target (1 MLD plant)**: 500 -- 5000 modules
- **Series-connected for voltage**: 3 -- 10 cells
- **Parallel-connected for current**: 5 -- 100+ cells

## Measurement Methods

- **System Inventory**: The number of installed modules is counted during commissioning and updated as modules are added or removed for maintenance. A system schematic documents the hydraulic and electrical connections.
- **Performance Mapping**: Each module is identified by a unique identifier and its individual performance (voltage, current, flow rate) is monitored. The performance map identifies underperforming modules requiring maintenance or replacement.

## Affecting Factors

### Primary

- **Target Capacity**: The number of modules = total required flow rate / per-module flow rate. A 1000 L/d system with 20 L modules at 24 h HRT requires 50 modules.
- **Electrical Configuration**: Series connection multiplies voltage but requires all modules to carry the same current. Parallel connection sums current at the same voltage. Series-parallel provides intermediate characteristics.
- **Redundancy Requirements**: Industrial applications may require N+1 or N+2 redundancy (1--2 spare modules) for maintenance without capacity reduction.
- **Physical Space**: Module arrangement must fit within available footprint. Stacked or tiered configurations increase volumetric density but complicate maintenance access.

## Related Parameters

- **name**: [Module Size](module-size.md)

- **relationship**: Volume per module
- **name**: [Reactor Count](reactor-count.md)

- **relationship**: Total reactors (may differ from modules)
- **name**: [Network Topology](network-topology.md)

- **relationship**: Electrical interconnection
- **name**: [Interconnection Loss](interconnection-loss.md)

- **relationship**: Losses between modules
- **name**: [Redundancy Level](redundancy-level.md)

- **relationship**: Spare capacity

## Compatible Systems

Multi Scale Integration

## References

- Liang, P. et al. (2018). "One-year operation of 1000-L modularized microbial fuel cell." Water Research, 141, 1-8.
- Aelterman, P. et al. (2006). "Continuous electricity generation at high voltages and currents using stacked environmental bio-electrochemical systems." Environmental Science & Technology, 40(10), 3388-3394.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Modules+Per+System&body=**Parameter%3A**+Modules+Per+System%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fmodules-per-system.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Modules+Per+System&body=**Parameter%3A**+Modules+Per+System%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fmodules-per-system.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Modules+Per+System&body=**Parameter%3A**+Modules+Per+System%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fmodules-per-system.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
