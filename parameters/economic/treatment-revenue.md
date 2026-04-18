# Treatment Revenue

Treatment revenue is the income received for accepting and treating wastewater in an MES, expressed in USD per m^3 of wastewater treated. This is typically the largest single revenue stream for MES operated as wastewater treatment systems, often exceeding electricity, hydrogen, and byproduct revenues combined. Treatment revenue comes from wastewater disposal fees (tipping fees) charged to wastewater generators or from municipal sewer service charges.

Treatment revenue makes MES uniquely attractive compared to other distributed energy technologies: the "fuel" (wastewater) carries a negative cost because generators pay to have it treated. This means MES simultaneously solves a waste problem (generating revenue) and produces energy (an additional value stream). The treatment revenue effectively subsidizes the energy production function, making MES electricity or hydrogen cheaper than from standalone energy systems.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Economic |
| **Subcategory** | Revenue Streams |
| **Type** | number |
| **Unit** | $/m³ |
| **Minimum** | 0 |
| **Maximum** | 50 |

## Typical Values

- **Valid Range**: 0 -- 50 USD/m^3
- **Municipal sewer charge (US)**: $0.50 -- 3.00/m^3
- **Municipal sewer charge (EU)**: $1.00 -- 5.00/m^3
- **Industrial wastewater treatment fee**: $1 -- 20/m^3
- **Septage tipping fee**: $10 -- 50/m^3
- **Brewery wastewater**: $0.50 -- 5.00/m^3
- **Food processing wastewater**: $1 -- 15/m^3
- **Landfill leachate treatment**: $5 -- 50/m^3
- **Revenue as fraction of total MES income**: 50 -- 85%

## Measurement Methods

- **Fee Schedule**: Treatment fees are defined by contract (industrial customers) or municipal tariff (residential). Revenue = volume treated * fee per m^3.
- **Avoided Cost Analysis**: For on-site treatment (e.g., brewery treating its own wastewater), the revenue is the avoided cost of discharging to the municipal sewer or transporting to a centralized facility.

## Affecting Factors

### Primary

- **Wastewater Source**: Industrial wastewater commands higher treatment fees ($5--20/m^3) than municipal ($0.50--3/m^3) due to higher strength and regulatory requirements.
- **Regulatory Stringency**: Stricter discharge standards increase the value of treatment, raising fees.
- **Location**: Water treatment costs vary 5--10x globally. High-cost regions (Europe, Japan) provide more treatment revenue.
- **Treatment Quality**: Better effluent quality (meeting direct discharge vs. requiring post-treatment) commands higher fees.

## Related Parameters

- **name**: [Electricity Revenue](electricity-revenue.md)

- **relationship**: Complementary revenue
- **name**: [Hydrogen Revenue](hydrogen-revenue.md)

- **relationship**: Complementary revenue
- **name**: [Byproduct Revenue](byproduct-revenue.md)

- **relationship**: Complementary revenue
- **name**: [Operating Cost](operatingcost.md)

- **relationship**: Cost to offset with revenue
- **name**: [Wastewater Type](../operational/wastewater-type.md)

- **relationship**: Determines fee level

## Compatible Systems

Economic Performance Indicators

## References

- Ge, Z. et al. (2014). "Recovery of electrical energy in microbial fuel cells." Environmental Science & Technology Letters, 1(2), 137-141.
- GWI (2024). "Global Water Tariff Survey." Global Water Intelligence.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Treatment+Revenue&body=**Parameter%3A**+Treatment+Revenue%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Ftreatment-revenue.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Treatment+Revenue&body=**Parameter%3A**+Treatment+Revenue%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Ftreatment-revenue.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Treatment+Revenue&body=**Parameter%3A**+Treatment+Revenue%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Ftreatment-revenue.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
