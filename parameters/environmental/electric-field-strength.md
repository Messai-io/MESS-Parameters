# Electric Field Strength

Electric field strength in the context of microbial electrochemical systems (MES) refers to the magnitude of the electric field (measured in volts per meter, V/m) present within and around the reactor. While MES primarily operate through controlled electrode potentials and current flow, the resulting electric fields within the electrolyte, biofilm, and surrounding environment have significant effects on microbial behavior, ion transport, membrane function, and electrochemical reaction distribution.

Within an MES reactor, the electric field is established between the anode and cathode and is determined by the applied or generated voltage divided by the electrode spacing, modified by the non-uniform geometry and conductivity distribution. In a typical MES with 0.5-1.0 V across a 2-5 cm electrode gap, the bulk electric field strength is on the order of 10-50 V/m. However, local field strengths can be much higher near electrode edges, membrane surfaces, and within the electrical double layer at the electrode-electrolyte interface where fields can reach 10^7-10^9 V/m over nanometer distances.

The electric field profoundly influences electroactive microorganisms. Moderate electric fields (1-100 V/m) can orient bacterial cells, influence biofilm architecture, enhance extracellular electron transfer through alignment of conductive pili, and drive electrophoretic migration of charged metabolites. Excessive electric fields can damage cell membranes through electroporation (typically above 10^4-10^5 V/m). Understanding and optimizing the electric field distribution is essential for maximizing electron transfer efficiency while maintaining a viable electroactive community.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Environmental |
| **Subcategory** | Electromagnetic Fields |
| **Type** | number |
| **Unit** | V/m |
| **Minimum** | 0 |
| **Maximum** | 10000 |

## Typical Values

- **Valid Range**: 0 to 10^9 V/m (from zero field to electrical double layer)
- **Typical Bulk Electrolyte Field**: 10 to 100 V/m
- **Typical Range in MES Applications**: 5 to 500 V/m
- **Electrical Double Layer**: 10^7 to 10^9 V/m (nanoscale)
- **Biofilm Interior**: 1 to 50 V/m
- **Electroporation Threshold**: ~10^4 to 10^5 V/m (reversible)

## Measurement Methods

- **Voltage Probe Array**: The electric field within the electrolyte can be mapped by measuring the potential at multiple points using high-impedance voltage probes. The electric field is calculated as the negative gradient of the measured potential distribution: E = -dV/dx. Micro-reference electrode arrays with spacing of 0.5-5 mm provide spatial resolution adequate for bulk field mapping.
- **Finite Element Modeling (FEM)**: Since direct measurement of electric fields within biofilms and at electrode interfaces is technically challenging, computational modeling using finite element methods (COMSOL Multiphysics, ANSYS) is widely used. These models solve the Laplace or Poisson equation with appropriate boundary conditions to predict the complete electric field distribution.
- **Electro-Optic Measurement**: For non-invasive field measurement, electro-optic sensors based on the Pockels effect can measure electric fields without disturbing the local field distribution. These fiber-optic probes provide point measurements from 0.1 V/m to 10^6 V/m, though their application to MES is primarily in research settings.

## Affecting Factors

### Primary

- **Applied/Generated Voltage**: The voltage difference between anode and cathode is the primary driver of the electric field. Higher voltages create proportionally stronger fields.
- **Electrode Spacing**: Field strength scales inversely with electrode distance. Reducing the gap from 5 cm to 1 cm increases the average field strength by 5x.
- **Electrolyte Conductivity**: Higher conductivity reduces voltage losses and produces more uniform field distributions. Low-conductivity solutions create field concentrations.
- **Electrode Geometry**: Planar parallel electrodes create relatively uniform fields, while interdigitated and 3D porous electrodes create highly non-uniform fields with local enhancements.
- **Biofilm Properties**: The electrical conductivity of the biofilm (10^-4 to 10^-1 S/m for electroactive biofilms) determines how the external field penetrates into the biofilm.
- **Ion Concentration Gradients**: Non-uniform ion distributions create local field modifications due to space charge effects.
- **Membrane Presence**: Ion exchange membranes create discontinuities in the electric field due to the Donnan potential.
- **Frequency**: For AC or pulsed field applications, the frequency determines how effectively the field penetrates biological structures.

## Related Parameters

- **name**: Cathode Potential

- **relationship**: Determines the field at the cathode-biofilm interface.
- **name**: Anode Potential

- **relationship**: Establishes the field at the anode-biofilm interface.
- **name**: Electrolyte Conductivity

- **relationship**: Inversely affects the field strength required to drive a given current density.
- **name**: Electrode Spacing

- **relationship**: Directly determines the average field strength.
- **name**: Magnetic Field Strength

- **relationship**: Combined electric and magnetic fields produce Lorentz forces on charged species.

## Compatible Systems

Physical Environmental Factors

## References

- Malvankar, N.S., Tuominen, M.T., & Lovley, D.R. (2012). Biofilm conductivity is a decisive variable for high-current-density *Geobacter sulfurreducens* microbial fuel cells. *Energy & Environmental Science*, 5(2), 5790-5797.
- Yates, M.D., Strycharz-Glaven, S.M., Golden, J.P., et al. (2016). Measuring conductivity of living *Geobacter sulfurreducens* biofilms. *Nature Nanotechnology*, 11(11), 910-913.
- Reguera, G. (2018). Microbial nanowires and electroactive biofilms. *FEMS Microbiology Ecology*, 94(7), fiy086.
- Kotnik, T., Rems, L., Tarek, M., & Miklavcic, D. (2019). Membrane electroporation and electropermeabilization: mechanisms and models. *Annual Review of Biophysics*, 48, 63-91.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Electric+Field+Strength&body=**Parameter%3A**+Electric+Field+Strength%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Felectric-field-strength.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Electric+Field+Strength&body=**Parameter%3A**+Electric+Field+Strength%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Felectric-field-strength.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Electric+Field+Strength&body=**Parameter%3A**+Electric+Field+Strength%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Felectric-field-strength.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
