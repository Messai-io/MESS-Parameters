# duration

Duration refers to the total elapsed operational time of a microbial electrochemical system (MES) experiment or deployment, measured from system startup to shutdown or the end of the reporting period. This parameter captures the overall timeframe over which the system has been operated and data collected, encompassing all batch cycles, continuous operation periods, maintenance interruptions, and idle times. Duration is distinct from batch duration (which measures a single cycle) and represents the cumulative operational history of the system.

Long-term operation duration is a critical credibility metric in MES research because many performance-limiting phenomena -- including membrane fouling, electrode degradation, biofilm evolution, and material corrosion -- manifest only after extended operation. Short-term studies (< 30 days) may overestimate sustainable performance by 20--50% relative to steady-state values achieved after 3--6 months. Regulatory agencies and technology adopters require demonstration of reliable operation over durations of 6--12 months minimum before considering MES technology for deployment.

The duration parameter also reflects the maturity stage of the MES research: proof-of-concept studies typically last days to weeks, optimization studies span weeks to months, and pilot projects operate for months to years. The longest continuously operated MES systems in the literature have achieved durations exceeding 3 years.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Operational |
| **Type** | number |
| **Unit** | h |
| **Papers Reporting** | 22 |

## Typical Values

- **Valid Range**: 0.01 -- 36500 d
- **Proof-of-concept study**: 1 -- 14 d
- **Lab optimization study**: 14 -- 90 d
- **Extended lab study**: 90 -- 365 d
- **Pilot demonstration**: 180 -- 730 d
- **Longest reported MFC operation**: > 1000 d
- **Longest reported MEC operation**: > 400 d
- **Median duration in MFC literature**: approximately 30 -- 60 d

## Measurement Methods

- **Calendar Tracking**: The start date and end date of system operation are recorded, with the duration calculated as the difference. Shutdown periods for maintenance are documented separately. Total operational duration may be reported as total elapsed time or effective operating time (excluding shutdowns). Precision: +/- 1 day.
- **Data Logger Timestamps**: Continuous data acquisition systems record timestamps with each measurement. The duration is determined from the first and last data points. Automated systems can calculate cumulative operating time excluding paused periods. Precision: +/- 1 minute.
- **Run-Time Meters**: Industrial installations use equipment run-time meters (hour meters) on pumps, power supplies, and data acquisition systems. These provide cumulative operating hours independent of calendar time. Precision: +/- 0.1 h.

## Affecting Factors

### Primary

- **Research Objectives**: Screening studies may require only 7--14 days; long-term stability studies require 6--12+ months. Grant funding cycles constrain maximum study duration.
- **Material Degradation**: Electrode corrosion, membrane fouling, and gasket degradation set practical limits. Carbon electrodes maintain performance for 1--3 years; PEM membranes foul within 2--6 months in real wastewater.
- **Biofilm Stability**: Mature electroactive biofilms maintain performance for months to years under consistent conditions. Perturbations can destabilize biofilms, requiring days to weeks for recovery.
- **Equipment Reliability**: Pump failures, power outages, and data acquisition malfunctions cause unplanned interruptions. Redundant systems extend achievable continuous duration.
- **Maintenance Schedule**: Planned maintenance creates periodic interruptions. Maintenance-free intervals of 30--90 days are typical for lab systems; 90--365 days for pilot systems.

## Related Parameters

- **name**: [Batch Duration](batch-duration.md)

- **relationship**: Duration of a single operational cycle
- **name**: [Lifetime Target](lifetime-target.md)

- **relationship**: Design goal for total operational life
- **name**: [Electrode Replacement Interval](electrode-replacement-interval.md)

- **relationship**: Maintenance cycle
- **name**: [Membrane Replacement Interval](membrane-replacement-interval.md)

- **relationship**: Membrane lifecycle
- **name**: [Startup Mode](startup-mode.md)

- **relationship**: Initial phase protocol

## References

- Liang, P. et al. (2018). "One-year operation of 1000-L modularized microbial fuel cell for municipal wastewater treatment." Water Research, 141, 1-8.
- Zhang, F. et al. (2013). "Long-term performance of liter-scale microbial fuel cells." Environmental Science & Technology, 47(9), 4941-4948.
- Rossi, R. et al. (2022). "Pilot scale microbial fuel cells using air cathodes for producing electricity while treating wastewater." Water Research, 215, 118208.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+duration&body=**Parameter%3A**+duration%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fduration.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+duration&body=**Parameter%3A**+duration%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fduration.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+duration&body=**Parameter%3A**+duration%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fduration.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
