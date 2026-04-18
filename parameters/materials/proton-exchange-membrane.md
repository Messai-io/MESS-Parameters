# Proton Exchange Membrane

A proton exchange membrane (PEM), also called a cation exchange membrane (CEM), is a semi-permeable polymer membrane that selectively conducts protons (H+) while blocking electron flow and limiting the crossover of gases, liquids, and uncharged solutes between electrode compartments in microbial electrochemical systems. PEMs are the most widely used separator type in dual-chamber MFC, MEC, and MDC configurations, providing the ionic pathway necessary to complete the electrochemical circuit while maintaining physical separation of the anolyte and catholyte.

The three principal PEM materials used in MES research and applications are:

1. **Nafion** (perfluorosulfonic acid, PFSA): The gold-standard PEM, consisting of a polytetrafluoroethylene (PTFE) backbone with perfluorovinyl ether side chains terminated by sulfonic acid groups (-SO3H). Nafion's phase-separated morphology creates interconnected hydrophilic channels (~4 nm diameter) within a hydrophobic fluorocarbon matrix, enabling high proton conductivity (80-120 mS/cm) with excellent chemical stability.

2. **SPEEK** (sulfonated poly(ether ether ketone)): A hydrocarbon-based alternative to Nafion, produced by sulfonating the aromatic rings of PEEK polymer. The degree of sulfonation (DS, typically 40-80%) controls the balance between proton conductivity and mechanical stability. SPEEK offers lower cost (10-20% of Nafion price), good chemical resistance, and tunable properties.

3. **PBI** (polybenzimidazole): A high-temperature polymer typically doped with phosphoric acid rather than water for proton conduction. PBI membranes operate at 120-200 degrees C in fuel cells but have been explored for MES due to their exceptional chemical stability, low gas crossover, and potential for operation under non-standard conditions.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Materials |
| **Subcategory** | Ion Exchange Membranes |
| **Type** | object |
| **Papers Reporting** | 102 |

## Typical Values

- **text**: ### Nafion Properties

| Property | Nafion 117 | Nafion 212 | Nafion 115 | Units |
|---|---|---|---|---|
| Thickness (dry) | 183 | 50 | 127 | um |
| Equivalent weight | 1100 | 1100 | 1100 | g/mol SO3H |
| IEC | 0.91 | 0.91 | 0.91 | mmol/g |
| Proton conductivity (hydrated, 25 C) | 80 - 100 | 90 - 120 | 80 - 100 | mS/cm |
| Water uptake | 25 - 38 | 25 - 38 | 25 - 38 | % |
| Area resistance | 1.5 - 3.0 | 0.5 - 1.0 | 1.0 - 2.0 | ohm cm^2 |
| O2 permeability | 2 x 10^-6 | 4 x 10^-6 | 3 x 10^-6 | cm/s |
| Tensile strength (hydrated) | 30 - 40 | 25 - 35 | 30 - 40 | MPa |
| Max operating temperature | 80 | 80 | 80 | degrees C |
| Cost | 600 - 800 | 400 - 600 | 500 - 700 | $/m^2 |

### SPEEK Properties

| Property | DS = 50% | DS = 65% | DS = 80% | Units |
|---|---|---|---|---|
| Proton conductivity (25 C) | 10 - 30 | 30 - 60 | 50 - 100 | mS/cm |
| Water uptake | 15 - 25 | 25 - 45 | 40 - 80 | % |
| IEC | 1.2 - 1.5 | 1.5 - 1.8 | 1.8 - 2.3 | mmol/g |
| Area resistance | 5 - 15 | 2 - 8 | 1 - 5 | ohm cm^2 |
| O2 permeability | 10^-7 | 5 x 10^-7 | 10^-6 | cm/s |
| Tensile strength | 50 - 80 | 40 - 60 | 20 - 40 | MPa |
| Dimensional stability | Excellent | Good | Poor (> DS 75%) | Qualitative |
| Cost | 20 - 60 | 30 - 80 | 40 - 100 | $/m^2 |

### PBI Properties

| Property | Value | Units |
|---|---|---|
| Proton conductivity (H3PO4 doped, 25 C) | 10 - 50 | mS/cm |
| Proton conductivity (H3PO4 doped, 160 C) | 50 - 200 | mS/cm |
| Acid doping level | 5 - 15 | mol H3PO4/repeat unit |
| Water uptake (undoped) | 10 - 20 | % |
| Phosphoric acid uptake | 300 - 600 | % |
| O2 permeability | 10^-8 to 10^-7 | cm/s |
| Tensile strength (doped) | 5 - 20 | MPa |
| Max operating temperature | 200 | degrees C |
| Chemical stability | Excellent | (resistant to H2O2, acid, base) |
| Cost | 50 - 200 | $/m^2 |

### Comparative MFC Performance

| Membrane | Max Power (mW/m^2) | CE (%) | R_membrane (ohm cm^2) | pH Gradient |
|---|---|---|---|---|
| Nafion 117 | 800 - 1,500 | 40 - 80 | 1.5 - 3.0 | 2 - 4 units |
| Nafion 212 | 1,000 - 2,000 | 35 - 70 | 0.5 - 1.0 | 1 - 3 units |
| SPEEK (DS 65%) | 600 - 1,200 | 45 - 75 | 3 - 8 | 1.5 - 3 units |
| PBI (H3PO4) | 300 - 800 | 50 - 85 | 5 - 15 | 1 - 2 units |
| No membrane | 1,000 - 2,500 | 5 - 25 | 0 | 0 |

## Measurement Methods

- **Proton Conductivity**: 1. **Through-Plane Conductivity (Most Relevant for MES)**:    - Sandwich hydrated membrane between two platinum or gold electrodes    - Apply EIS from 1 MHz to 1 Hz with 10 mV AC amplitude    - Membrane resistance from high-frequency real-axis intercept on Nyquist plot    - sigma = L / (R x A), where L = thickness, R = resistance, A = electrode area  2. **In-Plane Conductivity (Four-Point Probe)**:    - Place membrane strip on four-electrode BekkTech or Scribner conductivity cell    - AC impedance or DC resistance measurement    - More common in literature but less directly relevant to MES membrane-electrode configuration    - In-plane conductivity can be 2-5x higher than through-plane for some membranes  3. **In-Situ Measurement**:    - Measure total cell impedance by EIS; subtract electrode contributions (from three-electrode measurement)    - Provides membrane resistance under actual operating conditions    - Accounts for contact resistance and cation contamination effects
- **Selectivity and Transport**: 1. **Transport Number**:    - Concentration cell method: place membrane between 0.01 M and 0.1 M NaCl solutions    - Measure open-circuit potential between Ag/AgCl reference electrodes    - Calculate cation transport number: t+ = 0.5 + (E x F) / (2 x R x T x ln(a1/a2))    - Nafion: t+ > 0.97; SPEEK: t+ = 0.90-0.97; porous separators: t+ = 0.5  2. **Oxygen Crossover**:    - Two-chamber cell: O2-saturated catholyte, N2-purged anolyte    - Monitor DO increase in anolyte by oxygen sensor    - Calculate mass transfer coefficient k_O2    - Critical: every mol O2 that crosses can consume 4 mol electrons (reducing CE by 4F equivalents)  3. **Substrate Diffusion**:    - Two-chamber cell: substrate-rich anolyte, blank catholyte    - Sample catholyte periodically; analyze by HPLC, TOC, or COD    - Calculate diffusion coefficient from Fick's law    - Nafion: acetate diffusion coefficient ~10^-7 cm^2/s; porous separator: ~10^-5 cm^2/s
- **Durability Testing**: 1. **Accelerated Chemical Stability (Fenton's Test)**:    - Immerse membrane in 3% H2O2 + 2 ppm Fe^2+ at 80 degrees C    - Measure weight loss and IEC change after 24-168 hours    - Simulates radical attack; Nafion shows < 5% degradation; some hydrocarbon membranes lose > 50%  2. **MFC Long-term Operation**:    - Install membrane in operating MFC for 3-12 months    - Monitor resistance, power, and CE over time    - Post-mortem characterization: SEM (biofouling), FTIR (chemical changes), IEC (capacity loss)  3. **Cation Contamination Test**:    - Soak H+-form membrane in mixed cation solution (simulating wastewater)    - Measure conductivity change over time    - Nafion conductivity can decrease 40-70% after 2-4 weeks in real wastewater

## Affecting Factors

- **primary**: [object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]

## Related Parameters

- {"name":"Membrane Pore Size","relationship":"Effective channel dimensions determine both conductivity and selectivity"}
- {"name":"Membrane Water Uptake","relationship":"Controls hydrated channel size and proton mobility"}
- {"name":"Ion Exchange Capacity","relationship":"Density of proton-conducting sites"}
- {"name":"Membrane Thickness","relationship":"Trade-off: thinner = lower resistance but more crossover and less mechanical strength"}
- {"name":"Internal Resistance","relationship":"Membrane contributes 5-40% of total R_int; resistance depends on membrane type and age"}
- {"name":"Coulombic Efficiency","relationship":"O2 crossover and substrate loss through PEM directly reduce CE"}
- {"name":"Power Density","relationship":"Optimal membrane minimizes R_int while maintaining separation; thinner membranes generally improve power"}
- {"name":"pH Gradient","relationship":"The most persistent PEM-related problem in MES; drives exploration of AEM alternatives"}
- {"name":"Electrode Spacing","relationship":"Combined with PEM thickness, determines total inter-electrode distance"}
- {"name":"Membrane-Electrode Assembly (MEA)","relationship":"Hot-pressing PEM directly onto electrodes eliminates interfacial resistance"}
- {"name":"Cost","relationship":"Nafion is 10-100x more expensive per area than non-fluorinated alternatives; dominates material cost for dual-chamber MFC"}
- {"name":"Scalability","relationship":"PEM area must scale with electrode area; large-area PEMs are available commercially but expensive"}

## Compatible Systems

Membrane Separator Materials

## References

### Nafion in MES

1. **Liu, H., & Logan, B.E. (2004)**. "Electricity generation using an air-cathode single chamber microbial fuel cell in the presence and absence of a proton exchange membrane". *Environmental Science & Technology*, 38(14), 4040-4046.
   - Landmark study comparing MFC performance with and without Nafion

2. **Rozendal, R.A., et al. (2006)**. "Effects of membrane cation transport on pH and microbial fuel cell performance". *Environmental Science & Technology*, 40(17), 5206-5211.
   - Identification of cation contamination as the primary PEM challenge in MES

3. **Harnisch, F., et al. (2008)**. "The suitability of monopolar and bipolar ion exchange membranes as separators for biological fuel cells". *Environmental Science & Technology*, 42(5), 1740-1746.
   - Comparison of CEM, AEM, and BPM in MFC

### Alternative PEM Materials

4. **Ghasemi, M., et al. (2013)**. "Sulfonated poly(ether ether ketone) as an alternative proton exchange membrane in microbial fuel cells". *Journal of Membrane Science*, 447, 135-143.
   - SPEEK performance evaluation in MFC

5. **Ayyaru, S., & Dharmalingam, S. (2015)**. "A study of influence on nanocomposite membrane of sulfonated TiO2 and sulfonated polystyrene-ethylene-butylene-polystyrene for microbial fuel cell application". *Energy*, 88, 202-208.
   - Composite PEM development for MES

6. **Venkatesan, P.N., & Dharmalingam, S. (2015)**. "Effect of cation transport of SPEEK-rutile TiO2 electrolyte on microbial fuel cell performance". *Journal of Membrane Science*, 492, 518-527.
   - SPEEK-TiO2 nanocomposite addressing cation contamination

### Reviews

7. **Leong, J.X., et al. (2013)**. "Ion exchange membranes as separators in microbial fuel cells for bioenergy conversion: A comprehensive review". *Renewable and Sustainable Energy Reviews*, 28, 575-587.
   - Comprehensive comparison of PEM types for MES

8. **Oliot, M., et al. (2016)**. "Ion exchange membranes for microbial fuel cells: Best compromise between cost, selectivity, and performance". *Journal of Membrane Science*, 511, 67-79.
   - Cost-performance optimization of PEMs for practical MES

---

*Parameter documentation for the MESS (Microbial Electrochemical Systems Standardization) database. Last updated based on peer-reviewed literature through 2024.*

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Proton+Exchange+Membrane&body=**Parameter%3A**+Proton+Exchange+Membrane%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fproton-exchange-membrane.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Proton+Exchange+Membrane&body=**Parameter%3A**+Proton+Exchange+Membrane%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fproton-exchange-membrane.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Proton+Exchange+Membrane&body=**Parameter%3A**+Proton+Exchange+Membrane%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fproton-exchange-membrane.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
