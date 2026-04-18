# Scenedesmus Obliquus

*Scenedesmus obliquus* is a freshwater green microalga (Chlorophyceae) widely studied for wastewater treatment, biofuel production, and integration with microbial electrochemical systems. The organism forms characteristic colonies of 4-8 cells arranged in a flat row and is one of the most robust and adaptable microalgal species, thriving in a variety of environmental conditions including eutrophic waters, industrial effluents, and municipal wastewater. Its relevance to MES lies in its capacity for photosynthetic oxygen production at biocathodes, nutrient removal from MES effluents, and biomass generation for downstream biorefinery applications.

In integrated MES-algal systems, *S. obliquus* serves multiple functions. At the cathode of photosynthetic MFCs, the alga produces O2 through oxygenic photosynthesis, providing the terminal electron acceptor for cathodic oxygen reduction without energy-intensive mechanical aeration. In downstream treatment configurations, *S. obliquus* cultures polish MFC effluent by assimilating residual nitrogen (NH4+, NO3-) and phosphorus (PO4 3-), achieving nutrient removal efficiencies of 80-99% while generating valuable biomass. The algal biomass, rich in lipids (20-40% of dry weight under stress conditions), can be used as biodiesel feedstock or recycled as substrate for the MFC anode.

*S. obliquus* is particularly valued for its tolerance to high nutrient concentrations (up to 1000 mg/L NH4-N), wide temperature range (10-35 degrees C), and ability to grow in both autotrophic and mixotrophic modes. Mixotrophic growth, where the alga simultaneously uses light and organic carbon, is especially relevant for MES applications treating nutrient-rich, organically-loaded wastewaters, as it combines photosynthetic CO2 fixation with heterotrophic organic carbon assimilation.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Biological |
| **Subcategory** | Algae - Photosynthetic Organisms |
| **Type** | object |

## Typical Values

- **Valid Range (biomass productivity)**: 0.05 to 1.5 g/L/day
- **Typical Range (biomass productivity)**: 0.1 to 0.8 g/L/day
- **Lipid Content**: 10-40% of dry weight (nitrogen-stress dependent)
- **Nitrogen Removal**: 80-99% from wastewater
- **Phosphorus Removal**: 70-98% from wastewater
- **Optimal Temperature**: 20-30 degrees C
- **Optimal pH**: 7.0-9.0
- **Doubling Time**: 1-5 days (condition-dependent)
- **Photo-MFC Power Enhancement**: 20-100% increase over dark cathode
- **O2 Production Rate**: 50-300 mg O2/L/day

## Measurement Methods

- **Biomass and Growth Monitoring**: Optical density at 680 nm (chlorophyll a absorption) and 750 nm (cell turbidity, less pigment-dependent) track culture growth. Dry weight is determined gravimetrically after filtration (0.45 um) and drying at 105 degrees C. Cell counts using Neubauer hemocytometer or automated cell counters provide direct enumeration.
- **Nutrient Removal Analysis**: Ammonium (salicylate method or ion selective electrode), nitrate (cadmium reduction method or IC), and phosphate (ascorbic acid molybdenum blue method) are measured in influent and effluent to calculate removal rates and efficiencies. Total nitrogen (TN) and total phosphorus (TP) by persulfate digestion provide complete nutrient mass balances.
- **Lipid Content Determination**: Total lipids are extracted by the Bligh-Dyer or Folch method using chloroform:methanol. Nile red fluorescence staining provides rapid, non-destructive lipid quantification by flow cytometry or fluorescence microscopy. GC-FID of transesterified lipids (FAMEs) provides the fatty acid profile for biodiesel quality assessment.
- **Photosynthetic Activity**: PAM fluorometry measures maximum quantum yield (Fv/Fm), effective quantum yield, and electron transport rate. Oxygen evolution is measured by Clark-type electrode under controlled illumination. Photosynthesis-irradiance (P-I) curves determine light saturation, compensation, and inhibition points.
- **Integrated MES-Algal System Performance**: Photo-MFCs with *S. obliquus* cathode chambers are monitored for current, voltage, power density, COD removal (anode), and nutrient removal (cathode/downstream). The energy balance compares photosynthetic energy input with electrical energy output.

## Affecting Factors

### Primary

- **Light Intensity**: Photosynthesis saturates at 200-400 umol photons/m2/s. Above saturation, photoinhibition reduces O2 production. In photo-MFCs, consistent illumination is critical for stable cathodic oxygen supply.
- **Nutrient Load**: *S. obliquus* thrives in nutrient-rich conditions (MES effluent). High ammonium (up to 1000 mg N/L) is tolerated, though free ammonia at high pH can be toxic. The N:P ratio (optimally 7-16:1 by mass) affects growth rate and lipid accumulation.
- **Temperature**: Growth occurs from 10 to 35 degrees C with optimum at 25-30 degrees C. Cold-season operation in temperate climates requires consideration of reduced growth rates.
- **CO2 Supply**: CO2 supplementation (2-5% in air) increases growth 2-5 fold. MFC-generated CO2 can be fed to the algal chamber, creating a synergistic carbon cycle.
- **pH**: Photosynthetic CO2 consumption raises pH. *S. obliquus* tolerates pH 6-10 with optimum at pH 7-9. pH management through CO2 injection maintains optimal conditions.
- **Organic Carbon (Mixotrophic Growth)**: Addition of glucose, acetate, or glycerol enables mixotrophic growth with 2-5x higher biomass productivity than pure autotrophic culture.
- **Harvesting Frequency**: Dilution rate in continuous operation affects cell density, light penetration, and productivity.
- **Contamination**: Zooplankton grazing (rotifers, cladocerans) and competing algal species can reduce *S. obliquus* productivity.

## Related Parameters

- **name**: Nitrogen Removal

- **relationship**: Direct performance metric for nutrient polishing applications
- **name**: Phosphorus Recovery

- **relationship**: Algal biomass sequesters phosphorus from MES effluent
- **name**: Power Density

- **relationship**: Photo-MFC enhancement from algal O2 production
- **name**: COD Removal

- **relationship**: Mixotrophic organic carbon consumption supplements anodic removal
- **name**: Substrate

- **relationship**: Algal biomass as anode feedstock after lipid extraction

## Compatible Systems

Microorganism Database

## References

- Wang, L., et al. (2010). Integrated process for cultivation of Scenedesmus obliquus in wastewater. *Bioresource Technology*, 101(10), 3781-3788.
- Gouveia, L., et al. (2014). Effect of light on the production of bioelectricity and added-value microalgae biomass in a photo-MFC. *Bioresource Technology*, 154, 171-177.
- Mandal, S., & Mallick, N. (2009). Microalga Scenedesmus obliquus as a potential source for biodiesel production. *Applied Microbiology and Biotechnology*, 84, 281-291.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Scenedesmus+Obliquus&body=**Parameter%3A**+Scenedesmus+Obliquus%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fscenedesmus-obliquus.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Scenedesmus+Obliquus&body=**Parameter%3A**+Scenedesmus+Obliquus%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fscenedesmus-obliquus.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Scenedesmus+Obliquus&body=**Parameter%3A**+Scenedesmus+Obliquus%0A**Category%3A**+Biological%0A**File%3A**+parameters%2Fbiological%2Fscenedesmus-obliquus.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
