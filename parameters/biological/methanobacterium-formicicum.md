# Methanobacterium Formicicum

*Methanobacterium formicicum* is a strictly anaerobic, hydrogenotrophic and formatotrophic methanogenic archaeon belonging to the order Methanobacteriales. It is distinguished by its ability to utilize both H2/CO2 and formate as substrates for methanogenesis, producing methane (CH4) as the primary metabolic end product. In microbial electrochemical systems, *M. formicicum* is of central importance in microbial electrolysis cells (MECs) designed for electromethanogenesis, where it converts cathodically produced H2 and/or CO2 into biomethane, effectively storing electrical energy in the form of a renewable fuel.

In MEC cathode biofilms, *M. formicicum* occupies a critical functional niche. At the cathode, water is electrochemically reduced to H2, which this organism then rapidly consumes to drive CO2 reduction to CH4 via the Wolfe cycle (hydrogenotrophic methanogenesis pathway). This consumption of cathodic H2 shifts the equilibrium favorably, enhancing the overall efficiency of hydrogen evolution and effectively lowering the overpotential required for the cathodic reaction. Some evidence suggests that *M. formicicum* may also accept electrons directly from the cathode surface, bypassing the H2 intermediate entirely through direct interspecies electron transfer (DIET), though this mechanism remains debated for this species.

The organism's ability to use formate as a sole energy source is particularly relevant to MES, as formate can be produced electrochemically at the cathode and then biologically converted to methane. This creates a cascade of electrochemical-biological conversions that increase the energy storage capacity of MES beyond what purely abiotic systems can achieve. *M. formicicum* is commonly found in anaerobic digesters, sediments, and ruminant digestive tracts, and it frequently enriches on MEC cathodes in mixed-culture systems.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Biological |
| **Subcategory** | Archaea - Methanogens |
| **Type** | object |

## Typical Values

- **Valid Range (CH4 production)**: 0.01 to 5.0 mmol CH4/L/day
- **Typical Range (CH4 production in MEC)**: 0.1 to 2.0 mmol CH4/L/day
- **Optimal Temperature**: 35-40 degrees C (mesophilic)
- **Optimal pH**: 6.8-7.8
- **Doubling Time**: 6-15 hours (H2/CO2), 12-24 hours (formate)
- **H2 Threshold**: 6-20 Pa (minimum H2 partial pressure for growth)
- **CH4 in Biogas**: 65-90% when enriched on MEC cathodes
- **Formate Utilization Rate**: 5-50 mmol formate/gDCW/h
- **Current-to-Methane Efficiency**: 40-85% in optimized MEC systems

## Measurement Methods

- **Gas Chromatography for Methane Quantification**: Headspace gas samples are analyzed by GC with flame ionization detection (GC-FID) or thermal conductivity detection (GC-TCD) for CH4, CO2, and H2 composition. Gas production rates are measured by water displacement or automated gas counters. Methane yield is normalized to current input (mol CH4/mol e-) or cathode volume.
- **Isotope Tracing (13C-labeling)**: 13C-labeled CO2 or formate is supplied to track carbon flow into methane. 13C-CH4 is detected by GC-IRMS (isotope ratio mass spectrometry). This distinguishes biotic from abiotic methane production and identifies the dominant methanogenic pathway (hydrogenotrophic vs. aceticlastic).
- **Electrochemical Characterization of Biocathodes**: Linear sweep voltammetry and chronoamperometry of biocathodes with and without *M. formicicum* biofilms compare abiotic H2 evolution to bioaugmented methane production. The shift in cathodic current onset potential indicates biocatalytic enhancement. EIS reveals charge transfer resistance changes associated with biofilm development.
- **Molecular Quantification**: qPCR with mcrA gene primers (methyl-coenzyme M reductase alpha subunit) specifically quantifies methanogen abundance. 16S rRNA gene sequencing with archaeal-specific primers tracks *M. formicicum* within mixed methanogenic communities. FISH with Methanobacteriaceae-specific probes visualizes spatial distribution on cathode surfaces.
- **Formate Consumption Assays**: Formate concentration is measured by ion chromatography or enzymatic colorimetric assays at time intervals. The first-order formate consumption rate constant provides a kinetic parameter for modeling MES performance.

## Affecting Factors

### Primary

- **H2 Availability**: As a hydrogenotrophic methanogen, *M. formicicum* requires a continuous supply of H2. In MECs, this is provided by cathodic water reduction. The applied voltage (typically 0.5-1.0 V) and cathode material determine H2 production rate and thus methane generation rate.
- **CO2 Concentration**: CO2 is the carbon source for hydrogenotrophic methanogenesis. Adequate dissolved CO2 must be maintained, which depends on pH, temperature, and headspace management. CO2 limitation can occur in well-buffered, high-pH cathode chambers.
- **Temperature**: *M. formicicum* is mesophilic with optimal activity at 35-40 degrees C. Below 25 degrees C, methane production rates decrease significantly. Temperature control is important for consistent MEC performance.
- **pH**: Optimal near neutrality (6.8-7.8). Cathodic H2 evolution causes local pH increase (OH- production), which can inhibit methanogens near the electrode surface. Buffer capacity of the catholyte is critical.
- **Cathode Potential**: More negative cathode potentials increase H2 production but may exceed the capacity of the methanogenic biofilm to consume it. Matching cathode potential to biological consumption capacity optimizes overall efficiency.
- **Formate Availability**: When formate is present (from CO2 electroreduction or as exogenous supplement), *M. formicicum* can use it directly, potentially improving carbon conversion efficiency.
- **Competition with Homoacetogens**: Homoacetogenic bacteria (e.g., *Acetobacterium woodii*) compete for H2 and CO2 at the cathode, producing acetate instead of methane. The outcome depends on H2 partial pressure and community dynamics.
- **Trace Metal Availability**: Nickel (for F430 cofactor), cobalt (for corrinoids), and iron (for ferredoxins) are essential for methanogenic enzymes.

## Related Parameters

- **name**: CH4 Production Rate

- **relationship**: Direct output metric for *M. formicicum* activity in MECs
- **name**: Current Density

- **relationship**: Determines the rate of cathodic H2 supply for methanogenesis
- **name**: H2 Yield

- **relationship**: In hybrid systems, H2 is both a product and an intermediate consumed by *M. formicicum*
- **name**: Microbial Diversity Index

- **relationship**: Methanogen abundance versus electrogen abundance reflects system function
- **name**: Coulombic Efficiency

- **relationship**: Current-to-methane conversion efficiency

## Compatible Systems

Microorganism Database

## References

- Cheng, S., et al. (2009). Direct biological conversion of electrical current into methane by electromethanogenesis. *Environmental Science & Technology*, 43(10), 3953-3958.
- Thauer, R. K., et al. (2008). Methanogenic archaea: ecologically relevant differences in energy conservation. *Nature Reviews Microbiology*, 6, 579-591.
- Siegert, M., et al. (2015). The presence of hydrogenotrophic methanogens in the inoculum improves methane gas production in microbial electrolysis cells. *Frontiers in Microbiology*, 5, 778.
- Schuchmann, K., & Muller, V. (2014). Autotrophy at the thermodynamic limit of life. *Nature Reviews Microbiology*, 12, 809-821.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Methanobacterium+Formicicum&body=**Parameter%3A**+Methanobacterium+Formicicum%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fmethanobacterium-formicicum.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Methanobacterium+Formicicum&body=**Parameter%3A**+Methanobacterium+Formicicum%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fmethanobacterium-formicicum.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Methanobacterium+Formicicum&body=**Parameter%3A**+Methanobacterium+Formicicum%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fmethanobacterium-formicicum.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
