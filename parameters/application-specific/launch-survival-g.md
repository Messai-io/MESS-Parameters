# Launch Survival G

Launch survival G-force specifies the maximum acceleration load, expressed in multiples of Earth's gravitational acceleration (g = 9.81 m/s^2), that a microbial electrochemical system must withstand during launch to orbit or other high-acceleration transport scenarios without structural failure, fluid leakage, electrode displacement, or irreversible biological damage. This parameter applies to MES destined for space applications, including life support systems on the ISS, lunar/Mars habitats, and satellite-based environmental monitoring. MES components must survive both sustained acceleration (launch profile) and transient shock/vibration loads.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Application Specific |
| **Subcategory** | Space Environment |
| **Type** | number |
| **Unit** | g |
| **Minimum** | 0 |
| **Maximum** | 20 |

## Typical Values

- **text**: | Launch Vehicle | Max Acceleration | Vibration Spectrum |
|---------------|-----------------|-------------------|
| SpaceX Falcon 9 | 3 - 6 g | 20-2000 Hz, 0.01-0.1 g^2/Hz |
| NASA SLS | 3 - 4 g | Similar to Falcon 9 |
| Soyuz | 3 - 4.5 g | Moderate vibration |
| Suborbital (Blue Origin) | 3 - 5 g | Short duration |
| Aircraft transport | 1 - 3 g (turbulence) | Low frequency |
| Ground shipping | 1 - 5 g (shock) | Transient impacts |

**MES component sensitivities:**
- Liquid containment: seal integrity above 3 g requires proper design
- Electrode fixation: loose electrodes can shift or fracture under 5+ g
- Membrane integrity: thin membranes may deform under pressure differentials from acceleration
- Biofilm survival: microorganisms generally survive up to 10-15 g sustained; viability >90% at 5 g

## Measurement Methods

- **1. **Vibration table testing**: Mount the MES on an electrodynamic shaker and apply the launch vibration profile (random + sine sweep) per NASA GEVS-7000 or similar specification.**: 2. **Shock testing**: Apply half-sine shock pulses at expected g-levels and durations. Inspect for structural damage, leaks, and electrical continuity post-test. 3. **Centrifuge testing**: Use a centrifuge to apply sustained g-loads to verify structural integrity under launch acceleration profiles. 4. **Post-test functional verification**: After vibration/shock testing, operate the MES and measure electrochemical performance to verify no performance degradation.

## Affecting Factors

- **text**: - **Structural design**: Compact, well-secured designs with no unsupported cantilevered components survive higher g-loads.
- **Liquid management**: Free liquid surfaces generate sloshing forces proportional to acceleration. Bladders, foam, or capillary structures contain liquids.
- **Material strength**: Component materials must maintain structural integrity under the combined effects of acceleration and vibration.
- **Fastener design**: Threaded connections must be properly torqued and locked (safety wire, thread-locking adhesive) to prevent loosening under vibration.
- **Packaging**: External packaging and mounting systems must isolate the MES from the harshest vibration frequencies while maintaining structural support.

## Compatible Systems

Space Applications

## References

1. NASA-STD-7001B: Payload Vibroacoustic Test Criteria. National Aeronautics and Space Administration.
2. NASA GEVS-7000: General Environmental Verification Standard for GSFC Flight Programs and Projects.
3. Klaus, D., Simske, S., Todd, P., & Stodieck, L. (1997). Investigation of space flight effects on Escherichia coli. *Microbiology*, 143(2), 449-455.
4. Zea, L., Nisar, Z., Rubin, P., et al. (2018). Design of a spaceflight biofilm experiment. *Acta Astronautica*, 148, 294-300.
5. Wertz, J.R., Everett, D.F., & Puschell, J.J. (2011). *Space Mission Engineering: The New SMAD*. Microcosm Press.

---

*Parameter documentation for the MESS (Microbial Electrochemical Systems Standardization) framework.*

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Launch+Survival+G&body=**Parameter%3A**+Launch+Survival+G%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Flaunch-survival-g.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Launch+Survival+G&body=**Parameter%3A**+Launch+Survival+G%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Flaunch-survival-g.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Launch+Survival+G&body=**Parameter%3A**+Launch+Survival+G%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Flaunch-survival-g.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
