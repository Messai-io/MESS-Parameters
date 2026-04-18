# Startup Mode

Startup mode describes the protocol used to initiate biofilm development and bring an MES from an uninoculated (or dormant) state to stable, productive operation. The startup phase is the most variable and often the most time-consuming phase of MES operation, typically requiring 2--8 weeks for systems inoculated with environmental samples and 1--2 weeks for systems seeded with pre-acclimated biofilm. The startup protocol significantly influences the final biofilm composition, current generation capacity, and long-term system stability.

Common startup strategies include: open-circuit acclimation (allowing biofilm to colonize the anode at OCV before connecting a load, 3--7 days), fixed-resistance startup (connecting a high resistance that is gradually decreased as current increases), potentiostatic startup (holding the anode at a fixed potential, e.g., -0.2 V vs. Ag/AgCl, using a potentiostat), and direct inoculation with pre-acclimated biofilm (transferring biofilm from an established MFC by physical scraping or effluent transfer).

Potentiostatic startup at a controlled anode potential provides the most reproducible biofilm development because it maintains a constant thermodynamic driving force for extracellular electron transfer regardless of cathode condition. However, it requires a potentiostat per reactor, which is expensive for multi-reactor studies. Fixed-resistance startup is simpler and more practical for parallel operation of multiple reactors.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Operational |
| **Subcategory** | Startup Procedures |
| **Type** | select |

## Typical Values

- **Valid Range**: Categorical (open-circuit, fixed-resistance, potentiostatic, pre-acclimated transfer, gradient-resistance)
- **Open-circuit acclimation**: 3 -- 7 d at OCV, then connect load
- **Fixed-resistance startup**: Start at 1000 ohm, decrease to optimal over 2--4 weeks
- **Potentiostatic (-0.2 V vs. Ag/AgCl)**: Stable current in 5 -- 14 d
- **Pre-acclimated transfer**: Stable current in 1 -- 7 d
- **Gradient resistance (stepwise decrease)**: 1000 -> 500 -> 200 -> 100 ohm over 4 weeks
- **Time to stable performance**: 7 -- 60 d depending on method and inoculum
- **Startup criterion**: < 10% variation in peak current across 3 consecutive cycles

## Measurement Methods

- **Current Generation Monitoring**: Continuous voltage monitoring across the external load provides real-time startup tracking. The startup is considered complete when reproducible batch cycles (< 10% variation in peak current and cycle duration across 3 consecutive cycles) are achieved.
- **Biofilm Development Monitoring**: Periodic EIS measurements track the decrease in charge transfer resistance as the biofilm develops. Confocal microscopy of sacrificial electrodes at different timepoints shows biofilm thickness and coverage progression.

## Affecting Factors

### Primary

- **Inoculum Quality**: Pre-acclimated MFC effluent provides 5--10x faster startup than fresh activated sludge. Pure cultures (Geobacter) at high cell density provide the fastest startup under controlled conditions.
- **Substrate Type**: Acetate (simple, directly usable by Geobacter) gives faster startup (7--14 d) than complex substrates (wastewater, 21--60 d) which require fermentative community development first.
- **Anode Potential**: Potentiostatic control at -0.2 to 0.0 V vs. Ag/AgCl provides optimal thermodynamic driving force for Geobacter colonization.
- **Temperature**: Startup at 30--35 C is 2--3x faster than at 20 C and 5--10x faster than at 10 C.

## Related Parameters

- **name**: [Inoculum Source](inoculum-source.md)

- **relationship**: Microbial seed community
- **name**: [Inoculum Volume](inoculum-volume.md)

- **relationship**: Volume of seed culture
- **name**: [External Load](external-load.md)

- **relationship**: Initial and final resistance settings
- **name**: [Shutdown Mode](shutdown-mode.md)

- **relationship**: Complementary shutdown protocol
- **name**: [Steady-State Criteria](steady-state-criteria.md)

- **relationship**: Defines when startup is complete

## Compatible Systems

Startup Shutdown

## References

- Liu, H., Cheng, S., Logan, B.E. (2005). "Production of electricity from acetate or butyrate using a single-chamber microbial fuel cell." Environmental Science & Technology, 39(2), 658-662.
- Torres, C.I. et al. (2009). "Selecting anode-respiring bacteria based on anode potential." Environmental Science & Technology, 43(24), 9519-9524.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Startup+Mode&body=**Parameter%3A**+Startup+Mode%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fstartup-mode.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Startup+Mode&body=**Parameter%3A**+Startup+Mode%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fstartup-mode.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Startup+Mode&body=**Parameter%3A**+Startup+Mode%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fstartup-mode.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
