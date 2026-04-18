# Batch Volume

Batch volume is the total liquid volume of electrolyte or wastewater processed during a single batch cycle in a microbial electrochemical system (MES). This parameter defines the working volume of the reactor chamber that is filled, treated, and subsequently drained or replaced at the end of each operational cycle. In dual-chamber MFCs, batch volume refers specifically to the anolyte volume unless otherwise stated, as the catholyte volume is typically managed independently.

The batch volume directly determines the organic loading per cycle (when multiplied by substrate concentration), the hydraulic characteristics of the reactor, and the ratio of electrode surface area to liquid volume (a critical scaling parameter). Small batch volumes (< 50 mL) are typical of laboratory screening studies where material costs and substrate availability constrain reactor size, while pilot-scale systems may operate with batch volumes of 1--1000 L. The relationship between batch volume and electrode area (often expressed as the specific surface area, m^2/m^3) is a key determinant of volumetric power density.

In fed-batch configurations, the batch volume may change dynamically during a cycle as fresh substrate is periodically added without complete replacement. Understanding the distinction between total reactor volume, working volume, and headspace volume is essential for accurate reporting and cross-study comparison. The batch volume also affects mass transfer characteristics, with larger volumes potentially creating concentration gradients that reduce bioelectrochemical performance near the electrode surface.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Operational |
| **Subcategory** | Batch Operation |
| **Type** | number |
| **Unit** | L |
| **Minimum** | 0.1 |
| **Maximum** | 10000 |
| **Papers Reporting** | 140 |

## Typical Values

- **Valid Range**: 0.001 -- 10000 L
- **Miniature/microfluidic MFC**: 0.001 -- 0.1 mL
- **Lab-scale single-chamber MFC**: 12 -- 130 mL
- **Lab-scale dual-chamber MFC**: 50 -- 500 mL (per chamber)
- **Lab-scale MEC**: 25 -- 300 mL
- **Bench-scale MFC**: 0.5 -- 10 L
- **Pilot-scale MFC/MEC**: 10 -- 1000 L
- **MDC lab-scale**: 20 -- 200 mL (desalination chamber)

## Measurement Methods

- **Gravimetric Method**: The reactor is filled to its operating level and the liquid mass is measured using an analytical balance (precision +/- 0.01 g for lab scale, +/- 1 g for bench scale). Volume is calculated from mass using the liquid density (approximately 1.00 g/mL for dilute wastewater, corrected for salinity in MDC applications). This method provides accuracy of +/- 0.5% for volumes above 100 mL.
- **Volumetric Displacement**: The reactor is filled using a calibrated graduated cylinder or volumetric flask. For irregular reactor geometries, volume can be determined by filling with water and measuring the dispensed volume. Precision is +/- 1% for volumes above 50 mL using Class A volumetric glassware.
- **CAD-Based Calculation**: For reactors with well-defined geometries, the working volume is calculated from computer-aided design (CAD) dimensions, accounting for internal components (electrodes, membranes, gaskets, ports). This approach requires subtraction of electrode volume and membrane support structures. Accuracy depends on manufacturing tolerances, typically +/- 2--5%.

## Affecting Factors

### Primary

- **Reactor Design and Geometry**: The physical dimensions of the reactor chamber set the maximum batch volume. Single-chamber bottle-type MFCs commonly use 125--250 mL media bottles (28 mL working volume with brush anodes). Cube-type reactors typically range from 12--130 mL.
- **Electrode Configuration**: The volume occupied by electrodes reduces the effective liquid volume. Carbon brush anodes can displace 10--30% of the geometric chamber volume. Packed-bed configurations with granular carbon may displace 40--60% of the chamber volume.
- **Scaling Objectives**: Pilot-scale demonstrations require batch volumes 10--1000 times larger than lab-scale, but maintaining the same electrode-area-to-volume ratio is critical for performance translation.
- **Headspace Requirements**: In MECs producing hydrogen gas, headspace volume (typically 10--30% of total reactor volume) must be maintained above the liquid level, reducing the available batch volume relative to total reactor volume.
- **Sampling Requirements**: Each liquid sample withdrawn (typically 1--5 mL) reduces batch volume and can introduce systematic error if cumulative sampling exceeds 10% of the initial batch volume.

## Related Parameters

- **name**: [Batch Duration](batch-duration.md)

- **relationship**: Duration of processing for each batch volume
- **name**: [Device Volume](device-volume.md)

- **relationship**: Total geometric volume of the reactor
- **name**: [Initial Volume](initial-volume.md)

- **relationship**: Starting liquid volume at cycle initiation
- **name**: [Final Volume](final-volume.md)

- **relationship**: Ending liquid volume at cycle termination
- **name**: [Flowrate](flowrate.md)

- **relationship**: Volumetric flow rate in continuous mode
- **name**: [Inoculum Volume](inoculum-volume.md)

- **relationship**: Volume of microbial inoculum added

## Compatible Systems

Operating Modes

## References

- Logan, B.E. et al. (2006). "Microbial fuel cells: methodology and technology." Environmental Science & Technology, 40(17), 5181-5192.
- Cheng, S., Liu, H., Logan, B.E. (2006). "Increased performance of single-chamber microbial fuel cells using an improved cathode structure." Electrochemistry Communications, 8(3), 489-494.
- Call, D., Logan, B.E. (2008). "Hydrogen production in a single chamber microbial electrolysis cell lacking a membrane." Environmental Science & Technology, 42(9), 3401-3406.
- Sleutels, T.H.J.A. et al. (2012). "Bio-electrochemical systems: An outlook for practical applications." ChemSusChem, 5(6), 1012-1019.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Batch+Volume&body=**Parameter%3A**+Batch+Volume%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fbatch-volume.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Batch+Volume&body=**Parameter%3A**+Batch+Volume%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fbatch-volume.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Batch+Volume&body=**Parameter%3A**+Batch+Volume%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fbatch-volume.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
