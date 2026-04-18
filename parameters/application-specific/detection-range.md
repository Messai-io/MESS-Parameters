# Detection Range

Detection range in microbial electrochemical systems (MES) refers to the span of analyte concentrations over which an MES-based sensor or monitoring device can provide reliable, quantitative measurements. This parameter defines the operational window between the lower detection limit (minimum measurable concentration) and the upper saturation limit (maximum concentration before the sensor response plateaus or becomes nonlinear) for MFC, MEC, or MDC-based biosensors and monitoring systems.

The detection range is a critical performance specification for MES-based environmental sensors, particularly MFC biosensors used for continuous BOD monitoring, toxicity screening, and water quality surveillance. A wide detection range allows a single sensor to monitor analyte concentrations across the full expected range of environmental conditions without requiring sample dilution or concentration, which simplifies deployment and reduces maintenance requirements. The detection range also determines the applicability of an MES sensor to different wastewater types, from dilute municipal effluents to concentrated industrial waste streams.

The shape of the MES sensor's calibration curve (signal vs. concentration) defines the detection range. In the linear region, small concentration changes produce proportional signal changes, enabling accurate quantification. At very low concentrations, the signal approaches the noise floor. At high concentrations, substrate saturation of the biofilm follows Monod-type kinetics, causing the response curve to plateau. Some MES sensors exhibit a useful semi-logarithmic or nonlinear response range beyond the linear region, extending the effective detection range through appropriate calibration models.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Application Specific |
| **Subcategory** | Sensor Specifications |
| **Type** | array |

## Typical Values

- **Valid Range**: Analyte-specific (see below)
- **BOD detection range (MFC-based)**: 5 - 500 mg/L (linear), extendable to 2,000 mg/L with nonlinear calibration
- **COD detection range (MFC-based)**: 10 - 1,000 mg/L (linear)
- **Acetate detection (MFC)**: 1 - 200 mg/L
- **Heavy metals (Cu, Pb, Cd)**: 0.05 - 50 mg/L
- **Toxicant screening (general)**: 0.5 - 100 mg/L
- **Dissolved oxygen (MES-based)**: 0.01 - 8 mg/L
- **Municipal wastewater BOD range**: 100 - 400 mg/L (well within MFC sensor range)
- **Industrial wastewater COD range**: 500 - 100,000 mg/L (may exceed sensor range, requiring dilution)
- **Dynamic range ratio (upper/lower)**: 50:1 to 500:1 for well-designed MFC sensors
- **Conventional BOD5 test range (comparison)**: 2 - 6,000 mg/L (with dilution)

## Measurement Methods

- **Calibration Curve Construction**: 1. Prepare a series of standard solutions spanning from below the expected detection limit to above the expected saturation concentration (minimum 8-10 concentration levels). 2. Measure the MES sensor response (steady-state current, voltage, or charge) at each concentration level in triplicate. 3. Plot the calibration curve and identify the linear range (R-squared >= 0.995) and the extended nonlinear range. 4. Define the detection range as the interval from the detection limit (3*sigma above blank) to the upper limit of quantification.
- **Dynamic Response Testing**: 1. Subject the MES sensor to step changes in analyte concentration from low to high and back. 2. Record the sensor response time (T90) and steady-state signal at each concentration. 3. Verify that the sensor responds reversibly within the stated detection range. 4. Identify any hysteresis effects where the response differs between increasing and decreasing concentrations.
- **Matrix Effect Evaluation**: 1. Test the detection range using both synthetic standards and real sample matrices (actual wastewater). 2. Compare calibration curves between synthetic and real matrices to identify matrix effects. 3. Adjust the practical detection range if matrix interference narrows the effective range. 4. Document any sample pretreatment required to achieve the full detection range in complex matrices.
- **Long-Term Stability Assessment**: 1. Monitor the detection range over extended operation periods (weeks to months). 2. Recalibrate periodically to track any drift in detection limits or saturation levels. 3. Document the time interval over which the detection range remains stable without recalibration. 4. Identify biofilm aging effects that may gradually narrow the detection range.

## Affecting Factors

### Primary

- **Biofilm saturation kinetics**: The half-saturation constant (Ks) of the electrogenic biofilm for the target analyte determines the transition from linear to saturated response, setting the upper end of the linear range.
- **Electrode surface area and architecture**: Larger active electrode areas with three-dimensional architectures extend the upper detection range by accommodating more substrate flux.
- **Mass transport limitations**: Diffusion limitations in thick biofilms or poorly mixed reactors reduce the effective detection range at high concentrations.
- **External resistance**: The external load affects the operating point on the polarization curve, influencing both sensitivity and range.
- **Temperature**: Temperature affects biofilm kinetics and diffusion rates, shifting the detection range boundaries.
- **Competing substrates**: In mixed wastewater, multiple substrates compete for biofilm metabolic capacity, potentially narrowing the detection range for individual analytes.
- **pH**: Extreme pH values outside the optimal range (6.0-8.0) reduce biofilm activity and narrow the detection range.
- **Reactor hydraulics**: Continuous-flow vs. batch mode operation affects the relationship between bulk concentration and the concentration experienced by the biofilm.

## Related Parameters

- **name**: Detection Limit

- **relationship**: The lower boundary of the detection range.
- **name**: Influent BOD

- **relationship**: The expected BOD range of the influent determines the required detection range for BOD monitoring applications.
- **name**: Influent COD

- **relationship**: Similarly, the influent COD range must fall within the sensor's detection range.
- **name**: Wastewater Type

- **relationship**: Different wastewater types have characteristic concentration ranges that must be matched to the sensor detection range.
- **name**: Anomaly Detection

- **relationship**: Detection range determines the measurement window within which anomalies can be identified.

## Compatible Systems

Biosensor Applications

## References

- Chang, I.S. et al. (2005). Improvement of a microbial fuel cell performance as a BOD sensor using respiratory inhibitors. Biosensors and Bioelectronics, 20(9), 1856-1859.
- Di Lorenzo, M. et al. (2014). Effect of increasing anode surface area on the performance of a single chamber microbial fuel cell. Chemical Engineering Journal, 245, 91-98.
- Moon, H. et al. (2004). Improving the dynamic response of a mediator-less microbial fuel cell as a biochemical oxygen demand (BOD) sensor. Biotechnology Letters, 26(22), 1717-1721.
- Peixoto, L. et al. (2011). In situ microbial fuel cell-based biosensor for organic carbon. Bioelectrochemistry, 81(2), 99-103.
- Yang, H. et al. (2015). Microbial fuel cell-based biosensors for environmental monitoring: a review. Water Science & Technology, 71(6), 801-809.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Detection+Range&body=**Parameter%3A**+Detection+Range%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fdetection-range.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Detection+Range&body=**Parameter%3A**+Detection+Range%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fdetection-range.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Detection+Range&body=**Parameter%3A**+Detection+Range%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fdetection-range.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
