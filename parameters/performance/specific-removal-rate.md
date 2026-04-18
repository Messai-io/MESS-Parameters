# Specific Removal Rate

Specific removal rate quantifies the mass of organic pollutant (typically measured as COD or BOD) removed per unit of electrode surface area per unit time in a microbial electrochemical system (MES), expressed in grams per square meter per day (g/m^2/d). This electrode-area-normalized metric enables direct comparison of organic matter removal performance across different MES designs, electrode materials, and operating conditions independent of reactor volume or hydraulic loading.

The specific removal rate reflects the bioelectrochemical activity of the anode biofilm and its effectiveness in converting dissolved and particulate organic matter to electrons. Unlike percentage-based removal metrics (which depend on influent concentration), the specific removal rate provides an absolute measure of the anode's organic oxidation capacity per unit electrode surface. This is valuable for reactor sizing because the total electrode area required for a given application equals the mass loading rate divided by the specific removal rate.

The relationship between specific removal rate and areal power density reveals the coulombic efficiency: if the specific removal rate is high but power density is low, most organic removal occurs through non-electroactive pathways (methanogenesis, fermentation). High specific removal rate coupled with high power density indicates efficient bioelectrocatalytic conversion, which is the target for both treatment and energy recovery objectives.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Performance |
| **Subcategory** | Organic Removal |
| **Type** | number |
| **Unit** | g/m²/d |
| **Minimum** | 0 |
| **Maximum** | 100 |
| **Papers Reporting** | 16 |

## Typical Values

- **Valid Range**: 0 g COD/m^2/d to 100 g COD/m^2/d
- **Typical Range**: 5 g COD/m^2/d to 50 g COD/m^2/d
- **MFC (acetate, lab, flat electrode)**: 20-80 g COD/m^2/d
- **MFC (domestic wastewater, lab)**: 5-30 g COD/m^2/d
- **MFC (domestic wastewater, pilot)**: 3-15 g COD/m^2/d
- **MFC (high-strength industrial WW)**: 30-100 g COD/m^2/d
- **MEC (domestic wastewater)**: 5-25 g COD/m^2/d
- **Conventional biofilm reactor (comparison)**: 10-40 g COD/m^2/d
- **Activated sludge MLVSS basis (comparison)**: 0.2-0.5 kg COD/kg MLVSS/d

## Measurement Methods

- **Influent-Effluent COD Difference Method**: COD concentrations are measured in influent and effluent (standard dichromate method or online UV analyzer). Specific removal rate = (COD_in - COD_out) x Q / A_electrode, where Q is flow rate (L/d) and A_electrode is projected anode area (m^2). For batch systems: = (COD_initial - COD_final) x V_reactor / (A_electrode x time_batch).
- **Mass Loading Rate Correlation**: At steady state in continuous-flow systems, the specific removal rate is calculated from the organic loading rate (OLR, g COD/m^2/d applied to the electrode) multiplied by the fractional removal efficiency: Specific removal rate = OLR x removal efficiency.
- **Coulombic Analysis**: The electroactive fraction of organic removal is calculated from current: Electroactive removal rate = (I x M_COD) / (n x F x A_electrode), where M_COD = 32 g/mol (oxygen equivalent), n = 4 electrons per mol O2 equivalent, and F is Faraday's constant. Total removal rate = electroactive rate / coulombic efficiency.

## Affecting Factors

### Primary

- **Electrode surface area (actual vs. projected)**: Three-dimensional electrodes (carbon brush, graphite granules) have actual surface areas 10-1000x larger than their projected area, supporting more biofilm and higher apparent specific removal rates per projected area.
- **Substrate composition**: Soluble, readily biodegradable substrates (VFAs, simple sugars) are removed at 2-5x higher specific rates than complex, particulate substrates that require hydrolysis before bioelectrochemical oxidation.
- **Biofilm maturity**: Mature, enriched electroactive biofilms (dominated by Geobacter, Desulfuromonas) achieve 2-5x higher specific removal rates than immature or non-enriched biofilms.
- **Mass transport**: Adequate substrate delivery to the biofilm surface is essential. Stagnant conditions create diffusion-limited zones that reduce effective specific removal rate. Convective flow (recirculation, mixing) improves mass transport and specific rate.
- **Temperature**: Specific removal rate approximately doubles for every 10 deg C increase between 10-35 deg C, following Arrhenius-type kinetics of the biofilm metabolic processes.

## References

1. Logan, B.E. "Essential data and techniques for conducting microbial fuel cell experiments." ChemSusChem, 5(6), 988-994 (2012).
2. Liu, H. et al. "Production of electricity during wastewater treatment using a single chamber microbial fuel cell." Environmental Science & Technology, 38(7), 2281-2285 (2004).
3. Ge, Z. et al. "Long-term performance of a 200 liter modularized microbial fuel cell system." Bioresource Technology, 218, 682-690 (2016).
4. Ahn, Y. and Logan, B.E. "Effectiveness of domestic wastewater treatment using microbial fuel cells at ambient and mesophilic temperatures." Bioresource Technology, 101(2), 469-475 (2010).
5. Heidrich, E.S. et al. "Performance of a pilot scale microbial electrolysis cell fed on domestic wastewater." Bioresource Technology, 173, 87-95 (2014).

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Specific+Removal+Rate&body=**Parameter%3A**+Specific+Removal+Rate%0A**Category%3A**+Performance%0A**File%3A**+parameters%2Fperformance%2Fspecific-removal-rate.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Specific+Removal+Rate&body=**Parameter%3A**+Specific+Removal+Rate%0A**Category%3A**+Performance%0A**File%3A**+parameters%2Fperformance%2Fspecific-removal-rate.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Specific+Removal+Rate&body=**Parameter%3A**+Specific+Removal+Rate%0A**Category%3A**+Performance%0A**File%3A**+parameters%2Fperformance%2Fspecific-removal-rate.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
