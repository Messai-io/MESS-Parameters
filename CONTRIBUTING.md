# Contributing to MESS-Parameters

## How parameters are authored

Parameters are authored in the **MESSAI production PostgreSQL database** (Supabase, `ParameterDefinition` table), not in this repository. This repository is a generated mirror of that source of truth — regenerated, validated, and tagged for downstream consumers to pin.

```
MESSAI Supabase · ParameterDefinition table       ← edit here
        │ npm run sync  (scripts/sync-from-database.js, requires DATABASE_URL)
        ▼
data/parameter-definitions-rich.json              ← canonical published payload
        │
        ├─► parameters/index.json                 (ontology tree, generated)
        ├─► parameters/**/*.md                    (1,088 files, generated)
        └─► data/*.csv                            (derived exports)
```

### Do not hand-edit generated files

The sync command overwrites them. The only files intentionally hand-written and preserved across re-syncs:

- **Markdown pages larger than 2 KB** — `scripts/generate-parameter-pages.js` (line 20, `SKIP_THRESHOLD = 2000`) leaves substantive hand-written prose untouched.
- **Manual enrichments in `parameters/index.json`** — `scripts/sync-from-database.js` (lines 301–320) carries `references`, `dependencies`, and `compatibility` forward across re-syncs. These are hand-curated cross-references that don't live in the DB.

If you want to change a parameter's description, range, typical values, measurement methods, references, etc., edit the DB row and then run `npm run sync`. If you want to add a new parameter, insert it into the DB first.

## Running a sync

```bash
export DATABASE_URL="postgresql://..."
npm run sync
npm run validate
```

`npm run sync` regenerates `data/parameter-definitions-rich.json`, `parameters/index.json`, every `.md` page under `parameters/`, and the derived CSV exports. `npm run validate` runs two passes:

1. Hand-written structural checks on `parameters/index.json` (required fields, duplicate ids, range sanity, category/subcategory consistency).
2. AJV validation of `data/parameter-definitions-rich.json` against `schemas/rich-parameters.schema.json`, which `$ref`s `richParameter` in `schemas/parameter.schema.json`.

CI runs `npm run validate` on every PR and every push to `main` (see `.github/workflows/ci.yml`).

## Release flow

Downstream consumers (messai-ai and others) pin this repository as a git submodule at a release tag, not at a SHA, so breaking schema changes show up as a semver bump.

After a content sync:

1. Bump `package.json:version`:
   - **patch**: metadata edits, typo fixes, description tweaks.
   - **minor**: new parameters, new non-required fields, new allowed enum values.
   - **major**: schema-breaking changes (removed fields, renamed keys, narrowed types).
2. Commit the `data/`, `parameters/`, `schemas/`, and `package.json` changes to `main`.
3. `.github/workflows/release.yml` reads the new version, creates `v<version>` tag, and publishes a GitHub release with the rich.json commit history and the current ontology metadata block.

The release workflow is gated on paths (`data/parameter-definitions-rich.json`, `parameters/index.json`, `schemas/**`, `package.json`) — doc-only changes don't trigger it.

## Reporting issues

- Parameter corrections or data problems: [open an issue](https://github.com/Messai-io/MESS-Parameters/issues) using the "Parameter feedback" template (or the per-page links at the bottom of each generated `.md`).
- Schema or pipeline bugs: open an issue describing what `npm run validate` or `npm run sync` did wrong.

## Code of conduct

- Scientific accuracy over speed.
- Cite sources (DOI) when proposing parameter data changes.
- Respond to review feedback within a reasonable window.
