#!/usr/bin/env bash
# Dump ResearchPaper rows that have a title but no DOI / PMID / arXiv / URL.
# Used by backfill_identifiers.py.
set -euo pipefail
REPO_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$REPO_ROOT"

if [ -z "${DATABASE_URL:-}" ] && [ -f .env ]; then
  set -a; source .env; set +a
fi
: "${DATABASE_URL:?DATABASE_URL is required}"

OUT=papers/staging/papers-without-id.csv
mkdir -p "$(dirname "$OUT")"

# Columns: id, title, year, first_author.
# first_author pulled from authors jsonb if present (first element's name),
# else left blank.
SQL=$(cat <<'SQL'
SELECT
  rp.id,
  COALESCE(REPLACE(REPLACE(rp.title, E'\n', ' '), E'\r', ' '), '') AS title,
  EXTRACT(YEAR FROM rp."publicationDate")::int AS year,
  COALESCE((regexp_match(rp.authors, '"([^"]+)"'))[1], '') AS first_author
FROM "ResearchPaper" rp
WHERE rp.doi IS NULL
  AND rp."pubmedId" IS NULL
  AND rp."arxivId" IS NULL
  AND (rp."externalUrl" IS NULL OR rp."externalUrl" NOT LIKE 'http%')
  AND rp.title IS NOT NULL
  AND LENGTH(rp.title) > 10
ORDER BY rp."citationCount" DESC NULLS LAST, rp."publicationDate" DESC NULLS LAST
SQL
)

psql "$DATABASE_URL" -c "\\COPY ($SQL) TO STDOUT WITH CSV HEADER" > "$OUT"
wc -l "$OUT" | awk '{print "Wrote " $1-1 " papers to " $2}'
