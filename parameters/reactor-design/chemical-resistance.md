# Chemical Resistance

Chemical Resistance in microbial electrochemical systems (MES) characterizes the ability of system materials -- including electrodes, membranes, gaskets, housings, tubing, and adhesives -- to withstand degradation, swelling, dissolution, or mechanical failure when exposed to the chemical environment within and surrounding the system. This parameter is quantified through standardized immersion testing protocols and rated on scales defined by material manufacturers and international standards. In MES, the chemical environment is uniquely aggressive: it combines biogenic organic acids (acetic, butyric, propionic), dissolved gases (CO2, H2S, NH3, H2), variable pH (2-12), oxidizing and reducing conditions at different electrodes, microbial metabolites, and potentially hazardous substrates from industrial wastewater.

Chemical resistance is a primary safety parameter because material failure in MES can lead to catastrophic outcomes: leakage of biohazardous fluids containing pathogenic organisms, release of flammable hydrogen gas from MECs, electrical short circuits from corroded conductors, and structural collapse of pressurized reactor components. Regulatory frameworks require documented chemical compatibility for all wetted materials, particularly when MES systems process regulated waste streams or produce water intended for reuse. OSHA's Process Safety Management standard (29 CFR 1910.119) mandates mechanical integrity programs that include chemical compatibility verification, and the ASME Pressure Vessel Code (BPVC Section VIII) requires material compatibility documentation for containment vessels.

Material selection based on chemical resistance also has environmental regulatory implications under EPA's RCRA program, as degraded materials may generate hazardous secondary waste. The EU's Restriction of Hazardous Substances (RoHS) Directive and REACH regulation further constrain material choices, requiring chemical resistance data to ensure that degradation products do not introduce restricted substances into waste streams.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Reactor Design |
| **Subcategory** | Cell Materials |
| **Type** | number |
| **Minimum** | 1 |
| **Maximum** | 10 |

## Typical Values

- **Valid Range**: Resistance ratings from A (Excellent/No Effect) to D (Severe Effect/Not Recommended), or quantitative weight/dimensional change 0-100%
- **Typical Range**: Target rating A or B for all wetted materials in MES applications

## Measurement Methods

- **ASTM D543 - Standard Practices for Evaluating the Resistance of Plastics to Chemical Reagents**: 1. Prepare standardized test specimens (76.2 mm x 25.4 mm x 3.2 mm) of each candidate material 2. Condition specimens at 23 +/- 2 degC and 50 +/- 5% RH for 48 hours minimum 3. Measure initial weight, dimensions, and mechanical properties (tensile per ASTM D638) 4. Immerse specimens in representative MES fluid (anolyte, catholyte, or mixed effluent) at operating temperature 5. Remove specimens at 7, 30, 90, and 180-day intervals; measure weight change, dimensional change, and mechanical properties 6. Rate resistance: A (<0.5% change), B (0.5-3%), C (3-10%), D (>10%)
- **ISO 175 - Plastics Determination of Effects of Immersion in Liquid Chemicals**: 1. Follow specimen preparation per ISO 175:2010 standard dimensions 2. Immerse in specific chemicals representative of MES environment at 23 degC and elevated temperature (operating conditions) 3. Measure mass change, visual appearance, and flexural properties at defined intervals 4. Report chemical resistance classification per ISO nomenclature
- **Electrochemical Corrosion Testing (ASTM G5, G59, G102)**: 1. For metallic components, prepare polished specimens mounted in epoxy 2. Perform potentiodynamic polarization scanning in simulated MES electrolyte 3. Determine corrosion rate (mpy or mm/year), pitting potential, and passivation behavior 4. Corrosion rate <0.1 mm/year: Excellent; 0.1-0.5: Good; 0.5-1.0: Fair; >1.0: Not recommended 5. Supplement with long-term immersion testing per ASTM G31

## Affecting Factors

### Primary

- **pH Range**: Most material degradation is accelerated at extreme pH; polymer hydrolysis rates increase 2-3x per pH unit below 3 or above 11
- **Temperature**: Chemical reaction rates approximately double per 10 degC increase (Arrhenius relationship); critical for tropical or process-heated MES installations
- **Chemical Concentration**: Organic acid concentrations above 50 mM significantly accelerate polymer degradation; chloride concentrations above 200 mg/L increase pitting risk for stainless steels
- **Oxidation-Reduction Potential (ORP)**: High anodic potentials generate reactive oxygen species that attack organic materials; cathodic conditions may cause hydrogen embrittlement in metals
- **Microbial Activity**: Microbiologically influenced corrosion (MIC) creates localized acidic conditions (pH <2) under biofilms, even when bulk pH is neutral
- **Mechanical Stress**: Stress-corrosion cracking occurs when chemical exposure and mechanical stress combine; relevant for pressurized MES components
- **UV Exposure**: Outdoor MES installations experience photodegradation of polymer components
- **Galvanic Coupling**: Dissimilar metals in electrical contact accelerate corrosion of the less noble material
- **Flow Velocity**: High fluid velocities cause erosion-corrosion, particularly at pipe bends and constrictions

## Related Parameters

- **name**: Corrosivity Class

- **relationship**: Chemical resistance ratings must match or exceed the system's corrosivity classification
- **name**: Acid Type

- **relationship**: Specific acid identity determines which materials are compatible and which will fail
- **name**: Sterilization Method

- **relationship**: Autoclaving, chemical sterilization, and UV exposure impose additional chemical resistance demands beyond normal operation
- **name**: Max Operating Temperature

- **relationship**: Temperature accelerates chemical degradation; material ratings must account for thermal-chemical synergies
- **name**: Stability

- **relationship**: Long-term chemical resistance directly determines system stability and operational lifetime

## Compatible Systems

Cell Geometry Dimensions

## References

- ASTM D543-20. Standard Practices for Evaluating the Resistance of Plastics to Chemical Reagents.
- ISO 175:2010. Plastics -- Methods of test for the determination of the effects of immersion in liquid chemicals.
- ASTM G31-21. Standard Guide for Laboratory Immersion Corrosion Testing of Metals.
- NACE International. (2015). NACE MR0175/ISO 15156 - Petroleum and natural gas industries -- Materials for use in H2S-containing environments.
- Revie, R. W. (Ed.). (2011). Uhlig's Corrosion Handbook, 3rd Edition. John Wiley & Sons.
- Logan, B. E. (2008). Microbial Fuel Cells. John Wiley & Sons. Chapter 5: Materials.
- Koch, G. H., et al. (2002). Corrosion Costs and Preventive Strategies in the United States. NACE International Publication FHWA-RD-01-156.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Chemical+Resistance&body=**Parameter%3A**+Chemical+Resistance%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fchemical-resistance.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Chemical+Resistance&body=**Parameter%3A**+Chemical+Resistance%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fchemical-resistance.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Chemical+Resistance&body=**Parameter%3A**+Chemical+Resistance%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fchemical-resistance.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
