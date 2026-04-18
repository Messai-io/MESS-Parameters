# Storage Capacity

Storage capacity in microbial electrochemical systems refers to the total amount of electrical energy that can be accumulated and held in an integrated energy storage device, expressed in watt-hours (Wh), milliamp-hours (mAh), or joules (J). This parameter defines the energy buffer available for bridging temporal mismatches between the continuous but low-level power generation of MFCs and the intermittent, higher-power demands of practical loads such as wireless sensors, data loggers, actuators, and communication modules.

The selection and sizing of storage capacity is a critical design decision for MES-powered autonomous systems. The storage must be large enough to accumulate sufficient energy during quiescent periods to power active operational bursts, while being small enough to charge within the available time at the MFC output rate. Common storage technologies include supercapacitors (0.1-100 F, providing high power density but limited energy density), rechargeable batteries (lithium-ion, nickel-metal hydride, or zinc-air providing higher energy density), and hybrid configurations that combine both. The optimal storage capacity depends on the load profile, duty cycle, and the required operational autonomy.

At the system integration level, storage capacity must be matched to both the energy generation rate and the energy consumption pattern. For MFC-powered environmental monitoring stations, typical storage capacities range from 1 to 100 Wh, sufficient to power wireless data transmission at intervals of minutes to hours. For larger pilot-scale MES with integrated renewable energy inputs, storage capacities may reach kilowatt-hour levels to buffer daily solar generation cycles. Oversizing storage capacity increases capital cost and physical volume, while undersizing leads to incomplete charging and reduced system availability.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Integration Scaling |
| **Subcategory** | Energy Storage Integration |
| **Type** | number |
| **Unit** | kWh |
| **Minimum** | 0 |
| **Maximum** | 10000 |
| **Papers Reporting** | 27 |

## Typical Values

- **Valid Range**: 0.001 to 10,000 Wh
- **Single MFC-Supercapacitor**: 0.001 to 1 Wh
- **MFC Array-Battery**: 1 to 100 Wh
- **Pilot-Scale MES with Solar**: 100 to 5,000 Wh
- **Supercapacitor Banks**: 1 to 50 F at 2.5-5.5 V
- **Battery Packs**: 1 to 50 Ah at 3.6-12 V

## Measurement Methods

- **Charge-Discharge Cycling**: 1. Fully charge the storage device from a regulated power supply at the rated charge rate. 2. Discharge through a calibrated load at a constant current or constant power rate. 3. Record voltage and current throughout the discharge until the minimum cutoff voltage is reached. 4. Calculate capacity by integrating current over time (mAh) or power over time (Wh). 5. Repeat for multiple cycles to account for capacity fade and establish reliable capacity values.
- **Capacitance Measurement (for Supercapacitors)**: 1. Charge the supercapacitor to its rated voltage using a constant current source. 2. Discharge at constant current and record the voltage decline over time. 3. Calculate capacitance: C = I * dt / dV, where I is discharge current and dV/dt is the voltage slope. 4. Calculate energy capacity: E = 0.5 * C * V^2 (in joules, convert to Wh by dividing by 3600).
- **In-Situ MFC Charging Test**: 1. Connect the storage device to the MFC output through the power management circuit. 2. Allow the MFC to charge the storage device from empty to full. 3. Record the time required for full charge and the total energy delivered. 4. This provides the effective capacity when charged from the actual MFC source, which may differ from rated capacity due to charging inefficiencies.

## Affecting Factors

### Primary

- **Storage Technology**: Lithium-ion batteries offer 100-250 Wh/kg energy density; supercapacitors offer 1-10 Wh/kg but with much higher power density and cycle life.
- **Voltage Rating**: Higher voltage storage devices store more energy per unit capacitance (E proportional to V^2 for capacitors) and may better match MFC stack voltages.
- **Cycle Life Requirements**: Applications requiring millions of cycles favor supercapacitors (>500,000 cycles) over batteries (500-2000 cycles), even at lower energy density.
- **Temperature Range**: Operating temperature affects both capacity and longevity. Lithium-ion batteries lose 10-30% capacity at 0 degrees C compared to 25 degrees C.
- **Self-Discharge Rate**: Higher self-discharge reduces the effective storage capacity over long charge periods typical of MFC systems. Supercapacitors lose 5-20% per day; lithium-ion batteries lose 1-5% per month.
- **Aging and Degradation**: Capacity fades with use; battery capacity may decrease to 80% of initial within 2-5 years.
- **Depth of Discharge**: Deep cycling accelerates degradation. Operating between 20-80% state of charge extends battery life but reduces usable capacity.

## Related Parameters

- **name**: Charge Rate

- **relationship**: Determines how quickly the storage can be replenished from MFC output.
- **name**: Discharge Rate

- **relationship**: The power delivery rate during active operation, constrained by storage capacity and duty cycle.
- **name**: Storage Efficiency

- **relationship**: Round-trip energy efficiency of charge-discharge cycles, affecting the usable fraction of stored energy.
- **name**: Solar Capacity

- **relationship**: For solar-MES hybrids, solar and storage capacities are co-optimized for energy autonomy.
- **name**: Renewable Fraction

- **relationship**: Storage capacity enables higher renewable fractions by buffering intermittent renewable generation.

## Compatible Systems

Grid Integration

## References

- Wang, H., Park, J.-D., & Ren, Z. J. (2015). Practical energy harvesting for microbial fuel cells: a review. Environmental Science & Technology, 49(6), 3267-3277.
- Donovan, C., Dewan, A., Peng, H., Heo, D., & Beyenal, H. (2011). Power management system for a 2.5 W remote sensor powered by a sediment microbial fuel cell. Journal of Power Sources, 196(3), 1171-1177.
- Dewan, A., Beyenal, H., & Lewandowski, Z. (2009). Intermittent energy harvesting improves the performance of microbial fuel cells. Environmental Science & Technology, 43(12), 4600-4605.
- Premier, G. C., Kim, J. R., Michie, I., Dinsdale, R. M., & Guwy, A. J. (2011). Automatic control of load increases power and efficiency in a microbial fuel cell. Journal of Power Sources, 196(4), 2013-2019.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Storage+Capacity&body=**Parameter%3A**+Storage+Capacity%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fstorage-capacity.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Storage+Capacity&body=**Parameter%3A**+Storage+Capacity%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fstorage-capacity.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Storage+Capacity&body=**Parameter%3A**+Storage+Capacity%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fstorage-capacity.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
