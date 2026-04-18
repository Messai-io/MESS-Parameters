# Water Reuse Rate

Water reuse rate is the fraction of MES-treated effluent that is beneficially reused rather than discharged to the environment, expressed as a percentage. Reuse applications include agricultural irrigation, landscape irrigation, industrial cooling water, toilet flushing, groundwater recharge, and process water for industrial operations. This parameter is a key sustainability indicator, particularly in water-stressed regions where treated wastewater is a valuable resource.

MES effluent quality (typically 50--150 mg/L COD, 10--30 mg/L BOD, 10--30 mg/L TSS) is generally suitable for restricted agricultural irrigation without post-treatment. For unrestricted irrigation, recreational use, or industrial reuse, additional polishing (membrane filtration, UV disinfection, activated carbon) may be required to meet pathogen and nutrient standards.

The economic value of reused water ($0.10--5.00/m^3 depending on the application and local water scarcity) can represent a significant revenue stream for MES operations, particularly in regions with high water costs. In water-scarce regions, the water reuse revenue may exceed the electricity revenue from the MFC.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Economic |
| **Subcategory** | Resource Efficiency |
| **Type** | number |
| **Unit** | % |
| **Minimum** | 0 |
| **Maximum** | 100 |

## Typical Values

- **Valid Range**: 0 -- 100%
- **MES with direct irrigation reuse**: 50 -- 90%
- **MES with industrial reuse**: 30 -- 80%
- **MES with groundwater recharge**: 20 -- 60%
- **MES without reuse infrastructure**: 0%
- **Global wastewater reuse average**: approximately 11%
- **Israel (highest national reuse)**: approximately 87%
- **US average**: approximately 8%
- **EU average**: approximately 2.4%
- **Reuse water value**: $0.10 -- 5.00/m^3

## Measurement Methods

- **Flow Metering**: Volume of treated effluent directed to reuse applications is metered separately from effluent discharged to receiving waters. Reuse rate = reuse volume / total effluent volume * 100%.
- **Quality Compliance Monitoring**: Reuse water quality is monitored per applicable standards (EPA, WHO, ISO 16075) to verify fitness for intended use. Non-compliant water is diverted to discharge, reducing the effective reuse rate.

## Affecting Factors

### Primary

- **Effluent Quality**: Higher treatment quality (lower COD, TSS, pathogens) enables more reuse applications and higher reuse rates.
- **Post-Treatment**: Membrane filtration or UV disinfection expands eligible reuse applications.
- **Local Water Scarcity**: Water-stressed regions have stronger economic and regulatory drivers for reuse.
- **Reuse Infrastructure**: Dedicated storage and distribution systems are required. Without infrastructure, reuse rate is zero.
- **Regulatory Framework**: Permissive reuse regulations (e.g., Israel, Australia) enable higher rates. Restrictive regulations limit reuse.

## Related Parameters

- **name**: [Wastewater Discharge](../operational/wastewater-discharge.md)

- **relationship**: Effluent quality
- **name**: [Pathogen Removal](../operational/pathogen-removal.md)

- **relationship**: Reuse safety
- **name**: [Water Footprint](water-footprint.md)

- **relationship**: Water lifecycle impact
- **name**: [Water Cost](water-cost.md)

- **relationship**: Value of reused water
- **name**: [Byproduct Revenue](byproduct-revenue.md)

- **relationship**: Reuse water as revenue

## Compatible Systems

Life Cycle Assessment Parameters

## References

- WHO (2006). "Guidelines for the Safe Use of Wastewater, Excreta, and Greywater." World Health Organization.
- US EPA (2012). "Guidelines for Water Reuse." EPA/600/R-12/618.
- ISO 16075:2020. "Guidelines for treated wastewater use for irrigation projects."

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Water+Reuse+Rate&body=**Parameter%3A**+Water+Reuse+Rate%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fwater-reuse-rate.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Water+Reuse+Rate&body=**Parameter%3A**+Water+Reuse+Rate%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fwater-reuse-rate.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Water+Reuse+Rate&body=**Parameter%3A**+Water+Reuse+Rate%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fwater-reuse-rate.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
