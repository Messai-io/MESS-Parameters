# Data Logger Type

Data logger type specifies the hardware platform used for automated collection, timestamping, and storage of monitoring data from microbial electrochemical systems (MES). The data logger serves as the central hub connecting sensors, transducers, and analyzers to data storage and control systems, converting analog and digital sensor signals into time-stamped digital records. The choice of data logger determines measurement accuracy, channel capacity, sampling rate, storage duration, communication capabilities, and environmental tolerance of the MES monitoring system.

Data loggers for MES range from simple single-channel USB loggers ($50-200) for laboratory experiments to multi-channel industrial data acquisition systems ($5,000-50,000) for pilot and full-scale installations. The principal categories include: standalone data loggers (battery-powered, internal memory, periodic download), PC-based DAQ systems (tethered to computer, real-time display and analysis), PLC-integrated systems (combined monitoring and control), cloud-connected IoT platforms (wireless sensors with cloud data storage), and custom microcontroller-based systems (Arduino, Raspberry Pi, ESP32 with purpose-built firmware).

The data logger must match the electrical characteristics of MES sensors: high-impedance inputs (more than 10 Mohm) for pH and ORP electrodes, low-impedance inputs for thermocouples and shunt resistors, current loop inputs for 4-20 mA transmitters, and digital inputs for frequency/pulse sensors (gas flow meters, turbidity). Input protection against voltage spikes (from potentiostat switching, electrostatic discharge) is essential for reliable long-term operation in MES environments.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Monitoring Control |
| **Subcategory** | DAQ Hardware |
| **Type** | select |

## Typical Values

- **USB data loggers**: 1-8 channels, 10-16 bit, 1 Hz max, $50-500
- **Research DAQ (NI, Keithley)**: 4-256 channels, 16-24 bit, 1 kHz-1 MHz, $2000-50,000
- **Industrial PLC/RTU**: 8-128 channels, 12-16 bit, 1-100 Hz, $1000-20,000
- **IoT platforms (Arduino/ESP32)**: 4-16 channels, 10-12 bit, 1-100 Hz, $20-200
- **Campbell Scientific**: 8-64 channels, 24 bit, 100 Hz, $2000-15,000
- **Storage capacity**: 1 MB (USB) to 1 TB+ (PC-based)
- **Battery life**: 6 months to 5 years (standalone), unlimited (mains powered)
- **Operating temperature**: -20 to +60 degrees C (industrial), 0 to +50 (standard)

## Measurement Methods

- **Standalone Data Loggers**: Self-contained units (Onset HOBO, Lascar EL-USB, Omega OM-CP) with integrated sensors or external sensor inputs record data to internal flash memory at programmable intervals. Battery power enables deployment without electrical infrastructure. Data is downloaded via USB, Bluetooth, or Wi-Fi for post-experiment analysis. These loggers are ideal for distributed MES monitoring where wired infrastructure is impractical.
- **PC-Based Data Acquisition**: Computer-tethered DAQ systems (National Instruments, Measurement Computing, LabJack) provide real-time data display, analysis, and storage through software platforms (LabVIEW, MATLAB, Python). High channel counts (up to 1024+), high resolution (24 bit), and high sampling rates (MHz) enable comprehensive MES characterization. Software-defined measurement configurations allow rapid reconfiguration for different experimental protocols.
- **PLC-Integrated Data Logging**: Programmable logic controllers (Siemens S7, Allen-Bradley, Schneider M340) with integrated data logging modules combine monitoring and control functions in a single platform. Industrial-grade reliability (MTBF more than 100,000 hours), wide operating temperature range, and deterministic timing make PLCs suitable for long-term unattended MES operation. Data is stored in onboard memory and simultaneously forwarded to SCADA historians for centralized management.

## Affecting Factors

### Primary

- **Measurement accuracy requirements**: Research applications demand 24-bit resolution (0.01% accuracy) for detecting small electrochemical signals. Operational monitoring typically needs 16-bit resolution (0.01% accuracy) for voltage/current and 12-bit (0.05%) for environmental parameters. Higher resolution loggers cost 2-10x more per channel.
- **Environmental conditions**: Outdoor MES installations require weatherproof enclosures (IP65-IP67), extended temperature range (-40 to +70 degrees C), and UV-resistant housings. Wastewater environments expose electronics to corrosive gases (H2S, NH3) requiring sealed enclosures with filtered ventilation. Marine MES requires salt-fog resistant construction.
- **Power availability**: Mains-powered loggers offer unlimited operation but require electrical infrastructure. Battery-powered loggers (alkaline, lithium) provide 6 months to 5 years depending on sampling rate and communication frequency. Solar-powered loggers with rechargeable batteries enable indefinite operation in sunny locations.
- **Communication requirements**: Local data download (USB, SD card) is simplest but requires physical access. Wired networking (Ethernet) provides reliable high-bandwidth communication. Wireless (Wi-Fi, cellular, LoRaWAN, satellite) enables remote monitoring but adds power consumption and reliability concerns.
- **Scalability**: Single-cell MES experiments start with minimal channel counts (5-10) but may expand to multi-cell arrays requiring 50-200+ channels. Modular DAQ architectures (expandable chassis with plug-in modules) scale without replacing existing hardware. Fixed-channel-count loggers require replacement when monitoring requirements grow.

## Compatible Systems

Data Acquisition

## References

- Logan, B. E., et al. (2006). Microbial fuel cells: Methodology and technology. *Environmental Science & Technology*, 40(17), 5181-5192.
- National Instruments (2020). *Data Acquisition Handbook*. NI Corp.
- Omega Engineering (2019). *Data Acquisition Technical Reference*. Omega.
- Olias, L. G., & Di Lorenzo, M. (2021). Microbial fuel cells for in-field water quality monitoring. *RSC Advances*, 11, 16307-16317.
- Wang, H., & Ren, Z. J. (2013). A comprehensive review of microbial electrochemical systems. *Biotechnology Advances*, 31(8), 1796-1807.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Data+Logger+Type&body=**Parameter%3A**+Data+Logger+Type%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fdata-logger-type.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Data+Logger+Type&body=**Parameter%3A**+Data+Logger+Type%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fdata-logger-type.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Data+Logger+Type&body=**Parameter%3A**+Data+Logger+Type%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fdata-logger-type.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
