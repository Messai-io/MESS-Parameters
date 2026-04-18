# Steady State Criteria

Steady-state criteria define the quantitative thresholds used to determine when a microbial electrochemical system (MES) has achieved stable, reproducible operation and experimental data collection can begin. In batch systems, steady state means reproducible cycle-to-cycle performance; in continuous systems, it means time-invariant output at constant operating conditions. Establishing clear steady-state criteria is essential for valid data interpretation and cross-study comparison.

Common steady-state criteria for MES include: voltage reproducibility (peak voltage variation < 5--10% across 3 consecutive batch cycles), current density stability (< 10% variation over 3+ HRTs in continuous mode), COD removal consistency (< 5% variation), and coulombic efficiency reproducibility. More rigorous criteria may require stability across 5+ cycles and statistical tests (coefficient of variation < 10%, no significant trend by linear regression).

The time to reach steady state varies from 1--2 weeks (for pre-acclimated systems with defined substrate) to 2--3 months (for new systems with complex wastewater), and represents the startup plus acclimation period during which biofilm development, community selection, and metabolic adaptation occur. Data collected before steady state is useful for understanding startup dynamics but should not be used for comparing operating conditions or reporting optimized performance.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Operational |
| **Subcategory** | Continuous Operation |
| **Type** | number |
| **Unit** | % |
| **Minimum** | 0.1 |
| **Maximum** | 10 |
| **Papers Reporting** | 3 |

## Typical Values

- **Valid Range**: Quantitative thresholds
- **Peak voltage CV < 10%**: Across 3 consecutive cycles (common criterion)
- **Peak voltage CV < 5%**: Across 5 consecutive cycles (stringent)
- **Continuous current density**: < 10% variation over 3 HRTs
- **COD removal**: < 5% variation over 3 cycles/HRTs
- **Coulombic efficiency**: < 10% variation
- **Minimum batch cycles for confirmation**: 3 (standard), 5 (stringent)
- **Minimum HRTs for continuous confirmation**: 3 (standard)
- **Time to steady state (pre-acclimated)**: 1 -- 3 weeks
- **Time to steady state (fresh inoculum)**: 3 -- 12 weeks

## Measurement Methods

- **Statistical Process Control**: Performance metrics (peak voltage, coulombic efficiency, COD removal) are plotted on control charts. Upper and lower control limits (mean +/- 2 or 3 standard deviations) are calculated from the last N cycles. Steady state is confirmed when all data points fall within control limits and no trending is detected.
- **Coefficient of Variation**: CV = (standard deviation / mean) * 100% is calculated for the performance metric across the specified number of cycles. CV < 10% for voltage and < 15% for coulombic efficiency indicates acceptable steady state.
- **Linear Regression Test**: A linear regression of performance metric vs. time (or cycle number) is performed. A non-significant slope (p > 0.05) confirms no systematic trend, supporting the steady-state claim.

## Affecting Factors

### Primary

- **Biofilm Maturity**: Immature biofilms (< 3 weeks) exhibit progressive performance improvement that violates steady-state criteria. Mature biofilms achieve reproducible cycles.
- **Substrate Variability**: Defined substrates (acetate) enable tight steady-state criteria (CV < 5%). Real wastewater with inherent variability may never achieve CV < 10%.
- **Environmental Stability**: Temperature fluctuations > 2 C, feed composition changes, and pH drift all destabilize the system and extend the time to steady state.
- **Criterion Stringency**: More stringent criteria (CV < 5%, 5+ cycles) require longer acclimation periods but produce more reliable data.

## Related Parameters

- **name**: [Batch Duration](batch-duration.md)

- **relationship**: Cycle time being compared
- **name**: [Duration](duration.md)

- **relationship**: Total experiment time
- **name**: [Startup Mode](startup-mode.md)

- **relationship**: Protocol preceding steady state
- **name**: [Data Sampling Frequency](data-sampling-frequency.md)

- **relationship**: Monitoring resolution
- **name**: [Feed Trigger](feed-trigger.md)

- **relationship**: Consistency of cycle initiation

## Compatible Systems

Operating Modes

## References

- Logan, B.E. et al. (2006). "Microbial fuel cells: methodology and technology." Environmental Science & Technology, 40(17), 5181-5192.
- IS-MET (2019). "Standardized reporting guidelines for microbial electrochemical systems." Electrochimica Acta, 317, 449-456.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Steady+State+Criteria&body=**Parameter%3A**+Steady+State+Criteria%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fsteady-state-criteria.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Steady+State+Criteria&body=**Parameter%3A**+Steady+State+Criteria%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fsteady-state-criteria.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Steady+State+Criteria&body=**Parameter%3A**+Steady+State+Criteria%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fsteady-state-criteria.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
