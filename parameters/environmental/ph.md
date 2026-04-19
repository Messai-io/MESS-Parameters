# pH

pH quantifies the hydrogen ion activity in the electrolyte solution of a microbial electrochemical system, expressed on a logarithmic scale from 0 to 14. It is one of the most critical operational parameters because it directly affects microbial metabolic activity, enzyme function, electrode kinetics, and membrane transport properties. Most exoelectrogenic bacteria (Geobacter, Shewanella) operate optimally at near-neutral pH (6.5-7.5), while extreme pH values denature proteins and inhibit electron transfer.

**Formula:** pH = -log10[H+]

Where [H+] is the hydrogen ion concentration in mol/L.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Environmental |
| **Type** | number |
| **Papers Reporting** | 601 |

## Typical Values

- **Valid Range**: 0 - 14 (full pH scale)
- **Typical MES Operation**: 6.0 - 8.5
- **Optimal for MFC**: 6.8 - 7.5
- **Optimal for MEC**: 6.5 - 7.2
- **Performance Categories**: - **Inhibitory**: <5.5 or >9.0 (microbial stress/death)
- **Suboptimal**: 5.5-6.5 or 8.0-9.0 (reduced performance)
- **Good**: 6.5-7.0 or 7.5-8.0
- **Optimal**: 7.0-7.5 (peak electroactivity)

## Measurement Methods

- **pH Electrode (Glass Membrane)**: Standard potentiometric measurement using Ag/AgCl reference electrode. Accuracy: ±0.01 pH. Requires daily 2-point calibration (pH 4.0 and 7.0 buffers). Response time <10s. Most common for continuous MES monitoring.
- **Indicator Strips/Paper**: Colorimetric pH measurement using chemical indicators. Accuracy: ±0.5 pH. Suitable for quick field checks only. Not recommended for research reporting.
- **Ion-Sensitive Field Effect Transistor (ISFET)**: Solid-state pH sensor for miniaturized or implantable MES. Accuracy: ±0.05 pH. No liquid junction; suitable for low-volume reactors.

## Affecting Factors

### Primary

- **Substrate Oxidation**: Proton generation at anode decreases local pH. Acetate oxidation: CH3COO- + 4H2O -> 2HCO3- + 9H+ + 8e-. Without buffering, anode pH drops 1-2 units during operation.
- **Oxygen Reduction**: Cathode reaction consumes protons (O2 + 4H+ + 4e- -> 2H2O), increasing cathode pH. pH gradient between anode and cathode can reach 2-4 units.
- **Buffer Capacity**: Phosphate buffers (50-200 mM) stabilize pH but increase ionic strength and cost. Bicarbonate buffers are cheaper but less effective below pH 6.5. Buffer selection affects both pH stability and internal resistance.
- **Membrane Transport**: Proton exchange membranes transport H+ from anode to cathode, but also transport Na+, K+ (competing cations). Membrane fouling reduces proton transport, exacerbating pH gradients.

## Performance Impact

pH directly controls power output through multiple mechanisms: (1) Nernst equation predicts 59 mV/pH unit effect on electrode potential; (2) enzyme activity follows bell-shaped pH curves with sharp drops outside optimal range; (3) pH gradients between anode and cathode create thermodynamic losses of 50-240 mV. Studies report 30-60% power density reduction when pH deviates 1.5 units from optimal. Maintaining pH 7.0±0.5 is critical for achieving >80% of maximum power density.

## References

1. He, Z., Huang, Y., Manohar, A.K., & Mansfeld, F. (2008). "Effect of electrolyte pH on the rate of the anodic and cathodic reactions in an air-cathode microbial fuel cell." Bioelectrochemistry, 74(1), 78-82.

2. Gil, G.C., Chang, I.S., Kim, B.H., Kim, M., Jang, J.K., Park, H.S., & Kim, H.J. (2003). "Operational parameters affecting the performance of a mediator-less microbial fuel cell." Biosensors and Bioelectronics, 18(4), 327-334.

3. Yuan, Y., Zhao, B., Zhou, S., Zhong, S., & Zhuang, L. (2011). "Electrocatalytic activity of anodic biofilm responses to pH changes in microbial fuel cells." Bioresource Technology, 102(13), 6887-6891.

4. Patil, S.A., Harnisch, F., Koch, C., Hübschmann, T., Current Density Frontier, I., Categorize, S., & Flaschel, E. (2011). "Electroactive mixed culture derived biofilms in microbial bioelectrochemical systems: the role of pH on biofilm formation, performance and composition." Bioresource Technology, 102(20), 9683-9690.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+pH&body=**Parameter%3A**+pH%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fph.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+pH&body=**Parameter%3A**+pH%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fph.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+pH&body=**Parameter%3A**+pH%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fph.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
