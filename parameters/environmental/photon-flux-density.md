# Photon Flux Density

Photon flux density (PFD) measures the number of photons incident on a surface per unit area per unit time, expressed in micromoles of photons per square meter per second (umol/m^2/s). In microbial electrochemical systems (MES) incorporating phototrophic organisms, PFD is the primary parameter governing the rate of photosynthetic light reactions, which drive electron generation, oxygen evolution, and carbon fixation at photo-bioelectrochemical electrodes. Unlike radiometric measures of irradiance (W/m^2), PFD quantifies light in biologically relevant units, as photosynthetic reactions are driven by individual photon absorption events regardless of photon energy.

Photon flux density directly determines the photosynthetic electron transport rate in photo-BECs, algae-assisted MFCs, and biophotovoltaic systems. The relationship between PFD and photosynthetic rate follows a characteristic saturation curve: at low PFD (below 50 umol/m^2/s), the rate increases linearly with light availability (light-limited region); at moderate PFD (100-500 umol/m^2/s), the rate approaches saturation as carbon fixation and electron transport chain capacity become limiting; and at high PFD (above 500-1000 umol/m^2/s), photoinhibition may occur through photodamage to photosystem II reaction centers, reducing performance.

In photo-bioelectrochemical systems, the quantum yield of electricity generation (electrons transferred to the electrode per photon absorbed) is a key efficiency metric that depends on PFD. At low PFD, quantum yields of 0.01-0.1 electrons per photon are typical, with the highest quantum yields observed under light-limited conditions where nearly all absorbed photons contribute to electron transport. As PFD increases beyond saturation, quantum yield decreases due to non-photochemical quenching (heat dissipation) and photoprotective mechanisms that safely dissipate excess photon energy. Optimizing PFD for maximum current generation per unit energy input of illumination is essential for the economic viability of light-driven MES.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Environmental |
| **Subcategory** | Light Intensity |
| **Type** | number |
| **Unit** | μmol/m²/s |
| **Minimum** | 0 |
| **Maximum** | 3000 |

## Typical Values

- **Valid Range**: 0 - 5000 umol/m^2/s
- **Typical Range for MES**: 20 - 500 umol/m^2/s
- **Full sunlight (noon, summer, mid-latitude)**: 1800-2200 umol/m^2/s
- **Overcast sky**: 50-200 umol/m^2/s
- **Laboratory culture illumination**: 50-200 umol/m^2/s
- **Light saturation point (microalgae)**: 200-500 umol/m^2/s
- **Light compensation point**: 5-20 umol/m^2/s
- **Photoinhibition onset**: 500-1500 umol/m^2/s (species dependent)

## Measurement Methods

- **Quantum Sensors (PAR Meters)**: Dedicated quantum sensors (LI-COR LI-190R, Apogee SQ-520) employ silicon photodiodes with optical filters calibrated to provide equal sensitivity per photon across the 400-700 nm PAR waveband. The cosine-corrected diffuser ensures accurate measurement of light from all incident angles (hemispherical acceptance). Output is calibrated in umol/m^2/s with accuracy of 5% and linearity better than 1% across 0-5000 umol/m^2/s. Sensors are positioned at the illuminated reactor surface, facing the light source, to measure the PFD actually reaching the phototrophic biofilm. Multiple sensor positions characterize spatial uniformity of illumination.
- **Spectroradiometric Integration**: Spectroradiometers measure spectral irradiance E(lambda) in W/m^2/nm, which is converted to PFD by integrating: PFD = integral from 400 to 700 of [E(lambda) * lambda / (h*c*NA)] dlambda, where h is Planck's constant, c is speed of light, and NA is Avogadro's number. This method provides wavelength-resolved PFD information, enabling calculation of PFD within specific wavebands (blue, green, red) relevant to different photosynthetic pigments. Spectroradiometric PFD is the most accurate method but requires expensive instrumentation.
- **Chemical Actinometry**: For absolute calibration of PFD in complex reactor geometries, chemical actinometers (potassium ferrioxalate, potassium iodide/iodate) undergo photochemical reactions with known quantum yields. The photoproduct concentration measured spectrophotometrically provides a volumetrically averaged PFD measurement that accounts for light attenuation, scattering, and reflection within the reactor. This method is particularly useful for characterizing the actual PFD experienced by biofilms in optically complex MES reactors with multiple scattering surfaces.

## Affecting Factors

### Primary

- **Light source type and distance**: LED arrays provide adjustable PFD from 0 to more than 2000 umol/m^2/s with precise control through pulse-width modulation (PWM) or current regulation. PFD decreases with the square of distance from point sources and linearly with distance from planar LED arrays. For a typical LED panel at 30 cm distance, PFD is 200-400 umol/m^2/s; at 60 cm, it drops to 50-100 umol/m^2/s. Reflective reactor surfaces (aluminum, white PTFE) increase effective PFD by 20-80% through recycling of reflected photons.
- **Biofilm density and self-shading**: As phototrophic biofilms grow, optical density increases and PFD at the electrode surface decreases exponentially with biofilm thickness. For Chlorella biofilms with chlorophyll concentration of 10 mg/L culture equivalent, PFD is attenuated to 10% of surface values within 5-10 mm path length. Dense biofilms create a steep PFD gradient from the illuminated surface (high PFD, potential photoinhibition) to the electrode interface (low PFD, light limitation), with only a narrow optimal zone.
- **Reactor wall material and geometry**: Glass transmits 85-92% of visible light, acrylic 90-95%, polycarbonate 85-90%, with wavelength-dependent losses highest in the UV region. Flat-plate reactors provide more uniform PFD distribution than cylindrical reactors due to the varying path length through curved walls. Internal surface roughness scatters light, improving PFD uniformity but increasing total path length and absorption.
- **Culture medium turbidity and color**: Dissolved organic compounds (humic acids, metabolic byproducts, redox mediators) absorb light and reduce PFD penetration. Methylene blue at 1 mM (used as an electron shuttle) reduces PFD by 30-50% at its absorption wavelength. Suspended solids scatter light, with turbidity of 50 NTU reducing PFD transmission by 40-60% over 5 cm path length in MES reactors treating real wastewater.
- **Photoperiod cycling and adaptation**: Continuous illumination at moderate PFD (100-200 umol/m^2/s) may produce more total photosynthetic output than high PFD with light/dark cycling, because the dark periods allow repair of photodamage and reset of photosynthetic apparatus. Light/dark cycles of 12:12 hours are standard for simulating natural conditions, but shorter cycles (minutes to hours) may optimize the balance between photosynthesis and dark metabolism in photo-BECs.

## Compatible Systems

Light Radiation Parameters

## References

- Xiao, L., & He, Z. (2014). Applications and perspectives of phototrophic microorganisms for electricity generation from organic compounds in microbial fuel cells. *Renewable and Sustainable Energy Reviews*, 37, 550-559.
- Rosenbaum, M., He, Z., & Angenent, L. T. (2010). Light energy to bioelectricity: Photosynthetic microbial fuel cells. *Current Opinion in Biotechnology*, 21(3), 259-264.
- McCormick, A. J., et al. (2011). Biophotovoltaics: Oxygenic photosynthetic organisms in the world of bioelectrochemical systems. *Energy & Environmental Science*, 8, 1092-1109.
- Saar, K. L., et al. (2018). Enhancing power density of biophotovoltaics by decoupling storage and power delivery. *Nature Energy*, 3, 75-81.
- Bombelli, P., et al. (2015). Quantitative analysis of the factors limiting solar power transduction by Synechocystis sp. PCC 6803 in biological photovoltaic devices. *Energy & Environmental Science*, 4, 4690-4698.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Photon+Flux+Density&body=**Parameter%3A**+Photon+Flux+Density%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fphoton-flux-density.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Photon+Flux+Density&body=**Parameter%3A**+Photon+Flux+Density%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fphoton-flux-density.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Photon+Flux+Density&body=**Parameter%3A**+Photon+Flux+Density%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fphoton-flux-density.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
