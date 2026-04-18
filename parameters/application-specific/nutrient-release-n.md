# Nutrient Release N

Nutrient release of nitrogen in microbial electrochemical systems refers to the rate and extent at which organic nitrogen compounds in wastewater are converted to dissolved ammonium (NH4+) through ammonification by microbial activity at the anode, expressed as mg N/L/d or as a fraction of total Kjeldahl nitrogen (TKN) converted to ammoniacal nitrogen. This process is critical because ammonium is the primary nitrogen species that can be electrochemically transported across cation exchange membranes for recovery, and its release rate from organic nitrogen determines the supply of recoverable nitrogen in MES.

In bioelectrochemical anodes, heterotrophic microorganisms degrade protein-containing organic matter through hydrolysis and deamination, releasing NH4+ as a byproduct. This ammonification process occurs simultaneously with the oxidation of organic carbon for current generation, making the anode a dual-function bioreactor for both energy harvesting and nitrogen mobilization. The released NH4+ then participates in the electrochemical circuit as a charge carrier, migrating through cation exchange membranes toward the cathode under the influence of the electric field, where it accumulates for recovery.

The nitrogen release rate is a limiting factor for nitrogen recovery efficiency in MES treating wastewaters with high organic nitrogen content (proteins, urea, amino acids). If ammonification is slow relative to the hydraulic retention time, organic nitrogen passes through the system unprocessed, reducing the overall nitrogen recovery. Understanding and optimizing nitrogen release requires managing the microbial community to include both electroactive organisms and efficient ammonifiers, while maintaining conditions (pH, temperature, HRT) that favor ammonification kinetics.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Application Specific |
| **Subcategory** | Fertigation Systems |
| **Type** | number |
| **Unit** | mg/L/d |
| **Minimum** | 0 |
| **Maximum** | 100 |

## Typical Values

- **Valid Range**: 0 to 2000 mg N/L/d
- **Municipal Wastewater**: 5 to 30 mg N/L/d release rate
- **Urine Treatment**: 100 to 500 mg N/L/d
- **Livestock Manure**: 50 to 300 mg N/L/d
- **Food Processing Wastewater**: 20 to 150 mg N/L/d
- **Ammonification Efficiency**: 50% to 95% of organic N to NH4+

## Measurement Methods

- **Nitrogen Speciation Analysis**: 1. Measure total Kjeldahl nitrogen (TKN) and ammoniacal nitrogen (NH4-N) in influent samples. 2. Calculate organic nitrogen: Org-N = TKN - NH4-N. 3. Measure NH4-N in the effluent (and catholyte for dual-chamber systems). 4. Calculate nitrogen release rate: NRR = (NH4-N_effluent + NH4-N_catholyte - NH4-N_influent + NO3-N_effluent) / HRT. 5. Account for nitrogen assimilated into biomass by measuring total nitrogen in excess sludge.
- **Ammonium Monitoring**: 1. Install an inline ammonium-selective electrode or ammonium analyzer in the anolyte. 2. Monitor NH4+ concentration continuously to track release dynamics. 3. Calculate the release rate from the slope of NH4+ accumulation in batch tests or from steady-state concentration in continuous flow. 4. Validate with periodic laboratory analyses using standard colorimetric (Nessler or salicylate) or titrimetric methods.
- **Nitrogen Mass Balance**: 1. Quantify nitrogen in all input streams: influent TKN, any chemical N additions. 2. Quantify nitrogen in all output streams: effluent TKN, NH4-N, NO3-N, N2 (denitrification), catholyte N, sludge N. 3. Calculate the nitrogen conversion efficiency and release rate from the mass balance. 4. Close the balance to within 15% to validate measurements.

## Affecting Factors

### Primary

- **Substrate Nitrogen Content**: Higher protein and urea content in the wastewater provides more organic nitrogen for ammonification. Urine contains 7000-9000 mg N/L; municipal wastewater contains 30-60 mg N/L.
- **pH**: Ammonification is optimal at pH 6.5-8.0. Acidic conditions (pH < 5) inhibit ammonifying bacteria.
- **Temperature**: Ammonification rate approximately doubles per 10 degrees C increase within the mesophilic range (15-40 degrees C).
- **Hydraulic Retention Time**: Longer HRT provides more time for complete ammonification of organic nitrogen. Minimum 4-12 hours typically required for >80% conversion.
- **C/N Ratio**: Very high C/N ratios favor nitrogen assimilation into biomass rather than release as NH4+, reducing the recoverable nitrogen.
- **Dissolved Oxygen**: Anaerobic conditions at the anode favor ammonification; any oxygen intrusion may promote nitrification that converts NH4+ to NO3-.
- **Microbial Community Composition**: The presence of efficient ammonifying organisms (Clostridium, Bacillus species) enhances nitrogen release rates.

## Related Parameters

- **name**: Nutrient Release (K)

- **relationship**: Potassium release occurs in parallel with nitrogen release from the same organic substrates.
- **name**: Nutrient Release (P)

- **relationship**: Phosphorus release is coupled with nitrogen release through organic matter decomposition.
- **name**: Nutrient Recovery

- **relationship**: The downstream capture of released NH4+ as a fertilizer product.
- **name**: Organic Loading Rate

- **relationship**: Higher OLR provides more substrate for ammonification, increasing nitrogen release in absolute terms.
- **name**: Carbon Recovery

- **relationship**: Nitrogen and carbon release compete for microbial metabolic resources; balanced C/N ratios optimize both.

## Compatible Systems

Agricultural Integration

## References

- Kuntke, P., Smiech, K. M., Bruning, H., Zeeman, G., Saakes, M., Sleutels, T. H. J. A., Hamelers, H. V. M., & Buisman, C. J. N. (2012). Ammonium recovery and energy production from urine by a microbial fuel cell. Water Research, 46(8), 2627-2636.
- Cord-Ruwisch, R., Law, Y., & Cheng, K. Y. (2011). Ammonium as a sustainable proton shuttle in bioelectrochemical systems. Bioresource Technology, 102(20), 9691-9696.
- Kelly, P. T., & He, Z. (2014). Nutrients removal and recovery in bioelectrochemical systems: a review. Bioresource Technology, 153, 351-360.
- Desloover, J., Abate Woldeyohannis, A., Verstraete, W., Boon, N., & Rabaey, K. (2012). Electrochemical resource recovery from digestate to prevent ammonia toxicity during anaerobic digestion. Environmental Science & Technology, 46(21), 12209-12216.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Nutrient+Release+N&body=**Parameter%3A**+Nutrient+Release+N%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fnutrient-release-n.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Nutrient+Release+N&body=**Parameter%3A**+Nutrient+Release+N%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fnutrient-release-n.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Nutrient+Release+N&body=**Parameter%3A**+Nutrient+Release+N%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fnutrient-release-n.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
