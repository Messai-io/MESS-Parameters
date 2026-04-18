# Feeding Strategy

Feeding strategy describes the temporal pattern and method by which substrate or wastewater is delivered to a microbial electrochemical system (MES). The three fundamental strategies are batch (complete volume replacement at discrete intervals), fed-batch (periodic addition of concentrated substrate without complete volume replacement), and continuous flow (constant inflow and outflow at steady state). Each strategy produces distinct substrate concentration profiles, microbial community dynamics, and electrochemical performance characteristics.

Batch operation is the simplest and most common mode in laboratory MES research. The reactor is filled with substrate-containing medium, operated until a termination criterion is met (voltage cutoff, time limit), drained, and refilled. This creates a dynamic substrate concentration that decreases exponentially over the cycle, producing corresponding transients in current, voltage, and power output. Fed-batch operation maintains more stable substrate levels by adding concentrated feed pulses, and is often preferred for industrial wastewater treatment where flow is inherently intermittent.

Continuous flow operation provides the most stable substrate conditions and is preferred for systems targeting steady power output or consistent treatment performance. However, continuous operation requires more sophisticated flow control and is susceptible to washout if dilution rate exceeds microbial growth rate. Hybrid strategies such as sequencing batch (SBR mode with fill-react-settle-drain-idle phases) and recirculated batch (batch with external recirculation loop for mixing) combine advantages of multiple approaches.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Operational |
| **Subcategory** | Fed-Batch Operation |
| **Type** | select |

## Typical Values

- **Valid Range**: Categorical (batch, fed-batch, continuous, semi-continuous, SBR, recirculated batch)
- **Batch cycle frequency**: 1 -- 7 cycles per week
- **Fed-batch pulse frequency**: 1 -- 4 pulses per day
- **Continuous flow HRT**: 1 -- 48 h
- **SBR fill fraction**: 20 -- 80% of total cycle time in react phase
- **Recirculation rate**: 5 -- 50x feed rate
- **Most common in literature (lab)**: Batch (approximately 60% of studies)
- **Most common in pilot studies**: Continuous flow (approximately 70%)

## Measurement Methods

- **Operational Mode Documentation**: The feeding strategy is a categorical operational parameter documented in the experimental methods section. It is defined by the sequence of operations (fill, react, drain, idle), timing of each phase, and the substrate delivery mechanism. No measurement instrument is required; the strategy is defined by the operator's experimental protocol.
- **Residence Time Distribution (RTD) Analysis**: The actual flow pattern is verified using tracer studies. A pulse of conservative tracer (NaCl, LiCl, or fluorescent dye) is injected and the effluent concentration is monitored over time. The shape of the RTD curve (ideal CSTR, plug flow, or mixed) confirms whether the feeding strategy achieves the intended mixing regime.
- **Substrate Concentration Profiling**: Periodic sampling and analysis of substrate concentration (COD, acetate by HPLC, or glucose by enzymatic assay) throughout the reactor volume and over the feeding cycle verifies that the feeding strategy produces the intended concentration profile. This distinguishes between well-mixed and stratified conditions.

## Affecting Factors

### Primary

- **Wastewater Characteristics**: Real wastewaters with high particulate content (> 500 mg TSS/L) favor batch or SBR operation to allow settling. Soluble substrates (acetate, glucose, brewery wastewater) are amenable to continuous operation.
- **Scale of Operation**: Lab-scale systems (< 1 L) predominantly use batch mode for simplicity. Pilot-scale systems (> 10 L) favor continuous flow for practical reasons. Industrial-scale systems use continuous or SBR modes depending on influent variability.
- **Treatment Objectives**: If maximum COD removal is the priority, batch mode with extended cycle time is optimal. If power generation or hydrogen production is prioritized, continuous operation at optimal HRT provides more consistent output.
- **Biofilm Requirements**: Geobacter-dominated biofilms perform well under all feeding strategies but require 2--5 acclimation cycles when switching strategies. Sudden changes from feast to famine conditions can select for fermentative organisms.
- **Control System Sophistication**: Batch requires only a timer and valve; continuous flow requires a pump with flow control; fed-batch with trigger-based feeding requires voltage monitoring and automated pump control.

## Related Parameters

- **name**: [Feed Rate](feed-rate.md)

- **relationship**: Volumetric rate of substrate delivery
- **name**: [Feed Trigger](feed-trigger.md)

- **relationship**: Signal initiating fed-batch pulses
- **name**: [Batch Duration](batch-duration.md)

- **relationship**: Cycle time in batch mode
- **name**: [Dilution Rate](dilution-rate.md)

- **relationship**: Flow-based parameter for continuous mode
- **name**: [Hydraulic Retention Time](hydraulicretentiontime.md)

- **relationship**: Liquid residence time
- **name**: [Mode](mode.md)

- **relationship**: Overall operational mode of the system

## Compatible Systems

Operating Modes

## References

- Liu, H., Cheng, S., Logan, B.E. (2005). "Power generation in fed-batch microbial fuel cells as a function of ionic strength, temperature, and reactor configuration." Environmental Science & Technology, 39(14), 5488-5493.
- Ahn, Y., Logan, B.E. (2013). "Domestic wastewater treatment using multi-electrode continuous flow MFCs." Applied Microbiology and Biotechnology, 97(1), 409-416.
- You, S.J. et al. (2006). "A microbial fuel cell using permanganate as the cathodic electron acceptor." Journal of Power Sources, 162(2), 1409-1415.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Feeding+Strategy&body=**Parameter%3A**+Feeding+Strategy%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Ffeeding-strategy.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Feeding+Strategy&body=**Parameter%3A**+Feeding+Strategy%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Ffeeding-strategy.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Feeding+Strategy&body=**Parameter%3A**+Feeding+Strategy%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Ffeeding-strategy.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
