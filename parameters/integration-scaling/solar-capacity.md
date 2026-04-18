# Solar Capacity

Solar capacity in microbial electrochemical systems refers to the rated photovoltaic power generation capacity (in watts peak, Wp) installed to provide renewable electricity for powering MEC applied voltages, auxiliary pumps, monitoring equipment, and control systems, or to supplement MFC electrical output for hybrid energy applications. This parameter is central to the design of off-grid and renewable-integrated MES installations where grid electricity is unavailable or where sustainability objectives require minimizing fossil fuel dependence.

The integration of solar photovoltaic panels with MES creates synergistic opportunities: solar electricity can provide the 0.2-0.8 V supplementary voltage required by MECs for hydrogen production, while the continuous (albeit low-level) MFC electricity generation can power overnight monitoring when solar is unavailable. The required solar capacity depends on the daily energy budget of the MES installation, the solar irradiance at the site (typically 3-7 kWh/m^2/d), the panel efficiency (15-22%), and the desired level of energy autonomy. Properly sized solar capacity enables fully autonomous MES operation for remote environmental monitoring, decentralized wastewater treatment, or resource recovery applications.

At the system integration level, solar capacity sizing must account for the temporal mismatch between solar generation (daytime peak) and MES energy demand (often continuous). Battery or supercapacitor storage bridges this mismatch, with the storage capacity and solar capacity co-optimized to minimize total system cost while achieving the target renewable fraction. Seasonal variation in solar irradiance adds another dimension to sizing, particularly for installations at higher latitudes where winter generation may be 2-4 times lower than summer generation.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Integration Scaling |
| **Subcategory** | Renewable Integration |
| **Type** | number |
| **Unit** | kW |
| **Minimum** | 0 |
| **Maximum** | 10000 |

## Typical Values

- **Valid Range**: 0.1 to 10,000 Wp (depending on system scale)
- **Single MEC Lab System**: 1 to 10 Wp
- **Pilot MES with Monitoring**: 50 to 500 Wp
- **Full-Scale Autonomous System**: 1 to 50 kWp
- **Solar Irradiance Basis**: 3 to 7 kWh/m^2/d (varies by latitude and climate)
- **Typical Panel Area**: 0.5 to 50 m^2 for pilot-scale installations

## Measurement Methods

- **Rated Capacity Assessment**: 1. Record the nameplate rated capacity (Wp) of all installed photovoltaic panels under standard test conditions (STC: 1000 W/m^2, 25 degrees C, AM 1.5 spectrum). 2. Sum all panel ratings for total installed solar capacity. 3. Note the panel technology (monocrystalline, polycrystalline, thin-film) as it affects temperature derating and degradation rates.
- **Actual Performance Measurement**: 1. Install a calibrated pyranometer at the array tilt angle to measure incident solar irradiance. 2. Measure the DC output power of the solar array continuously using a power meter. 3. Calculate the performance ratio: PR = E_actual / (G_incident * P_rated / G_STC), where G is irradiance. 4. Report both the rated capacity and the effective capacity (rated * performance ratio) for realistic sizing.
- **Energy Yield Analysis**: 1. Record daily energy production (kWh/d) from the solar array over a minimum of one year. 2. Calculate the specific yield (kWh/kWp/year) for the site. 3. Compare against the MES energy demand profile to assess the sufficiency of solar capacity. 4. Identify periods of energy deficit and surplus for storage sizing optimization.

## Affecting Factors

### Primary

- **Solar Irradiance at Site**: Geographic location determines the annual solar resource. Tropical sites receive 1800-2200 kWh/m^2/year while northern European sites may receive only 800-1200 kWh/m^2/year.
- **MES Energy Demand**: The total electrical energy required by the MES (applied voltage for MECs, pumping, monitoring) determines the minimum solar capacity needed.
- **Panel Orientation and Tilt**: Optimal tilt angle (approximately equal to latitude) and south-facing orientation (in the northern hemisphere) maximize energy capture.
- **Energy Storage Availability**: Without storage, solar capacity must be oversized to ensure adequate instantaneous power during operation; with storage, the solar-to-demand ratio can be optimized.
- **Panel Degradation**: Solar panels degrade at 0.3-0.8% per year, requiring initial oversizing to maintain adequate capacity over the system lifetime.
- **Shading and Soiling**: Partial shading from nearby structures or dust/dirt accumulation can reduce effective capacity by 5-25%.
- **Temperature Effects**: Solar panel efficiency decreases at approximately 0.4%/degree C above STC temperature, reducing effective capacity in hot climates.

## Related Parameters

- **name**: Renewable Fraction

- **relationship**: Solar capacity directly determines the renewable fraction of the MES energy supply.
- **name**: Storage Capacity

- **relationship**: Co-optimized with solar capacity to manage the temporal mismatch between generation and demand.
- **name**: Storage Efficiency

- **relationship**: Round-trip storage efficiency affects how much solar energy is usable after storage, influencing required solar capacity.
- **name**: Energy Per Volume

- **relationship**: The energy demand per unit volume treated determines the total solar capacity required for a given treatment throughput.
- **name**: Heating Capacity

- **relationship**: Solar thermal components may supplement electrical solar capacity for reactor temperature management.

## Compatible Systems

Hybrid System Integration

## References

- Aelterman, P., Rabaey, K., Pham, H. T., Boon, N., & Verstraete, W. (2006). Continuous electricity generation at high voltages and currents using stacked environmental fuel cells. Environmental Science & Technology, 40(10), 3388-3394.
- Chae, K. J., Choi, M. J., Lee, J., Ajayi, F. F., & Kim, I. S. (2009). Biohydrogen production via biocatalyzed electrolysis in acetate-fed bioelectrochemical cells and microbial community analysis. International Journal of Hydrogen Energy, 34(13), 5184-5192.
- Sun, M., Sheng, G. P., Zhang, L., Xia, C. R., Mu, Z. X., Liu, X. W., Wang, H. L., Yu, H. Q., Qi, R., Yu, T., & Yang, M. (2008). An MEC-MFC-coupled system for biohydrogen production from acetate. Environmental Science & Technology, 42(21), 8095-8100.
- Wang, H., Park, J.-D., & Ren, Z. J. (2015). Practical energy harvesting for microbial fuel cells: a review. Environmental Science & Technology, 49(6), 3267-3277.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Solar+Capacity&body=**Parameter%3A**+Solar+Capacity%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fsolar-capacity.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Solar+Capacity&body=**Parameter%3A**+Solar+Capacity%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fsolar-capacity.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Solar+Capacity&body=**Parameter%3A**+Solar+Capacity%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fsolar-capacity.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
