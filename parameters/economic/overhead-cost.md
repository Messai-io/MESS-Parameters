# Overhead Cost

Overhead cost encompasses indirect expenses that support MES operation but are not directly attributable to specific treatment activities. This includes administrative salaries, office space, accounting, legal, IT support, regulatory compliance, permit fees, environmental monitoring, and general facility upkeep. Expressed as a percentage of direct operating costs (typically 10--20%) or in USD per year, overhead costs are often underestimated in techno-economic analyses but represent a significant and unavoidable operating expense.

For MES, overhead costs include: environmental compliance monitoring and reporting, discharge permit fees, technology license fees (if applicable), data management and reporting systems, safety training and compliance, and corporate/administrative support allocation.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Economic |
| **Subcategory** | Fixed Operating Costs |
| **Type** | number |
| **Unit** | %/year |
| **Minimum** | 5 |
| **Maximum** | 20 |

## Typical Values

- **Valid Range**: 5 -- 30% of direct operating costs
- **Small pilot (academic setting)**: 5 -- 10% of direct costs
- **Municipal utility operation**: 10 -- 20% of direct costs
- **Private company operation**: 15 -- 25% of direct costs
- **Permit fees**: $1000 -- 50000/year
- **Environmental monitoring**: $5000 -- 50000/year
- **IT/data management**: $2000 -- 20000/year
- **Fraction of total OPEX**: 8 -- 20%

## Measurement Methods

- **Allocation Method**: Total overhead expenses are allocated to the MES based on its share of total utility or company operations (by revenue, flow volume, or cost center). Overhead rate = total overhead / total direct costs * 100%.
- **Activity-Based Costing**: Overhead activities are traced to the MES based on actual resource consumption. More accurate than simple allocation but more complex to implement.

## Affecting Factors

### Primary

- **Organizational Structure**: Municipal utilities have lower overhead (10--15%) than private companies (15--25%) due to shared infrastructure.
- **Regulatory Burden**: Stringent environmental regulations increase compliance and monitoring overhead.
- **Scale**: Overhead per m^3 decreases with scale as fixed administrative costs are spread over more volume.

## Related Parameters

- **name**: [Operating Cost](operatingcost.md)

- **relationship**: Total OPEX including overhead
- **name**: [Labor Cost](labor-cost.md)

- **relationship**: Direct labor (distinct from overhead)
- **name**: [Insurance Cost](insurance-cost.md)

- **relationship**: Often included in overhead

## Compatible Systems

Operating Cost Parameters

## References

- Peters, M.S., Timmerhaus, K.D., West, R.E. (2003). Plant Design and Economics for Chemical Engineers, 5th ed. McGraw-Hill.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Overhead+Cost&body=**Parameter%3A**+Overhead+Cost%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Foverhead-cost.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Overhead+Cost&body=**Parameter%3A**+Overhead+Cost%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Foverhead-cost.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Overhead+Cost&body=**Parameter%3A**+Overhead+Cost%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Foverhead-cost.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
