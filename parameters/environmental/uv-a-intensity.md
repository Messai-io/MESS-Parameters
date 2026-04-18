# Uv A Intensity

UV-A intensity measures the irradiance of ultraviolet-A radiation (315-400 nm wavelength band) incident on microbial electrochemical systems (MES), expressed in watts per square meter (W/m^2) or milliwatts per square centimeter (mW/cm^2). UV-A is the least energetic UV band but the most abundant in terrestrial solar radiation, constituting approximately 5-6% of total solar irradiance at Earth's surface (approximately 40-60 W/m^2 at noon on a clear day). In MES, UV-A exposure affects photoelectrochemical processes at semiconductor-modified cathodes, photodegradation of organic pollutants, photoreactivation of microorganisms, and long-term stability of polymer membranes and organic electrode materials.

UV-A photons (3.1-3.9 eV) have sufficient energy to excite many photocatalytic semiconductor materials used in MES cathodes (TiO2 bandgap 3.2 eV, ZnO 3.37 eV, WO3 2.8 eV), enabling photo-assisted electrochemical processes. In photo-electrocatalytic MES, UV-A illumination of TiO2-coated cathodes generates electron-hole pairs that enhance oxygen reduction kinetics by 50-200%, increase hydrogen evolution rates by 30-100%, and enable photocatalytic degradation of recalcitrant organic pollutants. The synergy between electrochemical and photocatalytic processes in UV-A-assisted MES can achieve contaminant removal rates 2-5x higher than either process alone.

For biological components of MES, UV-A has both beneficial and detrimental effects. UV-A activates photolyase enzymes that repair UV-induced DNA damage (photoreactivation), partially counteracting UV-B damage in outdoor MES. However, chronic UV-A exposure generates reactive oxygen species (ROS) through photosensitization of intracellular flavins and porphyrins, causing oxidative stress in microbial communities. UV-A-induced ROS generation in the electrolyte (particularly in the presence of dissolved humic substances or iron complexes) can produce hydroxyl radicals that non-selectively oxidize organic matter, potentially degrading beneficial electron shuttles and EPS components.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Environmental |
| **Subcategory** | Light Spectrum |
| **Type** | number |
| **Unit** | W/m² |
| **Minimum** | 0 |
| **Maximum** | 100 |

## Typical Values

- **Valid Range**: 0 - 100 W/m^2
- **Typical Range for MES**: 0.1 - 60 W/m^2
- **Noon solar UV-A (summer, mid-latitude)**: 40-60 W/m^2
- **Overcast sky UV-A**: 5-20 W/m^2
- **UV-A LED (365 nm, at 10 cm)**: 1-50 mW/cm^2 (10-500 W/m^2)
- **Black light fluorescent tube (at 10 cm)**: 1-5 W/m^2
- **Indoor (no UV sources)**: less than 0.1 W/m^2
- **TiO2 photocatalytic activation threshold**: approximately 1 W/m^2

## Measurement Methods

- **UV-A Radiometer**: Dedicated UV-A radiometers (Lutron UV-340A, Solar Light PMA2100) employ filtered silicon photodiodes with peak response at 365 nm and bandwidth matching the 315-400 nm UV-A band. Cosine-corrected diffusers ensure accurate measurement at all angles of incidence. Measurement range spans 0.001-100 W/m^2 with accuracy of 5-10%. Calibration against NIST UV-A standards is performed annually. The sensor is positioned at the illuminated reactor surface to measure the UV-A actually reaching the system.
- **Spectroradiometric Integration**: Spectroradiometers covering the 280-400 nm UV range (Bentham DTMc300, OceanInsight FLAME-S-UV-VIS) provide wavelength-resolved UV-A measurement at 0.5-2 nm resolution. UV-A irradiance is obtained by integrating spectral data from 315 to 400 nm. This method avoids bandpass filter errors and enables simultaneous determination of UV-A, UV-B, and UV-C contributions. Spectral resolution identifies specific wavelength peaks from artificial UV sources and absorption features from reactor wall materials that affect the UV-A reaching the bioelectrochemical system.
- **Chemical Actinometry**: UV-A-specific chemical actinometers (potassium ferrioxalate at concentrations below 0.006 M for UV-A sensitivity, azobenzene, Aberchrome 540) undergo photochemical reactions with known quantum yields at UV-A wavelengths. The photoproduct concentration measured spectrophotometrically provides an integrated UV-A dose measurement (J/m^2 = W/m^2 multiplied by time in seconds). This method is useful for determining the actual UV-A exposure within complex reactor geometries where radiometric measurement is impractical.

## Affecting Factors

### Primary

- **Solar elevation and ozone**: UV-A is less affected by atmospheric ozone than UV-B (ozone absorption is minimal above 315 nm), but atmospheric path length (air mass) significantly attenuates UV-A through Rayleigh scattering and aerosol absorption. UV-A intensity at air mass 2 (30 degrees solar elevation) is approximately 70% of that at air mass 1 (zenith). Cloud cover reduces UV-A by 20-80% depending on cloud type.
- **Reactor wall material UV transmission**: Standard soda-lime glass blocks most UV below 320 nm, transmitting only the upper portion of UV-A (320-400 nm) at 60-85%. Borosilicate glass extends UV transmission to 300 nm. Quartz glass transmits 90-95% of UV-A. Acrylic (PMMA) transmits 80-90% of UV-A. UV-stabilized polycarbonate transmits less than 10% of UV-A. Material selection determines the UV-A environment experienced by internal MES components.
- **Photocatalyst characteristics**: TiO2 (anatase phase) requires UV-A below 387 nm for bandgap excitation. The photocatalytic efficiency depends on UV-A intensity following a power-law relationship: rate proportional to I^n, where n = 1.0 at low intensity (below 10 W/m^2, carrier-limited) and n = 0.5 at high intensity (above 25 W/m^2, recombination-limited). This transition means that doubling UV-A intensity above 25 W/m^2 increases photocatalytic rate by only 41%, making moderate UV-A levels sufficient.
- **Water column absorption**: Dissolved organic matter (DOM) strongly absorbs UV-A, with absorption coefficient ranging from 0.5 m^-1 (clean water) to 50 m^-1 (wastewater with 50 mg/L DOC). At 30 m^-1 absorption coefficient, UV-A intensity is reduced to 5% of surface value within 10 cm path length. This attenuation limits photocatalytic enhancement to the first few centimeters of reactor depth, requiring thin-layer reactor designs for effective UV-A utilization.
- **UV-A source aging**: Mercury vapor UV-A lamps (BLB type) lose 15-30% of UV-A output over 2000 hours of operation. UV-A LEDs (365 nm, 385 nm) maintain more than 90% of initial output over 10,000 hours but may shift peak wavelength by 2-5 nm with aging. Solar UV-A is consistent (less than 1% variation over the 11-year solar cycle) but varies dramatically with diurnal and seasonal patterns, cloud cover, and atmospheric conditions.

## Compatible Systems

Light Radiation Parameters

## References

- Lianos, P. (2017). Review of recent trends in photoelectrocatalytic conversion of solar energy to electricity and hydrogen. *Applied Catalysis B: Environmental*, 210, 235-254.
- Chen, X., & Mao, S. S. (2007). Titanium dioxide nanomaterials: Synthesis, properties, modifications, and applications. *Chemical Reviews*, 107(7), 2891-2959.
- Li, Y., et al. (2014). Photoelectrochemistry in microbial fuel cells. *Journal of Materials Chemistry A*, 2, 13681-13687.
- Bolton, J. R., & Linden, K. G. (2003). Standardization of methods for fluence (UV dose) determination in bench-scale UV experiments. *Journal of Environmental Engineering*, 129(3), 209-215.
- WHO (2002). *Global Solar UV Index: A Practical Guide*. World Health Organization.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Uv+A+Intensity&body=**Parameter%3A**+Uv+A+Intensity%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fuv-a-intensity.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Uv+A+Intensity&body=**Parameter%3A**+Uv+A+Intensity%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fuv-a-intensity.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Uv+A+Intensity&body=**Parameter%3A**+Uv+A+Intensity%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fuv-a-intensity.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
