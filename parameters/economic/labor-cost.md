# Labor Cost

Labor cost is the total expense for personnel involved in operating, maintaining, monitoring, and managing an MES installation. Expressed in USD per year or per m^3 treated, labor costs include wages/salaries, benefits, training, overtime, and contractor fees for operators, maintenance technicians, laboratory analysts, and management staff. Labor typically represents 20--40% of total MES operating costs.

MES operation requires operators with skills in both wastewater treatment and electrical/electrochemical systems, a combination not common in the existing wastewater workforce. Initial labor costs may be higher due to the learning curve and need for specialized training. As the technology matures and standard operating procedures are established, labor requirements will converge toward those of conventional treatment.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Economic |
| **Subcategory** | Fixed Operating Costs |
| **Type** | number |
| **Unit** | $/year |
| **Minimum** | 0 |
| **Maximum** | 1000000 |

## Typical Values

- **Valid Range**: 0 -- 500000 USD/year per MLD
- **Lab system (researcher time, not costed)**: $0 direct
- **Pilot system**: $20000 -- 80000/year (0.5--1 FTE)
- **Full-scale (1 MLD)**: $50000 -- 200000/year (1--3 FTE)
- **Operator salary (US)**: $35000 -- 65000/year
- **Maintenance technician (US)**: $40000 -- 70000/year
- **Labor cost per m^3 (full-scale)**: $0.05 -- 0.30
- **Activated sludge labor (reference)**: $0.05 -- 0.20/m^3
- **Fraction of OPEX**: 20 -- 40%

## Measurement Methods

- **Payroll Analysis**: Total labor cost = sum of (salary + benefits + overhead) for all personnel allocated to MES operation. Benefits typically add 25--40% to base salary. Overhead (office, HR, administration) adds 10--20%.
- **Time-Motion Study**: Detailed tracking of operator activities and time allocation determines the actual labor requirement per task (monitoring, sampling, maintenance, reporting). This identifies opportunities for labor optimization.

## Affecting Factors

### Primary

- **Automation Level**: Fully automated systems reduce operator hours by 50--70% compared to manual systems.
- **Scale**: Labor cost per m^3 decreases with scale. One operator can manage a larger system with appropriate automation.
- **Location**: Wage rates vary 5--20x globally. Labor costs are 50--80% lower in developing countries.
- **Maintenance Frequency**: More frequent component replacement increases maintenance labor.

## Related Parameters

- **name**: [Operating Cost](operatingcost.md)

- **relationship**: Total OPEX including labor
- **name**: [Jobs Created](jobs-created.md)

- **relationship**: Employment metric
- **name**: [Maintenance Cost](maintenance-cost.md)

- **relationship**: Maintenance labor component
- **name**: [Overhead Cost](overhead-cost.md)

- **relationship**: Administrative support

## Compatible Systems

Operating Cost Parameters

## References

- WEF (2018). Design of Water Resource Recovery Facilities, MOP 8, 6th ed.
- US Bureau of Labor Statistics (2024). "Occupational Employment and Wage Statistics."

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Labor+Cost&body=**Parameter%3A**+Labor+Cost%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Flabor-cost.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Labor+Cost&body=**Parameter%3A**+Labor+Cost%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Flabor-cost.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Labor+Cost&body=**Parameter%3A**+Labor+Cost%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Flabor-cost.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
