# Phosphorus Recovery

Phosphorus recovery efficiency quantifies the fraction of total phosphorus (TP) entering a microbial electrochemical system (MES) that is captured in a recoverable solid or concentrated liquid product, expressed as a percentage. Phosphorus recovery from wastewater is a critical sustainability objective because phosphate rock — the primary source for fertilizer production — is a finite, non-renewable resource with reserves concentrated in a few countries, and is classified as a critical raw material by the European Commission.

MES technology facilitates phosphorus recovery through electrochemically driven pH gradients. The cathode chamber naturally develops alkaline conditions (pH 9-12) due to oxygen reduction (MFC) or hydrogen evolution (MEC), which shifts the phosphate speciation equilibrium toward PO4^3- and creates thermodynamically favorable conditions for precipitation of calcium phosphate (hydroxyapatite, Ca5(PO4)3OH) or struvite (MgNH4PO4·6H2O) without external chemical addition. The anode chamber's acidic pH keeps phosphate in solution as H2PO4-, driving phosphate migration through anion exchange membranes toward the cathode where precipitation occurs.

The economic value of recovered phosphorus as fertilizer (struvite: $200-800/tonne; calcium phosphate: $100-400/tonne) contributes to the financial viability of MES installations. At current phosphorus prices and recovery yields, revenue of $0.05-0.30 per m^3 of wastewater treated is achievable, which, while modest, contributes to reducing the net operating cost of MES wastewater treatment.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Performance |
| **Subcategory** | Nutrient Recovery |
| **Type** | number |
| **Unit** | % |
| **Minimum** | 0 |
| **Maximum** | 100 |
| **Papers Reporting** | 2 |

## Typical Values

- **Valid Range**: 0% to 100%
- **Typical Range**: 40% to 90%
- **MFC with Mg-dosing (struvite)**: 70-90% TP recovery
- **MEC with alkaline cathode precipitation**: 60-85%
- **MFC with AEM (phosphate transport)**: 40-70%
- **MFC with Ca-rich cathode (hydroxyapatite)**: 50-80%
- **Electrodialysis MES**: 60-90%
- **Conventional chemical precipitation (comparison)**: 80-95% (with FeCl3 or alum, but not recoverable)
- **Struvite crystallization from digester centrate**: 80-95%
- **Influent TP (domestic WW)**: 5-10 mg/L; effluent target: < 0.5-2 mg/L

## Measurement Methods

- **Colorimetric Phosphorus Analysis (APHA 4500-P)**: Total phosphorus is determined by acid persulfate digestion followed by ascorbic acid colorimetric method (molybdenum blue) at 880 nm. Influent and effluent TP concentrations, combined with product stream P content, enable mass balance calculation. Automated analyzers (Hach DR6000, Seal AA3) provide high-throughput analysis. Accuracy: +/- 2-5%.
- **ICP-OES for Product Characterization**: Solid products (struvite, calcium phosphate) are dissolved in acid and analyzed by ICP-OES for P, Mg, Ca, Fe, and Al content. This determines the P content of the recovered product and identifies impurities that affect fertilizer quality.
- **Online Phosphate Analyzers**: Continuous monitoring of orthophosphate (PO4-P) using colorimetric online analyzers (e.g., Hach Phosphax sc, Endress+Hauser Liquiline CA80PH) enables real-time tracking of phosphorus recovery performance. Response time: 5-20 minutes; accuracy: +/- 2-5%.

## Affecting Factors

### Primary

- **Cathode pH**: Struvite precipitation requires pH 8.5-9.5 (minimum supersaturation); calcium phosphate forms above pH 8. The natural alkalinity generated at MES cathodes provides favorable pH without chemical addition. pH above 10 may dissolve struvite and form less valuable amorphous precipitates.
- **Phosphorus concentration**: Higher influent P concentrations yield higher supersaturation ratios and more efficient crystallization. Domestic wastewater (5-10 mg/L TP) is challenging; anaerobic digester centrate (50-200 mg/L TP) enables excellent recovery.
- **Mg:P and Ca:P molar ratios**: Struvite requires Mg:P >= 1 (molar). Calcium phosphate requires Ca:P >= 1.67. Domestic wastewater is often Mg-deficient; supplemental Mg addition or Mg-releasing cathode materials improve struvite yield.
- **Competing ions**: High calcium concentrations (>50 mg/L Ca) can cause calcium phosphate co-precipitation that reduces struvite purity. Carbonate alkalinity can compete for Ca, forming CaCO3 instead of Ca3(PO4)2.
- **Current density**: Higher current density generates more alkalinity at the cathode, increasing pH and precipitation driving force. At 5-20 A/m^2, cathode pH reaches 9-12, sufficient for spontaneous phosphate precipitation.

## References

1. Cusick, R.D. and Logan, B.E. "Phosphate recovery as struvite within a single chamber microbial electrolysis cell." Bioresource Technology, 107, 110-115 (2012).
2. Ichihashi, O. and Hirooka, K. "Removal and recovery of phosphorus as struvite from swine wastewater using microbial fuel cell." Bioresource Technology, 114, 303-307 (2012).
3. Fischer, F. et al. "Microbial fuel cell enables phosphate recovery from digested sewage sludge as struvite." Bioresource Technology, 102(10), 5824-5830 (2011).
4. Kelly, P.T. and He, Z. "Nutrients removal and recovery in bioelectrochemical systems: A review." Bioresource Technology, 153, 351-360 (2014).
5. Ye, Y. et al. "Nutrient recovery from wastewater: From technology to economy." Bioresource Technology Reports, 11, 100425 (2020).

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Phosphorus+Recovery&body=**Parameter%3A**+Phosphorus+Recovery%0A**Category%3A**+Performance%0A**File%3A**+parameters%2Fperformance%2Fphosphorus-recovery.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Phosphorus+Recovery&body=**Parameter%3A**+Phosphorus+Recovery%0A**Category%3A**+Performance%0A**File%3A**+parameters%2Fperformance%2Fphosphorus-recovery.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Phosphorus+Recovery&body=**Parameter%3A**+Phosphorus+Recovery%0A**Category%3A**+Performance%0A**File%3A**+parameters%2Fperformance%2Fphosphorus-recovery.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
