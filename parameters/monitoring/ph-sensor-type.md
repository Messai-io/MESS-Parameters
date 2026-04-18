# Ph Sensor Type

pH sensor type specifies the measurement technology used for monitoring hydrogen ion activity in MES electrolytes. pH is among the most critical water quality parameters in MES, affecting microbial activity, electrochemical equilibria, membrane transport, substrate speciation, and product quality. The principal technologies include glass combination electrodes (most common), ion-sensitive field-effect transistors (ISFET), optical pH sensors (fluorescent indicators), and antimony/metal oxide electrodes for harsh environments.

Glass combination pH electrodes remain the standard for MES research and operations, employing a pH-sensitive glass membrane that develops a Nernstian potential (59.16 mV/pH at 25 degrees C) proportional to the pH difference between the internal buffer and the sample. ISFET sensors offer advantages for miniaturized MES and harsh environments (no glass breakage risk, fast response). Optical pH sensors using fluorescent indicators immobilized in polymer matrices provide maintenance-free measurement suitable for remote MES installations.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Monitoring Control |
| **Subcategory** | Chemical Sensors |
| **Type** | select |

## Typical Values

- **Glass electrode**: pH 0-14, accuracy 0.01-0.1 pH, T90 5-30 s, lifetime 6-24 months
- **ISFET**: pH 0-14, accuracy 0.05-0.1 pH, T90 1-5 s, lifetime 12-36 months
- **Optical fluorescent**: pH 4-10 (typical), accuracy 0.05-0.1 pH, T90 30-120 s, lifetime 6-12 months
- **Antimony electrode**: pH 2-12, accuracy 0.2-0.5 pH, T90 5-15 s, robust in high-fouling
- **Cost**: $100-500 (glass), $200-1000 (ISFET), $300-800 (optical), $50-200 (antimony)

## Measurement Methods

- **Glass Combination Electrode**: The standard glass pH electrode consists of a pH-sensitive glass bulb containing internal buffer solution and Ag/AgCl wire, combined with a Ag/AgCl reference electrode with KCl-filled junction in a single body. High-impedance measurement (input impedance more than 10^12 ohm) reads the potential difference. Regular calibration with pH 4 and 7 (or 7 and 10) buffers maintains accuracy. Reference junction maintenance (cleaning, KCl refilling for refillable types) is the primary maintenance task.
- **ISFET Sensors**: ISFET pH sensors use a silicon field-effect transistor with a pH-sensitive gate oxide (Si3N4, Al2O3, Ta2O5). The gate potential changes with pH, modulating the drain current. ISFET advantages for MES include: no glass (unbreakable), fast response (1-5 seconds), small size (suitable for microfluidic MES), and low maintenance. Disadvantages include higher cost, reference electrode requirement, and sensitivity to light and static charge.
- **Optical pH Sensors**: Fluorescent pH indicators (HPTS, fluorescein derivatives) immobilized in sol-gel or polymer matrices on fiber-optic tips change fluorescence intensity or lifetime with pH. Interrogated by LED excitation and photodetector readout, optical sensors provide non-electrical pH measurement immune to electromagnetic interference. No reference electrode is needed. Sensor spots (PreSens, PyroScience) enable non-invasive pH measurement through transparent reactor walls.

## Affecting Factors

### Primary

- **Electrolyte composition**: High-sodium solutions cause alkaline error in glass electrodes (positive bias above pH 10). Proteins and lipids foul glass membranes and reference junctions. Sulfide solutions poison reference electrodes. Each electrolyte challenge favors different sensor technologies.
- **Temperature**: All pH sensors require temperature compensation. Glass electrode slope changes linearly with absolute temperature. ISFET offset drifts approximately 0.1 pH/10 degrees C without compensation.
- **Pressure**: Glass electrodes are pressure-sensitive above 5 bar. ISFET and optical sensors tolerate higher pressures.
- **Sterilization compatibility**: Autoclavable glass and ISFET sensors enable pre-sterilization for axenic MES cultures. Optical sensors may not withstand autoclaving.
- **Measurement location**: In-situ measurement minimizes sample handling but exposes sensors to fouling. Ex-situ (flow cell) measurement enables cleaning and calibration access but introduces transport delay.

## Compatible Systems

Sensor Specifications

## References

- Bates, R. G. (1973). *Determination of pH* (2nd ed.). Wiley.
- Galster, H. (1991). *pH Measurement*. VCH.
- APHA (2017). *Standard Methods* (23rd ed.). Method 4500-H+.
- Bergveld, P. (2003). Thirty years of ISFETOLOGY. *Sensors and Actuators B: Chemical*, 88(1), 1-20.
- PreSens (2019). *pH Sensor Technology Overview*. PreSens GmbH.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Ph+Sensor+Type&body=**Parameter%3A**+Ph+Sensor+Type%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fph-sensor-type.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Ph+Sensor+Type&body=**Parameter%3A**+Ph+Sensor+Type%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fph-sensor-type.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Ph+Sensor+Type&body=**Parameter%3A**+Ph+Sensor+Type%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fph-sensor-type.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
