# Water Cost

Water cost is the expense of procuring water for MES auxiliary operations including buffer preparation, electrode and membrane cleaning, cooling, and evaporation make-up. Expressed in USD per m^3 of water consumed, this operating cost is distinct from the wastewater treatment function and represents a net consumption of clean water resources. In most MES applications, water cost is a minor operating expense (< 5% of OPEX), but in water-scarce regions it can be significant.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Economic |
| **Subcategory** | Variable Operating Costs |
| **Type** | number |
| **Unit** | $/m³ |
| **Minimum** | 0 |
| **Maximum** | 10 |

## Typical Values

- **Valid Range**: 0 -- 10 USD/m^3 water
- **Municipal water (US average)**: $1 -- 5/m^3
- **Municipal water (EU average)**: $2 -- 8/m^3
- **DI/Milli-Q water (lab)**: $5 -- 50/m^3 (including treatment cost)
- **Well water (rural)**: $0.10 -- 1.00/m^3
- **Desalinated water**: $1 -- 5/m^3
- **Auxiliary water consumption (pilot MFC)**: 0.01 -- 0.1 m^3 per m^3 treated
- **Water cost per m^3 wastewater treated**: $0.01 -- 0.50
- **Fraction of OPEX**: 1 -- 5%

## Measurement Methods

- **Water Bill Analysis**: Actual water consumption and cost from utility billing records. Allocation to MES operations based on metered sub-usage or proportional allocation.
- **Consumption Calculation**: Water cost = sum of (activity volume * water price) for all water-consuming activities (cleaning, buffer preparation, cooling, evaporation make-up).

## Affecting Factors

### Primary

- **Local Water Price**: Varies 10--50x globally ($0.10 in water-abundant developing countries to $10+ in water-scarce regions).
- **Water Quality Requirements**: DI water for lab medium preparation costs 5--10x more than tap water.
- **Cleaning Frequency**: More frequent cleaning increases water consumption.
- **Climate**: Hot, dry climates increase evaporation losses.

## Related Parameters

- **name**: [Water Supply](../operational/water-supply.md)

- **relationship**: Water source and infrastructure
- **name**: [Water Footprint](water-footprint.md)

- **relationship**: Total water lifecycle impact
- **name**: [Chemical Cost](chemical-cost.md)

- **relationship**: Chemicals dissolved in water
- **name**: [Operating Cost](operatingcost.md)

- **relationship**: Total OPEX including water

## Compatible Systems

Operating Cost Parameters

## References

- GWI (2024). "Global Water Tariff Survey." Global Water Intelligence.
- OECD (2020). "Water Pricing in OECD Countries."

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Water+Cost&body=**Parameter%3A**+Water+Cost%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fwater-cost.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Water+Cost&body=**Parameter%3A**+Water+Cost%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fwater-cost.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Water+Cost&body=**Parameter%3A**+Water+Cost%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fwater-cost.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
