import { doiUrl, linkifyCitations } from './doi';

export interface ParsedReference {
  // The original list-item text, with the leading marker stripped.
  raw: string;
  // First DOI found anywhere in the entry, if any.
  doi: string | null;
  // First non-DOI URL found, if any (some entries link to a report PDF).
  url: string | null;
  // Best-effort title pulled from the citation. Only used as a hint for a
  // Google Scholar fallback when there's no DOI.
  title: string | null;
}

// Split a free-form references blob into individual entries. Authors store
// references as either numbered ("1.", "2.") or bulleted ("- ", "* ") lists,
// or as paragraphs separated by blank lines. We try all three.
export function splitReferences(text: string): string[] {
  const trimmed = text.trim();
  if (!trimmed) return [];

  // Match list markers at the start of a line: "1.", "12.", "- ", "* ".
  const listMarker = /^\s*(?:\d{1,3}\.\s+|[-*]\s+)/m;

  if (listMarker.test(trimmed)) {
    // Split on a newline that is immediately followed by a list marker.
    const parts = trimmed
      .split(/\n(?=\s*(?:\d{1,3}\.\s+|[-*]\s+))/)
      .map((p) => p.replace(/^\s*(?:\d{1,3}\.\s+|[-*]\s+)/, '').trim())
      .filter(Boolean);
    if (parts.length > 0) return parts;
  }

  // Fallback: split on blank lines.
  return trimmed.split(/\n\s*\n+/).map((p) => p.trim()).filter(Boolean);
}

const DOI_RE = /\b10\.\d{4,9}\/[-._;()/:A-Z0-9]+?(?=[.,;:!?]*(?:\s|$|[<>"')]))/i;
const URL_RE = /\bhttps?:\/\/[^\s<>"')]+?(?=[.,;:!?]*(?:\s|$|[<>"')]))/i;

// Pull the most paper-title-looking phrase out of a single citation line.
// Heuristic: the longest run between a year-paren and either a journal-italic
// marker ("*Journal*") or another period. Falls back to the first quoted run.
function extractTitle(s: string): string | null {
  const quoted = s.match(/"([^"]{8,200})"/);
  if (quoted) return quoted[1].trim();
  const afterYear = s.match(/\(\d{4}\)\.\s*([^*_."]{8,200})\./);
  if (afterYear) return afterYear[1].trim();
  return null;
}

export function parseReferences(text: string | null | undefined): ParsedReference[] {
  if (!text) return [];
  const items = splitReferences(text);
  return items.map((raw) => {
    const doiMatch = raw.match(DOI_RE);
    const urlMatch = raw.match(URL_RE);
    return {
      raw,
      doi: doiMatch ? doiMatch[0] : null,
      url: urlMatch ? urlMatch[0] : null,
      title: extractTitle(raw),
    };
  });
}

// Resolve a reference to the best available external link:
// 1. DOI URL (preferred)
// 2. Direct URL embedded in the citation
// 3. Google Scholar search keyed off the extracted title
export function referenceHref(ref: ParsedReference): string | null {
  if (ref.doi) return doiUrl(ref.doi);
  if (ref.url) return ref.url;
  if (ref.title) {
    return `https://scholar.google.com/scholar?q=${encodeURIComponent(ref.title)}`;
  }
  return null;
}

// Re-export so callers don't need to pull from two files.
export { linkifyCitations };
