# Temperature Deadband

Temperature deadband is the allowable range of temperature deviation around the setpoint within which no corrective heating or cooling action is initiated by the control system. For example, a setpoint of 30 C with a deadband of 1 C means the controller does not activate until the temperature drops below 29 C or rises above 31 C. This parameter prevents excessive cycling of heating/cooling elements, reduces energy consumption, minimizes wear on actuators, and avoids oscillatory behavior in feedback control loops. In microbial electrochemical systems, the deadband must be narrow enough to maintain favorable conditions for electroactive biofilms while being wide enough to prevent relay chatter and energy waste.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Reactor Design |
| **Subcategory** | Temperature Control |
| **Type** | number |
| **Unit** | °C |
| **Minimum** | 0.1 |
| **Maximum** | 5 |

## Typical Values

- **text**: | Application | Deadband Range | Rationale |
|------------|---------------|-----------|
| Lab research (precision) | 0.1 - 0.5 C | Tight control for reproducible experiments |
| Lab research (standard) | 0.5 - 1.0 C | Adequate for most biological studies |
| Pilot-scale MES | 1.0 - 2.0 C | Balances energy cost with performance |
| Industrial-scale MES | 2.0 - 5.0 C | Minimizes energy use; biology tolerant |
| Ambient-operated systems | N/A | No active control, full environmental variation |

**Biological tolerance context:**
- Most mesophilic electroactive biofilms tolerate +/- 2-3 C fluctuations without measurable performance loss
- Rapid temperature changes (>1 C/min) are more detrimental than steady-state deviations
- Psychrophilic and thermophilic communities may require tighter deadbands near their growth optima

## Measurement Methods

- **1. **Controller parameter readout**: Read the deadband (also called hysteresis or differential gap) setting directly from the temperature controller (PID controller, thermostat, or programmable logic controller).**: 2. **Temperature logging**: Record temperature over several control cycles. The deadband equals the difference between the temperature at which heating stops and the temperature at which it restarts (or vice versa for cooling). 3. **Step response analysis**: Impose a setpoint change and observe the range of temperature oscillation around the new setpoint during steady-state cycling. The peak-to-trough range approximates 2x the deadband for on-off control. 4. **Control system simulation**: Model the thermal system dynamics and controller response in software (MATLAB/Simulink, LabVIEW) to predict deadband effects before physical implementation.

## Affecting Factors

- **text**: - **Control system type**: On-off (bang-bang) controllers rely heavily on deadband to prevent rapid cycling. PID controllers use proportional action to reduce the need for large deadbands but still benefit from a small deadband near the setpoint.
- **Thermal mass of the system**: Larger thermal mass (more liquid, thicker walls) slows temperature changes, allowing wider deadbands without rapid cycling.
- **Heater/cooler capacity**: Oversized heating/cooling elements respond quickly, potentially causing overshoot. Larger deadbands or proportional control compensate for this.
- **Ambient temperature proximity**: When the setpoint is close to ambient temperature, the deadband must account for the slow passive heat exchange that can keep the system in a cycling zone.
- **Sensor response time**: Slow sensors (large thermal mass thermowells) introduce measurement lag, effectively widening the actual temperature excursion beyond the set deadband.
- **Biological sensitivity**: More sensitive processes (e.g., thermophilic biofilms, enzyme-mediated reactions) require tighter deadbands.
- **Energy cost considerations**: Wider deadbands reduce energy consumption by allowing more passive temperature drift.

## Compatible Systems

Reactor Control Systems

## References

1. Seborg, D.E., Edgar, T.F., Mellichamp, D.A., & Doyle, F.J. (2016). *Process Dynamics and Control* (4th ed.). Wiley. Chapter 8: PID Controller Design.
2. Patil, S.A., Harnisch, F., Koch, C., Hubschmann, T., Zehnsdorf, A., & Fettke, J. (2011). Electroactive mixed culture derived biofilms: The role of temperature for biofilm formation and performance. *Biosensors and Bioelectronics*, 26(2), 803-808.
3. Larrosa-Guerrero, A., Scott, K., Head, I.M., Mateo, F., Ginesta, A., & Godinez, C. (2010). Effect of temperature on the performance of microbial fuel cells. *Fuel*, 89(12), 3985-3994.
4. Smith, C.A., & Corripio, A.B. (2005). *Principles and Practices of Automatic Process Control* (3rd ed.). Wiley.
5. Jadhav, G.S., & Ghangrekar, M.M. (2009). Performance of microbial fuel cell subjected to variation in pH, temperature, external load and substrate concentration. *Bioresource Technology*, 100(2), 717-723.

---

*Parameter documentation for the MESS (Microbial Electrochemical Systems Standardization) framework.*

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Temperature+Deadband&body=**Parameter%3A**+Temperature+Deadband%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Ftemperature-deadband.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Temperature+Deadband&body=**Parameter%3A**+Temperature+Deadband%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Ftemperature-deadband.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Temperature+Deadband&body=**Parameter%3A**+Temperature+Deadband%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Ftemperature-deadband.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
