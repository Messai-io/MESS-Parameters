# Photosynthetic Active Radiation

Photosynthetically active radiation (PAR) defines the spectral range of solar and artificial light (400-700 nm) that drives photosynthetic reactions in phototrophic microorganisms used in microbial electrochemical systems (MES). PAR encompasses the visible light spectrum from violet (400 nm) through red (700 nm), corresponding to the wavelengths absorbed by chlorophyll a and b, carotenoids, phycobilins, and other photosynthetic pigments. In MES contexts, PAR quantifies the total biologically useful light energy available for photo-bioelectrochemical processes, typically expressed as photon flux density (umol photons/m^2/s) or as energy irradiance (W/m^2) within the 400-700 nm band.

The concept of PAR is central to photo-BEC design because it directly relates illumination energy input to biological output. The PAR fraction of total solar radiation is approximately 43-50% of total solar irradiance, meaning that for every 1000 W/m^2 of solar radiation, only 430-500 W/m^2 falls within the photosynthetically useful range. Of this PAR energy, only 8-12% is theoretically convertible to chemical energy through photosynthesis (maximum photosynthetic efficiency), and practical photo-BEC systems achieve 0.1-3% solar-to-electrical conversion efficiency when all losses are considered.

PAR measurement is essential for standardizing and comparing photo-BEC performance across different light sources, reactor designs, and geographic locations. LED light sources can deliver nearly 100% of their output within the PAR band, while fluorescent tubes deliver 80-90% and solar radiation 43-50%. Expressing illumination as PAR rather than total irradiance enables meaningful comparisons between these diverse light sources and allows accurate modeling of photosynthetic productivity and bioelectrochemical performance.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Environmental |
| **Subcategory** | Light Intensity |
| **Type** | number |
| **Unit** | μmol/m²/s |
| **Minimum** | 0 |
| **Maximum** | 2000 |

## Typical Values

- **Valid Range**: 0 - 2500 umol/m^2/s (as PFD within 400-700 nm)
- **Typical Range for MES**: 20 - 500 umol/m^2/s
- **Full sunlight PAR**: 1800-2200 umol/m^2/s (approximately 400-500 W/m^2)
- **Overcast day**: 50-300 umol/m^2/s
- **Deep shade**: 5-50 umol/m^2/s
- **Laboratory photo-BEC**: 50-200 umol/m^2/s
- **Light compensation point (typical algae)**: 5-20 umol/m^2/s
- **Daily light integral (mid-latitude summer)**: 30-50 mol/m^2/day

## Measurement Methods

- **Quantum PAR Sensors**: Purpose-built PAR sensors (LI-COR LI-190R, Apogee SQ-520) employ silicon photodiodes with multi-layer interference filters that flatten the spectral response to equal sensitivity per photon across 400-700 nm. The cosine-corrected diffuser provides accurate response to light from all angles of incidence (180-degree field of view). Output is calibrated directly in umol/m^2/s PAR with accuracy of 5% traceable to NIST standards. Sensors require periodic recalibration (annual) to account for filter and detector aging. Underwater versions (LI-COR LI-192) enable PAR measurement within submerged MES reactors.
- **Spectroradiometric PAR Calculation**: Spectroradiometers measuring spectral irradiance at 1-5 nm resolution across 350-750 nm provide the most accurate PAR determination by integrating measured spectral photon flux over the 400-700 nm band. This approach accounts for the actual spectral distribution of the light source, avoiding errors inherent in broadband PAR sensors when used with light sources having unusual spectral distributions (e.g., narrow-band LEDs, colored LEDs, UV-supplemented sources). The calculated PAR can be decomposed into blue PAR (400-500 nm), green PAR (500-600 nm), and red PAR (600-700 nm) to assess spectral quality.
- **Satellite-Derived PAR Estimation**: For outdoor MES installations, satellite-derived PAR data from MODIS, VIIRS, and Sentinel missions provide spatially resolved daily PAR estimates with accuracy of 10-20% at 1-4 km resolution. These data enable site selection and performance prediction for photo-BEC systems without on-site instrumentation. Ground-truth comparison with local PAR sensors is recommended, as satellite estimates may overestimate clear-sky PAR and underestimate PAR under partial cloud conditions.

## Affecting Factors

### Primary

- **Solar angle and atmospheric path length**: PAR intensity varies with solar elevation angle due to atmospheric absorption and scattering. At solar zenith (noon, equator, equinox), air mass = 1 and PAR is maximal (approximately 2000 umol/m^2/s). At solar elevation of 30 degrees, air mass = 2 and PAR is reduced to approximately 1500 umol/m^2/s. At sunrise/sunset, air mass exceeds 10 and PAR drops below 100 umol/m^2/s. Seasonal variation at 50 degrees latitude creates 3-4x variation in daily integrated PAR between summer and winter.
- **Cloud cover and atmospheric conditions**: Cloud cover reduces PAR by 20-90% depending on cloud type and thickness. Thin cirrus clouds reduce PAR by 20-30%, while thick cumulonimbus reduces it by 80-95%. Atmospheric aerosols (dust, smoke, pollution) reduce PAR by 5-30% in addition to cloud effects. Intermittent cloud cover creates rapid PAR fluctuations (sunflecks) that can enhance photosynthetic efficiency through the flashing light effect if fluctuation frequency matches photosynthetic turnover time (1-10 ms).
- **Reactor optical design**: PAR delivery efficiency to the biofilm depends on reactor geometry, wall material transmission, optical path length, and internal reflection characteristics. Flat-plate reactors with 1-5 cm light path provide uniform PAR distribution. Tubular reactors with larger diameters create steep PAR gradients. Light guides, optical fibers, and internal reflectors can distribute PAR more uniformly in large-volume reactors, reducing the illuminated surface area requirement by 30-60%.
- **Biomass concentration and culture depth**: Beer-Lambert absorption by photosynthetic pigments attenuates PAR exponentially with culture depth and biomass concentration. At typical microalgal densities of 0.5-2 g/L dry weight, PAR is reduced to 1% of surface value (euphotic depth) within 2-10 cm. Self-shading limits the productivity of thick biofilms and deep cultures, creating a fundamental trade-off between biomass density and light utilization efficiency.
- **Wavelength composition (spectral quality)**: Not all PAR wavelengths are equally effective for photosynthesis. Red photons (620-680 nm) are approximately 30% more efficient than blue photons (430-470 nm) for driving photosynthesis in green algae (because red photons excite chlorophyll directly at the reaction center energy level while blue photons require thermal relaxation to the red excitation level). PAR composed primarily of red and blue wavelengths (as from typical horticultural LEDs) produces 10-30% more photosynthetic output per photon than full-spectrum PAR.

## Compatible Systems

Light Radiation Parameters

## References

- McCree, K. J. (1972). The action spectrum, absorptance and quantum yield of photosynthesis in crop plants. *Agricultural Meteorology*, 9, 191-216.
- McCormick, A. J., et al. (2011). Biophotovoltaics: Oxygenic photosynthetic organisms in the world of bioelectrochemical systems. *Energy & Environmental Science*, 8, 1092-1109.
- Xiao, L., & He, Z. (2014). Applications and perspectives of phototrophic microorganisms for electricity generation from organic compounds in microbial fuel cells. *Renewable and Sustainable Energy Reviews*, 37, 550-559.
- Sforza, E., et al. (2012). Adjusted light and dark cycles can optimize photosynthetic efficiency in algae growing in photobioreactors. *PLoS ONE*, 7(6), e38975.
- Ritchie, R. J. (2010). Modelling photosynthetical electron transport. *Photosynthesis Research*, 103(2), 111-127.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Photosynthetic+Active+Radiation&body=**Parameter%3A**+Photosynthetic+Active+Radiation%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fphotosynthetic-active-radiation.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Photosynthetic+Active+Radiation&body=**Parameter%3A**+Photosynthetic+Active+Radiation%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fphotosynthetic-active-radiation.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Photosynthetic+Active+Radiation&body=**Parameter%3A**+Photosynthetic+Active+Radiation%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fphotosynthetic-active-radiation.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
