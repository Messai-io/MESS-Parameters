# pH Level

pH level quantifies the acidity or alkalinity of electrolyte solutions in
microbial electrochemical systems, measured on a logarithmic scale from 0 to 14.
This parameter critically affects microbial metabolism, electrode reactions, and
system stability by influencing enzyme activity, membrane transport, and
electrochemical kinetics. Optimal pH management is essential for sustained high
performance.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Materials |
| **Type** | number |

## Typical Values

- **Range**: 4 - 10
- **Typical**: 6 - 8
- **Optimal**: 6.5 - 7.5
- **Performance Categories**: - **Low Performance**: <5.5 or >9.0 (extreme pH, poor microbial activity)
- **Moderate Performance**: 5.5 - 6.0 or 8.5 - 9.0 (suboptimal conditions)
- **High Performance**: 6.0 - 6.5 or 7.5 - 8.5 (good conditions)
- **Exceptional Performance**: 6.5 - 7.5 (optimal neutral range)

## Measurement Methods

- **Direct Measurement**: 1. **pH Electrodes**:     - Glass electrode with reference electrode    - Continuous real-time measurement    - High accuracy (±0.01 pH units)    - Requires regular calibration  2. **pH Indicators**:     - Colorimetric measurement    - Visual or spectrophotometric reading    - Good for field measurements    - Limited accuracy (±0.2 pH units)  3. **Ion-Selective Field Effect Transistors (ISFETs)**:    - Solid-state pH sensors    - Fast response time    - Miniaturizable for microenvironments    - Good for harsh environments
- **Calculation Considerations**: - Temperature correction for electrode response - Account for ionic strength effects - Consider buffer capacity and stability - Calibrate with standard buffer solutions

## Affecting Factors

### Primary

- **Microbial Activity**: - Fermentation produces organic acids (lowers pH)    - Protein degradation produces ammonia (raises pH)    - CO₂ production forms carbonic acid (lowers pH)    - Denitrification consumes protons (raises pH)
- **Electrochemical Reactions**: - Anode reactions often produce protons (lowers pH)    - Cathode reactions often consume protons (raises pH)    - pH gradients develop near electrodes    - Current density affects pH changes
- **Buffer Systems**: - Phosphate buffers: pKa around 7.2    - Carbonate buffers: pKa around 6.4    - Biological buffers (HEPES, MOPS)    - Natural buffering from organics
- **Substrate Type**: - Carbohydrates: Acidification during fermentation    - Proteins: Alkalinization from amino acid degradation    - Organic acids: Direct pH effects    - Alkaline substrates: Raise system pH
- **System Design**: - Mixing affects pH distribution    - Reactor volume affects buffer capacity    - Gas exchange affects CO₂/pH balance    - Membrane separation can create pH gradients

## Performance Impact

**Formula**: Activity ∝ exp(-|pH - pH_optimal|/sensitivity)

pH affects microbial enzyme activity and electrochemical reaction rates. Optimal
pH (6.5-7.5) maximizes microbial activity and power output. pH outside 5.5-8.5
significantly reduces performance. Extreme pH (<4 or >10) can cause irreversible
system damage.

## Compatible Systems

Electrolyte Composition

## References

1. **APHA, AWWA, WEF** (2017). "Standard Methods for the Examination of Water
   and Wastewater, 23rd Edition". American Public Health Association,
   Washington, DC.

   - Standard pH measurement methods

2. **Logan, B.E.** (2008). "Microbial fuel cells". John Wiley & Sons, Hoboken,
   NJ.

   - pH effects on bioelectrochemical systems

3. **Rabaey, K., et al.** (2003). "A microbial fuel cell capable of converting
   glucose to electricity at high rate and efficiency". _Biotechnology Letters_,
   25(18), 1531-1535.
   - pH optimization in microbial fuel cells

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+pH+Level&body=**Parameter%3A**+pH+Level%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fph-level.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+pH+Level&body=**Parameter%3A**+pH+Level%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fph-level.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+pH+Level&body=**Parameter%3A**+pH+Level%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fph-level.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
