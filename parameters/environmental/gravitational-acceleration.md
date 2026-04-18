# Gravitational Acceleration

Gravitational acceleration refers to the acceleration imparted to objects by the gravitational field, most commonly Earth's gravitational acceleration of approximately 9.81 m/s^2 (1 g). In microbial electrochemical systems (MES), gravitational acceleration affects gas bubble dynamics, sedimentation of suspended particles and planktonic cells, natural convection patterns in the electrolyte, and the hydrostatic pressure distribution within the reactor. While gravitational acceleration is constant for terrestrial MES, it becomes a variable parameter for space-based systems being developed for life support and waste processing on spacecraft and planetary bases.

The influence of gravity on MES performance is primarily through its effects on multiphase flow and mass transfer. Gas bubbles produced at electrodes (H2 at cathodes, CO2 at anodes) detach and rise due to buoyancy forces proportional to gravitational acceleration. In reduced gravity (microgravity), bubbles do not detach spontaneously, instead growing to large sizes that block electrode active sites and impede current flow. This represents a fundamental challenge for MES operation in space environments. Similarly, gravity drives sedimentation of suspended biomass, influencing the distribution of planktonic microorganisms.

Natural convection, driven by density differences from temperature and concentration gradients near electrodes, is proportional to gravitational acceleration. In microgravity, natural convection is essentially eliminated, leaving only forced convection and diffusion as mass transfer mechanisms. For terrestrial MES, natural convection contributes significantly to mixing in unstirred reactors.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Environmental |
| **Subcategory** | Gravity & Acceleration |
| **Type** | number |
| **Unit** | g |
| **Minimum** | 0 |
| **Maximum** | 10 |

## Typical Values

- **Valid Range**: 0 to 100 m/s^2
- **Standard Earth Gravity**: 9.80665 m/s^2 (defined)
- **Typical Laboratory/Field MES**: 9.78 to 9.83 m/s^2 (latitude-dependent)
- **International Space Station**: ~10^-6 g (microgravity)
- **Lunar Surface**: 1.62 m/s^2 (0.165 g)
- **Mars Surface**: 3.72 m/s^2 (0.379 g)
- **Centrifuge Studies**: 0.01 to 10 g

## Measurement Methods

- **MEMS Accelerometers**: Modern MEMS accelerometers (e.g., ADXL345, MPU-6050) can measure gravitational acceleration with resolution of 0.001-0.01 m/s^2. These compact sensors are useful for verifying the gravitational environment of MES, particularly on moving platforms where effective gravity may differ from static value.
- **Precision Gravimeters**: For high-precision measurement, absolute gravimeters use free-fall laser interferometry to achieve accuracies of 10^-8 m/s^2. Relative gravimeters measure differences between locations with similar precision.
- **Pendulum Measurement**: The classical method using the period of a simple pendulum (g = 4*pi^2*L/T^2) provides approximately 0.1% accuracy with careful technique.

## Affecting Factors

### Primary

- **Altitude**: Gravitational acceleration decreases approximately 3.1 x 10^-6 m/s^2 per meter above sea level.
- **Latitude**: Due to Earth's rotation and equatorial bulge, g varies from 9.780 at the equator to 9.832 m/s^2 at the poles.
- **Platform Motion**: MES on ships or offshore platforms experience effective gravity modified by vessel acceleration and motion.
- **Space Environment**: Microgravity fundamentally alters all gravity-dependent processes in MES.
- **Artificial Gravity**: Rotating platforms provide variable gravitational levels from microgravity to several g.
- **Local Geology**: Subsurface density variations create gravity anomalies up to 0.01%.
- **Tidal Effects**: Lunar and solar tides create periodic variations of ~10^-7 g.
- **Vibration**: Mechanical vibration superimposes oscillating accelerations on the static gravitational field.

## Related Parameters

- **name**: Centrifugal Acceleration

- **relationship**: Supplements or replaces gravitational acceleration in rotating frames.
- **name**: Microgravity Level

- **relationship**: Characterizes very low effective gravity in orbital environments.
- **name**: Hydrostatic Pressure

- **relationship**: Directly proportional to gravitational acceleration.
- **name**: Shear Stress

- **relationship**: Gravity-driven flows create shear stresses at electrode surfaces.
- **name**: Mixing Intensity

- **relationship**: Natural convection mixing scales with gravitational acceleration.

## Compatible Systems

Physical Environmental Factors

## References

- Pletser, V. (2004). Short duration microgravity experiments during parabolic flights. *Acta Astronautica*, 55(10), 829-854.
- Logan, B.E. (2008). *Microbial Fuel Cells*. John Wiley & Sons, Hoboken, NJ.
- Matsumoto, S., Nagaoka, S., & Mashiko, K. (2003). Electrochemistry in microgravity. *Advances in Space Research*, 31(1), 243-248.
- Clift, R., Grace, J.R., & Weber, M.E. (2005). *Bubbles, Drops, and Particles*. Dover Publications.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Gravitational+Acceleration&body=**Parameter%3A**+Gravitational+Acceleration%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fgravitational-acceleration.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Gravitational+Acceleration&body=**Parameter%3A**+Gravitational+Acceleration%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fgravitational-acceleration.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Gravitational+Acceleration&body=**Parameter%3A**+Gravitational+Acceleration%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fgravitational-acceleration.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
