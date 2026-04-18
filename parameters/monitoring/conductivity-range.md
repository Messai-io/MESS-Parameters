# Conductivity Range

Conductivity range specifies the measurement span of the conductivity sensor employed in microbial electrochemical systems (MES), defining the minimum and maximum solution conductivity values that can be accurately quantified. Solution conductivity is a critical operational parameter in MES because it directly determines the ohmic resistance of the electrolyte, influences ion transport rates through membranes, and serves as a proxy indicator for total dissolved solids, salinity, and buffer capacity.

In MES electrolytes, conductivity typically ranges from 0.5 mS/cm (low-ionic-strength freshwater) to 50 mS/cm (marine or high-buffer-strength solutions), with optimal performance generally observed at 5-20 mS/cm where ohmic losses are minimized without osmotic stress to microorganisms. The conductivity sensor range must encompass the expected variation in electrolyte conductivity throughout the operating cycle, including the effects of substrate addition, ion depletion, and temperature variation (conductivity increases approximately 2% per degree C).

Selecting an appropriate conductivity range is essential because sensors operated near the extremes of their range exhibit degraded accuracy. A sensor with 0-20 mS/cm range provides optimal accuracy at 2-18 mS/cm but may have 5-10% error below 0.5 mS/cm or above 19 mS/cm. For MES applications spanning wide conductivity ranges (e.g., desalination cells where conductivity changes from 50 to 0.5 mS/cm during operation), either auto-ranging sensors or multiple sensors with overlapping ranges are required.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Monitoring Control |
| **Subcategory** | Chemical Sensors |
| **Type** | array |
| **Unit** | mS/cm |

## Typical Values

- **Valid Range**: 0.001 uS/cm - 2000 mS/cm (full instrument capability)
- **Typical Range for MES**: 0.1 - 100 mS/cm
- **Freshwater MES feed**: 0.5-5 mS/cm
- **Buffered MES electrolyte (50 mM PBS)**: 5-10 mS/cm
- **Municipal wastewater**: 1-3 mS/cm
- **Marine/brackish MES**: 20-55 mS/cm
- **Optimal for MFC performance**: 5-20 mS/cm
- **Temperature coefficient**: approximately 2%/degree C

## Measurement Methods

- **Two-Electrode Conductivity Sensors**: Conventional contacting conductivity sensors employ two or four platinum or graphite electrodes of known geometry (cell constant K = 0.01 to 10 cm^-1). An AC excitation voltage (1-10 kHz) drives current through the solution, with the measured conductance multiplied by the cell constant to yield conductivity. Cell constant selection matches the expected range: K = 0.1 cm^-1 for low conductivity (1-200 uS/cm), K = 1.0 cm^-1 for general purpose (10 uS/cm - 200 mS/cm), and K = 10 cm^-1 for high conductivity (1-2000 mS/cm). Accuracy is typically 0.5-2% of reading when operating within the optimal range.
- **Inductive (Toroidal) Conductivity Sensors**: Toroidal conductivity sensors use electromagnetic induction to measure conductivity without electrode-electrolyte contact. Two toroidal coils encased in chemically resistant polymer induce eddy currents in the surrounding solution proportional to its conductivity. Advantages include immunity to fouling, coating, and electrode polarization, making toroidal sensors ideal for wastewater-fed MES. Measurement range spans 0.05-2000 mS/cm with accuracy of 1-2%.
- **Microfluidic Conductivity Measurement**: For miniaturized MES and lab-on-chip devices, microfabricated electrode arrays (10-100 micrometer spacing) provide in-channel conductivity measurement with microliter sample volumes and cell constants of 10-100 cm^-1 suitable for high-conductivity solutions in confined geometries.

## Affecting Factors

### Primary

- **Temperature compensation**: Electrolyte conductivity increases approximately 2% per degree C due to reduced viscosity and increased ion mobility. Accurate measurement requires simultaneous temperature measurement and compensation to a reference temperature (typically 25 degrees C). Non-linear compensation algorithms improve accuracy from 2-5% (linear) to 0.5-1% (polynomial) over wide temperature ranges.
- **Electrode fouling**: In wastewater-fed MES, biofilm growth and mineral scaling on conductivity electrodes reduce effective electrode area, causing drift toward lower readings. Fouling rates of 1-5% per week are typical. Toroidal sensors resist fouling 5-10x better than exposed-electrode designs.
- **Ion composition**: Conductivity depends on specific ions present and their molar conductivities. Changes in MES electrolyte composition during operation alter the relationship between conductivity and specific ion concentrations. A 50 mM NaCl solution has 5.9 mS/cm while 50 mM phosphate buffer has 5.3 mS/cm at the same ionic strength.
- **Measurement frequency**: AC excitation frequency must prevent electrode polarization. Frequencies below 100 Hz show significant polarization errors in high-conductivity solutions. Standard frequencies of 1-10 kHz eliminate polarization for conductivities below 200 mS/cm.
- **Cell constant calibration**: Cell constant must be calibrated using NIST-traceable standards (KCl solutions). Recalibration every 1-3 months maintains accuracy within 1-2%. Electrode material stability affects calibration drift rate.

## Compatible Systems

Sensor Specifications

## References

- Liu, H., Cheng, S., & Logan, B. E. (2005). Power generation in fed-batch microbial fuel cells as a function of ionic strength, temperature, and reactor configuration. *Environmental Science & Technology*, 39(14), 5488-5493.
- Fan, Y., Hu, H., & Liu, H. (2007). Enhanced coulombic efficiency and power density of air-cathode microbial fuel cells. *Journal of Power Sources*, 171(2), 348-354.
- Jacobson, K. S., Drew, D. M., & He, Z. (2011). Efficient salt removal in a continuously operated upflow microbial desalination cell. *Bioresource Technology*, 102(1), 376-380.
- APHA (2017). *Standard Methods for the Examination of Water and Wastewater* (23rd ed.). Method 2510.
- Bard, A. J., & Faulkner, L. R. (2001). *Electrochemical Methods* (2nd ed.). Wiley.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Conductivity+Range&body=**Parameter%3A**+Conductivity+Range%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fconductivity-range.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Conductivity+Range&body=**Parameter%3A**+Conductivity+Range%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fconductivity-range.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Conductivity+Range&body=**Parameter%3A**+Conductivity+Range%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fconductivity-range.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
