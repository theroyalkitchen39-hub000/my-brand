import React, { useCallback, useEffect, useState } from 'react';
import { BagProvider } from './context/BagContext';
import {
  NAV_ROUTES,
  PageKey,
  getHrefForPage,
  resolvePageFromLocation,
} from './utils/navigation';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { BagDrawer } from './components/BagDrawer';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { GalleryPage } from './pages/GalleryPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

function AppShell() {
  const [currentPage, setCurrentPage] = useState<PageKey>(() =>
    resolvePageFromLocation()
  );
  const [menuCategory, setMenuCategory] = useState<string | undefined>(undefined);

  const navigate = useCallback((page: PageKey, initialCategory?: string) => {
    setCurrentPage(page);
    setMenuCategory(initialCategory);

    const targetHref = getHrefForPage(page);
    if (window.location.pathname !== targetHref) {
      window.history.pushState({ page }, '', targetHref);
    }

    const routeMeta = NAV_ROUTES.find((r) => r.key === page);
    if (routeMeta) {
      document.title = routeMeta.title;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const nextPage = resolvePageFromLocation();
      setCurrentPage(nextPage);
      const routeMeta = NAV_ROUTES.find((r) => r.key === nextPage);
      if (routeMeta) {
        document.title = routeMeta.title;
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--fo-bg)] text-[var(--fo-text)]">
      <LoadingScreen />
      <Navbar currentPage={currentPage} onNavigate={(page) => navigate(page)} />

      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage onNavigate={(page, cat) => navigate(page, cat)} />
        )}
        {currentPage === 'menu' && <MenuPage initialCategory={menuCategory} />}
        {currentPage === 'gallery' && (
          <GalleryPage onNavigate={(page, cat) => navigate(page, cat)} />
        )}
        {currentPage === 'about' && (
          <AboutPage onNavigate={(page) => navigate(page)} />
        )}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      <Footer onNavigate={(page) => navigate(page)} />
      <BagDrawer onNavigate={(page) => navigate(page)} />
    </div>
  );
}

export default function App() {
  return (
    <BagProvider>
      <AppShell />
    </BagProvider>
  );
}
