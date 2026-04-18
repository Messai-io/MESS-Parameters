# Membrane Cost

Membrane cost is the purchase price of ion exchange membranes, proton exchange membranes, or separator materials used in MES, expressed in USD per m^2 of membrane area. Membranes represent 10--25% of total MES equipment cost and are the second most expensive material component after electrodes. The wide range of available membrane types and price points (from $1/m^2 for non-woven separators to $500/m^2 for Nafion) makes membrane selection a critical cost optimization decision.

Nafion (DuPont/Chemours) is the gold standard PEM for MES research, offering excellent proton conductivity and chemical stability, but its high cost ($200--500/m^2) is prohibitive at scale. Lower-cost alternatives include: Ultrex CMI-7000 ($50--150/m^2), heterogeneous ion exchange membranes ($20--80/m^2), ceramic separators ($5--20/m^2), non-woven fabric separators ($1--10/m^2), and porous textile separators ($0.50--5/m^2). Membraneless MES designs eliminate this cost entirely but sacrifice separation efficiency.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Economic |
| **Subcategory** | System Capital Costs |
| **Type** | number |
| **Unit** | $/m² |
| **Minimum** | 10 |
| **Maximum** | 500 |

## Typical Values

- **Valid Range**: 0 -- 1000 USD/m^2
- **Nafion 117/115**: $200 -- 500/m^2
- **Ultrex CMI-7000 (CEM)**: $50 -- 150/m^2
- **Fumasep FKS (CEM)**: $50 -- 100/m^2
- **Heterogeneous IEM**: $20 -- 80/m^2
- **Ceramic separator (fired clay)**: $5 -- 20/m^2
- **Non-woven fabric (J-cloth)**: $1 -- 10/m^2
- **Glass fiber separator**: $2 -- 15/m^2
- **No membrane (single-chamber)**: $0/m^2
- **Target for commercial viability**: < $20/m^2

## Measurement Methods

- **Supplier Quotation**: Prices from membrane manufacturers (DuPont, Fumatech, Membranes International, AMERIDIA) for specified type, size, and quantity. Bulk discounts of 20--40% for orders > 100 m^2.
- **Cost-Performance Analysis**: Membrane cost is evaluated alongside performance (proton conductivity, oxygen diffusion coefficient, fouling resistance) to determine cost-effectiveness: $/m^2 per unit of performance improvement.

## Affecting Factors

### Primary

- **Material Type**: Fluoropolymer membranes (Nafion) are 10--50x more expensive than non-fluorinated alternatives due to complex synthesis.
- **Manufacturing Volume**: Industrial-scale membrane production (roll-to-roll) reduces cost by 50--80% vs. lab-scale cutting from sheets.
- **Thickness**: Thinner membranes use less material but may compromise mechanical strength. Nafion 212 (50 um) is cheaper than Nafion 117 (183 um) per m^2.
- **Local Manufacturing**: Locally produced ceramic separators ($5/m^2) avoid import costs and provide supply chain resilience.

## Related Parameters

- **name**: [Capital Cost](capitalcost.md)

- **relationship**: Membrane as CAPEX component
- **name**: [Electrode Cost](electrode-cost.md)

- **relationship**: Complementary material cost
- **name**: [Membrane Replacement Interval](../operational/membrane-replacement-interval.md)

- **relationship**: Replacement frequency
- **name**: [Maintenance Cost](maintenance-cost.md)

- **relationship**: Replacement cost contribution
- **name**: [Membrane Pairs](../operational/membrane-pairs.md)

- **relationship**: Number of membranes needed

## Compatible Systems

Capital Cost Parameters

## References

- Harnisch, F., Schroder, U., Scholz, F. (2008). "The suitability of monopolar and bipolar ion exchange membranes as separators for biological fuel cells." Environmental Science & Technology, 42(5), 1740-1746.
- Winfield, J. et al. (2013). "Comparing the short and long term stability of biodegradable, ceramic and cation exchange membranes in microbial fuel cells." Bioresource Technology, 148, 480-486.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Membrane+Cost&body=**Parameter%3A**+Membrane+Cost%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fmembrane-cost.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Membrane+Cost&body=**Parameter%3A**+Membrane+Cost%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fmembrane-cost.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Membrane+Cost&body=**Parameter%3A**+Membrane+Cost%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fmembrane-cost.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
