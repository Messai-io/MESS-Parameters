import '@testing-library/jest-dom/vitest';

// Recharts uses ResizeObserver via its ResponsiveContainer. jsdom doesn't
// ship it, so tests that render charts need a no-op polyfill.
class ResizeObserverPolyfill {
  observe() {}
  unobserve() {}
  disconnect() {}
}
(globalThis as unknown as { ResizeObserver: unknown }).ResizeObserver =
  ResizeObserverPolyfill;

