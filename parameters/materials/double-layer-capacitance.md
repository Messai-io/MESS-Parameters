# Double Layer Capacitance

Capacitance quantifies the ability of microbial electrochemical systems to store
electrical charge at the electrode-electrolyte interface, measured as the ratio
of charge stored to applied voltage. This parameter affects startup behavior,
current response, and power delivery characteristics. Higher capacitance
generally improves system performance by providing charge storage and buffering
voltage fluctuations.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Materials |
| **Type** | number |
| **Unit** | μF/cm² |

## Typical Values

- **Range**: 1 - 10,000 μF/cm²
- **Typical**: 10 - 1,000 μF/cm²
- **Optimal**: 100 - 2,000 μF/cm²
- **Performance Categories**: - **Low Performance**: <10 μF/cm² (poor charge storage, slow response)
- **Moderate Performance**: 10 - 100 μF/cm² (moderate capacitance)
- **High Performance**: 100 - 1,000 μF/cm² (good charge storage)
- **Exceptional Performance**: >1,000 μF/cm² (excellent capacitance)

## Measurement Methods

- **Direct Measurement**: 1. **Electrochemical Impedance Spectroscopy (EIS)**:     - Apply AC signal across frequency range    - Analyze impedance response vs frequency    - Extract capacitive component from equivalent circuit    - Most accurate method for complex systems  2. **Cyclic Voltammetry**:     - Scan potential at constant rate    - Measure capacitive current response    - Calculate capacitance from current-scan rate relationship    - C = I / (dV/dt) where I = current, dV/dt = scan rate  3. **Chronopotentiometry**:    - Apply constant current and measure voltage response    - Calculate capacitance from voltage-time relationship    - C = I × dt/dV    - Useful for direct capacitance measurement
- **Calculation Considerations**: - Normalize by electrode surface area for comparison - Distinguish double-layer from pseudocapacitance - Account for frequency dependence - Consider biofilm contributions to total capacitance

## Affecting Factors

### Primary

- **Electrode Material**: - Carbon materials: High capacitance (100-2000 μF/cm²)    - Metal electrodes: Lower capacitance (10-100 μF/cm²)    - Surface area directly affects total capacitance    - Porous materials show higher capacitance
- **Biofilm Properties**: - Biofilm acts as additional capacitive layer    - EPS composition affects capacitive behavior    - Biofilm thickness influences total capacitance    - Microbial species affect capacitive properties
- **Electrolyte Composition**: - Ion concentration affects double-layer thickness    - Ion size influences capacitance values    - pH affects surface charge and capacitance    - Ionic strength modifies electrical double layer
- **Operating Conditions**: - Temperature affects ion mobility and capacitance    - Applied potential affects double-layer structure    - Current density influences apparent capacitance    - System age affects electrode surface properties
- **System Design**: - Electrode geometry affects total capacitance    - Cell configuration influences measurement    - Connection resistance affects apparent capacitance    - Reference electrode placement affects accuracy

## Performance Impact

High capacitance (>500 μF/cm²) provides good charge storage, improves startup
behavior, and buffers voltage fluctuations during load changes. Low capacitance
(<50 μF/cm²) may result in poor transient response and voltage instability
during operation.

## Compatible Systems

Impedance

## References

1. **Conway, B.E.** (1999). "Electrochemical Supercapacitors: Scientific
   Fundamentals and Technological Applications". Kluwer Academic/Plenum
   Publishers, New York.

   - Comprehensive treatment of electrochemical capacitance

2. **Bard, A.J. & Faulkner, L.R.** (2001). "Electrochemical Methods:
   Fundamentals and Applications". John Wiley & Sons, New York.

   - Fundamental electrochemical capacitance theory

3. **Wei, J., et al.** (2011). "A new method for measuring biofilm thickness and
   monitoring biofilm growth in microbial fuel cells". _Biosensors and
   Bioelectronics_, 26(11), 4490-4496.
   - Capacitance effects in bioelectrochemical systems

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Double+Layer+Capacitance&body=**Parameter%3A**+Double+Layer+Capacitance%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fdouble-layer-capacitance.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Double+Layer+Capacitance&body=**Parameter%3A**+Double+Layer+Capacitance%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fdouble-layer-capacitance.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Double+Layer+Capacitance&body=**Parameter%3A**+Double+Layer+Capacitance%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fdouble-layer-capacitance.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
