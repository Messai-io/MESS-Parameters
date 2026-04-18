# Specific Capital Cost

Specific capital cost normalizes the total capital investment to a functional unit, enabling comparison across different MES scales and competing technologies. Common normalization bases include: USD per m^3/d of treatment capacity, USD per m^3 of reactor volume, USD per m^2 of electrode area, and USD per W of power capacity. The choice of normalization basis depends on the primary MES function (treatment, power generation, hydrogen production, or desalination).

For wastewater treatment comparisons, USD per m^3/d of design capacity is the most useful metric because it directly relates to the treatment service provided. For energy comparisons, USD per W (cost per watt) is more appropriate. Using multiple normalization bases provides a comprehensive economic profile.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Economic |
| **Subcategory** | System Capital Costs |
| **Type** | number |
| **Unit** | $/kW |
| **Minimum** | 100 |
| **Maximum** | 10000 |

## Typical Values

- **Valid Range**: 10 -- 100000 (units vary by basis)
- **Per m^3/d capacity (lab)**: $5000 -- 50000/m^3/d
- **Per m^3/d capacity (pilot)**: $1000 -- 10000/m^3/d
- **Per m^3/d capacity (target)**: $500 -- 2000/m^3/d
- **Per m^3 reactor volume**: $500 -- 50000/m^3
- **Per m^2 electrode area**: $100 -- 5000/m^2
- **Per watt of power**: $500 -- 100000/W
- **Activated sludge (reference)**: $1000 -- 3000 per m^3/d
- **MBR (reference)**: $2000 -- 5000 per m^3/d
- **Anaerobic digestion (reference)**: $2000 -- 8000 per m^3/d

## Measurement Methods

- **Direct Calculation**: Specific capital cost = total capital cost / functional capacity. Total capital cost from detailed estimate or vendor quotes. Functional capacity from design specifications or measured performance.
- **Benchmarking**: Compare specific capital costs with published values for similar-scale MES and competing technologies. Literature surveys provide ranges for different scales and configurations.

## Affecting Factors

### Primary

- **Scale**: Specific cost decreases with scale (economy of scale, exponent 0.6--0.8). A 10x scale increase reduces specific cost by 50--60%.
- **Material Selection**: Low-cost materials (AC cathode, ceramic separator, SS housing) reduce specific cost by 3--10x.
- **HRT**: Shorter HRT increases treatment capacity per unit volume, reducing specific cost per m^3/d.
- **Performance Level**: Higher power density reduces $/W; higher treatment rate reduces $/m^3/d.

## Related Parameters

- **name**: [Capital Cost](capitalcost.md)

- **relationship**: Absolute capital investment
- **name**: [Total Capital Cost](total-capital-cost.md)

- **relationship**: Fully loaded CAPEX
- **name**: [Cost Per Watt](costperwatt.md)

- **relationship**: Power-normalized cost
- **name**: [Pilot-to-Industrial Factor](../operational/pilot-to-industrial-factor.md)

- **relationship**: Scaling estimation

## Compatible Systems

Capital Cost Parameters

## References

- Rozendal, R.A. et al. (2008). "Towards practical implementation of bioelectrochemical wastewater treatment." Trends in Biotechnology, 26(8), 450-459.
- Sleutels, T.H.J.A. et al. (2012). "Bio-electrochemical systems: An outlook for practical applications." ChemSusChem, 5(6), 1012-1019.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Specific+Capital+Cost&body=**Parameter%3A**+Specific+Capital+Cost%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fspecific-capital-cost.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Specific+Capital+Cost&body=**Parameter%3A**+Specific+Capital+Cost%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fspecific-capital-cost.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Specific+Capital+Cost&body=**Parameter%3A**+Specific+Capital+Cost%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fspecific-capital-cost.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
