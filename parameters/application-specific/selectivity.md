# Selectivity

Selectivity in microbial electrochemical systems is a comprehensive parameter that describes the preferential formation, transport, or removal of a target species relative to other species present in the system. Depending on the context, it may refer to electrode selectivity (preference for specific redox reactions), membrane selectivity (preferential ion transport), microbial selectivity (metabolic pathway preference), or product selectivity (fraction of target product in the output). Expressed as a ratio, percentage, or separation factor, selectivity is a unifying concept that governs the efficiency and purity of all MES outputs.

In bioelectrochemical systems, selectivity operates at multiple levels simultaneously. At the electrode level, the anode biofilm must selectively catalyze the oxidation of organic substrates via the exoelectrogenic pathway rather than competing fermentation or methanogenesis pathways. At the membrane level, ion exchange membranes must selectively transport the target ions (protons, ammonium, or salt ions) while rejecting unwanted species. At the cathode, selectivity determines whether electrons are directed toward hydrogen evolution, oxygen reduction, CO2 reduction to acetate, or methanogenesis. Each of these selectivity dimensions affects the overall system performance and the quality of products and treated effluent.

For integrated and scaled MES, selectivity optimization is crucial because real-world wastewater contains complex mixtures of organic compounds, inorganic ions, suspended solids, and microbial communities that create multiple competing pathways at every level. Laboratory systems with pure substrates (acetate) and controlled conditions achieve high selectivity almost by default, while practical systems treating real wastewater must engineer selectivity through careful control of electrode potential, pH, temperature, membrane selection, and microbial community management. Higher selectivity generally means lower separation costs, higher product purity, better treatment performance, and improved economic viability.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Application Specific |
| **Subcategory** | Sensor Specifications |
| **Type** | number |
| **Minimum** | 1 |
| **Maximum** | 10 |
| **Papers Reporting** | 30 |

## Typical Values

- **Valid Range**: 0% to 100%
- **Electrode (Electrogenic) Selectivity**: 30% to 90% of electrons to external circuit
- **Membrane Ion Selectivity**: 80% to 99% for target ions (CEM for cations)
- **Product Selectivity (Acetate)**: 60% to 95% in microbial electrosynthesis
- **Product Selectivity (H2)**: 50% to 95% in MECs
- **Substrate Selectivity (Acetate vs. Propionate)**: 70% to 95% preference for acetate at anode
- **Desalination Selectivity (Monovalent)**: 60% to 90% for Na+ over Ca2+

## Measurement Methods

- **Electrochemical Selectivity**: 1. Measure the total current and total substrate consumption (COD removal). 2. Calculate coulombic efficiency as the ratio of electrons captured as current to electrons available from substrate. 3. Identify the non-electrogenic pathways (methanogenesis, fermentation) by product analysis. 4. Electrode selectivity = current electrons / (current electrons + competing pathway electrons).
- **Membrane Selectivity**: 1. Measure the concentration change of each ion species in the anode, cathode, and desalination chambers over time. 2. Calculate the flux of each ion through the membrane. 3. Express selectivity as the permselectivity: ratio of target ion flux to total ionic flux. 4. Alternative: calculate the transport number (fraction of current carried by the target ion).
- **Product Selectivity Analysis**: 1. Quantify all products formed using appropriate analytical methods (HPLC, GC, IC). 2. Calculate the molar or carbon-mole fraction of each product. 3. Selectivity for product i = moles_i / total moles_all_products * 100%. 4. Track selectivity over time to assess stability and identify drift in product distribution.
- **Microbial Selectivity**: 1. Analyze microbial community composition by 16S rRNA gene sequencing. 2. Calculate the relative abundance of electrogenic organisms (Geobacter, Shewanella) versus competitors (methanogens, fermenters). 3. Correlate community selectivity with electrode selectivity (CE). 4. Higher electrogen abundance generally correlates with higher electrode selectivity.

## Affecting Factors

### Primary

- **Electrode Potential**: Anode potential below -0.2 V vs. SHE favors Geobacter; cathode potential controls the selectivity between H2 evolution, O2 reduction, and CO2 reduction.
- **Membrane Type**: Anion exchange membranes (AEM) vs. cation exchange membranes (CEM) determine the direction and selectivity of ion transport.
- **Microbial Community Management**: Selective enrichment through substrate choice, potential control, and operational conditions determines the metabolic selectivity of the biofilm.
- **pH**: Affects both membrane selectivity (proton competition) and product selectivity (acid/base equilibria, methanogen inhibition).
- **Temperature**: Affects the relative growth rates of competing microbial populations, shifting selectivity over time.
- **Hydraulic Retention Time**: Shorter HRT can wash out slow-growing methanogens, improving electrogenic selectivity.
- **External Resistance**: Operating at the optimal resistance for the target pathway improves selectivity by matching the electron demand to the supply.

## Related Parameters

- **name**: Product Selectivity

- **relationship**: A specific case of selectivity focused on chemical products.
- **name**: Coulombic Efficiency

- **relationship**: Essentially the electrode selectivity for the electrogenic pathway.
- **name**: Salt Removal

- **relationship**: Desalination selectivity in MDCs determines which salts are preferentially removed.
- **name**: Nutrient Recovery

- **relationship**: Ion selectivity through membranes determines which nutrients are preferentially recovered.
- **name**: Faradaic Efficiency (CO2)

- **relationship**: The cathodic selectivity for CO2 reduction products versus hydrogen or other competing reactions.

## Compatible Systems

Biosensor Applications

## References

- Torres, C. I., Krajmalnik-Brown, R., Parameswaran, P., Marcus, A. K., Wanger, G., Gorby, Y. A., & Rittmann, B. E. (2009). Selecting anode-respiring bacteria based on anode potential: phylogenetic, electrochemical, and microscopic characterization. Environmental Science & Technology, 43(24), 9519-9524.
- Rozendal, R. A., Hamelers, H. V. M., & Buisman, C. J. N. (2006). Effects of membrane cation transport on pH and microbial fuel cell performance. Environmental Science & Technology, 40(17), 5206-5211.
- Rabaey, K., & Rozendal, R. A. (2010). Microbial electrosynthesis - revisiting the electrical route for microbial production. Nature Reviews Microbiology, 8(10), 706-716.
- Kim, Y., & Logan, B. E. (2013). Microbial desalination cells for energy production and desalination. Desalination, 308, 122-130.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Selectivity&body=**Parameter%3A**+Selectivity%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fselectivity.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Selectivity&body=**Parameter%3A**+Selectivity%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fselectivity.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Selectivity&body=**Parameter%3A**+Selectivity%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fselectivity.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
