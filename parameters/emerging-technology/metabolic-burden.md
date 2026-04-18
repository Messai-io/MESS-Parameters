# Metabolic Burden

Metabolic burden quantifies the growth rate penalty imposed on a microorganism by the expression of engineered genes or pathways, expressed as the percentage reduction in specific growth rate compared to the unmodified parent strain. In synthetic biology approaches to MES, engineering bacteria to overexpress electron transfer proteins, conductive nanowires, or valuable chemical products diverts cellular resources (ribosomes, amino acids, ATP, NADH) away from growth and maintenance. High metabolic burden creates strong selective pressure for loss-of-function mutations, threatening long-term performance stability.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Emerging Technology |
| **Subcategory** | Genetic Engineering |
| **Type** | number |
| **Unit** | % |
| **Minimum** | 0 |
| **Maximum** | 50 |

## Typical Values

- **text**: | Engineering Modification | Burden (%) | Context |
|------------------------|-----------|---------|
| Low-copy reporter gene | 1 - 5 | Minimal impact |
| Medium-copy metabolic enzyme | 5 - 15 | Moderate burden |
| High-copy cytochrome overexpression | 15 - 30 | Significant resource diversion |
| Multi-gene pathway (3-5 genes) | 20 - 40 | Cumulative burden |
| Membrane protein overexpression | 25 - 50 | Membrane stress adds to burden |

## Measurement Methods

- **1. **Growth rate comparison**: Measure OD600 over time for engineered and parent strains. Burden = (mu_parent - mu_engineered) / mu_parent x 100%.**: 2. **Competition assay**: Co-culture differentially marked strains and track relative abundance. 3. **Proteomics**: Measure fraction of total protein devoted to engineered gene products. 4. **Ribosome profiling**: Quantify ribosomes engaged in translating engineered vs. native proteins.

## Affecting Factors

- **text**: - **Copy number**: Higher copy number increases expression and burden proportionally.
- **Promoter strength**: Stronger promoters drive more expression and more burden.
- **Protein characteristics**: Membrane proteins and cofactor-requiring proteins impose greater burden.
- **Growth conditions**: Nutrient limitation exacerbates burden effects.
- **Genetic circuit design**: Inducible or feedback-controlled expression minimizes burden when not needed.

## Compatible Systems

Synthetic Biology Integration

## References

1. Glick, B.R. (1995). Metabolic load and heterologous gene expression. *Biotechnology Advances*, 13(2), 247-261.
2. Ceroni, F., Algar, R., Stan, G.B., & Ellis, T. (2015). Quantifying cellular capacity identifies gene expression designs with reduced burden. *Nature Methods*, 12(5), 415-418.
3. Wu, G., Yan, Q., Jones, J.A., et al. (2016). Metabolic burden: cornerstones in synthetic biology. *Trends in Biotechnology*, 34(8), 652-664.
4. TerAvest, M.A., & Ajo-Franklin, C.M. (2016). Transforming exoelectrogens for biotechnology. *Biotechnology and Bioengineering*, 113(4), 687-697.
5. Silva, F., Queiroz, J.A., & Domingues, F.C. (2012). Evaluating metabolic stress and plasmid stability. *Biotechnology Advances*, 30(3), 691-708.

---

*Parameter documentation for the MESS (Microbial Electrochemical Systems Standardization) framework.*

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Metabolic+Burden&body=**Parameter%3A**+Metabolic+Burden%0A**Category%3A**+Emerging+Technology%0A**File%3A**+parameters%2Femerging-technology%2Fmetabolic-burden.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Metabolic+Burden&body=**Parameter%3A**+Metabolic+Burden%0A**Category%3A**+Emerging+Technology%0A**File%3A**+parameters%2Femerging-technology%2Fmetabolic-burden.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Metabolic+Burden&body=**Parameter%3A**+Metabolic+Burden%0A**Category%3A**+Emerging+Technology%0A**File%3A**+parameters%2Femerging-technology%2Fmetabolic-burden.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
