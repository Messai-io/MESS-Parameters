# Synthetic Consortium

A synthetic consortium in the context of microbial electrochemical systems refers to a rationally designed, defined microbial community composed of two or more known species that are combined to achieve enhanced or novel functionality that individual species cannot accomplish alone. Unlike natural mixed cultures derived from environmental inocula, synthetic consortia have precisely controlled initial composition, enabling reproducible performance, mechanistic understanding of community interactions, and systematic optimization of MES function.

The design of synthetic consortia for MES exploits division of metabolic labor and syntrophic interactions. A classical MES consortium architecture pairs fermentative organisms (which break down complex substrates into simple organic acids and H2) with exoelectrogenic bacteria (which oxidize these intermediates and transfer electrons to the electrode). For example, a *Clostridium cellulolyticum* (cellulose fermenter) and *Geobacter sulfurreducens* (acetate-oxidizing exoelectrogen) consortium enables direct electricity generation from cellulose, which neither organism can achieve alone. More complex designs incorporate three or more species to handle substrate hydrolysis, fermentation, and electrode respiration in sequential metabolic modules.

Beyond simple metabolic complementarity, synthetic consortia can be engineered for robustness through functional redundancy, quorum sensing-mediated coordination, synthetic genetic circuits for population control, and spatial organization on electrode surfaces. Advances in synthetic biology now enable the construction of consortia with programmed behaviors: kill switches for containment, auxotrophic dependencies for population stabilization, and orthogonal communication systems for inter-species coordination. These engineered communities represent the frontier of MES biocatalyst design.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Biological |
| **Subcategory** | Engineered Strains |
| **Type** | object |

## Typical Values

- **Valid Range (current production)**: 0.1 to 10 A/m2
- **Typical Range (current production)**: 0.5 to 5.0 A/m2
- **Number of Species**: 2 to 10 (typically 2-4 for MES)
- **Coulombic Efficiency**: 20-80% (depends on consortium design)
- **Substrate Range**: Expandable by design; from simple acetate to complex cellulose
- **Startup Time**: 3-14 days (faster than undefined mixed cultures)
- **Performance Stability**: 30-120 days demonstrated in laboratory studies
- **Population Ratio Stability**: Maintained within 10-fold of initial ratio for 1-4 weeks

## Measurement Methods

- **Community Composition Monitoring**: qPCR with species-specific primers quantifies each member of the consortium over time. The ratio of species abundances reveals community dynamics, dominance shifts, and stability. Fluorescence-based methods (species-specific FISH probes, fluorescent protein reporters) enable spatial mapping within electrode biofilms.
- **Flow Cytometry with Species-Specific Markers**: Each consortium member can be distinguished by size, fluorescence (GFP, RFP, or other reporter proteins), or antibody-based staining. Flow cytometry provides rapid quantification of relative and absolute abundances, viability, and physiological state of each species.
- **Metabolite Profiling**: HPLC, GC-MS, and LC-MS analysis of culture supernatants tracks the metabolic interactions between consortium members. Appearance and disappearance of intermediate metabolites (organic acids, H2, formate, ethanol) reveals the metabolic handoffs between species.
- **Electrochemical Characterization**: Polarization curves, cyclic voltammetry, and chronoamperometry characterize the integrated electrochemical output. Comparison with pure culture performance of each member reveals synergistic or antagonistic interactions. EIS can sometimes resolve individual species' contributions to charge transfer resistance.
- **Transcriptomic Analysis of Interactions**: Dual RNA-seq or metatranscriptomics reveals gene expression changes in each consortium member during co-culture versus monoculture. Upregulation of interspecies electron transfer, cross-feeding, or competition-related genes identifies the molecular mechanisms of community function.
- **Spatially Resolved Analysis**: CLSM with species-specific fluorescent markers (FISH probes, constitutive fluorescent proteins) reveals the spatial organization of consortium members within electrode biofilms. The proximity of fermenters to exoelectrogens and their distance from the electrode surface affects metabolic coupling efficiency.

## Affecting Factors

### Primary

- **Species Selection and Metabolic Complementarity**: The most critical design decision. Species must have non-overlapping but connected metabolic capabilities. The fermenter must produce metabolites that the exoelectrogen can utilize. Metabolic models (flux balance analysis) guide species selection.
- **Inoculation Ratio**: The initial ratio of species affects community trajectory. If fermenters grow faster than exoelectrogens (common), excess initial exoelectrogen inoculation (10:1 or 100:1 exoelectrogen:fermenter ratio) may be needed to prevent fermenter dominance.
- **Substrate Type**: The substrate determines which metabolic modules are needed. Simple substrates (acetate) may only require a single exoelectrogen. Complex substrates (cellulose, starch, lignocellulose) require hydrolytic and fermentative partners.
- **Growth Rate Mismatch**: Differences in growth rate between consortium members create population dynamics challenges. Faster-growing organisms can overwhelm slower-growing partners. Dilution rate in continuous systems, nutrient limitation strategies, or genetic engineering of growth rates can stabilize the community.
- **Spatial Organization**: Controlling where each species resides in the biofilm optimizes metabolic coupling. Exoelectrogens should be near the electrode; fermenters can be in the outer biofilm layers where substrate access is better. Bioprinting, sequential inoculation, and surface modification strategies achieve spatial control.
- **Cross-Feeding Efficiency**: The rate at which metabolic intermediates transfer between species depends on diffusion distances, concentrations, and uptake kinetics. Tight spatial association minimizes diffusion losses.
- **Competitive Exclusion**: One species may outcompete others for shared resources (space, nutrients, substrates). Niche differentiation or engineered auxotrophies prevent competitive exclusion.
- **Environmental Perturbation**: Defined consortia may be less resilient than diverse natural communities to unexpected perturbations (pH shifts, temperature changes, toxic exposures) due to limited functional redundancy.

## Related Parameters

- **name**: Current Density

- **relationship**: The integrated output of the consortium's electrode respiration activity
- **name**: Microbial Diversity Index

- **relationship**: Low by design (2-10 species) but functionally optimized
- **name**: Substrate

- **relationship**: Determines the required consortium metabolic architecture
- **name**: Coulombic Efficiency

- **relationship**: Depends on metabolic coupling efficiency between community members
- **name**: Inoculum Source

- **relationship**: Synthetic consortia replace undefined inocula with rationally designed communities
- **name**: Cell Doubling Time

- **relationship**: Growth rate matching between species is critical for stability

## Compatible Systems

Microorganism Database

## References

- Minty, J. J., et al. (2013). Design and characterization of synthetic fungal-bacterial consortia for direct production of isobutanol from cellulosic biomass. *PNAS*, 110(36), 14592-14597.
- Ren, Z., et al. (2007). Electricity production from cellulose in a microbial fuel cell using a defined binary culture. *Environmental Science & Technology*, 41(13), 4781-4786.
- Lovley, D. R. (2012). Electromicrobiology. *Annual Review of Microbiology*, 66, 391-409.
- Song, H., et al. (2014). Synthetic microbial consortia: from systematic analysis to construction and applications. *Chemical Society Reviews*, 43(20), 6954-6981.
- Kouzuma, A., et al. (2015). Microbial interspecies interactions: recent findings in syntrophic consortia. *Frontiers in Microbiology*, 6, 477.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Synthetic+Consortium&body=**Parameter%3A**+Synthetic+Consortium%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fsynthetic-consortium.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Synthetic+Consortium&body=**Parameter%3A**+Synthetic+Consortium%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fsynthetic-consortium.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Synthetic+Consortium&body=**Parameter%3A**+Synthetic+Consortium%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fsynthetic-consortium.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
