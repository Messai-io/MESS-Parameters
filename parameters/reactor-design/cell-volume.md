# Cell Volume

Cell volume is the total internal liquid-holding capacity of an individual microbial electrochemical system (MES) reactor unit, encompassing all chambers, channels, and voids within the sealed reactor body. This parameter is distinct from the working volume (which excludes electrode volumes, gaskets, and other solid components) and from the chamber volume (which refers to a single compartment in multi-chamber designs). Cell volume is one of the most frequently reported reactor parameters in MES literature and serves as the primary basis for calculating volumetric performance metrics such as power density (W/m3), volumetric current density (A/m3), COD removal rate (kg COD/m3/day), and hydrogen production rate (m3 H2/m3/day).

The total cell volume directly determines the hydraulic retention time (HRT) for a given flow rate, the total substrate loading, and the buffering capacity of the system. In MFC applications, there is a well-documented inverse relationship between cell volume and volumetric power density: smaller cells consistently achieve higher W/m3 values due to shorter electrode distances, reduced ohmic losses, and better mass transport, but cannot treat practical wastewater volumes. This scaling challenge remains one of the central obstacles to MES commercialization.

For microbial electrolysis cells (MECs), the cell volume relative to the cathode area determines the volumetric hydrogen production rate and the gas-to-liquid ratio in the reactor. In microbial desalination cells (MDCs), the total cell volume encompasses anode, cathode, and one or more desalination chambers, with the relative volumes affecting ion transport rates and desalination efficiency. Optimizing the cell volume requires balancing treatment capacity, power/hydrogen output, material costs, and practical constraints such as available installation space.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Reactor Design |
| **Subcategory** | Single Unit Cells |
| **Type** | number |
| **Unit** | mL |
| **Minimum** | 10 |
| **Maximum** | 5000 |
| **Papers Reporting** | 3 |

## Typical Values

- **Valid Range**: 1--100,000 mL (0.001--100 L)
- **Typical Range**: 10--5,000 mL
- **MFC (Miniature, diagnostic)**: 1--10 mL
- **MFC (Laboratory, single-chamber)**: 12--200 mL (28 mL is a common benchmark size)
- **MFC (Laboratory, H-type)**: 200--500 mL per chamber
- **MFC (Pilot-scale)**: 1,000--20,000 mL (1--20 L)
- **MFC (Demonstration-scale)**: 20--100 L
- **MEC (Laboratory)**: 25--500 mL
- **MEC (Pilot-scale)**: 1,000--10,000 mL
- **MDC (Laboratory)**: 50--500 mL (total across all chambers)
- **MDC (Pilot-scale)**: 500--5,000 mL

## Measurement Methods

- **Gravimetric Method (Most Accurate)**: Weigh the empty, dry reactor assembly (all chambers sealed) on an analytical balance. Fill completely with deionized water at a known temperature, removing all air bubbles by tilting and tapping. Reweigh the filled reactor. Calculate volume as V = (m_filled - m_empty) / rho_water. This method yields accuracy better than 1% and accounts for all internal voids including those around electrodes.
- **Volumetric Displacement**: Assemble the reactor without electrodes and fill with water from a calibrated burette or graduated cylinder. Record the total volume of water required to fill the reactor completely. Repeat with electrodes installed to determine the working volume. The difference gives the electrode volume.
- **CAD Model Calculation**: For reactors designed in CAD software, use the volume calculation tool on the internal cavity. For prismatic geometries: V = L * W * H. For cylindrical: V = pi * r^2 * L. Subtract the volume of internal components (electrode frames, membrane supports, gaskets). Verify against physical measurement, as manufacturing tolerances can introduce 2--5% discrepancies.

## Affecting Factors

### Primary

- **Cell Geometry and Dimensions**: Volume is directly calculated from cell diameter, length, width, and height depending on the reactor shape.
- **Number of Chambers**: Multi-chamber designs (dual-chamber MFC, three-chamber MDC) have larger total cell volumes than equivalent single-chamber designs.
- **Internal Components**: Electrodes, membrane frames, spacers, baffles, and current collectors occupy internal volume, reducing the liquid-phase volume by 10--40%.
- **Scale of Application**: Laboratory studies typically use 10--500 mL; pilot systems require 1--100 L; demonstration and industrial systems exceed 100 L.
- **Headspace**: Gas accumulation space above the liquid level reduces the effective liquid volume and must be accounted for in MEC applications.
- **Biofilm Growth**: Over time, biofilm accumulation on electrodes and walls reduces the effective liquid volume by 1--5%.
- **Manufacturing Tolerances**: Actual volume may deviate from design specifications, particularly for 3D-printed or hand-fabricated reactors.
- **Thermal Expansion**: At elevated operating temperatures, both the reactor body and the liquid may expand, slightly changing the effective volume.

## Related Parameters

- **name**: Cell Diameter, Length, Width, Height

- **relationship**: The geometric dimensions from which volume is calculated.
- **name**: Chamber Volume

- **relationship**: Volume of individual compartments within the cell.
- **name**: Working Volume

- **relationship**: Net liquid volume after subtracting electrode and component volumes.
- **name**: Headspace Volume

- **relationship**: Gas space above the liquid level.
- **name**: Residence Time

- **relationship**: HRT = V / Q, directly proportional to cell volume.
- **name**: Power Density (Cell)

- **relationship**: Volumetric power density (W/m3) is inversely related to cell volume for a given total power output.
- **name**: Reactor Volume Total

- **relationship**: In multi-reactor systems, the sum of all individual cell volumes.

## Compatible Systems

Cell Geometry Dimensions

## References

- Logan, B.E. (2008). *Microbial Fuel Cells*. John Wiley & Sons. Chapter 2: Fundamentals and Definitions.
- Fan, Y., Hu, H., & Liu, H. (2007). Sustainable power generation in microbial fuel cells using bicarbonate buffer and proton transfer mechanisms. *Environmental Science & Technology*, 41(23), 8154--8158.
- Cheng, S., Liu, H., & Logan, B.E. (2006). Power densities using different cathode catalysts (Pt and CoTMPP) and polymer binders (Nafion and PTFE) in single chamber microbial fuel cells. *Environmental Science & Technology*, 40(1), 364--369.
- Sleutels, T.H., Ter Heijne, A., Buisman, C.J., & Hamelers, H.V. (2012). Bioelectrochemical systems: An outlook for practical applications. *ChemSusChem*, 5(6), 1012--1019.
- Ge, Z., Li, J., Xiao, L., Tong, Y., & He, Z. (2014). Recovery of electrical energy in microbial fuel cells. *Environmental Science & Technology Letters*, 1(2), 137--141.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Cell+Volume&body=**Parameter%3A**+Cell+Volume%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fcell-volume.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Cell+Volume&body=**Parameter%3A**+Cell+Volume%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fcell-volume.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Cell+Volume&body=**Parameter%3A**+Cell+Volume%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fcell-volume.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
