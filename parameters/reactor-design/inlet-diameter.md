# Inlet Diameter

Inlet diameter is the internal diameter of the primary feed port or pipe through which the electrolyte, substrate solution, or wastewater enters an individual microbial electrochemical system (MES) cell or the manifold of a multi-cell stack. This parameter governs the inlet velocity for a given flow rate, the pressure drop at the entry point, the uniformity of flow distribution into the reactor chamber, and the susceptibility of the inlet to clogging by particulate matter or biofilm growth. The inlet diameter must be sized to deliver the required flow rate at an acceptable inlet velocity without creating excessive jetting or recirculation patterns that could damage the biofilm or create severe flow maldistribution.

In single-cell laboratory MFCs, the inlet is typically a simple tube or luer fitting with diameters of 3--10 mm. For pilot-scale systems and multi-cell stacks, the inlet diameter refers to the main feed pipe that supplies the distribution manifold, and must be large enough to minimize pressure drop while maintaining sufficient velocity to prevent sedimentation of suspended solids. The ratio of cell width to inlet diameter is an important design metric: ratios exceeding 10:1 tend to produce jet-like flow patterns with poor cross-cell distribution, while ratios below 3:1 provide more uniform flow but require larger inlet fittings that increase the reactor footprint and cost.

For microbial desalination cells (MDCs), each chamber may have its own inlet with potentially different diameters to accommodate different flow rates in the anode, desalination, and cathode chambers. In MEC applications, the cathode chamber inlet must be compatible with gas-tight operation to prevent hydrogen leakage, often requiring compression fittings or welded connections rather than simple push-fit tubes.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Reactor Design |
| **Subcategory** | Flow Distribution System |
| **Type** | number |
| **Unit** | mm |
| **Minimum** | 5 |
| **Maximum** | 100 |

## Typical Values

- **Valid Range**: 1--100 mm
- **Typical Range**: 3--25 mm
- **MFC (Laboratory, luer fitting)**: 3--6 mm (standard 1/8" or 1/4" tubing)
- **MFC (Laboratory, barbed fitting)**: 4--10 mm
- **MFC (Pilot-scale)**: 10--50 mm
- **MEC (Laboratory)**: 3--10 mm
- **MDC (Per chamber)**: 3--10 mm
- **Stack manifold (main inlet)**: 15--100 mm
- **Microfluidic MFC**: 0.5--2 mm
- **Standard tubing connections**: 1/16" (1.6 mm), 1/8" (3.2 mm), 1/4" (6.4 mm), 3/8" (9.5 mm)

## Measurement Methods

- **Direct Caliper Measurement**: Measure the internal diameter of the inlet fitting or tube using inside calipers or a pin gauge set. For threaded fittings, measure the bore diameter of the fitting body, not the thread outer diameter. Report the internal diameter to the nearest 0.1 mm.
- **Flow Velocity Calculation**: If the flow rate and inlet velocity are known (from flow sensor and PIV measurements), calculate the inlet diameter: d = sqrt(4 * Q / (pi * v)). This gives the effective hydraulic diameter, which may differ from the physical diameter if the inlet includes a contraction or expansion.
- **Fitting Specification**: Identify the inlet fitting type (luer, barbed, compression, NPT thread, flange) and size from manufacturer specifications. Standard fittings have precisely defined bore diameters: 1/4-28 UNF luer fitting has a 2.4 mm bore; 1/4" Swagelok compression fitting has a 4.5 mm bore.

## Affecting Factors

### Primary

- **Inlet Velocity**: v = Q / (pi * d^2 / 4). For a 5 mL/min flow through a 4 mm diameter inlet, the velocity is approximately 6.6 mm/s. Inlet velocities above 100 mm/s can create jetting that erodes biofilms near the inlet.
- **Pressure Drop**: The pressure loss at the inlet depends on the contraction ratio and can be estimated using minor loss coefficients: delta_P = K * rho * v^2 / 2, where K is typically 0.5--1.0 for a sharp-edged inlet.
- **Flow Distribution**: The inlet diameter relative to the cell width determines the initial flow pattern. Larger inlets (relative to cell width) produce more uniform initial distribution.
- **Clogging Risk**: Inlets smaller than 3--5 mm are susceptible to clogging by wastewater particulates, biofilm fragments, or gas bubbles. Screen or filter protection may be needed.
- **Tubing Compatibility**: The inlet diameter must match available tubing sizes and pump connections to avoid adapters that add dead volume and potential leak points.
- **Sampling Access**: Larger inlets can accommodate in-situ sensors (pH, dissolved oxygen, conductivity) for real-time monitoring.
- **Gas Entrainment**: Oversized inlets may allow air ingress during flow interruptions, which can harm anaerobic anode biofilms.
- **Manifold Integration**: In stacked systems, the inlet diameter must be compatible with the manifold branch pipe size and flow splitting strategy.

## Related Parameters

- **name**: Flow Rate (Cell)

- **relationship**: Determines the required inlet velocity for a given diameter.
- **name**: Manifold Type

- **relationship**: The inlet connects to the manifold, and its diameter must be compatible with the manifold design.
- **name**: Flow Uniformity

- **relationship**: Inlet size and position are primary determinants of cross-cell flow uniformity.
- **name**: Pressure Drop (Manifold)

- **relationship**: Inlet contraction contributes to the overall pressure drop.
- **name**: Cell Width/Diameter

- **relationship**: The ratio of cell width to inlet diameter affects flow distribution.
- **name**: Reynolds Number

- **relationship**: The inlet Re determines whether the entry flow is laminar or turbulent.
- **name**: Dead Zone Fraction

- **relationship**: Poor inlet design (too small, poorly positioned) increases dead zones.

## Compatible Systems

Reactor System Components

## References

- Kim, J.R., Rodriguez, J., Hawkes, F.R., et al. (2011). Increasing power recovery and organic removal efficiency using extended longitudinal tubular microbial fuel cell (MFC) reactors. *Energy & Environmental Science*, 4(2), 459--465.
- Heidrich, E.S., Edwards, S.R., Dolfing, J., et al. (2014). Performance of a pilot scale microbial electrolysis cell fed on domestic wastewater at ambient temperatures for a 12 month period. *Bioresource Technology*, 173, 87--95.
- Dekker, A., Ter Heijne, A., Saakes, M., Hamelers, H.V., & Buisman, C.J. (2009). Analysis and improvement of a scaled-up and stacked microbial fuel cell. *Environmental Science & Technology*, 43(23), 9038--9042.
- Ge, Z. & He, Z. (2012). Effects of draw solutions and membrane conditions on electricity generation and water flux in osmotic microbial fuel cells. *Bioresource Technology*, 109, 70--76.
- Zhang, F. & He, Z. (2013). A cooperative microbial fuel cell system for waste treatment and energy recovery. *Environmental Technology*, 34(13-14), 1905--1913.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Inlet+Diameter&body=**Parameter%3A**+Inlet+Diameter%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Finlet-diameter.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Inlet+Diameter&body=**Parameter%3A**+Inlet+Diameter%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Finlet-diameter.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Inlet+Diameter&body=**Parameter%3A**+Inlet+Diameter%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Finlet-diameter.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
