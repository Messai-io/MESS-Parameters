# Batch Duration

Batch duration refers to the total elapsed time of a single operational cycle in a batch-mode microbial electrochemical system (MES), measured from the moment fresh substrate is introduced to the point at which the cycle terminates based on predefined criteria (voltage cutoff, coulombic recovery threshold, or fixed time). In microbial fuel cells (MFCs), a batch cycle typically ends when the cell voltage drops below a threshold (e.g., 50 mV) indicating substrate depletion. In microbial electrolysis cells (MECs), the batch concludes when current density falls below a minimum productive level or when a target hydrogen yield has been achieved.

Batch duration is a critical operational parameter because it directly governs substrate utilization efficiency, coulombic efficiency (CE), and volumetric power density. Short batch durations may leave significant organic matter unconverted, reducing chemical oxygen demand (COD) removal efficiency, while excessively long durations waste reactor capacity on diminishing-returns current generation during the tail phase of the power curve. The parameter is intimately coupled with substrate concentration, microbial community maturity, electrode surface area, and external resistance.

In practice, batch duration optimization represents a trade-off between treatment efficiency and energy recovery. Research on single-chamber air-cathode MFCs has shown that extending batch duration from 12 h to 48 h can increase COD removal from 65% to 92%, but the marginal power generated in the final 12 hours may constitute less than 5% of total energy recovery. Multi-cycle reproducibility of batch duration also serves as an indicator of biofilm health and system stability.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Operational |
| **Subcategory** | Batch Operation |
| **Type** | number |
| **Unit** | h |
| **Minimum** | 1 |
| **Maximum** | 1000 |

## Typical Values

- **Valid Range**: 1 -- 1000 h
- **Typical Range (MFC)**: 8 -- 72 h (depending on substrate and organic loading)
- **Typical Range (MEC)**: 12 -- 168 h (hydrogen evolution reactions are slower)
- **Typical Range (MDC)**: 6 -- 48 h (desalination-coupled operation)
- **Acetate-fed lab MFC**: 12 -- 24 h at 1 g/L COD
- **Domestic wastewater MFC**: 24 -- 72 h at 200--500 mg/L COD
- **Industrial wastewater MFC**: 48 -- 168 h at 2000--10000 mg/L COD

## Measurement Methods

- **Voltage-Based Endpoint Detection**: The most common method records open-circuit or closed-circuit voltage continuously using a data acquisition system (e.g., Keithley 2700 multimeter, Agilent 34970A). The batch endpoint is defined as the time when voltage drops below a threshold, typically 50--100 mV for MFCs or when current density falls below 0.05 mA/cm^2 for MECs. Data logging intervals of 1--10 minutes provide sufficient temporal resolution. Precision depends on the voltage measurement system but is typically +/- 0.1 mV.
- **Coulombic Integration Method**: Total charge (coulombs) transferred during the batch is integrated from continuous current measurements. The batch is considered complete when the cumulative charge reaches a target fraction (e.g., 95%) of the theoretical maximum based on substrate loading. This method requires a precision current sensor (e.g., shunt resistor with 0.1% tolerance) and a data acquisition system sampling at >= 1 Hz.
- **COD Depletion Monitoring**: Periodic sampling of the anolyte for COD analysis (APHA Standard Method 5220D, closed reflux colorimetric) tracks substrate consumption. The batch endpoint is defined as the time when residual COD reaches the target effluent concentration. Sampling intervals of 2--6 hours are typical. COD measurement precision is +/- 5 mg/L for the low-range method.

## Affecting Factors

### Primary

- **Substrate Concentration**: Higher initial COD loading extends batch duration approximately linearly up to the saturation kinetics limit. Doubling acetate concentration from 0.5 to 1.0 g/L COD typically extends batch duration by 60--90% in well-acclimated MFCs.
- **External Resistance**: Lower external resistance draws higher current, accelerating substrate consumption and shortening batch duration. Reducing R_ext from 1000 ohm to 100 ohm can reduce batch duration by 30--50% in single-chamber MFCs, though at the cost of reduced coulombic efficiency.
- **Temperature**: Microbial metabolic rates follow Arrhenius kinetics. Increasing temperature from 20 C to 30 C typically reduces batch duration by 25--40%. Below 15 C, batch durations may double or triple relative to mesophilic operation (30--37 C).
- **Biofilm Maturity**: Freshly inoculated reactors exhibit batch durations 2--5 times longer than systems with mature, electrochemically active biofilms (typically requiring 3--6 weeks of acclimation). Geobacter-enriched biofilms show the most consistent and shortest batch durations.
- **Electrode Surface Area**: Larger anode surface areas provide more sites for biofilm attachment and electron transfer, reducing batch duration. Doubling the projected anode area can reduce batch duration by 20--35% when biofilm coverage is the limiting factor.
- **pH and Buffer Capacity**: pH drift during batch operation (acidification at the anode, alkalinization at the cathode) can inhibit microbial activity and extend batch duration. Phosphate buffer (50--100 mM) can reduce batch duration by 10--20% compared to unbuffered systems.
- **Dissolved Oxygen Intrusion**: In single-chamber MFCs, oxygen diffusion through the cathode can consume electrons via aerobic respiration, extending the apparent batch duration by 10--30% and reducing coulombic efficiency.

## Related Parameters

- **name**: [Hydraulic Retention Time](hydraulicretentiontime.md)

- **relationship**: Continuous-mode analog of batch duration
- **name**: [Initial Substrate Concentration](initial-substrate-conc.md)

- **relationship**: Primary determinant of batch duration
- **name**: [External Load](external-load.md)

- **relationship**: Controls current draw rate and thus substrate depletion rate
- **name**: [Temperature](temperature.md)

- **relationship**: Modulates microbial kinetics affecting batch duration
- **name**: [Batch Volume](batch-volume.md)

- **relationship**: Total substrate volume processed per cycle
- **name**: [Feeding Strategy](feeding-strategy.md)

- **relationship**: Determines whether operation is true batch, fed-batch, or semi-continuous
- **name**: [Steady-State Criteria](steady-state-criteria.md)

- **relationship**: Defines reproducibility metrics across multiple batches

## Compatible Systems

Operating Modes

## References

- Logan, B.E. (2008). Microbial Fuel Cells. John Wiley & Sons, Hoboken, NJ.
- Liu, H., Cheng, S., Logan, B.E. (2005). "Power generation in fed-batch microbial fuel cells as a function of ionic strength, temperature, and reactor configuration." Environmental Science & Technology, 39(14), 5488-5493.
- Oh, S., Min, B., Logan, B.E. (2004). "Cathode performance as a factor in electricity generation in microbial fuel cells." Environmental Science & Technology, 38(18), 4900-4904.
- Pinto, R.P., Srinivasan, B., Manuel, M.F., Tartakovsky, B. (2010). "A two-population bio-electrochemical model of a microbial fuel cell." Bioresource Technology, 101(14), 5256-5265.
- APHA (2017). Standard Methods for the Examination of Water and Wastewater, 23rd Edition.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Batch+Duration&body=**Parameter%3A**+Batch+Duration%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fbatch-duration.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Batch+Duration&body=**Parameter%3A**+Batch+Duration%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fbatch-duration.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Batch+Duration&body=**Parameter%3A**+Batch+Duration%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fbatch-duration.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
