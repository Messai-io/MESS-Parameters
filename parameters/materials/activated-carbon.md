# Activated Carbon

Activated carbon is a highly porous carbonaceous material widely employed as an electrode material in microbial electrochemical systems (MES), particularly in microbial fuel cells (MFCs) and microbial electrolysis cells (MECs). Its extraordinary specific surface area, typically ranging from 500 to 3000 m^2/g, provides abundant sites for microbial colonization and electrochemical reactions. The activation process -- achieved through physical (steam, CO2) or chemical (KOH, ZnCl2, H3PO4) means -- creates a hierarchical pore structure comprising micropores (<2 nm), mesopores (2-50 nm), and macropores (>50 nm), each serving distinct roles in ion transport, substrate diffusion, and biofilm attachment.

In MES applications, activated carbon serves as both anode and cathode material. As an anode, its biocompatible surface facilitates extracellular electron transfer (EET) from electroactive bacteria such as Geobacter sulfurreducens and Shewanella oneidensis. The surface functional groups (carboxyl, hydroxyl, carbonyl) introduced during activation enhance hydrophilicity and promote bacterial adhesion. As a cathode, activated carbon functions as a cost-effective catalyst for the oxygen reduction reaction (ORR), offering a viable alternative to platinum-based catalysts with comparable performance at a fraction of the cost.

The performance of activated carbon in MES depends critically on the precursor material, activation method, and post-treatment modifications. Common precursors include coconut shell, wood, coal, and increasingly, waste biomass such as sewage sludge, agricultural residues, and food waste. These bio-derived activated carbons align with the sustainability goals of MES technology while often exhibiting superior electrochemical properties due to inherent nitrogen and phosphorus doping from the biomass precursor.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Materials |
| **Subcategory** | Carbon-Based Anodes |
| **Type** | object |
| **Papers Reporting** | 4 |

## Typical Values

- **Valid Range**: BET surface area 100-3500 m^2/g; pore volume 0.1-2.5 cm^3/g
- **Typical Range**: BET surface area 800-1500 m^2/g; pore volume 0.3-1.0 cm^3/g
- **Particle Size**: 0.1-5.0 mm (granular); 10-100 um (powder)
- **Electrical Conductivity**: 5-50 S/m (varies with activation and compaction)
- **Ash Content**: 1-15% (precursor-dependent)
- **Cost**: $0.50-$5.00/g (laboratory grade); $0.80-$2.00/kg (industrial grade)

## Measurement Methods

- **BET Surface Area Analysis**: Brunauer-Emmett-Teller (BET) nitrogen adsorption-desorption isotherms at 77 K are the standard method for determining specific surface area and pore size distribution. Equipment includes automated surface area analyzers (e.g., Micromeritics ASAP 2460, Quantachrome Autosorb). Samples are degassed at 150-300 C under vacuum for 6-12 hours prior to analysis. The BET equation is applied in the relative pressure range P/P0 = 0.05-0.30. Pore size distribution is derived using Barrett-Joyner-Halenda (BJH) or density functional theory (DFT) methods.
- **Scanning Electron Microscopy (SEM)**: SEM imaging (e.g., JEOL JSM-7600F, Hitachi SU8230) at accelerating voltages of 5-20 kV provides direct visualization of surface morphology, pore structure, and biofilm colonization. Samples are typically sputter-coated with gold or platinum (5-10 nm) to prevent charging. Energy-dispersive X-ray spectroscopy (EDS) coupled with SEM enables elemental mapping of surface composition and dopant distribution.
- **Electrochemical Characterization**: Cyclic voltammetry (CV), electrochemical impedance spectroscopy (EIS), and linear sweep voltammetry (LSV) characterize the electrochemical behavior of activated carbon electrodes. A three-electrode configuration with Ag/AgCl reference electrode and platinum counter electrode is standard. CV scan rates of 1-100 mV/s reveal capacitive behavior and faradaic processes. EIS in the frequency range 100 kHz to 10 mHz provides charge transfer resistance and double-layer capacitance.
- **Thermogravimetric Analysis (TGA)**: TGA (e.g., TA Instruments Q500) under nitrogen or air atmosphere from 25 to 900 C at heating rates of 5-20 C/min determines thermal stability, moisture content, volatile matter, fixed carbon, and ash content. This method is essential for quality control and comparing activated carbons from different precursors.

## Affecting Factors

### Primary

- **Precursor Material**: The starting material fundamentally determines the pore structure, surface chemistry, and electrical conductivity of the resulting activated carbon. Coconut shell produces predominantly microporous structures (>80% micropore volume), while wood-based precursors yield more mesoporous materials. Bio-derived precursors (sewage sludge, food waste) introduce heteroatom doping (N: 2-8 at%, P: 0.5-3 at%) that enhances ORR catalytic activity by 30-60% compared to undoped counterparts.
- **Activation Method and Conditions**: Chemical activation with KOH at mass ratios of 1:1 to 4:1 (KOH:carbon) and temperatures of 600-900 C produces ultra-high surface areas (2000-3500 m^2/g) with tunable pore sizes. Physical activation with steam or CO2 at 800-1000 C yields lower surface areas (500-1500 m^2/g) but with more uniform pore distribution. The activation temperature, duration (0.5-4 hours), and heating rate (1-10 C/min) all influence the final pore architecture.
- **Surface Functional Groups**: Oxygen-containing functional groups (carboxyl, hydroxyl, carbonyl, lactone) enhance hydrophilicity and bacterial adhesion but may increase charge transfer resistance by 15-40%. Nitrogen-containing groups (pyridinic, pyrrolic, graphitic-N) improve electrocatalytic activity for ORR and promote electron transfer from electroactive biofilms. The balance between surface functionality and conductivity is critical for optimal MES performance.
- **Pore Size Distribution**: Macropores (>50 nm) facilitate substrate and ion transport into the electrode interior; mesopores (2-50 nm) provide channels for bacterial penetration and metabolite diffusion; micropores (<2 nm) contribute to capacitive charge storage and ion adsorption. An ideal MES electrode requires a hierarchical pore structure with 20-30% macropores, 30-40% mesopores, and 30-50% micropores.
- **Electrode Architecture**: The form factor -- granular, powder, cloth, or monolithic -- affects the effective utilization of activated carbon in MES. Granular activated carbon (GAC) packed-bed anodes achieve volumetric current densities of 50-200 A/m^3 but may suffer from poor electrical contact between particles. Activated carbon bound with PVDF or Nafion onto current collectors improves conductivity but reduces accessible surface area by 20-40%.
- **Operating pH**: Extreme pH values (below 4 or above 10) can alter surface functional group speciation and affect bacterial viability on activated carbon anodes. Optimal pH range for most MES applications is 6.5-7.5.
- **Temperature**: Higher operating temperatures (30-45 C) enhance microbial metabolic rates and ion diffusion within activated carbon pores but may accelerate surface group decomposition above 60 C.
- **Ionic Strength**: Electrolyte ionic strength affects the electrical double layer thickness on activated carbon surfaces, influencing capacitive behavior and ion selectivity. Typical MES electrolytes have ionic strengths of 50-200 mM.

## Related Parameters

- **name**: Electrode Porosity

- **relationship**: Activated carbon porosity (60-85%) directly determines the volumetric capacity for biofilm growth and electrolyte penetration within the electrode structure.
- **name**: Surface Area to Volume Ratio

- **relationship**: Higher ratios (1000-5000 m^2/m^3) in activated carbon electrodes correlate with increased current generation per unit reactor volume.
- **name**: Charge Transfer Resistance

- **relationship**: Activated carbon surface chemistry and biofilm maturity determine charge transfer resistance, typically 1-50 ohm for well-colonized anodes.
- **name**: Internal Resistance

- **relationship**: The bulk resistivity of activated carbon contributes to ohmic losses; granular packed beds exhibit higher internal resistance (5-50 ohm) than monolithic forms (0.5-5 ohm).
- **name**: Double-Layer Capacitance

- **relationship**: Activated carbon's high surface area yields specific capacitances of 50-300 F/g, contributing to charge storage and current smoothing in MES.
- **name**: BET Surface Area

- **relationship**: The primary metric for activated carbon quality, directly correlated with adsorption capacity and available area for biofilm colonization.

## Compatible Systems

Anode Materials

## References

- Logan, B. E. et al. (2006). Microbial Fuel Cells: Methodology and Technology. Environmental Science & Technology, 40(17), 5181-5192.
- Wei, J., Liang, P., & Huang, X. (2011). Recent progress in electrodes for microbial fuel cells. Bioresource Technology, 102(20), 9335-9344.
- Zhang, X. et al. (2014). Activated carbon-based air-cathode for enhanced power generation in microbial fuel cells. Journal of Power Sources, 264, 248-253.
- Huggins, T. et al. (2014). Biochar as a sustainable electrode material for electricity production in microbial fuel cells. Bioresource Technology, 157, 114-119.
- Dong, H. et al. (2018). Activated carbon derived from biomass for microbial fuel cell cathodes: A review. Chemical Engineering Journal, 338, 726-739.
- Rabaey, K. & Rozendal, R. A. (2010). Microbial electrosynthesis -- revisiting the electrical route for microbial production. Nature Reviews Microbiology, 8(10), 706-716.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Activated+Carbon&body=**Parameter%3A**+Activated+Carbon%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Factivated-carbon.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Activated+Carbon&body=**Parameter%3A**+Activated+Carbon%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Factivated-carbon.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Activated+Carbon&body=**Parameter%3A**+Activated+Carbon%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Factivated-carbon.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
