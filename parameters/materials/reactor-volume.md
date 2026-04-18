# Reactor Volume

Reactor volume specifies the total internal liquid-holding capacity of a single microbial electrochemical system (MES) reactor chamber, expressed in milliliters (mL). This parameter encompasses the working volume available for electrolyte, substrate, and bioelectrochemical reactions, and is the fundamental sizing parameter from which treatment capacity, hydraulic retention time, and volumetric performance metrics are derived.

Reactor volume in MES research spans over six orders of magnitude, from micro-liter devices used for high-throughput screening and fundamental biofilm studies to thousand-liter pilot systems treating real wastewater. The volume directly determines the quantity of substrate that can be processed per unit time and the amount of electrode surface that can be accommodated, making it the primary scaling dimension for MES technology development.

The distinction between total geometric volume, working liquid volume, and effective volume is important in MES. Total geometric volume is calculated from internal dimensions. Working liquid volume excludes headspace but includes liquid around and within electrodes. Effective volume accounts for the fraction of liquid that actively participates in the bioelectrochemical process, excluding dead zones and short-circuit paths. For packed-bed electrode reactors, the void fraction (typically 0.3-0.7) significantly reduces the effective volume relative to geometric volume.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Materials |
| **Type** | number |
| **Unit** | mL |
| **Papers Reporting** | 299 |

## Typical Values

- **Valid Range**: 0.01 mL to 10,000,000 mL (10 m^3)
- **Typical Range**: 10 mL to 100,000 mL
- **Micro-MFC**: 0.01-1 mL
- **H-cell MFC (per chamber)**: 50-500 mL
- **Single-chamber air-cathode MFC**: 10-500 mL
- **Flat-plate MFC**: 20-200 mL (lab), 1,000-50,000 mL (pilot)
- **Tubular MFC**: 100-5,000 mL (lab), 10,000-500,000 mL (pilot)
- **MEC for H2 production**: 50-1,000 mL (lab), 5,000-100,000 mL (pilot)
- **Largest reported single MES system**: ~1,000,000 mL (1 m^3, Liang et al., 2018)

## Measurement Methods

- **Gravimetric Method**: The reactor is weighed empty and then filled completely with water. Volume = (mass_full - mass_empty) / density_water. This provides the total internal volume with accuracy of +/- 0.1-1 mL depending on balance precision. This method is the gold standard for irregular geometries.
- **Geometric Calculation**: For simple geometries: rectangular V = L x W x H; cylindrical V = pi x r^2 x h. Internal dimensions are measured with calipers. Accuracy depends on geometric regularity and measurement precision (+/- 1-5%).
- **Volumetric Displacement**: Water is added to the reactor using a graduated cylinder or burette until the reactor is full, providing a direct volume measurement. Precision: +/- 1-2% for graduated cylinders, +/- 0.1% for burettes.
- **CAD Model Integration**: For complex internal geometries (baffled reactors, reactors with internal electrode assemblies), CAD software computes the volume by numerical integration of the 3D model. The electrode volume is subtracted to obtain the liquid volume.

## Affecting Factors

### Primary

- **Treatment capacity requirement**: Design flow rate divided by target HRT determines minimum working volume. For 1 m^3/day flow with 12 h HRT, minimum volume = 500 L.
- **Electrode configuration**: Electrodes occupy 10-50% of geometric volume depending on type. Carbon brush: ~15-25% void fraction reduction. Packed granular: ~30-50% reduction. This must be accounted for in volume calculations.
- **Scale and application**: Lab-scale fundamental studies use small volumes (10-500 mL) for cost and convenience. Pilot-scale validation requires 10-1000 L for statistical significance and real-world conditions. Industrial scale targets 1,000-100,000 L.
- **Headspace requirements**: Gas-producing systems (MEC H2, electromethanogenesis) need 10-25% headspace above the working volume for gas collection and pressure equalization.
- **Manufacturing method**: Machined acrylic reactors are practical up to ~5 L. Larger volumes require thermoforming, welding, or standard tank fabrication methods (stainless steel, HDPE, FRP) that have minimum practical volumes of 50-100 L.

## Compatible Systems

Reactor Geometry

## References

1. Logan, B.E. et al. "Microbial fuel cells: Methodology and technology." Environmental Science & Technology, 40(17), 5181-5192 (2006).
2. Logan, B.E. "Essential data and techniques for conducting microbial fuel cell experiments." ChemSusChem, 5(6), 988-994 (2012).
3. Cheng, S. and Logan, B.E. "Increasing power generation for scaling up single-chamber air cathode microbial fuel cells." Bioresource Technology, 102(6), 4468-4473 (2011).
4. Ge, Z. et al. "Long-term performance of a 200 liter modularized microbial fuel cell system." Bioresource Technology, 218, 682-690 (2016).
5. Liang, P. et al. "One-year operation of 1000-L modularized microbial fuel cell for municipal wastewater treatment." Water Research, 141, 1-8 (2018).

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Reactor+Volume&body=**Parameter%3A**+Reactor+Volume%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Freactor-volume.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Reactor+Volume&body=**Parameter%3A**+Reactor+Volume%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Freactor-volume.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Reactor+Volume&body=**Parameter%3A**+Reactor+Volume%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Freactor-volume.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
