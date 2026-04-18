# Filter Window

Filter window specifies the number of data points or time span used in windowed digital filter calculations for MES signal processing, expressed as a sample count or time duration. The window size determines the degree of smoothing applied to sensor data, directly controlling the balance between noise reduction and temporal resolution. Larger windows provide more aggressive noise reduction but blur transient events and introduce greater latency in real-time applications. Smaller windows preserve fast dynamics but allow more noise to pass through.

For a simple moving average filter, the noise reduction is proportional to sqrt(N) where N is the window size. A window of 9 samples reduces random noise by a factor of 3 (approximately 10 dB). However, a step change in the actual process variable is spread over N samples, taking N/2 samples to reach 50% of the step and N samples for full representation. In MES current monitoring at 1-second sampling, a 30-sample window provides 5.5x noise reduction but delays detection of a sudden current drop by 15 seconds.

The optimal filter window size depends on the ratio of process signal bandwidth to noise bandwidth. When noise is predominantly high-frequency (well separated from signal), large windows provide excellent noise reduction with minimal signal distortion. When noise frequencies overlap with signal frequencies (common in MES with biological oscillations), window optimization requires careful analysis of the specific signal and noise spectra.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Monitoring Control |
| **Subcategory** | Data Processing |
| **Type** | number |
| **Unit** | samples |
| **Minimum** | 1 |
| **Maximum** | 100 |
| **Papers Reporting** | 51 |

## Typical Values

- **Valid Range**: 1 - 10,000 samples (or equivalent time span)
- **Typical Range for MES**: 3 - 100 samples
- **Moving average (voltage)**: 5-20 samples
- **Moving average (current)**: 10-50 samples
- **Median filter (spike removal)**: 3-11 samples
- **Savitzky-Golay**: 5-25 samples
- **Low-pass filter equivalent**: 2/(pi*f_cutoff*sample_interval) samples
- **Time-based windows**: 5-300 seconds for process variables

## Measurement Methods

- **Signal-to-Noise Optimization**: The optimal window size maximizes the signal-to-noise ratio (SNR) of the filtered output. SNR is measured by comparing the variance of the filtered signal (process variation + residual noise) to the noise variance (estimated from high-frequency signal components). Plotting SNR versus window size reveals an optimum where increasing the window no longer improves SNR (because signal content is being attenuated along with noise).
- **Step Response Evaluation**: Applying known step changes to the MES process (substrate pulse, resistance change) and measuring the filtered sensor response reveals the effective time resolution at each window size. The step response should reach 90% of the final value within the acceptable latency for the application (1-10 seconds for control, 1-60 minutes for trending).
- **Autocorrelation Analysis**: The autocorrelation function of the raw sensor signal reveals the temporal scale of both process variation and noise. The decorrelation time of noise (where autocorrelation drops below 1/e) indicates the minimum useful window size. The decorrelation time of the process signal indicates the maximum window before signal distortion becomes significant.

## Affecting Factors

### Primary

- **Sampling rate**: At higher sampling rates, more samples span a given time interval, requiring larger window sizes (in samples) for equivalent smoothing. A 30-second smoothing window corresponds to 30 samples at 1 Hz but 3000 samples at 100 Hz.
- **Noise level**: Higher noise levels require larger windows for adequate attenuation. Voltage measurements in electrically quiet environments need 3-5 sample windows; current measurements near inverters or VFDs may need 20-50 sample windows.
- **Process dynamics**: Fast-changing processes (startup transients, pulse feeding) require small windows to preserve temporal detail. Steady-state monitoring tolerates large windows for maximum noise reduction.
- **Filter type**: Different filter types achieve different noise reduction for the same window size. Savitzky-Golay filters preserve peak shapes better than moving averages at equivalent window sizes.
- **Computational constraints**: Larger windows require more memory (for stored samples) and more computation per output sample. Real-time embedded systems with limited memory may constrain maximum window size.

## Compatible Systems

Data Acquisition

## References

- Smith, S. W. (1997). *The Scientist and Engineer's Guide to Digital Signal Processing*. California Technical Publishing.
- Oppenheim, A. V., & Schafer, R. W. (2010). *Discrete-Time Signal Processing* (3rd ed.). Pearson.
- Savitzky, A., & Golay, M. J. E. (1964). Smoothing and differentiation of data. *Analytical Chemistry*, 36(8), 1627-1639.
- Press, W. H., et al. (2007). *Numerical Recipes* (3rd ed.). Cambridge University Press.
- Montgomery, D. C. (2013). *Introduction to Statistical Quality Control* (7th ed.). Wiley.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Filter+Window&body=**Parameter%3A**+Filter+Window%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Ffilter-window.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Filter+Window&body=**Parameter%3A**+Filter+Window%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Ffilter-window.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Filter+Window&body=**Parameter%3A**+Filter+Window%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Ffilter-window.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
