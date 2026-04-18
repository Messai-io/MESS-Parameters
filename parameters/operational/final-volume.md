# Final Volume

Final volume is the liquid volume remaining in a microbial electrochemical system (MES) reactor at the end of a batch cycle, after the drain phase is completed. Also referred to as residual volume, heel volume, or dead volume, this parameter represents the fraction of reactor contents that is intentionally or unavoidably retained between successive batch cycles. The final volume is a critical operational parameter because it determines the degree of substrate carryover, the retention of microbial biomass in the bulk liquid, and the dilution factor experienced by the biofilm when fresh medium is introduced.

In most MES operations, a deliberate residual volume of 10--30% of the working volume is retained to serve as microbial inoculum for the next cycle, maintain hydration of the anode biofilm (preventing desiccation and irreversible damage), and prevent air intrusion into the anolyte chamber. Zero final volume (complete drainage) is generally avoided because it exposes the biofilm to air, causes drying stress, and requires a re-acclimation period that can extend the next batch cycle by 50--200%.

The ratio of final volume to initial volume (retention ratio) defines the effective exchange ratio per cycle. A 20% retention ratio means 80% of the reactor contents are replaced each cycle, equivalent to approximately 5 complete volume exchanges to achieve 99% concentration change of a non-reactive species. This parameter is particularly important in MES treating wastewater with accumulating inhibitors (e.g., ammonia, salts) where insufficient exchange can lead to progressive inhibitor buildup.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Operational |
| **Subcategory** | Fed-Batch Operation |
| **Type** | number |
| **Unit** | L |
| **Minimum** | 0.2 |
| **Maximum** | 10000 |
| **Papers Reporting** | 7 |

## Typical Values

- **Valid Range**: 0 -- 90% of initial volume
- **Typical lab MFC retention ratio**: 5 -- 30%
- **SBR-mode MFC**: 20 -- 50% retention
- **Pilot-scale MFC**: 10 -- 25% retention
- **Complete drain (not recommended)**: 0%
- **Typical absolute volumes (lab, 28 mL reactor)**: 1 -- 8 mL
- **Typical absolute volumes (pilot, 100 L reactor)**: 10 -- 25 L

## Measurement Methods

- **Gravimetric Method**: After the drain phase, the reactor (with retained liquid) is weighed. The difference between the total weight and the empty reactor weight gives the mass of retained liquid. Volume is calculated from mass using liquid density. Precision: +/- 0.1 mL for lab scale.
- **Level Measurement**: A ruler, dipstick, or level sensor measures the liquid level after drainage. Volume is calculated from level using the reactor's geometry-volume relationship (cross-sectional area x height for uniform cross-section). Precision: +/- 1 mm for ruler measurement.
- **Volume Displacement**: After draining and before refilling, a known volume of water is added to bring the level to a reference mark. The difference between the reference volume and the added volume is the final volume. Precision: +/- 1% using calibrated additions.

## Affecting Factors

### Primary

- **Drain Port Location**: The vertical position of the drain port relative to the reactor bottom determines the minimum achievable final volume. A drain port at the bottom allows near-complete drainage; a port 2 cm above the bottom retains 10--20% of volume in shallow reactors.
- **Electrode and Membrane Geometry**: Electrodes and membrane supports that extend below the drain port trap liquid, increasing the unavoidable final volume. Carbon brush anodes can retain 5--15 mL of liquid within their fiber structure.
- **Biofilm Hydration Requirements**: The anode biofilm must remain submerged or at minimum saturated with liquid. Complete drainage exposes the biofilm to air and desiccation, causing 20--80% performance loss requiring 2--5 cycles for recovery.
- **Inhibitor Accumulation**: In wastewater treatment, accumulation of ammonia, volatile fatty acids, or salts in the residual volume can progressively inhibit performance. Higher exchange ratios (lower final volume fraction) mitigate this but increase fresh substrate consumption.
- **Surface Tension and Capillary Effects**: At small scales (< 50 mL), surface tension effects in tubing, ports, and electrode structures can retain 1--5 mL of liquid beyond the geometric drain capacity, representing a significant fraction of total volume.

## Related Parameters

- **name**: [Initial Volume](initial-volume.md)

- **relationship**: Starting volume at cycle beginning
- **name**: [Batch Volume](batch-volume.md)

- **relationship**: Total volume processed per cycle
- **name**: [Drain Time](drain-time.md)

- **relationship**: Duration of the drain phase
- **name**: [Fill Time](fill-time.md)

- **relationship**: Duration of the fill phase
- **name**: [Device Volume](device-volume.md)

- **relationship**: Total reactor geometric volume

## Compatible Systems

Operating Modes

## References

- Cheng, S., Liu, H., Logan, B.E. (2006). "Increased performance of single-chamber microbial fuel cells using an improved cathode structure." Electrochemistry Communications, 8(3), 489-494.
- Liu, H., Cheng, S., Logan, B.E. (2005). "Power generation in fed-batch microbial fuel cells." Environmental Science & Technology, 39(14), 5488-5493.
- Tchobanoglous, G. et al. (2003). Wastewater Engineering: Treatment and Reuse, 4th ed. McGraw-Hill.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Final+Volume&body=**Parameter%3A**+Final+Volume%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Ffinal-volume.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Final+Volume&body=**Parameter%3A**+Final+Volume%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Ffinal-volume.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Final+Volume&body=**Parameter%3A**+Final+Volume%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Ffinal-volume.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
