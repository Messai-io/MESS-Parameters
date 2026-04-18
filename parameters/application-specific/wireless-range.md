# Wireless Range

Wireless Range specifies the maximum effective communication distance between wireless sensors, transmitters, actuators, and base stations/gateways used in microbial electrochemical system (MES) monitoring and control networks. Measured in meters under specified conditions (free space, obstructed, indoor/outdoor), this parameter encompasses the transmission distance for all wireless technologies deployed in MES -- including WirelessHART, ISA100.11a, Zigbee, LoRaWAN, Bluetooth Low Energy (BLE), Wi-Fi, and cellular (4G/5G). In the safety and regulatory context, wireless range determines whether all safety-critical sensors remain within reliable communication distance of the safety controller, affects the reliability of alarm transmission, and introduces considerations for radio frequency (RF) emissions in hazardous areas.

Safety implications of wireless range limitations in MES are significant. If a wireless gas detector loses communication with the safety controller due to range exceedance, the safety function is compromised -- a potentially catastrophic condition in MEC hydrogen production facilities. Wireless range is not a fixed value but varies dynamically with environmental conditions (humidity, vegetation growth, structural changes), multipath interference, and battery state -- meaning that a system functioning at the edge of its range may intermittently fail when conditions change. In hazardous (classified) areas, the RF energy transmitted by wireless devices must be below ignition thresholds per IEC 60079-0 (non-sparking and intrinsically safe RF requirements), which may limit transmit power and consequently reduce range. Wireless cybersecurity vulnerabilities (jamming, spoofing, man-in-the-middle attacks) also have safety implications when wireless signals carry safety-critical data.

Regulatory frameworks governing wireless range in MES include FCC Part 15 (unlicensed radio frequency devices in the US), ETSI EN 300 220/328 (European radio regulations), IEC 60079-0/60079-11 (wireless devices in explosive atmospheres), IEC 62591 (WirelessHART specification), IEC 62734 (ISA100.11a specification), and NIST SP 800-82 (Guide to Industrial Control Systems Security) for wireless cybersecurity. ISA-100.11a and WirelessHART standards include specific provisions for safety-critical communication reliability.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Application Specific |
| **Subcategory** | Wearable Systems |
| **Type** | number |
| **Unit** | m |
| **Minimum** | 0.1 |
| **Maximum** | 100 |

## Typical Values

- **Valid Range**: 1-50,000 m depending on technology, power, and environment
- **Typical Range**: 30-500 m for most MES installation wireless monitoring

## Measurement Methods

- **Site Survey (Pre-Installation)**: 1. Deploy temporary wireless transmitter at planned sensor locations 2. Deploy receiver/gateway at planned controller/monitoring location 3. Measure Received Signal Strength Indicator (RSSI) at multiple locations using spectrum analyzer or wireless survey tool 4. Record RSSI at each point: minimum -75 dBm for reliable WirelessHART/ISA100.11a operation 5. Identify dead zones (RSSI < -85 dBm) and plan repeater/mesh node placement 6. Conduct survey during worst-case conditions: wet weather, full vegetation, maximum MES operation (pumps, potentiostats generating EMI) 7. Document survey results for commissioning records and safety system validation
- **Operational Range Verification**: 1. After installation, log RSSI and packet delivery rate for each wireless sensor over minimum 30-day period 2. Calculate statistics: mean RSSI, minimum RSSI, 95th percentile latency, and packet loss rate 3. Verify packet delivery rate >99.9% for safety-critical instruments (per IEC 62591 / 62734) 4. Set RSSI alarm threshold at -80 dBm (warning) and -85 dBm (critical) to detect range degradation before communication loss 5. Re-survey after any physical changes to the installation (new structures, vegetation growth, equipment additions)
- **Coexistence Testing**: 1. Identify all RF sources in the MES environment: Wi-Fi access points, Bluetooth devices, other ISM-band equipment, potentiostat RF emissions 2. Measure ambient RF noise floor at the wireless network frequency (2.4 GHz or sub-GHz) using spectrum analyzer 3. Verify wireless network performance with all coexisting RF sources active 4. Implement frequency planning and channel assignment to minimize interference 5. Document coexistence assessment for IEC 62591/62734 compliance

## Affecting Factors

### Primary

- **Transmit Power**: Regulated by FCC (max 1W EIRP for 2.4 GHz ISM in US) and ETSI; higher power extends range but may exceed intrinsic safety energy limits in hazardous areas
- **Frequency Band**: Sub-GHz (868/915 MHz) propagates further than 2.4 GHz; 5 GHz and mmWave have shortest range but highest bandwidth
- **Antenna Gain and Orientation**: Directional antennas (6-15 dBi) extend range significantly but require precise alignment; omnidirectional (2-3 dBi) for general coverage
- **Physical Obstructions**: Metal reactor housings, concrete walls, and earthen berms severely attenuate wireless signals
- **Network Topology**: Mesh networks (WirelessHART, Zigbee) extend effective range through multi-hop relay; star networks are limited to single-hop range
- **Battery State**: Low battery reduces transmit power in some devices, reducing effective range
- **Environmental Moisture**: Humidity and rain increase signal absorption, particularly at higher frequencies
- **Temperature**: Extreme temperatures affect antenna impedance matching and receiver sensitivity
- **Electromagnetic Interference**: Potentiostats, VFDs, and other MES electrical equipment generate EMI that degrades receiver sensitivity
- **Multipath and Fading**: Reflections from metallic surfaces create constructive/destructive interference patterns, causing localized signal nulls

## Related Parameters

- **name**: Signal Type

- **relationship**: Wireless is one of several signal type options; range limitations may favor wired signal types for safety-critical applications
- **name**: Update Latency

- **relationship**: Multi-hop wireless networks increase latency with each hop; range extension through mesh may increase update latency
- **name**: Measurement Mode

- **relationship**: Continuous measurement over wireless requires sustained communication; intermittent modes tolerate brief communication gaps
- **name**: Risk Score

- **relationship**: Safety-critical applications (high risk score) may require wired backup to wireless monitoring
- **name**: Stability

- **relationship**: Wireless link stability over seasonal and environmental variations determines long-term monitoring reliability

## Compatible Systems

Medical Device Applications

## References

- IEC 62591:2016. Industrial communication networks -- Wireless communication network and communication profiles -- WirelessHART.
- IEC 62734:2014. Industrial process measurement, control and automation -- Industrial communication networks.
- FCC. (2023). 47 CFR Part 15 -- Radio Frequency Devices.
- NIST. (2015). SP 800-82 Rev. 2: Guide to Industrial Control Systems (ICS) Security.
- Song, J., et al. (2008). WirelessHART: Applying wireless technology in real-time industrial process control. IEEE Real-Time and Embedded Technology and Applications Symposium, 377-386.
- ISA. (2018). ISA-100.11a: Wireless Systems for Industrial Automation: Process Control and Related Applications.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Wireless+Range&body=**Parameter%3A**+Wireless+Range%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fwireless-range.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Wireless+Range&body=**Parameter%3A**+Wireless+Range%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fwireless-range.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Wireless+Range&body=**Parameter%3A**+Wireless+Range%0A**Category%3A**+Application+Specific%0A**File%3A**+parameters%2Fapplication-specific%2Fwireless-range.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
