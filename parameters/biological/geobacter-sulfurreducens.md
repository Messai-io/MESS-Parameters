# Geobacter Sulfurreducens

Geobacter sulfurreducens represents the paradigmatic electroactive bacterium in
microbial electrochemical systems, serving as the model organism for direct
electron transfer mechanisms. This obligate anaerobic, Gram-negative
deltaproteobacterium exhibits extraordinary capabilities for extracellular
electron transfer, achieving current densities exceeding 10 A/m² in pure culture
biofilms. First isolated from hydrocarbon-contaminated sediments, G.
sulfurreducens has become the cornerstone species for understanding
bioelectrochemical processes, with its complete genome sequenced (3.81 Mbp, 3466
genes) and extensive genetic tools available for metabolic engineering.

### Taxonomic Classification

- **Domain**: Bacteria
- **Phylum**: Proteobacteria
- **Class**: Deltaproteobacteria
- **Order**: Desulfuromonadales
- **Family**: Geobacteraceae
- **Genus**: Geobacter
- **Species**: sulfurreducens
- **Strain**: DL-1 (type strain), KN400 (enhanced current production)

### Physiological Characteristics

- **Cell morphology**: Rod-shaped, 2-3 μm length, 0.5 μm width
- **Gram stain**: Negative
- **Motility**: Flagellated, chemotactic toward electrodes
- **Oxygen requirement**: Obligate anaerobe
- **Temperature range**: 15-40°C (optimal 30-35°C)
- **pH range**: 6.0-8.5 (optimal 6.8-7.2)
- **Salinity tolerance**: 0-1% NaCl
- **Generation time**: 6-8 hours (acetate, Fe(III))
- **Biofilm thickness**: 50-100 μm on electrodes

### Metabolic Properties

- **Carbon sources**: Acetate (primary), formate, lactate, pyruvate, benzoate,
  toluene
- **Electron acceptors**: Fe(III), Mn(IV), electrodes, U(VI), S°, fumarate
- **Energy metabolism**: Tricarboxylic acid cycle (complete)
- **Electron transfer**: Direct via c-type cytochromes and pili
- **ATP synthesis**: Chemiosmotic via F-type ATPase
- **Nitrogen source**: Ammonia, nitrate (non-denitrifying)
- **Vitamin requirements**: None (prototroph)

## Basic Information

| Property | Value |
|---|---|
| **Category** | Biological |
| **Subcategory** | Bacteria - Electroactive Species |
| **Type** | object |

## Measurement Methods

- **Culture Techniques**: **Growth Medium Preparation**: Freshwater medium with (per liter): NaHCO₃ 2.5 g, NH₄Cl 0.25 g, NaH₂PO₄·H₂O 0.60 g, KCl 0.10 g, vitamins (10 mL), minerals (10 mL). Sparge with N₂:CO₂ (80:20) for 20 minutes, adjust pH to 6.8, autoclave under N₂ atmosphere. Add filter-sterilized acetate (10-20 mM) and electron acceptor post-sterilization.  **Anaerobic Cultivation**: Hungate technique with butyl rubber stoppers and aluminum crimp seals. Incubate at 30°C without shaking for planktonic growth, or with electrode poised at +0.24 V vs. SHE for biofilm development. Monitor growth via Fe(II) production (ferrozine assay) or current generation.  **Cryopreservation**: Harvest mid-exponential phase cells, resuspend in fresh medium with 10% DMSO, freeze at -80°C. Revival requires gradual thawing and immediate transfer to fresh medium with fumarate (40 mM) as electron acceptor.
- **Electrochemical Characterization**: **Biofilm Electroactivity**: Three-electrode configuration with working electrode (graphite, gold, or ITO), Ag/AgCl reference, and platinum counter electrode. Chronoamperometry at +0.24 V vs. SHE monitors current evolution during biofilm growth, reaching steady-state in 72-120 hours.  **Cyclic Voltammetry**: Scan rates 1-10 mV/s reveal characteristic oxidation peaks at -0.14, -0.10, and +0.05 V vs. SHE corresponding to outer membrane cytochromes OmcZ, OmcB, and OmcS respectively. Peak currents scale with biofilm thickness and scan rate^0.5, indicating diffusion-limited electron transfer.  **Differential Pulse Voltammetry**: Enhanced resolution identifies individual cytochrome contributions. Pulse amplitude 25 mV, pulse width 50 ms, step potential 5 mV reveals 5-7 distinct redox couples in mature biofilms.
- **Molecular Biology Techniques**: **Gene Expression Analysis**: RNA extraction using TRIzol followed by DNase treatment and cDNA synthesis. qRT-PCR with primers targeting omcS, omcZ, pilA quantifies expression of electron transfer genes. Normalization to recA or proC housekeeping genes.  **Protein Profiling**: Heme staining after SDS-PAGE identifies c-type cytochromes. Mass spectrometry confirms identity of OmcS (79 kDa), OmcZ (50 kDa), OmcB (75 kDa). Western blotting with specific antibodies quantifies individual cytochrome abundance.  **Genetic Manipulation**: Electroporation with 2.5 kV, 25 μF, 400 Ω in 0.2 cm cuvettes. Selection on kanamycin (200 μg/mL) or gentamicin (20 μg/mL). Homologous recombination efficiency ~10⁻⁴ with 500 bp flanking regions.
- **Biofilm Imaging**: **Confocal Microscopy**: LIVE/DEAD BacLight staining distinguishes viable cells (green) from damaged membranes (red). FISH probes GEO1-GEO2 specific for Geobacteraceae. Z-stack imaging reveals stratified biofilm architecture with active cells concentrated near electrode surface.  **Scanning Electron Microscopy**: Critical point drying preserves pili networks. Imaging at 5-10 kV reveals cell orientation perpendicular to electrode surface and extensive pili connections between cells extending 10-20 μm.

## Performance Impact

### Electron Transfer Mechanisms

G. sulfurreducens employs multiple electron transfer strategies with direct
transfer dominating in biofilms. The conductive pili (type IV pili variant)
exhibit metallic-like conductivity (5-15 mS/cm) mediated by aromatic amino acid
π-π stacking. Multiheme c-type cytochromes create electron transfer chains
spanning the 1 μm periplasm-to-surface distance. OmcZ localizes at electrode
interface, OmcB spans outer membrane, and OmcS associates with pili networks.

Electron transfer rates reach 10⁶ electrons/cell/second at optimal potential
(+0.24 V vs. SHE). The redox potential gradient from acetate oxidation (-0.29 V)
to electrode (+0.24 V) provides 0.53 V driving force. Electron transfer
efficiency approaches 100% in thin biofilms (<20 μm) but decreases to 70-80% in
thick biofilms due to metabolite accumulation.

### Growth Kinetics

Specific growth rates (μ) range from 0.05-0.15 h⁻¹ depending on electron
acceptor availability. Monod kinetics describe acetate utilization with Ks =
0.1-0.5 mM and μmax = 0.12 h⁻¹. Biofilm growth follows logistic models with
carrying capacity determined by electron acceptor flux rather than substrate
limitation. Cell yields average 6.8 × 10¹² cells/mol acetate with electrodes,
compared to 2.1 × 10¹² cells/mol with Fe(III).

### Biofilm Development

Initial attachment occurs within 2-4 hours via flagellar motility and chemotaxis
toward electrodes. Exponential growth phase spans 24-72 hours, forming
monolayers transitioning to multilayer structures. Steady-state thickness of
50-100 μm achieved in 5-7 days, limited by metabolite diffusion and electron
transfer distance. Biofilm conductivity increases from 0.5 mS/cm (young) to 5
mS/cm (mature) as pili networks develop.

### Environmental Tolerance

Temperature coefficients (Q₁₀) of 2.0-2.5 between 20-35°C indicate strong
temperature dependence. pH tolerance narrower than mixed cultures, with 50%
activity reduction below pH 6.5 or above pH 7.5. Oxygen exposure causes
immediate cessation of activity but cells recover within hours upon
re-establishing anaerobic conditions. Salt stress above 0.5% NaCl reduces growth
rate by 30-50%.

## Cost Analysis

### Culture Maintenance Costs

Media components cost $0.50-1.00/L for defined medium. Anaerobic gas (N₂:CO₂)
adds $0.20-0.30/L. Labor for anaerobic cultivation requires skilled technicians
($50-75/hour). Stock culture maintenance averages $200-300/month. Scale-up to
100 L requires $500-1000 initial investment plus $100-200/batch operating costs.

### Performance Benefits

Pure culture systems achieve 2-3× higher coulombic efficiency than mixed
cultures. Predictable performance enables precise process control and
optimization. Absence of methanogens eliminates gas purification requirements in
MECs. Genetic engineering potential allows tailored improvements worth 5-10×
performance gains.

### Comparison with Mixed Cultures

Pure G. sulfurreducens offers reproducibility and consistency crucial for
research and high-value applications. Mixed cultures provide robustness and
lower operational complexity for wastewater treatment. Pure culture startup
requires 5-10 days versus 20-30 days for mixed culture enrichment. Maintenance
costs 3-5× higher for pure cultures but offset by superior performance.

### Scale-up Economics

Laboratory scale (1-10 L): $100-500/L capital, $10-20/L/month operating. Pilot
scale (100-1000 L): $50-200/L capital, $5-10/L/month operating. Industrial scale
(>10,000 L): $20-50/L capital, $1-5/L/month operating. Economy of scale reduces
per-unit costs by 80-90% from lab to industrial scale.

## Related Parameters

- {"name":"Current density","relationship":"r² = 0.92"}
- {"name":"Biofilm conductivity","relationship":"r² = 0.88"}
- {"name":"Cytochrome abundance","relationship":"r² = 0.85"}
- {"name":"Acetate consumption rate","relationship":"r² = 0.83"}
- {"name":"Electrode potential","relationship":"r² = 0.81"}
- {"name":"pH","relationship":"r² = 0.75"}
- {"name":"Temperature","relationship":"r² = 0.72"}
- {"name":"Buffer strength","relationship":"r² = 0.68"}
- {"name":"Flow rate","relationship":"r² = 0.65"}
- {"name":"Biofilm thickness","relationship":"r² = 0.62"}
- {"name":"Substrate type","relationship":"Determines applicability"}
- {"name":"Electron acceptor","relationship":"Defines growth mode"}
- {"name":"Microbial community","relationship":"Competition/synergy effects"}
- {"name":"Reactor configuration","relationship":"Mass transfer limitations"}
- {"name":"Operational mode","relationship":"Batch vs. continuous impacts"}

## Compatible Systems

Microorganism Database

## References

1. Lovley, D.R. (2017). "Electrically conductive pili: Biological function and
   potential applications in electronics." Current Opinion in Electrochemistry,
   4(1), 190-198.

2. Reguera, G. (2018). "Microbial nanowires and electroactive biofilms." FEMS
   Microbiology Ecology, 94(7), fiy086.

3. Nevin, K.P., et al. (2009). "Anode biofilm transcriptomics reveals outer
   surface components essential for high density current production in Geobacter
   sulfurreducens fuel cells." PLoS ONE, 4(5), e5628.

4. Malvankar, N.S., et al. (2011). "Tunable metallic-like conductivity in
   microbial nanowire networks." Nature Nanotechnology, 6(9), 573-579.

5. Liu, X., et al. (2020). "Syntrophic growth with direct interspecies electron
   transfer between pili-free Geobacter species." ISME Journal, 14(10),
   2477-2489.

---

_This comprehensive parameter documentation details Geobacter sulfurreducens
characteristics, applications, and implementation protocols for microbial
electrochemical systems. Regular updates incorporate latest research findings
and technological developments in electroactive bacteria engineering._

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Geobacter+Sulfurreducens&body=**Parameter%3A**+Geobacter+Sulfurreducens%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fgeobacter-sulfurreducens.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Geobacter+Sulfurreducens&body=**Parameter%3A**+Geobacter+Sulfurreducens%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fgeobacter-sulfurreducens.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Geobacter+Sulfurreducens&body=**Parameter%3A**+Geobacter+Sulfurreducens%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fgeobacter-sulfurreducens.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
