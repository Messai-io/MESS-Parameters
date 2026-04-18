# Byproduct Revenue

Byproduct revenue is the income generated from the sale of valuable secondary products recovered during MES operation, beyond the primary products of electricity (MFC) or hydrogen (MEC). MES can produce multiple value streams simultaneously, and the economic viability of the technology often depends on monetizing these byproducts. Key byproducts include: treated water suitable for reuse (irrigation, industrial cooling), recovered nutrients (struvite from phosphorus, ammonium sulfate from nitrogen), biogas (methane from anaerobic side reactions), caustic soda (NaOH from cathodic alkalization), and biosynthesized chemicals (acetate, ethanol from microbial electrosynthesis).

The ability to generate multiple revenue streams from a single process is a distinctive advantage of MES over conventional wastewater treatment, which typically treats waste at a cost with no revenue. In techno-economic analyses, byproduct revenues of $0.05--0.50 per m^3 of wastewater treated can significantly improve the economic feasibility of MES, potentially covering 20--80% of operating costs.

The actual byproduct revenue depends on local market conditions, product purity requirements, and the cost of recovery and purification. For example, struvite (MgNH4PO4) has a fertilizer market value of $200--600/ton, but recovery requires chemical dosing (MgCl2) and process control that add to operating costs.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Economic |
| **Subcategory** | Revenue Streams |
| **Type** | number |
| **Unit** | $/kg |
| **Minimum** | 0 |
| **Maximum** | 100 |

## Typical Values

- **Valid Range**: 0 -- 50 USD/m^3 treated
- **Treated water for irrigation**: $0.01 -- 0.10/m^3
- **Treated water for industrial reuse**: $0.10 -- 1.00/m^3
- **Struvite (nutrient recovery)**: $200 -- 600/ton ($0.01 -- 0.05/m^3)
- **Methane (biogas)**: $0.05 -- 0.20/m^3 treated
- **Caustic soda (NaOH)**: $200 -- 500/ton
- **Hydrogen (MEC)**: $2 -- 8/kg ($0.02 -- 0.50/m^3)
- **Carbon credits**: $5 -- 100/ton CO2 ($0.01 -- 0.05/m^3)
- **Total byproduct revenue (optimistic)**: $0.10 -- 1.00/m^3

## Measurement Methods

- **Market Price Survey**: Current market prices for each byproduct are obtained from commodity databases (ICIS, Alibaba, local agricultural markets). Prices are updated quarterly to reflect market volatility.
- **Product Quality and Quantity Analysis**: The quantity and quality (purity, composition) of each byproduct is measured analytically. Struvite is analyzed by XRD and elemental analysis; biogas by GC; treated water by standard effluent analysis. Product quantity per m^3 treated is calculated.
- **Revenue Calculation**: Revenue = product quantity * market price - recovery cost (chemicals, energy, labor). Net byproduct revenue per m^3 is reported.

## Affecting Factors

### Primary

- **Wastewater Composition**: High-nutrient wastewater enables struvite recovery. High-COD wastewater increases biogas potential.
- **Local Markets**: Water-scarce regions value treated water highly. Agricultural regions value nutrient recovery.
- **Recovery Efficiency**: Higher recovery rates (> 80%) improve revenue but may require more energy and chemicals.
- **Regulatory Framework**: Water reuse regulations and fertilizer standards affect marketability of byproducts.
- **Scale**: Economies of scale in byproduct recovery reduce per-unit costs at larger installations.

## Related Parameters

- **name**: [Electricity Revenue](electricity-revenue.md)

- **relationship**: Primary MFC revenue
- **name**: [Hydrogen Revenue](hydrogen-revenue.md)

- **relationship**: Primary MEC revenue
- **name**: [Treatment Revenue](treatment-revenue.md)

- **relationship**: Wastewater treatment fees
- **name**: [Carbon Credit Revenue](carbon-credit-revenue.md)

- **relationship**: Emissions reduction value
- **name**: [Water Reuse Rate](water-reuse-rate.md)

- **relationship**: Treated water reuse potential

## Compatible Systems

Economic Performance Indicators

## References

- Ge, Z., Li, J., Xiao, L., Tong, Y., He, Z. (2014). "Recovery of electrical energy in microbial fuel cells." Environmental Science & Technology Letters, 1(2), 137-141.
- Puyol, D. et al. (2017). "Resource recovery from wastewater by biological technologies: opportunities, challenges, and prospects." Frontiers in Microbiology, 7, 2106.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Byproduct+Revenue&body=**Parameter%3A**+Byproduct+Revenue%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fbyproduct-revenue.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Byproduct+Revenue&body=**Parameter%3A**+Byproduct+Revenue%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fbyproduct-revenue.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Byproduct+Revenue&body=**Parameter%3A**+Byproduct+Revenue%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fbyproduct-revenue.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
