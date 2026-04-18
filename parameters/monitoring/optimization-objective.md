# Optimization Objective

Optimization objective defines the target function that the MES control and optimization system seeks to maximize or minimize. The objective encapsulates the operational goal as a mathematical expression of measurable process variables, enabling algorithmic optimization. Common MES objectives include: maximum power density (W/m^2 or W/m^3), maximum coulombic efficiency (%), minimum energy input per unit treatment (kWh/m^3), maximum hydrogen production rate (m^3-H2/m^3/day), maximum COD removal rate, and economic objectives (revenue minus operating cost). Multi-objective optimization addresses competing goals through Pareto frontier identification.

The choice of optimization objective fundamentally determines MES operating strategy. Maximizing power output typically requires moderate organic loading, short HRT, and high electrolyte conductivity. Maximizing treatment efficiency (COD removal) favors longer HRT and lower loading. Maximizing economic return considers electricity/hydrogen revenue, substrate cost, and capital amortization. These objectives often conflict, requiring explicit prioritization or multi-objective approaches.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Monitoring Control |
| **Subcategory** | Optimization Algorithms |
| **Type** | select |

## Typical Values

- **Maximum power density**: 0.1-10 W/m^2 (normalized to anode area)
- **Maximum volumetric power**: 1-1000 W/m^3
- **Maximum coulombic efficiency**: 10-90% depending on system type
- **Maximum H2 production**: 0.1-6 m^3-H2/m^3/day (MEC)
- **Minimum energy for treatment**: 0.1-2 kWh/m^3
- **Maximum COD removal**: 70-99%
- **Economic objective**: Net present value, levelized cost of treatment

## Measurement Methods

- **Objective Function Formulation**: The optimization objective is expressed as f(x, u, d) where x is the system state (biofilm activity, electrolyte composition), u is the vector of manipulated variables (Rext, Vapp, Q, aeration), and d is disturbances (feed composition, temperature). Constraints g(x,u) less than or equal to 0 define operational boundaries. The formulation must be differentiable for gradient-based methods or at least evaluable for derivative-free methods.
- **Performance Mapping**: Systematic variation of operating parameters with measurement of the objective function creates response surface maps revealing the objective landscape. Design of experiments (DOE) methods (central composite, Box-Behnken) efficiently characterize the response surface with minimal experiments.
- **Pareto Frontier Identification**: For multi-objective problems, the set of non-dominated solutions (Pareto frontier) is identified using multi-objective evolutionary algorithms (NSGA-II, MOEA/D). The Pareto frontier reveals the trade-offs between competing objectives, enabling informed decision-making about operational priorities.

## Affecting Factors

### Primary

- **Stakeholder priorities**: Research labs prioritize fundamental understanding (maximize CE, characterize limitations). Water utilities prioritize treatment quality (maximize COD removal, meet discharge limits). Energy companies prioritize energy recovery (maximize power/H2).
- **System constraints**: The achievable optimum is bounded by physical constraints (thermodynamic limits, mass transfer limits), biological constraints (maximum biofilm activity, substrate inhibition thresholds), and operational constraints (equipment capacity, safety limits).
- **Time horizon**: Short-term optimization (maximize power now) may conflict with long-term objectives (maintain biofilm health for sustained performance). Multi-period or infinite-horizon formulations address this temporal trade-off.
- **Uncertainty**: Stochastic optimization accounts for uncertain feed composition, model parameters, and equipment performance. Robust optimization ensures acceptable performance under worst-case conditions. Risk-neutral optimization maximizes expected performance.
- **Objective function complexity**: Simple single-variable objectives (maximize voltage) are easily optimized. Multi-variable, multi-objective problems with nonlinear interactions require sophisticated algorithms and may have no single optimal solution.

## Compatible Systems

Ai Ml Integration

## References

- Boghani, H. C., et al. (2014). Controlling for maximum power from microbial fuel cells. *Bioresource Technology*, 152, 270-276.
- Patel, R., et al. (2021). Model predictive control for microbial fuel cells. *Renewable and Sustainable Energy Reviews*, 145, 111157.
- Logan, B. E., et al. (2006). Microbial fuel cells: Methodology and technology. *Environmental Science & Technology*, 40(17), 5181-5192.
- Deb, K., et al. (2002). A fast and elitist multiobjective genetic algorithm: NSGA-II. *IEEE Transactions on Evolutionary Computation*, 6(2), 182-197.
- Wang, H., & Ren, Z. J. (2013). A comprehensive review of microbial electrochemical systems. *Biotechnology Advances*, 31(8), 1796-1807.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Optimization+Objective&body=**Parameter%3A**+Optimization+Objective%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Foptimization-objective.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Optimization+Objective&body=**Parameter%3A**+Optimization+Objective%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Foptimization-objective.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Optimization+Objective&body=**Parameter%3A**+Optimization+Objective%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Foptimization-objective.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
