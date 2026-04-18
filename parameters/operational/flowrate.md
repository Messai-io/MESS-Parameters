# flowRate

Flowrate (also written as flow rate) is the volumetric quantity of liquid passing through a microbial electrochemical system (MES) per unit time, expressed in mL/min, L/h, L/d, or m^3/d. This fundamental operational parameter governs the hydraulic retention time (HRT = V/Q), organic loading rate (OLR = Q * C_in / V), and dilution rate (D = Q/V) of continuously operated MES. For batch systems, flowrate applies to the fill and drain phases and to any recirculation loops operating during the reaction phase.

Flowrate is the primary mechanism through which operators control substrate delivery to the bioelectrochemical reactor. At steady state in a continuous MFC, the flowrate determines how much organic matter is available per unit time for the electroactive biofilm to convert into electrical current. The relationship between flowrate and power output follows a characteristic curve with an optimal point: below the optimum, the system is substrate-limited; above the optimum, the biofilm cannot fully utilize the available substrate, leading to high effluent COD and reduced coulombic efficiency.

In scaled MES installations, flowrate management becomes more complex with multiple flow streams: influent feed, effluent discharge, internal recirculation, catholyte circulation (in dual-chamber systems), and sampling streams. Each stream has its own flowrate requirement, and the total system hydraulic balance must be maintained to prevent flooding or dewatering of reactor chambers.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Operational |
| **Type** | number |
| **Unit** | mL/min |
| **Papers Reporting** | 4 |

## Typical Values

- **Valid Range**: 0.001 -- 100000 mL/min
- **Lab-scale single pass MFC**: 0.02 -- 5 mL/min
- **Lab-scale recirculation MFC**: 1 -- 100 mL/min
- **Bench-scale MFC (1--10 L)**: 1 -- 50 mL/min
- **Pilot-scale MFC (100 L)**: 50 -- 5000 mL/min
- **Industrial-scale target**: 1 -- 1000 m^3/d
- **Recirculation flowrate (lab)**: 5 -- 50x feed rate
- **Catholyte circulation (dual-chamber)**: Equal to or 2--5x anolyte feed rate

## Measurement Methods

- **Timed Volumetric Collection**: Effluent is collected in a graduated cylinder over a measured time interval. Minimum collection time of 10 minutes for accurate averaging. The gold standard reference method for flow calibration. Precision: +/- 1--2% for volumes > 10 mL collected over > 5 min.
- **Electromagnetic Flow Meter**: For pilot-scale systems with conductive fluids (> 50 uS/cm conductivity). No moving parts, low pressure drop, immune to suspended solids. Inline installation in pipe runs of >= 10 diameters upstream. Accuracy: +/- 0.2--0.5% of reading. Cost: $500--5000.
- **Gravimetric Feed Monitoring**: Feed reservoir on a continuously-logging balance. Flowrate calculated from rate of mass change: Q = -(dM/dt) / rho. Integrates all flow irregularities. Excellent for long-term average flowrate verification. Precision: +/- 0.5% for balance resolution of 0.1 g.

## Affecting Factors

### Primary

- **Pump Speed and Type**: Peristaltic pump flowrate scales approximately linearly with RPM (within the recommended RPM range of 10--150 RPM). Syringe pumps provide pulsation-free flow but are limited by syringe volume.
- **Tubing Properties**: Internal diameter, wall thickness, and material elasticity affect peristaltic pump output. Silicone tubing delivers higher flow than Viton at the same RPM. Tubing aging reduces flow by 5--15% over 1000+ hours.
- **Backpressure**: System backpressure from membrane resistance, outlet elevation, and downstream restrictions reduces actual flowrate below the nominal pump output. Effect is minimal for positive-displacement pumps (< 5%) but significant for centrifugal pumps.
- **Fluid Properties**: Viscosity, density, and suspended solids content affect pump delivery rate and flow meter accuracy. High-solids wastewaters (> 5 g TSS/L) may require larger tubing and higher pump speeds.
- **Temperature**: Water viscosity at 10 C is approximately 2x that at 35 C. This affects pump delivery rates and flow meter calibration if temperature varies significantly from the calibration condition.

## Related Parameters

- **name**: [Flow Velocity](flow-velocity.md)

- **relationship**: Linear velocity derived from flowrate
- **name**: [Flow Setpoint](flow-setpoint.md)

- **relationship**: Target flowrate value
- **name**: [Hydraulic Retention Time](hydraulicretentiontime.md)

- **relationship**: HRT = Volume / Flowrate
- **name**: [Dilution Rate](dilution-rate.md)

- **relationship**: D = Flowrate / Volume
- **name**: [Feed Rate](feed-rate.md)

- **relationship**: Substrate delivery rate
- **name**: [Recirculation Ratio](recirculation-ratio.md)

- **relationship**: Internal recirculation flowrate

## References

- Logan, B.E. et al. (2006). "Microbial fuel cells: methodology and technology." Environmental Science & Technology, 40(17), 5181-5192.
- Liang, P. et al. (2018). "One-year operation of 1000-L modularized microbial fuel cell." Water Research, 141, 1-8.
- He, Z., Minteer, S.D., Angenent, L.T. (2005). "Electricity generation from artificial wastewater using an upflow microbial fuel cell." Environmental Science & Technology, 39(14), 5262-5267.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+flowRate&body=**Parameter%3A**+flowRate%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fflowrate.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+flowRate&body=**Parameter%3A**+flowRate%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fflowrate.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+flowRate&body=**Parameter%3A**+flowRate%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fflowrate.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
