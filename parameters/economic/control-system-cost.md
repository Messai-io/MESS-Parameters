# Control System Cost

Control system cost encompasses the capital and installation expense for the monitoring, control, and data acquisition (SCADA) infrastructure of an MES installation. This includes sensors (pH, temperature, DO, conductivity, level, flow, voltage, current), programmable logic controllers (PLCs) or microcontrollers, human-machine interface (HMI) panels, data logging and storage systems, communication infrastructure, wiring, enclosures, and software licenses. Expressed in USD, control system costs typically represent 5--15% of total MES capital cost.

MES require more extensive monitoring than conventional treatment because each electrochemical cell must be individually monitored for voltage (to detect voltage reversal and performance degradation), and the bioelectrochemical process has more controllable variables (external load, feed rate, recirculation) that benefit from automated optimization. For a 100-module MES system, the monitoring requirement includes 100+ voltage channels, plus shared sensors for pH, temperature, flow, and gas production.

Laboratory MES typically use multi-channel data acquisition systems (Keithley, Agilent) costing $3000--20000, plus potentiostats ($5000--30000 each) for electrochemical characterization. Pilot-scale systems use industrial PLCs (Allen-Bradley, Siemens) costing $5000--30000 with distributed I/O modules for sensor integration.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Economic |
| **Subcategory** | System Capital Costs |
| **Type** | number |
| **Unit** | $ |
| **Minimum** | 100 |
| **Maximum** | 100000 |

## Typical Values

- **Valid Range**: 100 -- 500000 USD
- **Lab MFC (DAQ + sensors)**: $3000 -- 20000
- **Lab MFC with potentiostat**: $8000 -- 50000
- **Pilot (PLC + HMI + sensors)**: $10000 -- 100000
- **Full-scale (complete SCADA)**: $50000 -- 500000
- **Arduino/Raspberry Pi DIY system**: $100 -- 1000
- **Per-channel cost (voltage monitoring)**: $10 -- 100
- **Per-sensor cost (pH)**: $200 -- 1000
- **Per-sensor cost (flow meter)**: $200 -- 5000
- **Fraction of total CAPEX**: 5 -- 15%

## Measurement Methods

- **Component-Level Pricing**: Each control system component is priced from manufacturer catalogs or distributor quotes. Installation labor (wiring, programming, commissioning) is estimated at 50--100% of equipment cost.
- **System Integrator Quote**: For pilot and full-scale systems, a control system integrator provides a turnkey quote including design, procurement, installation, programming, and commissioning.

## Affecting Factors

### Primary

- **Number of Monitoring Channels**: Cost scales approximately linearly with channel count. 100 voltage channels require multi-channel DAQ or distributed I/O.
- **Automation Level**: Manual operation requires basic monitoring ($1000--5000). Fully automated operation with MPPT, feed control, and diagnostics requires $10000--100000.
- **Data Communication**: Wired systems cost $50--200 per node. Wireless (Wi-Fi, Zigbee) costs $100--500 per node but eliminates wiring labor.
- **Software Requirements**: Open-source software (Python, Node-RED) costs $0. Commercial SCADA (Wonderware, Ignition) costs $5000--50000.

## Related Parameters

- **name**: [Capital Cost](capitalcost.md)

- **relationship**: Total CAPEX including control system
- **name**: [Data Sampling Frequency](../operational/data-sampling-frequency.md)

- **relationship**: Monitoring requirements
- **name**: [Communication Latency](../operational/communication-latency.md)

- **relationship**: Network performance
- **name**: [Network Topology](../operational/network-topology.md)

- **relationship**: System architecture

## Compatible Systems

Capital Cost Parameters

## References

- ISA-95 (2013). "Enterprise-Control System Integration." International Society of Automation.
- Boyer, S.A. (2010). SCADA: Supervisory Control and Data Acquisition, 4th ed. ISA.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Control+System+Cost&body=**Parameter%3A**+Control+System+Cost%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fcontrol-system-cost.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Control+System+Cost&body=**Parameter%3A**+Control+System+Cost%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fcontrol-system-cost.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Control+System+Cost&body=**Parameter%3A**+Control+System+Cost%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fcontrol-system-cost.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
