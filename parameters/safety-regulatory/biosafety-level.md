# Biosafety Level

Biosafety level (BSL) in the context of microbial electrochemical systems (MES) refers to the set of biocontainment precautions, engineering controls, and operational practices required to safely handle the biological agents present in MFC, MEC, and MDC systems. The biosafety level classification determines facility design requirements, personal protective equipment, waste treatment protocols, and operational procedures necessary to protect workers, the community, and the environment from exposure to potentially hazardous microorganisms.

MES systems treating wastewater inherently contain diverse microbial communities that may include pathogenic bacteria, viruses, and parasites originating from the influent waste stream. While the electrogenic microorganisms that form anode biofilms (e.g., Geobacter sulfurreducens, Shewanella oneidensis) are generally classified as BSL-1 organisms, wastewater influent may contain BSL-2 organisms such as Salmonella, pathogenic E. coli, Legionella, enteric viruses (norovirus, hepatitis A), and parasites (Cryptosporidium, Giardia). The overall biosafety classification of an MES installation depends on the highest-risk organism expected to be present.

Most wastewater-treating MES installations operate under BSL-2 equivalent containment, consistent with standard wastewater treatment plant safety practices. Research MES systems using defined cultures of non-pathogenic electrogenic bacteria on synthetic media typically operate at BSL-1. Specialized applications involving genetically modified organisms or handling of high-risk waste streams may require BSL-2+ or BSL-3 containment measures.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Safety Regulatory |
| **Subcategory** | Biological Safety |
| **Type** | select |

## Typical Values

- **Valid Range**: BSL-1 through BSL-4 (categorical)
- **MES research with defined cultures (synthetic media)**: BSL-1
- **MES treating municipal wastewater**: BSL-2
- **MES treating hospital wastewater**: BSL-2 or BSL-2+
- **MES treating agricultural wastewater**: BSL-2
- **MES with genetically modified electrogenic organisms**: BSL-2 (with IBC approval)
- **MES treating industrial wastewater (non-biological)**: BSL-1 to BSL-2 (depending on influent)
- **Typical wastewater treatment plants**: BSL-2 equivalent practices

## Measurement Methods

- **Risk Assessment and Classification**: 1. Identify all biological agents expected in the MES influent, process, and effluent streams using literature review and, if needed, microbiological characterization. 2. Classify each identified agent according to its risk group (RG1-RG4) per WHO Laboratory Biosafety Manual or NIH Guidelines. 3. Assess the overall biosafety level required based on the highest-risk agent, considering the nature of the work (e.g., potential for aerosol generation, volume of material handled). 4. Document the risk assessment and obtain approval from the institutional biosafety committee (IBC) or equivalent authority.
- **Facility Verification**: 1. Inspect the MES facility against the requirements for the designated biosafety level per CDC/NIH Biosafety in Microbiological and Biomedical Laboratories (BMBL), 6th Edition. 2. Verify engineering controls: BSL-1 requires open bench work with standard microbiological practices; BSL-2 adds biosafety cabinets, limited access, and specific decontamination procedures; BSL-3 adds HEPA filtration, negative pressure, and sealed entries. 3. Confirm availability and adequacy of personal protective equipment appropriate to the biosafety level. 4. Verify waste treatment and decontamination capabilities (autoclaving, chemical disinfection, UV treatment).
- **Ongoing Compliance Monitoring**: 1. Conduct annual biosafety audits against the designated BSL requirements. 2. Review and update the biological risk assessment when influent sources change or new organisms are identified. 3. Monitor worker health surveillance programs as required for BSL-2 and above. 4. Maintain training records for all personnel with access to the MES facility.

## Affecting Factors

### Primary

- **Influent source**: Municipal wastewater contains diverse enteric pathogens (BSL-2), while synthetic laboratory media may only contain BSL-1 organisms.
- **Organism risk group**: The highest-risk organism in the system determines the minimum BSL. Genetically modified organisms may require additional containment.
- **Process scale**: Larger volumes of contaminated material increase exposure risk and may require enhanced containment measures within a given BSL.
- **Aerosol generation potential**: MES operations that generate aerosols (mixing, pumping, sampling, reactor opening) increase exposure risk and may elevate containment requirements.
- **Effluent treatment**: If MES effluent undergoes disinfection before discharge, the downstream biosafety risk is reduced.
- **Worker population**: Immunocompromised workers or visitors may require enhanced protection beyond standard BSL requirements.
- **Geographic location**: Endemic diseases in the region may introduce specific pathogens into the wastewater stream, affecting the risk assessment.
- **Regulatory framework**: National and local regulations may impose specific biosafety requirements for wastewater handling facilities.

## Related Parameters

- **name**: Bioaerosol Control

- **relationship**: Biosafety level determines the required engineering controls for bioaerosol containment and exposure mitigation.
- **name**: Pathogen Removal

- **relationship**: Log removal values for pathogens through the MES process affect the residual biological risk in the effluent.
- **name**: Pathogen Reduction

- **relationship**: Overall pathogen reduction efficiency influences the biosafety requirements for effluent handling and disposal.
- **name**: Hazard Severity

- **relationship**: Biological hazard severity is a key input to the biosafety level classification.
- **name**: Certification Required

- **relationship**: Some biosafety levels require facility certification by regulatory authorities before operations can commence.

## Compatible Systems

Safety Parameters

## References

- CDC/NIH (2020). Biosafety in Microbiological and Biomedical Laboratories (BMBL), 6th Edition. HHS Publication No. (CDC) 300859.
- WHO (2004). Laboratory Biosafety Manual, 3rd Edition. World Health Organization.
- NIH (2019). NIH Guidelines for Research Involving Recombinant or Synthetic Nucleic Acid Molecules.
- OSHA 29 CFR 1910.1030. Bloodborne Pathogens Standard (applicable to wastewater workers).
- Pepper, I.L. et al. (2006). Environmental Microbiology, 2nd Edition. Academic Press.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Biosafety+Level&body=**Parameter%3A**+Biosafety+Level%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Fbiosafety-level.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Biosafety+Level&body=**Parameter%3A**+Biosafety+Level%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Fbiosafety-level.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Biosafety+Level&body=**Parameter%3A**+Biosafety+Level%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Fbiosafety-level.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
