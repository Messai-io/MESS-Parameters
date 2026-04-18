# Do Response Time

Dissolved oxygen (DO) sensor response time quantifies how quickly the sensor reaches a specified percentage of the final reading after a step change in oxygen concentration, typically expressed as T90 (time to reach 90% of the step change) or T63 (time to reach 63.2%, one time constant). In MES, DO response time determines the ability to track rapid oxygen transients at cathodes, detect anaerobic condition breaches at anodes, and provide timely feedback for aeration control systems.

In air-cathode MFCs, DO at the cathode-electrolyte interface can change from saturation to near-zero within minutes during high-current-density operation. At anodes, oxygen intrusion events lasting seconds to minutes must be detected before they cause irreversible damage to obligate anaerobic electroactive bacteria. A sensor with 60-second T90 cannot detect a 30-second oxygen pulse, allowing potentially damaging transients to go unnoticed.

Optical (luminescent) DO sensors achieve T90 of 30-60 seconds, while Clark-type electrodes achieve 5-30 seconds depending on membrane thickness and flow conditions. Fast-response microsensors (Unisense) achieve T90 below 1 second for biofilm profiling applications.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Monitoring Control |
| **Subcategory** | Chemical Sensors |
| **Type** | number |
| **Unit** | s |
| **Minimum** | 1 |
| **Maximum** | 60 |

## Typical Values

- **Valid Range**: 0.1 seconds - 300 seconds (T90)
- **Optical luminescent sensors**: 30-60 seconds T90
- **Clark electrode (standard)**: 10-30 seconds T90
- **Clark microsensor (25 um tip)**: 0.3-1 second T90
- **Galvanic cell sensors**: 30-90 seconds T90
- **Flow dependency**: Response 20-50% faster with stirring
- **Temperature effect**: Response 10-30% faster at 35 degrees C vs 15 degrees C

## Measurement Methods

- **Step-Change Test**: The sensor is rapidly transferred between nitrogen-saturated (0 mg/L DO) and air-saturated water, and the time to reach 90% of the full-scale change is recorded. This test is performed at the operating temperature and flow conditions to provide realistic response time values. Both rising (0 to saturation) and falling (saturation to 0) response times should be measured, as they may differ.
- **In-Situ Dynamic Assessment**: During normal MES operation, planned step changes in aeration rate create DO transients. Comparing the sensor response to the expected transient (from mass transfer modeling) reveals the sensor's effective response time in the actual operating environment, including fouling effects.

## Affecting Factors

### Primary

- **Membrane characteristics**: Thicker membranes increase response time proportionally (doubling thickness approximately doubles T90). FEP membranes (standard) give 30-60 s; thin PTFE membranes give 10-20 s. Optical sensors without membranes (bare sensing layer) achieve faster response.
- **Flow velocity**: Response time decreases 20-50% with adequate flow (more than 5 cm/s) compared to stagnant conditions due to reduced external diffusion layer thickness.
- **Temperature**: Higher temperature increases oxygen diffusivity through the membrane, reducing response time by approximately 2% per degree C.
- **Fouling**: Biofilm accumulation on the sensor membrane adds a diffusion barrier, increasing response time by 50-500% over weeks to months without cleaning.
- **Sensor age**: Membrane aging (plasticizer loss, microcracking) gradually changes permeability and response characteristics over 6-24 months.

## Compatible Systems

Sensor Specifications

## References

- Rismani-Yazdi, H., et al. (2008). Cathodic limitations in microbial fuel cells. *Journal of Power Sources*, 180(2), 683-694.
- Revsbech, N. P. (1989). An oxygen microsensor with a guard cathode. *Limnology and Oceanography*, 34(2), 474-478.
- YSI (2020). *The Dissolved Oxygen Handbook*. YSI Environmental.
- PreSens (2019). *Optical Oxygen Sensors: Principles and Applications*. PreSens GmbH.
- APHA (2017). *Standard Methods for the Examination of Water and Wastewater* (23rd ed.). Method 4500-O.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Do+Response+Time&body=**Parameter%3A**+Do+Response+Time%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fdo-response-time.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Do+Response+Time&body=**Parameter%3A**+Do+Response+Time%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fdo-response-time.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Do+Response+Time&body=**Parameter%3A**+Do+Response+Time%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fdo-response-time.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
