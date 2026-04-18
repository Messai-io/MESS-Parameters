import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { ParameterDetailPage } from './ParameterDetailPage';
import { getAllRichParameters } from '../../data/loader';

describe('ParameterDetailPage', () => {
  it('renders a provenance-rich parameter with the Sources & Distribution section', async () => {
    const rich = getAllRichParameters().find((p) => p.has_provenance === true);
    expect(rich).toBeDefined();
    const slug = rich!.name.toLowerCase().replace(/\s+/g, '_').replace(/[()\/]/g, '').replace(/:/, '');
    render(<ParameterDetailPage paramId={slug} />);
    expect(screen.getByRole('heading', { level: 1, name: rich!.name })).toBeInTheDocument();
    // "Sources & Distribution" section title only appears once provenance resolves
    await waitFor(
      () => {
        expect(screen.getByRole('heading', { level: 2, name: /Sources & Distribution/i })).toBeInTheDocument();
      },
      { timeout: 8000 },
    );
    // ProvenanceBadges label and the explorer filter toggle both mention MES;
    // just confirm we have at least one provenance badge rendered.
    expect(screen.getAllByText(/Verified MES/i).length).toBeGreaterThan(0);
    // The badges include a "Mean confidence" label that's unique to them.
    expect(screen.getByText(/Mean confidence/i)).toBeInTheDocument();
  });

  it('renders a parameter without provenance without errors', () => {
    const rich = getAllRichParameters().find(
      (p) => !p.has_provenance && p.usage_count === 0,
    );
    expect(rich).toBeDefined();
    const slug = rich!.name.toLowerCase().replace(/\s+/g, '_').replace(/[()\/]/g, '').replace(/:/, '');
    render(<ParameterDetailPage paramId={slug} />);
    expect(screen.getByRole('heading', { level: 1, name: rich!.name })).toBeInTheDocument();
    expect(screen.queryByText(/Source Papers/i)).not.toBeInTheDocument();
  });

  it('shows "Parameter Not Found" for a bad id', () => {
    render(<ParameterDetailPage paramId="__definitely-not-real__" />);
    expect(screen.getByRole('heading', { level: 1, name: 'Parameter Not Found' })).toBeInTheDocument();
  });
});
