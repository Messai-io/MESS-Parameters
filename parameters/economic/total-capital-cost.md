# Total Capital Cost

Total capital cost (TCC) is the all-inclusive investment required to deliver an operational MES, including purchased equipment cost (PEC), installation, civil works, engineering and design, permitting, commissioning, owner's costs, and contingency. TCC = PEC * installation factor + civil works + engineering + commissioning + contingency. This fully-loaded cost is the basis for annualized capital cost calculations, ROI analysis, and financing decisions.

TCC significantly exceeds the equipment-only cost by a factor of 2--5x, and failure to account for all cost components leads to severely underestimated project budgets. For first-of-a-kind MES installations, contingency should be 20--30% of estimated costs to account for unforeseen challenges.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Economic |
| **Subcategory** | System Capital Costs |
| **Type** | number |
| **Unit** | $ |
| **Minimum** | 100 |
| **Maximum** | 10000000 |

## Typical Values

- **Valid Range**: 1000 -- 100000000 USD
- **Lab system (complete setup)**: $5000 -- 50000
- **Pilot system (10--1000 L)**: $50000 -- 500000
- **Demonstration system (1--10 m^3/d)**: $200000 -- 2000000
- **Full-scale (1 MLD, projected)**: $1M -- 10M
- **Equipment cost fraction of TCC**: 30 -- 50%
- **Installation fraction**: 15 -- 25%
- **Civil works fraction**: 15 -- 35%
- **Engineering fraction**: 5 -- 15%
- **Commissioning fraction**: 3 -- 10%
- **Contingency**: 10 -- 30%

## Measurement Methods

- **Detailed Cost Estimate (Class 3-5)**: Bottom-up estimation with itemized equipment list, vendor quotes, installation labor estimates, civil engineering estimates, and engineering hours. Accuracy: +/- 10% (Class 3) to +/- 30--50% (Class 5 conceptual).
- **Factored Estimate**: TCC = PEC * Lang factor. Lang factors for MES: 2.5--4.0 for modular systems, 3.5--5.0 for custom installations.

## Affecting Factors

### Primary

- **Equipment Cost**: Dominates TCC. Electrode and membrane material choices have the largest impact.
- **Installation Complexity**: Modular pre-assembled systems reduce installation fraction by 30--50%.
- **Location**: Construction costs vary 2--5x globally.
- **First-of-a-Kind Premium**: First installations cost 30--50% more than repeat installations due to learning curve.
- **Financing Costs**: Interest during construction (IDC) adds 5--15% for projects with 1+ year construction.

## Related Parameters

- **name**: [Capital Cost](capitalcost.md)

- **relationship**: Equipment-only cost
- **name**: [Specific Capital Cost](specific-capital-cost.md)

- **relationship**: Normalized TCC
- **name**: [Installation Factor](installation-factor.md)

- **relationship**: Equipment-to-installed multiplier
- **name**: [Civil Works Cost](civil-works-cost.md)

- **relationship**: Site construction component
- **name**: [Commissioning Cost](commissioning-cost.md)

- **relationship**: Startup component
- **name**: [Internal Rate of Return](internal-rate-return.md)

- **relationship**: Financial viability metric

## Compatible Systems

Capital Cost Parameters

## References

- Peters, M.S., Timmerhaus, K.D., West, R.E. (2003). Plant Design and Economics for Chemical Engineers, 5th ed. McGraw-Hill.
- AACE International (2020). "Cost Estimate Classification System." Recommended Practice 18R-97.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Total+Capital+Cost&body=**Parameter%3A**+Total+Capital+Cost%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Ftotal-capital-cost.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Total+Capital+Cost&body=**Parameter%3A**+Total+Capital+Cost%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Ftotal-capital-cost.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Total+Capital+Cost&body=**Parameter%3A**+Total+Capital+Cost%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Ftotal-capital-cost.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
