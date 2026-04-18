# Flux Balance

Flux balance in microbial electrochemical systems (MES) refers to the application of flux balance analysis (FBA) and related constraint-based metabolic modeling approaches to predict and optimize intracellular metabolic flux distributions in electrogenic or electrotrophic microorganisms. FBA is a mathematical method that uses stoichiometric constraints from genome-scale metabolic models (GEMs), combined with an objective function (typically maximization of growth rate, ATP production, or extracellular electron transfer flux) and measured constraints (substrate uptake rates, product secretion rates, current density), to predict the steady-state flux through every reaction in the metabolic network.

For electrogenic organisms like *Geobacter sulfurreducens* (iGeo model, ~600 reactions) and *Shewanella oneidensis* MR-1 (iSO model, ~800 reactions), FBA enables prediction of the maximum theoretical current density achievable from a given substrate, identification of metabolic bottlenecks limiting electron transfer to the anode, and evaluation of genetic engineering strategies for enhanced bioelectricity production. The central flux balance equation is S x v = 0 (at steady state), where S is the stoichiometric matrix (m metabolites x n reactions) and v is the flux vector, subject to bounds: v_min <= v <= v_max for each reaction.

Extended FBA methods relevant to MES include: dynamic FBA (dFBA) for modeling batch and fed-batch kinetics; flux variability analysis (FVA) for determining the range of feasible fluxes through each reaction; minimization of metabolic adjustment (MOMA) for predicting mutant phenotypes; and parsimonious FBA (pFBA) for identifying the most efficient flux distribution. These tools are essential for rational metabolic engineering of electrogens, predicting the metabolic response to varying substrate concentrations, and understanding the competition between electron sinks (current generation, biomass growth, maintenance energy, fermentation byproducts).

## Basic Information

| Property | Value |
|---|---|
| **Category** | Emerging Technology |
| **Subcategory** | Synthetic Pathways |
| **Type** | number |
| **Unit** | % |
| **Minimum** | 50 |
| **Maximum** | 100 |

## Typical Values

- **Valid Range**: Model-dependent (dimensionless flux units or mmol/gDW/hr)
- **Typical Acetate Uptake Flux**: 2 - 20 mmol/gDW/hr
- **Maximum Theoretical Current Yield (acetate)**: 8 mol e-/mol acetate (= 26.8 mmol e-/mmol)
- **Predicted Current-to-Growth Ratio**: 5 - 50 mmol e-/mmol biomass
- **Number of Reactions (Geobacter GEM)**: 500 - 700
- **Number of Metabolites (Geobacter GEM)**: 400 - 600
- **Number of Genes (Geobacter GEM)**: 500 - 700
- **Flux Variability Range (central metabolism)**: +/- 10-50% of optimal

## Measurement Methods

- **Constraint-Based Modeling (Computational)**: FBA is solved as a linear programming (LP) problem: maximize c^T x v, subject to S x v = 0 and v_min <= v <= v_max. Software: COBRA Toolbox (MATLAB), COBRApy (Python), OptFlux (Java). Requires a curated genome-scale metabolic model and experimentally measured exchange fluxes (substrate uptake, product secretion, current density) as constraints. Solution time: <1 second for LP; minutes for MILP (gene knockout optimization).
- **13C Metabolic Flux Analysis (13C-MFA)**: Experimental validation of FBA predictions using isotopically labeled substrates. Cells are grown on 13C-labeled acetate or glucose; isotopomer distributions in intracellular metabolites (amino acids, organic acids) are measured by GC-MS or LC-MS/MS. Mass isotopomer distribution (MID) data is fitted to a metabolic network model to determine absolute intracellular fluxes. Equipment: GC-MS (Agilent 7890), LC-QTOF (Bruker impact II); precision: +/- 5-15% for central metabolic fluxes.
- **Extracellular Flux Measurements**: Substrate consumption (HPLC, ion chromatography), product secretion (GC for CO2, H2; HPLC for VFAs), O2 consumption (respirometry), and current production (potentiostat) provide the boundary conditions for FBA. These measurements constrain the exchange reactions in the metabolic model, narrowing the feasible flux space. Accuracy of FBA predictions depends directly on the quality of these measurements.
- **Transcriptomic and Proteomic Validation**: RNA-seq and quantitative proteomics (TMT-labeling LC-MS/MS) provide gene/protein expression data that can be integrated with FBA to generate context-specific metabolic models. Reactions associated with lowly expressed genes are constrained to zero flux. This integration (GIMME, iMAT, E-Flux algorithms) improves prediction accuracy for condition-specific metabolism.

## Affecting Factors

### Primary

- **Metabolic Model Quality**: Model completeness (reaction coverage), gap-filling accuracy, and correct assignment of gene-protein-reaction (GPR) associations determine FBA prediction reliability. Curated models for *Geobacter* (iGeo612, Sun et al. 2009) and *Shewanella* (iSO783, Pinchuk et al. 2010) provide reasonable predictions; community-built models may have more gaps.
- **Objective Function Selection**: Maximizing growth rate, ATP yield, or electron transfer flux can yield different flux distributions. For biofilm-grown electrogens, a weighted objective combining growth and current production often gives more realistic predictions than growth-only maximization.
- **Electron Acceptor Availability**: The branching ratio between anode respiration and alternative electron acceptors (fumarate, Fe(III), sulfate) is a key determinant of current yield. FBA can predict this branching if the relevant reactions are included and properly constrained.
- **Substrate Diversity**: FBA can evaluate current production potential from different substrates (acetate, lactate, formate, glucose, ethanol). Acetate oxidation is the most direct pathway to current in Geobacter (TCA cycle + EET); complex substrates require additional preprocessing reactions that may divert electrons.
- **Genetic Perturbations**: In silico gene knockout (single, double, or triple) using FBA identifies non-essential genes whose deletion increases current yield. OptKnock and similar algorithms systematically search for beneficial knockouts. Experimental validation requires genetic tools available for the target organism.
- **Environmental Conditions**: pH, temperature, and nutrient availability affect enzyme expression and activity, which can be incorporated through condition-specific model constraints (from transcriptomic/proteomic data) or thermodynamic constraints (on reaction directionality via thermodynamic FBA).

## Compatible Systems

Synthetic Biology Integration

## References

- Sun, J., et al. (2009). "Constraint-based modeling analysis of the metabolism of two Geobacter species." *BMC Systems Biology*, 3, 15. DOI: 10.1186/1752-0509-3-15
- Pinchuk, G.E., et al. (2010). "Genomic reconstruction of Shewanella oneidensis MR-1 metabolism reveals novel pathways." *PLoS Computational Biology*, 6(6), e1000822. DOI: 10.1371/journal.pcbi.1000822
- Orth, J.D., et al. (2010). "What is flux balance analysis?" *Nature Biotechnology*, 28(3), 245-248. DOI: 10.1038/nbt.1614
- Mahadevan, R., et al. (2006). "Characterization of metabolism in the Fe(III)-reducing organism Geobacter sulfurreducens by constraint-based modeling." *Applied and Environmental Microbiology*, 72(2), 1558-1568. DOI: 10.1128/AEM.72.2.1558-1568.2006

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Flux+Balance&body=**Parameter%3A**+Flux+Balance%0A**Category%3A**+Emerging+Technology%0A**File%3A**+parameters%2Femerging-technology%2Fflux-balance.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Flux+Balance&body=**Parameter%3A**+Flux+Balance%0A**Category%3A**+Emerging+Technology%0A**File%3A**+parameters%2Femerging-technology%2Fflux-balance.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Flux+Balance&body=**Parameter%3A**+Flux+Balance%0A**Category%3A**+Emerging+Technology%0A**File%3A**+parameters%2Femerging-technology%2Fflux-balance.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
