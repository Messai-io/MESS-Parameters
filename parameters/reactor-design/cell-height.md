# Cell Height

Cell height refers to the vertical dimension of a microbial electrochemical system (MES) reactor, measured from the bottom of the internal reaction chamber to the top of the liquid level or the upper internal boundary of the sealed compartment. In vertically oriented reactor configurations, this parameter is synonymous with the primary axial dimension and determines the hydrostatic pressure gradient within the cell, the vertical distribution of substrates and microbial biomass, and the effectiveness of gas release from electrode surfaces.

In microbial fuel cells (MFCs) and microbial electrolysis cells (MECs), the cell height critically affects the stratification of microbial communities, substrate concentration gradients, and the buoyancy-driven removal of gaseous products (CO2 at the anode, H2 at the MEC cathode). Taller cells may experience significant concentration gradients along their vertical axis, leading to non-uniform current distribution. In upflow configurations, cell height determines the upflow velocity for a given flow rate and thus the hydraulic retention time (HRT) and the extent of fluidization of granular electrode materials.

For microbial desalination cells (MDCs) and stacked MES configurations, cell height is a key parameter in determining the overall footprint-to-volume ratio of the system. In practical installations, cell height is constrained by structural considerations, available headroom, and the requirement for gravity-driven drainage. Research on pilot-scale MFCs has demonstrated that cells taller than 1 meter can suffer from significant performance gradients unless adequate mixing is provided, while very short cells (less than 20 mm) are primarily used in diagnostic or screening applications.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Reactor Design |
| **Subcategory** | Single Unit Cells |
| **Type** | number |
| **Unit** | mm |
| **Minimum** | 10 |
| **Maximum** | 1000 |
| **Papers Reporting** | 15 |

## Typical Values

- **Valid Range**: 5--2000 mm
- **Typical Range**: 20--500 mm
- **MFC (Laboratory, single-chamber)**: 20--80 mm
- **MFC (Pilot-scale, upflow)**: 200--1000 mm
- **MEC**: 30--200 mm (typically shorter to minimize gas holdup)
- **MDC**: 50--300 mm (multiple chambers stacked vertically)
- **Flat-plate MFC**: 10--40 mm (distance between electrodes in thin configurations)
- **Tubular MFC (horizontal)**: Height corresponds to tube diameter, typically 20--80 mm

## Measurement Methods

- **Direct Measurement with Depth Gauge**: Insert a calibrated depth gauge or ruler through the reactor port to measure the internal height from the chamber floor to the liquid surface or the top internal wall. For sealed systems, use the manufacturing specifications and subtract any internal structural components (gaskets, electrode frames) that reduce the effective height.
- **Hydrostatic Pressure Method**: Measure the pressure difference between sensors placed at the bottom and top of the reactor using differential pressure transducers. Calculate height using h = delta_P / (rho * g), where rho is the liquid density and g is gravitational acceleration. This method provides the effective liquid height even in systems with complex internal geometries.
- **Design Specification Verification**: Obtain the nominal height from engineering drawings. Verify against the as-built reactor by measuring external height and subtracting wall thicknesses (top and bottom) and any gasket or seal compression. Account for electrode frames, spacers, or flow distributors that may reduce the effective working height.

## Affecting Factors

### Primary

- **Hydrostatic Pressure**: The pressure at the bottom of the cell equals rho * g * h, which affects gas solubility, membrane integrity, and gas bubble dynamics. At 1 m height, the additional pressure is approximately 9.8 kPa.
- **Substrate Stratification**: In tall cells without forced mixing, substrate concentration decreases from inlet to outlet, creating vertical performance gradients.
- **Gas Disengagement**: Taller cells provide more residence time for gas bubbles to coalesce and rise, but also increase the gas holdup volume that displaces active liquid.
- **Upflow Velocity**: For a fixed flow rate, taller cells result in longer HRT at the same cross-sectional area, or require higher flow rates to maintain the same HRT.
- **Structural Loading**: Taller cells experience greater hydrostatic forces on sidewalls and bottom, requiring thicker materials or reinforcement.
- **Biofilm Distribution**: Gravity affects biofilm thickness distribution along vertically oriented electrodes, with thicker biofilms typically forming in lower regions where substrate is more concentrated.
- **Temperature Gradients**: Thermal stratification can develop in tall cells, particularly in outdoor installations without active temperature control.
- **Electrical Connections**: Height affects the total length of current collectors and the associated ohmic losses in the electrical circuit.

## Related Parameters

- **name**: Cell Volume

- **relationship**: Volume is the product of cross-sectional area and height for prismatic geometries.
- **name**: Cell Length

- **relationship**: In horizontal configurations, length replaces height as the primary axial dimension.
- **name**: Headspace Volume

- **relationship**: The volume above the liquid level, which is defined by the difference between total internal height and liquid height.
- **name**: Residence Time

- **relationship**: Directly proportional to height for a given cross-sectional area and flow rate.
- **name**: Reynolds Number

- **relationship**: Height affects the characteristic length in vertical flow calculations.
- **name**: Flow Mode

- **relationship**: The choice between upflow, downflow, or horizontal flow is intimately linked to the cell height.
- **name**: Dead Zone Fraction

- **relationship**: Tall cells are more susceptible to dead zones in corners and near the bottom.

## Compatible Systems

Cell Geometry Dimensions

## References

- Liu, H. & Logan, B.E. (2004). Electricity generation using an air-cathode single chamber microbial fuel cell in the presence and absence of a proton exchange membrane. *Environmental Science & Technology*, 38(14), 4040--4046.
- He, Z., Minteer, S.D., & Angenent, L.T. (2005). Electricity generation from artificial wastewater using an upflow microbial fuel cell. *Environmental Science & Technology*, 39(14), 5262--5267.
- Kim, J.R., Premier, G.C., Hawkes, F.R., et al. (2009). Development of a tubular microbial fuel cell (MFC) employing a membrane electrode assembly cathode. *Journal of Power Sources*, 187(2), 393--399.
- Jacobson, K.S., Drew, D.M., & He, Z. (2011). Efficient salt removal in a continuously operated upflow microbial desalination cell with an air cathode. *Bioresource Technology*, 102(1), 376--380.
- Feng, Y., He, W., Liu, J., et al. (2014). A horizontal plug flow and stackable pilot microbial fuel cell for municipal wastewater treatment. *Bioresource Technology*, 156, 132--138.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Cell+Height&body=**Parameter%3A**+Cell+Height%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fcell-height.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Cell+Height&body=**Parameter%3A**+Cell+Height%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fcell-height.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Cell+Height&body=**Parameter%3A**+Cell+Height%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fcell-height.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
