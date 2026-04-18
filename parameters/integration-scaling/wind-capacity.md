# Wind Capacity

Wind capacity refers to the rated power output of wind energy generation equipment used to provide supplementary or primary electrical power for MES ancillary equipment in off-grid or renewable-energy-integrated installations. Expressed in watts (W) or kilowatts (kW), this parameter is relevant to MES deployed in remote locations, developing regions, or sustainability-focused projects where grid power is unavailable or where the goal is to achieve 100% renewable energy operation.

MES are well-suited for integration with intermittent renewable energy sources because their bioelectrochemical processes are inherently tolerant of power supply interruptions. MFC mode requires no external power (it generates power), so wind capacity is relevant only for ancillary equipment (pumps, monitoring, control). MEC mode requires continuous applied voltage, but the hydrogen production rate can be modulated with wind availability, storing hydrogen during windy periods and idling during calm periods.

Small wind turbines (100 W -- 10 kW) are the most relevant scale for MES integration. A typical pilot-scale MES with 100--500 W of ancillary power demand can be supported by a 1--5 kW wind turbine with battery storage for calm periods. The wind capacity must be sized with a capacity factor (typically 20--35% for small turbines) to account for intermittent generation.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Integration Scaling |
| **Subcategory** | Renewable Integration |
| **Type** | number |
| **Unit** | kW |
| **Minimum** | 0 |
| **Maximum** | 10000 |

## Typical Values

- **Valid Range**: 0 -- 100000 W
- **Micro wind turbine**: 10 -- 100 W (for sensor-powered MFC)
- **Small wind turbine (residential)**: 400 -- 3000 W
- **Medium wind turbine**: 3 -- 25 kW
- **Large wind turbine**: 25 -- 100 kW
- **Capacity factor (small turbine)**: 15 -- 30%
- **Effective average power (1 kW rated)**: 150 -- 300 W
- **Typical MFC ancillary demand**: 5 -- 500 W
- **Battery storage (12 h autonomy at 100 W)**: 1.2 kWh (100 Ah at 12 V)

## Measurement Methods

- **Turbine Power Curve**: The turbine's power output is measured at multiple wind speeds (3--25 m/s) to generate the power curve. Rated capacity is the power at rated wind speed (typically 11--13 m/s). Cut-in speed (minimum for generation, typically 2.5--4 m/s) and cut-out speed (maximum safe, typically 25 m/s) are documented.
- **Site Wind Assessment**: An anemometer (cup type or ultrasonic) installed at hub height measures wind speed continuously for a minimum of 12 months. The Weibull distribution is fitted to the data and annual energy production (AEP) is calculated by integrating the wind speed distribution against the turbine power curve.

## Affecting Factors

### Primary

- **Site Wind Resource**: Mean annual wind speed > 5 m/s is required for economic small wind. Sites with < 4 m/s mean speed are unsuitable.
- **Turbine Height**: Wind speed increases with height above ground (power law with exponent 0.1--0.3). Raising hub height from 10 m to 20 m can increase energy by 20--40%.
- **Energy Storage**: Battery storage (lead-acid, lithium-ion) bridges calm periods. Sizing: 12--48 hours of autonomy at average load.
- **Hybrid Systems**: Wind-solar hybrid systems provide more consistent power than either alone, improving MES operational reliability.

## Related Parameters

- **name**: [Power Requirement](power-requirement.md)

- **relationship**: Total ancillary power demand
- **name**: [Renewable Energy Fraction](../economic/renewable-energy-fraction.md)

- **relationship**: Fraction from renewables
- **name**: [Energy Cost](../economic/energy-cost.md)

- **relationship**: Cost of wind-generated electricity
- **name**: [Utility Connections](utility-connections.md)

- **relationship**: Power infrastructure

## Compatible Systems

Hybrid System Integration

## References

- Manwell, J.F., McGowan, J.G., Rogers, A.L. (2009). Wind Energy Explained: Theory, Design and Application, 2nd ed. John Wiley & Sons.
- IEC 61400-2 (2013). "Wind turbines - Part 2: Small wind turbines."

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Wind+Capacity&body=**Parameter%3A**+Wind+Capacity%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fwind-capacity.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Wind+Capacity&body=**Parameter%3A**+Wind+Capacity%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fwind-capacity.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Wind+Capacity&body=**Parameter%3A**+Wind+Capacity%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fwind-capacity.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
