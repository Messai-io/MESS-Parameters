# Orp Range

Oxidation-reduction potential (ORP) range specifies the measurement span of the ORP sensor used in MES monitoring, defining the minimum and maximum redox potential values (mV vs reference electrode) that can be accurately quantified. ORP provides a single-value indicator of the overall oxidative or reductive character of the electrolyte, reflecting the balance of all dissolved redox couples. In MES, ORP is a critical diagnostic parameter: highly negative values (below -300 mV vs Ag/AgCl) indicate strongly reducing (anaerobic) conditions favorable for electroactive bacteria at the anode, while positive values (above +200 mV) indicate oxidizing conditions at the cathode.

MES electrolytes exhibit ORP values spanning from -500 mV (strongly reducing anodic environments with active sulfate reduction) to +800 mV (cathode exposed to atmospheric oxygen). The ORP sensor range must cover this full span with adequate resolution and accuracy for meaningful process diagnostics.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Monitoring Control |
| **Subcategory** | Chemical Sensors |
| **Type** | array |
| **Unit** | mV |

## Typical Values

- **Valid Range**: -2000 to +2000 mV (vs Ag/AgCl)
- **Typical MES Range**: -500 to +800 mV
- **MFC anode (anaerobic)**: -400 to -200 mV
- **MFC cathode (aerobic)**: +100 to +400 mV
- **Transition zone (facultative)**: -100 to +100 mV
- **Sulfidogenic conditions**: below -300 mV
- **Methanogenic conditions**: -250 to -400 mV
- **Sensor accuracy**: 1-5 mV
- **Sensor resolution**: 0.1-1 mV

## Measurement Methods

- **Platinum ORP Electrode**: Standard ORP measurement uses a platinum indicator electrode paired with a Ag/AgCl or calomel reference electrode. The potential difference reflects the equilibrium of all redox-active species at the platinum surface according to the Nernst equation. Measurement range of -2000 to +2000 mV with resolution of 0.1-1 mV. Response time depends on the kinetic reversibility of the dominant redox couple (1-60 seconds for fast couples, 10-60 minutes for sluggish systems). Platinum surface cleanliness is critical; biofilm or sulfide coating on the electrode creates mixed potentials that may not reflect bulk solution ORP.
- **Gold ORP Electrode**: Gold ORP electrodes provide faster response and better reproducibility in sulfide-containing MES electrolytes compared to platinum. Gold is less susceptible to sulfide poisoning, maintaining a clean, responsive surface longer between cleanings. The measurement range and accuracy are similar to platinum.
- **Reference Electrode Selection**: The reference electrode determines the absolute potential scale. Ag/AgCl (3M KCl) is standard for laboratory MES research. Calomel (SCE) provides stable reference but contains mercury. For long-term field deployment, solid-state reference electrodes (Ag/AgCl in polymer matrix) provide maintenance-free operation with 2-5 mV drift per year.

## Affecting Factors

### Primary

- **Dominant redox couple**: ORP reflects the most electrochemically active (fastest kinetics) redox couple, which may not be the most abundant. In MES, dissolved oxygen, sulfide/sulfate, iron(II/III), and quinone/hydroquinone couples compete for dominance.
- **pH dependence**: Many redox couples involve protons (e.g., O2/H2O: E = 1.23 - 0.059*pH V vs SHE). ORP decreases approximately 59 mV per pH unit increase for such couples. Reporting ORP at standard pH (Eh at pH 7) enables comparison between systems at different pH values.
- **Temperature**: ORP reference electrodes shift approximately 0.5-1 mV/degree C. Temperature compensation corrects this systematic effect.
- **Electrode fouling**: Biofilm, sulfide precipitate, and organic fouling on the platinum surface shift ORP readings by 10-100 mV. Weekly cleaning with dilute HCl or fine abrasive maintains measurement accuracy.
- **Mixed potentials**: In complex MES electrolytes with multiple redox couples, the measured ORP represents a mixed potential that may not correspond to any single chemical species. ORP is therefore a qualitative indicator rather than a quantitative measure of any specific redox species.

## Compatible Systems

Sensor Specifications

## References

- Bard, A. J., & Faulkner, L. R. (2001). *Electrochemical Methods* (2nd ed.). Wiley.
- APHA (2017). *Standard Methods for the Examination of Water and Wastewater* (23rd ed.). Method 2580.
- Logan, B. E., et al. (2006). Microbial fuel cells: Methodology and technology. *Environmental Science & Technology*, 40(17), 5181-5192.
- Stumm, W., & Morgan, J. J. (1996). *Aquatic Chemistry* (3rd ed.). Wiley.
- Rabaey, K., & Rozendal, R. A. (2010). Microbial electrosynthesis. *Nature Reviews Microbiology*, 8(10), 706-716.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Orp+Range&body=**Parameter%3A**+Orp+Range%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Forp-range.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Orp+Range&body=**Parameter%3A**+Orp+Range%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Forp-range.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Orp+Range&body=**Parameter%3A**+Orp+Range%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Forp-range.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
