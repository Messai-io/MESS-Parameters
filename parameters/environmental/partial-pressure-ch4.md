# Partial Pressure CH4

Partial pressure of methane (pCH4) quantifies the contribution of methane gas to the total pressure in the headspace and dissolved gas phase of microbial electrochemical systems (MES). Methane is a significant byproduct in MES reactors treating organic-rich substrates, produced by methanogenic archaea that compete with electroactive bacteria for available electrons from organic matter oxidation. The partial pressure of CH4 directly indicates the extent of methanogenic activity, serves as a key diagnostic for coulombic efficiency losses, and is critical for biogas quality assessment in systems designed for integrated energy recovery.

In MFCs and MECs, methane production represents a parasitic electron sink that diverts electrons away from the electrode, reducing current generation and coulombic efficiency. Under standard MFC operating conditions, methanogenic archaea (primarily Methanosaeta, Methanosarcina, and hydrogenotrophic Methanobacterium) can consume 10-60% of the available organic substrate electrons, corresponding to CH4 partial pressures of 5-40 kPa in the reactor headspace. The thermodynamic favorability of methanogenesis means that without active suppression strategies, methanogens inevitably colonize MES anodes and compete effectively with electroactive bacteria, particularly at long hydraulic retention times and mesophilic temperatures (30-37 degrees C).

Monitoring pCH4 is also essential for safety management, as methane forms explosive mixtures with air between 5-15% by volume (lower and upper explosive limits). In MES systems with air cathodes or any atmospheric exposure, CH4 accumulation in enclosed spaces requires monitoring and ventilation. Additionally, in MES designed for biohydrogen production, methane contamination of the hydrogen stream reduces fuel cell compatibility and energy value.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Environmental |
| **Subcategory** | Pressure Parameters |
| **Type** | number |
| **Unit** | kPa |
| **Minimum** | 0 |
| **Maximum** | 100 |

## Typical Values

- **Valid Range**: 0 - 101.3 kPa (0 - 1 atm, pure methane headspace)
- **Typical Range in MES headspace**: 0.1 - 40 kPa
- **Well-suppressed methanogenesis (MFC)**: less than 1 kPa (less than 1%)
- **Moderate methanogenic activity**: 5-20 kPa (5-20%)
- **Anaerobic digester comparison**: 55-70 kPa (55-70% CH4 in biogas)
- **MEC with methanogenic contamination**: 10-50 kPa
- **Lower explosive limit in air**: 5.0 kPa (5.0 vol%)
- **Dissolved CH4 at equilibrium (25 degrees C, 1 atm CH4)**: 22.7 mg/L

## Measurement Methods

- **Gas Chromatography**: Gas chromatography with thermal conductivity detection (GC-TCD) or flame ionization detection (GC-FID) is the reference method for CH4 quantification. GC-TCD provides detection limits of 100-500 ppm with linear dynamic range to 100% CH4. GC-FID offers 100x greater sensitivity (detection limit 1-5 ppm). Typical setup: packed column (Porapak Q or Hayesep D, 2m x 2mm), carrier gas He or N2, oven temperature 50-80 degrees C isothermal, injection volume 0.1-1 mL of headspace gas. Analysis time is 3-10 minutes. Calibration with certified CH4 standard gas mixtures enables quantification with accuracy of 1-3%.
- **Infrared Gas Analyzers**: Non-dispersive infrared (NDIR) analyzers provide continuous, real-time CH4 monitoring by measuring absorption at the 3.3 micrometer fundamental band. Instruments such as the LI-COR LI-7700 or Servomex 4900 measure 0-100% CH4 with resolution of 0.01% and response time below 10 seconds. Cross-sensitivity to CO2, H2O, and other gases is compensated using optical filters or dual-wavelength ratiometric detection. Maintenance requirements are minimal, making NDIR suitable for long-term unattended operation.
- **Dissolved Methane Measurement**: Dissolved CH4 concentration (proportional to pCH4 via Henry's Law, KH = 1.4 x 10^-3 mol/L/atm at 25 degrees C) is measured using membrane-inlet mass spectrometry (MIMS) or headspace equilibration followed by GC analysis. MIMS provides real-time dissolved gas analysis with detection limits below 1 micromol/L and simultaneous measurement of multiple dissolved gases.

## Affecting Factors

### Primary

- **Anode potential and current density**: Anode potentials below -300 mV versus SHE thermodynamically favor methanogenesis, while potentials above -200 mV versus SHE favor electroactive bacteria. At high current densities (more than 5 A/m^2), substrate competition kinetics favor the faster-growing electroactive bacteria. Operating MFCs at low external resistance (below 100 ohm) typically suppresses CH4 to below 5% of total electron flux versus 20-40% at high external resistance.
- **Temperature**: Mesophilic temperatures (30-37 degrees C) strongly favor methanogens, with methanogenic activity rates 3-5x higher at 35 degrees C versus 20 degrees C. Psychrophilic operation (15-20 degrees C) naturally suppresses methanogenesis, reducing CH4 partial pressure by 60-80% compared to mesophilic conditions.
- **Hydraulic retention time**: Long HRTs (more than 24 hours) provide methanogens sufficient time to establish. Reducing HRT below 12 hours preferentially washes out slow-growing methanogens (doubling time 4-12 days) while retaining faster-growing electroactive bacteria (doubling time 4-8 hours). Intermittent feeding patterns suppress methanogenesis by 30-50%.
- **Chemical inhibitors**: 2-bromoethanesulfonate (BES, 10-50 mM) specifically inhibits methyl-coenzyme M reductase, eliminating methanogenesis within 24-48 hours. Brief oxygen exposure (5-15 minutes daily) selectively damages oxygen-sensitive methanogens while electroactive bacteria survive through community-level protection.
- **Substrate type and concentration**: Simple substrates (acetate, lactate) at less than 1 g COD/L favor electroactive bacteria, while complex substrates require hydrolysis steps that inherently produce hydrogen and acetate available to methanogens. Very high substrate concentrations (more than 5 g COD/L) can inhibit methanogens through volatile fatty acid accumulation and pH depression.

## Compatible Systems

Atmospheric Ambient Conditions

## References

- Chae, K.-J., et al. (2009). Effect of different substrates on the performance, bacterial diversity, and bacterial viability in microbial fuel cells. *Bioresource Technology*, 100(14), 3518-3525.
- Call, D., & Logan, B. E. (2008). Hydrogen production in a single chamber microbial electrolysis cell lacking a membrane. *Environmental Science & Technology*, 42(9), 3401-3406.
- Parameswaran, P., et al. (2009). Syntrophic interactions among anode respiring bacteria (ARB) and non-ARB in a biofilm anode. *Environmental Science & Technology*, 43(17), 6658-6664.
- Hu, H., Fan, Y., & Liu, H. (2008). Hydrogen production using single-chamber membrane-free microbial electrolysis cells. *Water Research*, 42(15), 4172-4178.
- Siegert, M., et al. (2015). Methanobacterium dominates biocathodic archaeal communities in methanogenic microbial electrolysis cells. *ACS Sustainable Chemistry & Engineering*, 3(7), 1668-1676.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Partial+Pressure+CH4&body=**Parameter%3A**+Partial+Pressure+CH4%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fpartial-pressure-ch4.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Partial+Pressure+CH4&body=**Parameter%3A**+Partial+Pressure+CH4%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fpartial-pressure-ch4.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Partial+Pressure+CH4&body=**Parameter%3A**+Partial+Pressure+CH4%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fpartial-pressure-ch4.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
