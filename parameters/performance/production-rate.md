# Production Rate

Production rate quantifies the volumetric productivity of a microbial electrochemical system (MES) for chemical product synthesis, expressed in grams of product per liter of reactor volume per hour (g/L/h). This parameter measures the space-time yield of the bioelectrochemical process and is the primary metric for comparing MES productivity with conventional chemical synthesis or fermentation processes.

In microbial electrosynthesis, the production rate is determined by the interplay of cathodic current density (electron supply rate), faradaic efficiency (fraction of electrons directed to the target product), and the specific productivity of the cathodic biofilm or catalyst. The production rate can also be expressed per unit electrode area (g/m^2/h) for electrode-focused comparisons.

Production rate is economically critical because it determines the reactor volume needed to achieve a target production capacity, directly affecting capital cost. A production rate of 1 g/L/h means that producing 1 tonne/day of product requires a 42 m^3 reactor. Increasing the rate 10-fold reduces the required reactor to 4.2 m^3. Current MES production rates (0.01-1 g/L/h) are 10-100x lower than industrial fermentation (1-10 g/L/h), representing the key barrier to commercialization of MES chemical synthesis.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Performance |
| **Subcategory** | Chemical Synthesis |
| **Type** | number |
| **Unit** | g/L/h |
| **Minimum** | 0 |
| **Maximum** | 10 |
| **Papers Reporting** | 6 |

## Typical Values

- **Valid Range**: 0 g/L/h to 10 g/L/h
- **Typical Range**: 0.01 g/L/h to 1 g/L/h
- **Acetate from CO2 (MES biocathode)**: 0.01-0.5 g/L/h
- **Butyrate from CO2 (MES)**: 0.005-0.05 g/L/h
- **Caproate from chain elongation**: 0.01-0.1 g/L/h
- **H2O2 from cathode ORR**: 0.05-0.5 g/L/h
- **Ethanol (MES)**: 0.001-0.05 g/L/h
- **Conventional acetate fermentation (comparison)**: 1-5 g/L/h
- **Industrial chemical synthesis (comparison)**: 10-1000 g/L/h
- **Target for MES commercialization**: > 1 g/L/h

## Measurement Methods

- **Time-Course Product Analysis**: Product concentration is measured at regular intervals (every 1-6 hours for batch systems; at steady state for continuous systems) using HPLC, GC, or IC. Production rate = (delta concentration) / (delta time) for batch, or = (effluent concentration x flow rate) / (reactor volume) for continuous operation.
- **Continuous Online Monitoring**: For gaseous products (H2, CH4, CO), continuous gas flow meters and composition analyzers provide real-time production rate data. For liquid products, online HPLC or titration systems (e.g., BioFlo titration stations) can provide near-real-time monitoring with 15-60 minute lag.
- **Faradaic Calculation**: Production rate can be estimated from electrical measurements: rate = (I x M_product) / (n x F x V_reactor), where I is current, M_product is product molecular weight, n is electrons per molecule, F is Faraday's constant, and V_reactor is volume. This calculation assumes known faradaic efficiency and provides a continuous estimate without chemical analysis.

## Affecting Factors

### Primary

- **Current density**: Production rate scales linearly with current density at constant faradaic efficiency. Increasing current from 5 to 50 A/m^2 with 80% faradaic efficiency for acetate increases production rate 10-fold.
- **Faradaic efficiency**: The fraction of electrons directed to the target product versus competing pathways (H2 evolution, methane, other organics). Faradaic efficiencies of 40-90% for acetate and 10-50% for longer-chain products are typical.
- **Electrode surface area per volume**: Higher electrode packing density (m^2/m^3) increases volumetric production rate at the same areal productivity.
- **Product inhibition**: Accumulating product inhibits microbial activity, reducing production rate over time. In-situ product removal maintains high rates.
- **Mass transfer of CO2**: Adequate CO2 supply to the cathodic biofilm is essential. CO2 limitation occurs when microbial consumption rate exceeds dissolution rate, particularly in poorly mixed or deeply submerged cathodes.

## References

1. Jourdin, L. et al. "High acetic acid production rate obtained by microbial electrosynthesis from carbon dioxide." Environmental Science & Technology, 49(22), 13566-13574 (2015).
2. Nevin, K.P. et al. "Microbial electrosynthesis: Feeding microbes electricity to convert carbon dioxide and water to multicarbon extracellular organic commodities." mBio, 1(2), e00103-10 (2010).
3. Bajracharya, S. et al. "Carbon dioxide reduction by mixed and pure cultures in microbial electrosynthesis." Applied Microbiology and Biotechnology, 101(11), 4379-4395 (2017).
4. Rabaey, K. and Rozendal, R.A. "Microbial electrosynthesis — revisiting the electrical route for microbial production." Nature Reviews Microbiology, 8(10), 706-716 (2010).
5. Jourdin, L. et al. "Bringing high-rate, CO2-based microbial electrosynthesis closer to practical implementation." Chemical Engineering Journal, 390, 124522 (2020).

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Production+Rate&body=**Parameter%3A**+Production+Rate%0A**Category%3A**+Performance%0A**File%3A**+parameters%2Fperformance%2Fproduction-rate.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Production+Rate&body=**Parameter%3A**+Production+Rate%0A**Category%3A**+Performance%0A**File%3A**+parameters%2Fperformance%2Fproduction-rate.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Production+Rate&body=**Parameter%3A**+Production+Rate%0A**Category%3A**+Performance%0A**File%3A**+parameters%2Fperformance%2Fproduction-rate.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
