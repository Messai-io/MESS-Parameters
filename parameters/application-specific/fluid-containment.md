# Fluid Containment

Fluid containment in microbial electrochemical systems (MES) refers to the engineering measures and infrastructure designed to prevent uncontrolled releases of liquids from MFC, MEC, and MDC reactors and associated process equipment. This parameter encompasses primary containment (reactor vessels, piping, tanks), secondary containment (berms, dikes, lined areas, double-walled tanks), and tertiary containment (site drainage controls, emergency impoundments). Effective fluid containment protects human health, the environment, and downstream infrastructure from exposure to potentially hazardous wastewater and process chemicals.

MES installations handle various fluids that require containment: raw wastewater containing pathogens, heavy metals, and organic pollutants; treated effluent that may not meet all discharge standards during upset conditions; electrolyte solutions containing buffers, nutrients, and salts; chemical reagents for pH adjustment, cleaning, and membrane maintenance; and in some configurations, acids or bases used for cathodic hydrogen recovery. The regulatory framework for fluid containment is defined by environmental regulations (US EPA SPCC rules, EU Environmental Liability Directive), building codes, and industry standards (API 2610, NFPA 30).

Secondary containment capacity requirements typically mandate that containment structures hold at least 110% of the volume of the largest single container or 100% of the largest container plus 10% of the aggregate volume of all other containers within the containment area, whichever is greater. For MES installations treating hazardous industrial wastewater, more stringent containment requirements may apply, including impermeable liners, leak detection systems, and regular integrity testing.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Application Specific |
| **Subcategory** | Microgravity Operation |
| **Type** | select |

## Typical Values

- **Valid Range**: Facility-specific (based on contained volumes)
- **Secondary containment capacity**: >= 110% of largest container volume
- **Freeboard above maximum contained volume**: 150 - 300 mm minimum
- **Containment liner permeability**: <= 1 x 10^-7 cm/s (for hazardous waste)
- **Containment wall height**: 150 - 600 mm (depending on contained volume and area)
- **Reactor vessel wall thickness (typical MES)**: 3 - 12 mm (material-dependent)
- **Pipe pressure rating**: 1.5x maximum operating pressure (minimum)
- **Leak detection sensitivity**: 0.1 - 1.0 L/hr (depending on system)
- **Typical MES reactor volumes**: 0.5 - 5,000 L (lab to full-scale)
- **Chemical storage containment**: 110-150% of stored volume per 40 CFR 264.175
- **Inspection frequency**: Visual daily, formal monthly to annually

## Measurement Methods

- **Containment Integrity Testing**: 1. Conduct hydrostatic pressure testing of primary containment vessels (reactors, tanks) at 1.5x the maximum allowable working pressure per ASME standards. 2. Perform vacuum box testing or liquid penetrant testing on welds and joints. 3. For secondary containment structures (berms, dikes), fill with water to the design capacity and monitor for 24-72 hours to verify zero leakage. 4. For lined containment areas, conduct geomembrane integrity testing using electrical leak location methods (ASTM D7240).
- **Visual Inspection Program**: 1. Establish a scheduled visual inspection program for all containment structures. 2. Inspect for cracks, corrosion, settlement, vegetation intrusion, and accumulated debris in secondary containment areas. 3. Verify that containment drain valves are closed (normally closed position) and functioning. 4. Check pipe supports, flexible connections, and expansion joints for signs of deterioration. 5. Document all inspections with date, inspector, findings, and corrective actions.
- **Leak Detection Monitoring**: 1. Install level sensors in secondary containment sumps to detect accumulation of leaked fluids. 2. Deploy moisture detection cables along pipe runs and beneath tanks. 3. For underground systems, install monitoring wells between primary and secondary containment. 4. Configure automated alerts when leak detection sensors activate.

## Affecting Factors

### Primary

- **Fluid hazard classification**: More hazardous fluids (toxic, corrosive, pathogenic) require more robust containment with higher safety factors.
- **Contained volume**: Larger fluid volumes require proportionally larger secondary containment with greater structural capacity.
- **Regulatory requirements**: Local, state, and national environmental regulations establish minimum containment standards.
- **Material compatibility**: Containment materials must be chemically compatible with the contained fluids. MES systems may involve acidic, alkaline, and biologically active fluids.
- **Climate and weather**: Outdoor installations must account for rainfall ingress into secondary containment (reducing available containment capacity) and freeze-thaw effects on structures.
- **Seismic considerations**: Installations in seismically active areas require containment designed for earthquake loading.
- **Corrosion**: Wastewater and process chemicals can corrode containment structures over time; corrosion allowances and protective coatings must be incorporated.
- **Accessibility**: Containment structures must allow access for maintenance, sampling, and inspection without compromising containment integrity.

## Related Parameters

- **name**: Wastewater Discharge

- **relationship**: Containment failures can result in unauthorized discharges to the environment.
- **name**: Wastewater Type

- **relationship**: The type and hazard level of the wastewater determines containment design requirements.
- **name**: Utility Connections

- **relationship**: Utility penetrations through containment structures must be sealed to maintain integrity.
- **name**: Building Footprint

- **relationship**: Secondary containment area is included in the overall building footprint calculation.
- **name**: Hazard Severity

- **relationship**: The severity of potential environmental or health impacts from a release drives containment design stringency.

## Compatible Systems

Space Applications

## References

- US EPA 40 CFR Part 112. Oil Pollution Prevention (SPCC Rule).
- US EPA 40 CFR Part 264 Subpart J. Tank Systems.
- API 2610 (2005). Design, Construction, Operation, Maintenance, and Inspection of Terminal and Tank Facilities.
- ASTM D7240 (2006). Standard Practice for Leak Location Using Geomembranes with an Insulating Layer in Intimate Contact with a Conductive Layer via Electrical Capacitance Technique.
- EU Directive 2004/35/CE. Environmental Liability with Regard to the Prevention and Remedying of Environmental Damage.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Fluid+Containment&body=**Parameter%3A**+Fluid+Containment%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Ffluid-containment.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Fluid+Containment&body=**Parameter%3A**+Fluid+Containment%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Ffluid-containment.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Fluid+Containment&body=**Parameter%3A**+Fluid+Containment%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Ffluid-containment.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
