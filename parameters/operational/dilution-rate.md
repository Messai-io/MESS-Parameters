# Dilution Rate

Dilution rate (D) is the ratio of volumetric flow rate (Q) to reactor working volume (V), expressed as D = Q/V with units of inverse time (h^-1 or d^-1). It represents the rate at which the reactor contents are replaced with fresh feed and is the reciprocal of hydraulic retention time (HRT = 1/D). In continuous-flow microbial electrochemical systems (MES), the dilution rate governs the balance between microbial growth rate, substrate utilization, and washout conditions, making it one of the most critical operational parameters for sustained bioelectrochemical performance.

In MES operation, the dilution rate must be maintained below the maximum specific growth rate (mu_max) of the electrochemically active bacteria (EAB) to prevent washout of planktonic organisms. However, because the primary EAB community (dominated by Geobacter species) forms robust biofilms on the anode surface, MES can tolerate higher dilution rates than suspended-growth systems. Biofilm-based MES have been operated at dilution rates of 0.5--2.0 h^-1 without performance loss.

The dilution rate profoundly affects substrate conversion efficiency and current generation. At low dilution rates (long HRT), substrate is nearly completely consumed but volumetric current density is low. At high dilution rates (short HRT), substrate availability at the biofilm is high, supporting maximum current density, but effluent COD concentrations increase. Optimal dilution rates balance these trade-offs and are typically identified through systematic HRT variation studies.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Operational |
| **Subcategory** | Continuous Operation |
| **Type** | number |
| **Unit** | 1/h |
| **Minimum** | 0.001 |
| **Maximum** | 10 |

## Typical Values

- **Valid Range**: 0.001 -- 50 h^-1
- **Continuous MFC (domestic wastewater)**: 0.04 -- 0.25 h^-1 (HRT = 4--24 h)
- **Continuous MFC (acetate medium)**: 0.1 -- 1.0 h^-1 (HRT = 1--10 h)
- **Continuous MEC (hydrogen production)**: 0.02 -- 0.2 h^-1 (HRT = 5--48 h)
- **MDC (desalination)**: 0.04 -- 0.17 h^-1 (HRT = 6--24 h)
- **High-rate MFC (optimized)**: 1.0 -- 5.0 h^-1 (HRT = 12--60 min)
- **Washout threshold (biofilm MES)**: typically > 5--10 h^-1
- **Washout threshold (suspended growth)**: typically > 0.2--0.5 h^-1

## Measurement Methods

- **Flow Rate and Volume Method**: Dilution rate is calculated from independently measured flow rate and reactor volume: D = Q/V. Flow rate is measured using a calibrated peristaltic pump (verified by timed collection of effluent in a graduated cylinder over 10--60 minutes). Precision: +/- 2--5% depending on pump calibration accuracy.
- **Tracer Study (Residence Time Distribution)**: A pulse of conservative tracer (e.g., lithium chloride, rhodamine B, or bromide) is injected into the reactor feed. Effluent tracer concentration is measured over time. The mean residence time (tau) is calculated from the first moment of the RTD curve. D = 1/tau. This method reveals the actual effective dilution rate accounting for dead zones.
- **Mass Balance Verification**: Under steady-state conditions, a substrate mass balance is performed: D * (S_in - S_out) = r_substrate. If the substrate consumption rate is independently known (from current measurement and coulombic efficiency), the dilution rate can be verified.

## Affecting Factors

### Primary

- **Pump Accuracy and Stability**: Peristaltic pumps exhibit pulsatile flow with instantaneous rates varying +/- 10--30% around the mean. Pump tubing wear reduces flow rate by 5--15% over weeks to months.
- **Reactor Volume Changes**: Biofilm growth on electrodes gradually reduces effective liquid volume by 5--15% over months, effectively increasing the dilution rate at constant flow rate.
- **Influent Characteristics**: High-particulate wastewaters can clog inlet tubing and reduce effective flow rate by 10--30% relative to the pump setpoint.
- **Temperature Effects on Viscosity**: Feed viscosity decreases with increasing temperature, affecting peristaltic pump delivery rates. A 10 C increase can increase flow rate by 5--10% for high-solids feeds.
- **Biofilm Stability Under Shear**: High dilution rates increase fluid shear stress at the anode surface. Shear stress above 0.1--1 Pa can cause biofilm detachment.

## Related Parameters

- **name**: [Hydraulic Retention Time](hydraulicretentiontime.md)

- **relationship**: Reciprocal of dilution rate
- **name**: [Flowrate](flowrate.md)

- **relationship**: Numerator in dilution rate calculation
- **name**: [Feed Rate](feed-rate.md)

- **relationship**: Volumetric rate of substrate addition
- **name**: [Recirculation Ratio](recirculation-ratio.md)

- **relationship**: Internal recirculation alters effective D
- **name**: [Recycle Ratio](recycle-ratio.md)

- **relationship**: Biomass or liquid recycle modifies washout behavior

## Compatible Systems

Operating Modes

## References

- Cheng, S., Xing, D., Logan, B.E. (2011). "Electricity generation of single-chamber microbial fuel cells at low temperatures." Biosensors and Bioelectronics, 26(5), 1913-1917.
- Pinto, R.P. et al. (2010). "A two-population bio-electrochemical model of a microbial fuel cell." Bioresource Technology, 101(14), 5256-5265.
- Monod, J. (1949). "The growth of bacterial cultures." Annual Review of Microbiology, 3, 371-394.
- Levenspiel, O. (1999). Chemical Reaction Engineering, 3rd ed. John Wiley & Sons.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Dilution+Rate&body=**Parameter%3A**+Dilution+Rate%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fdilution-rate.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Dilution+Rate&body=**Parameter%3A**+Dilution+Rate%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fdilution-rate.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Dilution+Rate&body=**Parameter%3A**+Dilution+Rate%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fdilution-rate.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
