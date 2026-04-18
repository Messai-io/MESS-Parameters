# Light Intensity Lux

Light intensity measured in lux is the illuminance of a surface, defined as the luminous flux per unit area weighted by the photopic luminosity function of the human eye. In microbial electrochemical systems (MES), lux is a commonly encountered but scientifically imprecise measurement of light for photobiological applications because the lux scale is optimized for human visual perception (peaking at 555 nm, green light) rather than for photosynthetic activity. Nevertheless, many MES studies report light intensity in lux due to the widespread availability and low cost of lux meters compared to quantum (PAR) sensors.

The fundamental limitation of lux for MES applications is that the human eye sensitivity function assigns different weights to different wavelengths than photosynthetic organisms do. For example, green light at 555 nm receives maximum weight in lux calculations but is the least efficiently absorbed wavelength for most chlorophyll-containing organisms. Conversely, red light (660 nm) and blue light (440 nm), which are most efficiently absorbed by chlorophyll a, receive relatively lower weights in the lux scale. This means that the same lux value from different light sources (e.g., white LED vs. red LED vs. sunlight) can produce vastly different photosynthetic rates.

Despite these limitations, lux measurements remain useful for approximate characterization of MES light environments, for comparison with the large body of existing literature that reports in lux, and for applications where spectral composition is constant (allowing a fixed conversion factor to PAR units). For rigorous MES research, lux values should always be accompanied by the light source spectral description and, ideally, parallel PAR measurements to enable accurate cross-study comparisons.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Environmental |
| **Subcategory** | Light Intensity |
| **Type** | number |
| **Unit** | lux |
| **Minimum** | 0 |
| **Maximum** | 100000 |
| **Papers Reporting** | 10 |

## Typical Values

- **Valid Range**: 0 to 150,000 lux
- **Typical Range (Laboratory MES)**: 1,000 to 10,000 lux
- **Full Sunlight (Noon)**: 100,000 to 130,000 lux
- **Overcast Day**: 1,000 to 25,000 lux
- **Office Lighting**: 300 to 500 lux
- **Typical Photo-MFC Study**: 2,000 to 5,000 lux
- **Conversion Factor (Daylight)**: 1 micromol/m^2/s PAR ~ 54 lux
- **Conversion Factor (Cool White Fluorescent)**: 1 micromol/m^2/s ~ 76 lux
- **Conversion Factor (Red LED 660nm)**: 1 micromol/m^2/s ~ 15 lux

## Measurement Methods

- **Digital Lux Meter**: Digital lux meters use silicon photodiodes with optical filters that approximate the CIE photopic luminosity function V(lambda). Modern instruments provide accuracy of +/- 3-5% of reading, ranges from 0 to 200,000 lux, and cosine-corrected spatial response for accurate measurement of light from wide angles. Response time is typically < 1 second.
- **Integrated Light/Environment Sensors**: Multi-parameter environmental sensors (e.g., BME280+VEML7700 combinations) include lux measurement alongside temperature, humidity, and pressure. These compact, low-power sensors are suitable for distributed monitoring arrays in MES installations, providing lux data alongside environmental conditions.
- **Smartphone Light Sensors**: Most smartphones contain ambient light sensors that can measure lux with moderate accuracy (typically +/- 15-25%). While not suitable for precision research, smartphone-based measurements provide convenient rough estimates for field MES assessment and outreach demonstrations.
- **Calibrated Photography**: Digital camera images taken with known exposure settings can be processed to estimate scene illuminance in lux through HDRI (high dynamic range imaging) techniques. This method provides spatial lux maps across MES reactor surfaces.

## Affecting Factors

### Primary

- **Light Source Type**: The spectral output determines the lux-to-PAR conversion factor. Sources rich in green light (where human eye sensitivity peaks) produce more lux per watt of PAR than red- or blue-rich sources.
- **Light Source Power and Distance**: Lux follows the inverse square law for point sources and decreases linearly with distance for uniform area sources.
- **Surface Orientation**: Lux is measured as the flux per unit area of the measurement surface, so tilting the surface relative to the light source changes the reading (cosine response).
- **Atmospheric and Environmental Conditions**: Cloud cover, haze, building shading, and reflections affect the lux at outdoor MES installations.
- **Spectral Mismatch**: The fundamental discrepancy between human visual sensitivity and photosynthetic action spectra means that lux is an imperfect predictor of photobiological effectiveness.
- **Sensor Spectral Correction**: Not all lux meters perfectly match the CIE V(lambda) function, leading to measurement errors with non-standard light sources.
- **Cosine Response Error**: Inexpensive lux meters may have poor cosine response, underreading light arriving from large angles.
- **Temperature Sensitivity**: Silicon photodiode responsivity varies with temperature, introducing measurement drift.

## Related Parameters

- **name**: Light Intensity (micromol/m^2/s)

- **relationship**: The preferred photobiological measurement unit; requires spectral knowledge for conversion from lux.
- **name**: Photosynthetic Active Radiation

- **relationship**: The biologically relevant irradiance measurement.
- **name**: Photon Flux Density

- **relationship**: Synonymous with PAR intensity measured in photon units.
- **name**: Total Solar Irradiance

- **relationship**: The total electromagnetic power from the sun, of which lux measures only the luminous component.

## Compatible Systems

Light Radiation Parameters

## References

- McCormick, A.J., Bombelli, P., Bradley, R.W., et al. (2015). Biophotovoltaics. *Energy & Environmental Science*, 8(4), 1092-1109.
- Thimijan, R.W. & Heins, R.D. (1983). Photometric, radiometric, and quantum light units of measure: a review of procedures for interconversion. *HortScience*, 18(6), 818-822.
- CIE (2004). CIE 15:2004, Colorimetry. Commission Internationale de l'Eclairage, Vienna.
- Kirk, J.T.O. (2011). *Light and Photosynthesis in Aquatic Ecosystems*. 3rd ed., Cambridge University Press.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Light+Intensity+Lux&body=**Parameter%3A**+Light+Intensity+Lux%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Flight-intensity-lux.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Light+Intensity+Lux&body=**Parameter%3A**+Light+Intensity+Lux%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Flight-intensity-lux.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Light+Intensity+Lux&body=**Parameter%3A**+Light+Intensity+Lux%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Flight-intensity-lux.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
