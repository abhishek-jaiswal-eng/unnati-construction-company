import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-bg-primary/90 backdrop-blur-sm border-b border-border">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <Link
          to="/"
          className="font-sans text-sm font-bold tracking-[0.2em] text-text-primary"
        >
          UNNATI
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className="font-sans text-[13px] font-medium text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            aria-label="Search"
            className="text-text-secondary hover:text-text-primary transition-colors"
          >
            <Search size={18} />
          </button>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
