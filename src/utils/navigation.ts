export type PageKey = 'home' | 'menu' | 'gallery' | 'about' | 'contact';

export interface NavRoute {
  key: PageKey;
  label: string;
  href: string;
  title: string;
}

export const NAV_ROUTES: NavRoute[] = [
  { key: 'home', label: 'Home', href: '/index.html', title: "FOOD O'CLOCK — It's Always Food O'Clock" },
  { key: 'menu', label: 'Menu', href: '/menu.html', title: "Menu & Deals — FOOD O'CLOCK" },
  { key: 'gallery', label: 'Crave Gallery', href: '/gallery.html', title: "Crave Gallery — FOOD O'CLOCK" },
  { key: 'about', label: 'About', href: '/about.html', title: "About Us — FOOD O'CLOCK" },
  { key: 'contact', label: 'Contact', href: '/contact.html', title: "Contact & FAQs — FOOD O'CLOCK" },
];

export function resolvePageFromLocation(): PageKey {
  const path = window.location.pathname.toLowerCase();
  if (path.includes('menu')) return 'menu';
  if (path.includes('gallery')) return 'gallery';
  if (path.includes('about')) return 'about';
  if (path.includes('contact')) return 'contact';
  if (path === '/' || path.includes('index')) return 'home';

  const bodyPage = document.body.dataset.page as PageKey | undefined;
  if (bodyPage && ['home', 'menu', 'gallery', 'about', 'contact'].includes(bodyPage)) {
    return bodyPage;
  }
  return 'home';
}

export function getHrefForPage(page: PageKey): string {
  const found = NAV_ROUTES.find((r) => r.key === page);
  return found ? found.href : '/index.html';
}
