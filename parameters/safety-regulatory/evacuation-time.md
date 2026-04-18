# Evacuation Time

Evacuation time in the context of microbial electrochemical systems (MES) refers to the maximum allowable duration for all personnel to safely exit the hazard zone surrounding an MFC, MEC, or MDC installation following the activation of an emergency evacuation alarm. This parameter is a critical component of the facility's emergency response plan and is determined by the nature and severity of potential hazards, the facility layout, the number and mobility of occupants, and the available egress routes.

MES installations present several scenarios that may require evacuation: hydrogen gas leaks from MEC systems reaching flammable concentrations, toxic gas releases (H2S from sulfate-containing wastewater), electrical hazards, chemical spills, structural failures, and natural disasters. The evacuation time must be shorter than the time required for a hazardous condition to escalate to a level that threatens human life. For example, in MEC installations where hydrogen accumulation is a concern, the evacuation time must be less than the time for hydrogen concentration to reach the lower explosive limit (4% by volume in air) in occupied spaces.

Evacuation time is governed by occupational health and safety regulations (OSHA 29 CFR 1910.38 in the US, EU Directive 89/654/EEC), fire codes (NFPA 101 Life Safety Code), and local building codes. These regulations specify requirements for egress path width, travel distance limitations, exit signage, emergency lighting, alarm notification, and assembly point designation. Regular evacuation drills (minimum annually) are required to verify that actual evacuation times meet the design targets and to identify bottlenecks or deficiencies in the evacuation plan.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Safety Regulatory |
| **Subcategory** | Emergency Response |
| **Type** | number |
| **Unit** | min |
| **Minimum** | 1 |
| **Maximum** | 30 |

## Typical Values

- **Valid Range**: 30 - 600 seconds (0.5 - 10 minutes)
- **Small MES laboratory or pilot facility (< 10 occupants)**: 30 - 120 seconds
- **Medium MES installation (10-50 occupants)**: 60 - 180 seconds
- **Large MES wastewater treatment plant (> 50 occupants)**: 120 - 300 seconds
- **Maximum travel distance to exit (NFPA 101)**: 61 m (200 ft) unsprinklered, 76 m (250 ft) sprinklered
- **High-hazard occupancies**: Maximum travel distance reduced to 23 m (75 ft)
- **Target evacuation time for hydrogen release scenario (MEC)**: < 120 seconds
- **Pre-movement time (alarm recognition + decision)**: 15 - 60 seconds
- **Movement time**: Depends on distance and occupant characteristics; typically 30 - 120 seconds
- **OSHA requirement**: Evacuation must be completed before conditions become immediately dangerous to life and health (IDLH)

## Measurement Methods

- **Evacuation Drill Timing**: 1. Plan an unannounced evacuation drill at least annually (more frequently for high-hazard facilities). 2. Sound the evacuation alarm and start timing simultaneously. 3. Station observers at all exits and the assembly point to record the time each person exits the building and arrives at the assembly area. 4. Record the total time from alarm activation to the last person reaching the assembly point. 5. Debrief participants and observers to identify delays, confusion, or obstructions. 6. Document results and compare against the target evacuation time.
- **Computational Evacuation Modeling**: 1. Create a building model including all MES process areas, corridors, stairways, and exits using evacuation simulation software (Pathfinder, STEPS, buildingEXODUS). 2. Define occupant profiles (number, location, mobility, familiarity with exits). 3. Model pre-movement times based on alarm type and occupant awareness studies. 4. Run multiple simulations with varying conditions (blocked exits, reduced visibility, peak occupancy). 5. Determine the 95th percentile evacuation time across all scenarios.
- **Egress Component Analysis**: 1. Measure the width and capacity of all egress components (doors, corridors, stairways). 2. Calculate the theoretical flow capacity using the methods in SFPE Handbook (typically 1.3 persons per second per meter of egress width). 3. Compute the total time for all occupants to pass through the most restrictive egress component (bottleneck analysis). 4. Add pre-movement time and walking time to get the total required safe egress time (RSET). 5. Compare RSET against the available safe egress time (ASET, determined by hazard development analysis).

## Affecting Factors

### Primary

- **Facility size and layout**: Larger facilities with longer travel distances and more complex layouts require more evacuation time.
- **Number and mobility of occupants**: More occupants and those with mobility impairments require more time and wider egress routes.
- **Hazard escalation rate**: Faster-developing hazards (hydrogen explosions, flash fires) demand shorter evacuation times.
- **Alarm system effectiveness**: Clearly audible and visible alarms with distinct evacuation signals reduce pre-movement time.
- **Exit signage and emergency lighting**: Well-marked, illuminated exit routes improve wayfinding speed, especially in low-visibility conditions.
- **Training and drill frequency**: Well-trained occupants exhibit shorter pre-movement and decision times.
- **Time of day**: Night shifts with fewer, potentially less alert occupants may have different evacuation dynamics.
- **Environmental conditions**: Smoke, darkness, or weather conditions can impede movement speed and exit accessibility.

## Related Parameters

- **name**: Emergency Shutdown Time

- **relationship**: The ESD must achieve a safe system state within the overall emergency response timeline, coordinated with evacuation.
- **name**: Alarm Types

- **relationship**: The evacuation alarm must be distinct and recognizable to trigger immediate response.
- **name**: Explosion Limit Lower

- **relationship**: The time for hydrogen to reach the LEL determines the available safe egress time for MEC facilities.
- **name**: Access Road Width

- **relationship**: Access roads must accommodate emergency vehicles while allowing evacuating personnel to clear the area.
- **name**: Hazard Severity

- **relationship**: Higher hazard severity requires shorter evacuation times and more robust egress provisions.

## Compatible Systems

Risk Assessment Parameters

## References

- NFPA 101 (2021). Life Safety Code. National Fire Protection Association.
- OSHA 29 CFR 1910.38. Emergency Action Plans.
- SFPE (2016). SFPE Handbook of Fire Protection Engineering, 5th Edition. Society of Fire Protection Engineers.
- EU Directive 89/654/EEC. Minimum Safety and Health Requirements for the Workplace.
- ISO 7240 (2018). Fire Detection and Alarm Systems. International Organization for Standardization.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Evacuation+Time&body=**Parameter%3A**+Evacuation+Time%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Fevacuation-time.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Evacuation+Time&body=**Parameter%3A**+Evacuation+Time%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Fevacuation-time.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Evacuation+Time&body=**Parameter%3A**+Evacuation+Time%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Fevacuation-time.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
