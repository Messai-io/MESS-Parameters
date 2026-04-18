# Reactor Width

Reactor width specifies the internal lateral dimension of a microbial electrochemical system (MES) reactor chamber perpendicular to the primary flow direction, measured in centimeters. For flat-plate reactors, width is the dimension perpendicular to both the flow direction (length) and the electrode-to-electrode direction (height or depth). For cylindrical tubular reactors, the equivalent parameter is the internal diameter. Width determines the cross-sectional flow area, electrode lateral extent, and uniformity of flow distribution across the reactor face.

In flat-plate MES designs, reactor width is directly proportional to electrode width and thus to the electrode area per unit reactor length. Wider reactors accommodate larger electrodes, increasing current generation capacity, but must maintain uniform flow distribution across the full width to avoid dead zones and channeling along the edges. Computational fluid dynamics (CFD) studies show that width-to-length ratios above 3:1 create significant flow maldistribution with edge velocities 30-50% lower than center velocities unless flow distributor features are incorporated.

For tubular MES designs, the internal diameter (width equivalent) determines the electrode surface area per unit length, the hydraulic diameter for Reynolds number calculation, and the maximum electrode spacing in radial configurations. Smaller diameters reduce internal resistance by shortening the ionic transport path between anode and cathode but limit throughput and increase risk of clogging.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Materials |
| **Type** | number |
| **Unit** | cm |
| **Papers Reporting** | 17 |

## Typical Values

- **Valid Range**: 0.5 cm to 200 cm
- **Typical Range**: 2 cm to 50 cm
- **Lab micro-MFC**: 0.5-3 cm
- **Lab flat-plate MFC**: 3-15 cm
- **Lab H-cell**: 3-10 cm (diameter)
- **Lab tubular MFC**: 2-8 cm (diameter)
- **Pilot flat-plate MFC**: 10-50 cm
- **Pilot tubular MFC**: 5-20 cm (diameter)
- **Industrial flat-plate**: 50-200 cm
- **Width-to-length ratio**: 0.5:1 to 3:1

## Measurement Methods

- **Direct Physical Measurement**: Internal width is measured with calipers (precision +/- 0.05 mm for digital calipers) or measuring tape (+/- 1 mm) at the widest internal dimension perpendicular to the flow direction. Multiple measurements at different heights and along the length verify dimensional uniformity.
- **Engineering Drawing Specification**: Width is defined in the reactor design drawings with manufacturing tolerances. Standard tolerances for machined acrylic: +/- 0.1 mm; for welded stainless steel: +/- 1-2 mm; for molded polymer: +/- 0.5-2 mm.
- **Ultrasonic Internal Measurement**: For assembled reactors where direct access is limited, ultrasonic thickness gauges measure wall-to-wall distance through the reactor wall from the outside. Accuracy: +/- 0.1-0.5 mm depending on wall material and instrument calibration.

## Affecting Factors

### Primary

- **Flow distribution quality**: Wider reactors require more sophisticated inlet manifolds (perforated plates, tapered headers) to distribute flow evenly across the full width. Simple point-source inlets create preferential flow paths.
- **Electrode dimensions**: Standard carbon cloth and carbon paper are commercially available in widths up to 100-150 cm. Custom widths require cutting or seaming, which can affect electrode performance uniformity.
- **Membrane availability**: Ion exchange membranes are manufactured in standard widths (Nafion: up to 30 cm rolls; Fumasep: up to 50 cm). Wider reactors require membrane joining or multiple parallel membrane sections.
- **Structural considerations**: Flat-plate reactors with large widths deflect under internal pressure unless supported by intermediate ribs or adequate wall thickness. Maximum unsupported width depends on wall material and thickness.
- **Manufacturing methods**: CNC machining limits practical single-piece reactor width to the machine bed size (typically 50-100 cm for common equipment). Larger widths require assembly from multiple pieces.

## Compatible Systems

Reactor Geometry

## References

1. Logan, B.E. "Microbial Fuel Cells." John Wiley & Sons, 2008.
2. Cheng, S. et al. "Increased performance of single-chamber microbial fuel cells using an improved cathode structure." Electrochemistry Communications, 8(3), 489-494 (2006).
3. Fan, Y. et al. "Enhanced Coulombic efficiency and power density of air-cathode microbial fuel cells." Journal of Power Sources, 171(2), 348-354 (2007).
4. Wang, J. "Pressure drop and flow distribution in parallel-channel configurations." Journal of Power Sources, 133(2), 252-261 (2004).
5. Ge, Z. et al. "Long-term performance of a 200 liter modularized microbial fuel cell system." Bioresource Technology, 218, 682-690 (2016).

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Reactor+Width&body=**Parameter%3A**+Reactor+Width%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Freactor-width.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Reactor+Width&body=**Parameter%3A**+Reactor+Width%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Freactor-width.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Reactor+Width&body=**Parameter%3A**+Reactor+Width%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Freactor-width.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
