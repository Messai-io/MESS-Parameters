# Ochrobactrum Anthropi

*Ochrobactrum anthropi* is a Gram-negative, aerobic to facultatively anaerobic, rod-shaped alphaproteobacterium that has gained attention in microbial electrochemical systems for its exceptional heavy metal tolerance, biofilm-forming capability, and capacity for extracellular electron transfer. Originally classified within the Brucellaceae family, this organism is ubiquitous in soil, water, and clinical environments, and its remarkable ability to thrive in metal-contaminated environments makes it uniquely suited for MES applications targeting heavy metal removal and recovery.

In MES, *O. anthropi* serves multiple roles. It participates in bioanode communities where its oxidative metabolism generates electrons that are transferred to the electrode via secreted redox mediators and membrane-associated electron carriers. More significantly, the organism has been deployed in MES designed for bioelectrochemical metal remediation, where it catalyzes the reduction or biosorption of toxic heavy metals (Cr(VI), Cu(II), Cd(II), Pb(II)) while simultaneously generating electrical current. The organism's extensive repertoire of metal resistance genes, efflux pumps, and metal-binding proteins provides tolerance to concentrations that would be lethal to most MES-relevant organisms.

*O. anthropi* also produces robust biofilms on electrode surfaces, creating a dense extracellular matrix that traps metal ions and facilitates their electrochemical reduction. The organism's metabolic versatility allows it to utilize a wide range of organic substrates as electron donors, making it compatible with various wastewater compositions. Research has demonstrated that MFCs inoculated with *O. anthropi* can simultaneously remove heavy metals (>90% removal of Cr(VI) at concentrations up to 200 mg/L) while generating power densities of 0.1-0.5 W/m2.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Biological |
| **Subcategory** | Bacteria - Electroactive Species |
| **Type** | object |

## Typical Values

- **Valid Range (current production)**: 0.01 to 1.5 A/m2
- **Typical Range (current production)**: 0.1 to 0.8 A/m2
- **Cr(VI) Removal Efficiency**: 60-99% at 10-200 mg/L initial concentration
- **Cr(VI) Tolerance**: Up to 500 mg/L
- **Cu(II) Removal**: 50-95% at 10-100 mg/L
- **Optimal Temperature**: 25-37 degrees C
- **Optimal pH**: 6.5-8.0
- **Doubling Time**: 1.5-4 hours
- **Maximum Power Density**: 0.1-0.5 W/m2
- **Coulombic Efficiency**: 5-25%

## Measurement Methods

- **Heavy Metal Analysis**: Inductively coupled plasma mass spectrometry (ICP-MS) or atomic absorption spectroscopy (AAS) quantifies total metal concentrations in influent and effluent. X-ray photoelectron spectroscopy (XPS) identifies the oxidation states of metals associated with biofilm and electrode surfaces. This reveals whether metals are reduced (e.g., Cr(VI) to Cr(III)) or simply adsorbed.
- **Electrochemical Performance in Metal-Loaded MFCs**: MFCs inoculated with *O. anthropi* are operated with metal-containing catholytes or anolytes. Current production is monitored by chronoamperometry while metal removal is tracked simultaneously. The correlation between current generation and metal reduction reveals whether the processes are electrochemically coupled.
- **Biofilm Metal Binding Characterization**: Energy-dispersive X-ray spectroscopy (EDS) coupled with SEM identifies metal accumulation within biofilms. Fourier-transform infrared spectroscopy (FTIR) identifies functional groups (carboxyl, phosphoryl, amino) involved in metal binding. Sequential extraction procedures distinguish between surface-adsorbed, intracellularly accumulated, and precipitated metal fractions.
- **Molecular Characterization of Metal Resistance**: PCR amplification and sequencing of chrA (chromate transporter), copA (copper resistance), czcA (cobalt-zinc-cadmium efflux), and other metal resistance genes confirms the genetic basis for metal tolerance. Gene expression analysis under metal stress reveals the active resistance mechanisms.
- **Biofilm Quantification**: Crystal violet staining measures total biofilm biomass. Congo red binding assays detect amyloid-like fibers in the extracellular matrix. CLSM with LIVE/DEAD staining assesses biofilm viability under metal stress conditions on electrode surfaces.

## Affecting Factors

### Primary

- **Heavy Metal Concentration**: Metal toxicity follows a dose-response curve. Low concentrations may stimulate current production through enhanced EET. Moderate concentrations (10-200 mg/L depending on the metal) support simultaneous metal removal and electricity generation. High concentrations (>500 mg/L for Cr(VI)) inhibit metabolism.
- **Carbon Source**: *O. anthropi* utilizes acetate, glucose, lactate, and complex organics. The carbon source must provide sufficient electron donors for both cell maintenance and metal reduction. Carbon limitation reduces both current production and metal removal efficiency.
- **pH**: Metal speciation and bioavailability are strongly pH-dependent. Cr(VI) as chromate (CrO4 2-) is most mobile and toxic at pH 6-8. Optimal organism growth occurs at pH 6.5-8.0. The intersection of these ranges determines the optimal operating pH.
- **Temperature**: Standard mesophilic range applies (25-37 degrees C). Metal resistance gene expression may be temperature-dependent.
- **Electrode Material**: Carbon-based electrodes with high surface area (carbon felt, graphite granules) enhance biofilm development and metal adsorption capacity.
- **Multiple Metal Interactions**: Co-presence of multiple metals can produce synergistic or antagonistic toxicity effects compared to single-metal systems.
- **Oxygen Availability**: *O. anthropi* is more tolerant of micro-aerobic conditions than strict anaerobes, which may be advantageous for MFC cathode applications.
- **Salinity**: Moderate salt tolerance, but high ionic strength affects metal speciation and biofilm structure.

## Related Parameters

- **name**: Metal Removal Efficiency

- **relationship**: Primary performance metric for metal remediation MES
- **name**: Current Density

- **relationship**: Reflects overall bioelectrocatalytic activity
- **name**: Substrate Removal Rate

- **relationship**: Coupled with electron generation for metal reduction
- **name**: Microbial Diversity Index

- **relationship**: *O. anthropi* dominance in metal-contaminated MES communities
- **name**: COD Removal

- **relationship**: Organic substrate oxidation accompanies metal reduction

## Compatible Systems

Microorganism Database

## References

- Li, M., et al. (2018). Simultaneous Cr(VI) reduction and bioelectricity generation in MFC with *Ochrobactrum anthropi*. *Chemical Engineering Journal*, 334, 1621-1629.
- Wang, G., et al. (2012). Heavy metal removal by Ochrobactrum. *Journal of Environmental Management*, 96(1), 7-12.
- Sharma, Y., & Li, B. (2010). Optimizing energy harvest in wastewater treatment by combining anaerobic hydrogen producing biofermentor and microbial fuel cell. *International Journal of Hydrogen Energy*, 35(8), 3789-3797.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Ochrobactrum+Anthropi&body=**Parameter%3A**+Ochrobactrum+Anthropi%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fochrobactrum-anthropi.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Ochrobactrum+Anthropi&body=**Parameter%3A**+Ochrobactrum+Anthropi%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fochrobactrum-anthropi.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Ochrobactrum+Anthropi&body=**Parameter%3A**+Ochrobactrum+Anthropi%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fochrobactrum-anthropi.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
