# Hydrogen Revenue

Hydrogen revenue is the income from hydrogen gas produced by microbial electrolysis cells (MECs), expressed in USD per kg H2 or USD per m^3 of wastewater treated. Hydrogen is a high-value energy carrier ($2--8/kg for gray hydrogen, $4--12/kg for green hydrogen) and industrial chemical feedstock, making MEC-based hydrogen production potentially more economically attractive than MFC electricity generation.

MECs produce hydrogen at the cathode by applying a small supplementary voltage (0.2--1.0 V) to the bioelectrochemical cell. Typical hydrogen production rates are 0.1--10 m^3 H2/m^3 reactor/d, with cathodic hydrogen recovery (rCAT) of 60--95%. The energy efficiency of MEC hydrogen production (ratio of hydrogen energy content to total electrical input) can exceed 100% because the biological anode contributes energy from organic matter oxidation, effectively using wastewater as a co-substrate for hydrogen production.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Economic |
| **Subcategory** | Revenue Streams |
| **Type** | number |
| **Unit** | $/kg |
| **Minimum** | 0 |
| **Maximum** | 10 |

## Typical Values

- **Valid Range**: 0 -- 10 USD/m^3 treated
- **Hydrogen price (gray, SMR)**: $1 -- 3/kg
- **Hydrogen price (green, electrolysis)**: $4 -- 12/kg
- **MEC H2 production rate**: 0.1 -- 10 m^3 H2/m^3/d
- **H2 per m^3 WW treated (6 h HRT)**: 0.5 -- 5 L H2/L WW
- **Revenue per m^3 treated**: $0.01 -- 0.50
- **Revenue at $5/kg H2**: $0.04/g H2 produced
- **Overall energy efficiency**: 200 -- 600% (including substrate energy)
- **Cathodic H2 recovery (rCAT)**: 60 -- 95%

## Measurement Methods

- **Gas Collection and Analysis**: Hydrogen is collected in gas bags, gas-tight syringes, or through water displacement. Volume measured by water displacement or gas meter. Composition verified by GC-TCD (thermal conductivity detector). Purity typically 80--99% H2 (balance CO2, N2).
- **Production Rate Calculation**: H2 production rate = (collected volume * purity * P) / (R * T * V_reactor * time), where P is pressure, R is gas constant, T is temperature. Revenue = production rate * H2 price.

## Affecting Factors

### Primary

- **Applied Voltage**: Higher applied voltage (up to 1.0 V) increases H2 production rate but also increases electricity cost. Optimal balance at 0.4--0.8 V.
- **Cathode Catalyst**: Pt catalysts provide highest HER activity but are expensive. Stainless steel, Ni-Mo alloys, and MoS2 are lower-cost alternatives with 50--80% of Pt activity.
- **Hydrogen Purity**: Fuel cell applications require > 99.97% purity. Lower purity from MECs (80--95%) requires purification, adding cost.
- **Hydrogen Market Access**: Revenue depends on proximity to hydrogen consumers (fuel cell vehicles, industrial users, chemical plants).

## Related Parameters

- **name**: [Electricity Revenue](electricity-revenue.md)

- **relationship**: Alternative energy revenue (MFC)
- **name**: [Byproduct Revenue](byproduct-revenue.md)

- **relationship**: Other revenue streams
- **name**: [Energy Cost](energy-cost.md)

- **relationship**: Applied voltage energy cost
- **name**: [Mode](../operational/mode.md)

- **relationship**: MEC vs. MFC operating mode

## Compatible Systems

Economic Performance Indicators

## References

- Logan, B.E. et al. (2008). "Microbial electrolysis cells for high yield hydrogen gas production from organic matter." Environmental Science & Technology, 42(23), 8630-8640.
- Call, D., Logan, B.E. (2008). "Hydrogen production in a single chamber microbial electrolysis cell lacking a membrane." Environmental Science & Technology, 42(9), 3401-3406.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Hydrogen+Revenue&body=**Parameter%3A**+Hydrogen+Revenue%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fhydrogen-revenue.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Hydrogen+Revenue&body=**Parameter%3A**+Hydrogen+Revenue%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fhydrogen-revenue.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Hydrogen+Revenue&body=**Parameter%3A**+Hydrogen+Revenue%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fhydrogen-revenue.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
