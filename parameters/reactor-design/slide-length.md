# Slide Length

Slide Length refers to the principal longitudinal dimension of planar electrode substrates, microscopy slides, or flat-plate components used in microbial electrochemical system (MES) fabrication, characterization, and quality control. Measured in millimeters or centimeters, this parameter defines the working area of glass slides for biofilm imaging, carbon cloth or graphite plate electrodes cut to specification, membrane coupons for testing, and flat-plate reactor channels. In the safety and regulatory context, slide length determines the structural load-bearing capacity of flat components (critical for pressurized flat-plate MES reactors), the handling hazards during cutting and machining operations, the adequacy of sample sizes for statistically valid safety testing, and compliance with standardized testing protocols that require specific specimen dimensions.

Safety considerations for slide length in MES span fabrication and operational phases. During fabrication, cutting glass or ceramic substrates to specific lengths generates sharp edges and particulate debris -- glass fragments are a common laboratory injury cause (CDC reports >30,000 glass-related injuries annually in US laboratories). Longer slides are more prone to breakage during handling due to increased bending moment at fixed supports. Carbon cloth and graphite plate cutting produces conductive dust that poses electrical short-circuit and inhalation hazards. Operationally, slide length dimensions in flat-plate MES reactors determine the pressure rating of the assembly: longer unsupported spans have lower allowable pressure differentials before buckling or fracture.

Regulatory compliance linked to slide length includes ASTM and ISO specimen dimension requirements for standardized testing (material strength, chemical resistance, electrochemical performance), OSHA laboratory safety standards (29 CFR 1910.1450) for glass handling, ANSI Z87.1 eye protection requirements during cutting operations, and ASME BPVC requirements for flat-plate stress analysis in pressurized reactors. Dimensional accuracy and traceability to calibrated measurement standards are required under ISO 17025 for accredited testing laboratories.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Reactor Design |
| **Subcategory** | Micro-Scale Test Cells (75mm × 25mm slides) |
| **Type** | number |
| **Unit** | mm |
| **Minimum** | 50 |
| **Maximum** | 100 |

## Typical Values

- **Valid Range**: 5-1000 mm depending on application
- **Typical Range**: 25-300 mm for most MES electrode substrates and test specimens

## Measurement Methods

- **Calibrated Digital Measurement**: 1. Select appropriate measurement instrument based on required accuracy: digital caliper (+/- 0.01 mm for lengths <300 mm), steel rule (+/- 0.5 mm for lengths >300 mm), coordinate measuring machine (+/- 0.001 mm for precision applications) 2. Clean the specimen and measurement surfaces to remove debris 3. Align the specimen against a reference edge or use V-blocks for cylindrical specimens 4. Measure length at three positions across the width (left, center, right) to detect non-parallelism 5. Calculate mean length and standard deviation across measurements 6. Record ambient temperature: thermal expansion correction needed for precision work (CTE x delta-T x L) 7. Ensure measurement traceability to NIST or equivalent national metrology institute calibration standards
- **Optical Measurement (Non-Contact)**: 1. Place specimen on calibrated measurement stage with fiducial markers 2. Image using calibrated camera system (telecentric lens recommended to minimize parallax) 3. Determine slide length from image analysis software using pixel-to-mm calibration 4. Accuracy: typically +/- 0.05 mm for laboratory imaging systems 5. Advantageous for fragile specimens (glass, thin membranes) that may deform under contact measurement pressure
- **Batch Quality Control**: 1. Establish dimensional specification with tolerances (e.g., 75.0 +/- 0.5 mm) 2. Sample according to AQL (Acceptable Quality Level) per ISO 2859-1 (e.g., General Inspection Level II, AQL 1.0%) 3. Measure sampled specimens using calibrated instruments 4. Accept or reject batch based on number of out-of-specification measurements versus acceptance number 5. Document results for quality records and traceability per ISO 9001 requirements

## Affecting Factors

### Primary

- **Material Type**: Glass slides have tight dimensional tolerances from manufacturing (+/- 0.5 mm); hand-cut carbon cloth may vary by +/- 2-5 mm; precision laser cutting provides +/- 0.1 mm
- **Cutting Method**: Manual cutting (scoring and breaking glass, scissors for carbon cloth) produces variable dimensions; laser cutting and die cutting provide precision and clean edges
- **Thermal Expansion**: Slide length varies with temperature; at 20 degC change, a 300 mm glass slide changes by ~2.5 micrometer (negligible), while a 300 mm polymer piece may change by 15-60 micrometer
- **Moisture Absorption**: Polymer and paper-based substrates swell with moisture absorption, effectively increasing length; Nafion can expand 5-15% in humid conditions
- **Mechanical Stress History**: Residual stresses from manufacturing can cause warping or bowing that affects effective length measurement
- **Edge Quality**: Rough or chipped edges from cutting reduce effective length and create stress concentrators
- **Storage Conditions**: Temperature and humidity fluctuations during storage can cause dimensional changes in hygroscopic materials
- **Measurement Technique**: Contact measurement may compress compliant materials; non-contact methods avoid this but have lower resolution for opaque materials

## Related Parameters

- **name**: Slide Width

- **relationship**: Combined with length, determines the electrode or test specimen area, which is fundamental to all area-normalized performance metrics
- **name**: Slide Thickness

- **relationship**: Thickness and length together determine the stiffness and pressure rating of flat components
- **name**: Anode Area (Cell) / Cathode Area (Cell)

- **relationship**: Electrode area is calculated from length x width dimensions
- **name**: Electrode Spacing (Micro)

- **relationship**: The spatial relationship between electrode slide length and inter-electrode distance affects current distribution uniformity
- **name**: Transparency

- **relationship**: Glass slide optical properties (transmittance) are measured through the length/width plane

## Compatible Systems

Cell Geometry Dimensions

## References

- ISO 8037-1:2003. Optics and optical instruments -- Microscopes -- Slides -- Part 1: Dimensions, optical properties and marking.
- ASTM D638-14. Standard Test Method for Tensile Properties of Plastics.
- ASTM D882-18. Standard Test Method for Tensile Properties of Thin Plastic Sheeting.
- ASME. (2021). Boiler and Pressure Vessel Code, Section VIII, Division 1. UG-34: Unstayed Flat Heads and Covers.
- Logan, B. E. (2008). Microbial Fuel Cells. John Wiley & Sons.
- OSHA. (2019). Laboratory Safety Guidance. OSHA Publication 3404.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Slide+Length&body=**Parameter%3A**+Slide+Length%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fslide-length.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Slide+Length&body=**Parameter%3A**+Slide+Length%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fslide-length.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Slide+Length&body=**Parameter%3A**+Slide+Length%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fslide-length.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
