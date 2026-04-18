# Faradaic Efficiency Co2

Faradaic efficiency for CO2 reduction in microbial electrochemical systems is the ratio of electrons that are utilized for the bioelectrochemical conversion of carbon dioxide into target products versus the total electrons supplied as electrical current to the cathode. Expressed as a percentage, this parameter quantifies how effectively the electrical energy input is channeled toward productive CO2 fixation rather than being lost to competing reactions such as hydrogen evolution, oxygen reduction, or abiotic side reactions. It is one of the most critical performance indicators for microbial electrosynthesis (MES) systems.

The Faradaic efficiency for CO2 conversion encompasses both the selectivity of electron transfer to the desired metabolic pathway and the efficiency of the biological catalyst in utilizing available reducing equivalents. In an ideal system, all electrons reaching the cathode would be consumed by electrotrophic microorganisms for CO2 reduction, yielding a Faradaic efficiency of 100%. In practice, values range from 30% to 90% depending on the cathode potential, microbial community, and reactor design. Losses arise from hydrogen evolution at very negative potentials, direct electron consumption by non-productive microorganisms, and diffusion of reduced products back to the anode where they may be re-oxidized.

This parameter is distinct from the overall energy efficiency because it considers only electron utilization, not the total energy balance including overpotentials and ohmic losses. However, Faradaic efficiency directly affects the energetic cost per unit of CO2 captured and converted, making it a key variable in techno-economic models. Improving Faradaic efficiency is a primary target for MES optimization, achievable through electrode surface modification, selective microbial enrichment, optimized cathode potentials, and reactor designs that minimize parasitic electron sinks.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Application Specific |
| **Subcategory** | CO₂ Reduction |
| **Type** | number |
| **Unit** | % |
| **Minimum** | 0 |
| **Maximum** | 100 |

## Typical Values

- **Valid Range**: 0% to 100%
- **Typical Range**: 30% to 90% for acetate production from CO2
- **High-Performance Systems**: 70% to 95% with enriched acetogenic biofilms
- **Methane-Producing Systems**: 40% to 85% for electromethanogenesis
- **Multi-Product Systems**: 20% to 60% for individual products (higher total)

## Measurement Methods

- **Electron Balance Method**: 1. Measure the total electrical charge passed through the cathode circuit over the measurement period (Q_total = integral of I dt, in coulombs). 2. Quantify all carbon products formed during the same period using HPLC, GC, or IC (acetate, butyrate, methane, etc.). 3. Calculate the theoretical electrons required for each product using stoichiometric equations (e.g., CO2 + 8H+ + 8e- -> CH3COOH + 2H2O requires 8 mol electrons per mol acetate). 4. Sum the electrons consumed by all products: Q_products = sum of (n_i * z_i * F), where n is moles of product i, z is electrons per mole, and F is Faraday's constant. 5. Calculate Faradaic efficiency: FE = Q_products / Q_total * 100%.
- **Gas-Phase Correction Method**: 1. Perform the electron balance as above. 2. Additionally measure hydrogen gas produced at the cathode (by GC-TCD of headspace). 3. Calculate electrons consumed by H2 evolution: Q_H2 = 2 * n_H2 * F. 4. Determine the Faradaic efficiency for CO2 products specifically by subtracting H2 from the total: FE_CO2 = (Q_products - Q_H2) / Q_total * 100%. 5. This distinguishes productive CO2 fixation from hydrogen-mediated electron losses.
- **Real-Time Monitoring**: 1. Implement continuous gas composition monitoring (CO2, H2, CH4) using inline analyzers. 2. Couple with continuous liquid sampling via automated HPLC for organic acid measurement. 3. Calculate instantaneous Faradaic efficiency at each time point. 4. This approach captures dynamic changes in efficiency during biofilm development, substrate depletion, or operational perturbations.

## Affecting Factors

### Primary

- **Cathode Potential**: Optimal potential range (-0.6 to -0.9 V vs. SHE) maximizes electron delivery to CO2-fixing microorganisms. Too negative potentials (<-1.0 V) favor abiotic H2 evolution, reducing Faradaic efficiency for CO2 products.
- **Microbial Community Composition**: Pure cultures of efficient acetogens (Sporomusa ovata) can achieve >85% Faradaic efficiency, while mixed communities with methanogens or sulfate reducers divert electrons to competing pathways.
- **Electron Transfer Mechanism**: Direct electron transfer from cathode to microorganism is generally more efficient than indirect transfer via hydrogen. Electrode surface properties and microbial attachment influence the dominant mechanism.
- **Product Accumulation**: High concentrations of products (e.g., >10 g/L acetate) can thermodynamically or kinetically inhibit further CO2 reduction, lowering Faradaic efficiency.
- **Current Density**: Very high current densities may exceed the biological consumption capacity, forcing excess electrons into H2 evolution.
- **Membrane Crossover**: Product diffusion through the separator to the anode compartment causes re-oxidation losses that effectively reduce apparent Faradaic efficiency.
- **Dissolved Oxygen Intrusion**: Even trace oxygen at the cathode consumes electrons abiotically and inhibits strict anaerobes, reducing efficiency.

## Related Parameters

- **name**: CO2 Capture Rate

- **relationship**: Faradaic efficiency multiplied by current density gives the effective CO2 fixation rate.
- **name**: CO2 Conversion Product

- **relationship**: The specific product determines the stoichiometric electron requirement used in Faradaic efficiency calculations.
- **name**: Product Selectivity

- **relationship**: Closely related but distinct; selectivity is among CO2 products only, while Faradaic efficiency includes all electron sinks.
- **name**: Coulombic Efficiency

- **relationship**: The analogous parameter for the anode side (substrate to electrons), while Faradaic efficiency describes the cathode side (electrons to products).
- **name**: Current Density

- **relationship**: The absolute electron delivery rate, which when combined with Faradaic efficiency gives the volumetric production rate.

## Compatible Systems

Carbon Capture Applications

## References

- Jourdin, L., Freguia, S., Flexer, V., & Keller, J. (2016). Bringing high-rate, CO2-based microbial electrosynthesis closer to practical implementation through improved electrode design and operating conditions. Environmental Science & Technology, 50(4), 1982-1989.
- Marshall, C. W., Ross, D. E., Fichot, E. B., Norman, R. S., & May, H. D. (2012). Electrosynthesis of commodity chemicals by an autotrophic microbial community. Applied and Environmental Microbiology, 78(23), 8412-8420.
- Bajracharya, S., Vanbroekhoven, K., Buisman, C. J. N., Pant, D., & Strik, D. P. B. T. B. (2016). Application of gas diffusion biocathode in microbial electrosynthesis from carbon dioxide. Environmental Science and Pollution Research, 23(22), 22292-22308.
- May, H. D., Evans, P. J., & LaBelle, E. V. (2016). The bioelectrosynthesis of acetate. Current Opinion in Biotechnology, 42, 225-233.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Faradaic+Efficiency+Co2&body=**Parameter%3A**+Faradaic+Efficiency+Co2%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Ffaradaic-efficiency-co2.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Faradaic+Efficiency+Co2&body=**Parameter%3A**+Faradaic+Efficiency+Co2%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Ffaradaic-efficiency-co2.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Faradaic+Efficiency+Co2&body=**Parameter%3A**+Faradaic+Efficiency+Co2%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Ffaradaic-efficiency-co2.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
