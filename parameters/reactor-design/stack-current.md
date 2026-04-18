# Stack Current

Stack current is the total electrical current produced by or applied to a microbial electrochemical system stack, measured in amperes. In microbial fuel cells (MFCs), stack current represents the sum of bioelectrocatalytic electron flow from all cells connected to the external circuit. In microbial electrolysis cells (MECs), it represents the total applied current driving hydrogen or other product generation. Stack current is determined by the number of cells, their individual current outputs, the electrical connection topology (series vs. parallel), and the external load or applied potential.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Reactor Design |
| **Subcategory** | Stack Electrical Configuration |
| **Type** | number |
| **Unit** | A |
| **Minimum** | 0 |
| **Maximum** | 1000 |
| **Papers Reporting** | 36 |

## Typical Values

- **text**: | System Type | Scale | Current Range | Configuration |
|------------|-------|--------------|---------------|
| MFC stack (series) | Lab | 0.001 - 0.05 A | 4-10 cells, limited by weakest cell |
| MFC stack (parallel) | Lab | 0.01 - 0.5 A | 4-10 cells, currents additive |
| MFC stack (parallel) | Pilot | 0.5 - 5 A | 20-100 cells |
| MEC stack (applied) | Lab | 0.01 - 1 A | Potentiostat-controlled |
| MEC stack (applied) | Pilot | 1 - 50 A | Power supply-controlled |
| Microbial desalination stack | Lab | 0.005 - 0.2 A | Coupled to desalination rate |

**Performance benchmarks:**
- Single MFC cell maximum: 1-20 mA (depending on electrode area and substrate)
- Best-reported pilot MFC stack current: 0.5-5 A sustained
- MEC applied current density target: 5-10 A/m^2 of electrode area

## Measurement Methods

- **1. **Ammeter measurement**: Insert a digital multimeter or dedicated ammeter in the external circuit. For continuous monitoring, use a data-logging ammeter or current transducer (Hall effect sensor) that does not introduce significant series resistance.**: 2. **Shunt resistor**: Place a precision low-value resistor (e.g., 0.1-1 ohm) in the circuit and measure the voltage drop across it. Current = V_shunt / R_shunt. This method allows data logger recording. 3. **Potentiostat/galvanostat**: For controlled experiments, a multichannel potentiostat can simultaneously measure current from individual cells and the total stack. 4. **Current transducer (Hall effect)**: Non-invasive clamp-on current sensors measure current without breaking the circuit, suitable for pilot-scale monitoring. 5. **Coulomb counting**: Integrate current over time using a coulomb counter IC or digital integration of time-series current data to determine total charge transferred.

## Affecting Factors

- **text**: - **Number of cells and connection topology**: Parallel connections sum cell currents; series connections are limited to the current of the weakest cell.
- **External resistance/load**: The operating point on the stack polarization curve determines the current at a given voltage. Lower resistance increases current but reduces voltage.
- **Substrate concentration and type**: Higher biodegradable COD concentration increases the maximum achievable current up to the biofilm kinetic limit.
- **Temperature**: Microbial metabolism and ion transport increase with temperature (within the mesophilic range of 20-40 C), typically increasing current by 5-10% per degree C.
- **Membrane condition**: Fouled or degraded membranes increase internal resistance and reduce achievable current.
- **Biofilm maturity**: Freshly inoculated systems produce lower current. Mature, acclimated electroactive biofilms (Geobacter, Shewanella) produce peak current after 2-8 weeks.
- **Cell-to-cell variability**: Manufacturing tolerances and biological variability cause current mismatch between cells, which is particularly problematic in series connections.

## Compatible Systems

Multi Cell Stack Configuration

## References

1. Aelterman, P., Rabaey, K., Pham, H.T., Boon, N., & Verstraete, W. (2006). Continuous electricity generation at high voltages and currents using stacked environmental fuel cells. *Environmental Science & Technology*, 40(10), 3388-3394.
2. Oh, S.E., & Logan, B.E. (2007). Voltage reversal during microbial fuel cell stack operation. *Journal of Power Sources*, 167(1), 11-17.
3. Ieropoulos, I., Greenman, J., & Melhuish, C. (2008). Microbial fuel cells based on carbon veil electrodes: stack configuration and scalability. *International Journal of Energy Research*, 32(13), 1228-1240.
4. Zhuang, L., Yuan, Y., Wang, Y., & Zhou, S. (2012). Long-term evaluation of a 10-liter serpentine-type microbial fuel cell stack treating brewery wastewater. *Bioresource Technology*, 123, 406-412.
5. Harnisch, F., & Schroder, U. (2010). From MFC to MXC: chemical and biological cathodes and their potential for microbial bioelectrochemical systems. *Chemical Society Reviews*, 39(11), 4433-4448.

---

*Parameter documentation for the MESS (Microbial Electrochemical Systems Standardization) framework.*

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Stack+Current&body=**Parameter%3A**+Stack+Current%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fstack-current.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Stack+Current&body=**Parameter%3A**+Stack+Current%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fstack-current.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Stack+Current&body=**Parameter%3A**+Stack+Current%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fstack-current.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
