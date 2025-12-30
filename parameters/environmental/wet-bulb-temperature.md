<!--
Parameter ID: wet_bulb_temperature
Category: environmental
Generated: 2025-08-08T11:02:00.000Z
-->

# Wet Bulb Temperature

## Definition

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

## Typical Values

- **Range**: -20 to 40°C (extreme cold to tropical conditions)
- **Typical**: 5 - 25°C (most environmental conditions)
- **Optimal**: 10 - 20°C (good evaporative cooling potential)

**Performance Categories**:

- **Excellent Cooling**: <15°C (high evaporative cooling potential)
- **Good Cooling**: 15 - 20°C (moderate cooling potential)
- **Limited Cooling**: 20 - 25°C (reduced evaporative cooling effectiveness)
- **Poor Cooling**: >25°C (minimal evaporative cooling potential, heat stress
  risk)

## Measurement Methods

### Direct Measurement

1. **Sling Psychrometer**:

   - Traditional mechanical instrument with wet and dry bulb thermometers
   - Manual operation by spinning in air
   - High accuracy when properly used (±0.2°C)
   - No power requirement, portable

2. **Aspirated Psychrometer**:

   - Motor-driven air flow over wet and dry bulb sensors
   - Automatic operation with consistent airflow
   - Higher accuracy and repeatability than sling psychrometer
   - Suitable for continuous or frequent measurements

3. **Electronic Wet Bulb Sensors**:
   - Solid-state sensors with automatic wetting systems
   - Continuous measurement capability
   - Data logging and remote monitoring possible
   - Lower maintenance than traditional psychrometers

### Calculation Methods

1. **From Dry Bulb Temperature and Relative Humidity**:

   - Use psychrometric equations or charts
   - Requires accurate temperature and humidity measurements
   - Various approximation formulas available
   - Suitable for automated calculation from standard weather data

2. **From Dry Bulb and Dew Point Temperatures**:
   - Alternative calculation method
   - Requires accurate temperature measurements
   - May be more accurate than RH-based calculations

## Affecting Factors

### Primary Factors

1. **Dry Bulb Temperature**:

   - Higher dry bulb temperature generally increases wet bulb temperature
   - Rate of increase depends on humidity level
   - Maximum possible wet bulb temperature equals dry bulb temperature
   - Strong correlation but modified by humidity

2. **Relative Humidity**:

   - Higher humidity increases wet bulb temperature
   - At 100% RH, wet bulb equals dry bulb temperature
   - At low humidity, wet bulb significantly below dry bulb
   - Humidity has nonlinear effect on wet bulb temperature

3. **Atmospheric Pressure**:
   - Affects evaporation rate and psychrometric relationships
   - Lower pressure (higher altitude) affects wet bulb calculation
   - Standard psychrometric charts assume standard pressure
   - Altitude corrections may be needed for accuracy

### Secondary Factors

1. **Air Movement**:

   - Affects evaporation rate from wet bulb sensor
   - Standard measurements assume specific air velocity
   - Still air conditions give inaccurate wet bulb readings
   - Wind speed affects natural wet bulb temperature

2. **Water Quality and Purity**:
   - Impurities in water affect evaporation rate
   - Dissolved salts change evaporation characteristics
   - Clean, distilled water required for accurate measurements
   - Wick condition affects measurement accuracy

## Performance Impact

Wet bulb temperature significantly affects microbial electrochemical system
performance through its influence on heat rejection capability and thermal
stress. Systems relying on evaporative cooling show reduced performance when wet
bulb temperatures exceed 20°C, as cooling efficiency decreases substantially.
High wet bulb temperatures (>25°C) can prevent adequate heat rejection,
potentially causing system overheating and reduced microbial activity. Optimal
wet bulb temperatures (10-20°C) enable efficient passive cooling and maintain
favorable thermal conditions for system operation.

## Compatible Systems

### Outdoor MFC Systems

- **Optimal Range**: 8 - 18°C wet bulb temperature
- **Cooling Dependency**: Natural and evaporative cooling affected by wet bulb
  temperature
- **Performance Impact**: High wet bulb temperatures reduce heat rejection
  capability

### Evaporatively Cooled Systems

- **Operating Limits**: Effective cooling requires wet bulb <20°C
- **Design Considerations**: System capacity must account for local wet bulb
  conditions
- **Seasonal Variation**: Performance varies with seasonal wet bulb patterns

### Greenhouse and Semi-Enclosed Systems

- **Wet Bulb Range**: 12 - 22°C typical in controlled environments
- **Ventilation Requirements**: Higher wet bulb temperatures require more
  ventilation
- **Humidity Control**: May need dehumidification when wet bulb temperatures
  high

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

## Validation Rules

1. **Range validation**: -30 to +50°C (extreme but possible values)
2. **Physical limits**: Wet bulb temperature cannot exceed dry bulb temperature
3. **Unit consistency**: Express in °C or °F consistently with dry bulb
   temperature
4. **Humidity correlation**: Must be consistent with relative humidity and dry
   bulb temperature
5. **Seasonal patterns**: Should follow expected seasonal and geographic
   patterns

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

## Application Notes

**Laboratory Scale**:

- Monitor wet bulb temperature for evaporative cooling system design
- Use wet bulb data to predict cooling system performance
- Account for wet bulb temperature in thermal management calculations
- Consider wet bulb temperature when selecting cooling strategies

**Pilot Scale**:

- Characterize local wet bulb temperature patterns during site assessment
- Design cooling systems considering worst-case wet bulb conditions
- Monitor wet bulb temperature for cooling system optimization
- Consider seasonal wet bulb variations in system operation planning

**Commercial Scale**:

- Site selection should consider local wet bulb temperature climatology
- Design thermal management systems for local wet bulb conditions
- Implement wet bulb temperature monitoring for cooling system control
- Consider wet bulb temperature effects in economic modeling of cooling costs
