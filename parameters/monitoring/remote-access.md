# Remote Access

Remote access defines the capability for operators, researchers, and maintenance personnel to monitor and control MES systems from locations distant from the physical installation, using network-connected devices (computers, tablets, smartphones). Remote access enables supervision of unattended MES operations, rapid troubleshooting without on-site visits, data retrieval from field-deployed systems, and collaborative monitoring by distributed research teams. The implementation encompasses network infrastructure, authentication, authorization, encryption, and user interface design.

Remote access technologies range from simple data retrieval (SFTP download of logged files) to full interactive control (web-based HMI with real-time data and control capability). For MES, remote monitoring typically includes viewing real-time process data, accessing historical trends, receiving alarm notifications, and downloading datasets. Remote control (changing setpoints, starting/stopping equipment) requires additional security measures and is often restricted to authorized personnel through role-based access control.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Monitoring Control |
| **Subcategory** | Remote Monitoring |
| **Type** | boolean |

## Typical Values

- **VPN access**: Encrypted tunnel (IPSec, OpenVPN, WireGuard), 10-100 Mbps, latency 20-200 ms
- **Web-based HMI**: HTTPS access via browser, 1-10 s page load, 2-30 s data refresh
- **Cloud IoT platform**: MQTT/HTTPS, 0.1-10 s data latency, unlimited concurrent users
- **Cellular/4G-5G**: 10-100 Mbps, 20-50 ms latency, monthly data cost $10-100
- **Satellite (remote locations)**: 1-10 Mbps, 500-800 ms latency, $50-500/month
- **LoRaWAN (low-power remote)**: 0.3-50 kbps, suitable for periodic data transmission

## Measurement Methods

- **Network Performance Testing**: Latency (ping), bandwidth (speed test), and packet loss measurements verify that the remote access link provides adequate performance for the intended use. Response time testing of remote HMI operations confirms acceptable user experience.
- **Security Assessment**: Penetration testing and vulnerability scanning of remote access infrastructure identifies security weaknesses. Authentication strength, encryption adequacy, and session management are evaluated against IEC 62443 security requirements appropriate for the MES installation's risk level.
- **Availability Monitoring**: Uptime monitoring services (Nagios, Zabbix, UptimeRobot) continuously verify remote access availability, alerting administrators to outages. Target availability is 99-99.9% for routine monitoring, 99.9-99.99% for critical operations.

## Affecting Factors

### Primary

- **Network availability**: Urban MES installations have reliable broadband. Rural/remote installations may require cellular, satellite, or LoRaWAN connectivity with variable reliability and bandwidth.
- **Security requirements**: Higher cybersecurity levels require more complex remote access infrastructure (VPN, MFA, network segmentation). Security measures add latency and complexity but are essential for protecting MES control systems.
- **Bandwidth and latency**: Real-time video monitoring requires 1-5 Mbps. Trend data requires 10-100 kbps. Alarm notifications require less than 1 kbps. The available bandwidth determines which remote monitoring features are practical.
- **User interface design**: Web-based HMIs provide cross-platform access without software installation. Native apps provide better performance on mobile devices. VPN-based access to desktop HMI software provides full functionality but requires client software installation.
- **Regulatory and safety considerations**: Remote control of safety-critical MES functions may require additional authorization levels, audit logging, and dead-man switch provisions. Some jurisdictions require on-site operator presence for certain wastewater treatment operations.

## Compatible Systems

Automation Scada

## References

- Boyer, S. A. (2010). *SCADA* (4th ed.). ISA.
- IEC 62443 (2018). Industrial communication networks - Network and system security.
- NIST (2018). *Framework for Improving Critical Infrastructure Cybersecurity*. Version 1.1.
- Olias, L. G., & Di Lorenzo, M. (2021). Microbial fuel cells for in-field water quality monitoring. *RSC Advances*, 11, 16307-16317.
- Galloway, B., & Hancke, G. P. (2013). Introduction to industrial control networks. *IEEE Communications Surveys & Tutorials*, 15(2), 860-880.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Remote+Access&body=**Parameter%3A**+Remote+Access%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fremote-access.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Remote+Access&body=**Parameter%3A**+Remote+Access%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fremote-access.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Remote+Access&body=**Parameter%3A**+Remote+Access%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fremote-access.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
