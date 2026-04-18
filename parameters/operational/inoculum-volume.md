# Inoculum Volume

Inoculum volume is the quantity of microbial seed culture or environmental sample added to a microbial electrochemical system (MES) to establish the initial biofilm and planktonic microbial community. Expressed in mL, L, or as a percentage of the total reactor working volume, this parameter controls the initial biomass concentration, the diversity of the seed community, and the rate of biofilm colonization on the anode surface. Adequate inoculum volume is essential for reliable startup; insufficient inoculum leads to extended lag phases and variable performance.

The optimal inoculum volume represents a balance between providing sufficient biomass for rapid colonization and avoiding excessive organic loading from the inoculum matrix (which may contain high concentrations of volatile solids, nutrients, and competing organisms). Typical practice uses 10--30% of the reactor working volume as inoculum, with the remainder filled with fresh medium or wastewater. Higher inoculum fractions (50--100%) are used when the inoculum itself is the target wastewater (e.g., inoculating with primary wastewater for a wastewater treatment MFC).

For pure culture inoculation (e.g., Geobacter sulfurreducens), the inoculum volume is smaller (1--10% v/v) because the culture is pre-grown to high cell density (OD600 0.3--0.6, approximately 10^8 cells/mL) in defined medium. For environmental inocula (activated sludge, sediment), larger volumes are used because the electroactive fraction of the community is small (typically < 1% of total cells).

## Basic Information

| Property | Value |
|---|---|
| **Category** | Operational |
| **Subcategory** | Startup Procedures |
| **Type** | number |
| **Unit** | % |
| **Minimum** | 1 |
| **Maximum** | 50 |
| **Papers Reporting** | 13 |

## Typical Values

- **Valid Range**: 0.1 -- 100% of reactor volume
- **Pure culture inoculum (G. sulfurreducens)**: 1 -- 10% v/v at OD600 0.3--0.6
- **Activated sludge inoculum**: 10 -- 30% v/v at 2000--5000 mg VSS/L
- **Digester sludge inoculum**: 10 -- 20% v/v at 10000--40000 mg VSS/L
- **Wastewater as inoculum + substrate**: 50 -- 100% v/v
- **Pre-acclimated MFC effluent**: 10 -- 50% v/v
- **Sediment inoculum**: 5 -- 20% v/v (wet weight basis)
- **Typical absolute volume (28 mL reactor)**: 3 -- 14 mL

## Measurement Methods

- **Volumetric Measurement**: The inoculum is measured in a graduated cylinder or dispensed by calibrated pipette and added to the reactor. For slurry inocula (sludge, sediment), volumetric measurement includes both liquid and solid phases. Precision: +/- 1% for pipette delivery, +/- 2--5% for graduated cylinder.
- **Gravimetric Measurement**: For dense inocula (digester sludge, sediment), mass-based measurement is more reproducible than volumetric. The inoculum is weighed on a balance and the volume calculated from the measured density. Precision: +/- 0.1 g for analytical balance.
- **Cell-Count-Based Dosing**: For standardized inoculation, the cell concentration in the seed culture is measured (OD600, flow cytometry, or plate counts) and the inoculum volume is calculated to achieve a target initial cell density in the reactor (typically 10^6--10^8 cells/mL). This provides the most reproducible startup conditions.

## Affecting Factors

### Primary

- **Inoculum Source**: Dense, concentrated inocula (digester sludge at 30 g VSS/L) require smaller volumes to provide adequate biomass compared to dilute sources (wastewater at 0.2 g VSS/L).
- **Reactor Volume**: The inoculum-to-reactor volume ratio determines the initial biomass concentration. Maintaining a consistent ratio (e.g., 20% v/v) when scaling from 28 mL to 28 L requires proportional scaling of inoculum volume.
- **Target Startup Time**: Faster startup requires more inoculum. Doubling the inoculum fraction can reduce startup time by 20--40% by increasing initial colonization density.
- **Competing Organisms**: Large volumes of digester sludge introduce more methanogens, which compete with EAB. Smaller inoculum volumes (10% vs. 30%) with fresh medium dilution can reduce methanogenic competition during startup.
- **Substrate in Inoculum Matrix**: The inoculum itself contributes organic loading. Activated sludge at 5000 mg VSS/L adds approximately 7500 mg COD/L from endogenous respiration substrate. This must be considered when calculating the initial organic loading.

## Related Parameters

- **name**: [Inoculum Source](inoculum-source.md)

- **relationship**: Origin of microbial community
- **name**: [Initial Volume](initial-volume.md)

- **relationship**: Total starting volume
- **name**: [Initial Substrate Concentration](initial-substrate-conc.md)

- **relationship**: Effective substrate after dilution
- **name**: [Startup Mode](startup-mode.md)

- **relationship**: Overall startup protocol
- **name**: [Batch Volume](batch-volume.md)

- **relationship**: Working volume receiving inoculum

## Compatible Systems

Startup Shutdown

## References

- Logan, B.E. et al. (2006). "Microbial fuel cells: methodology and technology." Environmental Science & Technology, 40(17), 5181-5192.
- Liu, H., Logan, B.E. (2004). "Electricity generation using an air-cathode single chamber microbial fuel cell in the presence and absence of a proton exchange membrane." Environmental Science & Technology, 38(14), 4040-4046.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Inoculum+Volume&body=**Parameter%3A**+Inoculum+Volume%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Finoculum-volume.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Inoculum+Volume&body=**Parameter%3A**+Inoculum+Volume%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Finoculum-volume.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Inoculum+Volume&body=**Parameter%3A**+Inoculum+Volume%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Finoculum-volume.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
