# Stack Height

Stack height is the total vertical dimension of an assembled microbial electrochemical system stack, measured from the base of the bottom endplate to the top of the upper endplate, including all cells, gaskets, membranes, bipolar plates, and compression hardware. This parameter directly affects the structural design, hydraulic head requirements, installation logistics, and the trade-off between footprint and vertical space utilization. In gravity-fed systems, stack height determines the available pressure head, while in pressurized systems, it influences the hydrostatic pressure gradient across cell components.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Reactor Design |
| **Subcategory** | Stack Geometry |
| **Type** | number |
| **Unit** | mm |
| **Minimum** | 50 |
| **Maximum** | 2000 |

## Typical Values

- **text**: | Configuration | Height Range | Notes |
|--------------|-------------|-------|
| Single flat-plate cell | 10 - 50 mm | Minimal height, research scale |
| Small lab stack (4-6 cells) | 50 - 200 mm | Bench-scale research |
| Medium lab stack (8-20 cells) | 200 - 600 mm | Process optimization |
| Pilot-scale stack (20-50 cells) | 500 - 2000 mm | Field demonstrations |
| Industrial-scale stack (50+ cells) | 1000 - 5000 mm | Full-scale installations |

**Component contributions to height per cell:**
- Electrode chamber (anode or cathode): 5 - 30 mm
- Membrane: 0.1 - 0.5 mm
- Gaskets (per side): 0.5 - 3 mm
- Bipolar plate/current collector: 1 - 5 mm
- Total per cell repeat unit: 12 - 70 mm typical

## Measurement Methods

- **1. **Direct measurement**: Use a measuring tape, calipers, or height gauge to measure the assembled stack from base to top of the clamping hardware.**: 2. **Component summation**: Calculate from the sum of individual component thicknesses: H_stack = 2 * t_endplate + n * (t_anode_chamber + t_cathode_chamber + t_membrane + 2 * t_gasket + t_bipolar_plate), where n is the number of cell repeat units. 3. **CAD model**: Extract total height from the assembly drawing or 3D model, which should account for compression deflection of soft components. 4. **Compression-corrected measurement**: Measure at the target compression pressure, as compressed gaskets and porous electrodes can reduce total height by 5-15% compared to uncompressed assembly.

## Affecting Factors

- **text**: - **Number of cells**: Each additional cell adds one repeat unit thickness (typically 12-70 mm) to the total height.
- **Electrode thickness**: Thicker 3D electrodes (carbon felt: 3-10 mm, brush: 15-50 mm diameter) increase the chamber height per cell.
- **Chamber design**: Flow-through vs. flow-by configurations have different height requirements. Flow-through chambers are typically thinner.
- **Compression level**: Applied compression reduces total stack height by compressing gaskets and porous materials. A 10-80 N/cm^2 compression can reduce height by 5-15%.
- **Endplate thickness**: Endplates must be sufficiently rigid to distribute compression evenly. Typical endplate thickness is 10-30 mm (polymer) or 5-20 mm (metal).
- **Manifold design**: Internal manifolding adds port features to cell frames, potentially increasing per-cell thickness by 2-10 mm.
- **Thermal expansion**: Operating temperature changes can alter stack height by 0.1-0.5% through thermal expansion of polymeric components.

## Compatible Systems

Multi Cell Stack Configuration

## References

1. Dekker, A., Ter Heijne, A., Saakes, M., Hamelers, H.V.M., & Buisman, C.J.N. (2009). Analysis and improvement of a scaled-up and stacked microbial fuel cell. *Environmental Science & Technology*, 43(23), 9038-9042.
2. Barbir, F. (2012). *PEM Fuel Cells: Theory and Practice* (2nd ed.). Academic Press.
3. Zhuang, L., Zheng, Y., Zhou, S., Yuan, Y., Yuan, H., & Chen, Y. (2012). Scalable microbial fuel cell (MFC) stack for continuous real wastewater treatment. *Bioresource Technology*, 106, 82-88.
4. Kim, Y., Hatzell, M.C., Hutchinson, A.J., & Logan, B.E. (2011). Capturing power at higher voltages from arrays of microbial fuel cells without voltage reversal. *Energy & Environmental Science*, 4(11), 4662-4667.
5. Liang, P., Duan, R., Jiang, Y., Zhang, X., Qiu, Y., & Huang, X. (2018). One-year operation of 1000-L modularized microbial fuel cell for municipal wastewater treatment. *Water Research*, 141, 1-8.

---

*Parameter documentation for the MESS (Microbial Electrochemical Systems Standardization) framework.*

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Stack+Height&body=**Parameter%3A**+Stack+Height%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fstack-height.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Stack+Height&body=**Parameter%3A**+Stack+Height%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fstack-height.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Stack+Height&body=**Parameter%3A**+Stack+Height%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fstack-height.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
