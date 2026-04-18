# Vibration Amplitude

Vibration amplitude quantifies the displacement magnitude of oscillatory mechanical motion experienced by microbial electrochemical systems (MES), expressed as peak displacement in micrometers (um), peak-to-peak displacement, or as velocity amplitude in millimeters per second (mm/s). While vibration acceleration measures the inertial forces on MES components, displacement amplitude characterizes the spatial extent of oscillatory motion, which governs the strain imposed on biofilm-electrode interfaces, the relative motion between fluid and electrode surfaces (affecting boundary layer thickness and mass transfer), and the fatigue loading on structural connections, seals, and membrane materials.

Vibration amplitude is related to acceleration and frequency through the kinematic relationship: displacement = acceleration / (2*pi*frequency)^2 for sinusoidal vibration. This means that a given acceleration level corresponds to very different displacements at different frequencies: 1 g at 10 Hz produces displacement of 2.5 mm, while 1 g at 100 Hz produces only 25 micrometers. For MES biofilms, displacement is often the more relevant parameter because it determines the relative motion between the electrode surface and the surrounding fluid, which directly controls the instantaneous shear rate and mass transfer coefficient at the biofilm surface.

At the biofilm-electrode interface, vibration displacement creates cyclic strain that fatigues the adhesion bonds between the biofilm base layer and the electrode surface. For a biofilm of thickness h attached to an electrode vibrating with displacement amplitude d, the maximum shear strain at the interface is approximately d/h (for first-mode oscillation). A 50-micrometer biofilm on an electrode vibrating at 100 micrometer amplitude experiences approximately 200% shear strain per cycle. At typical MES vibration frequencies of 10-100 Hz, millions of strain cycles accumulate daily, and fatigue failure of the biofilm adhesion layer can occur at strain amplitudes well below the single-cycle failure strain.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Environmental |
| **Subcategory** | Vibration & Mechanical |
| **Type** | number |
| **Unit** | mm |
| **Minimum** | 0 |
| **Maximum** | 10 |
| **Papers Reporting** | 449 |

## Typical Values

- **Valid Range**: 0 - 10 mm (peak displacement)
- **Typical Range for MES**: 0.1 - 500 micrometers (peak)
- **Background building vibration**: 0.1-1 micrometer
- **Near roadway (heavy traffic)**: 1-50 micrometers
- **Industrial floor**: 10-100 micrometers
- **On pump or compressor**: 50-500 micrometers
- **Intentional vibration (mixing)**: 0.1-5 mm
- **Biofilm strain concern threshold**: approximately 10 micrometers (thin biofilm) to 100 micrometers (thick biofilm)
- **ISO 10816 acceptable (machinery)**: less than 45 micrometers peak (Group 1)

## Measurement Methods

- **Displacement Transducers (Eddy Current Probes)**: Non-contact eddy current displacement sensors (Bently Nevada 3300, Micro-Epsilon eddyNCDT) measure gap between sensor and conductive target surface with resolution of 0.01-0.1 micrometers and bandwidth from DC to 10 kHz. Linear measurement range of 0.5-4 mm covers typical MES vibration amplitudes. The sensor operates by detecting changes in the eddy current field induced in the target, providing displacement measurement independent of target surface condition (roughness, contamination). Mounting the sensor in close proximity to the electrode surface enables direct measurement of electrode vibration displacement without contact.
- **Accelerometer-Derived Displacement**: Double integration of accelerometer signals provides displacement measurement from acceleration data: x(t) = double integral of a(t)dt^2. Digital signal processing removes DC offset and low-frequency drift through high-pass filtering (cutoff at 1-5 Hz). This method provides displacement measurement wherever accelerometers are installed, converting the existing vibration acceleration monitoring infrastructure to displacement data. Accuracy depends on accelerometer noise floor and integration algorithm; practical displacement resolution is 0.1-1 micrometer for frequencies above 5 Hz and 1-10 micrometers at 1-5 Hz.
- **Laser Displacement Sensors**: Laser triangulation sensors (Keyence LK-H, Micro-Epsilon optoNCDT) measure displacement from 0.01 micrometers to 100 mm with sampling rates to 100 kHz. Confocal chromatic sensors achieve resolution below 0.01 micrometers for precision measurements. These non-contact methods enable measurement of vibration displacement at specific points on MES surfaces, including transparent reactor walls (measuring internal electrode motion through the wall) and moving electrode assemblies. Multi-point measurement with multiple sensors or scanning enables full spatial characterization of vibration displacement patterns.

## Affecting Factors

### Primary

- **Excitation frequency**: At constant vibration force, displacement amplitude varies as 1/f^2 below the structural resonance frequency (force-controlled region). At resonance, displacement is amplified by the quality factor Q, and above resonance, displacement decreases as 1/f^2 (mass-controlled region). For MES mounted on building floors, dominant vibration frequencies of 5-50 Hz correspond to displacement amplitudes of 1-100 micrometers at typical force levels.
- **Structural stiffness and damping**: The reactor mounting stiffness (connection to floor, frame, or support structure) determines how vibration force is converted to displacement. Soft mounts (rubber isolation pads, spring mounts) increase displacement at low frequencies while reducing force transmission at high frequencies. Rigid mounts limit displacement but transmit all force directly. Damping (material hysteresis, fluid damping, friction) reduces resonant amplification and controls displacement at resonant frequencies.
- **Mass distribution**: The vibration displacement pattern of the MES reactor depends on its mass distribution and mode shapes. Uniform mass distribution produces simple bending and translational modes. Concentrated masses (pumps, instrumentation, electrode assemblies) create local modes with displacement amplitudes 2-5x higher at the mass location than at the center of mass. Finite element modal analysis predicts displacement patterns for complex reactor geometries.
- **Fluid coupling and sloshing**: Liquid in partially-filled MES reactors exhibits sloshing modes with natural frequencies of f = (1/2*pi)*sqrt(g*pi*tanh(pi*h/L)/L), where h is liquid depth and L is container length. For a typical 20 cm long reactor with 10 cm liquid depth, the first sloshing mode is approximately 1.8 Hz. Sloshing amplitudes at the free surface can be 10-100x the container vibration amplitude at resonance, creating large fluid displacements relative to electrode surfaces and enhancing mass transfer while potentially causing biofilm erosion.
- **Temperature effects on material properties**: Elastomeric isolation mounts stiffen at low temperatures (natural frequency increases 20-50% from 25 to -20 degrees C) and soften at high temperatures (natural frequency decreases 10-20% from 25 to 60 degrees C), changing the vibration isolation performance and transmitted displacement amplitude. Biofilm viscoelastic properties also vary with temperature, with the biofilm becoming more rigid at lower temperatures and more compliant at higher temperatures, affecting the strain transmission from electrode vibration to biofilm deformation.

## Compatible Systems

Physical Environmental Factors

## References

- Harris, C. M., & Piersol, A. G. (2002). *Harris' Shock and Vibration Handbook* (5th ed.). McGraw-Hill.
- ISO 10816-1 (1995). Mechanical vibration - Evaluation of machine vibration by measurements on non-rotating parts.
- Stoodley, P., et al. (2002). Biofilms as complex differentiated communities. *Annual Review of Microbiology*, 56, 187-209.
- Liu, Y., & Tay, J.-H. (2002). The essential role of hydrodynamic shear force in the formation of biofilm and granular sludge. *Water Research*, 36(7), 1653-1665.
- Flemming, H.-C., et al. (2016). Biofilms: An emergent form of bacterial life. *Nature Reviews Microbiology*, 14(9), 563-575.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Vibration+Amplitude&body=**Parameter%3A**+Vibration+Amplitude%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fvibration-amplitude.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Vibration+Amplitude&body=**Parameter%3A**+Vibration+Amplitude%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fvibration-amplitude.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Vibration+Amplitude&body=**Parameter%3A**+Vibration+Amplitude%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fvibration-amplitude.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
