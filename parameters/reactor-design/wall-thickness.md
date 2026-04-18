# Wall Thickness

Wall thickness refers to the thickness of the structural walls of a microbial electrochemical system reactor, including the main body, cell frames, endplates, and any internal partition walls. This parameter determines the mechanical strength, chemical resistance, thermal insulation, and weight of the reactor. Wall thickness must be sufficient to withstand internal pressure (hydrostatic and any gas overpressure), external loads (stacking, compression, seismic), and chemical attack from the electrolyte, while being thin enough to minimize material cost, weight, and thermal resistance for temperature-controlled systems.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Reactor Design |
| **Subcategory** | Cell Materials |
| **Type** | number |
| **Unit** | mm |
| **Minimum** | 2 |
| **Maximum** | 20 |
| **Papers Reporting** | 2 |

## Typical Values

- **text**: | Material | Typical Thickness | Application |
|----------|------------------|-------------|
| Acrylic/PMMA (lab) | 3 - 10 mm | Lab-scale H-cells, flat plate reactors |
| Polycarbonate (lab/pilot) | 3 - 8 mm | Transparent reactor bodies |
| PVC/CPVC (pilot) | 3 - 10 mm | Chemical-resistant frames |
| Polypropylene (pilot/industrial) | 4 - 15 mm | Chemical resistance, lower cost |
| PTFE-lined (industrial) | 5 - 15 mm | Extreme chemical resistance |
| Stainless steel 316L | 2 - 5 mm | Structural strength, current collection |
| Titanium (specialty) | 1 - 3 mm | Corrosion resistance, lightweight |
| Fiber-reinforced polymer | 3 - 10 mm | High strength-to-weight ratio |

**Design guidelines:**
- Lab-scale: wall thickness primarily determined by machinability and sealing requirements
- Pilot-scale: must accommodate pressure (up to 0.5 bar gauge) and support electrode/membrane assemblies
- Industrial: designed per ASME or equivalent pressure vessel codes with appropriate safety factors (typically 3-4x design pressure)

## Measurement Methods

- **1. **Caliper measurement**: Use digital calipers or micrometers to directly measure wall thickness at multiple locations. For thin-walled cylindrical reactors, an ultrasonic thickness gauge provides non-destructive measurement.**: 2. **Ultrasonic thickness gauge**: Non-destructive measurement that sends an ultrasonic pulse through the wall and measures the echo return time. Suitable for installed reactors without disassembly. 3. **CAD specification**: Reference the engineering drawings or 3D model for nominal dimensions with tolerances. 4. **Pressure testing**: Conduct hydrostatic pressure tests to verify that the actual wall thickness meets the design requirements. Calculate required thickness using thin-wall or thick-wall pressure vessel formulas.

## Affecting Factors

- **text**: - **Internal pressure**: Gas-producing systems (MECs generating H2, CO2) require thicker walls to contain overpressure. The Barlow formula for thin-walled vessels: t = P*D / (2*S*E), where P is pressure, D is diameter, S is allowable stress, E is joint efficiency.
- **Chemical compatibility**: Aggressive electrolytes (low pH, high salinity, organic solvents) may require thicker walls or protective linings to account for chemical erosion over the design life.
- **Temperature**: Elevated temperatures reduce the strength of polymeric materials, requiring thicker walls. Metal reactors are less affected within the MES operating range.
- **Manufacturing method**: Injection molding allows thinner, more uniform walls than machining from solid stock. 3D printing may require extra thickness due to layer adhesion limitations.
- **Sealing requirements**: Gasket compression areas typically require additional wall thickness (1.5-2x the minimum) to distribute clamping forces without deformation.
- **Insulation needs**: In temperature-controlled systems, thicker walls provide better thermal insulation, but dedicated external insulation is usually more effective.

## Compatible Systems

Cell Geometry Dimensions

## References

1. Logan, B.E. (2008). *Microbial Fuel Cells*. John Wiley & Sons.
2. ASME Boiler and Pressure Vessel Code, Section VIII, Division 1: Rules for Construction of Pressure Vessels. American Society of Mechanical Engineers.
3. Callister, W.D., & Rethwisch, D.G. (2018). *Materials Science and Engineering: An Introduction* (10th ed.). Wiley.
4. Zhuang, L., Zheng, Y., Zhou, S., Yuan, Y., Yuan, H., & Chen, Y. (2012). Scalable microbial fuel cell (MFC) stack for continuous real wastewater treatment. *Bioresource Technology*, 106, 82-88.
5. Liang, P., Duan, R., Jiang, Y., Zhang, X., Qiu, Y., & Huang, X. (2018). One-year operation of 1000-L modularized microbial fuel cell for municipal wastewater treatment. *Water Research*, 141, 1-8.

---

*Parameter documentation for the MESS (Microbial Electrochemical Systems Standardization) framework.*

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Wall+Thickness&body=**Parameter%3A**+Wall+Thickness%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fwall-thickness.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Wall+Thickness&body=**Parameter%3A**+Wall+Thickness%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fwall-thickness.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Wall+Thickness&body=**Parameter%3A**+Wall+Thickness%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fwall-thickness.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
