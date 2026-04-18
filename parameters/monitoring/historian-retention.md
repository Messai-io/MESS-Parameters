# Historian Retention

Historian retention defines the duration for which historical process data from MES monitoring systems is stored and accessible in the data historian or time-series database before automatic archival or deletion. This parameter balances long-term data availability for trend analysis, regulatory compliance, and model development against storage costs and database performance. Retention policies typically define multiple tiers: full-resolution data retained for weeks to months, downsampled data for months to years, and statistical summaries retained indefinitely.

In MES, retention periods must accommodate the biological timescales of biofilm development (weeks to months), seasonal performance variation (12+ months), and long-term degradation studies (years). Regulatory requirements for wastewater treatment operations typically mandate 3-5 years of data retention. Research datasets should be retained for the publication cycle plus archival requirements (typically 10+ years per institutional policy).

## Basic Information

| Property | Value |
|---|---|
| **Category** | Monitoring Control |
| **Subcategory** | System Architecture |
| **Type** | number |
| **Unit** | days |
| **Minimum** | 30 |
| **Maximum** | 3650 |
| **Papers Reporting** | 31 |

## Typical Values

- **Full resolution**: 30-365 days
- **1-minute averages**: 1-5 years
- **Hourly averages**: 5-20 years
- **Daily summaries**: Indefinite
- **Regulatory minimum**: 3-5 years (jurisdiction dependent)
- **Research recommendation**: 10+ years
- **Alarm/event logs**: 3-10 years

## Measurement Methods

- **Database Size Monitoring**: Track historian database size and growth rate to verify retention policies are functioning correctly. Automated purging of expired data maintains performance. Database fragmentation assessment identifies maintenance needs.
- **Data Accessibility Verification**: Periodic verification that historical data can be retrieved from all retention tiers within acceptable query times confirms that archival processes maintain data accessibility.

## Affecting Factors

### Primary

- **Storage cost**: Full-resolution data at 1-second intervals for 100 channels requires approximately 90 MB/year. At $0.02/GB/month for cloud storage, multi-year retention is economically feasible.
- **Regulatory requirements**: Wastewater discharge permits, environmental monitoring regulations, and institutional data management policies mandate minimum retention periods.
- **Database performance**: Very large databases (more than 1 TB) may exhibit degraded query performance. Partitioning by time period, downsampling old data, and indexing strategies maintain acceptable performance.
- **Data value over time**: Recent data is accessed frequently for process control and troubleshooting. Historical data is accessed occasionally for trend analysis and model development. Tiered retention matched to access patterns optimizes cost/accessibility.
- **Backup and disaster recovery**: Retained data must be backed up. Longer retention periods increase backup storage requirements and restore time.

## Compatible Systems

Automation Scada

## References

- Boyer, S. A. (2010). *SCADA: Supervisory Control and Data Acquisition* (4th ed.). ISA.
- Dunning, T., & Friedman, E. (2014). *Time Series Databases*. O'Reilly Media.
- USEPA (2002). *Guidance on Environmental Data Verification and Data Validation*. EPA QA/G-8.
- OSIsoft (2018). *PI System Data Management Best Practices*. OSIsoft LLC.
- InfluxData (2020). *Time Series Database Design Patterns*. InfluxData Inc.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Historian+Retention&body=**Parameter%3A**+Historian+Retention%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fhistorian-retention.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Historian+Retention&body=**Parameter%3A**+Historian+Retention%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fhistorian-retention.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Historian+Retention&body=**Parameter%3A**+Historian+Retention%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fhistorian-retention.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
