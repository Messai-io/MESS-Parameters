# Toxicity Rating

Toxicity rating assigns a numerical hazard classification to chemicals, materials, or waste streams associated with a microbial electrochemical system, following established hazard rating frameworks such as the NFPA 704 health hazard rating or the GHS (Globally Harmonized System) acute toxicity categories. This parameter is critical for identifying chemical handling requirements, selecting personal protective equipment (PPE), designing emergency response procedures, and complying with occupational health and environmental regulations. In MES contexts, toxicity rating applies to electrolyte chemicals, buffer solutions, electrode materials, membrane solvents, produced gases (H2S, NH3), and the wastewater being treated.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Safety Regulatory |
| **Subcategory** | Chemical Hazards |
| **Type** | number |
| **Minimum** | 0 |
| **Maximum** | 4 |

## Typical Values

- **text**: | Material/Substance | NFPA Health Rating | GHS Category | Notes |
|-------------------|-------------------|-------------|-------|
| Phosphate buffer (50 mM) | 1 | Cat. 5 | Slight hazard |
| Sodium acetate | 0 - 1 | Not classified | Minimal hazard |
| Domestic wastewater | 1 - 2 | N/A | Biological hazard, pathogens |
| Industrial wastewater | 1 - 4 | Varies | Depends on contaminants |
| Hydrogen gas (MEC product) | 0 (health) | N/A | Not toxic but flammable/asphyxiant |
| Hydrogen sulfide (trace) | 3 - 4 | Cat. 2 | Highly toxic, respiratory hazard |
| Ammonia (from urea hydrolysis) | 3 | Cat. 3 | Toxic, corrosive |
| Nafion membrane (solid) | 0 - 1 | Not classified | Low hazard in solid form |
| Carbon electrode materials | 0 - 1 | Not classified | Dust inhalation hazard only |
| Ferricyanide (mediator) | 2 | Cat. 4 | Moderate toxicity |

**NFPA 704 health hazard scale:**
- 0: No hazard
- 1: Slight hazard - irritation, minor injury
- 2: Moderate hazard - incapacitation or residual injury
- 3: Serious hazard - serious or permanent injury
- 4: Severe hazard - death or major residual injury

## Measurement Methods

- **1. **Safety Data Sheet (SDS) review**: Consult the SDS (formerly MSDS) for each chemical used in or produced by the MES system. The health hazard rating is listed in Section 2 (Hazard Identification).**: 2. **NFPA 704 diamond posting**: Post NFPA 704 diamonds at reactor installations indicating the overall health, flammability, reactivity, and special hazard ratings for the materials present. 3. **Toxicity testing (bioassay)**: Conduct standardized bioassays on effluent using indicator organisms (Daphnia magna EC50, Vibrio fischeri luminescence inhibition, fish toxicity) per ISO or EPA methods. 4. **Chemical analysis**: Measure concentrations of specific toxic constituents (heavy metals, H2S, NH3, organics) and compare with published toxicity thresholds (LC50, NOAEL). 5. **Occupational exposure monitoring**: Measure workplace air concentrations of volatile substances (H2S, NH3, VOCs) using personal monitors and compare with occupational exposure limits (OELs/PELs/TLVs).

## Affecting Factors

- **text**: - **Wastewater source**: Industrial wastewater may contain heavy metals, solvents, or other toxic substances that increase the overall toxicity rating of the system.
- **Chemical additives**: Buffer chemicals, pH adjusters, and nutrient supplements each have their own toxicity profiles that must be considered.
- **Microbial products**: Metabolic byproducts (H2S, volatile fatty acids, ammonia) may be more toxic than the original substrate.
- **Electrode materials**: Some electrode modifications (metal nanoparticles, conductive polymers) introduce materials with moderate toxicity ratings.
- **Concentration effects**: Dilute solutions of moderately toxic chemicals may pose lower actual risk than their toxicity rating suggests; the rating applies to the pure substance.
- **Exposure pathway**: Inhalation, ingestion, and dermal contact each pose different risks. Enclosed systems reduce inhalation risk.

## Compatible Systems

Safety Parameters

## References

1. NFPA 704: Standard System for the Identification of the Hazards of Materials for Emergency Response. National Fire Protection Association.
2. GHS (Globally Harmonized System of Classification and Labelling of Chemicals). United Nations, 10th revised edition (2023).
3. OSHA 29 CFR 1910.1200 - Hazard Communication Standard. US Occupational Safety and Health Administration.
4. ISO 11348 - Water quality - Determination of the inhibitory effect of water samples on the light emission of Vibrio fischeri (luminescent bacteria test).
5. US EPA. *Ecological Effects Test Guidelines*. OPPTS 850 Series.

---

*Parameter documentation for the MESS (Microbial Electrochemical Systems Standardization) framework.*

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Toxicity+Rating&body=**Parameter%3A**+Toxicity+Rating%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Ftoxicity-rating.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Toxicity+Rating&body=**Parameter%3A**+Toxicity+Rating%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Ftoxicity-rating.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Toxicity+Rating&body=**Parameter%3A**+Toxicity+Rating%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Ftoxicity-rating.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
