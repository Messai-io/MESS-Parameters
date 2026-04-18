# Metal Recovery Purity

Metal recovery purity quantifies the elemental purity of the metallic deposit recovered at the cathode of a microbial electrochemical system (MES) configured for metal recovery, expressed as a weight percentage of the target metal relative to total deposited mass. High purity is essential for recovered metals to have economic value as raw materials or to meet specifications for direct reuse in manufacturing processes.

In MES metal recovery, purity is determined by the selectivity of the cathodic reduction process. When treating multi-metal wastewater streams (common in electroplating, mining, and electronic waste processing), different metal ions compete for reduction at the cathode surface. Metals with more positive standard reduction potentials (more noble) are preferentially deposited, enabling sequential recovery of different metals by controlling cathode potential. However, co-deposition of competing metals, incorporation of organic matter from the wastewater, and inclusion of electrolyte salts in the deposit reduce purity.

Achieving market-grade purity (>99% for copper, >99.9% for precious metals) in a single bioelectrochemical step is challenging due to the relatively uncontrolled electrochemical environment compared to conventional electrorefining. However, MES-recovered metals at 90-98% purity can serve as feedstock for conventional refining processes, reducing the energy and environmental cost of primary metal extraction. For some applications (ballast, construction aggregate, catalyst precursors), lower purity (80-95%) is acceptable.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Performance |
| **Subcategory** | Heavy Metal Removal |
| **Type** | number |
| **Unit** | % |
| **Minimum** | 0 |
| **Maximum** | 100 |
| **Papers Reporting** | 16 |

## Typical Values

- **Valid Range**: 0% to 100%
- **Typical Range**: 70% to 99%
- **Cu recovery from Cu-only solution (MFC)**: 95-99%
- **Cu recovery from mixed Cu/Zn/Ni stream**: 80-95%
- **Ag recovery from photographic waste**: 90-98%
- **Au recovery from electronic waste leachate**: 85-95%
- **Cr(III) precipitate from Cr(VI) reduction**: 70-90% (as Cr(OH)3)
- **Cd recovery (MFC/MEC)**: 85-95%
- **LME-grade Cu specification (comparison)**: > 99.99%
- **Typical impurities in MES deposits**: Co-deposited metals, organic carbon, sulfur, oxygen

## Measurement Methods

- **X-Ray Fluorescence (XRF) Spectroscopy**: Energy-dispersive XRF (e.g., Bruker S8 TIGER, Rigaku Primus IV) provides rapid multi-element analysis of metal deposits without dissolution. The cathode with deposit is placed directly in the spectrometer. Accuracy: +/- 0.1-1% for major components; detection limits: 1-100 ppm. Analysis time: 5-30 minutes.
- **ICP-OES/ICP-MS After Acid Dissolution**: The cathode deposit is dissolved in concentrated acid (HNO3, HCl, or aqua regia depending on metals present) and analyzed by ICP-OES or ICP-MS for comprehensive elemental composition. ICP-MS provides lower detection limits (ppt-ppb) for trace impurities. This method is the reference standard for purity determination.
- **Scanning Electron Microscopy with Energy-Dispersive X-ray Spectroscopy (SEM-EDS)**: SEM-EDS provides spatially resolved compositional analysis of the deposit surface and cross-section. This reveals whether impurities are uniformly distributed or concentrated in specific regions (e.g., grain boundaries, inclusions), informing strategies for purity improvement.

## Affecting Factors

### Primary

- **Competing metal ion concentrations**: Higher ratios of target metal to competing metals improve deposit purity. Pre-treatment (pH adjustment, complexation, selective precipitation) can remove interfering ions before bioelectrochemical recovery.
- **Cathode potential control**: Precise potential control within a narrow window (50-100 mV) enables selective deposition of the target metal while excluding others with different reduction potentials. MFC systems without potentiostat control have less selectivity.
- **Deposition rate**: Very high deposition rates (above mass-transport-limited conditions) promote dendritic growth that traps electrolyte and co-precipitates, reducing purity. Slower, more controlled deposition produces denser, purer deposits.
- **Solution pH and complexation**: Complexing agents (EDTA, citrate, ammonia) shift reduction potentials and can enhance selectivity. pH control prevents hydroxide precipitation that contaminates the deposit.
- **Organic contamination from wastewater**: Organic molecules from the anolyte that cross the membrane can adsorb on the cathode surface and become incorporated in the deposit, reducing metallic purity by 1-10%.

## References

1. Ter Heijne, A. et al. "Copper recovery combined with electricity production in a microbial fuel cell." Environmental Science & Technology, 44(11), 4376-4381 (2010).
2. Wang, H. and Ren, Z.J. "Bioelectrochemical metal recovery from wastewater: A review." Water Research, 66, 219-232 (2014).
3. Nancharaiah, Y.V. et al. "Metals removal and recovery in bioelectrochemical systems: A review." Bioresource Technology, 195, 102-114 (2015).
4. Tao, H.C. et al. "Recovery of silver from silver(I)-containing solutions in bioelectrochemical reactors." Bioresource Technology, 111, 92-97 (2012).
5. Modin, O. et al. "Bioelectrochemical recovery of Cu, Pb, Cd, and Zn from dilute solutions." Journal of Hazardous Materials, 235-236, 291-297 (2012).

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Metal+Recovery+Purity&body=**Parameter%3A**+Metal+Recovery+Purity%0A**Category%3A**+Performance%0A**File%3A**+parameters%2Fperformance%2Fmetal-recovery-purity.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Metal+Recovery+Purity&body=**Parameter%3A**+Metal+Recovery+Purity%0A**Category%3A**+Performance%0A**File%3A**+parameters%2Fperformance%2Fmetal-recovery-purity.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Metal+Recovery+Purity&body=**Parameter%3A**+Metal+Recovery+Purity%0A**Category%3A**+Performance%0A**File%3A**+parameters%2Fperformance%2Fmetal-recovery-purity.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
