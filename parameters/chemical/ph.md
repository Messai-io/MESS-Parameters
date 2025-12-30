# pH

## Definition

pH is a logarithmic scale used to specify the acidity or alkalinity of an
aqueous solution in microbial electrochemical systems (MES). It measures the
concentration of hydrogen ions (H+) in the solution, with values ranging from 0
to 14. In MES applications, pH directly affects microbial metabolism, enzyme
activity, proton transfer rates, and overall system performance.

**Formula:** pH = -log₁₀[H⁺]

Where:

- pH = Hydrogen ion potential
- [H⁺] = Hydrogen ion concentration (mol/L)

## Typical Values

Based on MES operational data:

- **Valid Range**: 3.0 - 11.0
- **Typical Range**: 6.0 - 8.0
- **Optimal Range**: 6.5 - 7.5

### Performance Categories:

- **Acidic Operation**: pH 3.0-6.0 (specialized acidophilic systems)
- **Neutral Operation**: pH 6.5-7.5 (most MFC/MEC systems)
- **Alkaline Operation**: pH 8.0-11.0 (specialized alkaliphilic systems)

## Measurement Methods

### Direct Measurement

1. **Glass Electrode pH Meter**:

   - Most common method
   - Accuracy: ±0.01 pH units
   - Requires regular calibration
   - Temperature compensation needed

2. **Ion-Selective Field Effect Transistor (ISFET)**:

   - Solid-state pH sensor
   - Suitable for continuous monitoring
   - More robust than glass electrodes
   - Lower maintenance requirements

3. **Optical pH Sensors**:
   - Based on pH-sensitive fluorophores
   - Non-invasive measurement
   - Suitable for small volumes
   - No electrical interference

### Calibration Requirements

- Two-point calibration minimum (pH 4.0 and 7.0)
- Three-point calibration for wide range (pH 4.0, 7.0, 10.0)
- Daily calibration for critical applications
- Temperature-matched calibration buffers

## Affecting Factors

### Primary Factors

1. **Substrate Metabolism**:

   - Organic acid production decreases pH
   - Protein degradation increases pH
   - Fermentation typically acidifies

2. **Buffer System**:

   - Phosphate buffer (pKa 7.2)
   - Bicarbonate buffer (pKa 6.4)
   - Buffer capacity determines stability

3. **Proton Transfer**:
   - Proton generation at anode
   - Proton consumption at cathode
   - Membrane proton transport

### Secondary Factors

1. **CO₂ Dissolution**:

   - Forms carbonic acid
   - Lowers pH
   - Affected by gas flow rate

2. **Ion Exchange**:
   - Cation/anion balance
   - Salt accumulation effects
   - Membrane selectivity

## Performance Impact

### Microbial Activity

- Most exoelectrogens optimal at pH 6.5-7.5
- pH < 5.0 inhibits most bacteria
- pH > 9.0 causes cell lysis
- Enzyme denaturation at extremes

### Electrochemical Performance

- Nernst potential pH-dependent (59 mV/pH unit)
- Proton availability affects cathode reactions
- Overpotential increases at pH extremes
- Conductivity changes with pH

### System Stability

- Biofilm detachment at pH extremes
- Material corrosion accelerated at low pH
- Precipitate formation at high pH
- Membrane degradation possible

## Related Parameters

### Direct Relationships

- **Alkalinity**: Buffer capacity against pH change
- **VFA Concentration**: Acidification from fermentation
- **Ammonia**: pH affects NH₃/NH₄⁺ equilibrium

### Inverse Relationships

- **CO₂ Solubility**: Higher at lower pH
- **Metal Precipitation**: Increases with pH
- **H₂S Toxicity**: Decreases with increasing pH

## Control Strategies

### pH Adjustment Methods

1. **Chemical Control**:

   - Acid addition (HCl, H₂SO₄)
   - Base addition (NaOH, KOH)
   - Buffer addition (phosphate, bicarbonate)

2. **Biological Control**:

   - Substrate composition modification
   - Retention time adjustment
   - Microbial community management

3. **Physical Control**:
   - CO₂ stripping/addition
   - Membrane selection
   - Flow rate optimization

## Validation Rules

1. **Range Check**: 3.0 ≤ pH ≤ 11.0
2. **Rate of Change**: <0.5 pH units/hour typical
3. **Spatial Variation**: <0.3 pH units across reactor
4. **Temporal Stability**: ±0.2 pH units in steady state

## References

### Key Literature

1. **Torres, C.I., et al. (2008)**. "Selecting anode-respiring bacteria based on
   anode potential: phylogenetic, electrochemical, and microscopic
   characterization". _Environmental Science & Technology_, 42(24), 9519-9525.

   - pH effects on bacterial selection

2. **He, Z., et al. (2008)**. "Effect of electrolyte pH on the rate of the
   anodic and cathodic reactions in an air-cathode microbial fuel cell".
   _Bioelectrochemistry_, 74(1), 78-82.

   - Comprehensive pH impact study

3. **Yuan, Y., et al. (2011)**. "Electrocatalytic activity of anodic biofilm
   responses to pH changes in microbial fuel cells". _Bioresource Technology_,
   102(13), 6887-6893.
   - Biofilm adaptation to pH

### Standards

- **ISO 10523:2008**: Water quality - Determination of pH
- **ASTM D1293**: Standard Test Methods for pH of Water
- **EPA Method 150.1**: pH in Water

## Application Notes

### Operational Guidelines

- Monitor pH continuously in critical applications
- Maintain pH within ±0.5 units of optimum
- Consider local pH gradients near electrodes
- Account for temperature effects on pH measurement

### Troubleshooting

- **Drifting pH**: Check buffer depletion, CO₂ accumulation
- **Sudden pH drop**: Investigate acidogenic fermentation
- **pH stratification**: Improve mixing, check flow patterns
- **Sensor drift**: Recalibrate, check reference electrode
