# Mixing Type

Mixing type describes the mechanism and hardware used to achieve fluid agitation in a microbial electrochemical system (MES). The choice of mixing type fundamentally determines the flow pattern, shear distribution, power consumption, and scalability of the mixing system. Each mixing type has distinct advantages and limitations for MES applications, where the dual requirements of adequate mass transfer and biofilm preservation must be satisfied simultaneously.

Common mixing types in MES include: magnetic stirring (dominant at lab scale, 10--500 mL), mechanical impeller mixing (lab to pilot scale, 0.5--1000 L), external recirculation (all scales, uses a pump to circulate liquid through an external loop), gas sparging (using biogas or nitrogen to create bubble-driven mixing), passive mixing (relying on natural convection, feed-point momentum, or reactor geometry), and oscillatory/vibratory mixing. Each type produces a characteristic shear profile and mixing efficiency.

For MES applications, magnetic stirring and recirculation are the most common. Magnetic stirring provides gentle, controllable mixing at lab scale but cannot scale beyond approximately 5 L. Recirculation provides scalable mixing with well-characterized mass transfer coefficients and the ability to integrate external heat exchange, pH adjustment, and sensing in the recirculation loop. Gas sparging is generally avoided in anaerobic anolyte chambers because it introduces gas into the system and can disrupt biofilm.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Operational |
| **Subcategory** | Mixing Control |
| **Type** | select |

## Typical Values

- **Valid Range**: Categorical
- **Magnetic stirrer**: Most common at lab scale (< 500 mL); 50--300 RPM; 0.1--5 W
- **Mechanical impeller**: Paddle, Rushton, marine propeller; 30--500 RPM; 1--500 W
- **External recirculation**: Pump-driven loop; 1--100x feed rate; 0.5--2000 W
- **Gas sparging**: N2 or CO2; 0.1--1 vvm; not suitable for anaerobic anolyte
- **Passive mixing**: Baffles, flow path geometry; 0 W external input
- **Oscillatory baffled reactor**: 0.5--5 Hz oscillation; novel approach for MES

## Measurement Methods

- **Documentation**: Mixing type is a categorical design parameter documented as part of the experimental methods. Complete documentation includes: mixing device type, manufacturer and model, impeller geometry (type, diameter, clearance), speed setting, and calculated power input.
- **Flow Visualization**: Dye injection and photographic/video recording visualize flow patterns and dead zones. Laser sheet illumination of fluorescent particles provides more detailed flow visualization. This confirms the actual mixing pattern matches the intended design.
- **Computational Fluid Dynamics (CFD)**: CFD simulation (ANSYS Fluent, COMSOL, OpenFOAM) models the velocity field, shear stress distribution, and mixing time for the specific reactor geometry and mixing configuration. CFD enables optimization of impeller position, baffle design, and recirculation port locations before physical construction.

## Affecting Factors

### Primary

- **Scale**: Magnetic stirring is limited to < 5 L. Mechanical impellers scale from 0.5 L to 10000+ L. Recirculation is scalable at all sizes.
- **Anaerobic Requirements**: Gas sparging with air or oxygen is incompatible with anaerobic anolytes. Only inert gas (N2, CO2) sparging is acceptable, and even this may cause electrode gas blinding.
- **Shear Sensitivity**: Biofilm-based MES requires low-shear mixing. Mechanical impellers create localized high-shear zones near the blade tips. Recirculation provides more uniform, lower shear.
- **Energy Budget**: For energy-positive MFC operation, mixing power must be minimized. Passive mixing (0 W) is ideal but may provide insufficient mass transfer.
- **Maintenance Access**: Magnetic stirrers require no moving parts inside the reactor. Mechanical impellers require shaft seals that can leak or fail. Recirculation pumps are external and easily replaced.

## Related Parameters

- **name**: [Mixer Power](mixer-power.md)

- **relationship**: Power consumption by mixing type
- **name**: [Mixer Speed](mixer-speed.md)

- **relationship**: Rotational speed setting
- **name**: [Mixing Intensity](mixing-intensity.md)

- **relationship**: Resultant mixing vigor
- **name**: [Mixing Time](mixing-time.md)

- **relationship**: Homogenization time
- **name**: [Recirculation Ratio](recirculation-ratio.md)

- **relationship**: For recirculation mixing

## Compatible Systems

Process Control Parameters

## References

- Paul, E.L., Atiemo-Obeng, V.A., Kresta, S.M. (2004). Handbook of Industrial Mixing. John Wiley & Sons.
- He, Z., Minteer, S.D., Angenent, L.T. (2005). "Electricity generation from artificial wastewater using an upflow microbial fuel cell." Environmental Science & Technology, 39(14), 5262-5267.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Mixing+Type&body=**Parameter%3A**+Mixing+Type%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fmixing-type.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Mixing+Type&body=**Parameter%3A**+Mixing+Type%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fmixing-type.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Mixing+Type&body=**Parameter%3A**+Mixing+Type%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fmixing-type.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
