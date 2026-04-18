# Power Requirement

Power requirement is the total electrical power consumed by all ancillary equipment needed to operate a microbial electrochemical system (MES), including pumps, mixers, control electronics, heating/cooling systems, gas handling equipment, and instrumentation. Expressed in watts (W) or kilowatt-hours per cubic meter of wastewater treated (kWh/m^3), this parameter is critical for determining whether an MFC system achieves net energy-positive operation or whether the parasitic power consumption exceeds the bioelectrical output.

For MFCs, the goal is net energy-positive operation where electrical output exceeds ancillary power consumption. Achieving this requires minimizing power requirements through gravity-fed hydraulics, passive cathode aeration, low-power electronics, and efficient pumps. Laboratory MFCs typically consume 10--100x more parasitic power than they generate, primarily from recirculation pumps and data acquisition equipment. Pilot-scale systems with optimized designs have approached energy neutrality, and theoretical analyses suggest net energy-positive operation is achievable at full scale.

For MECs, the power requirement includes both the applied voltage for hydrogen evolution and the ancillary equipment power. MEC operation is inherently energy-consuming but can be energy-efficient if the energy content of the produced hydrogen exceeds the total electrical input by a sufficient margin (energy efficiency typically 200--600% when accounting for the substrate energy input).

## Basic Information

| Property | Value |
|---|---|
| **Category** | Application Specific |
| **Subcategory** | Implantable Systems |
| **Type** | number |
| **Unit** | μW |
| **Minimum** | 1 |
| **Maximum** | 1000 |

## Typical Values

- **Valid Range**: 0 -- 10000 W (absolute); 0 -- 10 kWh/m^3 (normalized)
- **Lab MFC parasitic power**: 5 -- 100 W (data logging, pumps, stirring)
- **Lab MFC electrical output**: 0.001 -- 0.1 W
- **Pilot MFC parasitic power**: 10 -- 500 W
- **Pilot MFC electrical output**: 0.1 -- 10 W
- **Gravity-fed passive MFC**: < 0.1 W parasitic
- **MEC applied voltage power**: 0.2--1.0 V * I (per cell)
- **Activated sludge (reference)**: 0.3 -- 0.7 kWh/m^3
- **Target for energy-positive MFC**: < 0.1 kWh/m^3 parasitic

## Measurement Methods

- **Wattmeter on Each Ancillary Device**: Individual power consumption is measured for each piece of ancillary equipment using a plug-in wattmeter (Kill-a-Watt, or equivalent) or a current clamp with voltage measurement. Total power requirement is the sum. Measurement over 24+ hours captures duty-cycle effects.
- **Energy Audit**: A comprehensive energy audit lists all energy-consuming components, their rated power, duty cycle (fraction of time operating), and actual measured power. Total energy requirement = sum of (P_rated * duty_cycle * operating_hours).

## Affecting Factors

### Primary

- **Pumping Energy**: Feed pumps, recirculation pumps, and effluent pumps collectively consume 50--80% of total parasitic power. Gravity-fed designs eliminate pumping entirely.
- **Mixing Energy**: Mechanical stirring consumes 5--30% of parasitic power. Passive mixing reduces this to zero.
- **Instrumentation**: Data acquisition systems, potentiostats, and sensors consume 5--20% of parasitic power. Low-power microcontrollers (< 1 W) replace traditional DAQ systems (10--50 W).
- **Temperature Control**: Heating in cold climates can dominate parasitic power (100--1000 W for pilot systems). Insulation and waste heat recovery reduce heating requirements.
- **Scale**: Parasitic power per unit volume decreases with scale due to more efficient pumps and shared infrastructure.

## Related Parameters

- **name**: [Mixer Power](mixer-power.md)

- **relationship**: Mixing energy consumption
- **name**: [Pump Capacity](pump-capacity.md)

- **relationship**: Pump flow and power
- **name**: [Power Factor](power-factor.md)

- **relationship**: System efficiency
- **name**: [Mode](mode.md)

- **relationship**: MFC vs. MEC power profile
- **name**: [Energy Cost](../economic/energy-cost.md)

- **relationship**: Cost of parasitic power

## Compatible Systems

Medical Device Applications

## References

- Ge, Z., Li, J., Xiao, L., Tong, Y., He, Z. (2014). "Recovery of electrical energy in microbial fuel cells." Environmental Science & Technology Letters, 1(2), 137-141.
- He, Z. (2013). "Microbial fuel cells: Now let us talk about energy." Environmental Science & Technology, 47(1), 332-333.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Power+Requirement&body=**Parameter%3A**+Power+Requirement%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fpower-requirement.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Power+Requirement&body=**Parameter%3A**+Power+Requirement%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fpower-requirement.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Power+Requirement&body=**Parameter%3A**+Power+Requirement%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fpower-requirement.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
