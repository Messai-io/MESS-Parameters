# Stack Voltage

Stack voltage is the total electrical potential difference measured across the terminals of a microbial electrochemical system stack under operating conditions. In microbial fuel cells (MFCs), the stack voltage represents the sum of individual cell voltages minus interconnection losses in series-connected configurations, or the average cell voltage in parallel-connected configurations. In microbial electrolysis cells (MECs), the stack voltage is the total applied potential required to drive cathodic reactions across all cells. Stack voltage is a critical parameter for power electronics design, load matching, and system integration, as most electronic devices and energy storage systems require minimum voltage thresholds to operate.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Reactor Design |
| **Subcategory** | Stack Electrical Configuration |
| **Type** | number |
| **Unit** | V |
| **Minimum** | 0 |
| **Maximum** | 100 |

## Typical Values

- **text**: | Configuration | Open Circuit Voltage | Operating Voltage | Notes |
|--------------|---------------------|-------------------|-------|
| Single MFC cell | 0.6 - 0.85 V | 0.2 - 0.5 V | At maximum power point |
| MFC stack (4 cells, series) | 2.4 - 3.4 V | 0.8 - 2.0 V | Sufficient for LED, sensor |
| MFC stack (10 cells, series) | 6 - 8.5 V | 2 - 5 V | USB device charging range |
| MFC stack (20+ cells, series) | 12 - 17 V | 4 - 10 V | DC motor, pump operation |
| MEC stack (per cell, applied) | -- | 0.6 - 1.2 V | Hydrogen production |
| MEC stack (10 cells, series) | -- | 8 - 12 V | Industrial H2 generation |

**Voltage losses in series stacks:**
- Interconnection resistance: 5 - 50 mV per connection
- Ionic short circuit (shared electrolyte): 50 - 200 mV per cell
- Voltage reversal events: complete cell voltage loss (negative contribution)

## Measurement Methods

- **1. **High-impedance voltmeter**: Measure terminal voltage with a voltmeter having input impedance greater than 10 megaohms to avoid loading the circuit. For OCV measurement, disconnect all external loads.**: 2. **Individual cell voltage monitoring**: Use voltage taps at each bipolar plate or current collector to measure individual cell voltages within the stack. This enables real-time detection of underperforming or reversed cells. 3. **Data logger with differential inputs**: Multi-channel data loggers with differential voltage inputs can simultaneously record all cell voltages and the total stack voltage at sampling rates of 0.1-100 Hz. 4. **Polarization curve**: Sweep external resistance from infinity (OCV) to near zero while recording voltage-current pairs. The voltage at maximum power is typically 40-60% of OCV. 5. **Electrochemical impedance spectroscopy (EIS)**: Apply small AC perturbation to the stack to separate ohmic, charge transfer, and diffusion contributions to voltage losses.

## Affecting Factors

- **text**: - **Number of cells in series**: OCV scales linearly with cell count, but operating voltage scales sub-linearly due to cumulative internal resistance.
- **Ionic short circuits**: Cells sharing a common electrolyte pathway (e.g., through shared feed manifolds) can lose 10-30% of theoretical voltage through parasitic ionic currents.
- **Voltage reversal**: Occurs when a weak cell in a series stack is driven to negative voltage by stronger neighbors. This is the primary failure mode of series MFC stacks.
- **Operating current**: Higher current draw increases ohmic and activation overpotential losses, reducing stack voltage.
- **Substrate availability**: Depletion of organic substrate in downstream cells (series-flow) reduces their voltage contribution.
- **pH gradients**: Proton accumulation at anodes and consumption at cathodes creates pH gradients that reduce the thermodynamic cell voltage by approximately 59 mV per pH unit difference.
- **Temperature**: Higher temperature improves kinetics and reduces activation overpotential, but the thermodynamic OCV decreases slightly with temperature.

## Compatible Systems

Multi Cell Stack Configuration

## References

1. Oh, S.E., & Logan, B.E. (2007). Voltage reversal during microbial fuel cell stack operation. *Journal of Power Sources*, 167(1), 11-17.
2. Aelterman, P., Rabaey, K., Pham, H.T., Boon, N., & Verstraete, W. (2006). Continuous electricity generation at high voltages and currents using stacked environmental fuel cells. *Environmental Science & Technology*, 40(10), 3388-3394.
3. Kim, Y., Hatzell, M.C., Hutchinson, A.J., & Logan, B.E. (2011). Capturing power at higher voltages from arrays of microbial fuel cells without voltage reversal. *Energy & Environmental Science*, 4(11), 4662-4667.
4. Ieropoulos, I., Greenman, J., & Melhuish, C. (2008). Microbial fuel cells based on carbon veil electrodes: stack configuration and scalability. *International Journal of Energy Research*, 32(13), 1228-1240.
5. Gurung, A., & Oh, S.E. (2012). The performance of serially and parallelly connected microbial fuel cells. *Energy Sources, Part A*, 34(17), 1591-1598.

---

*Parameter documentation for the MESS (Microbial Electrochemical Systems Standardization) framework.*

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Stack+Voltage&body=**Parameter%3A**+Stack+Voltage%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fstack-voltage.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Stack+Voltage&body=**Parameter%3A**+Stack+Voltage%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fstack-voltage.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Stack+Voltage&body=**Parameter%3A**+Stack+Voltage%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fstack-voltage.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
