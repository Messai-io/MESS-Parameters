# Pump Type

Pump type specifies the mechanical pumping technology used to move liquid through a microbial electrochemical system (MES). The selection of pump type affects flow characteristics (pulsatile vs. smooth), chemical compatibility, self-priming ability, shear on microbial cells, maintenance requirements, cost, and energy efficiency. Pump type is one of the most consequential equipment choices for MES because it determines both the quality of flow control and a major fraction of the system's parasitic energy consumption.

Peristaltic (roller) pumps are the dominant choice for laboratory MES due to their chemical inertness (fluid contacts only the tubing), self-priming capability, gentle handling of shear-sensitive fluids, bidirectional operation, and wide flow rate range (0.001--3400 mL/min with appropriate tubing). However, peristaltic pumps produce pulsatile flow, and their tubing requires regular replacement (every 500--2000 operating hours). For pilot and industrial MES, progressive cavity pumps (for slurries), diaphragm pumps (for precise low-flow dosing), and centrifugal pumps (for high-flow recirculation) are more common, offering better energy efficiency and longer service life.

Syringe pumps provide the most precise, pulse-free flow at very low rates (nL/min to mL/min) but are limited by syringe volume (requiring periodic refilling) and are impractical above 50 mL/min. Gravity-fed systems eliminate pump energy entirely and are preferred for energy-positive MFC applications, though they offer limited flow control.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Operational |
| **Subcategory** | Flow Control |
| **Type** | select |

## Typical Values

- **Valid Range**: Categorical (peristaltic, syringe, diaphragm, centrifugal, progressive cavity, gear, gravity)
- **Peristaltic**: 0.001--3400 mL/min; +/- 2--5% accuracy; $200--5000
- **Syringe**: 0.001--50 mL/min; +/- 0.5% accuracy; $500--10000
- **Diaphragm**: 0.1--1000 mL/min; +/- 1--3% accuracy; $100--3000
- **Centrifugal**: 1--100000 mL/min; +/- 5--10% without feedback; $100--5000
- **Progressive cavity**: 0.5--50000 mL/min; +/- 1--2% accuracy; $1000--20000
- **Gravity feed**: 0--variable; free; 0 W energy

## Measurement Methods

- **Pump Performance Testing**: Flow rate vs. speed calibration curve at relevant backpressures. Flow pulsation index (max - min) / mean at operating speed. Energy consumption (W) at operating flow rate. Noise level (dBA). Self-priming capability (maximum suction lift).
- **Tubing/Seal Life Assessment**: For peristaltic pumps: tubing life in operating hours before replacement (measure flow rate drift over time). For diaphragm and progressive cavity: seal inspection interval and expected MTBF.

## Affecting Factors

### Primary

- **Flow Rate Range**: Very low flows (< 1 mL/min) require syringe or micro-peristaltic pumps. High flows (> 10 L/min) require centrifugal or progressive cavity.
- **Chemical Compatibility**: Wastewater containing sulfides, solvents, or extreme pH requires compatible wetted materials. Peristaltic tubing materials: silicone (general), Viton (solvents), PharMed (long life), Norprene (acids/bases).
- **Pulsation Sensitivity**: Biofilm-bearing reactors may be sensitive to pulsatile flow. Syringe pumps provide pulse-free flow; peristaltic pulsation can be dampened with pulse dampeners.
- **Energy Budget**: For energy-positive MFC, pump power must be minimized. Gravity feed (0 W) > centrifugal (0.1--1 W/L/min) > peristaltic (0.5--5 W/L/min) for energy efficiency.
- **Solids Handling**: Wastewater with > 1 g TSS/L clogs gear pumps and small syringe pumps. Peristaltic, progressive cavity, and diaphragm pumps handle solids well.

## Related Parameters

- **name**: [Pump Capacity](pump-capacity.md)

- **relationship**: Maximum flow rate
- **name**: [Flowrate](flowrate.md)

- **relationship**: Operating flow rate
- **name**: [Flow Control Mode](flow-control-mode.md)

- **relationship**: Regulation strategy
- **name**: [Power Requirement](power-requirement.md)

- **relationship**: Pump energy contribution
- **name**: [Mixer Power](mixer-power.md)

- **relationship**: Related energy consumption

## Compatible Systems

Process Control Parameters

## References

- Karassik, I.J. et al. (2008). Pump Handbook, 4th ed. McGraw-Hill.
- Masterflex (2023). "Pump and Tubing Selection Guide." Cole-Parmer.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Pump+Type&body=**Parameter%3A**+Pump+Type%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fpump-type.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Pump+Type&body=**Parameter%3A**+Pump+Type%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fpump-type.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Pump+Type&body=**Parameter%3A**+Pump+Type%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fpump-type.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
