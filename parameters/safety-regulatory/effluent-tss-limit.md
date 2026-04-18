# Effluent Tss Limit

Effluent total suspended solids (TSS) limit refers to the maximum allowable concentration of suspended particulate matter in the treated effluent discharged from microbial electrochemical system (MES) installations. TSS is a measure of the mass of particles retained on a standard glass fiber filter (typically 1.2 or 1.5 micrometers nominal pore size) after filtering a known volume of effluent and drying the residue at 103-105 degC. TSS limits protect receiving waters from turbidity, sediment deposition, and the associated transport of adsorbed pollutants including heavy metals, pathogens, and phosphorus.

In MES systems, suspended solids in the effluent originate from several sources: unremoved influent particulates, detached biofilm fragments from anode and cathode surfaces, precipitated minerals (particularly from cathode reactions), and microbial cell debris. The particulate matter can also contribute significantly to measured effluent BOD and COD, making TSS control essential for meeting all discharge quality parameters. MES systems generally have an inherent advantage in TSS removal because the biofilm-based treatment process does not require mixed liquor suspension like activated sludge, and the relatively quiescent flow conditions in MES reactors promote settling.

Achieving low effluent TSS concentrations typically requires appropriate effluent clarification, which may include sedimentation, membrane filtration, or granular media filtration. Some MES configurations incorporate membrane separation (membrane bioelectrochemical reactors, MBER) that can achieve effluent TSS below 1 mg/L, enabling direct water reuse applications. The trade-off is increased energy consumption for membrane operation and the need for membrane fouling management.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Safety Regulatory |
| **Subcategory** | Discharge Standards |
| **Type** | number |
| **Unit** | mg/L |
| **Minimum** | 0 |
| **Maximum** | 100 |

## Typical Values

- **Valid Range**: 1 - 100 mg/L TSS
- **US secondary treatment standard (NPDES)**: 30 mg/L TSS (30-day average), 45 mg/L (7-day average)
- **EU Urban Wastewater Treatment Directive**: 35 mg/L TSS (or 90% removal for >10,000 PE)
- **Advanced treatment standards**: 5 - 15 mg/L TSS
- **Water reuse (unrestricted irrigation, Title 22, California)**: 2 - 5 mg/L TSS (turbidity < 2 NTU)
- **China Grade 1A standard (GB 18918)**: 10 mg/L TSS
- **Single-stage MFC effluent (with settling)**: 10 - 40 mg/L TSS
- **MFC effluent with filtration**: 2 - 10 mg/L TSS
- **Membrane bioelectrochemical reactor (MBER)**: < 1 - 5 mg/L TSS
- **MEC effluent**: 10 - 30 mg/L TSS
- **MDC effluent**: 5 - 25 mg/L TSS

## Measurement Methods

- **Gravimetric Method (Standard Methods 2540D)**: 1. Pre-wash and dry a glass fiber filter (Whatman 934-AH or equivalent, 1.5 micrometer nominal pore size) at 103-105 degC, cool in a desiccator, and record the tare weight. 2. Filter a measured volume of well-mixed effluent sample through the pre-weighed filter using vacuum or pressure filtration. 3. Rinse the filter with three 10 mL portions of distilled water to remove dissolved solids. 4. Dry the filter at 103-105 degC for at least 1 hour, cool in a desiccator, and weigh. 5. Calculate TSS (mg/L) = (weight of filter + residue - tare weight of filter) x 1,000,000 / sample volume (mL). 6. Analyze in duplicate; results should agree within 5%.
- **Turbidity Correlation Method**: 1. Measure effluent turbidity using a calibrated nephelometric turbidimeter (NTU measurement). 2. Develop a site-specific correlation between turbidity and TSS using paired measurements (minimum 20 data points). 3. Use the correlation equation for rapid TSS estimation from turbidity readings. 4. Note that the correlation is matrix-specific and must be re-established if the effluent character changes.
- **Online TSS Monitoring**: 1. Install a continuous suspended solids analyzer (optical scatter/absorption type) in the MES effluent stream. 2. Calibrate using laboratory gravimetric TSS measurements. 3. Configure the analyzer for the expected TSS range and particle characteristics of MES effluent. 4. Validate against laboratory measurements at regular intervals and adjust calibration as needed.

## Affecting Factors

### Primary

- **Effluent clarification method**: The type and effectiveness of solids separation (sedimentation, filtration, membrane) directly determines effluent TSS.
- **Biofilm sloughing**: Periodic detachment of biofilm from MES electrodes releases particulate matter into the effluent.
- **Influent TSS**: High influent particulate loads that are not captured by the MES biofilm process pass through to the effluent.
- **Hydraulic loading rate**: Higher flow rates reduce settling time and increase TSS carryover.
- **Mineral precipitation**: Cathode-generated alkalinity can cause precipitation of calcium carbonate and other minerals that contribute to TSS.
- **Temperature**: Lower temperatures increase water viscosity, slowing particle settling and increasing effluent TSS.
- **Chemical dosing**: Addition of iron or aluminum salts for phosphorus removal generates chemical sludge that must be captured to prevent TSS exceedances.
- **Reactor hydraulics**: Short-circuiting and turbulent flow patterns increase the likelihood of solids carryover.

## Related Parameters

- **name**: Influent TSS

- **relationship**: The particulate load entering the MES determines the solids removal challenge.
- **name**: Effluent BOD Limit

- **relationship**: Particulate organic matter in TSS contributes to effluent BOD.
- **name**: Effluent COD Limit

- **relationship**: Suspended solids carry particulate COD that is captured in COD measurements.
- **name**: Effluent TP Limit

- **relationship**: Particulate phosphorus in TSS contributes significantly to effluent TP.
- **name**: Sludge Production

- **relationship**: The mass of TSS removed from the effluent contributes to overall sludge production.

## Compatible Systems

Regulatory Compliance

## References

- Standard Methods for the Examination of Water and Wastewater (2017). 23rd Edition. APHA, AWWA, WEF. Method 2540D.
- US EPA (2010). NPDES Permit Writers Manual. EPA-833-K-10-001.
- EU Council Directive 91/271/EEC (1991). Urban Wastewater Treatment Directive.
- Li, J. et al. (2014). Integrated electro-membrane bioreactor for water treatment. Water Research, 57, 172-182.
- Katuri, K.P. et al. (2014). A novel anaerobic electrochemical membrane bioreactor with integrated biocathode. Chemical Engineering Journal, 236, 43-53.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Effluent+Tss+Limit&body=**Parameter%3A**+Effluent+Tss+Limit%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Feffluent-tss-limit.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Effluent+Tss+Limit&body=**Parameter%3A**+Effluent+Tss+Limit%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Feffluent-tss-limit.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Effluent+Tss+Limit&body=**Parameter%3A**+Effluent+Tss+Limit%0A**Category%3A**+Safety+Regulatory%0A**File%3A**+parameters%2Fsafety-regulatory%2Feffluent-tss-limit.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
