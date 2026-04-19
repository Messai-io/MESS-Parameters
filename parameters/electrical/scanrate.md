# scanRate

Scan rate is the speed at which the applied potential is swept during voltammetric measurements in microbial electrochemical systems, expressed in mV/s. It determines the balance between capacitive and faradaic currents, affecting the resolution of redox peaks and the accuracy of kinetic parameters. Lower scan rates (1-5 mV/s) favor steady-state conditions revealing true biofilm electrochemistry, while higher scan rates (>50 mV/s) emphasize capacitive behavior and fast electron transfer processes.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Electrochemical |
| **Type** | number |
| **Unit** | mV/s |
| **Papers Reporting** | 116 |

## Typical Values

- **Valid Range**: 0.1 - 1000 mV/s
- **Biofilm CV**: 1 - 10 mV/s (slow, captures biofilm kinetics)
- **Turnover CV**: 1 - 5 mV/s (catalytic current)
- **Non-turnover CV**: 5 - 50 mV/s (redox peak identification)
- **EIS Validation**: 1 - 2 mV/s (quasi-steady-state)

## Measurement Methods

- **Cyclic Voltammetry (CV)**: Three-electrode setup with potentiostat. Working electrode = biofilm anode, counter = cathode, reference = Ag/AgCl or SCE. Scan between -0.6V and +0.2V vs Ag/AgCl. Record at least 3 stable cycles.
- **Linear Sweep Voltammetry (LSV)**: Single forward sweep for polarization analysis. Typically 0.1-1 mV/s for MES. Use for power curve generation.

## Affecting Factors

### Primary

- **Biofilm Thickness**: Thicker biofilms require slower scan rates for complete electrochemical interrogation. >100 um biofilms need <5 mV/s.
- **Solution Resistance**: High solution resistance causes ohmic distortion at fast scan rates. Use iR compensation or reduce scan rate.

## Performance Impact

Scan rate selection directly affects data interpretation. Too-fast scan rates overestimate catalytic current due to capacitive contributions. Too-slow scan rates may miss transient redox species. For reproducible MES characterization, the IEC recommends reporting the scan rate used and performing scan rate dependence studies.

## References

1. Fricke, K., Harnisch, F., & Schroder, U. (2008). "On the use of cyclic voltammetry for the study of anodic electron transfer in microbial fuel cells." Energy & Environmental Science, 1(1), 144-147.
2. Marsili, E., Rollefson, J.B., Baron, D.B., et al. (2008). "Microbial biofilm voltammetry: direct electrochemical characterization of catalytic electrode-attached biofilms." Applied and Environmental Microbiology, 74(23), 7329-7337.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+scanRate&body=**Parameter%3A**+scanRate%0A**Category%3A**+Electrochemical%0A**File%3A**+parameters%2Felectrical%2Fscanrate.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+scanRate&body=**Parameter%3A**+scanRate%0A**Category%3A**+Electrochemical%0A**File%3A**+parameters%2Felectrical%2Fscanrate.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+scanRate&body=**Parameter%3A**+scanRate%0A**Category%3A**+Electrochemical%0A**File%3A**+parameters%2Felectrical%2Fscanrate.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
