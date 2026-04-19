# voltammetryType

Voltammetry type specifies the electroanalytical technique used to characterize electrode kinetics, biofilm redox activity, and electron transfer mechanisms in MES. Cyclic voltammetry (CV) is most common for biofilm characterization. Linear sweep voltammetry (LSV) generates polarization curves. Differential pulse voltammetry (DPV) improves resolution for identifying individual redox species.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Electrochemical |
| **Type** | string |
| **Papers Reporting** | 10 |

## Typical Values

- **CV**: Cyclic voltammetry: 1-50 mV/s, most common
- **LSV**: Linear sweep: 0.1-1 mV/s for polarization curves
- **DPV**: Differential pulse: better peak resolution
- **SWV**: Square wave: fast, sensitive
- **CA**: Chronoamperometry: fixed potential, current vs time

## Measurement Methods

- **Potentiostat**: Three-electrode setup: working (biofilm anode), counter (cathode), reference (Ag/AgCl or SCE). Record I vs E.

## Affecting Factors

### Primary

- **Scan rate**: Slow rates (1-5 mV/s) for catalytic currents. Fast rates (>50 mV/s) for redox peak identification.
- **Biofilm state**: Turnover (substrate present) vs non-turnover (no substrate) reveal different information.

## References

1. Marsili, E. et al. (2008). Appl. Environ. Microbiol. 74:7329-7337.
2. Fricke, K. et al. (2008). Energy Environ. Sci. 1:144-147.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+voltammetryType&body=**Parameter%3A**+voltammetryType%0A**Category%3A**+Electrochemical%0A**File%3A**+parameters%2Felectrical%2Fvoltammetrytype.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+voltammetryType&body=**Parameter%3A**+voltammetryType%0A**Category%3A**+Electrochemical%0A**File%3A**+parameters%2Felectrical%2Fvoltammetrytype.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+voltammetryType&body=**Parameter%3A**+voltammetryType%0A**Category%3A**+Electrochemical%0A**File%3A**+parameters%2Felectrical%2Fvoltammetrytype.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
