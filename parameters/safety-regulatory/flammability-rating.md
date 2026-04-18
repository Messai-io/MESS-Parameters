# Flammability Rating

Flammability rating in the context of microbial electrochemical systems (MES) refers to the standardized classification of flammability hazards associated with gases, liquids, and materials used in or produced by MFC, MEC, and MDC installations. This parameter provides a systematic framework for assessing and communicating fire and explosion risks, guiding the selection of appropriate engineering controls, electrical equipment classification, and safety procedures.

MES installations involve several materials with significant flammability concerns. MEC systems produce hydrogen gas (NFPA 704 flammability rating 4, the highest), which is extremely flammable with a wide explosive range and very low ignition energy. Methane (flammability rating 4) may be present in MES headspaces due to methanogenic activity. Organic solvents used in electrode fabrication or membrane processing may have significant flammability ratings. Even the wastewater itself may contain flammable volatile organic compounds. The flammability ratings of all materials present inform the hazardous area classification (Class I Division/Zone designations per NEC/IEC), which determines the type of electrical equipment that can be installed.

The most widely used flammability rating systems are the NFPA 704 diamond system (ratings 0-4), the Globally Harmonized System (GHS) flammability categories, and the European ATEX classifications. These systems consider flash point, boiling point, flammable range (LEL to UEL), auto-ignition temperature, and ignition energy. For MES facilities, the flammability rating drives decisions about ventilation requirements, electrical area classification, fire suppression systems, and the specification of explosion-proof or intrinsically safe equipment.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Safety Regulatory |
| **Subcategory** | Chemical Hazards |
| **Type** | number |
| **Minimum** | 0 |
| **Maximum** | 4 |

## Typical Values

- **Valid Range**: NFPA 704 Rating 0 - 4
- **Hydrogen gas (H2)**: NFPA 704 = 4 (extreme flammability); GHS Category 1; Auto-ignition: 500 degC; Flash point: flammable gas
- **Methane (CH4)**: NFPA 704 = 4; GHS Category 1; Auto-ignition: 537 degC
- **Hydrogen sulfide (H2S)**: NFPA 704 = 4; GHS Category 1; Auto-ignition: 260 degC
- **Ethanol (electrode treatment)**: NFPA 704 = 3; GHS Category 2; Flash point: 13 degC
- **Acetone (cleaning solvent)**: NFPA 704 = 3; GHS Category 2; Flash point: -20 degC
- **Nafion solution (in alcohol)**: NFPA 704 = 3 (due to solvent); Flash point: dependent on solvent
- **Municipal wastewater**: NFPA 704 = 0-1 (generally non-flammable, but may contain flammable VOCs)
- **Carbon cloth/felt (dry electrode material)**: Combustible solid, NFPA 704 = 1
- **Water**: NFPA 704 = 0 (non-flammable)

## Measurement Methods

- **NFPA 704 Classification**: 1. Identify all materials present in the MES installation (gases, liquids, solids). 2. Obtain Safety Data Sheets (SDS) for each material, which include the NFPA 704 flammability rating. 3. For materials without published ratings, determine the rating based on flash point and boiling point:    - Rating 4: Flammable gases, liquids with flash point < 23 degC and boiling point < 38 degC.    - Rating 3: Liquids with flash point < 23 degC and boiling point >= 38 degC.    - Rating 2: Liquids with flash point 23-93 degC.    - Rating 1: Materials that require considerable preheating before ignition.    - Rating 0: Materials that will not burn under normal conditions. 4. Post NFPA 704 placards at appropriate locations on the MES facility.
- **Flash Point Determination**: 1. Determine the flash point of liquid materials using ASTM D93 (Pensky-Martens closed cup) or ASTM D56 (Tag closed cup) methods. 2. The flash point is the lowest temperature at which the liquid produces sufficient vapor to form an ignitable mixture with air near the surface. 3. Flash point directly determines the NFPA 704 flammability rating and GHS flammability category.
- **Hazardous Area Classification**: 1. Conduct a hazardous area classification study per NEC Article 500/505 (US) or IEC 60079-10-1 (international). 2. Identify all potential sources of flammable gas or vapor release in the MES installation. 3. Classify areas as Division 1/Zone 0-1 (normal release expected) or Division 2/Zone 2 (abnormal release only). 4. Specify required electrical equipment protection level for each classified area. 5. Document the classification on facility drawings and maintain as part of the safety management system.

## Affecting Factors

### Primary

- **Materials present**: The flammability rating is an intrinsic property of the materials; hydrogen and methane production in MECs creates the highest-rated flammability hazard.
- **Concentration and volume**: Larger quantities of flammable materials increase the extent of hazardous area classification.
- **Ventilation effectiveness**: Adequate ventilation prevents flammable gas accumulation and may reduce the extent of classified hazardous areas.
- **Temperature**: Elevated temperatures increase vapor pressures of liquids and can change the effective flammability classification.
- **Enclosure vs. open-air**: Enclosed spaces are more susceptible to flammable gas accumulation than well-ventilated open-air installations.
- **Ignition source inventory**: The number and type of potential ignition sources in the area determines the practical fire risk, even at a given flammability rating.
- **Gas density**: Hydrogen is lighter than air (buoyant) and accumulates at ceiling level; methane is also lighter than air; H2S is heavier and accumulates at floor level. Gas density affects detector placement and ventilation design.
- **Process changes**: Introduction of new chemicals, changes in wastewater composition, or modifications to MES operation may change the applicable flammability ratings.

## Related Parameters

- **name**: Explosion Limit Lower

- **relationship**: The LEL is a key factor in determining flammability ratings for gases.
- **name**: Explosion Limit Upper

- **relationship**: The UEL and the width of the flammable range inform flammability hazard assessments.
- **name**: Hazard Severity

- **relationship**: Flammability rating is a direct input to overall hazard severity classification.
- **name**: Emergency Shutdown Time

- **relationship**: Higher flammability ratings require faster emergency response capabilities.
- **name**: Alarm Types

- **relationship**: Flammable gas detection alarms are specified based on the flammability rating of gases present.

## Compatible Systems

Safety Parameters

## References

- NFPA 704 (2022). Standard System for the Identification of the Hazards of Materials for Emergency Response.
- NEC/NFPA 70 (2023). National Electrical Code, Articles 500-505 (Hazardous Locations).
- IEC 60079-10-1 (2020). Explosive Atmospheres - Classification of Areas.
- GHS (2021). Globally Harmonized System of Classification and Labelling of Chemicals, 9th Revised Edition. United Nations.
- ATEX Directive 2014/34/EU. Equipment and Protective Systems Intended for Use in Potentially Explosive Atmospheres.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Flammability+Rating&body=**Parameter%3A**+Flammability+Rating%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Fflammability-rating.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Flammability+Rating&body=**Parameter%3A**+Flammability+Rating%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Fflammability-rating.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Flammability+Rating&body=**Parameter%3A**+Flammability+Rating%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Fflammability-rating.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
