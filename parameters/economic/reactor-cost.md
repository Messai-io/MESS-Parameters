# Reactor Cost

Reactor cost is the expense for the physical housing/enclosure of an MES, including the chamber body, gaskets, seals, ports, fittings, and structural support. Expressed in USD per unit or per m^3 of reactor volume, the reactor housing typically represents 10--20% of total equipment cost. Material choices include acrylic/polycarbonate (lab), polypropylene/HDPE (pilot), stainless steel (industrial), and glass (specialized).

Reactor cost is strongly scale-dependent. Custom-machined acrylic reactors for lab research cost $50--500 per unit ($2000--20000/m^3 volume) due to skilled labor and material waste. Injection-molded PP reactors for mass production could cost $1--10 per unit ($100--1000/m^3) at volumes of 10000+ units, achieving 90--95% cost reduction through manufacturing scale.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Economic |
| **Subcategory** | System Capital Costs |
| **Type** | number |
| **Unit** | $ |
| **Minimum** | 50 |
| **Maximum** | 1000000 |

## Typical Values

- **Valid Range**: 10 -- 50000 USD per m^3
- **Custom acrylic (lab, machined)**: $2000 -- 20000/m^3
- **3D printed (lab prototype)**: $500 -- 5000/m^3
- **Injection-molded PP (mass production)**: $100 -- 1000/m^3
- **Stainless steel 316L (pilot/industrial)**: $500 -- 5000/m^3
- **HDPE fabricated (pilot)**: $200 -- 2000/m^3
- **Glass bottle (H-type MFC)**: $50 -- 200 per reactor
- **Fraction of equipment cost**: 10 -- 20%
- **Target for commercial viability**: < $500/m^3

## Measurement Methods

- **Supplier/Fabrication Quote**: Reactor costs are obtained from custom fabrication shops (acrylic), plastic fabricators (PP, HDPE), or metal fabricators (SS). Tooling costs for injection molding ($10000--100000 per mold) are amortized over production volume.
- **Material Cost Estimation**: Material cost = volume * wall thickness * material density * material price per kg. Add 50--200% for fabrication labor and overhead.

## Affecting Factors

### Primary

- **Manufacturing Method**: CNC machining ($high) vs. injection molding ($low at volume) vs. 3D printing ($moderate).
- **Material Selection**: Acrylic ($5--10/kg) vs. PP ($1--3/kg) vs. SS316L ($5--15/kg).
- **Production Volume**: 1 unit = $500; 100 units = $100; 10000 units = $10 (injection molded).
- **Complexity**: Simple rectangular designs cost less than complex curved geometries.

## Related Parameters

- **name**: [Capital Cost](capitalcost.md)

- **relationship**: Reactor as CAPEX component
- **name**: [Device Volume](../operational/device-volume.md)

- **relationship**: Physical size
- **name**: [Module Size](../operational/module-size.md)

- **relationship**: Unit module dimensions
- **name**: [Electrode Cost](electrode-cost.md)

- **relationship**: Complementary component cost

## Compatible Systems

Capital Cost Parameters

## References

- Sleutels, T.H.J.A. et al. (2012). "Bio-electrochemical systems: An outlook for practical applications." ChemSusChem, 5(6), 1012-1019.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Reactor+Cost&body=**Parameter%3A**+Reactor+Cost%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Freactor-cost.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Reactor+Cost&body=**Parameter%3A**+Reactor+Cost%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Freactor-cost.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Reactor+Cost&body=**Parameter%3A**+Reactor+Cost%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Freactor-cost.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
