# Influent Temperature

Influent temperature refers to the thermal energy state of the wastewater entering a microbial electrochemical system (MES), typically expressed in degrees Celsius (degC). Temperature is a critical operational parameter for MFC, MEC, and MDC systems because it affects virtually every aspect of bioelectrochemical performance: microbial metabolic rates, enzyme kinetics, substrate diffusion coefficients, ionic conductivity of the electrolyte, membrane transport properties, and electrochemical reaction kinetics.

Most MES research is conducted at mesophilic temperatures (20-37 degC) where electrogenic bacteria exhibit optimal activity. However, real wastewater temperatures vary widely depending on geographic location, season, time of day, and wastewater source. Municipal wastewater temperatures typically range from 10-25 degC in temperate climates, with winter temperatures potentially dropping below 10 degC in cold regions. At low temperatures, microbial metabolic rates decrease according to the Arrhenius relationship, with MFC power output typically declining by 30-50% when temperature drops from 30 degC to 15 degC. This temperature sensitivity is a major challenge for year-round MES operation in temperate and cold climates.

Industrial wastewaters may have elevated temperatures (40-70 degC for food processing, paper mill, or chemical industry effluents), which can either benefit MES performance (if thermophilic electrogenic communities develop) or cause thermal stress and biofilm detachment. Temperature also affects gas solubility (lower temperatures increase dissolved gas concentrations) and the Nernst equation potential, creating complex interactions between thermal conditions and electrochemical performance.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Application Specific |
| **Subcategory** | Influent Characteristics |
| **Type** | number |
| **Unit** | °C |
| **Minimum** | 5 |
| **Maximum** | 40 |

## Typical Values

- **Valid Range**: 4 - 70 degC
- **Typical Range for MES applications**: 10 - 45 degC
- **Optimal for mesophilic MES**: 25 - 37 degC
- **Optimal for thermophilic MES**: 45 - 60 degC
- **Municipal wastewater (winter, temperate)**: 10 - 15 degC
- **Municipal wastewater (summer, temperate)**: 18 - 25 degC
- **Municipal wastewater (tropical)**: 25 - 35 degC
- **Food processing wastewater**: 25 - 50 degC
- **Brewery wastewater**: 25 - 40 degC
- **Paper mill wastewater**: 35 - 55 degC
- **Power plant thermal effluent**: 30 - 45 degC
- **Most MFC lab studies**: 25 - 30 degC (controlled environment)
- **Minimum for appreciable MFC performance**: approximately 10 degC
- **Q10 temperature coefficient for MES**: 1.5 - 3.0 (power output approximately doubles for each 10 degC increase within optimal range)

## Measurement Methods

- **Direct Temperature Measurement**: 1. Use a calibrated temperature sensor (RTD, thermocouple, or thermistor) immersed directly in the influent wastewater stream. 2. For spot measurements, use a digital thermometer with stainless steel probe (accuracy +/- 0.1 degC). 3. For continuous monitoring, install an inline temperature transmitter (RTD Pt100 recommended for accuracy and stability). 4. Calibrate against a NIST-traceable reference thermometer annually. 5. Measure temperature in a well-mixed, representative location in the influent line.
- **Continuous Online Monitoring**: 1. Install a temperature sensor in the MES influent pipe or equalization tank, connected to the SCADA system. 2. Configure data logging at appropriate intervals (1-minute for process control, 15-minute for compliance reporting). 3. Set alarm limits for temperature excursions that could stress the electrogenic biofilm (e.g., < 10 degC, > 40 degC). 4. Archive historical temperature data for seasonal trend analysis and capacity planning.
- **Temperature Profiling**: 1. Measure temperature at multiple points within the MES reactor to assess thermal stratification and gradients. 2. Compare influent and effluent temperatures to estimate heat loss or heat generation within the reactor. 3. Use thermal imaging cameras for external temperature assessment of reactor vessels and piping. 4. Model heat transfer to predict reactor temperature under different influent and ambient temperature scenarios.

## Affecting Factors

### Primary

- **Geographic location and climate**: Higher-latitude and higher-altitude locations have lower average wastewater temperatures, particularly in winter.
- **Season**: Wastewater temperature follows seasonal air temperature patterns with a lag of several weeks due to thermal inertia of the collection system.
- **Wastewater source**: Industrial discharges can significantly elevate or depress wastewater temperature; domestic wastewater reflects household hot water usage.
- **Collection system characteristics**: Longer sewer systems with more heat exchange surface area tend to moderate wastewater temperature toward ground temperature.
- **Time of day**: Diurnal temperature variations of 1-5 degC are common in municipal wastewater.
- **Infiltration and inflow**: Cold groundwater infiltration or stormwater inflow can significantly reduce wastewater temperature.
- **Ambient air temperature**: Outdoor MES installations experience direct thermal coupling with ambient conditions.
- **Reactor insulation**: Insulated reactors better maintain optimal operating temperatures and reduce seasonal performance variation.

## Related Parameters

- **name**: Influent pH

- **relationship**: Temperature affects the pH of buffer systems and the dissociation constants of weak acids and bases.
- **name**: Influent COD

- **relationship**: Temperature affects the rate of COD biodegradation in the collection system before reaching the MES.
- **name**: Atmospheric Pressure (Environmental)

- **relationship**: Temperature and pressure together determine gas solubility.
- **name**: Effluent BOD Limit

- **relationship**: Lower temperatures reduce treatment efficiency, making effluent BOD limits harder to meet.
- **name**: Wastewater Type

- **relationship**: Each wastewater type has a characteristic temperature range.

## Compatible Systems

Wastewater Treatment Applications

## References

- Metcalf & Eddy (2014). Wastewater Engineering: Treatment and Resource Recovery, 5th Edition. McGraw-Hill.
- Larrosa-Guerrero, A. et al. (2010). Effect of temperature on the performance of microbial fuel cells. Fuel, 89(12), 3985-3994.
- Patil, S.A. et al. (2010). Electroactive mixed culture biofilms in microbial bioelectrochemical systems: the role of temperature for biofilm formation and performance. Biosensors and Bioelectronics, 26(2), 803-808.
- Liu, H. et al. (2005). Power generation in fed-batch microbial fuel cells as a function of ionic strength, temperature, and reactor configuration. Environmental Science & Technology, 39(14), 5488-5493.
- Logan, B.E. (2008). Microbial Fuel Cells. John Wiley & Sons.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Influent+Temperature&body=**Parameter%3A**+Influent+Temperature%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Finfluent-temperature.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Influent+Temperature&body=**Parameter%3A**+Influent+Temperature%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Finfluent-temperature.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Influent+Temperature&body=**Parameter%3A**+Influent+Temperature%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Finfluent-temperature.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
