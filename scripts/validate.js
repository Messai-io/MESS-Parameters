#!/usr/bin/env node

/**
 * Validate parameters/index.json and data/parameter-definitions-rich.json.
 *
 * Two passes:
 *   1. index.json — hand-written structural checks (required fields, dup ids,
 *      range sanity, category/subcategory consistency).
 *   2. parameter-definitions-rich.json — AJV-validated against
 *      schemas/rich-parameters.schema.json (which references richParameter in
 *      schemas/parameter.schema.json). This is the contract messai-ai and other
 *      consumers import directly.
 *
 * Run: npm run validate
 */

const fs = require('fs');
const path = require('path');
const Ajv = require('ajv');

const ROOT = path.resolve(__dirname, '..');
const INDEX_PATH = path.join(ROOT, 'parameters', 'index.json');
const RICH_PATH = path.join(ROOT, 'data', 'parameter-definitions-rich.json');
const PROV_PATH = path.join(ROOT, 'data', 'parameter-provenance.json');
const PARAM_SCHEMA_PATH = path.join(ROOT, 'schemas', 'parameter.schema.json');
const RICH_SCHEMA_PATH = path.join(ROOT, 'schemas', 'rich-parameters.schema.json');
const PROV_SCHEMA_PATH = path.join(ROOT, 'schemas', 'provenance.schema.json');
const MIN_RICH_ENTRIES = 687;
const REQUIRED_FIELDS = ['id', 'name', 'type', 'description', 'unit', 'category', 'subcategory'];

let errors = 0;
let warnings = 0;

function error(msg) {
  console.error(`  ERROR: ${msg}`);
  errors++;
}

function warn(msg) {
  console.warn(`  WARN:  ${msg}`);
  warnings++;
}

// Load and parse
let data;
try {
  const raw = fs.readFileSync(INDEX_PATH, 'utf-8');
  data = JSON.parse(raw);
  console.log('index.json: valid JSON');
} catch (e) {
  console.error(`FATAL: Cannot parse index.json: ${e.message}`);
  process.exit(1);
}

// Check metadata
if (!data.metadata) error('Missing metadata object');
if (!data.categories || !Array.isArray(data.categories)) {
  error('Missing or invalid categories array');
  process.exit(1);
}

console.log(`Metadata: v${data.metadata.version}, ${data.metadata.totalParameters} parameters declared`);
console.log(`Categories: ${data.categories.length}`);

// Validate all parameters
const allIds = new Set();
let paramCount = 0;

for (const cat of data.categories) {
  if (!cat.id || !cat.name) {
    error(`Category missing id or name: ${JSON.stringify(cat).slice(0, 80)}`);
    continue;
  }

  for (const sub of cat.subcategories || []) {
    if (!sub.id || !sub.name) {
      error(`Subcategory missing id or name in ${cat.id}`);
      continue;
    }

    for (const param of sub.parameters || []) {
      paramCount++;

      // Required fields
      for (const field of REQUIRED_FIELDS) {
        if (!param[field] && param[field] !== 0 && param[field] !== false) {
          error(`${param.id || '(no id)'}: missing required field '${field}'`);
        }
      }

      // Duplicate IDs
      if (param.id) {
        if (allIds.has(param.id)) {
          error(`Duplicate parameter ID: ${param.id}`);
        }
        allIds.add(param.id);
      }

      // Category consistency
      if (param.category && param.category !== cat.id) {
        warn(`${param.id}: category '${param.category}' != parent '${cat.id}'`);
      }
      if (param.subcategory && param.subcategory !== sub.id) {
        warn(`${param.id}: subcategory '${param.subcategory}' != parent '${sub.id}'`);
      }

      // Range validation
      if (param.range && param.type === 'number') {
        if (param.range.min !== undefined && param.range.max !== undefined) {
          if (param.range.min > param.range.max) {
            error(`${param.id}: range.min (${param.range.min}) > range.max (${param.range.max})`);
          }
        }

        // Default within range
        if (param.default !== undefined && param.range.min !== undefined && param.range.max !== undefined) {
          const def = Number(param.default);
          if (!isNaN(def) && (def < param.range.min || def > param.range.max)) {
            warn(`${param.id}: default (${def}) outside range [${param.range.min}, ${param.range.max}]`);
          }
        }

        // Typical within range
        if (param.range.typical !== undefined && param.range.min !== undefined) {
          if (param.range.typical < param.range.min || param.range.typical > param.range.max) {
            warn(`${param.id}: typical (${param.range.typical}) outside range [${param.range.min}, ${param.range.max}]`);
          }
        }
      }
    }
  }
}

console.log(`\nValidated ${paramCount} parameters (${allIds.size} unique IDs)`);

if (paramCount !== data.metadata.totalParameters) {
  warn(`Actual count (${paramCount}) != metadata.totalParameters (${data.metadata.totalParameters})`);
}

// ── Pass 2: AJV-validate data/parameter-definitions-rich.json ──
console.log('\nrich.json: AJV pass');

try {
  const rich = JSON.parse(fs.readFileSync(RICH_PATH, 'utf-8'));
  const paramSchema = JSON.parse(fs.readFileSync(PARAM_SCHEMA_PATH, 'utf-8'));
  const richSchema = JSON.parse(fs.readFileSync(RICH_SCHEMA_PATH, 'utf-8'));

  const ajv = new Ajv({ strict: false, allErrors: true });
  ajv.addSchema(paramSchema, 'parameter.schema.json');
  const validate = ajv.compile(richSchema);

  if (!validate(rich)) {
    const shown = validate.errors.slice(0, 20);
    for (const e of shown) {
      const i = (e.instancePath.match(/^\/(\d+)/) || [])[1];
      const id = i !== undefined && rich[Number(i)] ? rich[Number(i)].id : '(root)';
      error(`rich.json ${id} ${e.instancePath} ${e.message}`);
    }
    if (validate.errors.length > shown.length) {
      error(`... and ${validate.errors.length - shown.length} more AJV errors`);
    }
  } else {
    console.log(`  rich.json: ${rich.length} entries, schema-valid`);
  }

  if (rich.length < MIN_RICH_ENTRIES) {
    error(`rich.json has ${rich.length} entries, expected >= ${MIN_RICH_ENTRIES}`);
  }
} catch (e) {
  error(`Cannot AJV-validate rich.json: ${e.message}`);
}

// ── Pass 3: AJV-validate data/parameter-provenance.json (optional sidecar) ──
if (fs.existsSync(PROV_PATH)) {
  console.log('\nprovenance.json: AJV pass');
  try {
    const prov = JSON.parse(fs.readFileSync(PROV_PATH, 'utf-8'));
    const provSchema = JSON.parse(fs.readFileSync(PROV_SCHEMA_PATH, 'utf-8'));

    const ajv2 = new Ajv({ strict: false, allErrors: true });
    const validateProv = ajv2.compile(provSchema);

    if (!validateProv(prov)) {
      const shown = validateProv.errors.slice(0, 20);
      for (const e of shown) {
        error(`provenance.json ${e.instancePath} ${e.message}`);
      }
      if (validateProv.errors.length > shown.length) {
        error(`... and ${validateProv.errors.length - shown.length} more AJV errors`);
      }
    } else {
      console.log(`  provenance.json: ${prov.parameters.length} entries, schema-valid`);
    }

    // Referential integrity: every id in provenance must exist in rich.json
    const rich = JSON.parse(fs.readFileSync(RICH_PATH, 'utf-8'));
    const richIds = new Set(rich.map(r => r.id));
    let unmatched = 0;
    for (const p of prov.parameters) {
      if (!richIds.has(p.id)) {
        error(`provenance.json: id '${p.id}' (${p.name}) does not exist in rich.json`);
        unmatched++;
        if (unmatched > 20) { error('... stopping after 20 unmatched ids'); break; }
      }
    }
    // Cross-ref: every correlation.other_param_id must also exist in rich.json
    let badCorr = 0;
    for (const p of prov.parameters) {
      for (const c of p.correlations) {
        if (!richIds.has(c.other_param_id)) {
          error(`provenance.json ${p.id}: correlation points to unknown id '${c.other_param_id}'`);
          badCorr++;
          if (badCorr > 10) { error('... stopping after 10 bad correlation refs'); break; }
        }
      }
      if (badCorr > 10) break;
    }
    if (unmatched === 0 && badCorr === 0) {
      console.log('  referential integrity: all ids resolve against rich.json');
    }
  } catch (e) {
    error(`Cannot AJV-validate provenance.json: ${e.message}`);
  }
} else {
  console.log('\nprovenance.json: not present (sidecar optional, skipping)');
}

console.log(`\nResult: ${errors} errors, ${warnings} warnings`);
process.exit(errors > 0 ? 1 : 0);
