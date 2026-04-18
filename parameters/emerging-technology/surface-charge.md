# Surface Charge

Surface Charge quantifies the net electrical charge present on the surfaces of electrodes, membranes, and reactor materials in microbial electrochemical systems (MES), measured as zeta potential (mV) in colloidal systems or surface charge density (C/m2 or mC/m2) for solid surfaces. This parameter governs electrostatic interactions between system surfaces and charged species including microorganisms, proteins, ions, and colloidal particles. From a safety and regulatory perspective, surface charge is critical because it determines biofilm adhesion strength (affecting containment of potentially pathogenic organisms), membrane fouling propensity (impacting treatment performance and regulatory compliance), colloidal stability of nanoparticle catalysts (affecting potential environmental release), and electrophoretic mobility of microorganisms (relevant to pathogen retention and effluent safety).

The safety implications of surface charge extend to multiple domains. Positively charged surfaces enhance bacterial adhesion, which is desirable for anode biofilm development but creates decontamination challenges during maintenance. Negatively charged membrane surfaces repel bacterial cells, aiding effluent quality but potentially reducing treatment efficiency. In systems employing nanomaterials (carbon nanotubes, metal nanoparticles), surface charge determines colloidal stability and the risk of nanoparticle release into effluent -- a growing regulatory concern under EPA's Toxic Substances Control Act (TSCA) and EU REACH nanomaterial provisions. Surface charge modifications through functionalization must be evaluated for their effects on material toxicity, biocompatibility, and environmental persistence.

Regulatory frameworks relevant to surface charge include EPA TSCA Section 5 (new chemical notifications for surface-modified nanomaterials), EU REACH Annex VI-XI (registration dossiers requiring surface characterization for nanomaterials per EC Recommendation 2011/696/EU), ISO 10993 (biocompatibility evaluation for medical device-adjacent applications), and OECD Test Guidelines for nanomaterial safety assessment. Effluent quality standards under the Clean Water Act also require that surface charge management ensures adequate particle and pathogen removal.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Emerging Technology |
| **Subcategory** | Nanoparticle Properties |
| **Type** | number |
| **Unit** | mV |
| **Minimum** | -100 |
| **Maximum** | 100 |

## Typical Values

- **Valid Range**: Zeta potential -100 to +100 mV; surface charge density -500 to +500 mC/m2
- **Typical Range**: Zeta potential -40 to +20 mV for most MES electrode and membrane surfaces

## Measurement Methods

- **Electrophoretic Light Scattering (Zeta Potential)**: 1. Prepare a dilute suspension of particles or membrane fragments in the MES electrolyte (concentration 0.01-0.1% w/v) 2. Equilibrate at the target pH and ionic strength for 30 minutes minimum 3. Load sample into the measurement cell of a zeta potential analyzer (e.g., Malvern Zetasizer, Brookhaven ZetaPALS) 4. Apply an electric field and measure electrophoretic mobility using laser Doppler velocimetry 5. Convert mobility to zeta potential using the Smoluchowski equation (for thin double layers, kappa*a >> 1) or Henry equation (general case) 6. Report mean zeta potential, distribution width, and measurement conditions (pH, conductivity, temperature) 7. Perform measurements in triplicate; acceptable RSD < 10%
- **Streaming Potential/Current (Flat Surfaces)**: 1. Mount the membrane or electrode sample in a streaming potential cell (e.g., Anton Paar SurPASS) 2. Flow electrolyte (typically 1 mM KCl) through the channel at controlled pressure (0-400 mbar) 3. Measure streaming potential or streaming current as a function of applied pressure 4. Calculate zeta potential using the Helmholtz-Smoluchowski equation: zeta = (dU/dP) x (eta x kappa) / (epsilon x epsilon_0) 5. Perform pH titration (pH 3-10) to determine the isoelectric point 6. Report zeta potential vs. pH curve for comprehensive surface charge characterization
- **Potentiometric Titration (Surface Charge Density)**: 1. Suspend material in 0.01, 0.1, and 1.0 M NaCl solutions (three ionic strengths) 2. Titrate with standardized HCl and NaOH from pH 3 to 10 3. Construct charge-pH curves at each ionic strength 4. Determine the point of zero charge (PZC) as the pH where curves intersect 5. Calculate surface charge density (sigma_0) from the difference between acid/base consumption and blank titration 6. Report PZC, surface charge density at operating pH, and total surface site density

## Affecting Factors

### Primary

- **Solution pH**: Surface charge varies with pH due to protonation/deprotonation of surface functional groups; most carbon materials become more negative at higher pH
- **Ionic Strength**: Higher ionic strength compresses the electrical double layer, reducing effective zeta potential and screening surface charge
- **Surface Functionalization**: Chemical modification (oxidation, amination, sulfonation) directly alters surface charge density and sign
- **Biofilm Formation**: Microbial colonization covers original surface charge with extracellular polymeric substances (EPS), typically imparting negative charge
- **Adsorbed Species**: Proteins, humic acids, and multivalent cations adsorb to surfaces and modify effective charge
- **Temperature**: Affects double layer thickness and ion mobility; typically 1-2 mV zeta potential change per 10 degC
- **Oxidation State**: Electrochemical cycling modifies surface oxide composition and charge on carbon and metal electrodes
- **Surface Roughness**: Rough surfaces create heterogeneous charge distributions affecting local microbial adhesion
- **Aging**: Atmospheric exposure and electrolyte contact cause time-dependent changes in surface chemistry and charge

## Related Parameters

- **name**: Surface Functionalization

- **relationship**: Chemical modification of surfaces directly controls surface charge characteristics
- **name**: Cation Exchange

- **relationship**: Membrane surface charge determines cation selectivity and Donnan exclusion effectiveness
- **name**: Chemical Resistance

- **relationship**: Surface charge modifications must be stable under the chemical conditions of the MES environment
- **name**: Biocompatibility (ISO)

- **relationship**: Surface charge affects cell adhesion, protein adsorption, and biocompatibility classification
- **name**: Target Analyte

- **relationship**: Sensor surface charge determines analyte binding affinity and selectivity in MES biosensor applications

## Compatible Systems

Nanomaterial Integration

## References

- Hunter, R. J. (2001). Foundations of Colloid Science, 2nd Edition. Oxford University Press.
- Elimelech, M., Gregory, J., Jia, X., & Williams, R. A. (1995). Particle Deposition and Aggregation. Butterworth-Heinemann.
- Reguera, G., et al. (2005). Extracellular electron transfer via microbial nanowires. Nature, 435, 1098-1101.
- ISO 13099-1:2012. Colloidal systems -- Methods for zeta-potential determination -- Part 1: Electroacoustic and electrokinetic phenomena.
- ECHA. (2017). Guidance on Information Requirements and Chemical Safety Assessment: Appendix for Nanoforms. ECHA-2017-G-10.
- Saito, T., et al. (2011). Effect of nitrogen addition on the performance of microbial fuel cell anodes. Bioresource Technology, 102(1), 395-398.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Surface+Charge&body=**Parameter%3A**+Surface+Charge%0A**Category%3A**+Emerging+Technology%0A**File%3A**+parameters%2Femerging-technology%2Fsurface-charge.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Surface+Charge&body=**Parameter%3A**+Surface+Charge%0A**Category%3A**+Emerging+Technology%0A**File%3A**+parameters%2Femerging-technology%2Fsurface-charge.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Surface+Charge&body=**Parameter%3A**+Surface+Charge%0A**Category%3A**+Emerging+Technology%0A**File%3A**+parameters%2Femerging-technology%2Fsurface-charge.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
