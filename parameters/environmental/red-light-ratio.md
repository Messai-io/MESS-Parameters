# Red Light Ratio

Red light ratio quantifies the proportion of red wavelengths (typically 600-700 nm) within the total photosynthetically active radiation (PAR, 400-700 nm) spectrum incident on microbial electrochemical systems (MES). This spectral quality parameter is critical for optimizing photosynthetic efficiency in photo-bioelectrochemical cells because red photons are the most energetically efficient wavelengths for driving photosystem II and photosystem I reactions in chlorophyll-based photosynthetic organisms. The red light ratio is expressed as a dimensionless fraction or percentage of total PAR photon flux.

In photo-BEC applications, the red light ratio directly influences the quantum yield of photosynthetic electron generation. Chlorophyll a has its primary absorption maximum in the red region (680 nm for P680 reaction center of PSII, 700 nm for P700 of PSI), and red photons carry the minimum energy required for photochemical charge separation (approximately 1.8 eV at 680 nm). Blue photons (approximately 2.8 eV at 450 nm) also drive photosynthesis but the excess energy above the red absorption band is dissipated as heat (Stokes loss), making blue photons approximately 35% less efficient on an energy basis despite being equally efficient on a per-photon basis. Therefore, illumination enriched in red wavelengths (red light ratio above 0.5) delivers more photosynthetic electrons per watt of electrical energy consumed by the lighting system.

The red-to-far-red ratio (R:FR, specifically 660 nm to 730 nm) is a separate but related parameter that controls phytochrome-mediated morphological and physiological responses in photosynthetic organisms. High R:FR ratios (above 1.0, typical of direct sunlight) promote compact growth and high photosynthetic capacity, while low R:FR (below 0.5, typical of shade conditions) triggers shade avoidance responses including elongation, reduced chlorophyll synthesis, and altered biofilm architecture. In MES contexts, high R:FR promotes dense, electrode-adherent biofilms with high volumetric productivity, while low R:FR promotes loose, detachment-prone biofilm structures.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Environmental |
| **Subcategory** | Light Spectrum |
| **Type** | number |
| **Unit** | % |
| **Minimum** | 0 |
| **Maximum** | 100 |

## Typical Values

- **Valid Range**: 0 - 1.0 (0-100% of PAR as red)
- **Typical Range**: 0.25 - 0.60
- **Natural sunlight**: 0.28-0.32 (28-32% of PAR photons are red)
- **Red LED (660 nm)**: 1.0 (pure red)
- **White LED**: 0.20-0.35 (depending on phosphor type)
- **Fluorescent (cool white)**: 0.18-0.25
- **Fluorescent (warm white)**: 0.25-0.35
- **Optimal for green algae**: 0.40-0.60
- **Horticultural LED (red+blue)**: 0.70-0.85
- **Incandescent**: 0.40-0.50

## Measurement Methods

- **Spectroradiometric Measurement**: Spectroradiometers (Ocean Optics, Apogee PS-300) measure spectral photon flux density across 400-700 nm at 1-5 nm resolution. The red light ratio is calculated as the integral of photon flux from 600-700 nm divided by the integral from 400-700 nm. This provides the most accurate determination of spectral quality and enables calculation of sub-band ratios (deep red 660-700 nm, orange-red 600-660 nm). Measurement accuracy of 3-5% depends on spectroradiometer calibration against NIST-traceable spectral irradiance standards.
- **Broadband Red and PAR Sensor Combination**: A cost-effective approach uses a narrowband red sensor (silicon photodiode with 620-700 nm bandpass filter) combined with a broadband PAR sensor, with the ratio providing an estimate of red light fraction. This method is suitable for monitoring red light ratio during long-term experiments but lacks the spectral resolution to distinguish between orange-red (600-640 nm) and deep red (640-700 nm) contributions. Accuracy is typically 5-10% due to filter bandwidth effects.
- **LED Spectral Characterization**: For LED-illuminated MES systems, the red light ratio can be calculated from LED manufacturer spectral data and the mixing ratio of different LED channels. A system with 3 red LEDs (660 nm, 30 umol/m^2/s each) and 2 blue LEDs (450 nm, 30 umol/m^2/s each) has a red light ratio of 3/(3+2) = 0.60. This calculation is verified by spectroradiometric measurement at the reactor surface, as actual LED output may differ from specifications by 5-15% due to binning tolerance, temperature effects, and aging.

## Affecting Factors

### Primary

- **Light source selection and LED mixing**: The red light ratio is primarily determined by the choice and combination of light sources. Pure red LEDs provide ratio = 1.0 but lack blue light needed for carotenoid synthesis, DNA repair, and phototaxis. Red:blue LED mixtures of 3:1 to 5:1 (ratio 0.50-0.60) provide optimal balance. Adding green or white LEDs reduces the red ratio but improves human visibility for visual monitoring and provides photons that penetrate deeper into dense cultures.
- **Algal/cyanobacterial species**: Optimal red light ratio varies with photosynthetic pigment composition. Green algae (Chlorella, Chlamydomonas) with chlorophyll a+b prefer ratio 0.40-0.60. Cyanobacteria with phycobilisomes (phycocyanin absorbing at 620 nm) benefit from orange-red enrichment (ratio 0.50-0.70). Red algae with phycoerythrin (absorbing 565 nm) perform better with lower red ratios (0.25-0.40) and higher green content.
- **Culture depth and self-shading**: Red wavelengths are preferentially absorbed by chlorophyll in the first few millimeters of a dense culture, shifting the transmitted spectrum toward green. At 5 cm depth in a culture with 1 g/L dry weight, the red light ratio may decrease from 0.50 at the surface to 0.15 at the rear of the reactor. This spectral shift means that organisms deep in the biofilm experience a fundamentally different light quality than those at the illuminated surface.
- **Reactor wall material**: Different transparent materials have wavelength-dependent transmission. Standard soda-lime glass absorbs slightly more red light (1-2% lower transmission above 650 nm) compared to borosilicate glass. Acrylic (PMMA) has uniform transmission across PAR. Polycarbonate has a slight yellow tint that slightly reduces blue transmission, effectively increasing the red ratio by 2-5%. These effects are small but may be significant for precision spectral experiments.
- **Solar elevation and atmospheric effects**: The red light ratio of natural sunlight increases at low solar elevation angles (sunrise, sunset) because atmospheric Rayleigh scattering preferentially removes blue wavelengths. At noon, solar red ratio is approximately 0.30; at 1 hour before sunset, it increases to 0.40-0.50. Atmospheric water vapor, ozone, and aerosols further modify the spectral distribution, with desert atmospheres transmitting relatively more red light than clean maritime air.

## Compatible Systems

Light Radiation Parameters

## References

- Chen, C.-Y., et al. (2011). Cultivation, photobioreactor design and harvesting of microalgae for biodiesel production. *Bioresource Technology*, 102(1), 71-81.
- Olle, M., & Virsile, A. (2013). The effects of light-emitting diode lighting on greenhouse plant growth and quality. *Agricultural and Food Science*, 22(2), 223-234.
- Wang, C.-Y., Fu, C.-C., & Liu, Y.-C. (2007). Effects of using light-emitting diodes on the cultivation of Spirulina platensis. *Biochemical Engineering Journal*, 37(1), 21-25.
- Schulze, P. S. C., et al. (2014). Effect of light quality supplied by light emitting diodes (LEDs) on growth and biochemical profiles of Nannochloropsis oculata and Tetraselmis chuii. *Algal Research*, 6, 96-104.
- Nozzi, N. E., Oliver, J. W., & Atsumi, S. (2013). Cyanobacteria as a platform for biofuel production. *Frontiers in Bioengineering and Biotechnology*, 1, 7.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Red+Light+Ratio&body=**Parameter%3A**+Red+Light+Ratio%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fred-light-ratio.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Red+Light+Ratio&body=**Parameter%3A**+Red+Light+Ratio%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fred-light-ratio.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Red+Light+Ratio&body=**Parameter%3A**+Red+Light+Ratio%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fred-light-ratio.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
