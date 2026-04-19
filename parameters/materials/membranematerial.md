# membraneMaterial

Membrane material specifies the ion exchange membrane separating anodic and cathodic compartments. Nafion (perfluorosulfonic acid) is the standard but expensive ($500-1000/m2). Alternatives include CMI/AMI commercial membranes, SPEEK, and low-cost separators. Membrane selection affects proton transport, substrate crossover, oxygen diffusion, and long-term biofouling resistance.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Materials |
| **Type** | string |

## Typical Values

- **Nafion 117**: 183 um thick, gold standard, $700/m2
- **Nafion 115**: 127 um, thinner variant
- **CMI-7000**: Cation exchange, $50-100/m2
- **No membrane**: Single-chamber designs

## Measurement Methods

- **Ion exchange capacity**: Titration method per ASTM D2187. Typical PEM: 0.9-1.1 meq/g.
- **Proton conductivity**: Four-probe AC impedance. Nafion: 0.1 S/cm at 25C, 100% RH.

## Affecting Factors

### Primary

- **Cost**: Nafion dominates performance but costs 10-20x more than commercial alternatives.
- **Biofouling**: All membranes foul over 30-180 days. Fouling increases resistance 50-300%.

## References

1. Rozendal, R.A. et al. (2007). J. Membrane Sci. 286:71-79.
2. Kim, J.R. et al. (2007). Environ. Sci. Technol. 41:1004-1009.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+membraneMaterial&body=**Parameter%3A**+membraneMaterial%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fmembranematerial.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+membraneMaterial&body=**Parameter%3A**+membraneMaterial%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fmembranematerial.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+membraneMaterial&body=**Parameter%3A**+membraneMaterial%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fmembranematerial.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
