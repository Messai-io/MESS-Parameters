# Do Sensor Type

Dissolved oxygen (DO) sensor type specifies the measurement technology used for monitoring oxygen concentration in MES electrolytes. DO monitoring is critical because oxygen is the terminal electron acceptor at MFC cathodes (requiring adequate supply) while simultaneously being toxic to anaerobic electroactive bacteria at anodes (requiring exclusion). The sensor technology determines measurement accuracy, response time, maintenance requirements, and long-term stability.

The principal DO sensing technologies for MES include optical luminescence quenching (PreSens, Hach LDO, YSI ProODO), polarographic Clark-type electrodes (YSI 5010, Thermo Orion), galvanic cell sensors, and Clark-type microsensors (Unisense) for biofilm profiling. Optical sensors have become the preferred technology for routine MES monitoring due to zero oxygen consumption, minimal drift, no flow dependency, and no electrolyte maintenance. Clark electrodes remain important for microsensor applications requiring micrometer-scale spatial resolution within biofilms.

For MES anode monitoring, trace-level DO measurement (below 0.1 mg/L) requires sensors specifically designed for low oxygen conditions, such as optical sensors with enhanced sensitivity coatings or trace-oxygen Clark microsensors. Standard DO sensors may have insufficient resolution below 0.5 mg/L to confirm truly anaerobic conditions.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Monitoring Control |
| **Subcategory** | Chemical Sensors |
| **Type** | select |

## Typical Values

- **Optical luminescent**: 0-20 mg/L (extended to 45 mg/L), 0.01 mg/L resolution, T90 30-60 s
- **Clark polarographic**: 0-20 mg/L, 0.01 mg/L resolution, T90 10-30 s
- **Galvanic cell**: 0-20 mg/L, 0.1 mg/L resolution, T90 30-90 s
- **Clark microsensor (25 um)**: 0-0.6 mg/L (trace), 0.001 mg/L resolution, T90 less than 1 s
- **Sensor cost**: $200-800 (optical), $100-400 (Clark), $500-2000 (microsensor)
- **Calibration frequency**: Monthly (optical), weekly (Clark), daily (microsensor)
- **Sensor lifetime**: 2-5 years (optical), 1-2 years (Clark membrane), 3-12 months (microsensor)

## Measurement Methods

- **Optical Luminescence Quenching**: A platinum-porphyrin or ruthenium complex immobilized in a polymer matrix fluoresces when excited by blue/green LED light. Oxygen molecules quench this fluorescence in proportion to their concentration (Stern-Volmer relationship). Phase-shift measurement of fluorescence lifetime provides the DO reading, independent of fluorescence intensity (compensating for photobleaching and optical fouling). No oxygen is consumed during measurement, eliminating flow dependency and enabling measurement in stagnant MES electrolytes.
- **Clark Polarographic Electrode**: A platinum cathode polarized at -0.7 V versus Ag/AgCl reference reduces oxygen molecules that diffuse through a gas-permeable membrane (typically FEP or PTFE). The reduction current is proportional to oxygen flux through the membrane and therefore to DO concentration. The sensor consumes oxygen during measurement, creating a local depletion zone that makes readings flow-dependent (0.5-2% difference between stirred and unstirred). Membrane replacement every 1-4 weeks and electrolyte refill maintain measurement accuracy.
- **Clark Microsensors**: Miniaturized Clark sensors with tip diameters of 10-100 micrometers enable oxygen profiling within biofilms at 25-50 micrometer spatial resolution. Mounted on micromanipulators with stepper motor positioning, these sensors map the oxygen microenvironment from bulk electrolyte through the diffusion boundary layer into the biofilm interior, revealing the aerobic/anaerobic transition zone critical to MES biofilm function.

## Affecting Factors

### Primary

- **Measurement environment**: Optical sensors are preferred for routine MES monitoring (minimal maintenance, no consumables). Clark microsensors are essential for biofilm research requiring spatial resolution. Galvanic cells are suitable for basic monitoring without external power.
- **Fouling resistance**: Optical sensors with smooth polymer faces resist fouling better than membrane-based Clark electrodes. Copper-based antifouling guards extend cleaning intervals for wastewater applications.
- **Temperature compensation**: DO solubility and sensor response are temperature-dependent. All sensor types require simultaneous temperature measurement for accurate compensation.
- **Pressure compensation**: DO saturation changes with atmospheric pressure (approximately 1% per 10 hPa). Sensors for outdoor MES should include barometric pressure compensation.
- **Interference**: H2S poisons Clark electrode cathodes, causing readings to drift low. Optical sensors are less susceptible to H2S interference but some luminophores are quenched by SO2 or chlorine.

## Compatible Systems

Sensor Specifications

## References

- Revsbech, N. P. (1989). An oxygen microsensor with a guard cathode. *Limnology and Oceanography*, 34(2), 474-478.
- Rismani-Yazdi, H., et al. (2008). Cathodic limitations in microbial fuel cells. *Journal of Power Sources*, 180(2), 683-694.
- PreSens (2019). *Optical Oxygen Sensors: Principles and Applications*. PreSens GmbH.
- YSI (2020). *The Dissolved Oxygen Handbook*. YSI Environmental.
- APHA (2017). *Standard Methods for the Examination of Water and Wastewater* (23rd ed.). Method 4500-O.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Do+Sensor+Type&body=**Parameter%3A**+Do+Sensor+Type%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fdo-sensor-type.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Do+Sensor+Type&body=**Parameter%3A**+Do+Sensor+Type%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fdo-sensor-type.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Do+Sensor+Type&body=**Parameter%3A**+Do+Sensor+Type%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fdo-sensor-type.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
