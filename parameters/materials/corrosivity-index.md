# Corrosivity Index

Corrosivity quantifies the tendency of electrolyte solutions to cause
electrochemical corrosion of metal components in microbial electrochemical
systems. This parameter affects material selection, system longevity, and
maintenance requirements. Understanding corrosivity is crucial for designing
durable systems and preventing premature component failure.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Materials |
| **Type** | number |

## Typical Values

- **Range**: 0.1 - 100 mm/year
- **Typical**: 0.5 - 10 mm/year
- **Optimal**: <2 mm/year
- **Performance Categories**: - **Low Performance**: >20 mm/year (highly corrosive, rapid degradation)
- **Moderate Performance**: 5 - 20 mm/year (moderately corrosive)
- **High Performance**: 1 - 5 mm/year (mildly corrosive)
- **Exceptional Performance**: <1 mm/year (minimally corrosive)

## Measurement Methods

- **Direct Measurement**: 1. **Weight Loss Method**:     - Expose metal coupons to electrolyte    - Measure weight loss over time    - Calculate corrosion rate: CR = 87.6 × W/(D × A × T)    - Where W = weight loss (mg), D = density (g/cm³), A = area (cm²), T = time      (h)  2. **Linear Polarization Resistance**:     - Apply small potential perturbation    - Measure current response    - Calculate: CR = B/(Rp × ρ)    - Faster than weight loss method  3. **Electrochemical Impedance Spectroscopy**:    - Apply AC voltage across frequency range    - Extract charge transfer resistance    - Calculate corrosion current and rate    - Provides mechanistic information
- **Calculation Considerations**: - Temperature correction: Rate doubles per 10°C typically - Account for galvanic effects between different metals - Consider crevice and pitting corrosion modes

## Affecting Factors

### Primary

- **Electrolyte Composition**: - Chloride concentration: Increases corrosivity    - pH: Low pH increases corrosion rate    - Dissolved oxygen: Promotes cathodic reactions    - Conductivity: Higher conductivity increases corrosion
- **Environmental Conditions**: - Temperature: Higher temperature increases corrosion    - Flow velocity: Can increase or decrease corrosion    - Pressure: Generally minimal effect    - Biofilm presence: Can inhibit or accelerate corrosion
- **Material Properties**: - Alloy composition: Affects corrosion resistance    - Surface finish: Smoother surfaces less prone to corrosion    - Stress levels: Stress corrosion cracking possible    - Protective coatings: Reduce corrosion rates
- **Biological Activity**: - Microbiologically influenced corrosion (MIC)    - pH changes from microbial metabolism    - Biofilm protective effects    - Biogenic acid production
- **System Design**: - Galvanic coupling between dissimilar metals    - Crevice formation and stagnant areas    - Cathodic protection effectiveness    - Ventilation and moisture control

## Performance Impact

**Formula**: Corrosion Rate = K × i_corr / (n × ρ)

Where K = constant, i_corr = corrosion current density, n = electrons per metal
atom, ρ = metal density. High corrosivity (>10 mm/year) leads to rapid component
failure and increased maintenance costs. Low corrosivity (<2 mm/year) enables
long-term system operation.

## Compatible Systems

Chemical Properties

## References

1. **Fontana, M.G. & Greene, N.D.** (1986). "Corrosion Engineering, 3rd
   Edition". McGraw-Hill, New York.

   - Comprehensive corrosion theory and measurement

2. **Videla, H.A.** (1996). "Manual of Biocorrosion". CRC Press, Boca Raton, FL.

   - Microbiologically influenced corrosion

3. **Logan, B.E.** (2008). "Microbial fuel cells". John Wiley & Sons, Hoboken,
   NJ.
   - Material considerations in bioelectrochemical systems

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Corrosivity+Index&body=**Parameter%3A**+Corrosivity+Index%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fcorrosivity-index.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Corrosivity+Index&body=**Parameter%3A**+Corrosivity+Index%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fcorrosivity-index.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Corrosivity+Index&body=**Parameter%3A**+Corrosivity+Index%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fcorrosivity-index.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
