# Storage Efficiency

Storage efficiency in microbial electrochemical systems is the round-trip energy efficiency of the integrated energy storage component, defined as the ratio of energy delivered during discharge to the energy supplied during charging, expressed as a percentage. This parameter captures all losses occurring within the storage device including resistive heating, electrochemical inefficiencies, self-discharge, and power electronics conversion losses. It directly affects the net energy available for useful work from MFC-powered or MEC-coupled systems.

In MES energy harvesting applications, storage efficiency is particularly important because the low power output of bioelectrochemical cells means that every percentage point of storage loss represents a significant fraction of the total energy budget. A supercapacitor with 95% round-trip efficiency preserves nearly all of the energy painstakingly accumulated from the MFC, while a battery with 80% efficiency loses one-fifth of the harvested energy to internal losses. When combined with power management circuit losses (typically 70-90% efficient), the cumulative efficiency from MFC output to useful load power may be only 50-70%, making storage efficiency optimization critical.

The choice of storage technology fundamentally determines the achievable storage efficiency. Supercapacitors and electric double-layer capacitors achieve 90-98% round-trip efficiency due to their physical (non-faradaic) charge storage mechanism, but have limited energy density. Rechargeable batteries achieve 70-95% efficiency depending on chemistry (lithium-ion: 85-95%, lead-acid: 70-85%, nickel-metal hydride: 65-80%) but offer 10-100 times the energy density. For MES applications, the optimal technology balances storage efficiency against energy density, cycle life, cost, and environmental compatibility.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Integration Scaling |
| **Subcategory** | Energy Storage Integration |
| **Type** | number |
| **Unit** | % |
| **Minimum** | 50 |
| **Maximum** | 99 |
| **Papers Reporting** | 4 |

## Typical Values

- **Valid Range**: 30% to 99%
- **Supercapacitors**: 90% to 98%
- **Lithium-ion Batteries**: 85% to 95%
- **Lead-Acid Batteries**: 70% to 85%
- **Nickel-Metal Hydride**: 65% to 80%
- **Zinc-Air Batteries**: 50% to 65%
- **Overall System (with Power Electronics)**: 50% to 85%

## Measurement Methods

- **Direct Energy Measurement**: 1. Fully charge the storage device using a calibrated power supply while recording instantaneous voltage and current at the device terminals. 2. Calculate total charging energy: E_charge = integral of (V * I) dt. 3. Allow a standardized rest period (e.g., 1 hour for batteries, 1 minute for supercapacitors). 4. Discharge through a calibrated load while recording voltage and current. 5. Calculate total discharge energy: E_discharge = integral of (V * I) dt. 6. Storage efficiency = E_discharge / E_charge * 100%. 7. Repeat at multiple charge/discharge rates relevant to MFC operation.
- **Coulombic and Voltage Efficiency Decomposition**: 1. Measure coulombic efficiency: CE = Q_discharge / Q_charge (ratio of charge out to charge in). 2. Measure voltage efficiency: VE = V_avg_discharge / V_avg_charge. 3. Storage efficiency = CE * VE * 100%. 4. This decomposition identifies whether losses are primarily coulombic (side reactions) or resistive (voltage drops).
- **In-System Efficiency Test**: 1. Install energy meters at the MFC output, the storage device input, and the storage device output (to load). 2. Operate the complete system over multiple charge-discharge cycles under realistic conditions. 3. Calculate the in-system storage efficiency including power management electronics losses. 4. Compare with isolated device efficiency to quantify the contribution of power electronics to total losses.

## Affecting Factors

### Primary

- **Storage Technology**: The electrochemical mechanism fundamentally determines efficiency. Capacitive storage (electrostatic) is inherently more efficient than faradaic storage (battery chemistry).
- **Charge/Discharge Rate**: Efficiency generally decreases at higher rates due to increased I^2R losses. MFC low-rate charging typically operates in the high-efficiency regime.
- **Temperature**: Low temperatures increase internal resistance, reducing efficiency. Most storage devices are optimized for 20-25 degrees C operation.
- **State of Charge**: Efficiency varies with SOC; lithium-ion batteries are most efficient between 20-80% SOC.
- **Age and Cycle Count**: Internal resistance increases with aging, progressively reducing storage efficiency over the device lifetime.
- **Self-Discharge**: Energy lost during the storage period between charge and discharge reduces the effective efficiency, particularly for long charge periods typical of MFC systems.
- **Power Electronics Quality**: DC-DC converter efficiency (70-95%) adds multiplicative losses to the intrinsic storage efficiency.

## Related Parameters

- **name**: Storage Capacity

- **relationship**: Larger capacity devices may have lower internal resistance per unit energy, potentially improving efficiency.
- **name**: Charge Rate

- **relationship**: The rate at which energy enters storage, which interacts with internal resistance to determine charging efficiency.
- **name**: Discharge Rate

- **relationship**: The rate at which energy exits storage, similarly affected by internal resistance losses.
- **name**: Energy Per Volume

- **relationship**: The net recoverable energy per volume depends on storage efficiency applied to the gross energy generated.
- **name**: Renewable Fraction

- **relationship**: Storage efficiency affects how much renewable energy is ultimately delivered to the load.

## Compatible Systems

Grid Integration

## References

- Wang, H., Park, J.-D., & Ren, Z. J. (2015). Practical energy harvesting for microbial fuel cells: a review. Environmental Science & Technology, 49(6), 3267-3277.
- Dewan, A., Beyenal, H., & Lewandowski, Z. (2009). Intermittent energy harvesting improves the performance of microbial fuel cells. Environmental Science & Technology, 43(12), 4600-4605.
- Yang, F., Zhang, D., Shimotori, T., Wang, K. C., & Huang, Y. (2012). Study of transformer-based power management system and its performance optimization for microbial fuel cells. Journal of Power Sources, 205, 86-92.
- Ieropoulos, I., Greenman, J., & Melhuish, C. (2012). Urine utilisation by microbial fuel cells: energy fuel for the future. Physical Chemistry Chemical Physics, 14(1), 94-98.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Storage+Efficiency&body=**Parameter%3A**+Storage+Efficiency%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fstorage-efficiency.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Storage+Efficiency&body=**Parameter%3A**+Storage+Efficiency%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fstorage-efficiency.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Storage+Efficiency&body=**Parameter%3A**+Storage+Efficiency%0A**Category%3A**+Integration+Scaling%0A**File%3A**+parameters%2Fintegration-scaling%2Fstorage-efficiency.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
