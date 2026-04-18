# External Load

External load (also called external resistance, R_ext) is the electrical resistance connected between the anode and cathode of a microbial fuel cell (MFC) through which the generated current flows to perform useful work. Measured in ohms, this parameter is the primary means of controlling the operating point of an MFC on its polarization curve and directly determines the balance between voltage output and current generation. External load is arguably the single most important operational parameter for MFC performance optimization.

The relationship between external load and MFC performance follows Ohm's law (V = I * R_ext) modulated by the internal resistance (R_int) of the cell. At very high external loads (R_ext >> R_int), the cell operates near open-circuit voltage with minimal current and power. At very low external loads (R_ext << R_int), the cell generates maximum current but at very low voltage, with most energy dissipated internally. Maximum power transfer occurs when R_ext = R_int (impedance matching), a condition that shifts as the biofilm matures, membrane fouls, and solution chemistry changes over time.

In microbial electrolysis cells (MECs), the external load concept is replaced by applied voltage, as MECs require an external energy input to drive hydrogen evolution. However, the internal resistance concepts remain analogous. For MFCs used in practical applications, the external load may be a direct resistive load, an electronic load with maximum power point tracking (MPPT), a charge pump circuit, or a DC-DC converter, each with different implications for system efficiency and biofilm adaptation.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Operational |
| **Type** | number |
| **Unit** | Ω |

## Typical Values

- **Valid Range**: 1 -- 100000 ohm
- **Short-circuit operation**: < 1 ohm (not recommended for sustained operation)
- **Maximum power point (typical lab MFC)**: 100 -- 1000 ohm
- **Maximum power point (optimized MFC)**: 10 -- 100 ohm
- **High-performance single-chamber MFC**: 50 -- 200 ohm
- **Low-performance or startup MFC**: 1000 -- 10000 ohm
- **Stack MFC systems**: 1 -- 50 ohm (total)
- **Polarization curve sweep range**: 10 -- 100000 ohm
- **Open-circuit (no load)**: > 100000 ohm (effectively infinite)

## Measurement Methods

- **Fixed Resistor Method**: A precision resistor (tolerance +/- 1% or better, e.g., metal film resistor) is connected between the anode and cathode using low-resistance wire connections (< 0.1 ohm). Voltage across the resistor is measured using a high-impedance voltmeter or DAQ system (> 10 Mohm input impedance). Current is calculated as I = V/R. Power is P = V^2/R. This is the most common method in MFC research.
- **Electronic Decade Resistance Box**: A variable resistance box (e.g., IET Labs RS-201W, 1 ohm to 10 Mohm in 0.01 ohm steps) allows systematic variation of external load for polarization curve generation. Each resistance setting is maintained for a minimum of 15--30 minutes to allow quasi-steady-state conditions. Accuracy: +/- 0.05% for precision decade boxes.
- **Programmable Electronic Load**: An electronic load (e.g., BK Precision 8500, Rigol DL3021) provides automated resistance control with logging capability. The device can perform linear or logarithmic resistance sweeps for automated polarization curve generation. Resolution: typically 0.001 ohm; accuracy: +/- 0.1%.

## Affecting Factors

### Primary

- **Internal Resistance**: The optimal external load equals the internal resistance for maximum power. R_int for MFCs ranges from 5 ohm (highly optimized, large electrode area) to 5000 ohm (poorly performing, high-resistance membrane). As R_int changes with biofilm maturation, the optimal R_ext shifts.
- **Electrode Area**: Larger electrode areas reduce internal resistance, shifting the optimal external load to lower values. Doubling the cathode area can reduce R_int by 30--50%, requiring a corresponding reduction in R_ext for power matching.
- **Biofilm Acclimation**: Geobacter-dominated biofilms acclimate to the external load over 1--3 weeks. Suddenly changing R_ext by more than 50% can temporarily reduce performance until the biofilm re-adapts. Gradual load changes (10--20% per day) are recommended.
- **Application Requirements**: Energy harvesting circuits, LED loads, sensors, and capacitor charging each have different effective resistance characteristics. Capacitive loads present time-varying effective resistance during charging.
- **Number of Cells in Stack**: Series-connected MFC stacks require lower total external resistance to maintain optimal current per cell. A 4-cell stack at 200 ohm optimal per cell requires 800 ohm total, but voltage reversal risk increases if any cell is overloaded.

## Related Parameters

- **name**: [Load Switching Frequency](load-switching-frequency.md)

- **relationship**: Rate of load changes for MPPT
- **name**: [Power Factor](power-factor.md)

- **relationship**: Ratio of real to apparent power
- **name**: [Power Requirement](power-requirement.md)

- **relationship**: Load power demand
- **name**: [Interconnection Loss](interconnection-loss.md)

- **relationship**: Electrical losses in wiring
- **name**: [Mode](mode.md)

- **relationship**: Operational mode (batch, continuous, etc.)

## Compatible Systems

Circuit Conditions

## References

- Logan, B.E. et al. (2006). "Microbial fuel cells: methodology and technology." Environmental Science & Technology, 40(17), 5181-5192.
- Aelterman, P. et al. (2008). "The anode potential regulates bacterial activity in microbial fuel cells." Applied Microbiology and Biotechnology, 78(3), 409-418.
- Woodward, L. et al. (2010). "Maximizing power production in a stack of microbial fuel cells using multiunit optimization method." Biotechnology Progress, 26(1), 106-114.
- Premier, G.C. et al. (2011). "Automatic control of load increases power and efficiency in a microbial fuel cell." Journal of Power Sources, 196(4), 2013-2019.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+External+Load&body=**Parameter%3A**+External+Load%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fexternal-load.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+External+Load&body=**Parameter%3A**+External+Load%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fexternal-load.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+External+Load&body=**Parameter%3A**+External+Load%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fexternal-load.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
