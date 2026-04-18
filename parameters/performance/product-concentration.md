# Product Concentration

Product concentration measures the titer of a target chemical product accumulated in the cathode chamber or product stream of a microbial electrosynthesis (MES) system, expressed in grams per liter (g/L). This parameter is critical for evaluating the economic feasibility of bio-electrochemical chemical production because downstream separation and purification costs scale inversely with product concentration — higher titers require less energy and capital for product recovery.

Microbial electrosynthesis converts CO2 and electrons into multi-carbon organic products (acetate, butyrate, ethanol, butanol, caproate) using cathodic biofilms of acetogenic bacteria (primarily Sporomusa, Clostridium, Moorella species). The product concentration achieved depends on the balance between production rate and dilution rate (in continuous systems) or the cumulative production capacity before product inhibition limits further synthesis (in batch systems).

Current MES product concentrations are modest (0.1-15 g/L) compared to conventional fermentation (50-200 g/L), primarily because product accumulation inhibits the cathodic biofilm through acid toxicity (for organic acid products) or osmotic stress. Achieving higher product concentrations requires in-situ product removal (membrane extraction, adsorption, electrodialysis), engineered microbial tolerance, or product-selective membrane systems that concentrate products without exposing the biofilm to inhibitory levels.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Performance |
| **Subcategory** | Chemical Synthesis |
| **Type** | number |
| **Unit** | g/L |
| **Minimum** | 0 |
| **Maximum** | 100 |

## Typical Values

- **Valid Range**: 0 g/L to 100 g/L
- **Typical Range**: 0.1 g/L to 15 g/L
- **Acetate from CO2 (MES)**: 1-11 g/L
- **Butyrate from CO2 (MES)**: 0.1-2 g/L
- **Ethanol from CO2 (MES)**: 0.01-0.5 g/L
- **Caproate (chain elongation)**: 0.1-5 g/L
- **Formate (direct electrochemical)**: 0.5-10 g/L
- **Hydrogen peroxide (cathode)**: 0.1-5 g/L
- **Conventional acetogenic fermentation (comparison)**: 20-60 g/L acetate
- **Minimum for economic recovery**: ~5-10 g/L for most organics

## Measurement Methods

- **High-Performance Liquid Chromatography (HPLC)**: HPLC with refractive index (RI) or UV detection separates and quantifies organic products (organic acids, alcohols) using ion-exclusion columns (e.g., Aminex HPX-87H). Detection limits: 0.01-0.1 g/L; accuracy: +/- 2-5%. Analysis time: 20-45 minutes. This is the standard method for MES product quantification.
- **Gas Chromatography (GC)**: For volatile products (ethanol, butanol, acetone), headspace or direct-injection GC with FID provides excellent sensitivity (detection limit: 0.001 g/L) and specificity. Aqueous-phase fatty acids are analyzed after acidification and extraction.
- **Ion Chromatography (IC)**: Organic acid anions (acetate, butyrate, propionate) are quantified by IC with conductivity detection. This method provides simultaneous analysis of all organic acid products plus inorganic anions. Detection limits: 0.01 g/L; range: 0.01-10 g/L.

## Affecting Factors

### Primary

- **Current density and faradaic efficiency**: Product accumulation rate = current density x faradaic efficiency x molecular weight / (n x F), where n is electrons per molecule and F is Faraday's constant. Higher current with high faradaic efficiency enables faster concentration buildup.
- **Product toxicity and inhibition**: Undissociated organic acids (at pH < pKa) cross cell membranes and dissipate proton motive force. Acetate becomes inhibitory above 5-10 g/L at pH < 5. Maintaining pH >6 extends the tolerable concentration range.
- **Dilution rate (continuous systems)**: Product concentration at steady state = production rate / dilution rate. Lower dilution rates (longer HRT) achieve higher concentrations but may limit substrate supply or cause product inhibition.
- **In-situ product removal**: Membrane extraction, pertraction, or electrodialysis that continuously removes product maintains low intracellular concentrations, enabling higher cumulative production while keeping the biofilm in an active state.
- **Cathode potential**: More negative cathode potentials generally increase production rate but may shift product selectivity (e.g., from acetate to ethanol or methane).

## References

1. Nevin, K.P. et al. "Microbial electrosynthesis: Feeding microbes electricity to convert carbon dioxide and water to multicarbon extracellular organic commodities." mBio, 1(2), e00103-10 (2010).
2. Bajracharya, S. et al. "Carbon dioxide reduction by mixed and pure cultures in microbial electrosynthesis." Applied Microbiology and Biotechnology, 101(11), 4379-4395 (2017).
3. Jourdin, L. et al. "High acetic acid production rate obtained by microbial electrosynthesis from carbon dioxide." Environmental Science & Technology, 49(22), 13566-13574 (2015).
4. Rabaey, K. and Rozendal, R.A. "Microbial electrosynthesis — revisiting the electrical route for microbial production." Nature Reviews Microbiology, 8(10), 706-716 (2010).
5. Arends, J.B.A. et al. "Continuous long-term electricity-driven bioproduction of carboxylates and isopropanol from CO2 with a mixed microbial community." Journal of CO2 Utilization, 20, 141-149 (2017).

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Product+Concentration&body=**Parameter%3A**+Product+Concentration%0A**Category%3A**+Performance%0A**File%3A**+parameters%2Fperformance%2Fproduct-concentration.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Product+Concentration&body=**Parameter%3A**+Product+Concentration%0A**Category%3A**+Performance%0A**File%3A**+parameters%2Fperformance%2Fproduct-concentration.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Product+Concentration&body=**Parameter%3A**+Product+Concentration%0A**Category%3A**+Performance%0A**File%3A**+parameters%2Fperformance%2Fproduct-concentration.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
