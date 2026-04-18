# Redox Potential

Redox potential (ORP - Oxidation-Reduction Potential) quantifies the tendency of
a solution to gain or lose electrons in microbial electrochemical systems,
measured relative to the standard hydrogen electrode. This parameter indicates
the oxidizing or reducing nature of the environment and affects microbial
metabolism, electrode reactions, and overall system performance.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Materials |
| **Type** | number |
| **Unit** | V vs SHE |
| **Papers Reporting** | 7 |

## Typical Values

- **Range**: -500 to +800 mV vs SHE
- **Typical**: -300 to +200 mV vs SHE
- **Optimal**: -200 to +100 mV vs SHE
- **Performance Categories**: - **Low Performance**: <-400 mV (highly reducing, limited applications)
- **Moderate Performance**: -400 to -100 mV (moderately reducing)
- **High Performance**: -100 to +200 mV (balanced conditions)
- **Exceptional Performance**: +200 to +400 mV (oxidizing conditions)

## Measurement Methods

- **Direct Measurement**: 1. **ORP Electrode**:     - Platinum electrode vs reference (Ag/AgCl)    - Direct potential measurement    - Convert to SHE scale: E(SHE) = E(Ag/AgCl) + 197 mV    - Continuous monitoring capability  2. **Potentiometric Titration**:    - Titrate with standard redox couples    - Plot potential vs titrant volume    - Determine redox capacity and potential    - More accurate for complex systems
- **Calculation Considerations**: - Use appropriate reference electrode corrections - Account for temperature effects: -2 mV/°C typically - Consider junction potential effects

## Affecting Factors

### Primary

- **Dissolved Oxygen**: - High O₂: Positive redox potential (+200 to +400 mV)    - Low O₂: Negative redox potential (-200 to 0 mV)    - Anaerobic: Highly negative (-300 to -500 mV)
- **Microbial Activity**: - Aerobic respiration: Increases redox potential    - Anaerobic respiration: Decreases redox potential    - Fermentation: Highly reducing conditions
- **Chemical Composition**: - Oxidizing agents: Increase redox potential    - Reducing agents: Decrease redox potential    - Organic matter: Generally reducing
- **pH**: - Affects redox potential of many couples    - pH increase: Generally decreases redox potential    - Follow Nernst equation: E = E° - (RT/nF)ln([Red]/[Ox])
- **Temperature**: - Higher temperature: Generally decreases redox potential    - Affects equilibrium constants    - Typical coefficient: -2 mV/°C

## Performance Impact

**Formula**: E = E° - (RT/nF)ln(Q)

Redox potential affects electrode potentials and available voltage. Optimal
redox conditions (-100 to +100 mV) provide balanced conditions for both aerobic
and anaerobic processes, maximizing metabolic flexibility and power output.

## Compatible Systems

Electrochemical Properties

## References

1. **Stumm, W. & Morgan, J.J.** (1996). "Aquatic Chemistry: Chemical Equilibria
   and Rates in Natural Waters". John Wiley & Sons, New York.

   - Comprehensive treatment of redox chemistry

2. **Logan, B.E.** (2008). "Microbial fuel cells". John Wiley & Sons, Hoboken,
   NJ.

   - Redox considerations in bioelectrochemical systems

3. **Lovley, D.R.** (2006). "Bug juice: harvesting electricity with
   microorganisms". _Nature Reviews Microbiology_, 4(7), 497-508.
   - Redox processes in microbial electricity generation

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Redox+Potential&body=**Parameter%3A**+Redox+Potential%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fredox-potential.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Redox+Potential&body=**Parameter%3A**+Redox+Potential%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fredox-potential.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Redox+Potential&body=**Parameter%3A**+Redox+Potential%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fredox-potential.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
