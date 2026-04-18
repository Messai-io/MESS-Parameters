# Effluent Cod Limit

Effluent COD limit refers to the maximum allowable chemical oxygen demand concentration in the treated effluent discharged from microbial electrochemical system (MES) installations. COD measures the total quantity of oxygen required to chemically oxidize all organic and inorganic matter in a water sample, providing a comprehensive assessment of the total oxygen-demanding load in the effluent. Unlike BOD, which measures only the biologically degradable fraction, COD captures both biodegradable and refractory organic compounds, as well as chemically oxidizable inorganic species.

COD is widely used as a regulatory parameter for wastewater discharge permits, particularly in European and Asian regulatory frameworks, and is increasingly adopted alongside BOD in US permits. For MES installations, the effluent COD limit is a critical design target because the coulombic efficiency of bioelectrochemical conversion is directly related to the fraction of COD that is converted to electrical current versus that which is lost to competing metabolic pathways (methanogenesis, fermentation, biomass growth) or passes through the reactor untreated.

MES systems are effective at removing biodegradable COD (readily metabolized by electrogenic bacteria and associated communities) but have limited ability to remove refractory COD (complex, non-biodegradable organics). This is particularly relevant for industrial wastewaters with high refractory COD fractions, where MES alone may not achieve regulatory COD limits without additional polishing treatment (ozonation, activated carbon adsorption, or advanced oxidation processes).

## Basic Information

| Property | Value |
|---|---|
| **Category** | Safety Regulatory |
| **Subcategory** | Discharge Standards |
| **Type** | number |
| **Unit** | mg/L |
| **Minimum** | 0 |
| **Maximum** | 500 |
| **Papers Reporting** | 2 |

## Typical Values

- **Valid Range**: 20 - 500 mg/L COD
- **EU Urban Wastewater Treatment Directive (91/271/EEC)**: 125 mg/L COD (or 75% removal)
- **Sensitive area discharge (EU)**: 75 - 100 mg/L COD
- **China Grade 1A discharge standard (GB 18918)**: 50 mg/L COD
- **China Grade 1B discharge standard**: 60 mg/L COD
- **India discharge standard (inland)**: 250 mg/L COD
- **Typical US NPDES permit (where COD is specified)**: 100 - 200 mg/L COD
- **Water reuse standards**: 30 - 50 mg/L COD
- **MFC effluent (single-stage, municipal WW)**: 50 - 150 mg/L COD
- **MFC effluent (multi-stage or optimized)**: 30 - 80 mg/L COD
- **MEC effluent**: 40 - 120 mg/L COD
- **MDC effluent**: 50 - 150 mg/L COD

## Measurement Methods

- **Closed Reflux Colorimetric Method (Standard Methods 5220D)**: 1. Prepare sample by homogenizing and diluting if COD exceeds 900 mg/L. 2. Add sample to pre-prepared COD digestion vials containing potassium dichromate, sulfuric acid, and mercuric sulfate catalyst. 3. Digest at 150 degC for 2 hours in a COD reactor (heating block or autoclave). 4. Cool to room temperature and measure absorbance at 600 nm (high-range) or 420 nm (low-range) using a spectrophotometer. 5. Calculate COD from calibration curve prepared with potassium hydrogen phthalate (KHP) standards.
- **Titrimetric Method (Standard Methods 5220C)**: 1. Add sample, potassium dichromate solution, sulfuric acid reagent, and silver sulfate catalyst to a reflux flask. 2. Reflux for 2 hours, then cool and dilute. 3. Titrate excess dichromate with standardized ferrous ammonium sulfate (FAS) using ferroin indicator. 4. Calculate COD from the volume of FAS consumed: COD (mg/L) = (A-B) x M x 8000 / mL sample, where A = mL FAS for blank, B = mL FAS for sample, M = molarity of FAS.
- **Online COD Monitoring**: 1. Install a continuous COD analyzer in the MES effluent stream (UV-based, dichromate-based, or TOC-conversion method). 2. UV-based methods use UV254 absorbance correlated to COD; suitable for consistent wastewater matrices. 3. Dichromate-based online analyzers provide true COD measurements but generate hazardous waste (chromium). 4. Validate online measurements against laboratory methods at regular intervals (weekly to monthly). 5. Configure alarm setpoints at 80-90% of the permit limit to provide early warning of potential exceedances.

## Affecting Factors

### Primary

- **Influent COD concentration and composition**: Higher influent COD and higher refractory fractions make it more difficult to achieve low effluent limits.
- **Hydraulic retention time**: Longer HRTs improve COD removal but reduce volumetric treatment capacity.
- **Coulombic efficiency**: Higher coulombic efficiency indicates more complete conversion of organic COD to electrical current, reducing effluent COD.
- **Biofilm diversity and activity**: A diverse microbial community including fermenters and electrogenic bacteria improves degradation of complex organics.
- **Temperature**: Reduced temperature lowers metabolic rates and increases effluent COD.
- **pH**: Optimal pH (6.5-7.5) maintains biofilm health and COD removal efficiency.
- **Soluble vs. particulate COD**: Particulate COD requires hydrolysis before bioelectrochemical conversion, which may be rate-limiting.
- **Electrode fouling**: Biofilm overgrowth, mineral scaling, and organic fouling reduce electrode activity and COD removal.

## Related Parameters

- **name**: Influent COD

- **relationship**: The influent COD load determines the required treatment efficiency to meet effluent limits.
- **name**: Effluent BOD Limit

- **relationship**: BOD and COD limits are often specified together; the BOD/COD ratio indicates biodegradability.
- **name**: Effluent TSS Limit

- **relationship**: Particulate organic matter contributes to both COD and TSS in the effluent.
- **name**: Compliance Reporting

- **relationship**: Effluent COD monitoring results must be reported per permit conditions.
- **name**: Wastewater Type

- **relationship**: Different wastewater types have characteristic COD compositions affecting treatability.

## Compatible Systems

Regulatory Compliance

## References

- EU Council Directive 91/271/EEC (1991). Urban Wastewater Treatment Directive.
- Standard Methods for the Examination of Water and Wastewater (2017). 23rd Edition. APHA, AWWA, WEF. Methods 5220C, 5220D.
- GB 18918-2002 (China). Discharge Standard of Pollutants for Municipal Wastewater Treatment Plant.
- Pant, D. et al. (2010). A review of the substrates used in microbial fuel cells (MFCs) for sustainable energy production. Bioresource Technology, 101(6), 1533-1543.
- Heidrich, E.S. et al. (2014). Performance of a pilot scale microbial electrolysis cell fed on domestic wastewater at ambient temperatures for a period of 2 years. Bioresource Technology, 163, 6-11.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Effluent+Cod+Limit&body=**Parameter%3A**+Effluent+Cod+Limit%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Feffluent-cod-limit.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Effluent+Cod+Limit&body=**Parameter%3A**+Effluent+Cod+Limit%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Feffluent-cod-limit.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Effluent+Cod+Limit&body=**Parameter%3A**+Effluent+Cod+Limit%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Feffluent-cod-limit.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
