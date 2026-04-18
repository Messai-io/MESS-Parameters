# Water Footprint

Water footprint quantifies the total volume of freshwater consumed and polluted throughout the MES life cycle, expressed in m^3 of water per functional unit (per m^3 treated, per kWh generated, or per kg H2 produced). Following the Water Footprint Network methodology, the water footprint comprises three components: blue water (surface and groundwater consumed), green water (rainwater consumed, mainly relevant for bio-based electrode materials), and grey water (volume of freshwater required to assimilate pollutants in the effluent to natural background concentrations).

MES have a complex water footprint because they are both water consumers (auxiliary water for operation) and water treatment systems (improving water quality). The net water footprint of MES treating wastewater is typically negative (net water production) when the treated effluent suitable for reuse is credited against auxiliary water consumption. This makes MES a water-positive technology in most configurations.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Economic |
| **Subcategory** | Environmental Impact |
| **Type** | number |
| **Unit** | L/kWh |
| **Minimum** | 0 |
| **Maximum** | 100 |

## Typical Values

- **Valid Range**: -1000 -- 100 m^3 water per m^3 treated
- **Blue water footprint (auxiliary consumption)**: 0.01 -- 0.1 m^3/m^3 treated
- **Grey water footprint (pollutant assimilation)**: 0.1 -- 5 m^3/m^3 treated
- **Net water footprint (with reuse credit)**: -0.8 -- -0.99 m^3/m^3 treated
- **Electrode manufacturing water footprint**: 10 -- 100 L/m^2 electrode
- **Membrane manufacturing water footprint**: 50 -- 500 L/m^2 membrane
- **Activated sludge (reference)**: 0.05 -- 0.3 m^3/m^3 treated (blue only)

## Measurement Methods

- **Water Footprint Assessment (WFN)**: The water footprint is calculated per the Water Footprint Assessment Manual (Hoekstra et al., 2011). Blue, green, and grey components are quantified separately for each life cycle stage (manufacturing, operation, end-of-life).
- **Life Cycle Water Use**: Water consumption data is collected from: operational records (metered water use), manufacturing inventories (from ecoinvent or literature), and effluent quality data (for grey water calculation). Grey water = pollutant load / (discharge standard - natural concentration).

## Affecting Factors

### Primary

- **Effluent Quality**: Better treatment reduces grey water footprint. MES achieving < 50 mg/L COD have 50--80% lower grey water footprint than at 150 mg/L.
- **Water Reuse**: Crediting treated water for reuse makes the net footprint strongly negative.
- **Manufacturing Stage**: Electrode and membrane production consume significant water. Bio-based electrodes from rainfed agriculture have lower blue water footprint.
- **Climate**: Evaporation losses are higher in hot, dry climates, increasing the blue water footprint.

## Related Parameters

- **name**: [Water Cost](water-cost.md)

- **relationship**: Economic cost of water use
- **name**: [Water Reuse Rate](water-reuse-rate.md)

- **relationship**: Fraction of treated water reused
- **name**: [Water Supply](../operational/water-supply.md)

- **relationship**: Source of auxiliary water
- **name**: [Wastewater Discharge](../operational/wastewater-discharge.md)

- **relationship**: Effluent quality

## Compatible Systems

Life Cycle Assessment Parameters

## References

- Hoekstra, A.Y. et al. (2011). "The Water Footprint Assessment Manual." Water Footprint Network/Earthscan.
- ISO 14046:2014. "Environmental management -- Water footprint."

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Water+Footprint&body=**Parameter%3A**+Water+Footprint%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fwater-footprint.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Water+Footprint&body=**Parameter%3A**+Water+Footprint%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fwater-footprint.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Water+Footprint&body=**Parameter%3A**+Water+Footprint%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fwater-footprint.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
