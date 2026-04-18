# Current Collector Type

Current collector type specifies the material and configuration of the conductive elements used to transfer electrons between the electrode (anode or cathode) and the external electrical circuit in a microbial electrochemical system (MES). The current collector serves as the interface between the bioelectrochemical reaction occurring at the electrode surface and the external load or power supply, and its properties directly affect the ohmic resistance of the system, the uniformity of current distribution across the electrode, and the long-term durability of the electrical connections.

In MFCs and MECs, the current collector must simultaneously satisfy requirements for high electrical conductivity, corrosion resistance in the reactor environment (which may range from mildly acidic to neutral pH, with dissolved organics and metabolic byproducts), mechanical compatibility with the electrode material, and ease of fabrication and assembly. The choice of current collector material is particularly critical for the anode side, where the collector is immersed in the anolyte and exposed to microbial metabolites, and for the cathode side in MECs where hydrogen evolution creates a reducing environment.

Common current collector materials include stainless steel mesh or wire (grades 304 or 316L), titanium wire or mesh (for superior corrosion resistance), copper wire with protective coatings, graphite rods or plates, and conductive adhesives or paints (silver or carbon-based). The current collector geometry---point contact (single wire), line contact (rod along one edge), perimeter frame, distributed mesh, or full-face conductive plate---affects the current distribution uniformity and the associated ohmic losses. Poor current collection is one of the most common causes of underperformance in scaled-up MES systems.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Reactor Design |
| **Subcategory** | Cell Connections |
| **Type** | select |

## Typical Values

- **Valid Range**: Categorical (material and geometry combinations)
- **Common Materials**: - Stainless steel 316L mesh/wire: Most common for lab-scale, low cost
- **Common Geometries**: - Point contact: Single wire attached to electrode center or edge
- **Contact Resistance Values**: 0.1--10 ohm*cm2 depending on material and contact quality

## Measurement Methods

- **Four-Point Probe Contact Resistance**: Measure the contact resistance between the current collector and electrode using a four-point probe technique. Apply two current leads and two voltage sense leads, with the junction between the collector and electrode between the inner probes. The contact resistance R_contact = V_measured / I_applied. Measure at multiple points across the interface to assess uniformity. Values below 1 ohm*cm2 indicate good electrical contact.
- **Potentiostatic EIS Method**: Perform electrochemical impedance spectroscopy (EIS) on the assembled cell with and without the current collector contribution. The high-frequency intercept of the Nyquist plot gives the total ohmic resistance, which includes the current collector contribution. By comparing EIS with different collector configurations, the collector resistance can be isolated.
- **Visual and Dimensional Inspection**: Document the current collector type by photographing the collector, measuring its dimensions (wire gauge, mesh opening size, wire diameter), identifying the material (by markings, material certificate, or spectroscopic analysis), and noting the attachment method (crimping, welding, conductive adhesive, mechanical clamping).

## Affecting Factors

### Primary

- **Electrical Conductivity**: The collector material's bulk conductivity determines the resistance per unit length. Copper (5.96 x 10^7 S/m) offers the lowest resistance, followed by silver, aluminum, titanium (2.38 x 10^6 S/m), and stainless steel (1.45 x 10^6 S/m).
- **Corrosion Resistance**: Long-term immersion in anolyte or catholyte can corrode the collector, increasing resistance and potentially releasing toxic metal ions. Titanium and graphite are the most corrosion-resistant options.
- **Contact Area and Quality**: The fraction of electrode area in direct electrical contact with the collector determines the current path length through the (typically resistive) electrode material to reach the collector. Full-face mesh collectors minimize this path.
- **Electrode Compatibility**: The collector must form a low-resistance electrical connection with the electrode. Carbon-to-metal junctions require careful surface preparation or conductive adhesives.
- **Biofilm Interference**: On the anode side, biofilm growth on exposed collector surfaces can increase contact resistance over time.
- **Hydrogen Embrittlement**: In MECs, metallic collectors at the cathode may be susceptible to hydrogen embrittlement, particularly stainless steel.
- **Cost**: Titanium costs 5--10x more than stainless steel per unit area. Copper is cheapest but has the worst corrosion resistance.
- **Fabrication Complexity**: Point contacts are simplest to implement; full-face mesh collectors require precise alignment and compression.

## Related Parameters

- **name**: Internal Resistance (Cell)

- **relationship**: The current collector contributes to the total ohmic resistance of the cell.
- **name**: Electrode Arrangement

- **relationship**: The collector design must match the electrode geometry and orientation.
- **name**: Stack Compression

- **relationship**: In stacked configurations, compression force affects collector-to-electrode contact resistance.
- **name**: Power Connection

- **relationship**: The type of external power connection is influenced by the current collector design.
- **name**: Current Density (Cell)

- **relationship**: High current densities require more uniform current collection to avoid local hotspots.
- **name**: Power Factor

- **relationship**: Collector resistance affects the overall power delivery efficiency.

## Compatible Systems

Cell Electrode Configuration

## References

- Wei, J., Liang, P., & Huang, X. (2011). Recent progress in electrodes for microbial fuel cells. *Bioresource Technology*, 102(20), 9335--9344.
- Logan, B.E. (2008). *Microbial Fuel Cells*. John Wiley & Sons. Chapter 5: Materials.
- Liang, P., Huang, X., Fan, M.Z., Cao, X.X., & Wang, C. (2007). Composition and distribution of internal resistance in three types of microbial fuel cells. *Applied Microbiology and Biotechnology*, 77(3), 551--558.
- Sleutels, T.H., Hamelers, H.V., Rozendal, R.A., & Buisman, C.J. (2009). Ion transport resistance in microbial electrolysis cells with anion and cation exchange membranes. *International Journal of Hydrogen Energy*, 34(9), 3612--3620.
- Dewan, A., Beyenal, H., & Lewandowski, Z. (2008). Scaling up microbial fuel cells. *Environmental Science & Technology*, 42(20), 7643--7648.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Current+Collector+Type&body=**Parameter%3A**+Current+Collector+Type%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fcurrent-collector-type.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Current+Collector+Type&body=**Parameter%3A**+Current+Collector+Type%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fcurrent-collector-type.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Current+Collector+Type&body=**Parameter%3A**+Current+Collector+Type%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fcurrent-collector-type.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
