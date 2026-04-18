# Operating Voltage Cell

Operating voltage is the actual voltage measured across the terminals of an individual microbial electrochemical system (MES) cell while current is flowing through the external circuit under normal operating conditions. It represents the net voltage available to drive the external load (in MFCs) or the total voltage applied to drive the electrochemical reaction (in MECs). The operating voltage is always less than the open circuit voltage (OCV) due to irreversible voltage losses (overpotentials) associated with the electrochemical kinetics, ionic transport, and mass transfer within the cell.

The relationship between operating voltage and current follows the polarization equation: V_op = OCV - eta_act,anode - eta_act,cathode - I * R_ohmic - eta_conc, where eta_act represents activation overpotentials at each electrode, R_ohmic is the total ohmic resistance, and eta_conc is the concentration overpotential due to mass transport limitations. The operating voltage determines the power output of the cell (P = V_op * I) and the energy efficiency (eta_E = V_op / E_thermo, where E_thermo is the thermodynamic voltage). For MFCs, the operating point is selected to maximize power (at V_op approximately equal to OCV/2) or to maximize energy recovery (at higher V_op with lower current).

For MECs, the operating voltage refers to the applied voltage from an external power supply, which must overcome the thermodynamic minimum (approximately 0.14 V for acetate to hydrogen) plus all overpotentials. Higher applied voltages increase the current and hydrogen production rate but reduce the energy efficiency. The practical range of applied voltages for MECs is 0.2--1.0 V, with 0.6--0.8 V being the most common operating range. In MDCs, the operating voltage reflects the net cell potential under current flow, accounting for both the bioelectrochemical driving force and the energy consumed for desalination.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Reactor Design |
| **Subcategory** | Individual Cell Electrical Output |
| **Type** | number |
| **Unit** | V |
| **Minimum** | 0 |
| **Maximum** | 1.5 |

## Typical Values

- **Valid Range**: 0--1.5 V
- **Typical Range**: 0.2--0.7 V (MFC under load)
- **MFC at maximum power point**: 0.3--0.5 V (approximately OCV/2)
- **MFC at high energy efficiency**: 0.5--0.7 V (lower current, higher per-electron recovery)
- **MFC minimum practical voltage**: 0.2 V (below which parasitic losses dominate)
- **MEC (applied voltage)**: 0.2--1.0 V (common range 0.6--0.8 V)
- **MEC (minimum for H2 production)**: 0.2 V practical (0.14 V theoretical)
- **MDC**: 0.2--0.6 V
- **Series stack MFC**: V_stack = n * V_op per cell; typically 1--5 V for 2--10 cell stacks
- **Target for practical MFC operation**: 0.3--0.5 V per cell

## Measurement Methods

- **Direct Voltage Measurement Under Load**: Connect a known external resistance across the cell terminals and measure the voltage using a high-impedance voltmeter or data acquisition system. Allow the voltage to stabilize (typically 15--30 minutes for biological systems) before recording. The operating voltage varies with the external resistance: higher resistance gives higher voltage but lower current.
- **Potentiostat-Controlled Voltage**: Use a potentiostat to set a fixed operating voltage (chronoamperometry mode) and record the resulting current over time. This provides precise control of the operating point and enables systematic exploration of the voltage-current relationship. For MECs, use the potentiostat in galvanostat or voltage-step mode to apply the desired voltage.
- **Continuous Monitoring with Data Logger**: Install a multi-channel data logger or voltage monitoring system to record the operating voltage continuously over days to weeks. This reveals startup behavior, diurnal variations (from temperature changes), substrate feeding effects, and long-term degradation. Sampling rates of 0.1--1 Hz are typically sufficient for MES systems.

## Affecting Factors

### Primary

- **External Load/Resistance**: V_op = OCV * R_ext / (R_ext + R_int). Increasing external resistance increases voltage but decreases current and power.
- **Internal Resistance**: Higher R_int causes a greater voltage drop from OCV to V_op at any given current.
- **Current Density**: Increasing current density increases all overpotential losses, reducing V_op.
- **Substrate Concentration**: Low substrate concentration increases concentration overpotentials, reducing V_op at a given current.
- **Temperature**: Higher temperature generally increases V_op at a given current by reducing activation and ohmic losses.
- **pH**: Deviations from optimal pH (typically 6.5--7.5 for the anode) increase overpotentials.
- **Biofilm Health**: Stressed or depleted biofilms produce higher anode activation overpotentials, reducing V_op.
- **Membrane Fouling**: Fouled membranes increase ohmic resistance, reducing V_op.
- **Cathode Degradation**: Catalyst poisoning or flooding reduces cathode performance, lowering V_op.

## Related Parameters

- **name**: Open Circuit Voltage (Cell)

- **relationship**: The maximum voltage at zero current; V_op is always less than OCV.
- **name**: Internal Resistance (Cell)

- **relationship**: Determines the voltage drop from OCV under load.
- **name**: Current Density (Cell)

- **relationship**: Related to V_op through the polarization curve.
- **name**: Power Density (Cell)

- **relationship**: P = V_op * I / (volume or area).
- **name**: Stack Voltage

- **relationship**: Sum of individual cell operating voltages (series connection).
- **name**: Current Efficiency

- **relationship**: Affected by the operating voltage through its influence on parasitic reactions.
- **name**: pH Setpoint

- **relationship**: Affects overpotentials and thus V_op.
- **name**: Temperature Setpoint

- **relationship**: Influences kinetics and V_op.

## Compatible Systems

Cell Performance Metrics

## References

- Logan, B.E., Hamelers, B., Rozendal, R., et al. (2006). Microbial fuel cells: Methodology and technology. *Environmental Science & Technology*, 40(17), 5181--5192.
- Logan, B.E. (2008). *Microbial Fuel Cells*. John Wiley & Sons. Chapter 3: Voltage and Power.
- Rozendal, R.A., Hamelers, H.V., Molenkamp, R.J., & Buisman, C.J. (2007). Performance of single chamber biocatalyzed electrolysis with different types of ion exchange membranes. *Water Research*, 41(9), 1984--1994.
- Sleutels, T.H., Ter Heijne, A., Buisman, C.J., & Hamelers, H.V. (2012). Bioelectrochemical systems: An outlook for practical applications. *ChemSusChem*, 5(6), 1012--1019.
- Oh, S.E. & Logan, B.E. (2007). Voltage reversal during microbial fuel cell stack operation. *Journal of Power Sources*, 167(1), 11--17.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Operating+Voltage+Cell&body=**Parameter%3A**+Operating+Voltage+Cell%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Foperating-voltage-cell.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Operating+Voltage+Cell&body=**Parameter%3A**+Operating+Voltage+Cell%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Foperating-voltage-cell.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Operating+Voltage+Cell&body=**Parameter%3A**+Operating+Voltage+Cell%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Foperating-voltage-cell.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
