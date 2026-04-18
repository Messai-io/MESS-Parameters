# Soil Compatibility

Soil Compatibility assesses the mutual interactions between microbial electrochemical system (MES) components and the soil or sediment environment in which they are installed, encompassing the effects of soil on MES materials (chemical attack, biological degradation, mechanical loading) and the effects of MES on soil quality (heavy metal leaching, pH alteration, microbial community disruption, electroosmotic changes). This parameter is essential for sediment MFCs, constructed wetland MES (CW-MES), plant-MFCs, and any MES deployed in direct soil or subsurface contact. Soil compatibility is quantified through corrosion rates of buried materials, soil contamination potential (leachate testing), geotechnical stability (bearing capacity, settlement), and ecological impact assessment.

From a safety perspective, soil compatibility determines whether buried MES components will maintain structural integrity over their design life or fail prematurely, potentially releasing electrical components, biohazardous materials, or contaminated fluids into the subsurface. Soil corrosivity varies enormously: resistivity below 2,000 ohm-cm indicates severely corrosive conditions for metallic components, while highly acidic soils (pH <4) rapidly degrade concrete and polymer coatings. Soil-embedded electrodes create potential gradient fields that can accelerate corrosion of nearby metallic infrastructure (stray current corrosion of pipelines, building foundations) -- a liability and safety concern regulated under NACE standards. Additionally, electrochemical processes in soil alter local chemistry (pH, redox potential, dissolved metal concentrations), potentially mobilizing naturally occurring contaminants (arsenic, chromium) that become a groundwater contamination risk.

Regulatory frameworks governing soil compatibility include EPA RCRA land disposal restrictions (40 CFR 268), EPA Underground Injection Control Program (40 CFR 144-148), state brownfield and soil contamination regulations, EU Soil Framework Directive provisions, NACE SP0169 for corrosion protection of underground structures, and local building codes for foundation and subsurface construction. Environmental impact assessments (EIAs) for MES installations require soil compatibility evaluation as part of the permitting process.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Application Specific |
| **Subcategory** | Soil Integration |
| **Type** | select |

## Typical Values

- **Valid Range**: Soil resistivity 100-100,000 ohm-cm; pH 3-10; organic matter 0.5-15%
- **Typical Range**: Optimal MES soil conditions: resistivity 500-10,000 ohm-cm; pH 5-8; organic matter 2-10%

## Measurement Methods

- **Soil Characterization for MES Siting (ASTM D4959, ASTM G51, ASTM G57)**: 1. Collect soil samples from planned MES installation depth (minimum 3 sampling points per 100 m2) 2. Measure soil resistivity in-situ using Wenner four-pin method (ASTM G57) at installation depth 3. Determine soil pH by ASTM G51 (soil pH by electrometric method) on 1:1 soil-water extract 4. Analyze soil chemistry: sulfate (ASTM D4327), chloride (ASTM D512), organic matter (ASTM D2974), moisture content (ASTM D4959) 5. Classify soil texture (USCS) and determine Atterberg limits for geotechnical assessment 6. Calculate corrosivity score per AWWA C105/ANSI A21.5 10-point evaluation system
- **Leachate Testing (EPA TCLP, ASTM D3987)**: 1. Prepare MES component specimens (electrodes, membranes, current collectors, housing materials) 2. Conduct Toxicity Characteristic Leaching Procedure (EPA Method 1311) to simulate landfill conditions 3. Alternatively, perform ASTM D3987 (Standard Practice for Shake Extraction of Solid Waste with Water) for site-specific leachate assessment 4. Analyze leachate for regulated metals (RCRA 8 metals), pH, and organic contaminants 5. Compare results against EPA MCLs and state soil cleanup standards 6. If any constituent exceeds TCLP limits: MES materials require hazardous waste management protocols
- **Soil Microbial Impact Assessment**: 1. Collect soil samples before MES installation (baseline) and at 3, 6, 12 months post-installation 2. Extract soil DNA and perform 16S rRNA gene amplicon sequencing (V3-V4 region) 3. Compare microbial community composition (alpha and beta diversity) between control and MES-influenced zones 4. Monitor for changes in functional gene abundance (nitrogen cycling, sulfur cycling, metal resistance genes) 5. Assess soil enzyme activities (dehydrogenase, phosphatase, urease) as indicators of soil health 6. Report any significant shifts that indicate adverse ecological impact

## Affecting Factors

### Primary

- **Soil Chemistry**: pH, redox potential, sulfate, chloride, and organic matter content are the primary drivers of material corrosion and degradation rates in soil
- **Soil Moisture**: Water-saturated soils are more corrosive than dry soils; seasonal water table fluctuations create particularly aggressive wet-dry cycling
- **Soil Type**: Clay soils restrict drainage and create anaerobic conditions; sandy soils drain freely but may lack buffering capacity; peat soils are acidic
- **Microbial Activity**: Soil microorganisms catalyze corrosion (SRB, iron-oxidizing bacteria), degrade polymers (fungal cellulases, bacterial esterases), and modify soil chemistry
- **Current Density**: Higher MES current densities create larger pH gradients and greater electroosmotic effects in surrounding soil
- **Temperature**: Soil temperature affects corrosion rates, microbial activity, and material degradation kinetics
- **Soil Compaction**: Compacted soils have lower permeability, potentially trapping reactive species at the MES-soil interface
- **Root Activity**: Plant roots modify local pH, exude organic compounds, and create preferential flow paths that affect MES-soil interactions
- **Stray Currents**: DC current from MES operating in soil can affect nearby metallic infrastructure through stray current corrosion

## Related Parameters

- **name**: Root Zone Placement

- **relationship**: Determines the depth at which MES components interact with soil, directly affecting soil compatibility requirements
- **name**: Corrosivity Class

- **relationship**: Soil corrosivity is a primary input to the overall corrosivity classification of the MES installation
- **name**: Chemical Resistance

- **relationship**: Materials must resist soil-specific chemical challenges (sulfate attack, chloride pitting, acid degradation)
- **name**: Water Retention

- **relationship**: Soil water retention determines moisture availability at the MES-soil interface
- **name**: Risk Score

- **relationship**: Poor soil compatibility increases the risk of containment failure and environmental contamination

## Compatible Systems

Agricultural Integration

## References

- AWWA. (2010). C105/ANSI A21.5: Polyethylene Encasement for Ductile-Iron Pipe Systems.
- NACE International. (2013). SP0169: Control of External Corrosion on Underground or Submerged Metallic Piping Systems.
- ASTM G57-06(2020). Standard Test Method for Field Measurement of Soil Resistivity Using the Wenner Four-Electrode Method.
- ASTM G51-95(2012). Standard Test Method for Measuring pH of Soil for Use in Corrosion Testing.
- EPA. (1992). Toxicity Characteristic Leaching Procedure (TCLP), Method 1311.
- Tender, L. M., et al. (2008). The first demonstration of a microbial fuel cell as a viable power source: Powering a meteorological buoy. Journal of Power Sources, 179(2), 571-575.
- ACI 318-19. Building Code Requirements for Structural Concrete. American Concrete Institute.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Soil+Compatibility&body=**Parameter%3A**+Soil+Compatibility%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fsoil-compatibility.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Soil+Compatibility&body=**Parameter%3A**+Soil+Compatibility%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fsoil-compatibility.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Soil+Compatibility&body=**Parameter%3A**+Soil+Compatibility%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fsoil-compatibility.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
