# Effluent Tp Limit

Effluent total phosphorus (TP) limit refers to the maximum allowable concentration of all phosphorus species in the treated effluent discharged from microbial electrochemical system (MES) installations. Total phosphorus includes orthophosphate (PO4-P), polyphosphate, and organically bound phosphorus. TP discharge limits are established to prevent eutrophication in receiving water bodies, where excess phosphorus stimulates algal blooms that deplete dissolved oxygen and degrade aquatic ecosystems.

Phosphorus removal in MES systems occurs through several mechanisms: microbial uptake and incorporation into biomass (biological phosphorus removal), chemical precipitation with cations (Ca2+, Mg2+, Fe3+, Al3+), adsorption onto electrode surfaces and biofilm matrix, and struvite (MgNH4PO4) crystallization under alkaline conditions often found near MES cathodes. The alkaline pH generated at the cathode of MES during operation can promote phosphorus precipitation as calcium phosphate or struvite, offering a pathway for phosphorus recovery as a valuable fertilizer product.

Achieving stringent TP limits (below 1 mg/L) with MES alone is challenging because biological phosphorus removal requires alternating anaerobic-aerobic conditions (enhanced biological phosphorus removal, EBPR) that are not inherent to standard MES configurations. Most MES installations meeting strict TP limits incorporate chemical phosphorus precipitation (using iron or aluminum salts) or filtration as supplementary treatment. However, innovative MES designs that exploit cathode alkalinity for phosphorus recovery represent an emerging approach that simultaneously achieves treatment and resource recovery objectives.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Safety Regulatory |
| **Subcategory** | Discharge Standards |
| **Type** | number |
| **Unit** | mg/L |
| **Minimum** | 0 |
| **Maximum** | 10 |

## Typical Values

- **Valid Range**: 0.1 - 10 mg/L TP
- **EU Urban Wastewater Treatment Directive (sensitive areas, >100,000 PE)**: 1 mg/L TP (or 80% removal)
- **EU Urban Wastewater Treatment Directive (10,000-100,000 PE)**: 2 mg/L TP (or 80% removal)
- **US NPDES permits (stringent, nutrient-sensitive)**: 0.1 - 1.0 mg/L TP
- **US NPDES permits (typical)**: 1 - 5 mg/L TP
- **China Grade 1A standard (GB 18918)**: 0.5 mg/L TP
- **Great Lakes Initiative (US)**: 0.5 - 1.0 mg/L TP
- **Single-stage MFC effluent (without P-removal design)**: 3 - 8 mg/L TP
- **MES with chemical P-precipitation**: 0.3 - 1.0 mg/L TP
- **MES with cathode P-recovery (struvite)**: 1 - 3 mg/L TP
- **MES with filtration polishing**: 0.5 - 2.0 mg/L TP

## Measurement Methods

- **Ascorbic Acid Method (Standard Methods 4500-P E)**: 1. Collect effluent samples in acid-washed polyethylene or glass bottles. 2. For total phosphorus, perform persulfate digestion: add ammonium persulfate and sulfuric acid, autoclave at 121 degC for 30 minutes to convert all phosphorus forms to orthophosphate. 3. Neutralize the digest, then add combined reagent (ammonium molybdate, antimony potassium tartrate, ascorbic acid, sulfuric acid). 4. Allow color to develop for 10 minutes and measure absorbance at 880 nm. 5. Determine TP from calibration curve prepared with potassium dihydrogen phosphate standards.
- **ICP-OES Method**: 1. Acidify samples with nitric acid for preservation. 2. Analyze using inductively coupled plasma optical emission spectrometry (ICP-OES) at the phosphorus emission wavelength (213.6 nm or 178.2 nm). 3. This method provides total dissolved phosphorus; for total phosphorus including particulate forms, samples must first be acid-digested. 4. Method detection limits are typically 0.01-0.05 mg/L P.
- **Online TP Monitoring**: 1. Install a continuous phosphorus analyzer in the MES effluent stream (typically using colorimetric or photometric methods with automated digestion). 2. Automated analyzers can measure orthophosphate (reactive P) or total phosphorus depending on configuration. 3. Validate online results against laboratory methods at regular intervals. 4. Set alarm thresholds at 70-80% of the permit limit for proactive management.

## Affecting Factors

### Primary

- **Influent TP concentration**: Higher influent phosphorus loads require more aggressive treatment approaches.
- **Chemical dosing**: Iron or aluminum salt addition for chemical P-precipitation is the most reliable method for achieving low TP limits.
- **MES cathode chemistry**: Alkaline conditions at the cathode promote phosphorus precipitation, but the extent depends on calcium and magnesium concentrations.
- **pH**: Higher pH promotes phosphorus precipitation; acidic conditions increase phosphorus solubility.
- **Cation concentrations**: Availability of Ca2+, Mg2+, Fe3+, and Al3+ determines the potential for chemical and biological phosphorus removal.
- **Solids retention**: Longer solids retention times allow more complete biological phosphorus uptake and accumulation.
- **Temperature**: Temperature has a moderate effect on biological phosphorus removal kinetics.
- **Effluent suspended solids**: Particulate phosphorus in effluent TSS can contribute significantly to TP; effective solids separation is essential.

## Related Parameters

- **name**: Influent TP

- **relationship**: The influent phosphorus load determines the treatment requirement.
- **name**: Effluent TN Limit

- **relationship**: Nitrogen and phosphorus limits are often regulated concurrently for eutrophication control.
- **name**: Effluent TSS Limit

- **relationship**: Suspended solids in effluent carry particulate phosphorus.
- **name**: Sludge Production

- **relationship**: Chemical phosphorus precipitation increases sludge production.
- **name**: Compliance Reporting

- **relationship**: TP monitoring data must be reported per discharge permit requirements.

## Compatible Systems

Regulatory Compliance

## References

- EU Council Directive 91/271/EEC (1991). Urban Wastewater Treatment Directive.
- Standard Methods for the Examination of Water and Wastewater (2017). 23rd Edition. Methods 4500-P B, 4500-P E.
- Ichihashi, O. & Hirooka, K. (2012). Removal and recovery of phosphorus as struvite from swine wastewater using microbial fuel cell. Bioresource Technology, 114, 303-307.
- Cusick, R.D. & Logan, B.E. (2012). Phosphate recovery as struvite within a single chamber microbial electrolysis cell. Bioresource Technology, 107, 110-115.
- US EPA (2007). Advanced Wastewater Treatment to Achieve Low Concentration of Phosphorus. EPA 910-R-07-002.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Effluent+Tp+Limit&body=**Parameter%3A**+Effluent+Tp+Limit%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Feffluent-tp-limit.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Effluent+Tp+Limit&body=**Parameter%3A**+Effluent+Tp+Limit%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Feffluent-tp-limit.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Effluent+Tp+Limit&body=**Parameter%3A**+Effluent+Tp+Limit%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Feffluent-tp-limit.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
