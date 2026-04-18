# Natural Gas

Natural gas in the context of microbial electrochemical systems refers to the methane-rich gas output from bioelectrochemical processes, the natural gas displacement achieved by MES-generated biogas, or the natural gas energy equivalent used as a benchmark for evaluating the energy output of integrated MES installations. In electromethanogenesis (MEC-based methane production), CO2 is reduced to methane at the biocathode, producing a renewable natural gas (biomethane) that can substitute for fossil natural gas in heating, power generation, or injection into the gas grid.

The production of renewable natural gas through microbial electrochemical pathways represents a potentially transformative application of MES technology. Electromethanogenic MECs use electrical energy (from renewable sources such as solar or wind) to drive the cathodic reduction of CO2 to CH4 by hydrogenotrophic or electromethanogenic archaea. This power-to-gas conversion enables storage of intermittent renewable electricity as chemical energy in the natural gas infrastructure, providing seasonal-scale energy storage that is impossible with batteries. The methane produced is chemically identical to fossil natural gas and can use existing pipeline, storage, and end-use infrastructure without modification.

At the system integration level, natural gas serves as both a product and an energy benchmark. MES installations treating organic wastes can produce biogas containing 60-70% CH4, which after upgrading to pipeline quality (>95% CH4) has a market value of approximately 3-8 USD/GJ. The natural gas offset value provides a common economic basis for comparing MES energy output against conventional anaerobic digestion and other waste-to-energy technologies. The parameter also factors into lifecycle carbon accounting, where renewable natural gas displacing fossil natural gas receives carbon credits proportional to the avoided fossil CO2 emissions.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Integration Scaling |
| **Subcategory** | Utility Requirements |
| **Type** | number |
| **Unit** | m³/h |
| **Minimum** | 0 |
| **Maximum** | 1000 |

## Typical Values

- **Valid Range**: 0 to 1000 L CH4/m^3/d
- **Electromethanogenesis (MEC)**: 0.1 to 50 L CH4/L_reactor/d
- **MFC Biogas Production**: 0.01 to 5 L CH4/L_reactor/d
- **Methane Content**: 60% to 95% in raw biogas (>95% after upgrading)
- **Energy Value**: 35.8 MJ/m^3 CH4 (higher heating value)
- **Natural Gas Displacement**: 0.1 to 10 m^3 NG equivalent per m^3 wastewater treated

## Measurement Methods

- **Gas Volume and Composition Measurement**: 1. Collect all gaseous output from the MES reactor in a calibrated gas collection system (water displacement, gas bag, or wet gas meter). 2. Measure total gas volume at standard temperature and pressure (STP: 0 degrees C, 1 atm). 3. Analyze gas composition by gas chromatography with thermal conductivity detector (GC-TCD). 4. Calculate methane volume: V_CH4 = V_total * fraction_CH4. 5. Convert to natural gas equivalent using the energy content ratio (if biogas CH4 purity differs from pipeline quality).
- **Methane Production Rate**: 1. Monitor gas production continuously using an automated gas counter or mass flow meter. 2. Sample gas composition at regular intervals (minimum every 4 hours for dynamic systems). 3. Calculate the methane production rate: MPR = V_CH4 / (V_reactor * t). 4. Normalize to standard conditions and report in L CH4/L/d or m^3 CH4/m^3/d.
- **Energy Equivalence Calculation**: 1. Measure the total methane produced over the evaluation period. 2. Calculate the energy content: E = V_CH4 * 35.8 MJ/m^3 (at STP). 3. Convert to natural gas equivalent: NGE = E / (energy content of pipeline natural gas). 4. Compare against the natural gas that would be required for equivalent thermal or electrical energy generation to determine the displacement potential.

## Affecting Factors

### Primary

- **Cathode Potential**: Electromethanogenesis requires cathode potentials below -0.4 V vs. SHE. More negative potentials (-0.7 to -1.0 V) increase methane production but also increase energy input.
- **Methanogenic Community**: Hydrogenotrophic methanogens (Methanobacterium, Methanobrevibacter) and potential direct electron-consuming methanogens (Methanosaeta) determine the biological methane production capacity.
- **CO2 Availability**: Adequate CO2 supply is essential for cathodic methanogenesis. Carbon limitation reduces methane yield and diverts electrons to hydrogen.
- **Temperature**: Methanogenic activity is highly temperature-dependent, with mesophilic (35-37 degrees C) and thermophilic (50-55 degrees C) optima.
- **pH**: Optimal methanogenic activity occurs at pH 6.8-7.5. Deviations suppress methanogenesis.
- **Trace Nutrient Availability**: Methanogens require specific cofactors (nickel, cobalt, molybdenum) for enzymatic activity. Deficiencies limit methane production.
- **Organic Loading Rate**: In systems with both anodic and cathodic methanogenesis, OLR influences the relative contribution of each pathway to total methane output.

## Related Parameters

- **name**: Biogas Production

- **relationship**: The total gas output including methane, CO2, and trace gases.
- **name**: CO2 Capture Rate

- **relationship**: The rate of CO2 conversion, which in electromethanogenesis systems equals the stoichiometric requirement for methane production.
- **name**: Faradaic Efficiency (CO2)

- **relationship**: The electron efficiency of converting current to methane at the cathode.
- **name**: Renewable Fraction

- **relationship**: Methane from MES is classified as renewable energy, contributing to the overall renewable fraction.
- **name**: Energy Per Volume

- **relationship**: Natural gas output contributes to the total energy recovery per unit volume of treated wastewater.

## Compatible Systems

Infrastructure Requirements

## References

- Cheng, S., Xing, D., Call, D. F., & Logan, B. E. (2009). Direct biological conversion of electrical current into methane by electromethanogenesis. Environmental Science & Technology, 43(10), 3953-3958.
- Van Eerten-Jansen, M. C. A. A., Heijne, A. T., Buisman, C. J. N., & Hamelers, H. V. M. (2012). Microbial electrolysis cells for production of methane from CO2: long-term performance and perspectives. International Journal of Energy Research, 36(6), 809-819.
- Villano, M., Aulenta, F., Ciucci, C., Ferri, T., Giuliano, A., & Majone, M. (2010). Bioelectrochemical reduction of CO2 to CH4 via direct and indirect extracellular electron transfer by a hydrogenophilic methanogenic culture. Bioresource Technology, 101(9), 3085-3090.
- Siegert, M., Yates, M. D., Call, D. F., Zhu, X., Spormann, A., & Logan, B. E. (2014). Comparison of nonprecious metal cathode materials for methane production by electromethanogenesis. ACS Sustainable Chemistry & Engineering, 2(4), 910-917.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Natural+Gas&body=**Parameter%3A**+Natural+Gas%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fnatural-gas.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Natural+Gas&body=**Parameter%3A**+Natural+Gas%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fnatural-gas.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Natural+Gas&body=**Parameter%3A**+Natural+Gas%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fnatural-gas.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
