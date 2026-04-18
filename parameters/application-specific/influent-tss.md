# Influent Tss

Influent total suspended solids (TSS) refers to the concentration of particulate matter in the wastewater entering a microbial electrochemical system (MES), measured as the mass of material retained on a standard glass fiber filter after drying. This parameter is critical for MES design and operation because suspended solids can clog electrode pores, foul membranes, accumulate in reactor dead zones, and interfere with the biofilm-electrode interface that is essential for bioelectrochemical current generation.

High influent TSS concentrations pose several challenges for MES performance. Particulate organic matter must be hydrolyzed by extracellular enzymes before it can be metabolized by electrogenic bacteria, making it a slower and less efficient substrate compared to dissolved organics. Inorganic suspended solids (grit, sand, mineral particles) can abrade electrode surfaces, accumulate in reactor volumes, and reduce the effective treatment capacity. Colloidal particles can deposit on membrane surfaces in two-chamber MES configurations, increasing membrane resistance and reducing ion transport efficiency.

Pre-treatment for TSS reduction (screening, grit removal, primary settling, or fine filtration) is typically recommended before MES treatment, particularly for systems using three-dimensional porous electrodes or membranes. The optimal level of pre-treatment represents a trade-off: more aggressive TSS removal protects the MES but also removes particulate organic matter that could contribute to energy recovery. Some MES configurations, particularly those with brush-type or open-structure anodes, can tolerate moderate TSS levels and may even benefit from the additional organic substrate in the particulate fraction.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Application Specific |
| **Subcategory** | Influent Characteristics |
| **Type** | number |
| **Unit** | mg/L |
| **Minimum** | 50 |
| **Maximum** | 1000 |
| **Papers Reporting** | 24 |

## Typical Values

- **Valid Range**: 50 - 50,000 mg/L TSS
- **Typical Range for MES applications**: 100 - 2,000 mg/L TSS (after primary treatment)
- **Weak municipal wastewater**: 100 - 200 mg/L TSS
- **Medium-strength municipal wastewater**: 200 - 350 mg/L TSS
- **Strong municipal wastewater**: 350 - 600 mg/L TSS
- **After primary settling**: 50 - 150 mg/L TSS (50-70% TSS removal)
- **Food processing wastewater**: 200 - 5,000 mg/L TSS
- **Dairy wastewater**: 300 - 3,000 mg/L TSS
- **Slaughterhouse wastewater**: 500 - 5,000 mg/L TSS
- **Swine farm wastewater**: 5,000 - 30,000 mg/L TSS
- **Landfill leachate**: 200 - 2,000 mg/L TSS
- **Recommended maximum for MES (porous electrode)**: 200 mg/L TSS
- **Recommended maximum for MES (open electrode)**: 500 mg/L TSS
- **VSS/TSS ratio (municipal WW)**: 0.65 - 0.85 (volatile fraction indicates organic content)

## Measurement Methods

- **Gravimetric Method (Standard Methods 2540D)**: 1. Pre-wash and dry glass fiber filters (Whatman 934-AH or equivalent, 1.5 micrometer nominal pore size) at 103-105 degC for 1 hour, cool in desiccator, and weigh to 0.1 mg precision. 2. Filter a measured volume of well-mixed influent sample (use 25-200 mL, chosen to yield 2.5-200 mg residue on filter). 3. Rinse filter with three 10 mL portions of reagent-grade distilled water to remove dissolved solids. 4. Dry filter at 103-105 degC for at least 1 hour, cool in desiccator, and weigh. 5. TSS (mg/L) = (filter + residue weight - tare weight) x 1,000,000 / sample volume (mL). 6. For VSS determination, continue ignition at 550 degC for 15-20 minutes: VSS = (weight loss at 550 degC) x 1,000,000 / sample volume (mL).
- **Turbidity Correlation**: 1. Measure influent turbidity using a calibrated nephelometric turbidimeter (NTU). 2. Develop a site-specific TSS-turbidity correlation using paired measurements (minimum 20 data points covering the expected range). 3. Use the correlation for rapid TSS estimation between laboratory analyses. 4. Recalibrate when influent characteristics change significantly.
- **Online TSS Monitoring**: 1. Install an inline suspended solids analyzer (optical scatter/absorption type) in the MES influent pipe. 2. Select an analyzer appropriate for the expected TSS range and particle characteristics. 3. Calibrate against laboratory gravimetric TSS measurements. 4. Configure alarm setpoints for TSS excursions that could harm MES performance. 5. Use continuous data for feed-forward control of pre-treatment processes.

## Affecting Factors

### Primary

- **Wastewater source**: Industrial and agricultural wastewaters typically have much higher TSS than municipal wastewater.
- **Pre-treatment effectiveness**: The type and performance of upstream solids removal processes directly determines the TSS reaching the MES.
- **Wet weather conditions**: Combined sewer overflow events and stormwater infiltration can dramatically increase influent TSS (2-10x dry weather values).
- **Sewer system characteristics**: Flat-gradient sewers with low velocities allow solids deposition; steep-gradient sewers keep solids in suspension.
- **Time of day**: TSS in municipal wastewater follows diurnal patterns, with peaks typically in late morning.
- **Season**: Spring snowmelt and heavy rain events increase TSS through infiltration and combined sewer overflows.
- **Construction activity**: Upstream construction can introduce significant sediment loads.
- **Biological activity in sewers**: Biofilm sloughing and re-suspension of settled solids in the sewer system affect influent TSS variability.

## Related Parameters

- **name**: Influent COD

- **relationship**: Particulate COD is carried by suspended solids; the COD/TSS ratio indicates organic content.
- **name**: Influent BOD

- **relationship**: Particulate BOD is associated with the volatile fraction of TSS.
- **name**: Effluent TSS Limit

- **relationship**: The influent TSS determines the required solids removal efficiency.
- **name**: Sludge Production

- **relationship**: Removed TSS contributes directly to sludge production.
- **name**: Wastewater Type

- **relationship**: Each wastewater type has a characteristic TSS concentration and particle size distribution.

## Compatible Systems

Wastewater Treatment Applications

## References

- Standard Methods for the Examination of Water and Wastewater (2017). 23rd Edition. APHA, AWWA, WEF. Methods 2540D, 2540E.
- Metcalf & Eddy (2014). Wastewater Engineering: Treatment and Resource Recovery, 5th Edition. McGraw-Hill.
- Logan, B.E. (2008). Microbial Fuel Cells. John Wiley & Sons.
- Min, B. et al. (2005). Electricity generation from swine wastewater using microbial fuel cells. Water Research, 39(20), 4961-4968.
- Ahn, Y. & Logan, B.E. (2010). Effectiveness of domestic wastewater treatment using microbial fuel cells at ambient and mesophilic temperatures. Bioresource Technology, 101(2), 469-475.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Influent+Tss&body=**Parameter%3A**+Influent+Tss%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Finfluent-tss.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Influent+Tss&body=**Parameter%3A**+Influent+Tss%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Finfluent-tss.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Influent+Tss&body=**Parameter%3A**+Influent+Tss%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Finfluent-tss.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
