# Current Sharing

Current sharing quantifies the uniformity of current distribution among parallel-connected cells or electrodes within a microbial electrochemical system stack, expressed as a percentage. Perfect current sharing (100%) means all cells produce or consume identical currents, while poor sharing indicates significant cell-to-cell imbalance. Non-uniform current distribution reduces overall system efficiency because underperforming cells limit total output while overperforming cells may experience accelerated degradation. Current sharing is particularly important in parallel configurations where cells naturally self-balance through voltage but can still exhibit significant current variations due to differences in biofilm maturity, substrate availability, or internal resistance.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Reactor Design |
| **Subcategory** | Stack Electrical Configuration |
| **Type** | number |
| **Unit** | % |
| **Minimum** | 80 |
| **Maximum** | 100 |
| **Papers Reporting** | 28 |

## Typical Values

- **text**: | Configuration | Current Sharing | Notes |
|--------------|----------------|-------|
| Well-matched lab cells (parallel) | 95 - 100% | Identical materials, controlled conditions |
| Pilot-scale parallel stack | 85 - 95% | Manufacturing tolerances, biofilm variability |
| Industrial parallel bank | 80 - 90% | Greater variability in operating conditions |
| Series stack (single path) | N/A | Current forced equal in series; voltage varies |
| Mixed series-parallel | 85 - 95% | Per parallel branch |

**Current imbalance sources in practice:**
- Manufacturing variability: +/- 5-10% in electrode area and resistance
- Biofilm heterogeneity: +/- 10-20% in current density across nominally identical cells
- Flow distribution: +/- 5-15% variation in substrate delivery to individual cells
- Temperature gradients: +/- 2-5% current variation per degree C difference

## Measurement Methods

- **1. **Individual cell current monitoring**: Insert low-resistance shunt resistors in each parallel branch and measure voltage drops to calculate individual cell currents. Current sharing = (1 - (I_max - I_min) / I_average) x 100%.**: 2. **Hall effect sensors**: Use clamp-on current sensors on each parallel branch for non-invasive, continuous monitoring. 3. **Power electronics monitoring**: In systems with individual DC-DC converters per cell, the converter control circuits can report individual cell currents. 4. **Statistical analysis**: Calculate the coefficient of variation (CV) of cell currents. CV < 5% indicates excellent sharing; CV > 15% suggests significant imbalance. 5. **Thermal imaging**: Non-uniform current distribution creates temperature differences. Infrared imaging of the stack can reveal poorly performing cells as cooler zones.

## Affecting Factors

- **text**: - **Cell-to-cell resistance matching**: Variations in internal resistance (electrode, membrane, electrolyte) are the primary cause of current mismatch in parallel configurations.
- **Biofilm heterogeneity**: Natural biological variability causes some cells to develop more active biofilms than others, particularly in the first weeks of operation.
- **Flow distribution**: Uneven substrate delivery to parallel cells creates different substrate concentration conditions, affecting current generation.
- **Temperature gradients**: Cells at different temperatures operate at different kinetic rates, producing unequal currents.
- **Interconnection resistance**: Wiring and busbar resistances between cells and the common bus affect current paths. Symmetrical wiring designs improve sharing.
- **Cell age and degradation**: Over time, some cells degrade faster than others due to membrane fouling, electrode corrosion, or biofilm detachment, worsening current sharing.
- **Active balancing circuits**: Electronic circuits that adjust individual cell loads can improve current sharing at the cost of additional complexity and power losses.

## Compatible Systems

Multi Cell Stack Configuration

## References

1. Aelterman, P., Rabaey, K., Pham, H.T., Boon, N., & Verstraete, W. (2006). Continuous electricity generation at high voltages and currents using stacked environmental fuel cells. *Environmental Science & Technology*, 40(10), 3388-3394.
2. Kim, Y., Hatzell, M.C., Hutchinson, A.J., & Logan, B.E. (2011). Capturing power at higher voltages from arrays of microbial fuel cells without voltage reversal. *Energy & Environmental Science*, 4(11), 4662-4667.
3. Ieropoulos, I., Greenman, J., & Melhuish, C. (2008). Microbial fuel cells based on carbon veil electrodes: stack configuration and scalability. *International Journal of Energy Research*, 32(13), 1228-1240.
4. Larminie, J., & Dicks, A. (2003). *Fuel Cell Systems Explained* (2nd ed.). Wiley. Chapter 4: Fuel Cell Charge Transport.
5. Dekker, A., Ter Heijne, A., Saakes, M., Hamelers, H.V.M., & Buisman, C.J.N. (2009). Analysis and improvement of a scaled-up and stacked microbial fuel cell. *Environmental Science & Technology*, 43(23), 9038-9042.

---

*Parameter documentation for the MESS (Microbial Electrochemical Systems Standardization) framework.*

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Current+Sharing&body=**Parameter%3A**+Current+Sharing%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fcurrent-sharing.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Current+Sharing&body=**Parameter%3A**+Current+Sharing%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fcurrent-sharing.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Current+Sharing&body=**Parameter%3A**+Current+Sharing%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fcurrent-sharing.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
