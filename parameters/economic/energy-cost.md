# Energy Cost

Energy cost is the expense of electrical energy consumed by MES ancillary equipment (pumps, mixers, heaters, control electronics, instrumentation), expressed in USD per kWh consumed or USD per m^3 of wastewater treated. For MFCs, the energy cost represents a parasitic load that reduces net energy benefit; for MECs, it includes both the applied voltage power and ancillary equipment power. The ratio of parasitic energy cost to gross energy revenue determines whether the MES achieves net energy-positive economics.

MES energy costs are highly scale-dependent. Laboratory systems typically have parasitic power consumption 10--1000x higher than their bioelectrical output due to oversized pumps, data acquisition systems, and environmental controls designed for flexibility rather than efficiency. Pilot systems with optimized pumps and passive designs approach energy neutrality. Full-scale MFC systems treating domestic wastewater are projected to achieve net energy-positive operation with energy costs of $0.01--0.05/m^3 (compared to activated sludge at $0.03--0.10/m^3 for aeration alone).

## Basic Information

| Property | Value |
|---|---|
| **Category** | Economic |
| **Subcategory** | Variable Operating Costs |
| **Type** | number |
| **Unit** | $/kWh |
| **Minimum** | 0 |
| **Maximum** | 0.5 |

## Typical Values

- **Valid Range**: 0 -- 5 USD/m^3 treated
- **Lab MFC parasitic energy cost**: $0.50 -- 10/m^3 (inefficient)
- **Pilot MFC parasitic energy cost**: $0.01 -- 0.20/m^3
- **Full-scale MFC target**: $0.01 -- 0.05/m^3
- **MEC applied voltage energy**: $0.05 -- 0.30/m^3
- **Activated sludge aeration (reference)**: $0.03 -- 0.10/m^3
- **Electricity price (US avg)**: $0.10 -- 0.15/kWh
- **Electricity price (EU avg)**: $0.15 -- 0.30/kWh
- **Fraction of total OPEX**: 10 -- 40%

## Measurement Methods

- **Metered Consumption**: All electrical loads are metered (individual wattmeters or a sub-panel energy meter). Total energy consumption over the billing period is divided by volume treated to give kWh/m^3. Cost = energy consumption * electricity tariff rate.
- **Equipment-Level Audit**: Each device's rated power and duty cycle are multiplied to calculate energy consumption. Total = sum of (P_rated * duty_cycle * hours). This identifies the largest energy consumers for optimization.

## Affecting Factors

### Primary

- **Pump Efficiency**: Replacing lab peristaltic pumps (efficiency 10--30%) with industrial pumps (efficiency 50--80%) reduces pumping energy by 3--5x.
- **Gravity Feed**: Eliminating pumping entirely through gravity-fed hydraulic design reduces energy cost to near zero for the feed system.
- **Mixing Strategy**: Passive mixing vs. mechanical stirring eliminates 5--30% of total energy cost.
- **Scale**: Per-unit energy cost decreases with scale as equipment efficiency improves and fixed loads are amortized over larger volumes.

## Related Parameters

- **name**: [Power Requirement](../operational/power-requirement.md)

- **relationship**: Total parasitic power demand
- **name**: [Electricity Revenue](electricity-revenue.md)

- **relationship**: Energy revenue offset
- **name**: [Operating Cost](operatingcost.md)

- **relationship**: Total OPEX including energy
- **name**: [Mixer Power](../operational/mixer-power.md)

- **relationship**: Mixing energy component
- **name**: [Pump Capacity](../operational/pump-capacity.md)

- **relationship**: Pumping energy component

## Compatible Systems

Operating Cost Parameters

## References

- He, Z. (2013). "Microbial fuel cells: Now let us talk about energy." Environmental Science & Technology, 47(1), 332-333.
- Ge, Z. et al. (2014). "Recovery of electrical energy in microbial fuel cells." Environmental Science & Technology Letters, 1(2), 137-141.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Energy+Cost&body=**Parameter%3A**+Energy+Cost%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fenergy-cost.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Energy+Cost&body=**Parameter%3A**+Energy+Cost%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fenergy-cost.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Energy+Cost&body=**Parameter%3A**+Energy+Cost%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fenergy-cost.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
