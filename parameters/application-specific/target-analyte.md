# Target Analyte

Target Analyte identifies the specific chemical species, biological agent, or physical parameter that a microbial electrochemical system (MES) is designed to detect, measure, quantify, or remove. In MES biosensor applications, the target analyte may be a specific pollutant (heavy metals, organic contaminants, nutrients), a biological marker (BOD, toxicity indicator, pathogen), or an operational parameter (dissolved oxygen, pH, volatile fatty acids). In MES treatment applications, the target analyte refers to the regulated substance being removed or transformed to meet discharge requirements. This parameter is foundational to safety and regulatory compliance because it determines the analytical methods required for monitoring, the regulatory limits that must be met, the hazard classification of the substance being handled, and the quality assurance/quality control (QA/QC) protocols necessary for defensible data.

From a safety perspective, target analyte identification dictates worker exposure controls. Monitoring for heavy metals (Pb, Cd, Hg, Cr, As) requires handling of toxic calibration standards. Detection of pathogenic organisms (coliforms, Cryptosporidium, Legionella) necessitates BSL-2 practices. Quantifying volatile organic compounds (VOCs) or dissolved gases (H2S, CH4, H2) involves flammable or toxic substances requiring ventilation and gas monitoring. The toxicity profile of the target analyte determines emergency response procedures, PPE requirements, and waste disposal protocols.

Regulatory frameworks comprehensively govern target analyte monitoring: the EPA Clean Water Act establishes effluent limits for priority pollutants (40 CFR 401.15, 129 substances), the Safe Drinking Water Act defines Maximum Contaminant Levels (MCLs) for 90+ contaminants, EU Water Framework Directive (2000/60/EC) establishes Environmental Quality Standards (EQS) for priority substances, and WHO Guidelines for Drinking-Water Quality set health-based guideline values. Each target analyte has prescribed analytical methods (EPA 40 CFR Part 136), required detection limits, QA/QC requirements, and reporting protocols.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Application Specific |
| **Subcategory** | Sensor Specifications |
| **Type** | select |

## Typical Values

- **Valid Range**: Concentration ranges span from ng/L (trace contaminants) to g/L (bulk organics), depending on the analyte
- **Typical Range**: Varies widely by target; see specific analyte categories below

## Measurement Methods

- **EPA-Approved Methods for Priority Pollutant Target Analytes**: 1. Select the EPA-approved analytical method per 40 CFR Part 136 for each target analyte 2. For metals: EPA Methods 200.7 (ICP-OES), 200.8 (ICP-MS), or 245.1 (Hg cold vapor) 3. For organics: EPA Methods 524.2 (VOCs by GC-MS), 625.1 (semi-volatiles), 8270E (SW-846) 4. For nutrients: EPA Methods 350.1 (NH3), 353.2 (NO3/NO2), 365.1 (TP) 5. For BOD: Standard Methods 5210B (5-day BOD) 6. Maintain method detection limits (MDLs) below 1/3 of the regulatory limit 7. Implement QA/QC per EPA method requirements: blanks, duplicates, spikes, calibration verification
- **MES Biosensor-Based Detection**: 1. Configure the MES biosensor with electroactive biofilm tuned to the target analyte 2. For BOD biosensing: monitor current output proportional to biodegradable organic matter 3. For toxicity detection: measure current inhibition when toxic analytes suppress biofilm activity 4. Calibrate against known concentrations of the target analyte (minimum 5-point calibration curve) 5. Validate biosensor results against EPA-approved reference methods for regulatory acceptance 6. Report detection limit, linear range, selectivity, and response time
- **Continuous Online Monitoring**: 1. Install analyte-specific online analyzers (e.g., UV254 for COD proxy, ion-selective electrodes for NH4+, online colorimetry for PO4) 2. Configure data acquisition for continuous recording (minimum 1 measurement per 15 minutes) 3. Implement automatic calibration with certified reference solutions on a scheduled basis (typically every 24-72 hours) 4. Set alarm thresholds at 80% of regulatory limit (warning) and 90% (critical) 5. Maintain audit trail per 40 CFR Part 136 and 21 CFR Part 11 data integrity requirements

## Affecting Factors

### Primary

- **Influent Composition**: The concentration and chemical form of the target analyte in the MES influent determine the system's treatment challenge and monitoring requirements
- **Matrix Interferences**: Complex wastewater matrices can interfere with analytical detection; high organic content suppresses metal detection by ICP-MS, while suspended solids affect optical methods
- **Speciation**: Many target analytes exist in multiple forms (e.g., Cr(III) vs. Cr(VI), organic vs. inorganic arsenic) with vastly different toxicities and regulatory limits
- **Temporal Variability**: Influent analyte concentrations can fluctuate by orders of magnitude; monitoring frequency must capture peak concentrations for compliance
- **Transformation Products**: MES treatment may transform the target analyte into different species (e.g., NO3- to N2, Cr(VI) to Cr(III)) that have different regulatory implications
- **Temperature**: Affects analyte solubility, volatility, and analytical method performance
- **pH**: Influences analyte speciation (metal hydroxide precipitation, acid/base equilibria)
- **Biofilm Activity**: Active biofilm preferentially removes biodegradable analytes; recalcitrant compounds may pass through
- **Adsorption**: Target analytes may adsorb to reactor surfaces, membranes, or biofilm, complicating mass balance calculations

## Related Parameters

- **name**: Measurement Mode

- **relationship**: The target analyte determines whether continuous, batch, or event-triggered measurement modes are appropriate
- **name**: Signal Type

- **relationship**: Analytical instrumentation signal type must support the required detection sensitivity and reporting format
- **name**: Surface Functionalization

- **relationship**: Biosensor selectivity for the target analyte depends on surface chemistry modification
- **name**: Effluent BOD/COD/TN/TP Limits

- **relationship**: These are the regulatory expressions of target analyte removal requirements
- **name**: Risk Score

- **relationship**: Target analyte toxicity and concentration contribute to overall system risk assessment

## Compatible Systems

Biosensor Applications

## References

- EPA. (2023). National Primary Drinking Water Regulations. 40 CFR Part 141.
- EPA. (2021). Guidelines Establishing Test Procedures for the Analysis of Pollutants. 40 CFR Part 136.
- WHO. (2022). Guidelines for Drinking-Water Quality, 4th Edition.
- Di Lorenzo, M., et al. (2009). A small-scale air-cathode microbial fuel cell for on-line monitoring of water quality. Biosensors and Bioelectronics, 24(7), 2007-2013.
- Stein, N. E., et al. (2012). On-line detection of toxic components using a microbial fuel cell-based biosensor. Journal of Process Control, 22(9), 1755-1761.
- APHA. (2017). Standard Methods for the Examination of Water and Wastewater, 23rd Edition.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Target+Analyte&body=**Parameter%3A**+Target+Analyte%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Ftarget-analyte.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Target+Analyte&body=**Parameter%3A**+Target+Analyte%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Ftarget-analyte.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Target+Analyte&body=**Parameter%3A**+Target+Analyte%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Ftarget-analyte.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
