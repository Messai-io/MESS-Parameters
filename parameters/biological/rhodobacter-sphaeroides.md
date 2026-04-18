# Rhodobacter Sphaeroides

*Rhodobacter sphaeroides* is a Gram-negative, purple non-sulfur alphaproteobacterium renowned for its extraordinary metabolic versatility, capable of growing photoautotrophically, photoheterotrophically, chemoautotrophically, and chemoheterotrophically depending on light, oxygen, and carbon source availability. In microbial electrochemical systems, this organism has attracted significant interest for photobioelectrochemical applications, biohydrogen production in photoelectrochemical cells, and as a model for understanding light-driven electron transfer to electrodes.

Under anaerobic photoheterotrophic conditions, *R. sphaeroides* performs anoxygenic photosynthesis using bacteriochlorophyll a and carotenoids to harvest light energy, coupled with the oxidation of organic acids (malate, succinate, acetate) or H2. The photosynthetic reaction center generates a membrane potential that drives ATP synthesis and reducing power (NADH) generation. In photo-MFCs, this light-harvested energy supplements the thermodynamic yield from substrate oxidation, potentially enabling current generation from substrates that would be thermodynamically unfavorable in the dark.

*R. sphaeroides* also possesses a nitrogenase enzyme that, in the absence of nitrogen, catalyzes proton reduction to H2, making it one of the most efficient biological hydrogen producers. In photo-electrochemical MES configurations, light-driven H2 production at a bioanode can be coupled with cathodic H2 utilization or collection, creating a solar-driven hydrogen production system. The organism's complete genome sequence, extensive genetic tools, and decades of photosynthesis research make it a prime candidate for engineered photo-bioelectrochemical applications.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Biological |
| **Subcategory** | Photosynthetic Bacteria |
| **Type** | object |

## Typical Values

- **Valid Range (current production)**: 0.01 to 2.0 A/m2
- **Typical Range (photo-MFC)**: 0.05 to 1.0 A/m2
- **H2 Production Rate (photobiological)**: 50-200 mL H2/L/h
- **Optimal Temperature**: 28-32 degrees C
- **Optimal pH**: 6.8-7.5
- **Doubling Time**: 2-6 hours (photoheterotrophic)
- **Light Absorption Range**: 400-900 nm (dual peaks: 800 and 860 nm)
- **Photo-MFC Power Density**: 10-500 mW/m2
- **Photosynthetic Efficiency**: 3-8% (light-to-biomass energy conversion)

## Measurement Methods

- **Photo-MFC Performance Testing**: Photo-MFCs with *R. sphaeroides* are characterized under controlled illumination using LED arrays or solar simulators. Polarization curves under light and dark conditions quantify the photosynthetic contribution to current generation. Action spectra (current vs. wavelength) confirm that photosynthetic pigments drive electrode-directed electron transfer.
- **Spectroscopic Analysis of Photosynthetic Activity**: UV-vis-NIR absorption spectroscopy measures bacteriochlorophyll a (peaks at 375, 590, 800, 860 nm) and carotenoid pigment concentrations. Fluorescence emission spectroscopy and time-resolved spectroscopy probe the photosynthetic reaction center function. These measurements correlate pigment levels with electrochemical activity.
- **H2 Production Measurement**: GC-TCD quantifies headspace H2 in sealed photobioreactors under nitrogen-fixing (N2-free) conditions. Light-dependent H2 evolution rates are measured under various light intensities to construct light-response curves. Nitrogenase activity is confirmed by acetylene reduction assay.
- **Electrochemical Techniques**: Cyclic voltammetry identifies redox-active species at the electrode-biofilm interface. Photocurrent measurements (current response to light on/off switching) confirm light-dependent electron transfer. Electrochemical impedance spectroscopy under illumination reveals charge transfer processes unique to photo-bioelectrochemical systems.
- **Molecular Characterization**: Gene expression of photosynthesis genes (puf, puc, bch), electron transfer genes (cytochrome bc1 complex), and hydrogenase/nitrogenase genes (nif) is measured by RT-qPCR under various MES operating conditions.

## Affecting Factors

### Primary

- **Light Intensity and Quality**: Photosynthetic activity is light-dependent. Saturation typically occurs at 50-200 W/m2. Near-infrared wavelengths (800-900 nm) are most efficiently harvested. Light-dark cycles create fluctuating current patterns.
- **Oxygen Levels**: Photosynthetic apparatus is repressed under high O2. Nitrogenase is irreversibly inactivated by O2. Anaerobic conditions are essential for both photoheterotrophic MFC operation and H2 production.
- **Nitrogen Source**: Ammonium represses nitrogenase. Nitrogen limitation or N2-free conditions activate nitrogenase for H2 production. Glutamate is the preferred organic nitrogen source for photoheterotrophic growth.
- **Carbon Source**: Malate, succinate, and acetate are preferred photoheterotrophic substrates. Different organic acids produce different H2 yields and current production rates due to their different oxidation states and metabolic entry points.
- **Temperature**: Optimal at 28-32 degrees C. Above 37 degrees C, the photosynthetic apparatus is destabilized. Below 20 degrees C, growth and photosynthetic rates decrease significantly.
- **Light Path Length**: In photo-MFCs, self-shading by dense cultures limits light penetration. Thin-layer reactor designs or immobilized cells on transparent electrodes optimize light utilization.
- **Sulfur Availability**: Unlike purple sulfur bacteria, *R. sphaeroides* does not use H2S as an electron donor but requires sulfur for protein synthesis (cysteine, methionine).
- **CO2 Availability**: Under photoautotrophic conditions, CO2 is fixed via the Calvin-Benson-Bassham cycle. CO2 supply affects the balance between photoautotrophic and photoheterotrophic metabolism.

## Related Parameters

- **name**: H2 Yield

- **relationship**: Primary metric for photobiological H2 production applications
- **name**: Current Density

- **relationship**: Light-dependent current generation in photo-MFCs
- **name**: Power Density

- **relationship**: Photo-enhanced power production compared to dark controls
- **name**: Substrate Removal Rate

- **relationship**: Photoheterotrophic organic acid consumption
- **name**: Operating Voltage

- **relationship**: Photo-assisted reduction of overpotential requirements

## Compatible Systems

Microorganism Database

## References

- Rosenbaum, M., et al. (2010). Light-driven H2 production and current generation with R. sphaeroides in MES. *Applied Microbiology and Biotechnology*, 86, 955-966.
- Koku, H., et al. (2002). Aspects of the metabolism of hydrogen production by Rhodobacter sphaeroides. *International Journal of Hydrogen Energy*, 27(11-12), 1315-1329.
- Mackenzie, C., et al. (2001). The home stretch, a first analysis of the nearly completed genome of Rhodobacter sphaeroides 2.4.1. *Photosynthesis Research*, 70, 19-41.
- Xing, D., et al. (2009). Electricity generation by Rhodopseudomonas palustris DX-1. *Environmental Science & Technology*, 43(11), 4148-4153.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Rhodobacter+Sphaeroides&body=**Parameter%3A**+Rhodobacter+Sphaeroides%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Frhodobacter-sphaeroides.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Rhodobacter+Sphaeroides&body=**Parameter%3A**+Rhodobacter+Sphaeroides%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Frhodobacter-sphaeroides.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Rhodobacter+Sphaeroides&body=**Parameter%3A**+Rhodobacter+Sphaeroides%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Frhodobacter-sphaeroides.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
