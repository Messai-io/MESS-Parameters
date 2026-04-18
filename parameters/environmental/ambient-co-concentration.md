# Ambient CO₂ Concentration

CO₂ concentration represents the amount of carbon dioxide present in the ambient
air surrounding microbial electrochemical systems. This parameter affects both
the internal CO₂ levels within the system and can influence microbial
metabolism, particularly for autotrophic processes. CO₂ concentration also
affects pH buffering capacity and carbonate chemistry in aqueous solutions.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Environmental |
| **Type** | number |
| **Unit** | ppm |
| **Papers Reporting** | 64 |

## Typical Values

- **Range**: 300 - 5000 ppm
- **Typical**: 400 - 1000 ppm
- **Optimal**: 400 - 800 ppm
- **Performance Categories**: - **Low Performance**: >2000 ppm (poor air quality, potential toxicity)
- **Moderate Performance**: 1000 - 2000 ppm (elevated levels)
- **High Performance**: 400 - 1000 ppm (good air quality)
- **Exceptional Performance**: 400 - 600 ppm (optimal outdoor levels)

## Measurement Methods

- **Direct Measurement**: 1. **Non-Dispersive Infrared (NDIR) Sensors**:     - Specific CO₂ absorption at 4.26 μm    - High accuracy (±50 ppm)    - Real-time continuous monitoring    - Minimal interference from other gases  2. **Electrochemical Sensors**:    - Chemical reaction produces electrical signal    - Lower cost than NDIR    - Shorter lifespan, requires calibration    - Good for alarm applications
- **Calculation Considerations**: - Account for temperature and pressure effects - Consider interference from other gases - Regular calibration with reference gases

## Affecting Factors

### Primary

- **Ventilation Rate**: - Higher air exchange: Lower CO₂ levels    - Poor ventilation: CO₂ accumulation    - Natural vs mechanical ventilation
- **Microbial Respiration**: - Aerobic metabolism produces CO₂    - System loading affects CO₂ generation    - Substrate type influences CO₂ production rate
- **Building Occupancy**: - Human respiration adds CO₂    - Equipment combustion processes    - Indoor vs outdoor installations
- **Atmospheric Conditions**: - Outdoor CO₂ baseline (~420 ppm)    - Seasonal variations    - Urban vs rural differences
- **System Design**: - Sealed systems: CO₂ accumulation    - Open systems: Atmospheric equilibration    - Gas purging and control systems

## Performance Impact

Elevated CO₂ concentrations (>1000 ppm) may affect air quality and worker
safety. Very high levels (>5000 ppm) can impact cognitive function and require
ventilation improvements. For microbial systems, CO₂ affects carbonate buffering
and pH stability.

## Compatible Systems

Air Quality

## References

1. **ASHRAE Standard 62.1** (2019). "Ventilation for Acceptable Indoor Air
   Quality". American Society of Heating, Refrigerating and Air-Conditioning
   Engineers.

   - Indoor air quality standards including CO₂ levels

2. **Persily, A.K.** (1997). "Evaluating building IAQ and ventilation with
   indoor carbon dioxide". _ASHRAE Transactions_, 103(2), 193-204.

   - CO₂ as indicator of ventilation effectiveness

3. **Logan, B.E.** (2008). "Microbial fuel cells". John Wiley & Sons, Hoboken,
   NJ.
   - Gas composition effects in bioelectrochemical systems

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Ambient+CO%E2%82%82+Concentration&body=**Parameter%3A**+Ambient+CO%E2%82%82+Concentration%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fambient-co-concentration.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Ambient+CO%E2%82%82+Concentration&body=**Parameter%3A**+Ambient+CO%E2%82%82+Concentration%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fambient-co-concentration.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Ambient+CO%E2%82%82+Concentration&body=**Parameter%3A**+Ambient+CO%E2%82%82+Concentration%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fambient-co-concentration.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
