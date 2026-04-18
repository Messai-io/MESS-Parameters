# Bod Removal

Biochemical oxygen demand (BOD) removal efficiency measures the percentage reduction of biodegradable organic matter achieved during wastewater passage through a microbial electrochemical system (MES). BOD represents the quantity of dissolved oxygen consumed by microorganisms during aerobic decomposition of organic matter over a standardized incubation period (typically 5 days at 20 deg C for BOD5). In MES, organic matter removal occurs through anaerobic bioelectrochemical oxidation at the anode, where electroactive bacteria transfer electrons from organic substrates to the electrode rather than to dissolved oxygen.

BOD removal is the most widely used regulatory compliance metric for wastewater treatment discharge permits worldwide. Municipal wastewater treatment facilities are typically required to achieve effluent BOD5 concentrations below 20-30 mg/L (corresponding to 85-95% removal from influent concentrations of 150-300 mg/L). MES technology must demonstrate comparable or superior BOD removal to conventional activated sludge processes to be considered a viable alternative.

The mechanism of BOD removal in MES differs fundamentally from conventional aerobic treatment. In activated sludge, microorganisms oxidize organic matter using dissolved oxygen as the terminal electron acceptor, consuming significant energy for aeration (typically 0.3-0.6 kWh/m^3). In MES, the anode serves as the electron acceptor, and the energy from organic oxidation is partially captured as electrical current rather than being dissipated as heat. This enables simultaneous treatment and energy recovery, reducing the net energy cost of wastewater treatment by 50-100% compared to conventional processes.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Performance |
| **Subcategory** | Organic Removal |
| **Type** | number |
| **Unit** | % |
| **Minimum** | 0 |
| **Maximum** | 100 |
| **Papers Reporting** | 118 |

## Typical Values

- **Valid Range**: 0% to 100%
- **Typical Range**: 60% to 95%
- **MFC (acetate substrate, lab)**: 85-98%
- **MFC (domestic wastewater, pilot)**: 60-85%
- **MEC (domestic wastewater)**: 70-90%
- **MFC + polishing step**: 90-98%
- **Conventional activated sludge (comparison)**: 85-95%
- **Regulatory requirement (typical)**: > 85% removal or < 20-30 mg/L effluent
- **MFC effluent BOD5 (best case)**: 5-15 mg/L

## Measurement Methods

- **Standard BOD5 Test (APHA 5210B)**: The 5-day BOD test is the standard regulatory method. Influent and effluent samples are diluted with nutrient-amended dilution water, seeded with microorganisms, and incubated in sealed bottles at 20 deg C for 5 days. Dissolved oxygen consumption is measured using membrane or optical DO probes (e.g., YSI ProODO, Hach LDO, +/- 0.1 mg/L). BOD removal = (BOD_influent - BOD_effluent) / BOD_influent x 100%. The test requires 5 days, limiting its utility for real-time process control.
- **Respirometric BOD Measurement**: Automated respirometers (e.g., WTW OxiTop, Challenge Environmental AER-800) measure oxygen consumption continuously using pressure or oxygen sensors. Results are available in 1-3 days and correlate well with standard BOD5 (R^2 > 0.95). This method enables higher-frequency performance monitoring.
- **Surrogate COD Measurement**: Because COD can be measured in 2 hours (dichromate method, APHA 5220D) or 10 minutes (spectrophotometric methods), and BOD/COD ratios for a given wastewater are relatively stable (typically 0.4-0.8 for domestic wastewater), COD measurements with established BOD/COD correlation provide rapid BOD estimates for process control.

## Affecting Factors

### Primary

- **Hydraulic retention time (HRT)**: BOD removal increases with HRT up to a point of diminishing returns. Minimum HRT for >80% BOD removal is typically 4-8 hours for MFC treating domestic wastewater. HRT >24 hours achieves >90% removal but reduces volumetric throughput.
- **Substrate biodegradability**: The BOD/COD ratio indicates the fraction of organic matter accessible to biological degradation. Domestic wastewater (BOD/COD = 0.4-0.6) is moderately biodegradable. Industrial wastewaters vary widely (0.1-0.9).
- **Temperature**: Biofilm metabolic activity follows Arrhenius kinetics, with BOD removal rate approximately doubling per 10 deg C increase between 10-35 deg C. Below 15 deg C, BOD removal efficiency can drop by 20-40% unless HRT is extended.
- **Organic loading rate (OLR)**: At low OLR (<0.5 kg COD/m^3/d), biofilm may be substrate-limited. At high OLR (>5 kg COD/m^3/d), incomplete conversion occurs. Optimal OLR for balanced BOD removal and power production is typically 1-3 kg COD/m^3/d.
- **Biofilm maturity and health**: A mature, electroactive biofilm (Geobacter-dominated) efficiently converts soluble BOD to current. Young or disrupted biofilms show 30-50% lower BOD removal rates. Biofilm establishment requires 2-4 weeks under favorable conditions.

## References

1. Liu, H. et al. "Production of electricity during wastewater treatment using a single chamber microbial fuel cell." Environmental Science & Technology, 38(7), 2281-2285 (2004).
2. Min, B. and Logan, B.E. "Continuous electricity generation from domestic wastewater and organic substrates in a flat plate microbial fuel cell." Environmental Science & Technology, 38(21), 5809-5814 (2004).
3. APHA. "Standard Methods for the Examination of Water and Wastewater." 23rd Edition, 2017.
4. Heidrich, E.S. et al. "Performance of a pilot scale microbial electrolysis cell fed on domestic wastewater." Bioresource Technology, 173, 87-95 (2014).
5. Ge, Z. et al. "Energy extraction from a large-scale microbial fuel cell system treating municipal wastewater." Journal of Power Sources, 297, 260-264 (2015).

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Bod+Removal&body=**Parameter%3A**+Bod+Removal%0A**Category%3A**+Performance%0A**File%3A**+parameters%2Fperformance%2Fbod-removal.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Bod+Removal&body=**Parameter%3A**+Bod+Removal%0A**Category%3A**+Performance%0A**File%3A**+parameters%2Fperformance%2Fbod-removal.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Bod+Removal&body=**Parameter%3A**+Bod+Removal%0A**Category%3A**+Performance%0A**File%3A**+parameters%2Fperformance%2Fbod-removal.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
