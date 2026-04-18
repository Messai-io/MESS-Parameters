# Chloride Ion Concentration

Chloride concentration refers to the dissolved chloride ion (Cl⁻) content in
the electrolyte solutions of microbial electrochemical systems. Chloride is the
most abundant anion in many natural and engineered water systems and plays a
central role in solution conductivity, microbial osmoregulation, and
electrochemical side reactions. As a monovalent, highly mobile anion with an
ionic conductivity of 76.3 S·cm²/mol at infinite dilution, chloride is a major
contributor to the ohmic performance of MES electrolytes.

In microbial desalination cells (MDCs), chloride is the principal anion removed
from saline feed water, migrating through anion exchange membranes driven by the
electrical potential generated from microbial substrate oxidation. The
desalination rate is directly proportional to current generation and chloride
transport number. In MFCs and MECs, chloride concentration affects solution
conductivity, microbial activity, and the risk of anodic chlorine evolution at
elevated potentials.

At the anode, chloride can be oxidized to molecular chlorine (Cl₂) or
hypochlorite (OCl⁻) when the anode potential exceeds the standard potential of
1.36 V vs. SHE (Cl⁻/Cl₂). While this potential is not typically reached in
standard MES operation, systems with applied voltage (MECs) or boosted
configurations can approach chlorine-generating potentials, potentially
damaging the biofilm. Conversely, low-level chloride (<0.5 mM) can limit
solution conductivity and increase ohmic losses, particularly in systems
designed for low-salinity applications.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Materials |
| **Type** | number |
| **Unit** | mM |

## Typical Values

- **Valid Range**: 0.01-1,000 mM (0.35 mg/L to 35.5 g/L)
- **Typical Range in MES**: 5-200 mM (0.18-7.1 g/L)
- **Optimal for conductivity without inhibition**: 10-100 mM
- **Domestic wastewater**: 2-10 mM (70-350 mg/L)
- **Brackish water**: 50-300 mM (1.8-10.6 g/L)
- **Seawater**: ~545 mM (19.4 g/L)
- **MDC feed (typical)**: 50-600 mM (1.8-21.3 g/L NaCl equivalent)
- **Chloride toxicity threshold**: >300 mM for freshwater-adapted biofilms
- **Nutrient media (standard)**: 10-50 mM

## Measurement Methods

- **Ion Chromatography (IC)**: The preferred method for simultaneous anion analysis. Separation on an IonPac AS22 column (4 x 250 mm) with 4.5 mM Na₂CO₃/1.4 mM NaHCO₃ eluent at 1.2 mL/min. Suppressed conductivity detection using an ASRS 300 suppressor. Chloride elutes at approximately 4-5 minutes. Detection limit: 0.003 mg/L (0.08 uM). Linear range: 0.01-200 mg/L. Resolves Cl⁻ from fluoride, bromide, nitrate, phosphate, and sulfate in a single 15-minute run. Sample filtration through 0.45 um membranes required to protect the column.
- **Silver Nitrate Titration (Argentometric Method)**: Standard Methods 4500-Cl⁻ B (Mohr method). Add 1 mL of 5% K₂CrO₄ indicator to 50-100 mL sample at pH 7-10. Titrate with standardized 0.0141 M AgNO₃ until the first persistent reddish-brown color from Ag₂CrO₄ precipitation. Each mL of 0.0141 M AgNO₃ = 0.5 mg Cl⁻. Precision: ±1-3% for concentrations >5 mg/L. Interference from sulfide, bromide, and iodide. Simple and inexpensive for routine monitoring. Detection limit: ~1 mg/L.
- **Chloride Ion-Selective Electrode (ISE)**: Solid-state AgCl/Ag₂S membrane electrode with double-junction reference. Calibrate with 1, 10, 100, and 1,000 mg/L NaCl standards in 2% NaNO₃ ionic strength adjuster (ISA). Nernstian slope: -56 to -59 mV/decade at 25 degrees C. Response time: 15-60 seconds. Detection limit: 0.2 mg/L. Interference from Br⁻, I⁻, S²⁻, and CN⁻. Suitable for continuous online monitoring with automated calibration. Electrode lifetime: 6-12 months.
- **Potentiometric Titration**: Automated titration with AgNO₃ and Ag/AgCl electrode for endpoint detection. Eliminates visual endpoint ambiguity of the Mohr method. Precision: ±0.5%. Suitable for colored or turbid samples where indicator methods fail. Software- controlled equivalence point determination handles multiple halides. Detection limit: 0.5 mg/L with microburette.

## Affecting Factors

### Primary

- **Source Water Salinity**: Feed water origin dominates chloride levels.    Freshwater systems operate at 1-10 mM, while marine-adapted systems tolerate    300-600 mM. MDCs are specifically designed to reduce chloride from saline    feeds, with removal rates of 50-95% depending on HRT and current density.
- **Current Density**: In MDCs, chloride removal rate is stoichiometrically    linked to current via Faraday's law: one mole of electrons transfers one    mole of monovalent ions. Higher current densities (>5 A/m²) accelerate    desalination but require proportionally higher substrate oxidation rates.
- **Membrane Selectivity**: Anion exchange membrane (AEM) chloride transport    numbers range from 0.85 to 0.98, with competing transport of bicarbonate,    sulfate, and phosphate reducing effective chloride removal. Membrane    fouling decreases selectivity over time.
- **Microbial Salt Tolerance**: Freshwater exoelectrogens (Geobacter spp.)    tolerate up to 200-300 mM NaCl. Halotolerant species (Desulfuromonas,    Geoalkalibacter) function at 300-600 mM. Above 600 mM, specialized    halophilic communities are required, with reduced current densities.
- **Temperature**: Chloride activity coefficients and membrane transport rates    increase with temperature, enhancing both conductivity and desalination    efficiency at higher temperatures (30-40 degrees C).
- **Competing Anions**: Sulfate, bicarbonate, and nitrate compete with chloride    for AEM transport sites, reducing chloride-specific removal rates.
- **pH**: Does not directly affect chloride speciation (Cl⁻ is a strong acid    anion, fully dissociated at all relevant pH), but pH-dependent membrane    charge affects transport selectivity.
- **Electrode Potential**: Anode potentials above 1.0 V vs. SHE can generate    reactive chlorine species from Cl⁻ oxidation, which are biocidal to the    anodic biofilm.

## Related Parameters

- **name**: Sodium Concentration

- **relationship**: Primary counter-ion to chloride in saline waters;
- **name**: Conductivity (Solution)

- **relationship**: Chloride is a major contributor; 1 mM NaCl
- **name**: Internal Resistance

- **relationship**: Decreases with increasing chloride/salinity due to
- **name**: Desalination Rate

- **relationship**: Directly proportional to chloride flux through AEMs in
- **name**: Sulfate Concentration

- **relationship**: Competes with chloride for AEM transport; high
- **name**: Current Density

- **relationship**: Stoichiometrically linked to ion transport rate in
- **name**: Membrane Type

- **relationship**: Selectivity and permeability determine chloride transport

## Compatible Systems

Ion Concentrations

## References

1. Cao, X., Huang, X., Liang, P., Xiao, K., Zhou, Y., Zhang, X., and Logan,
   B.E. (2009). "A new method for water desalination using microbial
   desalination cells." Environmental Science & Technology, 43(18), 7148-7152.

2. Jacobson, K.S., Drew, D.M., and He, Z. (2011). "Efficient salt removal in a
   continuously operated upflow microbial desalination cell with an air cathode."
   Bioresource Technology, 102(1), 376-380.

3. Lefebvre, O., Tan, Z., Kharkwal, S., and Ng, H.Y. (2012). "Effect of
   increasing anodic NaCl concentration on microbial fuel cell performance."
   Bioresource Technology, 112, 336-340.

4. Luo, H., Jenkins, P.E., and Ren, Z. (2011). "Concurrent desalination and
   hydrogen generation using microbial electrolysis and desalination cells."
   Environmental Science & Technology, 45(1), 340-344.

5. Mehanna, M., Saito, T., Yan, J., Hickner, M., Cao, X., Huang, X., and
   Logan, B.E. (2010). "Using microbial desalination cells to reduce water
   salinity prior to reverse osmosis." Energy & Environmental Science, 3(8),
   1114-1120.

---

_This parameter documentation covers chloride concentration measurement,
transport phenomena, and biological tolerance in microbial electrochemical
systems, with particular emphasis on microbial desalination cell applications
where chloride removal is the primary treatment objective._

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Chloride+Ion+Concentration&body=**Parameter%3A**+Chloride+Ion+Concentration%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fchloride-ion-concentration.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Chloride+Ion+Concentration&body=**Parameter%3A**+Chloride+Ion+Concentration%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fchloride-ion-concentration.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Chloride+Ion+Concentration&body=**Parameter%3A**+Chloride+Ion+Concentration%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fchloride-ion-concentration.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
