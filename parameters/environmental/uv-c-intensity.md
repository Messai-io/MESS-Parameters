# Uv C Intensity

UV-C intensity measures the irradiance of ultraviolet-C radiation (200-280 nm wavelength band) applied to microbial electrochemical systems (MES), expressed in watts per square meter (W/m^2) or milliwatts per square centimeter (mW/cm^2). UV-C radiation is absent from natural sunlight at Earth's surface (completely absorbed by stratospheric ozone) and is exclusively provided by artificial sources (low-pressure mercury lamps at 254 nm, UV-C LEDs at 260-280 nm). In MES, UV-C serves as a powerful germicidal agent for disinfection, biofilm control, and photolytic degradation of recalcitrant organic contaminants.

The germicidal effectiveness of UV-C derives from its overlap with the DNA absorption maximum (260 nm), where photons induce cyclobutane pyrimidine dimers (CPDs) and 6-4 photoproducts that block DNA replication and transcription. The UV-C dose required for 1-log (90%) inactivation of common waterborne bacteria is 2-10 mJ/cm^2 (20-100 J/m^2), with 4-log (99.99%) inactivation at 20-80 mJ/cm^2. In MES applications, controlled UV-C exposure can selectively suppress unwanted microbial populations (methanogens, pathogens, sulfate-reducing bacteria) at the cathode while the anode biofilm is protected from UV-C by opaque electrode materials and reactor design.

UV-C integration with MES enables advanced oxidation processes where UV-C photolysis generates hydroxyl radicals from hydrogen peroxide (UV/H2O2) or from water at TiO2 photocatalytic surfaces (UV/TiO2). These radicals non-selectively oxidize organic contaminants at near-diffusion-limited rates (k = 10^8 to 10^10 M^-1s^-1 for OH radical reactions), achieving degradation of compounds resistant to biological treatment alone. The combination of electrochemical generation of H2O2 at the cathode with UV-C photolysis in the cathodic chamber creates a self-sustaining electro-Fenton/UV-C system with synergistic contaminant removal.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Environmental |
| **Subcategory** | Light Spectrum |
| **Type** | number |
| **Unit** | W/m² |
| **Minimum** | 0 |
| **Maximum** | 5 |

## Typical Values

- **Valid Range**: 0 - 1000 mW/cm^2
- **Typical Range for MES disinfection**: 0.1 - 50 mW/cm^2
- **Solar UV-C at Earth's surface**: 0 (completely absorbed by ozone)
- **Low-pressure mercury lamp (254 nm, at 10 cm)**: 0.1-5 mW/cm^2
- **Medium-pressure mercury lamp**: 1-100 mW/cm^2 (broadband)
- **UV-C LED (265 nm, at 5 cm)**: 0.1-10 mW/cm^2
- **1-log bacterial inactivation dose**: 2-10 mJ/cm^2
- **4-log inactivation dose**: 20-80 mJ/cm^2
- **Minimum for photocatalytic activation**: 0.01-0.1 mW/cm^2

## Measurement Methods

- **UV-C Radiometer**: Calibrated UV-C radiometers (International Light IL1700 with SED240 detector, Gigahertz-Optik X1-1-UV-3727) employ filtered silicon photodiodes with peak response at 254-260 nm. Measurement range spans 0.001-200 mW/cm^2 with accuracy of 5-8% traceable to NIST. The detector must be calibrated specifically for the UV-C source spectrum: a radiometer calibrated for 254 nm low-pressure mercury may read 10-30% high or low when measuring UV-C LEDs with different peak wavelengths (265, 275, or 280 nm) due to spectral mismatch between detector response and source emission.
- **Actinometric Dose Measurement**: Chemical actinometers (potassium iodide/iodate at 254 nm, uridine in water) undergo photochemical reactions with precisely known quantum yields at UV-C wavelengths. The conversion rate, measured spectrophotometrically, provides the average UV-C fluence rate within the reactor volume. This method accounts for all geometric factors (reflection, refraction, absorption, scattering) and provides the biologically relevant volume-averaged dose that correlates with disinfection performance. Accuracy of 5-10% with proper execution.
- **Biodosimetry**: Calibrated microbial indicators (MS2 bacteriophage, Bacillus subtilis spores) with known UV-C dose-response relationships are exposed to the UV-C field within the MES reactor. The log-reduction of viable organisms provides the reduction equivalent fluence (REF), which is the UV-C dose that would produce the same inactivation in a standardized collimated beam apparatus. Biodosimetry is the regulatory standard for UV disinfection validation and directly measures the germicidally effective UV-C intensity experienced by microorganisms in the actual reactor geometry.

## Affecting Factors

### Primary

- **Lamp type and output spectrum**: Low-pressure mercury lamps emit 85-90% of UV output at 254 nm (monochromatic), providing the highest germicidal efficiency per watt of UV output. Medium-pressure mercury lamps emit broadband UV (200-400 nm) with higher total UV output but lower germicidal efficiency per watt. UV-C LEDs (AlGaN) emit at 255-280 nm with current wall-plug efficiency of 2-5% (versus 30-35% for low-pressure mercury), but improving rapidly. LED peak wavelength affects germicidal effectiveness: 265 nm is approximately equal to 254 nm in germicidal action, while 280 nm is approximately 70% as effective per unit power.
- **Distance and geometry**: UV-C intensity from point sources decreases with 1/r^2 distance dependence. For linear lamp sources (common in MES applications), intensity decreases as approximately 1/r within a few lamp lengths. Reactor geometry determines UV-C distribution: annular reactors (flow around central lamp) provide relatively uniform exposure, while flat-plate reactors with side illumination create steep intensity gradients. Reflective surfaces (aluminum, PTFE) redirect UV-C to improve distribution uniformity by 30-60%.
- **UV-C absorption by water and solutes**: Pure water absorbs UV-C weakly (absorption coefficient approximately 0.01 cm^-1 at 254 nm), but dissolved organic and inorganic species dramatically increase absorption. Dissolved organic carbon at 10 mg/L increases UV-254 absorbance to 0.1-0.5 cm^-1. Nitrate absorbs strongly below 230 nm. Iron (Fe^3+) absorbs at 254 nm. At absorbance of 0.5 cm^-1, UV-C intensity is reduced to 10% within 2 cm, severely limiting penetration depth in wastewater-fed MES systems.
- **Fouling and lamp sleeve cleaning**: UV-C lamp sleeves (quartz tubes protecting lamps from electrolyte contact) foul from mineral precipitation (CaCO3, iron oxides), biofilm growth, and organic deposition. Fouling reduces UV-C transmission by 5-50% over weeks to months of operation. Mechanical wipers, citric acid cleaning, and ultrasonic cleaning systems maintain sleeve transmission above 90%. UV-C LED modules sealed behind quartz windows face similar fouling challenges but may be easier to clean due to compact geometry.
- **Electrical power and efficiency**: UV-C output efficiency varies from 2-5% (UV-C LEDs) to 30-35% (low-pressure mercury lamps) to 10-15% (medium-pressure mercury lamps) of electrical input power. For a 40 W low-pressure mercury lamp, UV-C output is approximately 12-14 W. The remaining power is dissipated as heat (50-60%), visible light (1-2%), and infrared radiation (5-10%). Energy cost for UV-C disinfection in MES is 0.01-0.1 kWh/m^3 for 4-log bacterial inactivation, which must be weighed against the overall MES energy balance.

## Compatible Systems

Light Radiation Parameters

## References

- Bolton, J. R., & Linden, K. G. (2003). Standardization of methods for fluence (UV dose) determination in bench-scale UV experiments. *Journal of Environmental Engineering*, 129(3), 209-215.
- Blatchley, E. R., III, et al. (2012). The biological basis of UV-induced disinfection. *Journal of Environmental Engineering*, 138(8), 857-866.
- Li, Y., et al. (2014). Photoelectrochemistry in microbial fuel cells. *Journal of Materials Chemistry A*, 2, 13681-13687.
- Song, K., Mohseni, M., & Taghipour, F. (2016). Application of ultraviolet light-emitting diodes (UV-LEDs) for water disinfection. *Water Research*, 94, 341-349.
- Guo, M.-T., Huang, J., & Hu, H.-Y. (2012). UV inactivation and regrowth of fecal indicator bacteria in primary wastewater effluent. *Environmental Science and Pollution Research*, 19, 4518-4524.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Uv+C+Intensity&body=**Parameter%3A**+Uv+C+Intensity%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fuv-c-intensity.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Uv+C+Intensity&body=**Parameter%3A**+Uv+C+Intensity%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fuv-c-intensity.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Uv+C+Intensity&body=**Parameter%3A**+Uv+C+Intensity%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fuv-c-intensity.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
