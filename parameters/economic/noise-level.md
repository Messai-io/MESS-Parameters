# Noise Level

Noise level quantifies the acoustic emissions from an MES installation, expressed in decibels (dBA) at a specified distance from the source. This environmental/social parameter affects community acceptance, regulatory compliance, and occupational health. MES installations produce noise from pumps, blowers (if cathode aeration is used), mixers, power electronics, and general mechanical equipment.

MES have a significant noise advantage over conventional treatment: the absence of large aeration blowers (the primary noise source at activated sludge plants, generating 80--100 dBA at 1 m) makes MES substantially quieter. Typical MES noise sources are small pumps (40--60 dBA at 1 m) and electronic equipment (30--50 dBA). The total installation noise at the property boundary typically meets residential limits (45--55 dBA nighttime) without acoustic treatment.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Economic |
| **Subcategory** | Health & Safety Impact |
| **Type** | number |
| **Unit** | dB |
| **Minimum** | 0 |
| **Maximum** | 100 |

## Typical Values

- **Valid Range**: 20 -- 120 dBA
- **MES (lab, pumps + DAQ)**: 40 -- 55 dBA at 1 m
- **MES (pilot, pumps + mixer)**: 50 -- 65 dBA at 1 m
- **MES at property boundary (30 m)**: 30 -- 45 dBA
- **Activated sludge (blowers)**: 80 -- 100 dBA at 1 m
- **AS at property boundary**: 50 -- 70 dBA
- **Residential limit (daytime)**: 55 -- 65 dBA
- **Residential limit (nighttime)**: 45 -- 55 dBA
- **WHO guideline (community noise)**: < 55 dBA (daytime), < 45 dBA (nighttime)

## Measurement Methods

- **Sound Level Meter**: A Type 1 or Type 2 sound level meter (per IEC 61672) with A-weighting measures the sound pressure level at standardized distances (1 m, property boundary). Measurements over 1--15 minutes at multiple locations provide the spatial noise profile.
- **Noise Modeling**: Acoustic propagation software (SoundPLAN, CadnaA) models noise from individual sources to receptor locations, accounting for distance attenuation, barriers, and ground effects. Used for pre-construction compliance prediction.

## Affecting Factors

### Primary

- **Equipment Selection**: Low-noise pump models (noise-optimized peristaltic or diaphragm pumps) reduce source noise by 5--15 dBA.
- **Enclosure Design**: Acoustic enclosures with absorptive lining reduce transmitted noise by 15--30 dBA.
- **Distance**: Sound attenuates by approximately 6 dBA per doubling of distance from a point source.
- **Operating Schedule**: Nighttime limits are 10 dBA stricter than daytime. Equipment scheduling can reduce nighttime noise.

## Related Parameters

- **name**: [Community Acceptance](community-acceptance.md)

- **relationship**: Noise affects social acceptance
- **name**: [Visual Impact](visual-impact.md)

- **relationship**: Related environmental impact
- **name**: [Odor Units](odor-units.md)

- **relationship**: Related nuisance parameter
- **name**: [Safety Incidents](safety-incidents.md)

- **relationship**: Noise-related health impacts

## Compatible Systems

Social Impact Parameters

## References

- WHO (1999). "Guidelines for Community Noise." World Health Organization.
- IEC 61672-1 (2013). "Electroacoustics - Sound level meters."

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Noise+Level&body=**Parameter%3A**+Noise+Level%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fnoise-level.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Noise+Level&body=**Parameter%3A**+Noise+Level%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fnoise-level.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Noise+Level&body=**Parameter%3A**+Noise+Level%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fnoise-level.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
