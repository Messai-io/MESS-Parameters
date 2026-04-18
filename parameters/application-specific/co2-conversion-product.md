# Co2 Conversion Product

CO2 conversion product in microbial electrochemical systems (MES) refers to the specific chemical species generated through the bioelectrochemical reduction of carbon dioxide at the cathode. In microbial electrosynthesis, electrotrophic microorganisms accept electrons either directly from the cathode surface or via hydrogen as an electron shuttle, using these reducing equivalents to fix CO2 through metabolic pathways such as the Wood-Ljungdahl pathway, producing organic compounds ranging from simple two-carbon molecules like acetate to longer-chain products including butyrate, caproate, and alcohols. The identity and distribution of conversion products is a defining characteristic of system performance and economic viability.

The product spectrum is determined by the microbial community composition, cathode potential, pH, temperature, and the thermodynamic and kinetic constraints on carbon fixation pathways. Acetate is the most commonly reported product due to the prevalence of acetogenic bacteria (e.g., Sporomusa ovata, Acetobacterium woodii) in cathode biofilms and the relatively low energy barrier for its formation from CO2. However, chain elongation processes can convert acetate into more valuable C4 and C6 compounds through reverse beta-oxidation, significantly increasing the economic potential of microbial electrosynthesis.

Understanding and controlling the CO2 conversion product distribution is essential for techno-economic assessments of MES as a carbon capture and utilization technology. Higher-value products such as n-butyrate (market value approximately 1,500 USD/ton) and n-caproate (approximately 3,000 USD/ton) can substantially improve the economics compared to acetate (approximately 400 USD/ton). Product selectivity engineering through electrode potential control, pH manipulation, microbial community enrichment, and in-situ product extraction represents an active frontier in MES research.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Application Specific |
| **Subcategory** | CO₂ Reduction |
| **Type** | select |

## Typical Values

- **Valid Range**: C1 to C8 organic compounds (formate to caprylate)
- **Typical Products**: Acetate (C2, 60-95% of carbon products), methane, formate
- **Advanced Systems**: Butyrate (C4, 10-40%), caproate (C6, 5-20%), ethanol (1-15%)
- **Production Rates**: 0.1 to 20 g L^-1 d^-1 for acetate; 0.01 to 5 g L^-1 d^-1 for longer-chain products

## Measurement Methods

- **High-Performance Liquid Chromatography (HPLC)**: 1. Collect catholyte samples at regular intervals (every 12-24 hours for batch, at steady state for continuous). 2. Filter samples through 0.22 micrometer membranes to remove biomass. 3. Analyze using HPLC with an organic acid column (e.g., Aminex HPX-87H) and refractive index or UV detector. 4. Use standard calibration curves for acetate, propionate, butyrate, valerate, and caproate. 5. Report concentrations in mM or g/L and calculate production rates based on sampling intervals and reactor volume.
- **Gas Chromatography (GC)**: 1. For volatile products (methane, ethanol, butanol), collect headspace gas samples using gas-tight syringes. 2. Analyze using GC with thermal conductivity detector (TCD) for permanent gases or flame ionization detector (FID) for organics. 3. For dissolved volatile fatty acids, acidify liquid samples to pH < 2 and extract or directly inject. 4. Quantify against certified gas and liquid standards.
- **Ion Chromatography (IC)**: 1. Filter and dilute catholyte samples as needed. 2. Analyze using IC with conductivity detection and appropriate anion or organic acid columns. 3. Particularly useful for simultaneous detection of acetate, formate, and other organic anions alongside inorganic anions.

## Affecting Factors

### Primary

- **Cathode Potential**: Determines the available reducing power. More negative potentials (-0.8 to -1.0 V vs. SHE) favor acetogenesis, while very negative potentials (below -1.0 V) may shift product distribution toward methane or hydrogen.
- **Microbial Community Composition**: Acetogens (Sporomusa, Acetobacterium, Clostridium) produce acetate; methanogens produce methane; chain-elongating bacteria (Clostridium kluyveri) produce butyrate and caproate. Community management is key to product control.
- **pH**: Acidic conditions (pH 5.0-5.5) can inhibit methanogens and favor chain elongation, while neutral pH favors acetogens. Strongly alkaline conditions can shift toward formate.
- **CO2 Partial Pressure**: Higher CO2 availability drives thermodynamic favorability of acetogenesis and can influence product chain length.
- **Electron Donor Co-substrates**: Addition of ethanol or lactate as co-substrates enables chain elongation from acetate to butyrate and caproate.
- **Hydraulic Retention Time**: Shorter HRTs can wash out slower-growing methanogens, enriching for acetogens and altering product distribution.
- **In-situ Product Extraction**: Continuous removal of products shifts equilibria and can prevent product inhibition, enabling higher titers of longer-chain products.
- **Temperature**: Thermophilic conditions (50-60 degrees C) can favor different metabolic pathways compared to mesophilic operation.

## Related Parameters

- **name**: Faradaic Efficiency (CO2)

- **relationship**: Quantifies the electron efficiency of converting electrical current into specific CO2 reduction products.
- **name**: Product Selectivity

- **relationship**: The fraction of total products represented by a specific compound; directly describes the product distribution.
- **name**: CO2 Capture Rate

- **relationship**: The overall rate of carbon fixation, which is partitioned among the various conversion products.
- **name**: Carbon Recovery

- **relationship**: The fraction of influent carbon recovered as desired products.
- **name**: Product Toxicity Threshold

- **relationship**: The concentration at which a product inhibits microbial activity, limiting achievable titers.

## Compatible Systems

Carbon Capture Applications

## References

- Nevin, K. P., Hensley, S. A., Franks, A. E., Summers, Z. M., Ou, J., Woodard, T. L., Snoeyenbos-West, O. L., & Lovley, D. R. (2011). Electrosynthesis of organic compounds from carbon dioxide is catalyzed by a diversity of acetogenic microorganisms. Applied and Environmental Microbiology, 77(9), 2882-2886.
- Jourdin, L., Griber, T., Huber, B., & Strik, D. P. B. T. B. (2020). High acetic acid productivity and selectivity using carbon dioxide as sole carbon source through selective long-term enrichment of acetogenic biofilms. ACS Sustainable Chemistry & Engineering, 8(42), 15838-15848.
- Ganigue, R., Puig, S., Batlle-Vilanova, P., Balaguer, M. D., & Colprim, J. (2015). Microbial electrosynthesis of butyrate from carbon dioxide. Chemical Communications, 51(15), 3235-3238.
- Rabaey, K., & Rozendal, R. A. (2010). Microbial electrosynthesis - revisiting the electrical route for microbial production. Nature Reviews Microbiology, 8(10), 706-716.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Co2+Conversion+Product&body=**Parameter%3A**+Co2+Conversion+Product%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fco2-conversion-product.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Co2+Conversion+Product&body=**Parameter%3A**+Co2+Conversion+Product%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fco2-conversion-product.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Co2+Conversion+Product&body=**Parameter%3A**+Co2+Conversion+Product%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fco2-conversion-product.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
