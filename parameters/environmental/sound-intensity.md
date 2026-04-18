# Sound Intensity

Sound intensity measures the acoustic power per unit area transmitted through the electrolyte and gas phases of microbial electrochemical systems (MES), expressed in watts per square meter (W/m^2) or as sound pressure level in decibels (dB re 20 muPa in air, dB re 1 muPa in water). This parameter determines the magnitude of mechanical, thermal, and chemical effects produced by acoustic stimulation on MES components, including biofilm disruption, mass transfer enhancement, electrode cleaning, and direct biological stimulation. Sound intensity is the energy-carrying complement to sound frequency, and together they define the acoustic environment experienced by the bioelectrochemical system.

Acoustic intensity governs which physical mechanisms are activated in the MES reactor. At low intensities (below 0.1 W/m^2, approximately 110 dB re 1 muPa in water), acoustic streaming provides gentle mass transfer enhancement without mechanical disturbance to biofilms. At moderate intensities (0.1-10 W/m^2), acoustic radiation forces can induce particle migration, cell aggregation, and biofilm restructuring. At high intensities (above 10 W/m^2 at ultrasonic frequencies), acoustic cavitation generates violent bubble collapse events that produce localized extreme conditions: transient temperatures of 4000-5000 K, pressures of hundreds of atmospheres, and microjets with velocities exceeding 100 m/s. These cavitation effects can clean electrode surfaces, break up biofilm aggregates, and enhance electrochemical reaction rates, but must be carefully controlled to avoid destroying functional biofilms and damaging system components.

The biological response to acoustic intensity follows a hormesis curve in MES applications. Low-intensity acoustic stimulation (60-90 dB in air) has been shown to stimulate microbial growth by 10-30%, potentially through enhanced nutrient uptake from acoustic streaming at the cell surface. Moderate intensities (90-120 dB) can selectively remove loosely attached biomass while preserving electrode-associated biofilm. High intensities (above 130 dB) cause cell lysis and biofilm destruction. Identifying the therapeutic window of acoustic intensity that maximizes MES performance enhancement while minimizing biological damage is the central challenge in acoustic MES optimization.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Environmental |
| **Subcategory** | Sound & Ultrasound |
| **Type** | number |
| **Unit** | dB |
| **Minimum** | 0 |
| **Maximum** | 140 |
| **Papers Reporting** | 5 |

## Typical Values

- **Valid Range**: 10^-12 to 10^4 W/m^2 (0 to 160 dB re 20 muPa in air)
- **Typical Range for MES enhancement**: 0.001 - 10 W/m^2
- **Background environmental noise**: 10^-6 to 10^-4 W/m^2 (60-80 dB)
- **Acoustic streaming threshold**: approximately 0.001 W/m^2
- **Cavitation threshold (water, 20 kHz)**: approximately 1 W/cm^2 (10^4 W/m^2)
- **Ultrasonic cleaning bath**: 1-10 W/cm^2
- **Biofilm stimulation optimum**: 0.01-0.1 W/m^2
- **Cell lysis threshold**: approximately 10 W/cm^2 (frequency dependent)
- **Pain threshold (air)**: 1 W/m^2 (120 dB SPL)

## Measurement Methods

- **Calibrated Hydrophone Measurement**: Hydrophones calibrated against NIST-traceable reference sources measure acoustic pressure amplitude p (Pa), from which intensity is calculated as I = p^2/(rho*c), where rho is medium density and c is sound speed. For water at 25 degrees C, I = p^2/(1.5 x 10^6) W/m^2. A measured acoustic pressure of 1000 Pa corresponds to intensity of approximately 0.67 W/m^2. Hydrophone frequency response and linearity must be verified at the measurement intensity to avoid saturation artifacts at high sound levels.
- **Calorimetric Method**: For high-intensity ultrasonic applications, calorimetric measurement provides the most reliable determination of total acoustic power absorbed by the medium. A known volume of water (temperature-equilibrated, insulated) is subjected to ultrasonic irradiation, and the temperature rise rate dT/dt is measured. Acoustic power P = m*Cp*dT/dt, where m is water mass and Cp is specific heat capacity. Intensity is calculated as I = P/A, where A is the transducer radiating area. This method inherently accounts for all acoustic energy conversion (including cavitation losses) and provides accuracy of 5-10%.
- **Radiation Force Balance**: A reflective or absorbing target suspended from a precision balance is placed in the acoustic field. The radiation force F = P/c (for perfect absorption) or F = 2P/c (for perfect reflection), where P is acoustic power. Measuring the force with resolution of 0.1 mg (approximately 1 microN) enables determination of acoustic power with accuracy of 3-5%. This method is the reference standard for ultrasonic power measurement (IEC 61161) and is used to calibrate other measurement techniques.

## Affecting Factors

### Primary

- **Source power and coupling efficiency**: Electrical power input to the acoustic transducer is converted to acoustic output with efficiency of 30-85% depending on transducer type and operating frequency. Piezoelectric transducers at resonance achieve 60-85% efficiency, while electromagnetic speakers achieve 1-10% efficiency. Coupling losses between transducer and reactor (reflection at interfaces, impedance mismatch) further reduce delivered intensity by 10-50%. Impedance matching layers and direct immersion transducers minimize coupling losses.
- **Distance and geometric spreading**: Acoustic intensity decreases with distance from the source due to geometric spreading (1/r^2 for point sources, 1/r for line sources, constant for plane wave sources) and medium attenuation. In enclosed MES reactors, reflections from walls create complex standing wave patterns with intensity varying by 10-100x between nodes and antinodes. Near-field effects within one wavelength of the transducer create highly non-uniform intensity distributions.
- **Frequency-dependent attenuation**: Acoustic attenuation in aqueous media increases approximately with frequency squared: alpha = a*f^2, where a is approximately 2.2 x 10^-3 dB/(cm*MHz^2) for pure water. At 40 kHz (typical ultrasonic cleaning), attenuation is negligible over MES reactor dimensions. At 1 MHz, attenuation is approximately 0.22 dB/cm, reducing intensity by 50% over 13 cm path length. Dissolved salts, suspended particles, and gas bubbles significantly increase attenuation beyond pure water values.
- **Dissolved gas and cavitation**: Below the cavitation threshold, acoustic intensity is transmitted through the medium as a coherent wave. Above the threshold (approximately 1 W/cm^2 at 20 kHz in gas-saturated water), cavitation bubble formation absorbs acoustic energy, creating a self-limiting intensity ceiling in the medium. Degassed water requires 5-10x higher intensity to initiate cavitation. MES electrolytes containing dissolved CO2, H2, and CH4 from microbial metabolism have low cavitation thresholds, making cavitation effects significant at relatively modest acoustic powers.
- **Reactor geometry and standing waves**: Acoustic resonance in reactors with dimensions matching half-wavelength multiples amplifies intensity at antinodes by 10-50x above free-field values. For water at 40 kHz (wavelength 37 mm), reactor dimensions of 18.5 mm, 37 mm, 55.5 mm create resonance conditions. Strategic placement of electrodes at antinode positions maximizes acoustic treatment intensity without increasing input power.

## Compatible Systems

Physical Environmental Factors

## References

- Mason, T. J., & Lorimer, J. P. (2002). *Applied Sonochemistry: Uses of Power Ultrasound in Chemistry and Processing*. Wiley-VCH.
- Pitt, W. G., & Ross, S. A. (2003). Ultrasound increases the rate of bacterial cell growth. *Biotechnology Progress*, 19(3), 1038-1044.
- Hua, I., & Thompson, J. E. (2000). Inactivation of Escherichia coli by sonication at discrete ultrasonic frequencies. *Water Research*, 34(15), 3888-3893.
- Leighton, T. G. (1994). *The Acoustic Bubble*. Academic Press.
- Brennen, C. E. (1995). *Cavitation and Bubble Dynamics*. Oxford University Press.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Sound+Intensity&body=**Parameter%3A**+Sound+Intensity%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fsound-intensity.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Sound+Intensity&body=**Parameter%3A**+Sound+Intensity%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fsound-intensity.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Sound+Intensity&body=**Parameter%3A**+Sound+Intensity%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fsound-intensity.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
