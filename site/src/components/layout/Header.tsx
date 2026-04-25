import { cn } from '../../ui/utils';
import { StatusPill } from '../../ui/tags';
import { getProvenanceSummary } from '../../data/loader';

const navLinks = [
  { hash: '#/', label: 'Dashboard' },
  { hash: '#/parameters', label: 'Parameters' },
  { hash: '#/correlations', label: 'Correlations' },
  { hash: '#/reproducibility', label: 'Reproducibility' },
  { hash: '#/methodology', label: 'Methodology' },
];

export function Header({ currentRoute }: { currentRoute: string }) {
  const prov = getProvenanceSummary();
  const tier1 = prov.tier1;
  const pillLabel = `Tier-1 ${tier1.pass_count}/${tier1.total_checks} ${tier1.overall_verdict}`;

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <a href="#/" className="flex items-center gap-3 flex-shrink-0">
            <span className="font-serif text-lg font-bold text-mes-text-primary tracking-tight">
              MESS-Parameters
            </span>
            <span className="hidden sm:inline text-[10px] uppercase tracking-wider text-mes-text-muted border border-gray-300 px-2 py-0.5">
              Explorer
            </span>
          </a>
          <div className="flex items-center gap-3">
            <nav className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => {
                const isActive =
                  currentRoute === link.hash.slice(1) ||
                  (link.hash === '#/' && currentRoute === '/');
                return (
                  <a
                    key={link.hash}
                    href={link.hash}
                    className={cn(
                      'px-3 py-2 text-sm transition-colors',
                      isActive
                        ? 'text-mes-text-primary border-b-2 border-mes-bakelite font-medium'
                        : 'text-mes-text-muted hover:text-mes-text-primary'
                    )}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>
            <nav className="md:hidden flex items-center gap-0.5">
              {navLinks.map((link) => {
                const isActive =
                  currentRoute === link.hash.slice(1) ||
                  (link.hash === '#/' && currentRoute === '/');
                return (
                  <a
                    key={link.hash}
                    href={link.hash}
                    className={cn(
                      'px-2 py-1 text-xs transition-colors',
                      isActive
                        ? 'text-mes-text-primary border-b-2 border-mes-bakelite'
                        : 'text-mes-text-muted'
                    )}
                  >
                    {link.label.slice(0, 6)}
                  </a>
                );
              })}
            </nav>
            <StatusPill
              label={pillLabel}
              verdict={tier1.overall_verdict}
              href="#/methodology"
              className="hidden sm:inline-flex"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
