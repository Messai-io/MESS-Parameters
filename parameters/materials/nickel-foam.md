# Nickel Foam

Nickel foam is a three-dimensional (3D) porous metallic substrate used as an electrode material in microbial electrochemical systems, particularly as a cathode in microbial electrolysis cells (MEC) for the hydrogen evolution reaction (HER) and as a scaffold for catalyst deposition in MFC cathodes. It is produced by electrodeposition of nickel onto a polyurethane foam template, followed by removal of the polymer through thermal decomposition, yielding an open-cell metallic foam with high porosity (typically 95-98%), large specific surface area, and excellent electrical conductivity.

Nickel is an intrinsically active catalyst for the hydrogen evolution reaction (HER) in alkaline and near-neutral pH conditions, making nickel foam a dual-function material that serves as both the structural current collector and the catalytic surface. In MEC applications, nickel foam cathodes can achieve HER overpotentials competitive with platinum at a fraction of the cost. The 3D architecture provides a high density of catalytic sites per unit projected area, promotes gas bubble release through the interconnected pore network, and enables high mass transport rates due to the open structure.

### Physical Structure

- **Pore structure**: Open-cell, interconnected porosity
- **Pore size**: 200 - 800 um (commercial grades: 110 ppi, 80 ppi, 60 ppi, 40 ppi)
- **Strut thickness**: 50 - 200 um
- **Cell structure**: Kelvin (tetrakaidecahedron) or Weaire-Phelan type
- **Available thicknesses**: 0.5 - 10 mm (commercial sheets)

## Basic Information

| Property | Value |
|---|---|
| **Category** | Materials |
| **Subcategory** | Metal-Based Cathodes |
| **Type** | object |

## Typical Values

- **Nickel foam**: $0.50 - 2.00 per cm^2 (commercial sheet, 1.6 mm thick)
- **Platinum mesh**: $50 - 200 per cm^2
- **Pt/C on carbon cloth**: $2 - 5 per cm^2 (0.5 mg Pt/cm^2)
- **Stainless steel mesh**: $0.05 - 0.20 per cm^2
- **Cost-performance ratio**: Nickel foam achieves 60-90% of Pt performance at 1-10% of the cost

## Measurement Methods

- **Cathode Preparation**: 1. **Direct Use (As-Received)**:    - Cut commercial nickel foam sheet to desired dimensions    - Clean by sonication in acetone (10 min), then 3 M HCl (10 min) to remove surface oxide    - Rinse with DI water; dry under nitrogen    - Connect to external circuit via nickel wire or titanium clip (spot-welded or clamped)  2. **Surface Activation**:    - Electrochemical activation: 50-100 CV cycles in 1 M KOH (-1.5 to 0 V vs. Ag/AgCl) to increase surface roughness    - Chemical etching: Brief immersion in concentrated HCl (30 s) or FeCl3 solution to create nanoscale roughness    - Dealloying: Start with Ni-Cu or Ni-Zn alloy foam; selectively dissolve Cu/Zn to create nanoporous Ni with 10-100x higher surface area  3. **Catalyst Loading onto Nickel Foam**:    - Electrodeposit NiMo, NiW, NiFe, or NiP alloys for enhanced HER activity    - Hydrothermally grow Ni(OH)2/NiOOH nanostructures as OER catalysts (for water electrolysis)    - Deposit MoS2 or MoP nanoparticles for non-noble HER catalysis    - Dip-coat with carbon ink for combined MFC cathode/current collector
- **HER Characterization**: - **Linear Sweep Voltammetry (LSV)**: Sweep from 0 to -1.0 V vs. RHE at 5 mV/s; report overpotential at 10 mA/cm^2 - **Tafel Analysis**: Plot overpotential vs. log(current density); slope indicates rate-limiting step (Volmer: 120 mV/dec; Heyrovsky: 40 mV/dec; Tafel: 30 mV/dec in alkaline) - **EIS**: Measure charge transfer resistance at HER onset potential; lower R_ct indicates better catalytic activity - **Chronopotentiometry**: Hold constant current (10-50 mA/cm^2) for 24-100 hours to assess stability - **Gas Collection**: Measure H2 volumetrically using water displacement or gas chromatography; calculate Faradaic efficiency
- **MEC System Testing**: 1. Assemble MEC with bioanode (enriched from wastewater) and nickel foam cathode 2. Feed with acetate or wastewater substrate 3. Apply voltage (0.4-1.0 V) using potentiostat or DC power supply 4. Measure current continuously; calculate charge passed 5. Collect gas from cathode chamber; quantify H2 by GC 6. Calculate metrics: volumetric H2 production rate, cathodic H2 recovery, energy efficiency, coulombic efficiency

## Affecting Factors

### Primary

- **Pore Density (ppi)**: Higher ppi (110 vs. 40) provides more surface area per volume but may restrict bubble release and electrolyte flow; 60-80 ppi is optimal for most MEC applications
- **Foam Thickness**: Thicker foam provides more catalytic surface but increases internal ohmic drop; 1-3 mm is typical for lab-scale MEC cathodes
- **Compression**: Compressing foam increases density and conductivity but reduces porosity; 10-30% compression can improve performance by enhancing electrical contact
- **Native Oxide Layer**: NiO/Ni(OH)2 surface layer (2-5 nm) forms in air and aqueous solution; this layer is actually beneficial for HER in alkaline conditions as Ni(OH)2/Ni interfaces promote water dissociation (Volmer step)
- **Surface Poisoning**: Sulfide (H2S, HS^-) can poison Ni catalytic sites; critical concern in wastewater-fed MEC where sulfate-reducing bacteria produce sulfide
- **pH Dependence**: Ni HER activity is much higher in alkaline (pH > 12) than neutral conditions; MEC operation at pH 7 requires higher overpotentials
- **Ni Dissolution**: At pH < 4, nickel dissolves; at pH > 12, stable passivation; at pH 7, slow corrosion occurs over months
- **Applied Voltage**: Higher voltage drives more current but reduces energy efficiency; optimal range 0.6-1.0 V for single-chamber MEC
- **Temperature**: HER kinetics improve with temperature; 30-35 degrees C optimal for combined bio/electrochemical performance
- **Electrolyte Conductivity**: Higher conductivity reduces ohmic losses between anode and cathode; 50 mM phosphate buffer is standard
- **Gas Bubble Management**: H2 bubbles can accumulate on foam struts, blocking active sites; gentle agitation or vertical cathode orientation improves bubble release
- **Biofouling**: In single-chamber MEC, biofilm can colonize nickel foam surface, reducing HER activity by 20-50% over weeks; periodic acid washing (0.5 M HCl, 10 min) can regenerate activity
- **Corrosion**: Gradual dissolution of Ni in near-neutral electrolyte (0.1-1 ug/mL Ni^2+ leaching); rate increases with more negative cathode potential
- **Scaling**: CaCO3 and struvite (MgNH4PO4) precipitation on cathode surface in wastewater-fed systems; reduces activity by blocking pores
- **Mechanical Degradation**: Foam can deform under pressure from gas accumulation or handling; rigid frames prevent collapse

## Related Parameters

- **name**: Stainless Steel

- **relationship**: Alternative metallic cathode; lower HER activity than Ni but better corrosion resistance; often used as current collector with separate catalyst
- **name**: Carbon Felt/Cloth

- **relationship**: Non-metallic alternative; lower HER activity but no corrosion concerns; suitable for biocathodes
- **name**: Platinum

- **relationship**: Benchmark HER catalyst; 5-10x higher activity than bare Ni but 100x cost
- **name**: Electrode Surface Area

- **relationship**: Nickel foam provides 5,000-12,000 m^2/m^3 geometric area vs. 100-500 m^2/m^3 for flat electrodes
- **name**: HER Overpotential

- **relationship**: The voltage penalty beyond thermodynamic minimum (E^0 = 0 V vs. RHE at pH 0); lower is better
- **name**: Charge Transfer Resistance

- **relationship**: Nickel foam R_ct typically 1-20 ohm cm^2 for HER in alkaline; 10-100 ohm cm^2 at pH 7
- **name**: Exchange Current Density

- **relationship**: Intrinsic catalytic activity per unit area; Ni is 10^-5 to 10^-4 A/cm^2 in alkaline
- **name**: Faradaic Efficiency

- **relationship**: Fraction of current producing H2 vs. side reactions; typically 85-98% on Ni foam in MEC
- **name**: Hydrogen Production Rate

- **relationship**: Primary MEC output metric; Ni foam cathodes achieve 0.5-5 m^3/(m^3 d)
- **name**: Energy Efficiency

- **relationship**: Electrical energy input / energy content of H2 produced; 50-80% with Ni foam at optimal conditions
- **name**: Internal Resistance

- **relationship**: Ni foam contributes minimal ohmic resistance (< 1 ohm) but cathode R_ct is significant
- **name**: Overall System Cost

- **relationship**: Ni foam cathode represents 5-15% of total MEC system cost vs. 30-60% for Pt-based cathodes

## Compatible Systems

Cathode Materials

## References

### HER on Nickel Electrodes

1. **Danilovic, N., et al. (2012)**. "Enhancing the hydrogen evolution activity of Ni and NiMo catalysts by selective alloying for industrial hydrogen production". *ACS Catalysis*, 2(5), 756-764.
   - Systematic study of Ni and NiMo alloy HER catalysts

2. **McKone, J.R., et al. (2013)**. "Ni-Mo nanopowders for efficient electrochemical hydrogen evolution". *ACS Catalysis*, 3(2), 166-169.
   - High-performance Ni-based HER catalysts

3. **Subbaraman, R., et al. (2012)**. "Enhancing hydrogen evolution activity in water splitting by tailoring Li+-Ni(OH)2-Pt interfaces". *Science*, 334(6060), 1256-1260.
   - Mechanistic understanding of Ni/Ni(OH)2 interfaces for HER

### MEC Applications

4. **Jeremiasse, A.W., et al. (2010)**. "Ni foam cathode enables high volumetric H2 production in a microbial electrolysis cell". *International Journal of Hydrogen Energy*, 35(23), 12716-12723.
   - First comprehensive MEC study with nickel foam cathode

5. **Selembo, P.A., et al. (2009)**. "The use of stainless steel and nickel alloys as low-cost cathodes in microbial electrolysis cells". *Journal of Power Sources*, 190(2), 271-278.
   - Comparison of Ni-based cathodes with Pt in MEC

6. **Hu, H., Fan, Y., & Liu, H. (2009)**. "Hydrogen production in single-chamber tubular microbial electrolysis cells using non-precious-metal catalysts". *International Journal of Hydrogen Energy*, 34(20), 8535-8542.
   - Nickel foam as non-precious-metal MEC cathode

### Foam Electrode Engineering

7. **Harnisch, F., et al. (2009)**. "Comparative study on the performance of different metal cathodes in microbial electrolysis cells". *Water Research*, 43(18), 4547-4556.
   - Systematic comparison of Ni, Cu, SS, and Pt cathodes in MEC

---

*Parameter documentation for the MESS (Microbial Electrochemical Systems Standardization) database. Last updated based on peer-reviewed literature through 2024.*

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Nickel+Foam&body=**Parameter%3A**+Nickel+Foam%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fnickel-foam.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Nickel+Foam&body=**Parameter%3A**+Nickel+Foam%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fnickel-foam.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Nickel+Foam&body=**Parameter%3A**+Nickel+Foam%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fnickel-foam.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
