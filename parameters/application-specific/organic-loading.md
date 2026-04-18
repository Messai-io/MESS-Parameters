# Organic Loading

Organic loading rate (OLR) in microbial electrochemical systems quantifies the mass of organic substrate introduced to the reactor per unit volume per unit time, typically expressed as kg COD/m^3/d or g BOD/L/d. This parameter is one of the most fundamental design and operational variables for MES treating wastewater, as it directly determines the electron donor availability for bioelectrochemical current generation, the treatment capacity of the system, and the balance between substrate supply and microbial consumption capacity.

The organic loading rate integrates both the hydraulic loading and the influent substrate concentration into a single parameter that captures the metabolic demand placed on the system. In MFCs, higher OLR generally increases current generation up to a saturation point beyond which excess substrate cannot be processed by the anodic biofilm, leading to incomplete treatment and reduced coulombic efficiency. The relationship between OLR and power output follows Monod-type kinetics at the biofilm level, with a half-saturation concentration that depends on the microbial community, electrode material, and reactor configuration.

For scaling and integration of MES, the OLR is critical because it determines the required reactor volume for a given wastewater flow and strength. Municipal wastewater (typically 300-600 mg COD/L) at conventional flow rates results in relatively low OLR for MES (0.5-2.0 kg COD/m^3/d), while industrial wastewaters from food processing, brewery, or dairy operations can provide OLR of 5-20 kg COD/m^3/d, making them more attractive substrates for energy recovery. The scalability challenge lies in maintaining uniform organic distribution throughout the reactor volume as system size increases.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Application Specific |
| **Subcategory** | Treatment Performance |
| **Type** | number |
| **Unit** | kg COD/m³/d |
| **Minimum** | 0.1 |
| **Maximum** | 20 |

## Typical Values

- **Valid Range**: 0.01 to 50 kg COD/m^3/d
- **Municipal Wastewater MFC**: 0.5 to 3.0 kg COD/m^3/d
- **Industrial Wastewater MFC**: 2.0 to 20 kg COD/m^3/d
- **Brewery Wastewater**: 3.0 to 15 kg COD/m^3/d
- **MEC for H2 Production**: 1.0 to 10 kg COD/m^3/d
- **Optimal for Power**: 1.0 to 5.0 kg COD/m^3/d for most configurations

## Measurement Methods

- **Standard COD-Based Calculation**: 1. Measure the influent chemical oxygen demand (COD) concentration using standard methods (closed reflux, colorimetric method, APHA 5220D). 2. Measure the volumetric flow rate of influent entering the reactor. 3. Calculate OLR = (COD_influent * Q) / V_reactor, where Q is flow rate and V is reactor liquid volume. 4. For batch systems, OLR is expressed as initial COD concentration divided by batch cycle time. 5. Report both total and soluble COD-based OLR, as particulate organics may not be directly bioavailable.
- **BOD-Based Measurement**: 1. Determine the 5-day biochemical oxygen demand (BOD5) of the influent using standard respirometric methods. 2. Calculate OLR_BOD = (BOD5_influent * Q) / V_reactor. 3. BOD-based OLR is more reflective of the bioavailable organic fraction but takes longer to measure. 4. The BOD/COD ratio (typically 0.3-0.8) provides insight into the biodegradability of the wastewater.
- **Continuous Monitoring**: 1. Install an online COD/TOC analyzer in the influent line for real-time OLR tracking. 2. Couple with flow measurement for continuous OLR calculation. 3. Set alarm thresholds for OLR exceedances that could stress the bioelectrochemical system.

## Affecting Factors

### Primary

- **Wastewater Source and Composition**: Different wastewaters have vastly different COD concentrations and biodegradability profiles, directly determining the achievable OLR.
- **Hydraulic Retention Time**: At a given influent concentration, shorter HRT increases OLR proportionally. However, treatment efficiency may decrease.
- **Biofilm Capacity**: The maximum substrate utilization rate of the anodic biofilm limits the OLR that can be effectively processed without substrate breakthrough.
- **Reactor Volume-to-Flow Ratio**: The fundamental design parameter that, combined with influent strength, determines the OLR.
- **Temperature**: Affects microbial kinetics, with higher temperatures allowing higher OLR processing rates within physiological limits (10-60 degrees C).
- **Substrate Complexity**: Simple substrates (acetate, glucose) are consumed faster than complex polymeric substrates, affecting the maximum processable OLR.
- **Inhibitory Compounds**: Heavy metals, antibiotics, or toxic organics in the influent may reduce the effective biofilm capacity, requiring lower OLR for stable operation.

## Related Parameters

- **name**: Hydraulic Loading Rate

- **relationship**: OLR equals HLR multiplied by influent COD concentration; these parameters are coupled through wastewater strength.
- **name**: Coulombic Efficiency

- **relationship**: Higher OLR may decrease CE due to substrate diversion to non-electrogenic pathways.
- **name**: Energy Per Volume

- **relationship**: The recoverable energy per volume is bounded by OLR through the theoretical energy content of COD (3.86 kWh/kg COD).
- **name**: Carbon Recovery

- **relationship**: The fraction of organic carbon captured as electrical energy or valuable products, related to how efficiently the OLR is bioelectrochemically processed.
- **name**: Biogas Production

- **relationship**: At very high OLR, methanogenesis may outcompete electrogenic metabolism.

## Compatible Systems

Wastewater Treatment Applications

## References

- Min, B., & Logan, B. E. (2004). Continuous electricity generation from domestic wastewater and organic substrates in a flat plate microbial fuel cell. Environmental Science & Technology, 38(21), 5809-5814.
- Rabaey, K., Clauwaert, P., Aelterman, P., & Verstraete, W. (2005). Tubular microbial fuel cells for efficient electricity generation. Environmental Science & Technology, 39(20), 8077-8082.
- Hiegemann, H., Herzer, D., Nettmann, E., Lubken, M., Schulte, P., Sethmann, K. G., Zimmermann, R., & Henning, T. (2016). An integrated 45L pilot microbial fuel cell system at a full-scale domestic wastewater treatment plant. Bioresource Technology, 218, 115-122.
- Pant, D., Van Bogaert, G., Diels, L., & Vanbroekhoven, K. (2010). A review of the substrates used in microbial fuel cells (MFCs) for sustainable energy production. Bioresource Technology, 101(6), 1533-1543.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Organic+Loading&body=**Parameter%3A**+Organic+Loading%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Forganic-loading.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Organic+Loading&body=**Parameter%3A**+Organic+Loading%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Forganic-loading.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Organic+Loading&body=**Parameter%3A**+Organic+Loading%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Forganic-loading.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
