# Product Toxicity Threshold

Product toxicity threshold in microbial electrochemical systems is the concentration of a bioelectrochemical product (organic acid, alcohol, or dissolved gas) at which microbial metabolic activity is significantly inhibited, resulting in measurable reductions in current generation, substrate conversion rate, or product formation rate. Expressed in g/L or mM, this parameter defines the upper operational limit for product accumulation in the reactor and directly informs the design of product recovery systems, feeding strategies, and reactor operating modes.

Product inhibition is a fundamental limitation in all biotechnological processes, and MES are no exception. In microbial electrosynthesis systems, acetate accumulation above 10-20 g/L can inhibit acetogenic bacteria through a combination of thermodynamic product inhibition (the reaction becomes less favorable as product concentration increases) and direct toxicity effects (undissociated acetic acid at low pH permeates cell membranes, disrupting the proton motive force). For longer-chain products like butyrate and caproate, toxicity thresholds are lower (2-5 g/L) due to the greater membrane-disrupting potential of longer-chain fatty acids.

Understanding product toxicity thresholds is essential for designing continuous product removal systems that maintain product concentrations below inhibitory levels. Strategies include membrane-based extraction (pertraction, electrodialysis), phase separation (for hydrophobic products), and in-situ adsorption. The threshold also informs batch vs. continuous operation decisions: batch systems will eventually reach inhibitory concentrations unless harvested, while continuous systems with integrated product removal can theoretically operate indefinitely below the toxicity threshold. At integrated and scaled MES, maintaining sub-toxic product concentrations across the entire reactor volume requires careful attention to mixing, product extraction rates, and local concentration gradients.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Emerging Technology |
| **Subcategory** | Synthetic Pathways |
| **Type** | number |
| **Unit** | g/L |
| **Minimum** | 0.1 |
| **Maximum** | 100 |

## Typical Values

- **Valid Range**: 0.1 to 100 g/L (varies by product and organism)
- **Acetate**: 10 to 30 g/L (higher at neutral pH, lower at acidic pH)
- **Butyrate**: 2 to 10 g/L
- **Caproate**: 1 to 5 g/L
- **Ethanol**: 10 to 50 g/L (some organisms more tolerant)
- **Formate**: 5 to 15 g/L
- **Undissociated Acid Threshold**: 0.5 to 5 g/L (key toxicity mechanism)
- **Methane (dissolved)**: 15 to 25 mg/L saturation limits inhibition assessment

## Measurement Methods

- **Dose-Response Assay**: 1. Prepare a series of anolyte or catholyte solutions spiked with increasing concentrations of the target product. 2. Inoculate each solution with active biofilm scrapings or planktonic culture from the MES. 3. Monitor current generation or gas production rate at each concentration. 4. Construct a dose-response curve relating product concentration to relative activity. 5. Determine the IC50 (concentration causing 50% inhibition) and IC90 (90% inhibition) as threshold values.
- **In-Situ Inhibition Detection**: 1. Operate the MES in batch mode and monitor product accumulation over time. 2. Simultaneously record current density or voltage output. 3. Identify the product concentration at which current begins to decline, indicating onset of inhibition. 4. The inflection point in the current-vs-product-concentration curve defines the in-situ toxicity threshold.
- **Metabolic Activity Assays**: 1. Expose MES biofilm samples to various product concentrations in sealed serum vials. 2. Measure metabolic indicators: ATP content, specific oxygen uptake rate, or dehydrogenase activity. 3. Determine the concentration at which metabolic activity drops below a defined threshold (e.g., 80% of uninhibited control). 4. This provides a product-specific and organism-specific toxicity threshold.

## Affecting Factors

### Primary

- **pH**: Organic acid toxicity is primarily due to the undissociated (protonated) form. Lower pH increases the undissociated fraction (pKa of acetic acid = 4.76), dramatically lowering the effective toxicity threshold in terms of total acid concentration.
- **Product Chain Length**: Longer-chain fatty acids are more hydrophobic and insert more readily into cell membranes, causing toxicity at lower concentrations. Caproate is roughly 5-10 times more toxic than acetate.
- **Microbial Community Adaptation**: Adapted communities show higher tolerance than naive cultures. Gradual exposure to increasing product concentrations can raise the effective threshold by 2-5 fold.
- **Product Form**: Dissolved CO2 and H2 can also be inhibitory at high concentrations; supersaturation conditions at the electrode surface may cause local toxicity.
- **Temperature**: Higher temperatures increase membrane fluidity, potentially making cells more susceptible to fatty acid toxicity.
- **Nutrient Availability**: Well-nourished cells with adequate energy reserves are more resistant to product stress.
- **Synergistic Effects**: Mixtures of products may have synergistic toxicity, where the combined effect exceeds the sum of individual effects.

## Related Parameters

- **name**: Product Selectivity

- **relationship**: Determines which products accumulate and at what rates, controlling which toxicity thresholds are relevant.
- **name**: CO2 Conversion Product

- **relationship**: Identifies the specific products whose toxicity thresholds must be considered.
- **name**: Carbon Recovery

- **relationship**: Product inhibition limits the maximum achievable carbon recovery in batch systems.
- **name**: Water Retention

- **relationship**: Product dilution through hydraulic management can maintain concentrations below toxicity thresholds.
- **name**: Control Effectiveness

- **relationship**: Product concentration control through extraction or dilution strategies must maintain levels below the toxicity threshold.

## Compatible Systems

Synthetic Biology Integration

## References

- Jourdin, L., Griber, T., Huber, B., & Strik, D. P. B. T. B. (2020). High acetic acid productivity and selectivity from CO2 through microbial electrosynthesis. ACS Sustainable Chemistry & Engineering, 8(42), 15838-15848.
- Gildemyn, S., Verbeeck, K., Slabbinck, R., Andersen, S. J., Prevoteau, A., & Rabaey, K. (2015). Integrated production, extraction, and concentration of acetic acid from CO2 through microbial electrosynthesis. Environmental Science & Technology Letters, 2(11), 325-328.
- Agler, M. T., Spirito, C. M., Usack, J. G., Werner, J. J., & Angenent, L. T. (2012). Chain elongation with reactor microbiomes: upgrading dilute ethanol to medium-chain carboxylates. Energy & Environmental Science, 5(8), 8189-8192.
- Bajracharya, S., Srikanth, S., Mohanakrishna, G., Zacharia, R., Strik, D. P. B. T. B., & Pant, D. (2017). Biotransformation of carbon dioxide in bioelectrochemical systems. Journal of Power Sources, 356, 256-273.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Product+Toxicity+Threshold&body=**Parameter%3A**+Product+Toxicity+Threshold%0A**Category%3A**+Emerging+Technology%0A**File%3A**+parameters%2Femerging-technology%2Fproduct-toxicity-threshold.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Product+Toxicity+Threshold&body=**Parameter%3A**+Product+Toxicity+Threshold%0A**Category%3A**+Emerging+Technology%0A**File%3A**+parameters%2Femerging-technology%2Fproduct-toxicity-threshold.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Product+Toxicity+Threshold&body=**Parameter%3A**+Product+Toxicity+Threshold%0A**Category%3A**+Emerging+Technology%0A**File%3A**+parameters%2Femerging-technology%2Fproduct-toxicity-threshold.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
