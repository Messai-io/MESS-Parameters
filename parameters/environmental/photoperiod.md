# Photoperiod

Photoperiod defines the duration and temporal pattern of light exposure within the operational cycle of photo-bioelectrochemical systems, expressed as the ratio of light hours to dark hours (e.g., 16:8 L:D) or as total daily light hours. In MES incorporating phototrophic microorganisms, photoperiod governs the diurnal rhythm of photosynthetic electron generation, oxygen production, and carbon fixation, creating predictable oscillations in system electrical output, pH, dissolved oxygen, and microbial metabolic state.

The photoperiod establishes a fundamental operational rhythm in photo-BECs. During the light phase, photosynthetic organisms generate electrons through water-splitting photolysis at photosystem II, producing O2 and directing electron flow through the photosynthetic electron transport chain. A fraction of these electrons are diverted to the electrode, generating photocurrent. During the dark phase, photosynthesis ceases and heterotrophic respiration dominates, consuming stored carbon reserves (starch, glycogen, PHB) and oxygen. The transition from light to dark causes current to drop 50-90% within minutes to hours, while DO decreases from supersaturation (10-15 mg/L) to near-anoxic conditions (less than 0.5 mg/L), fundamentally shifting the electrochemical and biological operating environment.

Photoperiod optimization for MES must balance multiple competing objectives: maximizing total daily photosynthetic electron output, preventing photoinhibition from excessive continuous illumination, allowing sufficient dark period for cellular repair and maintenance processes, and managing the electrical output intermittency that photoperiod cycling creates. Research has demonstrated that continuous illumination (24:0 L:D) does not maximize long-term productivity because accumulated photodamage reduces quantum efficiency over days to weeks. Optimal photoperiods of 14-18 hours light per day typically produce 10-30% more cumulative electricity than 24-hour illumination over multi-week operation periods.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Environmental |
| **Type** | number |
| **Unit** | hours |
| **Papers Reporting** | 62 |

## Typical Values

- **Valid Range**: 0-24 hours light per day
- **Typical Range**: 8-18 hours light per day
- **Natural summer (45 degrees N latitude)**: 14-16 hours
- **Natural winter (45 degrees N latitude)**: 8-10 hours
- **Equatorial**: 12 hours year-round
- **Standard laboratory**: 12:12 or 16:8 L:D
- **Continuous illumination**: 24:0 L:D
- **Short-cycle rapid alternation**: 1-60 minutes L:D (flashing light effect)

## Measurement Methods

- **Automated Light Timer with PAR Verification**: Programmable timer-controlled lighting systems (mechanical or digital timers, smart relays, PLC-controlled lighting) provide precise photoperiod control with switching accuracy of 1-60 seconds. Light/dark transitions are verified using quantum sensors (PAR meters) connected to data loggers that record actual illumination timing and PFD throughout the experiment. Discrepancies between programmed and actual photoperiod can occur due to timer drift, lamp warm-up time (fluorescent: 2-5 minutes to full output, LED: instantaneous), and power interruptions. Data logging at 1-minute intervals ensures complete photoperiod documentation.
- **Light Integration Sensors**: Daily light integral (DLI) sensors accumulate total photon flux over 24-hour periods, providing an integrated measure that combines photoperiod and PFD into a single productivity-relevant metric (mol/m^2/day). DLI of 10-20 mol/m^2/day is typical for laboratory photo-BECs, compared to 20-60 mol/m^2/day for outdoor systems at mid-latitudes. This metric enables comparison between different photoperiod/PFD combinations: 200 umol/m^2/s for 16 hours gives DLI = 11.5 mol/m^2/day, equivalent to 384 umol/m^2/s for 8.3 hours.
- **Photodiode-Based Dawn/Dusk Detection**: For outdoor MES installations, calibrated photodiodes with data logging detect the actual dawn (PFD exceeding threshold, typically 1-5 umol/m^2/s) and dusk times, accounting for cloud cover, seasonal variation, and site-specific shading. These measurements provide the actual photoperiod experienced by the system, which may differ significantly from astronomical calculations due to local obstructions, weather, and reactor orientation.

## Affecting Factors

### Primary

- **Latitude and season**: Natural photoperiod varies from 0-24 hours at polar latitudes to approximately 12 hours at the equator. At 45 degrees N latitude, photoperiod ranges from 8.5 hours (winter solstice) to 15.5 hours (summer solstice), creating seasonal performance variation of 40-60% in outdoor photo-BECs. Supplemental artificial lighting can extend effective photoperiod but increases energy cost (0.05-0.5 kWh per mole of supplemental photons for LED systems).
- **Phototrophic species and adaptation**: Different phototrophic organisms have evolved optimal photoperiods reflecting their natural habitats. Temperate freshwater algae (Chlorella, Scenedesmus) perform optimally at 14-16 hours, tropical marine species at 12 hours, and polar cyanobacteria at 20-24 hours. Chromatic adaptation and circadian clock mechanisms require 3-7 days to adjust to new photoperiod regimes, during which productivity may be 20-40% below steady-state values.
- **Light intensity during light phase**: High PFD during short photoperiods can cause photoinhibition that persists into the dark phase (chronic photoinhibition), while moderate PFD during long photoperiods maintains sustained photosynthesis. The product of PFD and photoperiod duration (daily light integral, DLI) is the primary productivity determinant, but the same DLI delivered as high-intensity short photoperiod produces 10-30% less biomass than low-intensity long photoperiod due to light saturation and photoinhibition effects.
- **Dark phase metabolism**: During the dark period, phototrophic organisms switch from autotrophic to heterotrophic metabolism, consuming 10-30% of daytime carbon fixation products through respiration. In photo-BECs, dark-phase heterotrophic electron transfer to electrodes can contribute 5-20% of total daily current, partially offsetting the loss of photosynthetic current. The dark respiration rate and its contribution to bioelectricity depend on the duration and metabolic preparation during the preceding light phase.
- **Light/dark transition effects**: Abrupt light-to-dark transitions cause transient current spikes (lasting 1-10 seconds) due to discharge of the photosynthetic electron transport chain, followed by rapid current decrease. Gradual transitions (simulating dawn/dusk over 30-60 minutes) reduce these transients and may improve long-term biofilm stability. The dark-to-light transition includes a lag period (1-5 minutes) for photosystem activation before full photosynthetic current is restored.

## Compatible Systems

Light Conditions

## References

- McCormick, A. J., et al. (2011). Biophotovoltaics: Oxygenic photosynthetic organisms in the world of bioelectrochemical systems. *Energy & Environmental Science*, 8, 1092-1109.
- Xiao, L., & He, Z. (2014). Applications and perspectives of phototrophic microorganisms for electricity generation from organic compounds in microbial fuel cells. *Renewable and Sustainable Energy Reviews*, 37, 550-559.
- Bombelli, P., et al. (2015). Quantitative analysis of the factors limiting solar power transduction by Synechocystis sp. PCC 6803 in biological photovoltaic devices. *Energy & Environmental Science*, 4, 4690-4698.
- Saar, K. L., et al. (2018). Enhancing power density of biophotovoltaics by decoupling storage and power delivery. *Nature Energy*, 3, 75-81.
- Kromdijk, J., et al. (2016). Improving photosynthesis and crop productivity by accelerating recovery from photoprotection. *Science*, 354(6314), 857-861.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Photoperiod&body=**Parameter%3A**+Photoperiod%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fphotoperiod.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Photoperiod&body=**Parameter%3A**+Photoperiod%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fphotoperiod.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Photoperiod&body=**Parameter%3A**+Photoperiod%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fphotoperiod.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
