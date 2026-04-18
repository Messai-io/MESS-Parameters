# Gas Diffusion Layer

A gas diffusion layer (GDL) is a porous, typically carbon-based material positioned on the air side of air-cathode microbial electrochemical systems (MES) to manage the transport of oxygen to the catalyst layer while preventing liquid electrolyte from flooding through the cathode. The GDL serves three simultaneous functions: (1) providing a pathway for O2 diffusion from ambient air to the catalytically active cathode surface, (2) preventing water penetration (flooding) that would block O2 access and reduce cathode performance, and (3) providing mechanical support and electrical conductivity for the cathode assembly.

In air-cathode MFCs, the cathode is the performance-limiting component, and the GDL architecture critically determines the achievable oxygen reduction reaction (ORR) rate. The GDL typically consists of a macroporous substrate (carbon paper, carbon cloth, or non-woven carbon fiber mat, 100-400 um thick) treated with polytetrafluoroethylene (PTFE) to impart hydrophobicity. An optional microporous layer (MPL, 10-50 um thick, carbon black + PTFE) between the substrate and catalyst layer provides finer control of the water-gas interface. The PTFE content (10-60 wt%) determines the balance between hydrophobicity (higher PTFE = better water management) and gas permeability (higher PTFE = more blocked pores).

The oxygen transport through the GDL follows a combination of molecular diffusion and Knudsen diffusion (in pores smaller than the mean free path of O2, ~70 nm at atmospheric pressure). The effective O2 permeability is: P_eff = D_eff x epsilon / tau, where D_eff is the effective diffusion coefficient, epsilon is porosity, and tau is tortuosity. For a well-optimized GDL, P_eff is 10-50% of the bulk air diffusion coefficient. Too-thick or too-hydrophobic GDLs limit O2 supply; too-thin or too-hydrophilic GDLs allow water flooding, creating a liquid barrier to O2 transport.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Materials |
| **Subcategory** | Air Cathodes |
| **Type** | object |

## Typical Values

- **Valid Range**: 50 - 500 um (GDL substrate thickness)
- **Typical Range**: 100 - 350 um
- **Carbon Paper GDL (Toray TGP-H-060)**: 190 um thick; porosity 78%
- **Carbon Cloth GDL**: 300 - 400 um thick; porosity 80-85%
- **PTFE Loading (substrate)**: 10 - 60 wt% (optimal: 20-40 wt%)
- **PTFE Loading (MPL)**: 10 - 40 wt%
- **MPL Thickness**: 10 - 50 um
- **Air Permeability (Gurley)**: 5 - 200 s per 100 mL
- **Through-Plane Electrical Resistance**: 5 - 50 mohm-cm2
- **Water Breakthrough Pressure**: 2 - 30 kPa

## Measurement Methods

- **Air Permeability (Gurley Method)**: Measures the time for a fixed volume of air (100 mL) to pass through the GDL under a specified pressure differential. Lower Gurley numbers indicate higher permeability. Equipment: Gurley densometer (ASTM D726); sample diameter: 28.6 mm; air cylinder mass: 567 g. Precision: +/- 5%. Quick quality control test for GDL manufacturing consistency.
- **Water Breakthrough Pressure**: The GDL is mounted horizontally; water pressure is increased gradually on one side while monitoring the other side for water droplet formation. The pressure at which water first penetrates defines the breakthrough pressure. Higher values indicate better flooding resistance. Equipment: custom test rig with precision pressure regulator and video observation; precision +/- 0.5 kPa.
- **Mercury Intrusion Porosimetry (MIP)**: Characterizes the pore size distribution of the GDL, which determines both O2 transport and water management. PTFE treatment shifts the pore size distribution by partially filling smaller pores. Equipment: Micromeritics AutoPore; pore range: 3.5 nm - 500 um; total porosity precision: +/- 1%.
- **Ex Situ Oxygen Permeation Rate**: The GDL is mounted between an oxygen-rich chamber and an oxygen-depleted chamber (N2-purged). The O2 flux is measured by a dissolved oxygen sensor or GC on the receiving side. O2 permeation rate (mol/m2/s) = measured O2 flux / (area x driving force). Provides the key functional metric for GDL performance.

## Affecting Factors

### Primary

- **PTFE Content**: Increasing PTFE from 0 to 40 wt% increases water contact angle from 120 to 150+ degrees and breakthrough pressure from 2 to 15 kPa, improving flooding resistance. However, PTFE fills pore volume, reducing porosity by 5-15% and increasing Gurley number (decreased gas permeability) by 50-200%. Optimal PTFE loading in MFC GDLs: 20-40 wt%.
- **Substrate Material and Structure**: Carbon paper (rigid, well-defined pore structure) provides more uniform GDL properties than carbon cloth (flexible, woven, larger inter-tow pores). Non-woven carbon fiber mats offer intermediate properties. The fiber diameter (5-10 um), basis weight (50-200 g/m2), and web structure all affect the pore size distribution.
- **Microporous Layer (MPL)**: Adding an MPL between GDL substrate and catalyst layer improves water management by creating a hydrophobic barrier with fine pore structure (0.1-1 um). MPL reduces water back-diffusion to the air side by 50-80% while maintaining adequate O2 transport. Typical MPL composition: Vulcan XC-72 carbon black + 20-30% PTFE.
- **Operating Orientation**: Horizontal cathodes (facing down) are more prone to flooding from gravity-driven water accumulation. Vertical cathodes benefit from gravity-assisted water drainage. In practical installations, GDL design must account for the installed orientation.
- **Electrolyte Ionic Strength and Surface Tension**: Higher ionic strength solutions have lower surface tension (water: 72 mN/m; 100 mM PBS: ~70 mN/m; wastewater: 50-65 mN/m), increasing the tendency to flood through the GDL. Surfactant-containing wastewaters are particularly challenging, potentially requiring thicker PTFE coatings.
- **Operating Duration and Degradation**: Over months to years, PTFE gradually degrades (hydrophobicity loss) from oxidative attack by peroxide intermediates from ORR, UV exposure, and mechanical wear. Salt crystallization in pores from electrolyte evaporation-rewetting cycles progressively blocks gas transport. Periodic replacement or re-PTFE treatment may be required.

## Compatible Systems

Cathode Materials

## References

- Cheng, S., et al. (2006). "Increased performance of single-chamber MFCs using an improved cathode structure." *Electrochemistry Communications*, 8, 489-494. DOI: 10.1016/j.elecom.2006.01.010
- Zhang, F., et al. (2011). "Separator characteristics for increasing performance of microbial fuel cells." *Environmental Science & Technology*, 45, 7097-7101. DOI: 10.1021/es200301c
- Mathias, M.F., et al. (2003). "Diffusion media materials and characterisation." In *Handbook of Fuel Cells*, Vol. 3. Wiley. DOI: 10.1002/9780470974001
- Yang, W., et al. (2014). "Effective use of gas diffusion layer for air cathode microbial fuel cells." *Bioelectrochemistry*, 100, 80-85.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Gas+Diffusion+Layer&body=**Parameter%3A**+Gas+Diffusion+Layer%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fgas-diffusion-layer.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Gas+Diffusion+Layer&body=**Parameter%3A**+Gas+Diffusion+Layer%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fgas-diffusion-layer.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Gas+Diffusion+Layer&body=**Parameter%3A**+Gas+Diffusion+Layer%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fgas-diffusion-layer.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
