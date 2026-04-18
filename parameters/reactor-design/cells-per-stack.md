# Cells Per Stack

Cells per stack refers to the number of individual microbial electrochemical cells assembled into a single stacked unit, where cells share common structural elements (end plates, compression hardware, and manifolds) and are electrically connected in series, parallel, or a combination thereof. Stacking is the primary strategy for scaling MES systems to practical voltage and power levels, analogous to fuel cell stack design. A single MFC typically produces 0.3--0.7 V under load, far below the voltage required for most practical applications, necessitating series connection of multiple cells.

The number of cells per stack is a critical design parameter that determines the total stack voltage (in series connection), total current capacity (in parallel connection), overall power output, physical footprint, and hydraulic complexity. Increasing cells per stack raises the total output but also increases the risk of voltage reversal in underperforming cells, complicates flow distribution to individual cells, and makes maintenance of interior cells more difficult. In MEC stacks, the number of cells determines the total applied voltage required and the aggregate hydrogen production rate.

For microbial desalination cells (MDCs), the concept extends to the number of cell pairs in an electrodialysis-like stack, where each cell pair contains an anion exchange membrane (AEM) and cation exchange membrane (CEM) bounding a desalination chamber. Increasing cell pairs improves the desalination capacity per unit of bioelectrical energy. Industrial electrodialysis stacks commonly contain 200--600 membrane pairs; MDC stacks are currently far smaller but follow similar scaling principles. Research has shown that stacks of 4--6 MFC cells represent a practical maximum before voltage reversal and flow distribution become dominant performance limiters in current designs.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Reactor Design |
| **Subcategory** | Stack Geometry |
| **Type** | number |
| **Minimum** | 2 |
| **Maximum** | 100 |

## Typical Values

- **Valid Range**: 1--100 cells (MFC/MEC); 1--600 membrane pairs (MDC)
- **Typical Range**: 2--20 cells (MFC/MEC)
- **MFC (Laboratory stack)**: 2--6 cells
- **MFC (Pilot-scale stack)**: 4--40 cells
- **MEC (Laboratory stack)**: 2--8 cells
- **MDC (Laboratory)**: 1--5 cell pairs
- **MDC (Pilot-scale)**: 5--50 cell pairs
- **Industrial electrodialysis (reference)**: 200--600 membrane pairs
- **Common research configurations**: 2, 4, 6, or 8 cells per stack

## Measurement Methods

- **Direct Count**: Count the number of individual electrode-membrane-electrode assemblies (or cell pairs in MDC configurations) within the assembled stack. Each cell contains at minimum one anode, one cathode, and (in membrane-equipped designs) one or more ion exchange membranes. The count should distinguish between electrically active cells and any inactive spacer cells used for flow distribution.
- **Voltage Measurement Verification**: Measure the open circuit voltage (OCV) of the stack. For series-connected cells, the expected OCV equals the number of cells multiplied by the single-cell OCV (typically 0.6--0.8 V for MFCs). Significant deviation suggests shorted cells or voltage reversal. Individual cell voltage monitoring using intermediate voltage taps can confirm the active cell count.
- **Stack Disassembly Inventory**: Disassemble the stack and inventory all components: end plates, bipolar plates or current collectors, electrodes, membranes, gaskets, and spacers. The number of complete electrode-membrane assemblies equals the number of cells. Document any damaged or non-functional cells.

## Affecting Factors

### Primary

- **Target Voltage**: The minimum useful voltage for the application (e.g., 1.5 V for LED lighting, 3.3 V for sensor power, 12 V for battery charging) determines the minimum number of series-connected cells.
- **Voltage Reversal Risk**: When one cell in a series stack underperforms, it can experience voltage reversal (polarity inversion), damaging the biofilm. The probability of reversal increases with cell count.
- **Flow Distribution**: Each additional cell in the stack adds hydraulic resistance and complicates uniform flow distribution. Diminishing performance per cell is typically observed beyond 6--10 cells with simple manifold designs.
- **Power Requirement**: Total power = cells * power per cell. Both cell count and individual cell optimization contribute to meeting power targets.
- **Stack Length and Weight**: Each additional cell adds 5--30 mm to the stack length and 0.1--2 kg to the weight (depending on cell size and materials).
- **Compression Uniformity**: More cells require higher total compression force and more sophisticated compression hardware to maintain uniform contact pressure across all cells.
- **Maintenance Access**: Interior cells in large stacks are difficult to inspect or replace without complete disassembly.
- **Manufacturing Cost**: Stack cost scales approximately linearly with cell count, though end plates and compression hardware are shared.

## Related Parameters

- **name**: Stack Voltage

- **relationship**: V_stack = n_cells * V_cell (series connection).
- **name**: Stack Current

- **relationship**: I_stack = n_cells * I_cell (parallel connection); I_stack = I_cell (series).
- **name**: Stack Power

- **relationship**: P_stack = V_stack * I_stack.
- **name**: Stack Height

- **relationship**: Physical stack dimension scales with cells per stack.
- **name**: Stack Compression

- **relationship**: Total compression force increases with more cells.
- **name**: Inter-Cell Spacing

- **relationship**: The gap between adjacent cells in the stack.
- **name**: Membrane Pairs

- **relationship**: In MDC stacks, the number of membrane pairs may differ from the number of electrochemical cells.
- **name**: Voltage Balancing

- **relationship**: Becomes increasingly important with more cells per stack.

## Compatible Systems

Multi Cell Stack Configuration

## References

- Aelterman, P., Rabaey, K., Pham, H.T., Boon, N., & Verstraete, W. (2006). Continuous electricity generation at high voltages and currents using stacked environmental fuel cells. *Environmental Science & Technology*, 40(10), 3388--3394.
- Dekker, A., Ter Heijne, A., Saakes, M., Hamelers, H.V., & Buisman, C.J. (2009). Analysis and improvement of a scaled-up and stacked microbial fuel cell. *Environmental Science & Technology*, 43(23), 9038--9042.
- An, J., Kim, B., Jang, J.K., Lee, H.S., & Chang, I.S. (2014). New architecture for modularity of a microbial fuel cell stack. *Bioresource Technology*, 173, 210--215.
- Zhuang, L., Zheng, Y., Zhou, S., Yuan, Y., & Yuan, H. (2012). Scalable microbial fuel cell (MFC) stack for continuous real wastewater treatment. *Bioresource Technology*, 106, 82--88.
- Kim, Y. & Logan, B.E. (2011). Microbial desalination cells for energy production and desalination. *Desalination*, 308, 122--130.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Cells+Per+Stack&body=**Parameter%3A**+Cells+Per+Stack%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fcells-per-stack.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Cells+Per+Stack&body=**Parameter%3A**+Cells+Per+Stack%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fcells-per-stack.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Cells+Per+Stack&body=**Parameter%3A**+Cells+Per+Stack%0A**Category%3A**+Reactor+Design%0A**File%3A**+parameters%2Freactor-design%2Fcells-per-stack.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
