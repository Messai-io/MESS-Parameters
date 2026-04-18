# Electromagnetic Power

Electromagnetic power in the context of microbial electrochemical systems (MES) refers to the power density (watts per square meter, W/m^2) or total power (watts) of electromagnetic radiation impinging on or emitted by the reactor system. This parameter encompasses the full electromagnetic spectrum from radio waves through visible light to ionizing radiation, though in MES applications, the most relevant ranges are visible light (for photobioelectrochemical systems), infrared (thermal radiation affecting temperature), and radio frequency (potential interference with instrumentation).

For photobioelectrochemical systems, electromagnetic power in the visible spectrum (400-700 nm) directly determines the energy input available for photosynthetic processes. The solar constant (~1361 W/m^2 at the top of the atmosphere, ~1000 W/m^2 at Earth's surface under clear conditions) represents the maximum natural electromagnetic power available. Of this, approximately 43% falls within the photosynthetically active radiation (PAR) range. The power conversion efficiency of photo-MFCs is typically 0.1-2%, meaning that only a small fraction of the incident electromagnetic power is converted to electrical energy.

Beyond the visible spectrum, electromagnetic power from infrared sources contributes to reactor heating and thermal management, while UV electromagnetic power can cause photodegradation of organic components and microbial DNA damage. At radio frequencies, electromagnetic power from communication equipment, power lines, and industrial sources can induce currents in MES wiring and electrodes, causing measurement noise. Quantifying electromagnetic power at relevant frequencies is essential for energy balance calculations, performance optimization, and interference mitigation in MES.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Environmental |
| **Subcategory** | Electromagnetic Fields |
| **Type** | number |
| **Unit** | W/m² |
| **Minimum** | 0 |
| **Maximum** | 1000 |

## Typical Values

- **Valid Range**: 0 to 10,000 W/m^2 (from darkness to concentrated solar)
- **Typical Range (Solar at Surface)**: 0 to 1,000 W/m^2
- **Clear Sky Noon (Mid-Latitudes)**: 800 to 1,000 W/m^2 total; 350 to 430 W/m^2 PAR
- **Overcast Conditions**: 50 to 300 W/m^2
- **Laboratory LED Illumination**: 5 to 100 W/m^2 (PAR only)
- **RF Background (Urban)**: 10^-6 to 10^-3 W/m^2
- **Near Cellular Base Station**: 10^-3 to 10^-1 W/m^2
- **Power Line 50/60 Hz**: 10^-6 to 10^-4 W/m^2 (at typical distance)

## Measurement Methods

- **Pyranometer**: Pyranometers measure total hemispheric solar irradiance (shortwave, 285-2800 nm) incident on a surface. Thermopile-based pyranometers (e.g., Kipp & Zonen CMP series) provide accuracy of +/- 1-3% and are the standard instrument for solar electromagnetic power measurement in outdoor MES installations. They can be mounted horizontally or tilted to match the reactor surface orientation.
- **Quantum Sensor (PAR Meter)**: For photobioelectrochemical systems, quantum sensors measure photosynthetically active radiation (400-700 nm) in units of micromol photons/m^2/s. This can be converted to electromagnetic power using the average photon energy in the PAR band (~4.6 micromol photons per joule). These sensors are specifically calibrated for the spectral range relevant to photosynthesis.
- **RF Power Meter**: For radio-frequency electromagnetic power measurement, calibrated power meters with appropriate antenna attachments measure the power density at specific frequencies or across broad bands. Isotropic probes measure total power density regardless of polarization and direction, providing the most representative assessment of the RF environment.
- **Spectroradiometer**: Spectroradiometers provide spectrally resolved electromagnetic power measurements, quantifying the power at each wavelength across a defined spectral range. This is the most detailed measurement method, allowing identification of which wavelengths contribute most to the total electromagnetic power budget.

## Affecting Factors

### Primary

- **Solar Position**: For outdoor MES, the sun's elevation angle determines the electromagnetic power incident on the reactor surface. Power follows a sinusoidal diurnal pattern from zero (night) to maximum (solar noon).
- **Cloud Cover and Atmospheric Conditions**: Clouds can reduce solar electromagnetic power by 50-90%. Aerosols, dust, and humidity also attenuate the solar beam.
- **Distance from Artificial Sources**: For laboratory illumination and RF sources, electromagnetic power decreases with the square of the distance from the source.
- **Surface Orientation and Tilt**: The angle between the MES surface and the radiation source determines the projected power density (cosine law).
- **Spectral Content**: The distribution of electromagnetic power across wavelengths determines which biological and chemical processes are activated.
- **Reflections and Albedo**: Nearby reflective surfaces (water, light-colored buildings, snow) can increase the total electromagnetic power reaching the MES through reflected radiation.
- **Shading**: Partial shading from nearby structures, vegetation, or equipment reduces the effective electromagnetic power on portions of the reactor.
- **Seasonal Variation**: At mid-latitudes, peak solar electromagnetic power varies by approximately 2x between summer and winter solstice.

## Related Parameters

- **name**: Light Intensity

- **relationship**: A specific measure of electromagnetic power in the visible spectrum.
- **name**: Photosynthetic Active Radiation

- **relationship**: The biologically relevant subset of electromagnetic power (400-700 nm).
- **name**: Total Solar Irradiance

- **relationship**: The total electromagnetic power from the sun reaching the outer atmosphere.
- **name**: Electromagnetic Frequency

- **relationship**: Determines which portion of the electromagnetic spectrum carries the measured power.
- **name**: UV-A/B/C Intensity

- **relationship**: Specific electromagnetic power measurements in the ultraviolet bands.
- **name**: Infrared Intensity

- **relationship**: Electromagnetic power in the thermal infrared band.

## Compatible Systems

Physical Environmental Factors

## References

- Rosenbaum, M., He, Z., & Angenent, L.T. (2010). Light energy to bioelectricity: photosynthetic microbial fuel cells. *Current Opinion in Biotechnology*, 21(3), 259-264.
- Blankenship, R.E. (2014). *Molecular Mechanisms of Photosynthesis*. 2nd ed., Wiley-Blackwell.
- McCormick, A.J., Bombelli, P., Bradley, R.W., et al. (2015). Biophotovoltaics: oxygenic photosynthetic organisms in the world of bioelectrochemical systems. *Energy & Environmental Science*, 8(4), 1092-1109.
- Iqbal, M. (1983). *An Introduction to Solar Radiation*. Academic Press.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Electromagnetic+Power&body=**Parameter%3A**+Electromagnetic+Power%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Felectromagnetic-power.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Electromagnetic+Power&body=**Parameter%3A**+Electromagnetic+Power%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Felectromagnetic-power.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Electromagnetic+Power&body=**Parameter%3A**+Electromagnetic+Power%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Felectromagnetic-power.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
