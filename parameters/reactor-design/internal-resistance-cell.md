# Internal Resistance Cell

Internal resistance is the total opposition to current flow within an individual microbial electrochemical system (MES) cell, encompassing all resistive losses between the anode biofilm and the external circuit terminals. It is the single most important performance-limiting parameter in MES design, as it determines the fraction of the thermodynamically available voltage that is dissipated internally rather than delivered to the external load. The internal resistance comprises three main components: ohmic resistance (from the electrolyte, membrane, electrode materials, and current collectors), activation (charge transfer) resistance (from the kinetic overpotentials at both electrodes), and concentration (mass transport) resistance (from diffusion limitations of substrates, products, and charge carriers).

The total internal resistance can be expressed as R_int = R_ohmic + R_activation + R_concentration. Ohmic resistance is typically the dominant component in large-scale systems and scales with electrode spacing, electrolyte conductivity, and membrane resistance. Activation resistance reflects the electrochemical kinetics of the biofilm (anode) and the catalyst (cathode), and is influenced by the electrode material, biofilm maturity, temperature, and substrate type. Concentration resistance becomes significant at high current densities when mass transport cannot keep up with the reaction rate.

Maximum power transfer occurs when the external load resistance equals the internal resistance (R_ext = R_int), as derived from the maximum power transfer theorem. This relationship is fundamental to MES operation: a 28 mL single-chamber air-cathode MFC with R_int of 100 ohm produces maximum power at R_ext = 100 ohm, while an optimized cell with R_int of 10 ohm produces maximum power at R_ext = 10 ohm and achieves 10x higher maximum power density. Reducing internal resistance through design optimization (closer electrode spacing, higher conductivity electrolytes, better catalysts, and more conductive current collectors) is the primary pathway to improving MES performance.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Reactor Design |
| **Subcategory** | Individual Cell Electrical Output |
| **Type** | number |
| **Unit** | Ω |
| **Minimum** | 0.1 |
| **Maximum** | 1000 |
| **Papers Reporting** | 27 |

## Typical Values

- **Valid Range**: 0.1--1000 ohm
- **Typical Range**: 5--200 ohm (laboratory-scale cells)
- **Optimized single-chamber air-cathode MFC (28 mL)**: 10--50 ohm
- **Standard dual-chamber MFC**: 50--200 ohm
- **H-type MFC**: 100--1000 ohm (large electrode spacing)
- **MEC (optimized)**: 5--50 ohm
- **MDC**: 20--200 ohm
- **Microfluidic MFC**: 1--100 kohm (very small electrode area)
- **Pilot-scale MFC**: 0.1--10 ohm (large electrode area reduces absolute resistance)
- **Area-specific resistance**: 10--1000 ohm*cm2 (to normalize across cell sizes)
- **Component breakdown (typical)**: - Ohmic: 30--60% of total

## Measurement Methods

- **Polarization Curve Method**: Vary the external resistance (or apply a linear voltage sweep) and record the steady-state voltage and current at each point. Plot V vs. I (polarization curve) and determine R_int from the slope of the linear (ohmic) region: R_int = -dV/dI. Alternatively, calculate R_int from the OCV and maximum power point: R_int = (V_OCV - V_mp) / I_mp, where mp denotes the maximum power point. Allow sufficient stabilization time (15--30 minutes per point) to reach pseudo-steady state.
- **Electrochemical Impedance Spectroscopy (EIS)**: Apply a small AC perturbation (typically 10 mV amplitude) over a frequency range of 100 kHz to 10 mHz while the cell is at open circuit or under load. Plot the resulting Nyquist and Bode diagrams. The high-frequency x-axis intercept gives the ohmic resistance. The diameter of the first semicircle gives the charge transfer resistance (activation). The low-frequency tail or second semicircle indicates mass transport resistance. Fit the data to an equivalent circuit model (typically R_ohm + R_ct1/CPE1 + R_ct2/CPE2 + W) to quantify each component.
- **Current Interrupt Method**: Apply a known current to the cell, then instantaneously interrupt it while recording the voltage transient at high sampling rate (at least 10 kHz). The immediate voltage jump (within microseconds) corresponds to the ohmic resistance: R_ohmic = delta_V_instant / I. The subsequent slower voltage recovery corresponds to the activation and mass transport resistances.

## Affecting Factors

### Primary

- **Electrode Spacing**: Each millimeter of electrode spacing in wastewater (kappa ~ 2 mS/cm) adds approximately 5 ohm*cm2 to the area-specific ohmic resistance.
- **Electrolyte Conductivity**: Higher conductivity (from buffers, dissolved salts, or saline feeds) dramatically reduces ohmic resistance. Phosphate buffer at 100 mM increases conductivity from 1 to 10 mS/cm.
- **Membrane Resistance**: Ion exchange membranes contribute 1--20 ohm*cm2 depending on type, conditioning, and age. Membraneless designs eliminate this contribution.
- **Electrode Materials and Biofilm**: A mature, electroactive biofilm reduces the anode activation resistance. Platinum cathode catalysts have lower activation resistance than non-precious catalysts.
- **Temperature**: Increasing temperature from 20 to 35 C typically reduces R_int by 20--40% through improved microbial kinetics and electrolyte conductivity.
- **Current Collector Quality**: Poor current collection adds ohmic resistance; distributed current collectors can reduce this contribution.
- **Biofilm Maturity**: Internal resistance decreases during the startup period as the electroactive biofilm matures (typically 2--8 weeks), then stabilizes.
- **Substrate Concentration**: At low substrate concentrations, the mass transport resistance component increases, raising the total R_int.
- **pH**: pH shifts from neutral increase activation overpotentials, particularly at the anode where proton accumulation inhibits exoelectrogens.

## Related Parameters

- **name**: Open Circuit Voltage (Cell)

- **relationship**: The maximum voltage before any current is drawn.
- **name**: Operating Voltage (Cell)

- **relationship**: V_operating = OCV - I * R_int.
- **name**: Power Density (Cell)

- **relationship**: Maximum power = OCV^2 / (4 * R_int).
- **name**: Current Density (Cell)

- **relationship**: Maximum current = OCV / R_int.
- **name**: Electrode Spacing

- **relationship**: Primary geometric determinant of ohmic resistance.
- **name**: Electrode Arrangement

- **relationship**: Determines the current distribution and effective resistance.
- **name**: Current Collector Type

- **relationship**: Contributes to the ohmic resistance component.
- **name**: Electrolyte Conductivity

- **relationship**: Inversely proportional to the electrolyte ohmic resistance.

## Compatible Systems

Cell Performance Metrics

## References

- Logan, B.E., Hamelers, B., Rozendal, R., et al. (2006). Microbial fuel cells: Methodology and technology. *Environmental Science & Technology*, 40(17), 5181--5192.
- Liang, P., Huang, X., Fan, M.Z., Cao, X.X., & Wang, C. (2007). Composition and distribution of internal resistance in three types of microbial fuel cells. *Applied Microbiology and Biotechnology*, 77(3), 551--558.
- He, Z. & Mansfeld, F. (2009). Exploring the use of electrochemical impedance spectroscopy (EIS) in microbial fuel cell studies. *Energy & Environmental Science*, 2(2), 215--219.
- Fan, Y., Sharbrough, E., & Liu, H. (2008). Quantification of the internal resistance distribution of microbial fuel cells. *Environmental Science & Technology*, 42(21), 8101--8107.
- Ramasamy, R.P., Ren, Z., Mench, M.M., & Regan, J.M. (2008). Impact of initial biofilm growth on the anode impedance of microbial fuel cells. *Biotechnology and Bioengineering*, 101(1), 101--108.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Internal+Resistance+Cell&body=**Parameter%3A**+Internal+Resistance+Cell%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Finternal-resistance-cell.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Internal+Resistance+Cell&body=**Parameter%3A**+Internal+Resistance+Cell%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Finternal-resistance-cell.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Internal+Resistance+Cell&body=**Parameter%3A**+Internal+Resistance+Cell%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Finternal-resistance-cell.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
