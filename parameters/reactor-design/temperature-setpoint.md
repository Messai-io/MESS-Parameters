# Temperature Setpoint

The temperature setpoint is the target operating temperature maintained by the thermal control system of a microbial electrochemical system. This value is selected to optimize microbial metabolic activity, electrochemical reaction kinetics, ion transport through membranes, and solution conductivity. The setpoint represents the center of the control band (setpoint +/- deadband) and is the most influential single parameter affecting the biological performance of MES, as temperature governs enzyme kinetics (Arrhenius behavior), microbial growth rates (Monod kinetics with temperature dependence), and thermodynamic driving forces for electrochemical half-reactions.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Reactor Design |
| **Subcategory** | Temperature Control |
| **Type** | number |
| **Unit** | °C |
| **Minimum** | 4 |
| **Maximum** | 80 |

## Typical Values

- **text**: | Operating Regime | Setpoint Range | Microbial Community | Performance Notes |
|-----------------|---------------|--------------------|--------------------|
| Psychrophilic | 4 - 15 C | Cold-adapted consortia | 10-30% of mesophilic performance |
| Sub-mesophilic | 15 - 25 C | Ambient temperature communities | Common for real wastewater |
| Mesophilic (standard) | 25 - 37 C | Geobacter, Shewanella dominant | Peak power density range |
| Mesophilic (optimal) | 30 - 35 C | Enriched electroactive biofilms | Most reported lab studies |
| Thermophilic | 45 - 60 C | Thermincola, Caldanaerobacter | Higher kinetics, less stable |
| Hyperthermophilic | 60 - 80 C | Extremophilic enrichments | Niche applications only |

**Key temperature-performance relationships:**
- Power density approximately doubles with every 10 C increase from 10-35 C (Q10 ~ 2)
- COD removal efficiency increases with temperature up to ~35 C
- Coulombic efficiency may decrease at higher temperatures due to increased methanogenic competition
- Membrane conductivity increases approximately 2% per degree C

## Measurement Methods

- **1. **Direct temperature sensor**: RTD (Pt100) or thermocouple (Type K, J, or T) immersed in the reactor liquid, connected to the control system. RTDs provide better accuracy (+/- 0.1 C) than thermocouples (+/- 0.5-1 C).**: 2. **Multi-point monitoring**: Install sensors at inlet, outlet, and mid-reactor positions to verify temperature uniformity and detect stratification. 3. **Inline digital sensor**: Use integrated temperature/pH/conductivity probes for simultaneous multi-parameter monitoring with digital output (e.g., Modbus, 4-20 mA). 4. **Non-contact measurement**: Infrared temperature sensors for external surface monitoring, useful for detecting hot spots on reactor walls.

## Affecting Factors

- **text**: - **Microbial community composition**: Different electroactive bacteria have distinct temperature optima. Geobacter sulfurreducens: 30-35 C; Shewanella oneidensis: 25-30 C; Thermincola ferriacetica: 55-60 C.
- **Substrate type**: Complex substrates (real wastewater) may benefit from slightly higher temperatures to enhance hydrolysis, while simple substrates (acetate) are less temperature-sensitive.
- **Energy balance**: Higher setpoints require more heating energy. In temperate climates, maintaining 30 C year-round may cost 0.5-2 kWh per m^3 of treated wastewater.
- **Competing processes**: Methanogenesis is more temperature-sensitive than exoelectrogenesis; higher temperatures may shift competition toward methanogens, reducing coulombic efficiency.
- **Season and geography**: Outdoor installations may adopt seasonal setpoints (e.g., 20 C winter, 30 C summer) to reduce energy consumption while maintaining acceptable performance.
- **Membrane performance**: Higher temperatures improve ionic conductivity but accelerate membrane degradation. The setpoint must balance these effects.

## Compatible Systems

Reactor Control Systems

## References

1. Liu, H., Cheng, S., & Logan, B.E. (2005). Power generation in fed-batch microbial fuel cells as a function of ionic strength, temperature, and reactor configuration. *Environmental Science & Technology*, 39(14), 5488-5493.
2. Larrosa-Guerrero, A., Scott, K., Head, I.M., Mateo, F., Ginesta, A., & Godinez, C. (2010). Effect of temperature on the performance of microbial fuel cells. *Fuel*, 89(12), 3985-3994.
3. Patil, S.A., Harnisch, F., Koch, C., Hubschmann, T., Zehnsdorf, A., & Fettke, J. (2011). Electroactive mixed culture derived biofilms: The role of temperature. *Biosensors and Bioelectronics*, 26(2), 803-808.
4. Lu, L., Ren, N., Zhao, X., Wang, H., Wu, D., & Xing, D. (2011). Hydrogen production in psychrophilic single-chamber microbial electrolysis cells. *Energy & Environmental Science*, 4(4), 1329-1336.
5. Heidrich, E.S., Edwards, S.R., Dolfing, J., Cotterill, S.E., & Curtis, T.P. (2014). Performance of a pilot scale microbial electrolysis cell at ambient temperatures. *Bioresource Technology*, 173, 87-95.

---

*Parameter documentation for the MESS (Microbial Electrochemical Systems Standardization) framework.*

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Temperature+Setpoint&body=**Parameter%3A**+Temperature+Setpoint%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Ftemperature-setpoint.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Temperature+Setpoint&body=**Parameter%3A**+Temperature+Setpoint%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Ftemperature-setpoint.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Temperature+Setpoint&body=**Parameter%3A**+Temperature+Setpoint%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Ftemperature-setpoint.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
