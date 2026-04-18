# Open Circuit Voltage

Open Circuit Voltage (OCV) is the maximum voltage produced by a microbial fuel
cell when no current flows through the external circuit (infinite external
resistance). It represents the theoretical maximum voltage achievable based on
the redox potential difference between the anode and cathode, minus internal
losses.

**Formula:** OCV = Ecathode - Eanode - ηactivation - ηconcentration

Where:

- Ecathode = Cathode redox potential (V vs. SHE)
- Eanode = Anode redox potential (V vs. SHE)
- ηactivation = Activation overpotential (V)
- ηconcentration = Concentration overpotential (V)

## Basic Information

| Property | Value |
|---|---|
| **Category** | Performance |
| **Subcategory** | Current & Voltage Metrics |
| **Type** | number |
| **Unit** | V |
| **Minimum** | 0 |
| **Maximum** | 2 |
| **Papers Reporting** | 56 |

## Typical Values

- **text**: **Range:** 0.3-0.8 V **Typical:** 0.5-0.6 V **Outlier Threshold:** <0.2 V
or >1.0 V

### Performance Categories:

- **Excellent:** 0.7-0.8 V (Optimized systems with minimal losses)
- **Good:** 0.6-0.7 V (Well-designed laboratory systems)
- **Standard:** 0.5-0.6 V (Typical MFC performance)
- **Poor:** <0.5 V (High internal losses or poor design)

## Measurement Methods

- **Direct Measurement**: 1. **High Impedance Voltmeter**     - Input impedance >10 MΩ    - Accuracy: ±1 mV    - Sampling rate: 1 Hz minimum  2. **Data Acquisition System**     - 16-bit resolution recommended    - Differential input configuration    - Noise filtering capability  3. **Potentiostat in OCV Mode**    - Zero current control    - High precision measurement    - Temperature compensation available
- **Measurement Protocol**: 1. Allow system stabilization (30-60 minutes) 2. Ensure no current flow (disconnect load) 3. Record voltage for 10-30 minutes 4. Report average stable value 5. Note temperature and time

## Affecting Factors

- **text**: ### Primary Factors

- **Substrate Type:** Acetate (0.6-0.7 V) > Glucose (0.5-0.6 V) > Wastewater
  (0.4-0.5 V)
- **Cathode Catalyst:** Pt > MnO2 > Carbon
- **pH Gradient:** 59 mV per pH unit difference (Nernst equation)
- **Temperature:** +2-3 mV/°C typical temperature coefficient
- **Microbial Activity:** Active biofilm increases anode potential

### Secondary Factors

- **Membrane Type:** PEM allows higher OCV than CEM
- **Dissolved Oxygen:** O2 crossover reduces OCV
- **Ionic Strength:** Affects liquid junction potentials
- **Biofilm Thickness:** Thick biofilms may limit substrate access
- **Electrode Materials:** Carbon cloth > Carbon paper > Graphite

## Performance Impact

### Relationship to Power Output

- **Maximum Power:** Typically occurs at 0.4-0.5 × OCV
- **Power Density:** Higher OCV generally indicates higher potential power
- **Internal Resistance:** Can be estimated from OCV and polarization curves
- **System Health:** Declining OCV indicates system degradation

### Diagnostic Value

- Sudden OCV drop: Membrane failure or short circuit
- Gradual decline: Biofilm aging or substrate depletion
- Unstable OCV: Poor electrical connections or gas bubbles
- Low initial OCV: Design flaws or contamination

## References

1. Logan, B. E., et al. (2006). "Microbial fuel cells: methodology and
   technology" Environmental Science & Technology, 40(17), 5181-5192.
2. Zhao, F., et al. (2006). "Application of pyrolysed iron(II) phthalocyanine
   and CoTMPP based oxygen reduction catalysts as cathode materials in microbial
   fuel cells" Electrochemistry Communications, 8(5), 883-888.
3. He, Z., & Mansfeld, F. (2009). "Exploring the use of electrochemical
   impedance spectroscopy (EIS) in microbial fuel cell studies" Energy &
   Environmental Science, 2(2), 215-219.
4. Fan, Y., et al. (2008). "Improved performance of CEA microbial fuel cells
   with increased reactor size" Energy & Environmental Science, 1(1), 172-176.
5. Torres, C. I., et al. (2010). "A kinetic perspective on extracellular
   electron transfer by anode-respiring bacteria" FEMS Microbiology Reviews,
   34(1), 3-17.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Open+Circuit+Voltage&body=**Parameter%3A**+Open+Circuit+Voltage%0A**Category%3A**+Performance%0A**File%3A**+parameters%2Fperformance%2Fopen-circuit-voltage.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Open+Circuit+Voltage&body=**Parameter%3A**+Open+Circuit+Voltage%0A**Category%3A**+Performance%0A**File%3A**+parameters%2Fperformance%2Fopen-circuit-voltage.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Open+Circuit+Voltage&body=**Parameter%3A**+Open+Circuit+Voltage%0A**Category%3A**+Performance%0A**File%3A**+parameters%2Fperformance%2Fopen-circuit-voltage.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
