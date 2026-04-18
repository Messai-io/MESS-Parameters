# Reactor Count

Reactor count is the total number of individual electrochemical reactor units in an MES installation, encompassing both active (operating) and standby (reserve/maintenance) units. This parameter differs from modules-per-system in that a single module may contain multiple reactor cells (e.g., a stacked module with 4 cells counts as 1 module but 4 reactors). Reactor count determines the total electrode area, treatment capacity, and power generation capability of the system.

In laboratory research, reactor count typically refers to the number of replicate reactors operated in parallel for statistical analysis. A minimum of 3 replicates (reactor count = 3 per condition) is standard for publishable MES research, with 4--6 replicates recommended for statistical power. In pilot and industrial applications, reactor count refers to the total number of electrochemical cells in the installation, which may range from 10 to several thousand.

The reactor count directly impacts system complexity, maintenance burden, and capital cost. Each additional reactor adds fluid connections (inlet, outlet, recirculation), electrical connections (anode lead, cathode lead, reference electrode), and monitoring channels (voltage, current). The diminishing marginal benefit of additional reactors (due to interconnection losses and control complexity) must be balanced against the treatment capacity gained.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Integration Scaling |
| **Subcategory** | Multi-Reactor Networks |
| **Type** | number |
| **Minimum** | 2 |
| **Maximum** | 1000 |

## Typical Values

- **Valid Range**: 1 -- 100000
- **Lab screening study**: 3 -- 12 reactors (3--4 replicates per condition)
- **Lab optimization study**: 6 -- 30 reactors
- **Bench-scale demonstration**: 4 -- 50 reactors
- **Pilot-scale system**: 10 -- 500 reactors
- **Liang et al. 1000-L system**: 96 individual cells (in 12 cassettes of 8)
- **Commercial target (1 MLD)**: 1000 -- 50000 reactors
- **Statistical minimum for research**: 3 per condition

## Measurement Methods

- **System Inventory**: Physical count of all installed reactor cells. Each cell with independent anode and cathode electrodes counts as one reactor, regardless of whether it shares a housing with other cells.
- **Performance Mapping**: Each reactor is identified and its individual performance monitored. A reactor performance matrix (voltage vs. time for all reactors) identifies outliers and enables predictive maintenance.

## Affecting Factors

### Primary

- **Treatment Capacity**: Reactor count = total flow rate / (per-reactor volume / HRT). Scaling linearly with capacity for numbering-up approaches.
- **Replicate Requirements**: Research publications require minimum 3 replicates. Higher-impact journals may require 6+ replicates.
- **Redundancy**: N+1 or N+2 spare capacity allows maintenance without capacity reduction.
- **Monitoring Capacity**: Each reactor requires monitoring channels. A 96-channel DAQ system limits per-channel monitoring to 96 reactors.

## Related Parameters

- **name**: [Modules Per System](modules-per-system.md)

- **relationship**: Modules containing reactor cells
- **name**: [Module Size](module-size.md)

- **relationship**: Volume per module
- **name**: [Network Topology](network-topology.md)

- **relationship**: Electrical connections between reactors
- **name**: [Redundancy Level](redundancy-level.md)

- **relationship**: Spare reactor capacity

## Compatible Systems

Network Effects

## References

- Liang, P. et al. (2018). "One-year operation of 1000-L modularized microbial fuel cell." Water Research, 141, 1-8.
- Logan, B.E. et al. (2006). "Microbial fuel cells: methodology and technology." Environmental Science & Technology, 40(17), 5181-5192.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Reactor+Count&body=**Parameter%3A**+Reactor+Count%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Freactor-count.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Reactor+Count&body=**Parameter%3A**+Reactor+Count%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Freactor-count.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Reactor+Count&body=**Parameter%3A**+Reactor+Count%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Freactor-count.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
