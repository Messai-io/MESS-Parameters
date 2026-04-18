# Preservation Method

Preservation method describes the techniques used to maintain viability and activity of microbial inocula, biofilm samples, or complete MES reactors during storage, transport, or periods of non-operation. Proper preservation is essential for reproducible MES research (standardized inocula across experiments), technology transfer (shipping active biofilms between laboratories), and practical deployment (seasonal shutdown and restart of outdoor systems).

Common preservation methods include: refrigerated storage (4 C, maintaining culture in liquid medium), cryopreservation (storage at -80 C or in liquid nitrogen at -196 C with cryoprotectant agents such as glycerol or DMSO), lyophilization (freeze-drying for ambient-temperature storage), desiccation (controlled drying of biofilm on the electrode surface), and continuous maintenance culture (serial transfer in fresh medium every 1--2 weeks). Each method offers different trade-offs between viability retention, storage duration, convenience, and cost.

For electroactive biofilms, preservation is particularly challenging because the biofilm's three-dimensional architecture, extracellular polymer matrix, and electron transfer conduit networks (nanowires, cytochrome chains) are sensitive to physical and chemical disruption. Even mild preservation treatments can reduce the initial current generation capacity by 30--80%, requiring a re-acclimation period of days to weeks after revival.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Operational |
| **Subcategory** | Shutdown Procedures |
| **Type** | select |

## Typical Values

- **Valid Range**: Categorical
- **Refrigerated storage (4 C, liquid)**: Viable for 1 -- 4 weeks; 50--80% activity retention
- **Cryopreservation (-80 C, 10% glycerol)**: Viable for 1 -- 5+ years; 20--60% activity retention
- **Liquid nitrogen (-196 C)**: Viable for 10+ years; 30--70% activity retention
- **Lyophilization**: Viable for 1 -- 10 years ambient; 10--40% activity retention
- **Desiccation on electrode (room temperature)**: Viable for 1 -- 4 weeks; 20--50% activity retention
- **Continuous maintenance culture**: 100% activity; requires weekly attention
- **Re-acclimation time after revival**: 1 -- 14 days depending on method

## Measurement Methods

- **Viability Assessment Post-Revival**: Cell viability is measured immediately after revival using: live/dead staining (SYTO 9/propidium iodide, fluorescence microscopy), colony forming units (CFU plate counts), flow cytometry with viability dyes, or most probable number (MPN) technique. Viability = (live cells post-revival / live cells pre-preservation) * 100%.
- **Activity Assessment**: Electrochemical activity is assessed by inoculating a standardized MFC with the revived culture and comparing the time to first detectable current, maximum current density, and batch cycle duration to a fresh (non-preserved) inoculum control.

## Affecting Factors

### Primary

- **Cooling/Freezing Rate**: Slow cooling (1 C/min) with cryoprotectant minimizes ice crystal damage. Rapid freezing without cryoprotectant causes 50--90% cell death from intracellular ice formation.
- **Cryoprotectant Type and Concentration**: Glycerol (10--15% v/v) is standard for most bacteria. DMSO (5--10%) may be better for some species. Trehalose provides cryoprotection without membrane permeation.
- **Storage Duration**: Viability decreases with storage time for all methods except liquid nitrogen. At -80 C, 10--30% viability loss per year is typical.
- **Community Complexity**: Mixed communities (typical MES inocula) may lose specific taxa during preservation, altering the revived community composition.
- **Revival Protocol**: Gradual thawing (37 C water bath for 1--2 min), immediate dilution into pre-warmed medium, and gentle handling improve revival success.

## Related Parameters

- **name**: [Inoculum Source](inoculum-source.md)

- **relationship**: Material being preserved
- **name**: [Inoculum Volume](inoculum-volume.md)

- **relationship**: Volume of preserved culture used
- **name**: [Storage Temperature](storage-temperature.md)

- **relationship**: Temperature during preservation
- **name**: [Startup Mode](startup-mode.md)

- **relationship**: Revival and re-acclimation protocol

## Compatible Systems

Startup Shutdown

## References

- Yates, M.D. et al. (2012). "Convergent development of anodic bacterial communities in microbial fuel cells." ISME Journal, 6(11), 2002-2013.
- Mazur, P. (1984). "Freezing of living cells: mechanisms and implications." American Journal of Physiology, 247(3), C125-142.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Preservation+Method&body=**Parameter%3A**+Preservation+Method%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fpreservation-method.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Preservation+Method&body=**Parameter%3A**+Preservation+Method%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fpreservation-method.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Preservation+Method&body=**Parameter%3A**+Preservation+Method%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fpreservation-method.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
