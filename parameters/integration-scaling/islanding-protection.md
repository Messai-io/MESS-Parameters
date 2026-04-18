# Islanding Protection

Islanding protection in microbial electrochemical systems (MES) refers to the safety systems and detection methods that prevent an MFC power generation system from continuing to energize a section of the utility electrical grid after the grid supply has been disconnected. Islanding occurs when a distributed energy resource (such as an MFC installation) continues to supply power to a local area that has been isolated from the main grid, creating an uncontrolled, independently powered "island" that poses safety hazards to utility workers, the public, and equipment.

Anti-islanding protection is mandatory for all grid-connected distributed energy resources under IEEE 1547 (US), EN 50549 (EU), and equivalent national standards. When utility workers disconnect a grid section for maintenance or repair, they expect it to be de-energized. If an MFC system continues to power that section, workers can be electrocuted. Additionally, islanded operation results in unregulated voltage and frequency that can damage connected equipment, and reconnection of the island to the grid without proper synchronization can cause destructive transients.

For MES installations, islanding protection is implemented in the grid-tie inverter, which continuously monitors grid voltage, frequency, and impedance. When abnormal conditions indicating a grid disconnection are detected, the inverter must cease energizing the grid within 2 seconds (IEEE 1547 requirement). Detection methods include passive methods (under/over voltage, under/over frequency, rate of change of frequency) and active methods (impedance measurement, frequency shift, power variation). The relatively low power output of current MFC installations means that islanding detection is straightforward, as the generation-load mismatch in an islanded condition would quickly produce detectable voltage and frequency deviations.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Integration Scaling |
| **Subcategory** | Power Grid Connection |
| **Type** | boolean |

## Typical Values

- **Valid Range**: Standards-based requirements
- **IEEE 1547 clearing time**: <= 2.0 seconds for islanding detection and disconnection
- **Voltage trip settings (IEEE 1547)**: - V < 50%: Trip within 0.16 seconds
- **Frequency trip settings (IEEE 1547, 60 Hz systems)**: - f < 59.3 Hz: Trip within 0.16 seconds
- **Rate of change of frequency (ROCOF) threshold**: 0.5 - 1.0 Hz/s (varies by grid code)
- **Reconnection delay after grid restoration**: 300 seconds minimum (IEEE 1547)
- **Reconnection voltage window**: 88% - 110% of nominal
- **Reconnection frequency window**: 59.3 - 60.5 Hz (60 Hz systems)
- **Non-detection zone (NDZ)**: < 5% active power mismatch for certified inverters

## Measurement Methods

- **Type Testing (Inverter Certification)**: 1. Test the MES inverter against an RLC (resistive-inductive-capacitive) islanding test circuit per IEEE 1547.1 or UL 1741. 2. Configure the test load to match the inverter output power with a quality factor (Q_f) of 1.0 (worst-case condition for passive detection). 3. Open the grid-simulating switch and measure the time for the inverter to detect the island and cease energization. 4. Repeat at multiple power levels (25%, 50%, 75%, 100% of rated power). 5. Verify that detection time is within 2.0 seconds for all test conditions. 6. Document results as part of the inverter certification report.
- **Commissioning Verification**: 1. During MES installation commissioning, verify anti-islanding function by disconnecting the utility supply (with utility coordination) and observing inverter response. 2. Measure the time from grid disconnection to inverter shutdown. 3. Verify reconnection behavior: confirm the inverter waits the required delay period after grid restoration before reconnecting. 4. Test all anti-islanding detection methods active in the inverter (passive and active). 5. Document commissioning test results for the interconnection agreement.
- **Periodic Performance Verification**: 1. Conduct annual anti-islanding function tests as part of routine maintenance. 2. Verify voltage and frequency trip setpoints have not drifted. 3. Confirm communication-based islanding detection (if installed) is operational. 4. Test transfer trip signals (if applicable) to verify remote disconnection capability. 5. Document test results and maintain records for regulatory compliance.

## Affecting Factors

### Primary

- **Inverter detection method**: Active detection methods (impedance perturbation, frequency shift) have smaller non-detection zones than passive methods alone.
- **Generation-load balance**: Islanding is most difficult to detect when generation closely matches load (within 1-5%), creating a small power mismatch.
- **Local load characteristics**: Loads with high quality factor (Q) that can store and release reactive power create conditions that sustain island voltage and frequency.
- **Multiple distributed generators**: Multiple MFC or other DER systems on the same feeder can collectively sustain an island, complicating detection.
- **Grid impedance**: Low grid impedance (strong grid) makes active impedance detection methods more sensitive.
- **Inverter firmware version**: Software updates may change anti-islanding algorithm behavior.
- **Communication infrastructure**: Direct transfer trip (DTT) systems provide fast, reliable islanding protection but require communication links to the utility substation.
- **Grid-code evolution**: Updated grid codes may require additional or modified anti-islanding functions.

## Related Parameters

- **name**: Grid Synchronization

- **relationship**: Anti-islanding and synchronization are complementary grid interconnection functions.
- **name**: Grid Voltage

- **relationship**: Voltage monitoring is the primary passive anti-islanding detection method.
- **name**: Harmonic Distortion

- **relationship**: Some active anti-islanding methods inject harmonics and monitor the grid response.
- **name**: Emergency Shutdown Time

- **relationship**: Anti-islanding is effectively an automatic emergency shutdown triggered by grid conditions.
- **name**: Certification Required

- **relationship**: Anti-islanding certification (UL 1741, IEC 62109) is mandatory for grid-connected inverters.

## Compatible Systems

Grid Integration

## References

- IEEE 1547 (2018). Standard for Interconnection and Interoperability of Distributed Energy Resources.
- IEEE 1547.1 (2020). Standard Conformance Test Procedures for Equipment Interconnecting Distributed Energy Resources.
- UL 1741 (2021). Standard for Inverters, Converters, Controllers and Interconnection System Equipment.
- IEC 62116 (2014). Utility-Interconnected Photovoltaic Inverters - Test Procedure of Islanding Prevention Measures.
- EN 50549-1 (2019). Requirements for Generating Plants to be Connected in Parallel with Distribution Networks.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Islanding+Protection&body=**Parameter%3A**+Islanding+Protection%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fislanding-protection.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Islanding+Protection&body=**Parameter%3A**+Islanding+Protection%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fislanding-protection.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Islanding+Protection&body=**Parameter%3A**+Islanding+Protection%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fislanding-protection.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
