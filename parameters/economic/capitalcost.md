# capitalCost

Capital cost (CAPEX) is the total upfront investment required to design, procure, construct, and commission a microbial electrochemical system (MES), expressed in USD, EUR, or other currency. This encompasses equipment purchase (reactors, electrodes, membranes, pumps, instrumentation), engineering and design fees, site preparation, installation labor, piping and electrical work, and startup costs. Capital cost is the largest single barrier to MES commercialization and is the primary input to annualized cost calculations and levelized cost comparisons with competing technologies.

MES capital costs are dominated by the reactor components: electrodes (anode and cathode) typically represent 30--50% of equipment cost, membranes 10--25%, reactor housing 10--20%, and balance-of-plant (pumps, plumbing, electronics) 15--30%. The high cost of electrode materials (especially platinum-based cathode catalysts at $50--500/m^2 and ion exchange membranes at $50--500/m^2) is the primary cost driver. Research into low-cost alternatives (activated carbon cathodes at $1--10/m^2, ceramic separators at $5--20/m^2, stainless steel electrodes at $5--30/m^2) is critical for cost reduction.

Capital cost estimates for MES vary enormously in the literature, from $500/m^3 reactor volume for simple lab designs to $50,000/m^3 for fully engineered pilot systems. At commercial scale, target capital costs of $500--2000/m^3 of daily treatment capacity (m^3/d) are needed to compete with conventional wastewater treatment ($1000--3000/m^3/d for activated sludge).

## Basic Information

| Property | Value |
|---|---|
| **Category** | Economic |
| **Type** | number |
| **Unit** | USD |
| **Papers Reporting** | 1 |

## Typical Values

- **Valid Range**: 100 -- 100000 USD per m^3 reactor volume
- **Lab-scale MFC (materials only)**: $500 -- 5000/m^3
- **Bench-scale MFC (complete system)**: $5000 -- 20000/m^3
- **Pilot-scale MFC**: $2000 -- 50000/m^3
- **Commercial target**: $500 -- 2000 per m^3/d capacity
- **Activated sludge (reference)**: $1000 -- 3000 per m^3/d
- **Membrane bioreactor (reference)**: $2000 -- 5000 per m^3/d
- **Electrode cost fraction**: 30 -- 50% of equipment cost
- **Membrane cost fraction**: 10 -- 25% of equipment cost
- **Installation factor**: 1.5 -- 3.0x equipment cost

## Measurement Methods

- **Bottom-Up Cost Estimation**: Each component is priced individually from manufacturer quotes or price databases. Installation costs are estimated using standard factors (Lang factor 3--5 for process equipment). Engineering and contingency are added as percentages (10--20% each).
- **Analogous Cost Estimation**: Cost is estimated by scaling from known costs of similar-scale MES or analogous technologies (electrodialysis, MBR) using the six-tenths rule: Cost_new = Cost_known * (Capacity_new / Capacity_known)^0.6.
- **Vendor Quotes**: For pilot and commercial systems, equipment vendors provide budgetary quotes (+/- 30%) or firm quotes (+/- 10%) for major equipment items.

## Affecting Factors

### Primary

- **Electrode Material**: Platinum cathodes ($200--500/m^2) vs. activated carbon ($1--10/m^2) can create a 10--50x cost difference in the cathode component.
- **Membrane Choice**: Nafion ($200--500/m^2) vs. ceramic separator ($5--20/m^2) creates a 10--25x cost difference. Membraneless designs eliminate this cost entirely.
- **Scale**: Capital cost per unit capacity decreases with scale (economy of scale, exponent 0.6--0.8).
- **Manufacturing Volume**: Mass production of standardized modules reduces per-unit cost by 30--70% compared to custom fabrication.
- **Location**: Construction costs vary 2--5x globally (labor rates, material availability, regulatory requirements).

## Related Parameters

- **name**: [Specific Capital Cost](specific-capital-cost.md)

- **relationship**: Normalized CAPEX
- **name**: [Total Capital Cost](total-capital-cost.md)

- **relationship**: Fully loaded CAPEX
- **name**: [Electrode Cost](electrode-cost.md)

- **relationship**: Electrode component cost
- **name**: [Membrane Cost](membrane-cost.md)

- **relationship**: Membrane component cost
- **name**: [Reactor Cost](reactor-cost.md)

- **relationship**: Housing component cost
- **name**: [Cost Per Watt](costperwatt.md)

- **relationship**: CAPEX per unit power

## References

- Rozendal, R.A. et al. (2008). "Towards practical implementation of bioelectrochemical wastewater treatment." Trends in Biotechnology, 26(8), 450-459.
- Sleutels, T.H.J.A. et al. (2012). "Bio-electrochemical systems: An outlook for practical applications." ChemSusChem, 5(6), 1012-1019.
- Ge, Z., He, Z. (2016). "Long-term performance of a 200 liter modularized microbial fuel cell system treating municipal wastewater." Bioresource Technology, 218, 38-44.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+capitalCost&body=**Parameter%3A**+capitalCost%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fcapitalcost.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+capitalCost&body=**Parameter%3A**+capitalCost%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fcapitalcost.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+capitalCost&body=**Parameter%3A**+capitalCost%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fcapitalcost.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
