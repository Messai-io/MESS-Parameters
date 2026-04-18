# Commissioning Cost

Commissioning cost is the expense associated with testing, validating, and bringing an MES installation from completed construction to stable, productive operation. This includes pre-commissioning checks (leak testing, electrical verification), wet commissioning (filling with water, pump testing, instrument calibration), biological startup (inoculation, biofilm development, performance optimization), operator training, and documentation (as-built drawings, operating manuals). Commissioning is a critical project phase because MES require extended biological startup periods (2--8 weeks) that exceed those of most conventional treatment technologies.

The biological startup phase is the most MES-specific and costly component of commissioning. Unlike conventional treatment plants that can achieve design performance within days of reaching hydraulic loading, MES require weeks for electroactive biofilm development before reaching stable power or hydrogen output. During this period, continuous monitoring, frequent sampling, and process adjustments are needed, requiring dedicated technical personnel.

Commissioning costs for MES are typically estimated at 5--15% of total capital cost for pilot installations and 3--8% for full-scale installations where standardized commissioning procedures reduce unit costs.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Economic |
| **Subcategory** | Installation Costs |
| **Type** | number |
| **Unit** | $ |
| **Minimum** | 0 |
| **Maximum** | 100000 |

## Typical Values

- **Valid Range**: 0 -- 500000 USD
- **Lab system**: $0 (self-commissioned by researcher)
- **Pilot system (10--1000 L)**: $5000 -- 50000
- **Full-scale (1 MLD)**: $50000 -- 500000
- **Fraction of total CAPEX**: 3 -- 15%
- **Biological startup duration**: 2 -- 8 weeks
- **Personnel requirement**: 1 -- 3 technicians full-time during commissioning
- **Training cost**: $2000 -- 10000 per operator

## Measurement Methods

- **Activity-Based Costing**: Each commissioning activity is listed with duration, personnel requirements, and materials needed. Cost = sum of (labor hours * rate + materials + testing costs + subcontractor fees). A detailed commissioning schedule (Gantt chart) provides the basis.
- **Percentage Estimation**: For preliminary estimates, commissioning cost = 5--15% of total equipment and installation cost. The higher percentage applies to first-of-a-kind installations; lower for repeat designs.

## Affecting Factors

### Primary

- **System Novelty**: First installations require more troubleshooting and optimization (10--15% of CAPEX). Repeat installations with proven designs are faster (3--5%).
- **Inoculum Availability**: Pre-acclimated inoculum from an existing MES reduces biological startup from 4--8 weeks to 1--2 weeks.
- **Automation Level**: Highly automated systems require more instrumentation calibration but less ongoing operator intervention.
- **Operator Experience**: Experienced MES operators commission faster. First-time operators require more training and support.

## Related Parameters

- **name**: [Total Capital Cost](total-capital-cost.md)

- **relationship**: Commissioning as CAPEX component
- **name**: [Startup Mode](../operational/startup-mode.md)

- **relationship**: Biological startup protocol
- **name**: [Labor Cost](labor-cost.md)

- **relationship**: Personnel during commissioning
- **name**: [Installation Factor](installation-factor.md)

- **relationship**: Overall installation multiplier

## Compatible Systems

Capital Cost Parameters

## References

- Peters, M.S., Timmerhaus, K.D., West, R.E. (2003). Plant Design and Economics for Chemical Engineers, 5th ed. McGraw-Hill.
- ASHRAE (2013). "Commissioning Process" ASHRAE Guideline 0-2013.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Commissioning+Cost&body=**Parameter%3A**+Commissioning+Cost%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fcommissioning-cost.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Commissioning+Cost&body=**Parameter%3A**+Commissioning+Cost%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fcommissioning-cost.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Commissioning+Cost&body=**Parameter%3A**+Commissioning+Cost%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fcommissioning-cost.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
