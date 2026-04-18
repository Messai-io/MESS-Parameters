# Absolute Humidity

Absolute humidity represents the actual mass of water vapor present in a unit
volume of air, typically expressed as grams of water per cubic meter (g/m³) or
as vapor density. Unlike relative humidity, absolute humidity provides a direct
measure of moisture content independent of temperature. In microbial
electrochemical systems, absolute humidity affects membrane hydration, proton
conductivity, microbial activity, and corrosion rates of system components.

**Formula**: AH = (mw × P) / (R × T) Where: mw = molecular weight of water
(18.016 g/mol), P = vapor pressure (Pa), R = gas constant (8.314 J/mol·K), T =
temperature (K)

## Basic Information

| Property | Value |
|---|---|
| **Category** | Environmental |
| **Subcategory** | Humidity Parameters |
| **Type** | number |
| **Unit** | g/m³ |
| **Minimum** | 0 |
| **Maximum** | 50 |

## Typical Values

- **Range**: 0 - 50 g/m³
- **Typical**: 5 - 25 g/m³
- **Optimal**: 8 - 18 g/m³
- **Performance Categories**: - **Low Performance**: <3 g/m³ (very dry conditions, membrane dehydration risk)
- **Moderate Performance**: 3 - 8 g/m³ or 18 - 30 g/m³ (suboptimal moisture
- **High Performance**: 8 - 18 g/m³ (optimal moisture range)
- **Exceptional Performance**: 10 - 15 g/m³ (ideal conditions for most systems)

## Measurement Methods

- **Direct Measurement**: 1. **Gravimetric Analysis**:     - Most accurate method (±0.1 g/m³)    - Absorb water vapor in desiccant    - Weigh before and after exposure    - Time-intensive but highly precise  2. **Capacitive Humidity Sensors**:     - Fast response time (<30 seconds)    - Moderate accuracy (±2-5% RH equivalent)    - Convert to absolute humidity using temperature    - Suitable for continuous monitoring  3. **Psychrometric Method**:    - Uses wet and dry bulb temperatures    - Calculate using psychrometric equations    - Accuracy depends on temperature measurement precision    - Standard meteorological approach
- **Calculation Methods**: 1. **From Relative Humidity**: AH = (RH × Psat × 18.016) / (100 × R × T) 2. **From Dew Point**: AH = (Psat(Tdp) × 18.016) / (R × T)

## Affecting Factors

### Primary

- **Temperature**: - Higher temperatures increase vapor holding capacity    - Affects saturation vapor pressure exponentially    - Diurnal temperature cycles cause fluctuations    - Indoor climate control systems impact
- **Relative Humidity**: - Direct relationship at constant temperature    - Seasonal variations affect baseline levels    - Local weather patterns influence    - HVAC system control affects indoor levels
- **Ventilation Rate**: - Air exchange with outside environment    - Fresh air intake affects moisture levels    - Building tightness impacts accumulation    - Mechanical ventilation control
- **Water Sources**: - System water evaporation    - Nearby water bodies or wet surfaces    - Human occupancy and activities    - Equipment moisture generation
- **Material Properties**: - Hygroscopic materials absorb/release moisture    - Building materials affect buffering capacity    - Insulation properties influence condensation    - Vapor barrier effectiveness

## Performance Impact

Absolute humidity directly affects proton exchange membrane performance and
ionic conductivity. Low humidity (<5 g/m³) can cause membrane dehydration,
reducing proton transfer efficiency by up to 50%. High humidity (>25 g/m³) may
promote condensation and corrosion, potentially reducing system lifespan.
Optimal absolute humidity (8-18 g/m³) maintains adequate membrane hydration
while preventing excessive moisture-related issues.

## Limitations

### Performance Limitations

1. **Measurement Accuracy**: ±1-3 g/m³ typical sensor accuracy
2. **Spatial Variation**: Can vary significantly across facility
3. **Temporal Stability**: Changes with weather and HVAC operation
4. **Temperature Dependence**: Must account for temperature effects

### Practical Limitations

1. **Control Difficulty**: Challenging to maintain precise levels
2. **Equipment Cost**: High-accuracy sensors are expensive
3. **Calibration Requirements**: Regular calibration needed for accuracy
4. **Environmental Coupling**: Linked to other environmental parameters

### Safety Considerations

1. **Condensation Risk**: High humidity may cause electrical hazards
2. **Material Degradation**: Excessive moisture promotes corrosion
3. **Biological Growth**: High humidity encourages unwanted microorganisms
4. **Equipment Protection**: Electronic components vulnerable to moisture

## Compatible Systems

Atmospheric Ambient Conditions

## References

1. **ASHRAE Standard 62.1** (2022). "Ventilation and Acceptable Indoor Air
   Quality". American Society of Heating, Refrigerating and Air-Conditioning
   Engineers.

   - Humidity control standards and measurement methods

2. **Zhang, F., et al.** (2015). "Long-term performance of liter-scale microbial
   fuel cells treating primary effluent installed in a municipal wastewater
   treatment facility". _Environmental Science & Technology_, 49(6), 3549-3557.

   - Environmental conditions affecting long-term MFC operation

3. **Santoro, C., et al.** (2017). "Microbial fuel cells: From fundamentals to
   applications. A review". _Journal of Power Sources_, 356, 225-244.

   - Environmental factors affecting MFC performance including humidity

4. **WMO Guide to Meteorological Instruments** (2018). World Meteorological
   Organization.
   - Standard methods for humidity measurement and calculation

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Absolute+Humidity&body=**Parameter%3A**+Absolute+Humidity%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fabsolute-humidity.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Absolute+Humidity&body=**Parameter%3A**+Absolute+Humidity%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fabsolute-humidity.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Absolute+Humidity&body=**Parameter%3A**+Absolute+Humidity%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fabsolute-humidity.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
