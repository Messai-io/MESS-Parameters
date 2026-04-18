# Ammonia Treatment

Ammonia treatment refers to the surface modification technique wherein electrode materials, membranes, or catalyst supports in microbial electrochemical systems (MES) are exposed to ammonia (NH3) gas or ammonia-containing solutions at elevated temperatures to introduce nitrogen-containing functional groups into the material surface. This process is a critical post-synthesis modification strategy that enhances electrode performance by incorporating pyridinic-N, pyrrolic-N, graphitic-N, and amino-N groups, which serve as active sites for the oxygen reduction reaction (ORR) and improve biofilm-electrode interactions.

In the context of MES, ammonia treatment is predominantly applied to carbon-based electrode materials such as carbon cloth, carbon felt, graphite, and activated carbon. The treatment typically involves heating the carbon material in a tubular furnace under NH3 atmosphere at temperatures between 600 and 1000 C for 0.5 to 3 hours. The ammonia gas reacts with surface carbon atoms and existing oxygen functional groups, replacing C-O bonds with C-N bonds and creating pyridinic (binding energy ~398.5 eV) and graphitic nitrogen (binding energy ~401.2 eV) species detectable by X-ray photoelectron spectroscopy (XPS). These nitrogen sites lower the ORR overpotential by 50-200 mV compared to untreated carbon, enabling platinum-free cathode operation.

Beyond electrocatalytic enhancement, ammonia treatment also modifies surface wettability, charge distribution, and roughness, all of which influence microbial attachment and extracellular electron transfer (EET) efficiency. Ammonia-treated anodes have demonstrated 20-80% improvements in current density and power output in MFC studies, attributed to enhanced electrostatic attraction between the negatively charged bacterial cell membrane and the positively charged nitrogen groups at near-neutral pH. The treatment parameters -- temperature, duration, NH3 flow rate, and pre-treatment condition -- must be carefully optimized to balance nitrogen incorporation with preservation of the carbon structural integrity and electrical conductivity.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Materials |
| **Subcategory** | Anode Modifications |
| **Type** | object |

## Typical Values

- **Valid Range**: Treatment temperature 400-1100 C; duration 0.25-6 hours; NH3 flow rate 50-500 sccm
- **Typical Range**: Treatment temperature 700-900 C; duration 1-2 hours; NH3 flow rate 100-200 sccm
- **Nitrogen Content Achieved**: 2-12 atomic percent (by XPS)
- **ORR Onset Potential Improvement**: +50 to +200 mV vs. untreated carbon
- **Power Density Improvement**: 20-80% increase over untreated electrodes
- **Contact Angle Change**: From 120-140 degrees (hydrophobic) to 30-70 degrees (hydrophilic)

## Measurement Methods

- **X-ray Photoelectron Spectroscopy (XPS)**: XPS is the primary technique for quantifying nitrogen incorporation and identifying nitrogen species after ammonia treatment. Using a monochromatic Al K-alpha X-ray source (1486.6 eV), high-resolution N 1s spectra are acquired and deconvoluted to identify pyridinic-N (~398.5 eV), pyrrolic-N (~400.1 eV), graphitic-N (~401.2 eV), and oxidized-N (~402-405 eV). Equipment includes PHI VersaProbe, Kratos Axis Ultra, or Thermo Scientific K-Alpha systems. Survey scans at 1 eV step size and high-resolution scans at 0.1 eV step size are standard.
- **Raman Spectroscopy**: Raman spectroscopy (e.g., Renishaw inVia, Horiba LabRAM) with 514 or 633 nm laser excitation characterizes the degree of graphitization and defect density through the D-band (~1350 cm^-1) and G-band (~1590 cm^-1) intensity ratio (ID/IG). Ammonia treatment typically increases the ID/IG ratio from 0.8-0.9 to 1.0-1.2, indicating increased defect density associated with nitrogen incorporation.
- **Contact Angle Goniometry**: Surface wettability changes are quantified using static contact angle measurements (e.g., Rame-Hart Model 290, Kruss DSA25). A 2-5 uL water droplet is placed on the electrode surface, and the contact angle is measured within 5 seconds. Measurements at 5-10 locations per sample provide statistical reliability. Ammonia treatment converts hydrophobic carbon surfaces (theta > 120 degrees) to hydrophilic (theta < 70 degrees).
- **Electrochemical Testing**: Linear sweep voltammetry (LSV) and rotating disk electrode (RDE) measurements quantify ORR catalytic activity. LSV in O2-saturated 50 mM phosphate buffer (pH 7) at 5 mV/s scan rate reveals the ORR onset potential and limiting current density. RDE measurements at 400-2500 rpm enable Koutecky-Levich analysis to determine electron transfer number (n = 2 for H2O2 pathway; n = 4 for H2O pathway).

## Affecting Factors

### Primary

- **Treatment Temperature**: The most critical parameter controlling nitrogen speciation and content. Below 600 C, nitrogen incorporation is minimal (<2 at%). At 700-800 C, pyrrolic-N and pyridinic-N dominate, providing moderate ORR activity. At 900-1000 C, graphitic-N becomes the primary species, offering superior ORR catalysis but at the expense of total nitrogen content due to thermal desorption. Optimal ORR performance in MES is typically achieved at 800-900 C, yielding 4-8 at% nitrogen with a balanced pyridinic/graphitic ratio.
- **Treatment Duration**: Exposure time determines the depth and uniformity of nitrogen incorporation. Short treatments (0.5 hours) produce surface-limited modification (top 2-5 nm), while extended treatments (3-6 hours) allow nitrogen diffusion into deeper carbon layers. However, excessive treatment causes carbon etching and mass loss (10-30%), potentially compromising structural integrity. Optimal duration for most carbon materials is 1-2 hours.
- **Precursor Carbon Structure**: The initial carbon structure profoundly influences ammonia treatment outcomes. Highly graphitized carbons (graphite, carbon nanotubes) resist nitrogen incorporation due to stable sp2 networks, achieving only 1-4 at% N. Amorphous or defect-rich carbons (activated carbon, carbon black) more readily incorporate nitrogen (5-12 at% N) but may suffer greater structural degradation.
- **NH3 Flow Rate and Partial Pressure**: Higher NH3 flow rates (200-500 sccm) increase the reactive nitrogen species concentration at the carbon surface, enhancing incorporation rates. However, excessively high flow rates promote rapid etching and non-uniform treatment. A balanced flow rate of 100-200 sccm in a 2-inch diameter tube furnace provides uniform treatment with controlled nitrogen loading.
- **Pre-treatment Condition**: Prior acid treatment (HNO3, H2SO4) introduces oxygen functional groups that serve as preferential sites for C-N bond formation during ammonia treatment. Pre-oxidized samples typically achieve 30-50% higher nitrogen content compared to pristine carbon treated under identical conditions.
- **Cooling Rate**: Rapid cooling under NH3 atmosphere preserves metastable nitrogen configurations, while slow cooling (1-2 C/min) allows equilibration to thermodynamically stable graphitic-N species.
- **Carrier Gas**: Use of NH3 diluted in N2 or Ar (10-50% NH3) provides gentler treatment with reduced etching compared to pure NH3, suitable for delicate electrode structures like carbon cloth.

## Related Parameters

- **name**: Anode Material

- **relationship**: Ammonia treatment is a primary modification technique for carbon-based anode materials, directly affecting biofilm formation and EET efficiency.
- **name**: Cathode Material

- **relationship**: Ammonia-treated carbons serve as non-precious metal ORR catalysts in MFC cathodes, determining cathode overpotential and maximum power density.
- **name**: Overpotential

- **relationship**: Nitrogen doping via ammonia treatment reduces both anodic and cathodic overpotentials by 50-200 mV through facilitated charge transfer.
- **name**: Charge Transfer Resistance

- **relationship**: Ammonia-treated electrodes typically show 30-60% lower charge transfer resistance in EIS measurements compared to untreated counterparts.
- **name**: Water Contact Angle

- **relationship**: Ammonia treatment dramatically reduces contact angle, improving electrolyte wetting and bacterial adhesion.

## Compatible Systems

Anode Materials

## References

- Cheng, S. & Wu, J. (2013). Air-cathode preparation with activated carbon as catalyst, PTFE as binder and nickel foam as current collector for microbial fuel cells. Bioelectrochemistry, 92, 22-26.
- Feng, L. et al. (2011). Nitrogen-doped carbon nanotubes as efficient catalyst for oxygen reduction reaction in microbial fuel cells. Journal of Power Sources, 196(3), 1474-1479.
- Liu, J. et al. (2014). Ammonia treatment of carbon cloth anodes to enhance power generation of microbial fuel cells. Electrochemistry Communications, 44, 106-109.
- Saito, T. et al. (2011). Effect of nitrogen addition on the performance of microbial fuel cell anodes. Bioresource Technology, 102(1), 395-398.
- Zhu, X. et al. (2016). Nitrogen-doped porous carbon as an efficient cathode catalyst for microbial fuel cells. Electrochimica Acta, 214, 66-73.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Ammonia+Treatment&body=**Parameter%3A**+Ammonia+Treatment%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fammonia-treatment.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Ammonia+Treatment&body=**Parameter%3A**+Ammonia+Treatment%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fammonia-treatment.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Ammonia+Treatment&body=**Parameter%3A**+Ammonia+Treatment%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fammonia-treatment.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
