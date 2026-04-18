# Corrosivity Class

Corrosivity Class assigns a standardized severity rating to the corrosive environment within and surrounding microbial electrochemical systems (MES), based on the aggressiveness of the electrolyte, atmospheric conditions, and operating parameters. Classified according to ISO 9223 (atmospheric corrosivity categories C1 through CX) and supplemented by NACE International classifications for immersion service, this parameter integrates pH, dissolved oxygen, temperature, chloride concentration, sulfide content, microbial activity, and redox potential into a single hazard designation. Corrosivity class is fundamental to MES safety because it dictates material selection, minimum wall thicknesses, inspection intervals, cathodic protection requirements, and the service life of all wetted components.

In MES environments, corrosivity is exceptionally challenging to manage because the system inherently generates corrosive conditions: anodic biofilms produce organic acids that lower local pH, cathodic reactions generate hydroxide ions and hydrogen gas, sulfate-reducing bacteria (SRB) produce biogenic H2S, and variable redox potentials create galvanic couples. The corrosivity class of an MES installation therefore directly determines the risk of containment failure, leakage of biohazardous material, electrical grounding faults from corroded conductors, and structural compromise of reactor vessels. Underestimating corrosivity class leads to premature failures with potentially catastrophic safety consequences.

Regulatory mandates for corrosion management span multiple jurisdictions: OSHA's mechanical integrity requirements under PSM (29 CFR 1910.119), API Recommended Practices (API RP 580, 581) for risk-based inspection, EPA's Underground Storage Tank regulations (40 CFR 280) for buried MES components, and EU Pressure Equipment Directive (2014/68/EU) requiring corrosion allowance calculations. Insurance underwriters (FM Global, HSB) also require documented corrosivity assessments for coverage of MES installations.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Safety Regulatory |
| **Subcategory** | Chemical Hazards |
| **Type** | select |

## Typical Values

- **Valid Range**: C1 (Very Low) to CX (Extreme) per ISO 9223; or NACE Categories 1-5 for immersion
- **Typical Range**: C3 (Medium) to C5 (Very High) for most MES installations

## Measurement Methods

- **ISO 9223/9226 Environmental Assessment Method**: 1. Deploy standard corrosion coupons (carbon steel, zinc, copper, aluminum per ISO 9226) in the MES environment 2. Expose for minimum 1 year (or accelerated 90-day testing with temperature and humidity cycling) 3. Clean coupons per ISO 8407 (chemical cleaning of corroded test specimens) 4. Determine mass loss gravimetrically and calculate first-year corrosion rate 5. Classify environment according to ISO 9223 Table 1 based on measured corrosion rates 6. Document atmospheric parameters: temperature, relative humidity, SO2 deposition, chloride deposition
- **Electrochemical Assessment (ASTM G59, G102)**: 1. Install a linear polarization resistance (LPR) probe or corrosion rate monitor in the MES electrolyte 2. Measure polarization resistance (Rp) by applying +/- 10 mV perturbation around open circuit potential 3. Calculate instantaneous corrosion rate using the Stern-Geary equation: icorr = B/Rp (where B = 26 mV for active corrosion) 4. Log continuously to capture temporal variations (diurnal, feed-cycle, maintenance events) 5. Integrate over 30-day periods to determine average corrosivity and classify accordingly
- **Microbiologically Influenced Corrosion (MIC) Assessment**: 1. Collect biofilm samples from metallic surfaces using sterile swabs or coupons 2. Quantify sulfate-reducing bacteria (SRB) by most probable number (MPN) method or qPCR 3. Measure localized pH under biofilm using micro-pH electrodes 4. Assess pitting depth by optical profilometry or metallographic sectioning 5. MIC increases effective corrosivity by 1-2 classes above abiotic prediction

## Affecting Factors

### Primary

- **pH**: Each unit decrease below pH 4 approximately doubles the corrosion rate of carbon steel; alkaline conditions (>pH 10) can cause caustic cracking of certain alloys
- **Dissolved Sulfide (H2S)**: Even 1 ppm H2S can increase corrosion rates 10-fold and cause sulfide stress cracking in high-strength steels
- **Chloride Concentration**: Chloride ions breach passive films on stainless steels; pitting threshold for 316L is approximately 1000 mg/L Cl- at 25 degC
- **Temperature**: Corrosion rates increase 2-3x per 20 degC rise in aqueous environments up to ~80 degC, then may decrease due to reduced oxygen solubility
- **Microbial Activity**: SRB, iron-oxidizing bacteria, and acid-producing bacteria create microenvironments 2-4 pH units more aggressive than bulk solution
- **Flow Velocity**: Stagnant zones allow biofilm accumulation and under-deposit corrosion; high velocity causes erosion-corrosion
- **Dissolved Oxygen**: Creates differential aeration cells; fluctuating DO is more corrosive than consistently high or low
- **Galvanic Coupling**: Dissimilar metals (e.g., carbon steel bolts with titanium electrodes) dramatically accelerate corrosion of the anodic material
- **Cyclic Wetting/Drying**: Atmospheric exposure zones experience accelerated corrosion from salt concentration during evaporation

## Related Parameters

- **name**: Chemical Resistance

- **relationship**: Material ratings must meet or exceed the corrosivity class of the operating environment
- **name**: Acid Type

- **relationship**: Specific acids present determine the corrosion mechanism (uniform, pitting, crevice, SCC) and thus the effective corrosivity class
- **name**: Risk Score

- **relationship**: Corrosivity class is a primary input to quantitative risk assessment for MES structural integrity
- **name**: Max Operating Temperature

- **relationship**: Temperature is a key modifier of corrosivity class
- **name**: Stability

- **relationship**: Long-term system stability depends on designing for the correct corrosivity class with appropriate safety margins

## Compatible Systems

Safety Parameters

## References

- ISO 9223:2012. Corrosion of metals and alloys -- Corrosivity of atmospheres -- Classification, determination, and estimation.
- ISO 9226:2012. Corrosion of metals and alloys -- Corrosivity of atmospheres -- Determination of corrosion rate of standard specimens.
- NACE International. (2013). Corrosion Basics: An Introduction, 2nd Edition.
- API RP 581. (2016). Risk-Based Inspection Methodology. American Petroleum Institute.
- Revie, R. W. (Ed.). (2011). Uhlig's Corrosion Handbook, 3rd Edition. John Wiley & Sons.
- Little, B. J., & Lee, J. S. (2007). Microbiologically Influenced Corrosion. John Wiley & Sons.
- Dominguez-Benetton, X., et al. (2018). Metal recovery from wastewater using microbial electrochemical technologies. Frontiers in Microbiology, 9, 2354.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Corrosivity+Class&body=**Parameter%3A**+Corrosivity+Class%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Fcorrosivity-class.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Corrosivity+Class&body=**Parameter%3A**+Corrosivity+Class%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Fcorrosivity-class.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Corrosivity+Class&body=**Parameter%3A**+Corrosivity+Class%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Fcorrosivity-class.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
