# Carbon Paper

Carbon paper is a thin, rigid, sheet-form electrode material composed of carbon fibers bound together with a carbonized resin binder, used in microbial electrochemical systems (MES) as both electrode substrate and gas diffusion layer. Unlike flexible carbon cloth (woven) and compressible carbon felt (non-woven thick mat), carbon paper is a stiff, planar material with precisely controlled thickness (100-400 um), porosity (70-80%), and surface properties. The manufacturing process involves wet-laying chopped carbon fibers (5-15 mm length, 7-10 um diameter) into a sheet, impregnating with phenolic resin, and heat-treating at 1000-2500 C to carbonize the binder and develop electrical conductivity.

The principal commercial carbon papers used in MES research are the Toray TGP-H series (TGP-H-060: 190 um; TGP-H-090: 280 um; TGP-H-120: 370 um), SGL Carbon Sigracet (28AA, 29BC, 39BC series), and AvCarb products. These were originally developed for polymer electrolyte membrane fuel cells (PEMFCs) and have been adapted for MES applications. The TGP-H series is particularly well-characterized, with in-plane conductivity of 4000-12,000 S/m, through-plane conductivity of 200-1000 S/m, and gas permeability that can be tuned through PTFE hydrophobic treatment (0-60 wt% PTFE).

In MES, carbon paper serves as a compact, high-conductivity electrode substrate with excellent reproducibility between samples, making it the preferred material for fundamental electrochemical studies where precise control of geometric area and surface properties is required. Its flat, smooth surface facilitates quantitative biofilm analysis and is particularly suited for electrochemical quartz crystal microbalance (EQCM) and scanning electrochemical microscopy (SECM) studies of microbial electron transfer.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Materials |
| **Subcategory** | Carbon-Based Anodes |
| **Type** | object |

## Typical Values

- **Valid Range**: Thickness 50-500 um; porosity 60-85%; conductivity 200-15,000 S/m
- **Typical Range**: Thickness 150-400 um; porosity 70-80%; conductivity 2000-8000 S/m
- **Fiber Diameter**: 7-10 um
- **BET Surface Area**: 0.1-2 m^2/g
- **Air Permeability (Gurley)**: 5-200 seconds per 100 mL
- **Flexural Strength**: 20-80 MPa
- **Cost**: $200-$600/m^2

## Measurement Methods

- **Thickness and Uniformity**: Micrometer measurement at multiple points across the sheet provides thickness data. Digital micrometers (Mitutoyo, 0.001 mm resolution) with flat anvils at 50-100 kPa contact pressure are standard. Thickness uniformity should be within +/-5% across the sheet.
- **Gas Permeability**: Gurley permeability (ASTM D726) or Frazier air permeability (ASTM D737) quantifies the gas transport properties critical for air-cathode applications. Higher PTFE loading decreases air permeability but increases water management capability.
- **Electrical Conductivity**: Four-point probe method measures in-plane conductivity. Through-plane conductivity is measured in a compression fixture with gold-plated contacts at defined pressure (0.5-1 MPa). The significant anisotropy (in-plane/through-plane ratio of 4-15) must be considered in MES electrode design.

## Affecting Factors

### Primary

- **Resin Content and Carbonization**: Higher resin content (30-50 wt% before carbonization) increases mechanical rigidity but may reduce porosity by 5-15%. Carbonization temperature (1000-2500 C) determines the conductivity of the binder phase. Incomplete carbonization below 1200 C leaves resistive carbon that increases contact resistance.
- **PTFE Treatment Level**: PTFE impregnation (5-40 wt%) for cathode gas diffusion layers increases contact angle from 80-100 degrees to 130-160 degrees. At 20-30 wt% PTFE, the optimal balance between water rejection and gas transport is achieved for air-cathode MFC operation.
- **Microporous Layer (MPL)**: A thin (20-80 um) carbon black/PTFE layer applied to one face of carbon paper creates a microporous layer that improves water management and catalyst-electrode contact. MPL porosity (30-50%) and hydrophobicity are tuned for specific operating conditions.
- **Thickness**: Thinner papers (100-200 um) minimize diffusion resistance and material cost but are mechanically fragile. Thicker papers (300-400 um) provide better structural support for catalyst layers but increase gas diffusion path length.
- **Fiber Type and Length**: PAN-based fibers provide higher conductivity than rayon-based fibers. Shorter fibers (3-5 mm) produce smoother surfaces for catalyst coating, while longer fibers (10-15 mm) improve tensile strength.

## Related Parameters

- **name**: Gas Diffusion Layer

- **relationship**: Carbon paper is the primary gas diffusion layer material for air-cathode MES configurations.
- **name**: Cathode Material

- **relationship**: Carbon paper with catalyst coating serves as a complete air-cathode assembly.
- **name**: Electrode Porosity

- **relationship**: Carbon paper porosity (70-80%) balances gas transport and mechanical rigidity.
- **name**: Diffusion Resistance

- **relationship**: Through-plane diffusion resistance is directly proportional to paper thickness and inversely proportional to porosity.

## Compatible Systems

Anode Materials

## References

- Cheng, S., Liu, H., & Logan, B. E. (2006). Increased performance of single-chamber microbial fuel cells using an improved cathode structure. Electrochemistry Communications, 8(3), 489-494.
- Pham, T. H. et al. (2006). Anode performance of carbon felt and carbon paper in a microbial fuel cell. Electroanalysis, 18(19-20), 2009-2015.
- Zhang, X. et al. (2011). Carbon paper as cathode catalyst support in microbial fuel cells. Bioresource Technology, 102(13), 6999-7003.
- Mathuriya, A. S. & Yakhmi, J. V. (2016). Microbial fuel cells - applications for generation of electrical power. Critical Reviews in Microbiology, 42(1), 127-143.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Carbon+Paper&body=**Parameter%3A**+Carbon+Paper%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fcarbon-paper.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Carbon+Paper&body=**Parameter%3A**+Carbon+Paper%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fcarbon-paper.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Carbon+Paper&body=**Parameter%3A**+Carbon+Paper%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fcarbon-paper.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
