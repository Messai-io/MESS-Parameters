# Radiation Tolerance

Radiation tolerance specifies the maximum ionizing radiation dose that a microbial electrochemical system (MES) can withstand while maintaining functional performance, expressed in grays (Gy) or sieverts (Sv). This parameter is relevant to MES designed for space applications (exposure to galactic cosmic rays and solar particle events), nuclear facility wastewater treatment, or sterilization applications. Both the biological components (microbial biofilm) and the hardware components (electronics, polymers, membranes) have radiation tolerance limits that constrain deployment in high-radiation environments.

Electroactive bacteria demonstrate varying radiation sensitivity. Geobacter sulfurreducens is moderately radiation-resistant relative to model organisms, surviving acute doses of 1--5 kGy with partial recovery. Deinococcus radiodurans, an extremely radiation-resistant bacterium, has been explored as an alternative electroactive organism for space MES, tolerating doses exceeding 10 kGy. For chronic low-dose-rate exposure (0.1--1 mGy/h on the ISS), mixed microbial communities generally maintain function because DNA repair mechanisms can keep pace with damage accumulation.

Hardware radiation tolerance is equally important. Standard CMOS electronics fail at 5--50 Gy total dose; radiation-hardened (rad-hard) electronics tolerate 100--1000 kGy. Polymer membranes (Nafion) degrade at 100--500 kGy. Carbon electrodes are highly radiation-resistant (> 1 MGy). The overall system radiation tolerance is limited by the most sensitive component.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Application Specific |
| **Subcategory** | Space Environment |
| **Type** | number |
| **Unit** | Gy |
| **Minimum** | 0 |
| **Maximum** | 1000 |

## Typical Values

- **Valid Range**: 0.001 -- 1000000 Gy
- **ISS dose rate**: 0.3 -- 0.5 mSv/day (approximately 0.1--0.2 Gy/year)
- **Mars transit dose rate**: approximately 1.8 mSv/day (0.7 Gy/year)
- **Mars surface dose rate**: approximately 0.67 mSv/day (0.25 Gy/year)
- **E. coli D10 (90% kill dose)**: 100 -- 700 Gy
- **Geobacter sulfurreducens tolerance**: 1000 -- 5000 Gy (acute)
- **Deinococcus radiodurans tolerance**: > 10000 Gy (acute)
- **Standard CMOS electronics**: 5 -- 50 Gy total dose
- **Rad-hard electronics**: 100 -- 1000 kGy
- **Carbon electrodes**: > 1 MGy
- **Nafion membrane**: 100 -- 500 kGy

## Measurement Methods

- **Biological Dose-Response Testing**: Biofilm samples or pure cultures are exposed to known radiation doses (gamma source, e.g., Co-60) at relevant dose rates. Post-irradiation viability (CFU counts), electrochemical activity (current density in a test MFC), and community composition (16S rRNA sequencing) are measured. D10 values and LD50 are calculated.
- **Electronics Radiation Testing**: Electronic components are irradiated per MIL-STD-883 TM 1019 (total ionizing dose) and TM 1020 (dose rate). Functional parameters (accuracy, noise, current draw) are measured before, during, and after irradiation to establish failure thresholds.

## Affecting Factors

### Primary

- **Radiation Type**: Gamma and electron radiation cause primarily indirect damage (via free radicals). Heavy ions (galactic cosmic rays) cause dense ionization tracks and greater biological damage per gray.
- **Dose Rate**: Chronic low-dose-rate exposure allows DNA repair between damage events. The same total dose at lower rate causes less biological damage (dose-rate effectiveness factor, DREF = 1.5--5).
- **Shielding**: Reactor walls, water volume, and spacecraft structure provide some shielding. 10 cm of water reduces the effective dose by 2--5x.
- **Microbial Community**: Mixed communities with radiation-resistant species maintain function longer than sensitive monocultures. Community adaptation to chronic radiation occurs over months.

## Related Parameters

- **name**: [Gravity Level](gravity-level.md)

- **relationship**: Space operational environment
- **name**: [Launch Survival G](launch-survival-g.md)

- **relationship**: Launch loads
- **name**: [Lifetime Target](lifetime-target.md)

- **relationship**: Mission duration and cumulative dose
- **name**: [Moisture Resistance](moisture-resistance.md)

- **relationship**: Environmental protection

## Compatible Systems

Space Applications

## References

- Hartline, C. et al. (2022). "Microbial fuel cells in space." Life Sciences in Space Research, 35, 37-49.
- Daly, M.J. (2009). "A new perspective on radiation resistance based on Deinococcus radiodurans." Nature Reviews Microbiology, 7(3), 237-245.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Radiation+Tolerance&body=**Parameter%3A**+Radiation+Tolerance%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fradiation-tolerance.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Radiation+Tolerance&body=**Parameter%3A**+Radiation+Tolerance%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fradiation-tolerance.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Radiation+Tolerance&body=**Parameter%3A**+Radiation+Tolerance%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fradiation-tolerance.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
