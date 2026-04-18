# Metal Deposition Rate

Metal deposition rate quantifies the mass of metal electrodeposited per unit cathode surface area per unit time in a microbial electrochemical system (MES) configured for metal recovery from contaminated wastewater or industrial process streams. Expressed in milligrams per square centimeter per hour (mg/cm^2/h), this parameter measures the productivity of the bioelectrochemical metal reduction process at the cathode, where dissolved metal ions are reduced to their elemental form and deposited on the electrode surface.

MES-based metal recovery exploits the ability of anodic biofilms to oxidize organic waste (generating electrons) while simultaneously using the electrical potential to drive cathodic metal ion reduction. This approach is particularly attractive for recovering valuable metals (Cu, Ag, Au, Co) from dilute industrial streams (electroplating rinse water, mining leachate, electronic waste leachate) because it combines waste treatment with resource recovery at lower energy cost than conventional electrowinning.

The deposition rate depends on the standard reduction potential of the target metal relative to the MFC anode potential. Metals with high reduction potentials (Au3+: +1.50 V, Cu2+: +0.34 V vs. SHE) can be deposited spontaneously using MFC-generated voltage, while metals with negative reduction potentials (Zn2+: -0.76 V, Cr3+: -0.74 V) require additional applied voltage (MEC mode). The deposition rate is kinetically controlled by mass transport of metal ions to the cathode surface, electrochemical reduction kinetics, and nucleation/growth phenomena.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Performance |
| **Subcategory** | Heavy Metal Removal |
| **Type** | number |
| **Unit** | mg/cm²/h |
| **Minimum** | 0 |
| **Maximum** | 10 |

## Typical Values

- **Valid Range**: 0 mg/cm^2/h to 10 mg/cm^2/h
- **Typical Range**: 0.01 mg/cm^2/h to 2 mg/cm^2/h
- **Cu2+ recovery (MFC, 100 mg/L)**: 0.1-1.0 mg Cu/cm^2/h
- **Cu2+ recovery (MEC, 1000 mg/L)**: 0.5-5 mg Cu/cm^2/h
- **Ag+ recovery (MFC)**: 0.05-0.5 mg Ag/cm^2/h
- **Au3+ recovery (MFC)**: 0.01-0.1 mg Au/cm^2/h
- **Cr6+ reduction (MFC)**: 0.02-0.2 mg Cr/cm^2/h (reduction, not deposition)
- **Zn2+ recovery (MEC)**: 0.1-0.5 mg Zn/cm^2/h
- **Conventional electrowinning Cu (comparison)**: 10-30 mg/cm^2/h

## Measurement Methods

- **Gravimetric Analysis**: The cathode electrode is weighed before and after the deposition experiment using an analytical balance (precision +/- 0.01-0.1 mg). Mass gain divided by cathode area and time gives the deposition rate. The deposit composition is confirmed by X-ray fluorescence (XRF) or energy-dispersive X-ray spectroscopy (EDS). This method is simple and direct but requires destructive sampling.
- **Solution Depletion Monitoring**: Metal ion concentration in the catholyte is monitored over time using inductively coupled plasma optical emission spectrometry (ICP-OES, e.g., Perkin Elmer Optima 8300) or atomic absorption spectroscopy (AAS). Deposition rate = (concentration decrease x volume) / (cathode area x time). This method is non-destructive and provides continuous rate information.
- **Electrochemical Quartz Crystal Microbalance (EQCM)**: For fundamental studies, EQCM measures mass changes at the cathode surface in real-time with nanogram sensitivity by monitoring the frequency shift of a piezoelectric quartz crystal. This method reveals instantaneous deposition rate dynamics, nucleation events, and the distinction between metal deposition and other surface processes.

## Affecting Factors

### Primary

- **Metal ion concentration**: Deposition rate is typically first-order in metal concentration at low concentrations (<100 mg/L) and approaches mass-transport-limited plateaus at higher concentrations. Doubling metal concentration approximately doubles deposition rate in the kinetically limited regime.
- **Cathode potential**: More negative cathode potentials increase the driving force for reduction. For Cu2+ (E0 = +0.34 V), cathode potentials of 0 to -0.3 V vs. SHE are sufficient. For Ni2+ (E0 = -0.26 V), potentials below -0.5 V are needed.
- **Mass transport (mixing/flow)**: Cathode boundary layer thickness determines the rate of metal ion delivery. Stirred or flow-through cathode chambers achieve 2-10x higher deposition rates than stagnant systems.
- **pH**: Acidic catholyte (pH 2-4) maintains metal ions in solution and prevents hydroxide precipitation. Alkaline conditions cause premature precipitation of metal hydroxides before electrochemical reduction.
- **Competing ions**: Mixed metal streams experience competitive deposition. More noble metals (Cu, Ag) deposit preferentially. Selective recovery of specific metals requires pH control, complexation, or sequential cathode potential management.

## References

1. Ter Heijne, A. et al. "Copper recovery combined with electricity production in a microbial fuel cell." Environmental Science & Technology, 44(11), 4376-4381 (2010).
2. Wang, H. and Ren, Z.J. "Bioelectrochemical metal recovery from wastewater: A review." Water Research, 66, 219-232 (2014).
3. Modin, O. et al. "Bioelectrochemical recovery of Cu, Pb, Cd, and Zn from dilute solutions." Journal of Hazardous Materials, 235-236, 291-297 (2012).
4. Tao, H.C. et al. "Recovery of silver from silver(I)-containing solutions in bioelectrochemical reactors." Bioresource Technology, 111, 92-97 (2012).
5. Nancharaiah, Y.V. et al. "Metals removal and recovery in bioelectrochemical systems: A review." Bioresource Technology, 195, 102-114 (2015).

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Metal+Deposition+Rate&body=**Parameter%3A**+Metal+Deposition+Rate%0A**Category%3A**+Performance%0A**File%3A**+parameters%2Fperformance%2Fmetal-deposition-rate.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Metal+Deposition+Rate&body=**Parameter%3A**+Metal+Deposition+Rate%0A**Category%3A**+Performance%0A**File%3A**+parameters%2Fperformance%2Fmetal-deposition-rate.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Metal+Deposition+Rate&body=**Parameter%3A**+Metal+Deposition+Rate%0A**Category%3A**+Performance%0A**File%3A**+parameters%2Fperformance%2Fmetal-deposition-rate.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
