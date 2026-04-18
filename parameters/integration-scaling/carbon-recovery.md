# Carbon Recovery

Carbon recovery in microbial electrochemical systems quantifies the fraction of organic carbon in the influent wastewater that is captured in a useful product form (electricity, hydrogen gas, methane, volatile fatty acids, or other carbon-containing chemicals) rather than being lost to CO2, biomass accumulation, or effluent discharge. Expressed as a percentage of influent total organic carbon (TOC) or chemical oxygen demand (COD), this parameter provides a holistic assessment of how effectively the MES converts waste carbon into valuable outputs, integrating both the energy recovery and chemical product recovery pathways.

Carbon recovery encompasses multiple parallel and sequential conversion pathways within MES. At the anode, organic carbon is oxidized by exoelectrogenic bacteria, with electrons transferred to the external circuit (contributing to coulombic efficiency) or diverted to competing metabolic pathways such as methanogenesis, fermentation, or aerobic respiration. The fraction of carbon captured as electrical current can be calculated from the coulombic efficiency and the substrate's electron equivalents. Additional carbon may be recovered as dissolved products (acetate, butyrate from fermentation), gaseous products (methane from methanogenic side reactions, CO2 from complete oxidation), or fixed into new biomass.

For integrated and scaled MES installations, maximizing carbon recovery is essential for both environmental and economic performance. From an environmental perspective, higher carbon recovery means less organic carbon in the effluent, improving treatment performance. From an economic perspective, recovering carbon as high-value chemicals (VFAs, bioplastic precursors) rather than low-value products (CO2, electricity) can dramatically improve the revenue potential. Life cycle assessments of MES technology increasingly focus on carbon recovery as a key metric for comparing MES against conventional treatment technologies in terms of circular economy contributions.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Integration Scaling |
| **Subcategory** | Process Integration |
| **Type** | number |
| **Unit** | % |
| **Minimum** | 0 |
| **Maximum** | 99 |
| **Papers Reporting** | 19 |

## Typical Values

- **Valid Range**: 1% to 95%
- **Electrical Carbon Recovery (via CE)**: 5% to 60%
- **Hydrogen Carbon Recovery (MEC)**: 30% to 80%
- **Total Carbon Recovery (all products)**: 40% to 90%
- **Methane Carbon Recovery**: 20% to 70% (in MFC-AD hybrid)
- **VFA Carbon Recovery**: 10% to 40% (in fermentation-MES hybrid)

## Measurement Methods

- **Comprehensive Carbon Balance**: 1. Measure influent TOC or COD concentration and volumetric flow rate. 2. Measure effluent TOC/COD concentration and flow rate. 3. Quantify all carbon-containing products: electrical current (via coulombic efficiency and COD equivalence), gaseous products (CO2, CH4, H2 via GC), dissolved products (VFAs via HPLC), and biomass (via VSS or protein assay). 4. Calculate carbon recovery for each product: CR_i = (carbon_in_product_i / carbon_in_influent) * 100%. 5. Sum for total carbon recovery: CR_total = sum of CR_i. 6. The carbon balance should close to within 10% to validate measurement accuracy.
- **Coulombic-Based Estimation**: 1. Measure the total charge produced over the experimental period (Q = integral of I dt). 2. Calculate the theoretical charge from consumed COD: Q_theo = (delta_COD * V * F * b) / M, where F is Faraday's constant, b is electrons per mole, and M is molecular weight. 3. Carbon recovery via electricity = CE * (energy value of electrons / energy content of COD). 4. This provides a lower bound on carbon recovery, as non-electrical products are not captured.
- **Gas Phase Analysis**: 1. Collect all gaseous outputs in a gas bag or measure flow with a wet gas meter. 2. Analyze gas composition by GC (CO2, CH4, H2, N2, O2). 3. Calculate carbon in gaseous products: C_gas = (n_CO2 + n_CH4) * 12 g/mol. 4. Compare against influent carbon to determine gaseous carbon recovery.

## Affecting Factors

### Primary

- **Coulombic Efficiency**: The primary pathway for carbon-to-electricity conversion. Higher CE directly increases electrical carbon recovery.
- **Competing Microbial Pathways**: Methanogenesis, sulfate reduction, and aerobic respiration divert carbon away from the electrode, reducing electrical carbon recovery but potentially enabling other forms of recovery.
- **Substrate Complexity**: Simple substrates (acetate) achieve higher carbon recovery than complex substrates (cellulose, proteins) due to more direct metabolic pathways.
- **Reactor Configuration**: Systems designed for multiple product recovery (e.g., two-stage fermentation-MFC) achieve higher total carbon recovery than single-stage systems optimized for one product.
- **Hydraulic Retention Time**: Longer HRT allows more complete substrate conversion, increasing carbon recovery per pass.
- **Temperature**: Mesophilic conditions (30-37 degrees C) optimize microbial kinetics for carbon conversion.
- **Organic Loading Rate**: Moderate OLR maximizes carbon recovery; excessive OLR causes substrate breakthrough.

## Related Parameters

- **name**: Coulombic Efficiency

- **relationship**: The electrical component of carbon recovery; directly proportional for current generation.
- **name**: Nutrient Recovery

- **relationship**: Carbon and nutrient recovery are coupled through biomass composition and metabolic stoichiometry.
- **name**: Organic Loading Rate

- **relationship**: Determines the carbon supply rate and influences the achievable recovery efficiency.
- **name**: Product Selectivity

- **relationship**: When multiple carbon products are formed, selectivity determines the distribution of recovered carbon.
- **name**: Biogas Production

- **relationship**: Methane in biogas represents one pathway for carbon recovery in hybrid MES-AD systems.

## Compatible Systems

Hybrid System Integration

## References

- Logan, B. E., Hamelers, B., Rozendal, R., Schroder, U., Keller, J., Freguia, S., Aelterman, P., Verstraete, W., & Rabaey, K. (2006). Microbial fuel cells: methodology and technology. Environmental Science & Technology, 40(17), 5181-5192.
- Rabaey, K., & Verstraete, W. (2005). Microbial fuel cells: novel biotechnology for energy generation. Trends in Biotechnology, 23(6), 291-298.
- Pant, D., Van Bogaert, G., Diels, L., & Vanbroekhoven, K. (2010). A review of the substrates used in microbial fuel cells (MFCs) for sustainable energy production. Bioresource Technology, 101(6), 1533-1543.
- Heidrich, E. S., Edwards, S. R., Dolfing, J., Cotterill, S. E., & Curtis, T. P. (2014). Performance of a pilot scale microbial electrolysis cell fed on domestic wastewater at ambient temperatures for a period of 2 years. Bioresource Technology, 173, 87-95.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Carbon+Recovery&body=**Parameter%3A**+Carbon+Recovery%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fcarbon-recovery.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Carbon+Recovery&body=**Parameter%3A**+Carbon+Recovery%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fcarbon-recovery.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Carbon+Recovery&body=**Parameter%3A**+Carbon+Recovery%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fcarbon-recovery.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
