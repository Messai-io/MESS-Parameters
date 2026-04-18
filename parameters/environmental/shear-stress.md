# Shear Stress

Shear stress quantifies the tangential force per unit area exerted on surfaces within microbial electrochemical systems (MES) by fluid flow, expressed in pascals (Pa) or dynes/cm^2. In bioelectrochemical engineering, shear stress is the primary mechanical force governing biofilm formation, morphology, thickness, density, and detachment dynamics on electrode surfaces. This parameter mediates the critical trade-off between enhanced mass transfer (substrate delivery, product removal) at high shear and biofilm stability/integrity at low shear, making it one of the most important hydrodynamic parameters for MES optimization.

The shear stress experienced by electroactive biofilms directly shapes their structure and electrical performance. At low shear stress (less than 0.01 Pa), biofilms develop thick, porous, mushroom-shaped architectures with high void fraction but low density and poor mechanical strength. These thick biofilms create internal mass transfer limitations, with substrate concentration dropping to near-zero within the outer 50-100 micrometers, leaving the inner biofilm layers metabolically inactive. At moderate shear (0.01-0.5 Pa), biofilms become thinner, denser, and more uniformly distributed, with improved internal mass transfer and higher specific electron transfer rates. At high shear (above 1 Pa), biofilm detachment exceeds growth, preventing establishment of mature electroactive communities.

For MES operation, the optimal shear stress balances biofilm retention with mass transfer enhancement. Geobacter sulfurreducens biofilms, the model electroactive organism, exhibit maximum current density at shear stresses of 0.05-0.2 Pa, where biofilm thickness stabilizes at 30-80 micrometers with high cell density and extensive conductive pili networks. At these intermediate shear levels, the biofilm extracellular matrix is mechanically compressed, increasing the density of cytochrome c-based electron transfer conduits and reducing the effective resistivity of the biofilm by 30-60% compared to unstressed biofilms.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Environmental |
| **Subcategory** | Vibration & Mechanical |
| **Type** | number |
| **Unit** | Pa |
| **Minimum** | 0 |
| **Maximum** | 1000 |
| **Papers Reporting** | 18 |

## Typical Values

- **Valid Range**: 0 - 100 Pa
- **Typical Range for MES**: 0.001 - 2 Pa
- **Stagnant conditions**: less than 0.001 Pa
- **Optimal for electroactive biofilms**: 0.05 - 0.2 Pa
- **Laminar flow in MES channels**: 0.01 - 0.5 Pa
- **Turbulent flow in MES channels**: 0.5 - 5 Pa
- **Biofilm detachment threshold (general)**: 0.5 - 5 Pa
- **Blood vessel shear stress (comparison)**: 0.5 - 5 Pa
- **Industrial pipe flow**: 1 - 50 Pa

## Measurement Methods

- **Computational Fluid Dynamics (CFD) Estimation**: CFD modeling (COMSOL Multiphysics, ANSYS Fluent, OpenFOAM) provides three-dimensional shear stress distribution maps across MES electrode surfaces without physical measurement. The Navier-Stokes equations are solved for the reactor geometry with appropriate boundary conditions (inlet flow rate, outlet pressure, no-slip walls). Wall shear stress is calculated as tau = mu * (du/dy)|wall, where mu is dynamic viscosity and du/dy is the velocity gradient normal to the surface. CFD accuracy depends on mesh quality (boundary layer resolution of at least 5 elements within the viscous sublayer) and turbulence model selection (k-epsilon, k-omega SST for turbulent flows). Validation against experimental flow measurements improves confidence to 10-20% accuracy.
- **Micro-Particle Image Velocimetry (micro-PIV)**: Fluorescent tracer particles (1-10 micrometer diameter) are seeded into the MES electrolyte and illuminated with a laser sheet. High-speed camera image pairs captured at microsecond intervals are analyzed using cross-correlation algorithms to extract the two-dimensional velocity field near the biofilm surface. The velocity gradient at the wall is computed from the velocity profile and multiplied by viscosity to obtain shear stress. Spatial resolution of 5-50 micrometers enables mapping of local shear stress variations around biofilm features (ridges, streamers, channels). Temporal resolution of 1-100 ms captures shear fluctuations in unsteady flows.
- **Electrochemical Shear Stress Sensors**: Flush-mounted electrochemical shear stress sensors (platinum microelectrode arrays, 10-100 micrometer diameter) measure the mass transfer rate of a redox couple (ferri/ferrocyanide) from which shear stress is calculated using the Leveque solution for laminar flow or empirical correlations for turbulent flow. These sensors provide real-time, point measurement of shear stress with frequency response to 10 kHz, capturing both mean and fluctuating shear components. Integration into MES reactor walls or electrode assemblies enables continuous monitoring during biofilm development.

## Affecting Factors

### Primary

- **Flow velocity and channel geometry**: Wall shear stress in laminar flow through rectangular channels is tau = 6*mu*Q/(w*h^2), where Q is volumetric flow rate, w is channel width, and h is channel height. For a typical MES flow channel (h = 5 mm, w = 50 mm, Q = 10 mL/min, mu = 1 mPa*s), tau = 0.004 Pa. Increasing flow rate to 100 mL/min raises tau to 0.04 Pa. Reducing channel height to 1 mm at the same flow rate increases tau to 1 Pa, demonstrating the strong geometric dependence.
- **Fluid viscosity and temperature**: Electrolyte viscosity directly scales shear stress at a given flow velocity. Water viscosity decreases from 1.31 mPa*s at 10 degrees C to 0.80 mPa*s at 30 degrees C, reducing shear stress by 39% for the same flow conditions. Wastewater with high solids content (more than 5 g/L TSS) can have 2-5x higher apparent viscosity than clean water, proportionally increasing shear stress. Non-Newtonian behavior of concentrated wastewater adds complexity to shear stress prediction.
- **Biofilm roughness and morphology**: As biofilms grow, their surface roughness increases, creating local flow disturbances and elevating shear stress on roughness elements (biofilm streamers, mushroom caps) by 2-10x above the mean wall shear. These local high-shear regions promote selective detachment of weakly attached biofilm, creating a self-regulating thickness control mechanism. Biofilm streamers oscillating in the flow experience dynamic shear loading with peak values 3-5x the mean, making them preferential detachment sites.
- **Electrode porosity and structure**: Three-dimensional porous electrodes (carbon felt, graphite foam, carbon brush) create complex internal flow patterns with shear stress varying by 100-1000x between the external face (high shear) and internal pores (near-stagnant). Biofilm within pores is protected from external shear but experiences severe mass transfer limitation. The effective shear stress for biofilm in porous electrodes depends on the ratio of superficial velocity to actual pore velocity, which scales with porosity^(-1) and tortuosity.
- **Gas bubble formation and two-phase flow**: Gas bubbles (CO2, H2, CH4) generated at electrodes create intermittent high-shear events during bubble growth, departure, and wake formation. Bubble departure from a 1 mm diameter electrode pore generates local shear pulses of 0.5-5 Pa lasting 10-100 ms, sufficient to detach biofilm in the immediate vicinity. In systems with vigorous gas production, bubble-induced shear can be the dominant detachment mechanism, requiring consideration separate from steady-state hydrodynamic shear.

## Compatible Systems

Physical Environmental Factors

## References

- Picioreanu, C., van Loosdrecht, M. C. M., & Heijnen, J. J. (2001). Two-dimensional model of biofilm detachment caused by internal stress from liquid flow. *Biotechnology and Bioengineering*, 72(2), 205-218.
- Stoodley, P., et al. (2002). Biofilms as complex differentiated communities. *Annual Review of Microbiology*, 56, 187-209.
- Flemming, H.-C., & Wingender, J. (2010). The biofilm matrix. *Nature Reviews Microbiology*, 8(9), 623-633.
- Rittmann, B. E. (1982). The effect of shear stress on biofilm loss rate. *Biotechnology and Bioengineering*, 24(2), 501-506.
- Liu, Y., & Tay, J.-H. (2002). The essential role of hydrodynamic shear force in the formation of biofilm and granular sludge. *Water Research*, 36(7), 1653-1665.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Shear+Stress&body=**Parameter%3A**+Shear+Stress%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fshear-stress.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Shear+Stress&body=**Parameter%3A**+Shear+Stress%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fshear-stress.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Shear+Stress&body=**Parameter%3A**+Shear+Stress%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fshear-stress.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
