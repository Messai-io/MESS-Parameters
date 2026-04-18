# Mixer Speed

Mixer speed is the rotational velocity of the impeller or magnetic stir bar used to provide mechanical agitation in a microbial electrochemical system (MES), expressed in revolutions per minute (RPM). This parameter directly controls the mixing intensity, fluid shear rate, and the mass transfer coefficient at the electrode-liquid interface. The choice of mixer speed requires balancing enhanced mass transfer (higher RPM) against biofilm disruption, increased power consumption, and potential mechanical damage.

In MES, the anode biofilm is the active biocatalyst and must remain attached to the electrode surface. Excessive mixer speeds generate shear forces that can erode established biofilms, particularly during the early stages of colonization. For Geobacter-enriched biofilms, critical shear rates of 10--100 s^-1 (corresponding to mixer speeds of 100--500 RPM depending on geometry) mark the onset of significant biofilm detachment. Below 50 RPM, mass transfer limitations may reduce current density by 20--50% relative to optimized mixing.

The optimal mixer speed produces sufficient bulk fluid motion to prevent concentration gradients while maintaining shear stress below the biofilm detachment threshold. This optimum depends on reactor geometry, impeller type, fluid properties, and biofilm maturity.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Operational |
| **Subcategory** | Mixing Control |
| **Type** | number |
| **Unit** | rpm |
| **Minimum** | 0 |
| **Maximum** | 2000 |
| **Papers Reporting** | 53 |

## Typical Values

- **Valid Range**: 0 -- 2000 RPM
- **Magnetic stir bar (lab MFC)**: 50 -- 200 RPM
- **Overhead paddle mixer (lab)**: 30 -- 150 RPM
- **Rushton turbine (bench scale)**: 50 -- 500 RPM
- **Marine propeller (pilot)**: 20 -- 200 RPM
- **Optimal for biofilm MFC**: 50 -- 200 RPM (depends on geometry)
- **Critical for biofilm detachment**: 300 -- 800 RPM (depends on biofilm maturity)

## Measurement Methods

- **Tachometer**: A non-contact optical tachometer (laser or reflective strip) measures the actual RPM of the impeller or stir bar. Contact-type tachometers attach to the shaft. Digital readout precision: +/- 1 RPM. Measurement should be performed at steady state (> 30 s after speed change).
- **Motor Controller Display**: Variable-speed drives and digital magnetic stirrer controllers display the setpoint RPM. Actual RPM may differ from the setpoint by 2--10% due to slip (in induction motors) or load-dependent speed variation. Independent verification with a tachometer is recommended.

## Affecting Factors

### Primary

- **Impeller Type**: A magnetic stir bar at 200 RPM produces different shear patterns than a Rushton turbine at 200 RPM. The tip speed (pi * D * N) is a better basis for comparison.
- **Reactor Geometry**: Baffled reactors generate higher turbulence at the same RPM. Unbaffled cylindrical reactors create a vortex that reduces mixing efficiency.
- **Biofilm Maturity**: Young biofilms (< 1 week) are more susceptible to shear-induced detachment. Mature biofilms (> 4 weeks) with thick EPS matrices tolerate higher mixer speeds.
- **Fluid Properties**: Higher viscosity requires higher RPM for equivalent mixing. Temperature changes affect viscosity and thus the effective Reynolds number.

## Related Parameters

- **name**: [Mixer Power](mixer-power.md)

- **relationship**: Power consumption scales with RPM^3
- **name**: [Mixing Intensity](mixing-intensity.md)

- **relationship**: Quantitative mixing metric
- **name**: [Mixing Time](mixing-time.md)

- **relationship**: Time to achieve homogeneity
- **name**: [Reynolds Number Mixing](reynolds-number-mixing.md)

- **relationship**: Flow regime indicator

## Compatible Systems

Process Control Parameters

## References

- Pham, H.T. et al. (2008). "High shear enrichment improves the performance of the anodophilic microbial consortium in a microbial fuel cell." Microbial Biotechnology, 1(6), 487-496.
- Paul, E.L. et al. (2004). Handbook of Industrial Mixing. John Wiley & Sons.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Mixer+Speed&body=**Parameter%3A**+Mixer+Speed%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fmixer-speed.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Mixer+Speed&body=**Parameter%3A**+Mixer+Speed%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fmixer-speed.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Mixer+Speed&body=**Parameter%3A**+Mixer+Speed%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fmixer-speed.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
