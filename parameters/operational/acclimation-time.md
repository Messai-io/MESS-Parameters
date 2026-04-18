# Acclimation Time

Acclimation time in microbial electrochemical systems (MES) refers to the period required for the microbial community to adapt to the bioelectrochemical environment and establish stable, reproducible electrochemical performance. This encompasses the time from initial inoculation to the achievement of steady-state current production (for MFCs) or steady-state product formation (for microbial electrosynthesis). During acclimation, electroactive microorganisms colonize the electrode surface, form a mature biofilm, develop extracellular electron transfer (EET) pathways, and outcompete non-electroactive species for the ecological niche at the electrode interface.

The acclimation process in MES is fundamentally different from conventional bioreactor startup because the microorganisms must not only metabolize the available substrates but also establish electrical connectivity with the solid electrode. For anodic biofilms (e.g., *Geobacter sulfurreducens*, *Shewanella oneidensis*), this involves producing conductive nanowires (type IV pili), outer-membrane cytochromes (OmcZ, OmcS, MtrC), and redox-active extracellular polymeric substances. For cathodic biofilms in electrosynthesis, microorganisms must adapt to accepting electrons from the cathode, which may involve upregulating specific hydrogenases, formate dehydrogenases, or direct electron uptake mechanisms that are not typically expressed under conventional growth conditions.

Acclimation time is a critical operational parameter because it represents a non-productive startup period during which the MES consumes resources (energy for MECs, substrate for MFCs) without generating useful output. Minimizing acclimation time through optimized inoculation strategies, electrode pre-treatment, applied potential ramping protocols, and nutrient supplementation is an active area of MES research. Successful acclimation is typically confirmed by reproducible polarization curves, stable open-circuit voltage, consistent current density over multiple batch cycles, or steady-state product titers.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Operational |
| **Subcategory** | Startup Procedures |
| **Type** | number |
| **Unit** | d |
| **Minimum** | 1 |
| **Maximum** | 60 |
| **Papers Reporting** | 222 |

## Typical Values

- **Valid Range**: 1 to 365 days
- **Typical Range**: 7 to 60 days
- **Fast Acclimation (Pre-adapted Inoculum)**: 3 to 10 days
- **Standard MFC Acclimation**: 14 to 30 days
- **Electrosynthesis Cathode Acclimation**: 20 to 90 days
- **Pure Culture *Geobacter* Acclimation**: 5 to 15 days
- **Mixed Culture from Wastewater**: 14 to 45 days
- **High-Salinity or Extreme pH Systems**: 30 to 120 days

## Measurement Methods

- **Electrochemical Performance Monitoring**: The primary method for tracking acclimation is continuous monitoring of current density (or voltage across a fixed external resistance) over time. A characteristic acclimation curve shows an initial lag phase (hours to days), followed by an exponential increase in current as the electroactive biofilm develops, and finally a plateau indicating steady-state performance. Acclimation is considered complete when the current density varies by less than 5-10% over three consecutive batch cycles or over a 48-hour continuous period.
- **Cyclic Voltammetry (CV) Tracking**: Periodic cyclic voltammetry measurements during acclimation reveal the development of redox-active species at the electrode surface. The appearance and growth of characteristic oxidation and reduction peaks (e.g., the -0.15 V vs. Ag/AgCl peak associated with outer-membrane cytochromes in *Geobacter*) indicate progressive biofilm maturation. The midpoint potential and peak current from CV provide mechanistic insight into the EET pathways being established.
- **Biofilm Imaging and Quantification**: Confocal laser scanning microscopy (CLSM) of electrode samples taken at intervals during acclimation allows direct visualization of biofilm development, including thickness, coverage, and spatial distribution of live/dead cells. Crystal violet staining provides a simpler, quantitative measure of total biofilm biomass that can be correlated with electrochemical performance.
- **Microbial Community Analysis**: 16S rRNA gene amplicon sequencing of electrode biofilm samples during acclimation tracks the shift in community composition from the diverse initial inoculum toward an electroactive-enriched community. The increasing relative abundance of known electroactive genera (*Geobacter*, *Desulfuromonas*, *Shewanella*, *Sporomusa*) indicates successful electrochemical acclimation.

## Affecting Factors

### Primary

- **Inoculum Source and Pre-adaptation**: The composition of the initial microbial inoculum strongly determines acclimation time. Pre-adapted inocula from operating MES, anaerobic digesters, or sediment fuel cells contain higher initial populations of electroactive organisms, reducing acclimation by 50-80% compared to fresh wastewater inocula.
- **Electrode Material and Surface Properties**: Electrode surface chemistry, roughness, porosity, and hydrophilicity affect microbial attachment kinetics. Carbon-based electrodes with high surface area (carbon felt, carbon brush) and surface modifications (acid treatment, nitrogen doping, conductive polymer coating) typically accelerate biofilm formation.
- **Applied Potential**: For potentiostatically controlled MES, the set potential affects which microbial populations are selected and how quickly they colonize the electrode. Moderately positive anode potentials (+0.2 to +0.4 V vs. SHE) generally promote faster anodic acclimation, while moderately negative cathode potentials (-0.6 to -0.8 V vs. SHE) favor cathodic electrosynthesis acclimation.
- **Substrate Type and Concentration**: Simple substrates (acetate, lactate) support faster acclimation than complex substrates (wastewater, lignocellulosic hydrolysate) because they can be directly utilized by electroactive organisms without requiring syntrophic partnerships for degradation.
- **Temperature**: Operating within the optimal temperature range of the target electroactive community (25-35C for mesophilic, 50-60C for thermophilic) minimizes acclimation time. Temperatures below 15C can extend acclimation dramatically (3-10x longer).
- **pH and Buffer Capacity**: Maintaining stable pH near neutral (6.5-7.5) through adequate buffering prevents pH-induced stress that slows biofilm development.
- **Nutrient Availability**: Deficiencies in essential nutrients (nitrogen, phosphorus, trace metals such as iron, cobalt, nickel) can limit microbial growth and extend acclimation.
- **Dissolved Oxygen Control**: For anaerobic anodic biofilms, oxygen intrusion inhibits strict anaerobes like *Geobacter* and delays acclimation. For aerobic biocathodes, controlled oxygen delivery is essential.
- **Reactor Configuration**: Smaller electrode spacing, higher surface-area-to-volume ratios, and flow-through configurations generally support faster acclimation by improving mass transfer and increasing the probability of electrode-microbe contact.

## Related Parameters

- **name**: Inoculum Source

- **relationship**: Directly determines the starting microbial community composition and thus acclimation trajectory.
- **name**: Inoculum Volume

- **relationship**: Larger inoculum volumes provide more initial cells, potentially reducing the lag phase of acclimation.
- **name**: Startup Mode

- **relationship**: The protocol used during startup (constant resistance, constant potential, open circuit enrichment) affects acclimation dynamics.
- **name**: Steady-State Criteria

- **relationship**: Defines the endpoint of acclimation by specifying the performance stability thresholds that must be met.
- **name**: Temperature

- **relationship**: A primary environmental factor governing microbial growth rate and therefore acclimation speed.
- **name**: External Load

- **relationship**: The external resistance during acclimation affects the potential experienced by the biofilm and thus the selective pressure on the microbial community.

## Compatible Systems

Startup Shutdown

## References

- Liu, H., Cheng, S., & Logan, B.E. (2005). Power generation in fed-batch microbial fuel cells as a function of ionic strength, temperature, and reactor configuration. *Environmental Science & Technology*, 39(14), 5488-5493.
- Torres, C.I., Krajmalnik-Brown, R., Parameswaran, P., et al. (2009). Selecting anode-respiring bacteria based on anode potential: phylogenetic, electrochemical, and microscopic characterization. *Environmental Science & Technology*, 43(24), 9519-9524.
- Rismani-Yazdi, H., Carver, S.M., Christy, A.D., & Tuovinen, O.H. (2008). Cathodic limitations in microbial fuel cells: An overview. *Journal of Power Sources*, 180(2), 683-694.
- Marsili, E., Rollefson, J.B., Baron, D.B., et al. (2008). Microbial biofilm voltammetry: direct electrochemical characterization of catalytic electrode-attached biofilms. *Applied and Environmental Microbiology*, 74(23), 7329-7337.
- Patil, S.A., Harnisch, F., Koch, C., et al. (2011). Electroactive mixed culture derived biofilms in microbial bioelectrochemical systems. *Bioresource Technology*, 102(20), 9683-9690.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Acclimation+Time&body=**Parameter%3A**+Acclimation+Time%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Facclimation-time.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Acclimation+Time&body=**Parameter%3A**+Acclimation+Time%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Facclimation-time.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Acclimation+Time&body=**Parameter%3A**+Acclimation+Time%0A**Category%3A**+Operational%0A**File%3A**+parameters%2Foperational%2Facclimation-time.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
