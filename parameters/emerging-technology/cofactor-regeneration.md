# Cofactor Regeneration

Cofactor regeneration refers to the electrochemical or bioelectrochemical recycling of redox cofactors (primarily NAD+/NADH and NADP+/NADPH) at electrode surfaces within microbial electrochemical systems (MES). In microbial electrosynthesis and bioelectrocatalytic reactors, microorganisms require a continuous supply of reduced cofactors to drive reductive biosynthetic pathways -- for example, CO2 fixation to acetate, butyrate, or other value-added chemicals. The cathode can serve as an electron donor to regenerate NADH from NAD+ either directly (at sufficiently negative potentials) or via soluble or surface-bound electron mediators.

The standard reduction potential of the NAD+/NADH couple is E0' = -0.32 V vs. SHE at pH 7. Direct electrochemical reduction at unmodified electrodes suffers from high overpotentials (typically requiring potentials more negative than -0.8 V vs. SHE) and poor selectivity, producing enzymatically inactive 1,6-NADH alongside the desired 1,4-NADH isomer. Mediator-assisted regeneration using neutral red, methyl viologen, or cobalt-sepulchrate can reduce the required overpotential by 200-400 mV and improve selectivity to >95% for the bioactive isomer. Immobilized enzyme systems (e.g., formate dehydrogenase, ferredoxin-NADP+ reductase) coupled to the cathode provide the highest selectivity (>99%) but face stability and cost challenges.

In whole-cell bioelectrosynthesis, cofactor regeneration is tightly coupled to intracellular metabolism. Acetogens like *Sporomusa ovata* and *Clostridium ljungdahlii* can accept electrons from cathodes via direct electron transfer or H2-mediated pathways, effectively regenerating intracellular NADH and ferredoxin pools. The regeneration rate directly determines the maximum achievable production rate and faradaic efficiency of the electrosynthesis process.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Emerging Technology |
| **Subcategory** | Synthetic Pathways |
| **Type** | boolean |

## Typical Values

- **Valid Range**: 0.01 - 50 mmol NADH/L/h (regeneration rate)
- **Typical Range**: 0.1 - 5 mmol NADH/L/h (in bioelectrochemical systems)
- **Mediator-Assisted Turnover Frequency**: 10 - 500 h-1 per mediator molecule
- **Direct Electrochemical Selectivity (1,4-NADH)**: 10 - 50% (unmodified electrodes)
- **Mediator-Assisted Selectivity**: 85 - 99%
- **Enzyme-Coupled Selectivity**: >99%
- **Cathode Potential Required**: -0.4 to -1.0 V vs. SHE (depending on method)
- **Faradaic Efficiency for NADH Regeneration**: 30 - 95%

## Measurement Methods

- **Spectrophotometric Assay (UV-Vis)**: NADH absorbs at 340 nm (molar extinction coefficient epsilon = 6220 M-1 cm-1) while NAD+ does not. The rate of absorbance change at 340 nm directly yields the regeneration rate. Couple with enzyme-linked assays (e.g., alcohol dehydrogenase + aldehyde substrate) to confirm bioactivity of regenerated NADH. Equipment: UV-Vis spectrophotometer (Shimadzu UV-1800 or equivalent); cuvette path length 1 cm; precision +/- 0.005 absorbance units; detection limit ~5 uM NADH.
- **Enzymatic Cycling Assay**: For low-concentration measurements in complex media, enzymatic cycling amplifies the NADH signal. Alcohol dehydrogenase and diaphorase cycle NAD+/NADH with a colorimetric or fluorometric indicator (resazurin to resorufin, excitation 530 nm / emission 590 nm). Sensitivity: 10 nM NADH; suitable for intracellular cofactor quantification after cell lysis.
- **Chronoamperometry with Product Analysis**: The cathode is held at a fixed potential (e.g., -0.6 V vs. SHE) while current is recorded over time. Charge passed (Q = integral of i dt) gives total electrons transferred. Coupled with HPLC or enzymatic assay of NADH produced, the faradaic efficiency (FE) for cofactor regeneration is calculated as FE = (2 x n_NADH x F) / Q, where n_NADH is moles NADH produced, F is Faraday's constant, and the factor 2 accounts for the two-electron reduction of NAD+ to NADH.
- **HPLC Quantification**: Ion-pairing reversed-phase HPLC (C18 column, tetrabutylammonium hydrogen sulfate ion-pair reagent, phosphate buffer mobile phase) separates NAD+, NADH, 1,4-NADH, and 1,6-NADH isomers. UV detection at 260 nm (NAD+) and 340 nm (NADH). Retention time reproducibility: +/- 0.1 min; quantification limit: 1 uM.

## Affecting Factors

### Primary

- **Cathode Potential**: More negative cathode potentials increase the thermodynamic driving force for NAD+ reduction but also promote competing reactions (H2 evolution, CO2 reduction). Optimal potentials are typically -0.5 to -0.7 V vs. SHE for mediator-assisted systems and -0.8 to -1.0 V vs. SHE for direct reduction.
- **Mediator Type and Concentration**: Neutral red (E0' = -0.325 V vs. SHE), methyl viologen (E0' = -0.446 V vs. SHE), and cobalt sepulchrate (E0' = -0.35 V vs. SHE) each offer different trade-offs between overpotential reduction, selectivity, and biocompatibility. Typical mediator concentrations of 0.1-1 mM balance regeneration rate with toxicity to microorganisms.
- **Electrode Material and Surface Chemistry**: Carbon electrodes modified with Rh-complex catalysts (e.g., [Cp*Rh(bpy)Cl]+) achieve near-100% selectivity for 1,4-NADH at low overpotentials. Nitrogen-doped carbon materials enhance NAD+ adsorption and electron transfer kinetics. Metal electrodes (Cu, Ag) may promote side reactions.
- **pH and Buffer Strength**: NAD+/NADH reduction is pH-dependent (consuming H+). In weakly buffered solutions, local pH increase at the cathode surface shifts the equilibrium potential and slows regeneration. Phosphate buffer (50-100 mM, pH 7) is standard; higher buffer capacity improves rate stability.
- **Temperature**: Enzymatic cofactor regeneration rates follow Arrhenius behavior with Q10 values of 1.5-2.5. Electrochemical regeneration rates increase ~3-5% per degree C due to improved diffusion and kinetics. Operating temperatures of 25-37 C are typical for biocompatibility.
- **Dissolved O2**: Oxygen re-oxidizes NADH non-productively (kobs ~ 10^-3 s-1 in air-saturated solution). Anaerobic or micro-aerobic conditions are essential for maintaining high net regeneration rates. O2 ingress can reduce effective regeneration by 20-60%.

## Compatible Systems

Synthetic Biology Integration

## References

- Hollmann, F., et al. (2006). "Electrochemical regeneration of oxidoreductase cofactors." *Trends in Biotechnology*, 24(4), 163-171. DOI: 10.1016/j.tibtech.2006.02.003
- Schlager, S., et al. (2016). "Electrochemical reduction of CO2 to methanol by enzymatic cofactor regeneration." *ChemSusChem*, 9(6), 631-635. DOI: 10.1002/cssc.201501496
- Rabaey, K., & Rozendal, R.A. (2010). "Microbial electrosynthesis -- revisiting the electrical route for microbial production." *Nature Reviews Microbiology*, 8, 706-716. DOI: 10.1038/nrmicro2422
- Ali, I., et al. (2018). "Bioelectrochemical NADH regeneration for biocatalysis." *Bioelectrochemistry*, 120, 38-48. DOI: 10.1016/j.bioelechem.2017.11.007
- Shin, W., et al. (2003). "Electrochemical regeneration of NADH using viologen mediators." *Journal of Molecular Catalysis B: Enzymatic*, 23, 305-310. DOI: 10.1016/S1381-1177(03)00092-7

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Cofactor+Regeneration&body=**Parameter%3A**+Cofactor+Regeneration%0A**Category%3A**+Emerging+Technology%0A**File%3A**+parameters%2Femerging-technology%2Fcofactor-regeneration.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Cofactor+Regeneration&body=**Parameter%3A**+Cofactor+Regeneration%0A**Category%3A**+Emerging+Technology%0A**File%3A**+parameters%2Femerging-technology%2Fcofactor-regeneration.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Cofactor+Regeneration&body=**Parameter%3A**+Cofactor+Regeneration%0A**Category%3A**+Emerging+Technology%0A**File%3A**+parameters%2Femerging-technology%2Fcofactor-regeneration.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
