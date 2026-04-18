# Wet Bulb Temperature

Wet bulb temperature represents the lowest temperature that can be achieved by
evaporative cooling at constant pressure, measured using a thermometer with its
bulb wrapped in a wet wick and exposed to moving air. This parameter combines
the effects of both temperature and humidity, representing the cooling potential
of the environment and the thermal stress on systems and organisms. In microbial
electrochemical systems, wet bulb temperature affects evaporative cooling
efficiency, system heat rejection capability, and the thermal environment for
microorganisms.

**Formula**: Wet bulb temperature is measured directly or calculated from: Twb =
T × atan(0.151977 × √(RH + 8.313659)) + atan(T + RH) - atan(RH - 1.676331) +
0.00391838 × RH^(1.5) × atan(0.023101 × RH) - 4.686035

Where: T = dry bulb temperature (°C), RH = relative humidity (%)

## Basic Information

| Property | Value |
|---|---|
| **Category** | Environmental |
| **Subcategory** | Humidity Parameters |
| **Type** | number |
| **Unit** | °C |
| **Minimum** | -20 |
| **Maximum** | 50 |

## Typical Values

- **Range**: -20 to 40°C (extreme cold to tropical conditions)
- **Typical**: 5 - 25°C (most environmental conditions)
- **Optimal**: 10 - 20°C (good evaporative cooling potential)
- **Performance Categories**: - **Excellent Cooling**: <15°C (high evaporative cooling potential)
- **Good Cooling**: 15 - 20°C (moderate cooling potential)
- **Limited Cooling**: 20 - 25°C (reduced evaporative cooling effectiveness)
- **Poor Cooling**: >25°C (minimal evaporative cooling potential, heat stress

## Measurement Methods

- **Direct Measurement**: 1. **Sling Psychrometer**:     - Traditional mechanical instrument with wet and dry bulb thermometers    - Manual operation by spinning in air    - High accuracy when properly used (±0.2°C)    - No power requirement, portable  2. **Aspirated Psychrometer**:     - Motor-driven air flow over wet and dry bulb sensors    - Automatic operation with consistent airflow    - Higher accuracy and repeatability than sling psychrometer    - Suitable for continuous or frequent measurements  3. **Electronic Wet Bulb Sensors**:    - Solid-state sensors with automatic wetting systems    - Continuous measurement capability    - Data logging and remote monitoring possible    - Lower maintenance than traditional psychrometers
- **Calculation Methods**: 1. **From Dry Bulb Temperature and Relative Humidity**:     - Use psychrometric equations or charts    - Requires accurate temperature and humidity measurements    - Various approximation formulas available    - Suitable for automated calculation from standard weather data  2. **From Dry Bulb and Dew Point Temperatures**:    - Alternative calculation method    - Requires accurate temperature measurements    - May be more accurate than RH-based calculations

## Affecting Factors

### Primary

- **Dry Bulb Temperature**: - Higher dry bulb temperature generally increases wet bulb temperature    - Rate of increase depends on humidity level    - Maximum possible wet bulb temperature equals dry bulb temperature    - Strong correlation but modified by humidity
- **Relative Humidity**: - Higher humidity increases wet bulb temperature    - At 100% RH, wet bulb equals dry bulb temperature    - At low humidity, wet bulb significantly below dry bulb    - Humidity has nonlinear effect on wet bulb temperature
- **Atmospheric Pressure**: - Affects evaporation rate and psychrometric relationships    - Lower pressure (higher altitude) affects wet bulb calculation    - Standard psychrometric charts assume standard pressure    - Altitude corrections may be needed for accuracy
- **Air Movement**: - Affects evaporation rate from wet bulb sensor    - Standard measurements assume specific air velocity    - Still air conditions give inaccurate wet bulb readings    - Wind speed affects natural wet bulb temperature
- **Water Quality and Purity**: - Impurities in water affect evaporation rate    - Dissolved salts change evaporation characteristics    - Clean, distilled water required for accurate measurements    - Wick condition affects measurement accuracy

## Performance Impact

Wet bulb temperature significantly affects microbial electrochemical system
performance through its influence on heat rejection capability and thermal
stress. Systems relying on evaporative cooling show reduced performance when wet
bulb temperatures exceed 20°C, as cooling efficiency decreases substantially.
High wet bulb temperatures (>25°C) can prevent adequate heat rejection,
potentially causing system overheating and reduced microbial activity. Optimal
wet bulb temperatures (10-20°C) enable efficient passive cooling and maintain
favorable thermal conditions for system operation.

## Limitations

### Performance Limitations

1. **Cooling Limit**: Cannot cool below wet bulb temperature using evaporation
2. **Humidity Dependence**: High humidity reduces cooling potential
3. **Climate Dependence**: Wet bulb temperature determined by local weather
4. **Seasonal Variation**: Wet bulb temperature changes throughout year

### Practical Limitations

1. **Measurement Complexity**: Requires specialized equipment or calculations
2. **Maintenance Requirements**: Wet bulb sensors require regular cleaning and
   calibration
3. **Water Supply**: Direct measurement requires clean water supply
4. **Response Time**: Wet bulb measurements have slower response than dry bulb

### Safety Considerations

1. **Heat Stress Index**: High wet bulb temperatures indicate heat stress
   conditions
2. **Personnel Safety**: Wet bulb >28°C dangerous for human health
3. **Equipment Overheating**: High wet bulb reduces cooling system effectiveness
4. **System Protection**: May require shutdown procedures in extreme wet bulb
   conditions

## Compatible Systems

Atmospheric Ambient Conditions

## References

1. **ASHRAE Handbook - Fundamentals** (2021). American Society of Heating,
   Refrigerating and Air-Conditioning Engineers.

   - Psychrometric properties and wet bulb temperature calculations

2. **WMO Guide to Meteorological Instruments** (2018). World Meteorological
   Organization.

   - Standard methods for wet bulb temperature measurement

3. **Stull, R.** (2011). "Wet-bulb temperature from relative humidity and air
   temperature". _Journal of Applied Meteorology and Climatology_, 50(11),
   2267-2269.

   - Accurate calculation methods for wet bulb temperature

4. **Logan, B.E.** (2008). "Microbial Fuel Cells". John Wiley & Sons.

   - Thermal management and environmental conditions for bioelectrochemical
     systems

5. **Raymond, C., et al.** (2020). "The emergence of heat and humidity too
   severe for human tolerance". _Science Advances_, 6(19), eaaw1838.
   - Wet bulb temperature limits and extreme conditions

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Wet+Bulb+Temperature&body=**Parameter%3A**+Wet+Bulb+Temperature%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fwet-bulb-temperature.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Wet+Bulb+Temperature&body=**Parameter%3A**+Wet+Bulb+Temperature%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fwet-bulb-temperature.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Wet+Bulb+Temperature&body=**Parameter%3A**+Wet+Bulb+Temperature%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fwet-bulb-temperature.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
