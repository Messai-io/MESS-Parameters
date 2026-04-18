# hydraulicRetentionTime

Hydraulic retention time (HRT) is the average time that a unit volume of liquid remains within the reactor of a continuously operated microbial electrochemical system (MES), calculated as HRT = V/Q, where V is the reactor liquid volume and Q is the volumetric flow rate. Expressed in hours or days, HRT is the reciprocal of dilution rate (D = 1/HRT) and is the most widely used parameter for characterizing the hydraulic loading of continuous-flow MES. HRT fundamentally controls the balance between substrate conversion efficiency and volumetric treatment capacity.

HRT is the single most influential operational parameter in continuous-flow MES because it simultaneously affects substrate utilization (longer HRT = more complete conversion), microbial community composition (shorter HRT selects for fast-growing organisms and strong biofilm formers), volumetric productivity (shorter HRT = higher throughput per unit reactor volume), and effluent quality (longer HRT = better treatment). The trade-off between treatment quality and throughput is the central design challenge for MES treating wastewater.

At HRT values shorter than a critical minimum, substrate passes through the reactor largely untreated, and planktonic organisms are washed out faster than they can reproduce. However, because MES rely primarily on biofilm-attached bacteria for electrochemical activity, they can operate at much shorter HRTs than suspended-growth systems before catastrophic performance loss occurs. Geobacter biofilms on anodes are essentially retained biomass, enabling MFC operation at HRTs as short as 15--30 minutes in some configurations.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Operational |
| **Type** | number |
| **Unit** | h |
| **Papers Reporting** | 113 |

## Typical Values

- **Valid Range**: 0.1 -- 240 h
- **High-rate optimized MFC**: 0.25 -- 1 h
- **Lab-scale continuous MFC (acetate)**: 1 -- 12 h
- **Continuous MFC (domestic wastewater)**: 4 -- 24 h
- **Continuous MEC (hydrogen production)**: 6 -- 48 h
- **MDC (desalination)**: 6 -- 24 h
- **Constructed wetland MFC**: 24 -- 240 h
- **Activated sludge (reference)**: 4 -- 8 h
- **Anaerobic digestion (reference)**: 240 -- 720 h

## Measurement Methods

- **Calculation from Flow Rate and Volume**: HRT = V / Q. Reactor volume is measured by water displacement or geometric calculation. Flow rate is measured by timed volumetric collection or flow meter. This gives the theoretical (nominal) HRT. Precision depends on accuracy of V (+/- 1--5%) and Q (+/- 2--5%).
- **Tracer Study (Residence Time Distribution)**: A pulse or step input of conservative tracer (LiCl, NaBr, rhodamine B) is applied and effluent concentration is monitored over time. The mean residence time is calculated from the first moment of the RTD curve: HRT_actual = integral(t * E(t) dt) where E(t) is the normalized exit age distribution. The actual HRT may differ from nominal HRT due to dead zones, short-circuiting, or non-ideal mixing. The ratio HRT_actual/HRT_nominal indicates hydraulic efficiency (ideally > 0.8).
- **Online HRT Monitoring**: For variable-flow systems, instantaneous HRT is calculated continuously from real-time flow rate data: HRT(t) = V / Q(t). This requires a calibrated flow meter and known reactor volume. Data logging at 1-minute intervals captures HRT variations.

## Affecting Factors

### Primary

- **Treatment Objectives**: COD removal targets of > 80% typically require HRT > 6 h for domestic wastewater. Targets of > 90% may require HRT > 12 h. For energy recovery optimization, shorter HRTs (2--4 h) maximize volumetric power density.
- **Substrate Complexity**: Simple substrates (acetate) are converted rapidly, allowing short HRT (1--4 h). Complex substrates (real wastewater with particulates and recalcitrant organics) require longer HRT (12--48 h) for hydrolysis and fermentation steps.
- **Temperature**: At 10 C, microbial kinetics are approximately 3--4x slower than at 30 C (Q10 of 1.5--2). HRT must be proportionally increased at lower temperatures to maintain equivalent treatment performance.
- **Reactor Configuration**: Plug-flow reactors are more efficient than CSTRs for the same HRT (lower required HRT for the same conversion). Baffled or multi-stage MFCs approach plug-flow behavior.
- **Biofilm Activity**: Highly active, mature biofilms with high current density (> 10 A/m^2) enable shorter HRT because the substrate consumption rate per unit volume is higher.

## Related Parameters

- **name**: [Dilution Rate](dilution-rate.md)

- **relationship**: D = 1/HRT
- **name**: [Flowrate](flowrate.md)

- **relationship**: Q = V/HRT
- **name**: [Batch Duration](batch-duration.md)

- **relationship**: Batch-mode analog of HRT
- **name**: [Feed Rate](feed-rate.md)

- **relationship**: Substrate delivery rate
- **name**: [Recirculation Ratio](recirculation-ratio.md)

- **relationship**: Affects effective HRT
- **name**: [Temperature](temperature.md)

- **relationship**: Modulates required HRT

## References

- Kim, J.R., Premier, G.C., Hawkes, F.R., Dinsdale, R.M., Guwy, A.J. (2009). "Development of a tubular microbial fuel cell (MFC) employing a membrane electrode assembly cathode." Journal of Power Sources, 187(2), 393-399.
- Min, B., Logan, B.E. (2004). "Continuous electricity generation from domestic wastewater and organic substrates in a flat plate microbial fuel cell." Environmental Science & Technology, 38(21), 5809-5814.
- Levenspiel, O. (1999). Chemical Reaction Engineering, 3rd ed. John Wiley & Sons.
- Tchobanoglous, G. et al. (2003). Wastewater Engineering: Treatment and Reuse, 4th ed. McGraw-Hill.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+hydraulicRetentionTime&body=**Parameter%3A**+hydraulicRetentionTime%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fhydraulicretentiontime.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+hydraulicRetentionTime&body=**Parameter%3A**+hydraulicRetentionTime%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fhydraulicretentiontime.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+hydraulicRetentionTime&body=**Parameter%3A**+hydraulicRetentionTime%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fhydraulicretentiontime.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
