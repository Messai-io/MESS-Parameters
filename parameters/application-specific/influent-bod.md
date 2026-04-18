# Influent Bod

Influent biochemical oxygen demand (BOD) refers to the concentration of biodegradable organic matter in the wastewater entering a microbial electrochemical system (MES), measured as the mass of dissolved oxygen consumed per liter by aerobic microorganisms during the biochemical oxidation of organic compounds. This parameter, typically reported as five-day BOD (BOD5) at 20 degC, is one of the most fundamental design parameters for MES installations because it directly determines the available substrate for electrogenic microbial metabolism and, consequently, the electrical energy or hydrogen that can be recovered.

In MFC systems, influent BOD represents the fuel source for electricity generation. Electrogenic bacteria at the anode oxidize biodegradable organic compounds, transferring electrons to the anode electrode and generating electrical current. Higher influent BOD concentrations provide more substrate for electrogenic metabolism, potentially increasing power output, but excessively high BOD can lead to non-electrogenic fermentation, methanogenesis, and incomplete treatment. The relationship between influent BOD and MFC power output follows a saturation curve described by Monod-type kinetics, with optimal performance typically achieved at moderate organic loading rates.

For MEC systems, influent BOD provides the anodic substrate for hydrogen production at the cathode with the assistance of a small external voltage. In MDC systems, the organic matter in the influent drives the desalination process by creating the bioelectrochemical potential difference across the desalination chamber. The BOD/COD ratio of the influent indicates the fraction of organic matter that is biodegradable and thus accessible to MES metabolism, making it a critical parameter for predicting MES treatment performance.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Application Specific |
| **Subcategory** | Influent Characteristics |
| **Type** | number |
| **Unit** | mg/L |
| **Minimum** | 50 |
| **Maximum** | 5000 |
| **Papers Reporting** | 6 |

## Typical Values

- **Valid Range**: 50 - 50,000 mg/L BOD5
- **Typical Range for MES applications**: 100 - 5,000 mg/L BOD5
- **Weak municipal wastewater**: 100 - 150 mg/L BOD5
- **Medium-strength municipal wastewater**: 150 - 300 mg/L BOD5
- **Strong municipal wastewater**: 300 - 500 mg/L BOD5
- **Domestic septic tank effluent**: 200 - 600 mg/L BOD5
- **Food processing wastewater**: 500 - 10,000 mg/L BOD5
- **Brewery wastewater**: 1,000 - 5,000 mg/L BOD5
- **Dairy wastewater**: 1,500 - 5,000 mg/L BOD5
- **Slaughterhouse wastewater**: 1,500 - 8,000 mg/L BOD5
- **Swine farm wastewater**: 5,000 - 30,000 mg/L BOD5
- **Optimal for single-chamber MFC**: 200 - 2,000 mg/L BOD5
- **BOD/COD ratio (municipal WW)**: 0.4 - 0.8 (higher values indicate higher biodegradability)

## Measurement Methods

- **Standard BOD5 Test (Standard Methods 5210B / EPA Method 405.1)**: 1. Collect representative composite or grab samples per the sampling plan in acid-washed BOD bottles. 2. Measure or adjust sample temperature to 20 degC. 3. Prepare appropriate dilutions based on expected BOD range using dilution water saturated with dissolved oxygen. 4. Seed diluted samples with appropriate microbial inoculum (settled domestic wastewater supernatant or commercial BOD seed). 5. Measure initial dissolved oxygen (DO) using a calibrated DO probe or Winkler titration. 6. Incubate sealed BOD bottles at 20 +/- 1 degC in the dark for 5 days. 7. Measure final DO and calculate BOD5 = (initial DO - final DO) x dilution factor. 8. Run glucose-glutamic acid standards (expected BOD = 198 +/- 30.5 mg/L) for QA/QC.
- **Respirometric BOD**: 1. Place undiluted or minimally diluted sample in a sealed respirometer vessel with NaOH for CO2 absorption. 2. Monitor oxygen consumption continuously using pressure transducer (manometric) or electrolytic oxygen generation (coulometric) methods. 3. Obtain a continuous BOD curve (BOD vs. time) in addition to the 5-day endpoint value. 4. This method provides information about biodegradation kinetics and ultimate BOD.
- **Online BOD Estimation**: 1. Install continuous UV-visible spectrophotometer probes in the MES influent line. 2. Develop site-specific correlations between UV absorbance (particularly at 254 nm) and laboratory BOD5. 3. Alternatively, use online TOC or COD analyzers with BOD correlation factors. 4. Recalibrate correlation models when influent characteristics change significantly.

## Affecting Factors

### Primary

- **Wastewater source**: Different sources produce drastically different BOD concentrations; industrial wastewaters can be orders of magnitude higher than municipal.
- **Biodegradability**: The fraction of organic matter that is biochemically oxidizable varies with wastewater composition; refractory organics do not contribute to BOD.
- **Time of sampling**: Diurnal flow and concentration patterns in municipal wastewater cause BOD to vary by 50-200% over a 24-hour cycle.
- **Temperature**: Sample temperature affects biological activity during the BOD test; all measurements are standardized to 20 degC.
- **Pre-treatment**: Primary settling, equalization, and screening affect the influent BOD reaching the MES reactors.
- **Seasonal variation**: Tourism, agricultural runoff, and industrial activity cycles cause seasonal BOD variations.
- **Infiltration and inflow**: Stormwater infiltration into sewer systems dilutes influent BOD during wet weather.
- **Inhibitory substances**: Toxicants in the influent can inhibit BOD test microorganisms, leading to underestimation of true BOD.

## Related Parameters

- **name**: Influent COD

- **relationship**: COD includes both biodegradable and refractory organic fractions; the BOD/COD ratio indicates biodegradability.
- **name**: Effluent BOD Limit

- **relationship**: The influent BOD determines the required removal efficiency to meet effluent limits.
- **name**: Wastewater Type

- **relationship**: Different wastewater types have characteristic BOD concentrations and BOD/COD ratios.
- **name**: Sludge Production

- **relationship**: Higher influent BOD leads to more biomass production and sludge generation.
- **name**: Detection Range

- **relationship**: BOD biosensors based on MFC technology require calibration within the expected influent BOD range.

## Compatible Systems

Wastewater Treatment Applications

## References

- Standard Methods for the Examination of Water and Wastewater (2017). 23rd Edition. APHA, AWWA, WEF. Method 5210B.
- Metcalf & Eddy (2014). Wastewater Engineering: Treatment and Resource Recovery, 5th Edition. McGraw-Hill.
- Pant, D. et al. (2010). A review of the substrates used in microbial fuel cells for sustainable energy production. Bioresource Technology, 101(6), 1533-1543.
- Logan, B.E. (2008). Microbial Fuel Cells. John Wiley & Sons.
- Liu, H. & Logan, B.E. (2004). Electricity generation using an air-cathode single chamber microbial fuel cell in the presence and absence of a proton exchange membrane. Environmental Science & Technology, 38(14), 4040-4046.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Influent+Bod&body=**Parameter%3A**+Influent+Bod%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Finfluent-bod.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Influent+Bod&body=**Parameter%3A**+Influent+Bod%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Finfluent-bod.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Influent+Bod&body=**Parameter%3A**+Influent+Bod%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Finfluent-bod.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
