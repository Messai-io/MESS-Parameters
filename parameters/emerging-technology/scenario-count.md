# Scenario Count

Scenario count in microbial electrochemical systems refers to the number of distinct operational, environmental, or economic scenarios evaluated during system design, risk assessment, and techno-economic analysis (TEA), expressed as an integer count. In the context of MES design and scaling, scenario analysis involves systematically varying key assumptions (wastewater composition, temperature range, electricity price, equipment lifetime, performance degradation rate) to assess the robustness of design decisions and economic projections across plausible future conditions.

Scenario-based analysis is essential for MES because these systems operate under considerable uncertainty compared to conventional engineered systems. Biological performance is inherently variable, wastewater characteristics fluctuate temporally, energy markets evolve unpredictably, and the technology itself is still maturing with uncertain long-term performance trajectories. A single-scenario analysis (using only best-estimate parameters) can produce misleadingly precise economic projections that fail to capture the true range of possible outcomes. Multi-scenario analysis provides decision-makers with a more realistic picture of the risks and opportunities associated with MES deployment.

For integrated systems and scale-up decisions, the scenario count determines the comprehensiveness of the analysis and the confidence in the conclusions. Simple analyses may use 3-5 scenarios (optimistic, base case, pessimistic, plus sensitivity extremes), while rigorous assessments employ Monte Carlo simulation with thousands of scenarios sampling from probability distributions of all uncertain parameters. The trade-off is between analytical rigor (more scenarios) and computational cost and interpretability (fewer scenarios). Industry practice for major capital investments typically requires analysis of 50-1000+ scenarios to adequately characterize risk profiles.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Emerging Technology |
| **Subcategory** | Twin Applications |
| **Type** | number |
| **Minimum** | 1 |
| **Maximum** | 1000 |

## Typical Values

- **Valid Range**: 1 to 1,000,000
- **Simple Sensitivity**: 3 to 10 scenarios
- **Structured Scenario Analysis**: 10 to 50 scenarios
- **Design of Experiments**: 27 to 243 scenarios (3^3 to 3^5 factorial)
- **Monte Carlo Simulation**: 1,000 to 100,000 samples
- **Full Stochastic TEA**: 10,000 to 1,000,000 iterations
- **Minimum for Publication-Quality TEA**: 1,000 iterations with convergence check

## Measurement Methods

- **Deterministic Scenario Definition**: 1. Identify the key uncertain parameters affecting MES performance and economics (typically 5-15 parameters). 2. Define plausible ranges for each parameter based on literature data and expert judgment. 3. Create scenario combinations using full factorial, fractional factorial, or Latin hypercube sampling designs. 4. Run the system model or TEA for each scenario combination. 5. The scenario count equals the total number of evaluated combinations.
- **Monte Carlo Simulation**: 1. Define probability distributions (normal, uniform, triangular, log-normal) for each uncertain parameter. 2. Generate random samples from each distribution using appropriate sampling algorithms. 3. Run the model for each sample set to build the output distribution. 4. Determine the required scenario count by running convergence tests: increase sample size until output statistics (mean, standard deviation, percentiles) stabilize within 1-5%. 5. Typically requires 5,000-50,000 samples for stable percentile estimates (P10, P50, P90).
- **Sensitivity-Based Scenario Selection**: 1. Perform a preliminary sensitivity analysis to identify the most influential parameters (tornado diagram). 2. Focus scenario development on the 3-5 most sensitive parameters, reducing the scenario space. 3. Use response surface methodology (RSM) to build surrogate models for rapid scenario evaluation. 4. Validate the surrogate model against a subset of full model runs.

## Affecting Factors

### Primary

- **Number of Uncertain Parameters**: More uncertain parameters require exponentially more scenarios for comprehensive coverage (curse of dimensionality).
- **Analysis Purpose**: Screening analyses need fewer scenarios; investment decisions require more. Regulatory submissions may have specific requirements.
- **Model Complexity and Runtime**: Complex models with long runtimes (hours per scenario) practically limit the scenario count; simple models allow millions of evaluations.
- **Decision Sensitivity**: If the decision is robust across a wide range of scenarios, fewer scenarios suffice. If the decision flips near parameter boundary values, more scenarios are needed for confidence.
- **Parameter Correlation**: Correlated parameters require joint sampling, increasing the effective dimensionality and needed scenario count.
- **Tail Risk Importance**: If extreme outcomes are of concern (regulatory penalties, system failure), more scenarios are needed to adequately sample distribution tails.
- **Stakeholder Requirements**: Different audiences (investors, regulators, operators) may require different scenario counts and types.

## Related Parameters

- **name**: Predictive Horizon

- **relationship**: Scenarios can be structured around different time horizons to capture short-term operational and long-term strategic uncertainties.
- **name**: Scale Cost Factor

- **relationship**: A primary uncertain parameter varied across scenarios in TEA.
- **name**: Scale Efficiency Loss

- **relationship**: Performance degradation during scaling is a key scenario variable.
- **name**: Monitoring Frequency

- **relationship**: Historical monitoring data informs the probability distributions used in scenario generation.
- **name**: Control Effectiveness

- **relationship**: Scenario analysis can evaluate the impact of different control strategies on system performance robustness.

## Compatible Systems

Digital Twin Technology

## References

- Rozendal, R. A., Hamelers, H. V. M., Rabaey, K., Keller, J., & Buisman, C. J. N. (2008). Towards practical implementation of bioelectrochemical wastewater treatment. Trends in Biotechnology, 26(8), 450-459.
- Sleutels, T. H. J. A., Ter Heijne, A., Buisman, C. J. N., & Hamelers, H. V. M. (2012). Bioelectrochemical systems: an outlook for practical applications. ChemSusChem, 5(6), 1012-1019.
- Foley, J. M., Rozendal, R. A., Hertle, C. K., Lant, P. A., & Rabaey, K. (2010). Life cycle assessment of high-rate anaerobic treatment, microbial fuel cells, and microbial electrolysis cells. Environmental Science & Technology, 44(9), 3629-3637.
- Pant, D., Singh, A., Van Bogaert, G., Irving Olsen, S., Singh Nigam, P., Diels, L., & Vanbroekhoven, K. (2012). Bioelectrochemical systems (BES) for sustainable energy production and product recovery from organic wastes and industrial wastewaters. RSC Advances, 2(4), 1248-1263.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Scenario+Count&body=**Parameter%3A**+Scenario+Count%0A**Category%3A**+Emerging+Technology%0A**File%3A**+parameters%2Femerging-technology%2Fscenario-count.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Scenario+Count&body=**Parameter%3A**+Scenario+Count%0A**Category%3A**+Emerging+Technology%0A**File%3A**+parameters%2Femerging-technology%2Fscenario-count.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Scenario+Count&body=**Parameter%3A**+Scenario+Count%0A**Category%3A**+Emerging+Technology%0A**File%3A**+parameters%2Femerging-technology%2Fscenario-count.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
