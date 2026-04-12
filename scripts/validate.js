#!/usr/bin/env node

/**
 * Validate parameters/index.json structure and data integrity.
 *
 * Checks:
 * - index.json is valid JSON
 * - All parameters have required fields (id, name, type, description, unit)
 * - No duplicate parameter IDs
 * - Numeric parameters with ranges have min < max
 * - Default values fall within defined ranges
 * - Category/subcategory references are consistent
 *
 * Run: npm run validate
 */

const fs = require('fs');
const path = require('path');

const INDEX_PATH = path.resolve(__dirname, '..', 'parameters', 'index.json');
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

console.log(`\nResult: ${errors} errors, ${warnings} warnings`);
process.exit(errors > 0 ? 1 : 0);
