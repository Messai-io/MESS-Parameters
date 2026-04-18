# Dawn Duration

Dawn duration in the context of microbial electrochemical systems (MES) refers to the time interval during which light intensity gradually transitions from complete darkness to full illumination at the beginning of each light cycle. This parameter is particularly relevant for photobioelectrochemical systems that incorporate phototrophic microorganisms, as the rate of light onset significantly affects photosynthetic apparatus activation, circadian gene expression, and the transition from dark respiratory metabolism to light-driven photosynthetic metabolism.

In natural environments, dawn (civil twilight to sunrise) typically lasts 20-40 minutes at mid-latitudes, with the exact duration depending on latitude and season. During this transition, light intensity increases roughly exponentially, progressing through distinct spectral phases: initial far-red enrichment, then gradual blue light increase, followed by full-spectrum illumination. For phototrophic organisms in MES, this gradual light onset allows orderly activation of photosynthetic complexes, preventing photoinhibition that can occur with abrupt illumination of dark-adapted cells.

Most laboratory MES studies employ square-wave light-dark cycles with instantaneous transitions (zero dawn duration), which can cause photoinhibitory stress, reactive oxygen species generation, and temporary current overshoots or undershoots as the phototrophic biofilm adjusts. More sophisticated experimental setups incorporate ramped light profiles that simulate natural dawn conditions, typically using programmable LED arrays. Understanding and optimizing dawn duration is important for maximizing the efficiency and longevity of phototrophic biofilms in MES, particularly for outdoor installations subject to natural light cycles.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Environmental |
| **Subcategory** | Photoperiod |
| **Type** | number |
| **Unit** | min |
| **Minimum** | 0 |
| **Maximum** | 120 |
| **Papers Reporting** | 272 |

## Typical Values

- **Valid Range**: 0 to 180 minutes
- **Typical Range (Natural Dawn)**: 20 to 60 minutes (mid-latitudes)
- **Laboratory Square-Wave Cycle**: 0 minutes (instantaneous)
- **Simulated Dawn (Research)**: 15 to 45 minutes
- **Equatorial Dawn**: 20 to 25 minutes
- **Polar Dawn (Spring/Fall)**: 60 to 180 minutes
- **Tropical Dawn**: 20 to 30 minutes (minimal seasonal variation)

## Measurement Methods

- **PAR Sensor with Data Logging**: Photosynthetically Active Radiation (PAR) sensors continuously log light intensity during the dawn transition. The dawn duration is defined as the time from first detectable light increase (e.g., >0.1 micromol/m^2/s above dark baseline) to achievement of full daytime intensity (e.g., 95% of maximum). Data loggers record at 1-minute intervals to capture the full transition profile.
- **Spectroradiometer Monitoring**: For detailed spectral characterization of the dawn transition, spectroradiometers measure the full spectral power distribution at regular intervals throughout dawn. This reveals how the spectral composition changes during the transition, which is relevant because different photosynthetic pigments have different absorption spectra and therefore respond differently to the changing spectral quality during dawn.
- **Programmable LED Controller Output Logging**: In controlled laboratory environments, the dawn duration is defined by the programmed ramp profile of the LED lighting system. Modern programmable LED drivers allow specification of ramp duration, ramp shape (linear, exponential, sigmoidal), and spectral channel mixing during the transition. The controller output log serves as the definitive record of the dawn profile.

## Affecting Factors

### Primary

- **Latitude**: Higher latitudes experience longer dawn durations because the sun traverses the horizon at a shallower angle. At 60 degrees latitude, dawn can last over 60 minutes, while at the equator it is typically 20-25 minutes.
- **Season**: Dawn duration varies seasonally, with longer transitions near the solstices at high latitudes and minimal variation near the equator.
- **Lighting System Design**: In laboratory MES, the dawn duration is entirely determined by the lighting control system. PWM-dimmable LED arrays with programmable ramp profiles provide the most flexible control.
- **Atmospheric Conditions**: Cloud cover, aerosol loading, and atmospheric moisture affect the rate of light intensity increase during natural dawn.
- **Reactor Optical Properties**: Light scattering, absorption by the electrolyte, and electrode opacity modify how the external dawn light profile translates into the actual light environment experienced by the phototrophic biofilm.
- **Terrain and Horizon**: Mountains, buildings, or vegetation on the eastern horizon can delay and shorten the effective dawn at ground-level MES installations.
- **Spectral Composition**: The spectral quality changes during dawn, with red/far-red wavelengths appearing first and blue wavelengths increasing later.
- **Biofilm Adaptation State**: The dark-adaptation state of the phototrophic biofilm affects how the organisms respond to the dawn transition.

## Related Parameters

- **name**: Dusk Duration

- **relationship**: The analogous transition from full light to darkness at the end of the light period.
- **name**: Light Duration

- **relationship**: The total illuminated period, of which dawn is the initial transition phase.
- **name**: Dark Duration

- **relationship**: The total dark period, which ends with the onset of dawn.
- **name**: Light Intensity

- **relationship**: The final intensity reached at the end of the dawn transition.
- **name**: Light Cycle Type

- **relationship**: Describes whether the overall light pattern is square-wave, sinusoidal, or custom-ramped.
- **name**: Photosynthetic Active Radiation

- **relationship**: The PAR level during and after the dawn transition.

## Compatible Systems

Light Radiation Parameters

## References

- McCormick, A.J., Bombelli, P., Bradley, R.W., et al. (2015). Biophotovoltaics: oxygenic photosynthetic organisms in the world of bioelectrochemical systems. *Energy & Environmental Science*, 8(4), 1092-1109.
- Lea-Smith, D.J., Bombelli, P., Vasudevan, R., & Howe, C.J. (2016). Photosynthetic, respiratory and extracellular electron transport pathways in cyanobacteria. *Biochimica et Biophysica Acta (BBA) - Bioenergetics*, 1857(3), 247-255.
- Sarcina, M., Tobin, M.J., & Mullineaux, C.W. (2001). Diffusion of phycobilisomes on the thylakoid membranes of the cyanobacterium *Synechococcus* 7942. *Journal of Biological Chemistry*, 276(50), 46830-46834.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Dawn+Duration&body=**Parameter%3A**+Dawn+Duration%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fdawn-duration.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Dawn+Duration&body=**Parameter%3A**+Dawn+Duration%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fdawn-duration.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Dawn+Duration&body=**Parameter%3A**+Dawn+Duration%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fdawn-duration.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
