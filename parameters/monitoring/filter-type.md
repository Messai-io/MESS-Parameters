# Filter Type

Filter type specifies the signal processing algorithm applied to raw MES sensor data to reduce noise, remove artifacts, and extract meaningful process information. Digital filters are essential for MES monitoring because sensor signals are typically contaminated by electrical noise (50/60 Hz power line interference, pump motor EMI), measurement noise (ADC quantization, sensor electronics), and process noise (bubble-induced fluctuations, turbulence). The filter type determines the trade-off between noise reduction and signal fidelity, particularly the preservation of rapid process transients.

Common filter types for MES data include: moving average (simple, effective for Gaussian noise), exponential moving average (EMA, weighted toward recent data), Butterworth low-pass (flat passband, gradual rolloff), Chebyshev (sharp rolloff, passband ripple), median filter (robust to spike outliers), Savitzky-Golay (polynomial smoothing preserving peak shape), and Kalman filter (optimal for known system dynamics). The choice depends on noise characteristics, required transient response, and computational constraints.

For real-time MES control applications, filter latency (group delay) is critical: a moving average of N points introduces N/2 sample delays, which adds to the total control loop delay. Causal filters (using only past and present data) introduce phase shifts at signal frequencies near the cutoff. Non-causal filters (using future data, applicable only to stored data) provide zero-phase filtering for post-processing analysis without latency penalty.

## Basic Information

| Property | Value |
|---|---|
| **Category** | Monitoring Control |
| **Subcategory** | Data Processing |
| **Type** | select |

## Typical Values

- **Moving average window**: 3-30 samples
- **EMA smoothing factor (alpha)**: 0.01-0.5
- **Low-pass cutoff frequency**: 0.01-10 Hz (MES dependent)
- **Filter order**: 1-4 (Butterworth), 2-6 (Chebyshev)
- **Median filter window**: 3-11 samples
- **Savitzky-Golay**: order 2-4, window 5-25 points
- **Noise reduction**: 6-30 dB depending on filter type and settings
- **Group delay**: 1-15 samples (moving average), 0.5-5 samples (IIR)

## Measurement Methods

- **Filter Design and Specification**: Filter parameters are designed based on the signal and noise frequency characteristics. The signal bandwidth is determined from the process dynamics (e.g., MES current varies at 0.001-0.1 Hz; noise occurs at 50 Hz and above). The filter cutoff frequency is placed between the signal and noise bands, with sufficient rejection at noise frequencies (typically more than 20 dB at 50 Hz). MATLAB fdatool, Python scipy.signal, or specialized filter design software compute optimal filter coefficients.
- **Performance Validation**: Filter performance is validated by comparing filtered output against known reference signals. Step response testing verifies that the filter preserves the timing and magnitude of genuine process transients. Frequency response measurement (applying swept-frequency test signals) confirms the actual filter characteristics match the design specifications.
- **Adaptive Filter Tuning**: For MES processes with time-varying noise characteristics (e.g., pump cycling creates intermittent EMI), adaptive filters (LMS, RLS algorithms) automatically adjust filter parameters to maintain optimal noise rejection. Adaptive filters are particularly valuable for long-term MES operation where noise sources and process dynamics evolve over weeks to months.

## Affecting Factors

### Primary

- **Noise characteristics**: Gaussian noise is best addressed by moving average or low-pass filters. Impulsive noise (spikes from electrical transients) requires median filtering. Periodic noise (50/60 Hz) is best removed by notch filters. Mixed noise requires cascaded filter stages.
- **Signal bandwidth**: Faster MES processes (electrochemical transients at 0.1-10 Hz) require higher filter cutoff frequencies, limiting achievable noise reduction. Slow processes (biological at 0.001 Hz) allow aggressive low-pass filtering with excellent noise rejection.
- **Real-time requirements**: Control applications require causal filters with minimal latency. Post-processing analysis can use non-causal (zero-phase) filters with superior performance.
- **Computational resources**: Moving average and IIR filters require minimal computation. FIR filters with hundreds of taps, Kalman filters with large state vectors, and adaptive filters require more processing power.
- **Data characteristics**: Unevenly sampled data (from missing measurements or variable scan rates) requires interpolation before standard digital filtering, or specialized algorithms for irregular time series.

## Compatible Systems

Data Acquisition

## References

- Oppenheim, A. V., & Schafer, R. W. (2010). *Discrete-Time Signal Processing* (3rd ed.). Pearson.
- Smith, S. W. (1997). *The Scientist and Engineer's Guide to Digital Signal Processing*. California Technical Publishing.
- Haykin, S. (2014). *Adaptive Filter Theory* (5th ed.). Pearson.
- Savitzky, A., & Golay, M. J. E. (1964). Smoothing and differentiation of data by simplified least squares procedures. *Analytical Chemistry*, 36(8), 1627-1639.
- Montgomery, D. C. (2013). *Introduction to Statistical Quality Control* (7th ed.). Wiley.

---

## Suggest Changes

This page is part of the [MESS-Parameters](https://github.com/Messai-io/MESS-Parameters) open dataset.
Help improve it:

- [Suggest a correction](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Correction%3A+Filter+Type&body=**Parameter%3A**+Filter+Type%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Ffilter-type.md%0A%0A**What+needs+correction%3A**%0A%0A**Suggested+change%3A**%0A%0A**Source%2Freference%3A**%0A&labels=parameter-feedback)
- [Add data or references](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Data%3A+Filter+Type&body=**Parameter%3A**+Filter+Type%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Ffilter-type.md%0A%0A**New+data+to+add+%28values%2C+ranges%2C+references%29%3A**%0A%0A**Source+publication+%28DOI+if+available%29%3A**%0A&labels=parameter-feedback)
- [Report a problem](https://github.com/Messai-io/MESS-Parameters/issues/new?title=Problem%3A+Filter+Type&body=**Parameter%3A**+Filter+Type%0A**Category%3A**+Monitoring+Control%0A**File%3A**+parameters%2Fmonitoring%2Ffilter-type.md%0A%0A**Describe+the+problem%3A**%0A&labels=parameter-feedback)
