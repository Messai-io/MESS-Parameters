# Vacuum Compatibility

Vacuum Compatibility assesses whether materials, components, seals, and assemblies used in microbial electrochemical systems (MES) can safely withstand sub-atmospheric pressure conditions without structural failure, outgassing, or loss of containment integrity. This parameter is relevant to MES operations where vacuum conditions arise from gas consumption reactions (H2 or O2 depletion in sealed chambers), sample degassing procedures, vacuum-assisted membrane filtration, vacuum-enhanced microbial fuel cell (MFC) cathode air supply, and analytical instruments (mass spectrometry, electron microscopy) used for MES characterization. Vacuum compatibility is quantified by the maximum differential pressure a component can sustain (typically 0 to -1 atm / 0 to -101.3 kPa gauge), outgassing rate (Torr-L/s/cm2), and leak rate (atm-cc/s or Pa-m3/s).

Safety implications of vacuum incompatibility in MES are severe. Implosion of glass reactor vessels under vacuum can propel glass fragments with lethal force, release biohazardous contents, and disperse pathogenic aerosols. Seal failures under vacuum admit ambient air into anaerobic chambers, potentially creating explosive H2-air mixtures in MECs or destroying obligately anaerobic microbial cultures. Vacuum pump exhaust lines may vent hazardous gases (H2S, VOCs) from MES headspace, requiring scrubbing or containment. Outgassing from polymeric components (plasticizers, residual solvents, adsorbed volatiles) can contaminate sensitive analytical measurements and introduce toxicological concerns in enclosed spaces.

Regulatory standards governing vacuum safety include ASME Boiler and Pressure Vessel Code Section VIII Division 1 (which treats full vacuum as an external pressure load case), OSHA Laboratory Standard (29 CFR 1910.1450) requirements for vacuum system safety in research settings, and CGA P-1 (Safe Handling of Compressed Gases in Containers) for vacuum service. EU Pressure Equipment Directive 2014/68/EU applies to vacuum vessels exceeding specified volume-pressure products.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Application Specific |
| **Subcategory** | Space Environment |
| **Type** | boolean |

## Typical Values

- **Valid Range**: 0 to -101.3 kPa gauge (0 to full vacuum); outgassing rate 10^-4 to 10^-12 Torr-L/s/cm2
- **Typical Range**: -50 to -101.3 kPa for MES vacuum applications

## Measurement Methods

- **Helium Leak Testing (ASTM E499, ASME Section V Article 10)**: 1. Evacuate the MES component or assembly to the target vacuum level using a roughing pump 2. Connect a helium mass spectrometer leak detector (MSLD) to the vacuum side 3. Spray helium gas (tracer) systematically over external joints, seals, and potential leak paths 4. Monitor MSLD response; any detected helium indicates a leak at that location 5. Quantify leak rate in atm-cc/s or Pa-m3/s 6. Acceptance criteria: <10^-8 atm-cc/s for moderate vacuum; <10^-10 atm-cc/s for high vacuum applications
- **Outgassing Rate Measurement (ASTM E595, ECSS-Q-ST-70-02C)**: 1. Condition the test specimen at 125 degC and 10^-5 Torr for 24 hours in a vacuum chamber 2. Measure Total Mass Loss (TML) and Collected Volatile Condensable Materials (CVCM) 3. Acceptance criteria: TML <1.0%, CVCM <0.10% (NASA/ESA outgassing requirements) 4. For MES-specific evaluation: measure outgassing at operating temperature (25-40 degC) with residual gas analyzer (RGA) 5. Identify outgassed species by mass spectrometry to assess toxicological significance
- **Pressure Decay Vacuum Integrity Test**: 1. Evacuate the MES system to the target vacuum level and isolate from the pump 2. Monitor pressure rise over a defined period (minimum 1 hour) using a calibrated vacuum gauge 3. Calculate leak rate: Q = V x (delta_P / delta_t), where V is system volume 4. Acceptable pressure rise rate depends on application: <100 Pa/hour for general MES; <1 Pa/hour for analytical-grade vacuum 5. Perform at commissioning and after any maintenance that disturbs vacuum-wetted joints

## Affecting Factors

### Primary

- **Material Selection**: Metals and glass inherently withstand vacuum better than polymers; polymer creep under sustained vacuum causes progressive seal degradation
- **Temperature**: Higher temperature increases outgassing rates exponentially and reduces polymer seal resilience; thermal cycling creates differential expansion at joints
- **Surface Area and Finish**: Larger internal surface areas contribute more outgassing; polished surfaces outgas less than rough or porous surfaces
- **Seal Design**: O-ring gland geometry, compression ratio (15-25% for vacuum service), and surface finish (Ra <0.8 micrometer) critically determine vacuum integrity
- **Wall Thickness**: Glass and plastic components must have sufficient wall thickness for the pressure differential; minimum wall thickness calculations per ASME BPVC or ASTM standards
- **Vibration**: Mechanical vibration from pumps or mixers can cause progressive seal failure and crack propagation in glass components
- **Chemical Exposure**: Some chemicals (organic solvents, strong oxidizers) cause swelling or degradation of elastomeric seals, compromising vacuum integrity
- **Cycling Frequency**: Repeated vacuum-vent cycles fatigue materials faster than sustained vacuum; design must account for expected cycle count
- **Humidity History**: Adsorbed water on surfaces is the dominant outgassing species; components exposed to humid environments require longer pumpdown times

## Related Parameters

- **name**: Chemical Resistance

- **relationship**: Materials must resist chemical attack while maintaining vacuum integrity; chemical degradation of seals is a common vacuum failure mode
- **name**: Transparency

- **relationship**: Glass and plastic transparent materials used for visual inspection must be rated for vacuum service with appropriate safety shielding
- **name**: Sterilization Method

- **relationship**: Autoclaving imposes positive pressure followed by vacuum during drying phase; materials must withstand both conditions
- **name**: Max Operating Pressure

- **relationship**: Vacuum compatibility is the negative-pressure complement to pressure rating; both must be specified
- **name**: Thermal Cycling

- **relationship**: Temperature changes during vacuum operation cause differential expansion that can compromise seals and joints

## Compatible Systems

Space Applications

## References

- ASME. (2021). Boiler and Pressure Vessel Code, Section VIII, Division 1. American Society of Mechanical Engineers.
- ASTM E499-11(2020). Standard Practice for Leaks Using the Mass Spectrometer Leak Detector in the Detector Probe Mode.
- ASTM E595-15(2021). Standard Test Method for Total Mass Loss and Collected Volatile Condensable Materials from Outgassing in a Vacuum Environment.
- O'Hanlon, J. F. (2003). A User's Guide to Vacuum Technology, 3rd Edition. John Wiley & Sons.
- Jousten, K. (Ed.). (2016). Handbook of Vacuum Technology, 2nd Edition. Wiley-VCH.
- ECSS-Q-ST-70-02C. (2008). Thermal vacuum outgassing test for the screening of space materials. European Cooperation for Space Standardization.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Vacuum+Compatibility&body=**Parameter%3A**+Vacuum+Compatibility%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fvacuum-compatibility.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Vacuum+Compatibility&body=**Parameter%3A**+Vacuum+Compatibility%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fvacuum-compatibility.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Vacuum+Compatibility&body=**Parameter%3A**+Vacuum+Compatibility%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fvacuum-compatibility.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
