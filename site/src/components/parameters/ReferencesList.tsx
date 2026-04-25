import { useMemo } from 'react';
import { parseReferences, referenceHref, linkifyCitations } from '../../lib/citations';

interface Props {
  text: string | null | undefined;
}

// Render the citation body. Embedded DOIs and URLs are linkified in place
// so the original citation typography (authors, year, journal) reads as it
// was authored.
function Inline({ text }: { text: string }) {
  const segs = linkifyCitations(text);
  return (
    <>
      {segs.map((seg, i) =>
        seg.href ? (
          <a
            key={i}
            href={seg.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-mes-text-link hover:underline break-words"
          >
            {seg.text}
          </a>
        ) : (
          <span key={i}>{seg.text}</span>
        )
      )}
    </>
  );
}

// Drop markdown emphasis so the rendered citation isn't littered with
// asterisks/underscores. Bolding the journal/title isn't useful here.
function stripMd(s: string): string {
  return s
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/__(.+?)__/g, '$1')
    .replace(/\*(.+?)\*/g, '$1')
    .replace(/_(.+?)_/g, '$1');
}

export function ReferencesList({ text }: Props) {
  const refs = useMemo(() => parseReferences(text), [text]);

  if (refs.length === 0) return null;

  return (
    <ol className="space-y-3 list-none pl-0">
      {refs.map((ref, i) => {
        const href = referenceHref(ref);
        const cleaned = stripMd(ref.raw);
        const action = ref.doi
          ? { label: 'Open paper (DOI)', href: href! }
          : ref.url
          ? { label: 'Open source', href: href! }
          : href
          ? { label: 'Search on Google Scholar', href }
          : null;
        return (
          <li
            key={i}
            className="grid grid-cols-[1.5rem,1fr] gap-2 text-xs text-mes-text-secondary leading-relaxed"
          >
            <span className="font-mono text-mes-text-muted tabular-nums select-none pt-px">
              {i + 1}.
            </span>
            <div className="space-y-1 min-w-0">
              <div className="whitespace-pre-line break-words">
                <Inline text={cleaned} />
              </div>
              {action && (
                <a
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-mes-text-link hover:underline"
                >
                  {action.label}
                  <span aria-hidden>→</span>
                </a>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
