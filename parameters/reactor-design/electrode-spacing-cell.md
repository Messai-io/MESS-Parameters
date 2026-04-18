# Electrode Spacing Cell

Electrode spacing refers to the distance between the anode and cathode electrodes (or between the anode and the membrane, or cathode and the membrane) within a single microbial electrochemical system (MES) cell. This distance, measured as the shortest path through the electrolyte between the two electrode surfaces, is one of the most critical parameters governing the internal ohmic resistance and consequently the power output, current density, and energy efficiency of the system. The electrode spacing determines the length of the ionic transport path that protons (or other charge-carrying ions) must traverse through the electrolyte to maintain electroneutrality during operation.

In MFCs, the ohmic resistance through the electrolyte is proportional to the electrode spacing and inversely proportional to the electrolyte conductivity and the cross-sectional area: R_ohmic = d / (kappa * A), where d is the spacing, kappa is the electrolyte conductivity, and A is the effective cross-sectional area for ion transport. Since domestic wastewater has low ionic conductivity (typically 1--5 mS/cm), even modest electrode spacing can contribute substantial ohmic losses. Research has consistently demonstrated that reducing electrode spacing from typical values of 20--40 mm (in H-type cells) to 1--4 mm (in optimized flat-plate designs) can increase power density by 2--10 fold.

However, very small electrode spacing (below 2 mm) introduces practical challenges including increased risk of short circuits, cathode flooding in air-cathode designs, restricted flow between electrodes, and reduced capacity for biofilm growth. In MECs, the electrode spacing must balance ohmic resistance minimization with adequate volume for hydrogen gas disengagement. In MDCs, the electrode-to-membrane spacing in each chamber affects both the ionic resistance and the concentration polarization at the membrane surfaces.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Reactor Design |
| **Subcategory** | Electrode Geometry in Cells |
| **Type** | number |
| **Unit** | mm |
| **Minimum** | 1 |
| **Maximum** | 100 |
| **Papers Reporting** | 1 |

## Typical Values

- **Valid Range**: 0.1--100 mm
- **Typical Range**: 1--40 mm
- **MEA (Membrane Electrode Assembly)**: 0.1--0.5 mm (electrodes pressed onto membrane)
- **Optimized air-cathode MFC**: 1--4 mm
- **Standard single-chamber MFC**: 4--20 mm
- **Dual-chamber MFC**: 10--40 mm (anode-to-membrane + membrane-to-cathode)
- **H-type cell**: 40--100 mm (limited by bridge tube length)
- **MEC**: 2--20 mm
- **MDC (per chamber)**: 5--20 mm
- **Microfluidic MFC**: 0.05--0.5 mm (50--500 um)
- **Benchmark (Logan lab, 28 mL MFC)**: 4 mm

## Measurement Methods

- **Direct Physical Measurement**: With the reactor disassembled, measure the distance between electrode surfaces using calipers, feeler gauges, or a depth micrometer. For assembled cells, the spacing equals the sum of gasket thickness and spacer thickness between the electrodes (minus any electrode compression into the gasket). Report the minimum, maximum, and average spacing if the electrodes are not perfectly parallel.
- **Electrochemical Impedance Spectroscopy**: The high-frequency intercept of the Nyquist plot (Z' axis) from EIS measurements gives the total ohmic resistance, which includes the electrolyte resistance between electrodes. Knowing the electrolyte conductivity and electrode area, the effective electrode spacing can be back-calculated: d = R_ohmic * kappa * A. This method gives the electrically effective spacing, which may differ from the physical spacing due to non-uniform current paths.
- **Optical/Imaging Methods**: For transparent reactor materials, use a calibrated digital camera or microscope to measure the gap between electrodes through the reactor wall. For opaque reactors, insert a thin probe or optical fiber to measure the gap. CT scanning or MRI can provide non-invasive 3D mapping of electrode positions in sealed cells.

## Affecting Factors

### Primary

- **Ohmic Resistance**: R_electrolyte = d / (kappa * A). For wastewater (kappa ~ 2 mS/cm) with 10 cm2 electrode area, each mm of spacing adds approximately 0.5 ohm.
- **Electrolyte Conductivity**: High-conductivity electrolytes (buffers at 10--20 mS/cm, or seawater at 50 mS/cm) tolerate larger electrode spacing without excessive ohmic losses.
- **Short Circuit Risk**: Below ~1 mm spacing, mechanical deflection of flexible electrodes, biofilm bridges, or conductive debris can cause electrical shorts.
- **Cathode Flooding**: In air-cathode MFCs, reducing the spacing compresses the cathode against the separator/membrane, which can flood the cathode catalyst layer and reduce oxygen access.
- **Biofilm Accommodation**: Active anode biofilms are typically 10--100 um thick, but can grow thicker over time. The spacing must accommodate biofilm growth without contact with the cathode.
- **Flow Cross-Section**: The spacing determines the cross-sectional area available for electrolyte flow between electrodes. Very small spacing restricts flow and increases pressure drop.
- **pH Gradient**: In unbuffered systems, the pH near the anode decreases (proton generation) and near the cathode increases (proton consumption). Larger spacing increases the pH gradient, which creates an additional thermodynamic penalty.
- **Gas Bubble Clearance**: In MECs, hydrogen bubbles at the cathode must escape without bridging to the anode. Minimum spacing for bubble clearance is approximately 2 mm.

## Related Parameters

- **name**: Electrode Arrangement

- **relationship**: Defines the overall geometry within which spacing is measured.
- **name**: Internal Resistance (Cell)

- **relationship**: The electrolyte resistance component is directly proportional to spacing.
- **name**: Power Density (Cell)

- **relationship**: Power density is highly sensitive to electrode spacing optimization.
- **name**: Electrode Thickness

- **relationship**: Combined with spacing, determines the total cell thickness.
- **name**: Chamber Volume

- **relationship**: In single-chamber designs, volume equals electrode area times spacing.
- **name**: Reynolds Number

- **relationship**: The characteristic dimension for inter-electrode flow is related to spacing.
- **name**: Cell Diameter/Width

- **relationship**: Sets the upper limit on electrode spacing.

## Compatible Systems

Cell Electrode Configuration

## References

- Liu, H., Cheng, S., & Logan, B.E. (2005). Power generation in fed-batch microbial fuel cells as a function of ionic strength, temperature, and reactor configuration. *Environmental Science & Technology*, 39(14), 5488--5493.
- Fan, Y., Hu, H., & Liu, H. (2007). Enhanced Coulombic efficiency and power density of air-cathode microbial fuel cells with an improved cell configuration. *Journal of Power Sources*, 171(2), 348--354.
- Cheng, S. & Logan, B.E. (2011). Increasing power generation for scaling up single-chamber air cathode microbial fuel cells. *Bioresource Technology*, 102(6), 4468--4473.
- Logan, B.E. (2008). *Microbial Fuel Cells*. John Wiley & Sons. Chapter 3: Voltage and Power.
- Sleutels, T.H., Ter Heijne, A., Buisman, C.J., & Hamelers, H.V. (2012). Bioelectrochemical systems: An outlook for practical applications. *ChemSusChem*, 5(6), 1012--1019.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Electrode+Spacing+Cell&body=**Parameter%3A**+Electrode+Spacing+Cell%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Felectrode-spacing-cell.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Electrode+Spacing+Cell&body=**Parameter%3A**+Electrode+Spacing+Cell%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Felectrode-spacing-cell.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Electrode+Spacing+Cell&body=**Parameter%3A**+Electrode+Spacing+Cell%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Felectrode-spacing-cell.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
