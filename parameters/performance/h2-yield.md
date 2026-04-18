# H2 Yield

Hydrogen yield quantifies the moles of hydrogen gas (H2) produced per mole of organic substrate consumed in a microbial electrolysis cell (MEC) or other hydrogen-producing microbial electrochemical system (MES). This stoichiometric parameter provides a substrate-normalized measure of the completeness of organic-to-hydrogen conversion, allowing comparison of different substrates, reactor configurations, and operating conditions on a common basis.

The theoretical maximum H2 yield depends on the substrate. For acetate (CH3COO-), complete oxidation produces 4 moles of H2 per mole of acetate: CH3COO- + 4H2O -> 2HCO3- + 9H+ + 8e-, with 8 electrons producing 4 H2. For glucose (C6H12O6), the theoretical maximum is 12 mol H2/mol glucose. Practical yields are always lower than theoretical due to: electrons diverted to biomass growth (10-20% of substrate electrons), competing metabolisms (methanogenesis, homoacetogenesis), hydrogen recycling by hydrogen-consuming organisms, and incomplete substrate oxidation.

H2 yield is a critical parameter for assessing MEC economic viability because it determines the mass of substrate needed per kilogram of hydrogen produced. At the theoretical maximum yield of 4 mol H2/mol acetate, producing 1 kg of H2 requires 7.4 kg of acetate-COD. At practical yields of 2-3 mol/mol, 10-15 kg COD is needed, which still represents an efficient use of wastewater organic matter for valuable hydrogen production.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Performance |
| **Subcategory** | Hydrogen Production |
| **Type** | number |
| **Unit** | mol/mol |
| **Minimum** | 0 |
| **Maximum** | 4 |
| **Papers Reporting** | 8 |

## Typical Values

- **Valid Range**: 0 mol/mol to 4 mol/mol (acetate basis)
- **Typical Range**: 1.5 mol/mol to 3.5 mol/mol (acetate basis)
- **MEC (acetate, optimized lab)**: 3.0-3.9 mol H2/mol acetate
- **MEC (acetate, with methanogenic loss)**: 2.0-3.0 mol H2/mol acetate
- **MEC (domestic wastewater)**: 0.5-2.0 mol H2/mol substrate equivalent
- **MEC (cellulose)**: 1.0-3.0 mol H2/mol glucose equivalent
- **Dark fermentation alone (comparison)**: 1.0-2.5 mol H2/mol glucose (max 4 theoretical)
- **Dark fermentation + MEC (combined)**: 8-10 mol H2/mol glucose
- **Overall H2 recovery (cathodic recovery x CE)**: 60-90% of theoretical

## Measurement Methods

- **Gas Collection and GC Analysis**: H2 is collected from the MEC headspace or cathode chamber in gas-tight bags (Tedlar, Cali-5-Bond) or by water displacement. Volume is measured by displacement or calibrated syringe. Composition is analyzed by gas chromatography (TCD detector, molecular sieve column) to determine H2 purity and volume. Substrate consumption is measured as COD or specific substrate depletion. Yield = mol H2 produced / mol substrate consumed.
- **Online H2 Sensor**: Continuous H2 flow and concentration measurement using thermal conductivity sensors, palladium-based sensors (H2Scan HY-OPTIMA), or electrochemical sensors enables real-time yield calculation. Combined with continuous influent substrate monitoring, this provides dynamic yield data.
- **Coulombic and Cathodic Efficiency**: H2 yield can be decomposed into two components: coulombic efficiency (CE, fraction of substrate electrons captured as current) and cathodic hydrogen recovery (rcat, fraction of electrons at cathode producing H2). Overall yield = CE x rcat x theoretical yield. This decomposition identifies whether yield limitations are at the anode (CE) or cathode (rcat) side.

## Affecting Factors

### Primary

- **Applied voltage**: Higher applied voltage (0.4-1.0 V) increases cathodic hydrogen recovery from 70% to >95% by providing sufficient overpotential for H2 evolution. Below 0.3 V, cathodic H2 production is negligible; above 1.0 V, water electrolysis contributes but energy efficiency drops.
- **Methanogenic competition**: Hydrogenotrophic methanogens consume cathodic H2, converting it to CH4 and reducing H2 yield by 20-80%. Suppression strategies include low pH (<5.5), heat treatment of inoculum, bromoethanesulfonate (BES) addition, or maintaining short HRT.
- **Substrate complexity**: Simple substrates (acetate, ethanol) achieve near-theoretical yields. Complex substrates (glucose, cellulose, real wastewater) require fermentation intermediates that may be incompletely converted, reducing overall yield.
- **Hydrogen recycling**: H2 produced at the cathode can diffuse to the anode where it is reoxidized by hydrogenotrophic bacteria, creating a futile cycle that reduces net H2 yield by 5-30% depending on membrane permeability and reactor geometry.
- **Coulombic efficiency**: Higher CE means more substrate electrons are captured as current and available for cathodic H2 production. CE optimization through biofilm development, minimizing oxygen intrusion, and suppressing methanogens directly improves H2 yield.

## References

1. Call, D. and Logan, B.E. "Hydrogen production in a single chamber microbial electrolysis cell lacking a membrane." Environmental Science & Technology, 42(9), 3401-3406 (2008).
2. Rozendal, R.A. et al. "Hydrogen production with a microbial biocathode." Environmental Science & Technology, 42(2), 629-634 (2008).
3. Liu, H. et al. "Electrochemically assisted microbial production of hydrogen from acetate." Environmental Science & Technology, 39(11), 4317-4320 (2005).
4. Cheng, S. and Logan, B.E. "Sustainable and efficient biohydrogen production via electrohydrogenesis." Proceedings of the National Academy of Sciences, 104(47), 18871-18873 (2007).
5. Escapa, A. et al. "Microbial electrolysis cells: An emerging technology for wastewater treatment and energy recovery." Critical Reviews in Environmental Science and Technology, 46(21-22), 1627-1670 (2016).

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+H2+Yield&body=**Parameter%3A**+H2+Yield%0A**Category%3A**+Performance%0A**File%3A**+parameters%2Fperformance%2Fh2-yield.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+H2+Yield&body=**Parameter%3A**+H2+Yield%0A**Category%3A**+Performance%0A**File%3A**+parameters%2Fperformance%2Fh2-yield.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+H2+Yield&body=**Parameter%3A**+H2+Yield%0A**Category%3A**+Performance%0A**File%3A**+parameters%2Fperformance%2Fh2-yield.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
