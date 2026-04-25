import { describe, it, expect } from 'vitest';
import { parseReferences, referenceHref, splitReferences } from './citations';

describe('splitReferences', () => {
  it('splits numbered lists', () => {
    const text = `1. Smith et al. 2020. *J. Foo*, 5(2), 1-10.\n2. Jones et al. 2021. *J. Bar*, 6(3), 11-20.`;
    expect(splitReferences(text)).toHaveLength(2);
  });

  it('splits bulleted lists with hyphens', () => {
    const text = `- Smith et al. (2020). Title A.\n- Jones et al. (2021). Title B.`;
    expect(splitReferences(text)).toHaveLength(2);
  });

  it('splits paragraphs separated by blank lines', () => {
    const text = `Smith et al. 2020. Foo.\n\nJones et al. 2021. Bar.`;
    expect(splitReferences(text)).toHaveLength(2);
  });

  it('returns an empty array for empty input', () => {
    expect(splitReferences('')).toEqual([]);
    expect(splitReferences('   ')).toEqual([]);
  });
});

describe('parseReferences', () => {
  it('extracts a DOI when present', () => {
    const text = `1. Smith et al. (2020). A study. *J. Foo*. doi: 10.1016/j.foo.2020.01.001`;
    const refs = parseReferences(text);
    expect(refs).toHaveLength(1);
    expect(refs[0].doi).toBe('10.1016/j.foo.2020.01.001');
  });

  it('falls back to a non-DOI URL', () => {
    const text = `1. Some Report (2019). https://example.org/report.pdf`;
    const refs = parseReferences(text);
    expect(refs[0].doi).toBeNull();
    expect(refs[0].url).toBe('https://example.org/report.pdf');
  });

  it('extracts a quoted title for Scholar fallback', () => {
    const text = `1. Smith et al. (2020). "Bioelectrochemical systems study". J. Foo.`;
    const refs = parseReferences(text);
    expect(refs[0].title).toBe('Bioelectrochemical systems study');
  });

  it('returns an empty array for null/empty input', () => {
    expect(parseReferences(null)).toEqual([]);
    expect(parseReferences('')).toEqual([]);
  });
});

describe('referenceHref', () => {
  it('prefers DOI over URL', () => {
    const href = referenceHref({
      raw: '',
      doi: '10.1016/foo',
      url: 'https://example.org',
      title: null,
    });
    expect(href).toBe('https://doi.org/10.1016/foo');
  });

  it('falls through to URL when no DOI', () => {
    const href = referenceHref({
      raw: '',
      doi: null,
      url: 'https://example.org/paper.pdf',
      title: null,
    });
    expect(href).toBe('https://example.org/paper.pdf');
  });

  it('falls back to a Scholar search keyed off the title', () => {
    const href = referenceHref({
      raw: '',
      doi: null,
      url: null,
      title: 'A title',
    });
    expect(href).toBe('https://scholar.google.com/scholar?q=A%20title');
  });

  it('returns null when nothing actionable is present', () => {
    expect(
      referenceHref({ raw: '', doi: null, url: null, title: null })
    ).toBeNull();
  });
});
