# Reactor Shape

Reactor shape describes the overall three-dimensional geometry of the microbial electrochemical system (MES) vessel, which determines the internal flow patterns, electrode surface-area-to-volume ratio, structural efficiency under pressure, ease of manufacturing, and compatibility with different electrode configurations. The reactor shape is one of the earliest design decisions and constrains many downstream parameters including cell dimensions, electrode arrangement, flow distribution, and stacking geometry.

The most common MES reactor shapes are cylindrical (round cross-section), rectangular/prismatic (flat-plate), cuboid (box-type), and tubular (long, narrow cylinders). Each shape offers distinct advantages: cylindrical reactors are strongest under internal pressure and easiest to seal, making them preferred for pressurized MEC applications and H-type laboratory cells. Rectangular/prismatic reactors maximize the electrode area-to-volume ratio for flat electrodes and facilitate compact stacking in cassette-type designs. Tubular reactors offer high surface-area-to-volume ratios, are easy to manufacture from extruded materials, and naturally accommodate concentric electrode arrangements.

The reactor shape also affects the hydrodynamic behavior within the cell. Cylindrical reactors with tangential inlets can create swirling flow that enhances mixing; rectangular reactors with properly designed flow channels can approximate plug flow; tubular reactors naturally create well-defined laminar flow profiles. For scale-up from laboratory to pilot scale, the reactor shape may change to accommodate manufacturing constraints, installation requirements, or integration with existing wastewater infrastructure (e.g., immersion in existing treatment basins).

## Basic Information

| Property | Value |
|---|---|
| **Category** | Reactor Design |
| **Subcategory** | Reactor Vessel |
| **Type** | select |

## Typical Values

- **Valid Range**: Categorical
- **Cylindrical**: Round cross-section; used for H-type cells, tubular MFCs, and pressurized vessels; V = pi * r^2 * L
- **Rectangular/Prismatic**: Flat-plate design; most common for stacked MFCs; V = L * W * H
- **Cuboid (Box-Type)**: Standard lab MFC shape (e.g., 4 cm cube); simple to machine
- **Tubular**: Long, narrow cylinders; high S/V ratio; used for tubular MFC modules; inner diameter 10--50 mm
- **Disc/Coin-Shaped**: Short cylinder; used for miniature and diagnostic MFCs
- **Annular**: Concentric cylinders; used for concentric electrode arrangements
- **Serpentine/Channel**: Flat plate with machined flow channels; flow-field plate design
- **Custom/Irregular**: 3D-printed or molded complex geometries for optimized flow
- **Basin/Open-Top**: Rectangular basins for large-scale installations (SMFC-type)

## Measurement Methods

- **Geometric Classification**: Document the reactor shape by measuring its external dimensions and classifying according to standard geometric categories. Photograph from multiple angles with a scale reference. For custom shapes, create a 3D scan or CAD model. The aspect ratio (length/diameter for cylindrical, length/width/height for prismatic) is a useful quantitative descriptor.
- **Cross-Section Analysis**: Cut or image the reactor cross-section perpendicular to the primary axis. Measure the cross-sectional area (A_cross), perimeter (P), and calculate the hydraulic diameter: D_h = 4 * A_cross / P. The hydraulic diameter is the shape-independent parameter used in flow calculations.
- **Surface-Area-to-Volume Ratio Calculation**: Calculate the internal surface area (wetted area) and total internal volume from the measured dimensions. The S/V ratio (m2/m3 or 1/m) indicates the geometric efficiency: higher S/V ratios provide more area for electrode placement per unit volume. Typical values: cylinder S/V = 2/r + 2/L; rectangular S/V = 2(1/L + 1/W + 1/H).

## Affecting Factors

### Primary

- **Electrode Configuration**: Flat-plate electrodes require rectangular/prismatic shapes; brush and tubular electrodes fit cylindrical shapes; concentric electrodes require annular shapes.
- **Pressure Requirements**: Cylindrical and spherical shapes are inherently stronger under internal pressure; rectangular shapes require thicker walls or internal reinforcement.
- **Stacking and Modularity**: Rectangular shapes stack compactly with minimal wasted space; cylindrical shapes leave interstitial gaps when arrayed.
- **Flow Distribution**: The shape determines the natural flow pattern (plug flow in long rectangles, mixed flow in short cylinders, laminar flow in tubes).
- **Manufacturing Method**: CNC machining favors rectangular shapes; glass blowing favors cylindrical; 3D printing allows complex custom shapes; injection molding allows high-volume production of any shape.
- **Installation Constraints**: Available space, orientation requirements, and integration with existing infrastructure affect the optimal shape.
- **Maintenance Access**: Rectangular reactors with removable flat plates provide easier access than cylindrical reactors for electrode replacement and cleaning.
- **Thermal Performance**: The surface-area-to-volume ratio affects heat exchange with the environment; shapes with higher S/V ratios equilibrate temperature faster.

## Related Parameters

- **name**: Cell Diameter

- **relationship**: Relevant for cylindrical reactor shapes.
- **name**: Cell Length, Width, Height

- **relationship**: Relevant for rectangular/prismatic shapes.
- **name**: Cell Volume

- **relationship**: Calculated from the shape-specific volume formula.
- **name**: Reactor Material

- **relationship**: Material properties constrain achievable shapes.
- **name**: Pressure Rating

- **relationship**: Shape is a primary factor in pressure vessel calculations.
- **name**: Electrode Arrangement

- **relationship**: Must be compatible with the reactor shape.
- **name**: Dead Zone Fraction

- **relationship**: Some shapes inherently have more dead zones than others.
- **name**: Stack Arrangement

- **relationship**: Stacking geometry depends on the individual reactor shape.

## Compatible Systems

Reactor System Components

## References

- Logan, B.E. (2008). *Microbial Fuel Cells*. John Wiley & Sons. Chapter 4: MFC Architectures.
- Rabaey, K., Clauwaert, P., Aelterman, P., & Verstraete, W. (2005). Tubular microbial fuel cells for efficient electricity generation. *Environmental Science & Technology*, 39(20), 8077--8082.
- Kim, J.R., Premier, G.C., Hawkes, F.R., et al. (2009). Development of a tubular microbial fuel cell (MFC) employing a membrane electrode assembly cathode. *Journal of Power Sources*, 187(2), 393--399.
- Cheng, S. & Logan, B.E. (2011). Increasing power generation for scaling up single-chamber air cathode microbial fuel cells. *Bioresource Technology*, 102(6), 4468--4473.
- Janicek, A., Fan, Y., & Liu, H. (2014). Design of microbial fuel cells for practical application: A review and analysis of scale-up studies. *Biofuels*, 5(1), 79--92.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Reactor+Shape&body=**Parameter%3A**+Reactor+Shape%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Freactor-shape.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Reactor+Shape&body=**Parameter%3A**+Reactor+Shape%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Freactor-shape.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Reactor+Shape&body=**Parameter%3A**+Reactor+Shape%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Freactor-shape.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
