# Interconnection Loss

Interconnection loss quantifies the fractional energy or performance reduction that occurs at the physical and electrical junctions between individual MES reactor modules when they are connected in series, parallel, or series-parallel configurations to form larger systems. Expressed as a percentage of the ideal total power output, interconnection losses arise from contact resistance at terminal connections, voltage reversal in series-connected cells, impedance mismatch between modules, and parasitic current leakage through shared electrolyte pathways.

In scaled-up MES installations, interconnection losses represent one of the primary causes of performance degradation compared to the sum of individual module outputs measured in isolation. A single MFC producing 0.5 V and 10 mA independently may contribute less than its proportional share when connected in a stack of 20 cells, due to internal current loops, ionic short-circuits through common electrolyte manifolds, and increased ohmic resistance at bolted or crimped electrical connections.

Minimizing interconnection losses is critical for achieving economically viable MES performance at scale. Research has shown that interconnection losses of 5-15% are common in poorly designed stacks, while optimized manifold designs, low-resistance electrical connections, and hydraulic isolation strategies can reduce these losses to 2-5%. The parameter is particularly important during the transition from laboratory single-cell experiments to pilot-scale multi-cell systems, where interconnection losses often account for a large fraction of the observed scale-up performance penalty.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Integration Scaling |
| **Subcategory** | Modular Design |
| **Type** | number |
| **Unit** | % |
| **Minimum** | 0 |
| **Maximum** | 20 |
| **Papers Reporting** | 3 |

## Typical Values

- **Valid Range**: 0% to 20%
- **Typical Range**: 2% to 10%
- **Well-designed electrical bus connections**: 0.5-2% ohmic loss
- **Series-connected MFC stack (10-20 cells)**: 5-15% total loss
- **Parallel-connected modules with matched impedance**: 2-5%
- **Hydraulically connected stack with ionic short-circuit**: 10-20%
- **Hydraulically isolated modules**: 1-3% (electrical connections only)
- **Target for commercial systems**: < 5% total interconnection loss

## Measurement Methods

- **Individual vs. Aggregate Performance Comparison**: Each module is characterized independently (open-circuit voltage, polarization curve, maximum power point) before assembly. After interconnection, the aggregate system performance is measured under identical conditions. Interconnection loss = (sum of individual module powers - aggregate system power) / sum of individual module powers x 100%. This method captures all loss mechanisms but requires careful experimental design to maintain consistent operating conditions.
- **Electrochemical Impedance Spectroscopy (EIS) of Connections**: EIS is performed across individual electrical connections and the complete stack to quantify ohmic resistance contributions at each junction. Contact resistance at bolted connections typically appears as a real-axis offset in Nyquist plots. Frequency range: 100 kHz to 0.1 Hz. Equipment: potentiostat/galvanostat (e.g., Gamry Reference 3000, Metrohm Autolab PGSTAT).
- **Voltage Mapping Under Load**: Individual cell voltages are monitored simultaneously using a multichannel voltage data acquisition system while the stack operates under load. Cells experiencing voltage reversal (negative voltage) or excessive voltage depression relative to neighbors indicate interconnection-related losses. This method identifies specific problem connections for remediation.

## Affecting Factors

### Primary

- **Connection configuration**: Series connections multiply voltage but cause the weakest cell to limit overall current; voltage reversal in underperforming cells dissipates energy as heat. Parallel connections maintain voltage but require current-sharing balance within +/- 10% to avoid circulating currents.
- **Electrical contact resistance**: Bolted connections (0.01-1 mohm) are generally superior to spring contacts or press-fit connections. Corrosion of copper terminals in humid, biogas-rich MES environments increases contact resistance over time. Gold-plated or tin-plated contacts reduce degradation.
- **Ionic short-circuit pathways**: When multiple cells share a common electrolyte manifold, ionic current can flow through the electrolyte between cells, bypassing the external circuit. This parasitic current pathway is proportional to electrolyte conductivity and inversely proportional to inter-cell electrolyte path length.
- **Module impedance matching**: Cells with significantly different internal resistances (due to biofilm variation, membrane degradation, or electrode aging) create impedance mismatch losses when connected in series or parallel. Impedance variation above +/- 20% can increase interconnection losses by 3-8%.
- **Temperature gradients**: Non-uniform temperature distribution across a multi-module system causes spatial variation in electrolyte conductivity and biofilm activity, leading to cell-to-cell performance differences that compound interconnection losses.

## Compatible Systems

Multi Scale Integration

## References

1. Aelterman, P. et al. "Continuous electricity generation at high voltages and currents using stacked environmental fuel cells." Environmental Science & Technology, 40(10), 3388-3394 (2006).
2. Zhuang, L. et al. "Scalable microbial fuel cell (MFC) stack for continuous real wastewater treatment." Bioresource Technology, 106, 82-88 (2012).
3. Ieropoulos, I. et al. "Effects of flow-rate, inoculum and time on the internal resistance of microbial fuel cells." Bioresource Technology, 101(10), 3520-3525 (2010).
4. Dekker, A. et al. "Analysis and improvement of a scaled-up and stacked microbial fuel cell." Environmental Science & Technology, 43(23), 9038-9042 (2009).
5. Kim, B. et al. "Series assembly of microbial desalination cells containing stacked electrodialysis cells for partial or complete seawater desalination." Environmental Science & Technology, 45(13), 5840-5845 (2011).

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Interconnection+Loss&body=**Parameter%3A**+Interconnection+Loss%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Finterconnection-loss.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Interconnection+Loss&body=**Parameter%3A**+Interconnection+Loss%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Finterconnection-loss.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Interconnection+Loss&body=**Parameter%3A**+Interconnection+Loss%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Finterconnection-loss.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
