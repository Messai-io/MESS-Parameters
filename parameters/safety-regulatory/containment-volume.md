# Containment Volume

Containment volume in the context of reactor design refers to the secondary containment capacity designed to capture and hold any liquid that escapes from the primary reactor vessel due to leaks, gasket failures, membrane ruptures, or catastrophic structural failure. This parameter ensures environmental protection and regulatory compliance by preventing uncontrolled release of reactor contents (which may include wastewater, microbial cultures, chemical additives, and produced gases) into the surrounding environment. Containment volume must be sized to hold the entire contents of the largest single reactor or connected system that could release simultaneously, plus an allowance for accumulated rainwater or firewater in outdoor installations.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Safety Regulatory |
| **Subcategory** | Emergency Response |
| **Type** | number |
| **Unit** | m³ |
| **Minimum** | 0 |
| **Maximum** | 1000 |

## Typical Values

- **text**: | Scale | Containment Volume | Sizing Basis |
|-------|-------------------|--------------|
| Lab-scale | 1 - 20 L | Drip tray under reactor |
| Bench-scale | 20 - 200 L | Secondary tray or basin |
| Pilot-scale | 200 - 5,000 L | Bunded area or sump |
| Industrial-scale | 5,000 - 100,000 L | Concrete bund or double containment |

**Sizing rules (regulatory standards):**
- US EPA 40 CFR 264.175: 110% of largest single vessel volume
- EU Directive: 110% of largest vessel or 25% of total storage, whichever is greater
- Local building codes may impose additional requirements for outdoor installations
- Indoor installations: must also account for fire suppression water volume

## Measurement Methods

- **1. **Geometric calculation**: Calculate the containment volume from the bund/tray dimensions (length x width x height of walls minus the volume displaced by equipment within the bund).**: 2. **Water fill test**: Fill the containment area with measured volumes of water to verify actual capacity matches design specifications. 3. **Leak test**: Seal all drains and fill containment to design level; monitor for 24 hours to confirm integrity (no leaks through walls, floor, or penetrations). 4. **Freeboard verification**: Measure the distance from the top of the bund wall to the calculated containment liquid level. Minimum freeboard of 150 mm is typically required to prevent overtopping during a spill event.

## Affecting Factors

- **text**: - **Reactor volume**: The primary determinant. Containment must accommodate at least 110% of the largest connected vessel.
- **Number of reactors in the bunded area**: If multiple reactors share a containment area, the volume must account for the largest single vessel plus the displacement volume of all other vessels.
- **Rainfall exposure**: Outdoor bunds accumulate rainwater. Design must include drainage or additional volume for the design rainfall event (e.g., 25-year, 24-hour storm).
- **Chemical hazard classification**: Reactors containing hazardous materials (strong acids/bases, heavy metals) may require double containment or chemically resistant liners.
- **Piping and connections**: Include the liquid volume in connecting pipes that could drain into the bund during a failure.
- **Floor drainage**: Whether floor drains are present and whether they lead to an appropriate treatment system or require isolation valves.
- **Regulatory jurisdiction**: Local environmental regulations may impose specific containment ratios or materials of construction requirements.

## Compatible Systems

Risk Assessment Parameters

## References

1. US EPA. 40 CFR 264.175 - Containment. Environmental Protection Agency.
2. EU Council Directive 96/82/EC (Seveso III Directive) on the control of major-accident hazards.
3. ASME B31.3 - Process Piping. American Society of Mechanical Engineers.
4. HSE (UK). Containment of bulk dangerous substances: Guidance on containment policy. Health and Safety Executive.
5. Logan, B.E. (2008). *Microbial Fuel Cells*. John Wiley & Sons.

---

*Parameter documentation for the MESS (Microbial Electrochemical Systems Standardization) framework.*

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Containment+Volume&body=**Parameter%3A**+Containment+Volume%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Fcontainment-volume.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Containment+Volume&body=**Parameter%3A**+Containment+Volume%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Fcontainment-volume.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Containment+Volume&body=**Parameter%3A**+Containment+Volume%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Fcontainment-volume.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
