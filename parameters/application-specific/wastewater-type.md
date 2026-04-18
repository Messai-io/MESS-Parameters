# Wastewater Type

Wastewater type categorizes the source and composition of the influent treated by an MES, which fundamentally determines the substrate availability, complexity, biodegradability, nutrient balance, and potential inhibitory compounds that the bioelectrochemical system must handle. The wastewater type is the most important contextual parameter for interpreting MES performance because power density, coulombic efficiency, and treatment efficiency vary by 10--100x across different wastewater types.

Major wastewater categories for MES include: defined medium (acetate, glucose -- for mechanistic studies), domestic/municipal wastewater (the largest potential market, 200--800 mg COD/L), brewery/winery wastewater (high-strength, readily biodegradable, 2000--6000 mg COD/L), dairy wastewater (high COD, high fat content, 2000--10000 mg COD/L), food processing wastewater (variable, 1000--50000 mg COD/L), landfill leachate (recalcitrant, high ammonia, 1000--80000 mg COD/L), swine/agricultural wastewater (high ammonia, high particulates), and industrial wastewater (variable, potentially toxic).

Brewery and food processing wastewaters are considered the most favorable real substrates for MES due to their high biodegradability (BOD/COD > 0.6), moderate to high COD, relatively consistent composition, and low toxicity. Domestic wastewater is the largest volume application but presents challenges of low COD, high variability, and dilute substrate.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Application Specific |
| **Subcategory** | Influent Characteristics |
| **Type** | select |

## Typical Values

- **Valid Range**: Categorical with typical COD ranges
- **Acetate defined medium**: 100 -- 2000 mg COD/L; BOD/COD = 1.0
- **Domestic wastewater (raw)**: 200 -- 800 mg COD/L; BOD/COD = 0.4--0.7
- **Primary effluent**: 100 -- 350 mg COD/L
- **Brewery wastewater**: 2000 -- 6000 mg COD/L; BOD/COD = 0.6--0.8
- **Dairy wastewater**: 2000 -- 10000 mg COD/L
- **Food processing**: 1000 -- 50000 mg COD/L
- **Landfill leachate**: 1000 -- 80000 mg COD/L; BOD/COD = 0.05--0.4
- **Swine wastewater**: 5000 -- 40000 mg COD/L; high NH4 (1000--5000 mg/L)

## Measurement Methods

- **Comprehensive Wastewater Characterization**: Standard analysis includes: COD (APHA 5220D), BOD5 (APHA 5210B), TSS/VSS (APHA 2540), TN/TKN (APHA 4500-N), TP (APHA 4500-P), pH, conductivity, alkalinity (APHA 2320), VFA profile (HPLC or GC), heavy metals (ICP-OES), and specific toxicants relevant to the source.
- **Biodegradability Assessment**: The BOD/COD ratio indicates biodegradable fraction. Values > 0.6 indicate highly biodegradable wastewater suitable for biological treatment. Values < 0.3 suggest significant recalcitrant or inhibitory content.

## Affecting Factors

### Primary

- **Source Industry**: Each industry produces characteristic wastewater. Brewery wastewater is consistently favorable; petrochemical wastewater is consistently challenging.
- **Season**: Domestic wastewater strength varies seasonally (dilute in wet season, concentrated in dry season).
- **Pre-Treatment**: Primary settling removes 30--40% of COD (particulate fraction), leaving more readily available dissolved organics for MES.
- **Inhibitory Compounds**: Heavy metals (Cu > 10 mg/L, Zn > 20 mg/L), antibiotics, and high ammonia (> 3000 mg/L) inhibit electroactive bacteria.

## Related Parameters

- **name**: [Initial Substrate Concentration](initial-substrate-conc.md)

- **relationship**: COD concentration
- **name**: [Feeding Strategy](feeding-strategy.md)

- **relationship**: Delivery mode
- **name**: [Wastewater Discharge](wastewater-discharge.md)

- **relationship**: Effluent requirements
- **name**: [Pathogen Removal](pathogen-removal.md)

- **relationship**: Public health considerations
- **name**: [Flexibility](flexibility.md)

- **relationship**: Substrate flexibility of the system

## Compatible Systems

Wastewater Treatment Applications

## References

- Pant, D. et al. (2010). "A review of the substrates used in microbial fuel cells for sustainable energy production." Bioresource Technology, 101(6), 1533-1543.
- Logan, B.E. (2008). Microbial Fuel Cells. John Wiley & Sons, Hoboken, NJ.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Wastewater+Type&body=**Parameter%3A**+Wastewater+Type%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fwastewater-type.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Wastewater+Type&body=**Parameter%3A**+Wastewater+Type%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fwastewater-type.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Wastewater+Type&body=**Parameter%3A**+Wastewater+Type%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fwastewater-type.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
