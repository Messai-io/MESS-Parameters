# Carbon Cloth

Carbon cloth is a woven fabric electrode material composed of interlaced carbon fiber yarns, widely used as both anode and cathode substrate in microbial electrochemical systems (MES). Each yarn consists of thousands of individual carbon filaments with diameters of 5-10 um, creating a textile with hierarchical porosity -- macro-scale pores between yarns (100-500 um), meso-scale pores between fibers within yarns (10-50 um), and micro-scale surface roughness on individual fibers. This multi-scale architecture provides an excellent balance of mechanical flexibility, electrical conductivity, and surface area for biofilm colonization.

Carbon cloth for MES applications is typically produced by carbonization and graphitization of polyacrylonitrile (PAN) or rayon precursor textiles at temperatures of 1000-3000 C in inert atmosphere. The resulting material has a carbon content exceeding 95%, with graphitic crystalline structure that provides electrical conductivity of 2000-5000 S/m along the fiber axis. Common commercial products used in MES research include ELAT (NuVant/BASF), Toray carbon cloth (TGP-H series), AvCarb (Ballard Material Products), and CeTech W0S1002 and W0S1009 grades. The latter two designations indicate different wet-proofing treatments with polytetrafluoroethylene (PTFE).

In MES, carbon cloth serves multiple roles. As an anode material, untreated (hydrophilic) carbon cloth supports rapid biofilm establishment, with typical start-up times of 3-7 days for mixed culture inocula. As a cathode substrate, carbon cloth is used as the structural base for air-cathode assemblies, where one side is coated with a catalyst layer (Pt/C or activated carbon) and the other side receives a gas diffusion layer (PTFE or PDMS) to prevent water leakage while allowing oxygen transport. This dual-function capability has made carbon cloth the most commonly reported electrode material in MFC literature, appearing in approximately 25% of all publications.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Materials |
| **Subcategory** | Carbon-Based Anodes |
| **Type** | object |

## Typical Values

- **Valid Range**: Thickness 100-500 um; areal weight 100-400 g/m^2; conductivity 1000-10,000 S/m
- **Typical Range**: Thickness 200-400 um; areal weight 120-250 g/m^2; conductivity 2000-5000 S/m
- **Porosity**: 75-85%
- **BET Surface Area**: 0.1-10 m^2/g (low compared to activated carbon due to smooth fibers)
- **Fiber Diameter**: 5-10 um
- **Tensile Strength**: 200-500 MPa
- **Cost**: $100-$400/m^2 (laboratory grade)

## Measurement Methods

- **Four-Point Probe Conductivity**: In-plane electrical conductivity is measured using a four-point probe technique with custom fixtures accommodating the flexible cloth geometry. Keithley 2400 SourceMeter or equivalent applies a known current (1-100 mA) while measuring voltage across the inner probes. Through-plane conductivity requires a compression fixture with known contact area and pressure (0.1-1 MPa).
- **SEM/CLSM Imaging**: SEM at 5-15 kV provides fiber diameter measurement, weave pattern characterization, and biofilm visualization. CLSM with LIVE/DEAD staining quantifies biofilm coverage (60-95% on mature anodes) and viability (>80% viable cells on well-performing electrodes).
- **Electrochemical Testing**: Cyclic voltammetry in 50 mM phosphate buffer (pH 7.0) at scan rates of 5-100 mV/s characterizes the electrochemical window and capacitive behavior. The double-layer capacitance of plain carbon cloth is typically 2-5 mF/cm^2, increasing to 10-50 mF/cm^2 after surface treatment or biofilm formation.
- **Contact Angle Measurement**: Static water contact angle measured using a goniometer (Rame-Hart, Kruss) characterizes hydrophobicity. Untreated carbon cloth: 60-80 degrees; PTFE-treated (30 wt%): 130-150 degrees; acid-treated: 10-40 degrees.

## Affecting Factors

### Primary

- **Wet-Proofing Treatment**: PTFE-treated carbon cloth (5-30% PTFE loading) is hydrophobic and used for cathode gas diffusion layers. Untreated cloth is hydrophilic and preferred for anodes. The PTFE content directly controls the water contact angle and gas permeability.
- **Surface Treatment**: Acid treatment (concentrated HNO3 or H2SO4, 60-80 C, 2-6 hours) introduces carboxyl and hydroxyl groups, reducing contact angle to 10-40 degrees and accelerating biofilm start-up by 30-50%. Ammonia treatment at 700 C introduces nitrogen groups for enhanced ORR catalysis. Heat treatment in air at 450 C for 30 minutes removes surface contaminants and improves wettability.
- **Weave Pattern**: Plain weave provides uniform porosity and good in-plane conductivity. Twill weave offers greater flexibility but slightly lower through-plane conductivity. Satin weave provides the smoothest surface but poorest porosity for substrate transport.
- **Compression**: Carbon cloth compressibility affects porosity and contact resistance. At 0.5 MPa compression, thickness decreases 20-30% and through-plane resistance decreases 40-60%. Over-compression (>2 MPa) permanently damages fibers.
- **Catalyst Loading**: For cathode applications, catalyst (Pt/C at 0.1-0.5 mg Pt/cm^2, or activated carbon at 5-50 mg/cm^2) is applied to one face using spray coating, brushing, or hot pressing. The catalyst-binder ratio (10-40 wt% Nafion or PTFE binder) affects both catalytic activity and water management.

## Related Parameters

- **name**: Anode Material

- **relationship**: Carbon cloth is one of the most widely used anode materials in MES.
- **name**: Cathode Material

- **relationship**: Carbon cloth with catalyst coating is the standard air-cathode configuration.
- **name**: Electrode Porosity

- **relationship**: Carbon cloth porosity (75-85%) enables substrate transport and biofilm penetration.
- **name**: Water Contact Angle

- **relationship**: Wet-proofing treatment determines hydrophobicity, critical for gas diffusion.
- **name**: Internal Resistance

- **relationship**: Carbon cloth contributes 0.5-5 ohm cm^2 to total cell resistance.

## Compatible Systems

Anode Materials

## References

- Liu, H. & Logan, B. E. (2004). Electricity generation using an air-cathode single chamber microbial fuel cell. Environmental Science & Technology, 38(14), 4040-4046.
- Cheng, S., Liu, H., & Logan, B. E. (2006). Power densities using different cathode catalysts and polymer binders. Environmental Science & Technology, 40(1), 364-369.
- Zhang, F. et al. (2009). Improved performance of single-chamber microbial fuel cells. Biosensors and Bioelectronics, 25(7), 1825-1828.
- Santoro, C. et al. (2017). Microbial fuel cells: From fundamentals to applications. Journal of Power Sources, 356, 225-244.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Carbon+Cloth&body=**Parameter%3A**+Carbon+Cloth%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fcarbon-cloth.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Carbon+Cloth&body=**Parameter%3A**+Carbon+Cloth%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fcarbon-cloth.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Carbon+Cloth&body=**Parameter%3A**+Carbon+Cloth%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fcarbon-cloth.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
