# substrate

In microbial electrochemical systems, the substrate refers to the organic or inorganic compound that serves as the electron donor for the anodic microbial community, providing both the energy source for microbial metabolism and the electrons that are ultimately transferred to the electrode to generate current. The substrate is the fundamental fuel of any MES and its identity, concentration, and complexity are among the most influential parameters determining system performance, community composition, and practical applicability.

MES substrates span an enormous range from simple, defined compounds (acetate, glucose, lactate, ethanol) used in laboratory research to complex, real-world waste streams (domestic wastewater, industrial effluents, agricultural runoff, food waste leachate) that contain hundreds of organic and inorganic constituents. The substrate determines the theoretical energy available for electricity generation (based on the Gibbs free energy of oxidation), the metabolic pathways required for complete oxidation, and consequently the microbial community structure that develops. Acetate is the most commonly used model substrate because it is directly oxidized by exoelectrogens like *Geobacter* without requiring fermentation, providing a clean system for mechanistic studies.

The choice of substrate also determines the practical application of MES. Wastewater treatment MFCs must efficiently remove complex organic matter measured as COD or BOD. MEC systems for hydrogen production require substrates that provide sufficient thermodynamic driving force when supplemented by an applied voltage. Microbial electrosynthesis systems use CO2 as the cathodic substrate. The substrate-to-current conversion efficiency, measured as coulombic efficiency, varies from nearly 100% for simple substrates in pure culture to 5-30% for complex wastewaters in mixed culture systems.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Biological |
| **Type** | string |
| **Papers Reporting** | 2489 |

## Typical Values

- **COD Concentration (wastewater MFC)**: 200 to 50,000 mg/L
- **Acetate Concentration (defined medium)**: 1 to 50 mM (60 to 3000 mg COD/L)
- **Glucose Concentration (defined medium)**: 1 to 20 g/L
- **COD Loading Rate**: 0.5 to 15 kg COD/m3/day
- **Coulombic Efficiency (acetate)**: 60-95%
- **Coulombic Efficiency (glucose)**: 15-60%
- **Coulombic Efficiency (domestic wastewater)**: 5-30%
- **Theoretical Energy Content (acetate)**: 0.87 kWh/kg COD
- **Theoretical Energy Content (glucose)**: 1.09 kWh/kg COD

## Measurement Methods

- **Chemical Oxygen Demand (COD)**: The standard measure of organic substrate strength in MES. The dichromate closed reflux method (APHA Standard Method 5220D) or spectrophotometric kit methods oxidize organic matter with K2Cr2O7 in concentrated H2SO4 and measure the remaining dichromate. COD directly relates to the electron equivalents available for current generation (1 g COD = 0.125 g e- equivalents).
- **Biochemical Oxygen Demand (BOD5)**: Five-day BOD measures the biodegradable fraction of organic matter, which is more relevant than total COD for predicting MES biological performance. The BOD:COD ratio indicates substrate biodegradability (>0.5 is readily biodegradable; <0.3 indicates recalcitrant material).
- **Specific Substrate Analysis**: HPLC with refractive index detection quantifies specific organic acids (acetate, butyrate, propionate, lactate), sugars (glucose, xylose, sucrose), and alcohols (ethanol, methanol, glycerol). Ion chromatography measures organic acid anions. GC-FID/MS analyzes volatile organic compounds.
- **Total Organic Carbon (TOC)**: TOC analyzers quantify dissolved and particulate organic carbon via high-temperature combustion and IR detection of CO2. TOC provides a carbon-specific measure complementary to COD.
- **Substrate Degradation Kinetics**: Time-course measurements of substrate concentration during MFC operation, combined with current recording, enable calculation of substrate utilization rates, half-saturation constants (Monod Ks), and coulombic efficiency. Fed-batch depletion experiments or continuous-flow steady-state analysis both provide kinetic parameters.

## Affecting Factors

### Primary

- **Substrate Complexity**: Simple, soluble substrates (acetate, lactate) are directly metabolized by exoelectrogens. Complex substrates (particulate organics, polymers) require hydrolysis and fermentation steps before the resulting intermediates reach electrode-respiring bacteria, reducing overall efficiency and increasing startup time.
- **Concentration**: Too-low substrate concentrations limit microbial metabolism (Monod kinetics). Too-high concentrations can cause substrate inhibition, osmotic stress, or excessive fermentation that overwhelms exoelectrogen capacity. Optimal concentrations are substrate-specific.
- **Biodegradability**: The BOD:COD ratio determines what fraction of organic matter is biologically accessible. Non-biodegradable fractions pass through the MES unchanged, reducing apparent removal efficiency.
- **Electron Equivalents per Mole**: Different substrates provide different numbers of electrons per mole: acetate (8 e-), glucose (24 e-), lactate (12 e-), ethanol (12 e-). This affects the theoretical current yield per unit mass of substrate.
- **Toxicity and Inhibitory Compounds**: Real wastewaters may contain heavy metals, antibiotics, surfactants, or other toxicants that inhibit microbial activity. Pre-treatment or dilution may be necessary.
- **Nutrient Balance**: Substrates must be accompanied by adequate nitrogen, phosphorus, and trace metals for microbial growth. Nutrient-poor industrial effluents may require supplementation.
- **pH and Alkalinity**: Some substrates (e.g., fermentation of sugars) generate acids that lower pH. Buffer capacity of the substrate or medium maintains optimal conditions.
- **Temperature**: Substrate biodegradation rates are temperature-dependent. Cold substrates require longer HRTs or cold-adapted communities.

## Related Parameters

- **name**: Substrate Removal Rate

- **relationship**: The rate at which substrate is consumed, measured as kg COD/m3/day
- **name**: Coulombic Efficiency

- **relationship**: The fraction of substrate electrons captured as current
- **name**: Current Density

- **relationship**: Directly dependent on substrate supply rate and conversion efficiency
- **name**: C:N Ratio

- **relationship**: Substrate carbon-to-nitrogen balance affects microbial metabolism
- **name**: Inoculum Source

- **relationship**: Must be compatible with the substrate for effective treatment

## References

- Liu, H., et al. (2005). Production of electricity during wastewater treatment using a single chamber MFC. *Environmental Science & Technology*, 38(7), 2281-2285.
- Logan, B. E. (2008). Microbial Fuel Cells. John Wiley & Sons.
- Pant, D., et al. (2010). A review of the substrates used in MFCs for sustainable energy production. *Bioresource Technology*, 101(6), 1533-1543.
- ElMekawy, A., et al. (2015). Food and agricultural wastes as substrates for bioelectrochemical system. *Food and Energy Security*, 4(2), 117-133.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+substrate&body=**Parameter%3A**+substrate%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fsubstrate.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+substrate&body=**Parameter%3A**+substrate%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fsubstrate.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+substrate&body=**Parameter%3A**+substrate%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fsubstrate.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
