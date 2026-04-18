# Cell Width

Cell width is the horizontal dimension of a microbial electrochemical system (MES) reactor measured perpendicular to the primary flow direction in rectangular or flat-plate configurations. In MFC cassette designs, the width typically corresponds to the dimension across the face of the planar electrodes, while the length runs parallel to the flow path and the height represents the vertical dimension. For tubular configurations, cell width is not applicable (the diameter serves as the transverse dimension instead).

The cell width is particularly important in flat-plate and cassette-type MES designs where it determines the total electrode area available per cell (in conjunction with height), the uniformity of flow distribution across the electrode face, and the aspect ratio of the reactor footprint. Wide cells offer large electrode areas within a single unit, reducing the number of cells needed for a given total capacity, but they present challenges in achieving uniform flow distribution from a single inlet point. Flow maldistribution across wide cells creates regions of high and low substrate supply, leading to non-uniform biofilm development and suboptimal current generation.

In stacked MES systems, the cell width defines one dimension of the stack cross-section and must be compatible with the manifold design, gasket dimensions, and clamping hardware. For microbial desalination cells (MDCs) using flat membrane stacks analogous to electrodialysis configurations, the cell width directly determines the active membrane area per cell pair and thus the desalination rate. Manufacturing considerations often constrain the cell width to standard sheet material sizes or membrane roll widths.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Reactor Design |
| **Subcategory** | Single Unit Cells |
| **Type** | number |
| **Unit** | mm |
| **Minimum** | 10 |
| **Maximum** | 500 |
| **Papers Reporting** | 8 |

## Typical Values

- **Valid Range**: 10--1000 mm
- **Typical Range**: 30--300 mm
- **MFC (Laboratory, flat-plate)**: 30--100 mm
- **MFC (Cassette-type)**: 100--400 mm
- **MFC (Pilot-scale, flat-plate)**: 200--600 mm
- **MEC (Flat-plate)**: 50--200 mm
- **MDC (Flat membrane stack)**: 100--300 mm
- **Miniature MFC**: 10--30 mm
- **Standard laboratory H-type bottle**: Not applicable (cylindrical geometry)

## Measurement Methods

- **Direct Internal Measurement**: Measure the internal width of the reaction chamber using precision calipers or a depth gauge inserted through an access port. For assembled reactors, measure the gasket opening width, which defines the effective internal width. Take measurements at multiple heights to check for taper or warping.
- **Electrode Area Method**: If the electrode dimensions are known and the electrodes are sized to fill the cell width, the cell width can be inferred from the electrode width plus any clearance gaps (typically 1--3 mm per side). This is particularly useful for sealed cells where direct internal measurement is impractical.
- **Design Verification**: Extract the nominal width from engineering drawings and verify against the fabricated part. For reactors with internal features (ribs, channels, flow distributors), distinguish between the overall internal width and the effective width available for the electrode and electrolyte.

## Affecting Factors

### Primary

- **Flow Distribution Uniformity**: Wider cells require more sophisticated inlet manifold designs (multiple entry points, flow distributors, or header channels) to ensure uniform cross-width flow distribution. CFD studies recommend width-to-inlet-diameter ratios below 10:1.
- **Electrode Area**: Total electrode area per cell face = width * height. Doubling the width doubles the potential current output but requires twice the current collection capacity.
- **Membrane Area**: In membrane-separated designs, the active membrane area equals width * height, directly affecting ion transport capacity.
- **Structural Rigidity**: Wider reactor panels are more susceptible to bowing under internal pressure, requiring thicker walls or reinforcing ribs.
- **Material Availability**: Standard acrylic, polycarbonate, or PVC sheet widths (typically 1220 mm or 2440 mm) constrain the maximum practical cell width.
- **Gasket Design**: Wider gaskets are more difficult to seal uniformly and may require multiple bolting points along the width.
- **Stack Clamping**: In stacked designs, clamping pressure must be uniform across the full width to prevent leaks and ensure consistent electrical contact.
- **Shipping and Installation**: Very wide cells may face logistical constraints for transportation and site access.

## Related Parameters

- **name**: Cell Length

- **relationship**: Together with width, defines the footprint of flat-plate reactors.
- **name**: Cell Height

- **relationship**: Together with width, determines the electrode face area.
- **name**: Cell Volume

- **relationship**: V = L * W * H for prismatic geometries.
- **name**: Channel Width

- **relationship**: The width of individual flow channels machined into the cell body.
- **name**: Electrode Arrangement

- **relationship**: The width must accommodate the chosen electrode configuration.
- **name**: Flow Uniformity

- **relationship**: Directly affected by the cell width and inlet/outlet design.
- **name**: Stack Footprint

- **relationship**: Determined by cell width and length in stacked configurations.

## Compatible Systems

Cell Geometry Dimensions

## References

- Min, B. & Logan, B.E. (2004). Continuous electricity generation from domestic wastewater and organic substrates in a flat plate microbial fuel cell. *Environmental Science & Technology*, 38(21), 5809--5814.
- Cheng, S. & Logan, B.E. (2011). Increasing power generation for scaling up single-chamber air cathode microbial fuel cells. *Bioresource Technology*, 102(6), 4468--4473.
- Liang, P., Huang, X., Fan, M.Z., Cao, X.X., & Wang, C. (2007). Composition and distribution of internal resistance in three types of microbial fuel cells. *Applied Microbiology and Biotechnology*, 77(3), 551--558.
- Dekker, A., Ter Heijne, A., Saakes, M., Hamelers, H.V., & Buisman, C.J. (2009). Analysis and improvement of a scaled-up and stacked microbial fuel cell. *Environmental Science & Technology*, 43(23), 9038--9042.
- Heidrich, E.S., Curtis, T.P., & Dolfing, J. (2011). Determination of the internal chemical energy of wastewater. *Environmental Science & Technology*, 45(2), 827--832.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Cell+Width&body=**Parameter%3A**+Cell+Width%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fcell-width.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Cell+Width&body=**Parameter%3A**+Cell+Width%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fcell-width.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Cell+Width&body=**Parameter%3A**+Cell+Width%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fcell-width.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
