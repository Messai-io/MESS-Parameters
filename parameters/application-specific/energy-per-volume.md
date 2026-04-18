# Energy Per Volume

Energy per volume, also referred to as volumetric energy density, quantifies the electrical energy generated or consumed by a microbial electrochemical system per unit of reactor volume, typically expressed in kWh/m^3 or J/L. This parameter provides a normalized metric for comparing the energy performance of MES reactors of different sizes and configurations, and is essential for techno-economic assessments of system scaling. In microbial fuel cells (MFCs), it represents the energy harvested per unit volume of treated wastewater; in microbial electrolysis cells (MECs), it reflects the energy input required per volume to produce hydrogen or other products.

For MFCs operating in wastewater treatment applications, the energy per volume metric directly determines whether the system can achieve energy-positive or energy-neutral operation. Conventional activated sludge treatment consumes approximately 0.3-0.6 kWh/m^3, establishing the benchmark that MFC energy recovery must approach to demonstrate competitive advantage. Current state-of-the-art MFC systems achieve 0.005 to 0.1 kWh/m^3, indicating that significant improvements in energy density are needed for standalone energy recovery, though MFCs offer supplementary benefits in reduced aeration costs and sludge production.

In the context of system integration and scaling, volumetric energy density is a critical design parameter because it directly affects reactor footprint and capital costs. Higher energy per volume allows smaller reactors for a given power output, reducing construction materials, land requirements, and pumping energy. The parameter is influenced by electrode packing density, specific surface area, internal resistance distribution, and the volumetric organic loading rate. Scaling from laboratory (milliliter) to pilot (hundreds of liters) to full scale (cubic meters) typically results in decreased volumetric energy density due to increased ohmic losses, less favorable surface-area-to-volume ratios, and mass transfer limitations.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Application Specific |
| **Subcategory** | MDC Operation |
| **Type** | number |
| **Unit** | kWh/m³ |
| **Minimum** | 0 |
| **Maximum** | 5 |
| **Papers Reporting** | 1 |

## Typical Values

- **Valid Range**: 0.0001 to 10 kWh/m^3
- **Typical MFC Range**: 0.005 to 0.1 kWh/m^3 of treated wastewater
- **Bench-Scale MFC**: 0.01 to 0.5 kWh/m^3
- **Pilot-Scale MFC**: 0.001 to 0.05 kWh/m^3
- **MEC Energy Input**: 0.5 to 5 kWh/m^3 for hydrogen production
- **Comparison**: Conventional treatment consumes 0.3 to 0.6 kWh/m^3

## Measurement Methods

- **Direct Energy Measurement**: 1. Measure the voltage across an external resistance and the current flowing through it continuously over the experimental period. 2. Calculate instantaneous power as P = V * I (watts). 3. Integrate power over time to obtain total energy (E = integral of P dt, in watt-hours or joules). 4. Divide total energy by the reactor liquid volume to obtain energy per volume. 5. For continuous-flow systems, normalize by the volume of wastewater treated during the measurement period.
- **Polarization-Based Estimation**: 1. Conduct a polarization curve by varying external resistance from open circuit to near short circuit. 2. Identify the maximum power point from the power density curve. 3. Calculate the theoretical maximum energy per volume assuming operation at the maximum power point continuously. 4. Adjust for actual operating conditions (duty cycle, load matching efficiency).
- **Coulombic-Calorimetric Method**: 1. Measure the COD removed during treatment (g COD/L). 2. Calculate the theoretical energy content of removed COD (approximately 3.86 kWh/kg COD). 3. Measure the actual electrical energy recovered. 4. Express energy per volume as the product of COD removal concentration and coulombic-energy efficiency.

## Affecting Factors

### Primary

- **Electrode Packing Density**: Higher electrode surface area per unit volume increases volumetric current generation. Three-dimensional electrodes (carbon felt, graphite granules, brush electrodes) achieve higher packing than planar designs.
- **Internal Resistance**: Lower internal resistance allows greater power extraction per unit volume. Minimizing electrode spacing, using ion-exchange membranes, and optimizing electrolyte conductivity all contribute.
- **Organic Loading Rate**: Higher substrate concentration provides more electron donors, increasing potential energy recovery per volume, up to the point of substrate inhibition or mass transfer limitation.
- **Reactor Configuration**: Single-chamber designs avoid membrane resistance, while stacked or tubular configurations can achieve higher volumetric power densities than flat-plate designs.
- **Temperature**: Higher temperatures reduce solution resistance and increase microbial metabolic rates, improving energy per volume.
- **Wastewater Composition**: Complex industrial wastewaters may have different biodegradability profiles, affecting the achievable energy per volume.
- **Hydraulic Retention Time**: Shorter HRT processes more wastewater volume but may reduce treatment efficiency and energy recovery per pass.

## Related Parameters

- **name**: Power Density

- **relationship**: Instantaneous power per unit area or volume; the time integral of volumetric power density yields energy per volume.
- **name**: Coulombic Efficiency

- **relationship**: The fraction of substrate electrons captured as current; directly affects achievable energy per volume.
- **name**: Organic Loading Rate

- **relationship**: Determines the substrate availability per unit volume, setting the upper bound on energy recovery.
- **name**: Scale Factor

- **relationship**: Quantifies the expected change in energy per volume when scaling from bench to pilot to full scale.
- **name**: Scale Efficiency Loss

- **relationship**: Directly describes the reduction in energy per volume that occurs during scale-up.

## Compatible Systems

Desalination Applications

## References

- Logan, B. E., Hamelers, B., Rozendal, R., Schroder, U., Keller, J., Freguia, S., Aelterman, P., Verstraete, W., & Rabaey, K. (2006). Microbial fuel cells: methodology and technology. Environmental Science & Technology, 40(17), 5181-5192.
- Heidrich, E. S., Curtis, T. P., & Dolfing, J. (2011). Determination of the internal chemical energy of wastewater. Environmental Science & Technology, 45(2), 827-832.
- Ge, Z., Li, J., Xiao, L., Tong, Y., & He, Z. (2014). Recovery of electrical energy in microbial fuel cells: a brief review. Environmental Science & Technology Letters, 1(2), 137-141.
- Logan, B. E. (2010). Scaling up microbial fuel cells and other bioelectrochemical systems. Applied Microbiology and Biotechnology, 85(6), 1665-1671.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Energy+Per+Volume&body=**Parameter%3A**+Energy+Per+Volume%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fenergy-per-volume.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Energy+Per+Volume&body=**Parameter%3A**+Energy+Per+Volume%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fenergy-per-volume.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Energy+Per+Volume&body=**Parameter%3A**+Energy+Per+Volume%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fenergy-per-volume.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
