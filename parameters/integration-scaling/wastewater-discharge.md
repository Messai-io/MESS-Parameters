# Wastewater Discharge

Wastewater discharge encompasses the quality requirements, volume, and disposal pathway for treated effluent exiting an MES. Discharge standards set by regulatory agencies (EPA in the US, EU Urban Waste Water Treatment Directive, local environmental agencies) define the maximum permissible concentrations of pollutants (COD, BOD, TSS, nutrients, pathogens) in the effluent. Compliance with discharge standards is a prerequisite for MES deployment in wastewater treatment applications and directly influences the required HRT, treatment configuration, and whether post-treatment is needed.

Most MES as standalone treatment achieve BOD/COD removal of 60--90%, which meets secondary treatment standards (e.g., EU UWWTD: < 125 mg/L COD, < 25 mg/L BOD) when treating domestic wastewater with appropriate HRT. However, nutrient removal (nitrogen, phosphorus) is limited in standard MES configurations, and additional treatment may be needed for nutrient-sensitive discharge locations. Pathogen removal typically requires supplementary disinfection (chlorination, UV) to meet bathing water or irrigation reuse standards.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Integration Scaling |
| **Subcategory** | Utility Requirements |
| **Type** | number |
| **Unit** | m³/d |
| **Minimum** | 0 |
| **Maximum** | 1000 |

## Typical Values

- **Valid Range**: Varies by jurisdiction
- **EU UWWTD secondary treatment**: COD < 125 mg/L, BOD < 25 mg/L, TSS < 35 mg/L
- **US EPA secondary treatment**: BOD < 30 mg/L, TSS < 30 mg/L
- **Nutrient-sensitive areas (EU)**: Total N < 10--15 mg/L, Total P < 1--2 mg/L
- **Irrigation reuse (WHO)**: E. coli < 1000 CFU/100 mL
- **MFC typical effluent COD (domestic WW, 12 h HRT)**: 50 -- 150 mg/L
- **MFC typical effluent BOD**: 10 -- 50 mg/L
- **MFC typical effluent TSS**: 10 -- 30 mg/L

## Measurement Methods

- **Standard Effluent Analysis**: COD (APHA 5220D), BOD5 (APHA 5210B), TSS (APHA 2540D), TN (APHA 4500-N), TP (APHA 4500-P), and indicator organisms (APHA 9222D) are measured in composite effluent samples (24-hour time-proportional or flow-proportional composites). Sampling frequency per discharge permit requirements (typically weekly to monthly).
- **Online Monitoring**: UV-Vis spectrophotometric probes (COD, TSS), ammonium ion-selective electrodes, and online phosphate analyzers provide continuous effluent quality monitoring for real-time compliance verification.

## Affecting Factors

### Primary

- **Influent Quality**: Higher strength influent requires longer HRT or post-treatment to meet discharge standards.
- **HRT**: Longer HRT improves effluent quality. COD < 100 mg/L typically requires HRT > 12 h for domestic wastewater.
- **Post-Treatment**: Constructed wetlands, sand filters, or membrane filtration after MES can polish effluent to meet stringent standards.
- **Nutrient Removal**: Standard MES provides limited nitrogen removal (10--30%). Integrated MES with aerobic polishing or anammox achieves higher removal.

## Related Parameters

- **name**: [Wastewater Type](wastewater-type.md)

- **relationship**: Influent characteristics
- **name**: [Hydraulic Retention Time](hydraulicretentiontime.md)

- **relationship**: Treatment time
- **name**: [Pathogen Removal](pathogen-removal.md)

- **relationship**: Disinfection performance
- **name**: [Water Reuse Rate](../economic/water-reuse-rate.md)

- **relationship**: Effluent reuse potential

## Compatible Systems

Infrastructure Requirements

## References

- EU Council Directive 91/271/EEC concerning urban waste-water treatment.
- US EPA (2013). "Secondary Treatment Regulation." 40 CFR Part 133.
- Li, W.W., Yu, H.Q., He, Z. (2014). "Towards sustainable wastewater treatment by using microbial fuel cells-centered technologies." Energy & Environmental Science, 7(3), 911-924.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Wastewater+Discharge&body=**Parameter%3A**+Wastewater+Discharge%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fwastewater-discharge.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Wastewater+Discharge&body=**Parameter%3A**+Wastewater+Discharge%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fwastewater-discharge.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Wastewater+Discharge&body=**Parameter%3A**+Wastewater+Discharge%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fwastewater-discharge.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
