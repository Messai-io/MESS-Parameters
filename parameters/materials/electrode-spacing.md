# Electrode Spacing

Electrode spacing is the distance between the anode and cathode electrodes in a microbial electrochemical system (MES), typically measured as the shortest path through the electrolyte from the anode surface to the cathode surface (or to the membrane surface in dual-chamber configurations). This parameter is one of the most influential geometric variables in MES design because it directly determines the ohmic resistance of the electrolyte path, which constitutes 30-70% of total internal resistance in most MFC configurations.

The ohmic voltage loss through the electrolyte follows Ohm's law: V_ohmic = j x d / kappa, where j is the current density (A/m2), d is the electrode spacing (m), and kappa is the electrolyte conductivity (S/m). For a typical MFC electrolyte (50 mM PBS, kappa ~ 0.7 S/m) operating at 5 A/m2 with 2 cm electrode spacing, the ohmic loss is approximately 143 mV -- a significant fraction of the available open-circuit voltage (typically 0.5-0.8 V). Reducing the spacing to 1 cm halves this loss to ~71 mV, potentially increasing achievable power density by 20-40%.

However, minimizing electrode spacing introduces competing challenges. Very close electrode placement (<0.5 cm) increases oxygen crossover from cathode to anode in air-cathode MFCs, reducing coulombic efficiency. It also limits the volume available for electrolyte flow and biofilm development, potentially starving the biofilm of substrate. In some configurations, direct physical contact between anode biofilm and cathode surface can cause short-circuiting. The optimal electrode spacing therefore represents an engineering trade-off between minimizing ohmic losses and maintaining adequate mass transport, oxygen management, and biological function.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Materials |
| **Type** | number |
| **Unit** | cm |
| **Papers Reporting** | 1 |

## Typical Values

- **Valid Range**: 0.1 - 20 cm
- **Typical Range**: 0.5 - 4 cm
- **Single-Chamber Air-Cathode MFC (optimized)**: 0.5 - 2 cm
- **Dual-Chamber H-Cell (research)**: 5 - 15 cm (including bridge tube)
- **Flat-Plate MFC**: 0.5 - 4 cm
- **Tubular MFC (concentric electrode)**: 1 - 5 cm
- **Membrane-Electrode Assembly (MEA)**: 0 cm (direct contact)
- **Pilot-Scale MFC**: 1 - 6 cm
- **MDC (three-chamber)**: 1 - 3 cm per chamber

## Measurement Methods

- **Direct Physical Measurement**: Vernier caliper or precision ruler measurement of the gap between electrode faces in assembled reactors. For non-uniform geometries (brush anode to flat cathode), measure the minimum, maximum, and average distances. Precision: +/- 0.1 mm with digital calipers. Account for electrode compression (carbon felt) and biofilm thickness (which effectively reduces spacing by 0.05-0.2 mm).
- **EIS-Derived Effective Spacing**: From EIS measurements, the high-frequency intercept (R_ohm) combined with known electrolyte conductivity (kappa) and electrode area (A) allows calculation of effective electrode spacing: d_eff = R_ohm x kappa x A. This accounts for the actual ionic path length, which may differ from the physical spacing due to membrane resistance, non-uniform current distribution, and electrolyte in tortuous paths. Provides a functionally relevant spacing metric.
- **CFD Simulation of Current Distribution**: Computational models calculate the actual current path lengths and distribution in complex 3-D electrode configurations. The current-weighted average path length provides the effective electrode spacing. Particularly useful for non-planar geometries (brush in cylinder, serpentine channels) where physical measurement is ambiguous.

## Affecting Factors

### Primary

- **Electrolyte Conductivity**: The impact of electrode spacing on ohmic loss scales inversely with conductivity. In high-conductivity electrolytes (100 mM PBS, kappa ~ 1.5 S/m), spacing can be 2-3x larger for the same ohmic loss compared to low-conductivity electrolytes (10 mM PBS, kappa ~ 0.15 S/m). Wastewater conductivity varies widely (0.1-10 S/m), dictating the spacing sensitivity.
- **Oxygen Crossover**: In air-cathode MFCs, reducing spacing from 4 cm to 1 cm increases oxygen diffusion flux to the anode by 4x (inverse relationship with distance for diffusion). This can reduce coulombic efficiency from 60-80% to 30-50%. Membrane or separator insertion between closely spaced electrodes mitigates crossover but adds material cost and resistance.
- **Biofilm Accommodation**: Mature anode biofilms can be 50-200 um thick. In very tight spacing (<5 mm), biofilm growth can bridge the gap between electrodes, causing short circuits and biofilm compression. Minimum practical spacing should exceed 3-5x the expected biofilm thickness, suggesting >1 mm even for thin biofilms.
- **Flow Distribution**: Narrow electrode gaps create high-velocity flow channels (Poiseuille flow: velocity proportional to gap^2 for fixed flow rate). This can be beneficial (enhanced mass transport) or detrimental (excessive shear stripping biofilm). Optimal shear stress at the anode biofilm surface: 0.01-0.1 Pa; achieving this requires matching flow rate to gap geometry.
- **Current Density**: Ohmic losses scale linearly with current density. At low current densities (<1 A/m2), spacing has minimal impact on performance. At high current densities (>10 A/m2), every millimeter of reduced spacing provides measurable power improvement. High-performance systems operating at peak current densities benefit most from spacing optimization.
- **Scale-Up Uniformity**: In large-area electrodes (>100 cm2), maintaining uniform spacing across the entire electrode surface is challenging. Manufacturing tolerances, thermal expansion, and pressure-induced deflection can cause +/- 1-3 mm variation. Non-uniform spacing creates current distribution heterogeneity, with disproportionate current flowing through regions of minimum spacing.

## Compatible Systems

Electrode Geometry

## References

- Liu, H., et al. (2005). "Effect of electrode spacing on performance of single-chamber air-cathode MFCs." *Environmental Science & Technology*, 39, 5488-5493. DOI: 10.1021/es050316c
- Cheng, S., et al. (2006). "Increased performance of single-chamber MFCs using improved cathode structure." *Electrochemistry Communications*, 8, 489-494. DOI: 10.1016/j.elecom.2006.01.010
- Fan, Y., et al. (2007). "Enhanced Coulombic efficiency and power density of air-cathode microbial fuel cells." *Energy & Environmental Science*, 1, 320-327.
- Logan, B.E. (2008). *Microbial Fuel Cells*. John Wiley & Sons. ISBN: 978-0-470-23948-3

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Electrode+Spacing&body=**Parameter%3A**+Electrode+Spacing%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Felectrode-spacing.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Electrode+Spacing&body=**Parameter%3A**+Electrode+Spacing%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Felectrode-spacing.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Electrode+Spacing&body=**Parameter%3A**+Electrode+Spacing%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Felectrode-spacing.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
