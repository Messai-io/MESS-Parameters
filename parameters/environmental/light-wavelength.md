# Light Wavelength

Light wavelength is the fundamental electromagnetic parameter defining the spectral composition of photonic energy incident on microbial electrochemical systems (MES). In the context of bioelectrochemical technology, wavelength determines which photosynthetic pigments and photoreceptor proteins are activated, directly governing the efficiency of light-driven metabolic processes in photo-bioelectrochemical systems. Wavelength is measured as the distance between successive peaks of the electromagnetic wave and is typically expressed in nanometers (nm) for the visible and near-visible spectrum relevant to biological systems.

In MES applications, light wavelength plays a decisive role in photo-bioelectrochemical cells (photo-BECs) and algae-assisted microbial fuel cells, where phototrophic microorganisms such as cyanobacteria, microalgae (Chlorella, Chlamydomonas), and purple non-sulfur bacteria harvest photons for energy generation. The spectral quality of illumination determines the quantum yield of photosynthesis, the rate of extracellular electron transfer from phototrophs to anode surfaces, and the production of oxygen at photosynthetic cathodes. Additionally, wavelength-specific illumination can modulate gene expression in electroactive biofilms, influencing biofilm architecture, extracellular polymeric substance (EPS) production, and electron shuttle biosynthesis.

The interaction between light wavelength and MES performance is mediated through pigment absorption spectra: chlorophyll a absorbs maximally at 430 nm and 680 nm, chlorophyll b at 453 nm and 642 nm, phycocyanin at 620 nm, and bacteriochlorophyll at 800-870 nm. Carotenoid accessory pigments provide additional absorption between 400-550 nm. Understanding these spectral dependencies enables targeted illumination strategies that maximize photosynthetic electron flux while minimizing thermal load and energy consumption of lighting infrastructure.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Environmental |
| **Type** | number |
| **Unit** | nm |
| **Papers Reporting** | 395 |

## Typical Values

- **Valid Range**: 200-1100 nm (UV-C through near-infrared)
- **Typical Range**: 400-700 nm (photosynthetically active radiation, PAR)
- **Optimal for chlorophyll-based systems**: 430-450 nm (blue) and 640-680 nm (red)
- **Optimal for purple bacteria**: 800-870 nm (near-infrared)
- **UV treatment wavelengths**: 254 nm (germicidal UV-C), 315-400 nm (UV-A)
- **Green gap (low absorption)**: 500-560 nm

## Measurement Methods

- **Spectroradiometry**: Spectroradiometers provide the most comprehensive wavelength characterization by measuring spectral power distribution across the full wavelength range. Instruments such as the Ocean Optics USB4000 or Apogee PS-300 measure irradiance at 0.3-1.0 nm resolution across 200-1100 nm. The cosine-corrected detector is positioned at the reactor surface to capture incident spectral flux. Calibration against NIST-traceable standards ensures radiometric accuracy within 3-5%. Measurements should be taken at multiple positions across the illuminated surface to characterize spatial spectral uniformity, with readings recorded at the beginning and end of each photoperiod to capture lamp aging effects.
- **Bandpass Optical Filters**: Discrete wavelength characterization employs narrowband optical filters (10-40 nm FWHM bandwidth) placed before a calibrated photodiode or power meter. This method is suitable for verifying LED emission peaks and monitoring spectral output of specific light sources over time. Filter wheels or automated filter changers enable rapid multi-wavelength scanning. Accuracy depends on filter transmission characteristics and photodetector spectral response, typically achieving wavelength precision of 2-5 nm.
- **Monochromator-Based Systems**: Research-grade wavelength selection uses diffraction grating monochromators that isolate specific wavelengths from broadband sources with bandwidths as narrow as 0.1 nm. These systems are used in action spectra determination experiments where MES performance is mapped as a function of illumination wavelength. Double monochromators reduce stray light to below 0.01%, enabling precise photobiological studies. Integration with lock-in amplifiers and chopped light sources improves signal-to-noise ratios for low-light measurements.

## Affecting Factors

### Primary

- **Light source technology**: LED arrays provide narrow-bandwidth emission (typically 20-30 nm FWHM) centered at specific wavelengths, enabling precise spectral targeting. Fluorescent lamps emit broad spectra with phosphor-dependent peaks. Solar illumination provides the full terrestrial spectrum modified by atmospheric absorption bands (O3, H2O, CO2). The choice of light source determines available wavelengths and spectral purity, with LEDs offering 85-95% of emitted photons within the target wavelength band versus 30-50% for filtered broadband sources.
- **Optical path media**: The wavelength composition reaching the biofilm is modified by absorption and scattering in intervening media. Reactor walls (glass, acrylic, polycarbonate) exhibit wavelength-dependent transmission, with UV cutoffs at 300-380 nm depending on material. Growth medium absorbs UV wavelengths through dissolved organics and colored metabolites. Biofilm optical density creates self-shading that preferentially attenuates wavelengths matching pigment absorption maxima, creating spectral gradients through biofilm depth.
- **Water column depth and turbidity**: In aqueous MES reactors, water selectively absorbs infrared wavelengths beyond 750 nm, with absorption increasing exponentially with path length. Suspended particles and colloidal matter scatter shorter wavelengths (Rayleigh scattering proportional to lambda^-4), shifting the spectral composition toward longer wavelengths at greater depths. Turbidity of 10 NTU can reduce blue light transmission by 15-25% over 10 cm path length while red light transmission decreases only 5-10%.
- **Temperature effects on emission**: LED emission wavelengths shift with junction temperature at approximately 0.1-0.3 nm/K, causing red-shift at elevated temperatures. For a 450 nm blue LED operating at 25-85 K temperature rise, the peak wavelength shifts 2.5-25 nm toward longer wavelengths. This thermal drift must be accounted for in controlled spectral experiments, particularly in enclosed reactor configurations with limited cooling.
- **Photoperiod and spectral adaptation**: Prolonged exposure to specific wavelengths induces chromatic adaptation in phototrophic microorganisms, altering pigment composition and absorption characteristics. Cyanobacteria exhibit complementary chromatic adaptation, increasing phycocyanin (absorbs 620 nm) under red light and phycoerythrin (absorbs 565 nm) under green light, fundamentally changing the wavelength-performance relationship over days to weeks of operation.

## Compatible Systems

Light Conditions

## References

- Chen, C.-Y., Yeh, K.-L., Aisyah, R., Lee, D.-J., & Chang, J.-S. (2011). Cultivation, photobioreactor design and harvesting of microalgae for biodiesel production. *Bioresource Technology*, 102(1), 71-81.
- Xiao, L., & He, Z. (2014). Applications and perspectives of phototrophic microorganisms for electricity generation from organic compounds in microbial fuel cells. *Renewable and Sustainable Energy Reviews*, 37, 550-559.
- Nozzi, N. E., Oliver, J. W., & Atsumi, S. (2013). Cyanobacteria as a platform for biofuel production. *Frontiers in Bioengineering and Biotechnology*, 1, 7.
- Kehoe, D. M., & Gutu, A. (2006). Responding to color: The regulation of complementary chromatic adaptation. *Annual Review of Plant Biology*, 57, 127-150.
- Rosenbaum, M., He, Z., & Angenent, L. T. (2010). Light energy to bioelectricity: Photosynthetic microbial fuel cells. *Current Opinion in Biotechnology*, 21(3), 259-264.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Light+Wavelength&body=**Parameter%3A**+Light+Wavelength%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Flight-wavelength.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Light+Wavelength&body=**Parameter%3A**+Light+Wavelength%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Flight-wavelength.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Light+Wavelength&body=**Parameter%3A**+Light+Wavelength%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Flight-wavelength.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
