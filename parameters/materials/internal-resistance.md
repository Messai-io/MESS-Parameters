# Internal Resistance

Internal resistance (R_int) is the total opposition to current flow within a microbial electrochemical system, encompassing all resistive losses between the anode biofilm and the external circuit return at the cathode. It is the single most important parameter limiting power output in microbial fuel cells (MFC) and energy input efficiency in microbial electrolysis cells (MEC). Internal resistance is the sum of three principal components: ohmic resistance (R_ohm), charge transfer resistance (R_ct), and diffusion (mass transport) resistance (R_diff).

**Formula:** R_int = R_ohm + R_ct,anode + R_ct,cathode + R_diff

Where:

- R_int = Total internal resistance (ohm)
- R_ohm = Ohmic resistance from electrolyte, membrane, electrode bulk conductivity, and contact resistances (ohm)
- R_ct,anode = Anodic charge transfer resistance from biofilm electron transfer kinetics (ohm)
- R_ct,cathode = Cathodic charge transfer resistance from the oxygen reduction reaction or hydrogen evolution reaction (ohm)
- R_diff = Diffusion resistance from mass transport limitations at either electrode (ohm)

The maximum power transfer theorem dictates that the maximum power output from an MFC occurs when the external resistance equals the internal resistance:

**P_max = V_OCV^2 / (4 * R_int)**

This relationship makes minimizing internal resistance the primary engineering objective for MFC performance optimization. In MECs, lower internal resistance reduces the applied voltage required to drive hydrogen evolution, improving energy efficiency.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Materials |
| **Type** | number |
| **Unit** | Ω |
| **Papers Reporting** | 13 |

## Typical Values

- **Pilot-Scale (1-100 L)**: 1 - 50 ohm (larger electrode areas reduce absolute resistance)
- **Stack Configurations**: 0.5 - 10 ohm per cell in series; internal resistance per unit area remains relevant
- **Area-Specific Resistance**: 20 - 200 ohm cm^2 for well-optimized anodes; 50 - 500 ohm cm^2 for cathodes

## Measurement Methods

- **Current Interrupt Method**: The most straightforward technique for measuring R_int in operating MES:  1. Allow the system to reach steady-state current at a fixed external resistance 2. Abruptly open the circuit (disconnect external load) 3. Record voltage transient with high-speed data acquisition (sampling rate > 1 kHz) 4. The instantaneous voltage jump (within microseconds) equals I * R_ohm 5. The subsequent slower voltage recovery (milliseconds to seconds) reflects charge transfer and diffusion relaxation 6. R_int = (V_OCV - V_operating) / I_operating at steady state  **Advantages**: Simple, fast, no specialized equipment beyond a data logger **Limitations**: Cannot fully resolve individual resistance components; requires steady-state operation
- **Polarization Curve Method**: 1. Vary external resistance from high (open circuit) to low (near short circuit) 2. Record steady-state voltage and current at each resistance value 3. Plot V vs. I (polarization curve) and P vs. I (power curve) 4. Linear region slope gives R_int: dV/dI = -R_int 5. Maximum power point identifies R_int = R_ext at P_max  **Advantages**: Provides full performance characterization; widely reported in literature **Limitations**: Requires steady-state at each point (10-30 min per step); assumes constant R_int
- **Electrochemical Impedance Spectroscopy (EIS)**: 1. Apply small AC perturbation (5-10 mV) across a frequency range (100 kHz - 1 mHz) 2. Fit Nyquist plot data to equivalent circuit model 3. Extract individual components: R_ohm (high-frequency intercept), R_ct (semicircle diameters), R_diff (low-frequency behavior) 4. Sum components for total R_int  **Advantages**: Resolves individual resistance contributions; frequency-domain information **Limitations**: Requires potentiostat/galvanostat with EIS capability; interpretation requires expertise; measurement at OCV may not reflect operating conditions
- **Linear Sweep Voltammetry (LSV)**: 1. Sweep potential from OCV to 0 V at a slow scan rate (0.1-1 mV/s) 2. Record current response 3. Slope of the linear (ohmic) region provides R_int 4. Deviations at low and high current indicate activation and mass transport losses

## Affecting Factors

- **text**: ### Electrolyte and Ionic Strength

- Increasing phosphate buffer from 12.5 mM to 200 mM can reduce R_ohm by 60-80%
- Wastewater conductivity (1-10 mS/cm) is typically lower than laboratory media (5-20 mS/cm)
- Adding NaCl (to 100 mM) reduces solution resistance but may inhibit some electroactive bacteria at higher concentrations

### Electrode Spacing

- Reducing anode-cathode distance from 4 cm to 1 cm can decrease R_int by 30-50%
- Minimum spacing is limited by short-circuiting risk and the need for adequate mixing volume
- Cloth-electrode assemblies (CEA) with < 1 mm spacing achieve the lowest ohmic resistances

### Electrode Materials and Architecture

- **Anode**: Carbon brush < graphite felt < carbon cloth < flat graphite plate (in order of increasing R_ct,anode)
- **Cathode**: Pt/C air cathode < activated carbon air cathode < plain carbon (in order of increasing R_ct,cathode)
- 3D porous electrodes reduce charge transfer resistance by increasing surface area for biofilm attachment and reaction sites
- Metal current collectors (titanium wire, stainless steel mesh) reduce contact resistance

### Membrane Selection

- **Nafion 117**: 10 - 50 ohm (good proton conductivity, expensive, O2 crossover)
- **Nafion 212**: 5 - 25 ohm (thinner, lower resistance)
- **Anion Exchange Membrane**: 5 - 30 ohm (can improve pH balance, lower cost)
- **Separator-free designs**: Eliminate membrane resistance entirely but increase O2 crossover

### Biofilm Development

- Mature electrogenic biofilm (Geobacter-dominated) reduces anodic R_ct from >500 ohm (abiotic) to 10-50 ohm
- Excessive biofilm thickness (> 100 um) can increase diffusion resistance
- Biofilm conductivity of Geobacter sulfurreducens: ~5 mS/cm (metallic-like conductivity via cytochrome networks)

### Temperature

- R_int decreases approximately 2-4% per degree C increase (20-40 degrees C range)
- Ionic conductivity increases with temperature (Arrhenius behavior)
- Biofilm metabolic activity increases up to the optimal temperature for the dominant species

## Related Parameters

- {"name":"Impedance Magnitude","relationship":"|Z| at low frequency approximates R_int; EIS provides the frequency-resolved view"}
- {"name":"Ohmic Resistance","relationship":"The largest or most reducible component; measured as high-frequency intercept on Nyquist plot"}
- {"name":"Charge Transfer Resistance","relationship":"Often the dominant component, especially at the cathode"}
- {"name":"Diffusion Resistance","relationship":"Becomes significant at high current densities"}
- {"name":"Power Density","relationship":"P_max = V_OCV^2 / (4 * R_int); halving R_int doubles maximum power"}
- {"name":"Current Density","relationship":"Maximum current = V_OCV / R_int; lower resistance enables higher current"}
- {"name":"Energy Efficiency (MEC)","relationship":"Lower R_int reduces the overpotential required for hydrogen evolution"}
- {"name":"Electrode Spacing","relationship":"Directly affects R_ohm"}
- {"name":"Electrode Surface Area","relationship":"Larger areas reduce area-specific resistance"}
- {"name":"Membrane Thickness","relationship":"Thicker membranes increase R_ohm"}
- {"name":"Electrolyte Conductivity","relationship":"Inversely proportional to R_ohm"}

## Compatible Systems

Impedance

## References

### Fundamental Studies

1. **Fan, Y., Sharbrough, E., & Liu, H. (2008)**. "Quantification of the internal resistance distribution of microbial fuel cells". *Environmental Science & Technology*, 42(21), 8101-8107.
   - Systematic decomposition of internal resistance components in MFC

2. **Liang, P., et al. (2007)**. "Influence of ohmic resistance on the performance of microbial fuel cells". *Electrochemistry Communications*, 9(10), 2398-2402.
   - Quantification of ohmic contributions to total internal resistance

3. **Logan, B.E., et al. (2006)**. "Microbial fuel cells: Methodology and technology". *Environmental Science & Technology*, 40(17), 5181-5192.
   - Standardized methods for measuring internal resistance in BES

### Resistance Minimization

4. **Cheng, S., & Logan, B.E. (2011)**. "Increasing power generation for scaling up single-chamber air cathode microbial fuel cells". *Bioresource Technology*, 102(6), 4468-4473.
   - Engineering strategies to reduce internal resistance during scale-up

5. **Sleutels, T.H.J.A., et al. (2009)**. "Effect of operational parameters on Coulombic efficiency in bioelectrochemical systems". *Bioresource Technology*, 100(2), 884-888.
   - Relationship between internal resistance and coulombic efficiency in MEC

### Component Analysis

6. **Ter Heijne, A., et al. (2006)**. "A bipolar membrane combined with ferric iron reduction as an efficient cathode system in microbial fuel cells". *Environmental Science & Technology*, 40(17), 5200-5205.
   - Membrane contributions to internal resistance

7. **Malvankar, N.S., et al. (2011)**. "Tunable metallic-like conductivity in microbial nanowire networks". *Nature Nanotechnology*, 6(9), 573-579.
   - Biofilm conductivity and its impact on anodic charge transfer resistance

### Recent Optimization

8. **Rossi, R., et al. (2020)**. "Evaluating a multi-panel air cathode through electrochemical and biotic tests". *Water Research*, 148, 51-59.
   - Advanced cathode designs for internal resistance reduction

---

*Parameter documentation for the MESS (Microbial Electrochemical Systems Standardization) database. Last updated based on peer-reviewed literature through 2024.*

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Internal+Resistance&body=**Parameter%3A**+Internal+Resistance%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Finternal-resistance.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Internal+Resistance&body=**Parameter%3A**+Internal+Resistance%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Finternal-resistance.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Internal+Resistance&body=**Parameter%3A**+Internal+Resistance%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Finternal-resistance.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
