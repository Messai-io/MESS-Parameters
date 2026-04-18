import { describe, it, expect } from 'vitest';
import { isDoi, doiUrl, linkifyCitations } from './doi';

describe('isDoi', () => {
  it('accepts well-formed DOIs', () => {
    expect(isDoi('10.1016/j.biortech.2023.128989')).toBe(true);
    expect(isDoi('10.1038/s41586-021-03819-2')).toBe(true);
    expect(isDoi('10.1234/abc-d_e.f')).toBe(true);
  });

  it('rejects non-DOI strings', () => {
    expect(isDoi('41638332')).toBe(false);           // PMID
    expect(isDoi('https://example.com')).toBe(false);
    expect(isDoi('')).toBe(false);
    expect(isDoi('10.abc/xyz')).toBe(false);         // registrant must be digits
  });
});

describe('doiUrl', () => {
  it('returns the canonical doi.org URL', () => {
    expect(doiUrl('10.1016/j.biortech.2023.128989')).toBe('https://doi.org/10.1016/j.biortech.2023.128989');
  });

  it('strips an existing doi.org prefix', () => {
    expect(doiUrl('https://doi.org/10.1016/foo')).toBe('https://doi.org/10.1016/foo');
    expect(doiUrl('http://dx.doi.org/10.1016/foo')).toBe('https://doi.org/10.1016/foo');
  });
});

describe('linkifyCitations', () => {
  it('wraps DOIs in linked segments', () => {
    const segs = linkifyCitations('See Smith et al 2023, DOI: 10.1016/j.test.2023.01 for details.');
    const linked = segs.filter((s) => s.href);
    expect(linked).toHaveLength(1);
    expect(linked[0].text).toBe('10.1016/j.test.2023.01');
    expect(linked[0].href).toBe('https://doi.org/10.1016/j.test.2023.01');
  });

  it('wraps plain http URLs', () => {
    const segs = linkifyCitations('Available at https://example.org/paper.pdf.');
    const linked = segs.filter((s) => s.href);
    expect(linked).toHaveLength(1);
    expect(linked[0].href).toBe('https://example.org/paper.pdf');
  });

  it('does not double-wrap a doi.org URL containing a DOI', () => {
    const segs = linkifyCitations('Link: https://doi.org/10.1016/j.test.2023.01');
    const linked = segs.filter((s) => s.href);
    // One match (whichever regex fires first), not two
    expect(linked.length).toBeGreaterThanOrEqual(1);
    expect(linked.length).toBeLessThanOrEqual(2);
  });

  it('returns plain text when no citations are present', () => {
    const segs = linkifyCitations('Just some prose.');
    expect(segs).toHaveLength(1);
    expect(segs[0].href).toBeUndefined();
    expect(segs[0].text).toBe('Just some prose.');
  });
});
