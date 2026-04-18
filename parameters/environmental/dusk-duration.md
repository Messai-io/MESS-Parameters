# Dusk Duration

Dusk duration refers to the time interval during which light intensity gradually transitions from full daytime illumination to complete darkness at the end of each light cycle. In photobioelectrochemical systems (photo-MFCs, biophotovoltaic cells, and algae-assisted MES), dusk duration governs how phototrophic microorganisms transition from light-driven photosynthetic metabolism to dark respiratory or fermentative metabolism. This transition period determines the rate at which photosynthetic electron flow decreases, carbon fixation ceases, and stored energy reserves begin to be mobilized.

During natural dusk, light intensity decreases over 20-60 minutes depending on latitude and season, with concurrent spectral shifts toward longer wavelengths as shorter wavelengths are scattered by the increased atmospheric path length. For phototrophic organisms in MES biofilms, this gradual dimming allows orderly shutdown of the photosynthetic apparatus: photosystems transition to a quenched state, the Calvin cycle deactivates through redox regulation, and respiratory pathways are upregulated. This contrasts with the sudden light-off in square-wave laboratory cycles, which can cause metabolic shock and transient current spikes or drops.

Understanding dusk duration is important for MES performance modeling because the transition period represents a metabolic state distinct from both full-light and full-dark conditions. During dusk, current production from phototrophic biofilms follows a characteristic decay curve that depends on the rate of light decrease, photosynthetic capacity, and the rate of dark metabolism activation. Optimizing the dusk profile in controlled MES can improve energy efficiency and reduce photoinhibitory damage.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Environmental |
| **Subcategory** | Photoperiod |
| **Type** | number |
| **Unit** | min |
| **Minimum** | 0 |
| **Maximum** | 120 |

## Typical Values

- **Valid Range**: 0 to 180 minutes
- **Typical Range (Natural Dusk)**: 20 to 60 minutes (mid-latitudes)
- **Laboratory Square-Wave Cycle**: 0 minutes (instantaneous off)
- **Simulated Dusk (Research)**: 15 to 45 minutes
- **Equatorial Dusk**: 20 to 25 minutes
- **Polar Dusk (Spring/Fall)**: 60 to 180 minutes

## Measurement Methods

- **PAR Sensor with Data Logging**: Continuous PAR measurement during the dusk transition captures the actual light intensity profile experienced by the MES. Dusk duration is defined as the time from initial intensity decrease to effective darkness (< 1 micromol/m^2/s). High-frequency logging captures the full transition dynamics.
- **Programmable LED Controller Profiles**: In laboratory settings, dusk duration is precisely defined by the programmed dimming profile of the LED lighting system. Linear, exponential, or custom ramp profiles can simulate natural dusk conditions.
- **Lux Meter with Time Stamping**: Lux meters measure total illuminance during the dusk transition. While less specific to photosynthetically relevant light than PAR sensors, lux measurements characterize the overall light environment and can be converted to approximate PAR values.

## Affecting Factors

### Primary

- **Latitude**: Higher latitudes produce longer dusk durations as the sun sets at a shallower angle. Tropical locations experience rapid dusks (20-25 minutes) while high-latitude locations can have extended twilight.
- **Season**: Dusk duration varies seasonally, with the most gradual transitions occurring near the summer solstice at high latitudes.
- **Lighting Control System**: In laboratory MES, the dusk duration is entirely determined by the dimming capabilities of the artificial lighting system.
- **Terrain and Structures**: Western horizon obstructions can effectively shorten dusk duration for ground-level MES.
- **Atmospheric Conditions**: Clear conditions produce the longest natural dusk as scattered light persists after direct sun exposure ends.
- **Spectral Changes During Dusk**: The shift toward red/far-red wavelengths differentially affects organisms with different photosynthetic pigment profiles.
- **Biofilm Self-Shading**: In thick biofilms, inner layers experience effective dusk before outer layers, creating an extended effective dusk.
- **Temperature Coupling**: Natural dusk coincides with nighttime cooling, creating simultaneous light and temperature decreases.

## Related Parameters

- **name**: Dawn Duration

- **relationship**: The complementary transition from dark to light.
- **name**: Dark Duration

- **relationship**: The period of complete darkness following dusk.
- **name**: Light Duration

- **relationship**: The total illuminated period of which dusk is the terminal phase.
- **name**: Light Intensity

- **relationship**: The starting intensity at the beginning of dusk.
- **name**: Light Cycle Type

- **relationship**: Whether the pattern includes gradual transitions or abrupt switches.
- **name**: Far-Red Light Ratio

- **relationship**: Increases during natural dusk, triggering shade-avoidance responses.

## Compatible Systems

Light Radiation Parameters

## References

- McCormick, A.J., Bombelli, P., Scott, A.M., et al. (2011). Photosynthetic biofilms in pure culture harness solar energy in a mediatorless bio-photovoltaic cell (BPV) system. *Energy & Environmental Science*, 4(11), 4699-4709.
- Lea-Smith, D.J., Bombelli, P., Vasudevan, R., & Howe, C.J. (2016). Photosynthetic, respiratory and extracellular electron transport pathways in cyanobacteria. *Biochimica et Biophysica Acta (BBA) - Bioenergetics*, 1857(3), 247-255.
- Sawa, M., Fantuzzi, A., Bombelli, P., et al. (2017). Electricity generation from digitally printed cyanobacteria. *Nature Communications*, 8(1), 1327.
- Kirk, J.T.O. (2011). *Light and Photosynthesis in Aquatic Ecosystems*. 3rd ed., Cambridge University Press.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Dusk+Duration&body=**Parameter%3A**+Dusk+Duration%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fdusk-duration.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Dusk+Duration&body=**Parameter%3A**+Dusk+Duration%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fdusk-duration.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Dusk+Duration&body=**Parameter%3A**+Dusk+Duration%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fdusk-duration.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
