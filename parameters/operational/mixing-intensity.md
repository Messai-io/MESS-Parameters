# Mixing Intensity

Mixing intensity quantifies the vigor of fluid agitation within a microbial electrochemical system (MES), typically expressed as the velocity gradient (G, in s^-1), volumetric power input (W/m^3), or turbulent energy dissipation rate (epsilon, in W/kg). This parameter characterizes the mass transfer environment at the electrode-biofilm interface and throughout the bulk fluid. Adequate mixing intensity ensures uniform substrate distribution, pH homogeneity, and efficient removal of metabolic byproducts from the biofilm vicinity.

The velocity gradient G = sqrt(P / (mu * V)), where P is the power input, mu is the dynamic viscosity, and V is the liquid volume, is the standard mixing intensity metric in wastewater engineering. For MES applications, G values of 10--100 s^-1 are typical for gentle mixing that maintains mass transfer without excessive biofilm shear. Higher G values (100--500 s^-1) may be used temporarily during cleaning or flush cycles. The product G * t (Camp number), where t is the mixing time, characterizes total mixing energy input.

Mixing intensity directly affects the external mass transfer coefficient (k_L), which governs substrate transport from the bulk liquid to the biofilm surface. The relationship k_L is proportional to G^(0.5) to G^(0.67) (depending on the flow regime and geometry) means that quadrupling mixing intensity approximately doubles the mass transfer rate. However, the diminishing returns of increased mixing intensity must be weighed against the cubic increase in power consumption (P proportional to N^3).

## Basic Information

| Property | Value |
|---|---|
| **Category** | Operational |
| **Type** | number |
| **Unit** | rpm |

## Typical Values

- **Valid Range**: 0 -- 5000 s^-1 (velocity gradient G)
- **Stagnant (batch without mixing)**: G approximately 0 s^-1
- **Gentle mixing (biofilm protection)**: G = 10 -- 50 s^-1
- **Moderate mixing (standard MFC operation)**: G = 50 -- 200 s^-1
- **Vigorous mixing (cleaning)**: G = 200 -- 1000 s^-1
- **Power input equivalent**: 0.1 -- 100 W/m^3
- **Activated sludge (reference)**: G = 50 -- 100 s^-1
- **Flocculation (reference)**: G = 20 -- 75 s^-1

## Measurement Methods

- **Power Input Method**: G is calculated from measured power input: G = sqrt(P / (mu * V)). Power is measured electrically (wattmeter on mixer motor). Viscosity is measured with a viscometer or estimated from temperature tables. This indirect method is widely used for its simplicity.
- **PIV Velocity Field Analysis**: Particle image velocimetry provides direct measurement of local velocity gradients throughout the reactor. The RMS velocity fluctuation gives the local mixing intensity. This provides spatial mapping of mixing intensity, revealing dead zones and high-shear regions.
- **Tracer Mixing Test**: Injection of a tracer pulse (dye, salt) and monitoring of concentration at multiple points over time. The mixing time (time to achieve 95% homogeneity) inversely correlates with mixing intensity. Shorter mixing times indicate higher mixing intensity.

## Affecting Factors

### Primary

- **Mixing Method**: Mechanical impellers provide controlled, adjustable mixing intensity. Recirculation provides bulk flow with lower shear. Gas sparging provides high local mixing near the sparger.
- **Reactor Geometry**: The ratio of impeller to tank diameter (D/T), liquid height to diameter (H/T), and number of baffles affect power draw and mixing pattern.
- **Fluid Properties**: Viscosity directly affects G for a given power input. Non-Newtonian fluids (high-solids wastewater) exhibit complex mixing behavior.
- **Scale**: Maintaining constant G during scale-up requires P/V = constant, which changes the impeller tip speed and Reynolds number.

## Related Parameters

- **name**: [Mixer Power](mixer-power.md)

- **relationship**: Power input determining mixing intensity
- **name**: [Mixer Speed](mixer-speed.md)

- **relationship**: RPM setting
- **name**: [Mixing Time](mixing-time.md)

- **relationship**: Time to achieve homogeneity
- **name**: [Reynolds Number Mixing](reynolds-number-mixing.md)

- **relationship**: Flow regime
- **name**: [Flow Velocity](flow-velocity.md)

- **relationship**: Linear fluid velocity

## Compatible Systems

Flow Conditions

## References

- Camp, T.R., Stein, P.C. (1943). "Velocity gradients and internal work in fluid motion." Journal of the Boston Society of Civil Engineers, 30, 219-237.
- Paul, E.L. et al. (2004). Handbook of Industrial Mixing. John Wiley & Sons.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Mixing+Intensity&body=**Parameter%3A**+Mixing+Intensity%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fmixing-intensity.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Mixing+Intensity&body=**Parameter%3A**+Mixing+Intensity%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fmixing-intensity.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Mixing+Intensity&body=**Parameter%3A**+Mixing+Intensity%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fmixing-intensity.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
