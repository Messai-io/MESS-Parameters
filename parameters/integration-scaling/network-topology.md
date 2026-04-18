# Network Topology

Network topology describes the physical and logical arrangement of electrical and hydraulic connections between individual MES modules in a multi-cell system. The electrical topology (series, parallel, series-parallel, or independent) determines the system's output voltage, current, and susceptibility to voltage reversal. The hydraulic topology (parallel feed, series cascade, or independent) determines the substrate exposure profile and treatment efficiency.

Electrical series connection sums individual cell voltages (V_total = sum of V_cell) while constraining all cells to the same current. This is advantageous for reaching useful voltages (> 1.5 V for direct LED or sensor powering) but creates vulnerability to voltage reversal in underperforming cells. Parallel connection sums currents at the lowest cell voltage, providing fault tolerance but limited voltage. Series-parallel hybrids (e.g., 4 cells in series, 10 such strings in parallel) balance voltage, current, and reliability.

Hydraulic series configuration cascades the effluent from one module as the influent to the next, creating a plug-flow-like treatment sequence. This achieves higher overall COD removal (> 90%) than parallel operation at the same total HRT, but the downstream modules receive progressively lower substrate concentrations, producing less power per module. Hydraulic parallel operation distributes equal feed to all modules, providing uniform loading and simpler manifold design.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Integration Scaling |
| **Subcategory** | Multi-Reactor Networks |
| **Type** | select |

## Typical Values

- **Valid Range**: Categorical
- **Electrical series (3--10 cells)**: V_out = 1.5--8 V; I limited by weakest cell
- **Electrical parallel (5--100 cells)**: V_out = 0.3--0.6 V; I_out = 0.5--50 A
- **Series-parallel (4S x 10P typical)**: V_out = 1.5--3 V; I_out = 1--10 A
- **Independent (individual MPPT)**: Each cell optimized independently; highest energy but most complex
- **Hydraulic parallel**: Equal OLR per module; most common
- **Hydraulic series (2--4 stages)**: 85--95% COD removal; decreasing power per stage

## Measurement Methods

- **Circuit Documentation**: The topology is documented as a circuit diagram showing all series, parallel, and series-parallel connections. Each module is labeled with its position in the network. Hydraulic connections are documented as a piping and instrumentation diagram (P&ID).
- **IV Curve of Complete Stack**: The system-level polarization curve (measured by varying total load resistance) reveals the collective electrical behavior. Deviations from the expected sum-of-cells behavior indicate voltage reversal, poor cell matching, or high interconnection resistance.

## Affecting Factors

### Primary

- **Voltage Requirement**: Direct powering of LEDs (> 2 V), sensors (3.3--5 V), or charging circuits (> 1.5 V) requires series connection.
- **Cell Uniformity**: Series connection requires well-matched cells. A cell-to-cell voltage variation of > 20% creates voltage reversal risk. Better uniformity enables more cells in series.
- **Fault Tolerance**: Parallel connections provide graceful degradation (one failed cell reduces output by 1/N). Series connections fail catastrophically when one cell reverses.
- **Control Complexity**: Independent cell control (individual MPPT) maximizes energy but requires N controllers. Unified stack control requires only one but leaves energy on the table.

## Related Parameters

- **name**: [Modules Per System](modules-per-system.md)

- **relationship**: Number of nodes in the network
- **name**: [Interconnection Loss](interconnection-loss.md)

- **relationship**: Network losses
- **name**: [Network Efficiency](network-efficiency.md)

- **relationship**: Overall network performance
- **name**: [Power Connection](power-connection.md)

- **relationship**: Electrical connection details
- **name**: [Redundancy Level](redundancy-level.md)

- **relationship**: Backup and fault tolerance

## Compatible Systems

Network Effects

## References

- Aelterman, P. et al. (2006). "Continuous electricity generation at high voltages and currents using stacked environmental bio-electrochemical systems." Environmental Science & Technology, 40(10), 3388-3394.
- Zhuang, L. et al. (2012). "Scalable microbial fuel cell (MFC) stack for continuous real wastewater treatment." Bioresource Technology, 106, 82-88.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Network+Topology&body=**Parameter%3A**+Network+Topology%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fnetwork-topology.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Network+Topology&body=**Parameter%3A**+Network+Topology%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fnetwork-topology.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Network+Topology&body=**Parameter%3A**+Network+Topology%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fnetwork-topology.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
