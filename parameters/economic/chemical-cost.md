# Chemical Cost

Chemical cost is the recurring expense for consumable chemicals used in MES operation, including buffer solutions (phosphate, bicarbonate), pH adjustment agents (HCl, NaOH), membrane cleaning chemicals (acid, base, oxidant), nutrient supplements (trace minerals, vitamins), catholyte chemicals (potassium ferricyanide for lab studies, though not for practical systems), and anti-fouling agents. Expressed in USD per m^3 of wastewater treated or per year of operation, chemical costs typically represent 5--20% of total operating costs for MES.

MES have a significant advantage over conventional treatment in chemical consumption because they do not require chemical oxygen supply (no flocculants or oxygen for aeration) and produce less sludge (reducing dewatering chemical demand). However, MES may require buffer chemicals to maintain pH stability (particularly important in poorly buffered wastewaters) and periodic acid or base for membrane and electrode cleaning.

In laboratory research, chemical costs are often dominated by phosphate buffer (50--100 mM PBS, costing $0.50--2.00 per liter of medium) and nutrient supplements. At pilot scale with real wastewater, the natural alkalinity of the wastewater often provides sufficient buffering, dramatically reducing chemical requirements compared to lab studies with defined media.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Economic |
| **Subcategory** | Variable Operating Costs |
| **Type** | number |
| **Unit** | $/m³ |
| **Minimum** | 0 |
| **Maximum** | 100 |

## Typical Values

- **Valid Range**: 0 -- 5 USD/m^3 treated
- **Lab MFC (defined medium with PBS)**: $1 -- 5/m^3 (buffer-dominated)
- **Pilot MFC (real wastewater, pH adjustment only)**: $0.01 -- 0.10/m^3
- **Membrane cleaning chemicals**: $0.005 -- 0.05/m^3
- **Nutrient supplements (if needed)**: $0.01 -- 0.10/m^3
- **Activated sludge chemical costs (reference)**: $0.02 -- 0.15/m^3
- **Total chemical cost target**: < $0.10/m^3 for commercial viability
- **Fraction of OPEX**: 5 -- 20%

## Measurement Methods

- **Chemical Consumption Tracking**: All chemical purchases are logged by quantity and cost. Consumption rates (kg/d or L/d) are recorded for each chemical. Cost per m^3 treated = total chemical cost / total volume treated over the same period.
- **Stoichiometric Calculation**: Theoretical chemical requirements are calculated from reaction stoichiometry and wastewater characterization. Buffer requirement = alkalinity deficit * buffer concentration. Cleaning chemical = volume * concentration * frequency.

## Affecting Factors

### Primary

- **Wastewater Buffer Capacity**: High-alkalinity wastewater (> 200 mg/L as CaCO3) requires minimal or no buffer addition.
- **Buffer Concentration**: Lab studies at 50--100 mM PBS add $1--5/m^3 in chemical cost. Reducing buffer to 10--20 mM or using bicarbonate saves 50--80%.
- **Membrane Cleaning Frequency**: Monthly cleaning requires less chemical than weekly cleaning.
- **Scale**: Bulk chemical purchasing reduces unit costs by 20--50% at pilot vs. lab scale.

## Related Parameters

- **name**: [Operating Cost](operatingcost.md)

- **relationship**: Total OPEX including chemicals
- **name**: [Membrane Replacement Interval](../operational/membrane-replacement-interval.md)

- **relationship**: Cleaning chemical driver
- **name**: [Water Cost](water-cost.md)

- **relationship**: Water for chemical preparation
- **name**: [Substrate Cost](substrate-cost.md)

- **relationship**: Feed substrate cost

## Compatible Systems

Operating Cost Parameters

## References

- Rozendal, R.A. et al. (2008). "Towards practical implementation of bioelectrochemical wastewater treatment." Trends in Biotechnology, 26(8), 450-459.
- He, Z. (2013). "Microbial fuel cells: Now let us talk about energy." Environmental Science & Technology, 47(1), 332-333.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Chemical+Cost&body=**Parameter%3A**+Chemical+Cost%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fchemical-cost.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Chemical+Cost&body=**Parameter%3A**+Chemical+Cost%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fchemical-cost.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Chemical+Cost&body=**Parameter%3A**+Chemical+Cost%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fchemical-cost.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
