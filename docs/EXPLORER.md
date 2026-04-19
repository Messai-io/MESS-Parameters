# Parameter Explorer

Interactive site at `site/` — React 18 + Vite 5 + TypeScript + Tailwind + Recharts. Hosted at <https://messai-io.github.io/MESS-Parameters/>.

## Run it

```bash
npm run site:dev       # Vite dev (http://localhost:5173/MESS-Parameters/)
npm run site:build     # tsc -b && vite build → site/dist/
npm run site:preview   # serve site/dist/
```

Base path is `/MESS-Parameters/` (set in `site/vite.config.ts`) so GitHub Pages and dev match. Bare `http://localhost:5173/` 302-redirects to the base path.

## Routes

Hash-based, wired in `site/src/App.tsx`:

| Hash | Component | Source |
|---|---|---|
| `#/` | Dashboard — highlight cards, pipeline stats, category breakdown | `components/dashboard/` |
| `#/parameters` | Catalog — search, category sidebar, detail pane | `components/parameters/` |
| `#/parameter/:slug` | Rich per-parameter detail (definition, ranges, provenance) | `components/parameters/ParameterDetailPage.tsx` |
| `#/correlations` | Pearson correlations + parameter-pair table | `components/correlations/` |
| `#/reproducibility` | Completeness score, reporting-rate chart, checklist | `components/reproducibility/` |

## Data sources

Vite path aliases (`site/vite.config.ts`):

- `@params` → repo-level `parameters/`
- `@data` → repo-level `data/`

Files consumed at build time (imported as JSON modules in `site/src/data/loader.ts`):

| File | Shape (TS type) | Feeds |
|---|---|---|
| `parameters/index.json` | `ParameterIndex` | Catalog tree, category counts |
| `data/correlation-cache.json` | `CorrelationCache` | Correlations view, dashboard highlights |
| `data/extraction-stats.json` | `ExtractionStats` | Dashboard pipeline stats |
| `data/reproducibility-summary.json` | `ReproducibilitySummary` | Reproducibility view |
| `data/parameter-definitions-rich.json` | `RichParameter[]` | Parameter detail pages |
| `data/parameter-provenance.json` (fetched async) | see `src/data/provenance.ts` | Provenance badges, source attribution, pair correlations |

The top four are bundled via `import`. The provenance sidecar is fetched at runtime (lazy).

## Flexible JSON consumption (important)

The pipeline JSONs (`extraction-stats`, `reproducibility-summary`, `correlation-cache`) are producer-internal and **not** under the consumer contract. Keys are renamed/added/removed upstream without ceremony. Two patterns keep the app from blanking out:

1. **Types are permissive** — `site/src/data/types.ts` marks nested fields on `ExtractionStats`, `CorrelationCache`, `ReproducibilitySummary`, and `CriteriaCategory` as optional and adds `[key: string]: unknown` index signatures. New keys type-check without edits; missing keys surface as `undefined` rather than silent type lies.
2. **Formatters tolerate undefined** — `site/src/data/loader.ts` exports:
   - `fmtNum(v)` → `v.toLocaleString()` or `'—'`
   - `fmtPct(v, digits?)` → `'12.3%'` or `'—'`
   - `fmtFixed(v, digits?)` → fixed-digit string or `'—'`

### Adding a new stat card

Always: destructure nested objects with `?? {}`, render numbers through `fmtNum`.

```tsx
const stats = getExtractionStats();
const extraction = stats.extraction ?? {};

<StatCard label="Subcategories" value={fmtNum(extraction.subcategories)} />
```

Do **not** write `stats.extraction.subcategories.toLocaleString()` — a missing key will crash the whole tree. If a stat comes up as `—` after a pipeline change, the JSON key was renamed or dropped; check `data/extraction-stats.json` and update the field name.

## Ground-truth vs. firm types

Strict types stay on repo-owned ontology shapes (`Parameter`, `Category`, `Correlation`, `RichParameter`). These are schema-validated and shouldn't drift silently. Keep new consumers of `parameter-definitions-rich.json` strict; only relax types for pipeline dump files.

## Debugging a blank page

Empty `<div id="root">` = runtime JS error during mount. Fastest triage:

1. Open DevTools Console (`Cmd+Opt+J`).
2. If no console access, temporarily add an inline error logger to `site/index.html` that writes `window.onerror` payloads to a fixed `<pre>`.
3. Common cause: component reads `stats.X.Y` where the JSON no longer has `Y`. Fix is per "Adding a new stat card" above.
