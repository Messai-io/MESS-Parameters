# Anion Exchange Membrane

An anion exchange membrane (AEM) is a selectively permeable polymeric barrier that preferentially transports anions (such as OH^-, Cl^-, HCO3^-, SO4^2-) while rejecting cations from passing through its matrix. In microbial electrochemical systems (MES), AEMs serve as ion-conducting separators between the anode and cathode compartments, enabling charge balance by facilitating anion migration from the cathode to the anode chamber. This is fundamentally distinct from cation exchange membranes (CEMs, such as Nafion) that transport protons and other cations in the opposite direction.

AEMs contain fixed positive charges -- typically quaternary ammonium groups (-NR3^+), phosphonium groups, or sulfonium groups -- covalently bonded to the polymer backbone. These fixed charges attract mobile anions (counterions) while electrostatically repelling cations (co-ions) through the Donnan exclusion effect. Common AEM materials include polysulfone, polyethersulfone, poly(2,6-dimethyl-1,4-phenylene oxide) (PPO), and poly(vinyl alcohol) functionalized with quaternary ammonium groups. Commercial AEMs used in MES research include Fumasep FAB-PK-130 (Fumatech), Tokuyama A201, AMI-7001 (Membranes International), and Selemion AMV (AGC Engineering).

In MES applications, AEMs offer several advantages over CEMs. Since the dominant charge carriers are anions rather than protons, AEMs avoid the pH splitting problem that plagues CEM-based systems, where protons accumulate in the anode chamber causing acidification while the cathode chamber becomes alkaline. AEMs maintain more stable pH gradients by transporting hydroxide and buffer anions. However, AEMs generally exhibit lower ionic conductivity (1-10 mS/cm) compared to Nafion (50-100 mS/cm) and are susceptible to chemical degradation through Hofmann elimination reactions at the quaternary ammonium groups, particularly above 60 C or pH above 10.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Materials |
| **Subcategory** | Ion Exchange Membranes |
| **Type** | object |

## Typical Values

- **Valid Range**: Ion exchange capacity (IEC) 0.5-3.5 meq/g; ionic conductivity 0.5-50 mS/cm; thickness 20-500 um
- **Typical Range**: IEC 1.0-2.5 meq/g; ionic conductivity 2-15 mS/cm; thickness 50-200 um
- **Water Uptake**: 15-80% (by mass)
- **Transport Number (anion)**: 0.85-0.99
- **Area Resistance**: 0.5-10 ohm cm^2
- **Permselectivity**: 85-98%
- **Cost**: $50-$500/m^2

## Measurement Methods

- **Ion Exchange Capacity (IEC)**: IEC is determined by classical back-titration. The AEM is converted to Cl^- form by soaking in 1 M NaCl for 24 hours, then thoroughly rinsed with deionized water and soaked in 0.5 M NaNO3 for 24 hours to exchange Cl^- ions. The released Cl^- is titrated against standardized AgNO3 using K2CrO4 indicator (Mohr method) or potentiometric endpoint detection. IEC (meq/g) equals moles of Cl^- released divided by dry membrane mass.
- **Ionic Conductivity**: Through-plane and in-plane conductivity are measured using AC impedance spectroscopy in a four-probe or two-probe conductivity cell. The membrane is equilibrated in the target electrolyte at controlled temperature. Impedance is measured from 1 MHz to 1 Hz using a Solartron 1260 or Biologic VSP, and conductivity is calculated from the high-frequency intercept of the Nyquist plot: sigma = L / (R x A), where L is thickness, R is resistance, and A is area.
- **Membrane Permselectivity**: Measured using a two-compartment cell with different electrolyte concentrations (e.g., 0.1 M and 0.5 M KCl). The open-circuit membrane potential is measured with Ag/AgCl reference electrodes and compared to the theoretical Nernst potential. Permselectivity P = (E_measured / E_theoretical) x 100%.
- **Chemical Stability Testing**: Accelerated degradation testing involves immersing AEM samples in 1-2 M KOH at 60-80 C for defined periods. IEC, conductivity, and mechanical properties are periodically measured. FTIR and NMR spectroscopy track chemical changes in the functional groups.

## Affecting Factors

### Primary

- **Fixed Charge Density**: Higher quaternary ammonium group density increases IEC and ionic conductivity but also promotes excessive water uptake (swelling), which can compromise mechanical integrity. Optimal IEC for MES is 1.5-2.5 meq/g, balancing conductivity with stability.
- **Polymer Backbone Chemistry**: Polysulfone and PPO-based AEMs offer excellent chemical stability (>1000 hours in 1 M KOH at 60 C), while polyethylene-based AEMs provide superior mechanical flexibility but lower thermal stability. Cross-linking (5-20% crosslinker) improves dimensional stability and reduces swelling by 30-50%.
- **Membrane Thickness**: Thinner membranes (30-50 um) minimize ohmic resistance but are more fragile. Thicker membranes (150-300 um) provide better durability but increase area resistance by 2-5x. For MES, 80-150 um is optimal.
- **Operating pH**: AEMs function optimally at pH 7-10. Strongly alkaline conditions (pH > 12) accelerate degradation through Hofmann beta-elimination (5-15% IEC loss per 1000 hours at pH 14, 60 C).
- **Biofouling**: Microbial growth on AEM surfaces in MES environments increases membrane resistance by 20-100% over weeks. Periodic chemical cleaning or anti-fouling coatings can mitigate this.

## Related Parameters

- **name**: Membrane Ion Selectivity

- **relationship**: AEM selectivity determines the ratio of target anion transport to co-ion leakage.
- **name**: Membrane Proton Conductivity

- **relationship**: Unlike PEMs, AEMs have low proton conductivity (0.1-2 mS/cm), advantageous for preventing anode acidification.
- **name**: Internal Resistance

- **relationship**: AEM area resistance contributes 10-40% of total internal resistance in two-chamber MES.
- **name**: pH Level

- **relationship**: AEM performance is intimately linked to chamber pH management.

## Compatible Systems

Membrane Separator Materials

## References

- Harnisch, F. et al. (2009). The suitability of monopolar and bipolar ion exchange membranes as separators for biological fuel cells. Environmental Science & Technology, 43(5), 1740-1745.
- Varcoe, J. R. et al. (2014). Anion-exchange membranes in electrochemical energy systems. Energy & Environmental Science, 7(10), 3135-3191.
- Kim, J. R. et al. (2007). Power generation using different cation, anion, and ultrafiltration membranes in microbial fuel cells. Environmental Science & Technology, 41(3), 1004-1009.
- Rozendal, R. A. et al. (2006). Effect of the type of ion exchange membrane on performance. Water Science and Technology, 57(11), 1757-1762.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Anion+Exchange+Membrane&body=**Parameter%3A**+Anion+Exchange+Membrane%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fanion-exchange-membrane.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Anion+Exchange+Membrane&body=**Parameter%3A**+Anion+Exchange+Membrane%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fanion-exchange-membrane.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Anion+Exchange+Membrane&body=**Parameter%3A**+Anion+Exchange+Membrane%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fanion-exchange-membrane.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
