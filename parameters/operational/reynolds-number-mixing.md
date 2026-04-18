# Reynolds Number Mixing

The Reynolds number for mixing (Re_mix) is a dimensionless parameter characterizing the flow regime (laminar, transitional, or turbulent) produced by the mixing device in an MES reactor. Defined as Re_mix = (rho * N * D^2) / mu, where rho is fluid density, N is impeller speed (rev/s), D is impeller diameter, and mu is dynamic viscosity, this parameter determines the mixing efficiency, power consumption, and shear stress distribution within the reactor.

For stirred vessels, Re_mix < 10 indicates laminar flow (stratified, poor mixing), 10 < Re_mix < 10000 is transitional, and Re_mix > 10000 indicates fully turbulent flow (good mixing). Most MES reactors operate in the transitional to low-turbulent regime (Re_mix = 100--10000) because the gentle mixing required for biofilm protection corresponds to moderate impeller speeds and small impeller diameters.

In continuous-flow MES without mechanical stirring, the channel Reynolds number (Re_channel = rho * v * d_h / mu, where v is flow velocity and d_h is hydraulic diameter) characterizes the flow regime. Most lab-scale MES channels operate in laminar flow (Re < 2300) due to low flow velocities and small channel dimensions, which results in parabolic velocity profiles and concentration boundary layers at electrode surfaces.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Operational |
| **Subcategory** | Mixing Control |
| **Type** | number |
| **Minimum** | 1 |
| **Maximum** | 100000 |

## Typical Values

- **Valid Range**: 0.1 -- 100000
- **Unstirred batch MFC**: Re approximately 0 (stagnant)
- **Magnetic stirrer (lab, 200 RPM, 2 cm bar)**: Re = 100 -- 1000
- **Rushton turbine (bench, 200 RPM, 5 cm)**: Re = 1000 -- 10000
- **Channel flow (lab, 0.1 cm/s, 1 cm channel)**: Re = 1 -- 50 (laminar)
- **Recirculated flow (1 cm/s, 2 cm channel)**: Re = 100 -- 500
- **Pilot impeller (100 RPM, 20 cm)**: Re = 10000 -- 100000 (turbulent)
- **Turbulent transition for channel flow**: Re approximately 2300
- **Turbulent transition for stirred vessel**: Re approximately 10000

## Measurement Methods

- **Calculation from Operating Parameters**: Re_mix = rho * N * D^2 / mu. All parameters are directly measurable: rho from hydrometer or density meter, N from tachometer, D from caliper measurement, mu from viscometer or temperature tables.
- **Flow Visualization**: Dye injection reveals laminar streamlines (Re < 100), transitional mixing (100 < Re < 10000), or fully turbulent random mixing (Re > 10000). Video recording allows qualitative assessment.

## Affecting Factors

### Primary

- **Impeller Speed**: Re scales linearly with N. Doubling speed doubles Re.
- **Impeller Diameter**: Re scales with D^2. A 50% larger impeller increases Re by 2.25x.
- **Fluid Viscosity**: Higher viscosity (cold water, high-solids wastewater) reduces Re.
- **Temperature**: Viscosity of water at 10 C is approximately 2x that at 35 C, halving Re at the same mixer settings.

## Related Parameters

- **name**: [Mixing Intensity](mixing-intensity.md)

- **relationship**: Related mixing metric
- **name**: [Mixer Speed](mixer-speed.md)

- **relationship**: Primary control variable
- **name**: [Flow Velocity](flow-velocity.md)

- **relationship**: For channel Re calculation
- **name**: [Mixing Type](mixing-type.md)

- **relationship**: Determines applicable Re definition

## Compatible Systems

Process Control Parameters

## References

- Bird, R.B., Stewart, W.E., Lightfoot, E.N. (2002). Transport Phenomena, 2nd ed. John Wiley & Sons.
- Paul, E.L. et al. (2004). Handbook of Industrial Mixing. John Wiley & Sons.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Reynolds+Number+Mixing&body=**Parameter%3A**+Reynolds+Number+Mixing%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Freynolds-number-mixing.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Reynolds+Number+Mixing&body=**Parameter%3A**+Reynolds+Number+Mixing%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Freynolds-number-mixing.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Reynolds+Number+Mixing&body=**Parameter%3A**+Reynolds+Number+Mixing%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Freynolds-number-mixing.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
