# Electrode Cost

Electrode cost is the purchase price of anode and cathode materials per unit area (USD/m^2) or per unit reactor volume (USD/m^3), representing the largest single material cost component in most MES designs. Electrode cost directly determines capital cost competitiveness and, through replacement frequency, significantly impacts operating cost. The quest for low-cost, high-performance electrode materials is the most active area of MES materials research.

Anode materials range from inexpensive graphite granules ($5--20/m^2 projected area) and carbon felt ($10--50/m^2) to expensive carbon nanotube composites ($100--1000/m^2). Cathode costs are typically higher because they require catalysts for the oxygen reduction reaction (ORR) or hydrogen evolution reaction (HER). Platinum-loaded cathodes ($200--500/m^2 at 0.5 mg Pt/cm^2) provide benchmark performance but are economically prohibitive at scale. Activated carbon cathodes ($5--30/m^2) and stainless steel mesh ($5--30/m^2) are leading low-cost alternatives.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Economic |
| **Subcategory** | System Capital Costs |
| **Type** | number |
| **Unit** | $/m² |
| **Minimum** | 10 |
| **Maximum** | 1000 |

## Typical Values

- **Valid Range**: 1 -- 10000 USD/m^2
- **Graphite granules (anode)**: $5 -- 20/m^2
- **Carbon felt (anode)**: $10 -- 50/m^2
- **Carbon cloth (anode)**: $20 -- 100/m^2
- **Carbon brush (anode)**: $10 -- 50 per brush ($20 -- 100/m^2 projected)
- **Stainless steel mesh (anode or cathode)**: $5 -- 30/m^2
- **Activated carbon cathode**: $5 -- 30/m^2
- **Pt/C cathode (0.5 mg Pt/cm^2)**: $200 -- 500/m^2
- **MnO2 cathode**: $10 -- 50/m^2
- **Target for commercial viability**: < $50/m^2 total (anode + cathode)

## Measurement Methods

- **Supplier Quotation**: Prices obtained from electrode material suppliers (Fuel Cell Earth, Fuel Cell Store, AvCarb, SGL Carbon) for the specified material, size, and quantity. Bulk discounts of 20--50% available for orders > 100 m^2.
- **Cost Modeling**: For novel materials, cost is estimated from raw material prices, processing energy, and manufacturing labor. Material cost = raw material price * mass per m^2 + processing cost per m^2.

## Affecting Factors

### Primary

- **Catalyst Loading**: Pt loading of 0.5 mg/cm^2 costs $100--250/m^2 in catalyst alone. Reducing to 0.1 mg/cm^2 or eliminating Pt saves 80--100% of catalyst cost.
- **Manufacturing Volume**: Carbon cloth at lab quantities costs $50--100/m^2; at industrial quantities, $10--20/m^2.
- **Surface Treatment**: Surface modifications (acid treatment, nitrogen doping, electrodeposition) add $5--50/m^2 in processing cost.
- **Substrate Material**: Carbon paper ($50--200/m^2) is more expensive than carbon cloth ($20--100/m^2) or stainless steel mesh ($5--30/m^2).

## Related Parameters

- **name**: [Capital Cost](capitalcost.md)

- **relationship**: Electrodes as major CAPEX component
- **name**: [Electrode Replacement Interval](../operational/electrode-replacement-interval.md)

- **relationship**: Replacement frequency
- **name**: [Maintenance Cost](maintenance-cost.md)

- **relationship**: Replacement labor and materials
- **name**: [Cost Per Watt](costperwatt.md)

- **relationship**: Electrode cost per unit power
- **name**: [Membrane Cost](membrane-cost.md)

- **relationship**: Complementary material cost

## Compatible Systems

Capital Cost Parameters

## References

- Wei, J., Liang, P., Huang, X. (2011). "Recent progress in electrodes for microbial fuel cells." Bioresource Technology, 102(20), 9335-9344.
- Rozendal, R.A. et al. (2008). "Towards practical implementation of bioelectrochemical wastewater treatment." Trends in Biotechnology, 26(8), 450-459.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Electrode+Cost&body=**Parameter%3A**+Electrode+Cost%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Felectrode-cost.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Electrode+Cost&body=**Parameter%3A**+Electrode+Cost%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Felectrode-cost.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Electrode+Cost&body=**Parameter%3A**+Electrode+Cost%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Felectrode-cost.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
