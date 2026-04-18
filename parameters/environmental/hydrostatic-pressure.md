# Hydrostatic Pressure

Hydrostatic pressure in microbial electrochemical systems (MES) refers to the pressure exerted by a column of liquid at equilibrium due to the force of gravity. At any point within an MES reactor, hydrostatic pressure equals the product of liquid density, gravitational acceleration, and depth below the liquid surface: P = rho * g * h. This is additive to atmospheric pressure, giving total absolute pressure P_total = P_atmospheric + rho * g * h.

Hydrostatic pressure is an important design parameter for MES because it affects dissolved gas concentrations at the electrode surface, gas bubble nucleation and growth dynamics, membrane integrity, and structural requirements of the reactor vessel. In tall reactor configurations (upflow bioelectrochemical reactors, tubular MES, stacked electrode systems), the hydrostatic pressure difference between top and bottom can be significant. For example, a 2-meter tall reactor with aqueous electrolyte experiences approximately 19.6 kPa (0.19 atm) higher pressure at the bottom compared to the top.

For gas-producing MES (MECs generating H2, anaerobic systems producing CH4), the hydrostatic pressure at the electrode surface determines the minimum thermodynamic overpotential required for bubble nucleation. Higher hydrostatic pressure increases the dissolved gas saturation concentration and requires larger supersaturation for bubble formation. In large-scale MES where electrode stacks extend several meters in height, hydrostatic pressure gradients create non-uniform conditions that must be accounted for in design and performance modeling.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Environmental |
| **Subcategory** | Pressure Parameters |
| **Type** | number |
| **Unit** | bar |
| **Minimum** | 0 |
| **Maximum** | 1000 |
| **Papers Reporting** | 35 |

## Typical Values

- **Valid Range**: 0 to 1,000 kPa (0 to ~100 m water depth)
- **Typical Range (Laboratory MES)**: 0 to 5 kPa (0 to ~50 cm)
- **Typical Range (Pilot-Scale)**: 0 to 20 kPa (0 to ~2 m)
- **Full-Scale Upflow Reactor**: 0 to 50 kPa (up to ~5 m)
- **Benthic MFC (Ocean)**: 0 to 10,000+ kPa
- **Pressure per cm water depth**: ~0.098 kPa

## Measurement Methods

- **Submersible Pressure Transducers**: Sealed, depth-rated pressure transducers placed at specific depths directly measure total pressure (atmospheric + hydrostatic). By subtracting atmospheric pressure, the hydrostatic component is isolated. Typical accuracy is 0.1-0.5% of full scale.
- **Differential Pressure Measurement**: Differential pressure transmitters with taps at different reactor heights directly measure the hydrostatic gradient without requiring atmospheric correction.
- **Calculation from Liquid Level**: For known electrolyte density and measured liquid level, hydrostatic pressure is calculated as P = rho * g * h. Level is measured by ultrasonic sensors, capacitive probes, or sight glasses.

## Affecting Factors

### Primary

- **Liquid Column Height**: Dominant factor; hydrostatic pressure is directly proportional to height above measurement point.
- **Liquid Density**: Electrolyte density (1000-1050 kg/m^3 for fresh water, up to 1200 for high-salinity) directly affects hydrostatic pressure.
- **Gravitational Acceleration**: Standard g = 9.81 m/s^2; varies in space environments.
- **Reactor Configuration**: Vertical orientation creates gradients; horizontal minimizes them.
- **Gas Holdup**: Gas bubbles reduce effective density and thus hydrostatic pressure.
- **Temperature**: Water density decreases ~0.4% per 10 degrees C above 4C.
- **Dissolved Solids**: Increasing dissolved content increases density.
- **Dynamic Effects**: Flow, mixing, and sparging create transient deviations from static hydrostatic values.

## Related Parameters

- **name**: Atmospheric Pressure

- **relationship**: The baseline upon which hydrostatic pressure adds.
- **name**: Gauge Pressure

- **relationship**: At any depth, gauge pressure equals hydrostatic pressure if headspace is at atmospheric.
- **name**: Partial Pressure H2/CO2/CH4

- **relationship**: Gas solubility at depth depends on total pressure.
- **name**: Gravitational Acceleration

- **relationship**: Directly proportional to hydrostatic pressure.

## Compatible Systems

Atmospheric Ambient Conditions

## References

- Logan, B.E. (2008). *Microbial Fuel Cells*. John Wiley & Sons, Hoboken, NJ.
- Tender, L.M., Gray, S.A., Groveman, E., et al. (2008). The first demonstration of a microbial fuel cell as a viable power source. *Journal of Power Sources*, 179(2), 571-575.
- Rozendal, R.A., Hamelers, H.V.M., Rabaey, K., et al. (2008). Towards practical implementation of bioelectrochemical wastewater treatment. *Trends in Biotechnology*, 26(8), 450-459.
- Munson, B.R., Young, D.F., & Okiishi, T.H. (2009). *Fundamentals of Fluid Mechanics*. 6th ed., Wiley.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Hydrostatic+Pressure&body=**Parameter%3A**+Hydrostatic+Pressure%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fhydrostatic-pressure.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Hydrostatic+Pressure&body=**Parameter%3A**+Hydrostatic+Pressure%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fhydrostatic-pressure.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Hydrostatic+Pressure&body=**Parameter%3A**+Hydrostatic+Pressure%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fhydrostatic-pressure.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
