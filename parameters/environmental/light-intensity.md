# Light Intensity

Light intensity in microbial electrochemical systems (MES) refers to the radiant power per unit area of photosynthetically active radiation (PAR, 400-700 nm) incident on the reactor surface or phototrophic biofilm, typically measured in micromol photons/m^2/s (also called microeinsteins/m^2/s) or in W/m^2. This is the single most important environmental parameter for photobioelectrochemical systems, as it directly determines the rate of photosynthetic electron generation, carbon fixation, and ultimately the bioelectrochemical energy output.

The relationship between light intensity and photosynthetic rate follows a characteristic saturation curve. At low intensities, photosynthesis increases linearly with light (light-limited regime). As intensity increases, the rate approaches a maximum (light-saturated regime) determined by the capacity of downstream dark reactions (Calvin cycle, electron transport chain). Beyond the saturation point, further increases in intensity cause photoinhibition through photodamage to Photosystem II, reactive oxygen species generation, and pigment bleaching, reducing both photosynthetic rate and biofilm viability.

For MES applications, optimal light intensity balances maximum photosynthetic electron flux against photoinhibitory damage and energy cost (for artificial illumination). The optimal intensity depends strongly on the organism, biofilm thickness, temperature, and CO2 availability. Thin biofilms of high-light-adapted species may saturate at 500-1000 micromol/m^2/s, while thick biofilms can productively use higher intensities because light attenuates with depth, preventing photoinhibition of inner cells. Understanding light intensity requirements is essential for designing cost-effective illumination systems for laboratory photo-MFCs and for siting outdoor installations at locations with appropriate solar resources.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Environmental |
| **Type** | number |
| **Unit** | μmol/m²·s |
| **Papers Reporting** | 4 |

## Typical Values

- **Valid Range**: 0 to 2,500 micromol/m^2/s (darkness to full tropical sun)
- **Typical Range (Laboratory Photo-MFC)**: 20 to 200 micromol/m^2/s
- **Full Sunlight (Clear Sky, Noon)**: 1,800 to 2,200 micromol/m^2/s
- **Overcast Sky**: 50 to 500 micromol/m^2/s
- **Light Saturation Point (Most Algae)**: 200 to 500 micromol/m^2/s
- **Light Compensation Point**: 5 to 20 micromol/m^2/s
- **Optimal for Thick Biofilm MES**: 100 to 500 micromol/m^2/s
- **Photoinhibition Onset (Thin Culture)**: 500 to 1,500 micromol/m^2/s

## Measurement Methods

- **Quantum Sensor (PAR Meter)**: Quantum sensors measure PAR (400-700 nm) in micromol photons/m^2/s. They use silicon photodiodes with cosine-corrected optical filters calibrated for uniform sensitivity across the PAR band. LI-COR LI-190R and Apogee SQ series are widely used in MES research. Accuracy is typically +/- 5% of reading.
- **Spectroradiometer**: Spectroradiometers provide spectrally resolved light intensity measurements across the full wavelength range, allowing determination of both total PAR and the spectral distribution. This detailed information is essential for understanding the photobiological effectiveness of the light environment.
- **Lux Meter (with Conversion)**: Lux meters measure illuminance weighted by human visual sensitivity. Conversion to PAR units requires knowledge of the light source spectrum (conversion factor varies from ~54 lux per micromol/m^2/s for daylight to ~76 for cool-white fluorescent). This method is less accurate than quantum sensors but lux meters are more widely available.
- **Silicon Photodiode with Calibration**: Bare silicon photodiodes with known spectral responsivity can be calibrated against a reference light source to measure absolute light intensity. This approach is cost-effective for multi-sensor arrays monitoring spatial light distribution across MES reactors.

## Affecting Factors

### Primary

- **Light Source Type and Power**: The wattage and efficiency of the illumination source (sunlight, LED, fluorescent) determine the maximum available intensity.
- **Distance from Source**: For artificial point or line sources, intensity decreases with the square of distance (inverse square law).
- **Cloud Cover and Atmospheric Conditions**: Solar light intensity varies from near-zero (night, dense cloud) to ~2200 micromol/m^2/s (clear noon tropical sun).
- **Reactor Optical Design**: Light transmission through reactor walls, electrolyte absorption, electrode opacity, and optical path length all modify the intensity reaching the biofilm.
- **Biofilm Self-Shading**: As biofilm thickness increases, light attenuates exponentially with depth according to the Beer-Lambert law, creating steep intensity gradients within the biofilm.
- **Surface Orientation**: The angle of incidence affects the projected intensity on the biofilm surface (cosine law).
- **Reflections**: Reflective surfaces behind or beside the reactor can increase the effective light intensity through multiple passes.
- **Water and Electrolyte Absorption**: Dissolved and suspended materials absorb light wavelength-dependently, reducing intensity.

## Related Parameters

- **name**: Light Duration

- **relationship**: Duration and intensity together determine the daily light integral (total photon dose).
- **name**: Light Wavelength

- **relationship**: Different wavelengths have different photosynthetic effectiveness.
- **name**: Photosynthetic Active Radiation

- **relationship**: PAR is the integrated measure of light intensity across the photosynthetically active band.
- **name**: Photon Flux Density

- **relationship**: Synonymous with light intensity when measured in micromol/m^2/s.
- **name**: Light Intensity (Lux)

- **relationship**: Alternative measurement unit weighted for human visual perception.

## Compatible Systems

Light Conditions

## References

- McCormick, A.J., Bombelli, P., Bradley, R.W., et al. (2015). Biophotovoltaics. *Energy & Environmental Science*, 8(4), 1092-1109.
- Bombelli, P., Bradley, R.W., Scott, A.M., et al. (2011). Quantitative analysis of factors limiting solar power transduction by *Synechocystis*. *Energy & Environmental Science*, 4(11), 4690-4698.
- Rosenbaum, M., He, Z., & Angenent, L.T. (2010). Light energy to bioelectricity. *Current Opinion in Biotechnology*, 21(3), 259-264.
- Kirk, J.T.O. (2011). *Light and Photosynthesis in Aquatic Ecosystems*. 3rd ed., Cambridge University Press.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Light+Intensity&body=**Parameter%3A**+Light+Intensity%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Flight-intensity.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Light+Intensity&body=**Parameter%3A**+Light+Intensity%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Flight-intensity.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Light+Intensity&body=**Parameter%3A**+Light+Intensity%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Flight-intensity.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
