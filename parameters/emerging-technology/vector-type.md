# Vector Type

Vector Type identifies the biological vector or genetic delivery system used in genetically engineered microbial electrochemical systems (MES) to introduce, maintain, or express recombinant genetic material in electroactive microorganisms. Common vector types include plasmid vectors (high-copy pUC series, medium-copy pBR322, low-copy pSC101), broad-host-range plasmids (IncP, IncQ, RSF1010), chromosomal integration vectors (transposon-based, lambda Red recombineering, CRISPR-Cas delivery), bacteriophage vectors, and shuttle vectors for inter-species transfer. In the safety and regulatory framework, vector type is a primary biosafety parameter because it determines the stability of the genetic modification, the probability of horizontal gene transfer (HGT) to environmental organisms, the antibiotic resistance markers present, and the containment level required for the MES facility.

The safety implications of vector type in MES are governed by biosafety principles. Plasmid vectors with mobilization (mob) and transfer (tra) functions can facilitate conjugal transfer of engineered genes (including antibiotic resistance markers) to wild-type organisms in the environment if containment is breached -- a recognized biosafety hazard. Self-replicating vectors with broad host range (e.g., RSF1010 derivatives) pose higher HGT risk than narrow-host-range or chromosomally integrated constructs. The presence of antibiotic resistance selection markers (ampicillin, kanamycin, chloramphenicol resistance) on vectors introduces environmental antimicrobial resistance dissemination risk, which is recognized by the WHO as one of the top ten global public health threats.

Regulatory oversight of vector type is extensive: the NIH Guidelines for Research Involving Recombinant or Synthetic Nucleic Acid Molecules require Institutional Biosafety Committee (IBC) review of vector characteristics; EPA TSCA Section 5 (Microbial Commercial Activity Notice, MCAN) requires notification for commercial use of engineered microorganisms; EU Directive 2009/41/EC governs contained use of genetically modified microorganisms (GMMs); and the Cartagena Protocol on Biosafety applies to transboundary movement of living modified organisms.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Emerging Technology |
| **Subcategory** | Genetic Engineering |
| **Type** | select |

## Typical Values

- **Valid Range**: Plasmid size 2-300 kb; copy number 1-700 per cell; host range: narrow (single species) to broad (multiple phyla)
- **Typical Range**: Plasmid vectors 3-15 kb, copy number 5-50 for MES applications

## Measurement Methods

- **Vector Characterization for Biosafety Assessment**: 1. Confirm vector identity by restriction enzyme digest and gel electrophoresis; verify expected banding pattern 2. Sequence entire vector (Sanger or next-generation sequencing) to confirm no unintended modifications 3. Determine copy number by quantitative PCR (qPCR): ratio of vector gene copies to chromosomal reference gene 4. Assess mobilization potential: PCR screen for mob (mobilization) and tra (transfer) gene sequences 5. Test conjugal transfer frequency: mate engineered strain with recipient (e.g., E. coli DH5alpha with counter-selectable marker) and quantify transconjugants per donor cell (target: <10^-8 for low-risk classification) 6. Document all vector elements (origin, resistance markers, promoters, terminators) in IBC protocol submission
- **Horizontal Gene Transfer Risk Assessment**: 1. Identify all selectable markers on the vector and assess their clinical relevance (WHO Priority Pathogen List) 2. Evaluate vector stability: passage engineered strain for 100+ generations without selection; quantify vector loss rate 3. Test for vector mobilization in the presence of known conjugative plasmids from environmental bacteria 4. Perform environmental microcosm studies: mix engineered strain with natural MES microbial community; monitor gene transfer by selective plating and PCR 5. Calculate risk quotient: (transfer frequency) x (marker fitness advantage) x (environmental exposure)
- **Containment Verification**: 1. Validate biological containment features (auxotrophies, kill switches, conditional origins) under MES operating conditions 2. Test kill switch efficacy: >99.99% cell death within specified time upon trigger activation 3. Monitor for revertants by plating on non-permissive conditions at regular intervals 4. Verify genetic stability of containment features by whole-genome sequencing of cultures maintained for >200 generations

## Affecting Factors

### Primary

- **Host Range**: Broad-host-range vectors (IncP, RSF1010) pose higher HGT risk than narrow-host-range vectors (ColE1, pSC101)
- **Mobilization Functions**: Presence of mob/tra sequences enables conjugal transfer; deletion of these sequences reduces but does not eliminate HGT risk (transformation and transduction remain possible)
- **Antibiotic Resistance Markers**: Clinically relevant resistance markers (carbapenem, colistin, vancomycin resistance) carry higher regulatory scrutiny than non-clinical markers (kanR, tetR)
- **Copy Number**: High-copy vectors produce more recombinant DNA per cell, increasing the amount of genetic material available for HGT
- **Genetic Stability**: Unstable vectors may rearrange, delete containment features, or generate deletion variants that escape biological containment
- **Growth Conditions**: Stress conditions in MES (low pH, nutrient limitation, high current) can increase mutation rates and HGT frequency
- **Biofilm Environment**: Biofilm conditions in MES anodes facilitate DNA exchange through transformation and close cell-cell contact for conjugation
- **Phage Presence**: Environmental phages in wastewater-fed MES can mediate transduction of vector sequences
- **Environmental Persistence**: Vector DNA persists in environmental matrices (soil, water, sediment) and can transform competent organisms even after cell death

## Related Parameters

- **name**: Sterilization Method

- **relationship**: Validated sterilization is required for waste containing vector-bearing organisms; method must inactivate both cells and free DNA
- **name**: Biosafety Level

- **relationship**: Vector type is a primary determinant of required biosafety level (BSL-1 vs. BSL-2)
- **name**: Stability

- **relationship**: Genetic stability of the vector construct determines the need for ongoing monitoring and recharacterization
- **name**: Risk Score

- **relationship**: Vector type HGT risk contributes to the overall risk score for the MES facility
- **name**: Cofactor Regeneration

- **relationship**: Engineered cofactor regeneration pathways are typically delivered via vectors, linking these parameters

## Compatible Systems

Synthetic Biology Integration

## References

- NIH. (2019). NIH Guidelines for Research Involving Recombinant or Synthetic Nucleic Acid Molecules.
- EPA. (2017). Microbial Products of Biotechnology; Final Rule. 40 CFR Parts 700, 720, 721, 723, 725.
- Directive 2009/41/EC. Contained use of genetically modified micro-organisms.
- WHO. (2015). Global Action Plan on Antimicrobial Resistance.
- Lovley, D. R. (2012). Electromicrobiology. Annual Review of Microbiology, 66, 391-409.
- Nevin, K. P., et al. (2009). Anode biofilm transcriptomics reveals outer surface components essential for high density current production in Geobacter sulfurreducens fuel cells. PLoS ONE, 4(5), e5628.
- Thomas, C. M., & Nielsen, K. M. (2005). Mechanisms of, and barriers to, horizontal gene transfer between bacteria. Nature Reviews Microbiology, 3(9), 711-721.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Vector+Type&body=**Parameter%3A**+Vector+Type%0A**Category%3A**+Emerging+Technology%0A**File%3A**+parameters%2Femerging-technology%2Fvector-type.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Vector+Type&body=**Parameter%3A**+Vector+Type%0A**Category%3A**+Emerging+Technology%0A**File%3A**+parameters%2Femerging-technology%2Fvector-type.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Vector+Type&body=**Parameter%3A**+Vector+Type%0A**Category%3A**+Emerging+Technology%0A**File%3A**+parameters%2Femerging-technology%2Fvector-type.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
