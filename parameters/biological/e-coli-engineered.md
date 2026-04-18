# E Coli Engineered

Engineered *Escherichia coli* refers to genetically modified strains of this model Gram-negative, facultatively anaerobic bacterium that have been specifically tailored for enhanced performance in microbial electrochemical systems. While wild-type *E. coli* has limited natural capacity for extracellular electron transfer (EET), its unparalleled genetic tractability, rapid growth, well-characterized metabolism, and extensive molecular biology toolkit make it the organism of choice for synthetic biology approaches to MES optimization.

Key engineering strategies for MES-optimized *E. coli* include: (1) heterologous expression of the Mtr electron conduit pathway from *Shewanella oneidensis* (MtrCAB complex), enabling direct EET to electrodes; (2) overexpression of endogenous or heterologous electron shuttle biosynthesis pathways (phenazines, flavins, quinones); (3) knockdown of competing metabolic pathways (fermentation, aerobic respiration) to channel electrons preferentially toward the electrode; (4) surface display of redox-active proteins (cytochromes, laccases) for direct electrode contact; and (5) metabolic engineering for expanded substrate range or high-value product co-generation.

Engineered *E. coli* in MES represents the convergence of synthetic biology and bioelectrochemistry, offering programmable cellular factories that can simultaneously generate electricity, produce chemicals, and treat wastewater. Strains have been developed for biosensor applications (coupling analyte detection to current output), electrosynthesis (cathodic CO2 fixation), and electrofermentation (redirecting NADH/NAD+ ratios). The programmability of *E. coli* enables MES functionalities that are difficult or impossible to achieve with natural exoelectrogens.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Biological |
| **Subcategory** | Engineered Strains |
| **Type** | object |

## Typical Values

- **Valid Range (current production)**: 0.01 to 5.0 A/m2
- **Typical Range (wild-type)**: 0.01 to 0.3 A/m2
- **Typical Range (MtrCAB-expressing)**: 0.5 to 3.0 A/m2
- **Typical Range (mediator-secreting)**: 0.3 to 2.0 A/m2
- **Doubling Time**: 20-60 minutes (in rich media, planktonic)
- **Optimal Temperature**: 37 degrees C
- **Optimal pH**: 6.5-7.5
- **Coulombic Efficiency (engineered)**: 20-65%
- **Maximum Power Density (engineered)**: 0.5-2.5 W/m2

## Measurement Methods

- **Electrochemical Characterization**: Engineered strains are evaluated in half-cell configurations (three-electrode) and complete MFCs. Chronoamperometry at fixed potentials quantifies steady-state current production. Cyclic voltammetry identifies redox peaks from expressed electron transfer proteins or secreted mediators. Turnover and non-turnover CV distinguish catalytic from non-catalytic electrochemistry.
- **Genetic and Expression Analysis**: Plasmid stability is verified by antibiotic resistance screening and restriction digestion. Protein expression levels are quantified by SDS-PAGE densitometry, Western blot, or fluorescent reporter fusion quantification. RT-qPCR measures transcript levels of introduced genes. These analyses ensure the engineered phenotype is maintained during MES operation.
- **Metabolite and Electron Shuttle Analysis**: Culture supernatants are analyzed by HPLC-UV/vis for secreted electron mediators (riboflavin, phenazines, DHNA). LC-MS provides identification of unknown redox-active metabolites. Quantification of secreted mediator concentrations reveals the mechanism and efficiency of mediated EET.
- **Biomass and Viability Assays**: Live/dead staining (SYTO 9/propidium iodide) with fluorescence microscopy or flow cytometry assesses viability. Colony forming unit (CFU) enumeration on selective media quantifies the engineered population. Metabolic burden from heterologous gene expression is assessed by comparing growth rates of engineered versus wild-type strains.
- **Biofilm Imaging**: Confocal laser scanning microscopy (CLSM) with GFP-tagged strains visualizes biofilm structure on electrodes. Scanning electron microscopy (SEM) reveals cell morphology and electrode-cell contact. Atomic force microscopy (AFM) can probe individual cell-electrode interactions.

## Affecting Factors

### Primary

- **Genetic Construct Design**: The choice of promoter strength, codon optimization, gene copy number (plasmid vs. chromosomal integration), and ribosome binding site strength profoundly affect expression levels of EET components. Too-high expression causes metabolic burden; too-low expression limits electrochemical activity.
- **Growth Phase and Induction Strategy**: Many engineered strains use inducible promoters (IPTG, arabinose, anhydrotetracycline). The timing, concentration, and duration of induction must be optimized.
- **Electrode Material and Modification**: Carbon-based electrodes (carbon cloth, graphite, carbon nanotubes) support better biofilm formation than metals. Surface modifications can enhance adhesion and electron transfer.
- **Substrate and Growth Medium**: Rich media support fast growth but may contain interfering redox-active compounds. Defined minimal media provide cleaner electrochemistry but slower growth.
- **Oxygen Availability**: Facultative *E. coli* preferentially uses O2 as terminal electron acceptor when available, diverting electrons from the electrode. Strict anaerobic conditions maximize current from engineered EET pathways.
- **Metabolic Burden**: Expression of heterologous proteins diverts cellular resources, potentially reducing growth and viability.
- **Plasmid Stability**: Multi-generation operation without antibiotic selection can lead to plasmid loss. Chromosomal integration improves long-term stability.
- **Competing Electron Sinks**: Fermentation products represent electron sinks competing with electrode reduction. Knockout of fermentative pathways redirects electron flow.

## Related Parameters

- **name**: Current Density

- **relationship**: The primary performance metric for engineered *E. coli* in MES
- **name**: Coulombic Efficiency

- **relationship**: Reflects the effectiveness of genetic engineering in channeling electrons to the electrode
- **name**: Substrate Removal Rate

- **relationship**: Enhanced by metabolic engineering for expanded substrate range
- **name**: Cell Doubling Time

- **relationship**: Affected by metabolic burden of heterologous gene expression
- **name**: Power Density

- **relationship**: Ultimate metric for MFC applications of engineered strains

## Compatible Systems

Microorganism Database

## References

- Jensen, H. M., et al. (2010). Engineering of a synthetic electron conduit in living cells. *PNAS*, 107(45), 19213-19218.
- TerAvest, M. A., et al. (2014). Engineered E. coli for electrofuel production. *Faraday Discussions*, 162, 369-386.
- Goldbeck, C. P., et al. (2013). Tuning promoter strengths for improved synthesis of electron conduits in E. coli. *ACS Synthetic Biology*, 2(3), 150-159.
- Zhao, J., et al. (2020). Synthetic biology approaches for improving microbial fuel cell performance. *ACS Synthetic Biology*, 9(3), 590-601.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+E+Coli+Engineered&body=**Parameter%3A**+E+Coli+Engineered%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fe-coli-engineered.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+E+Coli+Engineered&body=**Parameter%3A**+E+Coli+Engineered%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fe-coli-engineered.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+E+Coli+Engineered&body=**Parameter%3A**+E+Coli+Engineered%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fe-coli-engineered.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
