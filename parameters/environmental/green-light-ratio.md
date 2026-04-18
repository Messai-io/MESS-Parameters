# Green Light Ratio

Green light ratio in microbial electrochemical systems (MES) refers to the proportion of electromagnetic radiation in the green wavelength band (500-565 nm) relative to the total photosynthetically active radiation (PAR, 400-700 nm). This parameter is relevant for photobioelectrochemical systems because green light has unique properties: it is the least efficiently absorbed wavelength range for most oxygenic phototrophs (which appear green because they reflect and transmit green light), yet it plays important roles in light penetration through dense biofilms and in photoreceptor-mediated signaling.

The conventional view that green light is photosynthetically useless is incorrect. While chlorophyll a has absorption minima in the green region, accessory pigments (carotenoids, phycoerythrin in some cyanobacteria) can absorb green light and transfer energy to reaction centers. Furthermore, green light penetrates much deeper into thick biofilms and dense cell suspensions than red or blue light, which are strongly absorbed by chlorophyll in outer cell layers. This penetration effect means that green light can drive photosynthesis in inner biofilm layers that would otherwise be light-limited, potentially increasing total photosynthetic productivity per unit biofilm area.

For MES applications, understanding the green light ratio is important for optimizing artificial illumination of photo-MFCs. LED-based lighting allows precise spectral control, and research shows that including green wavelengths alongside red and blue can improve photosynthetic efficiency of thick phototrophic biofilms compared to red-blue-only illumination. The green light ratio also affects cryptochrome signaling pathways that regulate cell division and biofilm formation.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Environmental |
| **Subcategory** | Light Spectrum |
| **Type** | number |
| **Unit** | % |
| **Minimum** | 0 |
| **Maximum** | 100 |
| **Papers Reporting** | 17 |

## Typical Values

- **Valid Range**: 0 to 1.0 (fraction of total PAR)
- **Typical Range**: 0.15 to 0.40
- **Natural Sunlight**: ~0.28 (28% of PAR is green)
- **Cool White LED**: 0.25 to 0.35
- **Warm White LED**: 0.20 to 0.30
- **Red-Blue LED Array**: 0 (no green)
- **RGB LED Array**: 0 to 0.50 (adjustable)
- **Fluorescent Tube**: 0.25 to 0.35

## Measurement Methods

- **Spectroradiometry**: Spectroradiometers measure the complete spectral power distribution, from which the green ratio is calculated by integrating 500-565 nm irradiance divided by total PAR (400-700 nm). Research-grade instruments provide 1-2 nm resolution for precise determination.
- **Filtered Sensor Arrays**: Multi-channel light sensors with optical bandpass filters for red, green, blue, and far-red bands provide continuous ratio monitoring at lower cost than spectroradiometers. Suitable for long-term monitoring in MES growth chambers.
- **RGB Color Sensors**: Inexpensive RGB color sensors (e.g., TCS34725) estimate the green light ratio from the green channel relative to total readings. Less accurate than spectroradiometry but adequate for routine characterization.

## Affecting Factors

### Primary

- **Light Source Spectrum**: The spectral output of the illumination source is the primary determinant. Different LED types and natural sunlight each have characteristic green content.
- **Optical Filters and Reactor Materials**: Glass, polycarbonate, and acrylic have wavelength-dependent transmission that modifies the green ratio.
- **Water and Electrolyte Absorption**: Water absorbs weakly in the green, preserving the ratio through aqueous media. Colored electrolyte components can alter spectral distribution.
- **Biofilm Self-Shading**: In thick biofilms, outer layers absorb red and blue light, increasing the green ratio at depth.
- **LED Array Design**: Programmable multi-channel LED systems allow real-time adjustment independently of total intensity.
- **Solar Angle**: Spectral distribution varies with solar elevation, affecting the green ratio.
- **Reflective Surfaces**: Nearby surfaces may reflect different wavelengths with different efficiencies.

## Related Parameters

- **name**: Red Light Ratio

- **relationship**: Together with green, characterizes major visible light bands for photosynthesis.
- **name**: Far-Red Light Ratio

- **relationship**: The green:far-red balance affects photomorphogenic responses.
- **name**: Light Intensity

- **relationship**: Interacts with green ratio to determine photosynthetic rate at different biofilm depths.
- **name**: Photosynthetic Active Radiation

- **relationship**: Total PAR is the denominator for ratio calculation.

## Compatible Systems

Light Radiation Parameters

## References

- Terashima, I., Fujita, T., Inoue, T., et al. (2009). Green light drives leaf photosynthesis more efficiently than red light in strong white light. *Plant and Cell Physiology*, 50(4), 684-697.
- Smith, H.L., McAusland, L., & Murchie, E.H. (2017). Don't ignore the green light: exploring diverse roles in plant processes. *Journal of Experimental Botany*, 68(9), 2099-2110.
- McCormick, A.J., Bombelli, P., Bradley, R.W., et al. (2015). Biophotovoltaics. *Energy & Environmental Science*, 8(4), 1092-1109.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Green+Light+Ratio&body=**Parameter%3A**+Green+Light+Ratio%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fgreen-light-ratio.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Green+Light+Ratio&body=**Parameter%3A**+Green+Light+Ratio%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fgreen-light-ratio.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Green+Light+Ratio&body=**Parameter%3A**+Green+Light+Ratio%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fgreen-light-ratio.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
