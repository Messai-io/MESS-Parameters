# Limiting Current

Limiting current represents the maximum current density achievable in microbial
electrochemical systems when electron transfer becomes limited by mass transport
processes rather than electrode kinetics. This parameter defines the upper
performance boundary of the system and indicates when substrate depletion,
product accumulation, or proton transport limitations become controlling
factors.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Materials |
| **Type** | number |
| **Unit** | mA/cm² |
| **Papers Reporting** | 12 |

## Typical Values

- **Range**: 0.1 - 50 mA/cm²
- **Typical**: 1 - 10 mA/cm²
- **Optimal**: 5 - 20 mA/cm²
- **Performance Categories**: - **Low Performance**: <1 mA/cm² (severe mass transport limitations)
- **Moderate Performance**: 1 - 5 mA/cm² (moderate limitations)
- **High Performance**: 5 - 20 mA/cm² (good transport)
- **Exceptional Performance**: >20 mA/cm² (excellent transport)

## Measurement Methods

- **Direct Measurement**: 1. **Polarization Curve Analysis**:     - Perform current-voltage sweeps    - Identify plateau region at high currents    - Limiting current where dI/dV ≈ 0    - Account for ohmic losses  2. **Chronoamperometry**:    - Apply high overpotential step    - Monitor current decay to steady state    - Steady-state current represents limiting value    - Less affected by capacitive effects
- **Calculation Considerations**: - Correct for ohmic resistance effects - Distinguish from current oscillations - Consider multiple limiting processes

## Affecting Factors

### Primary

- **Mass Transport**: - Substrate diffusion limitation    - Product removal limitations    - Proton transport constraints    - Flow rate and mixing effects
- **Biofilm Properties**: - Thickness: Thicker biofilms lower limiting current    - Porosity: Higher porosity increases limiting current    - Conductivity: Affects internal resistance
- **System Design**: - Electrode spacing affects resistance    - Flow configuration impacts transport    - Membrane properties in dual-chamber systems
- **Temperature**: - Higher temperature: Faster diffusion    - Enhanced mass transport coefficients    - Reduced viscosity effects
- **Substrate Concentration**: - Higher concentration: Higher limiting current    - Follows mass transport scaling laws    - Bulk concentration effects

## Performance Impact

**Formula**: ilim = nFDC/δ

Where n = electrons, F = Faraday constant, D = diffusion coefficient, C =
concentration, δ = diffusion layer thickness. Limiting current defines maximum
power output and system capacity for practical applications.

## Compatible Systems

Electrochemical Properties

## References

1. **Logan, B.E.** (2008). "Microbial fuel cells". John Wiley & Sons, Hoboken,
   NJ.

   - Mass transport limitations in MFCs

2. **Torres, C.I., et al.** (2008). "A kinetic perspective on extracellular
   electron transfer by anode-respiring bacteria". _FEMS Microbiology Reviews_,
   32(3), 518-531.

   - Transport limitations in bioelectrochemical systems

3. **Picioreanu, C., et al.** (2007). "A computational model for biofilm-based
   microbial fuel cells". _Water Research_, 41(13), 2921-2940.
   - Modeling of limiting currents in biofilm systems

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Limiting+Current&body=**Parameter%3A**+Limiting+Current%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Flimiting-current.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Limiting+Current&body=**Parameter%3A**+Limiting+Current%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Flimiting-current.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Limiting+Current&body=**Parameter%3A**+Limiting+Current%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Flimiting-current.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
