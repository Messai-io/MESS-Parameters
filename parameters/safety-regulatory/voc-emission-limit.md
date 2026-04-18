# Voc Emission Limit

The volatile organic compound (VOC) emission limit specifies the maximum allowable concentration or mass emission rate of volatile organic compounds released from a microbial electrochemical system to the atmosphere. VOCs are organic chemicals with high vapor pressure at ambient temperature, including alkanes, alkenes, aromatic hydrocarbons, alcohols, aldehydes, ketones, and volatile fatty acids. In MES treating wastewater, VOCs may be stripped from the liquid phase by gas production (H2, CO2, biogas), by air cathode aeration, or by natural evaporation. Compliance with VOC emission limits is required under air quality regulations and may necessitate gas treatment (activated carbon adsorption, biofilters, thermal oxidation) on exhaust streams.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Safety Regulatory |
| **Subcategory** | Emission Standards |
| **Type** | number |
| **Unit** | mg/m³ |
| **Minimum** | 0 |
| **Maximum** | 100 |

## Typical Values

- **text**: | Regulatory Framework | VOC Limit | Application |
|---------------------|-----------|-------------|
| US EPA Clean Air Act (POTW) | 10 - 50 mg/m^3 | Wastewater treatment plants |
| EU Industrial Emissions Directive | 20 - 50 mg/m^3 | Total VOC from industrial sources |
| German TA Luft | 20 mg/m^3 | Total organic carbon in exhaust |
| US OSHA workplace (general) | Variable per compound | 8-hour TWA exposure limits |
| California SCAQMD Rule 1171 | 25 - 50 g/L solvent | Cleaning operations |
| Odor threshold (general) | 0.1 - 10 mg/m^3 | Nuisance/complaint threshold |

**VOC emissions from MES systems:**
- MFC treating domestic wastewater: typically <5 mg/m^3 in exhaust air
- MFC treating industrial (food/beverage): 5-50 mg/m^3 without treatment
- MEC with biogas recirculation: <1 mg/m^3 (closed system)
- Open-cathode MFC: higher emission risk due to air exposure

## Measurement Methods

- **1. **Flame ionization detector (FID)**: Measure total VOC concentration in the exhaust gas using a portable or continuous FID analyzer. Reports as total hydrocarbon (THC) in mg/m^3 or ppmv.**: 2. **Photoionization detector (PID)**: Use a PID for rapid screening of VOC concentrations in ambient air around the installation. 3. **GC-MS analysis**: Collect exhaust gas samples in Tedlar bags or on sorbent tubes and analyze by gas chromatography-mass spectrometry for speciated VOC identification and quantification. 4. **EPA Method 25A**: Total gaseous organic concentration by FID, applicable to stationary source emissions. 5. **Flux chamber**: Place a sealed chamber over the liquid surface of the MES to measure VOC emission flux (mass per area per time) from the liquid-air interface. 6. **Continuous emissions monitoring system (CEMS)**: Install permanent FID or PID analyzers on enclosed exhaust ducts for regulatory compliance monitoring.

## Affecting Factors

- **text**: - **Wastewater composition**: Industrial wastewaters containing solvents, fuels, or aromatic compounds produce higher VOC emissions than domestic wastewater.
- **Temperature**: VOC vapor pressure increases exponentially with temperature (Clausius-Clapeyron equation), roughly doubling emissions per 10 C increase.
- **Aeration/gas stripping**: Air cathodes and any gas sparging dramatically increase VOC transfer from liquid to gas phase.
- **Reactor enclosure**: Sealed reactors with controlled exhaust allow VOC treatment before release. Open reactors have uncontrolled emissions.
- **Gas flow rate**: Higher exhaust gas flow rates dilute VOC concentrations but increase total mass emissions.
- **Treatment technology**: Activated carbon adsorption, biofiltration, and thermal/catalytic oxidation can reduce VOC emissions by 90-99%.
- **Biodegradation**: Some VOCs are consumed by the microbial community within the MES, reducing net emissions.

## Compatible Systems

Regulatory Compliance

## References

1. US EPA. 40 CFR Part 60 - Standards of Performance for New Stationary Sources.
2. European Parliament. Directive 2010/75/EU on Industrial Emissions (IED).
3. TA Luft (Technical Instructions on Air Quality Control), Germany. Federal Ministry for Environment.
4. APHA (2017). *Standard Methods for the Examination of Water and Wastewater* (23rd ed.). Method 6200: Volatile Organic Compounds.
5. US EPA. AP-42: Compilation of Air Emission Factors. Chapter 4.3: Wastewater Collection, Treatment, and Storage.

---

*Parameter documentation for the MESS (Microbial Electrochemical Systems Standardization) framework.*

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Voc+Emission+Limit&body=**Parameter%3A**+Voc+Emission+Limit%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Fvoc-emission-limit.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Voc+Emission+Limit&body=**Parameter%3A**+Voc+Emission+Limit%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Fvoc-emission-limit.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Voc+Emission+Limit&body=**Parameter%3A**+Voc+Emission+Limit%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Fvoc-emission-limit.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
