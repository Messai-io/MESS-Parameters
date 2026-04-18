# Drain Time

Drain time is the duration required to remove the treated liquid (effluent) from a batch-operated or sequencing batch microbial electrochemical system (MES) reactor at the end of a treatment cycle. This parameter is relevant to sequencing batch reactor (SBR) operational modes where the cycle consists of fill, react, settle (if applicable), drain, and idle phases. In MES applications, the drain phase must be carefully managed to avoid disturbing the anode biofilm, introducing oxygen into anaerobic chambers, or leaving residual substrate that could ferment during the idle phase.

The drain time is determined by the reactor geometry, effluent port location and diameter, head pressure (gravity-driven vs. pump-assisted drainage), and the viscosity and solids content of the treated effluent. For gravity-driven systems, drain time follows Torricelli's law, where flow rate decreases as the liquid level drops. Pump-assisted drainage provides more consistent drain rates but adds energy consumption and mechanical complexity.

Rapid drainage is desirable to maximize the fraction of cycle time dedicated to active treatment, but excessively fast drainage can create high shear forces that dislodge biofilm from the anode, generate turbulence that entrains air into the anolyte, or cause hydraulic surges in downstream treatment units. Typical practice limits drain time to 5--15% of the total batch cycle duration.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Operational |
| **Subcategory** | Batch Operation |
| **Type** | number |
| **Unit** | min |
| **Minimum** | 1 |
| **Maximum** | 60 |
| **Papers Reporting** | 97 |

## Typical Values

- **Valid Range**: 0.01 -- 24 h
- **Lab-scale MFC (gravity, 28 mL)**: 0.5 -- 2 min
- **Lab-scale MFC (gravity, 250 mL)**: 2 -- 10 min
- **Bench-scale MFC (pump-assisted, 5 L)**: 5 -- 15 min
- **Pilot-scale MFC (pump, 100 L)**: 15 -- 60 min
- **Pilot-scale MFC (gravity, 100 L)**: 30 -- 120 min
- **SBR MFC cycle fraction**: 5 -- 15% of total cycle time

## Measurement Methods

- **Timed Volume Collection**: Effluent is collected in a calibrated vessel during the drain phase. The time from opening of the drain valve to cessation of flow is recorded. For gravity systems, the instantaneous flow rate can be characterized by collecting volume in 30-second increments. Precision: +/- 5 s for manual timing.
- **Level Sensor Monitoring**: A submersible pressure transducer, ultrasonic level sensor, or capacitive probe monitors the liquid level continuously during drainage. Drain time is the interval between the initial level and the target minimum level. Precision: +/- 1% of full scale.
- **Flow Meter Integration**: A flow meter (electromagnetic, turbine, or Coriolis) installed in the drain line records instantaneous and cumulative flow. Drain time is the duration from first flow detection to flow cessation. Precision: +/- 0.5--2% of reading.

## Affecting Factors

### Primary

- **Reactor Volume and Geometry**: Drain time scales approximately with the square root of reactor height for gravity systems. Wide, shallow reactors drain faster than tall, narrow reactors of the same volume.
- **Drain Port Diameter**: Flow rate through the drain orifice is proportional to the square of the port diameter. Increasing from 6 mm to 12 mm reduces drain time by approximately 75%.
- **Solids Content and Viscosity**: High-solids wastewaters (> 5 g TSS/L) drain more slowly due to increased viscosity and potential clogging. Screen installation at the drain port increases drain time by 20--50%.
- **Drainage Method**: Pump-assisted drainage provides 3--10x faster drain rates than gravity alone with constant flow rate.
- **Residual Volume Target**: Most SBR-mode MES retain 10--30% of the working volume as residual to maintain biofilm hydration and provide microbial inoculum for the next cycle.

## Related Parameters

- **name**: [Fill Time](fill-time.md)

- **relationship**: Duration of the fill phase
- **name**: [Idle Time](idle-time.md)

- **relationship**: Duration between drain and next fill
- **name**: [Batch Duration](batch-duration.md)

- **relationship**: Total cycle time including drain
- **name**: [Batch Volume](batch-volume.md)

- **relationship**: Volume to be drained
- **name**: [Pump Capacity](pump-capacity.md)

- **relationship**: Pump flow rate for assisted drainage

## Compatible Systems

Operating Modes

## References

- Zhang, F., Ge, Z., Grimaud, J., Hurst, J., He, Z. (2013). "Long-term performance of liter-scale microbial fuel cells." Environmental Science & Technology, 47(9), 4941-4948.
- Tchobanoglous, G., Burton, F.L., Stensel, H.D. (2003). Wastewater Engineering: Treatment and Reuse, 4th ed. McGraw-Hill.
- Wilderer, P.A. et al. (2001). "Sequencing batch reactor technology." IWA Publishing.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Drain+Time&body=**Parameter%3A**+Drain+Time%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fdrain-time.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Drain+Time&body=**Parameter%3A**+Drain+Time%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fdrain-time.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Drain+Time&body=**Parameter%3A**+Drain+Time%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fdrain-time.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
