# Size Distribution

Size Distribution characterizes the statistical spread of particle, pore, fiber, or component dimensions within materials and suspensions used in microbial electrochemical systems (MES). Reported as probability distributions (normal, log-normal, bimodal), this parameter includes metrics such as mean diameter (D50), span ((D90-D10)/D50), polydispersity index (PDI), geometric standard deviation, and specific size fractions (D10, D50, D90, D99). In MES, size distribution applies to electrode particles (carbon black, activated carbon, catalyst nanoparticles), membrane pores (controlling ion selectivity and pathogen rejection), suspended solids in effluent (affecting turbidity compliance), aerosol particles (biosafety concern), and colloidal nanomaterials (environmental release risk).

Safety and regulatory implications of size distribution are extensive. Particle size distribution of airborne dusts from electrode manufacturing determines the respirable fraction (particles <4 micrometer) that penetrates deep into the lungs, directly affecting occupational health risk assessment per OSHA standards. Membrane pore size distribution governs pathogen rejection capability: a membrane with D99 pore size smaller than the target pathogen (e.g., Cryptosporidium oocysts 4-6 micrometer, bacteria >0.2 micrometer, viruses 20-300 nm) ensures microbiological safety of treated water. Nanomaterial size distribution determines their environmental behavior: particles <100 nm have different toxicological profiles and regulatory status than bulk materials under EU REACH and EPA TSCA. Effluent particle size distribution affects compliance with total suspended solids (TSS) limits and turbidity standards.

Regulatory frameworks governing size distribution include OSHA respirable dust standards (29 CFR 1910.1000), EPA National Primary Drinking Water Regulations (turbidity as a surrogate for pathogen removal), EU Nanomaterial Definition Recommendation (2022/C 229/01: materials with 50% or more particles in the 1-100 nm range), NIOSH RELs for specific nanomaterials, and ISO 22412 for particle size measurement methodology.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Emerging Technology |
| **Subcategory** | Nanoparticle Properties |
| **Type** | number |
| **Unit** | % |
| **Minimum** | 5 |
| **Maximum** | 50 |

## Typical Values

- **Valid Range**: 1 nm to 10 mm depending on material type
- **Typical Range**: Varies widely by application; see categories below

## Measurement Methods

- **Dynamic Light Scattering (DLS) - ISO 22412**: 1. Prepare dilute suspension of particles in appropriate dispersant (concentration: 0.001-0.1% w/v for optimal measurement) 2. Transfer to clean cuvette (disposable polystyrene or quartz for UV-absorbing samples) 3. Measure in DLS instrument (e.g., Malvern Zetasizer) at 25 degC after 2-minute equilibration 4. Acquire autocorrelation function and calculate hydrodynamic diameter distribution using cumulants or CONTIN algorithm 5. Report Z-average diameter, PDI, and intensity/volume/number distributions 6. Limitations: Range 0.3 nm - 10 micrometer; not suitable for non-spherical particles or wide distributions (PDI >0.7)
- **Laser Diffraction - ISO 13320**: 1. Set up wet or dry dispersion module on laser diffraction analyzer (e.g., Malvern Mastersizer) 2. For wet analysis: disperse particles in water or appropriate solvent with ultrasonication (1-5 minutes) 3. Pump through measurement cell; ensure obscuration within 5-15% range 4. Collect scattered light pattern and calculate volume-weighted size distribution using Mie theory (requires refractive index input) 5. Report D10, D50, D90, span, and volume-weighted mean diameter 6. Range: 0.1 micrometer to 3 mm; excellent for electrode powders and suspended solids
- **Electron Microscopy (SEM/TEM) with Image Analysis**: 1. Prepare sample on appropriate substrate (SEM: conductive stub with sputter coat; TEM: copper grid with carbon film) 2. Image at multiple magnifications to capture the full size range 3. Manually or automatically measure >300 individual particles for statistically valid distribution 4. Report number-weighted size distribution with mean, median, mode, and standard deviation 5. Required by EU nanomaterial definition for regulatory classification (number-weighted distribution) 6. Time-intensive but provides morphological information alongside size data
- **Membrane Pore Size Distribution (ASTM F316, ISO 13588)**: 1. Perform bubble point test to determine the maximum pore size (ASTM F316) 2. Conduct capillary flow porometry (wet and dry flow curves) to determine mean flow pore size and distribution 3. Alternatively: mercury intrusion porosimetry (MIP) for pore size distribution 3.5 nm - 500 micrometer 4. Report maximum pore size, mean flow pore size, and pore size distribution curve 5. Safety-critical: maximum pore size must be smaller than the target pathogen for reliable rejection

## Affecting Factors

### Primary

- **Manufacturing Process**: Synthesis method determines primary particle size and distribution width; grinding/milling produces broader distributions than controlled precipitation
- **Agglomeration/Aggregation**: Van der Waals forces cause nanoparticles to form agglomerates in suspension; ultrasonication and surfactants improve dispersion but do not break primary aggregates
- **Measurement Method**: Different methods weight the distribution differently (number vs. volume vs. intensity); results are not directly comparable between methods
- **Sample Preparation**: Insufficient dispersion yields artificially large sizes; over-sonication can break fragile agglomerates or particles
- **Environmental Conditions**: pH, ionic strength, and temperature affect colloidal stability and apparent size distribution in suspension
- **Aging**: Ostwald ripening causes size distribution to shift toward larger particles over storage time
- **Operational Wear**: Electrode material attrition during operation releases fine particles, broadening the size distribution
- **Filtration and Separation**: Membrane-based treatment selectively removes particles above the pore size cutoff, narrowing the effluent size distribution
- **Biofilm Interaction**: Biofilm traps particles, altering the effective size distribution in the reactor and effluent

## Related Parameters

- **name**: Loading Percentage

- **relationship**: Catalyst particle size distribution affects the effective surface area per unit loading and catalytic activity
- **name**: Surface Charge

- **relationship**: Particle size influences the surface-area-to-volume ratio and thus the total surface charge per unit mass
- **name**: Transparency

- **relationship**: Particle size distribution in effluent directly determines turbidity and optical transparency
- **name**: Target Analyte

- **relationship**: Membrane pore size distribution must match the target analyte size for effective separation or detection
- **name**: Risk Score

- **relationship**: Nanoscale size distributions carry higher hazard ratings due to enhanced biological uptake and toxicity

## Compatible Systems

Nanomaterial Integration

## References

- ISO 22412:2017. Particle size analysis -- Dynamic light scattering (DLS).
- ISO 13320:2020. Particle size analysis -- Laser diffraction methods.
- EU. (2022). Commission Recommendation on the definition of nanomaterial. 2022/C 229/01.
- NIOSH. (2013). Current Intelligence Bulletin 65: Occupational Exposure to Carbon Nanotubes and Nanofibers.
- Allen, T. (1997). Particle Size Measurement, 5th Edition. Chapman & Hall.
- ASTM F316-03(2019). Standard Test Methods for Pore Size Characteristics of Membrane Filters by Bubble Point and Mean Flow Pore Test.
- Oberdorster, G., Oberdorster, E., & Oberdorster, J. (2005). Nanotoxicology: an emerging discipline evolving from studies of ultrafine particles. Environmental Health Perspectives, 113(7), 823-839.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Size+Distribution&body=**Parameter%3A**+Size+Distribution%0A**Category%3A**+Emerging+Technology%0A**File%3A**+parameters%2Femerging-technology%2Fsize-distribution.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Size+Distribution&body=**Parameter%3A**+Size+Distribution%0A**Category%3A**+Emerging+Technology%0A**File%3A**+parameters%2Femerging-technology%2Fsize-distribution.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Size+Distribution&body=**Parameter%3A**+Size+Distribution%0A**Category%3A**+Emerging+Technology%0A**File%3A**+parameters%2Femerging-technology%2Fsize-distribution.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
