# temperature

Temperature is the thermal condition of the electrolyte within an MES reactor, expressed in degrees Celsius (C) or Kelvin (K). As a fundamental environmental parameter, temperature affects virtually every aspect of MES performance: microbial metabolic rate, enzyme kinetics, membrane conductivity, solution conductivity, dissolved oxygen solubility, gas solubility, diffusion coefficients, and electrochemical reaction rates. Temperature is the single most impactful environmental parameter for MES performance.

MES performance follows Arrhenius-type temperature dependence with a typical Q10 of 1.5--2.5 (performance increases 50--150% per 10 C increase) between 10 and 40 C. Mesophilic operation (25--37 C) provides optimal performance for most electroactive communities dominated by Geobacter and Shewanella species. Psychrophilic operation (4--15 C) reduces power output by 50--80% but is relevant for cold-climate wastewater treatment. Thermophilic operation (45--60 C) can increase reaction rates but requires heat-tolerant communities and is rarely studied in MES.

In practical MES deployments, temperature is often uncontrolled (ambient), resulting in seasonal performance variations of 2--5x between summer and winter in temperate climates. Active temperature control (water bath, heat exchangers) is standard in laboratory research for reproducibility but adds significant energy cost at pilot scale.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Operational |
| **Type** | number |
| **Unit** | °C |
| **Papers Reporting** | 1163 |

## Typical Values

- **Valid Range**: 0 -- 70 C
- **Psychrophilic MFC**: 4 -- 15 C (50--80% lower power)
- **Room temperature MFC**: 20 -- 25 C (standard lab condition)
- **Mesophilic optimum**: 30 -- 37 C (maximum performance for most systems)
- **Moderate thermophilic**: 40 -- 50 C (limited studies)
- **Domestic wastewater (temperate)**: 10 -- 25 C (seasonal range)
- **Domestic wastewater (tropical)**: 25 -- 35 C
- **Industrial wastewater**: 20 -- 60 C (varies by industry)
- **Q10 for MFC power output**: 1.5 -- 2.5

## Measurement Methods

- **Thermocouple or RTD**: A thermocouple (Type K, +/- 1 C) or RTD (Pt100, +/- 0.1 C) immersed in the reactor liquid provides direct temperature measurement. For non-invasive measurement, a surface-mount thermocouple on the reactor exterior with thermal correction is used. Continuous logging at 1-minute intervals captures temperature dynamics.
- **IR Thermometer**: Non-contact measurement of reactor surface temperature using an infrared thermometer or thermal camera. Accuracy: +/- 2 C. Useful for surveying temperature distribution across multi-module systems.

## Affecting Factors

### Primary

- **Climate/Season**: Unheated outdoor systems in temperate climates experience 10--25 C seasonal temperature swings, with winter performance 50--80% below summer.
- **Heating/Cooling Energy**: Active temperature control at 30 C requires 10--100 W per liter of reactor at 10 C ambient, which can exceed MFC power output by 1000x.
- **Substrate Biodegradability**: Temperature affects hydrolysis rates of complex substrates more than oxidation of simple substrates. Complex wastewater treatment is more temperature-sensitive.
- **Microbial Community Adaptation**: Communities can adapt to temperature over weeks to months. Cold-adapted communities (psychrotolerant) maintain 30--50% of mesophilic performance at 10 C.

## Related Parameters

- **name**: [Storage Temperature](storage-temperature.md)

- **relationship**: Temperature during non-operation
- **name**: [Batch Duration](batch-duration.md)

- **relationship**: Temperature-dependent cycle time
- **name**: [Hydraulic Retention Time](hydraulicretentiontime.md)

- **relationship**: Adjusted for temperature
- **name**: [Dilution Rate](dilution-rate.md)

- **relationship**: Temperature affects optimal dilution rate
- **name**: [Flexibility](flexibility.md)

- **relationship**: Thermal flexibility range

## References

- Liu, H., Cheng, S., Logan, B.E. (2005). "Power generation in fed-batch microbial fuel cells as a function of ionic strength, temperature, and reactor configuration." Environmental Science & Technology, 39(14), 5488-5493.
- Larrosa-Guerrero, A. et al. (2010). "Effect of temperature on the performance of microbial fuel cells." Fuel, 89(12), 3985-3994.
- Patil, S.A. et al. (2010). "Electroactive mixed culture biofilms in microbial bioelectrochemical systems: the role of temperature." Biosensors and Bioelectronics, 26(2), 803-808.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+temperature&body=**Parameter%3A**+temperature%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Ftemperature.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+temperature&body=**Parameter%3A**+temperature%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Ftemperature.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+temperature&body=**Parameter%3A**+temperature%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Ftemperature.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
