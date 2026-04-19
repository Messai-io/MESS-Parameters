# energyRecoveryEfficiency

Energy recovery efficiency quantifies the ratio of electrical energy harvested from a microbial electrochemical system to the total chemical energy available in the substrate. Unlike coulombic efficiency (which tracks electron recovery), energy recovery accounts for voltage losses including activation overpotential, ohmic losses, and concentration polarization.

**Formula:** eta_E = (integral of P dt) / (delta_H * delta_S * V)

Where P = power output (W), delta_H = enthalpy of combustion of substrate (J/mol), delta_S = substrate consumed (mol), V = volume (L).

## Basic Information

| Property | Value |
|---|---|
| **Category** | Electrochemical |
| **Type** | number |
| **Unit** | % |

## Typical Values

- **Valid Range**: 0 - 100%
- **Typical MFC**: 2 - 15%
- **Lab Optimized MFC**: 10 - 30%
- **MEC (H2)**: 40 - 80% (with applied voltage)

## Measurement Methods

- **Continuous Power Integration**: Integrate power output (V x I) over operating period. Measure substrate consumption (COD or specific substrate). Calculate energy content from standard enthalpy of combustion. Ratio gives energy recovery.
- **Batch Cycle Method**: Run complete batch cycle. Measure total coulombs (integrate current). Measure total energy (integrate V x I). Compare to substrate energy (COD x 14.7 kJ/g-COD for wastewater).

## Performance Impact

Energy recovery is typically much lower than coulombic efficiency because voltage losses dissipate energy as heat. A system with 80% CE but 0.3V output (vs 1.1V theoretical) achieves only ~22% energy recovery. Improving energy recovery requires minimizing internal resistance (lower ohmic losses) and overpotentials (better catalysts, thinner biofilms).

## References

1. Logan, B.E. (2008). "Microbial Fuel Cells." John Wiley & Sons.
2. Rabaey, K. & Verstraete, W. (2005). "Microbial fuel cells: novel biotechnology for energy generation." Trends in Biotechnology, 23(6), 291-298.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+energyRecoveryEfficiency&body=**Parameter%3A**+energyRecoveryEfficiency%0A**Category%3A**+Electrochemical%0A**File%3A**+parameters%2Felectrical%2Fenergyrecoveryefficiency.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+energyRecoveryEfficiency&body=**Parameter%3A**+energyRecoveryEfficiency%0A**Category%3A**+Electrochemical%0A**File%3A**+parameters%2Felectrical%2Fenergyrecoveryefficiency.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+energyRecoveryEfficiency&body=**Parameter%3A**+energyRecoveryEfficiency%0A**Category%3A**+Electrochemical%0A**File%3A**+parameters%2Felectrical%2Fenergyrecoveryefficiency.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
