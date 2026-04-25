// Acronyms and special tokens that should retain a specific casing when a
// raw id like "co2-reduction" or "ph_sensor" gets humanized into Title Case.
const SPECIAL_TOKENS: Record<string, string> = {
  mfc: 'MFC',
  mec: 'MEC',
  mes: 'MES',
  mdc: 'MDC',
  pem: 'PEM',
  doi: 'DOI',
  api: 'API',
  ph: 'pH',
  co2: 'CO₂',
  o2: 'O₂',
  n2: 'N₂',
  h2: 'H₂',
  h2o: 'H₂O',
  nox: 'NOx',
  daq: 'DAQ',
  iot: 'IoT',
  ai: 'AI',
  ml: 'ML',
  uv: 'UV',
  ir: 'IR',
  rf: 'RF',
  dna: 'DNA',
  rna: 'RNA',
  cod: 'COD',
  bod: 'BOD',
  toc: 'TOC',
  ec: 'EC',
  ocv: 'OCV',
  iec: 'IEC',
  cem: 'CEM',
  aem: 'AEM',
};

function titleCaseWord(word: string): string {
  if (!word) return word;
  const lower = word.toLowerCase();
  if (SPECIAL_TOKENS[lower]) return SPECIAL_TOKENS[lower];
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

// Turn ids like "humidity-parameters", "humidity_parameters", or
// "ENVIRONMENTAL" into a clean Title Case label for display.
export function humanize(s: string | null | undefined): string {
  if (!s) return '';
  return s
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .map(titleCaseWord)
    .join(' ');
}

// Normalise a category id so it matches the keys in categoryLabels /
// categoryColors. The raw values in our JSON come in three flavours:
//   "ENVIRONMENTAL"        — rich definitions
//   "environmental"        — index.json
//   "monitoring-control"   — already kebab
export function categoryKey(raw: string | null | undefined): string {
  if (!raw) return '';
  return raw.toLowerCase().replace(/_/g, '-');
}

// Convert a parameter display name into a URL slug used by the hash router.
// The same transform is used on read in getRichParameter() so links round-trip.
export function paramNameToSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, '_')
    .replace(/[()/]/g, '')
    .replace(/:/g, '');
}
