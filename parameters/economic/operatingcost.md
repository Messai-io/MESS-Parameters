# operatingCost

Operating cost (OPEX) is the total recurring annual expense for running an MES, encompassing energy, labor, chemicals, maintenance (including component replacement), monitoring/analytics, sludge disposal, insurance, and overhead. Expressed in USD per year or per m^3 treated, OPEX is the primary determinant of long-term economic viability and determines the break-even treatment fee that must be charged to cover costs.

MES operating costs have a different structure than conventional treatment: lower energy costs (no aeration, potential net energy generation), lower sludge disposal costs (60--90% less sludge), but potentially higher maintenance costs (electrode and membrane replacement). The net effect depends on the specific MES design and operating conditions, with some TEA analyses showing OPEX 20--50% lower than activated sludge and others showing comparable costs.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Economic |
| **Type** | number |
| **Unit** | USD/kWh |

## Typical Values

- **Valid Range**: 0.01 -- 10 USD/m^3 treated
- **Lab MFC (consumables)**: $5 -- 50/m^3 (dominated by buffer chemicals)
- **Pilot MFC (all costs)**: $0.10 -- 1.00/m^3
- **Full-scale MFC target**: $0.05 -- 0.30/m^3
- **Activated sludge (reference)**: $0.10 -- 0.50/m^3
- **MBR (reference)**: $0.15 -- 0.60/m^3
- **Energy fraction**: 10 -- 40% of OPEX
- **Labor fraction**: 20 -- 40%
- **Maintenance fraction**: 15 -- 35%
- **Chemical fraction**: 5 -- 20%
- **Disposal fraction**: 2 -- 10%

## Measurement Methods

- **Detailed Cost Tracking**: All operating expenses are tracked in accounting records categorized by type (energy, labor, chemicals, maintenance, disposal, overhead). Total OPEX / total volume treated = unit operating cost.
- **Budgetary Estimation**: For TEA, OPEX is estimated from: energy consumption * electricity tariff + labor FTE * salary + chemical consumption * unit cost + maintenance budget + disposal cost + insurance + overhead (typically 10--15% of direct costs).

## Affecting Factors

### Primary

- **Energy Balance**: Energy-positive MFC operation reduces net energy cost to zero or negative.
- **Component Durability**: Longer replacement intervals reduce annualized maintenance costs.
- **Automation**: Higher automation reduces labor cost but increases control system maintenance.
- **Scale**: OPEX per m^3 decreases with scale due to shared labor and economies in procurement.
- **Wastewater Characteristics**: Easy-to-treat wastewater (brewery) has lower OPEX than difficult wastewater (leachate).

## Related Parameters

- **name**: [Energy Cost](energy-cost.md)

- **relationship**: Energy component
- **name**: [Labor Cost](labor-cost.md)

- **relationship**: Personnel component
- **name**: [Maintenance Cost](maintenance-cost.md)

- **relationship**: Maintenance component
- **name**: [Chemical Cost](chemical-cost.md)

- **relationship**: Chemical component
- **name**: [Disposal Cost](disposal-cost.md)

- **relationship**: Waste management component
- **name**: [Capital Cost](capitalcost.md)

- **relationship**: Annualized CAPEX adds to total cost

## References

- Rozendal, R.A. et al. (2008). "Towards practical implementation of bioelectrochemical wastewater treatment." Trends in Biotechnology, 26(8), 450-459.
- He, Z. (2013). "Microbial fuel cells: Now let us talk about energy." Environmental Science & Technology, 47(1), 332-333.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+operatingCost&body=**Parameter%3A**+operatingCost%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Foperatingcost.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+operatingCost&body=**Parameter%3A**+operatingCost%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Foperatingcost.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+operatingCost&body=**Parameter%3A**+operatingCost%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Foperatingcost.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
