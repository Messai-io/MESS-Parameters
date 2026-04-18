# Nitrogen Removal

Total nitrogen (TN) removal efficiency quantifies the percentage reduction in all nitrogen species (ammonium NH4+, nitrate NO3-, nitrite NO2-, organic nitrogen) achieved during wastewater treatment in a microbial electrochemical system (MES). Unlike ammonia recovery, which captures nitrogen in a useful form, total nitrogen removal encompasses both recovery (concentration and extraction) and biological conversion pathways (nitrification, denitrification, anammox) that transform reactive nitrogen to dinitrogen gas (N2).

Nitrogen removal in MES occurs through several interconnected mechanisms. At the anode, anaerobic conditions prevent conventional nitrification but support ammonium ion migration through cation exchange membranes to the cathode. At air-cathodes, oxygen availability supports nitrification of transported ammonium, and the resulting nitrate can be denitrified in anoxic biofilm zones using residual organic matter or direct cathodic electron donation (bioelectrochemical denitrification). Some MES configurations employ sequential anode-cathode treatment trains where the anode removes organic carbon while the cathode facilitates nitrogen transformations.

Stringent effluent nitrogen limits (TN < 10-15 mg/L in the EU, < 3-8 mg/L in sensitive receiving waters) drive the need for effective nitrogen removal. Conventional biological nitrogen removal (BNR) requires energy-intensive aeration for nitrification and supplemental carbon for denitrification. MES offers the potential to achieve nitrogen removal with lower energy input by using bioelectrochemical electron donation for denitrification and leveraging the natural pH gradient across the cell to shift ammonia/ammonium equilibrium for stripping.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Performance |
| **Subcategory** | Nutrient Recovery |
| **Type** | number |
| **Unit** | % |
| **Minimum** | 0 |
| **Maximum** | 100 |
| **Papers Reporting** | 14 |

## Typical Values

- **Valid Range**: 0% to 100%
- **Typical Range**: 30% to 90%
- **MFC with air-cathode (domestic WW)**: 30-60% TN removal
- **MFC + constructed wetland hybrid**: 50-80%
- **Bioelectrochemical denitrification (cathode)**: 70-95% nitrate removal
- **MFC with coupled nitrification-denitrification**: 50-85% TN removal
- **Electrochemical ammonia stripping (MEC cathode)**: 40-70% TN as NH3 recovery
- **Conventional BNR (comparison)**: 70-90% TN removal
- **Effluent TN targets**: < 10-15 mg/L (EU), < 3-8 mg/L (stringent)

## Measurement Methods

- **Persulfate Digestion and UV Detection (APHA 4500-N)**: Total nitrogen is determined by alkaline persulfate oxidation of all nitrogen species to nitrate, followed by UV spectrophotometric detection at 220 nm or second-derivative spectroscopy. This method provides TN directly without separate analysis of individual species. Accuracy: +/- 5-10%; range: 0.1-25 mg/L.
- **Individual Species Analysis**: Ammonium: ion-selective electrode or colorimetric (Nessler/phenate method). Nitrate: UV spectrophotometry at 220 nm or ion chromatography. Nitrite: colorimetric (Griess reaction). Organic nitrogen: Kjeldahl digestion (TKN - NH4+). Sum of species provides a cross-check for TN.
- **Online TN Analyzers**: Continuous online TN analyzers (e.g., Hach TNT plus, Endress+Hauser Stamolys CA71TN) using UV/persulfate digestion provide real-time TN data for process control with 5-30 minute response time and +/- 3-5% accuracy.

## Affecting Factors

### Primary

- **Oxygen availability at cathode**: Aerobic cathodes support nitrification of NH4+ to NO3-. Excessive oxygen flux inhibits denitrification; insufficient oxygen limits nitrification. Optimal oxygen supply creates micro-aerobic zones supporting simultaneous nitrification-denitrification (SND).
- **C/N ratio of influent**: Denitrification requires organic carbon as electron donor. C/N ratios >5 (by COD/TN) support complete denitrification. Low C/N wastewater may require supplemental carbon or bioelectrochemical electron donation from the cathode.
- **Current density and ammonium transport**: Higher current drives more NH4+ migration through CEM to the cathode, increasing the fraction of nitrogen accessible for cathodic processing (stripping, nitrification, or bioelectrochemical recovery).
- **Temperature**: Both nitrification and denitrification are temperature-sensitive. Nitrification rates drop significantly below 15 deg C (50% reduction at 10 deg C). Denitrification is less temperature-sensitive but still slows at low temperatures.
- **pH management**: Nitrification consumes alkalinity (7.14 g CaCO3/g NH4-N oxidized). Denitrification generates alkalinity. The natural pH gradient in MES (acidic anode, alkaline cathode) must be managed to maintain favorable conditions for both processes.

## References

1. Virdis, B. et al. "Simultaneous nitrification, denitrification, and carbon removal in microbial fuel cells." Water Research, 44(9), 2970-2980 (2010).
2. Clauwaert, P. et al. "Biological denitrification in microbial fuel cells." Environmental Science & Technology, 41(9), 3354-3360 (2007).
3. Kelly, P.T. and He, Z. "Nutrients removal and recovery in bioelectrochemical systems: A review." Bioresource Technology, 153, 351-360 (2014).
4. Zhang, F. and He, Z. "Integrated organic and nitrogen removal with electricity generation in a tubular dual-cathode microbial fuel cell." Process Biochemistry, 47(12), 2146-2151 (2012).
5. Yan, H. et al. "Bioelectrochemical systems for nitrogen removal and recovery from wastewater." Critical Reviews in Environmental Science and Technology, 48(1), 1-38 (2018).

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Nitrogen+Removal&body=**Parameter%3A**+Nitrogen+Removal%0A**Category%3A**+Performance%0A**File%3A**+parameters%2Fperformance%2Fnitrogen-removal.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Nitrogen+Removal&body=**Parameter%3A**+Nitrogen+Removal%0A**Category%3A**+Performance%0A**File%3A**+parameters%2Fperformance%2Fnitrogen-removal.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Nitrogen+Removal&body=**Parameter%3A**+Nitrogen+Removal%0A**Category%3A**+Performance%0A**File%3A**+parameters%2Fperformance%2Fnitrogen-removal.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
