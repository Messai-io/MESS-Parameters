# Infrared Intensity

Infrared (IR) intensity in the context of microbial electrochemical systems (MES) refers to the power density of electromagnetic radiation in the infrared wavelength range (700 nm to 1 mm) impinging on or emitted by the reactor system. The infrared spectrum is divided into near-infrared (NIR, 700-1400 nm), mid-infrared (MIR, 1400-3000 nm), and far-infrared (FIR, 3000 nm to 1 mm). For MES, infrared intensity is significant primarily as a thermal energy input that affects reactor temperature, as a potential light source for anoxygenic phototrophic bacteria that use bacteriochlorophylls absorbing in the NIR range, and as a tool for non-invasive monitoring of biofilm chemistry and composition.

Anoxygenic phototrophs such as purple non-sulfur bacteria (*Rhodopseudomonas palustris*, *Rhodobacter sphaeroides*) and green sulfur bacteria possess bacteriochlorophylls that absorb strongly in the NIR range (800-1050 nm), enabling photosynthesis using near-infrared light that is invisible to the human eye. These organisms have been successfully employed in photobioelectrochemical systems where NIR illumination drives anoxygenic photosynthesis without producing oxygen, maintaining the anaerobic conditions favorable for many MES configurations.

Infrared radiation also contributes significantly to the thermal energy budget of outdoor MES installations. Solar infrared radiation (accounting for approximately 52% of total solar energy at Earth's surface) heats reactor components and electrolyte, while the reactor itself emits infrared radiation according to its temperature and emissivity (Stefan-Boltzmann law). The net infrared energy balance, along with convective and evaporative heat loss, determines the equilibrium reactor temperature.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Environmental |
| **Subcategory** | Light Spectrum |
| **Type** | number |
| **Unit** | W/m² |
| **Minimum** | 0 |
| **Maximum** | 1000 |

## Typical Values

- **Valid Range**: 0 to 5,000 W/m^2 (concentrated solar to darkness)
- **Typical Range (Solar NIR at Surface)**: 0 to 500 W/m^2
- **Total Solar IR (700 nm - 4000 nm)**: 0 to 520 W/m^2
- **Laboratory NIR LED (for Purple Bacteria)**: 10 to 100 W/m^2
- **Thermal IR from 25C Surface**: ~450 W/m^2 (Stefan-Boltzmann)
- **Typical NIR for Anoxygenic Photosynthesis**: 5 to 50 W/m^2

## Measurement Methods

- **Pyranometer with Spectral Filters**: Standard pyranometers measure total solar radiation (shortwave). By using long-pass filters (e.g., RG715 or RG780), infrared radiation can be isolated. The difference between unfiltered and filtered readings gives the visible component, with the filtered reading providing the near-infrared and visible-red contribution.
- **Infrared Radiometer (Pyrgeometer)**: Pyrgeometers specifically measure longwave (thermal) infrared radiation in the 4.5-42 micrometer range. They are used to quantify the thermal infrared environment surrounding outdoor MES installations, including atmospheric downwelling radiation and surface emissions.
- **NIR Spectrometer**: For photobiological applications, NIR spectrometers (e.g., InGaAs detector-based systems covering 700-1700 nm) measure the spectral distribution of near-infrared light. This allows quantification of the specific wavelengths relevant to bacteriochlorophyll absorption peaks.
- **Thermal Camera**: Infrared thermal cameras detect emitted thermal infrared radiation and convert it to temperature maps. They can visualize temperature distribution across MES reactor surfaces, identify hot spots, and assess insulation effectiveness.

## Affecting Factors

### Primary

- **Solar Position and Atmospheric Conditions**: Solar NIR intensity varies with sun angle, cloud cover, humidity, and aerosol content. Water vapor strongly absorbs at several NIR bands.
- **Light Source Type**: Incandescent and halogen lamps emit heavily in the NIR, while standard LEDs emit almost no NIR. Purpose-built NIR LEDs (850 nm, 940 nm) provide targeted NIR illumination.
- **Reactor Surface Properties**: Surface color, texture, and material determine infrared absorptivity and emissivity. Dark surfaces absorb more solar infrared; highly reflective surfaces minimize infrared heating.
- **Water Absorption**: Water has strong absorption bands in the NIR (at 970, 1190, 1450, and 1940 nm), which limits NIR penetration depth in aqueous MES to centimeters in the absorption windows.
- **Ambient Temperature**: Thermal infrared emission from surfaces scales with the fourth power of absolute temperature (Stefan-Boltzmann law).
- **Glass and Plastic Transmission**: Most common glasses and plastics are opaque to mid- and far-infrared, creating a greenhouse effect that traps thermal radiation within enclosed MES.
- **Insulation Quality**: Reactor insulation reduces infrared heat exchange with the environment.
- **Wind Speed**: Convective heat transfer competes with radiative (infrared) transfer at the reactor surface.

## Related Parameters

- **name**: Temperature

- **relationship**: Infrared intensity directly contributes to reactor thermal energy balance.
- **name**: Light Intensity

- **relationship**: For photobioelectrochemical systems, NIR intensity augments visible light for anoxygenic phototrophs.
- **name**: Total Solar Irradiance

- **relationship**: The infrared fraction of total solar energy.
- **name**: Electromagnetic Power

- **relationship**: Infrared intensity is the power density in a specific electromagnetic band.
- **name**: UV-A/B/C Intensity

- **relationship**: Other spectral bands that affect MES differently.

## Compatible Systems

Light Radiation Parameters

## References

- Xing, D., Zuo, Y., Cheng, S., et al. (2008). Electricity generation by *Rhodopseudomonas palustris* DX-1. *Environmental Science & Technology*, 42(11), 4146-4151.
- Blankenship, R.E. (2014). *Molecular Mechanisms of Photosynthesis*. 2nd ed., Wiley-Blackwell.
- McCormick, A.J., Bombelli, P., Bradley, R.W., et al. (2015). Biophotovoltaics. *Energy & Environmental Science*, 8(4), 1092-1109.
- Iqbal, M. (1983). *An Introduction to Solar Radiation*. Academic Press.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Infrared+Intensity&body=**Parameter%3A**+Infrared+Intensity%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Finfrared-intensity.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Infrared+Intensity&body=**Parameter%3A**+Infrared+Intensity%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Finfrared-intensity.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Infrared+Intensity&body=**Parameter%3A**+Infrared+Intensity%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Finfrared-intensity.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
