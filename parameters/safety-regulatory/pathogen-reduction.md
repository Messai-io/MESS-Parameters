# Pathogen Reduction

Pathogen reduction in microbial electrochemical systems (MES) refers to the decrease in viable pathogenic microorganism concentrations achieved through the bioelectrochemical treatment process in MFC, MEC, and MDC systems. This parameter quantifies the ability of MES to inactivate or remove disease-causing bacteria, viruses, protozoa, and helminths from wastewater, expressed as log reduction values (LRV) or percentage removal. Pathogen reduction is critical for public health protection and determines the suitability of MES effluent for discharge or reuse applications.

MES systems achieve pathogen reduction through multiple mechanisms: direct electrochemical inactivation at electrode surfaces (where electric fields and locally generated reactive species damage pathogen cell membranes), competition and predation by the established electrogenic biofilm community, physical retention and entrapment within the biofilm matrix, exposure to unfavorable chemical conditions (pH extremes near electrodes, reactive oxygen species), and hydraulic retention time that allows natural die-off. Research has demonstrated that MFCs can achieve 1-3 log reductions of fecal coliforms and E. coli, with enhanced removal in systems incorporating electrically enhanced disinfection at the cathode.

The degree of pathogen reduction achieved by MES determines whether additional disinfection (UV, chlorination, ozonation) is required before effluent discharge or reuse. For unrestricted agricultural irrigation, the WHO guideline requires a total pathogen reduction of 6-7 log for helminth eggs and bacterial pathogens from raw wastewater, which MES alone typically cannot achieve. However, MES can serve as a significant barrier in a multi-barrier treatment approach, providing 1-3 log reduction alongside other treatment steps.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Safety Regulatory |
| **Subcategory** | Biological Safety |
| **Type** | number |
| **Unit** | log |
| **Minimum** | 0 |
| **Maximum** | 6 |
| **Papers Reporting** | 1 |

## Typical Values

- **Valid Range**: 0 - 7 log10 reduction
- **Typical Range for MES (single-stage)**: 0.5 - 3.0 log10
- **E. coli reduction (MFC)**: 1.0 - 3.0 log10
- **Total coliform reduction (MFC)**: 0.5 - 2.5 log10
- **Fecal coliform reduction (MFC)**: 1.0 - 2.5 log10
- **Enterococcus reduction**: 0.5 - 2.0 log10
- **Bacteriophage (virus surrogate) reduction**: 0.5 - 2.0 log10
- **Helminth egg reduction**: 1.0 - 2.0 log10 (primarily by sedimentation)
- **WHO guideline (agricultural reuse, unrestricted)**: >= 6 log10 for bacteria, >= 4 log10 for viruses
- **US EPA Class A biosolids (equivalent)**: < 1000 MPN/g fecal coliforms
- **EU Regulation 2020/741 (water reuse, Class A)**: E. coli < 10 CFU/100 mL (approximately 5-6 log from raw WW)
- **Conventional activated sludge (for comparison)**: 1-2 log10 pathogen reduction
- **UV disinfection (post-MES polishing)**: 3-5 log10 additional reduction

## Measurement Methods

- **Indicator Organism Enumeration**: 1. Collect influent and effluent samples simultaneously using aseptic technique in sterile containers. 2. Analyze for indicator organisms by standard methods:    - Total coliforms: Enzyme substrate method (Colilert/SM 9223B) or membrane filtration (SM 9222B).    - E. coli: Enzyme substrate method (Colilert/SM 9223B) or membrane filtration (SM 9222B).    - Enterococci: Enzyme substrate method (Enterolert/SM 9230D) or membrane filtration (SM 9230C). 3. Calculate log reduction: LRV = log10(influent concentration / effluent concentration). 4. Report results as log10 reduction values with confidence intervals based on replicate analyses.
- **Pathogen-Specific Analysis**: 1. For specific pathogens, apply targeted detection methods:    - Salmonella: EPA Method 1682 or ISO 19250 enrichment and PCR.    - Cryptosporidium/Giardia: EPA Method 1623.1 immunomagnetic separation and microscopy.    - Enteric viruses: EPA Method 1615 cell culture or qPCR.    - Helminth eggs: Bailenger method or US EPA ETV verified method. 2. Calculate pathogen-specific log reduction values. 3. Compare against regulatory requirements for the intended effluent use.
- **Molecular Methods (qPCR/ddPCR)**: 1. Extract nucleic acids from influent and effluent samples using validated extraction kits. 2. Quantify pathogen gene targets using quantitative PCR (qPCR) or digital droplet PCR (ddPCR). 3. Include propidium monoazide (PMA) treatment to distinguish viable from non-viable organisms. 4. Calculate molecular-based log reduction values. 5. Note: Molecular methods detect nucleic acids from both viable and non-viable organisms; viability-based methods may overestimate true inactivation.

## Affecting Factors

### Primary

- **Hydraulic retention time**: Longer HRT increases pathogen exposure to inactivation mechanisms and natural die-off.
- **Current density**: Higher current densities generate more reactive species at electrode surfaces, enhancing electrochemical inactivation.
- **Electrode material and configuration**: Electrodes with catalytic properties or those generating reactive oxygen species (ROS) enhance pathogen inactivation.
- **Temperature**: Higher temperatures accelerate pathogen die-off kinetics.
- **pH conditions**: Extreme pH values near electrodes (especially alkaline cathode conditions, pH > 10) are bactericidal.
- **Biofilm competition**: A well-established electrogenic biofilm competes with and may inhibit pathogenic organisms.
- **Influent pathogen load**: Higher initial pathogen concentrations may require more treatment to achieve the same effluent quality target.
- **Suspended solids**: Pathogens associated with particulate matter are more resistant to disinfection mechanisms; effective TSS removal improves pathogen reduction.

## Related Parameters

- **name**: Pathogen Removal

- **relationship**: Closely related parameter focusing on physical removal mechanisms rather than inactivation.
- **name**: Biosafety Level

- **relationship**: The pathogen content of the wastewater determines the facility biosafety requirements.
- **name**: Effluent BOD Limit

- **relationship**: Effective organic removal is often correlated with improved pathogen reduction.
- **name**: Bioaerosol Control

- **relationship**: Pathogen reduction in the liquid stream reduces the pathogen content of generated bioaerosols.
- **name**: Wastewater Type

- **relationship**: Different wastewater types contain different pathogen populations and concentrations.

## Compatible Systems

Safety Parameters

## References

- WHO (2006). Guidelines for the Safe Use of Wastewater, Excreta and Greywater, Volume 2: Wastewater Use in Agriculture.
- Ieropoulos, I. et al. (2012). Microbial fuel cells for real-world sanitation. Desalination, 299, 1-7.
- Catal, T. et al. (2019). Disinfection of wastewater using microbial fuel cells. Bioresource Technology Reports, 7, 100292.
- EU Regulation 2020/741. Minimum Requirements for Water Reuse.
- Standard Methods for the Examination of Water and Wastewater (2017). 23rd Edition. APHA, AWWA, WEF. Part 9000: Microbiological Examination.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Pathogen+Reduction&body=**Parameter%3A**+Pathogen+Reduction%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Fpathogen-reduction.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Pathogen+Reduction&body=**Parameter%3A**+Pathogen+Reduction%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Fpathogen-reduction.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Pathogen+Reduction&body=**Parameter%3A**+Pathogen+Reduction%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Fpathogen-reduction.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
