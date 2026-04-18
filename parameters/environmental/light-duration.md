# Light Duration

Light duration in microbial electrochemical systems (MES) refers to the total time of illumination within a single light-dark cycle, typically expressed in hours per day. This parameter is fundamental for photobioelectrochemical systems that rely on phototrophic microorganisms (cyanobacteria, microalgae, purple bacteria) for electron generation or carbon fixation. Light duration directly determines the total photon dose received by the phototrophic biofilm, which in turn controls the amount of photosynthetic energy available for bioelectrochemical conversion.

The light duration establishes the balance between photosynthetic (anabolic) and respiratory/fermentative (catabolic) metabolism in phototrophic biofilms. During illumination, photosynthesis drives carbon fixation, oxygen evolution (in oxygenic phototrophs), and electron generation from water splitting or organic substrate oxidation. During the dark period, stored carbon reserves are catabolized to maintain cellular homeostasis. The optimal light duration depends on the metabolic characteristics of the specific organisms, their capacity for carbon storage, and whether the MES is designed to capture photosynthetic electrons directly or to exploit organic exudates produced during photosynthesis.

For outdoor MES installations, natural light duration varies with latitude and season from approximately 6 hours (polar winter) to 24 hours (polar summer), with relatively constant 12-hour days at the equator. In laboratory settings, light duration is precisely controlled through automated timers, with common research protocols using 12:12 (equal day:night), 16:8 (long day), or 24:0 (continuous light) hour cycles. The daily light integral (DLI), calculated as light duration multiplied by average intensity, is often a more useful metric than light duration alone for predicting photosynthetic productivity.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Environmental |
| **Subcategory** | Photoperiod |
| **Type** | number |
| **Unit** | h |
| **Minimum** | 0 |
| **Maximum** | 24 |

## Typical Values

- **Valid Range**: 0 to 24 hours per day
- **Typical Range (Laboratory)**: 8 to 24 hours per day
- **Standard 12:12 Cycle**: 12 hours light per day
- **Long-Day Protocol**: 16 to 18 hours light per day
- **Continuous Light**: 24 hours per day
- **Natural Summer (45 degrees N)**: ~15 hours per day
- **Natural Winter (45 degrees N)**: ~9 hours per day
- **Equatorial**: ~12 hours year-round

## Measurement Methods

- **Timer-Based Control and Logging**: Digital timers connected to artificial light sources provide precise control of light duration with +/- 1 minute accuracy. Modern programmable timers record the actual switching times for verification against the intended schedule.
- **PAR Sensor Integration**: Continuous PAR measurements can be integrated over time to determine the actual light duration, defined as the period during which PAR exceeds a minimum threshold (typically 1-5 micromol/m^2/s). This method is essential for outdoor MES where weather affects the effective light duration.
- **Astronomical Calculation**: For planning outdoor MES installations, the potential light duration at any location and date can be calculated from standard astronomical formulas using latitude, longitude, and date. Online tools and APIs (NOAA Solar Calculator) automate these calculations.

## Affecting Factors

### Primary

- **Latitude and Season**: The strongest determinants of natural light duration, varying from 0 to 24 hours at extreme latitudes.
- **Artificial Lighting Schedule**: In laboratory MES, light duration is entirely determined by the programmed schedule.
- **Cloud Cover and Weather**: Effective light duration (above the photosynthetic compensation point) can be shorter than astronomical day length on heavily overcast days.
- **Organism Light Requirements**: Different phototrophic species have different minimum light requirements and optimal photoperiods.
- **System Design Objectives**: Maximum productivity may require long or continuous illumination, while energy efficiency may favor shorter light periods with higher intensity.
- **Terrain Shading**: Mountains, buildings, or vegetation on the eastern or western horizon effectively shorten the light duration at ground level.
- **Reactor Transparency**: Opaque reactor components or biofouling of transparent surfaces can reduce the effective light duration for interior biofilms.
- **Self-Shading in Dense Cultures**: In thick biofilms or dense suspensions, inner cells experience shorter effective light duration as outer cells shade them.

## Related Parameters

- **name**: Dark Duration

- **relationship**: The complement; light duration + dark duration = cycle period.
- **name**: Photoperiod

- **relationship**: Often synonymous with light duration; sometimes expressed as a fraction.
- **name**: Light Intensity

- **relationship**: Duration and intensity together determine the daily light integral.
- **name**: Light Cycle Type

- **relationship**: Whether the cycle is square-wave, sinusoidal, or natural affects how light duration is defined.
- **name**: Dawn Duration

- **relationship**: The transition from dark to light, partially counted in light duration depending on threshold.
- **name**: Dusk Duration

- **relationship**: The transition from light to dark.

## Compatible Systems

Light Radiation Parameters

## References

- Rosenbaum, M., He, Z., & Angenent, L.T. (2010). Light energy to bioelectricity: photosynthetic microbial fuel cells. *Current Opinion in Biotechnology*, 21(3), 259-264.
- McCormick, A.J., Bombelli, P., Bradley, R.W., et al. (2015). Biophotovoltaics. *Energy & Environmental Science*, 8(4), 1092-1109.
- Strik, D.P.B.T.B., Hamelers, H.V.M., & Buisman, C.J.N. (2010). Solar energy powered microbial fuel cell. *Environmental Science & Technology*, 44(1), 532-537.
- Bombelli, P., Bradley, R.W., et al. (2011). Quantitative analysis of factors limiting solar power transduction by *Synechocystis*. *Energy & Environmental Science*, 4(11), 4690-4698.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Light+Duration&body=**Parameter%3A**+Light+Duration%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Flight-duration.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Light+Duration&body=**Parameter%3A**+Light+Duration%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Flight-duration.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Light+Duration&body=**Parameter%3A**+Light+Duration%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Flight-duration.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
