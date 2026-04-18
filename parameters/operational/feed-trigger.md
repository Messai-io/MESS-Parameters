# Feed Trigger

Feed trigger is the signal, condition, or criterion that initiates the introduction of fresh substrate into a fed-batch or sequencing batch microbial electrochemical system (MES). Rather than feeding at fixed time intervals, trigger-based feeding responds to real-time system conditions, enabling more efficient substrate utilization, higher coulombic efficiency, and more consistent electrochemical performance. The feed trigger is a key component of advanced process control strategies for MES operation.

The most common feed trigger in MFC research is a voltage threshold: when the cell voltage drops below a defined value (typically 50--200 mV under load), it indicates substrate depletion and triggers a new feeding event. This voltage-based approach is simple, requires no additional sensors beyond the standard voltage monitoring system, and directly reflects the bioelectrochemical state of the system. Alternative triggers include current density thresholds, coulombic integration targets, timer-based schedules, COD sensor readings, and pH deviations.

Advanced control systems may use composite triggers combining multiple conditions, such as requiring both a voltage drop below threshold AND a minimum elapsed time since the last feeding. This prevents rapid cycling that can occur if the voltage threshold is set too high or if transient disturbances cause temporary voltage dips. The choice of feed trigger significantly impacts the effective organic loading rate, treatment efficiency, and long-term stability of the MES.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Operational |
| **Subcategory** | Fed-Batch Operation |
| **Type** | select |

## Typical Values

- **Valid Range**: Categorical (voltage, current, time, COD, pH, coulombic, composite)
- **Voltage threshold (MFC under load)**: 50 -- 200 mV
- **Current density threshold**: 0.01 -- 0.1 mA/cm^2
- **Timer-based interval**: 4 -- 72 h (fixed schedule)
- **COD threshold**: 20 -- 100 mg/L (residual COD)
- **Coulombic target**: 70 -- 95% of theoretical maximum charge
- **pH deviation threshold**: +/- 0.5 pH units from setpoint
- **Minimum cycle time (anti-cycling)**: 2 -- 8 h

## Measurement Methods

- **Voltage Monitoring with Threshold Detection**: Continuous voltage monitoring (via DAQ system) compares real-time cell voltage against a programmable threshold. When voltage falls below the threshold for a minimum duration (debounce period, typically 1--5 minutes to avoid noise-triggered false events), the feed trigger activates. Implementation: comparator circuit or software threshold in LabVIEW, Python, or Arduino firmware.
- **Current Integration (Coulombic Trigger)**: Current is continuously measured and integrated (cumulative charge = integral of I dt). When the accumulated charge reaches a target fraction of the theoretical maximum (calculated from substrate loading and stoichiometry), feeding is triggered. This method requires knowledge of the initial substrate load and the number of electrons per mole of substrate (e.g., 8 mol e^-/mol acetate).
- **Online COD Sensor**: A UV-Vis spectrophotometric probe (e.g., s::can spectro::lyser, Hach Nitratax) provides continuous measurement of organic content. When measured COD drops below a target effluent concentration, feeding is triggered. Probe accuracy: +/- 5--10% of reading. Calibration against laboratory COD methods (APHA 5220) is required monthly.

## Affecting Factors

### Primary

- **Voltage Threshold Setting**: Too high a threshold (> 200 mV) triggers feeding before substrate is fully consumed, reducing COD removal efficiency and coulombic efficiency. Too low (< 20 mV) extends batch duration unnecessarily and risks biofilm starvation. Optimal threshold depends on internal resistance.
- **Sensor Noise and Drift**: Voltage signals in MFCs exhibit noise of 5--50 mV depending on electrical environment, pump activity, and measurement system quality. Debounce filters (moving average over 1--5 min) prevent false triggers.
- **Response Lag**: The time between trigger detection and actual substrate delivery depends on pump startup time (1--5 s), feed line volume (dead volume, typically 0.5--5 mL), and mixing time. Total response lag of 1--10 minutes is typical for lab systems.
- **Substrate Concentration**: Higher feed concentrations deliver more COD per trigger event, reducing feeding frequency. Using 10x concentrated feed can reduce trigger frequency from 1/day to 1/10 days while maintaining the same organic loading.
- **Biofilm Adaptation**: Electroactive biofilms acclimate to feeding patterns over 1--2 weeks. Sudden changes in trigger strategy can temporarily disrupt performance until the microbial community adjusts.

## Related Parameters

- **name**: [Feed Rate](feed-rate.md)

- **relationship**: Volume delivered per trigger event
- **name**: [Feeding Strategy](feeding-strategy.md)

- **relationship**: Overall feeding approach (batch, fed-batch, continuous)
- **name**: [Batch Duration](batch-duration.md)

- **relationship**: Time between consecutive triggers
- **name**: [Steady-State Criteria](steady-state-criteria.md)

- **relationship**: Performance stability metrics
- **name**: [External Load](external-load.md)

- **relationship**: Resistance affecting voltage trigger thresholds

## Compatible Systems

Operating Modes

## References

- Premier, G.C. et al. (2011). "Automatic control of load increases power and efficiency in a microbial fuel cell." Journal of Power Sources, 196(4), 2013-2019.
- Pinto, R.P., Tartakovsky, B. (2014). "Optimizing treatment performance of microbial fuel cells by reactor staging." Industrial & Engineering Chemistry Research, 53(22), 9222-9229.
- Grondin, F., Perrier, M., Tartakovsky, B. (2012). "Microbial fuel cell operation with intermittent connection of the electrical load." Journal of Power Sources, 208, 18-23.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Feed+Trigger&body=**Parameter%3A**+Feed+Trigger%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Ffeed-trigger.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Feed+Trigger&body=**Parameter%3A**+Feed+Trigger%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Ffeed-trigger.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Feed+Trigger&body=**Parameter%3A**+Feed+Trigger%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Ffeed-trigger.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
