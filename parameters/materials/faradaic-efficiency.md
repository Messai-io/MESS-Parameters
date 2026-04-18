# Faradaic Efficiency

Faradaic efficiency quantifies the percentage of electrons transferred through
the external circuit relative to the theoretical maximum based on substrate
oxidation in microbial electrochemical systems. This parameter measures how
effectively the system converts substrate-derived electrons into electrical
current, excluding losses to competing metabolic processes like methanogenesis
or side reactions.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Materials |
| **Type** | number |
| **Unit** | % |
| **Papers Reporting** | 165 |

## Typical Values

- **Range**: 10 - 95 %
- **Typical**: 40 - 70 %
- **Optimal**: 70 - 85 %
- **Performance Categories**: - **Low Performance**: <30% (significant competing processes)
- **Moderate Performance**: 30 - 50% (mixed electron pathways)
- **High Performance**: 50 - 80% (efficient electron capture)
- **Exceptional Performance**: >80% (optimized systems)

## Measurement Methods

- **Direct Measurement**: 1. **Coulombic Accounting**:     - Measure total charge transferred: Q = ∫I dt    - Calculate theoretical charge from substrate: Qtheo = n·F·Δsubstrate/MW    - Faradaic efficiency = (Q/Qtheo) × 100%    - Account for biomass formation  2. **Mass Balance Approach**:    - Monitor substrate consumption and products    - Account for all electron pathways    - Include methanogenesis, sulfate reduction    - Balance electron donors and acceptors
- **Calculation Considerations**: - Use chemical oxygen demand (COD) for complex substrates - Account for background current and losses - Consider electrode corrosion effects

## Affecting Factors

### Primary

- **Microbial Community**: - Electroactive bacteria: 70-95% efficiency    - Mixed communities: 30-70% efficiency    - Methanogenic communities: 10-40% efficiency
- **Substrate Type**: - Simple organics (acetate): 80-95%    - Complex organics: 40-70%    - Wastewaters: 20-50%
- **System Design**: - Single chamber: 40-70%    - Dual chamber: 50-80%    - Optimized configurations: 70-90%
- **pH**: - Optimal pH (6.5-7.5): Maximum efficiency    - Acidic conditions favor fermentation    - Basic conditions reduce proton availability
- **Temperature**: - Optimal temperature: Peak efficiency    - Low temperature: Reduced kinetics    - High temperature: Increased competing processes

## Performance Impact

**Formula**: ηF = (8 × I × t)/(F × COD × V) × 100%

Where: I = current (A), t = time (s), F = Faraday constant, COD = chemical
oxygen demand (g/L), V = volume (L)

High faradaic efficiency indicates effective substrate-to-electricity
conversion. Systems with >70% efficiency typically demonstrate stable long-term
performance and high power output sustainability.

## Compatible Systems

Efficiency

## References

1. **Logan, B.E., et al.** (2006). "Electricity generation from cysteine in a
   microbial fuel cell". _Water Research_, 40(14), 2799-2808.

   - Detailed faradaic efficiency calculations and optimization

2. **Liu, H. & Logan, B.E.** (2004). "Electricity generation using an
   air-cathode single chamber microbial fuel cell". _Environmental Science &
   Technology_, 38(14), 4040-4046.

   - Efficiency improvements through system design

3. **Rabaey, K., et al.** (2003). "A microbial fuel cell capable of converting
   glucose to electricity at high rate and efficiency". _Biotechnology Letters_,
   25(18), 1531-1535.
   - Achievement of high faradaic efficiency in optimized systems

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Faradaic+Efficiency&body=**Parameter%3A**+Faradaic+Efficiency%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Ffaradaic-efficiency.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Faradaic+Efficiency&body=**Parameter%3A**+Faradaic+Efficiency%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Ffaradaic-efficiency.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Faradaic+Efficiency&body=**Parameter%3A**+Faradaic+Efficiency%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Ffaradaic-efficiency.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
