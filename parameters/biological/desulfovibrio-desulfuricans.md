# Desulfovibrio Desulfuricans

*Desulfovibrio desulfuricans* is a Gram-negative, obligately anaerobic, sulfate-reducing bacterium (SRB) that has significant relevance to microbial electrochemical systems due to its versatile electron transfer capabilities, hydrogen metabolism, and role in sulfur cycling within bioelectrochemical reactors. This deltaproteobacterium is one of the most extensively studied SRB species and is found ubiquitously in anaerobic environments including marine sediments, freshwater muds, wastewater treatment systems, and the human gut.

In MES, *D. desulfuricans* plays complex and sometimes contradictory roles. On one hand, it can function as an exoelectrogen, transferring electrons to anodes via cytochrome c3 and hydrogenase-mediated pathways, generating measurable current from the oxidation of lactate, pyruvate, formate, and H2. The organism possesses a rich complement of c-type cytochromes (including the tetraheme cytochrome c3) and periplasmic hydrogenases ([NiFe] and [FeFe] types) that facilitate extracellular electron transfer. On the other hand, in sulfate-containing wastewaters, *D. desulfuricans* produces hydrogen sulfide (H2S) through dissimilatory sulfate reduction, which can poison catalysts, corrode electrodes, and decrease system performance through parasitic electron consumption.

The dual nature of *D. desulfuricans* makes it a critical organism to understand and manage in MES treating sulfate-rich industrial wastewaters (mining, pulp and paper, petroleum refining). Under sulfate-limited conditions, the organism shifts to syntrophic hydrogen production or direct electrode respiration, making it a potential contributor to current generation. Conversely, under sulfate-replete conditions, it diverts electrons from electrode reduction to sulfate reduction, decreasing coulombic efficiency.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Biological |
| **Subcategory** | Bacteria - Electroactive Species |
| **Type** | object |

## Typical Values

- **Valid Range (current production)**: 0.01 to 1.5 A/m2
- **Typical Range (current production)**: 0.05 to 0.8 A/m2 in pure culture MFCs
- **H2 Consumption Rate**: 5-50 umol H2/mg protein/h
- **Sulfate Reduction Rate**: 10-100 nmol SO4 2-/mg protein/min
- **Optimal Temperature**: 25-37 degrees C (mesophilic)
- **Optimal pH**: 6.5-7.5
- **Doubling Time**: 4-12 hours (substrate-dependent)
- **Coulombic Efficiency (sulfate-limited)**: 15-50%
- **Coulombic Efficiency (sulfate-replete)**: 2-15%

## Measurement Methods

- **Electrochemical Performance Testing**: Pure culture or defined co-culture MFCs are inoculated with *D. desulfuricans* strains (e.g., ATCC 27774, Hildenborough). Chronoamperometry at fixed anode potentials measures current production over time. Cyclic voltammetry identifies redox peaks corresponding to cytochrome c3 (midpoint potential around -290 mV vs SHE) and hydrogenase activities. Electrochemical impedance spectroscopy (EIS) characterizes charge transfer resistance.
- **Sulfide and Sulfate Analysis**: Dissolved sulfide is measured by the methylene blue spectrophotometric method or ion-selective electrode (ISE). Sulfate is quantified by ion chromatography (IC) or turbidimetric barium chloride precipitation. The ratio of sulfate consumed to sulfide produced confirms dissimilatory sulfate reduction activity and helps determine electron partitioning between electrode and sulfate.
- **Hydrogenase Activity Assays**: Hydrogen uptake and evolution activities are measured using gas chromatography (GC-TCD) with hydrogen-saturated buffer systems. Spectrophotometric assays using methyl viologen as an artificial electron carrier quantify hydrogenase specific activity. These measurements reveal the organism's capacity for H2 cycling, which is relevant to MEC cathode performance.
- **Molecular and Phylogenetic Identification**: 16S rRNA gene sequencing and dsrAB gene (dissimilatory sulfite reductase) analysis confirm species identity and track population abundance. FISH with Desulfovibrio-specific probes (DSV698) enables spatial visualization within MES biofilms. Whole-genome sequencing reveals the full complement of electron transfer proteins and metabolic capabilities.
- **Protein and Cytochrome Quantification**: Cytochrome c3 and other redox proteins are quantified by UV-visible spectroscopy (Soret band at 410 nm for oxidized, 418 nm for reduced cytochromes). SDS-PAGE with heme staining identifies individual cytochrome species. These protein-level measurements inform models of EET capacity.

## Affecting Factors

### Primary

- **Sulfate Availability**: This is the master variable determining *D. desulfuricans* metabolic mode in MES. When sulfate exceeds approximately 5 mM, dissimilatory sulfate reduction is thermodynamically favored over electrode respiration, diverting electrons from current generation. Sulfate limitation shifts metabolism toward electrode respiration and syntrophic H2 production.
- **Electron Donor Type**: Lactate, pyruvate, formate, ethanol, and H2 are utilized. Lactate oxidation to acetate yields the highest current densities in pure culture MFCs. H2 serves as an electron donor for sulfate reduction or can be produced under sulfate-limited conditions via proton reduction.
- **Anode Potential**: Potentials more positive than -200 mV vs SHE generally promote electrode respiration. At more negative potentials, the thermodynamic driving force for electrode reduction decreases, potentially favoring sulfate reduction if sulfate is available.
- **H2S Concentration**: The product of sulfate reduction, H2S, is toxic to many organisms at concentrations above 200-500 mg/L. It also causes electrode fouling through metal sulfide precipitation and corrosion. Accumulation creates a negative feedback on both MES performance and *D. desulfuricans* activity.
- **Temperature**: Mesophilic *D. desulfuricans* strains perform optimally at 30-37 degrees C. Temperature affects both sulfate reduction kinetics and electrochemical activity, with different Q10 values for each pathway.
- **Metal Ion Availability**: Iron and nickel are essential cofactors for hydrogenases and cytochromes. Molybdenum is required for certain respiratory enzymes. Metal limitation impairs electron transfer capacity.
- **Community Interactions**: In mixed-culture MES, *D. desulfuricans* competes with exoelectrogens (Geobacter) for electron donors and can either enhance (through sulfur cycling) or diminish (through electron diversion) overall system performance.
- **Biofilm Architecture**: Biofilm density and thickness on electrodes affect mass transfer of substrates, sulfate, and sulfide, creating microenvironments that influence metabolic activity.

## Related Parameters

- **name**: Substrate Removal Rate

- **relationship**: Contributes to organic matter oxidation via both electrode and sulfate reduction pathways
- **name**: Current Density

- **relationship**: Directly affected by the metabolic mode (electrode vs. sulfate respiration)
- **name**: Coulombic Efficiency

- **relationship**: Sulfate reduction represents a major electron sink competing with current generation
- **name**: Microbial Diversity Index

- **relationship**: SRB abundance relative to exoelectrogens is a key community structure metric
- **name**: Inoculum Source

- **relationship**: Environmental samples rich in anaerobic sediments provide abundant SRB populations

## Compatible Systems

Microorganism Database

## References

- Kang, C. S., et al. (2014). Involvement of cytochrome c3 in the extracellular electron transfer of Desulfovibrio. *ISME Journal*, 8, 214-224.
- Cordas, C. M., et al. (2008). Direct electrochemistry of Desulfovibrio desulfuricans cytochrome c3 at a gold electrode. *Bioelectrochemistry*, 74(1), 83-89.
- Heidelberg, J. F., et al. (2004). The genome sequence of the anaerobic, sulfate-reducing bacterium Desulfovibrio vulgaris Hildenborough. *Nature Biotechnology*, 22(5), 554-559.
- Rabaey, K., et al. (2006). Microbial ecology meets electrochemistry. *ISME Journal*, 1, 9-18.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Desulfovibrio+Desulfuricans&body=**Parameter%3A**+Desulfovibrio+Desulfuricans%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fdesulfovibrio-desulfuricans.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Desulfovibrio+Desulfuricans&body=**Parameter%3A**+Desulfovibrio+Desulfuricans%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fdesulfovibrio-desulfuricans.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Desulfovibrio+Desulfuricans&body=**Parameter%3A**+Desulfovibrio+Desulfuricans%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fdesulfovibrio-desulfuricans.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
