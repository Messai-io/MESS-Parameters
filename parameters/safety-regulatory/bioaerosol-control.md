# Bioaerosol Control

Bioaerosol control in microbial electrochemical systems (MES) refers to the measures, technologies, and operational practices employed to minimize the generation, release, and exposure to airborne biological particles originating from MFC, MEC, and MDC reactors and their associated processes. Bioaerosols include bacteria, fungi, endotoxins, cell fragments, and volatile organic compounds of biological origin that can become aerosolized during wastewater handling, reactor maintenance, sludge processing, and effluent management.

MES installations treating wastewater are inherently associated with bioaerosol generation because the influent contains diverse microbial populations, and the bioelectrochemical process itself cultivates dense biofilms on electrode surfaces. Activities such as reactor opening for maintenance, anode or cathode replacement, membrane cleaning, sampling, and sludge removal can release bioaerosols. The electrogenic biofilm communities in MES anodes (dominated by Geobacter, Shewanella, and related species) are generally not pathogenic, but wastewater influent may contain enteric pathogens, antibiotic-resistant bacteria, and opportunistic pathogens.

Bioaerosol control is regulated under occupational health and safety frameworks (OSHA, EU-OSHA) and may be subject to environmental air quality regulations. Control strategies include engineering controls (enclosures, ventilation, UV disinfection), administrative controls (work procedures, exposure time limits), and personal protective equipment (respiratory protection). The effectiveness of bioaerosol control is quantified through air sampling, exposure assessment, and comparison against occupational exposure limits.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Safety Regulatory |
| **Subcategory** | Biological Safety |
| **Type** | boolean |

## Typical Values

- **Valid Range**: Qualitative (control strategy classification) and quantitative (exposure levels)
- **Background outdoor bioaerosol levels**: 100 - 1,000 CFU/m3
- **Wastewater treatment plant bioaerosol levels**: 1,000 - 100,000 CFU/m3 (depending on process type and enclosure)
- **Occupational exposure limits for endotoxins**: 90 EU/m3 (Dutch Health Council recommendation)
- **Total bacteria exposure guideline**: < 10,000 CFU/m3 (various national guidelines)
- **Gram-negative bacteria guideline**: < 1,000 CFU/m3
- **Enclosed MES reactor bioaerosol emissions**: 50 - 500 CFU/m3 (with proper containment)
- **Open MES reactor bioaerosol emissions**: 1,000 - 50,000 CFU/m3 (highly variable)
- **Ventilation air change rate for MES facilities**: 6 - 12 ACH (air changes per hour)

## Measurement Methods

- **Active Air Sampling**: 1. Use a calibrated impaction air sampler (e.g., Andersen six-stage viable impactor or slit-to-agar sampler) positioned at the breathing zone height (1.5 m). 2. Sample onto appropriate culture media: trypticase soy agar (TSA) for total bacteria, malt extract agar (MEA) for fungi. 3. Collect samples for defined durations (typically 1-10 minutes at 28.3 L/min for Andersen impactors). 4. Incubate plates at 37 degC (bacteria) or 25 degC (fungi) for 24-72 hours and count colony-forming units. 5. Express results as CFU/m3 of air sampled.
- **Endotoxin Measurement**: 1. Collect air samples using glass fiber filters in personal or area samplers at a known flow rate (2-4 L/min for 4-8 hours). 2. Extract endotoxins from filters using pyrogen-free water. 3. Analyze extracts using the kinetic turbidimetric Limulus Amebocyte Lysate (LAL) assay per EPA/600/R-14/387. 4. Report results in Endotoxin Units per cubic meter (EU/m3).
- **Real-Time Bioaerosol Monitoring**: 1. Deploy real-time bioaerosol monitors (e.g., UV-APS, WIBS) for continuous monitoring of fluorescent biological aerosol particles. 2. Set size range for detection (typically 0.5-15 micrometers). 3. Correlate real-time particle counts with culture-based measurements for calibration. 4. Use continuous data for identifying peak emission events during specific MES operations.

## Affecting Factors

### Primary

- **Reactor configuration**: Open-air MES reactors generate significantly more bioaerosols than enclosed or sealed systems. Pressurized systems minimize release.
- **Wastewater characteristics**: Higher microbial loads in the influent increase bioaerosol potential. Industrial wastewater may contain fewer pathogens than municipal wastewater.
- **Mechanical agitation**: Aeration, mixing, pumping, and spraying operations near MES reactors generate aerosols from contaminated liquids.
- **Ventilation design**: Properly designed local exhaust ventilation and general dilution ventilation significantly reduce bioaerosol concentrations in occupied spaces.
- **Temperature and humidity**: Higher temperatures and lower humidity increase bioaerosol dispersion distances; higher humidity promotes settling.
- **Maintenance activities**: Reactor opening, electrode replacement, and membrane cleaning are peak bioaerosol generation events.
- **Season**: Warmer seasons typically exhibit higher bioaerosol levels due to enhanced microbial activity and more open-air operations.
- **Wind conditions**: Outdoor MES installations experience wind-driven bioaerosol dispersion that varies with local meteorology.

## Related Parameters

- **name**: Biosafety Level

- **relationship**: The biosafety level classification determines the minimum engineering controls required for bioaerosol containment.
- **name**: Pathogen Reduction

- **relationship**: Effective bioaerosol control is related to pathogen reduction in the liquid process stream.
- **name**: Pathogen Removal

- **relationship**: Log removal of pathogens in MES effluent affects the hazard level of bioaerosols generated from treated effluent.
- **name**: Particulate Limit

- **relationship**: Airborne particulate limits may include biological particles as a subset of total particulates.
- **name**: VOC Emission Limit

- **relationship**: Volatile organic compounds of microbial origin may co-occur with bioaerosols.

## Compatible Systems

Safety Parameters

## References

- Sanchez-Monedero, M.A. et al. (2008). Bioaerosol generation at large and small-scale composting facilities. Journal of the Air & Waste Management Association, 58, 831-838.
- Douwes, J. et al. (2003). Bioaerosol health effects and exposure assessment. Annals of Occupational Hygiene, 47(3), 187-200.
- NIOSH (2013). Criteria for a Recommended Standard: Occupational Exposure to Endotoxins. DHHS (NIOSH) Publication.
- EU-OSHA (2007). Expert forecast on emerging biological risks related to occupational safety and health.
- Teixeira, J.V. et al. (2013). Bioaerosol emissions from wastewater treatment processes. Aerobiologia, 29, 469-477.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Bioaerosol+Control&body=**Parameter%3A**+Bioaerosol+Control%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Fbioaerosol-control.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Bioaerosol+Control&body=**Parameter%3A**+Bioaerosol+Control%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Fbioaerosol-control.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Bioaerosol+Control&body=**Parameter%3A**+Bioaerosol+Control%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Fbioaerosol-control.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
