# Ch4 Sensor Type

CH4 sensor type defines the measurement technology employed for detecting and quantifying methane gas in microbial electrochemical systems (MES). Methane monitoring is essential in MES because CH4 is a major byproduct of methanogenic activity that competes with electricity generation for organic substrate electrons, a safety hazard at concentrations above 5% in air (lower explosive limit), and a potent greenhouse gas (28x CO2 global warming potential over 100 years). The choice of sensor technology determines measurement range, selectivity, response time, long-term stability, and cost, all of which must be matched to the specific MES monitoring requirements.

The principal CH4 sensor technologies for MES applications include non-dispersive infrared (NDIR) absorption, catalytic combustion (pellistor), metal oxide semiconductor (MOS), electrochemical cells, and tunable diode laser absorption spectroscopy (TDLAS). Each technology operates on fundamentally different physical principles, offering distinct advantages for different MES deployment scenarios. NDIR sensors provide the best combination of selectivity, range, and stability for continuous headspace monitoring. Catalytic sensors excel at safety monitoring in the 0-100% LEL range. MOS sensors offer low-cost screening with moderate selectivity. TDLAS provides research-grade accuracy for isotope-resolved measurements that distinguish biogenic from thermogenic methane.

Selecting the appropriate CH4 sensor for MES requires consideration of the expected CH4 concentration range (0.001-100% depending on system type), presence of interfering gases (CO2, H2S, H2, water vapor), environmental conditions (temperature, humidity, pressure), required accuracy and response time, and maintenance capability. For research MES, GC-FID remains the gold standard for periodic measurements, while NDIR sensors provide continuous monitoring with acceptable accuracy. For field-deployed MES, robust NDIR or catalytic sensors with remote data transmission enable unattended operation.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Monitoring Control |
| **Subcategory** | Gas Sensors |
| **Type** | select |

## Typical Values

- **NDIR sensors**: 0-100% CH4 range, 0.01-0.1% resolution, 5-30 s response time
- **Catalytic (pellistor)**: 0-100% LEL (0-5% CH4), 0.1% resolution, 10-30 s response
- **Metal oxide semiconductor**: 10-10,000 ppm, semi-quantitative, 1-30 s response
- **Electrochemical**: 0-100% CH4, 0.5% resolution, 30-90 s response
- **TDLAS**: 0.1 ppm - 100%, 0.01 ppm resolution, less than 1 s response
- **GC-FID (reference)**: 1 ppm - 100%, 0.1 ppm resolution, 5-15 min per analysis
- **Sensor lifetime**: 2-10 years (NDIR), 2-5 years (catalytic), 1-3 years (MOS)
- **Cost range**: $50-500 (MOS), $200-2000 (NDIR), $1000-5000 (catalytic system), $5000-50,000 (TDLAS)

## Measurement Methods

- **Non-Dispersive Infrared (NDIR)**: NDIR sensors (Edinburgh Instruments Gascard, Dynament, Amphenol SGX Sensortech) measure CH4 by its absorption of infrared radiation at the 3.3 micrometer (C-H stretching) fundamental band. A broadband IR source illuminates a sample cell through which headspace gas flows; a narrowband optical filter centered at 3.3 micrometers passes only the CH4-absorbed wavelengths to a pyroelectric or thermopile detector. A reference channel at a non-absorbing wavelength (e.g., 4.0 micrometers) compensates for source aging, detector drift, and window contamination. NDIR sensors achieve 0.01-0.1% CH4 resolution with less than 2% full-scale accuracy and T90 response times of 5-30 seconds. Cross-sensitivity to other hydrocarbons (ethane, propane) that absorb at similar wavelengths requires correction in biogas-rich MES environments. Sensor lifetime exceeds 5-10 years with no consumable components.
- **Catalytic Combustion (Pellistor)**: Pellistor sensors detect CH4 through catalytic oxidation on a platinum-doped bead, with the resulting temperature rise (proportional to CH4 concentration) measured as a resistance change in a Wheatstone bridge circuit. A matched reference bead without catalyst compensates for ambient temperature changes. Measurement range is 0-100% LEL (0-5% CH4 in air) with 0.1% LEL resolution. Pellistors require oxygen (more than 10% O2) for operation, making them unsuitable for anaerobic MES headspaces but ideal for monitoring CH4 in ambient air around MES installations for safety purposes. Catalyst poisoning by H2S, silicones, and halogenated compounds reduces sensitivity over time, requiring calibration every 3-6 months and sensor replacement every 2-5 years.
- **Tunable Diode Laser Absorption Spectroscopy (TDLAS)**: TDLAS instruments scan a single-mode diode laser across individual CH4 absorption lines in the near-infrared (1.65 micrometers) or mid-infrared (3.3 micrometers) region, measuring the line shape and intensity with sub-ppm precision. Wavelength modulation spectroscopy (WMS) with 2f harmonic detection achieves detection limits of 0.1-10 ppb with 1-second time resolution. TDLAS provides absolute concentration measurement without calibration gas (traceable to HITRAN spectral database) and can distinguish 12CH4 from 13CH4 for isotope ratio analysis. The isotope signature (delta-13C) differentiates biogenic methane (delta-13C = -50 to -70 per mil) from thermogenic sources in MES, providing diagnostic information about methanogenic pathways.

## Affecting Factors

### Primary

- **Expected concentration range**: MES headspace CH4 ranges from less than 100 ppm (well-suppressed methanogenesis) to more than 60% (comparable to anaerobic digester biogas). NDIR sensors with dual-range capability (0-5% and 0-100%) cover the full range. Catalytic sensors are limited to 0-5% (0-100% LEL) and are appropriate only for safety monitoring. TDLAS provides the widest dynamic range (ppb to 100%) in a single instrument.
- **Interfering gases**: MES headspace contains CO2 (5-50%), H2 (0-90% in MECs), H2S (1-5000 ppm), and water vapor (saturated). NDIR CH4 sensors have cross-sensitivity to CO2 (1-3% of CO2 reading appears as CH4) and to water vapor (0.5-2% error at saturation). Optical filters with narrower bandwidths reduce these interferences. Catalytic sensors respond to any combustible gas (H2, CO, hydrocarbons), requiring correction for H2 content in MEC headspace. MOS sensors have broad cross-sensitivity to many organic and inorganic reducing gases.
- **Temperature and humidity**: Sensor performance varies with ambient temperature and humidity. NDIR sensors require temperature compensation (0.01-0.1% per degree C) and sample conditioning to prevent condensation on optical windows. Catalytic sensors show 0.5-1% LEL per 10 degrees C temperature sensitivity. MOS sensors are highly temperature-sensitive (requiring heater control to within 1 degree C). Sample gas drying (Nafion dryers, condensation traps) is recommended for all sensor types when measuring gas from saturated MES headspaces.
- **Response time requirements**: Continuous process monitoring typically requires T90 response times below 60 seconds, achievable by all sensor types. Safety monitoring demands T50 response below 10 seconds, favoring catalytic and NDIR sensors. Research applications requiring correlation with fast electrochemical transients need sub-second response, achievable only with TDLAS or specially configured NDIR sensors with small sample cells and high flow rates.
- **Maintenance and calibration**: NDIR sensors require minimal maintenance (annual zero/span calibration, optical window inspection). Catalytic sensors need quarterly calibration and periodic replacement (2-5 year lifetime). MOS sensors drift significantly and require monthly calibration. TDLAS systems are essentially self-calibrating but require periodic alignment verification. For remote or unattended MES installations, the maintenance burden of the sensor technology must be matched to the available service schedule.

## Compatible Systems

Sensor Specifications

## References

- Hodgkinson, J., & Tatam, R. P. (2013). Optical gas sensing: A review. *Measurement Science and Technology*, 24(1), 012004.
- Liu, X., et al. (2012). A survey on gas sensing technology. *Sensors*, 12(7), 9635-9665.
- Bakker, E., & Telting-Diaz, M. (2002). Electrochemical sensors. *Analytical Chemistry*, 74(12), 2781-2800.
- Eugster, W., & Kling, G. W. (2012). Performance of a low-cost methane sensor for ambient concentration measurements in preliminary studies. *Atmospheric Measurement Techniques*, 5(8), 1925-1934.
- Werle, P., et al. (2002). Near- and mid-infrared laser-optical sensors for gas analysis. *Optics and Lasers in Engineering*, 37(2-3), 101-114.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Ch4+Sensor+Type&body=**Parameter%3A**+Ch4+Sensor+Type%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fch4-sensor-type.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Ch4+Sensor+Type&body=**Parameter%3A**+Ch4+Sensor+Type%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fch4-sensor-type.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Ch4+Sensor+Type&body=**Parameter%3A**+Ch4+Sensor+Type%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fch4-sensor-type.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
