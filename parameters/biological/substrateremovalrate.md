# substrateRemovalRate

Substrate removal rate quantifies the mass of organic substrate consumed per unit reactor volume per unit time in a microbial electrochemical system, typically expressed as kg COD/m3/day or g COD/L/day. This parameter is the primary indicator of wastewater treatment efficiency in MES and directly reflects the biocatalytic activity of the microbial community. It integrates the combined effects of microbial metabolism, mass transfer, and reactor design into a single operational metric.

In MES, substrate removal occurs through multiple parallel pathways: (1) oxidation coupled to electrode respiration (current-generating removal), (2) fermentation to intermediate products that may or may not be further oxidized, (3) methanogenic conversion to CH4 (a competing pathway that does not generate current), (4) aerobic respiration if oxygen leaks into the system, and (5) biomass synthesis (assimilation). The coulombic efficiency indicates what fraction of total removal is captured as electrical current. Maximizing the substrate removal rate while maintaining high coulombic efficiency is the central engineering challenge for MES wastewater treatment.

The substrate removal rate is also expressed as a percentage removal efficiency (%) when calculated as [(CODin - CODout)/CODin] * 100. For wastewater treatment applications, achieving >80% COD removal is typically required to meet discharge standards. High-performance MFCs treating domestic wastewater achieve removal rates of 1-10 kg COD/m3/day, which is comparable to conventional activated sludge systems (0.5-3 kg COD/m3/day) and anaerobic digesters (5-20 kg COD/m3/day).

## Basic Information

| Property | Value |
|---|---|
| **Category** | Biological |
| **Type** | number |
| **Unit** | % |

## Typical Values

- **Valid Range**: 0.01 to 50 kg COD/m3/day
- **Typical Range (laboratory MFC)**: 0.5 to 10 kg COD/m3/day
- **Domestic Wastewater MFC**: 0.5 to 5 kg COD/m3/day
- **Industrial Wastewater MFC**: 1 to 15 kg COD/m3/day
- **Percentage Removal (acetate MFC)**: 85-99%
- **Percentage Removal (domestic wastewater MFC)**: 60-90%
- **Percentage Removal (industrial wastewater MFC)**: 50-95%
- **Conventional Activated Sludge (comparison)**: 0.5-3 kg COD/m3/day

## Measurement Methods

- **COD-Based Removal Rate**: Influent and effluent COD concentrations are measured using the dichromate closed reflux method (APHA 5220D) or commercial spectrophotometric kits (e.g., Hach COD vials). The volumetric removal rate is calculated as: r = Q*(CODin - CODout)/V, where Q is flow rate, V is reactor volume. For batch systems: r = (COD0 - CODt)/(t * V_reactor). Removal efficiency = [(CODin - CODout)/CODin] * 100%.
- **BOD-Based Removal Rate**: Five-day BOD (BOD5) measures biodegradable organic removal specifically. The ratio of BOD removal to COD removal indicates whether the MES preferentially removes biodegradable versus recalcitrant fractions.
- **Substrate-Specific Removal**: For defined substrates (acetate, glucose, lactate), direct analytical measurement by HPLC, ion chromatography, or enzymatic assays provides substrate-specific removal rates without the ambiguity of COD measurement. First-order or Monod kinetic models are fitted to time-course data.
- **Coulombic Analysis of Removal**: The charge transferred (integral of current over time) divided by Faraday's constant gives the moles of electrons captured as current. Comparing this to the total electron equivalents removed (from COD difference) gives coulombic efficiency. The difference represents electrons diverted to non-current pathways (biomass, methane, sulfide, etc.).
- **Online Monitoring**: Continuous COD sensors (UV absorbance at 254 nm as COD proxy), TOC analyzers, or substrate-specific biosensors provide real-time removal rate tracking without the delays of manual sampling.

## Affecting Factors

### Primary

- **Influent Substrate Concentration**: Removal rate increases with influent concentration up to a plateau determined by biological and mass transfer limitations. Very high concentrations (>10,000 mg COD/L) may inhibit microbial activity.
- **Hydraulic Retention Time (HRT)**: HRT determines substrate contact time with the biofilm. Shorter HRTs increase volumetric removal rates but decrease percentage removal. Optimal HRT balances throughput with treatment efficiency (typically 2-24 hours for MFC wastewater treatment).
- **Temperature**: Biological reaction rates approximately double per 10 degrees C increase. MES treating cold wastewaters (10-15 degrees C) show 50-70% lower removal rates than at 30-35 degrees C.
- **Electrode Surface Area and Configuration**: Higher electrode surface area per unit reactor volume increases biofilm area and current density, enhancing substrate removal. Three-dimensional electrodes (granular, brush, foam) provide higher specific surface areas than flat electrodes.
- **Microbial Community Activity**: The abundance, viability, and metabolic activity of the anodic biofilm directly determine substrate oxidation rates. Mature, well-established biofilms outperform newly inoculated systems.
- **Mass Transfer Limitations**: In poorly mixed or stagnant systems, substrate diffusion to the biofilm surface becomes rate-limiting. Adequate recirculation or convective flow maintains substrate supply.
- **pH**: Substrate removal rates peak near neutral pH and decline at extremes. Acid accumulation in poorly buffered systems creates a negative feedback on removal rate.
- **Competing Electron Sinks**: Methanogenesis, sulfate reduction, and aerobic respiration compete with electrode respiration for substrate electrons, potentially increasing total COD removal while not contributing to current generation.

## Related Parameters

- **name**: Substrate

- **relationship**: The identity and concentration of the carbon source being removed
- **name**: Current Density

- **relationship**: Proportional to the electrode-coupled fraction of substrate removal
- **name**: Coulombic Efficiency

- **relationship**: Determines what fraction of substrate removal generates electricity
- **name**: C:N Ratio

- **relationship**: Nutrient balance affects microbial activity and thus removal rate
- **name**: COD Removal

- **relationship**: The percentage-based expression of substrate removal efficiency
- **name**: Microbial Growth Rate

- **relationship**: Growth rate of the biofilm community determines maximum biological removal capacity

## References

- Logan, B. E. (2008). Microbial Fuel Cells. John Wiley & Sons.
- Heidrich, E. S., et al. (2013). Performance of a pilot scale microbial electrolysis cell fed on domestic wastewater. *Bioresource Technology*, 149, 480-486.
- Ge, Z., et al. (2014). Long-term performance of a 200 liter modular MFC system. *Environmental Science & Technology*, 48(21), 12861-12868.
- Min, B., & Logan, B. E. (2004). Continuous electricity generation from domestic wastewater in a flat plate MFC. *Environmental Science & Technology*, 38(21), 5809-5814.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+substrateRemovalRate&body=**Parameter%3A**+substrateRemovalRate%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fsubstrateremovalrate.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+substrateRemovalRate&body=**Parameter%3A**+substrateRemovalRate%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fsubstrateremovalrate.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+substrateRemovalRate&body=**Parameter%3A**+substrateRemovalRate%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fsubstrateremovalrate.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
