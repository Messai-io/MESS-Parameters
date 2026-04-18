# Mixing Time

Mixing time is the duration required to achieve a specified degree of homogeneity (typically 95% or 99%) after a perturbation (tracer injection, substrate addition, pH adjustment) in a microbial electrochemical system (MES) reactor. This parameter characterizes the efficiency of the mixing system and determines how quickly substrate additions, pH corrections, or chemical dosing become uniformly distributed throughout the reactor volume.

In MES operation, mixing time affects the transient substrate concentration profile experienced by the biofilm after each feeding event. Short mixing times (< 1 minute) ensure rapid equilibration, providing the biofilm with a uniform substrate environment. Long mixing times (> 10 minutes) create spatial and temporal concentration gradients where some biofilm regions experience substrate excess while others remain substrate-limited, reducing overall system efficiency.

Mixing time depends on reactor geometry, mixer type and speed, fluid properties, and the degree of homogeneity required. For most MES applications, 95% mixing (defined as the time when all measurement points are within +/- 5% of the final equilibrium concentration) is the standard criterion. Achieving 99% mixing typically requires 1.5--2x the 95% mixing time.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Operational |
| **Subcategory** | Mixing Control |
| **Type** | number |
| **Unit** | s |
| **Minimum** | 1 |
| **Maximum** | 3600 |
| **Papers Reporting** | 233 |

## Typical Values

- **Valid Range**: 0.01 -- 600 min
- **Magnetic stirrer in 100 mL MFC (200 RPM)**: 0.1 -- 1 min (95% mixing)
- **Overhead impeller in 5 L reactor**: 0.5 -- 5 min
- **Recirculation loop in 5 L reactor**: 2 -- 10 min
- **Unstirred 100 mL batch MFC**: 5 -- 30 min (diffusion only)
- **Pilot-scale (100 L) with impeller**: 1 -- 10 min
- **Pilot-scale (100 L) with recirculation**: 5 -- 30 min
- **Acceptable for MES operation**: < 10% of batch duration

## Measurement Methods

- **Tracer Pulse Response**: A small volume (< 1% of reactor volume) of concentrated tracer (NaCl, acid, dye) is injected and the concentration is monitored at one or more points using conductivity probes, pH probes, or spectrophotometric sensors. Mixing time is the duration from injection to when all sensor readings are within +/- 5% of the final value. Multiple sensor locations improve accuracy.
- **Decolorization Method**: A pH-sensitive indicator (phenolphthalein, bromothymol blue) is added to the reactor and a pulse of acid or base is injected. Visual observation or photographic analysis records the time for complete decolorization (or color change), indicating uniform pH throughout the reactor. Low-cost and visually intuitive.

## Affecting Factors

### Primary

- **Mixer Speed**: Mixing time decreases approximately with N^(-1) to N^(-2) (where N is RPM) in the turbulent regime.
- **Reactor Volume**: Mixing time increases approximately with V^(1/3) for geometrically similar systems.
- **Injection Location**: Injection near the impeller gives fastest mixing; injection in a dead zone gives slowest. Feed ports should be located near high-turbulence zones.
- **Fluid Viscosity**: Higher viscosity increases mixing time proportionally in the laminar regime and weakly in the turbulent regime.

## Related Parameters

- **name**: [Mixing Intensity](mixing-intensity.md)

- **relationship**: Mixing vigor determining mixing time
- **name**: [Mixer Speed](mixer-speed.md)

- **relationship**: Primary control for mixing time
- **name**: [Mixer Power](mixer-power.md)

- **relationship**: Energy consumption for mixing
- **name**: [Mixing Type](mixing-type.md)

- **relationship**: Mixing mechanism
- **name**: [Fill Time](fill-time.md)

- **relationship**: Filling phase where mixing time matters

## Compatible Systems

Process Control Parameters

## References

- Nienow, A.W. (1997). "On impeller circulation and mixing effectiveness in the turbulent flow regime." Chemical Engineering Science, 52(15), 2557-2565.
- Paul, E.L. et al. (2004). Handbook of Industrial Mixing. John Wiley & Sons.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Mixing+Time&body=**Parameter%3A**+Mixing+Time%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fmixing-time.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Mixing+Time&body=**Parameter%3A**+Mixing+Time%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fmixing-time.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Mixing+Time&body=**Parameter%3A**+Mixing+Time%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fmixing-time.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
