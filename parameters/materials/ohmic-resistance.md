# Ohmic Resistance

Ohmic resistance quantifies the electrical resistance to current flow in
microbial electrochemical systems that follows Ohm's law (V = IR), representing
the sum of resistances from solutions, electrodes, membranes, and connections.
This parameter directly affects power output, energy efficiency, and overall
system performance. Lower ohmic resistance enables higher current densities and
better power generation.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Materials |
| **Type** | number |
| **Unit** | Ω·cm² |

## Typical Values

- **Range**: 0.1 - 1000 Ω
- **Typical**: 1 - 100 Ω
- **Optimal**: 1 - 20 Ω
- **Performance Categories**: - **Low Performance**: >100 Ω (high resistance, poor performance)
- **Moderate Performance**: 20 - 100 Ω (moderate resistance)
- **High Performance**: 5 - 20 Ω (good performance)
- **Exceptional Performance**: <5 Ω (excellent performance)

## Measurement Methods

- **Direct Measurement**: 1. **DC Resistance Measurement**:     - Apply known current and measure voltage    - Calculate resistance using Ohm's law (R = V/I)    - Use low currents to avoid polarization    - Account for non-linear effects  2. **AC Impedance Spectroscopy**:     - Apply AC voltage at high frequency (>1 kHz)    - Extract real impedance component    - Separate ohmic from non-ohmic contributions    - More accurate for complex systems  3. **Current Interrupt Method**:    - Suddenly disconnect load and measure voltage jump    - Instantaneous voltage change indicates ohmic drop    - Separate from polarization effects    - Useful for operating systems
- **Calculation Considerations**: - R_ohmic = R_solution + R_electrodes + R_membrane + R_connections - Account for electrode area normalization - Consider temperature effects on resistance - Separate ohmic from activation and concentration losses

## Affecting Factors

### Primary

- **Solution Resistance**: - Ionic conductivity affects resistance    - Electrode spacing affects path length    - Solution composition influences conductivity    - Temperature affects ion mobility
- **Electrode Resistance**: - Material conductivity affects resistance    - Electrode thickness influences path length    - Contact resistance affects total resistance    - Electrode porosity affects effective conductivity
- **Membrane Resistance**: - Membrane thickness affects resistance    - Ion exchange capacity influences conductivity    - Membrane hydration affects performance    - Type of membrane affects resistance
- **System Design**: - Cell geometry affects current paths    - Connection quality affects resistance    - Stack configuration influences total resistance    - Current collector design affects resistance
- **Operating Conditions**: - Current density affects resistance values    - Temperature influences all resistance components    - Age affects contact and electrode resistance    - Fouling affects membrane resistance

## Performance Impact

**Formula**: P_max = V²/(4R_total)

Where P_max = maximum power, V = open circuit voltage, R_total = total
resistance. Lower ohmic resistance (<20 Ω) enables higher power output and
efficiency. High ohmic resistance (>100 Ω) severely limits performance and
practical viability.

## Compatible Systems

Impedance

## References

1. **Logan, B.E.** (2008). "Microbial Fuel Cells". John Wiley & Sons, Hoboken,
   NJ.

   - Ohmic resistance in bioelectrochemical systems

2. **Rabaey, K. & Verstraete, W.** (2005). "Microbial fuel cells: novel
   biotechnology for energy generation". _Trends in Biotechnology_, 23(6),
   291-298.

   - Resistance effects on system performance

3. **Fan, Y., et al.** (2007). "Improved Coulombic efficiency and power density
   of air-cathode microbial fuel cells with an improved cathode structure".
   _Bioresource Technology_, 98(6), 1192-1196.
   - Ohmic resistance optimization strategies

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Ohmic+Resistance&body=**Parameter%3A**+Ohmic+Resistance%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fohmic-resistance.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Ohmic+Resistance&body=**Parameter%3A**+Ohmic+Resistance%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fohmic-resistance.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Ohmic+Resistance&body=**Parameter%3A**+Ohmic+Resistance%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fohmic-resistance.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
