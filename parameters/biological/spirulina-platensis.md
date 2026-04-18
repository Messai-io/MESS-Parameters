# Spirulina Platensis

*Spirulina platensis* (taxonomically reclassified as *Arthrospira platensis*) is a filamentous, multicellular cyanobacterium characterized by its distinctive helical trichome morphology that has been cultivated commercially for decades as a nutritional supplement and is increasingly investigated for integration with microbial electrochemical systems. This alkaliphilic, halotolerant organism thrives in soda lakes and alkaline waters (pH 8.5-11), producing biomass rich in protein (60-70% dry weight), phycocyanin pigments, essential fatty acids (gamma-linolenic acid), and vitamins.

In MES, *Spirulina* serves several roles: as a photosynthetic biocathode organism providing O2 for cathodic oxygen reduction; as a feedstock for MFC anodes (using dried Spirulina biomass as the organic substrate); and as a component of integrated wastewater treatment-MES-algal production systems. The organism's vigorous oxygenic photosynthesis generates O2 at rates of 200-500 mg O2/L/day in dense cultures, sufficient to support efficient cathodic reactions in photo-MFCs without mechanical aeration.

The unique alkaline growth conditions of *Spirulina* offer advantages for MES. High-pH media (pH 9-10) increase the ionic conductivity of the electrolyte, reducing ohmic losses. The alkaline environment also suppresses contamination by most competing microorganisms, enabling long-term stable operation. The commercial scale of *Spirulina* cultivation (thousands of tonnes per year globally) demonstrates the feasibility of large-scale production, which translates to potential for large-scale integrated MES-algal systems. The high-value biomass coproducts (phycocyanin valued at $50-100/kg) significantly improve the economic viability of integrated photo-MES systems.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Biological |
| **Subcategory** | Algae - Photosynthetic Organisms |
| **Type** | object |

## Typical Values

- **Valid Range (biomass productivity)**: 0.05 to 2.0 g/L/day
- **Typical Range (biomass productivity)**: 0.2 to 1.0 g/L/day
- **Protein Content**: 55-70% of dry weight
- **Phycocyanin Content**: 10-20% of dry weight
- **Optimal Temperature**: 30-37 degrees C
- **Optimal pH**: 9.0-10.5
- **O2 Production**: 200-500 mg O2/L/day in dense cultures
- **Photo-MFC Power Enhancement**: 30-150% over abiotic cathode
- **Doubling Time**: 1.5-4 days
- **NaHCO3 Requirement**: 10-20 g/L

## Measurement Methods

- **Biomass Quantification**: Optical density at 560 nm (OD560) and 680 nm provides rapid growth monitoring. Dry weight is measured gravimetrically. Phycocyanin is quantified by aqueous extraction and spectrophotometry at 615 nm and 652 nm. Chlorophyll a is extracted in 90% methanol and measured at 665 nm.
- **Photosynthetic Performance**: PAM fluorometry measures Fv/Fm (optimal quantum yield) and ETR. O2 evolution is measured by Clark electrode under controlled illumination. P-I curves characterize photoinhibition thresholds.
- **Photo-MFC Integration Testing**: MFCs with Spirulina cathode chambers operate under controlled light-dark cycles. Current and voltage are continuously monitored. The ratio of light-phase to dark-phase power output quantifies the photosynthetic contribution.
- **Nutrient Uptake Kinetics**: NO3-, NH4+, and PO4 3- removal rates from growth media or wastewater are measured by colorimetric or ion chromatographic methods. CO2 consumption is estimated from alkalinity changes or direct headspace analysis.
- **Biomass Quality Analysis**: Amino acid profiling by HPLC, fatty acid composition by GC-FID (particularly gamma-linolenic acid), and mineral content by ICP-OES characterize the nutritional value of co-produced biomass.

## Affecting Factors

### Primary

- **pH and Alkalinity**: *Spirulina* requires strongly alkaline conditions (pH 9-10.5) with high bicarbonate concentrations (10-20 g/L NaHCO3). This creates a unique MES operating environment with high ionic conductivity but requires alkali-resistant electrode materials.
- **Light Intensity**: Photosynthesis saturates at 100-300 umol photons/m2/s. Self-shading in dense cultures is significant. Optimal areal light delivery for MES integration requires thin-layer reactor designs.
- **Temperature**: Optimal at 30-37 degrees C. Below 20 degrees C, growth slows dramatically. Above 40 degrees C, thermal damage occurs.
- **Carbon Source**: NaHCO3 is the primary carbon source. CO2 supplementation accelerates growth but must be balanced against pH changes.
- **Nitrogen Source**: NaNO3 is traditionally used. NH4+ can substitute at moderate concentrations but may be toxic above 100 mg/L at high pH due to free ammonia.
- **Salinity**: Moderate halotolerance (up to 30 g/L NaCl) allows operation in saline media, benefiting MES conductivity.
- **Iron**: Essential for photosynthetic electron transport. EDTA-chelated iron (5-10 mg/L) maintains bioavailability at high pH.
- **Contamination**: Alkaline conditions provide natural contamination control, but Arthrospira-specific grazers and competing cyanobacteria can appear.

## Related Parameters

- **name**: Power Density

- **relationship**: Photo-MFC enhancement from Spirulina O2 production
- **name**: COD Removal

- **relationship**: Integrated systems combine anodic organic removal with cathodic photosynthetic treatment
- **name**: Nitrogen Removal

- **relationship**: Assimilatory nitrogen uptake by Spirulina
- **name**: Substrate

- **relationship**: Spirulina biomass as MFC anode feedstock
- **name**: Operating Voltage

- **relationship**: Cathodic enhancement from biogenic O2

## Compatible Systems

Microorganism Database

## References

- Furmanczyk, E. M., et al. (2020). Spirulina-based electrochemical biosensors. *Algal Research*, 46, 101774.
- Gouveia, L., et al. (2014). Photo-MFC with microalgae-covered cathode. *Bioresource Technology*, 154, 171-177.
- Vonshak, A. (1997). Spirulina platensis (Arthrospira): Physiology, Cell-Biology and Biotechnology. Taylor & Francis.
- Belay, A. (2002). The potential application of Spirulina as a nutritional and therapeutic supplement. *Journal of the American Nutraceutical Association*, 5(2), 27-48.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Spirulina+Platensis&body=**Parameter%3A**+Spirulina+Platensis%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fspirulina-platensis.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Spirulina+Platensis&body=**Parameter%3A**+Spirulina+Platensis%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fspirulina-platensis.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Spirulina+Platensis&body=**Parameter%3A**+Spirulina+Platensis%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fspirulina-platensis.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
