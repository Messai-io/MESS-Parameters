# Uv B Intensity

UV-B intensity measures the irradiance of ultraviolet-B radiation (280-315 nm wavelength band) at microbial electrochemical systems (MES), expressed in watts per square meter (W/m^2). UV-B photons carry sufficient energy (3.9-4.4 eV) to directly damage DNA through cyclobutane pyrimidine dimer (CPD) formation and to degrade many organic materials including polymer membranes, electrode binders, and extracellular polymeric substances. In outdoor MES installations, UV-B exposure is a significant environmental stress factor that affects microbial viability, biofilm stability, and material longevity.

UV-B constitutes only 1-2% of total solar irradiance at Earth's surface (approximately 1-3 W/m^2 at noon, mid-latitude summer) due to strong stratospheric ozone absorption, but its high photon energy makes it disproportionately damaging to biological systems. DNA absorption peaks at 260 nm (in the UV-C band) but extends significantly into the UV-B range, with sufficient photochemical yield to cause mutagenesis and cell death at cumulative doses as low as 10-100 J/m^2. For MES, UV-B exposure of the anodic biofilm can reduce electroactive bacterial viability by 50-90% within hours of direct exposure, making UV-B shielding essential for outdoor systems with transparent reactor components.

Conversely, controlled UV-B exposure can be beneficial for MES applications including disinfection of cathode effluent, photocatalytic enhancement of contaminant degradation, and selective suppression of unwanted microbial populations (methanogens, pathogens) at the cathode. UV-B-enhanced advanced oxidation processes (UV/H2O2, UV/TiO2) in the cathodic chamber can achieve synergistic pollutant removal when combined with electrochemical reduction, offering a pathway to integrated water treatment and energy recovery.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Environmental |
| **Subcategory** | Light Spectrum |
| **Type** | number |
| **Unit** | W/m² |
| **Minimum** | 0 |
| **Maximum** | 10 |

## Typical Values

- **Valid Range**: 0 - 10 W/m^2
- **Typical Range**: 0 - 3 W/m^2
- **Peak solar UV-B (noon, summer, 45 degrees N)**: 1.5-2.5 W/m^2
- **Peak solar UV-B (noon, summer, equator)**: 2.5-3.5 W/m^2
- **Overcast sky UV-B**: 0.1-0.5 W/m^2
- **UV-B lamp (311 nm narrowband, at 30 cm)**: 1-10 mW/cm^2
- **Indoor (no UV sources)**: less than 0.001 W/m^2
- **Minimum erythemal dose (human skin)**: approximately 200 J/m^2
- **DNA damage threshold (bacteria)**: 10-100 J/m^2 cumulative

## Measurement Methods

- **UV-B Broadband Radiometer**: UV-B radiometers (Solar Light PMA2102, Yankee Environmental UVB-1) use filtered detectors with spectral response matched to the 280-315 nm band. Erythemal weighting (matching the CIE action spectrum for sunburn) is common in environmental monitoring but inappropriate for MES applications where DNA damage weighting or flat spectral response is more relevant. Unweighted UV-B radiometers provide total UV-B irradiance (W/m^2) with accuracy of 5-10%. Calibration is performed against NIST standards or WMO reference UV instruments.
- **Spectroradiometer**: UV spectroradiometers (Bentham DTMc300, Brewer spectrophotometer) measure spectral irradiance from 280-325 nm at 0.5-1 nm resolution. Integration over the 280-315 nm band provides total UV-B irradiance with the spectral detail needed for biological effective dose calculations using DNA action spectra or photocatalytic efficiency spectra. Stray light rejection better than 10^-6 is essential for accurate UV-B measurement in the presence of much stronger UV-A and visible radiation (UV-B is only 1% of total solar irradiance).
- **Biological Dosimeters**: Polysulphone film dosimeters undergo UV-induced changes in optical absorption proportional to cumulative UV-B dose. The change in absorbance at 330 nm after exposure provides a dose measurement from 10 to 10,000 J/m^2 with accuracy of 10-15%. These dosimeters are inexpensive, require no power, and can be placed directly on MES reactor surfaces to measure the actual UV-B dose received over hours to days, accounting for all geometric and material transmission factors. Spore-based biodosimeters (B. subtilis) provide biologically weighted UV dose assessment.

## Affecting Factors

### Primary

- **Stratospheric ozone column**: Ozone strongly absorbs UV-B (absorption cross-section 10^-18 to 10^-17 cm^2 across 280-315 nm), with each 1% decrease in ozone column depth increasing surface UV-B by approximately 1.5-2% (radiation amplification factor). The ozone hole over Antarctica can reduce ozone by 50-70%, doubling UV-B intensity. Mid-latitude ozone depletion of 3-6% since 1980 has increased UV-B by 5-12%.
- **Solar elevation and atmospheric path**: UV-B is more strongly attenuated by the atmosphere than UV-A or visible light, creating extreme diurnal variation. At solar noon (minimal atmospheric path), UV-B is maximal; at 30 degrees solar elevation, UV-B is reduced to 30-50% of zenith value; and at 10 degrees elevation, UV-B is less than 5% of maximum. This strong angular dependence means that UV-B exposure of MES is concentrated in a narrow window around solar noon.
- **Reactor material UV-B transmission**: Standard glass is essentially opaque to UV-B (less than 5% transmission below 315 nm), providing effective UV-B shielding for internal MES components. Quartz glass transmits 85-95% of UV-B. Acrylic (PMMA) transmits 50-80% at 300-315 nm but blocks wavelengths below 300 nm. FEP and ETFE fluoropolymer films transmit 85-95% of UV-B and are used in photo-BEC and photocatalytic MES applications requiring UV-B access.
- **Water column UV-B absorption**: Dissolved organic matter absorbs UV-B much more strongly than UV-A. Absorption coefficients of 10-100 m^-1 are typical for MES electrolytes containing wastewater-derived DOM. At an absorption coefficient of 50 m^-1, UV-B intensity is reduced to 1% of surface value within 1 cm path length. This strong absorption confines UV-B effects to an extremely thin surface layer, limiting utility for volumetric treatment but enabling surface-specific applications.
- **Altitude and surface albedo**: UV-B increases approximately 10-12% per 1000 m elevation gain due to reduced atmospheric absorption. High-albedo surfaces (snow: 50-90% UV reflection, white concrete: 10-25%, water: 5-10%) increase UV-B exposure of MES through reflected radiation. Horizontal reactor surfaces receive both direct and reflected UV-B, while vertical surfaces receive primarily reflected UV-B from surrounding surfaces.

## Compatible Systems

Light Radiation Parameters

## References

- Bornman, J. F., et al. (2019). Linkages between stratospheric ozone, UV radiation and climate change and their implications for terrestrial ecosystems. *Photochemical & Photobiological Sciences*, 18, 681-716.
- Bolton, J. R., & Linden, K. G. (2003). Standardization of methods for fluence (UV dose) determination in bench-scale UV experiments. *Journal of Environmental Engineering*, 129(3), 209-215.
- Harm, W. (1980). *Biological Effects of Ultraviolet Radiation*. Cambridge University Press.
- WHO (2002). *Global Solar UV Index: A Practical Guide*. World Health Organization.
- Blatchley, E. R., III, et al. (2012). The biological basis of UV-induced disinfection. *Journal of Environmental Engineering*, 138(8), 857-866.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Uv+B+Intensity&body=**Parameter%3A**+Uv+B+Intensity%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fuv-b-intensity.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Uv+B+Intensity&body=**Parameter%3A**+Uv+B+Intensity%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fuv-b-intensity.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Uv+B+Intensity&body=**Parameter%3A**+Uv+B+Intensity%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fuv-b-intensity.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
