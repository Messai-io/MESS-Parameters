# Insurance Cost

Insurance cost is the annual premium for insuring an MES installation against property damage, equipment breakdown, liability claims, and business interruption. Expressed as a percentage of total capital cost per year or in USD per year, insurance is a fixed operating cost that must be included in techno-economic analyses. MES installations, as water treatment infrastructure with electrical components in contact with aqueous environments, require specialized coverage.

Insurance for wastewater treatment facilities typically includes: property insurance (covering physical damage from fire, flood, storm), equipment breakdown insurance (covering mechanical and electrical failure), general liability (covering third-party injury or property damage), environmental liability (covering pollution incidents), and workers' compensation. For novel technologies like MES, insurance premiums may be higher due to lack of actuarial data and perceived technology risk.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Economic |
| **Subcategory** | Fixed Operating Costs |
| **Type** | number |
| **Unit** | %/year |
| **Minimum** | 0.5 |
| **Maximum** | 5 |

## Typical Values

- **Valid Range**: 0.5 -- 5% of total capital cost per year
- **Standard property insurance**: 0.5 -- 1.5% of replacement value/year
- **Equipment breakdown**: 0.2 -- 0.5% of equipment value/year
- **General liability**: $1000 -- 10000/year (depends on scale)
- **Environmental liability**: 0.1 -- 0.5% of capital/year
- **Total insurance cost (MES)**: 1 -- 3% of capital/year
- **Conventional WWTP (reference)**: 1 -- 2% of capital/year
- **Novel technology surcharge**: +0.5 -- 1% above standard rates

## Measurement Methods

- **Insurance Broker Quotation**: An insurance broker specializing in industrial/utility assets provides premium quotes based on: asset value, location, technology type, safety record, and coverage requirements.
- **Percentage Estimation**: For TEA purposes, insurance is estimated as 1--3% of total capital cost per year. This range is used when actual quotes are unavailable.

## Affecting Factors

### Primary

- **Technology Maturity**: Novel technologies command higher premiums (additional 0.5--1%) due to limited loss history data.
- **Location Risk**: Flood zones, earthquake zones, and hurricane-prone areas increase property premiums 50--200%.
- **Safety Record**: MES with hydrogen production (MEC) may have higher premiums due to explosion risk.
- **Asset Value**: Premiums scale with total insured value but not linearly (decreasing rate per dollar at higher values).

## Related Parameters

- **name**: [Operating Cost](operatingcost.md)

- **relationship**: Insurance as OPEX component
- **name**: [Overhead Cost](overhead-cost.md)

- **relationship**: Administrative cost category
- **name**: [Safety Incidents](safety-incidents.md)

- **relationship**: Affect future premiums
- **name**: [Total Capital Cost](total-capital-cost.md)

- **relationship**: Basis for premium calculation

## Compatible Systems

Operating Cost Parameters

## References

- Peters, M.S., Timmerhaus, K.D., West, R.E. (2003). Plant Design and Economics for Chemical Engineers, 5th ed. McGraw-Hill.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Insurance+Cost&body=**Parameter%3A**+Insurance+Cost%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Finsurance-cost.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Insurance+Cost&body=**Parameter%3A**+Insurance+Cost%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Finsurance-cost.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Insurance+Cost&body=**Parameter%3A**+Insurance+Cost%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Finsurance-cost.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
