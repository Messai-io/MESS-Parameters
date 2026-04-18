# Dark Duration

Dark duration refers to the length of time during which a microbial electrochemical system (MES) is not exposed to light within a given light-dark cycle. This parameter is critically important for photobioelectrochemical systems that incorporate phototrophic microorganisms such as cyanobacteria, microalgae, or purple non-sulfur bacteria at the anode or cathode. During the dark period, photosynthetic electron flow ceases, and cellular metabolism shifts from photosynthesis to respiration or fermentation, fundamentally altering the bioelectrochemical dynamics of the system.

In photosynthetic MFCs (photo-MFCs), the dark duration determines the period during which the phototrophic biofilm transitions from light-driven metabolism to dark metabolism where stored carbon reserves such as glycogen, polyhydroxybutyrate, or starch are catabolized. This metabolic switch affects current output, coulombic efficiency, and the overall energy balance. Extended dark periods can lead to depletion of stored carbon reserves, while insufficient dark periods may impair the repair of photodamaged cellular machinery, particularly Photosystem II D1 protein turnover.

The ratio of dark duration to light duration is a key design parameter for outdoor MES installations that rely on natural solar illumination. Seasonal and latitudinal variations in dark duration range from near-zero (polar summer) to near-24 hours (polar winter), requiring MES designs that maintain performance across these extremes. For laboratory studies, controlled dark durations allow systematic investigation of the interplay between phototrophic and heterotrophic metabolism in mixed-culture bioelectrochemical systems.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Environmental |
| **Subcategory** | Photoperiod |
| **Type** | number |
| **Unit** | h |
| **Minimum** | 0 |
| **Maximum** | 24 |
| **Papers Reporting** | 238 |

## Typical Values

- **Valid Range**: 0 to 24 hours (within a 24-hour cycle)
- **Typical Range (Laboratory Studies)**: 8 to 16 hours per 24-hour cycle
- **Standard Light-Dark Cycle**: 12 hours dark (12:12 L:D cycle)
- **Extended Photoperiod Studies**: 4 to 6 hours dark
- **Natural Summer (Mid-Latitudes)**: 8 to 10 hours dark
- **Natural Winter (Mid-Latitudes)**: 14 to 16 hours dark
- **Continuous Dark (Control)**: 24 hours

## Measurement Methods

- **Programmable Light Timers**: The most common method for controlling and recording dark duration is through programmable electronic timers connected to artificial light sources. Modern digital timers allow precise programming of on/off cycles with resolution down to 1 minute. These timers can be integrated into data logging systems to record the actual light/dark transitions alongside electrochemical measurements.
- **Light/Dark Sensors with Data Logging**: For outdoor MES installations, light sensors (photodiodes, photoresistors, or PAR sensors) continuously monitor light intensity. Dark duration is determined from logged data by defining a threshold below which conditions are classified as dark (typically < 1 micromol photons/m^2/s PAR). This approach captures natural variations in dark duration due to weather, season, and latitude.
- **Astronomical Calculations**: For planning purposes, dark duration at any location can be calculated from astronomical equations based on latitude, longitude, date, and local terrain. These calculations provide sunrise/sunset times and thus dark duration with high precision. Software tools and APIs (e.g., NOAA Solar Calculator) automate these calculations for MES site planning.

## Affecting Factors

### Primary

- **Geographic Latitude**: Latitude is the primary determinant of natural dark duration, with higher latitudes experiencing greater seasonal variation. At the equator, dark duration is consistently ~12 hours year-round, while at 60 degrees latitude it ranges from ~6 hours to ~18 hours.
- **Season**: Earth's axial tilt creates seasonal variations in day length and thus dark duration. MES performance models must account for these seasonal changes when predicting annual energy output.
- **Artificial Lighting Schedule**: In laboratory settings, the dark duration is entirely controlled by the researcher through programmable lighting systems, allowing systematic investigation of optimal dark:light ratios.
- **Microbial Consortium Composition**: The relative abundance of obligate phototrophs, facultative phototrophs, and heterotrophs in the biofilm determines how strongly the system is affected by dark duration.
- **Carbon Storage Capacity**: The ability of phototrophic organisms to accumulate carbon reserves during light periods determines how long they can sustain metabolism during dark periods.
- **Weather and Cloud Cover**: Overcast conditions can effectively extend the functional dark duration by reducing light intensity below the compensation point of the phototrophic organisms.
- **Reactor Design and Optical Properties**: Light penetration depth, electrode opacity, and reactor geometry determine what fraction of the biofilm experiences the full dark duration versus partial shading.
- **Temperature Coupling**: In natural environments, dark periods coincide with lower temperatures (nighttime cooling), creating coupled effects on microbial metabolism that are difficult to separate experimentally.

## Related Parameters

- **name**: Light Duration

- **relationship**: The complementary parameter; dark duration + light duration = cycle period (typically 24 hours).
- **name**: Photoperiod

- **relationship**: Often expressed as the fraction of the cycle spent in light.
- **name**: Light Intensity

- **relationship**: The intensity during the light phase determines how much energy and carbon are stored for dark-period metabolism.
- **name**: Dawn Duration

- **relationship**: The transition period from dark to light.
- **name**: Dusk Duration

- **relationship**: The transition from light to dark.
- **name**: Light Cycle Type

- **relationship**: Whether the cycle is square-wave or sinusoidal affects the effective dark duration.

## Compatible Systems

Light Radiation Parameters

## References

- Rosenbaum, M., He, Z., & Angenent, L.T. (2010). Light energy to bioelectricity: photosynthetic microbial fuel cells. *Current Opinion in Biotechnology*, 21(3), 259-264.
- McCormick, A.J., Bombelli, P., Scott, A.M., et al. (2011). Photosynthetic biofilms in pure culture harness solar energy in a mediatorless bio-photovoltaic cell (BPV) system. *Energy & Environmental Science*, 4(11), 4699-4709.
- Bombelli, P., Bradley, R.W., Scott, A.M., et al. (2011). Quantitative analysis of the factors limiting solar power transduction by *Synechocystis* sp. PCC 6803 in biological photovoltaic devices. *Energy & Environmental Science*, 4(11), 4690-4698.
- Strik, D.P.B.T.B., Hamelers, H.V.M., & Buisman, C.J.N. (2010). Solar energy powered microbial fuel cell with a reversible bioelectrode. *Environmental Science & Technology*, 44(1), 532-537.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Dark+Duration&body=**Parameter%3A**+Dark+Duration%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fdark-duration.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Dark+Duration&body=**Parameter%3A**+Dark+Duration%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fdark-duration.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Dark+Duration&body=**Parameter%3A**+Dark+Duration%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fdark-duration.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
