#!/usr/bin/env bash
# Dump paper metadata needed for PDF acquisition from the MESSAI Postgres DB.
#
# Reads DATABASE_URL from the current shell env, or from .env in the repo root.
# Writes papers/staging/papers-to-download.csv — one row per paper that has at
# least a DOI or external URL, with the fields the downloader needs.
#
# Usage: scripts/papers/export_papers_from_db.sh [--limit N]

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$REPO_ROOT"

# Prefer explicit env var; fall back to .env if present.
if [ -z "${DATABASE_URL:-}" ] && [ -f .env ]; then
  # shellcheck disable=SC1091
  set -a; source .env; set +a
fi

if [ -z "${DATABASE_URL:-}" ]; then
  echo "ERROR: DATABASE_URL is not set. Put it in the shell env or repo-root .env" >&2
  exit 1
fi

LIMIT_CLAUSE=""
if [ "${1:-}" = "--limit" ] && [ -n "${2:-}" ]; then
  LIMIT_CLAUSE="LIMIT $2"
fi

OUT=papers/staging/papers-to-download.csv
mkdir -p "$(dirname "$OUT")"

# Columns intentionally limited — no abstracts, no AI summary, no full text.
# Only what the downloader needs to try providers.
SQL=$(cat <<SQL
SELECT
  id,
  doi,
  "externalUrl" AS external_url,
  "pubmedId" AS pubmed_id,
  "arxivId" AS arxiv_id,
  COALESCE(REPLACE(REPLACE(title, E'\n', ' '), E'\r', ' '), '') AS title,
  EXTRACT(YEAR FROM "publicationDate")::int AS year,
  "citationCount" AS citation_count,
  "systemType" AS system_type,
  journal
FROM "ResearchPaper"
WHERE doi IS NOT NULL OR "externalUrl" IS NOT NULL
ORDER BY
  CASE WHEN "citationCount" IS NULL THEN 0 ELSE "citationCount" END DESC,
  "publicationDate" DESC NULLS LAST
$LIMIT_CLAUSE
SQL
)

psql "$DATABASE_URL" -c "\\COPY ($SQL) TO STDOUT WITH CSV HEADER" > "$OUT"
wc -l "$OUT" | awk '{print "Wrote " $1-1 " papers to " $2}'
