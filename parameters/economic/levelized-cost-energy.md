# Levelized Cost Energy

Levelized cost of energy (LCOE) is the constant price per kWh that, if received for every unit of energy produced over the project lifetime, would result in a net present value of zero. LCOE provides a comprehensive metric for comparing the economic competitiveness of MFC electricity generation with other distributed energy sources by normalizing all costs (capital, operating, fuel, replacement) over the total energy produced during the system's life. For MES, the LCOE calculation should credit the wastewater treatment value, giving a net LCOE that can be negative (meaning the system earns more from treatment than it costs to produce electricity).

Standard LCOE = (sum of annual costs discounted to present) / (sum of annual energy production discounted to present). For MFCs treating wastewater, the adjusted LCOE = (LCOE_standard - treatment_revenue_per_kWh), which can yield negative values when treatment revenue exceeds the cost of electricity production.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Economic |
| **Subcategory** | Financial Metrics |
| **Type** | number |
| **Unit** | $/kWh |
| **Minimum** | 0.01 |
| **Maximum** | 10 |

## Typical Values

- **Valid Range**: -10 -- 1000 USD/kWh
- **MFC LCOE (without treatment credit)**: $10 -- 1000/kWh (extremely high)
- **MFC LCOE (with treatment credit)**: -$1 -- 10/kWh (potentially negative)
- **Solar PV (reference)**: $0.03 -- 0.10/kWh
- **Onshore wind (reference)**: $0.03 -- 0.08/kWh
- **Diesel generator (reference)**: $0.15 -- 0.40/kWh
- **Fuel cell (H2, reference)**: $0.10 -- 0.30/kWh
- **Discount rate for LCOE**: 5 -- 10%
- **Project life**: 20 years

## Measurement Methods

- **Discounted Cash Flow**: LCOE = [sum(C_t / (1+r)^t)] / [sum(E_t / (1+r)^t)], where C_t = total cost in year t, E_t = energy produced in year t, r = discount rate, summed from t=0 to N (project life).
- **Simplified Calculation**: LCOE = (annualized CAPEX + annual OPEX) / annual energy production. Annualized CAPEX = CAPEX * CRF, where CRF = r(1+r)^N / ((1+r)^N - 1) is the capital recovery factor.

## Affecting Factors

### Primary

- **Power Density**: Higher power density reduces CAPEX per kWh. Doubling power density approximately halves LCOE.
- **Capacity Factor**: MFCs treating continuous wastewater flow can achieve 80--95% capacity factor, favorable compared to intermittent renewables (20--35%).
- **Treatment Credit**: Crediting treatment revenue at $0.50--5/m^3 can make LCOE negative, making MFC electricity "free" or revenue-generating.
- **System Lifetime**: Longer project life (20 vs. 10 years) reduces LCOE by spreading CAPEX over more energy production.

## Related Parameters

- **name**: [Cost Per Watt](costperwatt.md)

- **relationship**: Related cost metric
- **name**: [Capital Cost](capitalcost.md)

- **relationship**: Major LCOE component
- **name**: [Operating Cost](operatingcost.md)

- **relationship**: Annual cost component
- **name**: [Electricity Revenue](electricity-revenue.md)

- **relationship**: Revenue from produced energy
- **name**: [Treatment Revenue](treatment-revenue.md)

- **relationship**: Treatment credit for adjusted LCOE

## Compatible Systems

Economic Performance Indicators

## References

- IRENA (2024). "Renewable Power Generation Costs in 2023." International Renewable Energy Agency.
- Rozendal, R.A. et al. (2008). "Towards practical implementation of bioelectrochemical wastewater treatment." Trends in Biotechnology, 26(8), 450-459.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Levelized+Cost+Energy&body=**Parameter%3A**+Levelized+Cost+Energy%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Flevelized-cost-energy.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Levelized+Cost+Energy&body=**Parameter%3A**+Levelized+Cost+Energy%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Flevelized-cost-energy.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Levelized+Cost+Energy&body=**Parameter%3A**+Levelized+Cost+Energy%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Flevelized-cost-energy.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
