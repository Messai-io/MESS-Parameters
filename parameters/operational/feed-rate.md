# Feed Rate

Feed rate is the volumetric or mass flow rate at which fresh substrate or wastewater is introduced into a microbial electrochemical system (MES), expressed in units of mL/min, L/h, L/d, or kg COD/d. This parameter controls the organic loading rate (OLR) delivered to the bioelectrochemical reactor and, together with reactor volume, determines the hydraulic retention time and dilution rate. Feed rate management is fundamental to balancing substrate supply with microbial consumption capacity and maintaining stable electrochemical performance.

In continuous-flow MES, the feed rate is typically maintained at a constant setpoint using peristaltic, syringe, or diaphragm pumps, with the flow rate adjusted to achieve the target HRT. In fed-batch systems, the feed rate is intermittent, with pulses of concentrated substrate added at defined intervals or triggered by voltage/current thresholds. The temporal pattern of feeding (continuous, pulsed, or gradient) profoundly affects substrate concentration profiles within the reactor and consequently impacts biofilm metabolism, current generation, and coulombic efficiency.

Overfeeding (excessive feed rate relative to biofilm capacity) leads to substrate accumulation, methanogenic competition, and reduced coulombic efficiency, while underfeeding starves the biofilm, reduces current output, and may trigger biofilm detachment or dormancy. The optimal feed rate maintains substrate concentration at or slightly above the half-saturation constant (K_s) of the electroactive biofilm, typically 50--200 mg COD/L for acetate-fed systems.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Operational |
| **Subcategory** | Fed-Batch Operation |
| **Type** | number |
| **Unit** | L/h |
| **Minimum** | 0.01 |
| **Maximum** | 100 |
| **Papers Reporting** | 4 |

## Typical Values

- **Valid Range**: 0.001 -- 10000 mL/min
- **Lab-scale continuous MFC (28 mL)**: 0.02 -- 0.5 mL/min
- **Lab-scale continuous MFC (250 mL)**: 0.1 -- 5 mL/min
- **Bench-scale continuous MFC (5 L)**: 1 -- 50 mL/min
- **Pilot-scale continuous MFC (100 L)**: 50 -- 500 mL/min
- **Fed-batch pulse volume**: 10 -- 100% of reactor volume per feeding event
- **Organic loading rate equivalent**: 0.5 -- 10 kg COD/m^3/d (typical)

## Measurement Methods

- **Pump Calibration and Verification**: The peristaltic pump is set to the desired RPM and the actual flow rate is verified by collecting effluent in a graduated cylinder over a timed interval (minimum 10 minutes). This is repeated at 3+ RPM settings to generate a calibration curve. Precision: +/- 2--5% for new tubing; recalibration is required monthly or when tubing is replaced.
- **Mass Flow Measurement**: An in-line mass flow sensor (Coriolis-type for high accuracy, or thermal mass flow for lower cost) provides continuous real-time measurement of feed rate. Coriolis meters offer +/- 0.1% accuracy; thermal sensors +/- 1--2%. These are more common at pilot scale due to cost.
- **Gravimetric Monitoring**: The feed reservoir is placed on a continuously-logging balance. Feed rate is calculated from the rate of mass decrease over time (dM/dt). This method integrates all flow irregularities and provides the true average feed rate. Balance precision: +/- 0.1 g for lab scale, +/- 1 g for pilot scale.

## Affecting Factors

### Primary

- **Pump Type and Condition**: Peristaltic pumps are standard for lab MES due to their chemically inert fluid path. Flow rate accuracy depends on tubing elasticity (silicone, Viton, PharMed) which degrades over 500--2000 hours of use, causing 5--15% flow rate drift.
- **Substrate Concentration**: Higher substrate concentrations allow lower volumetric feed rates for the same organic loading rate. Concentrated feeds (10--50 g COD/L) require precise low-flow-rate pumps; dilute feeds (0.1--1 g COD/L) require higher flow rates.
- **Biofilm Activity**: The maximum sustainable feed rate is limited by the biofilm's substrate uptake capacity. For a well-developed Geobacter biofilm, maximum volumetric current density of 5--25 A/m^2 corresponds to a COD consumption rate of 1--5 g COD/m^2/d.
- **Backpressure**: Membrane fouling, outlet restrictions, and gas accumulation increase backpressure, reducing actual feed rate below the pump setpoint by 5--20%.
- **Temperature**: Feed viscosity varies with temperature, affecting pump delivery rates. Cold feeds (< 15 C) can reduce peristaltic pump output by 10--20% relative to room temperature calibration.

## Related Parameters

- **name**: [Dilution Rate](dilution-rate.md)

- **relationship**: Feed rate divided by reactor volume
- **name**: [Hydraulic Retention Time](hydraulicretentiontime.md)

- **relationship**: Reactor volume divided by feed rate
- **name**: [Flowrate](flowrate.md)

- **relationship**: General volumetric flow parameter
- **name**: [Feed Trigger](feed-trigger.md)

- **relationship**: Signal initiating fed-batch feeding events
- **name**: [Feeding Strategy](feeding-strategy.md)

- **relationship**: Pattern of substrate delivery
- **name**: [Initial Substrate Concentration](initial-substrate-conc.md)

- **relationship**: Concentration in the feed

## Compatible Systems

Operating Modes

## References

- Torres, C.I. et al. (2008). "A kinetic perspective on extracellular electron transfer by anode-respiring bacteria." FEMS Microbiology Reviews, 32(3), 475-485.
- Pinto, R.P. et al. (2010). "A two-population bio-electrochemical model of a microbial fuel cell." Bioresource Technology, 101(14), 5256-5265.
- Oh, S., Logan, B.E. (2005). "Hydrogen and electricity production from a food processing wastewater using fermentation and microbial fuel cell technologies." Water Research, 39(19), 4673-4682.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Feed+Rate&body=**Parameter%3A**+Feed+Rate%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Ffeed-rate.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Feed+Rate&body=**Parameter%3A**+Feed+Rate%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Ffeed-rate.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Feed+Rate&body=**Parameter%3A**+Feed+Rate%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Ffeed-rate.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
