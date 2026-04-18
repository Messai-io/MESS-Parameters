# Inter Cell Spacing

Inter-cell spacing is the physical distance between adjacent individual cells in a stacked or arrayed microbial electrochemical system (MES) configuration. This gap accommodates structural elements (bipolar plates, insulating separators, manifold connections, and gaskets), provides space for fluid distribution between cells, allows for electrical connections and monitoring points, and may serve as a thermal management zone. The inter-cell spacing is distinct from electrode spacing (which is the distance between electrodes within a single cell) and refers specifically to the space between the outer walls of adjacent cells in a multi-cell assembly.

In bipolar plate stack designs (similar to PEM fuel cell stacks), the inter-cell spacing is minimized to the thickness of the bipolar plate itself (typically 1--5 mm for graphite or 0.5--2 mm for metallic plates), which simultaneously serves as the cathode current collector of one cell and the anode current collector of the adjacent cell. This intimate stacking minimizes the total stack volume and electrical resistance between cells. In designs where individual cells are discrete units connected by external wiring and piping, the inter-cell spacing may be much larger (10--50 mm) to accommodate tubing connections, electrical leads, and access for maintenance.

The inter-cell spacing directly affects the volumetric power density of the stack (W/m3 of total stack volume, including dead space), the material cost per cell, and the difficulty of achieving uniform conditions across all cells in the stack. Minimizing inter-cell spacing maximizes the stack compactness and volumetric efficiency, but excessively tight spacing complicates manifold routing, makes individual cell maintenance difficult, and can lead to thermal management issues in high-power-density stacks.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Reactor Design |
| **Subcategory** | Stack Geometry |
| **Type** | number |
| **Unit** | mm |
| **Minimum** | 1 |
| **Maximum** | 50 |

## Typical Values

- **Valid Range**: 0.5--50 mm
- **Typical Range**: 1--20 mm
- **Bipolar plate stack (graphite plates)**: 2--5 mm
- **Bipolar plate stack (metallic plates)**: 0.5--2 mm
- **Discrete cell array (external connections)**: 10--50 mm
- **Cassette-type stack**: 3--10 mm (gasket + spacer thickness)
- **MDC membrane stack**: 1--5 mm per cell pair
- **Pilot-scale stack**: 5--20 mm
- **PEM fuel cell reference**: 1--3 mm

## Measurement Methods

- **Direct Physical Measurement**: With the stack assembled but not compressed, measure the gap between adjacent cell walls using feeler gauges, shims, or calipers. For compressed stacks, measure the total stack height and subtract the sum of all individual cell thicknesses to determine the total inter-cell gap, then divide by the number of gaps (n_cells - 1). Compare with the design specification.
- **Stack Height Analysis**: Measure the total stack height (between end plates) and divide by the number of cells to get the repeat unit height. Subtract the individual cell thickness (electrode + spacing + membrane + gaskets) to obtain the inter-cell spacing. This non-destructive method can be performed on fully assembled stacks.
- **Design Specification Review**: Obtain inter-cell spacing from the engineering drawings, which specify bipolar plate thickness, gasket compression, and any additional spacer elements. Verify that the as-built stack matches the design by measuring total stack height and comparing with the calculated value.

## Affecting Factors

### Primary

- **Bipolar Plate Thickness**: In integrated stacks, the bipolar plate is the primary inter-cell element. Thicker plates provide better structural support and flow channel depth but increase spacing.
- **Gasket Requirements**: Gaskets between cells must compress sufficiently to seal against leaks. Typical gasket compression is 20--40% of uncompressed thickness, contributing 0.5--2 mm to inter-cell spacing.
- **Manifold Routing**: Internal manifolds (through-holes in the stack plates for fluid distribution) require sufficient plate thickness, which constrains minimum inter-cell spacing.
- **Electrical Insulation**: In parallel-connected or independently wired stacks, insulating spacers between cells prevent short circuits and add to the spacing.
- **Thermal Management**: In high-current stacks, inter-cell spacing may include cooling channels or thermal breaks to manage heat generation.
- **Monitoring Access**: Voltage taps, reference electrode ports, and sensor access points between cells require additional spacing.
- **Stack Compression**: Higher compression forces reduce gasket thickness and inter-cell spacing but require stronger end plates and tie rods.
- **Manufacturing Tolerances**: Dimensional variation in cell components accumulates across the stack, requiring some tolerance in inter-cell spacing design.

## Related Parameters

- **name**: Cells Per Stack

- **relationship**: Combined with inter-cell spacing, determines the total stack height.
- **name**: Stack Height

- **relationship**: Total stack height = n_cells * cell_thickness + (n_cells - 1) * inter-cell_spacing + 2 * end_plate_thickness.
- **name**: Stack Compression

- **relationship**: Compression force affects the actual inter-cell spacing by compressing gaskets.
- **name**: Stack Footprint

- **relationship**: Inter-cell spacing does not directly affect footprint but increases the height/volume.
- **name**: Stack Power

- **relationship**: Volumetric power density decreases with larger inter-cell spacing due to increased dead volume.
- **name**: Current Sharing

- **relationship**: In bipolar designs, inter-cell spacing determines the current path resistance between cells.
- **name**: Voltage Balancing

- **relationship**: Monitoring taps between cells are located in the inter-cell space.

## Compatible Systems

Multi Cell Stack Configuration

## References

- Aelterman, P., Rabaey, K., Pham, H.T., Boon, N., & Verstraete, W. (2006). Continuous electricity generation at high voltages and currents using stacked environmental fuel cells. *Environmental Science & Technology*, 40(10), 3388--3394.
- Dekker, A., Ter Heijne, A., Saakes, M., Hamelers, H.V., & Buisman, C.J. (2009). Analysis and improvement of a scaled-up and stacked microbial fuel cell. *Environmental Science & Technology*, 43(23), 9038--9042.
- An, J., Kim, B., Jang, J.K., Lee, H.S., & Chang, I.S. (2014). New architecture for modularity of a microbial fuel cell stack. *Bioresource Technology*, 173, 210--215.
- Ieropoulos, I., Greenman, J., & Melhuish, C. (2008). Microbial fuel cells based on carbon veil electrodes: Stack configuration and scalability. *International Journal of Energy Research*, 32(13), 1228--1240.
- Zhuang, L., Zheng, Y., Zhou, S., Yuan, Y., & Yuan, H. (2012). Scalable microbial fuel cell (MFC) stack for continuous real wastewater treatment. *Bioresource Technology*, 106, 82--88.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Inter+Cell+Spacing&body=**Parameter%3A**+Inter+Cell+Spacing%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Finter-cell-spacing.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Inter+Cell+Spacing&body=**Parameter%3A**+Inter+Cell+Spacing%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Finter-cell-spacing.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Inter+Cell+Spacing&body=**Parameter%3A**+Inter+Cell+Spacing%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Finter-cell-spacing.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
