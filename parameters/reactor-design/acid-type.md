# Acid Type

Acid Type refers to the classification and identification of acidic chemical species used in or produced by microbial electrochemical systems (MES), including microbial fuel cells (MFCs), microbial electrolysis cells (MECs), and microbial desalination cells (MDCs). This parameter is critical for safety and regulatory compliance because acid type directly determines the hazard profile, required personal protective equipment (PPE), storage protocols, spill response procedures, and waste disposal requirements for MES operations. The nature of the acid -- whether mineral (inorganic) or organic -- affects corrosion rates of system components, compatibility with membrane materials, and potential for generating hazardous fumes or reactions.

In MES contexts, acids arise from multiple sources: deliberate addition for pH adjustment (e.g., hydrochloric acid, sulfuric acid, phosphoric acid), metabolic byproducts of microbial activity (e.g., acetic acid, propionic acid, butyric acid from fermentation), and chemical reactions at electrode surfaces (e.g., carbonic acid from CO2 dissolution). Each acid type carries distinct safety implications governed by regulations such as OSHA's Hazard Communication Standard (29 CFR 1910.1200), EPA's Resource Conservation and Recovery Act (RCRA), and the Globally Harmonized System (GHS) of Classification and Labelling of Chemicals.

Proper identification and documentation of acid type is essential for Safety Data Sheet (SDS) compliance, emergency response planning, and worker health monitoring. In scaled MES operations, the acid inventory directly influences facility classification under EPA Tier II reporting requirements and may trigger Risk Management Plan (RMP) obligations under the Clean Air Act Section 112(r) for certain quantities of mineral acids.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Reactor Design |
| **Subcategory** | pH Control |
| **Type** | select |

## Typical Values

- **Valid Range**: pH 0-7 (acidic regime); concentration 0.001-18 M depending on acid
- **Typical Range**: pH 2-6 in MES operational contexts

## Measurement Methods

- **pH and Titration Analysis**: 1. Collect a representative sample from the MES reactor effluent or anolyte/catholyte chamber using acid-resistant sampling equipment 2. Measure pH using a calibrated glass electrode pH meter (ASTM E70 or equivalent) 3. Perform alkalinity/acidity titration per Standard Methods 2310B to quantify total acid concentration 4. Report acid type identification alongside concentration in mol/L or mg/L
- **Ion Chromatography (IC)**: 1. Filter sample through 0.45 micrometer membrane to remove particulates 2. Analyze using an ion chromatograph equipped with a conductivity detector (EPA Method 300.1 for inorganic anions, EPA Method 9056A) 3. Use appropriate columns for organic acid separation (e.g., IonPac AS11-HC for short-chain fatty acids) 4. Quantify individual acid species against certified reference standards 5. Detection limits: typically 0.01-0.1 mg/L for common acid anions
- **High-Performance Liquid Chromatography (HPLC)**: 1. Prepare sample via centrifugation (10,000 g, 10 min) and 0.22 micrometer filtration 2. Use a C18 or ion-exclusion column (e.g., Aminex HPX-87H) with UV detection at 210 nm 3. Mobile phase: 5 mM H2SO4 at 0.6 mL/min, column temperature 60 degC 4. Identify and quantify volatile fatty acids (VFAs) and other organic acids against calibration curves 5. Typical run time: 30-45 minutes per sample

## Affecting Factors

### Primary

- **Microbial Community Composition**: Acidogenic bacteria (e.g., Clostridium, Acetobacterium) determine the profile and concentration of organic acids produced, directly affecting the acid hazard profile
- **Substrate Type**: Complex organic substrates generate mixed acid profiles via fermentation; simple substrates may yield predominantly acetic acid
- **Operating pH**: Controlled pH determines whether added mineral acids accumulate; low pH favors undissociated acid forms with higher membrane permeability and toxicity
- **Temperature**: Elevated temperatures increase acid dissociation rates and vapor pressures, raising inhalation hazard for volatile acids (acetic, formic)
- **Hydraulic Retention Time (HRT)**: Shorter HRT may result in incomplete acid conversion, leading to higher VFA concentrations in effluent
- **Electrode Materials**: Carbon-based electrodes are generally acid-resistant; metallic components may corrode differentially based on acid type
- **Membrane Type**: Nafion and other proton exchange membranes tolerate most organic acids but degrade with strong oxidizing acids (HNO3)
- **Oxygen Intrusion**: Aerobic conditions can shift acid production pathways, affecting the types and quantities of acids present

## Related Parameters

- **name**: Buffer Capacity

- **relationship**: Determines the system's resistance to pH changes from acid accumulation, directly affecting acid concentration safety thresholds
- **name**: Corrosivity Class

- **relationship**: Acid type is the primary determinant of corrosivity classification for MES components and waste streams
- **name**: Chemical Resistance

- **relationship**: Material compatibility with specific acid types governs component selection and safety factors
- **name**: Max Operating pH / Min Operating pH

- **relationship**: Acid type and concentration define the pH operating envelope and associated safety limits
- **name**: Effluent COD Limit

- **relationship**: Organic acid concentrations in effluent contribute to COD and are regulated under discharge permits

## Compatible Systems

Reactor Control Systems

## References

- OSHA. (2012). Hazard Communication Standard, 29 CFR 1910.1200. Occupational Safety and Health Administration.
- EPA. (2023). Resource Conservation and Recovery Act (RCRA), 40 CFR Part 261. Environmental Protection Agency.
- APHA. (2017). Standard Methods for the Examination of Water and Wastewater, 23rd Edition. Methods 2310B, 4500-H+.
- Logan, B. E. (2008). Microbial Fuel Cells. John Wiley & Sons. ISBN 978-0-470-23948-3.
- Rabaey, K., Angenent, L., Schroder, U., & Keller, J. (2010). Bioelectrochemical Systems. IWA Publishing.
- GHS. (2021). Globally Harmonized System of Classification and Labelling of Chemicals, 9th Revised Edition. United Nations.
- EPA Method 300.1. (1997). Determination of Inorganic Anions in Drinking Water by Ion Chromatography.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Acid+Type&body=**Parameter%3A**+Acid+Type%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Facid-type.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Acid+Type&body=**Parameter%3A**+Acid+Type%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Facid-type.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Acid+Type&body=**Parameter%3A**+Acid+Type%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Facid-type.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
