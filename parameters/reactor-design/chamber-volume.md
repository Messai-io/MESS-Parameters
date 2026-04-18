# Chamber Volume

Chamber volume refers to the internal liquid-holding capacity of a single compartment within a multi-chamber microbial electrochemical system (MES). In dual-chamber microbial fuel cells (MFCs), the anode chamber and cathode chamber each have distinct volumes that may or may not be equal. In microbial desalination cells (MDCs), the three or more chambers (anode, desalination, and cathode) each have their own volume that must be individually specified. Chamber volume is distinct from total cell volume, which encompasses all chambers and shared internal spaces.

The relative volumes of different chambers significantly affect system performance. The anode chamber volume determines the substrate loading capacity, hydraulic retention time (HRT) for organic matter degradation, and the buffering capacity against pH changes caused by proton generation. The cathode chamber volume influences the catholyte residence time, oxygen supply rate (in aerobic cathodes), and the accumulation of reduction products. In MECs, the cathode chamber volume relative to the cathode area affects the volumetric hydrogen production rate and the gas-to-liquid ratio. An oversized cathode chamber dilutes the hydrogen concentration and may reduce collection efficiency, while an undersized chamber restricts catholyte circulation and ion transport.

For micro-scale test cells built on standard 75 mm x 25 mm glass slides, chamber volumes are measured in microliters (100--1000 uL), enabling rapid screening of electrode materials and microbial communities with minimal reagent consumption. At pilot scale, chamber volumes range from hundreds of milliliters to tens of liters per chamber. The chamber volume ratio (anode:cathode or anode:desalination:cathode) is an important design parameter that is often optimized to balance treatment performance with energy or desalination output.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Reactor Design |
| **Subcategory** | Micro-Scale Test Cells (75mm × 25mm slides) |
| **Type** | number |
| **Unit** | μL |
| **Minimum** | 100 |
| **Maximum** | 1000 |
| **Papers Reporting** | 16 |

## Typical Values

- **Valid Range**: 0.1 mL--50,000 mL (100 uL to 50 L)
- **Typical Range**: 10--5,000 mL per chamber
- **Micro-scale test cells**: 100--1000 uL (0.1--1 mL)
- **MFC (Laboratory, anode chamber)**: 12--250 mL
- **MFC (Laboratory, cathode chamber)**: 12--250 mL
- **MFC (H-type, each bottle)**: 100--500 mL
- **MEC (Anode chamber)**: 25--500 mL
- **MEC (Cathode chamber)**: 10--200 mL
- **MDC (Anode chamber)**: 25--500 mL
- **MDC (Desalination chamber)**: 10--200 mL
- **MDC (Cathode chamber)**: 25--500 mL
- **Pilot-scale (per chamber)**: 1,000--50,000 mL
- **Common anode:cathode volume ratios**: 1:1, 2:1, or 3:1

## Measurement Methods

- **Gravimetric Filling Method**: Seal all ports except one fill port per chamber. Fill each chamber individually with deionized water using a syringe or burette, ensuring complete removal of air bubbles. Weigh the water dispensed or collect and measure with a graduated cylinder. This method provides accuracy to within 1--2% and correctly accounts for the volume occupied by internal structures.
- **Tracer Dilution Method**: Inject a known volume and concentration of an inert tracer (e.g., lithium chloride, fluorescein, or bromide) into each chamber and measure the resulting concentration after complete mixing. The chamber volume equals V = (C_tracer * V_tracer) / C_measured, where C_tracer is the tracer stock concentration, V_tracer is the injected volume, and C_measured is the equilibrium concentration. This method is useful for sealed systems that cannot be easily opened.
- **CAD Volume Calculation**: Calculate the internal volume of each chamber from the reactor's 3D CAD model by subtracting the volumes of electrodes, membrane frames, gaskets, spacers, and other internal components from the gross internal cavity volume. Validate against physical measurements.

## Affecting Factors

### Primary

- **Cell Type**: Single-chamber cells have one chamber volume equal to the cell volume; dual-chamber cells have two; MDCs have three or more.
- **Membrane Position**: The membrane divides the total internal space into chambers; its position determines the volume ratio.
- **Electrode Volume**: Thick electrodes (brush anodes, granular beds) can occupy 10--40% of the gross chamber volume, significantly reducing the liquid-phase chamber volume.
- **Hydraulic Retention Time**: HRT for each chamber = chamber volume / chamber flow rate. Different chambers may have different flow rates and HRTs.
- **Gasket Thickness**: Gaskets contribute to the inter-electrode space and thus affect the chamber volume, particularly in thin flat-plate designs where the gasket may define the chamber depth.
- **Gas Holdup**: In MECs, gas bubbles (H2 or CO2) reduce the effective liquid volume by 5--20% depending on the gas production rate and disengagement efficiency.
- **Biofilm Volume**: Mature biofilms on electrode surfaces can reduce the effective chamber volume by 1--5% over months of operation.
- **Spacer/Flow Distributor**: Internal flow distribution elements occupy chamber volume but improve flow uniformity and mass transport.

## Related Parameters

- **name**: Cell Volume

- **relationship**: The sum of all chamber volumes plus shared void spaces.
- **name**: Headspace Volume

- **relationship**: Gas space above the liquid in each chamber.
- **name**: Electrode Spacing

- **relationship**: Determines the chamber depth in configurations where electrodes form opposite walls.
- **name**: Residence Time

- **relationship**: HRT = chamber volume / flow rate for each chamber.
- **name**: Membrane Pairs

- **relationship**: In MDCs, the number of desalination chambers equals the number of membrane pairs.
- **name**: Working Volume

- **relationship**: The effective liquid volume available for reaction, less than the total chamber volume.

## Compatible Systems

Cell Geometry Dimensions

## References

- Liu, H., Ramnarayanan, R., & Logan, B.E. (2004). Production of electricity during wastewater treatment using a single chamber microbial fuel cell. *Environmental Science & Technology*, 38(7), 2281--2285.
- Oh, S., Min, B., & Logan, B.E. (2004). Cathode performance as a factor in electricity generation in microbial fuel cells. *Environmental Science & Technology*, 38(18), 4900--4904.
- Rozendal, R.A., Hamelers, H.V., Euverink, G.J., Metz, S.J., & Buisman, C.J. (2006). Principle and perspectives of hydrogen production through biocatalyzed electrolysis. *International Journal of Hydrogen Energy*, 31(12), 1632--1640.
- Cao, X., Huang, X., Liang, P., et al. (2009). A new method for water desalination using microbial desalination cells. *Environmental Science & Technology*, 43(18), 7148--7152.
- Qian, F. & Morse, D.E. (2011). Miniaturizing microbial fuel cells. *Trends in Biotechnology*, 29(2), 62--69.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Chamber+Volume&body=**Parameter%3A**+Chamber+Volume%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fchamber-volume.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Chamber+Volume&body=**Parameter%3A**+Chamber+Volume%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fchamber-volume.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Chamber+Volume&body=**Parameter%3A**+Chamber+Volume%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fchamber-volume.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
