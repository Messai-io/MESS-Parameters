# Ultrasound Duration

Ultrasound duration specifies the total time of ultrasonic treatment applied to microbial electrochemical systems (MES), measured in seconds, minutes, or hours. This parameter determines the cumulative acoustic energy delivered to the system and is critical for balancing the beneficial effects of ultrasonic treatment (electrode cleaning, mass transfer enhancement, biofilm restructuring) against detrimental consequences (cell lysis, biofilm destruction, membrane damage, electrode erosion). Duration interacts multiplicatively with ultrasound frequency and power to determine the total treatment dose (energy per volume = power density multiplied by time).

In MES applications, ultrasound duration governs the transition between reversible and irreversible effects on biofilm structure. Short-duration ultrasonic pulses (1-30 seconds) create transient acoustic streaming and microconvection that enhance substrate transport to biofilm surfaces, increasing current generation by 10-30% with full recovery of biofilm structure after treatment cessation. Medium-duration treatment (1-10 minutes) begins to remove loosely attached biomass and thin the biofilm, reducing mass transfer resistance but potentially detaching productive biofilm layers. Long-duration treatment (more than 10 minutes continuous) can completely strip biofilms from electrode surfaces, requiring days to weeks of regrowth before MES performance recovers.

The concept of duty cycle (ratio of ultrasound-on time to total cycle time) is particularly relevant for MES applications. Pulsed ultrasound with short duty cycles (1-10% on-time, e.g., 1 second on / 99 seconds off) provides periodic mass transfer enhancement and biofilm maintenance without the cumulative damage of continuous treatment. This intermittent approach has been shown to maintain MES current density 20-40% above untreated controls over weeks of operation, while continuous ultrasound at the same intensity eventually destroys the biofilm within hours.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Environmental |
| **Subcategory** | Sound & Ultrasound |
| **Type** | number |
| **Unit** | min |
| **Minimum** | 0 |
| **Maximum** | 60 |

## Typical Values

- **Valid Range**: 0.001 seconds - 24 hours
- **Typical Range for MES**: 1 second - 30 minutes per treatment
- **Electrode cleaning pulse**: 1-10 seconds
- **Mass transfer enhancement**: 10-60 seconds
- **Biofilm thinning treatment**: 1-5 minutes
- **Complete biofilm removal**: 10-60 minutes
- **Cell lysis (laboratory sonication)**: 5-30 minutes at high power
- **Pulsed duty cycle (typical)**: 1-10% (e.g., 5 seconds every 5 minutes)
- **Maximum recommended single treatment**: 5-10 minutes at moderate power

## Measurement Methods

- **Timer-Controlled Ultrasonic Generator**: Programmable ultrasonic generators (Branson, Hielscher UP-series) provide precise duration control from 0.1 seconds to continuous operation with resolution of 0.01-1 seconds. Digital controllers enable programming of complex duty cycles (on-time, off-time, number of cycles, total treatment duration) with timing accuracy better than 0.1%. Built-in energy totalizers record the cumulative energy delivered (joules) for each treatment session, providing the most directly relevant measure of treatment dose. Real-time power monitoring confirms that ultrasonic output remains constant throughout the programmed duration.
- **External Timer with Power Monitoring**: For ultrasonic systems without built-in timers, external precision timers (programmable relay, PLC, digital timer switch) control power supply to the ultrasonic generator. Power monitoring (wattmeter or current clamp on the generator input) records actual on/off timing and power delivery. Integration of power over time yields total energy delivered. This approach allows retrofitting duration control to existing ultrasonic equipment and enables complex temporal patterns not available in the original generator firmware.
- **Acoustic Sensor Duration Verification**: Hydrophones or acoustic emission sensors positioned in the MES reactor detect the actual start and stop of ultrasonic treatment, providing independent verification of treatment duration. Acoustic monitoring captures phenomena that electronic timers cannot detect: warm-up transients (2-10 seconds for full acoustic output to develop), power fluctuations during operation, and residual acoustic energy after commanded shut-off (acoustic ringing lasting 0.1-1 seconds). These measurements refine the effective treatment duration beyond the nominal timer setting.

## Affecting Factors

### Primary

- **Ultrasound power and intensity**: Duration requirements are inversely related to applied power for a given treatment effect. An electrode cleaning effect achievable in 5 seconds at 100 W/L requires approximately 50 seconds at 10 W/L. However, the relationship is not simply linear due to cavitation threshold effects: below the cavitation threshold, doubling duration doubles only the streaming-based effects, while above the threshold, cavitation-related effects (shock waves, microjets) create qualitatively different and more powerful treatment even at short durations.
- **Biofilm age and EPS content**: Mature biofilms (more than 4 weeks) with dense EPS matrices require 3-10x longer ultrasonic treatment for equivalent thinning compared to young biofilms (less than 1 week). EPS absorbs acoustic energy through viscoelastic damping, attenuating ultrasound penetration and shielding cells in the biofilm interior. Treatment durations effective for young biofilm maintenance (1-5 seconds) may be insufficient for mature biofilm management, while durations effective for mature biofilm (30-120 seconds) may completely destroy young biofilms.
- **Temperature effects on cavitation**: Temperature affects both cavitation intensity and biofilm mechanical properties during ultrasonic treatment. Water at 20 degrees C requires lower acoustic intensity for cavitation onset but produces more violent cavitation collapse compared to 50 degrees C. Combined effects mean that the same ultrasonic treatment duration produces 20-40% more biofilm removal at 20 degrees C than at 40 degrees C due to stronger cavitation, partially offset by reduced biofilm mechanical strength at higher temperature.
- **Reactor geometry and acoustic coupling**: The fraction of ultrasonic energy reaching the electrode-biofilm interface depends on transducer placement, coupling medium, and reactor wall transmission. Direct-contact ultrasonic probes (horn-type, immersed in electrolyte) deliver nearly 100% of acoustic energy to the liquid. External transducers bonded to reactor walls lose 30-70% of energy through wall transmission and reflection. Inefficient acoustic coupling requires proportionally longer treatment durations to achieve equivalent effects.
- **Recovery period between treatments**: The interval between ultrasonic treatments determines biofilm recovery and regrowth. Short recovery periods (less than 1 hour between treatments) prevent biofilm re-establishment, eventually sterilizing the electrode surface. Long recovery periods (more than 24 hours) allow complete biofilm recovery, negating the thinning effect. Optimal treatment intervals (4-12 hours) maintain biofilm in a partially thinned state with enhanced mass transfer while preserving the electroactive community.

## Compatible Systems

Physical Environmental Factors

## References

- Mason, T. J., & Lorimer, J. P. (2002). *Applied Sonochemistry*. Wiley-VCH.
- Pitt, W. G., & Ross, S. A. (2003). Ultrasound increases the rate of bacterial cell growth. *Biotechnology Progress*, 19(3), 1038-1044.
- Hua, I., & Thompson, J. E. (2000). Inactivation of Escherichia coli by sonication at discrete ultrasonic frequencies. *Water Research*, 34(15), 3888-3893.
- Zhu, X., & Bhatt, N. (2015). Ultrasound-enhanced bioelectrochemistry. In *Handbook on Applications of Ultrasound*. CRC Press.
- Shrestha, N., et al. (2018). Effect of applied potential and sonication on the bioelectrochemical performance of MES. *Bioresource Technology*, 261, 61-69.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Ultrasound+Duration&body=**Parameter%3A**+Ultrasound+Duration%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fultrasound-duration.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Ultrasound+Duration&body=**Parameter%3A**+Ultrasound+Duration%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fultrasound-duration.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Ultrasound+Duration&body=**Parameter%3A**+Ultrasound+Duration%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fultrasound-duration.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
