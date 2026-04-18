# Effluent Bod Limit

Effluent BOD limit refers to the maximum allowable biochemical oxygen demand (BOD) concentration in the treated effluent discharged from microbial electrochemical system (MES) installations, including MFCs, MECs, and MDCs. BOD is a measure of the oxygen consumed by microorganisms during the aerobic biodegradation of organic matter in water over a specified period (typically 5 days at 20 degC, designated as BOD5). The effluent BOD limit is established by regulatory authorities through discharge permits and represents a legally enforceable water quality standard.

Effluent BOD limits are one of the most fundamental regulatory parameters for any wastewater treatment technology, including MES. These limits protect receiving water bodies from oxygen depletion caused by the discharge of organic matter, which can lead to hypoxic or anoxic conditions harmful to aquatic life. MES technology offers the advantage of converting organic matter (measured as BOD) directly into electrical energy or hydrogen, rather than consuming energy for aeration as in conventional activated sludge processes. This dual benefit of treatment and energy recovery makes MES particularly attractive for BOD removal.

The ability of MES systems to meet stringent effluent BOD limits depends on reactor design, hydraulic retention time, organic loading rate, biofilm activity, and the biodegradability of the wastewater organics. Single-stage MES reactors can typically achieve 60-90% BOD removal, but meeting discharge limits of 20-30 mg/L from high-strength influents may require multi-stage configurations, post-treatment polishing, or hybrid systems combining MES with conventional biological processes.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Safety Regulatory |
| **Subcategory** | Discharge Standards |
| **Type** | number |
| **Unit** | mg/L |
| **Minimum** | 0 |
| **Maximum** | 200 |
| **Papers Reporting** | 8 |

## Typical Values

- **Valid Range**: 5 - 100 mg/L BOD5
- **US secondary treatment standard (NPDES)**: 30 mg/L BOD5 (30-day average), 45 mg/L (7-day average)
- **EU Urban Wastewater Treatment Directive (91/271/EEC)**: 25 mg/L BOD5 (or 70-90% removal)
- **Advanced treatment/reuse standards**: 5 - 10 mg/L BOD5
- **Sensitive receiving waters**: 10 - 20 mg/L BOD5
- **Industrial discharge to municipal sewer**: 200 - 500 mg/L BOD5 (pretreatment limits, facility-specific)
- **MFC effluent (single-stage, municipal WW)**: 15 - 60 mg/L BOD5
- **MFC effluent (multi-stage or hybrid)**: 5 - 25 mg/L BOD5
- **MEC effluent**: 10 - 50 mg/L BOD5
- **WHO drinking water guideline**: Not applicable (BOD is a treatment performance indicator, not a health-based standard)

## Measurement Methods

- **Standard BOD5 Test (EPA Method 405.1 / ISO 5815)**: 1. Collect a representative effluent sample in a BOD bottle, ensuring proper temperature preservation (< 6 degC, analyze within 24 hours). 2. Seed the sample with an appropriate microbial inoculum if necessary (typically for treated effluents with low microbial populations). 3. Dilute the sample to expected BOD range, saturate with dissolved oxygen, and measure initial DO using a calibrated DO meter or Winkler titration. 4. Incubate sealed BOD bottles at 20 +/- 1 degC in the dark for 5 days. 5. Measure final DO concentration and calculate BOD5 = (DO_initial - DO_final) x dilution factor. 6. Include blank and glucose-glutamic acid check standards for QA/QC.
- **Respirometric Method**: 1. Place a measured volume of effluent sample in a sealed respirometer vessel with a CO2 absorbent (NaOH or KOH pellet). 2. Monitor oxygen consumption continuously over 5 days using pressure-based (manometric) or electrolytic methods. 3. Calculate BOD from the cumulative oxygen consumed, correcting for headspace volume and temperature. 4. This method provides a continuous BOD curve in addition to the 5-day value.
- **Online BOD Estimation**: 1. Install a continuous UV-visible spectrophotometric probe in the MES effluent stream. 2. Correlate UV254 absorbance and/or spectral patterns with laboratory BOD5 measurements using site-specific calibration models. 3. Alternatively, use online TOC analyzers with TOC-to-BOD correlation factors. 4. Validate online estimates against periodic laboratory BOD5 analyses (weekly to monthly).

## Affecting Factors

### Primary

- **Influent BOD concentration**: Higher influent BOD loads require more treatment capacity to achieve the same effluent limit.
- **Hydraulic retention time (HRT)**: Longer HRTs allow more complete organic matter removal, improving the likelihood of meeting effluent limits.
- **Organic loading rate (OLR)**: Excessive OLR can overload the MES biofilm capacity, leading to elevated effluent BOD.
- **Wastewater biodegradability**: Refractory organics that are not readily biodegradable contribute to residual BOD that is difficult to remove.
- **Temperature**: Lower temperatures reduce biofilm metabolic activity and slow organic matter degradation.
- **Biofilm health and maturity**: A well-developed electrogenic biofilm with active Geobacter and associated communities provides optimal BOD removal.
- **Short-circuiting and dead zones**: Poor reactor hydraulics cause some influent to pass through untreated, elevating effluent BOD.
- **Solids carryover**: Suspended solids in the effluent contribute to measured BOD; solids separation is critical for meeting limits.

## Related Parameters

- **name**: Influent BOD

- **relationship**: The influent BOD concentration determines the treatment challenge and required removal efficiency.
- **name**: Effluent COD Limit

- **relationship**: COD limits are often specified alongside BOD limits; the BOD/COD ratio indicates biodegradability.
- **name**: Effluent TSS Limit

- **relationship**: Suspended solids contribute to effluent BOD and are typically regulated concurrently.
- **name**: Compliance Reporting

- **relationship**: Effluent BOD results must be reported on discharge monitoring reports.
- **name**: Wastewater Discharge

- **relationship**: The receiving water body classification determines the applicable BOD limit.

## Compatible Systems

Regulatory Compliance

## References

- US EPA (2010). NPDES Permit Writers Manual. EPA-833-K-10-001.
- EU Council Directive 91/271/EEC (1991). Urban Wastewater Treatment Directive.
- Standard Methods for the Examination of Water and Wastewater (2017). 23rd Edition. APHA, AWWA, WEF. Method 5210B.
- Logan, B.E. et al. (2015). Assessment of microbial fuel cell configurations and power densities. Environmental Science & Technology Letters, 2(8), 206-214.
- Pant, D. et al. (2010). A review of the substrates used in microbial fuel cells (MFCs) for sustainable energy production. Bioresource Technology, 101(6), 1533-1543.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Effluent+Bod+Limit&body=**Parameter%3A**+Effluent+Bod+Limit%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Feffluent-bod-limit.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Effluent+Bod+Limit&body=**Parameter%3A**+Effluent+Bod+Limit%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Feffluent-bod-limit.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Effluent+Bod+Limit&body=**Parameter%3A**+Effluent+Bod+Limit%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Feffluent-bod-limit.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
