# Membrane Water Uptake

Membrane water uptake is the mass percentage of water absorbed by an ion exchange membrane when equilibrated with liquid water or humid atmosphere. It is a critical material property for membranes used in microbial electrochemical systems (MES) because the absorbed water forms the hydrophilic channel network through which protons and other ions are transported between the anode and cathode chambers. Water uptake directly governs proton conductivity, dimensional stability, mechanical properties, and transport selectivity of the membrane.

**Formula:** WU (%) = ((W_wet - W_dry) / W_dry) x 100

Where:

- WU = Water uptake (%)
- W_wet = Mass of membrane equilibrated in water at defined temperature (g)
- W_dry = Mass of membrane dried to constant weight (g)

Water uptake is also expressed volumetrically as:

**WU_vol (%) = ((V_wet - V_dry) / V_dry) x 100**

Or in terms of the hydration number (lambda), defined as moles of water per mole of sulfonic acid (or other ion exchange) groups:

**lambda = (WU / 100) x (EW / M_H2O)**

Where EW is the equivalent weight (g/mol of exchange sites) and M_H2O = 18 g/mol.

For Nafion 117, typical lambda values range from 14 (80% RH) to 22 (liquid water contact), corresponding to water uptake of 25-38%.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Materials |
| **Type** | number |
| **Unit** | % |
| **Papers Reporting** | 19 |

## Typical Values

- **Target water uptake**: 25 - 45% for PEM-based MES
- **Minimum for adequate conductivity**: ~15%
- **Maximum before mechanical failure**: ~80% (membrane-dependent)
- **Practical sweet spot**: 30 - 40% (balances conductivity, selectivity, and stability)

## Measurement Methods

- **Gravimetric Method (Standard)**: 1. **Membrane Conditioning**:    - Boil membrane in DI water for 1 hour (Nafion) or soak at room temperature for 24 hours    - For protonated form: soak in 0.5 M H2SO4 for 2 hours, then rinse in DI water    - For sodium form: soak in 1 M NaCl for 24 hours  2. **Wet Mass Measurement**:    - Remove membrane from water    - Quickly blot surface water with filter paper or lint-free wipe (do not squeeze)    - Weigh immediately on analytical balance (precision +/- 0.1 mg)    - Record W_wet    - Speed is critical: evaporation begins immediately upon removal from water  3. **Dry Mass Measurement**:    - Dry in vacuum oven at 60-80 degrees C for 12-24 hours until constant weight    - Alternative: dry at 105 degrees C for 4-6 hours (may cause slight degradation of some polymers)    - Cool in desiccator for 10 minutes before weighing    - Record W_dry  4. **Calculation**:    - WU (%) = ((W_wet - W_dry) / W_dry) x 100    - Report average of at least 3 membrane samples    - Include temperature of water equilibration (typically 25 degrees C or 80 degrees C)
- **Dynamic Vapor Sorption (DVS)**: 1. Place small membrane sample (5-20 mg) in DVS instrument 2. Expose to controlled humidity (0-95% RH) at fixed temperature 3. Measure mass change continuously as humidity is stepped 4. Generates complete water sorption isotherm 5. Advantages: No surface water artifacts; measures humidity-dependent uptake 6. Disadvantage: Liquid water uptake differs from vapor uptake (Schroeder's paradox)
- **Dimensional Swelling Measurement**: 1. Cut membrane into precise rectangular pieces (e.g., 2 cm x 2 cm) 2. Measure length, width, and thickness with micrometer (dry state) 3. Equilibrate in water; re-measure dimensions (wet state) 4. Calculate linear swelling: Delta_L (%) = ((L_wet - L_dry) / L_dry) x 100 5. Calculate volumetric swelling from three dimensions 6. Anisotropic swelling is common: in-plane vs. through-plane swelling may differ
- **Thermogravimetric Analysis (TGA)**: 1. Heat membrane from 25 to 200 degrees C at 5-10 degrees C/min under nitrogen 2. First mass loss (25-120 degrees C): free and loosely bound water 3. Second mass loss (120-200 degrees C): tightly bound water 4. Provides information on water binding strength and distribution 5. Total water content from combined losses

## Affecting Factors

### Primary

- **Ion Exchange Capacity (IEC)**: Higher IEC (more sulfonic acid groups) creates more hydrophilic sites, increasing water uptake; Nafion IEC = 0.91 mmol/g; SPEEK can reach 2.5 mmol/g at high degree of sulfonation
- **Degree of Sulfonation (DS)**: For SPEEK, DS controls water uptake almost linearly; DS > 70% can cause excessive swelling and loss of mechanical integrity
- **Polymer Backbone**: Fluorinated backbones (Nafion, Aquivion) have stronger phase separation between hydrophobic backbone and hydrophilic side chains, producing well-defined water channels; hydrocarbon membranes have less organized channel structure
- **Cross-linking Degree**: Chemical or physical cross-linking restricts swelling; 10-20% cross-linker can reduce water uptake by 30-50% with modest conductivity loss
- **H+ form**: Highest water uptake due to strong hydration of protons
- **Na+ form**: 10-20% lower water uptake than H+ form
- **Ca2+ form**: 20-40% lower water uptake due to ionic cross-linking by divalent cations
- **Implication for MES**: Cation exchange during operation (Na+, K+, Ca2+ replacing H+) progressively reduces water uptake and conductivity; this is a major degradation mechanism in MFC membranes
- **Liquid Water**: Water uptake increases 10-30% from 25 to 80 degrees C for most PEMs due to thermal expansion of the polymer matrix
- **Boiling Treatment**: Nafion boiled in water shows ~38% uptake vs. ~25% at room temperature; the boiled state has a more open structure
- **Thermal History**: Annealing at high temperature (> 120 degrees C) in the dry state can collapse channels, permanently reducing water uptake (thermal history effect)
- **pH**: Exposure to pH < 2 or pH > 12 can alter water uptake through hydrolysis or chemical degradation
- **Biofouling**: Biofilm EPS layer on membrane surface can restrict water access, altering swelling dynamics
- **Electrolyte Composition**: High ionic strength (> 200 mM) causes osmotic deswelling; real wastewater composition varies widely
- **Operating Duration**: Water uptake may change over weeks as membrane equilibrates with complex wastewater containing multivalent cations

## Related Parameters

- **name**: Proton Conductivity

- **relationship**: Directly dependent on water content; conductivity scales roughly as WU^1.5 for many PEMs
- **name**: Membrane Pore Size

- **relationship**: Hydrated channel diameter increases with water uptake; ~2 nm (dry) to ~5 nm (fully hydrated) for Nafion
- **name**: Ion Exchange Capacity (IEC)

- **relationship**: Determines the density of hydrophilic sites driving water absorption
- **name**: Membrane Thickness

- **relationship**: Swelling in through-plane direction increases effective thickness by 10-30%
- **name**: Ionic Resistance

- **relationship**: Inversely related to water uptake (within optimal range); excess water uptake dilutes fixed charges, reducing selectivity
- **name**: Oxygen Permeability

- **relationship**: Increases with water content as dissolved O2 diffuses through hydrated channels
- **name**: Substrate Crossover

- **relationship**: Water channels also allow passage of small organic molecules
- **name**: Electro-osmotic Drag

- **relationship**: Water molecules are dragged with proton transport (2-3 H2O per H+ in Nafion)
- **name**: Internal Resistance

- **relationship**: Membrane contribution to R_int depends on water uptake through its effect on conductivity
- **name**: pH Gradient

- **relationship**: Insufficient proton transport (low water uptake membranes) creates pH imbalance between chambers
- **name**: Coulombic Efficiency

- **relationship**: Oxygen crossover (facilitated by water channels) reduces CE in MFC
- **name**: Membrane Durability

- **relationship**: Repeated swelling/deswelling cycles cause mechanical fatigue

## Compatible Systems

Membrane Separator

## References

### Fundamental Water Transport

1. **Zawodzinski, T.A., et al. (1993)**. "Water uptake by and transport through Nafion 117 membranes". *Journal of the Electrochemical Society*, 140(4), 1041-1047.
   - Foundational study of water uptake in Nafion

2. **Kreuer, K.D. (2001)**. "On the development of proton conducting polymer membranes for hydrogen and methanol fuel cells". *Journal of Membrane Science*, 185(1), 29-39.
   - Relationship between water uptake, morphology, and proton conductivity

3. **Mauritz, K.A., & Moore, R.B. (2004)**. "State of understanding of Nafion". *Chemical Reviews*, 104(10), 4535-4585.
   - Comprehensive review including water uptake mechanisms and measurement methods

### MES-Specific Studies

4. **Rozendal, R.A., et al. (2006)**. "Towards practical implementation of bioelectrochemical wastewater treatment". *Trends in Biotechnology*, 26(8), 450-459.
   - Membrane requirements for bioelectrochemical systems

5. **Harnisch, F., & Schroder, U. (2009)**. "Selectivity versus mobility: Separation of anode and cathode in microbial bioelectrochemical systems". *ChemSusChem*, 2(10), 921-926.
   - Trade-offs in membrane selection for MES including water uptake effects

### Alternative Membranes

6. **Peighambardoust, S.J., et al. (2010)**. "Review of the proton exchange membranes for fuel cell applications". *International Journal of Hydrogen Energy*, 35(17), 9349-9384.
   - Comprehensive comparison of PEM water uptake values across membrane types

7. **Leong, J.X., et al. (2013)**. "Ion exchange membranes as separators in microbial fuel cells for bioenergy conversion: A comprehensive review". *Renewable and Sustainable Energy Reviews*, 28, 575-587.
   - Review of membrane properties including water uptake for MFC applications

---

*Parameter documentation for the MESS (Microbial Electrochemical Systems Standardization) database. Last updated based on peer-reviewed literature through 2024.*

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Membrane+Water+Uptake&body=**Parameter%3A**+Membrane+Water+Uptake%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fmembrane-water-uptake.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Membrane+Water+Uptake&body=**Parameter%3A**+Membrane+Water+Uptake%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fmembrane-water-uptake.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Membrane+Water+Uptake&body=**Parameter%3A**+Membrane+Water+Uptake%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fmembrane-water-uptake.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
