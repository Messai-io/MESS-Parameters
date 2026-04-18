# Total Solar Irradiance

Total solar irradiance (TSI) quantifies the total electromagnetic energy from the sun incident on a surface per unit area per unit time across all wavelengths, measured in watts per square meter (W/m^2). For outdoor microbial electrochemical systems (MES) utilizing phototrophic microorganisms, TSI is the primary energy input parameter that determines the upper limit of photosynthetic productivity and bioelectricity generation. TSI encompasses ultraviolet (UV, 200-400 nm, approximately 8%), visible/PAR (400-700 nm, approximately 43%), and infrared (700-4000 nm, approximately 49%) radiation, each affecting MES through different mechanisms.

The extraterrestrial TSI (solar constant) is approximately 1361 W/m^2 but the terrestrial TSI at Earth's surface is reduced to 800-1100 W/m^2 at sea level under clear skies due to atmospheric absorption (by O3, H2O, CO2) and scattering (by air molecules and aerosols). The biologically productive PAR component represents 430-500 W/m^2 of this total, while the infrared component contributes primarily to thermal heating of the reactor. For photo-BEC systems, the theoretical maximum solar-to-electrical conversion efficiency is approximately 0.5-1.5% considering photosynthetic efficiency limits (approximately 8-12% PAR-to-chemical energy), fraction of photosynthate diverted to electrode (10-30%), and electrical circuit efficiency (50-80%).

TSI management in outdoor photo-BECs requires balancing light energy capture against thermal load. The infrared component of TSI (approximately 500 W/m^2 at peak) heats the reactor by 5-20 degrees C above ambient temperature for exposed systems, potentially pushing reactor temperatures beyond optimal ranges for mesophilic organisms (above 37 degrees C in summer). Selective spectral filtering that transmits PAR while reflecting infrared (using dichroic coatings or wavelength-selective greenhouse films) can reduce thermal loading by 40-50% while maintaining photosynthetic productivity.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Environmental |
| **Subcategory** | Light Intensity |
| **Type** | number |
| **Unit** | W/m² |
| **Minimum** | 0 |
| **Maximum** | 1400 |
| **Papers Reporting** | 12 |

## Typical Values

- **Valid Range**: 0 - 1361 W/m^2 (0 at night to solar constant)
- **Typical Range**: 0 - 1100 W/m^2 (terrestrial surface)
- **Peak clear sky (summer noon, mid-latitude)**: 900-1100 W/m^2
- **Overcast sky**: 50-300 W/m^2
- **Annual average (equator)**: 250-280 W/m^2
- **Annual average (50 degrees latitude)**: 120-160 W/m^2
- **PAR component**: approximately 43% of TSI (387-473 W/m^2 at peak)
- **Daily solar energy (mid-latitude summer)**: 5-7 kWh/m^2/day

## Measurement Methods

- **Pyranometer**: Thermopile pyranometers (Kipp and Zonen CMP22, Hukseflux SR30) are the standard instruments for TSI measurement, employing a blackened thermopile under glass domes to measure total shortwave radiation (280-3000 nm) from the full hemisphere. Classification follows ISO 9060, with secondary standard instruments achieving daily uncertainty below 2% and spectrally flat response (less than 3% deviation) across the measurement range. Response time of 5-18 seconds with 1-second data logging provides adequate temporal resolution for MES applications. Level mounting with the sensing surface horizontal measures global horizontal irradiance; mounting in the plane of the reactor surface (tilted, vertical, tracking) measures the irradiance actually received by the MES.
- **Silicon-Based Solar Sensors**: Calibrated silicon photodiode sensors (LI-COR LI-200R, Apogee SP-510) provide cost-effective TSI measurement with accuracy of 3-5% under clear skies. The silicon spectral response (300-1100 nm) does not cover the full solar spectrum, requiring calibration factors that assume a standard atmospheric spectrum. Accuracy degrades to 10-15% under cloudy conditions or at high solar zenith angles where the spectral distribution differs from the calibration standard. Despite these limitations, silicon sensors are widely used for MES research due to low cost, fast response (10 microseconds), and robust construction.
- **Pyrheliometer (Direct Normal Irradiance)**: Pyrheliometers (Kipp and Zonen CHP1, Eppley NIP) mounted on solar trackers measure only the direct (beam) component of solar radiation within a 5-degree field of view. The difference between pyranometer (global) and pyrheliometer (direct) measurements yields the diffuse component, important for MES reactor design because diffuse radiation arrives from all sky directions while direct radiation can be concentrated with reflectors. On clear days, direct radiation is 80-90% of global; on overcast days, 100% of irradiance is diffuse.

## Affecting Factors

### Primary

- **Solar geometry and latitude**: TSI on a horizontal surface varies as cos(zenith angle), creating diurnal patterns from zero (night) to maximum (solar noon) and seasonal patterns from winter minimum to summer maximum. At 45 degrees latitude, noon TSI ranges from approximately 400 W/m^2 (winter solstice) to 1000 W/m^2 (summer solstice). Tilting the reactor surface toward the equator at angle equal to latitude increases annual energy capture by 10-20% compared to horizontal orientation. Solar tracking (single or dual axis) increases energy capture by 25-40%.
- **Cloud cover and atmospheric conditions**: Clouds reduce TSI by 20-95% depending on type and thickness. Annual average cloudiness reduces TSI to 40-70% of clear-sky values at most locations. Aerosols (natural and anthropogenic) reduce clear-sky TSI by 5-25% depending on aerosol optical depth. Air mass (atmospheric path length) increases UV absorption and Rayleigh scattering, reducing TSI by approximately 25% at air mass 2 (solar elevation 30 degrees) compared to air mass 1 (zenith).
- **Altitude and atmospheric pressure**: TSI increases with altitude due to reduced atmospheric absorption and scattering, by approximately 10-15% per 1000 m elevation. High-altitude sites (above 2000 m) can receive peak TSI of 1100-1200 W/m^2, approaching extraterrestrial values. Reduced atmospheric water vapor at high altitude also increases the UV fraction of TSI by 20-50%.
- **Surface albedo and reflections**: Surrounding surfaces reflect additional radiation onto MES reactors. Snow cover (albedo 0.8-0.9) can nearly double the effective TSI on vertical reactor surfaces. Water bodies (albedo 0.06-0.1 at high sun angle, 0.5-0.8 at low angle) and concrete (albedo 0.2-0.4) provide moderate reflection enhancement. Urban environments with reflective buildings can increase TSI on adjacent MES installations by 10-30%.
- **Temporal variability and intermittency**: TSI changes by 100% over each 24-hour cycle and varies by 10-50% over minutes to hours due to cloud passage. This intermittency creates dynamic operating conditions for photo-BECs, requiring energy storage (biological: starch/glycogen accumulation; electrochemical: capacitor/battery buffering) to maintain stable electrical output. The coefficient of variation of 1-minute TSI measurements is 5-10% on clear days and 30-70% on partly cloudy days.

## Compatible Systems

Light Radiation Parameters

## References

- Kopp, G., & Lean, J. L. (2011). A new, lower value of total solar irradiance: Evidence and climate significance. *Geophysical Research Letters*, 38(1), L01706.
- McCormick, A. J., et al. (2011). Biophotovoltaics: Oxygenic photosynthetic organisms in the world of bioelectrochemical systems. *Energy & Environmental Science*, 8, 1092-1109.
- Sforza, E., et al. (2012). Adjusted light and dark cycles can optimize photosynthetic efficiency in algae growing in photobioreactors. *PLoS ONE*, 7(6), e38975.
- Duffie, J. A., & Beckman, W. A. (2013). *Solar Engineering of Thermal Processes* (4th ed.). Wiley.
- Xiao, L., & He, Z. (2014). Applications and perspectives of phototrophic microorganisms for electricity generation. *Renewable and Sustainable Energy Reviews*, 37, 550-559.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Total+Solar+Irradiance&body=**Parameter%3A**+Total+Solar+Irradiance%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Ftotal-solar-irradiance.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Total+Solar+Irradiance&body=**Parameter%3A**+Total+Solar+Irradiance%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Ftotal-solar-irradiance.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Total+Solar+Irradiance&body=**Parameter%3A**+Total+Solar+Irradiance%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Ftotal-solar-irradiance.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
