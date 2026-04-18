# Electrode Thickness Cell

Electrode thickness refers to the dimension of an electrode measured perpendicular to its active face in a microbial electrochemical system (MES) cell. For flat electrodes (carbon cloth, carbon paper, graphite plates, metal mesh), this is the material thickness. For three-dimensional electrodes (carbon felt, carbon foam, graphite granules, carbon brush), the thickness represents the depth of the porous electrode structure through which the electrolyte can penetrate and the biofilm can colonize. The electrode thickness is a key design parameter that affects the available surface area for microbial attachment, the internal resistance of the electrode, the mass transport of substrates within the electrode, and the overall cell thickness.

Thicker electrodes generally provide more surface area for biofilm colonization and higher total current capacity, but they also introduce greater mass transport limitations as substrate must diffuse deeper into the electrode structure. There exists an optimal electrode thickness beyond which additional material contributes diminishing returns---the inner regions become substrate-depleted and electrochemically inactive. For carbon felt anodes, this critical thickness is typically 3--6 mm in MFC applications with typical substrate concentrations. Exceeding this thickness wastes material without proportional performance gains.

For cathodes in both MFCs and MECs, the electrode thickness is typically thinner (0.1--1 mm) because the cathode relies on a thin catalyst layer (Pt, activated carbon, or MnO2) rather than a deep biofilm. However, recent developments in biocathodes for MECs and microbial electrosynthesis employ thicker cathode structures (1--5 mm) to accommodate cathodic biofilms. The total thickness of all electrodes, membranes, spacers, and current collectors determines the inter-cell spacing in stacked designs and the overall compactness of the system.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Reactor Design |
| **Subcategory** | Electrode Geometry in Cells |
| **Type** | number |
| **Unit** | mm |
| **Minimum** | 0.1 |
| **Maximum** | 10 |

## Typical Values

- **Valid Range**: 0.05--25 mm
- **Typical Range**: 0.1--10 mm
- **Carbon cloth (anode or cathode)**: 0.3--0.5 mm
- **Carbon paper (GDL)**: 0.1--0.4 mm
- **Carbon felt anode**: 2--6 mm (optimal typically 3--5 mm)
- **Carbon foam anode**: 5--15 mm
- **Graphite plate**: 2--10 mm
- **Carbon brush anode (compressed diameter)**: 10--25 mm
- **Activated carbon cathode**: 0.5--2 mm
- **Pt-coated carbon cloth cathode**: 0.3--0.5 mm
- **Stainless steel mesh cathode**: 0.2--1 mm
- **Biocathode (carbon felt)**: 2--5 mm
- **Granular electrode bed**: 10--50 mm (bed depth)

## Measurement Methods

- **Direct Caliper Measurement**: Measure the uncompressed electrode thickness using digital calipers or a micrometer at multiple positions across the electrode surface. For compressible materials (carbon felt, foam), measure at a defined compression force (e.g., 10 kPa) that approximates the operating condition in the assembled cell. Report both uncompressed and compressed thickness values.
- **Cross-Section Microscopy**: Cut a cross-section of the electrode and image under an optical microscope or SEM. Measure the thickness from the calibrated image, which also reveals the internal pore structure, biofilm penetration depth, and any catalyst layer thickness. This method is destructive but provides the most detailed information about the electrode architecture.
- **In-Situ Measurement**: For assembled cells, calculate the electrode thickness from the total cell thickness (measured externally) minus the known thicknesses of the reactor body walls, gaskets, spacers, membrane, and electrolyte gap. This indirect method is less precise but can be performed without disassembly.

## Affecting Factors

### Primary

- **Available Surface Area**: Thicker porous electrodes (carbon felt, foam) provide exponentially more internal surface area for biofilm colonization. A 5 mm carbon felt with 50 m2/g specific surface area provides far more active area than a 0.3 mm carbon cloth.
- **Mass Transport Limitation**: Substrate diffusion depth into the anode biofilm/electrode follows the relationship delta ~ sqrt(D * C_s / r), where D is the effective diffusion coefficient, C_s is the bulk substrate concentration, and r is the volumetric reaction rate. Beyond this depth, the electrode interior is substrate-starved.
- **Electronic Resistance**: Thicker electrodes have higher through-plane electronic resistance, particularly for high-resistivity materials like activated carbon. The voltage drop across the electrode thickness should be less than 10 mV to avoid significant performance loss.
- **Compression Behavior**: Many carbon electrodes compress significantly under mechanical pressure, changing their thickness, porosity, and contact resistance within the assembled cell.
- **Electrode Weight**: Thicker electrodes weigh more, affecting structural requirements in vertically oriented reactors.
- **Material Cost**: Electrode material cost scales linearly with thickness for sheet materials and with volume for three-dimensional structures.
- **Cell Compactness**: Thinner electrodes enable more compact cell designs and closer electrode spacing.
- **Biofilm Development Time**: Thicker electrodes require longer startup periods for the biofilm to colonize the interior pore structure.

## Related Parameters

- **name**: Electrode Spacing

- **relationship**: The gap between electrodes, which combined with electrode thickness determines total cell thickness.
- **name**: Electrode Arrangement

- **relationship**: The arrangement determines the orientation of electrode thickness relative to the flow path.
- **name**: Cell Volume

- **relationship**: Thick electrodes reduce the liquid volume in the cell.
- **name**: Internal Resistance (Cell)

- **relationship**: Electrode through-plane resistance contributes to total cell resistance.
- **name**: Current Density (Cell)

- **relationship**: Thicker electrodes may produce more total current but at lower current density per unit projected area.
- **name**: Power Density (Cell)

- **relationship**: Optimal power density requires balancing electrode thickness with electrode spacing.

## Compatible Systems

Cell Electrode Configuration

## References

- Wei, J., Liang, P., & Huang, X. (2011). Recent progress in electrodes for microbial fuel cells. *Bioresource Technology*, 102(20), 9335--9344.
- Logan, B.E., Wallack, M.J., Kim, K.Y., et al. (2015). Assessment of microbial fuel cell configurations and power densities. *Environmental Science & Technology Letters*, 2(8), 206--214.
- Chaudhuri, S.K. & Lovley, D.R. (2003). Electricity generation by direct oxidation of glucose in mediatorless microbial fuel cells. *Nature Biotechnology*, 21(10), 1229--1232.
- Jiang, D. & Li, B. (2009). Granular activated carbon single-chamber microbial fuel cells (GAC-SCMFCs): A design suitable for large-scale wastewater treatment processes. *Biochemical Engineering Journal*, 47(1-3), 31--37.
- Call, D.F., Merrill, M.D., & Logan, B.E. (2009). High surface area stainless steel brushes as cathodes in microbial electrolysis cells. *Environmental Science & Technology*, 43(6), 2179--2183.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Electrode+Thickness+Cell&body=**Parameter%3A**+Electrode+Thickness+Cell%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Felectrode-thickness-cell.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Electrode+Thickness+Cell&body=**Parameter%3A**+Electrode+Thickness+Cell%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Felectrode-thickness-cell.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Electrode+Thickness+Cell&body=**Parameter%3A**+Electrode+Thickness+Cell%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Felectrode-thickness-cell.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
