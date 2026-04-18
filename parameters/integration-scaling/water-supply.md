# Water Supply

Water supply describes the source, quality, and quantity of water required for MES operation beyond the wastewater influent. This includes: process water for buffer and medium preparation, rinse water for membrane and electrode cleaning, cooling water for temperature control, and make-up water for evaporation losses. The water supply requirements depend on the MES configuration, scale, and operating environment.

At laboratory scale, deionized (DI) or Milli-Q water (18.2 Mohm-cm resistivity) is standard for preparing buffer solutions and defined media. At pilot and full scale, potable water or treated water from the host facility is used for cleaning, cooling, and chemical preparation. In water-scarce environments, minimizing auxiliary water consumption is critical for the sustainability case of MES technology.

For MDC applications, the water supply includes the saline water to be desalinated, which may be brackish water (1--10 g/L TDS), seawater (35 g/L TDS), or industrial brine. The quality and salinity of the feed water directly affects desalination energy efficiency and membrane performance.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Integration Scaling |
| **Subcategory** | Utility Requirements |
| **Type** | number |
| **Unit** | m³/d |
| **Minimum** | 1 |
| **Maximum** | 1000 |

## Typical Values

- **Valid Range**: 0 -- 1000 m^3/d
- **Lab MFC (DI water for media)**: 0.1 -- 5 L/d
- **Pilot MFC (cleaning + chemicals)**: 10 -- 100 L/d
- **Full-scale MFC (auxiliary water)**: 1 -- 50 m^3/d
- **MDC feed water (brackish)**: 1 -- 10 g/L TDS
- **MDC feed water (seawater)**: 35 g/L TDS
- **Water for buffer preparation**: 1 -- 10 L per batch cycle (lab)
- **Cleaning water**: 3 -- 10x reactor volume per cleaning event

## Measurement Methods

- **Water Meter**: A calibrated water meter on the supply line measures total water consumption. Logging at daily intervals provides average and peak consumption data. Precision: +/- 2% for standard water meters.
- **Water Quality Testing**: Supply water quality is verified for pH, conductivity, hardness, chlorine residual (which can inhibit biofilms), and microbial contamination. Frequency: monthly for routine, upon supply change.

## Affecting Factors

### Primary

- **Scale**: Auxiliary water consumption scales approximately linearly with treatment capacity.
- **Cleaning Frequency**: More frequent cleaning increases water consumption. Optimizing cleaning intervals reduces total water use.
- **Climate**: Hot, dry climates increase evaporation losses (5--20% of working volume per month for open systems).
- **Water Quality**: Hard water (> 200 mg/L CaCO3) requires softening or increases membrane scaling and cleaning water demand.

## Related Parameters

- **name**: [Utility Connections](utility-connections.md)

- **relationship**: Infrastructure for water delivery
- **name**: [Water Cost](../economic/water-cost.md)

- **relationship**: Economic cost of water supply
- **name**: [Water Footprint](../economic/water-footprint.md)

- **relationship**: Total water use lifecycle
- **name**: [Flush Cycles](flush-cycles.md)

- **relationship**: Cleaning water consumption

## Compatible Systems

Infrastructure Requirements

## References

- Tchobanoglous, G. et al. (2003). Wastewater Engineering: Treatment and Reuse, 4th ed. McGraw-Hill.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Water+Supply&body=**Parameter%3A**+Water+Supply%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fwater-supply.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Water+Supply&body=**Parameter%3A**+Water+Supply%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fwater-supply.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Water+Supply&body=**Parameter%3A**+Water+Supply%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fwater-supply.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
