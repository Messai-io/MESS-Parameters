# Electromagnetic Frequency

Electromagnetic frequency in the context of microbial electrochemical systems (MES) refers to the frequency of electromagnetic radiation or fields in the environment surrounding the reactor. This encompasses a broad spectrum from extremely low frequencies (ELF, power line frequencies at 50/60 Hz) through radio frequencies (RF), microwaves, infrared, visible light, and ultraviolet radiation. Each frequency range interacts differently with biological and electrochemical components of MES, and understanding these interactions is important for both protecting MES from electromagnetic interference (EMI) and exploiting beneficial electromagnetic effects.

At low frequencies (50/60 Hz), power line electromagnetic fields can induce noise in sensitive electrochemical measurements, particularly in high-impedance potentiostatic circuits. The magnitude of this interference depends on proximity to power lines, shielding quality, and grounding configuration. At radio frequencies (100 kHz to 300 GHz), external radiation can interfere with digital data acquisition systems and wireless telemetry, while also potentially causing direct thermal or non-thermal effects on microorganisms. Recent research has explored the use of specific electromagnetic frequencies to enhance biofilm formation, improve extracellular electron transfer, or selectively inhibit non-target organisms.

The electromagnetic environment of an MES installation includes both intentional radiation (RF communication equipment, nearby industrial sources) and unintentional sources (power electronics, motors, switching power supplies). Characterizing this environment is important for electrochemical measurement quality, data integrity, and understanding potential biological effects. Shielded enclosures (Faraday cages), proper grounding, and filtering are standard approaches for managing electromagnetic frequency interference in precision MES research.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Environmental |
| **Subcategory** | Electromagnetic Fields |
| **Type** | number |
| **Unit** | MHz |
| **Minimum** | 0 |
| **Maximum** | 3000 |
| **Papers Reporting** | 6 |

## Typical Values

- **Valid Range**: 0 to 3 x 10^18 Hz (DC to gamma rays)
- **Power Line Frequency**: 50 or 60 Hz
- **RF Communication (WiFi)**: 2.4 x 10^9 Hz and 5 x 10^9 Hz
- **Cellular Networks**: 700 x 10^6 to 3.5 x 10^9 Hz
- **Infrared Thermal Radiation**: 3 x 10^11 to 4 x 10^14 Hz
- **Visible Light**: 4.3 x 10^14 to 7.5 x 10^14 Hz
- **UV Radiation**: 7.5 x 10^14 to 3 x 10^16 Hz
- **MES EIS Range**: 10^-3 to 10^6 Hz

## Measurement Methods

- **Spectrum Analyzer**: A spectrum analyzer measures the amplitude of electromagnetic signals across a wide frequency range, from a few Hz to hundreds of GHz. For MES, both conducted emissions (on power and signal cables) and radiated emissions (in the surrounding space) should be characterized.
- **EMF Meters**: Handheld electromagnetic field meters measure field strength at specific frequencies or across frequency bands. Low-frequency meters detect power line fields, while broadband RF meters detect communication and industrial sources. These portable instruments are useful for surveying MES electromagnetic environments.
- **Oscilloscope with FFT**: A digital oscilloscope with Fast Fourier Transform capability can analyze the frequency content of noise in MES electrical signals. By monitoring potentiostat output or reference electrode signals, specific frequencies causing measurement interference can be identified.
- **Network Analyzer**: For characterizing how the MES responds to electromagnetic frequencies during electrochemical impedance spectroscopy, a network analyzer applies known frequency signals and measures the system response, providing impedance spectra that reveal frequency-dependent behavior.

## Affecting Factors

### Primary

- **Proximity to EMF Sources**: Distance to power lines, transmitters, and electronic devices determines field strength at each frequency.
- **Shielding and Enclosure**: Metal enclosures attenuate external fields. The effectiveness depends on material, thickness, and construction quality.
- **Grounding Quality**: Proper grounding of MES equipment is critical for rejecting common-mode interference at all frequencies.
- **Cable Routing and Length**: Longer cables act as more efficient antennas. Proper routing with twisted pairs or coaxial cables reduces pickup.
- **Frequency-Specific Absorption**: Water strongly absorbs at microwave frequencies (~2.45 GHz), while metallic electrodes reflect most RF radiation.
- **Environmental Reflections**: Nearby metallic structures can reflect and focus electromagnetic radiation.
- **Power Electronics**: Switching power supplies generate harmonics that propagate through power lines and radiate into the environment.
- **Seasonal and Diurnal Variation**: Some electromagnetic sources vary with time of day and season.

## Related Parameters

- **name**: Electromagnetic Power

- **relationship**: The power density determines biological and interference effects at any given frequency.
- **name**: Light Wavelength

- **relationship**: Wavelength is inversely related to frequency and determines photobiological effects.
- **name**: Light Intensity

- **relationship**: For visible frequencies, intensity determines the photon flux for photosynthetic reactions.
- **name**: Magnetic Field Frequency

- **relationship**: Addresses the oscillating magnetic component specifically.
- **name**: Ultrasound Frequency

- **relationship**: Interacts with MES through mechanical rather than electromagnetic mechanisms.

## Compatible Systems

Physical Environmental Factors

## References

- Rabaey, K. & Rozendal, R.A. (2010). Microbial electrosynthesis: revisiting the electrical route for microbial production. *Nature Reviews Microbiology*, 8(10), 706-716.
- Bard, A.J. & Faulkner, L.R. (2001). *Electrochemical Methods: Fundamentals and Applications*. 2nd ed., John Wiley & Sons.
- IEEE (2019). IEEE Standard for Safety Levels with Respect to Human Exposure to Electric, Magnetic, and Electromagnetic Fields. IEEE Std C95.1-2019.
- Golzio, M., Teissie, J., & Rols, M.P. (2002). Direct visualization at the single-cell level of electrically mediated gene delivery. *PNAS*, 99(3), 1292-1297.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Electromagnetic+Frequency&body=**Parameter%3A**+Electromagnetic+Frequency%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Felectromagnetic-frequency.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Electromagnetic+Frequency&body=**Parameter%3A**+Electromagnetic+Frequency%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Felectromagnetic-frequency.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Electromagnetic+Frequency&body=**Parameter%3A**+Electromagnetic+Frequency%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Felectromagnetic-frequency.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
