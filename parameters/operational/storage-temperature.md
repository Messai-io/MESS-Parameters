# Storage Temperature

Storage temperature is the environmental temperature at which MES components, inocula, chemicals, or complete reactor assemblies are maintained during periods of non-operation, transit, or warehousing. Expressed in degrees Celsius, this parameter affects the viability of preserved microbial cultures, the shelf life of electrode materials and membranes, the stability of chemical reagents, and the structural integrity of polymer components. Proper storage temperature management extends component life and ensures reliable system startup.

For biological components (microbial inocula, biofilm-bearing electrodes), storage temperature profoundly affects survival. At 4 C (refrigerator), most bacteria enter a quiescent state with minimal metabolism, preserving viability for weeks to months. At -20 C (standard freezer), ice crystal damage reduces viability without cryoprotectant. At -80 C (ultra-low freezer) with 10--15% glycerol, cultures remain viable for years. At room temperature (20--25 C), active metabolism continues, rapidly consuming endogenous reserves and leading to cell death within days to weeks.

For hardware components, storage temperature affects polymer aging (accelerated at > 40 C), metal corrosion (accelerated at high temperature and humidity), membrane drying and embrittlement (Nafion must remain hydrated or stored at controlled humidity), and electronic component degradation.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Operational |
| **Subcategory** | Shutdown Procedures |
| **Type** | number |
| **Unit** | °C |
| **Minimum** | -80 |
| **Maximum** | 40 |
| **Papers Reporting** | 1 |

## Typical Values

- **Valid Range**: -196 -- 60 C
- **Liquid nitrogen (cryopreservation)**: -196 C
- **Ultra-low freezer (biobank)**: -80 C
- **Standard freezer**: -20 C
- **Refrigerator (short-term bio storage)**: 2 -- 8 C
- **Room temperature (standard lab)**: 20 -- 25 C
- **Controlled environment (warehouse)**: 10 -- 30 C
- **Electronics storage (MIL-STD)**: -40 -- 85 C
- **Nafion membrane storage**: 20 -- 25 C, > 50% RH or hydrated
- **Carbon electrode storage**: Ambient (no special requirements)

## Measurement Methods

- **Temperature Logger**: A calibrated temperature data logger (Onset HOBO, iButton) records the storage temperature continuously throughout the storage period. Logging interval: 1--60 minutes. Accuracy: +/- 0.5 C for most loggers. This verifies cold chain integrity during transport and storage.
- **Spot Measurement**: An infrared thermometer or contact thermocouple measures the temperature of stored items at the time of inspection. Less reliable than continuous logging for detecting excursions.

## Affecting Factors

### Primary

- **Biological Activity**: Higher temperatures maintain active metabolism, depleting reserves faster. 4 C provides 10x slower metabolism than 25 C.
- **Freezing Damage**: Uncontrolled freezing creates ice crystals that puncture cell membranes. Controlled cooling at 1 C/min with cryoprotectant minimizes damage.
- **Polymer Aging**: High temperatures accelerate polymer chain scission and oxidation. Storing polymer components below 30 C doubles or triples shelf life vs. 50 C storage.
- **Humidity**: Low humidity desiccates hydrated membranes (Nafion loses conductivity when dry). High humidity promotes mold growth on stored components.

## Related Parameters

- **name**: [Preservation Method](preservation-method.md)

- **relationship**: Technique used during storage
- **name**: [Temperature](temperature.md)

- **relationship**: Operating temperature (distinct from storage)
- **name**: [Shutdown Mode](shutdown-mode.md)

- **relationship**: Protocol for entering storage
- **name**: [Inoculum Source](inoculum-source.md)

- **relationship**: Biological material in storage

## Compatible Systems

Startup Shutdown

## References

- Mazur, P. (1984). "Freezing of living cells: mechanisms and implications." American Journal of Physiology, 247(3), C125-142.
- DuPont (2018). "Nafion Membranes: Storage and Handling Guide." Technical Bulletin.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Storage+Temperature&body=**Parameter%3A**+Storage+Temperature%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fstorage-temperature.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Storage+Temperature&body=**Parameter%3A**+Storage+Temperature%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fstorage-temperature.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Storage+Temperature&body=**Parameter%3A**+Storage+Temperature%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Fstorage-temperature.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
