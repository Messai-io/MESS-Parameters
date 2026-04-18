# Sodium Ion Concentration

Sodium concentration refers to the dissolved sodium ion (Na⁺) content in the
electrolyte solutions of microbial electrochemical systems. Sodium is the most
abundant cation in many natural waters and wastewaters and is the primary cation
in saline and brackish waters targeted for microbial desalination. With an
equivalent ionic conductance of 50.1 S·cm²/mol at infinite dilution, Na⁺ is a
major determinant of solution conductivity and therefore directly influences the
ohmic resistance component of MES internal resistance.

Sodium is not metabolically essential at the concentrations typically found in
MES electrolytes but is required in trace amounts (0.1-1 mM) for certain
membrane transport processes in bacteria, particularly Na⁺/H⁺ antiporters and
Na⁺-driven flagellar motors. At moderate concentrations (10-100 mM), Na⁺
provides beneficial ionic conductivity. At elevated concentrations (>200 mM for
freshwater microbes, >600 mM for halotolerant species), sodium exerts osmotic
stress that inhibits microbial growth and current generation by disrupting
cellular water balance, denaturing proteins, and inhibiting enzyme function.

In microbial desalination cells, Na⁺ is the principal cation removed from
saline feed water, migrating through cation exchange membranes (CEMs) toward
the cathode chamber driven by the electric field generated from anodic
substrate oxidation. The Na⁺ transport number through Nafion-type CEMs exceeds
0.95 at typical MES current densities, reflecting the high mobility and
abundance of Na⁺ in saline solutions. Sodium is also commonly introduced as
counter-ion in substrate salts (sodium acetate, NaHCO₃ buffer) and pH
adjustment reagents (NaOH).

## Basic Information

| Property | Value |
|---|---|
| **Category** | Materials |
| **Type** | number |
| **Unit** | mM |
| **Papers Reporting** | 4 |

## Typical Values

- **Valid Range**: 0.1-1,000 mM (2.3 mg/L to 23 g/L)
- **Typical Range in MES**: 5-200 mM (0.12-4.6 g/L)
- **Optimal for freshwater MES**: 10-100 mM (0.23-2.3 g/L)
- **Domestic wastewater**: 3-20 mM (70-460 mg/L)
- **Brackish water**: 50-300 mM (1.2-6.9 g/L)
- **Seawater**: ~470 mM (10.8 g/L)
- **MDC feed (typical)**: 85-600 mM (2-14 g/L as NaCl)
- **Inhibitory for freshwater biofilms**: >200-300 mM
- **20 mM sodium acetate feed**: Contributes 20 mM Na⁺
- **NaHCO₃ buffer (30 mM)**: Contributes 30 mM Na⁺

## Measurement Methods

- **Inductively Coupled Plasma Optical Emission Spectrometry (ICP-OES)**: Analyze at Na emission lines 589.592 nm (primary) or 330.237 nm (for high concentrations). Acidify samples to 2% HNO₃. Detection limit: 0.01 mg/L. Linear range: 0.05-1,000 mg/L. Ionization suppression with 1,000 mg/L cesium or potassium required for accurate quantification. ICP-OES is the reference multi-element method but may suffer from spectral interference at 589 nm from self-absorption at high Na concentrations.
- **Flame Atomic Emission Spectrometry (FAES)**: Standard Methods 3500-Na B. Air-acetylene flame with emission measurement at 589.0 nm. Calibrate with 0.1-10 mg/L Na standards containing ionization suppressant (1,000 mg/L K as KCl). Detection limit: 0.002 mg/L. Precision: ±2-5%. The sodium D-line emission is extremely sensitive but subject to self-reversal at high concentrations (>50 mg/L), requiring dilution. Widely available and inexpensive.
- **Ion Chromatography (IC)**: Cation IC on IonPac CS12A or CS16 column with methanesulfonic acid eluent (20 mM, isocratic). Na⁺ elutes at approximately 4-6 minutes, before NH₄⁺ and K⁺. Suppressed conductivity detection. Detection limit: 0.005 mg/L. Simultaneous quantification of Li⁺, Na⁺, NH₄⁺, K⁺, Mg²⁺, Ca²⁺ in a single 20-minute run. Linear range: 0.02-500 mg/L.
- **Sodium Ion-Selective Electrode (ISE)**: Glass membrane sodium ISE with Ag/AgCl reference. Nernstian slope: 54-59 mV/decade at 25 degrees C. Detection limit: 0.02 mg/L. Selectivity over K⁺: approximately 300:1 (log K_Na,K = -2.5). Response time: 15-60 seconds. Interference from H⁺ at pH <5 and Ag⁺. Add Tris buffer (pH 8) as ISA to eliminate H⁺ interference. Useful for continuous online monitoring in MDC effluent streams.

## Affecting Factors

### Primary

- **Feed Water Salinity**: The dominant factor controlling Na⁺ levels. Fresh    water MES systems operate at 3-20 mM Na⁺ from wastewater minerals. MDCs    treating brackish or seawater contain 50-600 mM Na⁺. System design,    microbial community selection, and membrane choice must accommodate the    expected salinity range.
- **Substrate Salt Identity**: Sodium acetate (CH₃COONa, MW 82.03) is the most    common defined substrate, contributing equimolar Na⁺. A 20 mM sodium acetate    feed adds 20 mM Na⁺. Alternative potassium acetate or free acid with separate    pH adjustment can be used when Na⁺ minimization is desired.
- **Microbial Salt Tolerance**: Geobacter sulfurreducens, the model    exoelectrogen, tolerates up to 200-300 mM NaCl with gradual current density    decline above 100 mM. Halotolerant exoelectrogens (Geoalkalibacter    subterraneus, Desulfuromonas acetoxidans) maintain activity at 300-600 mM.    Extreme halophiles (Halanaerobium spp.) function at >1,000 mM but with    reduced electrochemical activity.
- **Membrane Transport**: In dual-chamber systems, Na⁺ is preferentially    transported through CEMs from anode to cathode, depleting anolyte Na⁺ and    concentrating it in the catholyte. This transport contributes to the pH    imbalance problem: Na⁺ replaces H⁺ at CEM exchange sites, preventing    proton transport and causing anolyte acidification / catholyte    alkalinization.
- **Ionic Conductivity**: Na⁺ is typically the largest contributor to solution    conductivity in wastewater and saline MES. Increasing Na⁺ from 10 to 100 mM    (as NaCl) raises conductivity from approximately 1.3 to 12.5 mS/cm, reducing    ohmic losses proportionally.
- **Temperature**: Na⁺ ionic mobility increases approximately 2%/degree C.    Solution conductivity at 35 degrees C is approximately 20% higher than at    25 degrees C for the same Na⁺ concentration.
- **Competing Cations**: K⁺, Ca²⁺, Mg²⁺, and NH₄⁺ compete with Na⁺ for CEM    transport. Divalent cations have lower mobility but higher membrane affinity,    potentially displacing Na⁺ from exchange sites over long operation periods.
- **Osmotic Pressure**: Total dissolved solids (primarily NaCl) generate osmotic    pressure of approximately 0.7 atm per 10 mM NaCl. Rapid salinity changes    (>50 mM step increase) can osmotically shock biofilms, causing detachment    and temporary current loss.

## Related Parameters

- **name**: Chloride Concentration

- **relationship**: Primary counter-ion; NaCl is the dominant salt in
- **name**: Potassium Concentration

- **relationship**: Alternative monovalent cation; K⁺/Na⁺ ratio
- **name**: Conductivity (Solution)

- **relationship**: Na⁺ is typically the dominant cation contributor
- **name**: Internal Resistance

- **relationship**: Ohmic component decreases linearly with increasing
- **name**: Desalination Rate

- **relationship**: Na⁺ removal rate is the primary performance metric
- **name**: Current Density

- **relationship**: Limited by microbial salt tolerance at high Na⁺;
- **name**: Membrane Type

- **relationship**: CEM selectivity and Na⁺ transport number determine

## Compatible Systems

Ion Concentrations

## References

1. Lefebvre, O., Tan, Z., Kharkwal, S., and Ng, H.Y. (2012). "Effect of
   increasing anodic NaCl concentration on microbial fuel cell performance."
   Bioresource Technology, 112, 336-340.

2. Miyahara, M., Kouzuma, A., and Watanabe, K. (2015). "Effects of NaCl
   concentration on anode microbes in microbial fuel cells." AMB Express, 5(1),
   34.

3. Cao, X., Huang, X., Liang, P., Xiao, K., Zhou, Y., Zhang, X., and Logan,
   B.E. (2009). "A new method for water desalination using microbial
   desalination cells." Environmental Science & Technology, 43(18), 7148-7152.

4. Grattieri, M., Suvira, M., Hasan, K., and Minteer, S.D. (2017).
   "Halotolerant extremophile bacteria from the Great Salt Lake for recycling
   pollutants in microbial fuel cells." Journal of Power Sources, 356, 310-318.

5. Kim, Y. and Logan, B.E. (2013). "Microbial desalination cells for energy
   production and desalination." Desalination, 308, 122-130.

6. APHA, AWWA, WEF (2017). "Standard Methods for the Examination of Water and
   Wastewater." 23rd Edition. American Public Health Association, Washington DC.

---

_This parameter documentation covers sodium concentration measurement, osmotic
effects, and conductivity contributions in microbial electrochemical systems.
Sodium management is central to MDC desalination performance and to balancing
conductivity benefits against microbial salt stress in all MES configurations._

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Sodium+Ion+Concentration&body=**Parameter%3A**+Sodium+Ion+Concentration%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fsodium-ion-concentration.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Sodium+Ion+Concentration&body=**Parameter%3A**+Sodium+Ion+Concentration%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fsodium-ion-concentration.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Sodium+Ion+Concentration&body=**Parameter%3A**+Sodium+Ion+Concentration%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fsodium-ion-concentration.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
