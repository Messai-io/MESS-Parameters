# Acidification Potential

Acidification potential (AP) is a life cycle assessment (LCA) impact category that quantifies the potential of MES-related emissions to cause acid deposition (acid rain) in the environment. Expressed in kg SO2 equivalents per functional unit (e.g., per m^3 wastewater treated, per kWh electricity generated, or per kg COD removed), AP aggregates the acidifying effects of sulfur dioxide (SO2), nitrogen oxides (NOx), ammonia (NH3), and hydrochloric acid (HCl) emissions from all stages of the MES life cycle including material extraction, manufacturing, operation, and end-of-life disposal.

MES generally exhibit lower acidification potential than conventional aerobic wastewater treatment because: (1) anaerobic operation at the anode avoids the energy-intensive aeration that generates indirect SO2/NOx emissions from fossil fuel-based electricity, (2) lower sludge production reduces sludge incineration emissions, and (3) direct electricity generation from wastewater displaces grid electricity with its associated emissions. However, MES-specific AP contributions include: sulfide emissions from anaerobic wastewater processing, ammonia volatilization from high-nitrogen wastewaters, and manufacturing emissions from electrode and membrane production.

LCA studies comparing MFC treatment with activated sludge typically show 30--60% lower AP for MFC systems when treating domestic wastewater, primarily due to reduced energy consumption and sludge production. The AP advantage is greatest when MES displaces coal-fired electricity and smallest when the grid is already low-carbon.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Economic |
| **Subcategory** | Environmental Impact |
| **Type** | number |
| **Unit** | g SO₂-eq/kWh |
| **Minimum** | 0 |
| **Maximum** | 10 |

## Typical Values

- **Valid Range**: 0 -- 0.1 kg SO2-eq/m^3 treated
- **MFC (domestic WW, LCA)**: 0.001 -- 0.01 kg SO2-eq/m^3
- **Activated sludge (reference)**: 0.005 -- 0.03 kg SO2-eq/m^3
- **MEC (hydrogen production)**: 0.002 -- 0.015 kg SO2-eq/m^3
- **AP reduction (MFC vs. AS)**: 30 -- 60%
- **Dominant contributors**: Electricity use (40--60%), chemicals (20--30%), sludge disposal (10--20%)

## Measurement Methods

- **Life Cycle Assessment (LCA)**: AP is calculated using LCA methodology (ISO 14040/14044). A system boundary is defined encompassing all life cycle stages. An inventory of all acidifying emissions is compiled. CML or ReCiPe characterization factors convert each emission to SO2-equivalents. Software: openLCA, SimaPro, or GaBi with ecoinvent database.
- **Emission Factor Approach**: For simplified estimation, AP = sum of (emission rate * characterization factor) for each acidifying species. Characterization factors: SO2 = 1.0, NOx = 0.7, NH3 = 1.88 kg SO2-eq/kg. Emission rates from operational data and energy consumption records.

## Affecting Factors

### Primary

- **Energy Source**: Grid electricity from coal has AP of 0.005--0.01 kg SO2-eq/kWh; from renewables, nearly zero.
- **Sludge Disposal Method**: Incineration produces SO2 and NOx; landfilling produces less AP but more other impacts.
- **Wastewater Sulfur Content**: High sulfate/sulfide wastewater (> 100 mg/L) increases direct SO2 emissions.
- **Electrode Manufacturing**: Carbon electrode production from petroleum coke has measurable AP contribution.

## Related Parameters

- **name**: [Eutrophication Potential](eutrophication-potential.md)

- **relationship**: Related LCA impact
- **name**: [Renewable Energy Fraction](renewable-energy-fraction.md)

- **relationship**: Reduces AP
- **name**: [Energy Cost](energy-cost.md)

- **relationship**: Energy source affects AP
- **name**: [Sludge Production](../operational/sludge-production.md)

- **relationship**: Sludge disposal AP

## Compatible Systems

Life Cycle Assessment Parameters

## References

- Foley, J.M. et al. (2010). "Life cycle assessment of high-rate anaerobic treatment, microbial fuel cells, and microbial electrolysis cells." Environmental Science & Technology, 44(9), 3629-3637.
- Pant, D. et al. (2011). "An introduction to the life cycle assessment (LCA) of bioelectrochemical systems (BES) for sustainable energy and product generation." Renewable and Sustainable Energy Reviews, 15(2), 1305-1313.
- CML-IA characterization factors (Leiden University, 2016).

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Acidification+Potential&body=**Parameter%3A**+Acidification+Potential%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Facidification-potential.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Acidification+Potential&body=**Parameter%3A**+Acidification+Potential%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Facidification-potential.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Acidification+Potential&body=**Parameter%3A**+Acidification+Potential%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Facidification-potential.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
