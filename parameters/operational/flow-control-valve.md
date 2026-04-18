# Flow Control Valve

Flow control valve refers to the type and specifications of valves used to regulate liquid flow in a microbial electrochemical system (MES). Valves control the start, stop, throttling, and direction of flow for feed, effluent, recirculation, and sampling lines. The choice of valve type affects flow precision, biocompatibility, chemical resistance, maintenance requirements, and potential for biofilm or particulate clogging. In MES applications, valves must be compatible with the anaerobic, potentially corrosive, and biologically active environment of the process fluids.

Common valve types in MES installations include pinch valves (for flexible tubing lines, providing simple on-off control with minimal dead volume), solenoid valves (for automated on-off switching with fast response times of 10--100 ms), ball valves (for manual or actuated flow isolation with low pressure drop), needle valves (for fine manual throttling of flow rate), and proportional control valves (for continuous, automated flow rate modulation). The selection depends on the flow rate range, required precision, automation level, and chemical compatibility with the process fluid.

For automated MES operation, electrically actuated valves (solenoid or motorized ball valves) are essential components of the control system, enabling programmed fill-react-drain cycles, automatic sampling, and emergency shutoff. Chemical compatibility is critical because MES effluents may contain sulfides, organic acids, dissolved metals, and microbial biomass, all of which can degrade incompatible valve materials.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Operational |
| **Subcategory** | Flow Control |
| **Type** | select |

## Typical Values

- **Valid Range**: Categorical (pinch, solenoid, ball, needle, diaphragm, butterfly, proportional)
- **Pinch valve (lab scale)**: Tubing OD 3 -- 12 mm; flow range 0 -- 500 mL/min
- **Solenoid valve (2-way)**: Orifice 1 -- 10 mm; response time 10 -- 100 ms; operating pressure 0 -- 5 bar
- **Ball valve (manual)**: Bore 6 -- 50 mm; Cv 1 -- 100; full open pressure drop < 0.1 bar
- **Needle valve**: Flow coefficient Cv 0.001 -- 1; for fine flow adjustment
- **Proportional valve**: Flow accuracy +/- 2--5%; response time 0.1 -- 1 s
- **Most common (lab MFC)**: Pinch valve or manual tubing clamp
- **Most common (pilot MFC)**: Solenoid or motorized ball valve

## Measurement Methods

- **Flow Coefficient (Cv) Determination**: The valve flow coefficient is measured by passing water at a known pressure differential and measuring flow rate. Cv = Q * sqrt(SG / dP), where Q is flow in GPM, SG is specific gravity, and dP is pressure drop in psi. This is typically provided by the manufacturer and verified during commissioning.
- **Leakage Testing**: With the valve fully closed, upstream pressure is applied (typically 1.5x operating pressure) and downstream flow is measured. Acceptable leakage is zero for on-off applications and < 0.1% of full flow for throttling applications. Testing frequency: annually or after any maintenance.
- **Actuation Time Measurement**: The time from control signal activation to valve achieving the commanded position is measured using a position sensor or flow sensor downstream. Response time includes signal processing, actuator movement, and flow stabilization.

## Affecting Factors

### Primary

- **Chemical Compatibility**: MES effluent contains organic acids (pH 5--8), sulfides, and dissolved metals. PTFE, PVDF, PP, and 316 stainless steel are suitable. Brass valves corrode rapidly in sulfide-containing environments. Rubber seals may swell in organic-rich effluents.
- **Flow Rate Range**: Needle valves provide fine control at low flow rates (0.1--10 mL/min). Ball valves are preferred for high flow rates (> 1 L/min) where low pressure drop is important.
- **Automation Requirements**: Solenoid valves enable automated sequencing (fill/drain cycles) controlled by timers or process signals. Manual valves require operator intervention and limit operational sophistication.
- **Dead Volume and Cleanability**: Diaphragm and pinch valves have minimal dead volume (< 0.1 mL), reducing microbial growth in the valve body. Ball valves with large cavities can harbor biofilm.
- **Particulate Tolerance**: Wastewater-fed MES may contain suspended solids (50--500 mg/L TSS). Full-bore ball valves and pinch valves tolerate particulates well; needle valves and small-orifice solenoid valves are prone to clogging.

## Related Parameters

- **name**: [Flow Control Mode](flow-control-mode.md)

- **relationship**: Overall flow regulation strategy
- **name**: [Flow Setpoint](flow-setpoint.md)

- **relationship**: Target flow rate
- **name**: [Flow Measurement](flow-measurement.md)

- **relationship**: Flow sensing technology
- **name**: [Pump Type](pump-type.md)

- **relationship**: Pump technology for driving flow
- **name**: [Flowrate](flowrate.md)

- **relationship**: Actual volumetric flow rate

## Compatible Systems

Process Control Parameters

## References

- Perry, R.H., Green, D.W. (2007). Perry's Chemical Engineers' Handbook, 8th ed. McGraw-Hill.
- Tchobanoglous, G. et al. (2003). Wastewater Engineering: Treatment and Reuse, 4th ed. McGraw-Hill.
- ISA-75.01.01-2012, Industrial-Process Control Valves - Flow Equations for Sizing.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Flow+Control+Valve&body=**Parameter%3A**+Flow+Control+Valve%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fflow-control-valve.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Flow+Control+Valve&body=**Parameter%3A**+Flow+Control+Valve%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fflow-control-valve.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Flow+Control+Valve&body=**Parameter%3A**+Flow+Control+Valve%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fflow-control-valve.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
