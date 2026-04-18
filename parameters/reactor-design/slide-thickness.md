# Slide Thickness

Slide Thickness refers to the through-plane dimension of flat substrates, electrodes, membranes, and reactor wall components used in microbial electrochemical systems (MES), measured in millimeters or micrometers. This parameter is critical for determining the mechanical strength, deflection under load, pressure rating, thermal resistance, and mass transport characteristics of flat components. In the safety and regulatory context, slide thickness directly controls the structural integrity of reactor walls and viewing windows (thicker = stronger but heavier), the fragility of glass components during handling (standard microscopy slides at 1.0-1.2 mm are a leading cause of laboratory cuts), membrane performance and durability (thickness affects both ion transport and mechanical robustness), and electrode electrochemical behavior (thickness determines internal resistance and mass transport limitations).

Safety implications of slide thickness span multiple risk categories. Insufficient thickness of glass reactor windows under pressure leads to catastrophic failure (burst pressure scales with thickness squared for flat plates); industry practice requires a minimum safety factor of 4x on burst pressure per ASME BPVC. Membrane thickness below manufacturer specifications (due to manufacturing variability or in-service degradation) can result in pinhole defects and cross-contamination of electrode chambers -- critical in MECs where H2/O2 mixing creates explosion risk. Excessively thick electrodes create mass transport limitations that concentrate electrochemical reactions at the outer surface, potentially generating localized heating. During fabrication, thin material cutting and handling poses laceration risk proportional to edge sharpness, which increases with material brittleness and thinness.

Regulatory frameworks addressing thickness include ASME BPVC Section VIII (minimum wall thickness for pressure-containing components), ASTM E211 and ISO 8037 (microscopy slide thickness specifications), ASTM D5947 (plastic film thickness measurement), EU Pressure Equipment Directive 2014/68/EU (minimum thickness requirements with corrosion allowance), and quality management standards (ISO 9001, ISO 17025) requiring dimensional verification and traceability.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Reactor Design |
| **Subcategory** | Micro-Scale Test Cells (75mm × 25mm slides) |
| **Type** | number |
| **Unit** | mm |
| **Minimum** | 1 |
| **Maximum** | 5 |

## Typical Values

- **Valid Range**: 0.001-50 mm depending on component type
- **Typical Range**: 0.025-5 mm for most MES components

## Measurement Methods

- **Mechanical Measurement (ASTM D5947, ASTM D374)**: 1. Select appropriate instrument: digital micrometer (+/- 0.001 mm) for sheets >0.1 mm; dial thickness gauge for compliant materials; profilometer for films <0.1 mm 2. For rigid materials: measure at 5 points (four corners and center) using a flat-anvil micrometer 3. For compliant materials: use constant-pressure thickness gauge (ASTM D374) at 50 kPa for membranes and fabrics 4. Calculate mean thickness, standard deviation, and thickness uniformity (ratio of min to max) 5. Acceptable uniformity: >90% (min/max ratio) for most MES applications; >95% for precision membrane applications 6. Report measurement conditions: temperature (CTE correction for precision work), humidity (swelling correction for membranes)
- **Optical/Non-Contact Methods**: 1. Confocal microscopy: Measure thickness of transparent materials by identifying upper and lower surface reflections (resolution ~1 micrometer) 2. Optical coherence tomography (OCT): Non-destructive thickness mapping of translucent membranes and films (resolution ~5-10 micrometer) 3. Eddy current: Non-contact thickness measurement of metallic films and coatings on conductive substrates (resolution ~1 micrometer) 4. Beta-backscatter: For coatings and thin films on various substrates per ASTM B567
- **Cross-Sectional Analysis**: 1. Prepare cross-section by embedding in epoxy resin, sectioning with diamond saw, and polishing 2. Image cross-section by optical microscopy or SEM 3. Measure thickness from calibrated images at multiple points along the section 4. Useful for: multi-layer membranes, coated electrodes, composite structures, and degradation assessment 5. Destructive method; used for quality control validation and failure analysis

## Affecting Factors

### Primary

- **Manufacturing Process**: Roll pressing, casting, extrusion, and spray coating produce different thickness uniformity; tighter process control reduces thickness variability
- **Hydration State**: Nafion thickness increases 15-20% from dry to fully hydrated state; all polymer membranes show some moisture-dependent thickness change
- **Compression**: Gasket compression during assembly reduces effective thickness of compressible materials (carbon felt, gaskets); specified compression ratio (typically 15-30%) must be maintained
- **Temperature**: Thermal expansion through thickness is typically small (<1%) but can be significant for thick polymer components
- **Degradation**: Chemical attack, erosion, and biofouling degradation reduce material thickness over service life; periodic thickness verification is a safety inspection requirement
- **Pressure**: Creep under sustained pressure reduces thickness of polymer components over time (viscoelastic behavior)
- **Assembly Torque**: Bolt torque in flat-plate reactor assembly directly controls membrane and gasket compression
- **Batch Variability**: Manufacturing lot-to-lot thickness variation may exceed individual-specimen variation
- **Surface Roughness**: Surface asperities make thickness measurement method-dependent; different instruments yield different effective thickness values for rough surfaces

## Related Parameters

- **name**: Slide Length / Slide Width

- **relationship**: Combined with thickness, these three dimensions fully define the geometry and structural properties of flat components
- **name**: Chemical Resistance

- **relationship**: Chemical degradation reduces effective thickness, requiring corrosion allowance in design
- **name**: Stability

- **relationship**: Thickness stability over operational lifetime is essential for maintaining pressure ratings and electrochemical performance
- **name**: Electrode Spacing (Micro)

- **relationship**: Component thickness directly affects the achievable electrode spacing in compact reactor designs
- **name**: Shrinkage Rate

- **relationship**: Curing and drying shrinkage affects thickness uniformity and final dimensions

## Compatible Systems

Cell Geometry Dimensions

## References

- ASME. (2021). Boiler and Pressure Vessel Code, Section VIII, Division 1. UG-16: General.
- ASTM D5947-18. Standard Test Methods for Physical Dimensions of Solid Plastics Specimens.
- ISO 8037-1:2003. Optics and optical instruments -- Microscopes -- Slides.
- Kusoglu, A., & Weber, A. Z. (2017). New insights into perfluorinated sulfonic-acid ionomers. Chemical Reviews, 117(3), 987-1104.
- Logan, B. E. (2008). Microbial Fuel Cells. John Wiley & Sons. Chapter 5: Materials and Architectures.
- Young, W. C., & Budynas, R. G. (2002). Roark's Formulas for Stress and Strain, 7th Edition. McGraw-Hill.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Slide+Thickness&body=**Parameter%3A**+Slide+Thickness%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fslide-thickness.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Slide+Thickness&body=**Parameter%3A**+Slide+Thickness%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fslide-thickness.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Slide+Thickness&body=**Parameter%3A**+Slide+Thickness%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fslide-thickness.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
