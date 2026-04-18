# Influent Tn

Influent total nitrogen (TN) refers to the sum of all nitrogen species present in the wastewater entering a microbial electrochemical system (MES), including organic nitrogen (proteins, amino acids, urea), ammonia/ammonium (NH3/NH4+), nitrite (NO2-), and nitrate (NO3-). This parameter is important for MES design and operation because nitrogen affects microbial community composition, buffer capacity, potential for nutrient recovery, and the overall treatment performance required to meet discharge standards.

In MES systems, nitrogen plays multiple roles. Ammonium serves as an essential nutrient for microbial growth and biofilm development but can also be toxic to electrogenic bacteria at high concentrations (> 500 mg/L NH4+-N for some species). Ammonium ions migrate through cation exchange membranes from the anode to cathode chamber due to the electrical field, potentially concentrating nitrogen in the catholyte where it can be recovered as a valuable fertilizer product (e.g., ammonium sulfate or struvite). This bioelectrochemical nitrogen recovery pathway is a distinctive advantage of MES technology over conventional wastewater treatment.

The carbon-to-nitrogen (C/N or COD/TN) ratio of the influent is a critical design parameter for MES systems incorporating biological nitrogen removal. Denitrification requires organic carbon as an electron donor, and MES systems that efficiently remove organic carbon at the anode may deplete the carbon source needed for downstream or concurrent denitrification. Typical municipal wastewater has a COD/TN ratio of 8-12, which is usually adequate for biological nitrogen removal, but MES treatment can reduce this ratio by preferentially removing carbon.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Application Specific |
| **Subcategory** | Influent Characteristics |
| **Type** | number |
| **Unit** | mg/L |
| **Minimum** | 10 |
| **Maximum** | 200 |

## Typical Values

- **Valid Range**: 5 - 5,000 mg/L TN
- **Typical Range for MES applications**: 20 - 500 mg/L TN
- **Weak municipal wastewater**: 20 - 30 mg/L TN
- **Medium-strength municipal wastewater**: 30 - 50 mg/L TN
- **Strong municipal wastewater**: 50 - 80 mg/L TN
- **Domestic wastewater**: 40 - 70 mg/L TN (approximately 60-70% as NH4+-N)
- **Food processing wastewater**: 50 - 500 mg/L TN
- **Dairy wastewater**: 50 - 300 mg/L TN
- **Slaughterhouse wastewater**: 100 - 500 mg/L TN
- **Swine farm wastewater**: 500 - 3,000 mg/L TN
- **Landfill leachate**: 500 - 5,000 mg/L TN
- **Anaerobic digester supernatant**: 500 - 2,000 mg/L TN
- **COD/TN ratio (municipal WW)**: 8 - 12 g COD/g N
- **Inhibitory NH4+-N concentration for electrogenic bacteria**: > 500 mg/L

## Measurement Methods

- **Persulfate Digestion Method (Standard Methods 4500-N C)**: 1. Collect representative samples in acid-washed polyethylene bottles; acidify to pH < 2 with H2SO4 for preservation if not analyzed within 24 hours. 2. Prepare alkaline persulfate reagent (potassium persulfate + NaOH). 3. Add reagent to sample in autoclavable glass vials and autoclave at 121 degC for 30 minutes to convert all nitrogen species to nitrate. 4. Analyze the digested sample for nitrate using UV spectrophotometry (2nd derivative at 220 nm), ion chromatography, or cadmium reduction method. 5. Subtract the reagent blank value to determine TN.
- **High-Temperature Combustion (Standard Methods 4500-N B)**: 1. Inject the sample into a combustion furnace at 680-1100 degC with oxidation catalyst. 2. All nitrogen compounds are pyrolyzed and oxidized to NO. 3. Measure NO by chemiluminescence detection (reaction with ozone produces light proportional to NO concentration). 4. This method is available in automated TOC/TN analyzers that simultaneously measure TOC and TN. 5. Method detection limit is typically 0.1 mg/L TN.
- **Individual Nitrogen Species Analysis**: 1. Measure ammonia/ammonium by distillation-titration (4500-NH3 B/C), ion-selective electrode (4500-NH3 D), or colorimetric phenate method (4500-NH3 F). 2. Measure nitrate by UV spectrophotometry (4500-NO3- B), ion chromatography, or cadmium reduction (4500-NO3- E). 3. Measure nitrite by colorimetric diazotization (4500-NO2- B). 4. Calculate organic nitrogen by difference: Organic N = TKN - NH4+-N, where TKN (Total Kjeldahl Nitrogen) is determined by digestion-distillation (4500-N org B). 5. Verify: TN = TKN + NO3--N + NO2--N.

## Affecting Factors

### Primary

- **Wastewater source**: Agricultural, industrial, and domestic wastewaters have vastly different nitrogen concentrations and speciation.
- **Diet and demographics**: Protein-rich diets in the served population produce higher per-capita nitrogen loads in domestic wastewater.
- **Industrial contributions**: Food processing, pharmaceutical, and chemical industries can contribute significant nitrogen loads.
- **Sewer system type and length**: Biological transformation of nitrogen species occurs in sewer systems (ammonification of organic N, partial nitrification).
- **Season**: Nitrogen concentration varies seasonally due to flow dilution (wet weather) and temperature effects on biological activity.
- **Recycle streams**: Return flows from sludge dewatering, digester supernatant, and other internal recycle streams are nitrogen-rich and can significantly increase influent TN.
- **Infiltration/inflow**: Groundwater infiltration typically has low nitrogen and dilutes influent TN during wet weather.
- **Pre-treatment**: Primary clarification removes 5-15% of influent TN (primarily particulate organic nitrogen).

## Related Parameters

- **name**: Influent COD

- **relationship**: The COD/TN ratio determines the feasibility of biological nitrogen removal.
- **name**: Effluent TN Limit

- **relationship**: The influent TN and required removal efficiency determine the nitrogen treatment challenge.
- **name**: Influent TP

- **relationship**: Nitrogen and phosphorus are regulated together for eutrophication control.
- **name**: Wastewater Type

- **relationship**: Each wastewater type has characteristic TN concentration and speciation.
- **name**: Sludge Production

- **relationship**: Nitrogen incorporation into biomass contributes to sludge nitrogen content.

## Compatible Systems

Wastewater Treatment Applications

## References

- Standard Methods for the Examination of Water and Wastewater (2017). 23rd Edition. APHA, AWWA, WEF. Methods 4500-N B, 4500-N C, 4500-NH3 F.
- Metcalf & Eddy (2014). Wastewater Engineering: Treatment and Resource Recovery, 5th Edition. McGraw-Hill.
- Kuntke, P. et al. (2012). Ammonium recovery and energy production from urine by a microbial fuel cell. Water Research, 46(8), 2627-2636.
- Kelly, P.T. & He, Z. (2014). Nutrients removal and recovery in bioelectrochemical systems: a review. Bioresource Technology, 153, 351-360.
- Nam, J.Y. et al. (2010). Effect of ammonia on electricity generation of a single-chamber microbial fuel cell. Journal of Industrial Microbiology & Biotechnology, 37, 39-46.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Influent+Tn&body=**Parameter%3A**+Influent+Tn%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Finfluent-tn.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Influent+Tn&body=**Parameter%3A**+Influent+Tn%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Finfluent-tn.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Influent+Tn&body=**Parameter%3A**+Influent+Tn%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Finfluent-tn.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
