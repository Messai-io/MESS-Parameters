# mode

Mode describes the primary operational configuration of a microbial electrochemical system (MES), defining both the electrochemical function and the hydraulic regime. The electrochemical mode determines whether the system generates electricity (MFC mode), produces hydrogen (MEC mode), desalinates water (MDC mode), or synthesizes chemicals (MES mode). The hydraulic mode defines whether the system operates in batch, fed-batch, continuous flow, or sequencing batch configurations. Together, these define the fundamental operating paradigm.

The electrochemical mode determines the thermodynamic driving force. In MFC mode, the potential difference between the anode biofilm (approximately -0.3 V vs. SHE) and the cathode (approximately +0.3 V vs. SHE for oxygen reduction) spontaneously generates current. In MEC mode, an external voltage (0.2--1.0 V) supplements the bioanode potential to drive hydrogen evolution at the cathode (E = -0.41 V vs. SHE at pH 7). In MDC mode, the bioelectrochemical potential drives ion migration through selective membranes for desalination. Hybrid modes that switch between MFC and MEC based on electricity prices or hydrogen demand represent advanced operational strategies.

Mode selection has profound implications for reactor design, electrode materials, membrane selection, control strategy, and economic analysis. MFC mode requires an oxygen-reducing cathode; MEC mode requires a hydrogen-evolving cathode and a power supply; MDC mode requires additional ion exchange membranes and desalination chambers.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Operational |
| **Type** | string |
| **Papers Reporting** | 58 |

## Typical Values

- **Valid Range**: Categorical
- **MFC (microbial fuel cell)**: Electricity generation; V_cell = 0.1--0.8 V; I = 0.1--10 A/m^2
- **MEC (microbial electrolysis cell)**: Hydrogen production; V_applied = 0.2--1.0 V; H2 rate = 0.1--10 m^3/m^3/d
- **MDC (microbial desalination cell)**: Water desalination; salt removal 30--90%
- **MES (microbial electrosynthesis)**: Chemical production (acetate, ethanol, methane from CO2)
- **Batch mode**: Most common in lab (60% of studies)
- **Continuous mode**: Most common at pilot scale (70%)
- **Fed-batch**: Common for industrial wastewater (20% of studies)
- **SBR mode**: Growing popularity for combined treatment/energy

## Measurement Methods

- **Mode Documentation**: The operational mode is a design decision documented in the experimental protocol. It is defined by the reactor configuration, electrode types, membrane presence, external circuit, and hydraulic operation.
- **Electrochemical Characterization**: The mode is confirmed by measuring the cell voltage polarity and current direction. MFC: positive cell voltage, spontaneous current flow. MEC: negative cell voltage, current flow driven by external power supply. The transition between modes can be monitored during polarization curve measurements.

## Affecting Factors

### Primary

- **Application Objective**: Wastewater treatment prioritizes COD removal (any mode). Energy recovery favors MFC. Hydrogen production requires MEC. Water-stressed regions favor MDC.
- **Substrate Characteristics**: High-strength substrates (> 2 g COD/L) provide sufficient driving force for all modes. Low-strength substrates may not generate sufficient voltage for MDC without supplementary power.
- **Product Value**: Hydrogen ($2--8/kg) has higher value per unit energy than electricity ($0.05--0.15/kWh), potentially favoring MEC mode when hydrogen markets exist.
- **Climate**: Cold climates reduce biofilm kinetics, favoring modes with lower current density requirements. Warm climates enable all modes.

## Related Parameters

- **name**: [Feeding Strategy](feeding-strategy.md)

- **relationship**: Hydraulic mode details
- **name**: [External Load](external-load.md)

- **relationship**: Electrical operating point for MFC
- **name**: [Power Requirement](power-requirement.md)

- **relationship**: External power for MEC
- **name**: [Membrane Pairs](membrane-pairs.md)

- **relationship**: Desalination configuration for MDC
- **name**: [Hybrid Control Mode](hybrid-control-mode.md)

- **relationship**: Mode-switching strategies

## References

- Logan, B.E. (2008). Microbial Fuel Cells. John Wiley & Sons.
- Logan, B.E., Call, D., Cheng, S., Hamelers, H.V.M., Sleutels, T.H.J.A., Jeremiasse, A.W., Rozendal, R.A. (2008). "Microbial electrolysis cells for high yield hydrogen gas production from organic matter." Environmental Science & Technology, 42(23), 8630-8640.
- Cao, X. et al. (2009). "A new method for water desalination using microbial desalination cells." Environmental Science & Technology, 43(18), 7148-7152.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+mode&body=**Parameter%3A**+mode%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fmode.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+mode&body=**Parameter%3A**+mode%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fmode.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+mode&body=**Parameter%3A**+mode%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fmode.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
