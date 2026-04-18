# Gas Sensor Response

Gas sensor response time characterizes how quickly gas composition sensors (CH4, CO2, H2, H2S, O2) reach a stable reading after a change in gas concentration in MES headspace or gas collection systems. Expressed as T90 (time to reach 90% of step change), response time determines the temporal resolution of gas monitoring and the ability to track dynamic gas production events such as substrate feeding responses, biofilm activity transients, and safety-relevant gas accumulation.

In MES, gas production rates vary on timescales from seconds (electrochemical H2 evolution pulses) to hours (metabolic adaptation to substrate changes). The gas sensor response time must be shorter than the characteristic timescale of the monitored process to provide meaningful dynamic information. For safety monitoring of explosive gases (H2, CH4), rapid response (T90 less than 30 seconds) is essential for timely alarm activation.

Response time includes contributions from the gas sampling system (tubing transport delay, filter holdup), the sensor element (diffusion through protective membranes, chemical/physical response), and the signal processing electronics (analog filtering, digital averaging). The total system response can be 2-10x longer than the sensor element response alone, making sampling system design a critical factor in overall gas monitoring performance.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Monitoring Control |
| **Subcategory** | Gas Sensors |
| **Type** | number |
| **Unit** | s |
| **Minimum** | 1 |
| **Maximum** | 60 |

## Typical Values

- **NDIR (CO2, CH4)**: 5-30 seconds T90
- **Electrochemical (H2S, O2)**: 15-60 seconds T90
- **Catalytic (LEL sensors)**: 10-30 seconds T90
- **TCD (GC detector)**: 1-5 seconds (detector only; total GC: 5-15 minutes)
- **TDLAS**: 0.1-1 second T90
- **MOS semiconductor**: 1-30 seconds T90
- **Sampling system delay**: 2-60 seconds additional (depends on tubing length/diameter)
- **Safety alarm requirement**: T50 less than 10 seconds (EN 60079-29-1)

## Measurement Methods

- **Step-Change Calibration Gas Test**: The sensor is exposed to a rapid switch between zero gas (N2) and calibration gas at known concentration, and the time to reach 90% of the stable reading is recorded. A three-way valve with low dead volume provides step-change switching. Both rising and falling response times are measured, as many sensor types show asymmetric response.
- **Dynamic Gas Standard**: A mass flow controller blends calibration gas with diluent at programmed time-varying ratios, creating known dynamic concentration profiles. Comparing the sensor output to the known input profile reveals the sensor's frequency response, enabling characterization beyond simple step response.
- **In-Situ Performance Verification**: During MES operation, comparison between GC measurements (periodic, accurate) and continuous sensor readings (real-time, potentially slower) reveals the effective response time in the actual operating environment, including sampling system effects.

## Affecting Factors

### Primary

- **Sampling system configuration**: Tubing inner diameter (1-6 mm), length (0.1-10 m), pump flow rate (50-500 mL/min), and filter/dryer holdup volume determine the transport delay. Minimizing tubing volume and maximizing flow rate reduce sampling delay. PTFE or stainless steel tubing prevents gas adsorption.
- **Sensor technology**: TDLAS responds in milliseconds (limited by optical path flushing). NDIR responds in 5-30 seconds (limited by optical cell volume exchange). Electrochemical cells respond in 15-60 seconds (limited by membrane diffusion). Catalytic sensors respond in 10-30 seconds (limited by heat transfer).
- **Temperature**: Higher temperature increases gas diffusion rates through sensor membranes, reducing response time by 1-3% per degree C. Lower temperature increases gas solubility in condensed water, adding absorption delay.
- **Gas concentration**: Some sensors show concentration-dependent response time. Catalytic sensors responding to high CH4 concentrations (near LEL) may respond faster than at low concentrations due to stronger thermal signal. Electrochemical sensors may show slower response at very low concentrations near the detection limit.
- **Humidity**: Water vapor condensation on sensor optics (NDIR) or membranes (electrochemical) degrades response time. Sample gas drying (Nafion dryers) prevents condensation but adds 2-10 seconds of transport delay.

## Compatible Systems

Sensor Specifications

## References

- Hodgkinson, J., & Tatam, R. P. (2013). Optical gas sensing: A review. *Measurement Science and Technology*, 24(1), 012004.
- Liu, X., et al. (2012). A survey on gas sensing technology. *Sensors*, 12(7), 9635-9665.
- EN 60079-29-1 (2016). Explosive atmospheres - Gas detectors - Performance requirements.
- Bakker, E., & Telting-Diaz, M. (2002). Electrochemical sensors. *Analytical Chemistry*, 74(12), 2781-2800.
- Werle, P., et al. (2002). Near- and mid-infrared laser-optical sensors for gas analysis. *Optics and Lasers in Engineering*, 37(2-3), 101-114.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Gas+Sensor+Response&body=**Parameter%3A**+Gas+Sensor+Response%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fgas-sensor-response.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Gas+Sensor+Response&body=**Parameter%3A**+Gas+Sensor+Response%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fgas-sensor-response.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Gas+Sensor+Response&body=**Parameter%3A**+Gas+Sensor+Response%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fgas-sensor-response.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
