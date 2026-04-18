# H2 Sensor Type

H2 sensor type specifies the measurement technology used for monitoring hydrogen gas in MES, particularly in microbial electrolysis cells (MECs) where H2 is the primary product. Hydrogen monitoring serves three purposes: product quantification (measuring H2 production rate and purity for yield calculations), safety (detecting H2 accumulation in explosive range 4-75% in air), and process diagnostics (tracking methanogenic H2 consumption, identifying leaks, monitoring interspecies hydrogen transfer).

The principal H2 sensing technologies include thermal conductivity detection in gas chromatography (GC-TCD, reference standard), electrochemical amperometric cells, catalytic combustion (pellistor), metal oxide semiconductor (MOS), palladium-based resistive sensors, and tunable diode laser absorption spectroscopy (TDLAS). Each technology has distinct advantages: GC-TCD provides the most accurate quantification across the full 0-100% range; electrochemical sensors offer continuous monitoring at moderate cost; palladium sensors provide high selectivity; and TDLAS enables isotope-resolved real-time measurement.

For MEC applications, the ideal H2 sensor must operate reliably in anaerobic atmospheres (unlike pellistors which require O2), tolerate CO2 and H2S (common MES headspace contaminants), provide adequate accuracy across the expected H2 range (typically 20-95%), and survive the humid, warm conditions typical of MES headspaces.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Monitoring Control |
| **Subcategory** | Gas Sensors |
| **Type** | select |

## Typical Values

- **GC-TCD (Ar carrier)**: 10 ppm - 100%, 1-3% accuracy, 5-15 min per analysis
- **Electrochemical**: 0-4% range (safety), 1-10 ppm detection, 30-90 s response
- **Catalytic (pellistor)**: 0-100% LEL (0-4%), requires O2, 10-30 s response
- **MOS semiconductor**: 5-10,000 ppm, semi-quantitative, 1-30 s response
- **Palladium resistive**: 0.1 ppm - 4%, high selectivity, 5-30 s response
- **TDLAS**: 0.1 ppm - 100%, 0.1 s response, $5,000-50,000
- **Sensor cost**: $50-200 (MOS), $100-500 (electrochemical), $200-2000 (pellistor), $5000+ (TDLAS)

## Measurement Methods

- **Gas Chromatography with TCD**: GC-TCD using Ar or N2 carrier gas (not He, which has similar thermal conductivity to H2) and molecular sieve 5A column provides reference-quality H2 measurement. Separation at 30-50 degrees C resolves H2 from N2, O2, CH4, and CO2 in 3-8 minutes. Calibration with certified H2 standard mixtures ensures accuracy of 1-3%. Automated gas sampling valves enable unattended periodic analysis of MEC headspace.
- **Electrochemical Sensors**: Amperometric H2 sensors oxidize H2 at a catalytic electrode, generating current proportional to H2 concentration. Most operate in a 0-2% or 0-4% range optimized for safety monitoring. Extended-range electrochemical sensors cover 0-100% for MEC product monitoring. Response time of 30-90 seconds suits continuous monitoring. Cross-sensitivity to CO, alcohols, and H2S requires characterization in the specific MES headspace composition.
- **Palladium-Based Sensors**: Palladium absorbs hydrogen, causing measurable changes in electrical resistance, optical properties, or mechanical stress. Pd-alloy thin-film sensors achieve high H2 selectivity (minimal response to CO2, CH4, N2) with detection limits of 0.1-5 ppm. Response time of 5-30 seconds depends on Pd film thickness and temperature. Hysteresis between hydrogen absorption and desorption can cause 5-15% measurement error during rapid concentration changes.

## Affecting Factors

### Primary

- **Concentration range**: Safety sensors (0-4%) and product sensors (0-100%) require different technologies. GC-TCD and TDLAS cover the full range. Electrochemical and palladium sensors are optimized for low concentrations. No single sensor technology is ideal for the entire 0-100% range encountered across different MES applications.
- **Oxygen presence**: Catalytic (pellistor) sensors require 10%+ O2 for operation and cannot function in anaerobic MES headspaces. Electrochemical and palladium sensors operate in anaerobic conditions. GC-TCD is atmosphere-independent.
- **Interfering gases**: H2S poisons Pd sensors and pellistors. CO cross-reacts with electrochemical H2 sensors. CO2 (abundant in MES headspace) does not interfere with most H2 sensor types.
- **Humidity**: MES headspace is typically saturated with water vapor. Condensation on sensor elements degrades performance. Sample conditioning (Nafion dryers, cooled condensation traps) prevents water-related measurement errors.
- **Temperature**: Sensor baseline and sensitivity change with temperature, requiring compensation. Palladium sensors show phase transitions (alpha to beta PdH) at specific H2 concentrations that shift with temperature.

## Compatible Systems

Sensor Specifications

## References

- Huebert, T., Boon-Brett, L., Black, G., & Banach, U. (2011). Hydrogen sensors - A review. *Sensors and Actuators B: Chemical*, 157(2), 329-352.
- Hodgkinson, J., & Tatam, R. P. (2013). Optical gas sensing: A review. *Measurement Science and Technology*, 24(1), 012004.
- Logan, B. E., et al. (2008). Microbial electrolysis cells for high yield hydrogen gas production. *Environmental Science & Technology*, 42(23), 8630-8640.
- Call, D., & Logan, B. E. (2008). Hydrogen production in a single chamber microbial electrolysis cell. *Environmental Science & Technology*, 42(9), 3401-3406.
- Bakker, E., & Telting-Diaz, M. (2002). Electrochemical sensors. *Analytical Chemistry*, 74(12), 2781-2800.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+H2+Sensor+Type&body=**Parameter%3A**+H2+Sensor+Type%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fh2-sensor-type.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+H2+Sensor+Type&body=**Parameter%3A**+H2+Sensor+Type%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fh2-sensor-type.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+H2+Sensor+Type&body=**Parameter%3A**+H2+Sensor+Type%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fh2-sensor-type.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
