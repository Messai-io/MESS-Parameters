# Internal Rate Return

Internal rate of return (IRR) is the discount rate at which the net present value (NPV) of all cash flows from an MES project equals zero. Expressed as a percentage, IRR represents the annualized effective rate of return that the project generates for investors. A project is considered financially viable when its IRR exceeds the minimum acceptable rate of return (MARR), also known as the hurdle rate, which is typically 8--15% for infrastructure projects and 15--25% for novel technology ventures.

For MES projects, cash flows include: initial capital investment (negative), annual operating costs (negative), revenue from treatment fees, electricity, hydrogen, byproducts, and carbon credits (positive), component replacement costs at intervals (negative), and residual value at end of life (positive). The IRR calculation accounts for the time value of money and provides a single metric that summarizes project profitability.

Current TEA studies for MES report IRR values of -10% to +15%, with the wide range reflecting uncertainty in capital costs, performance projections, and revenue assumptions. Projects treating high-strength industrial wastewater with multiple revenue streams (treatment fee + energy + byproducts) generally show the most favorable IRR. Municipal wastewater projects show lower IRR due to lower treatment fees and dilute substrate.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Economic |
| **Subcategory** | Financial Metrics |
| **Type** | number |
| **Unit** | % |
| **Minimum** | -20 |
| **Maximum** | 50 |
| **Papers Reporting** | 3 |

## Typical Values

- **Valid Range**: -50 -- 50%
- **MFC treating brewery wastewater**: 5 -- 15% IRR
- **MFC treating domestic wastewater**: -5 -- 8% IRR
- **MEC hydrogen production**: 0 -- 12% IRR
- **MDC desalination**: 2 -- 10% IRR
- **MARR for municipal infrastructure**: 5 -- 10%
- **MARR for private venture**: 15 -- 25%
- **Activated sludge (reference)**: 5 -- 10% (established technology)
- **Project life for IRR calculation**: 20 years typical

## Measurement Methods

- **Discounted Cash Flow Analysis**: Annual cash flows are projected over the project life (typically 20 years). The IRR is found by solving: sum of [CF_t / (1 + IRR)^t] = 0 for t = 0 to N, where CF_t is the net cash flow in year t. Solved numerically using Excel IRR function, Python scipy.optimize, or financial calculator.
- **Sensitivity Analysis**: IRR is recalculated under optimistic, baseline, and pessimistic scenarios for key variables (capital cost, electricity price, treatment fee, performance degradation rate) to assess robustness.

## Affecting Factors

### Primary

- **Capital Cost**: IRR is highly sensitive to CAPEX. A 30% cost reduction can increase IRR by 5--10 percentage points.
- **Treatment Revenue**: Higher treatment fees (common for industrial wastewater) directly increase IRR.
- **Energy Revenue**: Combined electricity and hydrogen revenue improves IRR by 2--5 percentage points.
- **Operating Life**: Longer project life (20 vs. 10 years) increases IRR if the system maintains performance.
- **Component Replacement Cost**: Frequent electrode/membrane replacement reduces IRR significantly.

## Related Parameters

- **name**: [Capital Cost](capitalcost.md)

- **relationship**: Major IRR determinant
- **name**: [Operating Cost](operatingcost.md)

- **relationship**: Annual cost impacting cash flows
- **name**: [Treatment Revenue](treatment-revenue.md)

- **relationship**: Primary revenue stream
- **name**: [Electricity Revenue](electricity-revenue.md)

- **relationship**: Energy revenue component
- **name**: [Lifetime Target](../operational/lifetime-target.md)

- **relationship**: Project duration

## Compatible Systems

Economic Performance Indicators

## References

- Rozendal, R.A. et al. (2008). "Towards practical implementation of bioelectrochemical wastewater treatment." Trends in Biotechnology, 26(8), 450-459.
- Sleutels, T.H.J.A. et al. (2012). "Bio-electrochemical systems: An outlook for practical applications." ChemSusChem, 5(6), 1012-1019.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Internal+Rate+Return&body=**Parameter%3A**+Internal+Rate+Return%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Finternal-rate-return.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Internal+Rate+Return&body=**Parameter%3A**+Internal+Rate+Return%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Finternal-rate-return.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Internal+Rate+Return&body=**Parameter%3A**+Internal+Rate+Return%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Finternal-rate-return.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
