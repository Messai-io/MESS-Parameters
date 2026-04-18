# Cybersecurity Level

Cybersecurity level defines the degree of protection implemented in MES monitoring and control systems against unauthorized access, data manipulation, and cyber-physical attacks. As MES installations increasingly incorporate networked sensors, internet-connected data loggers, cloud-based analytics, and remote control capabilities, the attack surface expands to include risks ranging from data theft and operational disruption to physical damage through malicious control action manipulation. The cybersecurity level encompasses network segmentation, authentication protocols, encryption standards, intrusion detection, and security monitoring practices.

MES cybersecurity follows the ISA/IEC 62443 framework for industrial automation and control systems (IACS), which defines four security levels: SL1 (casual/unintentional violation), SL2 (intentional violation using simple means), SL3 (intentional violation using sophisticated means), and SL4 (intentional violation using state-sponsored resources). Most research MES installations operate at SL1-SL2, while critical infrastructure MES (wastewater treatment plants, energy systems) should target SL2-SL3. The required security level is determined by a risk assessment considering the consequences of a successful attack (environmental release, equipment damage, data loss, economic impact).

The consequences of inadequate cybersecurity in MES range from nuisance (data corruption requiring experiment restart) to serious (malicious manipulation of applied voltage causing hydrogen accumulation above explosive limits, or unauthorized discharge of untreated wastewater). As MES technology matures toward commercial deployment in water treatment and energy recovery, cybersecurity becomes a regulatory and liability concern requiring systematic risk management.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Monitoring Control |
| **Subcategory** | Remote Monitoring |
| **Type** | select |

## Typical Values

- **SL1 (Basic)**: Password protection, basic firewall, no encryption; suitable for isolated lab systems
- **SL2 (Standard)**: Role-based access, network segmentation, encrypted communication; suitable for pilot plants
- **SL3 (Enhanced)**: Multi-factor authentication, intrusion detection, encrypted storage, security monitoring; for WWTP integration
- **SL4 (Critical)**: Defense-in-depth, continuous monitoring, penetration testing, dedicated security team; for critical infrastructure
- **Authentication**: Local passwords (SL1), LDAP/Active Directory (SL2), PKI certificates + MFA (SL3-4)
- **Encryption**: None (SL1), TLS 1.2+ for communication (SL2+), AES-256 for data at rest (SL3+)
- **Patch management**: Annual (SL1), quarterly (SL2), monthly (SL3), continuous (SL4)

## Measurement Methods

- **Security Assessment and Audit**: Formal security assessments following IEC 62443-3-2 identify vulnerabilities in MES monitoring and control networks through documentation review, network scanning, configuration auditing, and penetration testing. Vulnerability scanners (Nessus, OpenVAS) identify unpatched software, default credentials, and misconfigured services. Assessment reports assign a current security level and identify gaps requiring remediation to achieve the target level. Annual re-assessment tracks security posture evolution.
- **Network Traffic Analysis**: Continuous network monitoring tools (Wireshark, Zeek/Bro, industrial-specific solutions like Claroty or Nozomi Networks) capture and analyze all network traffic to/from MES control systems. Baseline traffic patterns are established during normal operation; deviations trigger alerts for investigation. Deep packet inspection of industrial protocols (Modbus, OPC UA, MQTT) detects anomalous commands that may indicate compromise.
- **Compliance Verification**: Automated compliance scanning verifies that MES control system configurations match the security policy requirements: password complexity, encryption settings, access control lists, firewall rules, software versions, and certificate validity. Compliance dashboards provide real-time visibility into the security status of all networked MES components, with automated alerting for non-compliant configurations.

## Affecting Factors

### Primary

- **Network connectivity and exposure**: Air-gapped MES systems (no network connection) have minimal cyber risk. Internet-connected systems with remote access have maximum exposure. Each network connection (Wi-Fi, Ethernet, cellular, cloud API) adds attack surface. Minimizing connectivity to operationally required connections reduces risk.
- **System age and patch status**: Older MES control systems (PLCs, HMIs, embedded devices) may run obsolete operating systems with known vulnerabilities that cannot be patched. Legacy Modbus and PROFIBUS protocols lack authentication and encryption. Compensating controls (network isolation, application whitelisting, protocol filtering) mitigate risks when patching is impossible.
- **Human factors**: Weak passwords, shared credentials, phishing susceptibility, and insufficient security training are the most common attack vectors. Security awareness training, mandatory password policies, and multi-factor authentication address human-factor vulnerabilities. Role-based access control limits the damage from compromised individual accounts.
- **Physical security**: Physical access to MES equipment enables direct connection to control networks, USB-based malware delivery, and hardware manipulation. Physical security measures (locked enclosures, access logging, tamper-evident seals) complement network cybersecurity.
- **Regulatory requirements**: Wastewater treatment and energy generation facilities may be subject to sector-specific cybersecurity regulations (NIST Cybersecurity Framework, EU NIS2 Directive, NERC CIP for energy). Compliance requirements drive minimum security levels and documentation practices for MES installations in regulated environments.

## Compatible Systems

Automation Scada

## References

- IEC 62443 (2018). Industrial communication networks - Network and system security. International Electrotechnical Commission.
- NIST (2018). *Framework for Improving Critical Infrastructure Cybersecurity*, Version 1.1. National Institute of Standards and Technology.
- Galloway, B., & Hancke, G. P. (2013). Introduction to industrial control networks. *IEEE Communications Surveys & Tutorials*, 15(2), 860-880.
- Stouffer, K., et al. (2015). *Guide to Industrial Control Systems Security*. NIST SP 800-82 Rev. 2.
- Boyer, S. A. (2010). *SCADA: Supervisory Control and Data Acquisition* (4th ed.). ISA.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Cybersecurity+Level&body=**Parameter%3A**+Cybersecurity+Level%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fcybersecurity-level.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Cybersecurity+Level&body=**Parameter%3A**+Cybersecurity+Level%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fcybersecurity-level.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Cybersecurity+Level&body=**Parameter%3A**+Cybersecurity+Level%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fcybersecurity-level.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
