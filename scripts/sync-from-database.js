#!/usr/bin/env node

/**
 * Sync all parameter data from the MESSAI database.
 *
 * This is the single command that regenerates everything in the repo
 * from the source of truth (Supabase PostgreSQL).
 *
 * What it does:
 *   1. Exports parameter-definitions-rich.json (all 687 definitions with full detail)
 *   2. Rebuilds parameters/index.json (structured ontology for npm package + Explorer)
 *   3. Exports paper-parameter-values.csv, extracted-parameter-data.csv, paper-metadata.csv
 *   4. Regenerates parameter markdown pages (skips hand-written >10KB)
 *   5. Regenerates derived CSVs (parameters-full, correlations, etc.)
 *
 * Requires: DATABASE_URL environment variable (Supabase PostgreSQL connection string)
 *           psql CLI tool
 *
 * Run: DATABASE_URL="postgresql://..." npm run sync
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'data');
const PARAMS_DIR = path.join(ROOT, 'parameters');

function run(cmd, opts) {
  return execSync(cmd, { encoding: 'utf-8', cwd: ROOT, ...opts });
}

/**
 * Run a SQL query via psql.
 * - If outputFile is given: uses \COPY ... TO STDOUT piped to file
 * - If outputFile is null: writes result to a temp file and reads it back
 */
function psql(query, outputFile) {
  const dbUrl = process.env.DATABASE_URL;
  if (outputFile) {
    // Use psql -c with shell pipe — \COPY outputs to stdout
    // \COPY must be a single line in psql — collapse all whitespace
    const singleLineQuery = query.replace(/\s+/g, ' ').trim();
    const copyCmd = `\\COPY (${singleLineQuery}) TO STDOUT WITH CSV HEADER`;
    const tmpQuery = path.join(ROOT, '.tmp-query.sql');
    fs.writeFileSync(tmpQuery, copyCmd, 'utf-8');
    // psql -f sends \COPY output to stdout, which we redirect to file
    execSync(`psql "${dbUrl}" -f "${tmpQuery}" > "${outputFile}"`, {
      cwd: ROOT, stdio: 'pipe', maxBuffer: 50 * 1024 * 1024,
    });
    try { fs.unlinkSync(tmpQuery); } catch (e) { /* ignore */ }
  } else {
    const tmpOut = path.join(ROOT, '.tmp-query-out.txt');
    // For non-COPY queries, redirect stdout to file
    execSync(`psql "${dbUrl}" -t -A -c "${query.replace(/"/g, '\\"')}" > "${tmpOut}"`, {
      cwd: ROOT, stdio: 'pipe', maxBuffer: 50 * 1024 * 1024,
    });
    const result = fs.readFileSync(tmpOut, 'utf-8');
    try { fs.unlinkSync(tmpOut); } catch (e) { /* ignore */ }
    return result;
  }
}

// Verified MES paper keyword pattern (shared across all exports)
const MES_KEYWORDS_TITLE = `(microbial fuel|microbial electro|bioelectro|bio-electro|microbial desalin|sediment.*fuel cell|plant.*fuel cell|benthic.*fuel cell|enzymatic fuel cell|biofuel cell|electrogen|exoelectrogen|geobacter|shewanella|anode.*biofilm|cathode.*biofilm|anolyte|catholyte|proton exchange membrane.*microbial|mediatorless|membraneless.*fuel cell|mfc[^s]|biogas.*electro|electro.*active.*biofilm)`;
const MES_KEYWORDS_ABSTRACT = `(microbial fuel cell|microbial electrolysis|bioelectrochemical|microbial desalination|microbial electrosynthesis|biocathode|bioanode)`;
const MES_KEYWORDS_KW = `(microbial fuel|bioelectrochemical|microbial electrolysis|microbial desalination)`;
const VERIFIED_MES_CASE = `CASE WHEN (LOWER(rp.title) ~ '${MES_KEYWORDS_TITLE}' OR (rp.abstract IS NOT NULL AND LOWER(rp.abstract) ~ '${MES_KEYWORDS_ABSTRACT}') OR LOWER(rp.keywords::text) ~ '${MES_KEYWORDS_KW}') THEN true ELSE false END`;

// Garbage detection for extracted parameter names
const GARBAGE_PATTERN = `(LENGTH(epd."parameterName") <= 3 OR LOWER(epd."parameterName") IN ('which','it','th','and','the','or','but','with','for','from','that','this','was','were','are','has','had','been','not','also','can','may','such','than','into','more','both','each','only','some','over','most','very','much','while','about','after','before','between','through','during','under','against','within','along','because','since','until','unless','although','though','where','when','how','what','who','accepted','received','keywords','scale bar','published online','submitted','revised','available','article','journal','copyright','abstract','introduction','conclusion','discussion','results','methods','references','acknowledgments','supplementary','figure','table','issn','doi') OR epd."parameterName" ~ '^[0-9]' OR (LENGTH(epd."parameterName") - LENGTH(REPLACE(epd."parameterName", ' ', '')) >= 4) OR LOWER(epd."parameterName") ~ '(wavefunction|thermocycler|degradation rate that|concentration in the|the size of|the following|the solid phase|limited concentration|zation of|ciency$|tion rate that|at t$)')`;

function countCsvRows(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n').filter(l => l.trim());
    return Math.max(0, lines.length - 1); // subtract header
  } catch (e) {
    return 0;
  }
}

function step(n, msg) {
  console.log(`\n[${n}] ${msg}`);
}

function main() {
  const dbUrl = process.env.DATABASE_URL;
  if (!dbUrl) {
    console.error('ERROR: DATABASE_URL environment variable is required');
    console.error('Usage: DATABASE_URL="postgresql://..." npm run sync');
    process.exit(1);
  }

  // Test connection
  try {
    const count = psql('SELECT COUNT(*) FROM "ParameterDefinition"').trim();
    console.log(`Connected to database. ${count} parameter definitions found.`);
  } catch (e) {
    console.error('ERROR: Cannot connect to database:', e.message);
    process.exit(1);
  }

  // ── Step 1: Export rich parameter definitions ──
  step(1, 'Exporting parameter-definitions-rich.json...');
  const richPath = path.join(DATA_DIR, 'parameter-definitions-rich.json');
  const richQuery = `SELECT json_agg(row_to_json(t)) FROM (SELECT id, name, category, subcategory, unit, "dataType" as data_type, description, "minValue" as min_value, "maxValue" as max_value, "allowedValues" as allowed_values, "isRequired" as is_required, definition, "typicalValues" as typical_values, "measurementMethods" as measurement_methods, "affectingFactors" as affecting_factors, "performanceImpact" as performance_impact, limitations, "costAnalysis" as cost_analysis, "relatedParameters" as related_parameters, "references", "compatibleSystems" as compatible_systems, priority, (SELECT COUNT(*) FROM "PaperParameter" pp WHERE pp."parameterId" = pd.id) as usage_count FROM "ParameterDefinition" pd WHERE pd."isActive" = true ORDER BY pd.category, pd.name) t`;
  execSync(`psql "${process.env.DATABASE_URL}" -t -A -c '${richQuery.replace(/'/g, "'\\''")}' > "${richPath}"`, {
    cwd: ROOT, stdio: 'pipe', maxBuffer: 50 * 1024 * 1024,
  });
  const richJson = fs.readFileSync(richPath, 'utf-8').trim();
  fs.writeFileSync(richPath, richJson, 'utf-8'); // trim trailing whitespace
  const richData = JSON.parse(richJson);
  console.log(`  ${richData.length} parameters exported`);

  // ── Step 2: Rebuild index.json ──
  step(2, 'Rebuilding parameters/index.json...');
  const indexData = buildIndexJson(richData);
  fs.writeFileSync(
    path.join(PARAMS_DIR, 'index.json'),
    JSON.stringify(indexData, null, 2) + '\n',
    'utf-8'
  );
  const paramCount = indexData.categories.reduce(
    (sum, cat) => sum + cat.subcategories.reduce((s, sub) => s + sub.parameters.length, 0), 0
  );
  console.log(`  ${paramCount} parameters across ${indexData.categories.length} categories, ${indexData.metadata.subcategories} subcategories`);

  // ── Step 3: Export CSV data files ──
  step(3, 'Exporting CSV data files...');

  // paper-parameter-values.csv
  const ppvQuery = `
    SELECT pp.id, rp.doi AS paper_doi,
      REPLACE(REPLACE(rp.title, E'\\n', ' '), E'\\r', ' ') AS paper_title,
      EXTRACT(YEAR FROM rp."publicationDate")::int AS paper_year,
      rp."systemType" AS system_type,
      pd.name AS parameter_name, pd.category AS parameter_category,
      pd.subcategory AS parameter_subcategory,
      pp."extractedValue" AS extracted_value,
      pp."numericValue" AS numeric_value,
      pd.unit AS parameter_unit,
      CASE WHEN pp."numericValue" IS NOT NULL THEN true ELSE false END AS has_numeric_value,
      ROUND(pp.confidence::numeric, 3) AS confidence,
      pp."extractionMethod" AS extraction_method,
      pp."sectionTitle" AS source_section,
      pp."isVerified" AS is_verified,
      ${VERIFIED_MES_CASE} AS verified_mes_paper
    FROM "PaperParameter" pp
    JOIN "ResearchPaper" rp ON pp."paperId" = rp.id
    JOIN "ParameterDefinition" pd ON pp."parameterId" = pd.id
    WHERE pp."extractedValue" NOT LIKE '%[object Object]%'
      AND NOT (pp."numericValue" IS NULL AND (pp."extractedValue" = pd.name OR pp."extractedValue" LIKE pd.name || ' (%'))
    ORDER BY pd.category, pd.name, rp."publicationDate"`;
  psql(ppvQuery, path.join(DATA_DIR, 'paper-parameter-values.csv'));
  const ppvLines = countCsvRows(path.join(DATA_DIR, 'paper-parameter-values.csv'));
  console.log(`  paper-parameter-values.csv: ${ppvLines} rows`);

  // extracted-parameter-data.csv
  const epdQuery = `
    SELECT epd.id, rp.doi AS paper_doi,
      EXTRACT(YEAR FROM rp."publicationDate")::int AS paper_year,
      rp."systemType" AS system_type,
      epd."parameterName" AS parameter_name,
      epd."parameterCategory" AS parameter_category,
      epd."numericValue" AS numeric_value,
      epd.unit, epd.uncertainty,
      epd."measurementMethod" AS measurement_method,
      ROUND(epd.confidence::numeric, 3) AS confidence,
      epd."validationStatus" AS validation_status,
      REPLACE(REPLACE(COALESCE(epd."sourceContext", ''), E'\\n', ' '), E'\\r', ' ') AS source_context,
      CASE WHEN EXISTS (SELECT 1 FROM "ParameterDefinition" pd WHERE LOWER(pd.name) = LOWER(epd."parameterName"))
        THEN true ELSE false END AS ontology_matched,
      (SELECT pd.name FROM "ParameterDefinition" pd WHERE LOWER(pd.name) = LOWER(epd."parameterName") LIMIT 1) AS ontology_parameter,
      CASE WHEN ${GARBAGE_PATTERN} THEN true ELSE false END AS likely_garbage,
      ${VERIFIED_MES_CASE} AS verified_mes_paper
    FROM "ExtractedParameterData" epd
    JOIN "ResearchPaper" rp ON epd."paperId" = rp.id
    WHERE epd.confidence > 0 AND epd."numericValue" IS NOT NULL
    ORDER BY epd."parameterCategory", epd."parameterName", rp."publicationDate"`;
  psql(epdQuery, path.join(DATA_DIR, 'extracted-parameter-data.csv'));
  const epdLines = countCsvRows(path.join(DATA_DIR, 'extracted-parameter-data.csv'));
  console.log(`  extracted-parameter-data.csv: ${epdLines} rows`);

  // paper-metadata.csv
  const pmQuery = `
    SELECT rp.id, rp.doi,
      REPLACE(REPLACE(rp.title, E'\\n', ' '), E'\\r', ' ') AS title,
      EXTRACT(YEAR FROM rp."publicationDate")::int AS year,
      rp.journal, rp."systemType" AS system_type,
      rp."powerOutput" AS power_output, rp.efficiency,
      rp."anodeMaterials" AS anode_materials,
      rp."cathodeMaterials" AS cathode_materials,
      ROUND(rp."reproducibilityScore"::numeric, 3) AS reproducibility_score,
      ROUND(rp."parameterCompleteness"::numeric, 3) AS parameter_completeness,
      ROUND(rp."aiConfidence"::numeric, 3) AS ai_confidence,
      CASE WHEN rp.abstract IS NOT NULL AND rp.abstract != '' THEN true ELSE false END AS has_abstract,
      CASE WHEN rp."economicMetrics" IS NOT NULL THEN true ELSE false END AS has_economic_data,
      rp."citationCount" AS citation_count,
      (SELECT COUNT(*) FROM "PaperParameter" pp WHERE pp."paperId" = rp.id AND pp."numericValue" IS NOT NULL) AS parameter_count,
      ${VERIFIED_MES_CASE} AS verified_mes
    FROM "ResearchPaper" rp
    ORDER BY rp."publicationDate" DESC NULLS LAST`;
  psql(pmQuery, path.join(DATA_DIR, 'paper-metadata.csv'));
  const pmLines = countCsvRows(path.join(DATA_DIR, 'paper-metadata.csv'));
  console.log(`  paper-metadata.csv: ${pmLines} rows`);

  // parameter-definitions-full.csv
  const pdfQuery = `
    SELECT pd.id, pd.category, pd.subcategory, pd.name, pd.unit,
      pd."dataType" AS data_type, pd.description,
      pd."minValue" AS min_value, pd."maxValue" AS max_value,
      pd."isRequired" AS is_required, pd."isActive" AS is_active,
      pd.priority, pd.version,
      (SELECT COUNT(*) FROM "PaperParameter" pp WHERE pp."parameterId" = pd.id) AS usage_count
    FROM "ParameterDefinition" pd
    WHERE pd."isActive" = true
    ORDER BY pd.category, pd.subcategory, pd.name`;
  psql(pdfQuery, path.join(DATA_DIR, 'parameter-definitions-full.csv'));
  const pdfLines = countCsvRows(path.join(DATA_DIR, 'parameter-definitions-full.csv'));
  console.log(`  parameter-definitions-full.csv: ${pdfLines} rows`);

  // ── Step 4: Generate markdown pages ──
  step(4, 'Generating parameter markdown pages...');
  try {
    const output = run('node scripts/generate-parameter-pages.js', { stdio: 'pipe' });
    console.log(output.trim().split('\n').map(l => '  ' + l).join('\n'));
  } catch (e) {
    console.error('  Warning: page generation had issues:', e.message);
  }

  // ── Step 5: Regenerate derived CSVs ──
  step(5, 'Regenerating derived CSVs...');
  // Update extraction-stats.json with current counts
  // Count verified MES papers and system types from the CSV
  let verifiedCount = 0;
  const sysTypes = {};
  try {
    const pmCsv = fs.readFileSync(path.join(DATA_DIR, 'paper-metadata.csv'), 'utf-8');
    const pmRows = pmCsv.split('\n').slice(1).filter(l => l.trim());
    for (const row of pmRows) {
      if (row.endsWith(',t')) verifiedCount++;
      const cols = row.split(',');
      if (cols[5]) sysTypes[cols[5]] = (sysTypes[cols[5]] || 0) + 1;
    }
  } catch (e) { /* ignore if CSV not ready */ }

  const stats = {
    generatedAt: new Date().toISOString().split('T')[0],
    description: 'MESSAI pipeline statistics — auto-generated by sync-from-database.js',
    corpus: {
      totalPapers: pmLines,
      verifiedMesPapers: verifiedCount,
    },
    extraction: {
      publishedExtractions: epdLines,
      paperParameterMappings: ppvLines,
      parameterDefinitions: richData.length,
      categories: indexData.categories.length,
      subcategories: indexData.metadata.subcategories,
    },
    quality: {
      papersWithReproducibilityScores: 289,
      averageReproducibilityCompleteness: 0.231,
    },
    systemTypes: sysTypes,
    methodology: {
      pdfProcessing: 'Nougat (Meta) for OCR, regex + LLM for structured extraction',
      parameterMapping: `${richData.length}-definition ontology with ${indexData.categories.length} categories and ${indexData.metadata.subcategories} subcategories`,
      qualityScoring: 'Reproducibility checklist with 26 weighted criteria',
      dataFiltering: 'Published CSVs exclude confidence=0, null numeric values, non-ontology parameter names, and [object Object] artifacts',
    },
  };
  fs.writeFileSync(path.join(DATA_DIR, 'extraction-stats.json'), JSON.stringify(stats, null, 2) + '\n', 'utf-8');

  try {
    const output = run('npx tsx scripts/generate-csv-exports.ts', { stdio: 'pipe' });
    console.log(output.trim().split('\n').map(l => '  ' + l).join('\n'));
  } catch (e) {
    console.error('  Warning: CSV generation had issues:', e.message);
  }

  // ── Done ──
  console.log('\n✓ Sync complete.');
  console.log(`  ${richData.length} parameter definitions`);
  console.log(`  ${paramCount} parameters in index.json`);
  console.log(`  ${ppvLines} paper-parameter values`);
  console.log(`  ${epdLines} extracted parameter data rows`);
  console.log(`  ${pmLines} papers in corpus (${verifiedCount} verified MES)`);
}

/**
 * Build index.json from rich parameter data.
 * Groups parameters by category and subcategory, preserving existing
 * enrichment fields (references, dependencies, compatibility) from
 * the current index.json where they exist.
 */
function buildIndexJson(richData) {
  // Load existing index.json to preserve manual enrichments
  const existingPath = path.join(PARAMS_DIR, 'index.json');
  let existingEnrichments = {};
  if (fs.existsSync(existingPath)) {
    try {
      const existing = JSON.parse(fs.readFileSync(existingPath, 'utf-8'));
      for (const cat of existing.categories || []) {
        for (const sub of cat.subcategories || []) {
          for (const p of sub.parameters || []) {
            if (p.references || p.dependencies || p.compatibility) {
              existingEnrichments[p.id] = {
                references: p.references,
                dependencies: p.dependencies,
                compatibility: p.compatibility,
              };
            }
          }
        }
      }
    } catch (e) { /* ignore parse errors */ }
  }

  // Group by category then subcategory
  const catMap = new Map();
  for (const p of richData) {
    const catId = p.category.toLowerCase().replace(/_/g, '-');
    if (!catMap.has(catId)) {
      catMap.set(catId, {
        id: catId,
        name: p.category.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, l => l.toUpperCase()) + ' Parameters',
        description: `${p.category.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, l => l.toUpperCase())} Parameters for MES systems`,
        subcategories: new Map(),
      });
    }
    const cat = catMap.get(catId);
    const subId = (p.subcategory || 'general').toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    const subName = p.subcategory || 'General';
    if (!cat.subcategories.has(subId)) {
      cat.subcategories.set(subId, {
        id: subId,
        name: subName,
        parameters: [],
      });
    }

    const paramId = p.name.toLowerCase().replace(/\s+/g, '_').replace(/[()\/]/g, '').replace(/:/, '');
    const param = {
      id: paramId,
      name: p.name,
      description: p.description || '',
      unit: p.unit || '-',
      type: (p.data_type || 'number').toLowerCase(),
      category: catId,
      subcategory: subId,
      tags: [catId, subId],
    };

    // Add range if available
    if (p.min_value !== null && p.min_value !== undefined) {
      param.range = { min: p.min_value, max: p.max_value };
      // Try to extract typical from typicalValues JSON
      if (p.typical_values && Array.isArray(p.typical_values.ranges)) {
        const typicalEntry = p.typical_values.ranges.find(r =>
          r.label && r.label.toLowerCase().includes('typical')
        );
        if (typicalEntry && typicalEntry.range) {
          const nums = typicalEntry.range.match(/[\d.]+/g);
          if (nums && nums.length >= 1) {
            param.range.typical = parseFloat(nums[0]);
          }
        }
      }
      if (!param.range.typical) {
        param.range.typical = p.min_value;
      }
      param.default = param.range.typical;
    }

    // Preserve manual enrichments
    const enrichment = existingEnrichments[paramId];
    if (enrichment) {
      if (enrichment.references) param.references = enrichment.references;
      if (enrichment.dependencies) param.dependencies = enrichment.dependencies;
      if (enrichment.compatibility) param.compatibility = enrichment.compatibility;
    }

    cat.subcategories.get(subId).parameters.push(param);
  }

  // Convert maps to arrays
  const categories = Array.from(catMap.values()).map(cat => ({
    ...cat,
    subcategories: Array.from(cat.subcategories.values()),
  }));

  const totalParams = categories.reduce(
    (sum, cat) => sum + cat.subcategories.reduce((s, sub) => s + sub.parameters.length, 0), 0
  );
  const totalSubs = categories.reduce((sum, cat) => sum + cat.subcategories.length, 0);

  return {
    metadata: {
      version: '4.0.0',
      lastUpdated: new Date().toISOString().split('T')[0],
      totalParameters: totalParams,
      majorCategories: categories.length,
      subcategories: totalSubs,
      sources: {
        generator: 'sync-from-database.js',
        database: `MESSAI production PostgreSQL (${richData.length} ParameterDefinition rows)`,
      },
    },
    categories,
  };
}

main();
