<!--
Parameter ID: hydrophobicity
Category: materials
Generated: 2025-01-09T12:06:00.000Z
-->

# Hydrophobicity

## Definition

Hydrophobicity quantifies a material's tendency to repel or resist interaction
with water, representing the surface wetting characteristics that influence
water contact, biofilm formation, and mass transfer in microbial electrochemical
systems. Measured primarily through contact angle analysis, hydrophobicity
affects electrode-electrolyte interfaces, membrane performance, and microbial
attachment kinetics. In MES applications, controlled hydrophobicity optimizes
three-phase contact areas, manages water transport, and influences
biocompatibility.

**Primary Measurement**: Contact angle (θ) - angle between water droplet and
solid surface

**Classification**:

- **Hydrophilic**: θ < 90° (water-loving, high wettability)
- **Hydrophobic**: θ > 90° (water-repelling, low wettability)
- **Superhydrophobic**: θ > 150° (extremely water-repelling)

**Young's Equation**: cos θ = (γSV - γSL) / γLV

Where:

- θ = Contact angle
- γSV = Solid-vapor surface tension
- γSL = Solid-liquid interfacial tension
- γLV = Liquid-vapor surface tension

## Typical Values

- **Range**: 0° - 180° (contact angle)
- **Typical MES Range**: 20° - 140°
- **Critical Threshold**: 90° (hydrophilic/hydrophobic transition)

**Performance Categories**:

- **Superhydrophilic**: 0° - 30° (complete wetting, immediate spreading)
- **Highly Hydrophilic**: 30° - 60° (good wetting, rapid spreading)
- **Moderately Hydrophilic**: 60° - 90° (partial wetting, slow spreading)
- **Moderately Hydrophobic**: 90° - 120° (poor wetting, droplet formation)
- **Highly Hydrophobic**: 120° - 150° (water repelling, stable droplets)
- **Superhydrophobic**: >150° (extreme water repelling, spherical droplets)

**Material-Specific Values**:

- **Glass (clean)**: 0° - 30° (highly hydrophilic)
- **Stainless Steel 316L**: 60° - 80° (moderately hydrophilic)
- **Graphite**: 70° - 90° (varies with surface preparation)
- **Carbon Cloth**: 80° - 120° (treatment dependent)
- **PTFE (Teflon)**: 110° - 120° (hydrophobic reference)
- **Nafion Membrane**: 80° - 100° (humidity dependent)
- **Activated Carbon**: 40° - 100° (surface chemistry dependent)

## Measurement Methods

### Standard Contact Angle Techniques

1. **Sessile Drop Method (ASTM D7334)**:

   - Place water droplet on horizontal surface
   - Measure contact angle using goniometer
   - Drop volume: 2-10 μL typical
   - Image analysis for angle determination
   - Most common method, suitable for flat surfaces

2. **Captive Bubble Method**:

   - Air bubble in water beneath inverted sample
   - Measure angle through water phase
   - Suitable for porous or rough surfaces
   - Eliminates gravity effects on large droplets
   - Better for highly hydrophilic surfaces

3. **Wilhelmy Plate Method (ASTM D5725)**:
   - Measure force on sample immersed in water
   - Calculate contact angle from wetting force
   - Suitable for fiber and irregular geometries
   - Dynamic advancing/receding angle measurement
   - Good for textile electrodes

### Dynamic Contact Angle Measurement

4. **Advancing/Receding Angles**:

   - Advancing angle: droplet volume increasing
   - Receding angle: droplet volume decreasing
   - Hysteresis = θadv - θrec (surface roughness indicator)
   - More representative of practical wetting behavior
   - Critical for understanding drainage characteristics

5. **Roll-Off Angle Measurement**:
   - Angle at which droplet begins rolling off tilted surface
   - Indicates dynamic water-repelling behavior
   - Important for self-cleaning surfaces
   - Relevant for vertical electrode configurations

### Specialized MES Techniques

6. **Electrolyte Contact Angle**:

   - Use actual MES electrolyte instead of pure water
   - Accounts for ionic strength and surfactant effects
   - More relevant to operating conditions
   - pH and conductivity effects on wetting

7. **Biofilm Formation Assessment**:
   - Correlate contact angle with microbial attachment
   - Time-resolved wetting behavior
   - Surface energy calculation from multi-liquid analysis
   - Protein adsorption kinetics evaluation

## Affecting Factors

### Primary Factors

1. **Surface Chemistry**:

   - **Functional Groups**: Hydroxyl (-OH) increases hydrophilicity
   - **Carbon-Hydrogen Bonds**: CH₂, CH₃ groups increase hydrophobicity
   - **Polar Groups**: -COOH, -NH₂ promote water interaction
   - **Surface Oxidation**: Increases hydrophilicity of carbon materials

2. **Surface Roughness and Texture**:

   - **Wenzel Model**: Roughness amplifies existing wetting behavior
   - **Cassie-Baxter Model**: Air pockets in rough hydrophobic surfaces
   - **Microscale Features**: Affect contact line pinning
   - **Hierarchical Structures**: Enable superhydrophobic behavior

3. **Material Treatment and Processing**:
   - **Plasma Treatment**: Increases hydrophilicity temporarily
   - **Chemical Etching**: Creates micro-roughness and surface groups
   - **Heat Treatment**: Removes surface functional groups
   - **Coating Application**: Hydrophobic or hydrophilic modification

### Secondary Factors

1. **Environmental Conditions**:

   - **Temperature**: Affects surface tension and molecular mobility
   - **Humidity**: Water vapor adsorption changes surface properties
   - **Atmospheric Composition**: CO₂ affects surface pH and chemistry
   - **Contamination**: Organic compounds alter surface energy

2. **Time-Dependent Effects**:

   - **Aging**: Surface reconstruction and oxidation over time
   - **Biofilm Formation**: Gradual surface modification by microorganisms
   - **Cleaning History**: Repeated cleaning affects surface chemistry
   - **UV Exposure**: Photodegradation of surface functional groups

3. **Electrolyte Properties**:
   - **Ionic Strength**: High salinity affects contact angle
   - **pH**: Influences surface charge and functional group ionization
   - **Surfactants**: Even trace amounts dramatically affect wetting
   - **Temperature**: Thermal effects on surface tension

## Performance Impact

Hydrophobicity significantly influences mass transfer, biofilm formation, and
electrode performance in microbial electrochemical systems. The wetting
characteristics determine three-phase contact areas and transport phenomena
critical for system efficiency.

**Mass Transfer Effects**:

- **Hydrophilic Surfaces (θ < 90°)**: Enhanced electrolyte contact, improved
  ionic transport
- **Moderate Hydrophobicity (90° - 120°)**: Balanced gas-liquid-solid interfaces
- **High Hydrophobicity (>120°)**: Gas retention, potential mass transfer
  limitations

**Biofilm Formation**:

- **Highly Hydrophilic**: Rapid biofilm attachment, potentially excessive growth
- **Moderately Hydrophobic**: Controlled biofilm formation, optimal for many
  applications
- **Highly Hydrophobic**: Inhibited biofilm formation, may require surface
  modification

**Electrode Performance Relationships**:

- **Anode Performance**: Moderate hydrophobicity (70° - 110°) often optimal
- **Air Cathode Performance**: Hydrophobic backing (>110°) prevents water
  flooding
- **Gas Diffusion**: High hydrophobicity enables gas transport channels
- **Membrane Performance**: Controlled hydrophobicity affects water transport

## Validation Rules

1. **Range Validation**: 0° - 180° (physical limits of contact angle)
2. **Measurement Standardization**: Use standardized liquids (pure water,
   formamide, diiodomethane)
3. **Drop Volume Consistency**: Maintain consistent droplet size (2-10 μL)
4. **Surface Preparation**: Document cleaning and preparation procedures
5. **Environmental Control**: Temperature 23 ± 2°C, RH 50 ± 10%
6. **Statistical Requirements**: Minimum 5 measurements per sample
7. **Hysteresis Documentation**: Report advancing and receding angles
8. **Time Dependence**: Measure within 10-30 seconds of droplet placement
9. **Substrate Orientation**: Specify horizontal vs. vertical measurement
10. **Electrolyte Relevance**: Test with actual MES electrolytes when relevant

## References

1. **Yuan, Y. & Lee, T.R.** (2013). "Contact angle and wetting properties". In
   _Surface Science Techniques_ (pp. 3-34). Springer, Berlin, Heidelberg.

   - Comprehensive review of contact angle theory and measurement

2. **ASTM D7334-08** (2013). "Standard Practice for Surface Wettability of
   Coatings, Substrates and Pigments by Advancing Contact Angle Measurement".
   ASTM International.

   - Standardized contact angle measurement procedures

3. **Marmur, A.** (2006). "Soft contact: measurement and interpretation of
   contact angles". _Soft Matter_, 2(1), 12-17.

   - Advanced contact angle interpretation and analysis

4. **Wenzel, R.N.** (1936). "Resistance of solid surfaces to wetting by water".
   _Industrial & Engineering Chemistry_, 28(8), 988-994.

   - Classical Wenzel roughness model for contact angles

5. **Cassie, A.B.D. & Baxter, S.** (1944). "Wettability of porous surfaces".
   _Transactions of the Faraday Society_, 40, 546-551.

   - Cassie-Baxter model for composite surface wetting

6. **Zhou, M., et al.** (2011). "An overview of electrode materials in microbial
   fuel cells". _Journal of Power Sources_, 196(10), 4427-4435.

   - Electrode wetting properties in MES applications

7. **Santoro, C., et al.** (2016). "The effects of carbon electrode surface
   properties on bacteria attachment and start up time of microbial fuel cells".
   _Carbon_, 67, 128-139.
   - Hydrophobicity effects on biofilm formation in MFCs

## Application Notes

### Electrode Design Optimization

**Anode Applications**:

- **Target Range**: 60° - 100° contact angle for balanced performance
- **Surface Modification**: Mild oxidation to increase hydrophilicity
- **Biofilm Compatibility**: Moderate hydrophilicity promotes attachment
- **Mass Transfer**: Ensure adequate electrolyte penetration

**Cathode Applications**:

- **Air Cathodes**: Hydrophobic backing (>110°) prevents water flooding
- **Submerged Cathodes**: Moderate hydrophilicity (60° - 90°) for oxygen access
- **Gas Diffusion Layers**: Gradient hydrophobicity for water management
- **Catalyst Layer Interface**: Optimize three-phase contact

### Surface Treatment Methods

**Hydrophilic Enhancement**:

- **Oxygen Plasma**: 2-5 minutes, creates hydroxyl and carboxyl groups
- **Chemical Oxidation**: KMnO₄, H₂O₂ treatment for carbon materials
- **UV/Ozone Treatment**: Photochemical surface oxidation
- **Acid Treatment**: HNO₃, H₂SO₄ for carbon surface functionalization

**Hydrophobic Enhancement**:

- **Fluoropolymer Coating**: PTFE, FEP for extreme hydrophobicity
- **Silicone Treatment**: Polydimethylsiloxane (PDMS) coatings
- **Hydrocarbon Grafting**: Long-chain alkyl modification
- **Physical Roughening**: Combined with low-energy surface treatment

### Laboratory Scale Testing

**Characterization Protocol**:

- Surface cleaning with isopropanol followed by nitrogen drying
- Equilibration at test conditions for 30 minutes minimum
- Multiple measurement locations per sample
- Control samples for method validation
- Photography documentation of droplet shapes

**Quality Control Metrics**:

- Contact angle reproducibility within ±3°
- Hysteresis measurement for surface homogeneity assessment
- Time stability over 60 seconds measurement
- Correlation with surface energy calculations

### Pilot Scale Implementation

**System Design Considerations**:

- Electrode wetting behavior under operational flow conditions
- Long-term stability of surface treatments
- Integration with biofilm development protocols
- Water management in gas diffusion electrodes

**Performance Monitoring**:

- Periodic contact angle measurements during operation
- Correlation with electrochemical performance metrics
- Biofilm development tracking on different hydrophobicity surfaces
- Water transport characterization in membrane systems

### Commercial Scale Optimization

**Manufacturing Integration**:

- Surface treatment specification and quality control
- Batch-to-batch hydrophobicity consistency
- Cost-effective surface modification techniques
- Scalable treatment processes for large electrodes

**Long-Term Performance**:

- Hydrophobicity stability over 1-5 year operation
- Cleaning and maintenance effects on surface properties
- Environmental degradation assessment
- Performance correlation with surface property changes

### Troubleshooting Surface Issues

**Common Problems**:

- **Inconsistent Contact Angles**: Surface contamination or roughness variation
- **Temporal Changes**: Surface aging, contamination, or cleaning effects
- **Poor Biofilm Formation**: Excessive hydrophobicity inhibiting attachment
- **Water Management Issues**: Incorrect hydrophobicity for three-phase
  interfaces

**Diagnostic Procedures**:

- Multi-liquid contact angle analysis for surface energy determination
- Surface chemical analysis (XPS, FTIR) to identify functional groups
- Atomic force microscopy for roughness characterization
- Long-term stability testing under operational conditions

**Corrective Actions**:

- Surface re-treatment with appropriate modification techniques
- Environmental control to prevent contamination
- Protective coatings for stability enhancement
- Design modifications to accommodate surface property limitations
