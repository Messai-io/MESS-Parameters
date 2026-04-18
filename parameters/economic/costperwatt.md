# costPerWatt

Cost per watt ($/W) is the capital cost of an MES normalized to its maximum sustained power output, providing a standardized metric for comparing the cost-effectiveness of MES as an electricity generation technology against other distributed energy sources (solar PV, small wind, diesel generators, fuel cells). This metric is most relevant for MFC applications where electricity generation is a primary objective and allows direct comparison with the energy technology market.

Current MFC cost-per-watt values are extremely high compared to mature renewable energy technologies because MFC power densities are low (0.1--10 W/m^2 of electrode area) and material costs are high. At $5000/m^2 of total installed cost and 1 W/m^2 power density, the cost per watt is $5000/W -- orders of magnitude above solar PV ($0.3--1/W) or small wind ($1--3/W). Achieving competitive cost per watt requires both dramatic cost reduction (10--100x through material substitution and manufacturing scale) and performance improvement (5--10x through electrode and reactor optimization).

However, cost per watt is an incomplete metric for MES because it ignores the wastewater treatment value. When the treatment revenue ($0.50--5/m^3) is credited against operating costs, the effective cost of electricity from MES can be negative -- the system generates value from treatment and also produces electricity as a bonus. A more appropriate metric for MES is the levelized cost of treatment ($/m^3) with electricity as a co-product credit.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Economic |
| **Type** | number |
| **Unit** | USD/W |

## Typical Values

- **Valid Range**: 1 -- 100000 USD/W
- **Lab MFC (Pt cathode, Nafion)**: $10000 -- 100000/W
- **Lab MFC (AC cathode, no membrane)**: $1000 -- 10000/W
- **Pilot MFC (optimized materials)**: $500 -- 5000/W
- **Target for competitiveness**: < $10/W (with treatment credit)
- **Solar PV (reference)**: $0.30 -- 1.00/W
- **Small wind (reference)**: $1 -- 3/W
- **Diesel generator (reference)**: $0.50 -- 2.00/W
- **Fuel cell (PEM, reference)**: $40 -- 100/W

## Measurement Methods

- **Direct Calculation**: Cost per watt = total capital cost ($) / maximum sustained power output (W). The power output should be the sustained (not peak) power measured at the maximum power point over multiple cycles under real operating conditions.
- **Annualized Cost Approach**: Annualized cost per watt = (annualized CAPEX + annual OPEX - annual treatment revenue) / annual average power output. This provides a more complete economic comparison by including operating costs and treatment credits.

## Affecting Factors

### Primary

- **Power Density**: Higher power density (W/m^2) directly reduces $/W. Doubling power density halves the cost per watt.
- **Material Cost**: Low-cost materials (SS mesh cathode, ceramic separator, graphite anode) reduce cost by 5--50x compared to premium materials (Pt, Nafion, carbon cloth).
- **Manufacturing Volume**: Mass production reduces per-unit cost by 30--70%.
- **System Size**: Larger systems benefit from economy of scale (cost exponent 0.6--0.8).

## Related Parameters

- **name**: [Capital Cost](capitalcost.md)

- **relationship**: Numerator in $/W calculation
- **name**: [Specific Capital Cost](specific-capital-cost.md)

- **relationship**: Cost per volume or capacity
- **name**: [Electrode Cost](electrode-cost.md)

- **relationship**: Major cost component
- **name**: [Membrane Cost](membrane-cost.md)

- **relationship**: Major cost component
- **name**: [Levelized Cost of Energy](levelized-cost-energy.md)

- **relationship**: Comprehensive energy cost metric

## References

- Rozendal, R.A. et al. (2008). "Towards practical implementation of bioelectrochemical wastewater treatment." Trends in Biotechnology, 26(8), 450-459.
- IRENA (2024). "Renewable Power Generation Costs in 2023." International Renewable Energy Agency.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+costPerWatt&body=**Parameter%3A**+costPerWatt%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fcostperwatt.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+costPerWatt&body=**Parameter%3A**+costPerWatt%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fcostperwatt.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+costPerWatt&body=**Parameter%3A**+costPerWatt%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fcostperwatt.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
