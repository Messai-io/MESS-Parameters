# Antibiotic Resistance Risk

Antibiotic resistance risk quantifies the potential for microbial
electrochemical systems (MES) to promote the development, proliferation, or
horizontal transfer of antibiotic resistance genes (ARGs) within the microbial
community. This parameter is critical for assessing the biosafety implications
of MES deployment, particularly in wastewater treatment applications where
antibiotic residues and resistant bacteria may be present. It encompasses both
the selection pressure exerted by the system and the potential for ARG
dissemination.

**Risk Assessment Scale:**

- **Level 1 (Negligible)**: <0.01% ARG increase
- **Level 2 (Low)**: 0.01-0.1% ARG increase
- **Level 3 (Moderate)**: 0.1-1% ARG increase
- **Level 4 (High)**: 1-10% ARG increase
- **Level 5 (Critical)**: >10% ARG increase

## Basic Information

| Property | Value |
|---|---|
| **Category** | Safety Regulatory |
| **Subcategory** | Biological Safety |
| **Type** | select |

## Typical Values

- **Valid Range**: Level 1-5
- **Typical Range**: Level 1-3
- **Acceptable Range**: Level 1-2
- **Concern Threshold**: Level 3
- **Intervention Required**: Level 4-5
- **Synthetic Wastewater MFC**: Level 1-2 (controlled conditions)
- **Municipal Wastewater MFC**: Level 2-3 (mixed sources)
- **Hospital Wastewater MFC**: Level 3-4 (high antibiotic load)
- **Agricultural Runoff MFC**: Level 2-4 (veterinary antibiotics)
- **Industrial Effluent MFC**: Level 1-3 (depends on source)

## Measurement Methods

- **Molecular Techniques**: 1. **qPCR Quantification**:     - Target specific ARGs (e.g., tetA, sul1, blaTEM)    - Normalize to 16S rRNA genes    - Detection limit: 10² copies/mL    - Quantitative assessment  2. **Metagenomics Analysis**:     - Comprehensive ARG profiling    - Identify novel resistance mechanisms    - Track gene mobility elements    - High-throughput sequencing required  3. **Plasmid Profiling**:    - Extract and sequence plasmids    - Identify conjugative elements    - Assess transfer potential    - Link ARGs to mobile elements
- **Phenotypic Assessment**: 1. **Culture-Based Testing**:     - Antibiotic susceptibility testing    - Minimum inhibitory concentration (MIC)    - Multi-drug resistance screening    - Viable cell focus  2. **Conjugation Frequency**:    - Mating experiments    - Transfer rate calculation    - Environmental conditions impact    - Direct transfer measurement

## Related Parameters

- **name**: HRT

- **relationship**: Longer retention may increase risk
- **name**: Temperature

- **relationship**: Higher temperature increases transfer
- **name**: Organic Loading

- **relationship**: Higher loading increases selection
- **name**: Microbial Diversity

- **relationship**: Higher diversity may dilute risk
- **name**: Integron Abundance

- **relationship**: Mobile element indicator
- **name**: Plasmid Copy Number

- **relationship**: Transfer potential
- **name**: Biofilm Thickness

- **relationship**: Transfer environment
- **name**: Stress Response Genes

- **relationship**: Co-selection markers

## Compatible Systems

Safety Parameters

## References

### Key Literature

1. **Wang, J., et al. (2021)**. "Antibiotic resistance genes in microbial fuel
   cells: A comprehensive review". _Environment International_, 157, 106839.

   - Comprehensive ARG review in MES

2. **Koch, C., et al. (2019)**. "Antibiotic resistance gene dissemination in
   bioelectrochemical systems". _Environmental Science & Technology_, 53(14),
   8371-8380.

   - Transfer mechanisms in MES

3. **Zhang, Y., et al. (2018)**. "Effect of bioelectrochemical systems on the
   fate of antibiotic resistance genes". _Water Research_, 142, 396-404.
   - ARG fate in BES treatment

### Standards and Guidelines

- **ISO/TS 21420:2021**: Detection of ARGs in water
- **CLSI Standards**: Antimicrobial susceptibility testing
- **CDC Guidelines**: Antibiotic resistance monitoring

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Antibiotic+Resistance+Risk&body=**Parameter%3A**+Antibiotic+Resistance+Risk%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Fantibiotic-resistance-risk.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Antibiotic+Resistance+Risk&body=**Parameter%3A**+Antibiotic+Resistance+Risk%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Fantibiotic-resistance-risk.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Antibiotic+Resistance+Risk&body=**Parameter%3A**+Antibiotic+Resistance+Risk%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Fantibiotic-resistance-risk.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
