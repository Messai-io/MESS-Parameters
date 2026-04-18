# Reactor Height

Reactor height specifies the internal vertical dimension of a single microbial electrochemical system (MES) reactor chamber, measured in centimeters. This parameter determines the hydrostatic pressure gradient across the reactor depth, influences gas bubble behavior and release dynamics, governs the vertical distribution of biofilm and substrate, and affects the overall reactor volume in conjunction with length and width.

In MES design, reactor height has specific implications for gas management and flow patterns. Upflow reactors with significant height develop hydrostatic pressure that affects gas holdup and bubble release from electrode surfaces. Tall narrow reactors promote plug-flow hydraulics, while short wide reactors tend toward well-mixed behavior. For air-cathode MFCs, reactor height determines the cathode-to-liquid interface depth and influences oxygen diffusion patterns into the electrolyte.

The aspect ratio (height-to-diameter or height-to-width ratio) is a critical design parameter derived from reactor height. High aspect ratios (>2:1) in cylindrical reactors promote efficient gas-liquid separation at the top and create beneficial concentration gradients for staged treatment. Low aspect ratios (<0.5:1) minimize hydrostatic pressure variation and simplify electrode installation but may create dead zones in corners.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Materials |
| **Type** | number |
| **Unit** | cm |
| **Papers Reporting** | 48 |

## Typical Values

- **Valid Range**: 0.5 cm to 300 cm
- **Typical Range**: 2 cm to 100 cm
- **Micro-MFC (microfluidic)**: 0.05-0.5 cm
- **Lab H-cell**: 5-15 cm
- **Lab flat-plate MFC**: 2-10 cm
- **Lab single-chamber MFC**: 3-15 cm
- **Pilot tubular MFC**: 30-100 cm
- **Pilot flat-plate stack**: 10-50 cm per cell
- **Industrial upflow reactor**: 100-300 cm
- **Aspect ratio (height/width) for flat plate**: 0.5-2.0

## Measurement Methods

- **Direct Physical Measurement**: Internal height is measured using calipers, depth gauges, or measuring rods inserted through access ports. Measurements are taken from the internal bottom surface to the liquid overflow level (working height) or to the top of the internal chamber (total height). Precision: +/- 0.1 cm for calipers, +/- 0.5 cm for tape measurement.
- **Engineering Drawing Extraction**: Height is specified in CAD models and manufacturing drawings with tolerances. As-built dimensions are verified against drawings during commissioning.
- **Liquid Fill Verification**: The reactor is filled with water to the operating level and the height is measured from external markings calibrated during construction. This method provides the effective working height rather than the total chamber height.

## Affecting Factors

### Primary

- **Hydrostatic pressure**: Each centimeter of water height adds ~98 Pa (0.001 atm) of pressure. At 100 cm height, the bottom experiences ~10 kPa additional pressure, which can affect gas solubility and membrane performance.
- **Gas management**: In MEC hydrogen production, taller reactors increase the gas residence time and may promote gas supersaturation. Gas collection headers at the top require adequate height for gas-liquid separation.
- **Flow pattern**: Reactor height relative to inlet/outlet positioning determines whether flow is primarily horizontal or vertical, plug-flow or well-mixed, and affects dead zone formation.
- **Electrode installation**: Maximum electrode height is constrained by current collector placement and the ability to maintain uniform current distribution. Tall electrodes may require distributed current collectors every 20-50 cm.
- **Structural requirements**: Taller reactors require thicker walls and stronger support structures to resist hydrostatic pressure. The relationship follows thin-wall pressure vessel theory where required wall thickness increases linearly with height.

## Compatible Systems

Reactor Geometry

## References

1. Logan, B.E. "Microbial Fuel Cells." John Wiley & Sons, 2008.
2. Liu, H. et al. "Production of electricity during wastewater treatment using a single chamber microbial fuel cell." Environmental Science & Technology, 38(7), 2281-2285 (2004).
3. Cheng, S. et al. "Increased performance of single-chamber microbial fuel cells using an improved cathode structure." Electrochemistry Communications, 8(3), 489-494 (2006).
4. Ge, Z. et al. "Long-term performance of a 200 liter modularized microbial fuel cell system." Bioresource Technology, 218, 682-690 (2016).
5. Zhuang, L. et al. "Scalable microbial fuel cell (MFC) stack for continuous real wastewater treatment." Bioresource Technology, 106, 82-88 (2012).

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Reactor+Height&body=**Parameter%3A**+Reactor+Height%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Freactor-height.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Reactor+Height&body=**Parameter%3A**+Reactor+Height%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Freactor-height.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Reactor+Height&body=**Parameter%3A**+Reactor+Height%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Freactor-height.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
