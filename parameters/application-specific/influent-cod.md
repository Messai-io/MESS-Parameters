# Influent Cod

Influent chemical oxygen demand (COD) refers to the total concentration of oxidizable organic and inorganic matter in the wastewater entering a microbial electrochemical system (MES), measured as the mass of oxygen equivalent required for complete chemical oxidation using a strong oxidant (potassium dichromate). COD is the most widely used parameter for characterizing the organic strength of MES influent because it provides a comprehensive measure of all oxidizable matter, including both biodegradable and refractory fractions.

COD is the fundamental substrate parameter in MES design and performance evaluation. The theoretical maximum electrical energy recoverable from wastewater in an MFC is directly proportional to the influent COD: each gram of COD removed corresponds to a specific quantity of electron equivalents that can theoretically be captured as current. The coulombic efficiency (CE), defined as the fraction of substrate COD converted to measured current, is a primary MES performance metric. Typical coulombic efficiencies in MFCs range from 10-60% with real wastewater, indicating that a significant fraction of the influent COD is consumed by competing microbial processes rather than current generation.

For MEC hydrogen production, the influent COD determines the maximum hydrogen yield (theoretically 12 mol H2 per mol glucose equivalent). In MDC systems, the influent COD drives the desalination process. The fractionation of influent COD into readily biodegradable (rbCOD), slowly biodegradable (sbCOD), and non-biodegradable (nbCOD) fractions is essential for predicting MES performance, as electrogenic bacteria primarily utilize rbCOD (simple organics like acetate, glucose, volatile fatty acids) while complex substrates require prior fermentation.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Application Specific |
| **Subcategory** | Influent Characteristics |
| **Type** | number |
| **Unit** | mg/L |
| **Minimum** | 100 |
| **Maximum** | 10000 |
| **Papers Reporting** | 1 |

## Typical Values

- **Valid Range**: 100 - 100,000 mg/L COD
- **Typical Range for MES applications**: 200 - 10,000 mg/L COD
- **Weak municipal wastewater**: 200 - 350 mg/L COD
- **Medium-strength municipal wastewater**: 350 - 600 mg/L COD
- **Strong municipal wastewater**: 600 - 1,200 mg/L COD
- **Food processing wastewater**: 1,000 - 50,000 mg/L COD
- **Brewery wastewater**: 2,000 - 10,000 mg/L COD
- **Dairy wastewater**: 2,000 - 8,000 mg/L COD
- **Distillery wastewater**: 50,000 - 100,000 mg/L COD
- **Pharmaceutical wastewater**: 5,000 - 50,000 mg/L COD
- **Optimal for MFC operation**: 500 - 5,000 mg/L COD
- **Synthetic acetate medium (lab MFC)**: 500 - 2,000 mg/L COD
- **COD fractions (typical municipal)**: rbCOD 10-20%, sbCOD 40-60%, nbCOD 20-30%

## Measurement Methods

- **Closed Reflux Colorimetric Method (Standard Methods 5220D)**: 1. Homogenize and dilute the sample if COD exceeds 900 mg/L. 2. Pipette sample into pre-prepared COD digestion vials containing potassium dichromate (K2Cr2O7), concentrated sulfuric acid (H2SO4), and mercuric sulfate (HgSO4, to mask chloride interference). 3. Digest at 150 degC for 2 hours in a heating block reactor. 4. Cool to room temperature and measure absorbance at 600 nm (high-range, 100-900 mg/L) or 420 nm (low-range, 0-150 mg/L). 5. Calculate COD from a calibration curve prepared with potassium hydrogen phthalate (KHP; theoretical COD = 1.176 mg O2/mg KHP) standards.
- **Titrimetric Method (Standard Methods 5220C)**: 1. Reflux sample with excess potassium dichromate in sulfuric acid with silver sulfate catalyst for 2 hours. 2. Cool, dilute, and titrate residual dichromate with standardized ferrous ammonium sulfate (FAS) solution using ferroin indicator. 3. Calculate: COD (mg/L) = (A - B) x M x 8,000 / sample volume (mL). 4. This method is preferred for turbid or colored samples and for COD > 50 mg/L.
- **COD Fractionation**: 1. Measure total COD (tCOD) on a well-mixed, unfiltered sample. 2. Measure soluble COD (sCOD) on a sample filtered through 0.45 micrometer membrane filter. 3. Measure particulate COD: pCOD = tCOD - sCOD. 4. Determine readily biodegradable COD (rbCOD) using respirometric methods or chemical flocculation. 5. Calculate slowly biodegradable COD: sbCOD = bCOD - rbCOD, where bCOD is determined from ultimate BOD testing.

## Affecting Factors

### Primary

- **Wastewater source**: Industrial, municipal, and agricultural wastewaters have vastly different COD concentrations and compositions.
- **Sampling method and timing**: Composite sampling over 24 hours provides more representative COD values than grab samples due to diurnal and flow-related variations.
- **Pre-treatment**: Primary clarification typically removes 25-40% of influent COD (primarily particulate fraction).
- **Chloride interference**: High chloride concentrations (> 2,000 mg/L) in the sample can cause positive COD interference; mercuric sulfate addition mitigates this.
- **Temperature and season**: Municipal wastewater COD varies seasonally (lower in summer due to increased water usage and dilution).
- **Industrial discharges**: Periodic or continuous industrial inputs to the sewer system can dramatically alter influent COD.
- **Dilution from infiltration**: Rain events and groundwater infiltration dilute influent COD in combined and aging sewer systems.
- **Sample preservation**: Samples must be acidified to pH < 2 with sulfuric acid and refrigerated at 4 degC if not analyzed within 24 hours.

## Related Parameters

- **name**: Influent BOD

- **relationship**: The BOD/COD ratio indicates the biodegradable fraction of influent organic matter available for MES metabolism.
- **name**: Effluent COD Limit

- **relationship**: The influent COD determines the required removal efficiency.
- **name**: Wastewater Type

- **relationship**: Each wastewater type has characteristic COD concentration and composition.
- **name**: Influent TN

- **relationship**: The COD/TN ratio affects biological nitrogen removal in integrated MES systems.
- **name**: Sludge Production

- **relationship**: Higher influent COD leads to increased biomass and sludge production.

## Compatible Systems

Wastewater Treatment Applications

## References

- Standard Methods for the Examination of Water and Wastewater (2017). 23rd Edition. APHA, AWWA, WEF. Methods 5220C, 5220D.
- Metcalf & Eddy (2014). Wastewater Engineering: Treatment and Resource Recovery, 5th Edition. McGraw-Hill.
- Logan, B.E. (2008). Microbial Fuel Cells. John Wiley & Sons. Chapter 7: MFC Performance.
- Pant, D. et al. (2010). A review of the substrates used in microbial fuel cells. Bioresource Technology, 101(6), 1533-1543.
- Min, B. & Logan, B.E. (2004). Continuous electricity generation from domestic wastewater and organic substrates in a flat plate microbial fuel cell. Environmental Science & Technology, 38(21), 5809-5814.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Influent+Cod&body=**Parameter%3A**+Influent+Cod%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Finfluent-cod.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Influent+Cod&body=**Parameter%3A**+Influent+Cod%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Finfluent-cod.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Influent+Cod&body=**Parameter%3A**+Influent+Cod%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Finfluent-cod.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
