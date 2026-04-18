# Ultrasound Frequency

Ultrasound frequency defines the oscillation rate of high-frequency acoustic waves (above 20 kHz) applied to microbial electrochemical systems (MES) for performance enhancement, electrode maintenance, and process intensification. The frequency determines the dominant physical mechanism of ultrasonic action: low-frequency ultrasound (20-100 kHz) generates violent transient cavitation with strong mechanical effects; medium-frequency ultrasound (100 kHz - 1 MHz) produces stable cavitation and enhanced acoustic streaming; and high-frequency ultrasound (above 1 MHz) creates primarily thermal and acoustic streaming effects without significant cavitation. Each frequency regime offers distinct advantages and risks for MES applications.

At the standard cleaning frequency of 20-40 kHz, cavitation bubbles grow to relatively large sizes (approximately 100-170 micrometers resonant radius) before violent collapse, generating intense shock waves, microjets (100-400 m/s), and transient hot spots. These effects provide powerful electrode cleaning and biofilm disruption capability but pose risks to sensitive MES components. At 200-500 kHz, smaller resonant bubble sizes (approximately 7-15 micrometers) produce less violent cavitation with more numerous, less destructive events, creating gentler but more homogeneous treatment. Above 1 MHz, cavitation is suppressed in favor of acoustic streaming and radiation pressure, providing non-destructive mass transfer enhancement well-suited to sensitive MES biofilms.

The choice of ultrasound frequency for MES applications must balance the treatment objective (cleaning, mass transfer enhancement, biofilm management) with the system's tolerance for mechanical disruption. Research has shown that frequencies in the 80-200 kHz range often provide the best compromise for MES: sufficient cavitation activity to prevent electrode fouling and enhance mass transfer, but moderate enough to preserve electroactive biofilm integrity and function. Multi-frequency systems that switch between high-frequency gentle treatment (maintenance mode) and low-frequency aggressive treatment (cleaning mode) are emerging as an advanced operational strategy.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Environmental |
| **Subcategory** | Sound & Ultrasound |
| **Type** | number |
| **Unit** | kHz |
| **Minimum** | 20 |
| **Maximum** | 1000 |
| **Papers Reporting** | 71 |

## Typical Values

- **Valid Range**: 20 kHz - 10 MHz
- **Typical Range for MES**: 20 kHz - 1 MHz
- **Standard cleaning frequency**: 25-40 kHz
- **Fine cleaning frequency**: 40-80 kHz
- **Gentle mass transfer enhancement**: 80-200 kHz
- **Acoustic streaming dominant**: 200 kHz - 1 MHz
- **Thermal effects dominant**: 1-10 MHz
- **Resonant bubble radius (water, 25 kHz)**: approximately 130 micrometers
- **Resonant bubble radius (water, 1 MHz)**: approximately 3.3 micrometers

## Measurement Methods

- **Hydrophone Spectral Analysis**: Calibrated hydrophones (Bruel and Kjaer 8103, needle hydrophones for frequencies above 1 MHz) positioned in the MES reactor measure the acoustic pressure spectrum via FFT analysis. The fundamental frequency, harmonics (2f, 3f, etc.), sub-harmonics (f/2, f/3), and broadband cavitation noise are all characterized. Harmonics and sub-harmonics indicate nonlinear bubble oscillation (stable cavitation), while broadband noise indicates transient cavitation. The ratio of sub-harmonic to fundamental amplitude is a cavitation activity metric that correlates with cleaning effectiveness. Frequency accuracy is better than 0.01% for the fundamental and 0.1% for harmonic content.
- **Impedance Analysis of Transducer**: The acoustic output frequency is verified by measuring the electrical impedance of the piezoelectric transducer as a function of driving frequency. At the mechanical resonance frequency, impedance shows a characteristic minimum (for series resonance) or maximum (for anti-resonance). The resonance frequency depends on transducer geometry, piezoelectric material properties, and acoustic loading. Temperature changes shift resonance frequency by 10-100 Hz/K for typical PZT transducers, requiring retuning for operation over wide temperature ranges. Impedance analyzers (Agilent 4294A, Wayne Kerr 6500B) provide 0.1 Hz frequency resolution.
- **Cavitation Detection Methods**: The frequency-dependent cavitation regime is characterized using sonochemiluminescence (SCL), where cavitation-induced radical formation excites luminol to produce visible light. Imaging SCL spatial distribution at different frequencies reveals the cavitation field structure: at 20 kHz, intense localized SCL near the transducer surface; at 100 kHz, more distributed SCL throughout the reactor volume; at 1 MHz, no significant SCL (minimal cavitation). Quantitative SCL intensity (photon counts per second) provides a direct measure of cavitation activity at each frequency.

## Affecting Factors

### Primary

- **Cavitation threshold and intensity**: The acoustic pressure amplitude required for cavitation inception increases with frequency (approximately proportional to frequency^(1/2) in gassy liquids). At 20 kHz, cavitation threshold in water is approximately 100 kPa acoustic pressure; at 1 MHz, it increases to approximately 300 kPa. This means that at equal acoustic intensity, low-frequency ultrasound produces more cavitation than high-frequency ultrasound, determining the biofilm disruption capability.
- **Penetration depth and attenuation**: Acoustic attenuation in water increases with frequency squared, limiting the effective treatment depth at high frequencies. At 40 kHz, attenuation is 0.004 dB/cm (negligible over MES dimensions); at 1 MHz, attenuation is 0.22 dB/cm (50% intensity loss over 13 cm); at 3 MHz, attenuation is 2.0 dB/cm (50% loss over 1.5 cm). High-frequency treatment is thus confined to thin layers near the transducer, while low-frequency treatment penetrates the entire reactor volume.
- **Biofilm resonance and interaction**: Biofilm mechanical resonance occurs when the acoustic wavelength matches the biofilm thickness or structural periodicity. For biofilms of 50-200 micrometers thickness, resonance conditions occur at frequencies of 2-8 MHz (wavelength in water equals biofilm thickness). At sub-resonant frequencies (below 1 MHz), the biofilm acts as a mass load on the electrode surface. At resonant frequencies, dramatic enhancement of biofilm oscillation amplitude (Q-factor 2-10) maximizes energy deposition and detachment potential.
- **Medium properties**: Electrolyte composition affects ultrasonic behavior through changes in sound speed, viscosity, surface tension, and dissolved gas content. Higher ionic strength (more than 50 mM) reduces cavitation bubble coalescence, creating more numerous but smaller cavitation events. Increased viscosity (from suspended solids, polymeric additives) raises the cavitation threshold and reduces acoustic streaming velocity at any frequency. Dissolved gas concentration determines the number of cavitation nuclei, profoundly affecting the frequency-dependent cavitation behavior.
- **Reactor geometry and standing waves**: The reactor dimensions relative to the acoustic wavelength determine the standing wave pattern and spatial uniformity of treatment. At 40 kHz (wavelength 37 mm), reactors with dimensions of 5-20 cm create complex multi-nodal standing wave patterns with 5-20 dB spatial variation in acoustic intensity. At 1 MHz (wavelength 1.5 mm), the large number of wavelengths across the reactor smooths spatial intensity variations. Multi-transducer configurations with slightly different frequencies (frequency sweep or multi-frequency) can improve spatial uniformity.

## Compatible Systems

Physical Environmental Factors

## References

- Mason, T. J., & Lorimer, J. P. (2002). *Applied Sonochemistry*. Wiley-VCH.
- Leighton, T. G. (1994). *The Acoustic Bubble*. Academic Press.
- Brennen, C. E. (1995). *Cavitation and Bubble Dynamics*. Oxford University Press.
- Ashokkumar, M. (2011). The characterization of acoustic cavitation bubbles. *Ultrasonics Sonochemistry*, 18(4), 864-872.
- Pitt, W. G., & Ross, S. A. (2003). Ultrasound increases the rate of bacterial cell growth. *Biotechnology Progress*, 19(3), 1038-1044.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Ultrasound+Frequency&body=**Parameter%3A**+Ultrasound+Frequency%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fultrasound-frequency.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Ultrasound+Frequency&body=**Parameter%3A**+Ultrasound+Frequency%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fultrasound-frequency.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Ultrasound+Frequency&body=**Parameter%3A**+Ultrasound+Frequency%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fultrasound-frequency.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
