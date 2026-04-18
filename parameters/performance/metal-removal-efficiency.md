# Metal Removal Efficiency

Metal removal efficiency measures the percentage of dissolved metal ions removed from the aqueous phase during treatment in a microbial electrochemical system (MES). This parameter encompasses all removal mechanisms including cathodic electrodeposition, biosorption onto electrode surfaces and biofilm, precipitation due to pH changes, and adsorption onto reactor materials. It is the primary compliance metric for MES metal remediation applications.

MES metal removal is relevant for treating diverse contaminated water sources: acid mine drainage (containing Fe, Cu, Zn, Mn at 10-1000 mg/L), electroplating rinse water (Cu, Ni, Cr, Zn at 50-5000 mg/L), electronic waste leachate (Cu, Au, Ag, Pd at 1-100 mg/L), and contaminated groundwater (As, Cr, Pb, Cd at 0.01-10 mg/L). The required removal efficiency depends on discharge limits, which are typically 0.01-1 mg/L for toxic metals (Pb, Cd, Hg, As) and 1-5 mg/L for less toxic metals (Cu, Zn, Fe).

The bioelectrochemical approach to metal removal offers several advantages over conventional treatment (chemical precipitation, ion exchange, reverse osmosis): lower chemical consumption, potential for energy recovery (when treating reducible metals with positive E0), selective metal recovery for reuse, and reduced sludge production. However, achieving >99% removal efficiency for trace-level contaminants remains challenging and often requires multi-stage or hybrid approaches.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Performance |
| **Subcategory** | Heavy Metal Removal |
| **Type** | number |
| **Unit** | % |
| **Minimum** | 0 |
| **Maximum** | 100 |
| **Papers Reporting** | 62 |

## Typical Values

- **Valid Range**: 0% to 100%
- **Typical Range**: 60% to 99%
- **Cu2+ removal (MFC, 100-500 mg/L initial)**: 85-99%
- **Cr6+ removal (MFC biocathode)**: 80-99%
- **Zn2+ removal (MEC)**: 70-95%
- **Cd2+ removal (MFC)**: 75-95%
- **Pb2+ removal (MFC)**: 85-99%
- **Ni2+ removal (MEC)**: 60-90%
- **Au3+ recovery (MFC)**: 90-99%
- **As removal (MFC-assisted precipitation)**: 70-95%
- **Multi-metal mixed stream**: 50-90% (varies by metal)

## Measurement Methods

- **ICP-OES/ICP-MS Analysis**: Influent and effluent samples are acidified (2% HNO3), filtered (0.45 micrometer), and analyzed by ICP-OES (detection limits: 1-100 ppb) or ICP-MS (detection limits: 0.01-1 ppb). Removal efficiency = (C_in - C_out) / C_in x 100%. Multi-element capability enables simultaneous monitoring of all metals of interest.
- **Atomic Absorption Spectroscopy (AAS)**: Flame AAS provides single-element analysis with detection limits of 1-100 ppb for most metals. Graphite furnace AAS extends detection to 0.01-1 ppb for trace analysis. The method is less expensive than ICP but limited to one element per analysis.
- **Electrochemical Analysis (ASV, CSV)**: Anodic stripping voltammetry (ASV) measures dissolved trace metals (Cu, Pb, Cd, Zn) at sub-ppb levels using mercury film or bismuth electrodes. This portable technique enables in-situ monitoring without sample transport. Precision: +/- 5-15%.

## Affecting Factors

### Primary

- **Initial metal concentration**: Removal efficiency is typically highest at intermediate concentrations (10-500 mg/L). Very dilute solutions (<1 mg/L) approach mass-transport limitations; very concentrated solutions (>5000 mg/L) may inhibit biofilm activity.
- **Metal speciation and pH**: Free metal ions are more easily reduced than complexed species. pH affects speciation: Cu2+ is dominant below pH 5; Cu(OH)2 precipitates above pH 6. Optimal pH for bioelectrochemical removal is typically 2-5.
- **Hydraulic retention time**: Longer HRT increases the fraction of metal removed. For 90% Cu removal from 100 mg/L, typical HRT is 12-48 hours depending on cathode area and current density.
- **Biofilm health and activity**: Active anode biofilm generating sustained current provides continuous electron supply for cathodic metal reduction. Biofilm inhibition by toxic metals (Cd, Hg, Cr6+) reduces current and metal removal rate.
- **Cathode area and configuration**: Larger cathode surface area provides more sites for metal deposition. Three-dimensional cathodes (carbon felt, granular carbon, metal foam) achieve 2-10x higher removal rates than flat plate cathodes.

## References

1. Wang, H. and Ren, Z.J. "Bioelectrochemical metal recovery from wastewater: A review." Water Research, 66, 219-232 (2014).
2. Ter Heijne, A. et al. "Copper recovery combined with electricity production in a microbial fuel cell." Environmental Science & Technology, 44(11), 4376-4381 (2010).
3. Li, Z. et al. "Cr(VI) reduction at a Geobacter sulfurreducens biocathode." Environmental Science & Technology, 42(22), 8578-8584 (2008).
4. Nancharaiah, Y.V. et al. "Metals removal and recovery in bioelectrochemical systems: A review." Bioresource Technology, 195, 102-114 (2015).
5. Modin, O. et al. "Bioelectrochemical recovery of Cu, Pb, Cd, and Zn from dilute solutions." Journal of Hazardous Materials, 235-236, 291-297 (2012).

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Metal+Removal+Efficiency&body=**Parameter%3A**+Metal+Removal+Efficiency%0A**Category%3A**+Performance%0A**File%3A**+parameters%2Fperformance%2Fmetal-removal-efficiency.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Metal+Removal+Efficiency&body=**Parameter%3A**+Metal+Removal+Efficiency%0A**Category%3A**+Performance%0A**File%3A**+parameters%2Fperformance%2Fmetal-removal-efficiency.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Metal+Removal+Efficiency&body=**Parameter%3A**+Metal+Removal+Efficiency%0A**Category%3A**+Performance%0A**File%3A**+parameters%2Fperformance%2Fmetal-removal-efficiency.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
