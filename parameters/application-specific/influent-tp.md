# Influent Tp

Influent total phosphorus (TP) refers to the sum of all phosphorus species present in the wastewater entering a microbial electrochemical system (MES), including orthophosphate (PO4-P), polyphosphates, and organically bound phosphorus. Phosphorus is an essential macronutrient for microbial growth and biofilm development in MES, but it is also a regulated pollutant whose discharge to surface waters contributes to eutrophication. Managing phosphorus in MES systems presents both treatment challenges and resource recovery opportunities.

Phosphorus plays a dual role in MES performance. As a nutrient, it is required for microbial cell synthesis, ATP production, and nucleic acid formation, and its deficiency can limit biofilm development and electrogenic activity. The phosphorus requirement for microbial growth in MES is typically estimated at 1/5 to 1/7 of the nitrogen requirement (approximately 1-2 mg/L P for municipal wastewater applications). As a treatment target, phosphorus removal from wastewater is increasingly mandated by environmental regulations, with many discharge permits requiring effluent TP below 1 mg/L.

MES technology offers unique phosphorus recovery opportunities through cathodic precipitation. The alkaline conditions generated at MES cathodes during operation (pH 9-12) promote precipitation of phosphorus minerals, particularly struvite (MgNH4PO4*6H2O), hydroxyapatite (Ca5(PO4)3OH), and calcium phosphate. This bioelectrochemical phosphorus precipitation can recover 50-80% of influent phosphorus as a slow-release fertilizer product, converting a pollutant into a valuable resource while reducing effluent TP concentrations.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Application Specific |
| **Subcategory** | Influent Characteristics |
| **Type** | number |
| **Unit** | mg/L |
| **Minimum** | 1 |
| **Maximum** | 50 |

## Typical Values

- **Valid Range**: 1 - 500 mg/L TP
- **Typical Range for MES applications**: 3 - 50 mg/L TP
- **Weak municipal wastewater**: 3 - 5 mg/L TP
- **Medium-strength municipal wastewater**: 5 - 10 mg/L TP
- **Strong municipal wastewater**: 10 - 20 mg/L TP
- **Domestic wastewater**: 6 - 12 mg/L TP (approximately 50-70% as orthophosphate)
- **Food processing wastewater**: 10 - 100 mg/L TP
- **Dairy wastewater**: 20 - 100 mg/L TP
- **Slaughterhouse wastewater**: 20 - 80 mg/L TP
- **Swine farm wastewater**: 50 - 300 mg/L TP
- **Landfill leachate**: 5 - 100 mg/L TP
- **Synthetic MFC medium (typical)**: 5 - 50 mg/L TP (as phosphate buffer)
- **COD/TP ratio (municipal WW)**: 30 - 100 g COD/g P
- **Minimum P for microbial growth in MES**: approximately 1-2 mg/L

## Measurement Methods

- **Ascorbic Acid Colorimetric Method (Standard Methods 4500-P E)**: 1. For total phosphorus, perform persulfate digestion: add 0.5 g ammonium persulfate and 1 mL 11 N H2SO4 to 50 mL sample, autoclave at 121 degC for 30 minutes. 2. Neutralize the digest with NaOH to approximately pH 7. 3. Add combined reagent (ammonium molybdate, antimony potassium tartrate, ascorbic acid in sulfuric acid). 4. Allow blue color to develop for 10-30 minutes at room temperature. 5. Measure absorbance at 880 nm using a spectrophotometer. 6. Calculate TP from a calibration curve using KH2PO4 standards (range 0.01-2.0 mg/L P).
- **ICP-OES Method**: 1. Acidify samples with concentrated HNO3 to pH < 2 for total dissolved phosphorus. 2. For total phosphorus (including particulate), perform acid digestion (HNO3/HCl or microwave digestion). 3. Analyze by inductively coupled plasma optical emission spectrometry at 213.6 nm or 178.2 nm emission wavelength. 4. Method detection limit: typically 0.01-0.05 mg/L P.
- **Flow Injection Analysis (FIA) / Segmented Flow Analysis (SFA)**: 1. Use automated colorimetric analyzers for high-throughput TP analysis. 2. Samples are automatically digested (UV or chemical), then reacted with molybdate reagent. 3. Absorbance is measured in a flow cell at 880 nm. 4. Throughput of 20-60 samples per hour with comparable accuracy to manual methods. 5. Suitable for routine monitoring programs with high sample volumes.

## Affecting Factors

### Primary

- **Wastewater source**: Municipal wastewater TP depends on per-capita phosphorus loading (approximately 1.5-2.5 g P/person/day); industrial sources vary widely.
- **Detergent phosphorus content**: In regions where phosphate-containing detergents are still used, they contribute significantly to wastewater TP. Many jurisdictions have banned phosphate detergents.
- **Pre-treatment**: Primary clarification removes 10-20% of influent TP (primarily particulate organic P).
- **Season**: Agricultural runoff during growing seasons can increase TP in combined sewer systems.
- **Recycle streams**: Sludge dewatering liquor and digester supernatant are phosphorus-rich and can increase influent TP by 10-30% when recycled.
- **Chemical dosing upstream**: Iron or aluminum salt addition upstream of the MES for odor control or primary treatment removes phosphorus by precipitation.
- **Phosphorus speciation**: The ratio of orthophosphate to organic/condensed phosphorus affects bioavailability and treatment mechanisms.
- **pH**: Influent pH affects phosphorus solubility and the potential for spontaneous precipitation in feed systems.

## Related Parameters

- **name**: Influent TN

- **relationship**: The N/P ratio (typically 5-10 for municipal WW) affects microbial nutrient balance.
- **name**: Effluent TP Limit

- **relationship**: The influent TP and required removal efficiency determine the phosphorus treatment challenge.
- **name**: Influent COD

- **relationship**: The COD/TP ratio affects biological phosphorus uptake and overall nutrient balance.
- **name**: Wastewater Type

- **relationship**: Each wastewater type has characteristic TP concentration and speciation.
- **name**: Sludge Production

- **relationship**: Phosphorus removal (biological or chemical) contributes to sludge mass and composition.

## Compatible Systems

Wastewater Treatment Applications

## References

- Standard Methods for the Examination of Water and Wastewater (2017). 23rd Edition. APHA, AWWA, WEF. Methods 4500-P B, 4500-P E.
- Metcalf & Eddy (2014). Wastewater Engineering: Treatment and Resource Recovery, 5th Edition. McGraw-Hill.
- Ichihashi, O. & Hirooka, K. (2012). Removal and recovery of phosphorus as struvite from swine wastewater using microbial fuel cell. Bioresource Technology, 114, 303-307.
- Cusick, R.D. & Logan, B.E. (2012). Phosphate recovery as struvite within a single chamber microbial electrolysis cell. Bioresource Technology, 107, 110-115.
- Fischer, F. et al. (2011). Microbial fuel cell enables phosphate recovery from digested sewage sludge as struvite. Bioresource Technology, 102(10), 5824-5830.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Influent+Tp&body=**Parameter%3A**+Influent+Tp%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Finfluent-tp.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Influent+Tp&body=**Parameter%3A**+Influent+Tp%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Finfluent-tp.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Influent+Tp&body=**Parameter%3A**+Influent+Tp%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Finfluent-tp.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
