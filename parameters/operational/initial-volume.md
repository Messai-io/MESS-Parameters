# Initial Volume

Initial volume is the liquid volume present in a microbial electrochemical system (MES) reactor at the beginning of a batch cycle, immediately after the fill phase is complete. This volume equals the sum of the residual volume retained from the previous cycle (final volume) and the freshly added feed volume. The initial volume defines the working volume for the upcoming reaction phase and determines the dilution factor for the new substrate relative to any carryover from the prior cycle.

In standard batch operation with no liquid retention, the initial volume equals the total fill volume and the reactor starts with 100% fresh medium. In sequencing batch operation with residual volume retention (typically 10--30%), the initial volume is the sum of retained and fresh volumes, and the effective initial substrate concentration is diluted by the carryover. This dilution effect must be accounted for when calculating organic loading rate, theoretical coulombic yield, and treatment efficiency.

Consistency of initial volume across batch cycles is important for reproducibility of experimental results. Volume variations of > 5% between cycles can introduce systematic bias in performance comparisons. Automated level control (level switch-triggered pump shutoff) provides more consistent initial volumes than manual filling.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Operational |
| **Subcategory** | Fed-Batch Operation |
| **Type** | number |
| **Unit** | L |
| **Minimum** | 0.1 |
| **Maximum** | 1000 |
| **Papers Reporting** | 2 |

## Typical Values

- **Valid Range**: 0.001 -- 10000 L
- **Lab-scale single-chamber MFC (cube)**: 12 -- 28 mL
- **Lab-scale H-type MFC**: 100 -- 300 mL per chamber
- **Lab-scale MEC**: 25 -- 300 mL
- **Bench-scale MFC**: 0.5 -- 10 L
- **Pilot-scale MFC**: 10 -- 1000 L
- **Ratio of initial to device volume**: 0.5 -- 0.95

## Measurement Methods

- **Gravimetric**: Weigh the filled reactor and subtract the empty reactor weight. Volume = mass / density. Precision: +/- 0.1 mL for lab scale on an analytical balance.
- **Level-Based**: Mark the target level on the reactor wall and fill to that mark. Volume is predetermined from the geometry-level calibration. Precision: +/- 1--3% depending on reactor shape and level reading accuracy.
- **Volumetric**: Dispense a known volume from a graduated cylinder or calibrated syringe into the reactor containing the residual volume. Initial volume = residual + dispensed. Precision: +/- 1% using Class A glassware.

## Affecting Factors

### Primary

- **Residual Volume**: The volume retained from the previous cycle determines the starting point. Higher residual retention (30% vs. 10%) reduces the volume of fresh feed that can be added.
- **Fill Method Accuracy**: Manual filling with a graduated cylinder gives +/- 1--5% precision. Automated filling with a level switch gives +/- 1--2%. Syringe pump filling gives +/- 0.5%.
- **Gas Displacement**: During filling, displaced gas (headspace) must exit through a vent. Inadequate venting slows filling and may cause the reactor to pressurize, preventing complete filling to the target volume.
- **Electrode Volume Displacement**: Electrodes and other internals displace liquid. The initial liquid volume is the total chamber volume minus the volume occupied by solid components.
- **Temperature**: Thermal expansion of the liquid (~0.02%/C) causes minor volume changes. At pilot scale, a 10 C temperature difference between stored feed and reactor can cause a measurable volume discrepancy.

## Related Parameters

- **name**: [Final Volume](final-volume.md)

- **relationship**: Residual from previous cycle
- **name**: [Batch Volume](batch-volume.md)

- **relationship**: Total volume processed (initial minus final)
- **name**: [Device Volume](device-volume.md)

- **relationship**: Total reactor geometric volume
- **name**: [Fill Time](fill-time.md)

- **relationship**: Duration to reach initial volume
- **name**: [Inoculum Volume](inoculum-volume.md)

- **relationship**: Portion of initial volume from inoculum

## Compatible Systems

Operating Modes

## References

- Logan, B.E. et al. (2006). "Microbial fuel cells: methodology and technology." Environmental Science & Technology, 40(17), 5181-5192.
- Cheng, S., Liu, H., Logan, B.E. (2006). "Increased performance of single-chamber microbial fuel cells using an improved cathode structure." Electrochemistry Communications, 8(3), 489-494.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Initial+Volume&body=**Parameter%3A**+Initial+Volume%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Finitial-volume.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Initial+Volume&body=**Parameter%3A**+Initial+Volume%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Finitial-volume.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Initial+Volume&body=**Parameter%3A**+Initial+Volume%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Finitial-volume.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
