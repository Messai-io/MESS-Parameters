# Reactor Volume Total

The total reactor volume represents the complete internal volume of a microbial electrochemical system (MES) reactor, encompassing all chambers (anode, cathode, and any intermediate compartments), headspace, and liquid-filled regions. This parameter is fundamental to reactor design as it directly determines the treatment capacity, hydraulic retention time, and overall footprint of the system. Total reactor volume is distinct from working volume (liquid-only) and is critical for scaling calculations from laboratory to pilot and industrial applications.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Reactor Design |
| **Subcategory** | Reactor Vessel |
| **Type** | number |
| **Unit** | L |
| **Minimum** | 1 |
| **Maximum** | 10000 |
| **Papers Reporting** | 44 |

## Typical Values

- **text**: | Scale | Volume Range | Application |
|-------|-------------|-------------|
| Lab-scale | 0.01 - 1 L | Fundamental research, screening studies |
| Bench-scale | 1 - 50 L | Process optimization, proof-of-concept |
| Pilot-scale | 50 - 1,000 L | Field demonstrations, real wastewater testing |
| Industrial-scale | 1,000 - 10,000+ L | Full-scale wastewater treatment, resource recovery |

**Common configurations:**
- Single-chamber MFC: 0.025 - 0.5 L (lab) to 10 - 200 L (pilot)
- Dual-chamber MFC/MEC: 0.05 - 1 L (lab) to 50 - 500 L (pilot)
- Tubular MFC: 0.5 - 10 L (lab) to 100 - 1,000 L (pilot)
- Stacked systems: 10 - 100 L (pilot) to 1,000 - 10,000 L (industrial)

## Measurement Methods

- **1. **Volumetric displacement**: Fill the reactor with a known liquid and measure the total volume displaced. This is the most direct method for irregular geometries.**: 2. **Geometric calculation**: For standard geometries (cylindrical, rectangular), calculate from measured dimensions. For a cylindrical reactor: V = pi * r^2 * h. 3. **CAD model integration**: Use computer-aided design software to compute volumes from 3D models, especially for complex internal geometries with baffles or electrode assemblies. 4. **Gravimetric method**: Weigh the reactor empty and filled with water (density = 1 g/mL at 20 C) to determine the total internal volume by mass difference.

## Affecting Factors

- **text**: - **Treatment objectives**: Higher COD loads or stringent effluent standards require larger volumes to achieve adequate retention times.
- **Electrode configuration**: Internal electrode assemblies (brush anodes, packed-bed cathodes) reduce effective liquid volume by 10-40% of the geometric volume.
- **Membrane placement**: Membrane-divided reactors require additional volume for separate chambers, increasing total volume by 30-100% compared to single-chamber designs.
- **Headspace requirements**: Gas collection systems (hydrogen in MECs, methane in anaerobic MFCs) necessitate headspace, typically 10-25% of total volume.
- **Scale-up strategy**: Numbering-up (multiple small units) vs. sizing-up (single large unit) produces different total volume requirements for the same throughput.
- **Hydraulic design**: Internal baffles, recirculation zones, and flow distributors affect the relationship between geometric and effective volume.

## Compatible Systems

Reactor System Components

## References

1. Logan, B.E. (2008). *Microbial Fuel Cells*. John Wiley & Sons. ISBN: 978-0-470-23948-3.
2. Rozendal, R.A., Hamelers, H.V.M., Rabaey, K., Keller, J., & Buisman, C.J.N. (2008). Towards practical implementation of bioelectrochemical wastewater treatment. *Trends in Biotechnology*, 26(8), 450-459.
3. Heidrich, E.S., Edwards, S.R., Dolfing, J., Cotterill, S.E., & Curtis, T.P. (2014). Performance of a pilot scale microbial electrolysis cell fed on domestic wastewater at ambient temperatures for a 12 month period. *Bioresource Technology*, 173, 87-95.
4. Ge, Z., Li, J., Xiao, L., Tong, Y., & He, Z. (2014). Recovery of electrical energy in microbial fuel cells: brief review. *Environmental Science & Technology Letters*, 1(2), 137-141.
5. Escapa, A., Mateos, R., Martinez, E.J., & Blanes, J. (2016). Microbial electrolysis cells: An emerging technology for wastewater treatment and energy recovery. *Renewable and Sustainable Energy Reviews*, 55, 942-956.

---

*Parameter documentation for the MESS (Microbial Electrochemical Systems Standardization) framework.*

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Reactor+Volume+Total&body=**Parameter%3A**+Reactor+Volume+Total%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Freactor-volume-total.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Reactor+Volume+Total&body=**Parameter%3A**+Reactor+Volume+Total%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Freactor-volume-total.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Reactor+Volume+Total&body=**Parameter%3A**+Reactor+Volume+Total%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Freactor-volume-total.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
