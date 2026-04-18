const DOI_RE = /\b(10\.\d{4,9}\/[-._;()/:A-Z0-9]+?)(?=[.,;:!?]*(?:\s|$|[<>"')]))/gi;
const URL_RE = /\bhttps?:\/\/[^\s<>"')]+?(?=[.,;:!?]*(?:\s|$|[<>"')]))/gi;

export function isDoi(s: string): boolean {
  return /^10\.\d{4,9}\/[-._;()/:A-Z0-9]+$/i.test(s);
}

export function doiUrl(doi: string): string {
  return `https://doi.org/${doi.replace(/^https?:\/\/(?:dx\.)?doi\.org\//i, '')}`;
}

type Segment = { text: string; href?: string };

export function linkifyCitations(text: string): Segment[] {
  const matches: { start: number; end: number; href: string }[] = [];
  for (const m of text.matchAll(DOI_RE)) {
    const start = m.index ?? 0;
    matches.push({ start, end: start + m[0].length, href: doiUrl(m[0]) });
  }
  for (const m of text.matchAll(URL_RE)) {
    const start = m.index ?? 0;
    // don't double-wrap URLs that contain DOIs we already matched
    if (matches.some(x => x.start <= start && x.end >= start + m[0].length)) continue;
    matches.push({ start, end: start + m[0].length, href: m[0] });
  }
  matches.sort((a, b) => a.start - b.start);

  const segments: Segment[] = [];
  let cursor = 0;
  for (const m of matches) {
    if (m.start > cursor) segments.push({ text: text.slice(cursor, m.start) });
    segments.push({ text: text.slice(m.start, m.end), href: m.href });
    cursor = m.end;
  }
  if (cursor < text.length) segments.push({ text: text.slice(cursor) });
  return segments;
}
