import { cn } from '../../ui/utils';

const navLinks = [
  { hash: '#/', label: 'Dashboard' },
  { hash: '#/parameters', label: 'Parameters' },
  { hash: '#/correlations', label: 'Correlations' },
  { hash: '#/reproducibility', label: 'Reproducibility' },
];

export function Header({ currentRoute }: { currentRoute: string }) {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#/" className="flex items-center gap-3">
            <span className="font-serif text-xl font-bold text-mes-text-primary tracking-tight">
              MESS-Parameters
            </span>
            <span className="text-xs text-mes-text-muted border border-gray-300 px-2 py-0.5">
              Explorer
            </span>
          </a>
          <nav className="hidden sm:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive =
                currentRoute === link.hash.slice(1) ||
                (link.hash === '#/' && currentRoute === '/');
              return (
                <a
                  key={link.hash}
                  href={link.hash}
                  className={cn(
                    'px-4 py-2 text-sm transition-colors',
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
          <nav className="sm:hidden flex items-center gap-0.5">
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
        </div>
      </div>
    </header>
  );
}
