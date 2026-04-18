# Oxidation-Reduction Potential

Oxidation-reduction potential (ORP) quantifies the tendency of a solution to
gain or lose electrons in microbial electrochemical systems, measured relative
to a standard hydrogen electrode. This parameter indicates the redox state of
the system and affects microbial metabolism, electron transfer processes, and
overall electrochemical performance. ORP is fundamental to understanding and
controlling bioelectrochemical reactions.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Materials |
| **Type** | number |
| **Unit** | mV vs SHE |
| **Papers Reporting** | 17 |

## Typical Values

- **Range**: -500 to +800 mV vs SHE
- **Typical**: -300 to +200 mV vs SHE
- **Optimal**: -200 to 0 mV vs SHE (for most MES applications)
- **Performance Categories**: - **Low Performance**: <-400 mV (highly reducing, may inhibit some processes)
- **Moderate Performance**: -400 to -100 mV (moderately reducing)
- **High Performance**: -200 to +100 mV (optimal range for most systems)
- **Exceptional Performance**: Depends on specific application requirements

## Measurement Methods

- **Direct Measurement**: 1. **ORP Electrode**:     - Use platinum or gold electrode vs reference    - Measure potential difference directly    - Standard hydrogen electrode (SHE) or Ag/AgCl reference    - Continuous monitoring capability  2. **Combined pH/ORP Probes**:     - Simultaneous pH and ORP measurement    - Convenient for routine monitoring    - Good for process control applications    - Regular calibration required  3. **Potentiometric Titration**:    - Titrate with oxidizing or reducing agents    - Plot potential vs titrant volume    - Determine redox capacity and potential    - More detailed characterization method
- **Calculation Considerations**: - Convert between reference electrodes: E_SHE = E_Ag/AgCl + 197 mV - Account for temperature effects on potential - Consider junction potential effects - Calibrate with standard redox solutions

## Affecting Factors

### Primary

- **Dissolved Oxygen**: - High DO: Positive ORP (oxidizing conditions)    - Low DO: Negative ORP (reducing conditions)    - Critical factor in aerobic vs anaerobic systems    - Affects microbial community structure
- **Organic Matter Content**: - High organics: Lower ORP (reducing)    - Microbial consumption creates reducing conditions    - Substrate type affects redox potential    - Biodegradation processes consume oxygen
- **pH**: - Affects Nernst equation calculations    - Many redox couples are pH-dependent    - pH changes can shift ORP significantly    - Must consider pH-ORP relationship
- **Microbial Activity**: - Metabolic processes affect redox state    - Electroactive bacteria influence ORP    - Biofilm development changes local conditions    - Species composition affects redox environment
- **Chemical Additives**: - Oxidizing agents increase ORP    - Reducing agents decrease ORP    - Electron mediators affect measurements    - Buffer systems can influence ORP

## Performance Impact

Optimal ORP range (-200 to 0 mV vs SHE) supports efficient anaerobic metabolism
and electron transfer in most MES applications. Too oxidizing conditions (>+200
mV) may inhibit anaerobic processes. Too reducing conditions (<-400 mV) may
limit some electrochemical reactions.

## Compatible Systems

Chemical Properties

## References

1. **Stumm, W. & Morgan, J.J.** (2012). "Aquatic Chemistry: Chemical Equilibria
   and Rates in Natural Waters". John Wiley & Sons, New York.

   - Comprehensive treatment of redox chemistry in aqueous systems

2. **Lovley, D.R.** (2006). "Bug juice: harvesting electricity with
   microorganisms". _Nature Reviews Microbiology_, 4(7), 497-508.

   - Redox processes in bioelectrochemical systems

3. **Logan, B.E.** (2008). "Microbial Fuel Cells". John Wiley & Sons, Hoboken,
   NJ.
   - ORP considerations in microbial fuel cell design

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Oxidation-Reduction+Potential&body=**Parameter%3A**+Oxidation-Reduction+Potential%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Foxidation-reduction-potential.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Oxidation-Reduction+Potential&body=**Parameter%3A**+Oxidation-Reduction+Potential%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Foxidation-reduction-potential.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Oxidation-Reduction+Potential&body=**Parameter%3A**+Oxidation-Reduction+Potential%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Foxidation-reduction-potential.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
