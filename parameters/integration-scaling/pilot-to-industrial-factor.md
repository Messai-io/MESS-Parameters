# Pilot To Industrial Factor

The pilot-to-industrial factor (also called scale-up factor or scaling multiplier) is the dimensionless ratio used to estimate the cost, performance, or capacity of a full-scale industrial MES from pilot-scale data. This empirical multiplier accounts for the non-linear effects of scaling including economy of scale in equipment procurement, increased engineering and installation complexity, performance degradation at larger scale, and additional auxiliary systems required for full-scale operation.

In MES technology, the pilot-to-industrial factor is applied to multiple parameters: capital cost (cost_industrial = cost_pilot * scaling_factor * (capacity_industrial / capacity_pilot)^n, where n is the scaling exponent, typically 0.6--0.8), performance (power density typically decreases by 20--50% from pilot to industrial due to increased electrode spacing and non-ideal flow distribution), and operating costs (labor, chemicals, and energy often benefit from economies of scale with factors of 0.7--0.9 per 10x capacity increase).

The factor is highly uncertain for MES because very few industrial-scale installations exist. Most techno-economic analyses rely on analogies from related technologies (electrodialysis, membrane bioreactors, conventional wastewater treatment) where the six-tenths rule (n = 0.6) is a commonly used cost scaling exponent, meaning that a 10x increase in capacity increases cost by only 10^0.6 = 4x.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Integration Scaling |
| **Subcategory** | Scale Transitions |
| **Type** | number |
| **Minimum** | 10 |
| **Maximum** | 1000 |

## Typical Values

- **Valid Range**: 0.1 -- 10
- **Capital cost scaling exponent (n)**: 0.6 -- 0.8 (six-tenths to eight-tenths rule)
- **Performance degradation factor**: 0.3 -- 0.8 (industrial achieves 30--80% of pilot performance)
- **Labor scaling factor**: 0.5 -- 0.7 per 10x capacity increase
- **Chemical/consumable scaling**: 0.9 -- 1.0 (nearly linear)
- **Engineering cost factor**: 10 -- 20% of equipment cost at industrial scale
- **Contingency factor**: 15 -- 30% of estimated industrial cost

## Measurement Methods

- **Analogous Technology Benchmarking**: Scaling factors are derived from technologies with established scale-up histories: conventional activated sludge (well-characterized n = 0.6--0.7), membrane bioreactors (n = 0.7--0.8), and electrodialysis (n = 0.65--0.75). The most analogous technology is selected based on process similarity.
- **Multi-Scale Performance Comparison**: Performance data from lab (mL), bench (L), and pilot (10--1000 L) scales are plotted to identify the scaling trend. Extrapolation to industrial scale uses the observed degradation rate. A minimum of 3 scales spanning 2 orders of magnitude is needed for meaningful extrapolation.

## Affecting Factors

### Primary

- **Numbering-Up vs. Scaling-Up**: Numbering-up (replicating identical modules) has a factor near 1.0 for performance but higher cost (limited economy of scale). Scaling-up (larger single reactors) has lower cost but significant performance degradation.
- **Technology Maturity**: Early-stage technologies have higher uncertainty (factor range 0.5--2x). Mature technologies converge to narrower ranges.
- **Local Cost Factors**: Labor rates, material costs, and construction practices vary by region, affecting the industrial cost estimate by +/- 30--50%.
- **Auxiliary Systems**: Industrial installations require equalization tanks, chemical dosing, sludge handling, odor control, and monitoring systems not present at pilot scale, adding 30--50% to total cost.

## Related Parameters

- **name**: [Module Size](module-size.md)

- **relationship**: Unit size for numbering-up
- **name**: [Modules Per System](modules-per-system.md)

- **relationship**: Total modules at industrial scale
- **name**: [Total Capital Cost](../economic/total-capital-cost.md)

- **relationship**: Industrial capital cost estimate
- **name**: [Specific Capital Cost](../economic/specific-capital-cost.md)

- **relationship**: Normalized cost
- **name**: [Reactor Count](reactor-count.md)

- **relationship**: Number of reactors at scale

## Compatible Systems

Multi Scale Integration

## References

- Ge, Z., He, Z. (2016). "Long-term performance of a 200 liter modularized microbial fuel cell system treating municipal wastewater." Bioresource Technology, 218, 38-44.
- Peters, M.S., Timmerhaus, K.D., West, R.E. (2003). Plant Design and Economics for Chemical Engineers, 5th ed. McGraw-Hill.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Pilot+To+Industrial+Factor&body=**Parameter%3A**+Pilot+To+Industrial+Factor%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fpilot-to-industrial-factor.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Pilot+To+Industrial+Factor&body=**Parameter%3A**+Pilot+To+Industrial+Factor%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fpilot-to-industrial-factor.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Pilot+To+Industrial+Factor&body=**Parameter%3A**+Pilot+To+Industrial+Factor%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fpilot-to-industrial-factor.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
