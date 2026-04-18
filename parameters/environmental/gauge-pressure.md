# Gauge Pressure

Gauge pressure in microbial electrochemical systems (MES) refers to the pressure measured relative to the local atmospheric pressure, as opposed to absolute pressure which is measured relative to a perfect vacuum. Gauge pressure is the most commonly reported pressure measurement in MES operations because most pressure sensors, manometers, and pressure gauges read zero when exposed to atmospheric pressure. The relationship is: P_absolute = P_gauge + P_atmospheric.

In MES applications, gauge pressure is relevant in several contexts. Gas-producing systems such as microbial electrolysis cells (MECs) that generate hydrogen or methane develop positive gauge pressure in sealed headspaces as gas accumulates. This gauge pressure must be monitored to prevent over-pressurization that could compromise reactor seals, rupture membranes, or create safety hazards with flammable hydrogen gas. Conversely, gas-consuming processes can create negative gauge pressure (vacuum conditions) that may collapse flexible reactor components or draw air into anaerobic systems.

The gauge pressure within an MES also affects electrochemical thermodynamics and microbial physiology. According to the Nernst equation, the equilibrium potential for gas-evolving reactions depends on the partial pressure of the product gas, which increases with gauge pressure. Higher headspace gauge pressures require greater overpotentials for continued gas production, reducing energy efficiency. Additionally, elevated pressures increase dissolved gas concentrations according to Henry's Law, which can be beneficial (increased CO2 for electrosynthesis) or detrimental (hydrogen inhibition of certain fermentative pathways).

## Basic Information

| Property | Value |
|---|---|
| **Category** | Environmental |
| **Subcategory** | Pressure Parameters |
| **Type** | number |
| **Unit** | kPa |
| **Minimum** | -100 |
| **Maximum** | 1000 |

## Typical Values

- **Valid Range**: -100 to 10,000 kPa (gauge)
- **Typical Range (MES Headspace)**: 0 to 50 kPa (gauge)
- **Normal MFC Operation**: 0 to 5 kPa (near atmospheric)
- **Pressurized MEC Systems**: 10 to 1,000 kPa (gauge)
- **Vacuum Condition**: -10 to 0 kPa (gauge)
- **Safety Relief Valve Setting**: 50 to 200 kPa (gauge)
- **Membrane Pressure Tolerance**: 5 to 100 kPa differential

## Measurement Methods

- **Bourdon Tube Pressure Gauge**: The classic mechanical gauge uses a curved, flattened tube that straightens as internal pressure increases, driving a pointer across a calibrated dial. These gauges are inexpensive, require no power, and inherently read gauge pressure as the external side is exposed to atmosphere. Accuracy is typically 1-2% of full scale.
- **Piezoresistive Pressure Transducers**: MEMS-based piezoresistive sensors measure pressure by detecting resistance change in a silicon diaphragm. Gauge-referenced versions have one side vented to atmosphere. They offer excellent accuracy (0.1-0.5% of full scale), fast response (<1 ms), and electronic output for data acquisition.
- **Differential Pressure Transmitters**: For monitoring pressure differences across membranes or flow restrictions in MES, differential transmitters measure the difference between two points. They can be configured as gauge sensors by venting one port to atmosphere.
- **Water Column Manometers**: Simple U-tube or inclined manometers measure low gauge pressures with high resolution (1 mm water column = 9.81 Pa). Well-suited for the low pressures typical of atmospheric-pressure MES headspaces.

## Affecting Factors

### Primary

- **Gas Production Rate**: In sealed MES, biological or electrochemical gas production directly determines gauge pressure increase in the headspace.
- **Gas Venting and Collection**: The venting strategy determines whether gauge pressure accumulates or is maintained near zero.
- **Reactor Sealing Quality**: Poor seals allow gas leakage that limits gauge pressure buildup.
- **Temperature Changes**: Gas expansion with temperature increases gauge pressure in fixed-volume headspaces (~3.4% per 10 degrees C).
- **Liquid Level Changes**: Adding or removing liquid from a sealed reactor changes headspace volume, affecting gauge pressure inversely.
- **Gas Solubility Changes**: Sudden temperature increases or pH changes can cause dissolved gas to come out of solution.
- **Membrane Permeability**: Gas-permeable membranes allow pressure equalization between compartments.
- **Barometric Pressure Changes**: Weather-related changes affect absolute pressure even when gauge reads constant.

## Related Parameters

- **name**: Atmospheric Pressure

- **relationship**: The reference for gauge measurement; P_gauge = P_absolute - P_atmospheric.
- **name**: Hydrostatic Pressure

- **relationship**: Contributes to total pressure at the bottom of liquid-filled reactors.
- **name**: Partial Pressure H2/CO2/CH4

- **relationship**: Individual gas partial pressures contribute to total gauge pressure.
- **name**: Temperature

- **relationship**: Affects gas pressure through the ideal gas law.

## Compatible Systems

Atmospheric Ambient Conditions

## References

- Logan, B.E. (2008). *Microbial Fuel Cells*. John Wiley & Sons, Hoboken, NJ.
- Rozendal, R.A., Jeremiasse, A.W., Hamelers, H.V.M., & Buisman, C.J.N. (2008). Hydrogen production with a microbial biocathode. *Environmental Science & Technology*, 42(2), 629-634.
- Lu, L. & Ren, Z.J. (2016). Microbial electrolysis cells for waste biorefinery. *Bioresource Technology*, 215, 254-264.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Gauge+Pressure&body=**Parameter%3A**+Gauge+Pressure%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fgauge-pressure.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Gauge+Pressure&body=**Parameter%3A**+Gauge+Pressure%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fgauge-pressure.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Gauge+Pressure&body=**Parameter%3A**+Gauge+Pressure%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fgauge-pressure.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
