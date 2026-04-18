# Membrane Pairs

Membrane pairs refers to the number of alternating cation exchange membrane (CEM) and anion exchange membrane (AEM) pairs in a microbial desalination cell (MDC) or electrodialysis-integrated microbial electrochemical system. Each membrane pair creates one desalination compartment (between the AEM and CEM) and one concentrate compartment, enabling ion removal from the feed water. The number of membrane pairs directly determines the desalination capacity per pass, the total internal resistance, the voltage requirement, and the physical dimensions of the reactor. This parameter is analogous to the cell pair count in conventional electrodialysis but is uniquely constrained by the bioelectrochemical driving force available from the microbial anode.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Application Specific |
| **Subcategory** | MDC Operation |
| **Type** | number |
| **Minimum** | 1 |
| **Maximum** | 100 |

## Typical Values

- **text**: | Configuration | Membrane Pairs | Application |
|--------------|---------------|-------------|
| Lab-scale MDC (proof of concept) | 1 - 3 | Fundamental research |
| Lab-scale MDC (optimized) | 3 - 10 | Performance optimization |
| Pilot-scale MDC | 10 - 30 | Brackish water desalination |
| Industrial ED-MES hybrid | 30 - 100 | High-volume desalination |
| Microbial electrodialysis cell | 5 - 50 | Resource recovery applications |

**Performance relationships:**
- Salt removal per pass increases with membrane pairs but with diminishing returns
- Internal resistance increases approximately linearly with membrane pair count
- Current per membrane pair decreases as more pairs share the same driving current
- Optimal number of pairs: typically 3-10 for self-driven MDCs, 10-50 for externally boosted systems

## Measurement Methods

- **1. **Direct count**: Count the number of CEM-AEM pairs in the assembled stack from design drawings or physical inspection.**: 2. **Electrical resistance profiling**: Measure impedance and identify the contribution per membrane pair from the periodic structure in the impedance spectrum. 3. **Desalination performance testing**: Measure salt removal at different numbers of membrane pairs (assembled incrementally) to determine the optimum configuration. 4. **Conductivity mapping**: Monitor conductivity in each desalination and concentrate compartment to verify that all membrane pairs are functioning and contributing to desalination.

## Affecting Factors

- **text**: - **Available driving voltage**: Self-powered MDCs (no external voltage) are limited by the MFC voltage (~0.3-0.7 V), which must overcome the total membrane and solution resistance across all pairs.
- **Feed water salinity**: Higher salinity reduces membrane resistance and allows more pairs for the same driving voltage, but increases osmotic effects.
- **Membrane quality**: Lower-resistance membranes (e.g., thin, high-conductivity IEMs) allow more pairs per unit voltage.
- **Current density**: At higher current densities, the voltage drop per membrane pair increases, limiting the maximum number of pairs.
- **Spacer thickness**: Thicker solution compartments reduce pressure drop but increase electrical resistance per pair.
- **Manufacturing complexity**: Each additional pair adds two membranes, two spacers, and two gaskets, increasing assembly complexity and cost.
- **Fouling and scaling**: More membrane surfaces increase the total area susceptible to fouling, requiring more cleaning and maintenance.

## Compatible Systems

Desalination Applications

## References

1. Cao, X., Huang, X., Liang, P., Xiao, K., Zhou, Y., Zhang, X., & Logan, B.E. (2009). A new method for water desalination using microbial desalination cells. *Environmental Science & Technology*, 43(18), 7148-7152.
2. Kim, Y., & Logan, B.E. (2013). Microbial desalination cells for energy production and desalination. *Desalination*, 308, 122-130.
3. Luo, H., Jenkins, P.E., & Ren, Z. (2011). Concurrent desalination and hydrogen generation using microbial electrolysis and desalination cells. *Environmental Science & Technology*, 45(1), 340-344.
4. Strathmann, H. (2010). *Ion-Exchange Membrane Separation Processes*. Elsevier.
5. Mehanna, M., Saito, T., Yan, J., Hickner, M., Cao, X., Huang, X., & Logan, B.E. (2010). Using microbial desalination cells to reduce water salinity prior to reverse osmosis. *Energy & Environmental Science*, 3(8), 1114-1120.

---

*Parameter documentation for the MESS (Microbial Electrochemical Systems Standardization) framework.*

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Membrane+Pairs&body=**Parameter%3A**+Membrane+Pairs%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fmembrane-pairs.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Membrane+Pairs&body=**Parameter%3A**+Membrane+Pairs%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fmembrane-pairs.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Membrane+Pairs&body=**Parameter%3A**+Membrane+Pairs%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fmembrane-pairs.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
