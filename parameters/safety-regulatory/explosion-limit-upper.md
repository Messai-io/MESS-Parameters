# Explosion Limit Upper

The upper explosion limit (UEL), also known as the upper flammable limit (UFL), in microbial electrochemical systems (MES) refers to the maximum concentration of a flammable gas or vapor in air above which the mixture is too rich (fuel-concentrated) to sustain combustion or explosion. Above the UEL, there is insufficient oxygen to support flame propagation. This parameter is essential for safety engineering of MEC hydrogen production systems and for MES installations where flammable gases may accumulate.

The UEL is particularly relevant for hydrogen-producing MEC systems because hydrogen has an exceptionally wide flammable range (LEL 4.0% to UEL 75.0% by volume in air). This means that hydrogen-air mixtures are flammable across most of the concentration spectrum, and a gas leak from an MEC headspace (which may contain near-pure hydrogen) will pass through the entire flammable range as it dilutes with air. Unlike methane (UEL 15.0%), which has a relatively narrow flammable range, hydrogen's wide range means that almost any mixing scenario with air creates a fire or explosion hazard.

Understanding both the LEL and UEL is essential for designing intrinsically safe MES gas handling systems. Gas collection systems for MECs are typically operated above the UEL (near-pure hydrogen with minimal air ingress) to prevent the formation of flammable mixtures within the equipment. The critical zones of risk are at interfaces where hydrogen meets air: at collection system leaks, vent points, and during maintenance operations when reactor vessels are opened. Purging procedures use inert gases (nitrogen, argon) to transition safely through the flammable range when starting up or shutting down MEC gas collection systems.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Safety Regulatory |
| **Subcategory** | Chemical Hazards |
| **Type** | number |
| **Unit** | % |
| **Minimum** | 0 |
| **Maximum** | 100 |

## Typical Values

- **Valid Range**: 5 - 80% by volume in air (gas-dependent)
- **Hydrogen (H2)**: 75.0% v/v
- **Methane (CH4)**: 15.0% v/v
- **Hydrogen sulfide (H2S)**: 46.0% v/v
- **Carbon monoxide (CO)**: 74.0% v/v
- **Ammonia (NH3)**: 28.0% v/v
- **Ethanol**: 19.0% v/v
- **Flammable range width (UEL - LEL) for H2**: 71.0% v/v (exceptionally wide)
- **Flammable range width for CH4**: 10.0% v/v
- **MEC headspace hydrogen purity**: typically 80 - 99% (above UEL, intrinsically safe internally)
- **Temperature effect**: UEL increases approximately 8% per 100 degC above 25 degC
- **Pressure effect**: UEL increases with increasing pressure

## Measurement Methods

- **ASTM E681 Standard Test Method**: 1. Introduce a known concentration of the flammable gas into a sealed test vessel (typically 5-12 L glass sphere or cylinder) at controlled temperature and pressure. 2. Provide a standardized ignition source (electric spark, fuse wire) at the center of the vessel. 3. Observe whether flame propagation occurs (upward propagation criterion per ASTM E681). 4. Repeat at progressively higher concentrations until no flame propagation occurs. 5. The UEL is the lowest concentration at which no flame propagation is observed, bracketed by the highest concentration that does propagate.
- **EN 1839 Method (European Standard)**: 1. Uses either a tube method (EN 1839-T) or a bomb method (EN 1839-B) for flammability limit determination. 2. The tube method observes upward flame propagation in a vertical tube. 3. The bomb method measures pressure rise in a closed vessel upon ignition. 4. Results may differ slightly from ASTM E681 due to different apparatus dimensions and criteria.
- **Calculated Estimation for Gas Mixtures (Le Chatelier's Rule)**: 1. For mixtures of flammable gases (common in MES headspace containing H2 + CH4 + CO2), apply Le Chatelier's mixing rule:    1/UEL_mix = sum(yi / UEL_i), where yi is the volume fraction of each flammable component and UEL_i is its individual UEL. 2. This provides a conservative estimate for most common gas mixtures. 3. The rule is less accurate for mixtures containing hydrogen and hydrocarbons where synergistic combustion effects may occur.

## Affecting Factors

### Primary

- **Gas identity**: Each gas has a characteristic UEL determined by its molecular structure and combustion chemistry.
- **Temperature**: Elevated temperatures increase the UEL by enhancing combustion kinetics, widening the flammable range.
- **Pressure**: Increased pressure generally raises the UEL, particularly significant for pressurized MEC systems.
- **Oxygen concentration**: Enriched oxygen atmospheres increase the UEL dramatically; reduced oxygen narrows the flammable range.
- **Inert gas content**: CO2 and N2 in the gas mixture act as diluents and may shift the effective UEL.
- **Turbulence and confinement**: Turbulent conditions and confined geometries can affect flame propagation and observed flammability limits.
- **Ignition source energy**: Higher-energy ignition sources may ignite mixtures slightly above the UEL that weaker sources cannot.
- **Gas mixture composition**: Multi-component MES gas mixtures (H2 + CH4 + CO2 + H2S) require Le Chatelier's mixing rule or experimental determination.

## Related Parameters

- **name**: Explosion Limit Lower

- **relationship**: The LEL defines the lower boundary of the flammable range; LEL and UEL together define the full flammable zone.
- **name**: Flammability Rating

- **relationship**: The overall flammability classification incorporates the width of the flammable range (UEL - LEL).
- **name**: Emergency Shutdown Time

- **relationship**: Gas management during shutdown must account for transitions through the flammable range.
- **name**: Hazard Severity

- **relationship**: Wider flammable ranges (larger UEL - LEL) indicate higher explosion hazard severity.
- **name**: Atmospheric Pressure (Environmental)

- **relationship**: Ambient pressure affects the UEL and must be considered for high-altitude MES installations.

## Compatible Systems

Safety Parameters

## References

- ASTM E681 (2009). Standard Test Method for Concentration Limits of Flammability of Chemicals.
- EN 1839 (2017). Determination of the Explosion Limits and the Limiting Oxygen Concentration (LOC) for Flammable Gases and Vapours.
- Zabetakis, M.G. (1965). Flammability Characteristics of Combustible Gases and Vapors. Bureau of Mines Bulletin 627.
- Crowl, D.A. & Louvar, J.F. (2019). Chemical Process Safety: Fundamentals with Applications, 4th Edition. Pearson.
- Call, D. & Logan, B.E. (2008). Hydrogen production in a single chamber microbial electrolysis cell lacking a membrane. Environmental Science & Technology, 42(9), 3401-3406.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Explosion+Limit+Upper&body=**Parameter%3A**+Explosion+Limit+Upper%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Fexplosion-limit-upper.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Explosion+Limit+Upper&body=**Parameter%3A**+Explosion+Limit+Upper%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Fexplosion-limit-upper.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Explosion+Limit+Upper&body=**Parameter%3A**+Explosion+Limit+Upper%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Fexplosion-limit-upper.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
