import { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { DashboardView } from './components/dashboard/DashboardView';
import { ParameterCatalog } from './components/parameters/ParameterCatalog';
import { ParameterDetailPage } from './components/parameters/ParameterDetailPage';
import { CorrelationsView } from './components/correlations/CorrelationsView';
import { ReproducibilityView } from './components/reproducibility/ReproducibilityView';

function useHashRoute(): string {
  const [route, setRoute] = useState(() => {
    const hash = window.location.hash.slice(1);
    return hash || '/';
  });

  useEffect(() => {
    const onHashChange = () => {
      setRoute(window.location.hash.slice(1) || '/');
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return route;
}

function Router({ route }: { route: string }) {
  // Match /parameter/:id
  const paramMatch = route.match(/^\/parameter\/(.+)$/);
  if (paramMatch) {
    return <ParameterDetailPage paramId={decodeURIComponent(paramMatch[1])} />;
  }

  switch (route) {
    case '/parameters':
      return <ParameterCatalog />;
    case '/correlations':
      return <CorrelationsView />;
    case '/reproducibility':
      return <ReproducibilityView />;
    default:
      return <DashboardView />;
  }
}

export function App() {
  const route = useHashRoute();

  return (
    <div className="min-h-screen flex flex-col bg-mes-paper">
      <Header currentRoute={route} />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Router route={route} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
