# Product Selectivity

Product selectivity in microbial electrochemical systems quantifies the fraction of total products formed that comprises a specific target compound, expressed as a molar percentage, mass percentage, or carbon-mole percentage of the desired product relative to all products generated. In microbial electrosynthesis (MES) systems where CO2 is reduced to multiple organic products at the cathode, product selectivity determines the purity of the product stream and directly affects the economic value and downstream processing requirements of the bioelectrochemical output.

In MES cathode biofilms, multiple metabolic pathways operate simultaneously, producing a mixture of organic acids, alcohols, and gases from CO2 reduction. Acetate is typically the dominant product (60-95% selectivity), but butyrate, caproate, ethanol, butanol, and methane are also formed. Product selectivity is determined by the thermodynamic and kinetic competition among these pathways, which is influenced by cathode potential, pH, microbial community composition, product concentrations, and the availability of electron donors (H2, direct electron transfer). Achieving high selectivity for a specific high-value product is a primary goal of MES process optimization.

From a techno-economic perspective, product selectivity has outsized impact on process viability. A system producing pure acetate at 95% selectivity requires minimal downstream purification, while a system producing a mixture of 60% acetate, 20% butyrate, 10% ethanol, and 10% other compounds requires costly separation operations that may exceed the value of the products. Furthermore, selectivity toward higher-value products (caproate at approximately 3000 USD/ton vs. acetate at approximately 400 USD/ton) can transform the economics from marginal to attractive. Selectivity engineering through microbial community management, electrode potential control, and product extraction strategies is a rapidly advancing research frontier.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Application Specific |
| **Subcategory** | CO₂ Reduction |
| **Type** | number |
| **Unit** | % |
| **Minimum** | 0 |
| **Maximum** | 100 |
| **Papers Reporting** | 7 |

## Typical Values

- **Valid Range**: 0% to 100% for any single product
- **Acetate Selectivity**: 60% to 95% (most common product)
- **Butyrate Selectivity**: 5% to 40% (in chain-elongation systems)
- **Caproate Selectivity**: 2% to 25% (in advanced systems)
- **Methane Selectivity**: 10% to 90% (in electromethanogenic systems)
- **Ethanol Selectivity**: 1% to 15% (solventogenic conditions)
- **Hydrogen Selectivity**: 5% to 80% (in MEC cathodes without methanogenesis)

## Measurement Methods

- **Chromatographic Product Analysis**: 1. Collect catholyte samples at regular intervals during steady-state operation. 2. Analyze organic acids (acetate, propionate, butyrate, valerate, caproate) by HPLC with UV or refractive index detection. 3. Analyze alcohols (methanol, ethanol, butanol) by GC-FID of liquid samples. 4. Analyze gaseous products (methane, hydrogen, CO2) by GC-TCD of headspace samples. 5. Calculate selectivity for each product: S_i = n_i / (sum of n_all products) * 100%, where n is moles or carbon-moles.
- **Carbon-Mole Selectivity**: 1. Convert all product concentrations to carbon-mole basis (moles of carbon in each product). 2. Calculate: CS_i = (C_atoms_per_molecule_i * moles_i) / sum(C_atoms_per_molecule_j * moles_j) * 100%. 3. This normalization accounts for the different carbon chain lengths of products and is preferred for comparing selectivity across diverse product spectra.
- **Electron Selectivity**: 1. Calculate the electrons consumed by each product based on stoichiometry. 2. Express selectivity as the fraction of total electrons directed to each product: ES_i = (z_i * n_i) / sum(z_j * n_j) * 100%. 3. Compare with Faradaic efficiency to assess total electron utilization.

## Affecting Factors

### Primary

- **Cathode Potential**: More negative potentials (-0.8 to -1.0 V vs. SHE) favor acetogenesis; very negative potentials favor methanogenesis or H2 evolution. Intermediate potentials may favor chain elongation.
- **pH**: Acidic conditions (pH 5.0-5.5) suppress methanogenesis and can favor chain elongation. Neutral pH (6.5-7.5) favors acetogenesis. Alkaline pH may favor formate.
- **Microbial Community Management**: Selective enrichment of acetogens vs. methanogens vs. chain elongators determines the dominant product pathway. BES inhibitors (BESA) can suppress methanogenesis.
- **Product Concentration and Extraction**: High product concentrations can shift thermodynamic equilibria and cause product inhibition. In-situ extraction maintains low concentrations and high selectivity.
- **Electron Donor Availability**: Availability of co-substrates (ethanol, lactate) enables chain elongation from acetate to butyrate/caproate, shifting selectivity.
- **CO2 Partial Pressure**: Higher CO2 availability can thermodynamically favor acetogenesis over methanogenesis.
- **Temperature**: Mesophilic (30-37 degrees C) conditions favor acetogenesis; thermophilic conditions may shift product distribution.
- **HRT**: Longer retention times can enable sequential reactions (acetate -> butyrate -> caproate) that shift selectivity.

## Related Parameters

- **name**: CO2 Conversion Product

- **relationship**: Identifies the specific products formed; selectivity quantifies their relative proportions.
- **name**: Faradaic Efficiency (CO2)

- **relationship**: The electron efficiency toward all products; selectivity further decomposes this among individual products.
- **name**: Product Toxicity Threshold

- **relationship**: The concentration at which a product inhibits further production, which can shift selectivity away from the inhibiting product.
- **name**: Carbon Recovery

- **relationship**: Total carbon captured as products, of which selectivity determines the distribution.
- **name**: CO2 Capture Rate

- **relationship**: The overall carbon fixation rate, partitioned by selectivity among products.

## References

- Jourdin, L., Griber, T., Huber, B., & Strik, D. P. B. T. B. (2020). High acetic acid productivity and selectivity from CO2 through microbial electrosynthesis. ACS Sustainable Chemistry & Engineering, 8(42), 15838-15848.
- Ganigue, R., Puig, S., Batlle-Vilanova, P., Balaguer, M. D., & Colprim, J. (2015). Microbial electrosynthesis of butyrate from carbon dioxide. Chemical Communications, 51(15), 3235-3238.
- Rabaey, K., & Rozendal, R. A. (2010). Microbial electrosynthesis - revisiting the electrical route for microbial production. Nature Reviews Microbiology, 8(10), 706-716.
- Marshall, C. W., Ross, D. E., Fichot, E. B., Norman, R. S., & May, H. D. (2013). Long-term operation of microbial electrosynthesis systems improves acetate production by autotrophic microbiomes. Environmental Science & Technology, 47(11), 6023-6029.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Product+Selectivity&body=**Parameter%3A**+Product+Selectivity%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fproduct-selectivity.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Product+Selectivity&body=**Parameter%3A**+Product+Selectivity%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fproduct-selectivity.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Product+Selectivity&body=**Parameter%3A**+Product+Selectivity%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fproduct-selectivity.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
