# Flow Sensor Accuracy

Flow sensor accuracy defines the measurement uncertainty of flow rate sensors used in MES, expressed as a percentage of reading, percentage of full scale, or absolute value. Accurate flow measurement is essential for calculating hydraulic retention time (HRT), organic loading rate (OLR), nutrient delivery rates, coulombic efficiency (through substrate mass balance), and volumetric treatment capacity. Flow measurement errors propagate directly into all flow-derived calculations, making sensor accuracy a critical determinant of MES performance characterization quality.

MES flow rates range from microliters per minute (microfluidic MES) to thousands of liters per hour (pilot/industrial scale), spanning six orders of magnitude. Common flow sensor technologies include peristaltic pump calibration (indirect, 2-5% accuracy), electromagnetic flow meters (0.2-0.5%), Coriolis mass flow meters (0.1-0.2%), ultrasonic flow meters (0.5-2%), rotameters (2-5%), and thermal mass flow meters for gas streams (0.5-2%). The accuracy specification must be interpreted carefully: 1% of reading means 1% error at any flow rate, while 1% of full scale means the absolute error is constant, creating 10% relative error at 10% of full scale.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Monitoring Control |
| **Subcategory** | Physical Sensors |
| **Type** | number |
| **Unit** | % |
| **Minimum** | 0.5 |
| **Maximum** | 5 |

## Typical Values

- **Electromagnetic flow meters**: 0.2-0.5% of reading, 0.5-10 L/min typical range
- **Coriolis flow meters**: 0.1-0.2% of reading, 0.1-100 L/min
- **Ultrasonic (transit time)**: 0.5-2% of reading, 1-10,000 L/min
- **Rotameters**: 2-5% of full scale, 0.1-100 L/min
- **Peristaltic pump calibration**: 2-5% accuracy, 0.001-10 L/min
- **Thermal mass flow (gas)**: 0.5-2% of reading, 0.1-1000 mL/min
- **Positive displacement**: 0.5-1% of reading, 0.01-100 L/min

## Measurement Methods

- **Gravimetric Calibration**: The gold standard for flow calibration collects fluid output over a timed interval and weighs it on an analytical balance. Accuracy of 0.01-0.1% is achievable with careful technique. This method calibrates other flow sensors and verifies pump delivery rates. For gas flow, water displacement or soap-bubble flow meters provide equivalent volumetric calibration.
- **In-Line Flow Meter Comparison**: Comparing readings from two different-technology flow sensors in series (e.g., electromagnetic and Coriolis) provides continuous cross-validation. Discrepancies exceeding combined accuracy specifications indicate sensor malfunction or calibration drift requiring investigation.
- **Tracer Dilution**: For systems where inline flow measurement is impractical, a tracer (NaCl, dye, lithium) is injected at known rate, and its dilution at a downstream sampling point provides flow rate calculation. This method achieves 2-5% accuracy and is particularly useful for verifying flow in complex piping configurations.

## Affecting Factors

### Primary

- **Flow regime and profile**: Turbulent flow (Re more than 4000) provides more uniform velocity profiles suitable for electromagnetic and ultrasonic meters. Laminar flow (Re less than 2100) creates parabolic velocity profiles requiring correction or long straight-pipe runs (10-20 diameters upstream) for accurate measurement.
- **Fluid properties**: Conductivity (must exceed 5 uS/cm for electromagnetic meters), viscosity (affects rotameter and positive displacement meters), density (affects Coriolis and differential pressure meters), and entrained gas (causes errors in most technologies) all impact accuracy.
- **Pulsation**: Peristaltic pumps create pulsatile flow that can cause 5-20% overestimation in rotameters and ultrasonic meters. Pulsation dampeners or time-averaged readings mitigate this error.
- **Fouling and blockage**: Biofilm and mineral deposits on sensor elements degrade accuracy over time. Electromagnetic meters with smooth-bore construction resist fouling. Ultrasonic clamp-on meters avoid internal fouling entirely.
- **Temperature and pressure**: Volumetric flow measurements require temperature and pressure correction for gas streams. Liquid volumetric flow is essentially pressure-independent but temperature affects viscosity and density.

## Compatible Systems

Sensor Specifications

## References

- Baker, R. C. (2016). *Flow Measurement Handbook* (2nd ed.). Cambridge University Press.
- Miller, R. W. (1996). *Flow Measurement Engineering Handbook* (3rd ed.). McGraw-Hill.
- Logan, B. E., et al. (2006). Microbial fuel cells: Methodology and technology. *Environmental Science & Technology*, 40(17), 5181-5192.
- ASME (2007). *MFC-3M Measurement of Fluid Flow in Pipes Using Orifice, Nozzle, and Venturi*.
- ISO 5167 (2003). Measurement of fluid flow by means of pressure differential devices.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Flow+Sensor+Accuracy&body=**Parameter%3A**+Flow+Sensor+Accuracy%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fflow-sensor-accuracy.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Flow+Sensor+Accuracy&body=**Parameter%3A**+Flow+Sensor+Accuracy%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fflow-sensor-accuracy.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Flow+Sensor+Accuracy&body=**Parameter%3A**+Flow+Sensor+Accuracy%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fflow-sensor-accuracy.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
