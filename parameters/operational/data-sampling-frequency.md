# Data Sampling Frequency

Sampling frequency refers to the rate at which data is collected from sensors,
instruments, and analytical measurements in microbial electrochemical systems,
expressed in hertz (Hz, samples per second) or as a sampling interval (seconds,
minutes, or hours between measurements). This parameter governs the temporal
resolution of all monitored variables including cell voltage, current, electrode
potentials, pH, temperature, dissolved oxygen, gas production, and electrolyte
composition. Appropriate sampling frequency ensures that significant system
dynamics are captured while avoiding excessive data volume and unnecessary
sensor wear.

The Nyquist-Shannon sampling theorem dictates that the sampling frequency must
be at least twice the highest frequency component of the signal to avoid
aliasing. For MES voltage monitoring, significant dynamics occur on timescales
from seconds (electrode double-layer charging, load switching transients) to
hours (substrate depletion cycles, diurnal temperature effects) to days
(biofilm maturation, community succession). Typical MES voltage monitoring
employs sampling intervals of 1-60 seconds, corresponding to frequencies of
0.017-1 Hz, which adequately capture most operationally relevant dynamics.

For electrochemical characterization techniques, much higher sampling
frequencies are required. Electrochemical impedance spectroscopy (EIS) applies
AC perturbations from 100 kHz to 10 mHz, requiring sampling rates up to 500 kHz
to resolve the highest frequency components. Cyclic voltammetry at scan rates of
1-100 mV/s requires sampling at 10-1,000 points per volt. Chronoamperometry
with millisecond-scale transients requires sampling at 1-10 kHz. The sampling
frequency must be matched to the measurement objective, with routine monitoring
using low rates and detailed characterization using high rates.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Operational |
| **Type** | number |
| **Unit** | Hz |
| **Papers Reporting** | 7 |

## Typical Values

- **Valid Range**: 0.0001-500,000 Hz (depending on application)
- **Cell voltage (continuous)**: 0.017-1 Hz (1-60 second intervals)
- **Current (continuous)**: 0.017-1 Hz (1-60 second intervals)
- **pH**: 0.001-0.017 Hz (1-15 minute intervals)
- **Temperature**: 0.001-0.017 Hz (1-15 minute intervals)
- **Dissolved oxygen**: 0.003-0.017 Hz (1-5 minute intervals)
- **Gas production (flow meter)**: 0.017-1 Hz (1-60 second intervals)
- **Effluent COD (grab samples)**: 1-4 per day (0.00001-0.00005 Hz)
- **EIS acquisition**: 200 kHz to 0.02 Hz (excitation), 500 kHz sampling
- **Cyclic voltammetry**: 10-10,000 Hz (scan-rate dependent)
- **Chronoamperometry**: 100-10,000 Hz (early transients)
- **Linear sweep voltammetry**: 10-1,000 Hz
- **Polarization curves**: Point-by-point, 5-30 minutes per point
- **PID control loop (pH)**: 0.1-1 Hz (1-10 second intervals)
- **Flow rate feedback**: 0.1-1 Hz
- **Level control**: 0.01-0.1 Hz (10-100 second intervals)
- **SCADA data historian**: 0.017-0.1 Hz (10-60 second archive rate)

## Measurement Methods

- **Data Acquisition System (DAQ) Configuration**: Select a multichannel DAQ system (National Instruments cDAQ, Keysight 34970A, Agilent 34972A) with simultaneous sampling capability or multiplexed channels with sufficient throughput. Configure channel list: voltage channels (high impedance, ±10 V range), current channels (via shunt resistor or current transducer), thermocouple channels (Type K or J), analog inputs (pH, DO sensor outputs). Set the global sampling rate to at least 2 times the highest frequency of interest (Nyquist criterion) on each channel. Apply anti-aliasing low-pass filters (hardware or digital) with cutoff at 0.4 times the sampling frequency.
- **Continuous Logging Strategy**: For long-term MES monitoring (weeks to months), use a tiered logging approach:  1. **High-resolution buffer**: Sample all channels at 1 Hz into a circular    buffer (RAM). Retain last 24 hours at full resolution. 2. **Medium-resolution archive**: Decimate to 10-second averages and store to    local disk. Retain 30 days. 3. **Long-term archive**: Further decimate to 1-minute or 5-minute averages for    permanent storage. Retain indefinitely. 4. **Event-triggered capture**: When alarm thresholds are crossed, save the    full 1-Hz buffer (pre-trigger and post-trigger) for root cause analysis.  This approach balances temporal resolution against storage requirements. One channel at 1 Hz generates approximately 2.6 MB/day (8-byte float + timestamp); 16 channels generate ~42 MB/day before compression.
- **Analytical Sampling Protocols**: For laboratory analyses (COD, VFA, nutrient concentrations) that require grab samples:  1. **Startup phase**: Sample every 2-4 hours for the first 3 HRTs to capture    transient behavior. 2. **Steady-state verification**: Sample every 6-12 hours for 2-3 HRTs. 3. **Routine monitoring**: Sample 1-2 times per day (influent and effluent). 4. **Perturbation experiments**: Sample every 30-60 minutes for the first 6    hours after perturbation, then return to routine schedule. 5. **Sample preservation**: Acidify to pH <2 (COD), filter through 0.45 um    (dissolved species), freeze at -20 degrees C (biological samples). Analyze    within holding times (COD: 28 days acidified; VFA: 7 days refrigerated).
- **Electrochemical Measurement Protocols**: For EIS: acquire 10-50 data points per decade of frequency, logarithmically spaced from 100 kHz to 10 mHz. Integration time: 5-10 cycles per frequency for statistical confidence. Total measurement time: 15-45 minutes per spectrum. Verify linearity with Kramers-Kronig analysis. For cyclic voltammetry: sample at sufficient resolution to achieve at least 500 data points per sweep (e.g., at 1 mV/s over 1 V range, sample at >0.5 Hz). Begin recording 2-3 cycles before the analysis sweep to verify steady-state cycling.

## Affecting Factors

### Primary

- **System Dynamics**: The characteristic timescale of the phenomenon being    monitored determines the minimum sampling frequency. Voltage transients from    load switching: microseconds to milliseconds (kHz sampling). Biofilm    metabolic response: seconds to minutes (0.01-1 Hz). Substrate depletion in    batch: hours (0.001 Hz). Community succession: days (grab samples).
- **Measurement Type**: Electrochemical techniques (EIS, CV) have inherent    frequency requirements set by the excitation waveform. Process variables    (pH, temperature, DO) change slowly and require low sampling rates. Voltage    and current can change rapidly during transients.
- **Data Storage and Processing Capacity**: High sampling rates generate large    data volumes. At 1 kHz with 16 channels and 8 bytes per sample: 460 MB/hour.    Storage constraints, data transmission bandwidth (for remote monitoring), and    post-processing time limit practical sampling rates for long-term deployment.
- **Sensor Response Time**: The physical response time of the sensor limits    useful sampling frequency. pH glass electrodes: 5-30 second response time    (useful sampling: <0.1 Hz). DO optical sensors: 10-60 second response time.    Voltage measurements (electronic): microsecond response (limited only by DAQ).    Sampling faster than sensor response time produces correlated noise, not    additional information.
- **Noise and Interference**: Higher sampling rates capture more noise.    Electromagnetic interference from pumps and power supplies introduces 50/60    Hz noise components. Sampling at exactly the mains frequency or its    multiples produces aliased artifacts. Use anti-aliasing filters and select    sampling frequencies that are not harmonically related to mains frequency.
- **Operation Mode**: Batch mode produces time-varying signals requiring higher    sampling rates to capture dynamics. Continuous mode at steady state allows    lower rates since the signal is quasi-constant.
- **Number of Channels**: Multiplexed DAQ systems share the total sampling    bandwidth across channels. With 16 channels and 100 kHz aggregate throughput,    each channel achieves 6.25 kHz maximum. Simultaneous sampling DAQ avoids    this limitation but is more expensive.
- **Power Budget**: Remote, self-powered MES monitoring stations (powered by    the MFC itself) have severe energy constraints. Each sensor reading consumes    0.1-10 mJ. Reducing sampling frequency from 1 Hz to 0.01 Hz extends battery    or supercapacitor life by 100 times.

## Related Parameters

- **name**: Switching Frequency

- **relationship**: Data acquisition sampling frequency must be at least
- **name**: Operation Mode

- **relationship**: Determines the appropriate sampling strategy (high rate
- **name**: Alarm Threshold Voltage

- **relationship**: Alarm evaluation rate is tied to sampling
- **name**: Cell Voltage

- **relationship**: The most frequently sampled parameter in MES systems.
- **name**: Current Density

- **relationship**: Calculated from voltage and resistance at each sampling
- **name**: Data Storage Capacity

- **relationship**: Determines maximum practical sampling rate for

## Compatible Systems

Control Parameters

## References

1. Logan, B.E., Hamelers, B., Rozendal, R., Schroder, U., Keller, J., Freguia,
   S., Aelterman, P., Verstraete, W., and Rabaey, K. (2006). "Microbial fuel
   cells: Methodology and technology." Environmental Science & Technology, 40(17),
   5181-5192.

2. He, Z. and Mansfeld, F. (2009). "Exploring the use of electrochemical
   impedance spectroscopy (EIS) in microbial fuel cell studies." Energy &
   Environmental Science, 2(2), 215-219.

3. Marsili, E., Rollefson, J.B., Baron, D.B., Hozalski, R.M., and Bond, D.R.
   (2008). "Microbial biofilm voltammetry: Direct electrochemical
   characterization of catalytic electrode-attached biofilms." Applied and
   Environmental Microbiology, 74(23), 7329-7337.

4. Shannon, C.E. (1949). "Communication in the presence of noise." Proceedings
   of the IRE, 37(1), 10-21.

5. Premier, G.C., Kim, J.R., Michie, I., Dinsdale, R.M., and Guwy, A.J. (2011).
   "Automatic control of load increases power and efficiency in a microbial fuel
   cell." Journal of Power Sources, 196(4), 2013-2019.

---

_This parameter documentation covers sampling frequency selection, data
acquisition configuration, and tiered logging strategies for microbial
electrochemical systems. Appropriate sampling frequency ensures that
operationally significant dynamics are captured while maintaining manageable
data volumes for long-term system monitoring._

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Data+Sampling+Frequency&body=**Parameter%3A**+Data+Sampling+Frequency%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fdata-sampling-frequency.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Data+Sampling+Frequency&body=**Parameter%3A**+Data+Sampling+Frequency%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fdata-sampling-frequency.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Data+Sampling+Frequency&body=**Parameter%3A**+Data+Sampling+Frequency%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fdata-sampling-frequency.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
