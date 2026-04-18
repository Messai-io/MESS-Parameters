# Overpotential

Overpotential (η) represents the additional voltage required above the
thermodynamic equilibrium potential to drive an electrochemical reaction at a
specific current density in microbial electrochemical systems. This parameter
quantifies the kinetic losses and energy inefficiencies in the system. Lower
overpotentials indicate more efficient electrode reactions and higher overall
system performance.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Materials |
| **Type** | number |
| **Unit** | mV |
| **Papers Reporting** | 258 |

## Typical Values

- **Range**: 10 - 1000 mV
- **Typical**: 100 - 400 mV
- **Optimal**: 50 - 200 mV
- **Performance Categories**: - **Low Performance**: >500 mV (high kinetic losses)
- **Moderate Performance**: 300 - 500 mV (moderate losses)
- **High Performance**: 100 - 300 mV (efficient kinetics)
- **Exceptional Performance**: <100 mV (very efficient)

## Measurement Methods

- **Direct Measurement**: 1. **Polarization Curves**:     - Measure cell voltage vs current density    - Compare to theoretical cell potential    - Calculate: η = Etheoretical - Emeasured    - Separate anode and cathode contributions  2. **Three-Electrode Setup**:    - Individual electrode potential measurement    - Reference electrode (Ag/AgCl or SCE)    - Calculate overpotential vs reference    - Identify limiting electrode
- **Calculation Considerations**: - Account for ohmic losses (iR drop) - Separate activation, concentration, and ohmic overpotentials - Use IR compensation for accurate kinetic measurements

## Affecting Factors

### Primary

- **Current Density**: - Tafel relationship: η = a + b×log(i)    - Higher current requires higher overpotential    - Exponential increase at limiting currents
- **Electrode Material**: - Platinum: Low overpotential (50-150 mV)    - Carbon: Moderate overpotential (200-400 mV)    - Stainless steel: High overpotential (400-800 mV)
- **Biofilm Properties**: - Thick biofilms: Higher mass transfer overpotential    - Conductive biofilms: Lower charge transfer overpotential    - Biofilm composition affects overall losses
- **Temperature**: - Higher temperature: Lower activation overpotential    - Arrhenius relationship for kinetic processes    - Improved mass transfer at higher T
- **pH**: - Affects equilibrium potentials    - Proton availability influences cathode overpotential    - Optimal pH minimizes total overpotential

## Performance Impact

**Formula**: η = ηactivation + ηconcentration + ηohmic

Overpotential directly reduces cell voltage and power output. Each 100 mV
reduction in overpotential can increase power density by 20-40%. Systems
maintaining <200 mV total overpotential at practical current densities achieve
superior performance and efficiency.

## Compatible Systems

Electrochemical Properties

## References

1. **Logan, B.E.** (2008). "Microbial fuel cells". John Wiley & Sons, Hoboken,
   NJ.

   - Comprehensive treatment of overpotential in MFCs

2. **Fan, Y., et al.** (2007). "Improved cathode materials for microbial fuel
   cells". _Environmental Science & Technology_, 41(8), 2900-2906.

   - Cathode overpotential reduction strategies

3. **Torres, C.I., et al.** (2008). "Kinetic experiments for evaluating the
   Nernst-Monod model for anode-respiring bacteria". _Environmental Science &
   Technology_, 42(17), 6593-6597.
   - Detailed analysis of anode overpotentials

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Overpotential&body=**Parameter%3A**+Overpotential%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Foverpotential.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Overpotential&body=**Parameter%3A**+Overpotential%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Foverpotential.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Overpotential&body=**Parameter%3A**+Overpotential%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Foverpotential.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
