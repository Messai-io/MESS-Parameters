# Harmonic Distortion

Harmonic distortion in microbial electrochemical systems (MES) refers to the presence of voltage and current waveform components at integer multiples of the fundamental grid frequency (50 or 60 Hz) in the electrical output of grid-connected MFC inverters or in the power supply systems feeding MEC installations. Total harmonic distortion (THD) quantifies the degree to which the actual waveform deviates from a pure sinusoidal shape and is a critical power quality parameter for grid-connected MES systems.

MFC power conditioning systems (DC-DC converters and DC-AC inverters) inherently generate harmonics due to the switching action of power electronic devices (MOSFETs, IGBTs). These harmonics can propagate into the utility grid, causing interference with other equipment, increased losses in transformers and cables, overheating of neutral conductors, and malfunction of sensitive electronic devices. Grid codes (IEEE 1547, EN 50549) impose strict limits on the harmonic content that distributed energy resources like MFCs can inject into the grid.

For MEC power supply systems, harmonics in the input current drawn from the grid can cause additional losses and power quality issues. Rectifiers that convert AC grid power to DC for MEC operation generate characteristic harmonics (5th, 7th, 11th, 13th for six-pulse rectifiers) that must be mitigated through passive or active harmonic filters. The harmonic performance of MES power conditioning equipment is specified during design, verified during commissioning, and monitored during operation to ensure ongoing compliance with grid code requirements.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Integration Scaling |
| **Subcategory** | Power Grid Connection |
| **Type** | number |
| **Unit** | % |
| **Minimum** | 0 |
| **Maximum** | 10 |
| **Papers Reporting** | 2 |

## Typical Values

- **Valid Range**: 0 - 20% THD (current or voltage)
- **IEEE 1547 current THD limit**: < 5.0% at rated inverter output
- **IEEE 1547 individual odd harmonics (3rd-9th)**: < 4.0%
- **IEEE 1547 individual odd harmonics (11th-15th)**: < 2.0%
- **IEEE 1547 individual odd harmonics (17th-21st)**: < 1.5%
- **IEEE 1547 individual even harmonics**: < 25% of odd harmonic limits
- **EN 50160 voltage THD limit (supply)**: < 8.0% (including up to 40th harmonic)
- **IEC 61000-3-2 current harmonic limits**: Class A equipment limits (per harmonic order)
- **Typical grid-tie inverter THD (current)**: 1.5 - 4.0%
- **Six-pulse rectifier THD (current, MEC supply)**: 25 - 30% (without harmonic filter)
- **Twelve-pulse rectifier THD (current)**: 10 - 12%
- **Active front-end rectifier THD**: < 5%
- **Voltage THD at PCC (typical)**: 2 - 5%

## Measurement Methods

- **Power Quality Analyzer Measurement**: 1. Install a calibrated power quality analyzer (Class A per IEC 61000-4-30) at the point of common coupling (PCC). 2. Measure voltage and current harmonics simultaneously up to the 50th harmonic order (minimum 40th for EN 50160 compliance). 3. Record using 10-minute aggregation intervals per IEC 61000-4-30 for voltage quality assessment. 4. Calculate THD_V and THD_I using: THD = sqrt(sum(V_n^2 for n=2 to N)) / V_1, where V_n is the nth harmonic magnitude and V_1 is the fundamental. 5. Report individual harmonic magnitudes as percentages of the fundamental.
- **Inverter Type Testing**: 1. During inverter certification testing (per UL 1741 or IEC 62109), measure harmonic current injection at multiple power levels (25%, 50%, 75%, 100% of rated power). 2. Test under different grid impedance conditions using a grid simulator. 3. Verify compliance with IEEE 1547 harmonic limits across the full operating range. 4. Document test results in the inverter commissioning report.
- **Ongoing Compliance Monitoring**: 1. Configure the MES inverter's built-in power quality monitoring to log harmonic data continuously. 2. Download or transmit harmonic data to the facility monitoring system for trend analysis. 3. Investigate any increasing harmonic trends that may indicate equipment degradation. 4. Conduct annual power quality audits at the PCC using a portable Class A analyzer.

## Affecting Factors

### Primary

- **Inverter topology and switching frequency**: Higher switching frequencies push harmonics to higher orders where they are easier to filter; advanced multilevel inverter topologies inherently produce lower THD.
- **Operating power level**: THD typically increases at low power levels (< 25% rated) when inverter control performance degrades.
- **Grid impedance at PCC**: Higher grid impedance amplifies voltage harmonics from injected harmonic currents.
- **DC bus voltage ripple**: Inadequate DC bus capacitance in the MFC power conditioning system introduces low-frequency harmonics into the inverter output.
- **Background grid harmonics**: Pre-existing voltage harmonics on the grid interact with inverter harmonics and can cause amplification.
- **Multiple inverters**: Several MFC inverters at the same PCC can create harmonic resonance conditions.
- **Temperature**: Component parameter drift at extreme temperatures can affect inverter switching performance and harmonic generation.
- **Aging and degradation**: Capacitor aging in harmonic filters reduces filter effectiveness over time.

## Related Parameters

- **name**: Grid Synchronization

- **relationship**: Harmonic compliance is a requirement for maintaining grid synchronization.
- **name**: Grid Voltage

- **relationship**: Voltage harmonics are measured relative to the nominal grid voltage.
- **name**: Islanding Protection

- **relationship**: Harmonic monitoring can be used as part of active anti-islanding detection methods.
- **name**: Load Balancing

- **relationship**: Unbalanced loads cause characteristic harmonic patterns (3rd harmonic and triplen harmonics).
- **name**: Certification Required

- **relationship**: Grid-tie inverters must be certified for harmonic compliance before grid connection.

## Compatible Systems

Grid Integration

## References

- IEEE 1547 (2018). Standard for Interconnection and Interoperability of Distributed Energy Resources.
- EN 50160 (2010). Voltage Characteristics of Electricity Supplied by Public Electricity Networks.
- IEC 61000-3-2 (2018). Electromagnetic Compatibility - Limits for Harmonic Current Emissions.
- IEC 61000-4-7 (2002). Testing and Measurement Techniques - General Guide on Harmonics and Interharmonics Measurements.
- UL 1741 (2021). Standard for Inverters, Converters, Controllers and Interconnection System Equipment.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Harmonic+Distortion&body=**Parameter%3A**+Harmonic+Distortion%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fharmonic-distortion.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Harmonic+Distortion&body=**Parameter%3A**+Harmonic+Distortion%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fharmonic-distortion.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Harmonic+Distortion&body=**Parameter%3A**+Harmonic+Distortion%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fharmonic-distortion.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
