# Trace Gas H2S

Hydrogen sulfide (H2S) trace gas concentration measures the presence of this toxic, corrosive, and electrochemically active gas in the headspace and dissolved phase of microbial electrochemical systems (MES). H2S is produced by sulfate-reducing bacteria (SRB) in anaerobic MES environments and is a significant concern because it poisons platinum and other noble metal cathode catalysts, corrodes metallic components, inhibits methanogenic archaea and some electroactive bacteria at elevated concentrations, and poses severe safety hazards to operators. Simultaneously, H2S can serve as an electron donor at MES anodes, enabling sulfide-driven electricity generation from sulfur-rich wastewaters.

In MES treating sulfate-containing wastewaters (municipal: 20-200 mg/L SO4^2-; industrial: 200-5000 mg/L SO4^2-), sulfate-reducing bacteria (Desulfovibrio, Desulfobulbus, Desulfobacter) couple sulfate reduction to organic matter oxidation, producing H2S as the terminal sulfur product. The competition between SRB and electroactive bacteria (EAB) for available organic substrate determines the partitioning of electrons between sulfide production and current generation. At sulfate/COD ratios above 0.5 g SO4^2-/g COD, SRB can divert 30-70% of available electrons to sulfate reduction, significantly reducing coulombic efficiency and generating problematic H2S concentrations of 50-5000 ppm in the headspace.

H2S exists in pH-dependent speciation equilibrium: H2S (molecular, toxic, volatile) <-> HS- (bisulfide ion) <-> S^2- (sulfide ion). At pH 7.0, approximately 50% exists as H2S and 50% as HS-. Below pH 6.0, more than 90% is volatile H2S, maximizing headspace concentrations and corrosion risk. Above pH 8.0, less than 10% is H2S, reducing gas-phase toxicity but maintaining dissolved sulfide toxicity to biological systems. Cathode catalyst poisoning by sulfide occurs through irreversible adsorption of sulfur species onto platinum active sites, reducing ORR activity by 50-90% at dissolved sulfide concentrations as low as 1-10 mg/L.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Environmental |
| **Subcategory** | Gas Composition |
| **Type** | number |
| **Unit** | ppm |
| **Minimum** | 0 |
| **Maximum** | 1000 |

## Typical Values

- **Valid Range**: 0 - 100,000 ppm (0-10% by volume)
- **Typical Range in MES headspace**: 1 - 5000 ppm
- **Atmospheric background**: less than 0.001 ppm
- **Odor threshold (rotten eggs)**: 0.02-0.13 ppm
- **Occupational exposure limit (OSHA PEL)**: 20 ppm (ceiling)
- **Immediately dangerous to life (IDLH)**: 100 ppm
- **Dissolved H2S at equilibrium (25 degrees C, 100 ppm gas)**: approximately 0.5 mg/L
- **SRB inhibition threshold**: more than 200 mg/L total sulfide
- **Pt catalyst poisoning threshold**: more than 1 mg/L dissolved sulfide

## Measurement Methods

- **Electrochemical Gas Sensors**: Amperometric H2S sensors (Membrapor H2S/C-50, City Technology 7H) provide real-time monitoring of gas-phase H2S from 0.1 to 500 ppm with resolution of 0.1 ppm and response time (T90) of 15-30 seconds. Three-electrode configurations with selective membranes minimize cross-sensitivity to other reducing gases (CO, H2, SO2). Sensor lifetime is 12-24 months, with performance degradation from long-term exposure to high H2S concentrations (above 100 ppm). For headspace monitoring, the sensor is installed in a flow cell with continuous gas sampling at 50-200 mL/min.
- **Lead Acetate Test Strips**: Semi-quantitative H2S detection uses lead acetate paper (Gastec, Draeger) that darkens from white to brown-black upon exposure to H2S (PbAc2 + H2S -> PbS + 2HAc). Detection range is 1-100 ppm with visual color comparison or 0.1-200 ppm with reflectometric readout. This method is inexpensive and suitable for screening, but provides only instantaneous spot measurements and has limited accuracy (20-50%). It remains widely used for rapid safety checks and qualitative H2S presence confirmation.
- **Methylene Blue Spectrophotometric Method**: The standard method for dissolved sulfide analysis (APHA Standard Method 4500-S^2- D) traps H2S as zinc sulfide (by adding zinc acetate to prevent oxidation), then reacts with N,N-dimethyl-p-phenylenediamine and ferric chloride to form methylene blue. Absorbance at 664 nm is proportional to total sulfide concentration from 0.02 to 20 mg/L. The method is specific for sulfide (minimal interference from sulfate, sulfite, thiosulfate) and provides reference-quality quantification with accuracy of 2-5%. Analysis time is 30-60 minutes including color development.

## Affecting Factors

### Primary

- **Sulfate concentration and SO4/COD ratio**: Sulfate is the electron acceptor for SRB. At sulfate concentrations below 50 mg/L, H2S production is substrate-limited and headspace H2S typically remains below 10 ppm. At SO4/COD ratios above 0.5, SRB outcompete methanogens and may compete significantly with electroactive bacteria, producing H2S at rates of 0.1-1 mmol/L/day. Industrial wastewaters (sulfate-rich) can produce headspace H2S exceeding 1000 ppm, requiring active scrubbing.
- **pH and sulfide speciation**: The fraction of total dissolved sulfide present as volatile H2S depends exponentially on pH: 91% at pH 6.0, 50% at pH 7.0 (pKa1 = 7.0), and 9.1% at pH 8.0. pH control above 7.5 reduces gas-phase H2S by 80% compared to pH 6.5, even at the same total sulfide concentration. However, HS- (the dominant species at high pH) still poisons catalysts and inhibits sensitive microorganisms. Maintaining pH above 7.0 is the most practical strategy for minimizing gas-phase H2S hazards.
- **Temperature**: H2S Henry's constant increases with temperature (KH = 0.087 mol/L/atm at 20 degrees C, 0.12 at 30 degrees C), reducing dissolved H2S and increasing gas-phase H2S as temperature rises. SRB metabolic rates increase 2-3x between 20 and 35 degrees C, accelerating H2S production. The combined effect is that warm-temperature operation (30-37 degrees C) produces 3-5x higher headspace H2S than cold operation (10-15 degrees C).
- **Electrode material and catalyst sensitivity**: Platinum group metals are severely poisoned by sulfide adsorption (50% activity loss at 1-10 mg/L dissolved sulfide). Non-precious metal cathode catalysts (activated carbon, iron-nitrogen-carbon, manganese oxide) show higher sulfide tolerance, maintaining more than 70% activity up to 50-100 mg/L dissolved sulfide. Carbon-based electrodes are essentially sulfide-tolerant, making them preferred for sulfide-rich wastewater applications. Sulfide-tolerant catalyst development is an active research area.
- **Gas headspace management**: Continuous purging with N2 or CO2 dilutes and removes H2S from the headspace. Scrubbing through iron sponge (Fe2O3 on wood chips), NaOH solution, or activated carbon removes H2S before gas venting. Biodesulfurization using sulfur-oxidizing bacteria (Thiobacillus) in a separate bioreactor converts H2S to elemental sulfur. The choice of removal method depends on H2S concentration, flow rate, and acceptable residual level.

## Compatible Systems

Atmospheric Ambient Conditions

## References

- Rabaey, K., et al. (2006). Cathodic oxygen reduction catalyzed by bacteria in microbial fuel cells. *ISME Journal*, 2, 519-527.
- Luo, H., Liu, G., Zhang, R., & Jin, S. (2009). Phenol degradation in microbial fuel cells. *Chemical Engineering Journal*, 147(2-3), 259-264.
- Cai, J., Zheng, P., & Mahmood, Q. (2015). Effect of sulfide to nitrate ratios on the simultaneous anaerobic sulfide and nitrate removal. *Bioresource Technology*, 193, 400-407.
- Sun, M., et al. (2009). Electricity generation and microbial community changes in microbial fuel cells packed with different anodic materials. *Bioresource Technology*, 102(23), 10886-10891.
- Hao, O. J., Chen, J. M., Huang, L., & Buglass, R. L. (1996). Sulfate-reducing bacteria. *Critical Reviews in Environmental Science and Technology*, 26(2), 155-187.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Trace+Gas+H2S&body=**Parameter%3A**+Trace+Gas+H2S%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Ftrace-gas-h2s.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Trace+Gas+H2S&body=**Parameter%3A**+Trace+Gas+H2S%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Ftrace-gas-h2s.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Trace+Gas+H2S&body=**Parameter%3A**+Trace+Gas+H2S%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Ftrace-gas-h2s.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
