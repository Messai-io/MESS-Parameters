# Cell Material

Cell material refers to the primary construction material used for the reactor body, walls, and structural frame of a microbial electrochemical system (MES). The choice of cell material is a foundational engineering decision that affects chemical compatibility, gas permeability, electrical insulation, structural integrity, thermal performance, optical properties, manufacturability, and cost. In MES applications, the cell material must resist corrosion from acidic or alkaline electrolytes, be non-toxic to microbial communities, and provide adequate mechanical strength under the relevant operating conditions.

The reactor body material must be electrically insulating to prevent short circuits between electrodes, unless a conductive reactor wall is intentionally used as part of the electrode system (as in some tubular designs where the outer casing serves as the cathode current collector). For laboratory-scale MFCs and MECs, transparent materials such as glass, polycarbonate, and acrylic (PMMA) are commonly preferred because they allow visual monitoring of biofilm development, gas evolution, and flow patterns. At pilot and industrial scales, opaque engineering plastics, fiberglass-reinforced polymers (FRP), and stainless steel (with appropriate insulating liners) are selected for durability and cost-effectiveness.

For microbial desalination cells (MDCs) and systems operating under elevated pressure (MECs producing hydrogen), material selection must account for gas permeability, pressure rating, and long-term creep resistance. The increasing use of 3D printing for rapid prototyping of MES reactors has introduced additional materials such as ABS, PLA, PETG, and photopolymer resins, each with distinct chemical resistance and biocompatibility profiles.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Reactor Design |
| **Subcategory** | Cell Materials |
| **Type** | select |

## Typical Values

- **Valid Range**: Various polymers, glass, ceramics, metals, and composites
- **Common Laboratory Materials**: - Polycarbonate (PC): Most common for custom-machined lab reactors
- **Common Pilot/Industrial Materials**: - PVC / CPVC: Low cost, good chemical resistance, limited temperature range
- **3D Printing Materials**: ABS, PETG, PLA (short-term only), photopolymer resins
- **Specialty Materials**: PEEK (high temperature), ceramic (extreme chemical environments)

## Measurement Methods

- **Material Identification by Spectroscopy**: Fourier-transform infrared spectroscopy (FTIR) or Raman spectroscopy can identify unknown polymer reactor materials by their characteristic absorption/scattering spectra. A small sample is taken from a non-critical area of the reactor body and analyzed against reference libraries of common engineering plastics.
- **Chemical Compatibility Testing**: Immerse coupons of the candidate material in the intended electrolyte (synthetic wastewater, buffer solutions at relevant pH) at operating temperature for 30, 60, and 90 days. Measure weight change, dimensional change, tensile strength, and surface roughness before and after exposure. A weight change exceeding 2% or a tensile strength reduction greater than 10% indicates incompatibility.
- **Gas Permeability Assessment**: For MEC applications where hydrogen containment is critical, measure the gas transmission rate through the material using a differential pressure method per ASTM D1434. The hydrogen permeability must be sufficiently low to prevent significant losses, typically below 10^-14 mol/(m * s * Pa) for effective hydrogen recovery.

## Affecting Factors

### Primary

- **Chemical Resistance**: The electrolyte pH (typically 5--9), dissolved organics, metabolic byproducts, and any chemical additives (buffers, mediators) must not degrade the material over the intended service life.
- **Biocompatibility**: The material must not leach toxic plasticizers, antimicrobial agents, or heavy metals that could inhibit microbial activity. Autoclave-grade materials are generally suitable.
- **Mechanical Strength**: Must withstand internal hydrostatic pressure, stack compression forces, and any external loads without excessive deflection or failure.
- **Gas Permeability**: Critical for MECs (H2 containment) and single-chamber air-cathode MFCs (oxygen exclusion from the anode).
- **Transparency**: Visual monitoring capability is valuable for laboratory research but unnecessary for industrial installations.
- **Thermal Properties**: Operating temperature range, thermal expansion coefficient (must be compatible with gaskets and fittings), and thermal conductivity.
- **Machinability/Fabrication**: Ease of machining, welding, bonding, or 3D printing determines manufacturing cost and design flexibility.
- **Cost**: Material cost per unit volume varies by more than two orders of magnitude between commodity plastics (PP, PVC) and specialty materials (PEEK, PTFE).
- **UV Resistance**: For outdoor installations, UV degradation of polymer materials must be considered.

## Related Parameters

- **name**: Wall Thickness

- **relationship**: Minimum wall thickness depends on the material's mechanical properties and the operating pressure.
- **name**: Reactor Shape

- **relationship**: Some materials are better suited to specific shapes (e.g., glass for cylindrical, acrylic for flat-plate).
- **name**: Pressure Rating

- **relationship**: The maximum allowable pressure depends on the material strength, wall thickness, and geometry.
- **name**: Temperature Limit

- **relationship**: The maximum operating temperature is bounded by the material's glass transition or melting temperature.
- **name**: Cell Type

- **relationship**: Material selection varies significantly between single-chamber, dual-chamber, and multi-chamber designs.

## Compatible Systems

Cell Geometry Dimensions

## References

- Logan, B.E. (2008). *Microbial Fuel Cells*. John Wiley & Sons. Chapter 5: Materials and Architecture.
- Rozendal, R.A., Hamelers, H.V., Rabaey, K., et al. (2008). Towards practical implementation of bioelectrochemical wastewater treatment. *Trends in Biotechnology*, 26(8), 450--459.
- Baudler, A., Schmidt, I., Langner, M., et al. (2015). Does it have to be carbon? Metal anodes in microbial fuel cells and related bioelectrochemical systems. *Energy & Environmental Science*, 8(7), 2048--2055.
- Santoro, C., Arbizzani, C., Erable, B., & Ieropoulos, I. (2017). Microbial fuel cells: From fundamentals to applications. A review. *Journal of Power Sources*, 356, 225--244.
- Janicek, A., Fan, Y., & Liu, H. (2014). Design of microbial fuel cells for practical application: A review and analysis of scale-up studies. *Biofuels*, 5(1), 79--92.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Cell+Material&body=**Parameter%3A**+Cell+Material%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fcell-material.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Cell+Material&body=**Parameter%3A**+Cell+Material%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fcell-material.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Cell+Material&body=**Parameter%3A**+Cell+Material%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fcell-material.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
