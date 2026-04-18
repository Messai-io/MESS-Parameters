# Flush Cycles

Flush cycles refer to the number of complete volume replacements performed in a microbial electrochemical system (MES) for the purpose of cleaning, equilibration, or removal of accumulated inhibitory compounds. Flushing involves passing clean medium, buffer solution, or fresh wastewater through the reactor at an elevated flow rate to displace stagnant liquid, remove loosely attached biofilm, dissolve precipitated minerals, and restore hydraulic conductivity. This operational maintenance procedure is distinct from the regular feed-drain cycle and is performed at defined intervals based on performance monitoring.

In MES operation, flush cycles serve multiple purposes. Mineral flush cycles (using dilute acid, 0.01--0.1 M HCl) dissolve calcium carbonate and struvite deposits that accumulate on membranes and electrodes, restoring ion transport and reducing ohmic resistance. Biofouling flush cycles (using elevated shear flow at 5--20x normal flow rate) remove excessive biofilm from non-electrode surfaces (membrane, walls, ports). Inhibitor flush cycles (using clean buffer or DI water) dilute accumulated toxic metabolites, salts, or heavy metals that have reached inhibitory concentrations.

The frequency of flush cycles represents a maintenance trade-off: too frequent flushing wastes substrate and disrupts the electroactive biofilm, while too infrequent flushing allows progressive degradation of performance. A well-designed flushing protocol maintains the system within 90% of peak performance while minimizing maintenance time and chemical consumption.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Operational |
| **Subcategory** | Shutdown Procedures |
| **Type** | number |
| **Minimum** | 0 |
| **Maximum** | 10 |

## Typical Values

- **Valid Range**: 0 -- 100 cycles per maintenance event
- **Mineral acid flush**: 3 -- 5 volume exchanges with 0.01--0.1 M HCl
- **High-shear biofilm flush**: 5 -- 10 volume exchanges at 5--20x normal flow
- **Inhibitor dilution flush**: 3 -- 10 volume exchanges with clean buffer
- **Membrane cleaning cycles**: 2 -- 5 volume exchanges per cleaning event
- **Flush frequency (lab)**: Monthly (mineral), quarterly (full clean)
- **Flush frequency (pilot, real wastewater)**: Weekly to monthly
- **Volume per flush cycle**: 1 -- 3x reactor working volume per exchange

## Measurement Methods

- **Volume Exchange Counting**: The number of flush cycles is simply counted as the number of complete fill-drain sequences performed with the flushing medium. One flush cycle = one complete volume exchange. The total flush volume = number of cycles x reactor volume. Documentation should include the flushing medium composition, flow rate, contact time per cycle, and total flushing duration.
- **Performance Recovery Monitoring**: The effectiveness of flushing is assessed by comparing system performance (current density, power density, membrane resistance) before and after the flush protocol. A successful flush should restore at least 80--90% of the original (pre-fouling) performance. If performance recovery is inadequate, additional flush cycles or a different flushing medium may be needed.
- **Conductivity/Turbidity Monitoring**: Effluent conductivity and turbidity during flushing track the removal of dissolved ions and suspended material. The flush is considered complete when effluent conductivity and turbidity reach baseline levels (within 10% of the clean medium values). This typically occurs within 3--5 volume exchanges.

## Affecting Factors

### Primary

- **Wastewater Composition**: High-hardness water (> 200 mg/L CaCO3) requires more frequent mineral flushes (monthly). Low-hardness water may need flushing only quarterly.
- **Membrane Type**: Ion exchange membranes (CEM, AEM) are more susceptible to scaling than non-woven separators. Nafion membranes in hard water may require weekly acid flushing.
- **Operating pH**: Operation above pH 7.5 promotes calcium carbonate and struvite precipitation, increasing flush frequency requirements. Maintaining pH below 7 reduces mineral scaling.
- **Temperature**: Higher temperatures (> 30 C) increase mineral precipitation rates (inverse solubility of CaCO3) but also improve dissolution kinetics during acid flushing.
- **Electrode Surface Area**: High-surface-area 3D electrodes (carbon brushes, granular beds) trap more particulates and biofilm, requiring more volume exchanges per flush event.

## Related Parameters

- **name**: [Membrane Replacement Interval](membrane-replacement-interval.md)

- **relationship**: Flushing extends membrane life
- **name**: [Electrode Replacement Interval](electrode-replacement-interval.md)

- **relationship**: Flushing extends electrode life
- **name**: [Recirculation Ratio](recirculation-ratio.md)

- **relationship**: Recirculation during flushing
- **name**: [Flowrate](flowrate.md)

- **relationship**: Flush flow rate
- **name**: [Hydraulic Retention Time](hydraulicretentiontime.md)

- **relationship**: Normal vs. flush HRT

## Compatible Systems

Startup Shutdown

## References

- Xu, J., Sheng, G.P., Luo, H.W., Li, W.W., Wang, L.F., Yu, H.Q. (2012). "Fouling of proton exchange membrane (PEM) deteriorates the performance of microbial fuel cell." Water Research, 46(6), 1817-1824.
- Choi, M.J. et al. (2011). "Effects of biofouling on ion transport through cation exchange membranes and microbial fuel cell performance." Bioresource Technology, 102(1), 298-303.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Flush+Cycles&body=**Parameter%3A**+Flush+Cycles%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fflush-cycles.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Flush+Cycles&body=**Parameter%3A**+Flush+Cycles%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fflush-cycles.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Flush+Cycles&body=**Parameter%3A**+Flush+Cycles%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fflush-cycles.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
