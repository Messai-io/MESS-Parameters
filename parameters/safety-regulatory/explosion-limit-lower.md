# Explosion Limit Lower

The lower explosion limit (LEL), also known as the lower flammable limit (LFL), in the context of microbial electrochemical systems (MES) refers to the minimum concentration of a flammable gas or vapor in air below which the mixture is too lean to sustain combustion or explosion. This parameter is critically important for MEC (microbial electrolysis cell) systems that produce hydrogen gas and for any MES installation where methane, hydrogen sulfide, or other flammable gases may accumulate in reactor headspaces, gas collection systems, or enclosed process areas.

Hydrogen is the primary safety concern for MEC systems, with an LEL of 4.0% by volume in air at standard conditions (25 degC, 101.325 kPa). This relatively low LEL, combined with hydrogen's wide flammable range (4-75%), low ignition energy (0.017 mJ), and invisible flame, makes hydrogen leak detection and prevention particularly critical. In MFC systems treating sulfate-containing wastewater, hydrogen sulfide (H2S, LEL 4.3%) can accumulate in reactor headspaces. Methane (CH4, LEL 5.0%) may also be present if methanogenic activity is not fully suppressed in MES anodes.

Safety systems for MES installations are designed around the LEL, with gas detection alarms typically set at 10-25% of the LEL (0.4-1.0% H2 for hydrogen) to provide early warning. Ventilation systems, gas-tight enclosures, explosion-proof electrical equipment, and emergency shutdown procedures are all designed with reference to the LEL of the gases present. The LEL is temperature- and pressure-dependent, with lower temperatures and higher pressures generally reducing the LEL (making the gas flammable at lower concentrations).

## Basic Information

| Property | Value |
|---|---|
| **Category** | Safety Regulatory |
| **Subcategory** | Chemical Hazards |
| **Type** | number |
| **Unit** | % |
| **Minimum** | 0 |
| **Maximum** | 20 |

## Typical Values

- **Valid Range**: 0.5 - 15% by volume in air (gas-dependent)
- **Hydrogen (H2)**: 4.0% v/v (40,000 ppm)
- **Methane (CH4)**: 5.0% v/v (50,000 ppm)
- **Hydrogen sulfide (H2S)**: 4.3% v/v (43,000 ppm)
- **Carbon monoxide (CO)**: 12.5% v/v
- **Ammonia (NH3)**: 15.0% v/v
- **Acetone**: 2.5% v/v
- **Typical gas detector alarm setpoints**: 10% LEL (first alarm), 25% LEL (second alarm / shutdown)
- **Action level for ventilation**: 10% LEL
- **Evacuation threshold**: 25-50% LEL
- **OSHA Permissible Exposure Limit (PEL) for H2S**: 20 ppm (well below LEL, health-based)
- **Temperature correction**: LEL decreases approximately 8% per 100 degC increase above 25 degC

## Measurement Methods

- **Catalytic Bead (Pellistor) Sensors**: 1. Install catalytic bead combustible gas detectors at potential leak points in MEC gas collection systems, reactor headspaces, and enclosed process areas. 2. The sensor consists of two matched beads: one active (catalytic) and one reference. Combustible gas oxidizes on the catalytic bead, raising its temperature and resistance. 3. Calibrate sensors with certified reference gas mixtures (typically 50% LEL span gas) at regular intervals (monthly to quarterly). 4. Reading is expressed as percentage of LEL (%LEL), where 100% LEL corresponds to 4.0% H2. 5. Response time is typically 10-30 seconds (T90).
- **Infrared (NDIR) Gas Detection**: 1. Use non-dispersive infrared (NDIR) sensors for methane detection (methane absorbs infrared at 3.3 micrometers). 2. NDIR sensors are not affected by sensor poisoning and have longer lifetimes than catalytic bead sensors. 3. Note: Hydrogen is not detectable by NDIR due to its symmetrical molecule; use alternative sensing technologies for H2. 4. Calibrate with certified methane reference gas mixtures.
- **Electrochemical Sensors**: 1. Deploy electrochemical sensors for H2S detection at health-relevant concentrations (ppm level, well below LEL). 2. These sensors provide ppm-level readings for toxic gas monitoring as a complement to LEL-based combustible gas detection. 3. Replace sensor cells at manufacturer-recommended intervals (typically 1-3 years).
- **Portable Gas Analyzers**: 1. Use portable multi-gas analyzers (combustible gas, O2, CO, H2S) for confined space entry procedures during MES maintenance. 2. Perform bump tests before each use and full calibration monthly. 3. Monitor continuously during maintenance activities inside reactor vessels or gas collection enclosures.

## Affecting Factors

### Primary

- **Gas composition**: Each flammable gas has a specific LEL; mixtures follow Le Chatelier's mixing rule for combined LEL estimation.
- **Temperature**: Higher temperatures decrease the LEL (expanding the flammable range), requiring adjusted alarm setpoints for heated MES applications.
- **Pressure**: Higher pressures generally decrease the LEL, particularly significant for pressurized MEC systems.
- **Oxygen concentration**: Reduced oxygen (below 21%) narrows the flammable range and increases the LEL; enriched oxygen atmospheres decrease it.
- **Inert gas dilution**: Nitrogen or CO2 blanketing raises the effective LEL by reducing oxygen availability.
- **Humidity**: Water vapor displaces air and slightly affects combustion kinetics, but the effect on LEL is generally small.
- **Turbulence and mixing**: Poorly mixed gas volumes may have local concentrations above the LEL even when the average concentration is below.
- **Sensor cross-sensitivity**: Catalytic bead sensors respond to all combustible gases; the calibration gas must match the target gas for accurate %LEL readings.

## Related Parameters

- **name**: Explosion Limit Upper

- **relationship**: The UEL defines the upper boundary of the flammable range; the interval between LEL and UEL is the flammable zone.
- **name**: Flammability Rating

- **relationship**: The flammability classification of materials and gases incorporates LEL as a key factor.
- **name**: Emergency Shutdown Time

- **relationship**: ESD must prevent gas accumulation from reaching the LEL.
- **name**: Hazard Severity

- **relationship**: The severity of explosion hazards is directly related to the width of the flammable range (UEL - LEL).
- **name**: Alarm Types

- **relationship**: Gas detection alarms are set as percentages of the LEL.

## Compatible Systems

Safety Parameters

## References

- NFPA 69 (2019). Standard on Explosion Prevention Systems. National Fire Protection Association.
- NFPA 497 (2021). Recommended Practice for the Classification of Flammable Liquids, Gases, or Vapors and of Hazardous (Classified) Locations.
- IEC 60079-10-1 (2020). Explosive Atmospheres - Classification of Areas - Explosive Gas Atmospheres.
- Zabetakis, M.G. (1965). Flammability Characteristics of Combustible Gases and Vapors. Bureau of Mines Bulletin 627.
- Logan, B.E. et al. (2008). Microbial electrolysis cells for high yield hydrogen gas production from organic matter. Environmental Science & Technology, 42(23), 8630-8640.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Explosion+Limit+Lower&body=**Parameter%3A**+Explosion+Limit+Lower%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Fexplosion-limit-lower.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Explosion+Limit+Lower&body=**Parameter%3A**+Explosion+Limit+Lower%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Fexplosion-limit-lower.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Explosion+Limit+Lower&body=**Parameter%3A**+Explosion+Limit+Lower%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Fexplosion-limit-lower.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
