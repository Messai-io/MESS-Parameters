# Flow Measurement

Flow measurement refers to the instrumentation and methodology used to quantify liquid volumetric or mass flow rates in a microbial electrochemical system (MES). Accurate flow measurement is essential for calculating hydraulic retention time, dilution rate, organic loading rate, and mass balances for substrate, nutrients, and products. The choice of flow measurement technology depends on flow rate range, fluid properties, required accuracy, cost, and compatibility with the biologically active process environment.

In laboratory MES, flow measurement is often indirect -- the pump is calibrated at specific RPM settings and the flow rate is assumed from the calibration curve, with periodic verification by timed volumetric collection. This approach is adequate for small-scale research but lacks real-time accuracy. Pilot and industrial MES require dedicated flow measurement instruments providing continuous, real-time data for process monitoring, control, and regulatory compliance.

Flow measurement challenges specific to MES include: low flow rates (often < 10 mL/min at lab scale) that are below the range of most industrial flow meters; biofouling of wetted sensor surfaces; particulate content in real wastewater that can block or damage sensors; and the need for non-invasive measurement to maintain the anaerobic integrity of the anolyte. Emerging technologies such as ultrasonic clamp-on sensors address several of these challenges by providing non-contact measurement with no wetted parts.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Operational |
| **Subcategory** | Flow Control |
| **Type** | select |

## Typical Values

- **Valid Range**: Instrument-dependent
- **Peristaltic pump calibration**: +/- 2--5% accuracy at constant RPM
- **Rotameter (lab)**: Range 1 -- 500 mL/min; accuracy +/- 5%
- **Electromagnetic flow meter**: Range 0.1 -- 10000 L/min; accuracy +/- 0.2--0.5%
- **Coriolis mass flow meter**: Range 0.01 -- 5000 kg/min; accuracy +/- 0.1%
- **Ultrasonic clamp-on**: Range 0.5 -- 50000 L/min; accuracy +/- 1--3%
- **Thermal mass flow (for gas)**: Range 0.01 -- 100 sLPM; accuracy +/- 1--2%
- **Timed volumetric collection**: +/- 1--2% accuracy (manual method)

## Measurement Methods

- **Timed Volumetric Collection**: Effluent is collected in a calibrated graduated cylinder over a measured time interval (minimum 10 minutes for accurate averaging). Flow rate = collected volume / collection time. This is the reference method for calibrating other flow measurement techniques. Accuracy: +/- 1--2% for volumes > 10 mL collected over > 5 min.
- **Electromagnetic Flow Meter**: An electromagnetic (mag) flow meter measures flow velocity via Faraday's law of induction. The flowing conductive liquid (wastewater conductivity > 50 uS/cm) generates a voltage proportional to velocity. No moving parts, minimal pressure drop, and immunity to suspended solids make this ideal for wastewater MES. Available in sizes from 3 mm to 3 m bore.
- **Ultrasonic Flow Meter**: Transit-time or Doppler ultrasonic sensors measure flow non-invasively through the pipe wall. Clamp-on installation requires no pipe cutting or process interruption. Best for clean to moderately particulate fluids. Accuracy depends on pipe material and wall thickness knowledge.

## Affecting Factors

### Primary

- **Flow Rate Range**: Lab-scale MES flow rates (0.01--10 mL/min) are below the range of most industrial flow meters. Micro-flow sensors (thermal or Coriolis) are required. Pilot-scale flows (0.1--100 L/min) are compatible with standard industrial instruments.
- **Fluid Properties**: Conductivity > 5 uS/cm is required for electromagnetic meters. High particulate content (> 1000 mg TSS/L) favors electromagnetic over ultrasonic. Gas bubbles affect both types.
- **Biofilm Formation on Sensors**: Wetted sensor surfaces (electromagnetic electrodes, turbine blades) accumulate biofilm, degrading accuracy over time. Regular cleaning (weekly to monthly) is required. Non-contact sensors avoid this issue.
- **Cost Constraints**: Coriolis meters ($3000--15000) provide the highest accuracy but are costly for multi-point measurement. Timed collection (free) or rotameters ($50--200) are common at lab scale.
- **Installation Requirements**: Most flow meters require straight pipe runs (10--20 diameters upstream, 5 diameters downstream) for accurate measurement. This is challenging in compact lab setups.

## Related Parameters

- **name**: [Flowrate](flowrate.md)

- **relationship**: The measured parameter
- **name**: [Flow Control Mode](flow-control-mode.md)

- **relationship**: Regulation strategy
- **name**: [Flow Setpoint](flow-setpoint.md)

- **relationship**: Target flow rate
- **name**: [Flow Control Valve](flow-control-valve.md)

- **relationship**: Flow regulation hardware
- **name**: [Flow Velocity](flow-velocity.md)

- **relationship**: Linear velocity from flow measurement

## Compatible Systems

Process Control Parameters

## References

- Baker, R.C. (2016). Flow Measurement Handbook, 2nd ed. Cambridge University Press.
- Perry, R.H., Green, D.W. (2007). Perry's Chemical Engineers' Handbook, 8th ed. McGraw-Hill.
- Miller, R.W. (1996). Flow Measurement Engineering Handbook, 3rd ed. McGraw-Hill.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Flow+Measurement&body=**Parameter%3A**+Flow+Measurement%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fflow-measurement.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Flow+Measurement&body=**Parameter%3A**+Flow+Measurement%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fflow-measurement.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Flow+Measurement&body=**Parameter%3A**+Flow+Measurement%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fflow-measurement.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
