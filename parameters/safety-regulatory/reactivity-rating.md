# Reactivity Rating

Reactivity rating assigns a numerical classification to the chemical reactivity hazard of materials and substances associated with a microbial electrochemical system, following the NFPA 704 instability/reactivity rating scale (0-4). This parameter identifies materials that may undergo violent chemical change under specific conditions (heat, shock, contact with water). In MES, reactivity concerns primarily arise from hydrogen gas production (flammable/explosive), strong oxidizers or reducers used as electron mediators, reactive metal catalysts, and concentrated acid/base solutions used for pH adjustment.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Safety Regulatory |
| **Subcategory** | Chemical Hazards |
| **Type** | number |
| **Minimum** | 0 |
| **Maximum** | 4 |

## Typical Values

- **text**: | Material/Substance | NFPA Reactivity | Context in MES |
|-------------------|----------------|----------------|
| Water (electrolyte) | 0 | Stable |
| Sodium acetate (substrate) | 0 | Stable |
| Phosphate buffer | 0 | Stable |
| Hydrogen gas (MEC product) | 0 (but flammable) | Not reactive per se but explosion risk |
| Potassium ferricyanide (mediator) | 1 | Slight reactivity with strong acids |
| Potassium permanganate (oxidizer) | 2 | Moderately reactive, strong oxidizer |
| Sodium borohydride (catalyst prep) | 2 - 3 | Reacts with water, flammable H2 |
| Concentrated H2SO4 (pH adjust) | 2 | Reacts exothermically with water |
| Lithium metal (battery integration) | 3 | Reacts violently with water |
| Sodium metal | 4 | Extremely reactive with water |

**NFPA 704 reactivity scale:**
- 0: Stable even under fire conditions
- 1: Unstable at elevated temperature; slight change
- 2: Violent chemical change at elevated temperature or pressure
- 3: Shock and heat may detonate; add water with caution
- 4: Readily detonates at normal conditions

## Measurement Methods

- **1. **SDS review**: Consult Safety Data Sheets for NFPA 704 reactivity rating (Section 2).**: 2. **Differential scanning calorimetry (DSC)**: Measure onset temperature and energy of exothermic decomposition reactions. 3. **Compatibility testing**: Mix materials pairwise and monitor for heat generation, gas evolution, or color change. 4. **Drop weight impact test**: Test sensitivity to mechanical impact for potentially shock-sensitive materials. 5. **Water reactivity test**: Add small amounts of material to water and observe for heat, gas, or other reactive behavior.

## Affecting Factors

- **text**: - **Concentration**: Dilute solutions are less reactive than concentrated forms.
- **Temperature**: Reactivity generally increases with temperature.
- **Confinement**: Reactive materials in sealed containers pose greater explosion risk.
- **Mixing**: Incompatible chemicals in MES (oxidizers + organics, acids + bases) may react if containment fails.
- **Contamination**: Trace contaminants can catalyze decomposition of otherwise stable materials.

## Compatible Systems

Safety Parameters

## References

1. NFPA 704: Standard System for Identification of Hazards of Materials. National Fire Protection Association.
2. NFPA 30: Flammable and Combustible Liquids Code.
3. Bretherick, L. (2017). *Bretherick's Handbook of Reactive Chemical Hazards* (8th ed.). Academic Press.
4. GHS (Globally Harmonized System). United Nations, 10th edition (2023).
5. US EPA. 40 CFR Part 261: Identification and Listing of Hazardous Waste.

---

*Parameter documentation for the MESS (Microbial Electrochemical Systems Standardization) framework.*

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Reactivity+Rating&body=**Parameter%3A**+Reactivity+Rating%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Freactivity-rating.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Reactivity+Rating&body=**Parameter%3A**+Reactivity+Rating%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Freactivity-rating.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Reactivity+Rating&body=**Parameter%3A**+Reactivity+Rating%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Freactivity-rating.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
