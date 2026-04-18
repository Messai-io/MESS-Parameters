# Plc Scan Time

PLC scan time defines the cycle duration of the programmable logic controller executing the MES monitoring and control program, measured in milliseconds. Each scan cycle includes reading all input signals, executing the control logic program, updating output signals, and performing communication tasks. The scan time determines the minimum achievable control response time, data acquisition interval, and the temporal resolution of logic-based control actions (interlocks, sequencing, alarming).

For MES applications, PLC scan times of 10-100 ms are typical, providing adequate response for process control (pH dosing, temperature regulation, pump control) while supporting communication with SCADA/HMI systems and data logging. Safety-critical functions (gas detection interlocks, over-voltage protection) may require dedicated safety PLCs with deterministic scan times below 10 ms.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Monitoring Control |
| **Subcategory** | System Architecture |
| **Type** | number |
| **Unit** | ms |
| **Minimum** | 10 |
| **Maximum** | 1000 |
| **Papers Reporting** | 58 |

## Typical Values

- **Compact PLCs (Siemens S7-1200, Allen-Bradley Micro800)**: 5-50 ms
- **Modular PLCs (Siemens S7-1500, Allen-Bradley ControlLogix)**: 1-20 ms
- **Safety PLCs (certified SIL 2/3)**: 2-10 ms, deterministic
- **Microcontroller-based (Arduino, ESP32)**: 1-100 ms (non-deterministic)
- **Raspberry Pi with real-time kernel**: 5-50 ms
- **Maximum acceptable for MES control**: 100-500 ms
- **Communication overhead**: 5-50% of scan time

## Measurement Methods

- **PLC Diagnostic Monitoring**: Built-in PLC diagnostics report current, minimum, maximum, and average scan times. These values are monitored via engineering software (TIA Portal, Studio 5000) or accessed through SCADA. Scan time exceeding the configured watchdog timer (typically 2-5x normal scan time) triggers a PLC fault.
- **External Timing Verification**: Toggling a digital output at the beginning of each scan cycle and measuring the toggle frequency with an oscilloscope provides independent scan time verification. This method detects inconsistencies between reported and actual scan times.

## Affecting Factors

### Primary

- **Program complexity**: More instructions increase execution time. Complex floating-point calculations, PID loops, and string operations take longer than simple binary logic. Each additional PID loop adds approximately 0.1-1 ms to scan time.
- **I/O count and scan method**: More I/O points increase the time for input read and output write phases. Distributed I/O (over fieldbus) adds communication latency. Synchronous I/O updating within the scan cycle is deterministic; asynchronous updating may introduce jitter.
- **Communication load**: OPC UA, Modbus, and PROFINET communication tasks compete with the control program for CPU time. Heavy communication can increase scan time by 20-100%. Dedicating communication to separate CPU tasks or modules mitigates this.
- **PLC hardware capability**: CPU clock speed (50 MHz to 1.5 GHz), memory size (256 KB to 32 MB), and instruction execution speed vary across PLC platforms. Higher-end PLCs execute the same program in less time.
- **Operating system determinism**: Real-time operating systems (VxWorks, QNX, RTOS) provide deterministic scan times. General-purpose OS (Linux, Windows) introduce variable latency from interrupt handling, garbage collection, and background processes.

## Compatible Systems

Automation Scada

## References

- Bolton, W. (2015). *Programmable Logic Controllers* (6th ed.). Newnes.
- Zurawski, R. (2004). *Industrial Communication Technology Handbook*. CRC Press.
- Boyer, S. A. (2010). *SCADA* (4th ed.). ISA.
- IEC 61131-3 (2013). Programmable controllers - Programming languages.
- Siemens (2020). *SIMATIC S7-1500 System Manual*. Siemens AG.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Plc+Scan+Time&body=**Parameter%3A**+Plc+Scan+Time%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fplc-scan-time.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Plc+Scan+Time&body=**Parameter%3A**+Plc+Scan+Time%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fplc-scan-time.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Plc+Scan+Time&body=**Parameter%3A**+Plc+Scan+Time%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Fplc-scan-time.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
