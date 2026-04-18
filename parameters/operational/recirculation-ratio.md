# Recirculation Ratio

Recirculation ratio is the ratio of the internal recirculation flow rate to the influent feed flow rate in a continuous-flow MES (Q_recirc / Q_feed). This dimensionless parameter characterizes the degree of internal mixing provided by pumping reactor effluent back to the inlet. A recirculation ratio of 5 means the internal flow through the reactor is 6 times the net throughput (5 parts recirculated + 1 part fresh feed). Recirculation enhances mass transfer at the electrode surface, improves pH buffering, reduces concentration gradients, and converts a plug-flow reactor into a mixed-flow reactor.

In MES, recirculation serves multiple purposes. High recirculation ratios (10--50x) increase the flow velocity across electrode surfaces, thinning the diffusion boundary layer and improving substrate delivery to the biofilm. This can increase current density by 20--100% compared to single-pass operation at the same net HRT. Recirculation also dilutes the influent substrate concentration at the reactor inlet, reducing potential substrate inhibition from concentrated industrial wastewaters.

However, recirculation consumes pump energy that may exceed the MFC's electrical output. The energy cost of recirculation (pump power in W) must be weighed against the power gain from improved mass transfer. An optimal recirculation ratio exists that maximizes net power (gross bioelectrical power minus pump power). This optimum is typically 5--20 for lab-scale MFCs and depends strongly on reactor geometry and pump efficiency.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Operational |
| **Type** | number |

## Typical Values

- **Valid Range**: 0 -- 100
- **No recirculation (single pass)**: 0
- **Low recirculation**: 1 -- 5
- **Moderate recirculation**: 5 -- 20
- **High recirculation**: 20 -- 100
- **Optimal for mass transfer (lab)**: 5 -- 20
- **Optimal for net power (lab)**: 2 -- 10 (balancing pump energy)
- **Typical for upflow MFC**: 5 -- 50
- **Flow velocity at recirculation ratio 10**: approximately 10x single-pass velocity

## Measurement Methods

- **Flow Rate Ratio**: Recirculation ratio = Q_recirc / Q_feed. Both flow rates are measured independently (timed collection, flow meter). The recirculation pump flow rate is verified at the operating backpressure.
- **Tracer Study**: A step-change tracer test at different recirculation ratios quantifies the mixing regime. At high recirculation (> 20), the reactor approaches CSTR behavior (RTD curve approaches exponential decay). The number of tanks-in-series (N) from the RTD curve decreases toward 1 as recirculation increases.

## Affecting Factors

### Primary

- **Reactor Geometry**: Tubular and packed-bed reactors benefit most from recirculation because they naturally have plug-flow characteristics with concentration gradients.
- **Electrode Spacing**: Wider electrode spacing (> 5 cm) creates larger concentration gradients that benefit more from recirculation.
- **Pump Energy**: Recirculation pump power scales approximately linearly with flow rate. At recirculation ratio > 20, pump power often exceeds gross MFC power output.
- **Biofilm Shear**: Excessive recirculation creates shear forces that detach biofilm. Critical recirculation ratio depends on biofilm maturity and reactor geometry.

## Related Parameters

- **name**: [Recycle Ratio](recycle-ratio.md)

- **relationship**: Biomass recycle (distinct from hydraulic recirculation)
- **name**: [Flow Velocity](flow-velocity.md)

- **relationship**: Velocity resulting from recirculation
- **name**: [Flowrate](flowrate.md)

- **relationship**: Total flow through reactor
- **name**: [Mixing Intensity](mixing-intensity.md)

- **relationship**: Mixing achieved by recirculation
- **name**: [Pump Capacity](pump-capacity.md)

- **relationship**: Recirculation pump requirements

## Compatible Systems

Flow Conditions

## References

- He, Z., Minteer, S.D., Angenent, L.T. (2005). "Electricity generation from artificial wastewater using an upflow microbial fuel cell." Environmental Science & Technology, 39(14), 5262-5267.
- Sleutels, T.H.J.A. et al. (2009). "Effect of mass transfer speed on current generation in BES." Applied Microbiology and Biotechnology, 83(2), 241-247.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Recirculation+Ratio&body=**Parameter%3A**+Recirculation+Ratio%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Frecirculation-ratio.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Recirculation+Ratio&body=**Parameter%3A**+Recirculation+Ratio%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Frecirculation-ratio.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Recirculation+Ratio&body=**Parameter%3A**+Recirculation+Ratio%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Frecirculation-ratio.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
