# Copy Number

Copy number in microbial electrochemical systems (MES) refers to the number of copies of a particular genetic element -- typically a plasmid, gene, or engineered genetic circuit -- present per cell in genetically modified electrogenic or electrotrophic microorganisms. This parameter is critical in synthetic biology approaches to MES optimization, where genes encoding electron transfer proteins (e.g., outer-membrane cytochromes MtrC/OmcA, riboflavin biosynthesis enzymes, or heterologous conductive pili) are introduced on plasmid vectors with defined replication origins that control intracellular copy number.

Plasmid copy number directly modulates gene expression levels through gene dosage effects. For extracellular electron transfer (EET) pathway engineering, higher copy numbers of cytochrome genes (e.g., mtrCAB operon) can increase the density of electron conduits in the outer membrane, potentially enhancing current density by 2-5 fold. However, excessive copy numbers (>100 copies/cell) impose a significant metabolic burden through diversion of cellular resources (amino acids, ATP, nucleotides) toward plasmid maintenance and protein overexpression, which can reduce growth rate by 20-60% and paradoxically decrease power output due to lower biomass accumulation and cell viability.

The choice of replication origin determines the baseline copy number: low-copy origins (pSC101, p15A) yield 5-15 copies/cell; medium-copy origins (pBR322, ColE1) yield 15-60 copies/cell; high-copy origins (pUC, pMB1 mutants) yield 100-700 copies/cell. In electrogenic chassis organisms like *Shewanella oneidensis* MR-1 or *Geobacter sulfurreducens*, shuttle vectors with broad-host-range origins (e.g., pBBR1, RSF1010) are commonly used, providing 5-30 copies/cell depending on the host strain and growth conditions.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Emerging Technology |
| **Subcategory** | Genetic Engineering |
| **Type** | number |
| **Minimum** | 1 |
| **Maximum** | 1000 |

## Typical Values

- **Valid Range**: 1 - 1000 copies/cell
- **Typical Range**: 5 - 100 copies/cell (for MES-relevant plasmid systems)
- **Low-Copy Plasmids (pSC101, p15A)**: 3 - 15 copies/cell
- **Medium-Copy Plasmids (pBR322, ColE1)**: 15 - 60 copies/cell
- **High-Copy Plasmids (pUC19, pET)**: 100 - 700 copies/cell
- **Broad-Host-Range (pBBR1, RSF1010)**: 5 - 30 copies/cell
- **Chromosomal Integration**: 1 copy/cell (per integration site)
- **Optimal for EET Enhancement**: 10 - 50 copies/cell (balancing expression and burden)

## Measurement Methods

- **Quantitative PCR (qPCR)**: Total DNA is extracted from a known number of cells. qPCR amplifies a plasmid-specific target gene and a single-copy chromosomal reference gene in parallel. Copy number = 2^(Ct_chromosome - Ct_plasmid) x correction factor for amplification efficiency. Equipment: real-time PCR thermal cycler (Bio-Rad CFX96, Applied Biosystems QuantStudio); precision +/- 15-20% (biological variability); requires validated primer sets with 90-110% efficiency.
- **Digital Droplet PCR (ddPCR)**: Partitions DNA into ~20,000 nanoliter droplets, each containing 0 or 1 template molecule. Absolute quantification without standard curves. Ratio of plasmid-positive to chromosome-positive droplets directly yields copy number. Precision: +/- 5-10%; superior to qPCR for low copy numbers (1-10 copies/cell). Equipment: Bio-Rad QX200 ddPCR system.
- **Fluorescent Reporter Calibration**: A fluorescent protein gene (GFP, mCherry) on the plasmid serves as a proxy for copy number. Flow cytometry measures single-cell fluorescence distributions. Calibration against known copy-number standards (e.g., chromosomally integrated single-copy reporter) allows estimation of per-cell copy number. This method captures cell-to-cell heterogeneity in copy number, which is invisible to bulk qPCR methods. Equipment: flow cytometer (BD Accuri C6, Beckman CytoFLEX); throughput 10^4-10^6 cells/sample.
- **Alkaline Lysis and Gel Densitometry**: Classical method: alkaline lysis followed by agarose gel electrophoresis of plasmid and chromosomal DNA. Band intensity quantification by densitometry (ImageJ) against known DNA mass standards. Semi-quantitative; precision +/- 30-50%. Largely superseded by qPCR and ddPCR but useful for quick assessment.

## Affecting Factors

### Primary

- **Replication Origin**: The primary determinant of copy number. Origins with RNAI/RNAII regulation (ColE1 family) are tunable by point mutations: the pUC origin (G to A mutation) increases copy number 3-5x relative to wild-type ColE1. Temperature-sensitive origins (pSC101-ts) allow inducible copy number switching from ~5 to >200 copies/cell at 37 vs. 42 C.
- **Growth Phase and Growth Rate**: Copy number is generally highest during exponential growth and decreases 2-4 fold in stationary phase as replication initiation slows. In MES biofilms, cells deep within the biofilm matrix are often in stationary-like states with reduced copy numbers relative to cells at the biofilm-electrolyte interface.
- **Metabolic Burden**: High-copy plasmids expressing large or toxic proteins (e.g., multi-heme cytochromes requiring complex post-translational maturation) create strong selective pressure for plasmid loss or copy-number reduction. Escape mutants with deleted or truncated inserts accumulate over 20-50 generations, reducing effective copy number of functional genes.
- **Antibiotic Selection Pressure**: Maintenance of plasmid copy number in continuous culture requires sustained antibiotic selection (ampicillin, kanamycin, chloramphenicol). In MES bioelectrochemical reactors operating for weeks to months, antibiotic degradation and emergence of resistance can lead to plasmid instability. Toxin-antitoxin addiction systems provide selection-free maintenance.
- **Host Organism**: Gram-negative electrogens (*Shewanella*, *Geobacter*, *E. coli*) and Gram-positive (*Bacillus*) hosts maintain different copy numbers from the same origin. *Shewanella oneidensis* typically maintains pBBR1-based plasmids at 5-15 copies/cell vs. 15-30 in *E. coli*. *Geobacter* species have limited genetic tools and often require chromosomal integration.
- **Plasmid Size**: Larger plasmids (>10 kb) generally have lower copy numbers due to increased replication time and segregation challenges. Each additional kb reduces copy number by approximately 1-5% for ColE1-family plasmids. The mtrCAB operon (~5.5 kb) on a pUC vector reduces effective copy from ~500 to ~200-300 copies/cell.

## Compatible Systems

Synthetic Biology Integration

## References

- Jensen, H.M., et al. (2010). "Engineering of a synthetic electron conduit in living cells." *Proceedings of the National Academy of Sciences*, 107(45), 19213-19218. DOI: 10.1073/pnas.1009645107
- TerAvest, M.A., & Ajo-Franklin, C.M. (2016). "Transforming exoelectrogens for biotechnology using synthetic biology." *Biotechnology and Bioengineering*, 113(4), 687-697. DOI: 10.1002/bit.25723
- Jahn, M., et al. (2016). "Copy number variability of expression plasmids determined by cell sorting and Droplet Digital PCR." *Microbial Cell Factories*, 15, 211. DOI: 10.1186/s12934-016-0610-8
- Lin-Chao, S., et al. (1992). "High copy number of the pUC plasmids results from a Rom/Rop-suppressible point mutation in RNA II." *Molecular Microbiology*, 6(22), 3385-3393. DOI: 10.1111/j.1365-2958.1992.tb02206.x

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Copy+Number&body=**Parameter%3A**+Copy+Number%0A**Category%3A**+Emerging+Technology%0A**File%3A**+parameters%2Femerging-technology%2Fcopy-number.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Copy+Number&body=**Parameter%3A**+Copy+Number%0A**Category%3A**+Emerging+Technology%0A**File%3A**+parameters%2Femerging-technology%2Fcopy-number.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Copy+Number&body=**Parameter%3A**+Copy+Number%0A**Category%3A**+Emerging+Technology%0A**File%3A**+parameters%2Femerging-technology%2Fcopy-number.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
