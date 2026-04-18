# Toc Removal

Total organic carbon (TOC) removal efficiency measures the percentage reduction in dissolved and particulate organic carbon during wastewater treatment in a microbial electrochemical system (MES). TOC directly quantifies the carbon content of organic matter using high-temperature combustion or UV-persulfate oxidation with infrared CO2 detection, providing a more specific measure of organic pollution than COD (which also oxidizes inorganic reductants) or BOD (which measures only biologically degradable organics).

TOC removal is increasingly preferred as a process monitoring parameter because TOC analyzers can provide results in 5-10 minutes (compared to 2 hours for COD and 5 days for BOD), enabling near-real-time process control. Modern online TOC analyzers achieve +/- 2-3% accuracy with automatic calibration, making them suitable for continuous effluent quality monitoring and regulatory compliance reporting.

In MES systems, TOC removal occurs through the same mechanisms as COD removal: bioelectrochemical oxidation of organic carbon at the anode with electron transfer to the electrode, methanogenic conversion to CH4 + CO2, and aerobic oxidation near air-cathodes. However, TOC measurements also capture organic carbon that may not be detected by COD analysis (certain volatile organics lost during reflux) or BOD analysis (refractory organics not degraded in 5 days), providing a more comprehensive picture of organic matter fate in the MES.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Performance |
| **Subcategory** | Organic Removal |
| **Type** | number |
| **Unit** | % |
| **Minimum** | 0 |
| **Maximum** | 100 |
| **Papers Reporting** | 15 |

## Typical Values

- **Valid Range**: 0% to 100%
- **Typical Range**: 30% to 90%
- **MFC (acetate, lab-scale)**: 85-99%
- **MFC (domestic wastewater, lab)**: 40-75%
- **MFC (domestic wastewater, pilot)**: 30-65%
- **MFC (industrial wastewater)**: 40-85%
- **MEC (domestic wastewater)**: 50-80%
- **Typical influent TOC (domestic WW)**: 100-200 mg/L
- **Typical effluent TOC after MFC**: 30-100 mg/L
- **TOC/COD ratio (domestic WW)**: 0.30-0.40

## Measurement Methods

- **High-Temperature Catalytic Oxidation (HTCO)**: The sample is injected onto a platinum catalyst at 680-900 deg C, oxidizing all organic carbon to CO2 which is detected by non-dispersive infrared (NDIR). Inorganic carbon (IC) is separately measured by acid sparging. TOC = TC - IC, or NPOC (non-purgeable organic carbon) is measured after IC removal by acidification and sparging. Instruments: Shimadzu TOC-L, Elementar vario TOC cube. Accuracy: +/- 1-3%; range: 0.5 ppb to 25,000 mg/L.
- **UV-Persulfate Oxidation**: The sample is oxidized with sodium persulfate under UV irradiation, converting organic carbon to CO2 for NDIR detection. This method is less energy-intensive than HTCO and is commonly used in online analyzers. Instruments: Hach QbD1200, Sievers M5310C. Accuracy: +/- 2-5%; range: 0.03 ppb to 50 mg/L (lower range optimized for clean water applications).
- **UV Absorbance Surrogate**: UV absorbance at 254 nm (UV254) correlates with dissolved organic carbon for a given wastewater source. After site-specific calibration (R^2 > 0.90 typical for domestic wastewater), online UV254 sensors provide continuous TOC estimates with 1-second response time and +/- 5-10% accuracy.

## Affecting Factors

### Primary

- **Hydraulic retention time**: TOC removal increases with HRT. Short HRT (<4 h) primarily removes readily biodegradable dissolved organics; longer HRT (12-24 h) additionally removes slowly biodegradable and particulate organics through hydrolysis and subsequent oxidation.
- **Organic matter fractionation**: TOC comprises dissolved readily biodegradable, dissolved slowly biodegradable, particulate, and refractory fractions. MES anodes efficiently remove dissolved biodegradable TOC (VFAs, simple sugars) but are less effective on particulate and refractory fractions without pre-hydrolysis.
- **Temperature**: TOC removal kinetics follow the same temperature dependence as COD removal, with rates approximately doubling per 10 deg C increase between 10-35 deg C.
- **Electrode surface area and biofilm coverage**: Greater biofilm-covered electrode surface area increases the capacity for organic carbon oxidation. Carbon brush and granular electrodes with high specific surface area achieve faster TOC removal.
- **Competing carbon sinks**: Methanogenesis converts organic carbon to CH4 + CO2 without generating current. While this still removes TOC from the liquid phase, it does not contribute to electrical energy recovery.

## References

1. APHA. "Standard Methods for the Examination of Water and Wastewater." 23rd Edition, Method 5310, 2017.
2. Liu, H. et al. "Production of electricity during wastewater treatment using a single chamber microbial fuel cell." Environmental Science & Technology, 38(7), 2281-2285 (2004).
3. Ahn, Y. and Logan, B.E. "Effectiveness of domestic wastewater treatment using microbial fuel cells." Bioresource Technology, 101(2), 469-475 (2010).
4. Ge, Z. et al. "Energy extraction from a large-scale microbial fuel cell system treating municipal wastewater." Journal of Power Sources, 297, 260-264 (2015).
5. Heidrich, E.S. et al. "Performance of a pilot scale microbial electrolysis cell fed on domestic wastewater." Bioresource Technology, 173, 87-95 (2014).

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Toc+Removal&body=**Parameter%3A**+Toc+Removal%0A**Category%3A**+Performance%0A**File%3A**+parameters%2Fperformance%2Ftoc-removal.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Toc+Removal&body=**Parameter%3A**+Toc+Removal%0A**Category%3A**+Performance%0A**File%3A**+parameters%2Fperformance%2Ftoc-removal.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Toc+Removal&body=**Parameter%3A**+Toc+Removal%0A**Category%3A**+Performance%0A**File%3A**+parameters%2Fperformance%2Ftoc-removal.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
