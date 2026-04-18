# Eutrophication Potential

Eutrophication potential (EP) is an LCA impact category quantifying the potential of MES-related nutrient emissions (nitrogen and phosphorus compounds) to cause excessive algal growth and oxygen depletion in receiving water bodies. Expressed in kg PO4^3- equivalents per functional unit, EP captures both direct nutrient discharges in MES effluent and indirect emissions from energy use, chemical production, and sludge disposal across the MES life cycle.

MES effluent typically contains residual nitrogen (10--40 mg TN/L) and phosphorus (2--10 mg TP/L) because standard MES configurations provide limited nutrient removal. The nutrient content of MES effluent is the dominant contributor to EP (60--80% of total), making effluent quality the most important factor for this impact category. Integrated MES with post-treatment for nutrient removal (constructed wetlands, algal treatment, struvite precipitation) can reduce EP by 50--80%.

LCA comparisons show MES EP is similar to or slightly higher than activated sludge with nutrient removal, because while MES has lower energy-related EP (less electricity consumption), it typically has higher effluent-related EP (less complete nutrient removal without biological nutrient removal processes).

## Basic Information

| Property | Value |
|---|---|
| **Category** | Economic |
| **Subcategory** | Environmental Impact |
| **Type** | number |
| **Unit** | g PO₄-eq/kWh |
| **Minimum** | 0 |
| **Maximum** | 5 |

## Typical Values

- **Valid Range**: 0 -- 0.1 kg PO4-eq/m^3
- **MFC (domestic WW, no nutrient removal)**: 0.005 -- 0.03 kg PO4-eq/m^3
- **MFC with nutrient recovery**: 0.002 -- 0.01 kg PO4-eq/m^3
- **Activated sludge with BNR (reference)**: 0.001 -- 0.01 kg PO4-eq/m^3
- **Effluent contribution**: 60 -- 80% of total EP
- **Energy contribution**: 10 -- 20%
- **Chemical/sludge contribution**: 5 -- 15%

## Measurement Methods

- **LCA Methodology**: EP is calculated per ISO 14040/14044 using CML or ReCiPe characterization. Characterization factors: PO4 = 1.0, NO3 = 0.10, NH4 = 0.33, N total = 0.42 kg PO4-eq/kg.
- **Effluent Nutrient Analysis**: Direct measurement of TN (APHA 4500-N) and TP (APHA 4500-P) in MES effluent provides the dominant EP contribution: EP_effluent = TN * 0.42 + TP * 3.06 kg PO4-eq/kg.

## Affecting Factors

### Primary

- **Nutrient Removal Efficiency**: Standard MES removes only 10--30% of nitrogen and 20--40% of phosphorus. Post-treatment can increase to 80--95%.
- **Discharge Location**: EP impact depends on the sensitivity of the receiving water body. Sensitive waterbodies have more stringent nutrient limits.
- **Nutrient Recovery**: Struvite precipitation recovers P as a fertilizer, reducing EP while generating byproduct revenue.

## Related Parameters

- **name**: [Acidification Potential](acidification-potential.md)

- **relationship**: Related LCA impact
- **name**: [Wastewater Discharge](../operational/wastewater-discharge.md)

- **relationship**: Effluent quality requirements
- **name**: [Byproduct Revenue](byproduct-revenue.md)

- **relationship**: Nutrient recovery revenue

## Compatible Systems

Life Cycle Assessment Parameters

## References

- Foley, J.M. et al. (2010). "Life cycle assessment of high-rate anaerobic treatment, microbial fuel cells, and microbial electrolysis cells." Environmental Science & Technology, 44(9), 3629-3637.
- CML-IA characterization factors (Leiden University, 2016).

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Eutrophication+Potential&body=**Parameter%3A**+Eutrophication+Potential%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Feutrophication-potential.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Eutrophication+Potential&body=**Parameter%3A**+Eutrophication+Potential%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Feutrophication-potential.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Eutrophication+Potential&body=**Parameter%3A**+Eutrophication+Potential%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Feutrophication-potential.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
