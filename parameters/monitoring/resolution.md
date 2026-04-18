# Resolution

Resolution specifies the smallest detectable change in a measured quantity by the MES monitoring instrumentation, expressed in the units of the measured parameter or as the number of digital bits. Resolution determines the granularity of measurements and sets a fundamental limit on the precision of any derived calculations. A 16-bit ADC measuring 0-5 V has a resolution of 76 microvolts per count (5V / 2^16); for an MES voltage measurement, this provides 0.076 mV resolution, adequate for detecting millivolt-level electrochemical signals.

Resolution is distinct from accuracy: a sensor can have high resolution (detect small changes) but poor accuracy (the absolute value may be offset). In MES, high resolution is essential for detecting small changes in electrode potential (1-10 mV changes indicate biofilm activity shifts), measuring low current densities (microampere-level currents in startup phases), and resolving gradients in sensor profiles (pH or DO micro-profiles through biofilms).

## Basic Information

| Property | Value |
|---|---|
| **Category** | Monitoring Control |
| **Subcategory** | DAQ Hardware |
| **Type** | number |
| **Unit** | bit |
| **Minimum** | 8 |
| **Maximum** | 24 |
| **Papers Reporting** | 8 |

## Typical Values

- **Voltage measurement**: 0.001-1 mV (16-24 bit ADC on 0-5 V range)
- **Current measurement**: 0.001-1 mA (depends on shunt and ADC)
- **pH**: 0.001-0.1 pH units
- **DO**: 0.001-0.1 mg/L
- **Temperature**: 0.001-0.1 degrees C
- **Pressure**: 0.01-1 mbar
- **Flow rate**: 0.1-10% of reading
- **ADC bits**: 10 bit (1024 counts), 12 bit (4096), 16 bit (65536), 24 bit (16.7 million)
- **Effective resolution (with noise)**: Typically 2-4 bits less than ADC resolution

## Measurement Methods

- **ADC Specification Review**: The data acquisition system's ADC resolution (bits) and input range determine the theoretical resolution: Resolution = Range / 2^bits. Effective number of bits (ENOB) accounts for noise and nonlinearity, typically 2-4 bits less than nominal. ENOB is measured by analyzing the ADC output for a known sinusoidal input using FFT-based SINAD analysis.
- **Noise Floor Measurement**: The practical resolution is limited by the noise floor: the standard deviation of repeated measurements of a stable input signal. The noise floor is measured by connecting the sensor input to a stable reference (precision voltage source, temperature-controlled resistor) and computing the standard deviation of 1000+ samples. Practical resolution is approximately 3x the noise floor standard deviation.
- **Sensor Resolution Verification**: Applying known small step changes (near the expected resolution limit) to the sensor and verifying that the step is detected in the output confirms the system-level resolution including sensor, signal conditioning, and ADC contributions.

## Affecting Factors

### Primary

- **ADC bit depth**: Each additional bit doubles the number of resolvable levels. Upgrading from 12-bit to 16-bit ADC improves resolution by 16x for the same input range.
- **Input range selection**: Matching the ADC input range to the expected signal range maximizes resolution. A 0-5 V ADC measuring a 0-1 V MFC voltage wastes 80% of the ADC range, reducing effective resolution by 5x.
- **Signal conditioning**: Amplification of small signals before ADC conversion improves resolution. A 100x amplifier followed by 12-bit ADC provides equivalent resolution to a 19-bit ADC without amplification.
- **Electrical noise**: Environmental electromagnetic interference, power supply ripple, and ground loops add noise that reduces effective resolution. Shielded cables, differential measurement, and filtering improve effective resolution.
- **Oversampling and averaging**: Averaging N measurements improves resolution by sqrt(N) (assuming uncorrelated noise). Averaging 256 samples of a 12-bit ADC provides approximately 16-bit effective resolution, though at reduced sampling rate.

## Compatible Systems

Data Acquisition

## References

- National Instruments (2020). *Data Acquisition Handbook*. NI Corp.
- Kester, W. (2005). *Data Conversion Handbook*. Analog Devices/Newnes.
- Horowitz, P., & Hill, W. (2015). *The Art of Electronics* (3rd ed.). Cambridge University Press.
- Logan, B. E., et al. (2006). Microbial fuel cells: Methodology and technology. *Environmental Science & Technology*, 40(17), 5181-5192.
- Omega Engineering (2019). *Data Acquisition Technical Reference*. Omega.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Resolution&body=**Parameter%3A**+Resolution%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fresolution.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Resolution&body=**Parameter%3A**+Resolution%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fresolution.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Resolution&body=**Parameter%3A**+Resolution%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fresolution.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
