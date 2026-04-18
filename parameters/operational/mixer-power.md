# Mixer Power

Mixer power is the electrical power consumed by mechanical mixing devices (impellers, magnetic stirrers, recirculation pumps) used to maintain homogeneous conditions within MES reactors. Expressed in watts (W) or W/m^3, this parameter directly impacts the net energy balance of the system. In MFCs, where the goal is net positive energy production, mixer power consumption can exceed the electrical output, rendering the system energy-negative. Minimizing mixer power while maintaining adequate mass transfer is therefore a critical design objective.

Power input for mixing affects substrate transport to the biofilm, pH buffering near electrodes, prevention of concentration gradients, and suspension of particulate matter. Laboratory MES commonly use magnetic stir bars (0.1--5 W), orbital shakers (5--50 W shared across multiple reactors), or recirculation pumps (0.5--20 W). Pilot-scale systems use mechanical impellers (10--500 W) or external recirculation loops (50--2000 W pump power). The volumetric power input (W/m^3) is the standard comparison metric.

For energy-positive MFC operation, mixing must be achieved at less than 20--50% of the gross electrical power output. Passive mixing strategies (gas-lift from CO2 evolution, gravity-driven recirculation, baffled flow paths) eliminate mixer power entirely but may provide insufficient mixing in large reactors.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Operational |
| **Subcategory** | Mixing Control |
| **Type** | number |
| **Unit** | W/m³ |
| **Minimum** | 0 |
| **Maximum** | 1000 |

## Typical Values

- **Valid Range**: 0 -- 10000 W/m^3
- **Magnetic stirrer (lab)**: 0.1 -- 5 W (50 -- 500 W/m^3 for 100 mL reactor)
- **Overhead impeller (lab)**: 1 -- 20 W
- **Recirculation pump (lab)**: 0.5 -- 10 W
- **Mechanical impeller (pilot)**: 10 -- 500 W (1 -- 50 W/m^3)
- **Activated sludge mixing (reference)**: 5 -- 30 W/m^3
- **Target for energy-positive MFC**: < 2 W/m^3
- **Passive mixing (gas-lift, gravity)**: 0 W (no external input)

## Measurement Methods

- **Electrical Power Measurement**: A wattmeter or power analyzer measures the real power drawn by the mixing device from the electrical supply. For AC motors: P = V * I * cos(phi). For DC motors: P = V * I. For variable-speed drives, power varies with speed and should be measured at the operating setpoint. Precision: +/- 1% for digital power meters.
- **Torque-Speed Method**: A torque sensor on the mixer shaft measures the mechanical torque. Power = torque x angular velocity (P = T * 2 * pi * N / 60, where T is in N-m and N is in RPM). This gives the mechanical power delivered to the fluid, excluding motor inefficiency. Motor efficiency (typically 50--85%) converts electrical to mechanical power.

## Affecting Factors

### Primary

- **Reactor Volume**: Power requirement scales approximately with V^(2/3) to V^1 for geometrically similar systems. Larger reactors require disproportionately more mixing power per unit volume.
- **Fluid Viscosity**: Higher viscosity (high-solids wastewater) increases power requirement approximately linearly.
- **Impeller Type and Speed**: Rushton turbines provide high shear but high power consumption. Marine propellers provide bulk flow at lower power. Power scales with N^3 * D^5 (N = speed, D = impeller diameter).
- **Mixing Objective**: Gentle bulk circulation requires 1--5 W/m^3; complete suspension of solids requires 10--50 W/m^3; gas dispersion requires 50--500 W/m^3.

## Related Parameters

- **name**: [Mixer Speed](mixer-speed.md)

- **relationship**: Rotational speed of the impeller
- **name**: [Mixing Intensity](mixing-intensity.md)

- **relationship**: Quantified mixing performance
- **name**: [Mixing Type](mixing-type.md)

- **relationship**: Method of mixing
- **name**: [Reynolds Number Mixing](reynolds-number-mixing.md)

- **relationship**: Flow regime characterization
- **name**: [Power Requirement](power-requirement.md)

- **relationship**: Total system power demand

## Compatible Systems

Process Control Parameters

## References

- Paul, E.L., Atiemo-Obeng, V.A., Kresta, S.M. (2004). Handbook of Industrial Mixing. John Wiley & Sons.
- He, Z. et al. (2006). "An upflow microbial fuel cell with an interior cathode." Environmental Science & Technology, 40(17), 5212-5217.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Mixer+Power&body=**Parameter%3A**+Mixer+Power%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fmixer-power.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Mixer+Power&body=**Parameter%3A**+Mixer+Power%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fmixer-power.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Mixer+Power&body=**Parameter%3A**+Mixer+Power%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fmixer-power.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
