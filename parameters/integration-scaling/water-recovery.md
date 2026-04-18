# Water Recovery

Water recovery represents the percentage of water that can be reclaimed and
reused from the effluent stream of a microbial electrochemical system (MES).
This parameter is particularly important for integrated wastewater treatment and
water reclamation applications, where MES technology serves dual purposes of
energy generation and water resource recovery. It quantifies the system's
effectiveness in producing reusable water while simultaneously treating waste
and generating electricity.

**Formula:** WR = (V_recovered / V_influent) × 100%

Where:

- WR = Water recovery percentage (%)
- V_recovered = Volume of water meeting reuse standards (L)
- V_influent = Total influent volume processed (L)

## Basic Information

| Property | Value |
|---|---|
| **Category** | Integration Scaling |
| **Subcategory** | Process Integration |
| **Type** | number |
| **Unit** | % |
| **Minimum** | 0 |
| **Maximum** | 99 |

## Typical Values

- **Valid Range**: 0 - 99%
- **Typical Range**: 40 - 85%
- **Low Recovery**: 20 - 40% (high strength wastewater)
- **Moderate Recovery**: 40 - 70% (municipal wastewater)
- **High Recovery**: 70 - 85% (dilute streams)
- **Maximum Recovery**: 85 - 95% (optimized systems)
- **Industrial Wastewater**: 20 - 50%
- **Municipal Wastewater**: 50 - 75%
- **Greywater Treatment**: 70 - 85%
- **Blackwater Treatment**: 30 - 60%
- **Agricultural Runoff**: 60 - 80%

## Measurement Methods

- **Volume Measurement**: 1. **Direct Flow Measurement**:     - Influent and effluent flow meters    - Continuous monitoring    - Most accurate method    - Real-time data collection  2. **Batch Volume Tracking**:     - Tank level measurements    - Batch processing volumes    - Periodic assessment    - Simple implementation  3. **Mass Balance Approach**:    - Account for all water streams    - Include evaporation losses    - Consider sludge moisture    - Comprehensive analysis
- **Quality Assessment**: - **Turbidity**: <5 NTU for reuse - **BOD/COD**: Meet discharge standards - **Pathogen Removal**: >99.9% typical requirement - **TDS**: Application-specific limits

## Affecting Factors

### Primary

- **Treatment Efficiency**: - COD removal rate    - Suspended solids removal    - Pathogen inactivation    - Nutrient removal
- **Membrane Configuration**: - Ultrafiltration integration    - Forward osmosis coupling    - Membrane fouling rate    - Rejection characteristics
- **Operating Conditions**: - Hydraulic retention time    - Organic loading rate    - Temperature effects    - pH optimization
- **Evaporation**: 1-5% typical
- **Sludge Water Content**: 5-15% typical
- **Backwash Requirements**: 2-5% typical
- **Sampling/Testing**: <1% typical

## Performance Impact

### Water Quality vs. Recovery

- **Higher Recovery**: Lower effluent quality
- **Lower Recovery**: Higher effluent quality
- **Optimal Balance**: 60-75% for most applications
- **Energy Trade-off**: Higher recovery requires more energy

### Integration Benefits

1. **MES + Membrane Filtration**:

   - Recovery: 70-90%
   - Quality: Potable standards possible
   - Energy: Partially self-powered

2. **MES + Constructed Wetlands**:
   - Recovery: 60-80%
   - Quality: Irrigation standards
   - Cost: Lower capital investment

## Related Parameters

- **name**: HRT

- **relationship**: Longer retention improves quality
- **name**: COD Removal

- **relationship**: Higher removal enables recovery
- **name**: Power Density

- **relationship**: Energy for pumping/treatment
- **name**: Membrane Flux

- **relationship**: Determines recovery rate
- **name**: Specific Energy

- **relationship**: kWh/m³ water recovered
- **name**: Recovery Cost

- **relationship**: $/m³ water produced
- **name**: Quality Index

- **relationship**: Compliance with standards

## Compatible Systems

Hybrid System Integration

## References

### Water Reuse Standards

1. **WHO (2006)**. "Guidelines for the safe use of wastewater, excreta and
   greywater"

   - International reuse standards

2. **EPA (2012)**. "Guidelines for Water Reuse"

   - US water reuse regulations

3. **ISO 16075**: "Guidelines for treated wastewater use for irrigation"
   - Agricultural reuse standards

### MES Water Treatment

1. **Li, W.W., et al. (2014)**. "Recent advances in the separators for microbial
   fuel cells". _Bioresource Technology_, 166, 632-638.

   - Membrane integration strategies

2. **Ge, Z., & He, Z. (2012)**. "Effects of draw solutions and membrane
   conditions on electricity generation and water flux in osmotic microbial fuel
   cells". _Bioresource Technology_, 109, 70-76.

   - Water recovery optimization

3. **Zhang, F., et al. (2013)**. "Integrating forward osmosis into microbial
   fuel cells for wastewater treatment, water extraction and bioelectricity
   generation". _Environmental Science & Technology_, 47(15), 8704-8710.
   - Integrated water recovery systems

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Water+Recovery&body=**Parameter%3A**+Water+Recovery%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fwater-recovery.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Water+Recovery&body=**Parameter%3A**+Water+Recovery%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fwater-recovery.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Water+Recovery&body=**Parameter%3A**+Water+Recovery%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fwater-recovery.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
