# Stainless Steel

Stainless steel (SS) is a corrosion-resistant iron-chromium alloy used in microbial electrochemical systems as an electrode material, current collector, and reactor construction material. The two grades most commonly employed in MES are type 304 (18% Cr, 8% Ni, also designated 18/8) and type 316 (16% Cr, 10% Ni, 2% Mo), with 316 offering superior corrosion resistance due to the molybdenum addition. Stainless steel is available in multiple physical forms relevant to MES: flat plates, woven mesh, expanded metal, perforated sheet, felt, wool, and brush configurations.

In MES applications, stainless steel serves several roles. As an anode current collector, SS mesh or plate is placed behind or within carbon-based electrodes to reduce ohmic resistance. As a direct anode material, SS mesh has shown moderate capacity for biofilm attachment and direct extracellular electron transfer, though generally inferior to carbon-based materials. As a cathode, stainless steel provides catalytic activity for the hydrogen evolution reaction (HER) in MECs, particularly after surface activation treatments. As a reactor body material, 316 SS offers the chemical resistance and mechanical strength needed for pressurized MEC systems.

The passive chromium oxide (Cr2O3) layer on stainless steel surfaces (2-5 nm thick) provides corrosion resistance but also creates a barrier to electron transfer. Surface modification strategies including acid etching, flame oxidation, electrochemical activation, and conductive coatings are used to overcome this limitation.

### Common Grades for MES

- **304 (UNS S30400)**: 18-20% Cr, 8-10.5% Ni; general purpose; adequate for most MFC applications at neutral pH
- **304L**: Low-carbon variant (< 0.03% C); better weldability and intergranular corrosion resistance
- **316 (UNS S31600)**: 16-18% Cr, 10-14% Ni, 2-3% Mo; superior pitting and crevice corrosion resistance; preferred for chloride-containing wastewater
- **316L**: Low-carbon 316; standard for biomedical and bioelectrochemical applications

## Basic Information

| Property | Value |
|---|---|
| **Category** | Materials |
| **Subcategory** | Metal-Based Cathodes |
| **Type** | object |
| **Papers Reporting** | 2 |

## Typical Values

- **text**: ### Physical Properties

| Property | 304 SS | 316 SS | Units |
|---|---|---|---|
| Density | 8.0 | 8.0 | g/cm^3 |
| Electrical resistivity | 72 | 74 | microhm cm |
| Electrical conductivity | 1.39 x 10^4 | 1.35 x 10^4 | S/cm |
| Thermal conductivity | 16.2 | 16.3 | W/(m K) |
| Tensile strength | 505 - 750 | 515 - 690 | MPa |
| Yield strength | 215 | 205 | MPa |
| Melting range | 1400 - 1450 | 1375 - 1400 | degrees C |
| Cost (sheet) | 3 - 8 | 5 - 12 | USD/kg |

### Mesh Configurations for MES

| Mesh Type | Wire Diameter (mm) | Opening Size (mm) | Open Area (%) | Weight (g/m^2) |
|---|---|---|---|---|
| 50 mesh | 0.2 | 0.31 | 37% | 500 |
| 100 mesh | 0.1 | 0.15 | 36% | 250 |
| 200 mesh | 0.05 | 0.076 | 36% | 125 |
| Expanded metal | 0.5 - 1.0 | 2 - 10 | 40 - 70% | 500 - 2000 |
| Woven cloth | 0.025 | 0.025 | 25% | 75 |

### Electrochemical Performance in MES

| Application | Grade | Performance | Comparison |
|---|---|---|---|
| MFC anode (direct) | 304 mesh | 100 - 500 mW/m^2 | 30-50% of carbon cloth |
| MFC anode (flame-treated) | 304 mesh | 300 - 1,200 mW/m^2 | Competitive with carbon cloth |
| MFC current collector | 316 mesh | Reduces R_ohm by 50-80% | Behind carbon felt anode |
| MEC cathode (untreated) | 304 mesh | eta_HER = 600 - 900 mV | Poor; requires activation |
| MEC cathode (acid-treated) | 316 mesh | eta_HER = 400 - 600 mV | Improved by surface roughening |
| MEC cathode (NiMo-coated) | 316 mesh | eta_HER = 150 - 300 mV | Approaching Pt performance |

### Corrosion Resistance

| Environment | 304 SS | 316 SS | Notes |
|---|---|---|---|
| Neutral pH (6-8) buffer | Excellent | Excellent | Standard MFC/MEC operation |
| Wastewater (chloride < 200 ppm) | Good | Excellent | 316 preferred for chloride |
| Wastewater (chloride > 500 ppm) | Poor - pitting risk | Good | 316L recommended |
| Acidic (pH < 3) | Poor | Moderate | Both corrode; 316 lasts longer |
| Alkaline (pH > 12) | Good | Good | Passive layer stable |
| Anodic polarization (> +0.5 V) | Moderate | Good | Transpassive dissolution risk |
| Cathodic polarization (< -0.8 V) | Good | Good | Hydrogen embrittlement possible long-term |

## Measurement Methods

- **Electrode Preparation**: 1. **Surface Cleaning**:    - Sonicate in acetone for 15 min to remove organic contaminants    - Rinse in ethanol, then DI water    - Optional: Immerse in 1 M HCl for 10-30 min to remove native oxide and activate surface    - Dry under nitrogen; use immediately or store in desiccator  2. **Flame Oxidation Treatment**:    - Hold SS mesh in propane or butane torch flame for 30-60 seconds per side    - Creates a nanostructured iron oxide layer (Fe2O3/Fe3O4) on the surface    - Dramatically improves biofilm adhesion and anode performance (2-5x current increase)    - Simple, low-cost, and highly reproducible  3. **Electrochemical Activation**:    - Cyclic voltammetry in 0.5 M H2SO4: -0.6 to +0.6 V vs. Ag/AgCl, 50 cycles at 50 mV/s    - Creates micro/nanoscale roughness and exposes fresh metallic surface    - Increases electrochemically active surface area by 3-10x  4. **Coating Deposition**:    - Electrodeposition of NiMo, NiFe, or NiW alloys for HER catalysis    - Carbon coating: Spray or dip coat with carbon ink, graphene, or CNT suspension    - Conductive polymer coating: Electropolymerize PANI or PPy directly onto SS surface
- **Characterization**: - **Potentiodynamic Polarization**: Anodic and cathodic sweeps in MES electrolyte to determine corrosion potential (E_corr) and corrosion current (i_corr) - **EIS**: Quantify charge transfer resistance and assess passive layer properties - **SEM/EDS**: Surface morphology and elemental composition before/after treatment - **XPS**: Surface oxide composition and thickness (Cr2O3, Fe2O3, NiO) - **Contact Angle**: Wettability before and after surface treatment - **Confocal Microscopy**: Biofilm coverage and viability on SS surfaces
- **Performance Testing**: 1. **MFC Anode Testing**: Compare SS (treated and untreated) against carbon cloth/felt benchmark in identical reactor conditions over 2-4 weeks of biofilm development 2. **Current Collector Testing**: Place SS mesh behind carbon anode; measure R_ohm reduction by EIS 3. **MEC Cathode Testing**: LSV for HER activity; chronopotentiometry for stability; H2 collection for Faradaic efficiency 4. **Corrosion Testing**: Immerse in operating electrolyte for 30-90 days; measure weight loss, Ni/Cr/Fe leaching by ICP-MS

## Affecting Factors

- **primary**: [object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]

## Related Parameters

- {"name":"Carbon Cloth/Felt","relationship":"Standard anode material; higher biocompatibility and lower cost per area, but lower conductivity and mechanical strength"}
- {"name":"Nickel Foam","relationship":"Superior HER catalyst for MEC cathodes; higher cost; lower corrosion resistance at neutral pH"}
- {"name":"Titanium","relationship":"Best corrosion resistance of any structural metal; used for MES current collectors in aggressive environments; 5-10x more expensive than SS"}
- {"name":"Graphite Plate","relationship":"Traditional electrochemical electrode; good conductivity but brittle and heavy"}
- {"name":"Corrosion Potential (E_corr)","relationship":"-0.2 to 0.0 V vs. Ag/AgCl in neutral buffer; more positive than carbon"}
- {"name":"Corrosion Current (i_corr)","relationship":"10^-7 to 10^-6 A/cm^2 in neutral pH; indicates long-term dissolution rate"}
- {"name":"Charge Transfer Resistance","relationship":"50 - 500 ohm cm^2 (untreated anode); 10 - 50 ohm cm^2 (flame-treated)"}
- {"name":"HER Overpotential","relationship":"500 - 900 mV (bare); 150 - 400 mV (surface-modified or catalyst-coated)"}
- {"name":"Internal Resistance","relationship":"SS current collector can reduce total R_int by 30-60% when paired with carbon anodes"}
- {"name":"Reactor Construction","relationship":"316 SS is the standard material for pressurized MEC vessels (up to 10 bar)"}
- {"name":"Scalability","relationship":"SS mesh and expanded metal are available in large sheets, facilitating scale-up"}
- {"name":"Durability","relationship":"Expected electrode lifetime of 5-10+ years in properly managed MES"}

## Compatible Systems

Cathode Materials

## References

### SS as MES Electrode

1. **Dumas, C., et al. (2007)**. "Marine microbial fuel cell: Use of stainless steel electrodes as anode and cathode materials". *Electrochimica Acta*, 53(2), 468-473.
   - Early study of SS as both anode and cathode in MFC

2. **Erable, B., et al. (2009)**. "Stainless steel anode in a microbial fuel cell: Effect of surface treatment". *Bioelectrochemistry*, 80(1), 54-58.
   - Surface treatment methods to improve SS anode performance

3. **Pocaznoi, D., et al. (2012)**. "Stainless steel is a promising electrode material for anodes of microbial fuel cells". *Energy & Environmental Science*, 5(11), 9645-9652.
   - Comprehensive evaluation of flame-treated SS anodes

### Cathode Applications

4. **Selembo, P.A., et al. (2009)**. "The use of stainless steel and nickel alloys as low-cost cathodes in microbial electrolysis cells". *Journal of Power Sources*, 190(2), 271-278.
   - SS cathode performance in MEC

5. **Harnisch, F., et al. (2009)**. "Comparative study on the performance of different metal cathodes in microbial electrolysis cells". *Water Research*, 43(18), 4547-4556.
   - Comparison of SS with other metals for MEC HER

### Engineering and Scale-Up

6. **Baudler, A., et al. (2015)**. "Does it have to be carbon? Metal anodes in microbial fuel cells and related bioelectrochemical systems". *Energy & Environmental Science*, 8(7), 2048-2055.
   - Systematic evaluation of metallic anodes including SS

7. **Guo, K., et al. (2015)**. "Engineering electrodes for microbial electrocatalysis". *Current Opinion in Biotechnology*, 33, 149-156.
   - Engineering perspective on electrode material selection for MES scale-up

---

*Parameter documentation for the MESS (Microbial Electrochemical Systems Standardization) database. Last updated based on peer-reviewed literature through 2024.*

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Stainless+Steel&body=**Parameter%3A**+Stainless+Steel%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fstainless-steel.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Stainless+Steel&body=**Parameter%3A**+Stainless+Steel%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fstainless-steel.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Stainless+Steel&body=**Parameter%3A**+Stainless+Steel%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fstainless-steel.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
