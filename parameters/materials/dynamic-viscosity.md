# Dynamic Viscosity

Viscosity quantifies the resistance of fluids to flow in microbial
electrochemical systems, affecting mass transfer, mixing efficiency, and pumping
requirements. This parameter influences hydrodynamics, biofilm development, and
overall system performance. Lower viscosity generally improves mass transfer and
reduces energy consumption for fluid circulation.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Materials |
| **Type** | number |
| **Unit** | cP |

## Typical Values

- **Range**: 0.5 - 50 cP
- **Typical**: 0.8 - 5 cP
- **Optimal**: 0.8 - 2 cP
- **Performance Categories**: - **Low Performance**: >10 cP (high viscosity, poor mass transfer)
- **Moderate Performance**: 2 - 10 cP (moderate viscosity)
- **High Performance**: 1 - 2 cP (good flow characteristics)
- **Exceptional Performance**: 0.8 - 1.2 cP (water-like viscosity)

## Measurement Methods

- **Direct Measurement**: 1. **Rotational Viscometer**:     - Use spindle rotating in fluid sample    - Measure torque required for rotation    - Calculate viscosity from resistance to rotation    - Suitable for wide viscosity range  2. **Capillary Viscometer**:     - Measure time for fluid to flow through calibrated capillary    - Calculate kinematic viscosity from flow time    - Convert to dynamic viscosity using density    - High accuracy for low-viscosity fluids  3. **Falling Ball Viscometer**:    - Measure terminal velocity of falling sphere    - Apply Stokes' law to calculate viscosity    - Simple method for transparent fluids    - Limited to specific viscosity ranges
- **Calculation Considerations**: - Dynamic viscosity (μ) = kinematic viscosity (ν) × density (ρ) - Account for temperature effects (viscosity decreases with temperature) - Consider non-Newtonian behavior at high concentrations - Normalize measurements to standard temperature

## Affecting Factors

### Primary

- **Temperature**: - Higher temperature reduces viscosity    - Exponential relationship for most fluids    - Critical factor for system design    - Must control temperature during measurement
- **Dissolved Solids Content**: - Higher concentrations increase viscosity    - Polymers and proteins have large effects    - Suspended solids contribute to apparent viscosity    - Non-linear relationship at high concentrations
- **Solution Composition**: - Different solutes affect viscosity differently    - Electrolytes generally have small effects    - Organic compounds can significantly increase viscosity    - pH may affect viscosity of protein solutions
- **Biofilm Presence**: - EPS (extracellular polymeric substances) increase viscosity    - Biofilm fragments affect bulk fluid properties    - Biopolymer production increases local viscosity    - Microbial metabolites may affect viscosity
- **System Age**: - Accumulation of metabolites over time    - Biofilm aging releases polymers    - Fouling increases apparent viscosity    - Cleaning cycles reset viscosity properties

## Performance Impact

Low viscosity (0.8-2 cP) promotes good mass transfer, efficient mixing, and low
pumping energy requirements. High viscosity (>5 cP) reduces mass transfer rates,
increases pressure drop, and raises energy consumption for fluid circulation.

## Compatible Systems

Chemical Properties

## References

1. **Bird, R.B., et al.** (2007). "Transport Phenomena". John Wiley & Sons, New
   York.

   - Comprehensive treatment of viscosity and fluid properties

2. **Morrison, F.A.** (2013). "An Introduction to Fluid Mechanics". Cambridge
   University Press, Cambridge.

   - Viscosity effects on fluid flow and mass transfer

3. **Tchobanoglous, G., et al.** (2003). "Wastewater Engineering: Treatment and
   Reuse". McGraw-Hill, New York.
   - Viscosity considerations in biological treatment systems

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Dynamic+Viscosity&body=**Parameter%3A**+Dynamic+Viscosity%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fdynamic-viscosity.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Dynamic+Viscosity&body=**Parameter%3A**+Dynamic+Viscosity%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fdynamic-viscosity.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Dynamic+Viscosity&body=**Parameter%3A**+Dynamic+Viscosity%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fdynamic-viscosity.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
