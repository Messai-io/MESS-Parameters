# Electricity Revenue

Electricity revenue is the income generated from selling or utilizing the electrical energy produced by MFC systems, expressed in USD per kWh or USD per m^3 of wastewater treated. As MFCs generate DC electricity directly from organic matter oxidation, the electrical output represents a unique revenue stream that offsets operating costs and differentiates MES from conventional treatment technologies that are purely energy-consuming.

Current MFC power outputs are modest: lab-scale systems produce 0.1--10 W/m^3 of reactor volume, generating $0.001--0.05 per m^3 treated at typical electricity prices. At these levels, electricity revenue alone cannot justify MFC investment -- it must be combined with treatment revenue and other value streams. However, electricity self-consumption (powering the MFC's own monitoring and control systems) eliminates the need for grid connection in remote applications, which has significant value beyond the electricity price.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Economic |
| **Subcategory** | Revenue Streams |
| **Type** | number |
| **Unit** | $/kWh |
| **Minimum** | 0 |
| **Maximum** | 0.5 |

## Typical Values

- **Valid Range**: 0 -- 1 USD/m^3 treated
- **Electricity price (US average)**: $0.10 -- 0.15/kWh
- **Electricity price (EU average)**: $0.15 -- 0.30/kWh
- **MFC electrical output**: 0.01 -- 0.5 kWh/m^3 treated
- **Revenue per m^3 (US)**: $0.001 -- 0.075
- **Revenue per m^3 (EU)**: $0.002 -- 0.15
- **Revenue fraction of total MES income**: 1 -- 15%
- **Self-consumption value (off-grid)**: $0.30 -- 1.00/kWh equivalent

## Measurement Methods

- **Power Output Measurement**: Continuous monitoring of voltage and current at the system output. Energy = integral of (V * I) dt over the billing period. Revenue = energy * electricity price.
- **Grid Feed-In Metering**: For grid-connected systems, a bidirectional energy meter records electricity exported. Revenue is calculated from exported energy and the applicable feed-in tariff or net metering rate.

## Affecting Factors

### Primary

- **MFC Power Density**: Higher power density directly increases revenue. Optimized MFCs produce 5--10x more than unoptimized designs.
- **Electricity Price**: Revenue scales linearly with electricity price. High-cost regions (islands, remote areas, $0.30--1.00/kWh) make MFC electricity more valuable.
- **Utilization Model**: Self-consumption avoids retail electricity costs; grid export earns wholesale or feed-in tariff rates.
- **Power Conditioning Losses**: DC-DC conversion and inverter losses (10--20%) reduce net sellable energy.

## Related Parameters

- **name**: [Hydrogen Revenue](hydrogen-revenue.md)

- **relationship**: Alternative energy product (MEC)
- **name**: [Byproduct Revenue](byproduct-revenue.md)

- **relationship**: Other revenue streams
- **name**: [Treatment Revenue](treatment-revenue.md)

- **relationship**: Wastewater treatment fees
- **name**: [Energy Cost](energy-cost.md)

- **relationship**: Parasitic power cost
- **name**: [Levelized Cost of Energy](levelized-cost-energy.md)

- **relationship**: Comprehensive energy economics

## Compatible Systems

Economic Performance Indicators

## References

- Ge, Z., Li, J., Xiao, L., Tong, Y., He, Z. (2014). "Recovery of electrical energy in microbial fuel cells." Environmental Science & Technology Letters, 1(2), 137-141.
- EIA (2024). "Electric Power Monthly." US Energy Information Administration.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Electricity+Revenue&body=**Parameter%3A**+Electricity+Revenue%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Felectricity-revenue.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Electricity+Revenue&body=**Parameter%3A**+Electricity+Revenue%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Felectricity-revenue.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Electricity+Revenue&body=**Parameter%3A**+Electricity+Revenue%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Felectricity-revenue.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
