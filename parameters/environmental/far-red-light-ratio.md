# Far Red Light Ratio

Far-red light ratio in the context of microbial electrochemical systems (MES) refers to the proportion of electromagnetic radiation in the far-red wavelength band (700-750 nm) relative to the total photosynthetically relevant light spectrum. This parameter is particularly important for photobioelectrochemical systems that incorporate oxygenic phototrophs (cyanobacteria, microalgae) or anoxygenic phototrophs (purple bacteria) because far-red light differentially activates photosynthetic pigments and photosystem components, influencing the balance between photosynthesis, respiration, and electron partitioning to the electrode.

In oxygenic phototrophs, far-red light preferentially excites Photosystem I (PSI) through chlorophyll a absorption at ~700 nm, while having minimal effect on Photosystem II (PSII, which peaks at ~680 nm). This imbalance in excitation energy between the two photosystems affects the linear electron flow rate, cyclic electron flow around PSI, and the ratio of ATP to NADPH production. For photo-MFCs, far-red enrichment may favor cyclic electron flow and reduce water splitting, decreasing oxygen evolution while maintaining some photosynthetic electron transport that could be diverted to the electrode.

Some cyanobacteria possess far-red light photoacclimation (FaRLiP) capability, allowing them to remodel their photosynthetic apparatus to use chlorophyll d and f, which absorb at 700-750 nm. This adaptation could be exploited in MES to extend the usable light spectrum and improve energy capture efficiency under far-red-enriched conditions such as those found during dawn/dusk transitions or under vegetation canopies.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Environmental |
| **Subcategory** | Light Spectrum |
| **Type** | number |
| **Unit** | % |
| **Minimum** | 0 |
| **Maximum** | 100 |

## Typical Values

- **Valid Range**: 0 to 1.0 (fraction of total PAR)
- **Typical Range**: 0.01 to 0.15
- **Natural Sunlight (Clear Sky)**: 0.03 to 0.05 (3-5% of PAR)
- **Dawn/Dusk Conditions**: 0.08 to 0.15
- **Under Canopy/Shade**: 0.10 to 0.30
- **LED Growth Light (White)**: 0.02 to 0.08
- **Supplemental Far-Red LED**: 0.05 to 0.50 (adjustable)

## Measurement Methods

- **Spectroradiometry**: The gold standard for far-red light ratio measurement is spectroradiometry, which measures the spectral power distribution across the full wavelength range. The far-red ratio is calculated by integrating spectral irradiance from 700-750 nm and dividing by total PAR irradiance (400-700 nm). High-resolution spectroradiometers (1-2 nm bandwidth) provide accurate spectral data for precise ratio calculation.
- **Filtered Photodiode Sensors**: Dedicated far-red sensors use optical bandpass filters (centered at 730 nm, typically 20-30 nm bandwidth) in front of silicon photodiodes. Combined with a broadband PAR sensor, the far-red ratio can be continuously monitored. These sensor pairs are more affordable than spectroradiometers and suitable for long-term monitoring.
- **Phytochrome Photoequilibrium Calculation**: For advanced photobiological applications, the far-red light ratio can be used to calculate the phytochrome photostationary state (PSS), which predicts the ratio of active (Pfr) to total phytochrome. PSS is calculated from the spectral photon distribution weighted by the absorption cross-sections of Pr and Pfr forms.

## Affecting Factors

### Primary

- **Light Source Spectrum**: Different LEDs, fluorescent tubes, and natural sunlight have characteristic far-red content. Most white LEDs have very low far-red output compared to sunlight.
- **Atmospheric Path Length**: At dawn, dusk, and low solar angles, increased atmospheric path length enriches far-red relative to blue wavelengths.
- **Canopy and Shading**: Vegetation absorbs red light while transmitting far-red, dramatically increasing the far-red ratio under plant canopies.
- **Supplemental Far-Red LEDs**: Dedicated 730 nm LEDs can manipulate the far-red ratio independently of total intensity.
- **Water Depth**: Water absorbs far-red light more strongly than shorter wavelengths, so the ratio decreases with depth.
- **Cloud Cover**: Diffuse light from clouds generally has a lower far-red ratio than direct sunlight.
- **Reactor Materials**: Glass and plastics have different far-red transmission characteristics.
- **Biofilm Self-Shading**: Outer biofilm layers absorb shorter wavelengths, increasing far-red ratio at depth.

## Related Parameters

- **name**: Red Light Ratio

- **relationship**: The red:far-red ratio is a key photobiological signal controlling phytochrome responses.
- **name**: Light Intensity

- **relationship**: Interacts with far-red ratio to determine photosynthetic rate.
- **name**: Photosynthetic Active Radiation

- **relationship**: The total PAR is the denominator for ratio calculations.
- **name**: Light Wavelength

- **relationship**: Far-red is defined by a specific wavelength range.
- **name**: Green Light Ratio

- **relationship**: Green light also penetrates deeper into biofilms.

## Compatible Systems

Light Radiation Parameters

## References

- Gan, F., Zhang, S., Rockwell, N.C., et al. (2014). Extensive remodeling of a cyanobacterial photosynthetic apparatus in far-red light. *Science*, 345(6202), 1312-1317.
- Nurnberg, D.J., Morton, J., Santabarbara, S., et al. (2018). Photochemistry beyond the red limit in chlorophyll f-containing photosystems. *Science*, 360(6394), 1210-1213.
- Smith, H. (2000). Phytochromes and light signal perception by plants: an emerging synthesis. *Nature*, 407(6804), 585-591.
- McCormick, A.J., Bombelli, P., Bradley, R.W., et al. (2015). Biophotovoltaics. *Energy & Environmental Science*, 8(4), 1092-1109.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Far+Red+Light+Ratio&body=**Parameter%3A**+Far+Red+Light+Ratio%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Ffar-red-light-ratio.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Far+Red+Light+Ratio&body=**Parameter%3A**+Far+Red+Light+Ratio%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Ffar-red-light-ratio.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Far+Red+Light+Ratio&body=**Parameter%3A**+Far+Red+Light+Ratio%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Ffar-red-light-ratio.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
