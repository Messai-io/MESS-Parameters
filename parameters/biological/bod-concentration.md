# BOD Concentration

Biological Oxygen Demand (BOD) concentration quantifies the amount of dissolved
oxygen consumed by microorganisms during the biodegradation of organic matter in
substrate solutions. This parameter indicates the organic load and
biodegradability of substrates used in microbial electrochemical systems,
affecting treatment efficiency and power generation potential.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Biological |
| **Type** | number |
| **Unit** | mg/L |
| **Papers Reporting** | 367 |

## Typical Values

- **Range**: 10 - 10,000 mg/L
- **Typical**: 100 - 2,000 mg/L
- **Optimal**: 500 - 1,500 mg/L
- **Performance Categories**: - **Low Performance**: <100 mg/L (low organic content)
- **Moderate Performance**: 100 - 500 mg/L (moderate organic load)
- **High Performance**: 500 - 2,000 mg/L (high organic load)
- **Exceptional Performance**: 2,000 - 5,000 mg/L (very high organic load)

## Measurement Methods

- **Direct Measurement**: 1. **Standard BOD5 Test**:     - Incubate sample at 20°C for 5 days    - Measure dissolved oxygen before and after    - Calculate BOD = Initial DO - Final DO    - Standard method for comparison  2. **Respirometric Methods**:    - Continuous oxygen consumption measurement    - Real-time BOD determination    - Faster than standard BOD5    - More suitable for process control
- **Calculation Considerations**: - Temperature correction: BOD increases ~2x per 10°C - Dilution factors for high-strength samples - Nitrification inhibition may be needed - Consider ultimate BOD vs BOD5

## Affecting Factors

### Primary

- **Organic Content**: - Carbohydrates: High BOD (~1.1 g O2/g)    - Proteins: Moderate BOD (~1.3 g O2/g)    - Lipids: Very high BOD (~2.9 g O2/g)    - Synthetic organics: Variable BOD
- **Substrate Type**: - Domestic wastewater: 200-600 mg/L    - Industrial wastewater: 500-10,000 mg/L    - Food waste: 10,000-50,000 mg/L    - Synthetic glucose: Predictable BOD
- **Biodegradability**: - Easily biodegradable: High BOD5/COD ratio (>0.5)    - Moderately biodegradable: Moderate ratio (0.3-0.5)    - Poorly biodegradable: Low ratio (<0.3)
- **Environmental Conditions**: - Temperature: Higher temperature increases BOD    - pH: Optimal range 6.5-8.5 for microbial activity    - Nutrients: N, P availability affects biodegradation
- **Inhibitory Substances**: - Heavy metals: Reduce microbial activity    - Toxic organics: Inhibit biodegradation    - High salinity: Affects microbial metabolism

## Performance Impact

BOD concentration indicates substrate availability for microbial metabolism and
power generation. Higher BOD generally correlates with higher power output
potential, but very high BOD (>5,000 mg/L) may cause system inhibition or
process instability.

## Compatible Systems

Substrate Parameters

## References

1. **APHA, AWWA, WEF** (2017). "Standard Methods for the Examination of Water
   and Wastewater, 23rd Edition". American Public Health Association,
   Washington, DC.

   - Standard BOD measurement procedures

2. **Pham, T.H., et al.** (2006). "A novel electrochemically active and
   Fe(III)-reducing bacterium phylogenetically related to Aeromonas hydrophila".
   _FEMS Microbiology Letters_, 223(1), 129-136.

   - BOD effects on microbial fuel cell performance

3. **Liu, H., et al.** (2005). "Production of electricity from acetate or
   butyrate using a single-chamber microbial fuel cell". _Environmental Science
   & Technology_, 39(2), 658-662.
   - Substrate BOD and power generation relationships

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+BOD+Concentration&body=**Parameter%3A**+BOD+Concentration%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fbod-concentration.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+BOD+Concentration&body=**Parameter%3A**+BOD+Concentration%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fbod-concentration.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+BOD+Concentration&body=**Parameter%3A**+BOD+Concentration%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fbod-concentration.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
