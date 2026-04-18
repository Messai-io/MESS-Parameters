# Inoculum Source

Inoculum source describes the origin of the microbial community used to seed the anode biofilm in a microbial electrochemical system (MES). The choice of inoculum is one of the most critical decisions in MES startup because it determines the initial microbial diversity, the presence or absence of electrochemically active bacteria (EAB), and the time required for biofilm development and performance stabilization. Different inoculum sources contain vastly different microbial communities, and this initial seeding strongly influences the mature biofilm composition and long-term system performance.

The most commonly used inoculum sources include: activated sludge from municipal wastewater treatment plants (most common, highly diverse community), anaerobic digester sludge (enriched in anaerobes, including methanogens that compete with EAB), primary wastewater effluent (moderate diversity, naturally occurring EAB), existing MFC biofilm (pre-enriched EAB, fastest startup), sediment from freshwater or marine environments (diverse anaerobic community, often including Geobacter and Shewanella), and defined pure cultures (Geobacter sulfurreducens, Shewanella oneidensis -- for mechanistic studies).

The inoculum source affects startup time dramatically. Pre-acclimated MFC effluent can achieve stable current within 1--3 days, while fresh activated sludge typically requires 2--4 weeks, and primary wastewater may need 4--8 weeks for full biofilm development. The use of pre-acclimated inoculum reduces not only startup time but also the variability between replicate reactors, improving experimental reproducibility.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Operational |
| **Subcategory** | Startup Procedures |
| **Type** | select |

## Typical Values

- **Valid Range**: Categorical
- **Activated sludge (MLSS 2000--5000 mg/L)**: Most common, startup 14--30 d
- **Anaerobic digester sludge (VS 20--40 g/L)**: Startup 14--28 d, higher methanogenic competition
- **Primary wastewater effluent**: Startup 21--60 d, lower initial biomass
- **Pre-acclimated MFC effluent**: Startup 1--7 d, fastest, best reproducibility
- **Freshwater sediment**: Startup 14--42 d, good Geobacter enrichment
- **Marine sediment**: Startup 14--42 d, salt-tolerant communities
- **Pure culture (G. sulfurreducens)**: Startup 3--10 d under strict anaerobic conditions
- **Mixed enrichment culture**: Startup 7--14 d

## Measurement Methods

- **Source Documentation**: The inoculum source is documented as a categorical descriptor with details on collection site, collection date, storage conditions, and any pre-treatment steps. For wastewater treatment plant sources, the plant name, process stage, and operating conditions (SRT, HRT, temperature) should be recorded.
- **Microbial Community Characterization**: The initial community composition is characterized by 16S rRNA gene amplicon sequencing. DNA is extracted (PowerSoil kit or similar), the V3-V4 or V4 region is amplified, and sequencing is performed on Illumina MiSeq. Analysis (QIIME2, mothur) provides taxonomic composition, diversity indices (Shannon, Simpson, Chao1), and relative abundance of known EAB genera (Geobacter, Shewanella, Desulfuromonas).
- **Biomass Quantification**: The inoculum biomass concentration is measured as volatile suspended solids (VSS, APHA Method 2540E), total protein (Bradford or BCA assay), or cell counts (flow cytometry, hemocytometer). Typical inoculum concentrations: activated sludge 2000--5000 mg VSS/L; digester sludge 10000--40000 mg VSS/L.

## Affecting Factors

### Primary

- **EAB Prevalence**: Inoculum sources with higher initial concentrations of EAB (Geobacter, Shewanella) produce faster startup. Anaerobic environments (sediments, digesters) typically harbor more EAB than aerobic environments.
- **Microbial Diversity**: Higher diversity inocula (activated sludge, Shannon index > 4) provide a broader metabolic capability for degrading complex substrates but may also contain more competitors (methanogens, fermenters).
- **Methanogen Competition**: Anaerobic digester sludge contains high concentrations of methanogens that compete with EAB for acetate. Strategies to suppress methanogens include brief air exposure (2 h), heat treatment (100 C, 15 min), or BES inhibition.
- **Storage and Handling**: Fresh inoculum (used within 24 h of collection) outperforms stored inoculum. Storage at 4 C is acceptable for up to 1 week with < 20% activity loss. Frozen storage (-80 C with glycerol cryoprotectant) enables long-term preservation but reduces viability by 30--70%.
- **Pre-Acclimation**: Running the inoculum through 3--5 batch cycles in a sacrificial MFC before transferring to the experimental reactors significantly reduces startup time and inter-replicate variability.

## Related Parameters

- **name**: [Inoculum Volume](inoculum-volume.md)

- **relationship**: Volume of inoculum added
- **name**: [Startup Mode](startup-mode.md)

- **relationship**: Startup protocol details
- **name**: [Initial Substrate Concentration](initial-substrate-conc.md)

- **relationship**: Substrate for initial biofilm growth
- **name**: [Wastewater Type](wastewater-type.md)

- **relationship**: Influent characteristics
- **name**: [Preservation Method](preservation-method.md)

- **relationship**: Inoculum storage method

## Compatible Systems

Startup Shutdown

## References

- Liu, H., Cheng, S., Logan, B.E. (2005). "Production of electricity from acetate or butyrate using a single-chamber microbial fuel cell." Environmental Science & Technology, 39(2), 658-662.
- Kiely, P.D. et al. (2011). "Anode microbial communities produced by changing from microbial fuel cell to microbial electrolysis cell operation using two different wastewaters." Bioresource Technology, 102(1), 388-394.
- Yates, M.D. et al. (2012). "Convergent development of anodic bacterial communities in microbial fuel cells." ISME Journal, 6(11), 2002-2013.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Inoculum+Source&body=**Parameter%3A**+Inoculum+Source%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Finoculum-source.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Inoculum+Source&body=**Parameter%3A**+Inoculum+Source%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Finoculum-source.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Inoculum+Source&body=**Parameter%3A**+Inoculum+Source%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Finoculum-source.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
