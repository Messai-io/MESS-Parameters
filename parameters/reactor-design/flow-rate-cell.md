# Flow Rate Cell

Flow rate cell refers to the volumetric flow rate of electrolyte (feed solution, anolyte, or catholyte) through an individual microbial electrochemical system (MES) cell during continuous or semi-continuous operation. Expressed in mL/min (or L/h for larger systems), the flow rate is the primary operational parameter controlling the hydraulic retention time (HRT = V/Q), the organic loading rate (OLR = Q * C_in / V), and the substrate delivery rate to the biofilm. The flow rate must be carefully optimized to balance complete substrate utilization, adequate mass transport to the electrode surfaces, and manageable pressure drop through the reactor.

In MFCs, the flow rate determines the trade-off between COD removal efficiency and power output. Low flow rates (long HRT) allow near-complete substrate utilization and high COD removal but may result in substrate limitation near the outlet, reducing power density. High flow rates (short HRT) maintain high substrate concentrations throughout the reactor, supporting high current densities, but result in incomplete substrate utilization and lower treatment efficiency. The optimal flow rate depends on the reactor volume, electrode area, biofilm activity, and influent substrate concentration.

For MECs, the flow rate affects both the hydrogen production rate and the recovery of dissolved hydrogen in the effluent. Excessively high flow rates may sweep dissolved hydrogen out of the cathode chamber before it can nucleate into collectible gas bubbles. In MDCs, the desalination rate depends on the flow rates through all three chambers (anode, desalination, and cathode), and the relative flow rates affect the ion transport driving forces and concentration polarization at the membrane surfaces. Recirculation flow rates (returning a portion of the effluent to the inlet) are used to increase the effective flow rate and mass transport without increasing the net throughput.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Reactor Design |
| **Subcategory** | Cell Flow Dynamics |
| **Type** | number |
| **Unit** | mL/min |
| **Minimum** | 0 |
| **Maximum** | 100 |

## Typical Values

- **Valid Range**: 0.01--1000 mL/min (0.6 uL/min to 60 L/h)
- **Typical Range**: 0.1--50 mL/min
- **MFC (Laboratory, 28 mL cell)**: 0.1--5 mL/min (HRT 5--280 min)
- **MFC (Pilot-scale, 1 L cell)**: 1--50 mL/min (HRT 20 min--17 h)
- **MFC (Demonstration-scale)**: 50--500 mL/min
- **MEC (Laboratory)**: 0.1--10 mL/min
- **MDC (Laboratory)**: 0.5--5 mL/min per chamber
- **Microfluidic MFC**: 0.001--0.1 mL/min (1--100 uL/min)
- **Recirculation flow rate**: Typically 5--20x the net feed rate
- **Common HRT targets**: 2--24 hours for wastewater treatment; 0.5--4 hours for high-rate systems

## Measurement Methods

- **Gravimetric Collection**: Collect the effluent in a pre-weighed container over a measured time interval. Calculate the flow rate as Q = mass / (density * time). This method is simple, accurate (1--2% precision), and requires no specialized equipment. Best for low flow rates (less than 50 mL/min) over collection periods of at least 10 minutes.
- **Calibrated Flow Sensors**: Install an inline flow sensor (turbine, electromagnetic, thermal mass, or ultrasonic) in the inlet or outlet tubing. Calibrate the sensor against gravimetric measurements at the relevant flow range. Continuous flow monitoring enables detection of flow variations, pump malfunctions, and clogging events. Thermal mass sensors are suitable for low flow rates (0.01--10 mL/min), while electromagnetic sensors handle higher rates.
- **Pump Calibration**: For peristaltic or syringe pump-driven systems, calibrate the pump by running it at the set speed for a known duration and collecting the dispensed volume. Peristaltic pumps can vary by 5--10% depending on tubing wear and compression, so monthly recalibration is recommended. Syringe pumps provide higher accuracy (1--2%) but have limited volume capacity.

## Affecting Factors

### Primary

- **Hydraulic Retention Time**: HRT = V/Q. Doubling the flow rate halves the HRT. Target HRTs range from 1 hour (high-rate treatment) to 48 hours (complete substrate utilization).
- **Organic Loading Rate**: OLR = Q * C_in / V (kg COD/m3/day). Flow rate directly controls the mass of substrate delivered per unit time. Typical OLR targets are 0.5--10 kg COD/m3/day.
- **Mass Transport**: Flow velocity at the electrode surface affects the boundary layer thickness and substrate delivery rate. Higher flow rates improve mass transport but increase pumping energy.
- **Shear Stress**: Wall shear stress in the cell is proportional to the flow rate. Excessive shear (above approximately 1 Pa) can detach biofilm; moderate shear (0.01--0.5 Pa) promotes electroactive biofilm selection.
- **Pressure Drop**: Pressure drop through the cell increases with flow rate, approximately linearly for laminar flow and quadratically for turbulent flow.
- **Pumping Energy**: The energy consumed by pumping equals Q * delta_P / eta_pump. At high flow rates, pumping energy can exceed the MFC electrical output, resulting in negative net energy.
- **Effluent Quality**: Higher flow rates may require post-treatment polishing to meet discharge standards if substrate removal is incomplete.
- **Temperature Control**: Flow rate affects the heat exchange rate in temperature-controlled systems; higher flows improve thermal homogeneity.

## Related Parameters

- **name**: Residence Time (Cell)

- **relationship**: Inversely proportional to flow rate at constant volume.
- **name**: Cell Volume

- **relationship**: Combined with flow rate, determines HRT.
- **name**: Flow Mode

- **relationship**: Determines whether flow is continuous, batch, or recirculated.
- **name**: Reynolds Number

- **relationship**: Re = rho * v * D_h / mu, where v = Q / A_cross-section.
- **name**: Pressure Drop (Manifold)

- **relationship**: Increases with flow rate.
- **name**: Flow Uniformity

- **relationship**: Distribution of flow across the electrode face depends on flow rate and manifold design.
- **name**: Dead Zone Fraction

- **relationship**: Lower at higher flow rates due to improved convective transport.
- **name**: Mixing Mode

- **relationship**: Recirculation flow rate supplements the feed flow rate for mixing.

## Compatible Systems

Cell Specific Operational Parameters

## References

- Min, B. & Logan, B.E. (2004). Continuous electricity generation from domestic wastewater and organic substrates in a flat plate microbial fuel cell. *Environmental Science & Technology*, 38(21), 5809--5814.
- He, Z., Minteer, S.D., & Angenent, L.T. (2005). Electricity generation from artificial wastewater using an upflow microbial fuel cell. *Environmental Science & Technology*, 39(14), 5262--5267.
- Heidrich, E.S., Edwards, S.R., Dolfing, J., et al. (2014). Performance of a pilot scale microbial electrolysis cell fed on domestic wastewater at ambient temperatures for a 12 month period. *Bioresource Technology*, 173, 87--95.
- Zhang, F., Ge, Z., Grimaud, J., Hurst, J., & He, Z. (2013). Long-term performance of liter-scale microbial fuel cells treating primary effluent installed in a municipal wastewater treatment facility. *Environmental Science & Technology*, 47(9), 4941--4948.
- Li, W.W., Yu, H.Q., & He, Z. (2014). Towards sustainable wastewater treatment by using microbial fuel cells-centered technologies. *Energy & Environmental Science*, 7(3), 911--924.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Flow+Rate+Cell&body=**Parameter%3A**+Flow+Rate+Cell%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fflow-rate-cell.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Flow+Rate+Cell&body=**Parameter%3A**+Flow+Rate+Cell%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fflow-rate-cell.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Flow+Rate+Cell&body=**Parameter%3A**+Flow+Rate+Cell%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fflow-rate-cell.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
