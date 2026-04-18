# Pathogen Removal

Pathogen removal quantifies the reduction in disease-causing microorganisms (bacteria, viruses, protozoa, helminths) achieved during wastewater treatment in a microbial electrochemical system (MES). Expressed as log removal value (LRV, where 1 log = 90% removal, 2 log = 99%, etc.) or as percentage removal, this parameter is critical for evaluating MES as standalone or integrated wastewater treatment systems, particularly in decentralized applications where treated effluent may be discharged to the environment or reused for irrigation.

MES achieve pathogen removal through multiple mechanisms: anaerobic conditions in the anode chamber that are hostile to many aerobic pathogens, biofilm competition and predation, electrochemical generation of antimicrobial reactive species (H2O2 at the cathode, reactive chlorine species in saline wastewater), pH extremes near electrodes (acidic at the anode, alkaline at the cathode), and physical retention by membranes and biofilm matrices. The combined effect typically achieves 1--3 log removal of indicator organisms (E. coli, total coliforms, fecal coliforms), which is comparable to primary treatment but insufficient for unrestricted reuse without additional disinfection.

Enhanced pathogen removal (3--6 log) has been achieved in MES with intentional electro-disinfection, where elevated current densities generate sufficient reactive species to inactivate pathogens. Operating MFCs with saline wastewater enables electrochlorination at the anode, producing free chlorine that provides residual disinfection.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Application Specific |
| **Subcategory** | Treatment Performance |
| **Type** | number |
| **Unit** | log |
| **Minimum** | 0 |
| **Maximum** | 6 |

## Typical Values

- **Valid Range**: 0 -- 7 LRV
- **Standard MFC (E. coli removal)**: 1 -- 3 LRV
- **Standard MFC (total coliform)**: 1 -- 2.5 LRV
- **MFC with electrochlorination**: 3 -- 6 LRV
- **MEC (cathodic H2O2 production)**: 2 -- 4 LRV
- **Constructed wetland MFC**: 1 -- 3 LRV
- **WHO guideline for irrigation reuse**: >= 3 LRV for E. coli
- **US EPA drinking water standard**: >= 4 LRV for bacteria, >= 6 LRV for viruses
- **Activated sludge (reference)**: 1 -- 2 LRV

## Measurement Methods

- **Indicator Organism Enumeration**: Standard microbiological methods enumerate indicator organisms (E. coli, total coliforms, fecal coliforms, enterococci) in influent and effluent samples. Methods: membrane filtration (APHA 9222D), Colilert (IDEXX), or pour plate. LRV = log10(C_in / C_out). Samples collected in triplicate over multiple batch cycles. Detection limit: 1 CFU/100 mL.
- **Specific Pathogen Detection**: For regulatory compliance, specific pathogens (Cryptosporidium, Giardia, Legionella, Salmonella) may be enumerated using immunomagnetic separation (IMS), qPCR, or cell culture methods. These are more expensive and complex than indicator organism methods.
- **Viral Indicator Testing**: Coliphage (MS2, phiX174) enumeration as viral indicators using the double agar layer method (APHA 9224). Viruses are more resistant to inactivation than bacteria and provide a conservative estimate of disinfection performance.

## Affecting Factors

### Primary

- **HRT**: Longer HRT provides more contact time for pathogen inactivation. Increasing HRT from 6 to 24 h typically improves E. coli removal by 0.5--1 LRV.
- **Current Density**: Higher current densities generate more reactive species. Current densities > 5 A/m^2 enable significant electro-disinfection.
- **Salinity**: Saline wastewater enables electrochlorination at the anode, dramatically enhancing pathogen removal (additional 2--3 LRV at > 5 g/L NaCl).
- **Membrane Presence**: Ion exchange membranes provide physical barrier to pathogens. Pore sizes of 1--10 nm exclude bacteria and most viruses.
- **pH at Cathode**: Alkaline pH (> 10) at the cathode surface contributes to pathogen inactivation in the catholyte.

## Related Parameters

- **name**: [Hydraulic Retention Time](hydraulicretentiontime.md)

- **relationship**: Contact time for inactivation
- **name**: [Wastewater Type](wastewater-type.md)

- **relationship**: Pathogen loading in influent
- **name**: [Wastewater Discharge](wastewater-discharge.md)

- **relationship**: Effluent quality requirements
- **name**: [Temperature](temperature.md)

- **relationship**: Affects pathogen survival rates

## Compatible Systems

Wastewater Treatment Applications

## References

- Li, W.W., Yu, H.Q., He, Z. (2014). "Towards sustainable wastewater treatment by using microbial fuel cells-centered technologies." Energy & Environmental Science, 7(3), 911-924.
- Ieropoulos, I. et al. (2016). "Urine utilisation by microbial fuel cells; energy fuel for the future." Physical Chemistry Chemical Physics, 14(1), 94-98.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Pathogen+Removal&body=**Parameter%3A**+Pathogen+Removal%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fpathogen-removal.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Pathogen+Removal&body=**Parameter%3A**+Pathogen+Removal%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fpathogen-removal.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Pathogen+Removal&body=**Parameter%3A**+Pathogen+Removal%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fpathogen-removal.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
