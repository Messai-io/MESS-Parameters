#!/usr/bin/env node

/**
 * Generate rich markdown parameter detail pages from DB-exported JSON.
 *
 * Reads: data/parameter-definitions-rich.json (exported from MESSAI DB)
 * Writes: parameters/{category}/{param-name}.md for each parameter
 *
 * Skips files >2KB (preserves hand-written substantive content).
 *
 * Run: node scripts/generate-parameter-pages.js
 */

const fs = require('fs');
const path = require('path');

const REPO = 'Messai-io/MESS-Parameters';
const RICH_DATA_PATH = path.resolve(__dirname, '..', 'data', 'parameter-definitions-rich.json');
const PARAMS_DIR = path.resolve(__dirname, '..', 'parameters');
const SKIP_THRESHOLD = 2000; // bytes — skip files larger than this

// Map DB categories to folder names
const CATEGORY_FOLDERS = {
  ENVIRONMENTAL: 'environmental',
  BIOLOGICAL: 'biological',
  ELECTROCHEMICAL: 'electrical',
  MATERIALS: 'materials',
  OPERATIONAL: 'operational',
  PERFORMANCE: 'performance',
  REACTOR_DESIGN: 'reactor-design',
  CHEMICAL: 'chemical',
  PHYSICAL: 'physical',
  MONITORING_CONTROL: 'monitoring',
  ECONOMIC: 'economic',
  SAFETY_REGULATORY: 'safety-regulatory',
  APPLICATION_SPECIFIC: 'application-specific',
  EMERGING_TECHNOLOGY: 'emerging-technology',
  INTEGRATION_SCALING: 'integration-scaling',
};

function categoryFolder(cat) {
  return CATEGORY_FOLDERS[cat] || cat.toLowerCase().replace(/_/g, '-');
}

function categoryDisplay(cat) {
  return cat.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, l => l.toUpperCase());
}

function paramFileName(name) {
  return name.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function issueUrl(title, body, label) {
  const params = new URLSearchParams({
    title,
    body,
    labels: label || 'parameter-feedback',
  });
  return `https://github.com/${REPO}/issues/new?${params.toString()}`;
}

function formatJsonField(val, depth) {
  depth = depth || 0;
  if (!val) return null;
  if (typeof val === 'string') return val;
  if (Array.isArray(val)) {
    return val.map(item => {
      if (typeof item === 'string') return `- ${item}`;
      if (item.name && item.description) return `- **${item.name}**: ${item.description.replace(/\n/g, ' ')}`;
      if (item.label && item.range) return `- **${item.label}**: ${item.range}`;
      if (item.factor && item.effect) return `- **${item.factor}**: ${item.effect.replace(/\n/g, ' ')}`;
      if (item.factor && item.impact) return `- **${item.factor}**: ${item.impact.replace(/\n/g, ' ')}`;
      // Recurse for unknown structures
      if (typeof item === 'object' && depth < 2) return formatJsonField(item, depth + 1);
      return `- ${JSON.stringify(item)}`;
    }).join('\n');
  }
  if (typeof val === 'object') {
    if (val.ranges) return formatJsonField(val.ranges, depth + 1);
    if (val.methods) return formatJsonField(val.methods, depth + 1);
    if (val.factors) return formatJsonField(val.factors, depth + 1);
    // Handle objects with primary/secondary/other groupings
    const parts = [];
    for (const [k, v] of Object.entries(val)) {
      if (Array.isArray(v)) {
        parts.push(`### ${k.charAt(0).toUpperCase() + k.slice(1)}\n\n${formatJsonField(v, depth + 1)}`);
      } else if (typeof v === 'string') {
        parts.push(`- **${k}**: ${v}`);
      } else if (typeof v === 'object' && v !== null && depth < 2) {
        parts.push(`- **${k}**: ${formatJsonField(v, depth + 1)}`);
      } else {
        parts.push(`- **${k}**: ${String(v)}`);
      }
    }
    return parts.join('\n\n');
  }
  return String(val);
}

function generatePage(param) {
  const catDisplay = categoryDisplay(param.category);
  const fileName = paramFileName(param.name);
  const filePath = `parameters/${categoryFolder(param.category)}/${fileName}.md`;

  let md = `# ${param.name}\n\n`;

  // Definition / Description
  if (param.definition) {
    md += `${param.definition.trim()}\n\n`;
  } else if (param.description) {
    md += `${param.description}\n\n`;
  }

  // Basic Information
  md += `## Basic Information\n\n`;
  md += `| Property | Value |\n|---|---|\n`;
  md += `| **Category** | ${catDisplay} |\n`;
  if (param.subcategory) md += `| **Subcategory** | ${param.subcategory} |\n`;
  md += `| **Type** | ${(param.data_type || '').toLowerCase()} |\n`;
  if (param.unit) md += `| **Unit** | ${param.unit} |\n`;
  if (param.min_value !== null && param.min_value !== undefined) md += `| **Minimum** | ${param.min_value} |\n`;
  if (param.max_value !== null && param.max_value !== undefined) md += `| **Maximum** | ${param.max_value} |\n`;
  if (param.is_required) md += `| **Required** | Yes |\n`;
  if (param.usage_count > 0) md += `| **Papers Reporting** | ${param.usage_count} |\n`;
  md += `\n`;

  // Typical Values
  const typicalFormatted = formatJsonField(param.typical_values);
  if (typicalFormatted) {
    md += `## Typical Values\n\n${typicalFormatted}\n\n`;
  }

  // Measurement Methods
  const methodsFormatted = formatJsonField(param.measurement_methods);
  if (methodsFormatted) {
    md += `## Measurement Methods\n\n${methodsFormatted}\n\n`;
  }

  // Affecting Factors
  const factorsFormatted = formatJsonField(param.affecting_factors);
  if (factorsFormatted) {
    md += `## Affecting Factors\n\n${factorsFormatted}\n\n`;
  }

  // Performance Impact
  if (param.performance_impact) {
    md += `## Performance Impact\n\n${param.performance_impact.trim()}\n\n`;
  }

  // Limitations
  if (param.limitations) {
    md += `## Limitations\n\n${param.limitations.trim()}\n\n`;
  }

  // Cost Analysis
  if (param.cost_analysis) {
    md += `## Cost Analysis\n\n${param.cost_analysis.trim()}\n\n`;
  }

  // Related Parameters
  const relatedFormatted = formatJsonField(param.related_parameters);
  if (relatedFormatted) {
    md += `## Related Parameters\n\n${relatedFormatted}\n\n`;
  }

  // Compatible Systems
  if (param.compatible_systems) {
    md += `## Compatible Systems\n\n${param.compatible_systems}\n\n`;
  }

  // References
  if (param.references) {
    md += `## References\n\n${param.references.trim()}\n\n`;
  }

  // Suggest Changes footer
  const correctionUrl = issueUrl(
    `Correction: ${param.name}`,
    `**Parameter:** ${param.name}\n**Category:** ${catDisplay}\n**File:** ${filePath}\n\n**What needs correction:**\n\n**Suggested change:**\n\n**Source/reference:**\n`,
  );
  const addDataUrl = issueUrl(
    `Data: ${param.name}`,
    `**Parameter:** ${param.name}\n**Category:** ${catDisplay}\n**File:** ${filePath}\n\n**New data to add (values, ranges, references):**\n\n**Source publication (DOI if available):**\n`,
  );
  const reportUrl = issueUrl(
    `Problem: ${param.name}`,
    `**Parameter:** ${param.name}\n**Category:** ${catDisplay}\n**File:** ${filePath}\n\n**Describe the problem:**\n`,
  );

  md += `---\n\n`;
  md += `## Suggest Changes\n\n`;
  md += `This page is part of the [MESS-Parameters](https://github.com/${REPO}) open dataset.\n`;
  md += `Help improve it:\n\n`;
  md += `- [Suggest a correction](${correctionUrl})\n`;
  md += `- [Add data or references](${addDataUrl})\n`;
  md += `- [Report a problem](${reportUrl})\n`;

  return { md, filePath, fileName };
}

function main() {
  // Load rich parameter data
  const raw = fs.readFileSync(RICH_DATA_PATH, 'utf-8');
  const params = JSON.parse(raw);

  console.log(`Loaded ${params.length} parameter definitions from DB export\n`);

  let generated = 0;
  let skipped = 0;
  let created = 0;

  for (const param of params) {
    const folder = categoryFolder(param.category);
    const fileName = paramFileName(param.name);
    const dirPath = path.join(PARAMS_DIR, folder);
    const filePath = path.join(dirPath, `${fileName}.md`);

    // Check if substantive file exists
    if (fs.existsSync(filePath)) {
      const size = fs.statSync(filePath).size;
      if (size > SKIP_THRESHOLD) {
        skipped++;
        continue;
      }
    }

    // Ensure directory exists
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    const { md } = generatePage(param);
    fs.writeFileSync(filePath, md, 'utf-8');

    if (fs.existsSync(filePath)) {
      generated++;
    } else {
      created++;
    }
  }

  console.log(`Generated: ${generated} pages`);
  console.log(`Skipped (substantive >2KB): ${skipped} pages`);
  console.log(`Total parameters: ${params.length}`);
}

main();
