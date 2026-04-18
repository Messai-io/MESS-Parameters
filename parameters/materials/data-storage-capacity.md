# Data Storage Capacity

Data storage capacity specifies the total digital storage available for MES monitoring data, expressed in MB, GB, or TB. This parameter determines retention duration at a given monitoring resolution. A typical research MES monitoring 20 channels at 1-second intervals generates approximately 1.3 GB/year. A pilot-scale installation with 200 channels at 10-second intervals generates approximately 12.5 GB/year. Industrial MES with high-speed monitoring can generate 2.5 TB/year.

Storage architecture typically employs tiered storage: high-speed local storage (SSD) for real-time buffering, network storage (NAS/SAN) for active datasets, and archival storage (HDD, cloud) for historical data. Data compression (3-10x for time-series data) extends effective capacity. Downsampling older data reduces long-term requirements while preserving trend information.

Modern time-series databases (InfluxDB, TimescaleDB) are optimized for MES-type temporal data, providing efficient storage with fast query performance for trend analysis and reporting.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Materials |
| **Type** | number |
| **Unit** | MB |
| **Papers Reporting** | 1 |

## Typical Values

- **Valid Range**: 1 MB - 100+ TB
- **Typical Range**: 1 GB - 10 TB
- **USB logger memory**: 1-64 MB
- **SD card (portable)**: 2-512 GB
- **Local SSD**: 256 GB - 4 TB
- **NAS**: 4-100 TB
- **Cloud**: Unlimited (cost-dependent)
- **Daily data (research MES)**: 1-50 MB
- **Annual data (industrial MES)**: 10 GB - 10 TB

## Measurement Methods

- **Storage Usage Monitoring**: OS disk usage tools and SNMP-based monitoring track available capacity. Automated alerts trigger at 80% (warning) and 90% (critical) utilization. Trend analysis predicts when capacity will be exhausted.
- **Data Volume Estimation**: Volume = Channels x Sampling_rate x Bytes_per_sample x Retention_seconds. Adding 20-50% overhead for metadata, timestamps, and indexes provides realistic total requirements.
- **Compression Ratio Assessment**: Testing on representative MES data determines achievable compression. Gradually changing time-series data compresses 5-10x. Noisy data compresses 2-3x. Delta encoding plus entropy coding provides the best balance.

## Affecting Factors

### Primary

- **Monitoring resolution**: Storage scales linearly with channel count and sampling frequency.
- **Data format**: Binary is most compact (2-8 bytes/point). CSV adds 3-5x overhead. Database storage adds index overhead but enables efficient querying.
- **Retention requirements**: Research data: 5-10 years minimum. Regulatory: 3-7 years.
- **Compression policies**: Lossless compression reduces storage 3-10x. Downsampling provides 10-100x reduction but loses high-frequency detail.
- **Redundancy**: RAID and backups multiply raw storage requirement by 1.5-3x.

## Compatible Systems

Data Logging

## References

- Boyer, S. A. (2010). *SCADA: Supervisory Control and Data Acquisition* (4th ed.). ISA.
- Dunning, T., & Friedman, E. (2014). *Time Series Databases*. O'Reilly Media.
- National Instruments (2020). *Data Acquisition Handbook*. NI Corp.
- Omega Engineering (2019). *Data Acquisition Technical Reference*. Omega.
- Olias, L. G., & Di Lorenzo, M. (2021). Microbial fuel cells for in-field water quality monitoring. *RSC Advances*, 11, 16307-16317.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Data+Storage+Capacity&body=**Parameter%3A**+Data+Storage+Capacity%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fdata-storage-capacity.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Data+Storage+Capacity&body=**Parameter%3A**+Data+Storage+Capacity%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fdata-storage-capacity.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Data+Storage+Capacity&body=**Parameter%3A**+Data+Storage+Capacity%0A**Category%3A**+Materials%0A**File%3A**+parameters%2Fmaterials%2Fdata-storage-capacity.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
