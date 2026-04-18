# Residence Time Cell

The cell residence time, also referred to as hydraulic retention time (HRT), is the average duration that a fluid element remains within an individual electrochemical cell of a microbial electrochemical system. It is calculated as the ratio of the cell liquid volume to the volumetric flow rate (HRT = V/Q). This parameter governs the extent of substrate utilization, microbial activity, and electrochemical conversion within the cell. Residence time is one of the most critical operational parameters for balancing treatment efficiency with throughput in continuous-flow MES systems.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Reactor Design |
| **Subcategory** | Cell Flow Dynamics |
| **Type** | number |
| **Unit** | h |
| **Minimum** | 0.1 |
| **Maximum** | 100 |
| **Papers Reporting** | 16 |

## Typical Values

- **text**: | Application | HRT Range | Rationale |
|------------|-----------|-----------|
| MFC - domestic wastewater | 4 - 24 h | Balance of COD removal and power output |
| MFC - high-strength industrial | 12 - 72 h | Extended time for complex substrate degradation |
| MEC - hydrogen production | 6 - 48 h | Sufficient for acetate/COD conversion to H2 |
| MEC - methane production | 24 - 120 h | Longer HRT for methanogenic conversion |
| Microbial desalination cell | 8 - 48 h | Adequate ion migration and treatment |
| Microbial electrosynthesis | 12 - 96 h | CO2 reduction kinetics require extended contact |

**Optimal ranges reported in literature:**
- Maximum power density in MFCs: typically achieved at HRT of 6-12 hours
- Maximum COD removal (>90%): typically requires HRT > 12 hours for domestic wastewater
- Maximum coulombic efficiency: intermediate HRT of 8-24 hours

## Measurement Methods

- **1. **Tracer studies**: Inject a pulse or step input of a conservative tracer (e.g., lithium chloride, rhodamine B, or bromide) and monitor the outlet concentration over time. The mean residence time is the first moment of the residence time distribution (RTD) curve.**: 2. **Flow rate measurement**: Directly calculate HRT = V_liquid / Q, where V_liquid is the measured working volume and Q is the calibrated influent flow rate. 3. **Conductivity tracer**: Use a salt (NaCl) tracer with inline conductivity probes at inlet and outlet for real-time RTD measurement without sampling. 4. **Computational fluid dynamics (CFD)**: Simulate flow patterns within the cell geometry to predict local and mean residence times, accounting for dead zones and short-circuiting.

## Affecting Factors

- **text**: - **Flow rate**: Directly inversely proportional; doubling flow rate halves HRT for a given cell volume.
- **Cell geometry**: Dead zones, channeling, and recirculation patterns cause deviation between theoretical and actual mean residence time. Plug-flow designs minimize dispersion.
- **Electrode packing density**: Dense electrode materials (carbon brush, granular activated carbon) reduce effective liquid volume and can create preferential flow paths.
- **Biofilm thickness**: Mature biofilms constrict flow channels, effectively reducing working volume and altering local HRT distribution.
- **Gas production**: In MECs, hydrogen or methane gas bubbles displace liquid volume and can create mixing effects that alter the RTD.
- **Recirculation ratio**: External recirculation dilutes influent concentration and effectively increases the number of passes through the cell.
- **Temperature**: Affects fluid viscosity and thus flow distribution, with higher temperatures promoting more uniform flow.

## Compatible Systems

Cell Specific Operational Parameters

## References

1. Liu, H., Ramnarayanan, R., & Logan, B.E. (2004). Production of electricity during wastewater treatment using a single chamber microbial fuel cell. *Environmental Science & Technology*, 38(7), 2281-2285.
2. Min, B., & Logan, B.E. (2004). Continuous electricity generation from domestic wastewater and organic substrates in a flat plate microbial fuel cell. *Environmental Science & Technology*, 38(21), 5809-5814.
3. Heidrich, E.S., Curtis, T.P., & Dolfing, J. (2011). Determination of the internal chemical energy of wastewater. *Environmental Science & Technology*, 45(2), 827-832.
4. Fogler, H.S. (2016). *Elements of Chemical Reaction Engineering* (5th ed.). Prentice Hall. Chapter 16: Residence Time Distributions.
5. Kim, J.R., Premier, G.C., Hawkes, F.R., Dinsdale, R.M., & Guwy, A.J. (2009). Development of a tubular microbial fuel cell (MFC) employing a membrane electrode assembly cathode. *Journal of Power Sources*, 187(2), 393-399.

---

*Parameter documentation for the MESS (Microbial Electrochemical Systems Standardization) framework.*

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Residence+Time+Cell&body=**Parameter%3A**+Residence+Time+Cell%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fresidence-time-cell.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Residence+Time+Cell&body=**Parameter%3A**+Residence+Time+Cell%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fresidence-time-cell.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Residence+Time+Cell&body=**Parameter%3A**+Residence+Time+Cell%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fresidence-time-cell.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
