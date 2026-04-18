# Cell Diameter

Cell diameter refers to the internal cross-sectional diameter of a cylindrical microbial electrochemical system (MES) reactor chamber. This dimension is one of the most fundamental geometric parameters in reactor design, directly influencing the electrode area that can be accommodated, the volume-to-surface-area ratio, and the internal flow dynamics. In cylindrical MES configurations---commonly used in tubular microbial fuel cells (MFCs) and certain microbial electrolysis cells (MECs)---the cell diameter determines the distance that substrates and protons must traverse between the anode biofilm and the cathode catalyst layer.

The cell diameter has profound implications for mass transport, ohmic resistance, and ultimately the power output or hydrogen production rate of the system. Larger diameters increase the total reactor volume and potential throughput but also increase the average diffusion path length for protons and substrates, which can elevate internal resistance. Conversely, smaller diameters reduce mass transport limitations but constrain the total electrode surface area and volumetric treatment capacity.

In scaling MES from laboratory to pilot and industrial applications, the selection of cell diameter represents a critical trade-off between maximizing electrode packing density and minimizing transport losses. For microbial desalination cells (MDCs), the diameter also affects the ion exchange membrane area and desalination efficiency. Research has shown that miniaturized cells (diameter less than 25 mm) can achieve exceptionally high power densities on a per-volume basis, while larger-diameter cells (greater than 100 mm) are necessary for practical wastewater treatment throughput.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Reactor Design |
| **Subcategory** | Single Unit Cells |
| **Type** | number |
| **Unit** | mm |
| **Minimum** | 10 |
| **Maximum** | 500 |
| **Papers Reporting** | 106 |

## Typical Values

- **Valid Range**: 5--500 mm
- **Typical Range**: 25--150 mm
- **MFC (Laboratory)**: 25--80 mm (commonly 40--60 mm for single-chamber air-cathode designs)
- **MFC (Pilot-scale)**: 80--300 mm
- **MEC**: 30--100 mm (often constrained by gas collection requirements)
- **MDC**: 40--120 mm (multi-chamber configurations with membrane stacks)
- **Tubular MFC**: 10--50 mm outer diameter for the tubular membrane/cathode assembly
- **Miniature MFC**: 5--25 mm (micro-scale and diagnostic applications)

## Measurement Methods

- **Direct Physical Measurement**: Use precision calipers or an internal bore gauge to measure the internal diameter at multiple points along the cell length. For non-circular cross-sections, measure the equivalent hydraulic diameter. Take at least three measurements at different axial positions to account for manufacturing tolerances. Report the average value with standard deviation.
- **Volumetric Calculation Method**: Fill the reactor chamber with a known liquid (typically deionized water) and measure the total volume using a graduated cylinder. Given the known cell length (L), calculate the diameter from the relationship: d = sqrt(4V / (pi * L)). This method accounts for internal obstructions such as electrode supports or baffles that reduce the effective cross-sectional area.
- **CAD/Design Specification**: For custom-fabricated reactors, extract the nominal diameter from the engineering drawings or CAD models. Verify against as-built dimensions, particularly for 3D-printed or injection-molded reactor bodies where shrinkage during curing can reduce the actual diameter by 1--3% relative to the design specification.

## Affecting Factors

### Primary

- **Electrode Configuration**: The diameter must accommodate the desired electrode geometry---flat plate, brush, granular bed, or tubular. Brush anodes in cylindrical chambers typically require diameters of at least 30 mm for adequate fiber packing.
- **Mass Transport Requirements**: Larger diameters increase the average distance for proton diffusion from the anode biofilm to the cathode, increasing ohmic and concentration overpotentials. The critical diameter beyond which transport losses dominate depends on the electrolyte conductivity.
- **Membrane Area**: In dual-chamber systems, the membrane cross-sectional area scales with the square of the diameter, directly affecting ion transport capacity and desalination rates in MDCs.
- **Flow Regime**: Diameter influences the Reynolds number (Re = rho * v * d / mu) and thus the transition from laminar to turbulent flow, which affects substrate delivery to the biofilm.
- **Manufacturing Constraints**: Standard pipe sizes, glass tube availability, and 3D printing build volumes limit practical diameter choices.
- **Structural Integrity**: Larger diameters require thicker walls to withstand internal pressure, particularly in pressurized MEC systems generating hydrogen.
- **Thermal Management**: Larger diameters reduce the surface-area-to-volume ratio, making temperature control more challenging.
- **Gas Collection**: In MECs, the headspace geometry (determined partly by diameter) affects hydrogen accumulation and collection efficiency.

## Related Parameters

- **name**: Cell Length

- **relationship**: Together with diameter, defines the aspect ratio and total volume of the cylindrical reactor.
- **name**: Cell Volume

- **relationship**: Directly calculated from diameter and length for cylindrical geometries (V = pi * d^2 * L / 4).
- **name**: Electrode Spacing

- **relationship**: The maximum electrode spacing is bounded by the cell diameter.
- **name**: Chamber Volume

- **relationship**: In multi-chamber designs, each chamber's volume depends on its diameter.
- **name**: Reynolds Number

- **relationship**: Diameter is a key variable in the Reynolds number calculation for flow characterization.
- **name**: Internal Resistance

- **relationship**: Increases with diameter due to longer ionic transport paths through the electrolyte.
- **name**: Wall Thickness

- **relationship**: Must scale with diameter to maintain structural integrity under operating pressure.

## Compatible Systems

Cell Geometry Dimensions

## References

- Logan, B.E. (2008). *Microbial Fuel Cells*. John Wiley & Sons. Chapter 4: MFC Architecture.
- Fan, Y., Hu, H., & Liu, H. (2007). Enhanced Coulombic efficiency and power density of air-cathode microbial fuel cells with an improved cell configuration. *Journal of Power Sources*, 171(2), 348--354.
- Cheng, S. & Logan, B.E. (2011). Increasing power generation for scaling up single-chamber air cathode microbial fuel cells. *Bioresource Technology*, 102(6), 4468--4473.
- Luo, Y., Zhang, F., Wei, B., et al. (2011). Power generation from furfural using the microbial fuel cell. *Journal of Chemical Technology & Biotechnology*, 86(4), 573--577.
- Zhuang, L., Zhou, S., Wang, Y., et al. (2009). Membrane-less cloth cathode assembly (CCA) for scalable microbial fuel cells. *Biosensors and Bioelectronics*, 24(12), 3652--3656.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Cell+Diameter&body=**Parameter%3A**+Cell+Diameter%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fcell-diameter.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Cell+Diameter&body=**Parameter%3A**+Cell+Diameter%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fcell-diameter.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Cell+Diameter&body=**Parameter%3A**+Cell+Diameter%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fcell-diameter.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
