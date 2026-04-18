# Cod Removal

Chemical oxygen demand (COD) removal efficiency measures the percentage reduction in total oxidizable organic and inorganic matter during wastewater treatment in a microbial electrochemical system (MES). COD quantifies the oxygen equivalent required to chemically oxidize all reducible substances in a water sample using a strong oxidant (dichromate), providing a comprehensive measure of pollution strength that includes both biodegradable and refractory organic compounds.

COD removal is the most universally reported performance metric in MES research because it captures total organic matter conversion regardless of the metabolic pathway (direct electrode reduction, methanogenesis, fermentation, aerobic oxidation). Unlike BOD which measures only biologically degradable organics over 5 days, COD analysis is completed in 2 hours and includes recalcitrant compounds, making it the preferred process control parameter. Regulatory agencies worldwide use COD alongside BOD for discharge permitting, with typical effluent limits of 50-125 mg/L depending on the receiving water body and jurisdiction.

In MES reactors, COD removal encompasses multiple concurrent mechanisms: (1) direct electrochemical oxidation by anode-respiring bacteria (primarily Geobacter and Shewanella species) that transfer electrons to the electrode, generating current; (2) methanogenic consumption of fermentation intermediates; (3) sulfate reduction in sulfate-containing wastewaters; and (4) aerobic oxidation near air-cathodes where oxygen diffusion occurs. The fraction of COD converted to current (coulombic efficiency) versus other pathways determines the energy recovery potential.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Performance |
| **Subcategory** | Organic Removal |
| **Type** | number |
| **Unit** | % |
| **Minimum** | 0 |
| **Maximum** | 100 |
| **Papers Reporting** | 125 |

## Typical Values

- **Valid Range**: 0% to 100%
- **Typical Range**: 40% to 95%
- **MFC (acetate, lab-scale)**: 90-99%
- **MFC (domestic wastewater, lab)**: 60-85%
- **MFC (domestic wastewater, pilot)**: 40-75%
- **MEC (domestic wastewater)**: 60-90%
- **MFC (industrial wastewater)**: 50-90% (varies with substrate)
- **Regulatory limit (EU Urban WW Directive)**: < 125 mg/L (or 75% minimum removal)
- **Regulatory limit (US NPDES, typical)**: < 80-100 mg/L
- **Typical influent domestic COD**: 300-600 mg/L

## Measurement Methods

- **Closed Reflux Dichromate Method (APHA 5220C/D)**: The standard method oxidizes organic matter with potassium dichromate in sulfuric acid at 150 deg C for 2 hours. Remaining dichromate is quantified by colorimetry (spectrophotometer at 600 nm) or titrimetry. Pre-packaged reagent vials (Hach, Merck) simplify the procedure. Accuracy: +/- 5-10 mg/L; range: 3-15,000 mg/L depending on dilution. This is the regulatory reference method.
- **Online COD Analyzers**: Continuous online COD measurement using UV absorbance (spectral methods, e.g., Hach UVAS sc, s::can spectro::lyser) or thermal combustion (e.g., LAR QuickCODultra) provides real-time COD data for process control. UV methods measure surrogate absorbance at 254 nm calibrated against dichromate COD, with accuracy of +/- 5-15% when properly calibrated. Thermal combustion methods achieve +/- 3% accuracy.
- **TOC-to-COD Correlation**: Total organic carbon (TOC) analyzers provide faster results (5-10 minutes) than dichromate COD. For a given wastewater type, the COD/TOC ratio is relatively constant (typically 2.5-3.5 for domestic wastewater). Once established, TOC can serve as a rapid COD proxy.

## Affecting Factors

### Primary

- **Hydraulic retention time**: COD removal increases logarithmically with HRT. For domestic wastewater in MFCs: ~50% at 2 h, ~70% at 6 h, ~85% at 12 h, ~90% at 24 h. Diminishing returns above 24 h as refractory COD dominates the residual.
- **Substrate composition**: Simple, soluble substrates (acetate, glucose) achieve >95% removal. Complex real wastewaters containing particulate, colloidal, and refractory organics typically achieve 40-80% removal. The soluble/particulate COD ratio strongly predicts MES removal efficiency.
- **Organic loading rate**: Optimal OLR for MFC COD removal is 1-4 kg COD/m^3/d. Below 0.5 kg COD/m^3/d, the biofilm is substrate-starved. Above 5 kg COD/m^3/d, incomplete conversion produces poor effluent quality.
- **Temperature**: Every 10 deg C decrease below 35 deg C reduces COD removal rate by approximately 30-50% (Q10 of 1.5-2.0). Psychrophilic operation (10-15 deg C) may require 2-4x longer HRT to achieve equivalent removal.
- **Electrode surface area and biofilm development**: Greater anode surface area supports more biofilm mass, increasing COD conversion capacity. Carbon brush and granular electrodes with specific surface areas >1,000 m^2/m^3 reactor volume achieve the highest removal rates.

## References

1. Liu, H. et al. "Production of electricity during wastewater treatment using a single chamber microbial fuel cell." Environmental Science & Technology, 38(7), 2281-2285 (2004).
2. Ahn, Y. and Logan, B.E. "Effectiveness of domestic wastewater treatment using microbial fuel cells at ambient and mesophilic temperatures." Bioresource Technology, 101(2), 469-475 (2010).
3. APHA. "Standard Methods for the Examination of Water and Wastewater." 23rd Edition, 2017.
4. Ge, Z. et al. "Long-term performance of a 200 liter modularized microbial fuel cell system treating municipal wastewater." Bioresource Technology, 218, 682-690 (2016).
5. Liang, P. et al. "One-year operation of 1000-L modularized microbial fuel cell for municipal wastewater treatment." Water Research, 141, 1-8 (2018).

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Cod+Removal&body=**Parameter%3A**+Cod+Removal%0A**Category%3A**+Performance%0A**File%3A**+parameters%2Fperformance%2Fcod-removal.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Cod+Removal&body=**Parameter%3A**+Cod+Removal%0A**Category%3A**+Performance%0A**File%3A**+parameters%2Fperformance%2Fcod-removal.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Cod+Removal&body=**Parameter%3A**+Cod+Removal%0A**Category%3A**+Performance%0A**File%3A**+parameters%2Fperformance%2Fcod-removal.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
