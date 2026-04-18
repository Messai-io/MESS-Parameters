# Data Backup Frequency

Data backup frequency defines how often monitoring data from microbial electrochemical systems (MES) is copied to redundant storage locations for protection against data loss. MES experiments generate continuous streams of electrochemical, water quality, and environmental data representing weeks to months of irreplaceable experimental effort. The backup frequency determines the maximum data loss window.

In MES research, loss of even a few hours of continuous monitoring data can invalidate long-term experiments tracking biofilm development or community adaptation. Pilot and industrial MES installations must maintain records for regulatory compliance with data retention requirements of 3-5 years. The backup strategy should follow the 3-2-1 approach: 3 copies of data, on 2 different media types, with 1 copy offsite.

Automated backup scripts running at scheduled intervals (real-time replication for critical data, hourly for active experiments, daily for archival data) minimize data loss risk while reducing operator burden. Cloud-based backup provides offsite storage with geographic redundancy, though bandwidth and cost considerations may limit frequency for high-volume data streams.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Materials |
| **Type** | number |
| **Unit** | hours |

## Typical Values

- **Valid Range**: Continuous (real-time replication) to monthly
- **Typical Range**: Hourly to daily
- **Real-time replication**: Database mirroring, RAID arrays; zero data loss
- **Hourly incremental**: Active experiments
- **Daily full backup**: Standard operations
- **Weekly full backup**: Archival data
- **Recovery point objective (RPO)**: 1 hour (research), 15 minutes (critical)
- **Recovery time objective (RTO)**: 4 hours (typical), 1 hour (critical)

## Measurement Methods

- **Backup Verification Testing**: Regular restore testing (monthly or quarterly) verifies backup completeness and recoverability. Test restores to isolated environments validate the entire backup chain. Restore time measurement verifies that recovery time objectives can be met.
- **Backup Monitoring Systems**: Automated tools track backup job completion, data volume, transfer speed, and error rates. Failed backup alerts trigger immediate investigation. Backup logs provide audit trail documentation.
- **Data Integrity Checksums**: Cryptographic checksums (SHA-256) computed on original data and verified after transfer detect corruption during backup. End-to-end verification ensures no data quality degradation in the backup chain.

## Affecting Factors

### Primary

- **Data generation rate**: High-frequency monitoring (1-second intervals, 100+ channels) generates 50-500 MB/day. Low-frequency monitoring generates 1-10 MB/day, easily backed up over slow connections.
- **Data criticality**: Long-term experiments where data loss would require complete restart justify real-time replication. Routine monitoring data tolerates daily backups.
- **Storage infrastructure**: Local NAS provides 100-1000 MB/s transfer. Cloud storage is limited by internet bandwidth. Tape provides lowest-cost archival.
- **Regulatory requirements**: Wastewater operations may require daily or continuous archiving. Environmental monitoring may require tamper-proof records.
- **System availability**: Backup operations must not degrade real-time control performance. Incremental backups minimize I/O impact. Scheduling during low-activity periods reduces interference.

## Compatible Systems

Data Logging

## References

- Boyer, S. A. (2010). *SCADA: Supervisory Control and Data Acquisition* (4th ed.). ISA.
- NIST (2018). *Framework for Improving Critical Infrastructure Cybersecurity*. Version 1.1.
- Nelson, S. (2011). *Pro Data Backup and Recovery*. Apress.
- Preston, W. C. (2007). *Backup & Recovery*. O'Reilly Media.
- IEC 62443 (2018). Industrial communication networks - Network and system security.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Data+Backup+Frequency&body=**Parameter%3A**+Data+Backup+Frequency%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fdata-backup-frequency.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Data+Backup+Frequency&body=**Parameter%3A**+Data+Backup+Frequency%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fdata-backup-frequency.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Data+Backup+Frequency&body=**Parameter%3A**+Data+Backup+Frequency%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fdata-backup-frequency.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
