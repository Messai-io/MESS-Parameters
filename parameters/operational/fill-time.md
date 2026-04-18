# Fill Time

Fill time is the duration required to introduce fresh substrate or wastewater into a microbial electrochemical system (MES) reactor at the beginning of a batch or sequencing batch cycle. This parameter defines the transition from an empty or partially-filled state to full working volume and represents the first phase of the fill-react-settle-drain-idle sequence in SBR-mode operation. The rate and manner of filling influence the initial mixing conditions, substrate distribution, oxygen exposure, and biofilm stress within the reactor.

In MES applications, fill time management balances the need for rapid reactor replenishment (to maximize the fraction of cycle time dedicated to productive treatment) against the risk of disrupting the established anode biofilm through sudden hydraulic shock or chemical shock from concentrated substrate introduction. Rapid filling can also entrain dissolved oxygen, which competes with the anode for electrons and reduces coulombic efficiency in strictly anaerobic anolyte environments.

Fill strategies include instant fill (rapid pump delivery in < 5% of cycle time), step fill (incremental additions over 10--30% of cycle time), and static fill (gravity-fed from an elevated reservoir). Instant fill creates initial peak substrate concentrations that may transiently inhibit electroactive bacteria or promote fermentation, while step fill provides a more gradual substrate introduction that can improve overall treatment performance.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Operational |
| **Subcategory** | Batch Operation |
| **Type** | number |
| **Unit** | min |
| **Minimum** | 1 |
| **Maximum** | 60 |

## Typical Values

- **Valid Range**: 0.01 -- 12 h
- **Lab-scale MFC instant fill (28 mL)**: 0.5 -- 2 min
- **Lab-scale MFC instant fill (250 mL)**: 2 -- 5 min
- **Bench-scale step fill (5 L)**: 10 -- 60 min
- **Pilot-scale pump fill (100 L)**: 15 -- 60 min
- **Pilot-scale gravity fill (100 L)**: 30 -- 180 min
- **SBR fill fraction**: 1 -- 15% of total cycle time
- **Recommended maximum fill time**: < 10% of batch duration

## Measurement Methods

- **Timed Pump Operation**: The pump is started and the time to reach the target liquid level (measured by visual observation, level switch, or level sensor) is recorded. For pump-driven fill at a known flow rate, fill time = target volume / pump flow rate. Precision: +/- 5 s for manual timing, +/- 0.1 s for automated level-switch-triggered timing.
- **Level Sensor Monitoring**: Continuous monitoring of liquid level using an ultrasonic, capacitive, or pressure-based level sensor provides a real-time fill profile. The fill time is the interval from the start of liquid introduction to the point where the target level is reached. This method also reveals the fill rate profile (constant vs. decelerating for gravity fill).
- **Volumetric Flow Integration**: An in-line flow meter records cumulative volume during the fill phase. Fill time is the duration from first flow to the point where cumulative volume equals the target fill volume. This method is more accurate than level measurement for complex geometries.

## Affecting Factors

### Primary

- **Pump Capacity**: Higher pump flow rates reduce fill time proportionally. A 50 mL/min peristaltic pump fills a 250 mL reactor in 5 min; a 500 mL/min pump fills it in 30 s.
- **Feed Line Diameter and Length**: Narrow or long feed lines create flow resistance. For gravity-fed systems, doubling the feed line diameter increases fill rate by approximately 4x (Hagen-Poiseuille law).
- **Reactor Volume**: Fill time scales linearly with target volume at constant pump flow rate. Scaling from 250 mL lab to 250 L pilot at the same pump-to-volume ratio maintains the same fill time fraction.
- **Fill Strategy**: Instant fill minimizes fill time but creates hydraulic shock. Step fill extends fill time by 5--20x but improves substrate distribution and reduces biofilm stress.
- **Backpressure**: Gas accumulation in the headspace or high outlet backpressure slows the fill rate, extending fill time by 10--30%.

## Related Parameters

- **name**: [Drain Time](drain-time.md)

- **relationship**: Complementary phase at cycle end
- **name**: [Idle Time](idle-time.md)

- **relationship**: Duration between drain and fill
- **name**: [Batch Duration](batch-duration.md)

- **relationship**: Total cycle time including fill
- **name**: [Batch Volume](batch-volume.md)

- **relationship**: Target volume to be filled
- **name**: [Pump Capacity](pump-capacity.md)

- **relationship**: Maximum pump flow rate

## Compatible Systems

Operating Modes

## References

- Ahn, Y., Logan, B.E. (2013). "Domestic wastewater treatment using multi-electrode continuous flow MFCs with a separator electrode assembly design." Applied Microbiology and Biotechnology, 97(1), 409-416.
- Tchobanoglous, G., Burton, F.L., Stensel, H.D. (2003). Wastewater Engineering: Treatment and Reuse, 4th ed. McGraw-Hill.
- Wilderer, P.A. et al. (2001). "Sequencing batch reactor technology." IWA Publishing.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Fill+Time&body=**Parameter%3A**+Fill+Time%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Ffill-time.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Fill+Time&body=**Parameter%3A**+Fill+Time%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Ffill-time.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Fill+Time&body=**Parameter%3A**+Fill+Time%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Ffill-time.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
