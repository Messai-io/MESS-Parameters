# Printing Speed

Printing speed quantifies the rate at which the print head or deposition system
moves during additive manufacturing of electrodes for microbial electrochemical
systems. This parameter directly affects production throughput, print quality,
and material properties. Optimal printing speed balances production efficiency
with dimensional accuracy and material integrity.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Emerging Technology |
| **Subcategory** | Printing Parameters |
| **Type** | number |
| **Unit** | mm/s |
| **Minimum** | 1 |
| **Maximum** | 500 |
| **Papers Reporting** | 2 |

## Typical Values

- **Range**: 1 - 500 mm/s
- **Typical**: 10 - 100 mm/s
- **Optimal**: 20 - 50 mm/s
- **Performance Categories**: - **Low Performance**: <5 mm/s (very slow, low throughput)
- **Moderate Performance**: 5 - 20 mm/s (standard speed)
- **High Performance**: 20 - 100 mm/s (fast printing)
- **Exceptional Performance**: >100 mm/s (very fast, specialized systems)

## Measurement Methods

- **Direct Measurement**: 1. **Machine Control System**:     - Direct readout from printer controller    - Real-time speed monitoring    - Average speed over print segments    - Account for acceleration/deceleration  2. **Video Analysis**:    - High-speed camera recording    - Track print head movement    - Calculate velocity from position vs time    - Independent verification method
- **Calculation Considerations**: - Distinguish between travel speed and print speed - Account for complex path geometries - Consider acceleration and jerk limitations

## Affecting Factors

### Primary

- **Printing Technology**: - Fused Deposition Modeling (FDM): 10-150 mm/s    - Stereolithography (SLA): 5-50 mm/s    - Direct Ink Writing: 1-20 mm/s    - Selective Laser Sintering: 50-500 mm/s
- **Material Properties**: - Low viscosity: Higher speeds possible    - High viscosity: Requires slower speeds    - Fast-curing materials: Enable higher speeds
- **Print Quality Requirements**: - High resolution: Slower speeds needed    - Coarse features: Faster speeds acceptable    - Critical dimensions: Conservative speeds
- **Layer Thickness**: - Thin layers: Require slower speeds    - Thick layers: Allow faster speeds    - Heat dissipation considerations
- **Ambient Conditions**: - Temperature affects material flow    - Humidity may affect curing/solidification    - Vibration limits achievable speeds

## Performance Impact

Print speed directly affects production time and cost. Doubling print speed
reduces production time by ~50% but may compromise quality. Optimal speeds
typically achieve >95% dimensional accuracy while maintaining reasonable
throughput.

## Compatible Systems

3d Printing Additive Manufacturing

## References

1. **Gibson, I., et al.** (2015). "Additive Manufacturing Technologies: 3D
   Printing, Rapid Prototyping, and Direct Digital Manufacturing". Springer, New
   York.

   - Comprehensive treatment of printing parameters

2. **Lewis, J.A.** (2006). "Direct ink writing of 3D functional materials".
   _Advanced Functional Materials_, 16(17), 2193-2204.

   - Speed optimization in direct ink writing

3. **Turner, B.N., et al.** (2014). "A review of melt extrusion additive
   manufacturing processes: I. Process design and modeling". _Rapid Prototyping
   Journal_, 20(3), 192-204.
   - Process parameters including speed in FDM

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Printing+Speed&body=**Parameter%3A**+Printing+Speed%0A**Category%3A**+Emerging+Technology%0A**File%3A**+parameters%2Femerging-technology%2Fprinting-speed.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Printing+Speed&body=**Parameter%3A**+Printing+Speed%0A**Category%3A**+Emerging+Technology%0A**File%3A**+parameters%2Femerging-technology%2Fprinting-speed.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Printing+Speed&body=**Parameter%3A**+Printing+Speed%0A**Category%3A**+Emerging+Technology%0A**File%3A**+parameters%2Femerging-technology%2Fprinting-speed.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
