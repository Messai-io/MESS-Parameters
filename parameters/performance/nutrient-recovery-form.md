# Nutrient Recovery Form

Nutrient recovery form describes the physical and chemical speciation of recovered nutrient products from a microbial electrochemical system (MES), categorizing the form in which nitrogen, phosphorus, and potassium exit the system as recoverable products. This categorical parameter is essential for determining the market value, storage stability, transportation logistics, and agricultural applicability of recovered nutrients.

The form of nutrient recovery depends on the MES configuration and operating conditions. Nitrogen can be recovered as ammonium sulfate ((NH4)2SO4) from acid absorption of stripped ammonia, struvite (MgNH4PO4·6H2O) from crystallization at alkaline pH, concentrated ammonium solution from membrane concentration, or ammonia gas for direct industrial use. Phosphorus is most commonly recovered as struvite or calcium phosphate (hydroxyapatite). The choice of recovery form affects downstream processing requirements, product value, and regulatory classification.

The selection of nutrient recovery form involves trade-offs between product value, process complexity, and market demand. Struvite is a premium slow-release fertilizer commanding $200-800/tonne, but requires magnesium addition and careful crystallization control. Ammonium sulfate is a widely traded commodity fertilizer ($100-300/tonne) that is straightforward to produce by ammonia absorption in sulfuric acid. Concentrated liquid fertilizer solutions avoid drying costs but have higher transportation costs due to water content. The optimal recovery form depends on local market conditions, regulatory framework, and distance to agricultural demand.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Performance |
| **Subcategory** | Nutrient Recovery |
| **Type** | select |

## Typical Values

- **Valid Range**: Categorical — struvite, ammonium-sulfate, ammonium-nitrate, calcium-phosphate, concentrated-liquid, ammonia-gas, biomass-bound, biochar-adsorbed
- **Typical Range**: Struvite or ammonium sulfate for most MES configurations
- **MFC with air-cathode ammonia stripping**: Ammonium sulfate (21% N)
- **MFC/MEC with Mg-dosing cathode**: Struvite (5.7% N, 12.6% P, 9.9% Mg)
- **MEC with electrodialysis concentrate**: Concentrated liquid (1-10 g N/L)
- **MFC with adsorptive cathode (zeolite, biochar)**: Biochar-adsorbed NH4+
- **Electrochemical precipitation**: Calcium phosphate (hydroxyapatite, 18% P)
- **Struvite particle size (typical)**: 0.5-5 mm (granular fertilizer grade)
- **Ammonium sulfate solution concentration**: 10-40% (w/w)

## Measurement Methods

- **X-Ray Diffraction (XRD) for Mineral Products**: Crystalline nutrient products (struvite, hydroxyapatite) are identified and quantified by XRD using Cu K-alpha radiation. Phase identification by comparison with ICDD database patterns confirms mineral speciation. Quantitative Rietveld refinement provides phase composition within +/- 1-2%.
- **Elemental Analysis (ICP-OES, CHN Analyzer)**: Solid products are dissolved in acid and analyzed by ICP-OES for P, Mg, Ca, K, and trace metals. Nitrogen content is determined by combustion CHN analyzer (e.g., Elementar vario MACRO cube). These results determine fertilizer nutrient content (N-P-K value) for product labeling and regulatory compliance.
- **Scanning Electron Microscopy (SEM) for Morphology**: SEM imaging reveals crystal morphology, particle size distribution, and surface characteristics of solid recovery products. Orthorhombic struvite crystals, needle-like hydroxyapatite, and granular ammonium sulfate have distinctive morphologies that confirm product identity.

## Affecting Factors

### Primary

- **Cathode pH**: Alkaline cathode conditions (pH 9-12) favor struvite crystallization and ammonia volatilization. Neutral pH cathodes may produce dissolved ammonium concentrate. Acidic cathodes (pH < 7) maintain ammonium in solution for electrodialysis concentration.
- **Magnesium availability**: Struvite formation requires equimolar Mg:NH4:PO4. Domestic wastewater is typically Mg-limited. MES systems using MgO cathodes or Mg-supplemented catholyte enable in-situ struvite production.
- **N:P ratio of wastewater**: Struvite captures both N and P in a 1:1 molar ratio. High-N, low-P wastewater (e.g., urine with N:P > 10) requires supplemental P for complete N recovery as struvite, making ammonium sulfate a better option.
- **Temperature**: Higher temperatures favor ammonia volatilization (stripping) and faster crystallization kinetics. Above 40 deg C, struvite solubility increases, potentially redissolving crystals.
- **Product market and logistics**: Proximity to agricultural markets, local fertilizer prices, storage infrastructure, and regulatory classification (waste vs. product) determine the most economically viable recovery form for each site.

## References

1. Cusick, R.D. and Logan, B.E. "Phosphate recovery as struvite within a single chamber microbial electrolysis cell." Bioresource Technology, 107, 110-115 (2012).
2. Kuntke, P. et al. "Ammonium recovery and energy production from urine by a microbial fuel cell." Water Research, 46(8), 2627-2636 (2012).
3. Ichihashi, O. and Hirooka, K. "Removal and recovery of phosphorus as struvite from swine wastewater using microbial fuel cell." Bioresource Technology, 114, 303-307 (2012).
4. Ledezma, P. et al. "Nitrogen and phosphorus recovery from anaerobically pre-treated human urine via microbial electrolysis." Electrochimica Acta, 228, 462-472 (2017).
5. Ye, Y. et al. "Nutrient recovery from wastewater: From technology to economy." Bioresource Technology Reports, 11, 100425 (2020).

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Nutrient+Recovery+Form&body=**Parameter%3A**+Nutrient+Recovery+Form%0A**Category%3A**+Performance%0A**File%3A**+parameters%2Fperformance%2Fnutrient-recovery-form.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Nutrient+Recovery+Form&body=**Parameter%3A**+Nutrient+Recovery+Form%0A**Category%3A**+Performance%0A**File%3A**+parameters%2Fperformance%2Fnutrient-recovery-form.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Nutrient+Recovery+Form&body=**Parameter%3A**+Nutrient+Recovery+Form%0A**Category%3A**+Performance%0A**File%3A**+parameters%2Fperformance%2Fnutrient-recovery-form.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
