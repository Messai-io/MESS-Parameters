# Biogas Production

Biogas production in microbial electrochemical systems refers to the volumetric rate of gas generation from the bioelectrochemical reactor, encompassing methane, carbon dioxide, hydrogen, and trace gases produced through both intended electrochemical reactions and competing microbial metabolic pathways. Expressed as L/L_reactor/d (or normalized to electrode area, substrate loading, or current), this parameter serves as both a performance indicator and a diagnostic tool for understanding the microbial ecology and metabolic partitioning within the system.

In MFCs designed for electricity generation, biogas production represents a competing pathway that diverts organic substrate from exoelectrogenic metabolism to methanogenic or fermentative gas production. Methane production by methanogenic archaea competes directly with electrogenic bacteria for electrons from acetate and hydrogen, potentially reducing coulombic efficiency by 10-50%. Conversely, in MECs designed for hydrogen production, gas generation is the intended output, and the biogas production rate is the primary performance metric. In electromethanogenic systems, cathodic methane production from CO2 reduction is the target product, and biogas composition (CH4/CO2 ratio) indicates system selectivity.

For integrated MES systems, biogas production connects to broader energy recovery and greenhouse gas accounting. Methane has 28 times the global warming potential of CO2 over a 100-year horizon, making uncontrolled methane emissions from MFCs an environmental concern. Proper biogas management through collection and utilization (combustion, fuel cells, or grid injection after upgrading) converts a potential liability into an additional energy recovery pathway. At pilot and full scale, biogas collection and handling infrastructure adds to system complexity and cost, making accurate prediction and management of biogas production rates essential for system design.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Application Specific |
| **Subcategory** | Treatment Performance |
| **Type** | number |
| **Unit** | L/g COD |
| **Minimum** | 0 |
| **Maximum** | 0.5 |

## Typical Values

- **Valid Range**: 0 to 500 L gas/L_reactor/d
- **MFC Methane Production**: 0.01 to 1 L CH4/L/d (undesirable side reaction)
- **MEC Hydrogen Production**: 0.1 to 10 L H2/L/d
- **Electromethanogenesis**: 0.05 to 5 L CH4/L/d
- **CO2 Production (MFC anode)**: 0.1 to 5 L CO2/L/d
- **Biogas Composition (MFC)**: 30-70% CH4, 20-50% CO2, 0-10% H2, trace N2 and H2S
- **Biogas Composition (MEC)**: 50-95% H2, 5-30% CO2, 0-20% CH4

## Measurement Methods

- **Gas Collection and Analysis**: 1. Connect a gas collection system (water displacement, gas bags, or volumetric gas counters) to all gas outlets of the MES reactor. 2. Measure total gas volume at regular intervals, correcting to standard temperature and pressure (STP). 3. Analyze gas composition using gas chromatography with thermal conductivity detector (GC-TCD) for H2, CH4, CO2, N2, and O2. 4. Calculate individual gas production rates by multiplying total gas rate by the mole fraction of each component. 5. For continuous monitoring, use inline gas flow meters with automatic sampling for GC analysis.
- **Specific Gas Production Rate**: 1. Calculate gas production per unit of COD removed: Y_gas = V_gas / (delta_COD * V_reactor). 2. Calculate gas production per unit of current: Y_gas/I = V_gas / Q_total. 3. Compare against theoretical yields to assess metabolic efficiency and identify competing pathways.
- **Dissolved Gas Measurement**: 1. Measure dissolved methane and hydrogen concentrations in the reactor liquid using headspace equilibration and GC analysis. 2. Calculate total gas production including dissolved fraction: V_total = V_collected + (C_dissolved * V_liquid / rho_gas). 3. This is important because significant quantities of produced gas may remain dissolved, particularly for methane and CO2 at moderate pressures.

## Affecting Factors

### Primary

- **Organic Loading Rate**: Higher OLR provides more substrate for gas-producing microorganisms, increasing biogas production rate proportionally until saturation.
- **Microbial Community Composition**: The relative abundance of methanogens, fermenters, and electrogens determines the partitioning of substrate between electricity and gas production.
- **Reactor Configuration**: Membrane-less designs allow hydrogen recycling between cathode and anode, promoting hydrogenotrophic methanogenesis. Sealed cathode chambers maintain hydrogen purity.
- **Temperature**: Methanogenesis rate approximately doubles per 10 degrees C increase in the mesophilic range. Psychrophilic conditions (<15 degrees C) strongly suppress methanogenesis.
- **Applied Potential (MEC)**: More negative cathode potentials increase hydrogen production rate but may also stimulate electromethanogenesis.
- **Retention Time**: Longer HRT allows more complete fermentation and methanogenesis, increasing biogas production per pass.
- **pH**: Methanogenesis is optimal at pH 6.8-7.5; deviations suppress methane production while potentially favoring H2 accumulation.

## Related Parameters

- **name**: Natural Gas

- **relationship**: Methane in biogas represents the renewable natural gas component of MES output.
- **name**: Coulombic Efficiency

- **relationship**: Biogas production from competing pathways inversely correlates with CE.
- **name**: Carbon Recovery

- **relationship**: Gaseous carbon (CO2, CH4) represents one pathway for carbon recovery.
- **name**: Energy Per Volume

- **relationship**: Biogas energy content contributes to the total energy recovery per unit volume.
- **name**: Faradaic Efficiency (CO2)

- **relationship**: In electrosynthesis systems, non-target biogas production reduces the Faradaic efficiency for desired liquid products.

## Compatible Systems

Wastewater Treatment Applications

## References

- Lee, H. S., Torres, C. I., Parameswaran, P., & Rittmann, B. E. (2009). Fate of H2 in an upflow single-chamber microbial electrolysis cell using a metal-catalyst-free cathode. Environmental Science & Technology, 43(20), 7971-7976.
- Call, D., & Logan, B. E. (2008). Hydrogen production in a single chamber microbial electrolysis cell lacking a membrane. Environmental Science & Technology, 42(9), 3401-3406.
- Cheng, S., Xing, D., Call, D. F., & Logan, B. E. (2009). Direct biological conversion of electrical current into methane by electromethanogenesis. Environmental Science & Technology, 43(10), 3953-3958.
- Parameswaran, P., Torres, C. I., Lee, H. S., Krajmalnik-Brown, R., & Rittmann, B. E. (2009). Syntrophic interactions among anode respiring bacteria (ARB) and non-ARB in a biofilm anode. Biotechnology and Bioengineering, 103(3), 513-523.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Biogas+Production&body=**Parameter%3A**+Biogas+Production%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fbiogas-production.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Biogas+Production&body=**Parameter%3A**+Biogas+Production%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fbiogas-production.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Biogas+Production&body=**Parameter%3A**+Biogas+Production%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fbiogas-production.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
