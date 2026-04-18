# Shutdown Mode

Shutdown mode describes the protocol followed when an MES is taken out of active service, whether for planned maintenance, seasonal cessation, equipment failure response, or permanent decommissioning. The shutdown procedure directly affects the ability to restart the system and the time required to restore full performance. A well-designed shutdown protocol preserves the electroactive biofilm, prevents irreversible material damage, and ensures safe handling of reactor contents.

The critical concern during MES shutdown is biofilm preservation. Electroactive biofilms require continuous electron acceptor access (the anode) and substrate availability to maintain viability. Extended periods without substrate cause endogenous respiration, biomass decay, and eventual biofilm detachment. Complete drainage exposes the biofilm to air, causing desiccation damage. Optimal shutdown protocols maintain the biofilm in a hydrated, quiescent state with minimal metabolic demand.

Common shutdown modes include: standby (maintain liquid and open circuit, no feeding, suitable for 1--7 days), wet storage (fill with buffer solution, seal, store at 4 C, suitable for weeks to months), dry storage (drain, seal, store at room temperature, requires re-acclimation upon restart), and controlled decommissioning (neutralize, drain, disassemble for disposal or recycling).

## Basic Information

| Property | Value |
|---|---|
| **Category** | Operational |
| **Subcategory** | Shutdown Procedures |
| **Type** | select |

## Typical Values

- **Valid Range**: Categorical (standby, wet storage, dry storage, controlled decommission)
- **Standby (open circuit, liquid retained)**: 1 -- 7 days; 80--100% activity on restart
- **Wet storage (buffer, 4 C)**: 1 -- 12 weeks; 50--90% activity on restart
- **Wet storage (buffer, room temperature)**: 1 -- 4 weeks; 40--80% activity
- **Dry storage (sealed, room temperature)**: 1 -- 4 weeks; 20--60% activity
- **Recovery time (standby)**: < 1 batch cycle
- **Recovery time (wet storage)**: 1 -- 5 batch cycles
- **Recovery time (dry storage)**: 5 -- 20 batch cycles

## Measurement Methods

- **Recovery Performance Testing**: After shutdown and restart, performance (current density, power density) is compared to pre-shutdown levels. The number of cycles or days required to reach 90% of pre-shutdown performance defines the recovery time.
- **Biofilm Viability Assessment**: Live/dead staining (SYTO 9/PI) and confocal microscopy quantify biofilm viability after different shutdown durations and methods.

## Affecting Factors

### Primary

- **Shutdown Duration**: Short durations (< 1 week) tolerate simple standby. Longer durations require active preservation (wet storage at 4 C).
- **Biofilm Hydration**: Maintaining liquid contact with the biofilm is the single most important factor. Even brief desiccation (< 1 hour) can cause 50% viability loss.
- **Temperature**: Storage at 4 C slows metabolic activity and biomass decay, extending viable storage duration by 2--5x compared to room temperature.
- **Oxygen Exposure**: Sealing the reactor to prevent oxygen intrusion preserves the strictly anaerobic members of the community (Geobacter).

## Related Parameters

- **name**: [Startup Mode](startup-mode.md)

- **relationship**: Restart protocol after shutdown
- **name**: [Storage Temperature](storage-temperature.md)

- **relationship**: Temperature during shutdown
- **name**: [Preservation Method](preservation-method.md)

- **relationship**: Inoculum/biofilm preservation
- **name**: [Idle Time](idle-time.md)

- **relationship**: Brief pauses between cycles

## Compatible Systems

Startup Shutdown

## References

- Kim, J.R. et al. (2009). "Power generation using different cation, anion, and ultrafiltration membranes in microbial fuel cells." Environmental Science & Technology, 41(3), 1004-1009.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Shutdown+Mode&body=**Parameter%3A**+Shutdown+Mode%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fshutdown-mode.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Shutdown+Mode&body=**Parameter%3A**+Shutdown+Mode%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fshutdown-mode.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Shutdown+Mode&body=**Parameter%3A**+Shutdown+Mode%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fshutdown-mode.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
