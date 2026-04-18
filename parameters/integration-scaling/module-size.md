# Module Size

Module size refers to the dimensions and volume of an individual modular unit within a scaled microbial electrochemical system (MES). As MES technology moves from laboratory proof-of-concept toward practical deployment, the numbering-up strategy (replicating identical small modules in parallel) has emerged as the preferred scaling approach. Module size determines the unit's treatment capacity, electrode area, power output, and manufacturing/maintenance requirements.

The choice of module size reflects a fundamental engineering trade-off. Smaller modules (0.1--1 L) maintain the high electrode-area-to-volume ratios that produce the best performance at lab scale but require more interconnections, plumbing, and control complexity when assembled into large systems. Larger modules (10--100 L) reduce system complexity and interconnection losses but suffer from increased electrode spacing, non-uniform current distribution, and mass transfer limitations that reduce volumetric performance by 30--70% compared to optimized lab-scale geometries.

Current pilot installations have converged on module sizes of 1--20 L as a practical compromise, with individual modules containing 0.01--1 m^2 of electrode area. The Liang et al. (2018) 1000-L system used 50 modules of 20 L each. The optimal module size depends on the target application, manufacturing capabilities, and the acceptable performance-complexity trade-off.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Integration Scaling |
| **Subcategory** | Modular Design |
| **Type** | number |
| **Unit** | kW |
| **Minimum** | 0.1 |
| **Maximum** | 1000 |

## Typical Values

- **Valid Range**: 0.01 -- 1000 L per module
- **Lab-scale module**: 0.01 -- 0.5 L
- **Bench-scale module**: 0.5 -- 5 L
- **Pilot-scale module**: 1 -- 50 L
- **Commercial target module**: 5 -- 200 L
- **Electrode area per module**: 0.001 -- 10 m^2
- **Module footprint**: 0.01 -- 1 m^2
- **Weight per module (filled)**: 0.1 -- 200 kg

## Measurement Methods

- **Geometric Specification**: Module size is specified during design as the external dimensions (L x W x H) and total/working volume. CAD models provide precise geometric data. Manufacturing tolerance: +/- 1 mm for machined parts, +/- 2--5 mm for molded parts.
- **Performance Characterization**: Each module's performance (maximum power density, COD removal rate, coulombic efficiency) is measured individually before assembly into the full system. Module-to-module variability of < 20% (coefficient of variation) in power output indicates acceptable manufacturing consistency.

## Affecting Factors

### Primary

- **Electrode Spacing**: Smaller modules maintain short electrode spacing (1--5 cm) that minimizes ohmic losses. Larger modules tend to have larger spacing (5--20 cm) due to structural constraints.
- **Manufacturing Method**: Injection molding enables mass production of identical modules at $1--10/unit. CNC machining of acrylic is suitable for prototypes at $50--500/unit.
- **Maintenance Access**: Modules must be individually removable for electrode/membrane replacement without shutting down the entire system. Standardized quick-connect fittings facilitate module swapping.
- **Transport and Handling**: Modules must be transportable by 1--2 workers (< 25 kg filled). Larger modules require mechanical handling equipment.

## Related Parameters

- **name**: [Modules Per System](modules-per-system.md)

- **relationship**: Total number of modules
- **name**: [Device Volume](device-volume.md)

- **relationship**: Per-module volume
- **name**: [Reactor Count](reactor-count.md)

- **relationship**: Total reactors in the system
- **name**: [Pilot-to-Industrial Factor](pilot-to-industrial-factor.md)

- **relationship**: Scaling from pilot modules

## Compatible Systems

Multi Scale Integration

## References

- Liang, P. et al. (2018). "One-year operation of 1000-L modularized microbial fuel cell." Water Research, 141, 1-8.
- Zhuang, L. et al. (2012). "Scalable microbial fuel cell (MFC) stack for continuous real wastewater treatment." Bioresource Technology, 106, 82-88.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Module+Size&body=**Parameter%3A**+Module+Size%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fmodule-size.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Module+Size&body=**Parameter%3A**+Module+Size%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fmodule-size.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Module+Size&body=**Parameter%3A**+Module+Size%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fmodule-size.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
