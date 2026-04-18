# Membrane Proton Conductivity

Membrane conductivity refers to the ionic conductivity of ion exchange membranes
used in microbial electrochemical systems, expressed in siemens per centimeter
(S/cm). For proton exchange membranes (PEMs), this parameter specifically
quantifies the rate of proton (H⁺ or H₃O⁺) transport through the membrane
matrix under an electrochemical potential gradient. Membrane conductivity is the
single most important membrane property determining the ohmic contribution of
the separator to total cell internal resistance.

Proton conductivity in perfluorosulfonic acid (PFSA) membranes like Nafion
occurs through two complementary mechanisms. The vehicular mechanism involves
proton transport as hydrated hydronium ions (H₃O⁺, H₅O₂⁺, H₉O₄⁺) diffusing
through water-filled channels in the membrane nanostructure. The Grotthuss (or
hopping) mechanism involves proton transfer along hydrogen-bonded water networks
without net water molecule displacement. Both mechanisms require membrane
hydration; conductivity drops precipitously as water content decreases.
Fully hydrated Nafion 117 exhibits a proton conductivity of 0.08-0.10 S/cm at
25 degrees C, comparable to concentrated sulfuric acid.

In MES applications, membrane conductivity is significantly lower than in pure
proton-conducting fuel cells due to competitive occupation of sulfonate exchange
sites by non-protonic cations (Na⁺, K⁺, Ca²⁺, Mg²⁺, NH₄⁺) present in the
electrolyte. These cations displace protons from exchange sites, reducing
effective proton conductivity by 50-90%. This cation contamination, combined
with biofouling of membrane surfaces, is the primary cause of membrane-related
performance degradation in long-term MES operation.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Materials |
| **Type** | number |
| **Unit** | S/cm |
| **Papers Reporting** | 4 |

## Typical Values

- **Valid Range**: 0.001-0.20 S/cm (for ion exchange membranes)
- **Typical Range in MES**: 0.01-0.10 S/cm
- **Nafion 117 (fully hydrated, H⁺ form)**: 0.08-0.10 S/cm
- **Nafion 117 (in MES electrolyte)**: 0.01-0.04 S/cm (cation-contaminated)
- **Nafion 212**: 0.09-0.12 S/cm (thinner, higher area-specific conductance)
- **SPEEK (sulfonated PEEK, 60% DS)**: 0.01-0.04 S/cm
- **PBI (polybenzimidazole)**: 0.001-0.01 S/cm (low hydration)
- **PVDF-based composites**: 0.005-0.03 S/cm
- **Fumasep FAA-3**: 0.01-0.03 S/cm (OH⁻ conductivity)
- **Neosepta AMX**: 0.02-0.04 S/cm (Cl⁻ conductivity)
- **Tokuyama A201**: 0.02-0.04 S/cm
- **Nafion 117 (183 um, H⁺ form)**: 0.18-0.23 ohm·cm²
- **Nafion 117 (in MES)**: 0.5-2.0 ohm·cm²
- **Nafion 212 (51 um)**: 0.04-0.06 ohm·cm²
- **SPEEK (50-100 um)**: 0.15-1.0 ohm·cm²

## Measurement Methods

- **Through-Plane AC Impedance (Preferred for MES)**: Mount the membrane sample (1-5 cm² area) between two platinum or stainless steel blocking electrodes in a conductivity cell with controlled compression (5- 10 kPa). Equilibrate in the target electrolyte solution at operating temperature for 24 hours. Apply AC impedance spectroscopy from 1 MHz to 1 Hz with 10 mV amplitude. The high-frequency intercept of the Nyquist plot yields the membrane resistance R_m (ohm). Calculate through-plane conductivity: sigma = L / (R_m x A), where L is membrane thickness (cm) and A is the active area (cm²). Subtract the resistance contribution of the blocking electrodes (measured with no membrane). Temperature control to ±0.5 degrees C is essential.
- **In-Plane Four-Probe Conductivity**: Clamp a rectangular membrane strip (10 x 40 mm) in a four-probe cell with platinum wire electrodes. Apply DC or AC current (1-10 mA) through outer probes and measure voltage across inner probes (10-20 mm spacing). Calculate in-plane conductivity: sigma = L / (R x w x t), where L is probe spacing, w is strip width, t is thickness. In-plane conductivity can be 2-5 times higher than through-plane due to membrane anisotropy. Control humidity (20-100% RH) and temperature (25-80 degrees C). Standard method per ASTM D7031.
- **Membrane Resistance in Operating Cell**: Measure total MES internal resistance by EIS, then isolate the membrane contribution by comparing performance with and without the membrane (single- chamber vs. dual-chamber), or by comparing membranes of different thicknesses. The slope of resistance versus thickness gives the reciprocal of conductivity. This in-situ measurement captures the real operating conductivity including cation contamination and biofouling effects, which laboratory measurements on pristine membranes may not reflect.
- **Ion Exchange Capacity (IEC) Correlation**: While not a direct conductivity measurement, IEC (meq/g) correlates with conductivity because it quantifies the density of charged groups available for ion transport. Titrate the membrane (in H⁺ form) with standardized NaOH. IEC = moles NaOH / dry membrane mass. Nafion 117 IEC: 0.91 meq/g. Higher IEC generally corresponds to higher conductivity but also higher water uptake and swelling.

## Affecting Factors

### Primary

- **Hydration State**: Membrane conductivity depends exponentially on water    content. Nafion conductivity drops from 0.10 S/cm at 100% RH to 0.001 S/cm    at 20% RH. In MES, membranes are typically fully liquid-equilibrated,    providing maximum hydration. However, air-exposed membranes (single-chamber    air-cathode MFCs) can experience partial dehydration on the air-facing side.
- **Cation Contamination**: In MES electrolytes containing Na⁺, K⁺, Ca²⁺, Mg²⁺,    and NH₄⁺ at millimolar to hundreds of millimolar concentrations, these    cations replace H⁺ at sulfonate exchange sites. The conductivity of Na⁺-form    Nafion is 0.02-0.03 S/cm (70-75% lower than H⁺-form). Ca²⁺-form Nafion    conductivity drops to 0.005-0.01 S/cm due to ionic crosslinking between    sulfonate groups. Periodic acid treatment (1 M H₂SO₄, 1 hour, 80 degrees C)    regenerates the H⁺ form.
- **Temperature**: Proton conductivity increases with temperature following    Arrhenius behavior with activation energy of 10-15 kJ/mol. Nafion    conductivity increases from 0.08 S/cm at 25 degrees C to 0.12 S/cm at 60    degrees C. The Q₁₀ is approximately 1.3-1.5 for fully hydrated membranes.
- **Biofouling**: Microbial biofilm growth on membrane surfaces creates an    additional resistance layer and blocks pore openings. Biofouling increases    area-specific resistance by 50-500% over months of operation. Extracellular    polymeric substances (EPS) penetrate the membrane surface, reducing effective    exchange capacity.
- **Sulfonation Degree (for SPEEK, sPES)**: For non-fluorinated PEMs, the    degree of sulfonation (DS) directly controls IEC and conductivity. SPEEK    with DS = 40%: ~0.005 S/cm; DS = 60%: ~0.03 S/cm; DS = 80%: ~0.08 S/cm.    However, DS > 70% causes excessive swelling and mechanical instability.
- **Membrane Thickness**: Conductivity is an intrinsic property independent of    thickness, but area-specific resistance (ASR = thickness/conductivity) scales    linearly. Thinner membranes (Nafion 212, 51 um) reduce ohmic losses but    increase substrate and oxygen crossover.
- **Mechanical Compression**: Compressed membranes show 5-15% higher    conductivity due to reduced pore volume and shorter proton transport paths.    Assembly torque in MES cells affects membrane conductivity.
- **Membrane Age**: Degradation of ion exchange groups through chemical    (radical attack from H₂O₂) and mechanical (swelling cycles) aging reduces    IEC and conductivity by 10-30% over 1-3 years of operation.

## Related Parameters

- **name**: Internal Resistance

- **relationship**: Membrane resistance is typically 20-60% of total
- **name**: pH

- **relationship**: Cation contamination prevents proton transport, causing anolyte
- **name**: Calcium Concentration

- **relationship**: Ca²⁺ contamination is particularly damaging to PEM
- **name**: Sodium Concentration

- **relationship**: Na⁺ occupies exchange sites, reducing proton
- **name**: Membrane Type

- **relationship**: Material chemistry (PFSA, SPEEK, AEM) determines base
- **name**: Current Density

- **relationship**: Limited by membrane conductivity through ohmic voltage
- **name**: Power Density

- **relationship**: Ohmic losses from membrane resistance reduce maximum

## Compatible Systems

Membrane Separator

## References

1. Xu, J., Sheng, G.P., Luo, H.W., Li, W.W., Wang, L.F., and Yu, H.Q. (2012).
   "Fouling of proton exchange membrane (PEM) deteriorates the performance of
   microbial fuel cell." Water Research, 46(6), 1817-1824.

2. Rozendal, R.A., Hamelers, H.V.M., and Buisman, C.J.N. (2006). "Effects of
   membrane cation transport on pH and microbial fuel cell performance."
   Environmental Science & Technology, 40(17), 5206-5211.

3. Harnisch, F., Warmbier, R., Schneider, R., and Schroder, U. (2009).
   "Modeling the ion transfer and polarization of ion exchange membranes in
   bioelectrochemical systems." Bioelectrochemistry, 75(2), 136-141.

4. Kim, J.R., Cheng, S., Oh, S.E., and Logan, B.E. (2007). "Power generation
   using different cation, anion, and ultrafiltration membranes in microbial
   fuel cells." Environmental Science & Technology, 41(3), 1004-1009.

5. Mauritz, K.A. and Moore, R.B. (2004). "State of understanding of Nafion."
   Chemical Reviews, 104(10), 4535-4586.

6. Leong, J.X., Daud, W.R.W., Ghasemi, M., Liew, K.B., and Ismail, M. (2013).
   "Ion exchange membranes as separators in microbial fuel cells for bioenergy
   conversion: A comprehensive review." Renewable and Sustainable Energy Reviews,
   28, 575-587.

---

_This parameter documentation covers membrane ionic conductivity measurement
methods, degradation mechanisms, and performance implications for microbial
electrochemical systems. Membrane conductivity is a critical determinant of
ohmic losses and is substantially affected by the complex electrolyte
environment unique to MES operation._

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Membrane+Proton+Conductivity&body=**Parameter%3A**+Membrane+Proton+Conductivity%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fmembrane-proton-conductivity.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Membrane+Proton+Conductivity&body=**Parameter%3A**+Membrane+Proton+Conductivity%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fmembrane-proton-conductivity.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Membrane+Proton+Conductivity&body=**Parameter%3A**+Membrane+Proton+Conductivity%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fmembrane-proton-conductivity.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
