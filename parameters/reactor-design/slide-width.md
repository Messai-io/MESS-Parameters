# Slide Width

Slide Width refers to the lateral (transverse) dimension of planar electrode substrates, microscopy slides, membrane coupons, and flat-plate reactor components used in microbial electrochemical systems (MES), measured in millimeters or centimeters. Together with slide length and thickness, width defines the geometric envelope of flat components that determines electrode area, current distribution uniformity, seal interface length, and structural stiffness in the transverse direction. In the safety and regulatory context, slide width is critical because it affects the sealing perimeter of gasket joints (wider components require longer seal runs with more potential leak points), the transverse stress distribution in pressurized flat-plate reactors, the handling ergonomics during assembly and maintenance (wider components are more difficult to manipulate safely), and compliance with standardized test specimen dimensions required for valid safety testing.

Safety considerations for slide width parallel those of slide length but with distinct aspects. Wider flat panels in pressurized MES reactors experience greater deflection at the center, requiring thicker materials or closer support spacing to prevent failure. The gasket sealing area scales with perimeter (2 x length + 2 x width), and each unit of seal length represents a potential leak path -- wider components increase the total leak risk proportionally. During electrode cutting and handling, wider carbon cloth or graphite sheets are more unwieldy and more likely to flex unexpectedly, increasing the risk of contact with sharp edges or hot surfaces. For standardized testing, width specifications ensure that test results are comparable across laboratories and meet minimum statistical requirements for material property determination.

Regulatory standards specify width requirements for test specimens in ASTM D638 (tensile testing: 13 mm width for Type IV, 19 mm for Type I), ASTM D882 (thin sheeting: 25.4 mm width), ASTM G1/G31 (corrosion coupons: 25 mm width), and ISO 527 (plastics tensile testing). ASME BPVC Section VIII provides design rules for flat plates that depend on the smaller of the two lateral dimensions (which may be width) for stress calculations.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Reactor Design |
| **Subcategory** | Micro-Scale Test Cells (75mm × 25mm slides) |
| **Type** | number |
| **Unit** | mm |
| **Minimum** | 20 |
| **Maximum** | 30 |

## Typical Values

- **Valid Range**: 5-500 mm depending on application
- **Typical Range**: 10-150 mm for most MES electrode substrates and test specimens

## Measurement Methods

- **Contact Measurement**: 1. Use calibrated digital caliper (+/- 0.01 mm) or micrometer for specimens <300 mm 2. For larger specimens, use a calibrated steel rule (+/- 0.5 mm) or measuring tape 3. Measure width at three positions along the length (near each end and center) 4. Calculate mean width and verify uniformity: (max - min) / mean < specified tolerance (typically 2-5%) 5. For standardized test specimens: verify width within ASTM/ISO tolerance before testing 6. Record temperature for CTE correction in precision applications
- **Optical Profile Projection**: 1. Place specimen on optical comparator or profile projector stage 2. Align specimen edge parallel to measurement axis 3. Measure width using calibrated crosshairs or digital readout (accuracy +/- 0.01 mm) 4. Useful for small or fragile specimens where contact measurement may cause damage 5. Record magnification, calibration date, and measurement uncertainty
- **Automated Vision Inspection**: 1. Configure machine vision system with calibrated camera and telecentric lens 2. Place specimen on contrasting background 3. Acquire image and process with edge detection algorithm 4. Measure width at multiple positions along the length (minimum 10 points per specimen) 5. Generate width profile and statistical summary (mean, std dev, min, max) 6. Suitable for batch inspection in electrode manufacturing quality control

## Affecting Factors

### Primary

- **Cutting Method**: Mechanical shearing produces clean edges for metals but may deform soft materials; laser cutting provides precision (+/- 0.1 mm) across material types; die cutting is efficient for production volumes
- **Material Flexibility**: Flexible materials (carbon cloth, thin membranes) may not maintain a flat state during measurement, introducing apparent width variation
- **Thermal State**: Width changes with temperature through CTE; polymers exhibit larger changes (CTE 50-200 ppm/degC) than metals (CTE 10-25 ppm/degC) or glass (CTE 3-9 ppm/degC)
- **Hydration**: Membrane width changes with hydration state; Nafion width can change 5-15% between dry and fully hydrated states
- **Edge Quality**: Frayed edges on woven carbon cloth make effective width ambiguous; sealed or laser-cut edges provide definitive boundaries
- **Roll Curl**: Materials cut from rolls may exhibit curl that affects width measurement in the flat state
- **Assembly Compression**: Gasket-sealed MES assemblies compress material at edges, effectively reducing the active width
- **Machining Tolerance**: CNC machining of graphite and metal provides tightest width tolerance (+/- 0.025 mm); manual cutting is least precise

## Related Parameters

- **name**: Slide Length

- **relationship**: Combined with width, determines electrode area and reactor channel cross-section
- **name**: Slide Thickness

- **relationship**: Width-to-thickness ratio determines stiffness and deflection under lateral loads
- **name**: Anode Area (Cell) / Cathode Area (Cell)

- **relationship**: Electrode area = length x width; width is one of two direct inputs
- **name**: Electrode Spacing (Micro)

- **relationship**: In flat-plate designs, electrode width affects current distribution uniformity
- **name**: Shrinkage Rate

- **relationship**: Lateral shrinkage may reduce width from nominal specification, affecting seal contact area

## Compatible Systems

Cell Geometry Dimensions

## References

- ISO 8037-1:2003. Optics and optical instruments -- Microscopes -- Slides -- Part 1: Dimensions.
- ASTM D638-14. Standard Test Method for Tensile Properties of Plastics.
- ASTM D882-18. Standard Test Method for Tensile Properties of Thin Plastic Sheeting.
- ASME. (2021). Boiler and Pressure Vessel Code, Section VIII, Division 1.
- Logan, B. E. (2008). Microbial Fuel Cells. John Wiley & Sons.
- ISO 527-2:2012. Plastics -- Determination of tensile properties -- Part 2: Test conditions for moulding and extrusion plastics.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Slide+Width&body=**Parameter%3A**+Slide+Width%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fslide-width.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Slide+Width&body=**Parameter%3A**+Slide+Width%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fslide-width.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Slide+Width&body=**Parameter%3A**+Slide+Width%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fslide-width.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
