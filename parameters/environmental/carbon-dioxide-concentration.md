# Carbon Dioxide Concentration

Carbon dioxide (CO2) concentration in the context of microbial electrochemical systems (MES) refers to the amount of CO2 present in the gas phase surrounding or supplied to the reactor, as well as its dissolved concentration in the electrolyte. CO2 is arguably the most critical environmental gas parameter for MES, serving as the primary carbon source for microbial electrosynthesis and a key product or intermediate in many bioelectrochemical processes including microbial fuel cells (MFCs) and microbial electrolysis cells (MECs).

In microbial electrosynthesis, CO2 is reduced at the biocathode by electroautotrophic microorganisms such as *Sporomusa ovata*, *Clostridium ljungdahlii*, and acetogenic mixed cultures. These organisms utilize electrons supplied by the cathode to fix CO2 through the Wood-Ljungdahl pathway, producing acetate, ethanol, butyrate, and other multi-carbon compounds. The CO2 concentration in both the gas phase and dissolved phase directly determines the rate of carbon fixation, as substrate limitation occurs when dissolved CO2/bicarbonate falls below the half-saturation constant of carbon-fixing enzymes.

The CO2 environment also profoundly affects pH buffering in MES. Dissolved CO2 establishes the carbonate buffer system (CO2/HCO3-/CO32-), which is often the dominant pH buffer in MES electrolytes. Changes in CO2 concentration shift the carbonate equilibrium, directly affecting electrolyte pH and consequently microbial activity, enzyme function, and electrochemical reaction kinetics. Managing CO2 supply rate, concentration, and mass transfer is therefore central to optimizing both the biological and electrochemical performance of MES.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Environmental |
| **Subcategory** | Gas Composition |
| **Type** | number |
| **Unit** | ppm |
| **Minimum** | 0 |
| **Maximum** | 50000 |

## Typical Values

- **Valid Range**: 0 to 1,000,000 ppm (0 to 100% v/v)
- **Typical Range (Ambient)**: 400 to 450 ppm (current atmospheric)
- **Typical Range (MES Feed Gas)**: 10,000 to 200,000 ppm (1% to 20% v/v)
- **Pure CO2 Feed**: 1,000,000 ppm (100% v/v)
- **Dissolved CO2 at Saturation (25C, 1 atm)**: ~33.8 mmol/L
- **Typical Dissolved CO2 in MES Catholyte**: 5 to 30 mmol/L

## Measurement Methods

- **Non-Dispersive Infrared (NDIR) Gas Analysis**: NDIR analyzers exploit the strong infrared absorption of CO2 at 4.26 micrometers. Modern NDIR sensors provide accuracy of +/- 30-50 ppm at ambient levels and +/- 1-2% of reading at higher concentrations. Response times are typically 15-30 seconds, suitable for continuous online monitoring of MES gas streams. The method is robust, requires minimal maintenance, and can operate over wide concentration ranges from ppm to percent levels.
- **Dissolved CO2 Electrodes (Severinghaus Type)**: The Severinghaus electrode measures dissolved CO2 by detecting pH changes in an internal bicarbonate solution separated from the sample by a gas-permeable membrane. As dissolved CO2 diffuses across the membrane, it equilibrates with the internal solution, altering its pH proportionally to the CO2 partial pressure. These electrodes provide direct dissolved CO2 measurements with typical ranges of 0.1 to 200 mmol/L and response times of 1-3 minutes.
- **Gas Chromatography**: GC with thermal conductivity detection (TCD) provides precise quantification of CO2 in complex gas mixtures. Using a packed column (Porapak Q or Hayesep D), CO2 is separated from other gases and quantified against calibration standards. Detection limits are typically 50-100 ppm with excellent reproducibility.
- **Titration (Total Inorganic Carbon)**: For dissolved carbonate species, acid-base titration combined with total inorganic carbon (TIC) analysis provides accurate quantification of total dissolved CO2 including all carbonate species. The sample is acidified to convert all carbonate species to CO2, which is then quantified by NDIR or conductometric detection.

## Affecting Factors

### Primary

- **Gas Supply Rate and Composition**: The flow rate and CO2 content of the feed gas directly determine CO2 availability. Higher flow rates increase mass transfer but may strip other dissolved gases. Flue gas (10-15% CO2), biogas (30-50% CO2), and pure CO2 provide different concentration ranges.
- **pH and Carbonate Equilibrium**: At pH < 6.4, dissolved inorganic carbon exists primarily as CO2(aq). At pH 6.4-10.3, bicarbonate dominates. At pH > 10.3, carbonate prevails. Since most MES operate at pH 6.5-7.5, the speciation between CO2(aq) and HCO3- is critically pH-dependent.
- **Temperature**: CO2 solubility decreases with increasing temperature (Henry's Law constant increases), reducing dissolved CO2 availability at elevated temperatures commonly used for thermophilic MES.
- **Microbial Consumption Rate**: Active CO2-fixing communities can consume dissolved CO2 faster than it is replenished by mass transfer, creating CO2-limited conditions near the biofilm-electrode interface.
- **Salinity and Ionic Strength**: High salt concentrations reduce CO2 solubility (salting-out effect), relevant for MES treating saline wastewaters or using concentrated electrolytes.
- **Gas-Liquid Mass Transfer Coefficient (kLa)**: Sparger design, bubble size, mixing intensity, and reactor geometry determine how efficiently gas-phase CO2 is transferred to the liquid phase.
- **Biofilm Thickness**: Thick cathodic biofilms may create CO2 diffusion limitations, resulting in concentration gradients within the biofilm that affect overall carbon fixation rates.
- **Pressure**: Higher system pressures increase CO2 solubility proportionally via Henry's Law, which can be exploited in pressurized MES designs.

## Related Parameters

- **name**: Partial Pressure CO2

- **relationship**: The thermodynamic driving force for CO2 dissolution and the equilibrium dissolved concentration.
- **name**: pH

- **relationship**: CO2 and pH are intimately coupled through the carbonate buffer system; changes in one immediately affect the other.
- **name**: Temperature

- **relationship**: Determines CO2 solubility and microbial metabolic rates for CO2 fixation.
- **name**: Oxygen Concentration

- **relationship**: Aerobic conditions inhibit many CO2-fixing acetogens.
- **name**: Cathode Potential

- **relationship**: Determines the thermodynamic and kinetic driving force for electrochemical CO2 reduction.

## Compatible Systems

Atmospheric Ambient Conditions

## References

- Nevin, K.P., Woodard, T.L., Franks, A.E., et al. (2010). Microbial electrosynthesis: feeding microbes electricity to convert carbon dioxide and water to multicarbon extracellular organic compounds. *mBio*, 1(2), e00103-10.
- May, H.D., Evans, P.J., & LaBelle, E.V. (2016). The bioelectrosynthesis of acetate. *Current Opinion in Biotechnology*, 42, 225-233.
- Jourdin, L., Freguia, S., Donose, B.C., et al. (2014). A novel carbon nanotube modified scaffold as an efficient biocathode material for improved microbial electrosynthesis. *Journal of Materials Chemistry A*, 2(32), 13093-13102.
- Sander, R. (2015). Compilation of Henry's law constants (version 4.0) for water as solvent. *Atmospheric Chemistry and Physics*, 15, 4399-4981.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Carbon+Dioxide+Concentration&body=**Parameter%3A**+Carbon+Dioxide+Concentration%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fcarbon-dioxide-concentration.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Carbon+Dioxide+Concentration&body=**Parameter%3A**+Carbon+Dioxide+Concentration%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fcarbon-dioxide-concentration.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Carbon+Dioxide+Concentration&body=**Parameter%3A**+Carbon+Dioxide+Concentration%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fcarbon-dioxide-concentration.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
