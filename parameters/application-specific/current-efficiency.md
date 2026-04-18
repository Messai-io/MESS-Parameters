# Current Efficiency

Current efficiency quantifies the percentage of current that contributes to the
desired electrochemical reaction versus total current flow in microbial
electrochemical systems. This parameter indicates how effectively electrons are
utilized for target reactions rather than side reactions or losses. High current
efficiency maximizes productive current utilization.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Application Specific |
| **Subcategory** | MDC Operation |
| **Type** | number |
| **Unit** | % |
| **Minimum** | 50 |
| **Maximum** | 100 |
| **Papers Reporting** | 17 |

## Typical Values

- **Range**: 10 - 95%
- **Typical**: 40 - 80%
- **Optimal**: 70 - 90%
- **Performance Categories**: - **Low Performance**: <40% (significant losses to side reactions)
- **Moderate Performance**: 40 - 60% (moderate efficiency)
- **High Performance**: 60 - 80% (good efficiency)
- **Exceptional Performance**: >80% (excellent efficiency)

## Measurement Methods

- **Direct Measurement**: 1. **Product Analysis**:     - Measure actual product formation    - Calculate theoretical product from current    - Efficiency = (Actual product / Theoretical product) × 100%    - Requires accurate product quantification  2. **Coulometric Analysis**:    - Integrate current over time    - Compare with stoichiometric requirements    - Account for competing reactions    - Use Faraday's law calculations
- **Calculation Considerations**: - Account for all significant side reactions - Consider background current contributions - Use appropriate time intervals for integration - Validate with independent product measurements

## Affecting Factors

### Primary

- **Electrode Selectivity**: - Catalyst specificity for target reactions    - Surface properties affecting reaction pathways    - Electrode material influences selectivity    - Operating potential affects reaction selectivity
- **Competing Reactions**: - Oxygen evolution at anode (in aerobic systems)    - Hydrogen evolution at cathode    - Methanogenesis competing with electricity generation    - Non-productive microbial metabolism
- **Operating Conditions**: - Current density affects efficiency    - Temperature influences reaction kinetics    - pH affects reaction thermodynamics    - Substrate concentration impacts efficiency
- **System Design**: - Electrode spacing affects current distribution    - Flow patterns influence mass transport    - Separator properties in dual-chamber systems    - Gas management affects competing reactions
- **Biological Factors**: - Microbial community composition    - Biofilm development stage    - Metabolic pathway efficiency    - Substrate utilization patterns

## Performance Impact

**Formula**: η_current = (n_product × F × N_product) / (I × t) × 100%

Where n = electrons per product molecule, F = Faraday constant, N = moles
product, I = current, t = time. Higher current efficiency indicates better
utilization of electrical energy and reduced losses to unproductive reactions.

## Compatible Systems

Desalination Applications

## References

1. **Logan, B.E.** (2008). "Microbial fuel cells". John Wiley & Sons, Hoboken,
   NJ.

   - Current efficiency considerations in bioelectrochemical systems

2. **Rabaey, K., et al.** (2003). "A microbial fuel cell capable of converting
   glucose to electricity at high rate and efficiency". _Biotechnology Letters_,
   25(18), 1531-1535.

   - Current efficiency optimization

3. **Rozendal, R.A., et al.** (2006). "Principle and perspectives of hydrogen
   production through biocatalyzed electrolysis". _International Journal of
   Hydrogen Energy_, 31(12), 1632-1640.
   - Current efficiency in microbial electrolysis cells

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Current+Efficiency&body=**Parameter%3A**+Current+Efficiency%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fcurrent-efficiency.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Current+Efficiency&body=**Parameter%3A**+Current+Efficiency%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fcurrent-efficiency.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Current+Efficiency&body=**Parameter%3A**+Current+Efficiency%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fcurrent-efficiency.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
