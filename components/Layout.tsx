
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DOMAINS, COLORS } from '../constants';
import { DomainSlug } from '../types';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Header / Logo */}
      <header className="w-full max-w-4xl px-6 pt-12 pb-8 flex flex-col md:flex-row md:items-baseline md:justify-between border-b border-[#D6D6D2] mb-8">
        <Link to="/" className="text-2xl font-serif italic mb-4 md:mb-0 hover:opacity-80 transition-opacity">
          Pandu Ibuku
        </Link>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 font-sans-custom text-[14px] uppercase tracking-wide text-[#5F5F5F]">
          {Object.values(DOMAINS).map((domain) => (
            <Link
              key={domain.slug}
              to={domain.slug === DomainSlug.BERANDA ? '/' : `/domain/${domain.slug}`}
              className={`hover:text-[#1F1F1F] transition-colors ${
                (location.pathname === '/' && domain.slug === DomainSlug.BERANDA) || 
                location.pathname.includes(domain.slug)
                  ? 'text-[#1F1F1F] border-b border-[#1F1F1F]'
                  : ''
              }`}
            >
              {domain.title}
            </Link>
          ))}
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="w-full max-w-4xl px-6 flex-grow pb-24">
        <div className="mx-auto max-w-[72ch]">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-4xl px-6 py-12 border-t border-[#D6D6D2] font-sans-custom text-[13px] text-[#5F5F5F] flex flex-col md:flex-row justify-between items-center gap-4">
        <div>&copy; {new Date().getFullYear()} Pandu Ibuku. Archive of Thought.</div>
        <div className="flex gap-4">
          <a href="mailto:admin@panduibuku.com" className="hover:text-[#1F1F1F]">admin@panduibuku.com</a>
          <a href="mailto:sriyanto@panduibuku.com" className="hover:text-[#1F1F1F]">sriyanto@panduibuku.com</a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
