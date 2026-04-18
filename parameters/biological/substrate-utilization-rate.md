# Substrate Utilization Rate

🟢 **Universal Application**: All MES Systems (MFC, MEC, MDC, MES-BES, MES-EF)

### Definition

Substrate utilization rate quantifies the speed at which microorganisms consume
organic or inorganic electron donors in bioelectrochemical systems, typically
expressed as mass or molar units per unit time per unit biomass (g/g·h or
mol/g·h) or per unit reactor volume (g/L·h or mol/L·h). This parameter directly
reflects the metabolic activity of the microbial community and determines the
maximum current generation potential, as electron flow to the anode is
stoichiometrically linked to substrate oxidation. The utilization rate
encompasses both the kinetics of substrate uptake across cell membranes and the
subsequent intracellular metabolic processing through various catabolic
pathways.

### Bioelectrochemical Context

In MES applications, substrate utilization rate represents the primary
bottleneck for electron generation and system performance. Unlike conventional
biological treatment where complete mineralization is the goal,
bioelectrochemical systems require efficient coupling between substrate
oxidation and extracellular electron transfer. This creates unique selection
pressures favoring organisms that can rapidly oxidize substrates while
maintaining high coulombic efficiency. The optimal utilization rate balances
rapid substrate consumption with complete electron recovery, avoiding
fermentation pathways that divert electrons from the electrode.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Biological |
| **Type** | number |
| **Unit** | mg/L·h |

## Measurement Methods

- **Chemical Analysis Methods**: #
- **High-Performance Liquid Chromatography (HPLC)**: **Protocol for Organic Acid Substrates**:  1. **Sample Preparation** (30 minutes)     - Collection: 1 mL samples at regular intervals    - Immediate filtration: 0.22 μm syringe filter    - Acidification: Add H₂SO₄ to pH 2-3    - Storage: -20°C if not analyzed immediately    - Dilution: As needed for concentration range  2. **HPLC Conditions**     - Column: Aminex HPX-87H (300 × 7.8 mm)    - Mobile phase: 5 mM H₂SO₄    - Flow rate: 0.6 mL/min    - Temperature: 60°C    - Detector: UV at 210 nm, RI for sugars    - Injection volume: 20 μL  3. **Data Analysis**     ```python    def calculate_utilization_rate(concentrations, times, volume, biomass):        """        Calculate substrate utilization rate from HPLC data        """        import numpy as np        from scipy import stats         # Linear regression of concentration vs time        slope, intercept, r_value, p_value, std_err = \            stats.linregress(times, concentrations)         # Volumetric utilization rate (g/L/h)        volumetric_rate = -slope  # Negative slope = consumption         # Specific utilization rate (g/g biomass/h)        specific_rate = volumetric_rate * volume / biomass         # Calculate half-life        if slope < 0:            half_life = np.log(2) / (-slope / intercept)        else:            half_life = np.inf         return {            'volumetric_rate': volumetric_rate,            'specific_rate': specific_rate,            'r_squared': r_value**2,            'half_life': half_life,            'confidence_95': 1.96 * std_err        }    ```  **Common Substrates and Retention Times**:  - Acetate: 14.7 min - Propionate: 18.2 min - Butyrate: 22.5 min - Lactate: 12.8 min - Glucose: 9.2 min (RI detector)  #
- **Gas Chromatography (GC)**: **For Volatile Substrates**:  1. **Sample Preparation**     - Headspace sampling for volatiles    - Liquid samples: Internal standard addition    - Derivatization if needed (BSTFA for alcohols)  2. **GC Conditions**     - Column: DB-FFAP (30 m × 0.25 mm × 0.25 μm)    - Carrier gas: Helium at 1.5 mL/min    - Temperature program: 50°C (2 min), 10°C/min to 250°C    - Detector: FID for organics, TCD for gases    - Split ratio: 1:10  3. **Quantification**    - External calibration curves    - Internal standard correction    - Peak area integration    - Detection limits: 0.1-1 mg/L
- **Spectrophotometric Methods**: #
- **COD Measurement**: **Chemical Oxygen Demand Protocol**:  1. **Digestion Method**     - Sample volume: 2 mL    - Digestion solution: K₂Cr₂O₇ in H₂SO₄    - Temperature: 150°C    - Time: 2 hours    - Cool to room temperature  2. **Measurement**     - Wavelength: 600 nm (Cr³⁺) or 420 nm (Cr₆⁺)    - Blank correction essential    - Range: 0-1500 mg/L  3. **Rate Calculation**     ```javascript    function calculateCODRemovalRate(measurements) {      const rates = [];       for (let i = 1; i < measurements.length; i++) {        const dt = measurements[i].time - measurements[i - 1].time;        const dCOD = measurements[i - 1].COD - measurements[i].COD;         const rate = dCOD / dt; // mg/L/h        rates.push({          time: (measurements[i].time + measurements[i - 1].time) / 2,          rate: rate,          efficiency: (dCOD / measurements[0].COD) * 100,        });      }       // Average rate      const avgRate = rates.reduce((sum, r) => sum + r.rate, 0) / rates.length;       // Specific rate (per biomass)      const biomass = getBiomassConcentration(); // g/L      const specificRate = avgRate / biomass / 1000; // g COD/g biomass/h       return {        instantaneous_rates: rates,        average_rate: avgRate,        specific_rate: specificRate,      };    }    ```  #
- **Enzymatic Assays**: **Glucose Oxidase Method**:  1. **Reagent Preparation**     - Glucose oxidase: 10 U/mL    - Peroxidase: 1 U/mL    - o-Dianisidine: 0.1 mg/mL    - Buffer: 0.1 M phosphate, pH 7.0  2. **Assay Protocol**     - Sample: 50 μL    - Reagent: 950 μL    - Incubation: 30 min at 37°C    - Stop reaction: 2 M H₂SO₄    - Read: 540 nm  3. **Kinetic Analysis**    - Continuous monitoring possible    - Linear range: 0-500 mg/L    - Sensitivity: 1 mg/L
- **Electrochemical Monitoring**: #
- **Coulombic Efficiency Correlation**: **Electron Balance Method**:  ```python def substrate_from_current(current, time, substrate_type='acetate'):     """     Calculate substrate consumption from current data     """     # Faraday constant     F = 96485  # C/mol      # Total charge     charge = current * time  # Coulombs      # Electrons transferred     electrons = charge / F  # mol e⁻      # Substrate-specific stoichiometry     stoichiometry = {         'acetate': 8,      # 8 e⁻ per acetate         'glucose': 24,     # 24 e⁻ per glucose         'lactate': 12,     # 12 e⁻ per lactate         'propionate': 14,  # 14 e⁻ per propionate         'butyrate': 20     # 20 e⁻ per butyrate     }      # Substrate consumed     n_electrons = stoichiometry.get(substrate_type, 8)     substrate_mol = electrons / n_electrons      # Convert to mass     molecular_weights = {         'acetate': 59,         'glucose': 180,         'lactate': 89,         'propionate': 73,         'butyrate': 87     }      substrate_mass = substrate_mol * molecular_weights[substrate_type]      return {         'moles_consumed': substrate_mol,         'mass_consumed': substrate_mass,         'utilization_rate': substrate_mass / time,         'coulombic_efficiency_check': True     } ```
- **Online Monitoring Systems**: #
- **Biosensor Arrays**: **Multi-parameter Monitoring**:  1. **Sensor Configuration**     - Glucose biosensor: GOx-modified electrode    - Lactate biosensor: LOx-modified electrode    - Acetate biosensor: Microbial sensor    - Response time: <60 seconds  2. **Calibration Protocol**     - Daily calibration with standards    - Temperature compensation    - Drift correction algorithms    - Cross-sensitivity assessment  3. **Data Integration**     ```python    class SubstrateMonitor:        def __init__(self, sensors):            self.sensors = sensors            self.calibrations = {}            self.data = []         def calibrate(self, sensor_id, standards):            """Calibrate individual sensor"""            from sklearn.linear_model import LinearRegression             X = [[s['concentration']] for s in standards]            y = [s['signal'] for s in standards]             model = LinearRegression()            model.fit(X, y)             self.calibrations[sensor_id] = model         def measure(self):            """Take simultaneous measurements"""            measurements = {}            for sensor in self.sensors:                signal = sensor.read()                if sensor.id in self.calibrations:                    conc = self.calibrations[sensor.id].predict([[signal]])[0]                    measurements[sensor.substrate] = conc             self.data.append({                'timestamp': time.time(),                'concentrations': measurements            })             return measurements         def calculate_rates(self, window=3600):            """Calculate utilization rates over time window"""            recent = [d for d in self.data                     if time.time() - d['timestamp'] < window]             if len(recent) < 2:                return None             rates = {}            for substrate in recent[0]['concentrations'].keys():                concs = [d['concentrations'][substrate] for d in recent]                times = [d['timestamp'] for d in recent]                 # Linear regression for rate                slope = np.polyfit(times, concs, 1)[0]                rates[substrate] = -slope * 3600  # Convert to per hour             return rates    ```

## Performance Impact

### Microbial Fuel Cells (MFC)

**Substrate-Specific Utilization Rates**:

#### Simple Substrates

- **Acetate**:

  - Range: 100-500 mg/L/h
  - Optimal: 250-350 mg/L/h
  - Specific rate: 0.5-2.0 g/g biomass/h
  - Coulombic efficiency: 60-80%

- **Glucose**:

  - Range: 200-800 mg/L/h
  - Optimal: 400-600 mg/L/h
  - Specific rate: 1.0-3.0 g/g biomass/h
  - Coulombic efficiency: 20-40%

- **Lactate**:
  - Range: 150-600 mg/L/h
  - Optimal: 300-450 mg/L/h
  - Specific rate: 0.8-2.5 g/g biomass/h
  - Coulombic efficiency: 40-60%

#### Complex Substrates

- **Wastewater**:

  - COD removal: 50-300 mg/L/h
  - BOD removal: 40-250 mg/L/h
  - Variable efficiency: 10-30%

- **Brewery waste**:
  - COD removal: 200-600 mg/L/h
  - High organics: Rapid initial rate
  - Declining rate with recalcitrants

**Operational Mode Effects**:

```python
def utilization_by_mode(mode, substrate_conc, HRT):
    """
    Model utilization rates for different operational modes
    """
    if mode == 'batch':
        # Monod kinetics with decay
        Vmax = 500  # mg/L/h
        Ks = 100    # mg/L
        rate = Vmax * substrate_conc / (Ks + substrate_conc)
        # Time-dependent decay
        rate *= np.exp(-0.1 * time_elapsed)

    elif mode == 'continuous':
        # Steady-state assumption
        rate = substrate_conc / HRT

    elif mode == 'fed-batch':
        # Periodic substrate addition
        if feeding_phase:
            rate = 600  # mg/L/h during feeding
        else:
            rate = 200  # mg/L/h between feeds

    return rate
```

### Microbial Electrolysis Cells (MEC)

**Enhanced Utilization with Applied Potential**:

- Base rate increase: 20-50% vs MFC
- Acetate: 300-700 mg/L/h
- Glucose: 400-1000 mg/L/h
- Complex organics: 100-500 mg COD/L/h

**Product-Dependent Rates**:

```javascript
function MECutilizationRate(product, appliedVoltage, substrate) {
  let baseRate;

  // Base rates by product (mg/L/h)
  const productRates = {
    H2: 400,
    CH4: 350,
    acetate: 300,
    ethanol: 320,
  };

  baseRate = productRates[product] || 350;

  // Voltage enhancement factor
  const voltageFactor = 1 + 0.5 * (appliedVoltage - 0.2);

  // Substrate-specific factor
  const substrateFactor =
    {
      acetate: 1.0,
      glucose: 0.8,
      glycerol: 0.9,
      wastewater: 0.6,
    }[substrate] || 0.7;

  const finalRate = baseRate * voltageFactor * substrateFactor;

  return {
    utilization_rate: finalRate,
    unit: 'mg/L/h',
    efficiency_estimate: (finalRate / 500) * 100,
  };
}
```

### Microbial Desalination Cells (MDC)

**Salinity Effects on Utilization**:

- Low salinity (<5 g/L): Normal rates
- Medium (5-20 g/L): 10-20% reduction
- High (>20 g/L): 30-50% reduction
- Adaptation possible over time

**Substrate Utilization Profiles**:

1. **Anode Chamber**

   - Similar to MFC rates
   - Acetate: 200-400 mg/L/h
   - Affected by salt migration

2. **Salt Migration Impact**
   - Osmotic stress effects
   - Reduced metabolic efficiency
   - Recovery time needed

### Bioelectrochemical Synthesis (BES)

**Substrate Requirements by Product**:

- CO₂ to acetate: 50-200 mg C/L/h
- CO₂ to ethanol: 40-150 mg C/L/h
- CO₂ to butyrate: 30-120 mg C/L/h
- Glycerol to 1,3-propanediol: 100-300 mg/L/h

**Electron Donor Utilization**:

```python
def BES_substrate_requirement(product, production_rate):
    """
    Calculate substrate needs for BES production
    """
    # Stoichiometric requirements (mol substrate/mol product)
    stoichiometry = {
        'acetate_from_CO2': 0.25,  # H2 or organic donor
        'ethanol_from_CO2': 0.33,
        'methane_from_CO2': 0.125,
        '1,3-PDO_from_glycerol': 1.0
    }

    # Molecular weights
    MW_product = {'acetate': 60, 'ethanol': 46,
                  'methane': 16, '1,3-PDO': 76}

    # Calculate substrate requirement
    product_mol = production_rate / MW_product[product.split('_')[0]]
    substrate_mol = product_mol * stoichiometry[product]

    # Convert to mass rate
    substrate_rate = substrate_mol * get_MW(substrate)

    return substrate_rate
```

## Compatible Systems

Kinetics

## References

### Foundational Studies

1. **Rabaey, K., & Verstraete, W. (2005)**. "Microbial fuel cells: Novel
   biotechnology for energy generation." _Trends in Biotechnology_, 23(6),
   291-298.

   - Substrate utilization in MFCs
   - Efficiency calculations
   - Performance limitations

2. **Pant, D., et al. (2010)**. "A review of the substrates used in microbial
   fuel cells." _Bioresource Technology_, 101(6), 1533-1543.

   - Comprehensive substrate comparison
   - Utilization rates compilation
   - Efficiency analysis

3. **Chae, K. J., et al. (2009)**. "Effect of different substrates on the
   performance of microbial fuel cells." _Bioresource Technology_, 100(14),
   3518-3525.
   - Substrate-specific kinetics
   - Comparative utilization rates
   - Coulombic efficiency correlation

### Recent Advances (2020-2024)

4. **Li, M., et al. (2023)**. "Enhanced substrate utilization through metabolic
   engineering." _Biotechnology Advances_, 61, 108234.

   - Genetic optimization strategies
   - Improved utilization rates
   - Industrial applications

5. **Wang, Y., et al. (2024)**. "Real-time substrate monitoring in
   bioelectrochemical systems." _Biosensors and Bioelectronics_, 225, 115678.
   - Advanced monitoring techniques
   - Online optimization
   - AI-based control

[40+ additional references would continue...]

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Substrate+Utilization+Rate&body=**Parameter%3A**+Substrate+Utilization+Rate%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fsubstrate-utilization-rate.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Substrate+Utilization+Rate&body=**Parameter%3A**+Substrate+Utilization+Rate%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fsubstrate-utilization-rate.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Substrate+Utilization+Rate&body=**Parameter%3A**+Substrate+Utilization+Rate%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fsubstrate-utilization-rate.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
