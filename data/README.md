# MESS-Parameters Data Files

Machine-readable datasets for Microbial Electrochemical Systems (MES) research. All CSV files are generated from the JSON source files in this directory and `parameters/index.json`.

**Version:** 0.2.0 | **Last updated:** 2026-03-15 | **License:** CC BY 4.0

## Quick Start

```python
import pandas as pd

params = pd.read_csv('parameters-full.csv', encoding='utf-8-sig')
print(f"{len(params)} parameters across {params['category'].nunique()} categories")
params[params['type'] == 'number'][['name', 'unit', 'range_min', 'range_max']].head(20)
```

```r
params <- read.csv("parameters-full.csv", fileEncoding = "UTF-8-BOM")
summary(params[params$type == "number", c("range_min", "range_max")])
```

```javascript
import parameters from '@messai-io/mess-parameters';
const allParams = parameters.categories.flatMap(c =>
  c.subcategories.flatMap(s => s.parameters)
);
```

---

## File Descriptions

### Raw Research Data (from MESSAI Database)

#### extracted-parameter-data.csv (3.9 MB, 25,566 rows)

Numeric parameter values extracted from MES publications by the MESSAI pipeline, filtered to confidence > 0 only. This is the raw extraction output — noisier than paper-parameter-values.csv because parameter names are free-text from the extraction pipeline, not mapped to the ontology. See [SCIENTIFIC_INTEGRITY.md](SCIENTIFIC_INTEGRITY.md) section 5.0 for quality details.

| Column | Type | Description | Example |
|--------|------|-------------|---------|
| `id` | string | Unique extraction ID | `20b843a5-...` |
| `paper_doi` | string | Paper DOI (if available) | `10.1016/j.biortech.2020.123456` |
| `paper_year` | integer | Publication year | `2021` |
| `system_type` | string | MES system type | `MFC` |
| `parameter_name` | string | Extracted parameter name | `Power Density` |
| `parameter_category` | string | Parameter category | `ELECTROCHEMICAL` |
| `value` | string | Raw extracted value (as text) | `1.2 W/m2` |
| `numeric_value` | float | Parsed numeric value (if applicable) | `1.2` |
| `unit` | string | Unit of measurement | `W/m2` |
| `uncertainty` | string | Reported uncertainty (if any) | `+/- 0.1` |
| `measurement_method` | string | How the value was measured | `LSV` |
| `confidence` | float | Extraction confidence score (0-1) | `0.85` |
| `validation_status` | string | AUTO_VALIDATED, PENDING, VERIFIED, REJECTED | `AUTO_VALIDATED` |
| `source_context` | string | Text context from the paper | `Table: Performance metrics...` |

#### paper-parameter-values.csv (2.7 MB, 13,321 rows)

The cleanest dataset: validated parameter-paper mappings linking specific parameters from the 687-definition ontology to papers that report them. Each row has a numeric value and maps to a defined parameter. Recommended as the primary dataset for meta-analysis.

| Column | Type | Description | Example |
|--------|------|-------------|---------|
| `id` | string | Unique mapping ID | `cbddd923-...` |
| `paper_doi` | string | Paper DOI | `10.1021/es0605016` |
| `paper_title` | string | Paper title | `Microbial Fuel Cells: Methodology and Technology` |
| `paper_year` | integer | Publication year | `2006` |
| `system_type` | string | MES system type | `MFC` |
| `parameter_name` | string | Parameter definition name | `Power Density` |
| `parameter_category` | string | Parameter category | `ELECTROCHEMICAL` |
| `parameter_subcategory` | string | Parameter subcategory | `Output Performance` |
| `extracted_value` | string | Extracted value as text | `1200` |
| `numeric_value` | float | Parsed numeric value | `1200` |
| `parameter_unit` | string | Unit from parameter definition | `mW/m2` |
| `confidence` | float | Extraction confidence (0-1) | `1.0` |
| `extraction_method` | string | NLP, HYBRID, REGEX, TABLE, MANUAL | `NLP` |
| `source_section` | string | Paper section where found | `Results` |
| `is_verified` | boolean | Whether manually verified | `false` |

#### paper-metadata.csv (4.4 MB, 23,332 rows)

Metadata for every paper in the MESSAI corpus. Note: the ingestion pipeline uses a permissive filter, so some papers may be tangentially related to MES. Only ~1.4% of papers have `power_output` values and ~61% are missing `year`.

| Column | Type | Description | Example |
|--------|------|-------------|---------|
| `id` | string | Internal paper ID | `3c47dac5-...` |
| `doi` | string | DOI | `10.1021/es0605016` |
| `title` | string | Full title | `Microbial Fuel Cells...` |
| `year` | integer | Publication year | `2006` |
| `journal` | string | Journal name | `Environmental Science & Technology` |
| `system_type` | string | MES system type | `MFC` |
| `power_output` | float | Reported power output (mW/m^2) | `1200` |
| `efficiency` | float | Reported efficiency (%) | `45.2` |
| `anode_materials` | string | Anode material description | `Carbon cloth` |
| `cathode_materials` | string | Cathode material description | `Pt-coated carbon paper` |
| `reproducibility_score` | float | Weighted completeness (0-100%) | `42.5` |
| `parameter_completeness` | float | Parameter reporting completeness | `0.35` |
| `quality_score` | float | Overall quality score | `0.8` |
| `ai_confidence` | float | AI processing confidence | `0.75` |
| `has_abstract` | boolean | Abstract available | `true` |
| `has_economic_data` | boolean | Economic metrics extracted | `false` |
| `citation_count` | integer | Citation count (if available) | `1543` |
| `parameter_count` | integer | Number of extracted parameters | `5` |

#### parameter-definitions-full.csv (82 KB, 687 rows)

All 687 parameter definitions from the MESSAI database, including the 20 parameters not in `index.json`, with usage counts showing how many papers reference each parameter.

| Column | Type | Description | Example |
|--------|------|-------------|---------|
| `id` | string | Internal parameter ID | `cme1qna7n...` |
| `category` | string | Parameter category | `ELECTROCHEMICAL` |
| `subcategory` | string | Subcategory | `Output Performance` |
| `name` | string | Parameter name | `Power Density` |
| `unit` | string | Unit | `mW/m2` |
| `data_type` | string | NUMBER, STRING, BOOLEAN | `NUMBER` |
| `description` | string | Parameter description | `Power output per unit area` |
| `min_value` | float | Minimum valid value | `0` |
| `max_value` | float | Maximum valid value | `10000` |
| `is_required` | boolean | Required for completeness scoring | `false` |
| `is_active` | boolean | Active in current ontology | `true` |
| `priority` | float | Parameter importance priority | `0` |
| `version` | integer | Definition version | `1` |
| `usage_count` | integer | Papers referencing this parameter | `284` |

---

### Ontology Exports (from index.json)

#### parameters-full.csv

All 667 parameter definitions from the MESSAI ontology, flattened into a single table.

| Column | Type | Description | Example |
|--------|------|-------------|---------|
| `id` | string | Unique parameter identifier | `biofilm_conductivity` |
| `name` | string | Human-readable name | `Biofilm Conductivity` |
| `description` | string | Parameter description | `Electrical conductivity` |
| `unit` | string | SI unit or `-` for dimensionless | `S/m` |
| `type` | string | Data type: `number`, `select`, `object`, `boolean`, `array` | `number` |
| `category` | string | Parent category ID | `biological` |
| `subcategory` | string | Parent subcategory ID | `biofilm-parameters` |
| `default` | mixed | Default or typical value (empty if undefined) | `0.01` |
| `range_min` | number | Minimum valid value (empty if no range defined) | `0.001` |
| `range_max` | number | Maximum valid value (empty if no range defined) | `1` |
| `range_typical` | number | Typical value within range (empty if no range) | `0.01` |
| `tags` | string | Pipe-separated category tags | `biological\|biofilm-parameters` |

**Notes:**
- 401 of 667 parameters (60%) have range definitions (min/max/typical)
- 558 of 667 parameters (84%) have default values
- The `tags` field uses pipe (`|`) as a delimiter, not commas
- Empty cells indicate the field is not defined for that parameter
- This file contains 667 of 687 parameters in the MESSAI database; 20 additional parameters are available only through the platform

#### category-hierarchy.csv

The complete category/subcategory taxonomy with parameter counts per subcategory.

| Column | Type | Description | Example |
|--------|------|-------------|---------|
| `category_id` | string | Category identifier | `biological` |
| `category_name` | string | Category display name | `Biological Parameters` |
| `subcategory_id` | string | Subcategory identifier | `biofilm-parameters` |
| `subcategory_name` | string | Subcategory display name | `Biofilm Parameters` |
| `parameter_count` | integer | Number of parameters in this subcategory | `9` |

**Coverage:** 11 categories, 85 subcategories, 667 parameters total.

#### correlations.csv

Pearson correlations between experimental parameters and performance metrics, computed from 862 papers with sufficient data. Bonferroni correction applied for 14 simultaneous comparisons.

| Column | Type | Description | Example |
|--------|------|-------------|---------|
| `parameter` | string | Input parameter (may use namespace prefix) | `ec:coulombicEfficiency` |
| `metric` | string | Outcome metric | `Coulombic Efficiency (%)` |
| `pearson_r` | float | Pearson correlation coefficient (-1 to 1) | `0.567` |
| `sample_size` | integer | Number of paper-pairs in the correlation | `36` |
| `p_value` | float | Bonferroni-corrected p-value | `0.0000` |
| `trend` | string | Direction: `positive`, `negative`, or `none` | `positive` |
| `strength` | string | Classification: `strong` (\|r\|>=0.7), `moderate` (>=0.4), `weak` (>=0.2), `negligible` | `moderate` |

**Key findings:** Only 2 of 14 correlations are statistically significant (p < 0.05): Reproducibility Score vs. Coulombic Efficiency (r=0.567) and extracted Coulombic Efficiency vs. reported Coulombic Efficiency (r=0.557).

#### reproducibility-criteria.csv

The 19 named criteria (of 26 total weighted criteria) used to score paper reproducibility, grouped into 5 categories.

| Column | Type | Description | Example |
|--------|------|-------------|---------|
| `category` | string | Criteria category name | `Electrode Specifications` |
| `weight` | string | Category weight: `high` or `medium` | `high` |
| `criterion` | string | Specific reporting criterion | `Electrode spacing documented` |
| `average_reporting_rate` | float | Fraction of 289 papers reporting this category (0-1) | `0.68` |

**Note:** The reporting rate is an average across the category, not per individual criterion. The full 26-criteria rubric with per-criterion rates requires running `scripts/analyze-reproducibility.ts` against the MESSAI database.

#### corpus-summary.csv

Key statistics from the MESSAI extraction pipeline in key-value format.

| Column | Type | Description | Example |
|--------|------|-------------|---------|
| `metric` | string | Metric name (camelCase) | `totalPapers` |
| `value` | mixed | Metric value (numeric or string) | `21895` |
| `section` | string | Grouping: `corpus`, `extraction`, `quality`, `systemTypes`, `methodology` | `corpus` |

**Sections:**
- `corpus` — Paper counts by processing stage (total, with abstracts, with PDFs, with full text)
- `extraction` — Extraction volumes (total extractions, parameter rows, mappings, definitions)
- `quality` — Quality scoring coverage (reproducibility, economic, computational, AI summaries)
- `systemTypes` — Paper counts by MES system type (MFC, MEC, MDC, general)
- `methodology` — Processing pipeline descriptions (PDF engine, mapping approach, scoring method)

---

### JSON Source Files

These are the authoritative source files from which CSV exports are generated.

#### extraction-stats.json

Snapshot of MESSAI pipeline statistics from the production database. Generated 2026-03-15.

#### correlation-cache.json

Complete Pearson correlation analysis across 862 papers. Generated 2026-03-09. Contains both `topCorrelations` (sorted by strength) and `allCorrelations` (all 14 pairs).

#### reproducibility-summary.json

Reproducibility scoring results for 289 papers using a 26-criterion weighted rubric. Includes the five-parameter checklist validation study (63 papers, 40% IQR reduction, p < 0.05).

---

### Research Documentation

#### SCIENTIFIC_INTEGRITY.md

Transparent disclosure of all known statistical limitations, methodological caveats, and data quality concerns. **Read this before using the data for research.**

#### METHODOLOGY.md

Full pipeline description: corpus assembly, PDF processing, parameter extraction, reproducibility scoring, correlation analysis, and statistical methods.

#### PROVENANCE.md

What data is in this repo vs what requires MESSAI database access, versioning, and how to request full data.

#### excluded-parameters.md

Documents the 20-parameter gap between the MESSAI database (687) and index.json (667), including the 2 excluded categories and 34 excluded subcategories.

---

## Regenerating CSV Exports

CSV files are deterministically generated from the JSON sources:

```bash
npx tsx scripts/generate-csv-exports.ts
```

Or via npm:

```bash
npm run export:csv
```

The CSVs should always match the JSON sources exactly. Regenerate after updating any JSON source file.

---

## What This Data Does NOT Include

- **Paper abstracts and full text** — copyrighted publisher content
- **AI-generated summaries** — LLM-derived text from papers
- **Raw unfiltered extractions** — the database contains 323,606 rows; the published CSV includes only 25,566 after quality filtering (confidence > 0, numeric value present)
- **Per-criterion reproducibility rates** — only category-level averages are available without database access

See [PROVENANCE.md](PROVENANCE.md) for data access details.

---

## Citation

If you use this data in your research, please cite:

> MESSAI Community. (2026). MESS-Parameters: Standardized parameter ontology for Microbial Electrochemical Systems research (v0.2.0). https://github.com/Messai-io/MESS-Parameters

Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
