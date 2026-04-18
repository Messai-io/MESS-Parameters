# Utility Connections

Utility connections describe the external infrastructure interfaces required to operate an MES installation, including water supply (potable and process), electrical power (for ancillary equipment), wastewater influent and effluent piping, gas handling (biogas collection, ventilation), compressed air (for cathode aeration if applicable), chemical dosing lines, and data communication links. This parameter defines the site requirements for MES deployment and influences installation cost, location feasibility, and operational complexity.

For laboratory MES, utility connections are minimal: bench-top electrical outlets (120/240 V AC), deionized water, laboratory gas supply (N2 for anaerobic operation), and waste drain. For pilot installations, the requirements expand to include: dedicated electrical circuit (1--10 kW for ancillary equipment), water supply (potable for buffer preparation, process water for cooling), wastewater feed line from the treatment plant, effluent discharge to downstream treatment, chemical storage and dosing for pH control and membrane cleaning, and data network for SCADA integration.

Full-scale MES installations require utility connections comparable to conventional wastewater treatment plants, plus the unique requirement of electrical power output connections (DC busbars, inverters, grid-tie equipment) that do not apply to conventional technologies.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Integration Scaling |
| **Subcategory** | Site Requirements |
| **Type** | array |

## Typical Values

- **Valid Range**: Categorical (varies by scale)
- **Lab MFC**: 1 electrical outlet, DI water, waste drain, N2 cylinder
- **Bench-scale**: 2--3 electrical circuits, water, gas, drain, Ethernet
- **Pilot-scale**: 1--10 kW electrical, 1--10 m^3/d water, sewer connection, gas vent, SCADA
- **Full-scale**: 10--100 kW electrical, 100--10000 m^3/d influent, effluent permit, grid-tie
- **Electrical for ancillary (pilot)**: 1 -- 10 kW single/three-phase
- **Water (pilot)**: 0.1 -- 10 m^3/d
- **Data connection**: Ethernet, Wi-Fi, or cellular

## Measurement Methods

- **Utility Survey**: A site survey documents all available utilities at the proposed installation location: electrical capacity (kVA), water supply pressure and flow rate, sewer connection size, gas ventilation adequacy, and data network availability.
- **Load Calculation**: Total utility demand is calculated from the sum of all connected equipment loads (electrical), water consumption rates (cooling, cleaning, buffer preparation), and gas handling requirements. A 20--50% safety margin is applied.

## Affecting Factors

### Primary

- **Scale**: Utility requirements scale approximately linearly with treatment capacity.
- **Location**: Remote or decentralized installations may lack grid power and sewer connections, requiring solar/wind power and on-site effluent management.
- **Climate**: Cold climates may require heating (significant electrical or thermal energy). Hot climates may require cooling.
- **Automation Level**: Fully automated systems require reliable data communication and backup power for control systems.

## Related Parameters

- **name**: [Power Requirement](power-requirement.md)

- **relationship**: Electrical demand
- **name**: [Water Supply](water-supply.md)

- **relationship**: Water source details
- **name**: [Wastewater Discharge](wastewater-discharge.md)

- **relationship**: Effluent management
- **name**: [Power Connection](power-connection.md)

- **relationship**: Electrical output connections

## Compatible Systems

Infrastructure Requirements

## References

- Tchobanoglous, G. et al. (2003). Wastewater Engineering: Treatment and Reuse, 4th ed. McGraw-Hill.
- WEF (2018). Design of Water Resource Recovery Facilities, MOP 8, 6th ed. Water Environment Federation.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Utility+Connections&body=**Parameter%3A**+Utility+Connections%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Futility-connections.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Utility+Connections&body=**Parameter%3A**+Utility+Connections%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Futility-connections.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Utility+Connections&body=**Parameter%3A**+Utility+Connections%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Futility-connections.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
