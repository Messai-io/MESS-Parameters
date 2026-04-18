# Initial Substrate Conc

Initial substrate concentration is the organic matter concentration in the feed solution at the start of a batch cycle or in the influent stream of a continuously operated microbial electrochemical system (MES). Typically expressed as chemical oxygen demand (COD, mg/L), biological oxygen demand (BOD, mg/L), or as a specific substrate concentration (e.g., mg acetate/L, mM glucose), this parameter determines the total electron donor availability for electrogenesis and is the primary determinant of organic loading rate, energy recovery potential, and treatment requirements.

The initial substrate concentration directly controls the theoretical maximum charge (coulombs) recoverable per batch cycle through the stoichiometric relationship: Q_max = F * b * V * S / M, where F is Faraday's constant, b is the number of electrons per mole of substrate, V is the liquid volume, S is the substrate concentration, and M is the molecular weight. For sodium acetate (the most common MFC substrate), complete oxidation yields 8 mol electrons per mol, corresponding to 32 mg COD per mmol. A 1 g/L COD solution in a 28 mL reactor provides a theoretical maximum charge of approximately 27 coulombs.

Substrate concentration also affects microbial kinetics through Monod-type saturation kinetics. Below the half-saturation constant (K_s, typically 20--200 mg COD/L for electroactive biofilms), current generation is substrate-limited and scales approximately linearly with concentration. Above K_s, current generation approaches a plateau. Very high concentrations (> 5 g COD/L) can inhibit microbial activity through osmotic stress, VFA accumulation, or specific toxicity.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Operational |
| **Subcategory** | Startup Procedures |
| **Type** | number |
| **Unit** | g/L |
| **Minimum** | 0.1 |
| **Maximum** | 10 |
| **Papers Reporting** | 15 |

## Typical Values

- **Valid Range**: 10 -- 100000 mg COD/L
- **Defined medium (acetate)**: 100 -- 2000 mg COD/L
- **Domestic wastewater (raw)**: 200 -- 800 mg COD/L
- **Primary effluent**: 100 -- 350 mg COD/L
- **Brewery wastewater**: 2000 -- 6000 mg COD/L
- **Food processing wastewater**: 1000 -- 50000 mg COD/L
- **Dairy wastewater**: 2000 -- 10000 mg COD/L
- **Landfill leachate**: 1000 -- 80000 mg COD/L
- **Half-saturation constant (K_s) for Geobacter biofilm**: 20 -- 200 mg COD/L

## Measurement Methods

- **Chemical Oxygen Demand (COD)**: Standard Method APHA 5220D (closed reflux colorimetric): Sample is digested with potassium dichromate in sulfuric acid at 150 C for 2 hours. COD is measured spectrophotometrically at 600 nm (high range) or 420 nm (low range). Commercial test kits (Hach, Merck) provide single-tube convenience. Precision: +/- 5 mg/L (low range), +/- 20 mg/L (high range). Range: 3--15000 mg/L with appropriate dilutions.
- **Specific Substrate Analysis (HPLC)**: High-performance liquid chromatography with an Aminex HPX-87H column (Bio-Rad) separates and quantifies individual volatile fatty acids (acetate, propionate, butyrate) and sugars (glucose). Detection by UV (210 nm) or refractive index. Mobile phase: 5 mM H2SO4 at 0.6 mL/min, 65 C. Retention times: glucose ~9 min, acetate ~15 min. Detection limit: 1--5 mg/L per compound.
- **Total Organic Carbon (TOC)**: A TOC analyzer (Shimadzu TOC-L, GE Sievers) measures organic carbon by combustion (680 C) or UV-persulfate oxidation followed by NDIR CO2 detection. TOC is converted to approximate COD by multiplying by a factor of 2.67 (theoretical for fully reduced carbon). Precision: +/- 2% of reading. Range: 0.004--30000 mg C/L.

## Affecting Factors

### Primary

- **Substrate Type**: Simple, soluble substrates (acetate, glucose) are readily available to the biofilm; complex substrates (particulate organics, cellulose) require hydrolysis and fermentation before electrogenic conversion, reducing the effective substrate availability.
- **Wastewater Variability**: Real wastewater COD varies by 2--5x over diurnal cycles, seasonal changes, and stormwater events. This variability must be accommodated in the MES design through flow equalization, buffer tanks, or adaptive control.
- **Inhibitory Compounds**: Certain substrates or co-contaminants (phenols, heavy metals, antibiotics) at high concentrations can inhibit electroactive bacteria. The inhibitory threshold varies by compound (e.g., copper > 10 mg/L, phenol > 200 mg/L).
- **Nutrient Balance**: The C:N:P ratio must be adequate for microbial growth (typically 100:5:1 by mass). Substrate-rich but nutrient-poor feeds may limit biofilm development and current generation.
- **Biodegradability**: The BOD/COD ratio indicates the biodegradable fraction. Acetate is 100% biodegradable (BOD/COD = 1.0). Domestic wastewater is typically 40--70% biodegradable (BOD/COD = 0.4--0.7). Industrial wastewater may be < 20% biodegradable.

## Related Parameters

- **name**: [Feed Rate](feed-rate.md)

- **relationship**: Together with concentration, determines OLR
- **name**: [Batch Duration](batch-duration.md)

- **relationship**: Affected by initial concentration
- **name**: [Batch Volume](batch-volume.md)

- **relationship**: Volume containing the substrate
- **name**: [Wastewater Type](wastewater-type.md)

- **relationship**: Source of substrate
- **name**: [Feeding Strategy](feeding-strategy.md)

- **relationship**: Delivery pattern

## Compatible Systems

Startup Shutdown

## References

- Liu, H., Cheng, S., Logan, B.E. (2005). "Power generation in fed-batch microbial fuel cells as a function of ionic strength, temperature, and reactor configuration." Environmental Science & Technology, 39(14), 5488-5493.
- Torres, C.I. et al. (2008). "A kinetic perspective on extracellular electron transfer by anode-respiring bacteria." FEMS Microbiology Reviews, 32(3), 475-485.
- APHA (2017). Standard Methods for the Examination of Water and Wastewater, 23rd Edition.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Initial+Substrate+Conc&body=**Parameter%3A**+Initial+Substrate+Conc%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Finitial-substrate-conc.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Initial+Substrate+Conc&body=**Parameter%3A**+Initial+Substrate+Conc%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Finitial-substrate-conc.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Initial+Substrate+Conc&body=**Parameter%3A**+Initial+Substrate+Conc%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Finitial-substrate-conc.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
