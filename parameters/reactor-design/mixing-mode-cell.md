# Mixing Mode Cell

Mixing mode describes the method by which the electrolyte within an individual microbial electrochemical system (MES) cell is agitated or circulated to promote homogeneous substrate distribution, enhance mass transport to the electrode surfaces, prevent sedimentation of suspended solids, and maintain uniform temperature and pH conditions throughout the reactor. The mixing mode ranges from no active mixing (relying solely on diffusion and natural convection) to vigorous mechanical mixing (stirring, shaking) or hydraulic mixing (recirculation, pulsed flow). The choice of mixing mode represents a fundamental trade-off between improved bioelectrochemical performance and the energy cost of mixing.

In laboratory-scale MFCs, many studies operate without active mixing (quiescent conditions) or with gentle magnetic stirring, which is sufficient given the small reactor volumes and short diffusion distances. However, as MES systems scale up, the ratio of electrode surface area to reactor volume decreases and diffusion distances increase, making active mixing increasingly important for maintaining adequate mass transport. Without mixing, concentration boundary layers build up at the electrode surfaces, reducing substrate availability at the biofilm and increasing concentration overpotentials. Conversely, excessive mixing can shear off biofilm from the electrode surface, particularly young or loosely attached biofilms.

For MECs, mixing is important to keep the cathode surface clear of product gas bubbles (hydrogen) that can block the active catalyst sites. In MDCs, mixing in the desalination chamber prevents concentration polarization at the membrane surfaces, which reduces the effective driving force for ion transport. Advanced mixing strategies include intermittent mixing (alternating periods of mixing and quiescence), flow-induced mixing (using the hydraulic flow pattern to create internal vortices), and gas-sparging mixing (using generated or injected gas to agitate the liquid), each optimized for different MES applications and scales.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Reactor Design |
| **Subcategory** | Cell Flow Dynamics |
| **Type** | select |

## Typical Values

- **Valid Range**: Categorical (see modes below)
- **None (Quiescent/Diffusion Only)**: No active mixing; relies on diffusion and natural convection; common in small lab cells
- **Magnetic Stirring**: Magnetic stir bar at 50--300 rpm; common in laboratory MFCs; energy: 1--5 W
- **Mechanical Stirring**: Impeller or paddle at 50--200 rpm; used in larger laboratory and pilot systems
- **Recirculation**: Electrolyte pumped from outlet back to inlet; recirculation rates 2--20x feed rate
- **Shaking/Rocking**: Orbital shaker at 50--200 rpm; for small batch MFCs; energy: 5--20 W
- **Gas Sparging**: N2 or CO2 bubbling at 5--50 mL/min; enhances mixing and may scrub biofilm surface
- **Flow-Induced**: Baffles, serpentine channels, or spiral flow create mixing from the feed flow
- **Pulsed Flow**: Alternating flow rate to create transient mixing; reduces energy vs. continuous mixing
- **Ultrasonic**: Brief ultrasonic pulses to enhance mass transport; experimental

## Measurement Methods

- **Mixing Time Determination**: Inject a concentrated tracer (acid, base, dye, or salt) at a point in the reactor and measure the time required for the tracer concentration to reach 95% of its final (fully mixed) value at a monitoring point distant from the injection. The mixing time should be less than 10% of the hydraulic retention time for effective homogenization. Shorter mixing times indicate more effective mixing.
- **Velocity Field Mapping**: Use particle image velocimetry (PIV) with transparent reactor walls and fluorescent tracer particles to map the velocity field within the cell under different mixing modes. This reveals dead zones, recirculation patterns, and regions of high shear. Alternatively, use computational fluid dynamics (CFD) simulation to predict the velocity field for each mixing mode option.
- **Power Input Measurement**: Measure the electrical power consumed by the mixing device (stirrer motor, pump, shaker). For MFCs, the mixing power should be compared to the electrical output: if mixing power exceeds the MFC output, the system has negative net energy. Typical mixing power requirements are 0.01--1 W/L for gentle mixing, 1--10 W/L for vigorous mixing.

## Affecting Factors

### Primary

- **Mass Transport Enhancement**: Mixing reduces the boundary layer thickness at the electrode surface, improving substrate delivery. The mass transfer coefficient scales as k_m ~ D/delta, where delta is the boundary layer thickness, which decreases with increasing mixing intensity.
- **Biofilm Shear**: Shear stress on the biofilm increases with mixing intensity. Moderate shear (0.01--0.5 Pa) promotes dense, electroactive biofilms. Excessive shear (above 1 Pa) can detach the biofilm.
- **Energy Consumption**: Mixing energy input must be balanced against the bioelectrochemical output. For net-positive energy operation, mixing power should be less than 20% of the MFC electrical output.
- **Reactor Scale**: Small cells (less than 100 mL) rarely need active mixing due to short diffusion distances. Larger cells (above 500 mL) typically benefit from mixing.
- **Sedimentation Prevention**: Wastewater feeds with suspended solids require mixing to prevent settling that can bury electrodes or clog flow paths.
- **Temperature Uniformity**: Mixing prevents thermal stratification in cells with temperature control systems.
- **pH Homogeneity**: Mixing prevents localized pH extremes near electrodes where proton generation (anode) or consumption (cathode) creates gradients.
- **Gas Bubble Removal**: Mixing helps dislodge gas bubbles from electrode surfaces, maintaining active electrode area.

## Related Parameters

- **name**: Flow Mode (Cell)

- **relationship**: Continuous flow modes inherently provide some degree of mixing.
- **name**: Flow Rate (Cell)

- **relationship**: Higher flow rates increase flow-induced mixing.
- **name**: Reynolds Number

- **relationship**: Indicates the flow regime and degree of turbulent mixing.
- **name**: Dead Zone Fraction

- **relationship**: Active mixing reduces dead zones.
- **name**: Residence Time

- **relationship**: Mixing affects the effective residence time distribution.
- **name**: Power Density (Cell)

- **relationship**: Net power density accounts for mixing energy consumption.
- **name**: Flow Uniformity

- **relationship**: Mixing improves the spatial uniformity of substrate distribution.

## Compatible Systems

Cell Specific Operational Parameters

## References

- Pham, H.T., Boon, N., Aelterman, P., et al. (2008). High shear enrichment improves the performance of the anodophilic microbial consortium in a microbial fuel cell. *Microbial Biotechnology*, 1(6), 487--496.
- He, Z., Wagner, N., Minteer, S.D., & Angenent, L.T. (2006). An upflow microbial fuel cell with an interior cathode: Assessment of the internal resistance by impedance spectroscopy. *Environmental Science & Technology*, 40(17), 5212--5217.
- Kim, J.R., Rodriguez, J., Hawkes, F.R., et al. (2011). Increasing power recovery and organic removal efficiency using extended longitudinal tubular microbial fuel cell (MFC) reactors. *Energy & Environmental Science*, 4(2), 459--465.
- Logan, B.E. (2008). *Microbial Fuel Cells*. John Wiley & Sons. Chapter 6: Operation.
- Li, W.W., Yu, H.Q., & He, Z. (2014). Towards sustainable wastewater treatment by using microbial fuel cells-centered technologies. *Energy & Environmental Science*, 7(3), 911--924.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Mixing+Mode+Cell&body=**Parameter%3A**+Mixing+Mode+Cell%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fmixing-mode-cell.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Mixing+Mode+Cell&body=**Parameter%3A**+Mixing+Mode+Cell%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fmixing-mode-cell.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Mixing+Mode+Cell&body=**Parameter%3A**+Mixing+Mode+Cell%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fmixing-mode-cell.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
