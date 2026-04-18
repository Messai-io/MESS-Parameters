# Bipolar Membrane

A bipolar membrane (BPM) is a composite ion exchange membrane consisting of a cation exchange layer (CEL) laminated to an anion exchange layer (AEL), with a thin interfacial catalytic layer sandwiched between them. Under reverse bias (electric field directed from the AEL to the CEL), water molecules at the interface undergo accelerated dissociation into protons (H^+) and hydroxide ions (OH^-), which then migrate in opposite directions through their respective exchange layers. This unique water-splitting functionality enables BPMs to simultaneously generate acid and base from a neutral salt solution, making them exceptionally valuable in microbial electrochemical systems (MES) for pH management, CO2 reduction, and product separation.

In MES applications, BPMs address one of the most persistent challenges: pH imbalance between electrode chambers. In conventional MFC or MEC configurations with cation or anion exchange membranes, metabolic proton production at the anode and hydroxide generation at the cathode create opposing pH gradients that can shift by 4-6 pH units over hours of operation, severely impacting microbial viability and thermodynamic efficiency. BPMs maintain pH homeostasis by splitting water at the junction -- protons are supplied to the cathode chamber and hydroxide ions to the anode chamber, counteracting the metabolic pH drift.

For microbial electrosynthesis (MES) of CO2 reduction products, BPMs offer additional advantages. The controlled supply of protons to the cathode enables selective CO2 reduction to products such as acetate, formate, ethanol, and butyrate at defined pH conditions. The water dissociation at the BPM junction also prevents carbonate and bicarbonate crossover that would otherwise reduce cathodic CO2 availability. Commercial BPMs include Fumasep FBM (Fumatech), Neosepta BP-1E (ASTOM), and Aquaion BPM. The water dissociation potential across a BPM is theoretically 0.83 V (at 25 C), though practical values range from 0.9 to 1.5 V depending on current density and interfacial catalyst efficiency.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Materials |
| **Subcategory** | Ion Exchange Membranes |
| **Type** | object |

## Typical Values

- **Valid Range**: Water dissociation voltage 0.83-2.0 V; thickness 100-500 um; area resistance 1-20 ohm cm^2
- **Typical Range**: Water dissociation voltage 0.9-1.2 V; thickness 150-300 um; area resistance 2-8 ohm cm^2
- **Water Dissociation Current Density**: Up to 1000 A/m^2
- **pH Generation Rate**: 0.5-5 meq/(cm^2 h) at 100 A/m^2
- **Co-ion Leakage**: 2-10% of total ionic flux
- **Operational Lifetime**: 1000-10,000 hours
- **Cost**: $200-$1000/m^2

## Measurement Methods

- **Current-Voltage Characterization**: BPM water dissociation performance is evaluated using linear sweep voltammetry in a two-compartment cell with 0.5 M Na2SO4 electrolyte on both sides. Voltage is swept from 0 to 3 V at 1-5 mV/s while measuring current density. The water dissociation onset voltage, limiting current density, and area resistance are extracted from the I-V curve.
- **pH Monitoring**: Continuous pH measurement in both compartments using calibrated pH electrodes during galvanostatic operation quantifies the acid/base generation rate. The pH change rate dPH/dt is converted to proton/hydroxide flux using buffer capacity corrections. Data logging at 1-minute intervals for 6-24 hours provides steady-state generation rates.
- **Impedance Spectroscopy**: EIS from 100 kHz to 10 mHz at the open circuit voltage with 10 mV AC amplitude resolves the contributions of the CEL, AEL, and interfacial layer. The high-frequency arc corresponds to bulk membrane resistance, while the low-frequency arc reflects water dissociation kinetic resistance. Temperature-dependent EIS yields activation energies (typically 30-60 kJ/mol).
- **Ion Crossover Measurement**: Ionic crossover is quantified by placing different salt solutions on opposite sides and measuring ion concentration changes over time using ion chromatography or atomic absorption spectroscopy. Co-ion leakage rates are expressed as permeability coefficients.

## Affecting Factors

### Primary

- **Interfacial Catalyst**: The water dissociation rate depends critically on the interfacial catalyst. Metal hydroxides (Fe(OH)3, Cr(OH)3, Zr(OH)4) and polyelectrolyte complexes catalyze water dissociation through proton-transfer reactions, reducing the overpotential from >1 V to <0.2 V at 100 A/m^2.
- **Current Density**: At low current densities (<10 A/m^2), BPM operation is dominated by co-ion leakage (salt transport). Above the limiting current density (10-50 A/m^2), water dissociation becomes the dominant ion generation mechanism. At very high current densities (>500 A/m^2), interfacial dehydration can cause voltage spikes.
- **Operating Temperature**: Water dissociation kinetics follow Arrhenius behavior with activation energies of 30-60 kJ/mol. Increasing temperature from 25 to 60 C reduces overpotential by 100-300 mV at 100 A/m^2. However, many BPMs are rated for maximum 50-60 C.
- **Electrolyte Composition**: Multivalent cations (Ca^2+, Mg^2+) can precipitate as hydroxides or carbonates within the BPM structure, causing irreversible fouling (50-200% resistance increase after 500 hours with hard water).
- **Mechanical Integrity**: The CEL-AEL interface is susceptible to delamination under osmotic stress, pressure differentials (>0.5 bar), and cyclic pH swings. Reinforced BPMs offer improved stability at 10-30% higher area resistance.

## Related Parameters

- **name**: pH Level

- **relationship**: BPMs are the most effective membrane type for maintaining stable pH in both MES chambers.
- **name**: Cell Voltage

- **relationship**: Water dissociation adds 0.83-1.5 V to the total cell voltage requirement.
- **name**: Internal Resistance

- **relationship**: BPM area resistance contributes 15-40% of total internal resistance.
- **name**: Membrane Ion Selectivity

- **relationship**: BPMs exhibit near-perfect selectivity for H^+ and OH^- generation under proper conditions.
- **name**: Faradaic Efficiency

- **relationship**: Co-ion leakage through BPMs reduces faradaic efficiency by 2-10%.

## Compatible Systems

Membrane Separator Materials

## References

- Heijne, A. T. et al. (2010). Bipolar membrane applied in microbial fuel cells. Environmental Science & Technology, 44(5), 1690-1696.
- Strathmann, H. et al. (2013). Electrodialysis, a mature technology with a multitude of new applications. Desalination, 264(3), 268-288.
- Paidar, M. et al. (2016). Membrane electrolysis -- History, current status and perspective. Electrochimica Acta, 209, 737-756.
- Jaroszek, H. & Dydo, P. (2016). Ion-exchange membranes in chemical synthesis -- a review. Open Chemistry, 14(1), 1-19.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Bipolar+Membrane&body=**Parameter%3A**+Bipolar+Membrane%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fbipolar-membrane.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Bipolar+Membrane&body=**Parameter%3A**+Bipolar+Membrane%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fbipolar-membrane.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Bipolar+Membrane&body=**Parameter%3A**+Bipolar+Membrane%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fbipolar-membrane.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
