# Electrode Diameter

Electrode diameter refers to the cross-sectional dimension of cylindrical or rod-shaped electrodes used in microbial electrochemical systems (MES), most commonly graphite rod anodes, carbon brush electrodes, tubular carbon felt electrodes, and wire-form current collectors. For carbon brush electrodes -- one of the highest-performing anode architectures in MFCs -- the overall brush diameter determines the volumetric electrode surface area, the biofilm loading capacity, and the hydrodynamic resistance to electrolyte flow through and around the electrode.

The electrode diameter directly impacts several key performance parameters through geometric scaling relationships. For a cylindrical electrode of diameter d and length L, the external surface area scales as pi x d x L (proportional to d), while the cross-sectional area scales as pi x d^2/4 (proportional to d^2). The volume displaced by the electrode within the reactor chamber scales as d^2, meaning that larger-diameter electrodes reduce the effective anolyte volume and may impede flow. For carbon brush electrodes composed of carbon fibers wound around a titanium wire core, the brush diameter (typically 2-5 cm for lab-scale, 5-15 cm for pilot-scale) determines the total fiber surface area accessible for biofilm colonization.

In scale-up design, electrode diameter selection involves trade-offs between maximizing electrode surface area per unit reactor volume (favoring larger diameters or multiple smaller electrodes), minimizing flow resistance and dead zones (favoring smaller diameters with adequate spacing), and ensuring uniform current distribution across the electrode cross-section (limited by the conductivity of the electrode material and the electrolyte penetration depth into porous structures).

## Basic Information

| Property | Value |
|---|---|
| **Category** | Materials |
| **Type** | number |
| **Unit** | cm |
| **Papers Reporting** | 553 |

## Typical Values

- **Valid Range**: 0.1 - 50 cm
- **Typical Range**: 0.5 - 10 cm
- **Graphite Rod Anode (lab-scale)**: 0.5 - 2.5 cm
- **Carbon Brush Electrode (lab-scale)**: 2.5 - 5 cm
- **Carbon Brush Electrode (pilot-scale)**: 5 - 15 cm
- **Tubular Carbon Felt Electrode**: 2 - 10 cm
- **Titanium Wire Current Collector**: 0.05 - 0.3 cm
- **Stainless Steel Mesh Cathode (rolled tubular)**: 3 - 20 cm
- **Carbon Fiber Tow (individual)**: 5 - 10 um (fiber diameter)

## Measurement Methods

- **Vernier Caliper / Micrometer**: Direct measurement of electrode outer diameter using precision calipers (digital or analog). For brush electrodes, measure the maximum spread diameter of the fiber bundle. For porous electrodes (carbon felt rolls), measure under defined compression (0% = uncompressed, specify). Equipment: Mitutoyo digital caliper (precision +/- 0.01 mm) or micrometer (+/- 0.001 mm). Measure at 3+ locations along electrode length and report average +/- standard deviation.
- **Optical/Laser Measurement**: Non-contact diameter measurement using laser micrometers (Keyence LS-9000 series) or optical comparators for precise dimensional characterization without deforming soft porous materials. Resolution: +/- 0.001 mm; scan rate enables full-length diameter profiling for uniformity assessment. Useful for quality control of manufactured electrode batches.
- **X-Ray Micro-Computed Tomography (micro-CT)**: For porous or composite electrodes, micro-CT provides 3-D internal structure including effective diameter, fiber packing density, and pore size distribution throughout the electrode cross-section. Resolution: 1-50 um voxel size depending on sample diameter and scanner capability. Equipment: Bruker SkyScan, Zeiss Xradia; scan time: 1-8 hours per sample.

## Affecting Factors

### Primary

- **Reactor Chamber Dimensions**: The electrode diameter must be compatible with the reactor chamber cross-section. For cylindrical reactors, electrode diameter should be 30-70% of chamber diameter to allow adequate electrolyte annular flow (Reynolds number > 100 for turbulent mixing). Too large: flow restriction and dead zones; too small: wasted reactor volume.
- **Electrode Material Conductivity**: For graphite rod electrodes (conductivity ~10^3 S/m), diameters up to 5 cm maintain uniform potential distribution across the cross-section. For carbon brush with titanium wire core, the core wire diameter determines the current collection capacity; thicker cores (2-3 mm) support higher total currents at lower ohmic loss.
- **Biofilm Penetration Depth**: In brush electrodes, biofilm colonizes carbon fibers primarily in the outer 5-15 mm of the brush radius. Fibers in the center core may remain uncolonized due to substrate depletion and limited electrolyte penetration. This suggests diminishing returns for brush diameters beyond ~3 cm in lab-scale reactors with typical substrate concentrations.
- **Scale-Up Requirements**: Pilot-scale systems require larger-diameter electrodes or multi-electrode arrays. Increasing single-electrode diameter beyond 10-15 cm risks non-uniform current distribution, internal mass transport limitations, and increased ohmic losses through the electrode material. Modular arrays of smaller electrodes often outperform single large electrodes.
- **Manufacturing Constraints**: Carbon brush fabrication requires specialized winding equipment that limits practical fiber bundle diameter. Graphite rods are commercially available in standard diameters (6.35, 9.53, 12.7, 19.05, 25.4 mm). Custom diameters require machining (turning on a lathe), which adds cost.
- **Flow Configuration**: In upflow reactors, electrode diameter affects the superficial velocity and contact time. Larger diameter electrodes in fixed-bed configurations create higher pressure drops (Ergun equation). In fluidized-bed MES, electrode particle diameter (0.5-5 mm for granular carbon) determines fluidization velocity and expansion ratio.

## Compatible Systems

Electrode Geometry

## References

- Logan, B.E., et al. (2007). "Graphite fiber brush anodes for increased power production in air-cathode microbial fuel cells." *Environmental Science & Technology*, 41(9), 3341-3346. DOI: 10.1021/es062644y
- Cheng, S., & Logan, B.E. (2007). "Ammonia treatment of carbon cloth anodes to enhance power generation of microbial fuel cells." *Electrochemistry Communications*, 9, 492-496. DOI: 10.1016/j.elecom.2006.10.023
- Liang, P., et al. (2018). "One-year operation of 1000-L modularized microbial fuel cell for municipal wastewater treatment." *Water Research*, 141, 1-8. DOI: 10.1016/j.watres.2018.04.066
- Wei, J., et al. (2011). "Recent progress in electrodes for microbial fuel cells." *Bioresource Technology*, 102, 9335-9344. DOI: 10.1016/j.biortech.2011.07.019

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Electrode+Diameter&body=**Parameter%3A**+Electrode+Diameter%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Felectrode-diameter.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Electrode+Diameter&body=**Parameter%3A**+Electrode+Diameter%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Felectrode-diameter.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Electrode+Diameter&body=**Parameter%3A**+Electrode+Diameter%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Felectrode-diameter.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
