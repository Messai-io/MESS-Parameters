# cathodeMaterial

The cathodematerial configuration parameter represents the categorical classification of the cathode electrode material and catalyst system used in a microbial electrochemical system (MES), stored as a text descriptor in experimental databases. This parameter captures the complete cathode identity -- both the substrate (carbon cloth, carbon paper, stainless steel mesh, nickel foam) and the catalyst (Pt/C, activated carbon, MnO2, CoTMPP, Fe-N-C) -- as a discrete variable for systematic comparison across studies, meta-analyses, and predictive modeling applications.

Unlike the detailed cathode-material characterization that encompasses electrochemical properties, the cathodematerial parameter serves as a standardized identifier enabling automated data mining, machine learning feature engineering, and bibliometric analysis. In MES parameter databases, this field enables queries such as identifying all studies using activated carbon cathodes with their associated power densities, or comparing performance distributions across different catalyst types. The parameter is particularly important for training predictive models that estimate MFC power output from design parameters.

Common cathodematerial values in the MES literature include: "Pt/C on carbon cloth" (the most frequently reported, ~35% of studies), "activated carbon air-cathode" (~20%), "carbon cloth (no catalyst)" (~8%), "MnO2 on carbon cloth" (~5%), "stainless steel mesh cathode" (~5%), "nickel foam cathode" (~3%), "carbon brush biocathode" (~3%), and various other formulations. The encoding should capture both the support and catalyst to enable proper classification, as the same substrate with different catalysts can yield 2-10x performance differences.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Materials |
| **Type** | string |

## Typical Values

- **Valid Range**: Any catalytically active electrode material; 30+ distinct categories in MES literature
- **Typical Range**: Top 5 cathode types account for ~75% of publications
- **Most Common**: Pt/C air-cathode (35%), AC air-cathode (20%), plain carbon (8%), MnO2 (5%), SS mesh (5%)
- **Encoding**: Categorical (nominal); typically 10-60 character string including support and catalyst
- **Performance Spread**: 0.1-6.9 W/m^2 across all reported cathode types

## Measurement Methods

- **Literature Data Mining**: Systematic extraction from publications using defined data extraction protocols. The cathodematerial value is recorded from the materials/methods section, including both the substrate and catalyst identity. Semi-automated NLP pipelines can extract and classify cathode descriptions from paper abstracts and full texts.
- **Standardized Classification Scheme**: A hierarchical taxonomy classifies cathode materials: Level 1 (substrate type: carbon, metal, composite), Level 2 (substrate form: cloth, paper, mesh, foam, felt), Level 3 (catalyst: Pt, AC, MnO2, biocatalyst, none), Level 4 (modifications: N-doped, heat-treated, surface functionalized).
- **Performance Benchmarking**: Each cathodematerial category is associated with a performance distribution (mean, median, range) compiled from published data. This enables identification of under-explored high-potential materials and over-studied materials approaching performance ceilings.

## Affecting Factors

### Primary

- **Target Reaction**: MFC air-cathodes require ORR catalysts (Pt/C, AC, MnO2). MEC cathodes require HER catalysts (Pt, Ni, SS). Electrosynthesis cathodes require CO2 reduction selectivity (biocathodes, Cu, Bi, Sn). The target reaction constrains the cathodematerial choices.
- **Cost Constraints**: Lab-scale studies predominantly use Pt/C ($200-500/m^2) for maximum performance. Pilot and practical applications require non-precious materials ($5-50/m^2). This creates a persistent disconnect between laboratory results and practical applicability.
- **Durability Requirements**: Short-term studies (days to weeks) can use sensitive materials (thin Pt films, enzymes). Long-term applications (months to years) require robust materials (AC, SS, MnO2) resistant to biofouling and corrosion.
- **Operating Conditions**: Neutral pH favors different catalysts than acidic or alkaline conditions. Temperature, salinity, and contaminant presence further constrain material choices.
- **Historical Precedent**: Research groups tend to continue using materials with established protocols, creating geographical clustering of cathodematerial preferences in the literature.

## Related Parameters

- **name**: Anode Material

- **relationship**: Combined with cathodematerial to define the complete electrode pair.
- **name**: Catalyst Layer

- **relationship**: Detailed catalyst layer properties associated with each cathodematerial type.
- **name**: Power Density

- **relationship**: Directly determined by cathodematerial performance characteristics.
- **name**: Overpotential

- **relationship**: Activation overpotential varies dramatically across cathodematerial types.
- **name**: Reactor Type

- **relationship**: Certain reactor designs constrain cathodematerial options.

## References

- Santoro, C. et al. (2017). Microbial fuel cells: From fundamentals to applications. Journal of Power Sources, 356, 225-244.
- Wang, Z. et al. (2014). Materials for microbial fuel cell cathodes. ChemSusChem, 7(2), 416-426.
- Yuan, H. et al. (2016). A review of non-noble metal catalysts for oxygen reduction reaction in microbial fuel cells. Journal of Power Sources, 311, 60-68.
- Kodali, M. et al. (2017). Air breathing cathodes for microbial fuel cell using Mn-, Fe-, Co- and Ni-containing platinum group metal-free catalysts. Electrochimica Acta, 231, 115-124.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+cathodeMaterial&body=**Parameter%3A**+cathodeMaterial%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fcathodematerial.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+cathodeMaterial&body=**Parameter%3A**+cathodeMaterial%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fcathodematerial.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+cathodeMaterial&body=**Parameter%3A**+cathodeMaterial%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fcathodematerial.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
