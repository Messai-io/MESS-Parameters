# Cell Type

Cell type classifies a microbial electrochemical system (MES) reactor according to its fundamental architectural configuration, including the number of chambers, membrane arrangement, electrode positioning, and mode of operation. The cell type is the single most consequential design decision in MES engineering, as it determines the reactor's capabilities, limitations, target applications, and the ranges of nearly all other design parameters. The principal cell types encountered in MES research and applications include single-chamber air-cathode MFCs, dual-chamber MFCs separated by an ion exchange membrane, H-type cells for fundamental studies, tubular configurations, flat-plate or cassette designs, and multi-chamber MDCs.

Each cell type embodies a distinct set of trade-offs between performance, cost, and operational complexity. Single-chamber air-cathode MFCs eliminate the need for cathode aeration and reduce internal resistance by removing the membrane, but they face challenges with oxygen diffusion to the anode and substrate crossover. Dual-chamber designs provide better control over anolyte and catholyte conditions but introduce additional membrane resistance and complexity. H-type cells, while impractical for scale-up, remain the standard for fundamental electrochemical characterization due to their defined geometry and ease of electrode exchange.

Microbial electrolysis cells (MECs) require sealed cathode chambers for hydrogen collection and typically use dual-chamber configurations, although membraneless single-chamber designs have been explored. Microbial desalination cells (MDCs) inherently require at least three chambers (anode, desalination, and cathode) separated by alternating anion and cation exchange membranes. Advanced multi-chamber MDC designs with multiple membrane pairs can significantly enhance desalination capacity per unit of bioelectrochemical energy input.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Reactor Design |
| **Subcategory** | Single Unit Cells |
| **Type** | select |
| **Papers Reporting** | 1 |

## Typical Values

- **Valid Range**: Categorical (see classifications below)
- **Single-Chamber Air-Cathode MFC**: Most common lab-scale type; no membrane; cathode exposed to air on one side
- **Dual-Chamber MFC**: Anode and cathode chambers separated by PEM, CEM, or AEM
- **H-Type Cell**: Two bottles connected by a tube containing the membrane; used for fundamental studies
- **Tubular MFC**: Cylindrical geometry with concentric electrode arrangement
- **Flat-Plate / Cassette MFC**: Planar electrodes in a thin, high-surface-area configuration
- **Upflow MFC (UMFC)**: Vertically oriented with bottom-to-top flow
- **Stacked MFC**: Multiple individual cells connected electrically in series or parallel
- **Single-Chamber MEC**: Membraneless; requires gas separation strategies
- **Dual-Chamber MEC**: Membrane separates H2-producing cathode from anode
- **Three-Chamber MDC**: Anode | AEM | desalination | CEM | cathode
- **Multi-Chamber MDC**: Multiple desalination chambers with alternating membranes
- **Sediment MFC (SMFC)**: Anode buried in sediment, cathode in overlying water

## Measurement Methods

- **Classification by Architecture**: Document the cell type by cataloging: (1) number of distinct chambers, (2) type and number of membranes or separators, (3) cathode exposure (air-breathing vs. submerged), (4) electrode geometry (flat, brush, granular, tubular), and (5) flow configuration (batch, continuous, upflow, downflow). Photograph the assembled and disassembled reactor for documentation.
- **Electrochemical Characterization**: Perform polarization curve analysis (linear sweep voltammetry from OCV to 0 V at 1 mV/s or stepwise external resistance variation) and electrochemical impedance spectroscopy (EIS, typically 100 kHz to 10 mHz) to quantify the performance signature of the cell type. Different cell types exhibit characteristic impedance spectra: single-chamber designs show lower ohmic resistance but higher mass transport limitations compared to dual-chamber configurations.
- **Performance Benchmarking**: Compare key performance metrics---maximum power density (W/m2 or W/m3), coulombic efficiency, COD removal rate, and internal resistance---against published benchmarks for the same cell type to verify proper classification and construction quality.

## Affecting Factors

### Primary

- **Application Objective**: Electricity generation (MFC), hydrogen production (MEC), desalination (MDC), or biosensing determines the appropriate cell type.
- **Membrane Requirement**: The need for product separation, prevention of substrate crossover, or maintenance of distinct anolyte/catholyte chemistries dictates whether a membrane is needed.
- **Scale of Operation**: H-type cells are restricted to laboratory scale; cassette and tubular designs are preferred for scale-up; stacked configurations are necessary for voltage and power matching.
- **Cost Constraints**: Single-chamber membraneless designs minimize component costs but may sacrifice performance.
- **Oxygen Management**: Air-cathode designs require careful management of oxygen diffusion; dual-chamber designs can exclude oxygen from the anode chamber completely.
- **Gas Collection**: MEC cell types must facilitate hydrogen collection; MDC types must manage gas generation in multiple chambers.
- **Maintenance Access**: Cell type affects ease of electrode replacement, membrane cleaning, and biofilm management.
- **Electrical Integration**: The cell type determines how individual units can be combined into stacks or arrays for practical voltage and power levels.

## Related Parameters

- **name**: Cell Volume

- **relationship**: Constrained by cell type (H-type cells are large relative to active volume; flat-plate cells are compact).
- **name**: Chamber Volume

- **relationship**: Number and size of chambers depend entirely on cell type.
- **name**: Membrane Pairs

- **relationship**: Only applicable to MDC-type cells.
- **name**: Electrode Arrangement

- **relationship**: Must be compatible with the selected cell type.
- **name**: Internal Resistance

- **relationship**: Characteristic of each cell type, ranging from 5--50 ohm for optimized single-chamber to 50--500 ohm for H-type cells.
- **name**: Open Circuit Voltage

- **relationship**: Thermodynamic maximum varies by cell type (MFC ~0.8 V, MEC requires applied voltage, MDC ~0.5--0.8 V per cell).
- **name**: Stack Arrangement

- **relationship**: Relevant for stacked cell types.

## Compatible Systems

Cell Geometry Dimensions

## References

- Logan, B.E., Hamelers, B., Rozendal, R., et al. (2006). Microbial fuel cells: Methodology and technology. *Environmental Science & Technology*, 40(17), 5181--5192.
- Liu, H. & Logan, B.E. (2004). Electricity generation using an air-cathode single chamber microbial fuel cell in the presence and absence of a proton exchange membrane. *Environmental Science & Technology*, 38(14), 4040--4046.
- Call, D. & Logan, B.E. (2008). Hydrogen production in a single chamber microbial electrolysis cell lacking a membrane. *Environmental Science & Technology*, 42(9), 3401--3406.
- Cao, X., Huang, X., Liang, P., et al. (2009). A new method for water desalination using microbial desalination cells. *Environmental Science & Technology*, 43(18), 7148--7152.
- Ge, Z., Li, J., Xiao, L., Tong, Y., & He, Z. (2014). Recovery of electrical energy in microbial fuel cells. *Environmental Science & Technology Letters*, 1(2), 137--141.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Cell+Type&body=**Parameter%3A**+Cell+Type%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fcell-type.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Cell+Type&body=**Parameter%3A**+Cell+Type%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fcell-type.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Cell+Type&body=**Parameter%3A**+Cell+Type%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fcell-type.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
