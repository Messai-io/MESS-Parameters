# Reactor Material

Reactor material refers to the construction material of the outer vessel or containment structure of a multi-cell or pilot-scale microbial electrochemical system (MES) installation, distinct from the cell material (which applies to individual cell bodies within the reactor). In large-scale MES systems, the reactor vessel may house multiple cell stacks, fluid distribution manifolds, gas collection systems, and support structures within a single enclosure. The reactor material must provide structural integrity, chemical resistance, weather protection (for outdoor installations), and thermal insulation, while also facilitating maintenance access, instrumentation penetrations, and connection to upstream/downstream treatment processes.

At pilot and demonstration scale, the reactor vessel is analogous to the tank or basin in conventional wastewater treatment, but with additional requirements for electrical insulation between cells, gas-tightness (for MECs), and compatibility with the specific chemical environment of bioelectrochemical processes. The reactor material choice affects the total installation cost, expected service life, maintenance requirements, and regulatory compliance (particularly for systems treating wastewater or producing hydrogen).

Common reactor vessel materials include reinforced concrete (for large basins), high-density polyethylene (HDPE) tanks, fiberglass-reinforced polymer (FRP) tanks, stainless steel vessels (for pressurized applications), and PVC/CPVC piping and fittings for interconnections. The selection depends on the scale, operating pressure, chemical environment, outdoor vs. indoor installation, local building codes, and budget. For laboratory-scale systems, the reactor material is synonymous with the cell material, but at larger scales, the reactor vessel is a separate structural element from the individual cells it contains.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Reactor Design |
| **Subcategory** | Reactor Vessel |
| **Type** | select |

## Typical Values

- **Valid Range**: Categorical
- **Reinforced Concrete**: Large-scale basins (above 1000 L); durable but porous; requires lining
- **HDPE (High-Density Polyethylene)**: 50--10,000 L tanks; excellent chemical resistance; UV-stabilized for outdoor use
- **FRP (Fiberglass-Reinforced Polymer)**: 100--50,000 L; high strength-to-weight; custom shapes
- **Stainless Steel 316L**: Pressurized vessels; superior mechanical properties; expensive
- **PVC/CPVC**: Piping and small vessels (up to 500 L); low cost; limited temperature range
- **Polypropylene (PP)**: Chemical-resistant tanks; weldable; good for acid/base environments
- **Carbon Steel (coated)**: Large pressure vessels with internal polymer lining
- **Acrylic/Polycarbonate**: Laboratory-scale transparent reactors
- **3D-Printed Polymers**: Prototype and custom laboratory reactors

## Measurement Methods

- **Material Identification**: Identify the reactor vessel material through manufacturer documentation, material certificates, or spectroscopic analysis (FTIR for polymers, XRF for metals). For existing installations without documentation, consult with materials engineers or use destructive testing (coupon sampling and tensile testing) on non-critical areas.
- **Structural Assessment**: Evaluate the reactor material's condition through visual inspection (cracking, discoloration, corrosion), non-destructive testing (ultrasonic thickness measurement for metals, hardness testing for polymers), and accelerated aging tests on material coupons exposed to the reactor environment. Annual inspections are recommended for pilot-scale installations.
- **Chemical Compatibility Verification**: Immerse material coupons in representative electrolyte at operating temperature for extended periods (90--365 days). Measure weight change, tensile strength change, and surface degradation. Chemical compatibility databases (e.g., Cole-Parmer guide) provide initial screening, but long-term testing is recommended for novel environments.

## Affecting Factors

### Primary

- **Chemical Environment**: The reactor material must resist the pH range (typically 5--9), dissolved organics, hydrogen sulfide, and any cleaning chemicals used during maintenance.
- **Scale and Volume**: Large volumes favor concrete or HDPE (low cost per unit volume); small volumes favor engineered plastics or stainless steel (better precision).
- **Operating Pressure**: Atmospheric-pressure systems can use lightweight materials; pressurized MEC systems require rated pressure vessels.
- **Installation Environment**: Outdoor installations require UV resistance, freeze-thaw tolerance, and weather resistance.
- **Cost**: Concrete and HDPE are least expensive per unit volume; stainless steel and FRP are 3--10x more expensive.
- **Service Life**: Concrete lasts 30--50 years; HDPE 20--30 years; stainless steel 20--50 years; FRP 15--25 years.
- **Regulatory Requirements**: Wastewater treatment installations may need to comply with specific codes for containment, structural integrity, and secondary containment.
- **Thermal Properties**: Insulation requirements depend on the material's thermal conductivity and the climate.

## Related Parameters

- **name**: Cell Material

- **relationship**: Material of individual cells within the reactor vessel.
- **name**: Reactor Volume Total

- **relationship**: The overall volume that the reactor material must contain.
- **name**: Pressure Rating

- **relationship**: Must be compatible with the reactor material strength.
- **name**: Wall Thickness

- **relationship**: Determined by material strength and operating requirements.
- **name**: Temperature Limit

- **relationship**: Bounded by the material's thermal properties.
- **name**: Reactor Shape

- **relationship**: Some materials are better suited to certain shapes.
- **name**: Reactor Count

- **relationship**: Number of reactor vessels in the installation.

## Compatible Systems

Reactor System Components

## References

- Rozendal, R.A., Hamelers, H.V., Rabaey, K., et al. (2008). Towards practical implementation of bioelectrochemical wastewater treatment. *Trends in Biotechnology*, 26(8), 450--459.
- Heidrich, E.S., Edwards, S.R., Dolfing, J., et al. (2014). Performance of a pilot scale microbial electrolysis cell fed on domestic wastewater at ambient temperatures for a 12 month period. *Bioresource Technology*, 173, 87--95.
- Janicek, A., Fan, Y., & Liu, H. (2014). Design of microbial fuel cells for practical application: A review and analysis of scale-up studies. *Biofuels*, 5(1), 79--92.
- Escapa, A., San-Martin, M.I., Mateos, R., & Moran, A. (2015). Scaling-up of membraneless microbial electrolysis cells (MECs) for domestic wastewater treatment: Bottlenecks and limitations. *Bioresource Technology*, 180, 72--78.
- Cusick, R.D., Bryan, B., Parker, D.S., et al. (2011). Performance of a pilot-scale continuous flow microbial electrolysis cell fed winery wastewater. *Applied Microbiology and Biotechnology*, 89(6), 2053--2063.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Reactor+Material&body=**Parameter%3A**+Reactor+Material%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Freactor-material.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Reactor+Material&body=**Parameter%3A**+Reactor+Material%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Freactor-material.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Reactor+Material&body=**Parameter%3A**+Reactor+Material%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Freactor-material.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
