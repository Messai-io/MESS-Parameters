# Grid Voltage

Grid voltage in the context of microbial electrochemical systems (MES) refers to the nominal voltage of the electrical distribution grid to which an MFC power generation system is connected for electricity export or from which an MEC draws power for hydrogen production. This parameter determines the voltage transformation and power conditioning requirements for interfacing MES electrical systems with the utility grid infrastructure.

Individual MFC cells produce very low voltages, typically 0.3-0.8 V under operating conditions, due to the thermodynamic limitations of microbial electrochemistry and the various overpotential losses (activation, ohmic, concentration). To interface with grid-level voltages (120/240 V AC in North America, 230 V AC in Europe, 100/200 V AC in Japan), MES electrical systems require multiple stages of voltage conversion: series stacking of MFC cells to build DC voltage, DC-DC boost conversion, and DC-AC inversion. Each conversion stage introduces efficiency losses that reduce the net energy recovered.

For MEC systems, the grid voltage determines the input power characteristics for the rectifiers and power supplies that provide the external voltage bias (typically 0.2-1.0 V per cell) needed to drive hydrogen production. The efficiency of converting grid AC voltage to the low DC voltage required by MECs affects the overall energy balance and hydrogen production cost. Grid voltage stability is also important because voltage fluctuations can affect MES power conditioning equipment performance and, in extreme cases, damage sensitive bioelectrochemical systems.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Integration Scaling |
| **Subcategory** | Power Grid Connection |
| **Type** | number |
| **Unit** | V |
| **Minimum** | 100 |
| **Maximum** | 100000 |

## Typical Values

- **Valid Range**: 100 - 480 V AC (distribution level)
- **US residential/small commercial**: 120/240 V AC, 60 Hz, single-phase
- **US industrial**: 208/480 V AC, 60 Hz, three-phase
- **European (EU/UK)**: 230 V AC, 50 Hz, single-phase; 400 V AC, 50 Hz, three-phase
- **Japan**: 100/200 V AC, 50/60 Hz (regional)
- **China**: 220 V AC, 50 Hz, single-phase; 380 V AC, 50 Hz, three-phase
- **India**: 230 V AC, 50 Hz, single-phase; 415 V AC, 50 Hz, three-phase
- **Voltage tolerance (EN 50160)**: +/- 10% of nominal (207-253 V for 230 V nominal)
- **Voltage tolerance (ANSI C84.1)**: +/- 5% Service Voltage Range A
- **MFC cell voltage (for comparison)**: 0.3 - 0.8 V DC per cell
- **MFC stack voltage (typical)**: 3 - 48 V DC (before power conditioning)
- **MEC power supply voltage**: 0.2 - 1.0 V DC per cell (applied bias)

## Measurement Methods

- **Direct Voltage Measurement**: 1. Use a calibrated true-RMS digital multimeter or power quality analyzer to measure the AC voltage at the point of common coupling (PCC) between the MES facility and the grid. 2. Measure line-to-neutral and line-to-line voltages for all phases. 3. Record voltage continuously over representative periods (minimum 7 days per EN 50160). 4. Calculate mean, minimum, maximum, and percentile (95th, 5th) values.
- **Voltage Quality Assessment (EN 50160 / IEEE 1159)**: 1. Install a power quality monitor at the PCC for a minimum of one week of continuous recording. 2. Analyze voltage magnitude variations: steady-state variations, voltage dips (sags), voltage swells, and interruptions. 3. Assess voltage unbalance for three-phase connections (negative sequence voltage / positive sequence voltage; limit typically < 2%). 4. Record and classify voltage events per EN 50160 or IEEE 1159 event categories.
- **Utility Coordination**: 1. Request a formal voltage profile from the serving utility, including expected voltage range at the interconnection point. 2. Obtain the available fault current and grid impedance data for power conditioning equipment sizing. 3. Review the utility's voltage regulation practices and any planned changes to the distribution system. 4. Negotiate voltage requirements in the interconnection agreement.

## Affecting Factors

### Primary

- **Geographic location**: Grid voltage standards vary by country and region, determining the nominal voltage and frequency.
- **Connection type**: Single-phase vs. three-phase connections have different voltage levels and power capacity.
- **Distance from substation**: Voltage drops along distribution lines mean that sites far from substations may experience lower voltages.
- **Load conditions**: High demand periods can depress grid voltage; light load periods may cause voltage rise, particularly with distributed generation.
- **Distribution transformer tap settings**: Utility transformer tap positions affect the delivered voltage at the MES facility.
- **MES power injection**: When MFC systems export power, they can cause local voltage rise that must be managed within grid code limits.
- **Power quality disturbances**: Voltage sags, swells, harmonics, and flicker from neighboring loads or generators affect the voltage quality at the MES interconnection point.
- **Grid modernization**: Smart grid technologies and voltage optimization programs may change the voltage environment over the MES facility lifetime.

## Related Parameters

- **name**: Grid Synchronization

- **relationship**: Grid voltage is a primary parameter that must be matched for synchronization.
- **name**: Harmonic Distortion

- **relationship**: Voltage harmonics are measured relative to the fundamental grid voltage.
- **name**: Islanding Protection

- **relationship**: Voltage and frequency monitoring are integral to anti-islanding detection.
- **name**: Load Balancing

- **relationship**: Voltage regulation is affected by load distribution across phases.
- **name**: Distribution Channels

- **relationship**: Grid voltage determines the electrical distribution channel characteristics.

## Compatible Systems

Grid Integration

## References

- EN 50160 (2010). Voltage Characteristics of Electricity Supplied by Public Electricity Networks.
- ANSI C84.1 (2020). Electric Power Systems and Equipment - Voltage Ratings (60 Hz).
- IEEE 1547 (2018). Standard for Interconnection and Interoperability of Distributed Energy Resources.
- IEC 60038 (2009). IEC Standard Voltages.
- Dewan, A. et al. (2010). Scaling up microbial fuel cells. Environmental Science & Technology, 44(18), 7010-7016.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Grid+Voltage&body=**Parameter%3A**+Grid+Voltage%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fgrid-voltage.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Grid+Voltage&body=**Parameter%3A**+Grid+Voltage%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fgrid-voltage.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Grid+Voltage&body=**Parameter%3A**+Grid+Voltage%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fgrid-voltage.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
