# Stack Footprint

Stack footprint is the planar area occupied by a microbial electrochemical system stack when viewed from above, typically expressed in square centimeters. This parameter captures the horizontal space requirement for installation and is critical for comparing MES technologies with conventional wastewater treatment systems, evaluating space-constrained deployment scenarios (e.g., urban installations, shipboard treatment), and calculating areal power density (W/m^2 of footprint). Footprint includes the reactor stack itself plus any essential peripheral components (manifolds, endplates, clamping hardware) but excludes external piping, pumps, and control systems.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Reactor Design |
| **Subcategory** | Stack Geometry |
| **Type** | number |
| **Unit** | cm² |
| **Minimum** | 100 |
| **Maximum** | 10000 |

## Typical Values

- **text**: | Scale | Footprint Range | Typical Configuration |
|-------|----------------|----------------------|
| Lab-scale single cell | 10 - 100 cm^2 | H-cell, flat plate, or tubular |
| Lab-scale stack (4-10 cells) | 100 - 1,000 cm^2 | Plate-and-frame or tubular bundle |
| Pilot-scale stack | 1,000 - 50,000 cm^2 | Modular plate-and-frame or cassette |
| Industrial-scale installation | 50,000 - 1,000,000 cm^2 | Multiple stacks with manifolding |

**Areal performance benchmarks (per m^2 footprint):**
- MFC power density: 0.5 - 5 W/m^2 (pilot scale)
- MFC treatment rate: 0.5 - 5 kg COD/m^2/day
- Conventional activated sludge: 0.1 - 0.5 kg COD/m^2/day (comparable footprint but taller)

## Measurement Methods

- **1. **Direct measurement**: Measure the length and width of the stack base including endplates and clamping hardware. For circular cross-sections, measure the outer diameter.**: 2. **CAD model extraction**: Extract the bounding box dimensions from the 3D design model, projecting onto the horizontal plane. 3. **Installation survey**: For existing installations, survey the actual floor space occupied including required maintenance clearance (typically 0.5-1 m on accessible sides). 4. **Areal normalization**: Calculate specific footprint as cm^2 per L of treated wastewater per day, or cm^2 per mW of power output, to enable technology comparisons.

## Affecting Factors

- **text**: - **Cell geometry**: Flat plate designs are more compact than tubular designs for the same electrode area, but tubular designs may have better hydraulic characteristics.
- **Stack height vs. footprint tradeoff**: Taller stacks reduce footprint but increase structural and hydraulic challenges (pressure drop, flow distribution).
- **Electrode area**: Larger electrode areas per cell increase the footprint per cell but improve power output.
- **Manifold design**: Internal vs. external manifolding significantly affects footprint. Internal manifolds (ports through the stack) reduce external piping space.
- **Number of stacks**: Multiple parallel stacks with walkways between them can double or triple the total installation footprint.
- **Maintenance access requirements**: Industrial installations must include clearance for cell replacement, membrane servicing, and inspection access.
- **Ancillary equipment**: Pumps, heat exchangers, gas collection systems, and power conditioning equipment can exceed the stack footprint by 50-200%.

## Compatible Systems

Multi Cell Stack Configuration

## References

1. Logan, B.E., Wallack, M.J., Kim, K.Y., He, W., Feng, Y., & Saikaly, P.E. (2015). Assessment of microbial fuel cell configurations and power densities. *Environmental Science & Technology Letters*, 2(8), 206-214.
2. Ge, Z., & He, Z. (2016). Long-term performance of a 200 liter modularized microbial fuel cell system treating municipal wastewater: treatment, energy, and cost. *Environmental Science: Water Research & Technology*, 2(2), 274-281.
3. Heidrich, E.S., Edwards, S.R., Dolfing, J., Cotterill, S.E., & Curtis, T.P. (2014). Performance of a pilot scale microbial electrolysis cell fed on domestic wastewater at ambient temperatures. *Bioresource Technology*, 173, 87-95.
4. Janicek, A., Fan, Y., & Liu, H. (2014). Design of microbial fuel cells for practical application: a review and analysis of scale-up studies. *Biofuels*, 5(1), 79-92.
5. Wang, H., & Ren, Z.J. (2013). A comprehensive review of microbial electrochemical systems as a platform technology. *Biotechnology Advances*, 31(8), 1796-1807.

---

*Parameter documentation for the MESS (Microbial Electrochemical Systems Standardization) framework.*

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Stack+Footprint&body=**Parameter%3A**+Stack+Footprint%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fstack-footprint.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Stack+Footprint&body=**Parameter%3A**+Stack+Footprint%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fstack-footprint.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Stack+Footprint&body=**Parameter%3A**+Stack+Footprint%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fstack-footprint.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
