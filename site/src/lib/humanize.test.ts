import { describe, it, expect } from 'vitest';
import { humanize, humanizePhysicsFeature, categoryKey, paramNameToSlug } from './humanize';

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

describe('humanizePhysicsFeature', () => {
  it('renders unit suffixes with Unicode super/subscripts', () => {
    expect(humanizePhysicsFeature('density_g_per_cm3')).toBe('Density (g/cm³)');
    expect(humanizePhysicsFeature('bulk_modulus_GPa')).toBe('Bulk Modulus (GPa)');
    expect(humanizePhysicsFeature('shear_modulus_GPa')).toBe('Shear Modulus (GPa)');
    expect(humanizePhysicsFeature('work_function_eV')).toBe('Work Function (eV)');
    expect(humanizePhysicsFeature('band_gap_eV')).toBe('Band Gap (eV)');
    expect(humanizePhysicsFeature('weighted_surface_energy_J_per_m2')).toBe(
      'Weighted Surface Energy (J/m²)',
    );
    expect(humanizePhysicsFeature('energy_above_hull_eV_per_atom')).toBe(
      'Energy Above Hull (eV/atom)',
    );
  });

  it('prefers longest matching suffix', () => {
    // Must match `_eV_per_atom`, not the shorter `_eV` followed by orphan stem.
    expect(humanizePhysicsFeature('formation_energy_eV_per_atom')).toBe(
      'Formation Energy (eV/atom)',
    );
  });

  it('falls back to plain humanize for unknown suffixes', () => {
    expect(humanizePhysicsFeature('porosity_ratio')).toBe('Porosity Ratio');
  });

  it('handles empty inputs', () => {
    expect(humanizePhysicsFeature('')).toBe('');
    expect(humanizePhysicsFeature(null)).toBe('');
    expect(humanizePhysicsFeature(undefined)).toBe('');
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
