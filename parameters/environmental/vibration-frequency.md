# Vibration Frequency

Vibration frequency characterizes the oscillation rate of mechanical vibrations experienced by microbial electrochemical systems (MES), measured in hertz (Hz). This parameter determines which physical mechanisms dominate the system's vibrational response, including structural resonance amplification, biofilm mechanical coupling, fluid-structure interaction, and mass transfer enhancement. The frequency content of vibration, combined with amplitude and acceleration, defines the complete vibrational environment that affects MES biofilm integrity, electrode stability, and long-term operational reliability.

In MES, vibration frequency governs the interaction between mechanical excitation and the natural frequencies of system components. Reactor structures have natural frequencies typically in the 10-500 Hz range, with resonant amplification factors of 5-50x when excitation matches these frequencies. Electrode assemblies, particularly thin carbon cloth or paper electrodes, have natural frequencies of 50-2000 Hz depending on tension, span length, and mass loading by electrolyte and biofilm. The biofilm itself exhibits viscoelastic resonance at frequencies determined by its thickness, elastic modulus, and density, typically in the 1-100 Hz range. When environmental vibration frequencies coincide with any of these natural frequencies, the resulting amplified motion can cause accelerated degradation.

The frequency spectrum of environmental vibration also determines its effect on MES mass transfer. Low-frequency vibration (below 10 Hz) causes bulk sloshing of the electrolyte with minimal effect on the electrode boundary layer. Mid-frequency vibration (10-100 Hz) creates oscillatory flow at the electrode surface that periodically disrupts and regenerates the diffusion boundary layer, enhancing time-averaged mass transfer by 20-100% (analogous to pulsatile flow enhancement). High-frequency vibration (100 Hz - 10 kHz) generates acoustic streaming and microconvection within the boundary layer itself, providing the most efficient mass transfer enhancement per unit of mechanical energy input but requiring careful control to avoid biofilm damage.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Environmental |
| **Subcategory** | Vibration & Mechanical |
| **Type** | number |
| **Unit** | Hz |
| **Minimum** | 0 |
| **Maximum** | 1000 |

## Typical Values

- **Valid Range**: 0.01 Hz - 100 kHz
- **Typical Range for MES**: 1 - 1000 Hz
- **Seismic vibration**: 0.1-10 Hz
- **Building vibration**: 5-50 Hz
- **Rotating machinery**: 10-500 Hz (fundamental and harmonics)
- **Pump pulsation**: 1-50 Hz
- **Traffic-induced**: 5-80 Hz
- **Wind-induced**: 0.1-5 Hz
- **Intentional mixing vibration**: 10-100 Hz
- **Structural resonance (typical MES reactor)**: 20-200 Hz
- **Biofilm viscoelastic resonance**: 1-100 Hz

## Measurement Methods

- **FFT Spectrum Analysis**: Fast Fourier Transform (FFT) analysis of accelerometer time-domain signals provides frequency-domain representation of vibration content. Digital signal analyzers (Bruel and Kjaer PULSE, National Instruments CompactDAQ with LabVIEW) compute frequency spectra with resolution from 0.001 Hz to 1 Hz and frequency range to 100 kHz. The FFT spectrum identifies dominant frequencies, harmonics, sidebands, and broadband noise components, enabling identification of specific vibration sources. Averaging 10-100 FFT windows improves spectral estimate reliability. Waterfall plots showing spectrum evolution over time reveal intermittent sources and changing conditions.
- **Order Tracking Analysis**: For vibration related to rotating machinery (pumps, compressors, mixers), order tracking analysis references the vibration frequency to shaft rotation speed, measured by a tachometer or keyphasor pulse. This technique maintains constant frequency resolution relative to shaft speed even during speed changes, enabling precise identification of imbalance (1x shaft speed), misalignment (2x), bearing defects (specific defect frequencies), and flow-induced pulsation. Order tracking is essential for diagnosing vibration sources in MES installations with rotating auxiliary equipment.
- **Modal Analysis**: Experimental modal analysis determines the natural frequencies, mode shapes, and damping ratios of MES reactor structures by measuring the vibration response to controlled excitation (impact hammer, shaker). The frequency response function (FRF) H(f) = X(f)/F(f) (displacement response per unit force) reveals resonant peaks at natural frequencies, with peak height indicating amplification factor and peak width indicating damping. This information enables prediction of vibration response to any excitation source and guides design modifications (stiffening, mass addition, damping treatment) to avoid problematic resonances.

## Affecting Factors

### Primary

- **Source identification and characteristics**: Each vibration source has a characteristic frequency signature. Imbalance in rotating machinery produces vibration at 1x shaft speed (f = RPM/60). Misalignment produces 2x frequency. Rolling element bearings produce specific defect frequencies (BPFO, BPFI, BSF) typically at 5-20x shaft speed. Reciprocating pumps produce vibration at stroke frequency with rich harmonic content. Identifying the dominant frequency enables targeted mitigation through source treatment, isolation, or detuning.
- **Propagation path and attenuation**: Vibration attenuates with distance from the source through geometric spreading, material damping, and discontinuities (joints, flexible connections). In concrete building structures, vibration at 50 Hz attenuates approximately 1-3 dB per meter of distance and 3-10 dB per floor. In steel piping, attenuation is 0.1-0.5 dB per meter at 50 Hz but increases with frequency. Vibration frequency content shifts toward lower frequencies with distance as higher frequencies attenuate more rapidly.
- **Structural resonance and amplification**: When excitation frequency matches a structural natural frequency, vibration amplitude is amplified by the quality factor Q = 1/(2*zeta), where zeta is the damping ratio. For welded steel reactor structures (zeta = 0.01-0.03), Q = 17-50, meaning resonant amplification can increase vibration by 17-50x above the input level. Avoiding resonance by ensuring a 20% frequency separation between excitation frequencies and structural natural frequencies is a primary design strategy.
- **Foundation and mounting conditions**: The foundation stiffness and mounting method determine the boundary conditions that define the reactor's natural frequencies. Rigid mounting on a massive concrete foundation (more than 10x reactor mass) fixes the base, producing cantilever-type modes. Flexible mounting on elastomeric isolators adds a whole-body rocking mode at low frequency (2-10 Hz) while isolating higher frequencies. Suspended mounting (from overhead structure) introduces pendulum modes at 0.5-2 Hz. Each mounting configuration creates a unique frequency response function.
- **Loading condition and operational state**: Natural frequencies of the MES reactor shift with operational conditions. Filling the reactor with electrolyte adds mass, reducing natural frequencies by 20-50% (the added mass effect). Temperature changes alter material stiffness (most materials soften with temperature), shifting natural frequencies by 0.01-0.1% per degree C. Biofilm growth adds mass to electrode surfaces, progressively reducing electrode natural frequencies over weeks. Internal pressure changes reactor wall stiffness and can shift shell modes by 5-20%.

## Compatible Systems

Physical Environmental Factors

## References

- Harris, C. M., & Piersol, A. G. (2002). *Harris' Shock and Vibration Handbook* (5th ed.). McGraw-Hill.
- ISO 10816-1 (1995). Mechanical vibration - Evaluation of machine vibration by measurements on non-rotating parts.
- Stoodley, P., et al. (2002). Biofilms as complex differentiated communities. *Annual Review of Microbiology*, 56, 187-209.
- Flemming, H.-C., & Wingender, J. (2010). The biofilm matrix. *Nature Reviews Microbiology*, 8(9), 623-633.
- de Silva, C. W. (2000). *Vibration: Fundamentals and Practice*. CRC Press.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Vibration+Frequency&body=**Parameter%3A**+Vibration+Frequency%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fvibration-frequency.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Vibration+Frequency&body=**Parameter%3A**+Vibration+Frequency%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fvibration-frequency.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Vibration+Frequency&body=**Parameter%3A**+Vibration+Frequency%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fvibration-frequency.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
