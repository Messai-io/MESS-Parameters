# Magnetic Field Strength

Magnetic field strength (also expressed as magnetic flux density, B) quantifies the intensity of the magnetic field applied to or present within a microbial electrochemical system (MES). In bioelectrochemical engineering, magnetic field strength is a critical parameter for MES enhancement strategies that exploit magnetohydrodynamic (MHD) effects, Lorentz-force-driven mass transfer intensification, and direct biomagnetic stimulation of electroactive microorganisms. The field strength determines the magnitude of forces acting on charged species, paramagnetic molecules, and magnetically susceptible biofilm components.

The application of external magnetic fields to MES has demonstrated measurable performance improvements across multiple system types. In microbial fuel cells (MFCs), static magnetic fields of 100-500 mT have been shown to increase power density by 15-45% through enhanced mass transfer at electrode surfaces and improved biofilm conductivity. The underlying mechanisms include Lorentz-force-driven micro-convection in the electrode boundary layer, paramagnetic orientation of dissolved oxygen molecules at cathodes, and alignment of conductive nanowire networks (pili) within Geobacter biofilms. In microbial electrolysis cells (MECs), magnetic field application enhances hydrogen evolution kinetics at cathodes while simultaneously improving anodic biofilm electron transfer rates.

Magnetic field strength also influences the biochemistry of iron-containing enzymes central to extracellular electron transfer, including cytochrome c proteins and iron-sulfur cluster-containing ferredoxins. Fields above 1 T can alter radical pair recombination kinetics in flavin-dependent reactions, potentially affecting riboflavin-mediated electron shuttling in Shewanella species. At the cellular level, moderate fields (50-200 mT) have been observed to increase membrane permeability and ion channel activity, stimulating nutrient uptake and metabolic rates in electroactive bacteria.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Environmental |
| **Subcategory** | Electromagnetic Fields |
| **Type** | number |
| **Unit** | mT |
| **Minimum** | 0 |
| **Maximum** | 1000 |
| **Papers Reporting** | 9 |

## Typical Values

- **Valid Range**: 0 - 20 T (0 - 20,000 mT)
- **Typical Range for MES applications**: 5 mT - 500 mT
- **Earth's magnetic field**: 25-65 muT (0.025-0.065 mT)
- **Optimal for MFC enhancement**: 100-300 mT
- **Permanent magnet range**: 50-600 mT (at pole face)
- **Electromagnet laboratory range**: 0-2 T (adjustable)
- **Superconducting magnet range**: 1-20 T
- **Threshold for biological effects**: approximately 1-10 mT

## Measurement Methods

- **Hall Effect Gaussmeter**: The primary method for magnetic field strength measurement in MES applications employs Hall effect sensors (gaussmeters). Instruments such as the Lakeshore 475 DSP or AlphaLab GM2 provide DC and AC field measurements with resolution from 0.001 mT to 30 T. The transverse Hall probe is inserted into the reactor space at the location of interest, oriented perpendicular to the expected field direction. Three-axis Hall probes enable simultaneous measurement of all field components for complete vector characterization. Measurement accuracy is typically 0.1-1% of reading after calibration against a NIST-traceable reference magnet. Temperature compensation is essential, as Hall coefficient varies 0.01-0.1%/K depending on semiconductor material.
- **Fluxgate Magnetometer**: For low-field measurements (0.1 muT to 1 mT), fluxgate magnetometers provide superior sensitivity and stability compared to Hall sensors. These instruments detect the asymmetric saturation of a high-permeability core driven by an AC excitation current, with sensitivity to 0.1 nT in research-grade instruments. Fluxgate sensors are particularly valuable for mapping weak residual fields in MES reactors and for measuring the geomagnetic field background against which applied fields operate. Three-axis fluxgate systems enable complete vector field mapping with angular resolution below 0.1 degrees.
- **Nuclear Magnetic Resonance (NMR) Probes**: For precise absolute field calibration, NMR probes measure the Larmor precession frequency of hydrogen nuclei, which is directly proportional to field strength (42.577 MHz/T). This method provides absolute accuracy of 0.001% (10 ppm) independent of temperature, aging, or mechanical stress. NMR probes require fields above approximately 50 mT for practical operation and are primarily used for calibrating other instruments rather than routine MES monitoring.

## Affecting Factors

### Primary

- **Source-to-reactor distance**: Magnetic field strength from permanent magnets decreases approximately as the inverse cube of distance (1/r^3 for dipole fields) or inverse square (1/r^2 for extended sources). For a neodymium N52 disc magnet (50 mm diameter, 25 mm thick) with 1.4 T surface field, the field decreases to approximately 350 mT at 10 mm, 100 mT at 25 mm, and 20 mT at 50 mm from the pole face. This steep spatial gradient means that small variations in magnet-to-electrode distance create large field strength differences across the reactor, requiring careful geometric design.
- **Magnet configuration and geometry**: Single-magnet arrangements produce highly non-uniform fields, while Helmholtz coil pairs generate uniform fields (less than 1% variation) within a central volume approximately one-third of the coil diameter. Halbach arrays concentrate flux on one side while canceling it on the other, useful for unilateral field application. The choice between permanent magnets (constant field, no power consumption) and electromagnets (adjustable field, energy cost of 10-1000 W depending on field strength and coil volume) depends on experimental requirements.
- **Electrode and reactor materials**: Ferromagnetic materials (iron, nickel, cobalt, many stainless steels) concentrate and distort applied fields, creating localized high-field regions at material surfaces. Paramagnetic materials (most austenitic stainless steels, titanium) have minimal effect. Carbon-based electrode materials (graphite, carbon felt, carbon cloth) are diamagnetic with negligible field perturbation. The magnetic susceptibility of reactor components must be characterized to predict actual field distribution at biofilm locations, as ferromagnetic fasteners or fittings can create field hot spots with 2-10x local enhancement.
- **Temperature dependence**: Permanent magnet strength decreases with temperature. NdFeB magnets (most common high-strength type) have a temperature coefficient of -0.11 to -0.13%/K, losing approximately 10% of field strength between 25 and 100 degrees C. Ferrite magnets have lower temperature sensitivity but much lower initial field strength. Electromagnet field strength is temperature-stable (determined by current, not material properties) but coil resistance increases with temperature, requiring higher voltage for constant current operation.
- **Electrolyte ionic composition**: Paramagnetic ions (Fe3+, Mn2+, Co2+, Ni2+) in the electrolyte experience forces in field gradients that can create concentration gradients and magnetoconvection. Solutions with high paramagnetic ion concentration (above 1 mM Fe3+) exhibit measurable MHD effects at fields as low as 50 mT. Diamagnetic ions (most alkali and alkaline earth species) experience much weaker forces, requiring fields above 1 T for significant effects on mass transport.

## Compatible Systems

Physical Environmental Factors

## References

- Zhou, H., Liu, B., Wang, Q., Sun, J., Xie, G., & Ren, N. (2022). Magnetic field enhancement of microbial fuel cell performance. *Science of The Total Environment*, 845, 157260.
- Katz, E., Lioubashevski, O., & Willner, I. (2005). Magnetic field effects on bioelectrocatalytic reactions of surface-confined enzyme systems. *Journal of the American Chemical Society*, 127(11), 3979-3988.
- Zhao, Y., Liu, Y., Wang, Z., & Yang, F. (2018). Effects of magnetic field on the performance of microbial fuel cells. *Bioelectrochemistry*, 124, 29-34.
- Hinds, G., Coey, J. M. D., & Lyons, M. E. G. (2001). Influence of magnetic forces on electrochemical mass transport. *Electrochemistry Communications*, 3(5), 215-218.
- Rakoczy, R., Konopacki, M., & Fijalkwoski, K. (2016). The influence of a ferrofluid in the presence of an external rotating magnetic field on the growth rate and cell metabolic activity of a wine yeast strain. *Biochemical Engineering Journal*, 109, 43-50.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Magnetic+Field+Strength&body=**Parameter%3A**+Magnetic+Field+Strength%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fmagnetic-field-strength.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Magnetic+Field+Strength&body=**Parameter%3A**+Magnetic+Field+Strength%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fmagnetic-field-strength.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Magnetic+Field+Strength&body=**Parameter%3A**+Magnetic+Field+Strength%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fmagnetic-field-strength.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
