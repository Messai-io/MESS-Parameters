# Ch4 Content Biogas

CH4 content in biogas represents the volumetric fraction of methane in the gaseous output stream of a microbial electrochemical system (MES) configured for biogas production, expressed as a percentage. In electromethanogenesis systems, CO2 is electrochemically reduced to methane at the cathode through direct or mediated electron transfer to methanogenic archaea, while at the anode, organic substrate oxidation or water splitting provides electrons. The methane content of the resulting biogas determines its energy density, combustion properties, and suitability for various end uses.

The CH4 content is a critical quality parameter because it directly determines the calorific value of the biogas. Pure methane has a lower heating value (LHV) of 35.8 MJ/m^3, while biogas containing 60% CH4 and 40% CO2 has an LHV of only 21.5 MJ/m^3. Higher methane content reduces the cost of downstream biogas upgrading to biomethane quality (>95% CH4) for injection into natural gas grids or use as vehicle fuel. MES-produced biogas often achieves higher CH4 content (70-95%) than conventional anaerobic digestion biogas (55-70%) because the electrochemical reduction of CO2 at the cathode converts what would otherwise be a diluent into additional methane.

Electromethanogenesis represents a paradigm shift in biogas production because it can operate on dilute substrates unsuitable for conventional anaerobic digestion, convert CO2 from external sources into methane using renewable electricity (power-to-gas concept), and produce methane from substrates at ambient temperature where conventional mesophilic digestion would be impractical. The ability to upgrade biogas quality in situ, within the electrochemical reactor itself, eliminates or reduces the need for separate biogas upgrading equipment.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Performance |
| **Subcategory** | Methane Production |
| **Type** | number |
| **Unit** | % |
| **Minimum** | 0 |
| **Maximum** | 100 |
| **Papers Reporting** | 8 |

## Typical Values

- **Valid Range**: 0% to 100% (vol/vol)
- **Typical Range**: 50% to 95%
- **Conventional anaerobic digestion (comparison)**: 55-70% CH4
- **Electromethanogenesis (MEC with biocathode)**: 70-95% CH4
- **Power-to-gas MES (CO2 feed)**: 85-98% CH4
- **MFC with methanogenic cathode**: 50-75% CH4
- **Biogas upgrading target (grid injection)**: > 95% CH4
- **Biogas upgrading target (vehicle fuel)**: > 97% CH4
- **Remaining gas composition**: CO2 (5-45%), H2 (0-5%), N2 (0-3%), H2S (0-2%)

## Measurement Methods

- **Gas Chromatography (GC)**: The gold standard for biogas composition analysis uses GC with thermal conductivity detector (TCD) for major components (CH4, CO2, N2, O2, H2) and flame ionization detector (FID) for trace hydrocarbons. Typical instruments: Agilent 7890B, Shimadzu GC-2030. Column: Carboxen-1010 PLOT or Molecular Sieve 5A. Accuracy: +/- 0.5-1.0% absolute. Analysis time: 5-15 minutes per sample.
- **Infrared Gas Analyzer**: Continuous online measurement of CH4 and CO2 using non-dispersive infrared (NDIR) analyzers (e.g., Siemens Ultramat 23, ABB EL3020) provides real-time biogas quality monitoring. Accuracy: +/- 1-2% of range. Response time: 2-10 seconds. These analyzers are standard for process control in biogas plants.
- **Portable Biogas Analyzer**: Handheld instruments (Geotech BIOGAS 5000, Landtec GEM5000) measure CH4, CO2, O2, and H2S simultaneously using infrared and electrochemical sensors. Accuracy: +/- 0.5-3% depending on gas and concentration range. Suitable for field sampling and spot-checks.

## Affecting Factors

### Primary

- **Applied voltage (MEC mode)**: Higher applied voltage (0.5-1.2 V) increases cathodic H2 production which can be converted to CH4 by hydrogenotrophic methanogens. Optimal voltage for maximum CH4 content is typically 0.7-1.0 V, above which H2 accumulates faster than methanogens can consume it.
- **Cathode microbial community**: Direct electromethanogenesis by Methanobacterium and Methanothermobacter species at the cathode surface produces CH4 more efficiently than indirect pathways via H2 intermediate. Community enrichment on CO2/cathode surfaces requires 30-90 days.
- **CO2 availability**: Adequate CO2 supply (from anode organic oxidation or external feed) is essential for cathodic methanogenesis. CO2 limitation reduces CH4 production rate and may shift product distribution toward H2.
- **Temperature**: Mesophilic methanogens (35-40 deg C) produce higher-quality biogas than psychrophilic conditions. Thermophilic electromethanogenesis (55 deg C) can achieve >90% CH4 but requires more energy for heating.
- **pH and alkalinity**: Methanogenic activity requires pH 6.5-8.5 with adequate buffering. The naturally alkaline cathode environment (pH 8-10) is generally favorable for methanogens but may inhibit at pH > 10.

## References

1. Cheng, S. et al. "Direct biological conversion of electrical current into methane by electromethanogenesis." Environmental Science & Technology, 43(10), 3953-3958 (2009).
2. Siegert, M. et al. "Comparison of nonprecious metal cathode materials for methane production by electromethanogenesis." ACS Sustainable Chemistry & Engineering, 2(4), 910-917 (2014).
3. Villano, M. et al. "Bioelectrochemical reduction of CO2 to CH4 via direct and indirect extracellular electron transfer." Bioresource Technology, 101(9), 3085-3090 (2010).
4. Van Eerten-Jansen, M.C.A.A. et al. "Microbial community analysis of a methane-producing biocathode in a bioelectrochemical system." Archaea, 2013, 481784 (2013).
5. Geppert, F. et al. "Bioelectrochemical power-to-gas: State of the art and future perspectives." Trends in Biotechnology, 34(11), 879-894 (2016).

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Ch4+Content+Biogas&body=**Parameter%3A**+Ch4+Content+Biogas%0A**Category%3A**+Performance%0A**File%3A**+parameters%2Fperformance%2Fch4-content-biogas.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Ch4+Content+Biogas&body=**Parameter%3A**+Ch4+Content+Biogas%0A**Category%3A**+Performance%0A**File%3A**+parameters%2Fperformance%2Fch4-content-biogas.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Ch4+Content+Biogas&body=**Parameter%3A**+Ch4+Content+Biogas%0A**Category%3A**+Performance%0A**File%3A**+parameters%2Fperformance%2Fch4-content-biogas.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
