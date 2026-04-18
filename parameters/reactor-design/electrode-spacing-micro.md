# Electrode Spacing Micro

Electrode spacing at the micro scale refers to the separation distance between the anode and cathode electrodes in micro-scale microbial electrochemical system (MES) test cells, measured in micrometers (um). These micro-scale devices are typically fabricated on standard microscope slide formats (75 mm x 25 mm) using microfabrication techniques borrowed from the semiconductor and microfluidics industries. The micro-scale electrode spacing is a critical design parameter because it determines the ionic resistance, diffusion transport times, and electrochemical performance of these miniaturized bioelectrochemical systems.

At micro-scale electrode spacings (100-5000 um), the ionic resistance of the electrolyte is dramatically reduced compared to macro-scale MES, enabling much higher current densities and power densities per unit area. The short diffusion distances also enable rapid substrate delivery to the biofilm and efficient proton transport from anode to cathode, minimizing concentration polarization and pH gradient losses. These advantages make micro-MES particularly attractive for rapid electrode material screening, fundamental biofilm studies, and specialized applications such as biosensors and implantable power sources.

However, micro-scale electrode spacing introduces unique challenges. The small gap is susceptible to blockage by biofilm growth, gas bubbles, and particulate matter. At spacings below 200 um, the biofilm from the anode can potentially bridge to the cathode, creating short circuits. The small electrolyte volume between the electrodes provides minimal buffering capacity, making pH control more challenging. Despite these challenges, micro-MES with optimized electrode spacing have demonstrated areal power densities exceeding those of macro-scale systems, validating the approach for both research and application contexts.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Reactor Design |
| **Subcategory** | Micro-Scale Test Cells (75mm × 25mm slides) |
| **Type** | number |
| **Unit** | μm |
| **Minimum** | 100 |
| **Maximum** | 5000 |

## Typical Values

- **Valid Range**: 100 - 5000 um
- **Typical Range**: 200 - 2000 um

## Measurement Methods

- **Optical Profilometry**: White light interferometry or confocal microscopy measures the electrode spacing with sub-micrometer precision by scanning the surface profile of the assembled device. This non-destructive method can map spacing uniformity across the entire electrode area.
- **Scanning Electron Microscopy (SEM)**: Cross-sectional SEM imaging of the assembled or potted device provides direct visualization of the inter-electrode gap at nanometer resolution. This reveals the actual spacing accounting for electrode roughness, biofilm presence, and spacer compression.
- **Impedance-Based Estimation**: The high-frequency resistance from EIS provides the total ohmic resistance. Knowing the electrolyte conductivity and electrode area, the effective electrode spacing can be calculated: d = R_hf * kappa * A. This gives the electrochemically effective spacing rather than the geometric spacing.
- **Spacer Thickness Measurement**: Since micro-scale electrode spacing is often defined by a spacer layer (adhesive tape, PDMS gasket, SU-8 pattern), measuring the spacer thickness with a micrometer or profilometer provides the designed electrode spacing. Verification after assembly accounts for compression.

## Affecting Factors

### Primary

- **Ionic Resistance**: At micro-scale, the ionic resistance per unit area (ASR) is very low. For a 500 um spacing with 10 mS/cm electrolyte, the ASR is only 0.5 ohm*cm2, compared to 10 ohm*cm2 for a 10 mm spacing in a macro-scale cell. This reduction is the primary motivation for micro-scale designs.
- **Biofilm Growth Accommodation**: Electroactive biofilms can grow 10-100 um thick. At electrode spacings below 300 um, the biofilm may occupy a significant fraction of the inter-electrode gap, increasing flow resistance and potentially causing short circuits. A minimum spacing of 3-5x the expected biofilm thickness is recommended.
- **Bubble Management**: Gas bubbles at micro-scale spacings can completely block the inter-electrode gap. Bubble diameter must be smaller than the spacing to allow passage, limiting the minimum practical spacing to approximately 200 um for systems producing CO2 or H2.
- **Fabrication Precision**: The tolerance on electrode spacing must be a small fraction of the total spacing. At 500 um, a +/- 50 um tolerance represents +/- 10% variation in resistance, which is acceptable. At 200 um, the same absolute tolerance represents +/- 25% variation, requiring higher precision fabrication.
- **Membraneless Operation**: Many micro-MES devices operate without membranes, relying on laminar flow to separate anolyte and catholyte streams. The electrode spacing in these devices must be wide enough to maintain stable laminar flow but narrow enough to limit diffusive mixing of the two streams.
- **Substrate Depletion**: Rapid substrate consumption by the biofilm at short spacings can create depletion zones that limit current production in downstream regions.
- **pH Gradients**: The small buffer volume at micro-scale spacings makes pH control challenging. Proton production at the anode rapidly acidifies the thin electrolyte layer.
- **Particle Clogging**: Even small particles (>50 um) can restrict or block flow at micro-scale spacings when treating real wastewater.

## Related Parameters

- **name**: Electrode Spacing (Cell)

- **relationship**: Macro-scale equivalent of this parameter
- **name**: Channel Depth

- **relationship**: Often equal to or related to the electrode spacing in micro-scale devices
- **name**: Channel Width

- **relationship**: The lateral dimension of the micro-scale reaction zone
- **name**: Slide Length / Slide Width / Slide Thickness

- **relationship**: Overall micro-cell dimensions
- **name**: Chamber Volume

- **relationship**: Directly determined by electrode spacing and cell dimensions
- **name**: Internal Resistance (Cell)

- **relationship**: The ohmic component scales linearly with spacing

## Compatible Systems

Cell Geometry Dimensions

## References

- Choi, S. (2015). Microscale microbial fuel cells: advances and challenges. Biosensors and Bioelectronics, 69, 8-25.
- Qian, F., Baum, M., Gu, Q., & Morse, D. E. (2009). A 1.5 uL microbial fuel cell for on-chip bioelectricity generation. Lab on a Chip, 9(21), 3076-3081.
- Ringeisen, B. R., Henderson, E., Wu, P. K., Pietron, J., Ray, R., Little, B., ... & Jones-Meehan, J. M. (2006). High power density from a miniature microbial fuel cell using Shewanella oneidensis DSP10. Environmental Science & Technology, 40(8), 2629-2634.
- Li, Z., Zhang, Y., LeDuc, P. R., & Gregory, K. B. (2011). Microbial electricity generation via microfluidic flow control. Biotechnology and Bioengineering, 108(9), 2061-2069.
- Jiang, H., Ali, M. A., Xu, Z., Halverson, L. J., & Dong, L. (2017). Integrated microfluidic flow-through microbial fuel cells. Scientific Reports, 7(1), 41208.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Electrode+Spacing+Micro&body=**Parameter%3A**+Electrode+Spacing+Micro%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Felectrode-spacing-micro.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Electrode+Spacing+Micro&body=**Parameter%3A**+Electrode+Spacing+Micro%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Felectrode-spacing-micro.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Electrode+Spacing+Micro&body=**Parameter%3A**+Electrode+Spacing+Micro%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Felectrode-spacing-micro.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
