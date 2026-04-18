# Carbon Footprint

Carbon footprint quantifies the total greenhouse gas emissions associated with
microbial electrochemical systems throughout their lifecycle, expressed as CO₂
equivalent emissions per unit of energy produced or treated volume. This
parameter enables environmental impact assessment and supports carbon accounting
for sustainability reporting. Lower carbon footprints indicate better
environmental performance.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Economic |
| **Subcategory** | Environmental Impact |
| **Type** | number |
| **Unit** | kg CO₂-eq/kWh |
| **Minimum** | 0 |
| **Maximum** | 1 |

## Typical Values

- **Range**: -2 to 5 kg CO₂-eq/MWh
- **Typical**: -1 to 2 kg CO₂-eq/MWh
- **Optimal**: -2 to 0 kg CO₂-eq/MWh (net negative or neutral)
- **Performance Categories**: - **Low Performance**: >2 kg CO₂-eq/MWh (net positive emissions)
- **Moderate Performance**: 0 - 2 kg CO₂-eq/MWh (low net emissions)
- **High Performance**: -1 to 0 kg CO₂-eq/MWh (carbon neutral to negative)
- **Exceptional Performance**: <-1 kg CO₂-eq/MWh (strongly carbon negative)

## Measurement Methods

- **Direct Measurement**: 1. **Life Cycle Assessment (LCA)**:     - Cradle-to-grave emissions analysis    - Include material production, operation, disposal    - Use LCA software (SimaPro, GaBi, etc.)    - Follow ISO 14040/14044 standards  2. **Process-Based Accounting**:     - Direct measurement of operational emissions    - Material flow analysis    - Energy consumption tracking    - Waste stream characterization  3. **Hybrid Assessment**:    - Combine process-based and input-output methods    - Use databases (ecoinvent, GHG Protocol)    - Account for upstream and downstream impacts    - Include avoided emissions from waste treatment
- **Calculation Considerations**: - Define system boundaries clearly - Include all significant emission sources - Account for temporal variations in grid electricity - Consider displaced emissions from avoided treatments

## Affecting Factors

### Primary

- **System Efficiency**: - Higher energy efficiency reduces footprint    - Power density affects material intensity    - Substrate utilization efficiency    - System lifetime affects amortized impacts
- **Substrate Type**: - Waste substrates: Often negative footprint    - Purpose-grown biomass: Higher footprint    - Organic waste diversion: Avoided landfill emissions    - Wastewater treatment: Avoided treatment emissions
- **Energy Mix**: - Grid electricity carbon intensity    - Renewable energy integration    - On-site renewable generation    - Energy storage requirements
- **Material Selection**: - Electrode materials: Carbon vs precious metals    - Membrane materials: Polymer production impacts    - System construction materials    - Transportation distances
- **End-of-Life Treatment**: - Material recycling potential    - Disposal method impacts    - Component reuse opportunities    - Decommissioning energy requirements

## Performance Impact

**Formula**: Net footprint = Direct emissions + Embodied emissions - Avoided
emissions

Negative carbon footprints (-2 to 0 kg CO₂-eq/MWh) indicate net environmental
benefits through waste treatment and renewable energy generation. Positive
footprints (>0 kg CO₂-eq/MWh) suggest need for system optimization or different
applications.

## Compatible Systems

Life Cycle Assessment Parameters

## References

1. **ISO 14067** (2018). "Greenhouse gases — Carbon footprint of products —
   Requirements and guidelines for quantification". International Organization
   for Standardization, Geneva.

   - Carbon footprint calculation standards

2. **Foley, J.M., et al.** (2010). "Life cycle assessment of high-rate anaerobic
   treatment, microbial fuel cells, and microbial electrolysis cells".
   _Environmental Science & Technology_, 44(9), 3629-3637.

   - LCA of bioelectrochemical systems

3. **GHG Protocol** (2011). "Product Life Cycle Accounting and Reporting
   Standard". World Resources Institute, Washington, DC.
   - Product carbon footprint methodology

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Carbon+Footprint&body=**Parameter%3A**+Carbon+Footprint%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fcarbon-footprint.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Carbon+Footprint&body=**Parameter%3A**+Carbon+Footprint%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fcarbon-footprint.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Carbon+Footprint&body=**Parameter%3A**+Carbon+Footprint%0A**Category%3A**+Economic%0A**File%3A**+parameters%2Feconomic%2Fcarbon-footprint.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
