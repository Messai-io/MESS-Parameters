# Centrifugal Acceleration

Centrifugal acceleration in the context of microbial electrochemical systems (MES) refers to the apparent outward acceleration experienced by components within a rotating reference frame. While not a common operational parameter for standard MES, centrifugal acceleration becomes relevant in specialized configurations such as rotating electrode reactors, centrifugal separation of microbial biomass from effluent, and research on MES behavior under altered gravitational conditions for space applications or high-g bioreactor studies.

In rotating bioelectrochemical reactors, centrifugal acceleration enhances mass transfer at the electrode surface by creating convective flows that reduce the thickness of the diffusion boundary layer. This can significantly improve substrate delivery to the biofilm, product removal from the electrode vicinity, and overall current density. The centrifugal acceleration experienced at the electrode surface is proportional to the angular velocity squared and the radius of rotation (a = omega^2 * r), providing a tunable parameter for optimizing mass transfer without relying solely on bulk fluid mixing.

Centrifugal acceleration is also relevant for biofilm development and stability on MES electrodes. High centrifugal forces can detach loosely bound microorganisms and select for strongly adherent electroactive biofilms. Conversely, moderate centrifugal forces may enhance biofilm uniformity by promoting even distribution of nutrients and removal of metabolic byproducts. In the emerging field of space bioelectrochemistry, understanding MES performance under variable centrifugal/gravitational conditions is critical for developing life support and waste treatment systems for long-duration space missions.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Environmental |
| **Subcategory** | Gravity & Acceleration |
| **Type** | number |
| **Unit** | g |
| **Minimum** | 0 |
| **Maximum** | 1000 |
| **Papers Reporting** | 411 |

## Typical Values

- **Valid Range**: 0 to 500,000 x g (from microgravity to ultracentrifuge)
- **Typical Range (Rotating Electrode MES)**: 1 to 100 x g
- **Typical Range (Biofilm Detachment Studies)**: 50 to 500 x g
- **Typical Range (Centrifugal Separation of Effluent)**: 500 to 10,000 x g
- **Standard Earth Gravity Reference**: 1 x g = 9.81 m/s^2
- **Space Station Centrifuge Studies**: 0.01 to 2 x g

## Measurement Methods

- **Accelerometer-Based Measurement**: MEMS accelerometers can be mounted directly on rotating MES components to measure centrifugal acceleration in real time. Three-axis accelerometers (e.g., ADXL345, MPU-6050) provide simultaneous measurement of centrifugal acceleration magnitude and direction. These sensors offer ranges from +/- 2 g to +/- 200 g with digital output via I2C or SPI interfaces.
- **Rotational Speed Calculation**: The most common method for determining centrifugal acceleration is calculation from measured rotational speed (omega) and known radius (r) using a = omega^2 * r. Rotational speed is measured using optical tachometers, Hall effect sensors, or encoder-equipped motors. This indirect method provides high accuracy when the geometry is well-defined.
- **Stroboscopic Measurement**: For high-speed rotating systems, stroboscopic imaging allows visualization of the rotational speed by synchronizing a flashing light source with the rotation frequency. When the flash frequency matches the rotation frequency, the system appears stationary. This method is useful for verification and troubleshooting.

## Affecting Factors

### Primary

- **Rotational Speed**: Centrifugal acceleration scales with the square of angular velocity, making rotation speed the dominant control parameter. Doubling the rotation speed quadruples the centrifugal acceleration.
- **Radius of Rotation**: The distance from the axis of rotation to the point of interest linearly affects centrifugal acceleration. Larger radius reactors experience greater centrifugal forces at the same rotational speed.
- **Reactor Geometry**: The configuration of the rotating element (disk electrode, cylindrical drum, or rotating entire reactor) determines the distribution of centrifugal acceleration across the electrode surface.
- **Fluid Properties**: The density and viscosity of the electrolyte affect how centrifugal acceleration translates into convective mass transfer enhancement. More viscous fluids require higher centrifugal forces for equivalent improvement.
- **Biofilm Mechanical Properties**: The viscoelastic properties of the electrode biofilm determine its resistance to centrifugal detachment forces. Mature, EPS-rich biofilms are more resistant than young, loosely attached biofilms.
- **Temperature**: Fluid viscosity decreases with temperature, enhancing the convective effects of centrifugal acceleration at higher temperatures.
- **Surface Roughness**: Rough electrode surfaces provide mechanical anchoring points for biofilms, increasing the critical centrifugal acceleration needed for detachment.
- **Duration of Exposure**: Short pulses of high centrifugal acceleration may be tolerated by biofilms that would detach under sustained exposure.

## Related Parameters

- **name**: Gravitational Acceleration

- **relationship**: Standard gravity (1 g) provides the baseline against which centrifugal acceleration is measured.
- **name**: Shear Stress

- **relationship**: Centrifugal acceleration generates fluid shear at electrode surfaces, affecting biofilm attachment and mass transfer.
- **name**: Reynolds Number (Mixing)

- **relationship**: The flow regime created by centrifugal acceleration determines whether mass transfer is laminar or turbulent.
- **name**: Mixing Intensity

- **relationship**: Centrifugal acceleration is one mechanism for achieving mixing in MES reactors.
- **name**: Flow Velocity

- **relationship**: Centrifugal acceleration drives radial and tangential fluid velocities at the electrode.

## Compatible Systems

Physical Environmental Factors

## References

- Pham, H.T., Boon, N., Aelterman, P., et al. (2008). High shear enrichment improves the performance of the anodophilic microbial consortium in a microbial fuel cell. *Microbial Biotechnology*, 1(6), 487-496.
- Liu, Y. & Tay, J.H. (2002). The essential role of hydrodynamic shear force in the formation of biofilm and granular sludge. *Water Research*, 36(7), 1653-1665.
- Rittmann, B.E. (2018). Biofilms, active substrata, and me. *Water Research*, 132, 135-142.
- Recio-Garrido, D., Perrier, M., & Tartakovsky, B. (2016). Modeling, optimization and control of bioelectrochemical systems. *Chemical Engineering Journal*, 289, 180-190.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Centrifugal+Acceleration&body=**Parameter%3A**+Centrifugal+Acceleration%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fcentrifugal-acceleration.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Centrifugal+Acceleration&body=**Parameter%3A**+Centrifugal+Acceleration%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fcentrifugal-acceleration.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Centrifugal+Acceleration&body=**Parameter%3A**+Centrifugal+Acceleration%0A**Category%3A**+Environmental%0A**File%3A**+parameters%2Fenvironmental%2Fcentrifugal-acceleration.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
