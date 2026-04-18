# Water Retention

Water retention in microbial electrochemical systems refers to the volume of liquid held within the reactor at any given time relative to the total reactor volume, and more broadly, the hydraulic retention time (HRT) that characterizes how long wastewater remains in contact with the bioelectrochemically active surfaces before discharge. Expressed as a time (hours or days) or as a volumetric fraction, this parameter governs the extent of substrate conversion, the contact time for biofilm-mediated electron transfer, and the degree of treatment achieved per pass through the system.

Water retention is fundamentally linked to treatment performance in MES. Longer retention times provide more opportunity for electroactive bacteria to oxidize organic substrates, generate current, and achieve target effluent quality. However, excessively long retention times reduce the volumetric treatment capacity and increase the reactor footprint per unit of wastewater flow. The optimal water retention represents a balance between treatment efficiency per pass and volumetric throughput, and varies with wastewater strength, biofilm maturity, temperature, and reactor configuration.

For scaled MES installations, water retention management involves both the average retention time and the distribution of retention times within the reactor. Ideal plug-flow reactors provide uniform retention times, while completely mixed reactors have exponentially distributed retention times (some fluid elements pass through quickly while others remain much longer). Real MES reactors fall between these extremes, with short-circuiting (fluid bypassing active zones) and dead zones (stagnant regions) creating non-ideal flow patterns that reduce effective water retention. Reactor design, flow distribution, and baffling strategies must optimize the residence time distribution for maximum bioelectrochemical performance.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Application Specific |
| **Subcategory** | Soil Integration |
| **Type** | number |
| **Unit** | % |
| **Minimum** | 0 |
| **Maximum** | 50 |
| **Papers Reporting** | 9 |

## Typical Values

- **Valid Range**: 0.5 to 120 hours
- **Typical MFC Range**: 4 to 48 hours
- **High-Strength Wastewater**: 12 to 72 hours
- **Municipal Wastewater MFC**: 4 to 24 hours
- **MEC for H2**: 6 to 48 hours
- **MDC Desalination Chamber**: 1 to 12 hours
- **Volumetric Retention**: 0.3 to 0.95 (fraction of total volume as liquid)

## Measurement Methods

- **Flow-Based Calculation**: 1. Measure the volumetric flow rate (Q) at the reactor inlet and outlet. 2. Measure the liquid volume of the reactor (V_liquid) by gravimetric or volumetric methods. 3. Calculate theoretical HRT: tau = V_liquid / Q. 4. This provides the nominal water retention time assuming ideal mixing.
- **Tracer Study**: 1. Inject a conservative tracer pulse (LiCl, NaBr, or fluorescent dye) at the reactor inlet. 2. Monitor tracer concentration at the outlet over time to construct the exit-age distribution (E-curve). 3. Calculate the mean residence time from the first moment: t_mean = integral of (t * E(t) dt). 4. Calculate the variance from the second moment to assess the degree of mixing and short-circuiting. 5. The ratio of actual mean residence time to theoretical HRT indicates hydraulic efficiency.
- **Volume Displacement Method**: 1. Drain the reactor completely and measure the liquid volume collected. 2. Compare against the geometric reactor volume to determine the liquid fraction. 3. Account for electrode porosity, gas holdup, and biofilm volume that reduce the effective liquid volume. 4. Recalculate the effective HRT based on actual liquid volume rather than total reactor volume.

## Affecting Factors

### Primary

- **Influent Flow Rate**: Directly determines HRT for a given reactor volume. Higher flow rates reduce retention time.
- **Reactor Volume and Configuration**: Larger reactors provide longer HRT at a given flow rate. Internal structures (baffles, electrodes) affect the actual flow path length and retention distribution.
- **Electrode Packing Density**: Dense electrode packing reduces the available liquid volume, decreasing the actual HRT below the nominal value based on total volume.
- **Gas Production**: Biogas generation in the reactor displaces liquid volume, reducing effective water retention. High gas production rates can cause significant volume displacement.
- **Recirculation**: Effluent recirculation increases the effective number of passes through the reactor without changing the net HRT per pass.
- **Biofilm Thickness**: Thick biofilms reduce the available liquid volume and can block flow channels, altering the residence time distribution.
- **Temperature Effects**: Gas solubility decreases at higher temperatures, increasing gas holdup and reducing effective liquid volume.

## Related Parameters

- **name**: Hydraulic Loading Rate

- **relationship**: The reciprocal relationship; HLR = V_reactor / (HRT * A_cross_section) for flow-through systems.
- **name**: Organic Loading Rate

- **relationship**: OLR = COD_influent / HRT, directly linking water retention to substrate loading.
- **name**: Scale Factor

- **relationship**: Maintaining equivalent water retention during scale-up is essential for preserving treatment performance.
- **name**: Nutrient Recovery

- **relationship**: Longer water retention increases per-pass nutrient removal but reduces throughput for recovery.
- **name**: Product Toxicity Threshold

- **relationship**: Water retention determines the rate of product accumulation relative to removal, controlling whether toxicity thresholds are approached.

## Compatible Systems

Agricultural Integration

## References

- Logan, B. E. (2008). Microbial fuel cells. John Wiley & Sons.
- Zhang, F., Ge, Z., Grimaud, J., Hurst, J., & He, Z. (2013). Long-term performance of liter-scale microbial fuel cells treating primary effluent installed in a municipal wastewater treatment facility. Environmental Science & Technology, 47(9), 4941-4948.
- Feng, Y., He, W., Liu, J., Wang, X., Qu, Y., & Ren, N. (2014). A horizontal plug flow and stackable pilot microbial fuel cell for municipal wastewater treatment. Bioresource Technology, 156, 132-138.
- Min, B., & Logan, B. E. (2004). Continuous electricity generation from domestic wastewater and organic substrates in a flat plate microbial fuel cell. Environmental Science & Technology, 38(21), 5809-5814.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Water+Retention&body=**Parameter%3A**+Water+Retention%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fwater-retention.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Water+Retention&body=**Parameter%3A**+Water+Retention%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fwater-retention.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Water+Retention&body=**Parameter%3A**+Water+Retention%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fwater-retention.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
