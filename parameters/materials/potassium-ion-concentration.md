# Potassium Ion Concentration

Potassium concentration refers to the dissolved potassium ion (K⁺) content in
the electrolyte solutions of microbial electrochemical systems. Potassium is a
monovalent alkali metal cation that serves as the principal intracellular cation
in virtually all microorganisms, maintaining cell turgor pressure, activating
intracellular enzymes, and regulating membrane potential. Intracellular K⁺
concentrations in bacteria typically reach 100-500 mM, approximately 10-100
times higher than extracellular levels, maintained by active ATP-dependent
transport (Trk, Kdp, Kup systems).

In MES electrolytes, potassium is commonly introduced through pH buffer salts
(KH₂PO₄, K₂HPO₄), nutrient amendments (KCl), and is naturally present in
wastewater at 1-15 mM. Potassium phosphate buffer is preferred over sodium
phosphate in many MES studies because K⁺ is the biologically relevant cation
for microbial growth, and potassium salts generally provide slightly higher
solution conductivity due to the higher equivalent ionic conductance of K⁺
(73.5 S·cm²/mol) compared to Na⁺ (50.1 S·cm²/mol).

Unlike calcium and magnesium, potassium does not form insoluble precipitates
under MES operating conditions, as common potassium salts (KCl, K₂SO₄, KNO₃,
KH₂PO₄) are all highly soluble. This makes potassium a benign electrolyte
component that enhances ionic conductivity without contributing to scaling or
membrane fouling. The primary concern with potassium is its competitive
transport through cation exchange membranes, where K⁺ competes with H⁺ for
exchange sites, contributing to the catholyte pH elevation problem observed in
dual-chamber MES configurations.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Materials |
| **Type** | number |
| **Unit** | mM |

## Typical Values

- **Valid Range**: 0.01-500 mM (0.39 mg/L to 19.5 g/L)
- **Typical Range in MES**: 2-100 mM (78 mg/L to 3.9 g/L)
- **50 mM PBS (pH 7.0)**: Contains ~30 mM K⁺ (from KH₂PO₄/K₂HPO₄)
- **100 mM PBS**: Contains ~60 mM K⁺
- **Domestic wastewater**: 2-15 mM (78-585 mg/L)
- **Urine**: 25-80 mM (0.98-3.1 g/L)
- **Agricultural runoff**: 0.5-10 mM (20-390 mg/L)
- **Seawater**: ~10 mM (390 mg/L)
- **Growth media (minimal)**: 5-20 mM
- **Inhibitory threshold**: >300 mM (for non-halophilic bacteria)

## Measurement Methods

- **Inductively Coupled Plasma Optical Emission Spectrometry (ICP-OES)**: Analyze at K emission line 766.490 nm. Acidify samples to 2% HNO₃. Calibrate with 0.1-100 mg/L certified standards. Detection limit: 0.05 mg/L. Ionization interference from high-Na matrices requires cesium ionization suppressant (1,000 mg/L Cs as CsCl) or matrix-matched calibration. ICP-OES provides simultaneous multi-element analysis, efficiently profiling all major cations in a single run.
- **Flame Atomic Emission Spectrometry (FAES)**: Standard Methods 3500-K B. Aspirate sample into air-acetylene flame and measure emission at 766.5 nm. Add cesium chloride ionization suppressant (1,000 mg/L Cs). Calibrate with 0.1-10 mg/L K standards. Detection limit: 0.01 mg/L. Precision: ±3-5%. Simpler and less expensive than ICP-OES. Interference from high Na corrected with matrix matching.
- **Ion Chromatography (IC)**: Cation IC on IonPac CS16 or CS12A column with methanesulfonic acid eluent (20-40 mM). K⁺ elutes between Na⁺ and Mg²⁺ at approximately 8-10 minutes. Suppressed conductivity detection. Detection limit: 0.005 mg/L. NH₄⁺ can co-elute with K⁺ on some columns; CS16 with gradient elution resolves both peaks. Linear range: 0.02-500 mg/L.
- **Ion-Selective Electrode (ISE)**: Valinomycin-based potassium ISE with PVC membrane. Nernstian slope: 54-59 mV/decade at 25 degrees C. Detection limit: 0.04 mg/L. Selectivity over Na⁺: approximately 3,000:1 (log K_K,Na = -3.5). Response time: 10-30 seconds. Add ionic strength adjuster (ISA) for consistent readings. Suitable for online monitoring. Interference from Cs⁺, Rb⁺, and NH₄⁺ (selectivity coefficient ~0.01 for NH₄⁺).

## Affecting Factors

### Primary

- **Buffer Salt Composition**: Potassium phosphate buffer (KH₂PO₄/K₂HPO₄) is    the dominant K⁺ source in research MES. A 50 mM phosphate buffer at pH 7.0    contributes approximately 30 mM K⁺. Switching to sodium phosphate buffer    eliminates this K⁺ source, potentially limiting microbial growth if no    supplemental K⁺ is provided.
- **Substrate/Wastewater Composition**: Urine contains 25-80 mM K⁺, making it    a potassium-rich feedstock for MES. Domestic wastewater provides 2-15 mM K⁺.    Industrial effluents vary widely; food processing wastewater can contain    10-50 mM K⁺ from vegetable and fruit residues.
- **Microbial Uptake**: Bacteria maintain steep K⁺ gradients (100-500 mM    intracellular vs. 2-50 mM extracellular) through energy-dependent transport.    Active biofilm growth depletes K⁺ from the bulk electrolyte, particularly in    batch systems with low initial K⁺ (<5 mM).
- **Membrane Transport**: In dual-chamber systems with CEMs, K⁺ transports    from anode to cathode driven by the electrical field. K⁺ flux through Nafion    117 is approximately 0.1-0.5 mmol/(m²·s) at typical MES current densities.    This depletes anolyte K⁺ and contributes to catholyte alkalinization.
- **Ionic Strength**: K⁺ contributes to total ionic strength, affecting    microbial activity coefficients, Debye length at electrode surfaces, and    double-layer capacitance. Optimal ionic strength for MES operation is    50-300 mM, with K⁺ as a preferred contributor due to its biological    compatibility.
- **Temperature**: K⁺ transport rates through membranes increase with    temperature. Microbial K⁺ uptake kinetics follow Arrhenius behavior with    activation energies of 30-50 kJ/mol.
- **Competing Cations**: Na⁺ at high concentrations (>200 mM) can inhibit    K⁺ uptake through competitive inhibition of transport proteins. Ca²⁺ and    Mg²⁺ at millimolar levels do not significantly compete with K⁺ transport.
- **pH**: K⁺/H⁺ antiporters in bacterial membranes couple K⁺ uptake to proton    extrusion, linking potassium homeostasis to pH regulation. Acid stress    triggers increased K⁺ uptake to maintain intracellular pH.

## Related Parameters

- **name**: Sodium Concentration

- **relationship**: Primary competing monovalent cation; K⁺/Na⁺ ratio
- **name**: Phosphate Concentration

- **relationship**: K⁺ is co-supplied with phosphate in KH₂PO₄/
- **name**: Conductivity (Solution)

- **relationship**: K⁺ is a significant contributor to ionic
- **name**: Internal Resistance

- **relationship**: Adequate K⁺ (as part of total ionic content) reduces
- **name**: pH

- **relationship**: K⁺/H⁺ exchange across microbial membranes links potassium and pH
- **name**: Buffer Capacity

- **relationship**: K-phosphate buffer is the standard pH control system in
- **name**: Membrane Conductivity

- **relationship**: K⁺ occupancy of CEM exchange sites affects proton

## Compatible Systems

Ion Concentrations

## References

1. Epstein, W. (2003). "The roles and regulation of potassium in bacteria."
   Progress in Nucleic Acid Research and Molecular Biology, 75, 293-320.

2. Nam, J.Y., Kim, H.W., Lim, K.H., Shin, H.S., and Logan, B.E. (2010).
   "Variation of power generation at different buffer types and conductivities
   in single chamber microbial fuel cells." Biosensors and Bioelectronics, 25(5),
   1155-1159.

3. Rozendal, R.A., Hamelers, H.V.M., and Buisman, C.J.N. (2006). "Effects of
   membrane cation transport on pH and microbial fuel cell performance."
   Environmental Science & Technology, 40(17), 5206-5211.

4. Kuntke, P., Smiech, K.M., Bruning, H., Zeeman, G., Saakes, M., Sleutels,
   T.H.J.A., Hamelers, H.V.M., and Buisman, C.J.N. (2012). "Ammonium recovery
   and energy production from urine by a microbial fuel cell." Water Research,
   46(8), 2627-2636.

5. APHA, AWWA, WEF (2017). "Standard Methods for the Examination of Water and
   Wastewater." 23rd Edition. American Public Health Association, Washington DC.

---

_This parameter documentation covers potassium concentration measurement,
biological roles, and electrolyte contributions in microbial electrochemical
systems. Potassium is a biologically essential and electrochemically benign
electrolyte component that enhances both microbial activity and solution
conductivity without scaling or fouling risks._

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Potassium+Ion+Concentration&body=**Parameter%3A**+Potassium+Ion+Concentration%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fpotassium-ion-concentration.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Potassium+Ion+Concentration&body=**Parameter%3A**+Potassium+Ion+Concentration%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fpotassium-ion-concentration.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Potassium+Ion+Concentration&body=**Parameter%3A**+Potassium+Ion+Concentration%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fpotassium-ion-concentration.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
