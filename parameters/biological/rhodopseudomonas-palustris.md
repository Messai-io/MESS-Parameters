# Rhodopseudomonas Palustris

*Rhodopseudomonas palustris* is a Gram-negative, purple non-sulfur alphaproteobacterium celebrated as one of the most metabolically versatile organisms known to science. It can grow via all four major modes of metabolism: photoautotrophy (light + CO2), photoheterotrophy (light + organics), chemoautotrophy (H2 + CO2), and chemoheterotrophy (organics + O2 or other electron acceptors). In microbial electrochemical systems, *R. palustris* has demonstrated exceptional performance as a bioanode catalyst, particularly strain DX-1, which achieved current densities comparable to *Geobacter sulfurreducens* while utilizing a broader range of substrates.

In MES, *R. palustris* stands out for its ability to perform electrode-assisted photoheterotrophic growth, where light energy supplements the thermodynamic yield from organic substrate oxidation, enabling efficient electron transfer to anodes even from substrates with low free energy yields. The organism produces current through direct electron transfer via c-type cytochromes, without requiring exogenous mediators. Strain DX-1 has been shown to produce power densities of 2.7 W/m2 from acetate, among the highest reported for pure culture MFCs.

The organism's nitrogen fixation capability links MES to agricultural applications, as it can simultaneously generate electricity and fix atmospheric nitrogen into bioavailable forms (ammonium). Its ability to degrade lignin monomers, aromatic compounds, and diverse organic acids makes it suitable for MES treating agricultural runoff, lignocellulosic hydrolysates, and industrial wastewaters containing recalcitrant organics. The complete genome sequence, established genetics, and decades of photosynthesis research provide a strong foundation for engineered MES applications.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Biological |
| **Subcategory** | Photosynthetic Bacteria |
| **Type** | object |

## Typical Values

- **Valid Range (current production)**: 0.05 to 5.0 A/m2
- **Typical Range (current production)**: 0.5 to 3.0 A/m2
- **Maximum Power Density (strain DX-1)**: 2.7 W/m2
- **Optimal Temperature**: 28-35 degrees C
- **Optimal pH**: 6.5-7.5
- **Doubling Time**: 4-8 hours (photoheterotrophic), 8-16 hours (chemoheterotrophic)
- **Coulombic Efficiency**: 30-70%
- **Substrate Range**: Acetate, butyrate, lactate, ethanol, aromatic compounds, fatty acids

## Measurement Methods

- **Electrochemical Performance in Photo-MFCs**: Current production is measured under controlled illumination and dark conditions. The photo-enhancement effect is quantified as the ratio of light-to-dark current. Action spectra correlate specific wavelengths with current enhancement. Power density curves under optimal illumination establish maximum performance.
- **Cytochrome and EET Protein Analysis**: UV-vis spectroscopy detects c-type cytochromes (Soret band at 410 nm). Heme staining of SDS-PAGE gels identifies individual cytochrome species. Outer membrane protein extraction and characterization reveal the molecular components of the EET pathway.
- **Substrate Utilization Profiling**: The organism's ability to oxidize diverse substrates (organic acids, aromatics, fatty acids, alcohols) is tested by monitoring current production with each substrate individually. HPLC quantifies substrate consumption and metabolite production.
- **Nitrogen Fixation Assays**: Acetylene reduction assay quantifies nitrogenase activity. Ammonium production under N2-free conditions is measured by ion chromatography or Nessler method. These measurements are relevant for agricultural MES applications.
- **Confocal Microscopy of Biofilms**: CLSM with phycoerythrin autofluorescence or specific stains visualizes biofilm architecture on electrodes. Biofilm thickness and spatial organization correlate with current production rates.

## Affecting Factors

### Primary

- **Light Availability**: Photoheterotrophic growth enhances current production by supplementing metabolic energy with light. Near-infrared illumination (800-900 nm) is most effective. Dark chemoheterotrophic growth also supports significant current production.
- **Carbon Source**: The organism metabolizes an exceptionally wide range of substrates. Acetate and lactate produce the highest current densities. Aromatic compounds are uniquely metabolized by this organism among MES catalysts.
- **Electrode Potential**: Anode potential affects thermodynamic driving force. Optimal current production typically occurs at potentials above 0 mV vs SHE.
- **Nitrogen Source and Availability**: Ammonium represses nitrogenase. Under nitrogen limitation, nitrogenase activity diverts electrons to H2 production rather than the electrode. Nitrogen management balances current generation with N2 fixation.
- **Oxygen**: Anaerobic conditions are required for photo-MFC operation and optimal electrode respiration. O2 inhibits photosynthetic reaction center assembly and nitrogenase activity.
- **Strain Selection**: Strain DX-1 outperforms other *R. palustris* strains (CGA009, TIE-1) in electrochemical activity by an order of magnitude. Strain selection is critical.
- **Iron and Trace Metals**: Cytochrome biosynthesis requires iron. Molybdenum is needed for nitrogenase. Adequate trace metal supply supports maximum performance.
- **CO2 Availability**: Under photoautotrophic conditions, CO2 is the sole carbon source. In photo-MFCs, CO2 from anodic respiration can be photosynthetically fixed, creating a carbon-neutral cycle.

## Related Parameters

- **name**: Current Density

- **relationship**: Primary performance metric reflecting EET capacity
- **name**: Power Density

- **relationship**: Among the highest reported for pure culture MFCs
- **name**: Substrate Removal Rate

- **relationship**: Broad substrate range enables diverse wastewater treatment
- **name**: H2 Yield

- **relationship**: Nitrogenase-mediated H2 production under N-limited conditions
- **name**: Nitrogen Removal

- **relationship**: Combined electricity generation and nitrogen fixation

## Compatible Systems

Microorganism Database

## References

- Xing, D., et al. (2009). Electricity generation by Rhodopseudomonas palustris DX-1. *Environmental Science & Technology*, 43(11), 4148-4153.
- Larimer, F. W., et al. (2004). Complete genome sequence of the metabolically versatile photosynthetic bacterium Rhodopseudomonas palustris CGA009. *Nature Biotechnology*, 22(1), 55-61.
- Okubo, Y., et al. (2012). Alternative route for glyoxylate consumption during photoheterotrophic growth of Rhodopseudomonas palustris. *Journal of Bacteriology*, 194(11), 3025-3035.
- Bose, A., & Newman, D. K. (2011). Regulation of the phototrophic iron oxidation pathway in the purple bacterium Rhodopseudomonas palustris TIE-1. *Journal of Bacteriology*, 193(6), 1505-1513.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Rhodopseudomonas+Palustris&body=**Parameter%3A**+Rhodopseudomonas+Palustris%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Frhodopseudomonas-palustris.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Rhodopseudomonas+Palustris&body=**Parameter%3A**+Rhodopseudomonas+Palustris%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Frhodopseudomonas-palustris.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Rhodopseudomonas+Palustris&body=**Parameter%3A**+Rhodopseudomonas+Palustris%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Frhodopseudomonas-palustris.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
