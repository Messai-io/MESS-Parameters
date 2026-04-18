# Co2 Capture Rate

CO2 capture rate in microbial electrochemical systems refers to the mass or molar flux of carbon dioxide removed from a gas stream or dissolved phase per unit time, typically through bioelectrochemical reduction at the cathode or absorption into alkaline catholyte solutions generated during MES operation. This parameter is central to the emerging application of microbial electrosynthesis (MES) systems as carbon capture and utilization platforms, where CO2 serves as the electron acceptor for microbial metabolism, being reduced to valuable multi-carbon products such as acetate, butyrate, or ethanol.

In microbial electrolysis cells (MECs) and microbial electrosynthesis reactors, the CO2 capture rate is governed by the interplay between gas-liquid mass transfer, microbial catalytic activity at the cathode biofilm, and the electrochemical driving force applied to the system. The cathode potential must be sufficiently negative (typically below -0.4 V vs. SHE) to provide the thermodynamic driving force for CO2 reduction, while the microbial community must possess the appropriate metabolic pathways (such as the Wood-Ljungdahl pathway in acetogens) to fix carbon efficiently. The capture rate is therefore a composite metric reflecting both physical and biological system performance.

Scaling CO2 capture rate from laboratory to pilot scale presents significant challenges related to gas distribution uniformity, electrode surface area-to-volume ratios, and maintaining optimal conditions for electrotrophic microorganisms across larger reactor volumes. The parameter is particularly relevant for integrating MES with industrial point-source CO2 emissions or direct air capture systems, where the capture rate must be matched to the emission flux and the product formation kinetics to achieve economically viable carbon utilization.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Application Specific |
| **Subcategory** | CO₂ Reduction |
| **Type** | number |
| **Unit** | g/m²/d |
| **Minimum** | 0 |
| **Maximum** | 100 |

## Typical Values

- **Valid Range**: 0.001 to 100 g CO2 L^-1 d^-1
- **Typical Range**: 0.1 to 10 g CO2 L^-1 d^-1 for bench-scale microbial electrosynthesis
- **High-Performance Systems**: 5 to 25 g CO2 L^-1 d^-1 with optimized gas diffusion cathodes
- **Pilot-Scale Systems**: 0.05 to 2 g CO2 L^-1 d^-1 (reduced due to mass transfer limitations at scale)

## Measurement Methods

- **Gas-Phase Mass Balance**: 1. Measure influent CO2 concentration and flow rate using a calibrated mass flow controller and infrared CO2 analyzer. 2. Measure effluent CO2 concentration after passage through the reactor using the same or matched analyzer. 3. Calculate the CO2 capture rate as: Rate = (C_in * Q_in - C_out * Q_out) / V_reactor, where C is concentration, Q is flow rate, and V is reactor volume. 4. Correct for CO2 dissolution in the liquid phase using Henry's law and measured pH/temperature. 5. Perform measurements under steady-state conditions, typically after 3-5 hydraulic retention times.
- **Dissolved Inorganic Carbon (DIC) Analysis**: 1. Collect liquid samples from the catholyte at regular intervals. 2. Measure total dissolved inorganic carbon (DIC) using a TOC/TIC analyzer. 3. Calculate the rate of DIC decrease over time, accounting for product formation. 4. Combine with gas-phase measurements for a complete carbon balance.
- **Product-Based Estimation**: 1. Quantify all carbon-containing products (acetate, butyrate, methane, etc.) by GC, HPLC, or ion chromatography. 2. Calculate the total carbon fixed into products per unit time. 3. Sum with any biomass carbon accumulation (measured by VSS or protein assays). 4. The total carbon fixation rate approximates the CO2 capture rate under steady-state conditions.

## Affecting Factors

### Primary

- **Applied Cathode Potential**: More negative potentials increase the thermodynamic driving force for CO2 reduction but may also promote competing hydrogen evolution. Optimal potentials are typically -0.8 to -1.0 V vs. SHE.
- **CO2 Supply Rate and Mass Transfer**: Gas-liquid mass transfer coefficient (kLa) is often the rate-limiting step. Gas diffusion electrodes and membrane-aerated designs improve CO2 delivery.
- **Cathodic Biofilm Activity**: The density, diversity, and metabolic activity of electrotrophic microorganisms (e.g., Sporomusa ovata, Clostridium ljungdahlii) directly determine the biological CO2 fixation rate.
- **Temperature**: Most mesophilic acetogens operate optimally at 30-37 degrees C. Deviations reduce enzymatic activity and capture rate.
- **pH**: CO2 speciation is pH-dependent; at pH > 8.3, most dissolved CO2 exists as carbonate, which is less bioavailable. Optimal pH is typically 5.5-7.0 for acetogenic CO2 fixation.
- **Catholyte Composition**: Nutrient availability (N, P, trace metals) and buffer capacity affect microbial activity and pH stability.
- **Electrode Material**: Carbon-based electrodes with high surface area (carbon felt, graphite granules) support greater biofilm development and higher capture rates.

## Related Parameters

- **name**: Faradaic Efficiency (CO2)

- **relationship**: The fraction of electrical current directed toward CO2 reduction products; directly multiplied with current to predict capture rate.
- **name**: CO2 Conversion Product

- **relationship**: Identifies the specific reduced carbon products, which determines the stoichiometric relationship between electrons consumed and CO2 captured.
- **name**: Product Selectivity

- **relationship**: Determines which CO2 reduction products dominate, affecting the overall carbon efficiency.
- **name**: Current Density

- **relationship**: Sets the maximum electron supply rate for CO2 reduction, establishing the theoretical upper bound on capture rate.
- **name**: Energy Per Volume

- **relationship**: The energy input required per unit volume, which determines the energetic cost of CO2 capture.

## Compatible Systems

Carbon Capture Applications

## References

- Nevin, K. P., Woodard, T. L., Franks, A. E., Summers, Z. M., & Lovley, D. R. (2010). Microbial electrosynthesis: feeding microbes electricity to convert carbon dioxide and water to multicarbon extracellular organic compounds. mBio, 1(2), e00103-10.
- Jourdin, L., Freguia, S., Donose, B. C., Chen, J., Wallace, G. G., Keller, J., & Flexer, V. (2014). A novel carbon nanotube modified scaffold as an efficient biocathode material for improved microbial electrosynthesis. Journal of Materials Chemistry A, 2(32), 13093-13102.
- Bajracharya, S., Srikanth, S., Mohanakrishna, G., Zacharia, R., Strik, D. P. B. T. B., & Pant, D. (2017). Biotransformation of carbon dioxide in bioelectrochemical systems: State of the art and future prospects. Journal of Power Sources, 356, 256-273.
- Aryal, N., Tremblay, P. L., Lizak, D. M., & Zhang, T. (2017). Performance of different Sporomusa species for the microbial electrosynthesis of acetate from carbon dioxide. Bioresource Technology, 233, 184-190.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Co2+Capture+Rate&body=**Parameter%3A**+Co2+Capture+Rate%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fco2-capture-rate.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Co2+Capture+Rate&body=**Parameter%3A**+Co2+Capture+Rate%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fco2-capture-rate.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Co2+Capture+Rate&body=**Parameter%3A**+Co2+Capture+Rate%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fco2-capture-rate.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
