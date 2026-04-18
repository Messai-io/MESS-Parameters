# Magnesium Ion Concentration

Magnesium concentration refers to the dissolved magnesium ion (Mg²⁺) content in
the electrolyte solutions of microbial electrochemical systems. Magnesium is a
divalent alkaline earth cation that serves as an essential cofactor for hundreds
of enzymatic reactions in microbial metabolism, including ATP-dependent
processes, nucleic acid stabilization, and ribosomal function. In
electroactive bacteria, Mg²⁺ is required for the proper folding and function
of c-type cytochromes central to extracellular electron transfer.

Magnesium exhibits similar geochemical behavior to calcium but differs in key
precipitation characteristics. Magnesium carbonate (MgCO₃, Ksp = 6.8 x 10⁻⁶)
and magnesium hydroxide (Mg(OH)₂, Ksp = 5.6 x 10⁻¹²) are less soluble at
high pH than their calcium analogs, forming brucite and other deposits on
cathode surfaces where local pH can exceed 10-12. Struvite
(MgNH₄PO₄·6H₂O, Ksp = 2.5 x 10⁻¹³) is a particularly problematic
precipitate in systems treating nitrogen-rich wastewater, as it incorporates
both magnesium and ammonium into a crystalline phase that fouls membranes and
electrodes.

In microbial desalination cells, Mg²⁺ is removed from saline feed water
through cation exchange membranes (CEMs), contributing to overall salt removal.
However, Mg²⁺ transport through Nafion and other PEMs is 3-5 times slower than
Na⁺ due to the higher charge density and hydration energy of the divalent ion,
leading to selective depletion of monovalent cations and enrichment of Mg²⁺ in
the desalination chamber.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Materials |
| **Type** | number |
| **Unit** | mM |

## Typical Values

- **Valid Range**: 0.01-100 mM (0.24-2,430 mg/L as Mg²⁺)
- **Typical Range in MES**: 0.2-10 mM (5-243 mg/L)
- **Optimal for microbial growth**: 0.5-5 mM (12-121 mg/L)
- **Domestic wastewater**: 1-5 mM (24-121 mg/L)
- **Seawater**: ~53 mM (1,290 mg/L)
- **Groundwater**: 0.5-20 mM (12-486 mg/L)
- **Nutrient media (standard)**: 0.2-1 mM (as MgSO₄·7H₂O)
- **Scaling risk threshold**: >5 mM at pH >9.0
- **Struvite formation risk**: >1 mM Mg²⁺ + >5 mM NH₄⁺ + >0.5 mM PO₄³⁻

## Measurement Methods

- **Inductively Coupled Plasma Optical Emission Spectrometry (ICP-OES)**: Acidify samples to 2% HNO₃ within 24 hours. Analyze at the Mg emission line 279.553 nm or 285.213 nm. Calibrate with 0.1-100 mg/L certified standards in matching acid matrix. Detection limit: 0.001 mg/L. Matrix effects from high-Na samples require standard addition or internal standardization (yttrium). Run time: 2-3 minutes per sample. Preferred method for multi-element analysis in complex wastewater matrices.
- **EDTA Complexometric Titration (Total Hardness minus Ca)**: Determine total hardness by titrating sample at pH 10 (NH₃/NH₄Cl buffer) with EDTA using Eriochrome Black T indicator (blue to pink to blue endpoint). Separately determine Ca²⁺ at pH 12 with murexide indicator. Calculate Mg²⁺ = Total hardness - Ca²⁺. Standard Methods 3500-Mg B. Precision: ±5%. Detection limit: 1 mg/L. Interference from heavy metals >5 mg/L requires pretreatment with hydroxylamine hydrochloride.
- **Ion Chromatography (IC)**: Cation IC on IonPac CS16 column with methanesulfonic acid eluent (30-40 mM), 1.0 mL/min, suppressed conductivity detection. Mg²⁺ elutes between Na⁺/NH₄⁺ and Ca²⁺ at approximately 12-14 minutes. Detection limit: 0.005 mg/L. Linear range: 0.02-500 mg/L. Simultaneous quantification of all major cations in a single injection. Sample dilution required for saline matrices.
- **Atomic Absorption Spectrometry (AAS)**: Flame AAS at 285.2 nm using air-acetylene flame. Linear range: 0.02-2 mg/L (dilute concentrated samples). Add lanthanum chloride (0.1% La) to suppress phosphate and aluminum interference. Detection limit: 0.001 mg/L. Well-established reference method with extensive validation history. Single- element analysis limits throughput compared to ICP-OES.

## Affecting Factors

### Primary

- **Source Water Hardness**: Water hardness (Ca²⁺ + Mg²⁺ as CaCO₃ equivalents)    determines baseline magnesium. Hard water (>200 mg/L as CaCO₃) can supply    5-15 mM Mg²⁺, while soft water (<50 mg/L) provides <1 mM. Dolomitic    aquifers are particularly rich in Mg²⁺.
- **pH**: Mg(OH)₂ begins precipitating at pH >9.0 (cf. Ca(OH)₂ at pH >12),    making it the first hydroxide to scale cathode surfaces in MECs where local    pH rises from hydrogen evolution. This generates insulating Mg(OH)₂ deposits    that increase cathodic overpotential.
- **Ammonium and Phosphate Levels**: Struvite (MgNH₄PO₄·6H₂O) crystallization    occurs when the product of Mg²⁺, NH₄⁺, and PO₄³⁻ activities exceeds the    solubility product. This is common in urine-fed and swine wastewater MES    systems. While problematic as fouling, controlled struvite recovery is a    valuable nutrient reclamation strategy.
- **Temperature**: Magnesium salt solubility generally increases with    temperature (normal solubility), opposite to calcium carbonate. Higher    temperatures (30-37 degrees C) reduce Mg scaling risk but increase    biological demand.
- **Ionic Strength**: High ionic strength in saline systems increases Mg²⁺    apparent solubility through activity coefficient depression but concentrates    Mg²⁺ in desalination chambers where CEM selectivity favors monovalent ion    transport.
- **Mg²⁺/Ca²⁺ Ratio**: Ratios >1 (seawater: ~5.2) promote formation of    aragonite over calcite CaCO₃, which is denser and more adherent. High Mg    inhibits calcite growth through lattice incorporation.
- **Sulfate Concentration**: MgSO₄ is highly soluble (~2.9 M at 25 degrees C),    so sulfate systems have lower Mg²⁺ precipitation risk. Magnesium added as    MgSO₄·7H₂O simultaneously provides sulfur for microbial biosynthesis.
- **Complexation**: Organic ligands (humic acids, EDTA, citrate) complex Mg²⁺,    reducing free ion activity and preventing precipitation while maintaining    bioavailability through slow-release mechanisms.

## Related Parameters

- **name**: Calcium Concentration

- **relationship**: Co-precipitates with magnesium in mixed carbonate
- **name**: pH

- **relationship**: Governs Mg(OH)₂ and MgCO₃ precipitation; cathode pH elevation is the
- **name**: Phosphate Concentration

- **relationship**: Required for struvite formation; Mg:P ratio
- **name**: Ammonium Concentration

- **relationship**: Struvite co-precipitant; high NH₄⁺ with Mg²⁺
- **name**: Internal Resistance

- **relationship**: Increases with Mg-based mineral deposits on
- **name**: Membrane Conductivity

- **relationship**: Reduced by Mg²⁺ fouling; divalent cation
- **name**: Conductivity (Solution)

- **relationship**: Mg²⁺ contributes to ionic conductivity;

## Compatible Systems

Ion Concentrations

## References

1. Rozendal, R.A., Hamelers, H.V.M., and Buisman, C.J.N. (2006). "Effects of
   membrane cation transport on pH and microbial fuel cell performance."
   Environmental Science & Technology, 40(17), 5206-5211.

2. Cusick, R.D. and Logan, B.E. (2012). "Phosphorus recovery as struvite
   within a single chamber microbial electrolysis cell." Bioresource Technology,
   107, 110-115.

3. Zamora, P., Georgieva, T., Ter Heijne, A., Sleutels, T.H.J.A., Jeremiasse,
   A.W., Saakes, M., Buisman, C.J.N., and Kuntke, P. (2017). "Ammonia recovery
   from urine in a scaled-up microbial electrolysis cell." Journal of Power
   Sources, 356, 491-499.

4. Jadhav, D.A., Ghadge, A.N., and Ghangrekar, M.M. (2014). "Simultaneous
   organic matter removal and disinfection of wastewater with enhanced power
   generation in microbial fuel cell." Bioresource Technology, 163, 328-334.

5. APHA, AWWA, WEF (2017). "Standard Methods for the Examination of Water and
   Wastewater." 23rd Edition. American Public Health Association, Washington DC.

---

_This parameter documentation covers magnesium concentration measurement,
precipitation chemistry, and nutrient roles in microbial electrochemical
systems. Effective Mg²⁺ management balances biological requirements against
scaling and fouling risks for sustained system performance._

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Magnesium+Ion+Concentration&body=**Parameter%3A**+Magnesium+Ion+Concentration%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fmagnesium-ion-concentration.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Magnesium+Ion+Concentration&body=**Parameter%3A**+Magnesium+Ion+Concentration%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fmagnesium-ion-concentration.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Magnesium+Ion+Concentration&body=**Parameter%3A**+Magnesium+Ion+Concentration%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fmagnesium-ion-concentration.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
