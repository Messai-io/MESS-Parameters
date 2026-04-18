# Copper Cathode

Copper cathode refers to the use of metallic copper (Cu) or copper-based alloys and composites as cathode electrode materials in microbial electrochemical systems (MES). Copper is of particular interest in microbial electrolysis cells (MECs) and microbial electrosynthesis systems due to its unique ability to catalyze the electrochemical reduction of CO2 to multi-carbon products (C2+ hydrocarbons and oxygenates) -- a selectivity not readily achieved by other monometallic cathodes. In MFC applications, copper cathodes have been explored for oxygen reduction reaction (ORR) catalysis, though copper's tendency to corrode in aqueous media and form passivating oxide layers (CuO, Cu2O) limits its long-term stability relative to carbon-based alternatives.

The CO2 reduction reaction (CO2RR) on copper surfaces proceeds through a complex network of adsorbed intermediates including *CO, *CHO, *COH, *OCCO, and *C2H4OH. Polycrystalline copper yields a product distribution spanning formate, CO, methane, ethylene, ethanol, and n-propanol, with the selectivity strongly dependent on surface crystallographic orientation, applied potential, electrolyte composition, and local pH. Cu(100) facets favor ethylene (faradaic efficiency 40-60% at -1.0 V vs. RHE), while Cu(111) favors methane. Oxide-derived copper (OD-Cu), obtained by thermal oxidation followed by electroreduction, exhibits grain boundaries and surface defects that enhance C2+ selectivity to >70% faradaic efficiency in optimized conditions.

In the MES context, copper cathodes face unique challenges from biofouling, microbial toxicity of dissolved Cu2+ ions (IC50 ~ 1-10 mg/L for most bacteria), and competition between abiotic electrochemical reduction and microbial metabolism at the cathode. Hybrid systems that spatially separate the copper electrocatalyst from the microbial community (e.g., using a membrane or sequential reactor configuration) can mitigate toxicity while leveraging copper's superior CO2RR activity.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Materials |
| **Subcategory** | Metal-Based Cathodes |
| **Type** | object |

## Typical Values

- **Valid Range**: 0.5 - 50 cm2 (electrode geometric area, lab-scale)
- **Typical Range**: 1 - 25 cm2
- **Electrode Thickness**: 0.025 - 2.0 mm (foil to mesh)
- **Applied Potential for CO2RR**: -0.8 to -1.5 V vs. RHE
- **CO2RR Faradaic Efficiency (C2+ products)**: 20 - 75% (depending on surface structure)
- **Corrosion Rate in Neutral PBS**: 0.01 - 0.5 mm/year
- **Electrical Resistivity**: 1.68 x 10^-8 ohm-m (bulk Cu at 20 C)
- **Cu2+ Leaching Rate**: 0.1 - 50 ug/cm2/day (pH-dependent)

## Measurement Methods

- **Linear Sweep Voltammetry (LSV) for CO2RR Activity**: Three-electrode configuration with Cu cathode as working electrode, Ag/AgCl reference, and Pt counter electrode in CO2-saturated electrolyte (0.1 M KHCO3). Scan rate: 1-5 mV/s from OCP to -1.5 V vs. RHE. Compare current density in CO2-saturated vs. N2-saturated electrolyte to isolate CO2RR contribution. Equipment: potentiostat (Gamry, BioLogic, or Metrohm Autolab) with iR compensation.
- **Gas Chromatography for Product Analysis**: Headspace gas analysis by GC with thermal conductivity detector (TCD) for H2, CO, and CH4, and flame ionization detector (FID) for C2H4, C2H6, and higher hydrocarbons. Carrier gas: He or Ar. Liquid products (formate, acetate, ethanol, n-propanol) quantified by HPLC or 1H-NMR. Faradaic efficiency calculated as FE_i = (n_i x z_i x F) / Q_total, where n_i is moles of product i, z_i is electrons per molecule, and Q_total is total charge passed.
- **Electrochemical Impedance Spectroscopy (EIS)**: Frequency range: 100 kHz to 10 mHz with 10 mV AC amplitude superimposed on DC bias at operating potential. Nyquist plot analysis yields charge transfer resistance (Rct), ohmic resistance (Rs), and double-layer capacitance (Cdl). Increasing Rct over time indicates surface passivation or fouling. Equipment: potentiostat with FRA module; precision +/- 0.1% impedance magnitude.
- **Inductively Coupled Plasma Mass Spectrometry (ICP-MS) for Cu Dissolution**: Electrolyte samples collected periodically and analyzed for dissolved Cu by ICP-MS (detection limit: 0.01 ppb). Critical for assessing copper cathode stability and potential toxicity to microbial communities. Cu2+ concentrations above 5 mg/L are typically inhibitory to electrogenic bacteria.

## Affecting Factors

### Primary

- **Surface Morphology and Crystal Facets**: Electropolished polycrystalline Cu produces ~30% C2+ FE; oxide-derived Cu (OD-Cu, prepared by oxidation at 500 C in air followed by electroreduction) achieves 60-75% C2+ FE due to abundant grain boundaries that stabilize *CO dimerization intermediates. Nanostructured Cu (nanowires, nanocubes) offer tunable facet exposure.
- **Applied Potential**: CO2RR onset occurs at approximately -0.4 V vs. RHE on Cu; C2+ selectivity peaks at -0.9 to -1.1 V vs. RHE; more negative potentials (-1.2 to -1.5 V) shift selectivity toward H2 evolution. The potential window for optimal product distribution spans only ~200-300 mV.
- **Electrolyte Composition and pH**: KHCO3 concentration (0.05-0.5 M) controls local CO2 availability via bicarbonate equilibrium. Cations (K+ > Na+ > Li+) influence electric field effects at the electrode surface. Local pH at the cathode surface can exceed bulk pH by 2-4 units at high current densities, shifting CO2/HCO3-/CO32- equilibrium and affecting selectivity.
- **CO2 Mass Transport**: In quiescent electrolytes, CO2 depletion at the cathode boundary layer limits partial current density to <10 mA/cm2. Gas diffusion electrodes with hydrophobic backing layers supply CO2 directly to the catalyst layer, enabling >100 mA/cm2. In MES, CO2 is often supplied at low partial pressures from microbial metabolism.
- **Biofouling and Microbial Interactions**: Biofilm formation on Cu surfaces is inhibited by Cu2+ toxicity but can still occur at sub-lethal concentrations. Mixed-community cathode biofilms may consume H2 and CO intermediates, altering apparent selectivity. Antimicrobial properties of Cu can be beneficial (self-cleaning) or detrimental (preventing desired cathodic biocatalysis).
- **Temperature**: CO2RR kinetics increase with temperature (activation energy ~30-50 kJ/mol), but CO2 solubility decreases (from 34 mM at 25 C to 24 mM at 40 C in pure water). Net effect: C2+ selectivity often peaks at 20-30 C; higher temperatures favor H2 evolution.

## Compatible Systems

Cathode Materials

## References

- Kuhl, K.P., et al. (2012). "New insights into the electrochemical reduction of CO2 on metallic copper surfaces." *Energy & Environmental Science*, 5, 7050-7059. DOI: 10.1039/C2EE21234J
- Li, C.W., & Kanan, M.W. (2012). "CO2 reduction at low overpotential on Cu electrodes resulting from the reduction of thick Cu2O films." *Journal of the American Chemical Society*, 134(17), 7231-7234. DOI: 10.1021/ja3010978
- Hori, Y. (2008). "Electrochemical CO2 reduction on metal electrodes." In *Modern Aspects of Electrochemistry*, 42, 89-189. Springer. DOI: 10.1007/978-0-387-49489-0_3
- Jiang, Y., et al. (2019). "Copper-based electrocatalysts for CO2 reduction in microbial electrosynthesis systems." *ACS Sustainable Chemistry & Engineering*, 7(5), 4855-4863. DOI: 10.1021/acssuschemeng.8b05106
- Nitopi, S., et al. (2019). "Progress and perspectives of electrochemical CO2 reduction on copper in aqueous electrolyte." *Chemical Reviews*, 119(12), 7610-7672. DOI: 10.1021/acs.chemrev.8b00705

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Copper+Cathode&body=**Parameter%3A**+Copper+Cathode%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fcopper-cathode.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Copper+Cathode&body=**Parameter%3A**+Copper+Cathode%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fcopper-cathode.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Copper+Cathode&body=**Parameter%3A**+Copper+Cathode%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fcopper-cathode.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
