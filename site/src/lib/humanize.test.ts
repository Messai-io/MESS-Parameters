import { describe, it, expect } from 'vitest';
import { humanize, categoryKey, paramNameToSlug } from './humanize';

describe('humanize', () => {
  it('replaces underscores and dashes with spaces and title-cases each word', () => {
    expect(humanize('humidity-parameters')).toBe('Humidity Parameters');
    expect(humanize('humidity_parameters')).toBe('Humidity Parameters');
    expect(humanize('ENVIRONMENTAL')).toBe('Environmental');
  });

  it('preserves common acronyms', () => {
    expect(humanize('mfc-anode')).toBe('MFC Anode');
    expect(humanize('ph_sensor')).toBe('pH Sensor');
    expect(humanize('co2-flux')).toBe('CO₂ Flux');
  });

  it('handles empty inputs', () => {
    expect(humanize('')).toBe('');
    expect(humanize(null)).toBe('');
    expect(humanize(undefined)).toBe('');
  });

  it('collapses repeated separators', () => {
    expect(humanize('foo--bar__baz')).toBe('Foo Bar Baz');
  });
});

describe('categoryKey', () => {
  it('lowercases and converts underscores to dashes', () => {
    expect(categoryKey('ENVIRONMENTAL')).toBe('environmental');
    expect(categoryKey('material_physics')).toBe('material-physics');
    expect(categoryKey('reactor-design')).toBe('reactor-design');
  });

  it('handles empty inputs', () => {
    expect(categoryKey('')).toBe('');
    expect(categoryKey(null)).toBe('');
  });
});

describe('paramNameToSlug', () => {
  it('lowercases and underscore-separates words', () => {
    expect(paramNameToSlug('Absolute Humidity')).toBe('absolute_humidity');
    expect(paramNameToSlug('CO2 Reduction')).toBe('co2_reduction');
  });

  it('strips parens, slashes, and colons', () => {
    expect(paramNameToSlug('Open-Circuit Voltage (OCV)')).toBe('open-circuit_voltage_ocv');
    expect(paramNameToSlug('Anode/Cathode Ratio')).toBe('anodecathode_ratio');
    expect(paramNameToSlug('Note: details')).toBe('note_details');
  });
});
