# Rhodoferax Ferrireducens

*Rhodoferax ferrireducens* is a Gram-negative, facultatively anaerobic betaproteobacterium that holds a unique position in microbial electrochemistry as one of the first organisms demonstrated to generate electricity in a microbial fuel cell while completely oxidizing sugars with high coulombic efficiency. Isolated from subsurface sediments in Oyster Bay, Virginia, this psychrotolerant organism can grow at temperatures as low as 4 degrees C, making it particularly relevant for MES applications in temperate and cold climates where mesophilic organisms would perform poorly.

The organism's significance in MES stems from its ability to completely oxidize glucose to CO2 while transferring electrons to an electrode with coulombic efficiencies approaching 80% in early studies. Unlike many fermentative organisms that only partially oxidize substrates, *R. ferrireducens* channels most substrate electrons to the electrode rather than to fermentation byproducts. The organism achieves this through its respiratory electron transport chain, which can utilize Fe(III) oxides, electrodes, and other insoluble electron acceptors as terminal electron sinks, analogous to the more extensively studied *Geobacter* species.

*R. ferrireducens* possesses c-type cytochromes that are believed to mediate extracellular electron transfer, though the molecular details of its EET pathway are less characterized than those of *Geobacter* or *Shewanella*. The organism's psychrotolerance, ability to use sugars directly (unlike Geobacter which requires acetate/simple organic acids), and high coulombic efficiency make it an attractive biocatalyst for MES treating sugar-containing wastewaters in cold environments, such as food processing effluents in northern climates.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Biological |
| **Subcategory** | Bacteria - Electroactive Species |
| **Type** | object |

## Typical Values

- **Valid Range (current production)**: 0.01 to 2.0 A/m2
- **Typical Range (current production)**: 0.1 to 1.0 A/m2
- **Coulombic Efficiency (glucose)**: 50-83%
- **Temperature Range**: 4-30 degrees C (psychrotolerant)
- **Optimal Temperature**: 20-25 degrees C
- **Optimal pH**: 6.5-7.5
- **Doubling Time**: 8-20 hours
- **Power Density**: 10-200 mW/m2
- **Substrate Range**: Glucose, fructose, sucrose, lactose, acetate, Fe(III) reduction

## Measurement Methods

- **MFC Performance at Variable Temperatures**: MFCs inoculated with *R. ferrireducens* are operated at temperatures from 4 to 30 degrees C. Temperature-dependent polarization curves and power density curves characterize the organism's performance across its growth range. The comparison of cold-temperature performance with mesophilic electrogens demonstrates the organism's competitive advantage in cold environments.
- **Coulombic Efficiency Determination**: Total charge transferred (integrated current over time) is compared to the theoretical maximum charge available from complete substrate oxidation (24 electrons per glucose molecule for CO2 production). Metabolite analysis by HPLC confirms the absence of fermentation byproducts, verifying complete oxidation.
- **Fe(III) Reduction Assays**: Fe(III) citrate or amorphous Fe(III) oxyhydroxide reduction rates are measured by the ferrozine assay (formation of Fe(II)-ferrozine complex, absorbance at 562 nm). This serves as a proxy for EET capacity and allows comparison with electrode-reducing activity.
- **Cyclic Voltammetry and Spectroelectrochemistry**: CV identifies redox-active species at the biofilm-electrode interface. Spectroelectrochemistry (combining UV-vis spectroscopy with electrochemical control) can detect cytochrome redox state changes during electrode polarization. These techniques reveal the EET mechanism.
- **Cold-Adaptation Protein Analysis**: Comparative proteomics of *R. ferrireducens* grown at 4 degrees C versus 25 degrees C identifies cold-adaptation proteins (cold-shock proteins, RNA chaperones, membrane lipid desaturases) that maintain metabolic function at low temperatures.

## Affecting Factors

### Primary

- **Temperature**: *R. ferrireducens* is psychrotolerant, performing well from 4-25 degrees C with reduced activity at 30 degrees C and no growth above 35 degrees C. This distinguishes it from mesophilic electrogens and makes it the organism of choice for cold-climate MES.
- **Sugar Substrate Availability**: The organism directly metabolizes hexoses and disaccharides without requiring fermentative partners. Glucose, fructose, sucrose, and lactose all support electrode respiration. This is a significant advantage over Geobacter species.
- **Electrode Potential**: As with other exoelectrogens, the anode potential determines the energy available per electron transferred. The relationship between potential and current production follows Nernst-Monod kinetics.
- **pH**: Optimal at near-neutral pH. The organism is less tolerant of acidic conditions than some fermentative organisms.
- **Oxygen**: Under aerobic conditions, *R. ferrireducens* preferentially uses O2 as a terminal electron acceptor. Anaerobic or very low O2 conditions are required to direct electrons to the electrode.
- **Iron Availability**: Cytochrome biosynthesis requires iron. Iron supplementation may enhance EET capacity.
- **Community Interactions**: In mixed-culture MES, *R. ferrireducens* coexists with fermenters and other electrogens. Its ability to use sugars directly may provide a competitive advantage over organisms requiring fermentation intermediates.
- **Biofilm Development**: The organism forms thinner biofilms than *Geobacter* species, which may limit maximum current density but reduce mass transfer limitations.

## Related Parameters

- **name**: Current Density

- **relationship**: Reflects the rate of electrode respiration by *R. ferrireducens*
- **name**: Coulombic Efficiency

- **relationship**: Characteristically high for this organism due to complete oxidation
- **name**: Substrate Removal Rate

- **relationship**: Sugar removal efficiency is a key performance metric
- **name**: Cell Doubling Time

- **relationship**: Temperature-dependent growth kinetics determine startup time
- **name**: Power Density

- **relationship**: Temperature-adjusted power output for cold-climate applications

## Compatible Systems

Microorganism Database

## References

- Chaudhuri, S. K., & Lovley, D. R. (2003). Electricity generation by direct oxidation of glucose in mediatorless microbial fuel cells. *Nature Biotechnology*, 21(10), 1229-1232.
- Risso, C., et al. (2009). Genome-scale comparison and constraint-based metabolic reconstruction of the facultative anaerobic Fe(III)-reducer Rhodoferax ferrireducens. *BMC Genomics*, 10, 447.
- Liu, H., et al. (2005). Production of electricity from acetate or butyrate using a single-chamber microbial fuel cell. *Environmental Science & Technology*, 39(2), 658-662.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Rhodoferax+Ferrireducens&body=**Parameter%3A**+Rhodoferax+Ferrireducens%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Frhodoferax-ferrireducens.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Rhodoferax+Ferrireducens&body=**Parameter%3A**+Rhodoferax+Ferrireducens%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Frhodoferax-ferrireducens.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Rhodoferax+Ferrireducens&body=**Parameter%3A**+Rhodoferax+Ferrireducens%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Frhodoferax-ferrireducens.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
