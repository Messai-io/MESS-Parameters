# Substrate Cost

Substrate cost is the expense of providing organic matter (electron donor) to the MES, expressed in USD per kg COD or per m^3 of reactor feed. In wastewater treatment applications, the substrate is the wastewater itself, which arrives at zero or negative cost (treatment fees are paid by the wastewater generator). In research or specialty applications using defined media (acetate, glucose), substrate cost is a significant operating expense.

For MES treating real wastewater, substrate cost is effectively negative because the facility receives treatment fees for accepting wastewater. This negative substrate cost is a major economic advantage of MES -- the fuel (organic waste) has negative cost. This contrasts with conventional fuel cells where hydrogen or methanol fuel represents a major operating expense.

For laboratory research using defined substrates, sodium acetate (the most common MFC substrate) costs $20--100/kg, and at typical concentrations of 1 g/L COD, the substrate cost is $0.02--0.10 per liter of medium, or $20--100 per m^3.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Economic |
| **Subcategory** | Variable Operating Costs |
| **Type** | number |
| **Unit** | $/kg |
| **Minimum** | -0.1 |
| **Maximum** | 10 |

## Typical Values

- **Valid Range**: -5 -- 100 USD/m^3
- **Real wastewater (paid to treat)**: -$0.50 -- -$5.00/m^3 (revenue, not cost)
- **Sodium acetate (research grade)**: $20 -- 100/kg ($20 -- 100/m^3 at 1 g/L)
- **Glucose (research grade)**: $10 -- 50/kg
- **Industrial byproduct (brewery waste)**: $0 -- 0.01/m^3 (essentially free)
- **Septage/sludge**: -$10 -- -$50/m^3 (tipping fee = revenue)
- **Synthetic wastewater (complete medium)**: $1 -- 10/m^3
- **Most favorable scenario**: Treatment fee-paying wastewater

## Measurement Methods

- **Procurement Cost**: For purchased substrates: substrate cost = purchase price / volume of medium prepared. Include chemical cost, water cost, and preparation labor.
- **Tipping Fee Analysis**: For wastewater treatment: the substrate has negative cost equal to the treatment fee received. Fee = negotiated rate * volume accepted.

## Affecting Factors

### Primary

- **Substrate Source**: Wastewater has negative cost (revenue); defined chemicals have positive cost ($10--100/m^3).
- **Chemical Grade**: Technical grade chemicals cost 30--70% less than analytical/research grade.
- **Bulk Purchasing**: Large-volume chemical purchasing reduces unit cost by 20--50%.
- **Buffer and Nutrient Supplements**: Buffer chemicals (PBS) often exceed substrate cost in defined media.

## Related Parameters

- **name**: [Initial Substrate Concentration](../operational/initial-substrate-conc.md)

- **relationship**: Concentration determining cost
- **name**: [Wastewater Type](../operational/wastewater-type.md)

- **relationship**: Source of substrate
- **name**: [Treatment Revenue](treatment-revenue.md)

- **relationship**: Revenue from accepting wastewater
- **name**: [Chemical Cost](chemical-cost.md)

- **relationship**: Related consumable expense
- **name**: [Operating Cost](operatingcost.md)

- **relationship**: Total OPEX including substrate

## Compatible Systems

Operating Cost Parameters

## References

- Pant, D. et al. (2010). "A review of the substrates used in microbial fuel cells for sustainable energy production." Bioresource Technology, 101(6), 1533-1543.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Substrate+Cost&body=**Parameter%3A**+Substrate+Cost%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fsubstrate-cost.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Substrate+Cost&body=**Parameter%3A**+Substrate+Cost%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fsubstrate-cost.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Substrate+Cost&body=**Parameter%3A**+Substrate+Cost%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fsubstrate-cost.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
