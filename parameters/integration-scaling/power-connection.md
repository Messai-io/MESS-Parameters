# Power Connection

Power connection describes the electrical interconnection scheme used to combine the output of individual MES cells or modules into a usable aggregate power output. This encompasses the physical wiring, connectors, bus bars, junction boxes, and power conditioning electronics that interface between the bioelectrochemical cells and the external load or grid. The power connection configuration determines the system output voltage and current, fault tolerance, and compatibility with downstream power utilization devices.

Individual MFC cells produce low voltage (0.3--0.7 V) and low current (0.1--10 mA for lab scale), which is insufficient for most practical applications. Power connections must aggregate cell outputs to achieve useful levels: series connection raises voltage (3+ cells to reach > 1.5 V for LED powering, 6+ cells for USB charging at 5 V), while parallel connection increases current capacity. The connection scheme must include protection against voltage reversal (blocking diodes), cell-level monitoring (individual voltage measurement), and electrical isolation from the aqueous reactor environment (waterproof connectors, insulated wiring).

For MEC applications, the power connection includes the external power supply connection, which must provide the applied voltage (0.2--1.0 V per cell) with precise control. Multi-cell MECs in series require higher total applied voltage, while parallel MECs require higher current capacity from the power supply.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Integration Scaling |
| **Subcategory** | Utility Requirements |
| **Type** | number |
| **Unit** | kVA |
| **Minimum** | 10 |
| **Maximum** | 10000 |
| **Papers Reporting** | 1 |

## Typical Values

- **Valid Range**: Categorical (series, parallel, series-parallel, independent)
- **Lab MFC (single cell)**: Direct wire to external resistance
- **Series stack (3--10 cells)**: V_out = 1.5--7 V; common current
- **Parallel bank (5--100 cells)**: V_out = 0.3--0.6 V; summed current
- **Series-parallel (4S x 25P)**: V_out = 2 V; I_out = 2.5 A (typical pilot)
- **With DC-DC boost converter**: V_in = 0.3 V, V_out = 3.3 or 5 V
- **Wire gauge (lab)**: 18--22 AWG copper
- **Wire gauge (pilot)**: 10--16 AWG copper
- **Connector type (lab)**: Banana plug, alligator clip
- **Connector type (pilot)**: Ring terminal, Anderson PowerPole, waterproof connector

## Measurement Methods

- **Circuit Resistance Measurement**: Total circuit resistance (from cell terminals through all wiring and connectors to the load) is measured using four-wire resistance measurement. Target: < 5% of total system internal resistance.
- **Contact Resistance Verification**: Each connector and junction is individually measured for contact resistance using a milliohm meter. Values > 0.5 ohm indicate poor connection quality requiring re-termination.

## Affecting Factors

### Primary

- **Target Load Requirements**: The downstream device (LED, sensor, battery charger, grid-tie inverter) specifies the required voltage and current, dictating the series-parallel configuration.
- **Cell Matching**: Series connection requires cells with matched internal resistance and output current. Mismatch > 20% causes the weakest cell to become a resistive load.
- **Protection Requirements**: Anti-reversal Schottky diodes (0.2--0.3 V forward drop per cell) protect against voltage reversal but reduce net voltage. Bypass diodes provide alternative current paths around failed cells.
- **Environmental Exposure**: Outdoor and wastewater-plant installations require waterproof connections (IP65+) and corrosion-resistant materials (stainless steel, titanium, gold-plated connectors).

## Related Parameters

- **name**: [Network Topology](network-topology.md)

- **relationship**: Electrical arrangement
- **name**: [Interconnection Loss](interconnection-loss.md)

- **relationship**: Connection losses
- **name**: [External Load](external-load.md)

- **relationship**: Load characteristics
- **name**: [Network Efficiency](network-efficiency.md)

- **relationship**: Overall power delivery efficiency
- **name**: [Modules Per System](modules-per-system.md)

- **relationship**: Number of cells to connect

## Compatible Systems

Infrastructure Requirements

## References

- Ieropoulos, I. et al. (2013). "Waste to real energy: the first MFC powered mobile phone." Physical Chemistry Chemical Physics, 15(37), 15312-15316.
- Wang, H. et al. (2015). "Intermittent energy harvesting improves the performance of microbial fuel cells." Environmental Science & Technology, 49(5), 3267-3274.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Power+Connection&body=**Parameter%3A**+Power+Connection%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fpower-connection.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Power+Connection&body=**Parameter%3A**+Power+Connection%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fpower-connection.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Power+Connection&body=**Parameter%3A**+Power+Connection%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fpower-connection.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
