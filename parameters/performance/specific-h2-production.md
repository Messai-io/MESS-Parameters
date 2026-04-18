# Specific H2 Production

Specific hydrogen production quantifies the volume of hydrogen gas produced per unit mass of substrate consumed in a microbial electrolysis cell (MEC), expressed in cubic meters of H2 at standard conditions per kilogram of substrate (m^3 H2/kg substrate). This mass-normalized parameter enables direct comparison of hydrogen production efficiency across different substrates, reactor configurations, and operating conditions, and is essential for process economics calculations where substrate cost is a dominant operating expense.

Unlike H2 yield (mol/mol), which is useful for mechanistic understanding, specific H2 production expressed in volumetric or mass terms is more practical for engineering design and economic analysis. It directly relates substrate input (measured as COD, VS, or dry mass) to product output (measured as gas volume), enabling calculation of substrate cost per unit of hydrogen produced and comparison with alternative hydrogen production pathways (steam methane reforming, water electrolysis, dark fermentation).

The theoretical maximum specific H2 production for complete oxidation of organic matter is approximately 0.35 m^3 H2/kg COD removed (at STP), based on 8 electrons per mol COD and stoichiometric conversion to H2. Practical values are typically 40-85% of this theoretical maximum, with losses to methanogenic hydrogen consumption, biomass growth, incomplete substrate oxidation, and cathodic losses.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Performance |
| **Subcategory** | Hydrogen Production |
| **Type** | number |
| **Unit** | m³/kg |
| **Minimum** | 0 |
| **Maximum** | 10 |

## Typical Values

- **Valid Range**: 0 m^3/kg to 10 m^3/kg
- **Typical Range**: 0.05 m^3/kg to 0.5 m^3/kg
- **MEC (acetate, per kg COD removed)**: 0.15-0.30 m^3 H2/kg COD
- **MEC (domestic wastewater, per kg COD)**: 0.05-0.15 m^3 H2/kg COD
- **MEC (glycerol waste, per kg substrate)**: 0.10-0.35 m^3/kg
- **MEC (winery wastewater, per kg COD)**: 0.08-0.20 m^3/kg COD
- **Dark fermentation (glucose, comparison)**: 0.05-0.15 m^3/kg glucose
- **Dark fermentation + MEC (combined)**: 0.30-0.60 m^3/kg glucose
- **Theoretical maximum (per kg COD)**: 0.35 m^3 H2/kg COD
- **Steam methane reforming (comparison)**: 0.50 m^3 H2/kg CH4

## Measurement Methods

- **Gas Collection with Substrate Mass Balance**: Hydrogen gas is collected and measured (water displacement, gas bag + gas meter, or mass flow controller). Substrate consumption is measured as COD removed (influent COD - effluent COD) x flow rate for continuous systems, or as initial minus final COD for batch systems. Specific production = total H2 volume (at STP) / total substrate mass consumed (as kg COD or kg dry weight).
- **Continuous Gas Monitoring**: Online H2 flow measurement (thermal mass flow meter or wet test meter) combined with continuous influent/effluent COD monitoring (UV analyzer or online titration) provides real-time specific production data. This captures transient behavior and enables process optimization.
- **Stoichiometric Calculation from Electrical Data**: Specific H2 production can be estimated from electrical measurements: H2 volume = (I x t x Vm) / (n x F), where I is current, t is time, Vm is molar volume (22.4 L/mol at STP), n = 2 electrons per H2, and F is Faraday's constant. Combined with coulombic efficiency and substrate consumption data, this provides a continuous estimate.

## Affecting Factors

### Primary

- **Applied voltage**: Higher applied voltage increases cathodic H2 recovery (rcat from 70% at 0.4 V to >95% at 0.8 V) but also increases energy input. The optimal voltage balances H2 yield against energy efficiency.
- **Substrate biodegradability**: Complex substrates (particulate matter, lignocellulose) are incompletely oxidized by anode biofilm, reducing the fraction of COD converted to electrons and lowering specific H2 production. Pre-hydrolysis or pre-fermentation improves utilization.
- **Methanogenic scavenging**: Hydrogenotrophic methanogens in single-chamber MECs consume 20-80% of cathodic H2, drastically reducing specific production. Membrane separation, low pH, or methanogen inhibitors mitigate this loss.
- **Coulombic efficiency**: CE determines the fraction of removed COD that generates current for H2 production. CE of 30% on domestic wastewater versus 80% on acetate explains the 2-3x difference in specific H2 production.
- **Temperature**: Higher temperature (25-35 deg C) increases microbial activity and CE, improving specific H2 production by 30-80% compared to 10-15 deg C operation.

## References

1. Call, D. and Logan, B.E. "Hydrogen production in a single chamber microbial electrolysis cell lacking a membrane." Environmental Science & Technology, 42(9), 3401-3406 (2008).
2. Cheng, S. and Logan, B.E. "Sustainable and efficient biohydrogen production via electrohydrogenesis." Proceedings of the National Academy of Sciences, 104(47), 18871-18873 (2007).
3. Cusick, R.D. et al. "Performance of a pilot-scale continuous flow microbial electrolysis cell fed winery wastewater." Applied Microbiology and Biotechnology, 89, 2053-2063 (2011).
4. Escapa, A. et al. "Microbial electrolysis cells: An emerging technology for wastewater treatment and energy recovery." Critical Reviews in Environmental Science and Technology, 46(21-22), 1627-1670 (2016).
5. Lu, L. et al. "Hydrogen production, methanogen inhibition and microbial community structures in psychrophilic single-chamber microbial electrolysis cells." Energy & Environmental Science, 4(4), 1329-1336 (2011).

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Specific+H2+Production&body=**Parameter%3A**+Specific+H2+Production%0A**Category%3A**+Performance%0A**File%3A**+parameters%2Fperformance%2Fspecific-h2-production.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Specific+H2+Production&body=**Parameter%3A**+Specific+H2+Production%0A**Category%3A**+Performance%0A**File%3A**+parameters%2Fperformance%2Fspecific-h2-production.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Specific+H2+Production&body=**Parameter%3A**+Specific+H2+Production%0A**Category%3A**+Performance%0A**File%3A**+parameters%2Fperformance%2Fspecific-h2-production.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
