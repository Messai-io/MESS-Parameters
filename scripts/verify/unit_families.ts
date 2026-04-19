/**
 * Shared unit / sanity-range module used by build-provenance.ts and the
 * Tier 1 verification scripts.
 *
 * Keep the canonical vocabulary here so the two pipelines can never drift:
 * if build-provenance.ts clamps `power density` at 1e6 mW/m² but unit_audit
 * considers `power density` in µW/cm² known, audits give false assurance.
 *
 * Consumed by:
 *   scripts/verify/unit_audit.ts
 *   scripts/verify/noise_floor.ts
 *   scripts/verify/literature_crosscheck.ts
 *
 * Eventually build-provenance.ts should import from here too (removal of
 * duplication deferred until the pipeline refactor).
 */

export interface UnitNorm {
  canonical: string;
  convert: Record<string, number>;
}

const SURFACE_POWER: UnitNorm = {
  canonical: 'mW/m²',
  convert: {
    'mw/m²': 1, 'mw/m2': 1, 'mw m-2': 1, 'mw/m^2': 1,
    'w/m²':  1000, 'w/m2':  1000, 'w m-2':  1000,
    'mw/cm²': 10000, 'mw/cm2': 10000,
    'w/cm²':  1e7, 'w/cm2':  1e7,
    'µw/m²':  0.001, 'uw/m²':  0.001, 'uw/m2': 0.001,
  },
};

const SURFACE_CURRENT: UnitNorm = {
  canonical: 'mA/m²',
  convert: {
    'ma/m²': 1, 'ma/m2': 1, 'ma m-2': 1,
    'a/m²': 1000, 'a/m2': 1000, 'a m-2': 1000,
    'ma/cm²': 10000, 'ma/cm2': 10000,
    'a/cm²': 1e7, 'a/cm2': 1e7,
    'µa/m²': 0.001, 'ua/m²': 0.001, 'ua/m2': 0.001,
  },
};

const CONCENTRATION_WATER: UnitNorm = {
  canonical: 'mg/L',
  convert: {
    'mg/l': 1, 'mg l-1': 1,
    'g/l': 1000, 'g l-1': 1000,
    'µg/l': 0.001, 'ug/l': 0.001,
    'ppm': 1,
    'ppb': 0.001,
  },
};

const VOLUME: UnitNorm = {
  canonical: 'mL',
  convert: {
    'ml': 1, 'cm³': 1, 'cm3': 1, 'cc': 1,
    'l': 1000,
    'µl': 0.001, 'ul': 0.001,
    'm³': 1e6, 'm3': 1e6,
  },
};

const RESISTANCE: UnitNorm = {
  canonical: 'Ω',
  convert: {
    'ω': 1, 'ohm': 1, 'ohms': 1,
    'kω': 1000, 'kohm': 1000, 'kohms': 1000,
    'mω': 1e6, 'mohm': 1e6,
  },
};

const VOLTAGE: UnitNorm = {
  canonical: 'V',
  convert: { 'v': 1, 'volt': 1, 'volts': 1, 'mv': 0.001 },
};

const TIME_HOURS: UnitNorm = {
  canonical: 'h',
  convert: {
    'h': 1, 'hr': 1, 'hrs': 1, 'hour': 1, 'hours': 1,
    'min': 1/60, 'mins': 1/60, 'minutes': 1/60,
    's': 1/3600, 'sec': 1/3600, 'seconds': 1/3600,
    'd': 24, 'day': 24, 'days': 24,
  },
};

export const UNIT_NORMALIZATIONS: Record<string, UnitNorm> = {
  'power density':         SURFACE_POWER,
  'max power density':     SURFACE_POWER,
  'maxpowerdensity':       SURFACE_POWER,
  'current density':       SURFACE_CURRENT,
  'cod concentration':     CONCENTRATION_WATER,
  'bod concentration':     CONCENTRATION_WATER,
  'volume':                VOLUME,
  'reactor volume':        VOLUME,
  'batch volume':          VOLUME,
  'internal resistance':   RESISTANCE,
  'external resistance':   RESISTANCE,
  'voltage':               VOLTAGE,
  'open circuit voltage':  VOLTAGE,
  'overpotential':         { canonical: 'mV', convert: { 'mv': 1, 'v': 1000 } },
  'hydraulic retention time': TIME_HOURS,
  'hydraulicretentiontime':   TIME_HOURS,
};

export interface SanityRange { min: number; max: number; unit_hint?: string }

export const SANITY_RANGES: Record<string, SanityRange> = {
  'ph':                        { min: 0,    max: 14,      unit_hint: '-' },
  'temperature':               { min: -20,  max: 200,     unit_hint: '°C' },
  'ambient temperature':       { min: -20,  max: 200,     unit_hint: '°C' },
  'coulombic efficiency':      { min: 0,    max: 110,     unit_hint: '%' },
  'coulombicefficiency':       { min: 0,    max: 110,     unit_hint: '%' },
  'faradaic efficiency':       { min: 0,    max: 110,     unit_hint: '%' },
  'cod removal':               { min: 0,    max: 110,     unit_hint: '%' },
  'cod removal efficiency':    { min: 0,    max: 110,     unit_hint: '%' },
  'bod removal':               { min: 0,    max: 110,     unit_hint: '%' },
  'voltage':                   { min: -5,   max: 10,      unit_hint: 'V' },
  'open circuit voltage':      { min: 0,    max: 5,       unit_hint: 'V' },
  'internal resistance':       { min: 0,    max: 1e7 },
  'external resistance':       { min: 0,    max: 1e7 },
  'maxpowerdensity':           { min: 0,    max: 1e6 },
  'max power density':         { min: 0,    max: 1e6 },
  'power density':             { min: 0,    max: 1e6 },
  'current density':           { min: 0,    max: 1e6 },
  'peak current':              { min: -1e4, max: 1e4 },
  'short circuit current':     { min: 0,    max: 1e4 },
  'overpotential':             { min: -2000, max: 2000 },
  'hydraulic retention time':  { min: 0,    max: 2000,    unit_hint: 'h' },
  'hydraulicretentiontime':    { min: 0,    max: 2000,    unit_hint: 'h' },
  'flow rate':                 { min: 0,    max: 1e5 },
  'reactor volume':            { min: 0,    max: 1e6 },
  'volume':                    { min: 0,    max: 1e6 },
  'batch volume':              { min: 0,    max: 1e6 },
  'electrode surface area':    { min: 0,    max: 1e4 },
  'electrode diameter':        { min: 0,    max: 100 },
  'electrode spacing':         { min: 0,    max: 100 },
  'cod concentration':         { min: 0,    max: 5e5 },
  'bod concentration':         { min: 0,    max: 5e5 },
  'ionic strength':            { min: 0,    max: 10 },
  'conductivity':              { min: 0,    max: 1e6 },
  'scan rate':                 { min: 0,    max: 1e5 },
};

export function normalizeUnit(
  paramName: string,
  value: number,
  unit: string,
): { value: number; unit: string; converted: boolean; knownFamily: boolean; knownUnit: boolean } {
  const norm = UNIT_NORMALIZATIONS[paramName.trim().toLowerCase()];
  if (!norm) return { value, unit, converted: false, knownFamily: false, knownUnit: false };
  const u = (unit || '').trim().toLowerCase();
  const factor = norm.convert[u];
  if (factor == null) return { value, unit, converted: false, knownFamily: true, knownUnit: false };
  if (factor === 1) return { value, unit: norm.canonical, converted: true, knownFamily: true, knownUnit: true };
  return { value: value * factor, unit: norm.canonical, converted: true, knownFamily: true, knownUnit: true };
}

export function passesSanity(paramName: string, value: number): { ok: boolean; reason?: string } {
  if (!Number.isFinite(value)) return { ok: false, reason: 'non-finite' };
  const name = paramName.trim().toLowerCase();
  const range = SANITY_RANGES[name];
  if (!range) return { ok: true };
  if (value < range.min) return { ok: false, reason: `below min ${range.min}` };
  if (value > range.max) return { ok: false, reason: `above max ${range.max}` };
  return { ok: true };
}
