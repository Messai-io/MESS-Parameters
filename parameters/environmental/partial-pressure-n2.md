# Partial Pressure N2

Partial pressure of nitrogen (pN2) quantifies the abundance of molecular nitrogen gas in the headspace and dissolved phase of microbial electrochemical systems (MES). While N2 is generally considered an inert diluent gas in MES applications, its partial pressure is operationally significant as it indicates the extent of biological denitrification (the primary source of N2 in sealed systems), determines the dilution of product gases (H2, CH4), and influences dissolved gas composition through competitive solubility effects. Accurate pN2 accounting is essential for closing mass and electron balances in MES research and for assessing nitrogen removal efficiency in wastewater treatment applications.

In MES configured for bioelectrochemical denitrification, N2 is the desired terminal product of complete nitrate reduction (NO3- -> NO2- -> NO -> N2O -> N2). The pN2 in sealed reactor headspace accumulates proportionally to the denitrification rate, providing a direct quantitative measure of nitrogen removal performance. For MES treating nitrogen-rich wastewaters (20-5000 mg-N/L), denitrification rates of 0.01-0.5 kg-N/m^3/day produce N2 at rates of 4-200 mL/L/day (at STP), progressively increasing headspace pN2 unless the system is continuously purged. The ratio of N2 to N2O in the headspace indicates the completeness of denitrification, with N2O:N2 ratios above 0.01 signaling incomplete reduction that has implications for greenhouse gas emissions (N2O has 298x the global warming potential of CO2).

In MEC hydrogen production systems, N2 is an undesirable contaminant that dilutes the H2 product stream. N2 can enter through air leaks (78% N2 in atmosphere), dissolved in feed solutions (approximately 15 mg/L at air saturation), or from denitrification of nitrate contaminants. Even 1% N2 contamination reduces the energy density of H2 by 1% and complicates downstream purification for fuel cell applications requiring more than 99.97% H2 purity.

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

- **Valid Range**: 0 - 101.3 kPa (0-100% N2)
- **Atmospheric N2**: 79.1 kPa (78.1 vol%)
- **MEC headspace (well-sealed)**: 0.5-5 kPa (from dissolved N2 release)
- **MES with active denitrification**: 5-60 kPa (depending on denitrification rate)
- **Dissolved N2 at air saturation (25 degrees C)**: 14.2 mg/L (0.51 mmol/L)
- **N2 in biogas (anaerobic digester)**: 0-5 kPa
- **N2 sparging gas purity**: typically more than 99.5% (more than 100.8 kPa)
- **Henry's constant (25 degrees C)**: 6.1 x 10^-4 mol/L/atm

## Measurement Methods

- **Gas Chromatography with TCD**: GC-TCD with He carrier gas provides N2 measurement from 0.01% to 100% using molecular sieve 5A columns. Separation from O2 requires column temperatures below 50 degrees C or dedicated molecular sieve columns optimized for N2/O2 resolution. Analysis time is 3-8 minutes. For MES applications, the N2 peak area is corrected for any Ar co-elution (Ar constitutes 0.93% of air and co-elutes with O2 on some column configurations). Detection limits of 50-200 ppm N2 are adequate for headspace monitoring but insufficient for trace contamination analysis in high-purity H2 streams.
- **Membrane-Inlet Mass Spectrometry (MIMS)**: MIMS provides simultaneous real-time measurement of dissolved N2 (m/z 28), along with O2 (m/z 32), CO2 (m/z 44), CH4 (m/z 16), H2 (m/z 2), and N2O (m/z 44/30) in aqueous samples. The technique achieves detection limits of 0.1-1 micromol/L for dissolved N2 with temporal resolution of seconds. Isotope ratio analysis using 15N-labeled substrates enables differentiation between denitrification-derived N2 (mass 29, 30 from 15NO3-) and atmospheric N2 (mass 28), providing unambiguous quantification of biological nitrogen removal rates. MIMS is the gold standard for denitrification rate measurement in MES.
- **Micro Gas Chromatography**: Portable micro-GC systems (Inficon Micro GC Fusion, Agilent 490) provide rapid N2 analysis (30-90 seconds) with detection limits of 10-50 ppm in a field-deployable format. Thermal conductivity detection with He carrier gas enables simultaneous analysis of H2, N2, O2, CH4, and CO2 in a single injection. These instruments are particularly useful for on-site MES headspace monitoring and leak detection at pilot and field scale installations.

## Affecting Factors

### Primary

- **Denitrification rate and completeness**: Biological denitrification is the primary biological source of N2 in sealed MES reactors. The denitrification rate depends on nitrate concentration, electron donor availability (organic substrates or cathode-derived electrons), temperature, and pH. At cathode potentials of -200 to -500 mV versus SHE, autotrophic denitrification proceeds at 0.01-0.2 kg-N/m^3/day. Incomplete denitrification (accumulation of N2O intermediate) occurs when copper-containing N2O reductase is inhibited by low pH (below 6.0), dissolved oxygen (above 0.5 mg/L), or high nitrite concentrations (above 50 mg-N/L).
- **Headspace purging and gas exchange**: Continuous purging with CO2, Ar, or mixed gases dilutes and removes N2 from the headspace. Purge rate relative to N2 production rate determines steady-state pN2. In MEC systems, periodic headspace flushing with CO2 or Ar reduces N2 contamination of H2 product to below 0.5%, improving H2 purity from typical 70-90% (in unpurged systems) to more than 95%.
- **Air intrusion and system sealing**: Atmospheric N2 is the dominant contaminant source in most MES. Leak rates as small as 0.01 mL/min through tubing connections, septa, or membrane defects introduce 0.008 mL-N2/min, sufficient to maintain significant pN2 in small-volume reactors. Leak testing with helium tracer gas and mass spectrometric detection identifies leak paths with sensitivity below 10^-6 mL/min. Butyl rubber septa, compression fittings with PTFE ferrules, and welded connections minimize air intrusion.
- **Dissolved N2 in feed solutions**: Feed solutions prepared and stored in contact with atmosphere contain approximately 14 mg/L dissolved N2 at 25 degrees C. When these solutions enter an anaerobic MES reactor where pN2 is low, dissolved N2 degases into the headspace. Degassing feed solutions by sparging with the appropriate gas (N2-free Ar or CO2) for 15-30 minutes reduces dissolved N2 by 90-99%, eliminating this contamination source.
- **Temperature effects**: N2 solubility decreases from 17.8 mg/L at 15 degrees C to 11.5 mg/L at 35 degrees C (at atmospheric pN2), causing dissolved N2 release upon heating. Biological denitrification rates increase 2-3x between 15 and 35 degrees C (Arrhenius temperature dependence), increasing N2 production. The net effect of temperature increase is higher pN2 in sealed systems from both physical and biological contributions.

## Compatible Systems

Atmospheric Ambient Conditions

## References

- Virdis, B., et al. (2010). Simultaneous nitrification, denitrification and carbon removal in microbial fuel cells. *Water Research*, 44(9), 2970-2980.
- Clauwaert, P., et al. (2007). Biological denitrification in microbial fuel cells. *Environmental Science & Technology*, 41(9), 3354-3360.
- Vilar-Sanz, A., et al. (2013). Denitrifying bacterial communities affect current production and nitrous oxide accumulation in a microbial fuel cell. *PLoS ONE*, 8(5), e63460.
- Desloover, J., et al. (2012). Strategies to mitigate N2O emissions from biological nitrogen removal systems. *Current Opinion in Biotechnology*, 23(3), 474-482.
- Kuntke, P., et al. (2012). Ammonium recovery and energy production from urine by a microbial fuel cell. *Water Research*, 46(8), 2627-2636.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Partial+Pressure+N2&body=**Parameter%3A**+Partial+Pressure+N2%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fpartial-pressure-n2.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Partial+Pressure+N2&body=**Parameter%3A**+Partial+Pressure+N2%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fpartial-pressure-n2.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Partial+Pressure+N2&body=**Parameter%3A**+Partial+Pressure+N2%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fpartial-pressure-n2.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
