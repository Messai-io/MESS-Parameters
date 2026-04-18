# Device Volume

Device volume refers to the total geometric (external) volume of a microbial electrochemical system (MES) reactor, encompassing the reaction chamber(s), electrode assemblies, membrane(s), structural housing, ports, and fittings. This parameter is distinct from the working liquid volume (batch volume) and represents the overall physical footprint of the device in three dimensions. Device volume is a critical scaling and comparison metric because it determines the volumetric power density (W/m^3), volumetric treatment rate (kg COD/m^3/d), and spatial efficiency of the technology.

In MES literature, device volume is often reported ambiguously, with some studies using total reactor volume (including headspace), others using net anodic chamber volume (liquid only), and still others using the empty chamber volume (excluding electrode displacement). This inconsistency complicates cross-study comparison and has led to calls for standardized reporting protocols. The International Society for Microbial Electrochemistry and Technology (IS-MET) recommends reporting both total device volume and net liquid volume.

Device volume is a primary consideration in techno-economic analysis (TEA) because it directly impacts material costs, land footprint, and installation requirements. Smaller device volumes per unit of treatment capacity reduce capital costs and improve the competitive position of MES relative to activated sludge systems (which typically require 0.5--2 m^3 per m^3/d of treatment capacity).

## Basic Information

| Property | Value |
|---|---|
| **Category** | Application Specific |
| **Subcategory** | Implantable Systems |
| **Type** | number |
| **Unit** | mm³ |
| **Minimum** | 1 |
| **Maximum** | 10000 |
| **Papers Reporting** | 2 |

## Typical Values

- **Valid Range**: 0.000001 -- 10000 L
- **Microfluidic MFC**: 0.001 -- 1 mL
- **Miniature air-cathode MFC**: 4 -- 30 mL
- **Standard lab-scale MFC**: 25 -- 500 mL
- **H-type dual-chamber MFC**: 200 -- 1000 mL
- **Tubular MFC**: 0.5 -- 50 L
- **Pilot-scale MFC stack**: 10 -- 200 L
- **Pre-commercial MFC system**: 100 -- 10000 L

## Measurement Methods

- **CAD Volume Calculation**: The reactor geometry is modeled in CAD software (SolidWorks, Fusion 360, FreeCAD) and the enclosed volume is computed automatically. This method accounts for all internal features including electrode slots, membrane frames, and port volumes. Accuracy: +/- 0.5% for machined reactors, +/- 2% for 3D-printed reactors.
- **Water Displacement Method**: The reactor is sealed at all ports except one fill port and completely filled with water. The volume of water required is measured gravimetrically. Subtracting electrode and membrane volumes gives the net liquid volume. Precision: +/- 1% for volumes > 100 mL.
- **Dimensional Measurement**: External dimensions are measured with calipers (precision +/- 0.1 mm) and the geometric volume calculated. Wall thickness is subtracted to obtain internal volume. Accuracy +/- 5% for complex shapes.

## Affecting Factors

### Primary

- **Reactor Architecture**: Single-chamber air-cathode designs are the most volume-efficient, achieving 50--200 W/m^3. Dual-chamber H-type reactors are 3--5x larger per unit electrode area due to the bridge connection.
- **Electrode Configuration**: Carbon brush anodes fill 10--30% of chamber volume. Planar carbon cloth allows more compact designs. Three-dimensional porous electrodes achieve 100--500 m^2/m^3 specific surface area.
- **Membrane Requirements**: Dual-chamber systems require additional volume for the membrane support structure and catholyte chamber, typically doubling the device volume relative to membraneless designs.
- **Scaling Strategy**: Numbering-up (parallel small modules) results in higher total device volume than scaling-up (single large reactor) due to redundant housings, but maintains better performance per unit volume.
- **Structural Material**: Thick-walled acrylic reactors (5--10 mm walls) consume 15--30% of total device volume as structure. Thin-walled injection-molded reactors (1--3 mm) reduce this to 3--8%.

## Related Parameters

- **name**: [Batch Volume](batch-volume.md)

- **relationship**: Working liquid volume within the device
- **name**: [Module Size](module-size.md)

- **relationship**: Size of individual modules in a stacked system
- **name**: [Land Footprint](../economic/land-footprint.md)

- **relationship**: Area occupied by the installed system
- **name**: [Reactor Cost](../economic/reactor-cost.md)

- **relationship**: Cost scales with device volume

## Compatible Systems

Medical Device Applications

## References

- Logan, B.E. et al. (2006). "Microbial fuel cells: methodology and technology." Environmental Science & Technology, 40(17), 5181-5192.
- Ge, Z., Li, J., Xiao, L., Tong, Y., He, Z. (2014). "Recovery of electrical energy in microbial fuel cells." Environmental Science & Technology Letters, 1(2), 137-141.
- Liang, P. et al. (2018). "One-year operation of 1000-L modularized microbial fuel cell for municipal wastewater treatment." Water Research, 141, 1-8.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Device+Volume&body=**Parameter%3A**+Device+Volume%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fdevice-volume.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Device+Volume&body=**Parameter%3A**+Device+Volume%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fdevice-volume.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Device+Volume&body=**Parameter%3A**+Device+Volume%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fdevice-volume.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
