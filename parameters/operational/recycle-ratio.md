# Recycle Ratio

Recycle ratio in MES refers to the fraction of treated effluent or settled biomass that is returned to the reactor inlet, distinct from hydraulic recirculation in that recycle specifically aims to retain and return microbial biomass or partially treated liquid. Expressed as the ratio of recycle flow to influent flow (Q_recycle / Q_in), biomass recycle increases the effective solids retention time (SRT) beyond the hydraulic retention time, enabling the system to maintain higher biomass concentrations and treat wastewater at shorter HRTs without washing out slow-growing organisms.

In MES, the primary electroactive community is biofilm-attached and inherently retained, making biomass recycle less critical than in suspended-growth systems. However, recycle of effluent containing planktonic cells, soluble metabolites, and residual electrons carriers can improve system performance. Returning settled biomass from a clarifier (analogous to activated sludge return) increases the diversity and concentration of suspended organisms that contribute to hydrolysis and fermentation of complex substrates before the products reach the electroactive biofilm.

Recycle ratios of 0.2--1.0 are typical for MES treating complex substrates (real wastewater), where the fermentative pre-processing of particulate and complex organic matter benefits from higher biomass concentrations. For defined-substrate MFCs (acetate, glucose), recycle provides minimal benefit because the substrate is already in a form directly usable by electroactive bacteria.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Operational |
| **Subcategory** | Continuous Operation |
| **Type** | number |
| **Minimum** | 0 |
| **Maximum** | 10 |

## Typical Values

- **Valid Range**: 0 -- 5
- **No recycle**: 0
- **Low recycle**: 0.1 -- 0.5
- **Moderate recycle**: 0.5 -- 1.0
- **High recycle (activated sludge reference)**: 0.5 -- 2.0
- **Typical for complex wastewater MFC**: 0.2 -- 0.5
- **Typical for defined substrate MFC**: 0 (not needed)

## Measurement Methods

- **Flow Rate Ratio**: Recycle ratio = Q_recycle / Q_influent, where Q_recycle is the flow rate of the return stream. Measured by timed collection or flow meter on the recycle line.
- **Biomass Concentration Comparison**: The effectiveness of biomass recycle is verified by comparing VSS concentration in the reactor with recycle vs. without recycle. Effective recycle increases reactor VSS by 50--300%.

## Affecting Factors

### Primary

- **Substrate Complexity**: Complex substrates (real wastewater) benefit from biomass recycle for enhanced hydrolysis and fermentation.
- **Settling Characteristics**: Good settling biomass (SVI < 150 mL/g) enables effective separation and recycle. Poor settling biomass requires membrane separation.
- **SRT Target**: Longer SRT (achieved via higher recycle ratio) favors slow-growing nitrifiers and complete substrate degradation.
- **Energy Cost**: Recycle pumping adds parasitic energy. Must be justified by improved treatment performance.

## Related Parameters

- **name**: [Recirculation Ratio](recirculation-ratio.md)

- **relationship**: Hydraulic recirculation (different purpose)
- **name**: [Dilution Rate](dilution-rate.md)

- **relationship**: Effective dilution with recycle
- **name**: [Sludge Production](sludge-production.md)

- **relationship**: Biomass wasted vs. recycled
- **name**: [Hydraulic Retention Time](hydraulicretentiontime.md)

- **relationship**: HRT vs. SRT decoupling

## Compatible Systems

Operating Modes

## References

- Ahn, Y., Logan, B.E. (2013). "Domestic wastewater treatment using multi-electrode continuous flow MFCs." Applied Microbiology and Biotechnology, 97(1), 409-416.
- Tchobanoglous, G. et al. (2003). Wastewater Engineering: Treatment and Reuse, 4th ed. McGraw-Hill.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Recycle+Ratio&body=**Parameter%3A**+Recycle+Ratio%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Frecycle-ratio.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Recycle+Ratio&body=**Parameter%3A**+Recycle+Ratio%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Frecycle-ratio.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Recycle+Ratio&body=**Parameter%3A**+Recycle+Ratio%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Frecycle-ratio.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
